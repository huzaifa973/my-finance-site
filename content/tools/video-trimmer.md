---
title: "Free Online Video Trimmer — Cut Clips Without Uploading"
description: "Trim any video in your browser — set start and end points, preview the cut, and download the trimmed clip. Free forever, no sign-up, files never leave your device."
category: video
date: 2026-10-10
draft: false
---

Cut the boring bits out of any video — remove the intro, the awkward pause, the dead air at the end. Set your start and end points with sliders, preview the exact segment, then export a trimmed clip. Everything runs in your browser; the original file is never uploaded.

<div class="tool-shell" id="trmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.64 7.64L12.28 10.27l1.42-1.42-2.64-2.64L9.64 7.64zm-4.95 9.9l2.64-2.64 1.42 1.42-2.64 2.64-1.42-1.42zm9.9-9.9l1.41 1.42 2.65-2.64-1.42-1.42-2.64 2.64zM17 3l-4.9 4.9 2.83 2.83L20 5.66 17 3zm-2.83 9.17L9.28 17.06 4.34 22l2.83 2.83L12.06 20l4.89-4.89-2.78-2.94zM7.5 9L3 4.5 4.5 3 9 7.5 7.5 9zM22 20.5l-4.5-4.5L16 17.5 20.5 22 22 20.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Trimmer</h2>
<p>Cut any clip down to the good part — set start &amp; end, preview, export. No upload needed.</p>
</div>
<button type="button" class="theme-toggle" id="trmTheme">🌙 Dark</button>
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
<div class="dropzone" id="trmDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV · any length</span>
<input type="file" id="trmFile" accept="video/*">
</div>
<ul class="file-list" id="trmList"></ul>
<div class="tool-input" id="trmPreviewWrap" style="display:none;margin-top:12px">
<video id="trmPreview" controls playsinline muted style="width:100%;max-height:320px;background:#000;border-radius:10px"></video>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick your cut</p>
<div class="settings-panel">
<div class="preset-row" id="trmPresets">
<button type="button" class="preset-chip" data-s="0" data-e="15">✂️ First 15s</button>
<button type="button" class="preset-chip" data-s="0" data-e="30">✂️ First 30s</button>
<button type="button" class="preset-chip" data-s="0" data-e="60">✂️ First minute</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="trmStart">Start: <span class="val" id="trmStartVal">0.0s</span></label>
<input type="range" id="trmStart" min="0" max="100" step="0.1" value="0">
<div class="hint">Where the trimmed clip begins.</div>
</div>
<div class="setting">
<label for="trmEnd">End: <span class="val" id="trmEndVal">0.0s</span></label>
<input type="range" id="trmEnd" min="0" max="100" step="0.1" value="0">
<div class="hint">Where the trimmed clip ends.</div>
</div>
</div>
<p class="hint" style="margin-top:8px">📏 Selected clip: <strong id="trmClipLen">0.0s</strong></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Trim &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="trmPreviewBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
Preview Clip
</button>
<button type="button" class="btn-pro" id="trmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Trim &amp; Download
</button>
<button type="button" class="btn-pro-outline" id="trmClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="trmProgWrap">
<div class="progress-bar"><i id="trmProgBar"></i></div>
<div class="progress-text" id="trmProgText">Working…</div>
</div>
<div class="results" id="trmResults">
<p class="result-head">✅ Done — your trimmed clip</p>
<div class="result-summary" id="trmSummary"></div>
<div class="result-grid" id="trmGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ The trimmed clip downloads as a <strong>WebM</strong> file — it plays in Chrome, Edge, Firefox and Safari 14.1+. Trimming re-records the segment (no quality setting to fuss with).</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Trim as many videos as you like — it all happens on your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('trmShell');
  ToolPro.themeToggle(shell, document.getElementById('trmTheme'));

  var file = null, videoUrl = null, busy = false, duration = 0;
  var listEl = document.getElementById('trmList');
  var btn = document.getElementById('trmBtn');
  var prevBtn = document.getElementById('trmPreviewBtn');
  var clearBtn = document.getElementById('trmClear');
  var previewWrap = document.getElementById('trmPreviewWrap');
  var preview = document.getElementById('trmPreview');
  var startR = document.getElementById('trmStart'), startV = document.getElementById('trmStartVal');
  var endR = document.getElementById('trmEnd'), endV = document.getElementById('trmEndVal');
  var clipLen = document.getElementById('trmClipLen');

  function fmtT(v){ return (+v).toFixed(1) + 's'; }
  function updClip(){
    var s = +startR.value, e = +endR.value;
    if(e < s){ endR.value = s; e = s; endV.textContent = fmtT(e); }
    clipLen.textContent = fmtT(Math.max(0, e - s));
  }
  ToolPro.bindSlider(startR, startV, fmtT);
  ToolPro.bindSlider(endR, endV, fmtT);
  startR.addEventListener('input', updClip);
  endR.addEventListener('input', updClip);

  document.getElementById('trmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip || !duration) return;
    var s = Math.min(+chip.dataset.s, duration - 0.5), en = Math.min(+chip.dataset.e, duration);
    startR.value = s; startR.dispatchEvent(new Event('input'));
    endR.value = en; endR.dispatchEvent(new Event('input'));
    updClip();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var ok = !!file && !busy;
    btn.disabled = !ok; prevBtn.disabled = !ok; clearBtn.disabled = !ok;
  }

  ToolPro.dropzone(document.getElementById('trmDrop'), {
    multiple: false, accept: 'video/*', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      reset(false);
      file = arr[0];
      ToolPro.fileRow(listEl, file, function(){ reset(true); });
      videoUrl = URL.createObjectURL(file);
      preview.src = videoUrl;
      previewWrap.style.display = 'block';
      preview.onloadedmetadata = function(){
        duration = preview.duration || 0;
        if(duration > 0){
          startR.max = duration.toFixed(1);
          endR.max = duration.toFixed(1);
          endR.value = Math.min(15, duration).toFixed(1);
          startR.value = 0;
          startR.dispatchEvent(new Event('input'));
          endR.dispatchEvent(new Event('input'));
          updClip();
        }
      };
      document.getElementById('trmResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — drag the sliders to set your cut', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; duration = 0;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    document.getElementById('trmResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  prevBtn.addEventListener('click', function(){
    if(!file || busy) return;
    var s = +startR.value, e = +endR.value;
    if(e - s < 0.3){ ToolPro.toast('Clip is too short — widen the range', 'err'); return; }
    preview.currentTime = s;
    preview.play().catch(function(){});
    var stop = function(){
      if(preview.currentTime >= e){ preview.pause(); preview.removeEventListener('timeupdate', stop); }
    };
    preview.addEventListener('timeupdate', stop);
    setTimeout(function(){ preview.removeEventListener('timeupdate', stop); }, (e - s + 2) * 1000);
  });

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!window.MediaRecorder){ ToolPro.toast('Your browser cannot record video (MediaRecorder missing)', 'err'); return; }
    var s = +startR.value, e = +endR.value;
    if(e - s < 0.3){ ToolPro.toast('Clip is too short — widen the range', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('trmProgWrap');
    var progBar = document.getElementById('trmProgBar');
    var progText = document.getElementById('trmProgText');
    var grid = document.getElementById('trmGrid');
    var resBox = document.getElementById('trmResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var stream = null;
    try{
      stream = preview.captureStream ? preview.captureStream()
             : (preview.mozCaptureStream ? preview.mozCaptureStream() : null);
    }catch(err){ stream = null; }
    if(!stream){
      progWrap.classList.remove('show'); busy = false; refreshButtons();
      ToolPro.toast('Your browser does not support capturing video (captureStream)', 'err');
      return;
    }

    var mime = 'video/webm';
    if(window.MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) mime = 'video/webm;codecs=vp9';
    var chunks = [];
    var rec;
    try{ rec = new MediaRecorder(stream, { mimeType: mime }); }
    catch(err){ rec = new MediaRecorder(stream); }
    rec.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
    var stopped = new Promise(function(res){
      rec.onstop = function(){ res(); };
    });

    preview.muted = true;
    preview.currentTime = Math.max(0, s - 0.05);
    await new Promise(function(res){
      function onS(){ preview.removeEventListener('seeked', onS); res(); }
      preview.addEventListener('seeked', onS);
      setTimeout(res, 1500);
    });
    rec.start(250);
    preview.play().catch(function(){});
    prog(5, 'Recording your clip…');
    var t0 = Date.now(), span = (e - s) * 1000;
    var timer = setInterval(function(){
      var p = Math.min(95, (Date.now() - t0) / span * 100);
      prog(p, 'Recording your clip (' + fmtT((Date.now() - t0) / 1000) + ' / ' + fmtT(e - s) + ')…');
    }, 300);
    await new Promise(function(res){
      function onT(){
        if(preview.currentTime >= e - 0.05){ preview.removeEventListener('timeupdate', onT); res(); }
      }
      preview.addEventListener('timeupdate', onT);
      setTimeout(function(){ preview.removeEventListener('timeupdate', onT); res(); }, span + 2500);
    });
    clearInterval(timer);
    preview.pause();
    rec.stop();
    await stopped;
    stream.getTracks().forEach(function(t){ t.stop(); });

    var blob = new Blob(chunks, { type: 'video/webm' });
    var url = URL.createObjectURL(blob);
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<video class="r-preview" controls playsinline muted style="background:#000"></video>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Clip</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'clip') + '-trimmed.webm';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      fmtT(e - s) + ' clip · WebM · <b>' + ToolPro.fmtBytes(blob.size) + '</b>';
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('trmSummary').textContent =
      '🎉 Clip trimmed from ' + fmtT(s) + ' to ' + fmtT(e) + ' — download it above.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Clip trimmed', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in a video — it opens in the preview player, nothing is uploaded.
2. Drag the start/end sliders to mark the segment you want to keep, and hit **Preview Clip** to check it.
3. Hit **Trim &amp; Download**: the tool plays your segment while recording it into a new WebM file — all on your device.

*Your files never leave your browser — trimming happens entirely on your device.*

## Everyday uses

- **Content creators** — cut intros, bloopers and dead air before uploading to YouTube or TikTok.
- **Parents** — trim a long school-play recording down to your kid's scene to share with family.
- **Students** — clip the key 30 seconds of a lecture recording for revision.
- **Sellers** — snip a product demo down to the highlight for listings.
- **Coaches** — isolate a single drill or play from a full game recording.

**Rule of thumb:** watch your cut once with the preview button before exporting — it's much faster than re-trimming. The export is WebM, which plays in every modern browser.
