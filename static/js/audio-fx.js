/* DollarWise shared FX engine — AUDIO effects (ffmpeg.wasm 0.11, lazy-loaded).
   Usage: AudioFX.init({ prefix:'cv', fxName:'bass-boosted',
     buildArgs: function(ctx){ return ['-af','bass=g=10','-codec:a','libmp3lame','-b:a','192k','out.mp3']; },
     outExt:'mp3' })
   Optional: cfg.split(ctx) -> [{label, args}] for multi-output tools;
   cfg.onDuration(sec) called when the input file's duration is known.
   Shell ids follow the pro tool pattern with cfg.prefix. */
(function () {
  var CDN_BASES = ['https://cdn.jsdelivr.net/npm/@ffmpeg', 'https://unpkg.com/@ffmpeg'];
  var ffmpeg = null, loading = null, progressCb = null;

  function loadScript(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = url;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('script load failed')); };
      document.head.appendChild(s);
    });
  }

  function tryLoad(base) {
    return loadScript(base + '/ffmpeg@0.11.0/dist/ffmpeg.min.js').then(function () {
      var f = FFmpeg.createFFmpeg({ log: false, corePath: base + '/core-st@0.11.1/dist/ffmpeg-core.js' });
      f.setProgress(function (p) { if (progressCb && p.ratio) progressCb(p.ratio); });
      var timeout = new Promise(function (resolve, reject) {
        setTimeout(function () { reject(new Error('engine load timed out')); }, 120000);
      });
      return Promise.race([f.load(), timeout]).then(function () { return f; });
    });
  }

  function loadFFmpeg(onProgress) {
    if (onProgress) progressCb = onProgress;
    if (ffmpeg) return Promise.resolve(ffmpeg);
    if (loading) return loading;
    loading = tryLoad(CDN_BASES[0]).catch(function () { return tryLoad(CDN_BASES[1]); })
      .then(function (f) { ffmpeg = f; return f; })
      .catch(function (e) { loading = null; throw e; });
    return loading;
  }

  function fmtSize(b) {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  }

  function init(cfg) {
    var P = cfg.prefix || 'cv';
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var drop = document.getElementById(P + 'Drop');
    var fileInput = document.getElementById(P + 'File');
    var listEl = document.getElementById(P + 'List');
    var btn = document.getElementById(P + 'Btn');
    var clearBtn = document.getElementById(P + 'Clear');
    var progWrap = document.getElementById(P + 'ProgWrap');
    var progBar = document.getElementById(P + 'ProgBar');
    var progText = document.getElementById(P + 'ProgText');
    var results = document.getElementById(P + 'Results');
    var summary = document.getElementById(P + 'Summary');
    var grid = document.getElementById(P + 'Grid');
    var probe = document.getElementById(P + 'Probe');
    var file = null, duration = 0, busy = false;

    function ext(name) { var m = /\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : 'mp3'; }

    function renderList() {
      listEl.innerHTML = '';
      if (!file) return;
      var li = document.createElement('li');
      li.textContent = file.name + ' — ' + fmtSize(file.size) + (duration ? ' — ' + duration.toFixed(1) + 's' : '');
      listEl.appendChild(li);
    }

    function setFile(f) {
      file = f; duration = 0;
      btn.disabled = !f; clearBtn.disabled = !f;
      renderList();
      if (f && probe) {
        probe.src = URL.createObjectURL(f);
        probe.onloadedmetadata = function () {
          duration = probe.duration || 0;
          renderList();
          if (cfg.onDuration) cfg.onDuration(duration);
        };
      }
    }

    drop.addEventListener('click', function () { fileInput.click(); });
    drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
    drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
    drop.addEventListener('drop', function (e) {
      e.preventDefault(); drop.classList.remove('drag');
      if (e.dataTransfer.files.length) setFile(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', function () { if (fileInput.files.length) setFile(fileInput.files[0]); });
    clearBtn.addEventListener('click', function () {
      setFile(null); fileInput.value = '';
      results.classList.remove('show'); grid.innerHTML = '';
    });

    function showProgress(pct, text) {
      progWrap.classList.add('show');
      progBar.style.width = pct + '%';
      progText.textContent = text;
    }

    btn.addEventListener('click', async function () {
      if (!file || busy) return;
      busy = true; btn.disabled = true;
      results.classList.remove('show'); grid.innerHTML = '';
      try {
        showProgress(5, 'Loading the audio engine (first run only)…');
        var ff = await loadFFmpeg(function (r) { showProgress(10 + Math.round(r * 80), 'Processing… ' + Math.round(10 + r * 80) + '%'); });
        var inName = 'in.' + ext(file.name);
        ff.FS('writeFile', inName, await FFmpeg.fetchFile(file));
        var ctx = { duration: duration, ext: ext(file.name), fileName: file.name, input: inName };
        var jobs;
        if (cfg.split) {
          jobs = cfg.split(ctx).map(function (j) { return { label: j.label, args: j.args }; });
        } else {
          jobs = [{ label: null, args: cfg.buildArgs(ctx) }];
        }
        var outs = [];
        for (var i = 0; i < jobs.length; i++) {
          showProgress(10 + Math.round((i / jobs.length) * 85), jobs.length > 1 ? 'Processing part ' + (i + 1) + ' of ' + jobs.length + '…' : 'Processing…');
          var args = jobs[i].args.slice();
          var outName = args[args.length - 1];
          await ff.run.apply(ff, args);
          var data = ff.FS('readFile', outName);
          var base = file.name.replace(/\.[^.]+$/, '');
          var dlName = base + '-' + cfg.fxName + (jobs[i].label ? '-' + jobs[i].label : '') + '.' + outName.split('.').pop();
          var MIMES = { mp3: 'audio/mpeg', wav: 'audio/wav', ogg: 'audio/ogg', m4a: 'audio/mp4', m4r: 'audio/mp4', flac: 'audio/flac', aac: 'audio/aac' };
          outs.push({ name: dlName, blob: new Blob([data.buffer], { type: MIMES[outName.split('.').pop().toLowerCase()] || 'audio/mpeg' }) });
          try { ff.FS('unlink', outName); } catch (e) {}
        }
        try { ff.FS('unlink', inName); } catch (e) {}
        showProgress(100, 'Done');
        summary.textContent = outs.length + ' file' + (outs.length > 1 ? 's' : '') + ' ready — ' + outs.reduce(function (a, o) { return a + o.blob.size; }, 0).toLocaleString() + ' bytes total.';
        outs.forEach(function (o) {
          var url = URL.createObjectURL(o.blob);
          var card = document.createElement('div');
          card.className = 'result-card';
          var nm = document.createElement('div'); nm.className = 'result-name'; nm.textContent = o.name + ' (' + fmtSize(o.blob.size) + ')';
          var au = document.createElement('audio'); au.controls = true; au.src = url; au.style.width = '100%';
          var a = document.createElement('a');
          a.className = 'btn-pro'; a.href = url; a.download = o.name; a.textContent = 'Download';
          card.appendChild(nm); card.appendChild(au); card.appendChild(a);
          grid.appendChild(card);
        });
        results.classList.add('show');
        ToolPro.toast('Done — your file is ready', 'ok');
      } catch (e) {
        progText.textContent = 'Something went wrong processing that file. Try a shorter or smaller file.';
        ToolPro.toast('Processing failed', 'err');
      }
      busy = false; btn.disabled = false;
    });

    // Warm-up: start downloading the engine the moment the page opens, so
    // pressing the button never waits on the ~25 MB first-time download.
    var engineStatus = document.createElement('p');
    engineStatus.className = 'hint';
    var stepEl = btn.closest('.tool-step');
    if (stepEl) stepEl.appendChild(engineStatus);
    function warmUp() {
      engineStatus.style.display = '';
      engineStatus.textContent = '⏳ Preparing the audio engine in the background — one-time ~25 MB download, then it stays cached and processing starts instantly.';
      loadFFmpeg().then(function () {
        engineStatus.textContent = '✅ Engine ready — processing starts instantly.';
        setTimeout(function () { engineStatus.style.display = 'none'; }, 6000);
      }).catch(function () {
        engineStatus.innerHTML = '⚠️ The audio engine could not be downloaded. <a href="#" id="' + P + 'EngineRetry">Tap to retry</a>';
        var retry = document.getElementById(P + 'EngineRetry');
        if (retry) retry.addEventListener('click', function (e) { e.preventDefault(); warmUp(); });
      });
    }
    warmUp();
  }

  window.AudioFX = { init: init };
})();
