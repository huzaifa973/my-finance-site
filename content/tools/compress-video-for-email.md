---
title: "Compress Video for Email — Free, Under Gmail's 25MB Limit"
description: "Shrink videos to fit Gmail's 25MB or Outlook's 20MB attachment limits right in your browser. Bitrate auto-calc, MP4 H.264 output, batch support. Free and private."
category: video
date: 2026-10-15
draft: false
---

Gmail rejects attachments over 25MB (Outlook caps at 20MB) — and one phone video is usually bigger than both. This tool re-encodes your videos at a bitrate auto-calculated from each clip's length so the attachment fits, one file or a whole batch. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="emvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compress Video for Email</h2>
<p>Fit videos inside Gmail's 25MB or Outlook's 20MB attachment limit — bitrate auto-calculated, MP4 output, batch supported.</p>
</div>
<button type="button" class="theme-toggle" id="emvTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — files never leave your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your videos</p>
<div class="dropzone" id="emvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop videos here</strong>
<span>or click to browse — MP4, WebM, MOV · batch supported</span>
<input type="file" id="emvFile" accept="video/*">
</div>
<ul class="file-list" id="emvList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Attachment target</p>
<div class="settings-panel">
<div class="preset-row" id="emvPresets">
<button type="button" class="preset-chip active" data-mb="25">📧 Gmail — 25 MB</button>
<button type="button" class="preset-chip" data-mb="20">📨 Outlook — 20 MB</button>
<button type="button" class="preset-chip" data-mb="10">🪶 Tiny — 10 MB</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="emvTarget">Custom target: <span class="val" id="emvTargetVal">25 MB</span></label>
<input type="range" id="emvTarget" min="5" max="50" value="25">
<div class="hint">Gmail's attachment limit is 25MB; Outlook's is 20MB. The bitrate is auto-calculated from each video's length.</div>
</div>
<div class="setting">
<label for="emvRes">Output resolution</label>
<select id="emvRes">
<option value="480">480p — safest for 25 MB</option>
<option value="720" selected>720p — balanced</option>
<option value="1080">1080p — short clips only</option>
</select>
<div class="hint">480p looks sharp in an email client and shrinks files fast.</div>
</div>
</div>
<div class="toggle-row" style="margin-top:10px">
<span class="t-label">Keep the audio track</span>
<label class="toggle"><input type="checkbox" id="emvAudio" checked><span class="track"></span></label>
</div>
<div class="hint" style="margin-top:8px">Output is <strong>MP4 (H.264 + AAC)</strong> — the format email clients and phones preview best. Each file's plan (bitrate + resolution) appears in the file list.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="emvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress for Email
</button>
<button type="button" class="btn-pro-outline" id="emvClear" disabled>Clear all</button>
</div>
<p class="hint" id="emvEngine" style="margin-top:8px"></p>
<div class="progress-wrap" id="emvProgWrap">
<div class="progress-bar"><i id="emvProgBar"></i></div>
<div class="progress-text" id="emvProgText">Working…</div>
</div>
<div class="results" id="emvResults">
<p class="result-head">✅ Done — ready to attach</p>
<div class="result-summary" id="emvSummary"></div>
<div class="result-grid" id="emvGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ Honest note: the target is an <strong>estimate</strong>. Encoders don't follow bitrate instructions exactly, so results can land 10–30% off — if a file overshoots, re-run it with a smaller target. If your clip still won't fit, trim it with the Video Trimmer first.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many videos as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('emvShell');
  ToolPro.themeToggle(shell, document.getElementById('emvTheme'));

  /* ---- ffmpeg.wasm engine: same load/run pattern as static/js/video-fx.js ----
     Single-thread core (core-st) — no SharedArrayBuffer needed. The core runs
     _main() only ONCE per instance, so ff.exit() is called after every file and
     the next file rebuilds the engine fast from the cached core files. */
  var CDN_BASES = ['https://cdn.jsdelivr.net/npm/@ffmpeg', 'https://unpkg.com/@ffmpeg'];
  var ffmpeg = null, loading = null, progCb = null;
  var engineEl = document.getElementById('emvEngine');

  function loadScript(url){
    return new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = url;
      s.onload = function(){ res(); };
      s.onerror = function(){ rej(new Error('script load failed')); };
      document.head.appendChild(s);
    });
  }
  function stallGuard(p){
    return Promise.race([p, new Promise(function(_, rej){
      setTimeout(function(){ rej(new Error('engine download stalled')); }, 600000);
    })]);
  }
  function prefetch(url){
    return fetch(url).then(function(res){
      if(!res.ok) throw new Error('HTTP ' + res.status);
      if(!res.body || !res.body.getReader) return res.arrayBuffer();
      var reader = res.body.getReader(), received = 0;
      function pump(){
        return reader.read().then(function(r){
          if(r.done) return null;
          received += r.value.length;
          if(engineEl) engineEl.textContent = '⬇️ Downloading the engine… ' + (received/1048576).toFixed(1) + ' MB so far';
          return pump();
        });
      }
      return pump();
    });
  }
  function tryLoad(base){
    return loadScript(base + '/ffmpeg@0.11.0/dist/ffmpeg.min.js').then(function(){
      return stallGuard(prefetch(base + '/core-st@0.11.1/dist/ffmpeg-core.wasm')).catch(function(){ return null; });
    }).then(function(){
      var f = FFmpeg.createFFmpeg({ log:false, corePath: base + '/core-st@0.11.1/dist/ffmpeg-core.js', mainName: 'main' });
      f.setProgress(function(p){ if(progCb && p.ratio) progCb(p.ratio); });
      return stallGuard(f.load()).then(function(){ return f; });
    });
  }
  function loadEngine(onProg){
    if(onProg) progCb = onProg;
    if(ffmpeg){
      if(ffmpeg.isLoaded()) return Promise.resolve(ffmpeg);
      loading = null; // exited after a previous run — rebuild below
    }
    if(loading) return loading;
    var start = ffmpeg
      ? stallGuard(ffmpeg.load()).then(function(){ return ffmpeg; }) // fast rebuild: core files are cached
      : tryLoad(CDN_BASES[0]).catch(function(){ return tryLoad(CDN_BASES[1]); }).then(function(f){ ffmpeg = f; return f; });
    loading = start.catch(function(e){ loading = null; throw e; });
    return loading;
  }
  // Warm-up: prefetch the engine at page open so the button never waits on the ~9 MB first-time download.
  if(engineEl){
    engineEl.textContent = '⏳ Preparing the video engine in the background — one-time ~9 MB download, then it stays cached.';
    loadEngine().then(function(){
      engineEl.textContent = '✅ Engine ready — processing starts instantly.';
      setTimeout(function(){ engineEl.style.display = 'none'; }, 6000);
    }).catch(function(){
      engineEl.textContent = '⚠️ The video engine could not be downloaded — check your connection, then press the button to retry.';
    });
  }

  var files = []; // {file, row, w, h, dur, probed}
  var listEl = document.getElementById('emvList');
  var btn = document.getElementById('emvBtn');
  var clearBtn = document.getElementById('emvClear');
  var targetR = document.getElementById('emvTarget'), targetV = document.getElementById('emvTargetVal');
  var resSel = document.getElementById('emvRes');
  var audioT = document.getElementById('emvAudio');
  var busy = false;

  ToolPro.bindSlider(targetR, targetV, function(v){ return v + ' MB'; });

  function targetBytes(){ return (+targetR.value) * 1048576; }
  function ext(name){ var m = /\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : 'mp4'; }

  function probeOne(f){
    return new Promise(function(res){
      var v = document.createElement('video');
      v.preload = 'metadata';
      var url = URL.createObjectURL(f);
      v.onloadedmetadata = function(){
        var o = { w: v.videoWidth || 0, h: v.videoHeight || 0, dur: v.duration || 0 };
        URL.revokeObjectURL(url); res(o);
      };
      v.onerror = function(){ URL.revokeObjectURL(url); res({ w: 0, h: 0, dur: 0 }); };
      v.src = url;
    });
  }

  // Resolution + bitrate plan, auto-calculated from the target size and duration.
  function planFor(e){
    var res = +resSel.value, d;
    if(e.w && e.h){
      var ph = Math.min(res, e.h);
      var pw = Math.round(e.w * ph / e.h);
      if(pw % 2) pw += 1; if(ph % 2) ph += 1;
      d = { w: pw, h: ph };
    } else { d = { w: 640, h: 360 }; }
    var kbps = e.dur ? Math.max(80, Math.round(targetBytes() * 8 * 0.95 / e.dur / 1000)) : 0;
    return { dims: d, kbps: kbps };
  }
  function updStatuses(){
    files.forEach(function(e){
      if(!e.probed) return;
      var p = planFor(e);
      e.row.setStatus(e.dur.toFixed(1) + 's → ~' + p.kbps + ' kbps (' + p.dims.w + '×' + p.dims.h + ')', '');
    });
  }
  targetR.addEventListener('input', updStatuses);
  resSel.addEventListener('change', updStatuses);

  document.getElementById('emvPresets').addEventListener('click', function(ev){
    var chip = ev.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#emvPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    targetR.value = chip.dataset.mb;
    targetR.dispatchEvent(new Event('input'));
    updStatuses();
    ToolPro.toast('Target set: ' + chip.dataset.mb + ' MB');
  });

  function refreshButtons(){
    btn.disabled = !files.length || busy;
    clearBtn.disabled = !files.length || busy;
  }

  ToolPro.dropzone(document.getElementById('emvDrop'), {
    multiple: true, accept: 'video/*', maxFiles: 10,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        var entry = { file: f, row: row, probed: false, w: 0, h: 0, dur: 0 };
        files.push(entry);
        row.setStatus('Reading…', 'working');
        probeOne(f).then(function(o){
          entry.w = o.w; entry.h = o.h; entry.dur = o.dur; entry.probed = true;
          updStatuses();
        });
      });
      document.getElementById('emvResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' video' : ' videos') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('emvResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!files.length || busy) return;
    for(var chk = 0; chk < files.length; chk++){
      if(!files[chk].probed || !files[chk].dur){ ToolPro.toast('Video metadata not ready yet — wait a second', 'err'); return; }
    }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('emvProgWrap');
    var progBar = document.getElementById('emvProgBar');
    var progText = document.getElementById('emvProgText');
    var grid = document.getElementById('emvGrid');
    var resBox = document.getElementById('emvResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var tb = targetBytes(), okCount = 0, n = files.length;
    var keepAudio = audioT.checked;
    prog(4, 'Loading the video engine (first run only)…');
    try{
      for(var i = 0; i < n; i++){
        var e = files[i];
        var p = planFor(e);
        var k = Math.max(80, p.kbps);
        e.row.setStatus('Compressing…', 'working');
        var ff = await loadEngine(function(r){
          var base = (i / n) * 100;
          prog(base + (r * 100 / n), 'Compressing ' + (i + 1) + ' of ' + n + ' — ' + Math.round(r * 100) + '%');
        });
        var inName = 'in.' + ext(e.file.name);
        ff.FS('writeFile', inName, await FFmpeg.fetchFile(e.file));
        var args = ['-i', inName, '-vf', 'scale=' + p.dims.w + ':-2',
          '-c:v', 'libx264', '-preset', 'veryfast',
          '-b:v', k + 'k', '-maxrate', Math.round(k * 1.5) + 'k', '-bufsize', Math.round(k * 2) + 'k'];
        if(keepAudio){ args.push('-c:a', 'aac', '-b:a', '128k'); } else { args.push('-an'); }
        args.push('out.mp4');
        await ff.run.apply(ff, args);
        var data = ff.FS('readFile', 'out.mp4');
        var blob = new Blob([data.buffer], { type: 'video/mp4' });
        try{ ff.FS('unlink', inName); }catch(x){}
        try{ ff.FS('unlink', 'out.mp4'); }catch(x){}
        // Single-thread core: _main() runs only once per instance — exit so the
        // next file rebuilds a fresh engine from the cached core files.
        try{ ff.exit(); }catch(x){}
        var url = URL.createObjectURL(blob);
        var fits = blob.size <= tb;
        if(fits) okCount++;
        var card = document.createElement('div');
        card.className = 'result-card';
        var baseName = (e.file.name.replace(/\.[^.]+$/, '') || 'video') + '-email.mp4';
        card.innerHTML =
          '<video class="r-preview" controls playsinline muted style="background:#000"></video>' +
          '<div class="r-name"></div>' +
          '<div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-preview').src = url;
        card.querySelector('.r-name').textContent = baseName;
        card.querySelector('.r-name').title = baseName;
        card.querySelector('.r-stats').innerHTML =
          ToolPro.fmtBytes(e.file.size) + ' → <b>' + ToolPro.fmtBytes(blob.size) + '</b><br>' +
          (fits ? '✅ <b>fits the ' + (+targetR.value) + ' MB attachment limit</b>' : '⚠️ ' + ToolPro.fmtBytes(blob.size - tb) + ' over — lower the target or resolution');
        (function(u, nm){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
        })(url, baseName);
        grid.appendChild(card);
        e.row.setStatus(fits ? 'Done — fits' : 'Done — over target', fits ? 'done' : '');
        prog(((i + 1) / n) * 100, 'Done ' + (i + 1) + ' of ' + n);
      }
    }catch(err){
      progText.textContent = 'Something went wrong — try a shorter or smaller clip.';
      ToolPro.toast('Compression failed', 'err');
    }
    document.getElementById('emvSummary').textContent =
      '🎉 ' + okCount + ' of ' + n + (n === 1 ? ' video' : ' videos') +
      ' under ' + (+targetR.value) + ' MB — attach away.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Batch complete', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in one video or a whole batch. Each file is measured for length and resolution, and its encoding plan (bitrate + resolution) appears in the file list.
- **Step 2** — Pick the **Gmail 25MB** or **Outlook 20MB** preset, or drag the custom slider from 5–50MB. The bitrate is auto-calculated from target ÷ duration so the file lands under the limit.
- **Step 3** — Hit **Compress for Email**. Each video is re-encoded to MP4 (H.264 + AAC) and stamped with a ✅ or ⚠️ against the attachment limit.
- **Private by design** — everything runs locally in your browser; your files never leave your browser.

## Everyday uses

- **Job applications** — attach a video resume or portfolio clip without bouncing the email.
- **Client demos** — send product walkthroughs that land in the inbox, not a Drive link.
- **Family videos** — email vacation clips to relatives who never open cloud links.
- **School projects** — submit video assignments under the portal's file cap.
- **Real estate** — attach walkthrough clips to listing emails without resizing in an editor.
