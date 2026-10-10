---
title: "Free Video Compressor — Shrink Video Size Online"
description: "Compress videos in your browser by reducing resolution and bitrate. Batch-friendly settings, honest quality preview, free forever — files never leave your device."
category: video
date: 2026-10-10
draft: false
---

Oversized videos are a pain — they won't attach to emails, they eat phone storage, and they take forever to upload. This tool re-encodes your video at a smaller resolution and lower bitrate, shrinking the file dramatically while keeping it watchable. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="vcmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-4h6v4zm0-6H7V8h6v4zm4 6h-2v-4h2v4zm0-6h-2V8h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Compressor</h2>
<p>Shrink video file sizes by up to 80% — smaller resolution, smarter bitrate, same video.</p>
</div>
<button type="button" class="theme-toggle" id="vcmTheme">🌙 Dark</button>
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
<div class="dropzone" id="vcmDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV · original quality shown below</span>
<input type="file" id="vcmFile" accept="video/*">
</div>
<ul class="file-list" id="vcmList"></ul>
<div class="tool-input" id="vcmPreviewWrap" style="display:none;margin-top:12px">
<video id="vcmPreview" controls playsinline muted style="width:100%;max-height:300px;background:#000;border-radius:10px"></video>
<p class="hint" id="vcmMeta" style="margin-top:6px"></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression settings</p>
<div class="settings-panel">
<div class="preset-row" id="vcmPresets">
<button type="button" class="preset-chip active" data-res="480" data-q="45">📱 Social — small</button>
<button type="button" class="preset-chip" data-res="720" data-q="65">🌐 Balanced</button>
<button type="button" class="preset-chip" data-res="1080" data-q="85">🖥️ HD — gentle</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="vcmRes">Output resolution</label>
<select id="vcmRes">
<option value="360">360p — tiny</option>
<option value="480" selected>480p — social-friendly</option>
<option value="720">720p — HD</option>
<option value="1080">1080p — Full HD</option>
<option value="0">Keep original</option>
</select>
<div class="hint">Resolution is the biggest lever on file size. 480p is plenty for social posts.</div>
</div>
<div class="setting">
<label for="vcmQ">Quality: <span class="val" id="vcmQVal">45%</span></label>
<input type="range" id="vcmQ" min="10" max="100" value="45">
<div class="hint">Controls bitrate. 40–60% is the sweet spot for compressed sharing.</div>
</div>
</div>
<p class="hint" style="margin-top:8px">📦 Estimated output: <strong id="vcmEst">—</strong></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vcmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress Video
</button>
<button type="button" class="btn-pro-outline" id="vcmClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="vcmProgWrap">
<div class="progress-bar"><i id="vcmProgBar"></i></div>
<div class="progress-text" id="vcmProgText">Working…</div>
</div>
<div class="results" id="vcmResults">
<p class="result-head">✅ Done — your compressed video</p>
<div class="result-summary" id="vcmSummary"></div>
<div class="result-grid" id="vcmGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ Honest note: browsers can't encode MP4 client-side, so the output is <strong>WebM</strong> — it plays in Chrome, Edge, Firefox and Safari 14.1+. Lower resolution + lower quality = smaller file, visibly softer picture. Compression re-encodes in real time, so a 5-minute video takes about 5 minutes.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many videos as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('vcmShell');
  ToolPro.themeToggle(shell, document.getElementById('vcmTheme'));

  var file = null, videoUrl = null, busy = false;
  var origW = 0, origH = 0, duration = 0, origSize = 0;
  var listEl = document.getElementById('vcmList');
  var btn = document.getElementById('vcmBtn');
  var clearBtn = document.getElementById('vcmClear');
  var previewWrap = document.getElementById('vcmPreviewWrap');
  var preview = document.getElementById('vcmPreview');
  var metaEl = document.getElementById('vcmMeta');
  var resSel = document.getElementById('vcmRes');
  var qR = document.getElementById('vcmQ'), qV = document.getElementById('vcmQVal');
  var estEl = document.getElementById('vcmEst');

  ToolPro.bindSlider(qR, qV, function(v){ return v + '%'; });

  function outDims(){
    var target = +resSel.value;
    if(!target || !origW) return { w: origW || 640, h: origH || 360 };
    var h = Math.min(target, origH);
    var w = Math.round(origW * h / origH);
    if(w % 2) w += 1; if(h % 2) h += 1;
    return { w: w, h: h };
  }
  function estBytes(){
    if(!duration) return 0;
    var d = outDims();
    var kbps = 250 + (+qR.value) * 14 * (d.w * d.h) / (854 * 480);
    return Math.round(duration * kbps * 125);
  }
  function updEst(){
    estEl.textContent = duration ? '~' + ToolPro.fmtBytes(estBytes()) + ' (' + outDims().w + '×' + outDims().h + 'px)' : '—';
  }
  resSel.addEventListener('change', updEst);
  qR.addEventListener('input', updEst);

  document.getElementById('vcmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#vcmPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    resSel.value = chip.dataset.res;
    qR.value = chip.dataset.q;
    qR.dispatchEvent(new Event('input'));
    updEst();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file || busy;
    clearBtn.disabled = !file || busy;
  }

  ToolPro.dropzone(document.getElementById('vcmDrop'), {
    multiple: false, accept: 'video/*', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      reset(false);
      file = arr[0]; origSize = file.size;
      ToolPro.fileRow(listEl, file, function(){ reset(true); });
      videoUrl = URL.createObjectURL(file);
      preview.src = videoUrl;
      previewWrap.style.display = 'block';
      preview.onloadedmetadata = function(){
        origW = preview.videoWidth || 0; origH = preview.videoHeight || 0;
        duration = preview.duration || 0;
        metaEl.textContent = 'Original: ' + origW + '×' + origH + 'px · ' +
          (duration ? duration.toFixed(1) + 's · ' : '') + ToolPro.fmtBytes(origSize);
        updEst();
      };
      document.getElementById('vcmResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — pick a preset and compress', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; origW = 0; origH = 0; duration = 0; origSize = 0;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    document.getElementById('vcmResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!window.MediaRecorder){ ToolPro.toast('Your browser cannot compress video (MediaRecorder missing)', 'err'); return; }
    if(!duration){ ToolPro.toast('Video metadata not ready yet — wait a second', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('vcmProgWrap');
    var progBar = document.getElementById('vcmProgBar');
    var progText = document.getElementById('vcmProgText');
    var grid = document.getElementById('vcmGrid');
    var resBox = document.getElementById('vcmResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var d = outDims();
    var canvas = document.createElement('canvas');
    canvas.width = d.w; canvas.height = d.h;
    var ctx = canvas.getContext('2d');
    var cStream = canvas.captureStream ? canvas.captureStream(30) : null;
    if(!cStream){
      progWrap.classList.remove('show'); busy = false; refreshButtons();
      ToolPro.toast('Your browser does not support canvas capture', 'err');
      return;
    }
    var vStream = null;
    try{
      vStream = preview.captureStream ? preview.captureStream()
              : (preview.mozCaptureStream ? preview.mozCaptureStream() : null);
    }catch(e){ vStream = null; }
    if(vStream){
      vStream.getAudioTracks().forEach(function(t){ cStream.addTrack(t); });
    }
    var bitrate = Math.round((250 + (+qR.value) * 14 * (d.w * d.h) / (854 * 480)) * 1000);
    var mime = 'video/webm';
    if(window.MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) mime = 'video/webm;codecs=vp9';
    var rec;
    try{ rec = new MediaRecorder(cStream, { mimeType: mime, videoBitsPerSecond: bitrate }); }
    catch(e){
      try{ rec = new MediaRecorder(cStream, { mimeType: mime }); }
      catch(e2){ rec = new MediaRecorder(cStream); }
    }
    var chunks = [];
    rec.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
    var stopped = new Promise(function(res){ rec.onstop = function(){ res(); }; });

    preview.muted = true;
    preview.currentTime = 0;
    await new Promise(function(res){
      function onS(){ preview.removeEventListener('seeked', onS); res(); }
      preview.addEventListener('seeked', onS);
      setTimeout(res, 1500);
    });
    rec.start(500);
    preview.play().catch(function(){});
    prog(2, 'Compressing (plays in real time)…');
    var raf, t0 = Date.now();
    function draw(){
      if(preview.readyState >= 2) ctx.drawImage(preview, 0, 0, d.w, d.h);
      var p = Math.min(97, (Date.now() - t0) / (duration * 1000) * 100);
      prog(p, 'Compressing… ' + Math.round(p) + '% (real time)');
      raf = requestAnimationFrame(draw);
    }
    draw();
    await new Promise(function(res){
      function onE(){ preview.removeEventListener('ended', onE); res(); }
      preview.addEventListener('ended', onE);
      setTimeout(function(){ preview.removeEventListener('ended', onE); res(); }, duration * 1000 + 8000);
    });
    cancelAnimationFrame(raf);
    preview.pause();
    prog(98, 'Finalizing…');
    rec.stop();
    await stopped;
    cStream.getTracks().forEach(function(t){ t.stop(); });
    if(vStream) vStream.getTracks().forEach(function(t){ t.stop(); });

    var blob = new Blob(chunks, { type: 'video/webm' });
    var url = URL.createObjectURL(blob);
    var savedPct = origSize ? Math.max(0, Math.round((1 - blob.size / origSize) * 100)) : 0;
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<video class="r-preview" controls playsinline muted style="background:#000"></video>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Video</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'video') + '-compressed.webm';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      d.w + '×' + d.h + 'px · ' + ToolPro.fmtBytes(origSize) + ' → <b>' + ToolPro.fmtBytes(blob.size) +
      '</b> (' + savedPct + '% smaller)';
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('vcmSummary').textContent =
      '🎉 Compressed ' + savedPct + '% smaller — saved ' + ToolPro.fmtBytes(Math.max(0, origSize - blob.size)) + '.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Video compressed', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in a video — you'll see its resolution, length and file size.
2. Pick a preset (or set resolution and quality yourself) — the estimate updates live.
3. Hit **Compress Video**: the tool plays your video through a smaller canvas while recording it at a lower bitrate — all on your device.

*Your files never leave your browser — compression happens entirely on your device.*

## Everyday uses

- **Email &amp; messaging** — shrink a video so it fits attachment limits.
- **Social media** — compress before uploading so posts upload fast and don't get re-compressed badly.
- **Storage** — reclaim gigabytes by compressing old phone recordings you want to keep.
- **Websites** — make background and demo videos web-friendly for faster pages.
- **Freelancers** — send clients lightweight preview cuts without giant file transfers.

**Rule of thumb:** 480p at ~45% quality is ideal for sharing on social — under most file limits and still looks fine on a phone. Compression takes as long as the video itself, so grab a coffee for long clips.
