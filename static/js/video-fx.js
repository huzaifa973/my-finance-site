/* DollarWise shared FX engine — VIDEO tools (ffmpeg.wasm 0.11, lazy-loaded).
   Page markup: primary file input #<p>File (+ dropzone #<p>Drop, list #<p>List),
   optional second input #<p>File2 (audio/image), optional multi input #<p>Files.
   Usage: VideoFX.init({ prefix:'cv', fxName:'muted',
     buildArgs: function(ctx){ return ['-i', ctx.main.fsName, '-c:v','copy','-an','out.mp4']; } })
   ctx: { main:{fsName,ext,name}, second:{...}|null, list:[{fsName,ext,name}], duration }
   The LAST element of the returned args must be the output filename. */
(function () {
  var FF_URL = 'https://unpkg.com/@ffmpeg/ffmpeg@0.11.0/dist/ffmpeg.min.js';
  var CORE_URL = 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js';
  var ffmpeg = null, loading = null;

  function loadFFmpeg(onProgress) {
    if (ffmpeg) return Promise.resolve(ffmpeg);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = FF_URL;
      s.onload = function () {
        try {
          var f = FFmpeg.createFFmpeg({ log: false, corePath: CORE_URL });
          f.setProgress(function (p) { if (onProgress && p.ratio) onProgress(p.ratio); });
          f.load().then(function () { ffmpeg = f; resolve(f); }, function (e) { reject(e); });
        } catch (e) { reject(e); }
      };
      s.onerror = function () { reject(new Error('engine load failed')); };
      document.head.appendChild(s);
    });
    return loading;
  }

  function fmtSize(b) {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
    return (b / 1048576).toFixed(2) + ' MB';
  }
  function ext(name) { var m = /\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : 'mp4'; }

  function init(cfg) {
    var P = cfg.prefix || 'cv';
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var drop = document.getElementById(P + 'Drop');
    var fileInput = document.getElementById(P + 'File');
    var file2Input = document.getElementById(P + 'File2');
    var filesInput = document.getElementById(P + 'Files');
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
    var main = null, second = null, list = [], duration = 0, busy = false;

    function ready() {
      if (cfg.multi) return list.length >= (cfg.minFiles || 2);
      if (cfg.needsSecond) return !!main && !!second;
      return !!main;
    }
    function renderList() {
      listEl.innerHTML = '';
      var items = cfg.multi ? list : (main ? [main] : []);
      if (second) items = items.concat([second]);
      items.forEach(function (f) {
        var li = document.createElement('li');
        li.textContent = f.name + ' — ' + fmtSize(f.size);
        listEl.appendChild(li);
      });
      btn.disabled = !ready(); clearBtn.disabled = !(main || second || list.length);
    }
    function probeMain(f) {
      if (probe && f) {
        probe.src = URL.createObjectURL(f);
        probe.onloadedmetadata = function () {
          duration = probe.duration || 0;
          if (cfg.onDuration) cfg.onDuration(duration, probe.videoWidth || 0, probe.videoHeight || 0);
        };
      }
    }
    if (drop && fileInput) {
      drop.addEventListener('click', function () { (cfg.multi ? filesInput : fileInput).click(); });
      drop.addEventListener('dragover', function (e) { e.preventDefault(); drop.classList.add('drag'); });
      drop.addEventListener('dragleave', function () { drop.classList.remove('drag'); });
      drop.addEventListener('drop', function (e) {
        e.preventDefault(); drop.classList.remove('drag');
        if (!e.dataTransfer.files.length) return;
        if (cfg.multi) { list = Array.prototype.slice.call(e.dataTransfer.files); }
        else { main = e.dataTransfer.files[0]; probeMain(main); }
        renderList();
      });
    }
    if (fileInput) fileInput.addEventListener('change', function () {
      if (fileInput.files.length) { main = fileInput.files[0]; probeMain(main); renderList(); }
    });
    if (filesInput) filesInput.addEventListener('change', function () {
      list = Array.prototype.slice.call(filesInput.files); renderList();
    });
    if (file2Input) file2Input.addEventListener('change', function () {
      if (file2Input.files.length) { second = file2Input.files[0]; renderList(); }
    });
    if (clearBtn) clearBtn.addEventListener('click', function () {
      main = null; second = null; list = [];
      if (fileInput) fileInput.value = '';
      if (file2Input) file2Input.value = '';
      if (filesInput) filesInput.value = '';
      results.classList.remove('show'); grid.innerHTML = '';
      renderList();
    });

    function showProgress(pct, text) {
      progWrap.classList.add('show');
      progBar.style.width = pct + '%';
      progText.textContent = text;
    }

    btn.addEventListener('click', async function () {
      if (!ready() || busy) return;
      busy = true; btn.disabled = true;
      results.classList.remove('show'); grid.innerHTML = '';
      try {
        showProgress(5, 'Loading the video engine (first run only)…');
        var ff = await loadFFmpeg(function (r) { showProgress(10 + Math.round(r * 80), 'Processing… ' + Math.round(10 + r * 80) + '%'); });
        var ctx = { duration: duration, main: null, second: null, list: [] };
        var written = [];
        async function put(f, fsName) {
          ff.FS('writeFile', fsName, await FFmpeg.fetchFile(f));
          written.push(fsName);
          return { fsName: fsName, ext: ext(f.name), name: f.name };
        }
        if (cfg.multi) {
          for (var i = 0; i < list.length; i++) ctx.list.push(await put(list[i], 'v' + i + '.' + ext(list[i].name)));
        } else if (main) {
          ctx.main = await put(main, 'main.' + ext(main.name));
          if (second) ctx.second = await put(second, 'second.' + ext(second.name));
        }
        var args = cfg.buildArgs(ctx).slice();
        var outName = args[args.length - 1];
        await ff.run.apply(ff, args);
        var data = ff.FS('readFile', outName);
        var base = (cfg.multi ? 'joined-video' : main.name.replace(/\.[^.]+$/, ''));
        var dlName = base + '-' + cfg.fxName + '.' + outName.split('.').pop();
        var blob = new Blob([data.buffer], { type: 'video/mp4' });
        var url = URL.createObjectURL(blob);
        written.forEach(function (n) { try { ff.FS('unlink', n); } catch (e) {} });
        try { ff.FS('unlink', outName); } catch (e) {}
        showProgress(100, 'Done');
        summary.textContent = dlName + ' — ' + fmtSize(blob.size) + ', ready to download.';
        var card = document.createElement('div');
        card.className = 'result-card';
        var vd = document.createElement('video');
        vd.controls = true; vd.src = url; vd.style.width = '100%';
        var a = document.createElement('a');
        a.className = 'btn-pro'; a.href = url; a.download = dlName; a.textContent = 'Download video';
        card.appendChild(vd); card.appendChild(a);
        grid.appendChild(card);
        results.classList.add('show');
        ToolPro.toast('Done — your video is ready', 'ok');
      } catch (e) {
        progText.textContent = 'Something went wrong processing that video. Try a shorter or smaller clip.';
        ToolPro.toast('Processing failed', 'err');
      }
      busy = false; btn.disabled = !ready();
    });

    renderList();
  }

  window.VideoFX = { init: init };
})();
