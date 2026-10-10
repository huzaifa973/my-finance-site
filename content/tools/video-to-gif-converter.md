---
title: "Free Video to GIF Converter — Turn Clips into GIFs Online"
description: "Turn any video clip into a GIF right in your browser. Choose size, frame rate and clip length with live preview — free forever, no sign-up, files never leave your device."
category: video
date: 2026-10-10
draft: false
---

Turn a short video clip into a GIF you can share anywhere — group chats, Reddit, forums, blog posts. Pick the exact few seconds you want, set the size and frame rate, and export a smooth GIF. Everything runs locally in your browser, so nothing is uploaded.

<div class="tool-shell" id="gifShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm5 3h2v3H8v1h3v3H8v1H6V9h3V7zm5 1h5v2h-3v1h2v2h-2v1h3v2h-5V8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video to GIF Converter</h2>
<p>Turn short clips into share-ready GIFs — size, speed &amp; frame rate are all in your control.</p>
</div>
<button type="button" class="theme-toggle" id="gifTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your video</p>
<div class="dropzone" id="gifDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV · works best with short clips</span>
<input type="file" id="gifFile" accept="video/*">
</div>
<ul class="file-list" id="gifList"></ul>
<div class="tool-input" id="gifPreviewWrap" style="display:none;margin-top:12px">
<video id="gifPreview" controls playsinline muted style="width:100%;max-height:320px;background:#000;border-radius:10px"></video>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> GIF settings</p>
<div class="settings-panel">
<div class="preset-row" id="gifPresets">
<button type="button" class="preset-chip active" data-w="240" data-f="10">💬 Chat — tiny &amp; fast</button>
<button type="button" class="preset-chip" data-w="320" data-f="12">🌐 Social — balanced</button>
<button type="button" class="preset-chip" data-w="480" data-f="15">🎬 Smooth — larger</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="gifStart">Start at: <span class="val" id="gifStartVal">0.0s</span></label>
<input type="range" id="gifStart" min="0" max="60" step="0.1" value="0">
<div class="hint">Where in the video your GIF begins.</div>
</div>
<div class="setting">
<label for="gifLen">Length: <span class="val" id="gifLenVal">3s</span></label>
<input type="range" id="gifLen" min="1" max="10" step="0.5" value="3">
<div class="hint">GIFs are capped at 10 seconds — longer clips make enormous files.</div>
</div>
<div class="setting">
<label for="gifWidth">GIF width: <span class="val" id="gifWidthVal">240px</span></label>
<input type="range" id="gifWidth" min="120" max="640" step="20" value="240">
<div class="hint">Smaller width = smaller file. 240px is perfect for chats.</div>
</div>
<div class="setting">
<label for="gifFps">Frame rate: <span class="val" id="gifFpsVal">10 fps</span></label>
<input type="range" id="gifFps" min="5" max="15" step="1" value="10">
<div class="hint">10 fps looks smooth for GIFs; higher fps grows the file fast.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Create &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gifBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Create GIF
</button>
<button type="button" class="btn-pro-outline" id="gifClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="gifProgWrap">
<div class="progress-bar"><i id="gifProgBar"></i></div>
<div class="progress-text" id="gifProgText">Working…</div>
</div>
<div class="results" id="gifResults">
<p class="result-head">✅ Done — your GIF</p>
<div class="result-summary" id="gifSummary"></div>
<div class="result-grid" id="gifGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Your video is converted entirely on your device — make as many GIFs as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('gifShell');
  ToolPro.themeToggle(shell, document.getElementById('gifTheme'));

  var file = null, fileRow = null, videoUrl = null;
  var listEl = document.getElementById('gifList');
  var btn = document.getElementById('gifBtn');
  var clearBtn = document.getElementById('gifClear');
  var previewWrap = document.getElementById('gifPreviewWrap');
  var preview = document.getElementById('gifPreview');
  var startR = document.getElementById('gifStart'), startV = document.getElementById('gifStartVal');
  var lenR = document.getElementById('gifLen'), lenV = document.getElementById('gifLenVal');
  var wR = document.getElementById('gifWidth'), wV = document.getElementById('gifWidthVal');
  var fpsR = document.getElementById('gifFps'), fpsV = document.getElementById('gifFpsVal');
  var presets = document.getElementById('gifPresets');
  var busy = false;

  ToolPro.bindSlider(startR, startV, function(v){ return (+v).toFixed(1) + 's'; });
  ToolPro.bindSlider(lenR, lenV, function(v){ return v + 's'; });
  ToolPro.bindSlider(wR, wV, function(v){ return v + 'px'; });
  ToolPro.bindSlider(fpsR, fpsV, function(v){ return v + ' fps'; });

  startR.addEventListener('input', function(){
    if(preview.duration && !isNaN(preview.duration)) preview.currentTime = Math.min(+startR.value, preview.duration - 0.1);
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    wR.value = chip.dataset.w; wR.dispatchEvent(new Event('input'));
    fpsR.value = chip.dataset.f; fpsR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file || busy;
    clearBtn.disabled = !file || busy;
  }

  ToolPro.dropzone(document.getElementById('gifDrop'), {
    multiple: false, accept: 'video/*', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      reset(false);
      file = arr[0];
      fileRow = ToolPro.fileRow(listEl, file, function(){ reset(true); });
      videoUrl = URL.createObjectURL(file);
      preview.src = videoUrl;
      previewWrap.style.display = 'block';
      preview.onloadedmetadata = function(){
        var d = preview.duration || 0;
        if(d > 0){
          startR.max = Math.max(0, (d - 1)).toFixed(1);
          lenR.max = Math.min(10, Math.floor(d));
          if(+lenR.value > +lenR.max) lenR.value = lenR.max;
          lenR.dispatchEvent(new Event('input'));
          startR.dispatchEvent(new Event('input'));
        }
      };
      document.getElementById('gifResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — scrub to pick your moment', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; fileRow = null;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    document.getElementById('gifResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  function loadGifLib(){
    return new Promise(function(res, rej){
      if(window.GIF){ res(); return; }
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.js';
      s.onload = function(){ window.GIF ? res() : rej(new Error('load')); };
      s.onerror = function(){ rej(new Error('cdn')); };
      document.head.appendChild(s);
      setTimeout(function(){ if(!window.GIF) rej(new Error('timeout')); }, 20000);
    });
  }

  function waitSeek(v, t){
    return new Promise(function(res){
      var done = false;
      function onSeeked(){ if(!done){ done = true; v.removeEventListener('seeked', onSeeked); res(); } }
      v.addEventListener('seeked', onSeeked);
      v.currentTime = t;
      setTimeout(function(){ if(!done){ done = true; v.removeEventListener('seeked', onSeeked); res(); } }, 2500);
    });
  }

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!window.HTMLCanvasElement){ ToolPro.toast('This browser cannot create GIFs', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('gifProgWrap');
    var progBar = document.getElementById('gifProgBar');
    var progText = document.getElementById('gifProgText');
    var grid = document.getElementById('gifGrid');
    var resBox = document.getElementById('gifResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      prog(3, 'Loading encoder…');
      await loadGifLib();
    }catch(e){
      progWrap.classList.remove('show'); busy = false; refreshButtons();
      ToolPro.toast('Could not load the GIF encoder (needs internet for the CDN). Try again.', 'err');
      return;
    }

    var vw = preview.videoWidth || 640, vh = preview.videoHeight || 360;
    var dur = preview.duration || 0;
    var width = Math.min(+wR.value, vw);
    var height = Math.round(vh * width / vw);
    if(height % 2) height += 1;
    var fps = +fpsR.value;
    var start = Math.min(+startR.value, Math.max(0, dur - 0.5));
    var len = Math.min(+lenR.value, 10, Math.max(0.5, dur - start));
    var frames = Math.max(2, Math.round(len * fps));
    var delay = Math.round(1000 / fps);

    prog(8, 'Capturing frames (0/' + frames + ')…');
    var canvas = document.createElement('canvas');
    canvas.width = width; canvas.height = height;
    var ctx = canvas.getContext('2d');
    var gif = new GIF({
      workers: 2, quality: 10, width: width, height: height, workerScript: 'https://cdnjs.cloudflare.com/ajax/libs/gif.js/0.2.0/gif.worker.js'
    });

    try{
      for(var i = 0; i < frames; i++){
        var t = start + (i / fps);
        await waitSeek(preview, Math.min(t, Math.max(0, dur - 0.05)));
        ctx.drawImage(preview, 0, 0, width, height);
        gif.addFrame(canvas, { copy: true, delay: delay });
        prog(8 + (i + 1) / frames * 50, 'Capturing frames (' + (i + 1) + '/' + frames + ')…');
      }
      prog(60, 'Encoding GIF — this takes a moment…');
      var blob = await new Promise(function(res, rej){
        gif.on('finished', function(b){ res(b); });
        gif.on('progress', function(p){ prog(60 + p * 38, 'Encoding GIF ' + Math.round(p * 100) + '%…'); });
        try{ gif.render(); }catch(e){ rej(e); }
      });
      var url = URL.createObjectURL(blob);
      prog(100, 'Done!');
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<img class="r-preview" alt="GIF preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download GIF</button>';
      card.querySelector('.r-preview').src = url;
      var fname = (file.name.replace(/\.[^.]+$/, '') || 'clip') + '.gif';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        width + '×' + height + 'px · ' + frames + ' frames @ ' + fps + ' fps · <b>' + ToolPro.fmtBytes(blob.size) + '</b>';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('gifSummary').textContent =
        '🎉 GIF ready — ' + frames + ' frames over ' + len.toFixed(1) + 's. Shorter, smaller or slower = lighter file.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('GIF created', 'ok');
    }catch(e){
      ToolPro.toast('Something went wrong while creating the GIF', 'err');
    }
    progWrap.classList.remove('show');
    busy = false; refreshButtons();
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in a video — it loads straight into a preview player, nothing is uploaded.
2. Scrub to the moment you want, then set the start time, clip length, width and frame rate.
3. Hit **Create GIF**: the tool seeks through the clip frame by frame, draws each frame onto a canvas, and encodes a GIF with gif.js — all on your device.

*Your files never leave your browser — conversion happens entirely on your device.*

## Everyday uses

- **Group chats** — turn a funny 2-second moment into a reaction GIF in under a minute.
- **Bloggers** — embed lightweight GIF demos instead of heavy video files.
- **Social media** — post looping highlights from sports, gaming or pet videos.
- **Marketers** — make quick product-teaser GIFs for email signatures and posts.
- **Teachers** — animate a short experiment or demo for slides and worksheets.

**Rule of thumb:** keep GIFs under 5 seconds at 240px width for chat-friendly file sizes. GIFs have no sound and only 256 colors — pick moments with simple motion.
