/* DollarWise shared converter engine — AUDIO pairs (ffmpeg.wasm, lazy-loaded).
   Usage: ConvAudio.init({ prefix:'cv', from:'mp3', to:'wav' })
   Page markup follows the pro tool shell with ids prefixed by cfg.prefix. */
(function(){
  var CDN_BASES = ['https://cdn.jsdelivr.net/npm/@ffmpeg', 'https://unpkg.com/@ffmpeg'];
  var MIME = { mp3:'audio/mpeg', wav:'audio/wav', m4a:'audio/mp4', ogg:'audio/ogg',
               flac:'audio/flac', opus:'audio/opus', aiff:'audio/aiff', webm:'audio/webm' };
  var CODEC = {
    mp3:  function(br){ return ['-codec:a','libmp3lame','-b:a', br+'k']; },
    m4a:  function(br){ return ['-codec:a','aac','-b:a', br+'k']; },
    ogg:  function(br){ return ['-codec:a','libvorbis','-b:a', br+'k']; },
    opus: function(br){ return ['-codec:a','libopus','-b:a', br+'k']; },
    webm: function(br){ return ['-codec:a','libopus','-b:a', br+'k']; },
    wav:  function(){ return ['-codec:a','pcm_s16le']; },
    flac: function(){ return ['-codec:a','flac']; },
    aiff: function(){ return ['-codec:a','pcm_s16be']; }
  };
  var ffmpeg = null, loading = null, progressCb = null;

  function loadScript(url){
    return new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = url;
      s.onload = function(){ resolve(); };
      s.onerror = function(){ reject(new Error('script load failed')); };
      document.head.appendChild(s);
    });
  }

  var statusCb = null;
  function reportStatus(t){ if(statusCb){ try{ statusCb(t); }catch(e){} } }

  // Download the engine's big wasm file into the browser cache at page open.
  // The CDN serves it brotli-compressed (~8.4 MB on the wire) with immutable
  // cache headers, so the engine's own fetch right after completes instantly.
  // Real progress in MB is reported while it downloads; no tight timeout —
  // slow connections get the time they need (10-minute stall guard only).
  function prefetch(url){
    return fetch(url).then(function(res){
      if(!res.ok) throw new Error('HTTP ' + res.status);
      if(!res.body || !res.body.getReader) return res.arrayBuffer();
      var total = parseInt(res.headers.get('content-length') || '0', 10);
      var reader = res.body.getReader();
      var received = 0;
      function pump(){
        return reader.read().then(function(r){
          if(r.done) return null;
          received += r.value.length;
          if(total > 0) reportStatus('\u2b07\ufe0f Downloading the engine\u2026 ' + (received/1048576).toFixed(1) + ' / ' + (total/1048576).toFixed(1) + ' MB');
          else reportStatus('\u2b07\ufe0f Downloading the engine\u2026 ' + (received/1048576).toFixed(1) + ' MB so far');
          return pump();
        });
      }
      return pump();
    });
  }
  function stallGuard(promise){
    return Promise.race([promise, new Promise(function(resolve, reject){
      setTimeout(function(){ reject(new Error('engine download stalled')); }, 600000);
    })]);
  }

  function tryLoad(base){
    return loadScript(base + '/ffmpeg@0.11.0/dist/ffmpeg.min.js').then(function(){
      return stallGuard(prefetch(base + '/core-st@0.11.1/dist/ffmpeg-core.wasm')).catch(function(){ return null; });
    }).then(function(){
      var f = FFmpeg.createFFmpeg({ log:false, corePath: base + '/core-st@0.11.1/dist/ffmpeg-core.js' });
      f.setProgress(function(p){ if(progressCb && p.ratio) progressCb(p.ratio); });
      return stallGuard(f.load()).then(function(){ return f; });
    });
  }


  function init(cfg){
    var P = cfg.prefix;
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var files = [];
    var listEl = document.getElementById(P + 'List');
    var btn = document.getElementById(P + 'Btn');
    var clearBtn = document.getElementById(P + 'Clear');
    var brSel = document.getElementById(P + 'Bitrate');
    var rateSel = document.getElementById(P + 'Rate');
    var chSel = document.getElementById(P + 'Ch');
    var presets = document.getElementById(P + 'Presets');

    if(presets){
      presets.addEventListener('click', function(e){
        var chip = e.target.closest('.preset-chip'); if(!chip) return;
        presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
        if(brSel && chip.dataset.br) brSel.value = chip.dataset.br;
        if(rateSel && chip.dataset.rate) rateSel.value = chip.dataset.rate;
        ToolPro.toast('Preset applied: ' + chip.textContent.trim());
      });
    }

    function refresh(){
      var n = files.length;
      btn.disabled = !n; clearBtn.disabled = !n;
      btn.lastChild.textContent = ' Convert ' + (n ? n + (n === 1 ? ' File' : ' Files') : 'Files');
    }

    ToolPro.dropzone(document.getElementById(P + 'Drop'), {
      multiple: true, maxFiles: 10,
      onFiles: function(arr){
        arr.forEach(function(f){
          if(files.some(function(x){ return x.file === f; })) return;
          var row = ToolPro.fileRow(listEl, f, function(dead){
            files = files.filter(function(x){ return x.file !== dead; });
            refresh();
          });
          files.push({ file: f, row: row });
        });
        document.getElementById(P + 'Results').classList.remove('show');
        refresh();
        ToolPro.toast(arr.length + (arr.length === 1 ? ' file' : ' files') + ' added', 'ok');
      }
    });

    clearBtn.addEventListener('click', function(){
      files = []; listEl.innerHTML = '';
      document.getElementById(P + 'Results').classList.remove('show');
      refresh();
    });

    btn.addEventListener('click', async function(){
      if(!files.length) return;
      var progWrap = document.getElementById(P + 'ProgWrap');
      var progBar = document.getElementById(P + 'ProgBar');
      var progText = document.getElementById(P + 'ProgText');
      var grid = document.getElementById(P + 'Grid');
      var resBox = document.getElementById(P + 'Results');
      var summary = document.getElementById(P + 'Summary');
      btn.disabled = true;
      progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
      progText.textContent = 'Loading the conversion engine (first use downloads ~25 MB, then it is cached)…';
      progBar.style.width = '5%';
      var ff;
      try {
        ff = await loadFFmpeg(function(r){ progBar.style.width = Math.round(10 + r * 80) + '%'; });
      } catch(e){
        progWrap.classList.remove('show'); btn.disabled = false;
        ToolPro.toast('Could not load the conversion engine — check your connection and try again.', 'err');
        return;
      }
      var br = brSel ? parseInt(brSel.value, 10) : 192;
      var done = 0, okCount = 0;
      for(var i = 0; i < files.length; i++){
        var entry = files[i];
        entry.row.setStatus('Converting…', 'working');
        progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + ': ' + entry.file.name;
        try {
          var inName = 'in_' + i + '.' + cfg.from;
          var outName = 'out_' + i + '.' + cfg.to;
          ff.FS('writeFile', inName, await FFmpeg.fetchFile(entry.file));
          var args = ['-i', inName, '-vn'].concat(CODEC[cfg.to](br));
          if(rateSel && rateSel.value !== '0') args = args.concat(['-ar', rateSel.value]);
          if(chSel && chSel.value !== '0') args = args.concat(['-ac', chSel.value]);
          args.push(outName);
          await ff.run.apply(null, args);
          var data = ff.FS('readFile', outName);
          var blob = new Blob([data.buffer], { type: MIME[cfg.to] || 'application/octet-stream' });
          var url = URL.createObjectURL(blob);
          var base = entry.file.name.replace(/\.[^.]+$/, '');
          var card = document.createElement('div');
          card.className = 'result-card';
          card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>' +
            '<audio controls style="width:100%"></audio>' +
            '<button type="button" class="btn-pro">⬇ Download</button>';
          card.querySelector('.r-name').textContent = base + '.' + cfg.to;
          card.querySelector('.r-name').title = base + '.' + cfg.to;
          card.querySelector('.r-stats').innerHTML =
            ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(blob.size) + '</b>';
          card.querySelector('audio').src = url;
          (function(u, name){
            card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, name); });
          })(url, base + '.' + cfg.to);
          grid.appendChild(card);
          entry.row.setStatus('Done', 'done');
          okCount++;
          try { ff.FS('unlink', inName); ff.FS('unlink', outName); } catch(e){}
        } catch(e){
          entry.row.setStatus('Failed', '');
        }
        done++;
        progBar.style.width = Math.round(done / files.length * 100) + '%';
      }
      summary.textContent = '🎉 ' + okCount + ' of ' + files.length + ' converted to ' +
        cfg.to.toUpperCase() + ' — everything was processed privately in your browser.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior:'smooth', block:'nearest' });
      btn.disabled = false;
      ToolPro.toast('Conversion complete', 'ok');
    });

    // Warm-up: start downloading the engine the moment the page opens, so
    // pressing Convert never waits on the ~25 MB first-time download.
    var engineStatus = document.createElement('p');
    engineStatus.className = 'hint';
    statusCb = function(t){ engineStatus.textContent = t; };
    var stepEl = btn.closest('.tool-step');
    if(stepEl) stepEl.appendChild(engineStatus);
    function warmUp(){
      engineStatus.style.display = '';
      engineStatus.textContent = '⏳ Preparing the conversion engine in the background — one-time ~9 MB download, then it stays cached and conversions start instantly.';
      loadFFmpeg().then(function(){
        engineStatus.textContent = '✅ Engine ready — conversions start instantly.';
        setTimeout(function(){ engineStatus.style.display = 'none'; }, 6000);
      }).catch(function(err){
        engineStatus.innerHTML = '⚠️ The conversion engine could not be downloaded. (' + (err && err.message ? err.message : 'load error') + '). <a href="#" id="' + P + 'EngineRetry">Tap to retry</a>';
        var retry = document.getElementById(P + 'EngineRetry');
        if(retry) retry.addEventListener('click', function(e){ e.preventDefault(); warmUp(); });
      });
    }
    warmUp();

    refresh();
  }

  window.ConvAudio = { init: init };
})();
