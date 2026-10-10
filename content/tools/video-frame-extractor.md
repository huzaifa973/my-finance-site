---
title: "Video Frame Extractor — Save Screenshots from Any Video"
description: "Grab perfect screenshots from any video in your browser — scrub and capture manually or auto-grab frames every few seconds. Free forever, files never leave your device."
category: video
date: 2026-10-10
draft: false
---

Need a thumbnail, a still from a tutorial, or evidence from a recording? This tool lets you scrub through any video frame by frame and save exact screenshots — or auto-capture frames every few seconds. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="frmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3-1.35-3-3-3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Frame Extractor</h2>
<p>Save pixel-perfect screenshots from any video — scrub &amp; snap, or auto-capture frames.</p>
</div>
<button type="button" class="theme-toggle" id="frmTheme">🌙 Dark</button>
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
<div class="dropzone" id="frmDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV · scrub frame by frame</span>
<input type="file" id="frmFile" accept="video/*">
</div>
<ul class="file-list" id="frmList"></ul>
<div class="tool-input" id="frmPreviewWrap" style="display:none;margin-top:12px">
<video id="frmPreview" controls playsinline muted style="width:100%;max-height:300px;background:#000;border-radius:10px"></video>
<p class="hint" style="margin-top:6px">⏱️ Current time: <strong id="frmTime">0.0s</strong> — pause and use the timeline to land on the exact frame.</p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Capture settings</p>
<div class="settings-panel">
<div class="preset-row" id="frmPresets">
<button type="button" class="preset-chip active" data-m="manual">🖱️ Manual — scrub &amp; snap</button>
<button type="button" class="preset-chip" data-m="auto" data-i="2">⏱️ Auto — every 2s</button>
<button type="button" class="preset-chip" data-m="auto" data-i="5">⏱️ Auto — every 5s</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="frmMode">Capture mode</label>
<select id="frmMode">
<option value="manual" selected>Manual — capture the current frame</option>
<option value="auto">Auto — grab frames on a timer</option>
</select>
<div class="hint">Manual is best for thumbnails; auto is best for storyboards.</div>
</div>
<div class="setting" id="frmIntervalWrap" style="display:none">
<label for="frmInterval">Auto interval: <span class="val" id="frmIntervalVal">2s</span></label>
<input type="range" id="frmInterval" min="1" max="10" step="1" value="2">
<div class="hint">Captures one frame every N seconds (max 24 frames per run).</div>
</div>
<div class="setting">
<label for="frmFormat">Image format</label>
<select id="frmFormat">
<option value="png" selected>PNG — lossless, best quality</option>
<option value="jpeg">JPEG — smaller files</option>
</select>
<div class="hint">PNG for crisp text and graphics; JPEG for photos.</div>
</div>
<div class="setting" id="frmQWrap" style="display:none">
<label for="frmQ">JPEG quality: <span class="val" id="frmQVal">90%</span></label>
<input type="range" id="frmQ" min="50" max="100" value="90">
<div class="hint">90% is visually perfect for screenshots.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Capture &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="frmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
<span id="frmBtnLabel">Capture This Frame</span>
</button>
<button type="button" class="btn-pro-outline" id="frmClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="frmProgWrap">
<div class="progress-bar"><i id="frmProgBar"></i></div>
<div class="progress-text" id="frmProgText">Working…</div>
</div>
<div class="results" id="frmResults">
<p class="result-head">✅ Done — your frames</p>
<div class="result-summary" id="frmSummary"></div>
<div class="result-grid" id="frmGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Capture as many frames as you like — it all happens on your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('frmShell');
  ToolPro.themeToggle(shell, document.getElementById('frmTheme'));

  var file = null, videoUrl = null, busy = false, duration = 0, frameCount = 0;
  var listEl = document.getElementById('frmList');
  var btn = document.getElementById('frmBtn');
  var btnLabel = document.getElementById('frmBtnLabel');
  var clearBtn = document.getElementById('frmClear');
  var previewWrap = document.getElementById('frmPreviewWrap');
  var preview = document.getElementById('frmPreview');
  var timeEl = document.getElementById('frmTime');
  var modeSel = document.getElementById('frmMode');
  var intWrap = document.getElementById('frmIntervalWrap');
  var intR = document.getElementById('frmInterval'), intV = document.getElementById('frmIntervalVal');
  var fmtSel = document.getElementById('frmFormat');
  var qWrap = document.getElementById('frmQWrap');
  var qR = document.getElementById('frmQ'), qV = document.getElementById('frmQVal');

  ToolPro.bindSlider(intR, intV, function(v){ return v + 's'; });
  ToolPro.bindSlider(qR, qV, function(v){ return v + '%'; });

  function updMode(){
    var auto = modeSel.value === 'auto';
    intWrap.style.display = auto ? '' : 'none';
    btnLabel.textContent = auto ? 'Auto-Capture Frames' : 'Capture This Frame';
  }
  modeSel.addEventListener('change', updMode);
  fmtSel.addEventListener('change', function(){ qWrap.style.display = fmtSel.value === 'jpeg' ? '' : 'none'; });

  document.getElementById('frmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#frmPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    modeSel.value = chip.dataset.m; updMode();
    if(chip.dataset.i){ intR.value = chip.dataset.i; intR.dispatchEvent(new Event('input')); }
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  preview.addEventListener('timeupdate', function(){
    timeEl.textContent = preview.currentTime.toFixed(1) + 's';
  });

  function refreshButtons(){
    btn.disabled = !file || busy;
    clearBtn.disabled = (!file && !frameCount) || busy;
  }

  ToolPro.dropzone(document.getElementById('frmDrop'), {
    multiple: false, accept: 'video/*', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      reset(false);
      file = arr[0];
      ToolPro.fileRow(listEl, file, function(){ reset(true); });
      videoUrl = URL.createObjectURL(file);
      preview.src = videoUrl;
      previewWrap.style.display = 'block';
      preview.onloadedmetadata = function(){ duration = preview.duration || 0; };
      refreshButtons();
      ToolPro.toast('Video loaded — pause on a frame and capture it', 'ok');
    }
  });

  function reset(clearAll){
    if(clearAll){
      listEl.innerHTML = '';
      document.getElementById('frmGrid').innerHTML = '';
      document.getElementById('frmSummary').textContent = '';
      document.getElementById('frmResults').classList.remove('show');
      frameCount = 0;
    }
    file = null; duration = 0;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  function snapshot(){
    var w = preview.videoWidth || 640, h = preview.videoHeight || 360;
    var canvas = document.createElement('canvas');
    canvas.width = w; canvas.height = h;
    canvas.getContext('2d').drawImage(preview, 0, 0, w, h);
    var fmt = fmtSel.value;
    var mime = fmt === 'jpeg' ? 'image/jpeg' : 'image/png';
    var q = fmt === 'jpeg' ? (+qR.value) / 100 : 1;
    return new Promise(function(res){
      canvas.toBlob(function(b){ res({ blob: b, w: w, h: h, fmt: fmt }); }, mime, q);
    });
  }

  function addCard(snap, t){
    frameCount++;
    var url = URL.createObjectURL(snap.blob);
    var grid = document.getElementById('frmGrid');
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<img class="r-preview" alt="Captured frame">' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'video') + '-frame-' + t.toFixed(1) + 's.' + snap.fmt;
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      '⏱️ ' + t.toFixed(1) + 's · ' + snap.w + '×' + snap.h + 'px · <b>' + ToolPro.fmtBytes(snap.blob.size) + '</b>';
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.insertBefore(card, grid.firstChild);
    document.getElementById('frmSummary').textContent =
      '🎉 ' + frameCount + (frameCount === 1 ? ' frame' : ' frames') + ' captured — download each one above.';
    document.getElementById('frmResults').classList.add('show');
    refreshButtons();
  }

  function waitSeek(v, t){
    return new Promise(function(res){
      var done = false;
      function onS(){ if(!done){ done = true; v.removeEventListener('seeked', onS); res(); } }
      v.addEventListener('seeked', onS);
      v.currentTime = t;
      setTimeout(function(){ if(!done){ done = true; v.removeEventListener('seeked', onS); res(); } }, 2500);
    });
  }

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!preview.videoWidth){ ToolPro.toast('Video is not ready yet — wait a second', 'err'); return; }
    busy = true; refreshButtons();
    var auto = modeSel.value === 'auto';

    if(!auto){
      var snap = await snapshot();
      if(snap.blob){ addCard(snap, preview.currentTime); ToolPro.toast('Frame captured', 'ok'); }
      else{ ToolPro.toast('Could not capture this frame', 'err'); }
      busy = false; refreshButtons();
      return;
    }

    var progWrap = document.getElementById('frmProgWrap');
    var progBar = document.getElementById('frmProgBar');
    var progText = document.getElementById('frmProgText');
    progWrap.classList.add('show');
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }
    try{
      preview.pause();
      var interval = +intR.value;
      var times = [];
      for(var t = 0; t < Math.min(duration, interval * 24); t += interval) times.push(+t.toFixed(1));
      if(!times.length) times.push(0);
      for(var i = 0; i < times.length; i++){
        await waitSeek(preview, times[i]);
        var s2 = await snapshot();
        if(s2.blob) addCard(s2, times[i]);
        prog((i + 1) / times.length * 100, 'Capturing frame ' + (i + 1) + ' of ' + times.length + '…');
      }
      document.getElementById('frmResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Auto-capture complete', 'ok');
    }catch(e){
      ToolPro.toast('Something went wrong during auto-capture', 'err');
    }
    progWrap.classList.remove('show');
    busy = false; refreshButtons();
  });

  updMode();
  refreshButtons();
})();
</script>

## How it works

1. Drop in a video — it opens in a player you can scrub frame by frame, nothing is uploaded.
2. Choose **manual** to snap the exact frame you're looking at, or **auto** to grab a frame every few seconds.
3. Each capture becomes a downloadable PNG or JPEG card below — keep the ones you love.

*Your files never leave your browser — every screenshot is taken on your device.*

## Everyday uses

- **YouTubers** — grab the perfect thumbnail frame from your own footage.
- **Bloggers** — pull crisp stills from product videos for reviews and tutorials.
- **Students** — capture key slides or diagrams from recorded lectures.
- **Documentation** — screenshot exact moments from screen recordings for guides.
- **Storyboards** — auto-capture every few seconds to map out a video's flow.

**Rule of thumb:** pause the video and use the arrow keys (left/right) to step frame by frame — you'll land on the exact expression or moment you want. PNG is best when the frame has text or sharp graphics.
