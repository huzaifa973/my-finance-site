---
title: "Compress Video for WhatsApp — Free Online"
description: "Shrink any video under WhatsApp's 16MB limit in your browser. Status presets, live fit indicator, instant re-encode. Free, private — files never leave your device."
category: video
date: 2026-10-14
draft: false
---

WhatsApp caps video shares at 16MB — and raw phone clips blow past that in seconds. This tool re-encodes your video at WhatsApp-friendly settings with a live indicator that tells you upfront whether the result will fit the 16MB limit. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="wcvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-4h6v4zm0-6H7V8h6v4zm4 6h-2v-4h2v4zm0-6h-2V8h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compress Video for WhatsApp</h2>
<p>Get any video under WhatsApp's 16MB limit — live fit check, one-tap presets.</p>
</div>
<button type="button" class="theme-toggle" id="wcvTheme">🌙 Dark</button>
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
<div class="dropzone" id="wcvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV</span>
<input type="file" id="wcvFile" accept="video/*">
</div>
<ul class="file-list" id="wcvList"></ul>
<div class="tool-input" id="wcvPreviewWrap" style="display:none;margin-top:12px">
<video id="wcvPreview" controls playsinline muted style="width:100%;max-height:300px;background:#000;border-radius:10px"></video>
<p class="hint" id="wcvMeta" style="margin-top:6px"></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> WhatsApp settings</p>
<div class="settings-panel">
<div class="preset-row" id="wcvPresets">
<button type="button" class="preset-chip active" data-res="480" data-q="35">💬 Status / Share — under 16MB</button>
<button type="button" class="preset-chip" data-res="720" data-q="55">🎞️ HD share</button>
<button type="button" class="preset-chip" data-res="360" data-q="30">🪶 Ultra-light</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="wcvRes">Output resolution</label>
<select id="wcvRes">
<option value="360">360p — tiny</option>
<option value="480" selected>480p — WhatsApp sweet spot</option>
<option value="720">720p — HD</option>
</select>
<div class="hint">480p is the WhatsApp sweet spot: sharp on phones, tiny file.</div>
</div>
<div class="setting">
<label for="wcvQ">Quality: <span class="val" id="wcvQVal">35%</span></label>
<input type="range" id="wcvQ" min="10" max="100" value="35">
<div class="hint">30–45% keeps a shareable look while staying small.</div>
</div>
</div>
<p class="hint" style="margin-top:8px">📦 Estimated output: <strong id="wcvEst">—</strong></p>
<p class="hint" id="wcvFit" style="margin-top:4px;font-weight:700">—</p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wcvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress for WhatsApp
</button>
<button type="button" class="btn-pro-outline" id="wcvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="wcvProgWrap">
<div class="progress-bar"><i id="wcvProgBar"></i></div>
<div class="progress-text" id="wcvProgText">Working…</div>
</div>
<div class="results" id="wcvResults">
<p class="result-head">✅ Done — ready for WhatsApp</p>
<div class="result-summary" id="wcvSummary"></div>
<div class="result-grid" id="wcvGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ Honest note: browsers can't encode MP4 client-side, so the output is <strong>WebM</strong> — WhatsApp accepts it when shared as a document, or plays it in Chrome/Edge/Firefox. Compression runs in real time, so a 3-minute video takes about 3 minutes.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many videos as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('wcvShell');
  ToolPro.themeToggle(shell, document.getElementById('wcvTheme'));

  var LIMIT = 16 * 1024 * 1024;
  var file = null, videoUrl = null, busy = false;
  var origW = 0, origH = 0, duration = 0, origSize = 0;
  var listEl = document.getElementById('wcvList');
  var btn = document.getElementById('wcvBtn');
  var clearBtn = document.getElementById('wcvClear');
  var previewWrap = document.getElementById('wcvPreviewWrap');
  var preview = document.getElementById('wcvPreview');
  var metaEl = document.getElementById('wcvMeta');
  var resSel = document.getElementById('wcvRes');
  var qR = document.getElementById('wcvQ'), qV = document.getElementById('wcvQVal');
  var estEl = document.getElementById('wcvEst');
  var fitEl = document.getElementById('wcvFit');

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
    if(!duration){ estEl.textContent = '—'; fitEl.textContent = '—'; return; }
    var est = estBytes(), d = outDims();
    estEl.textContent = '~' + ToolPro.fmtBytes(est) + ' (' + d.w + '×' + d.h + 'px)';
    if(est <= LIMIT){
      fitEl.textContent = '✅ fits WhatsApp 16 MB limit (estimate)';
      fitEl.style.color = 'green';
    }else{
      fitEl.textContent = '⚠️ estimate ' + ToolPro.fmtBytes(est - LIMIT) + ' over 16 MB — lower resolution or quality';
      fitEl.style.color = 'darkorange';
    }
  }
  resSel.addEventListener('change', updEst);
  qR.addEventListener('input', updEst);

  document.getElementById('wcvPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#wcvPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
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

  ToolPro.dropzone(document.getElementById('wcvDrop'), {
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
          (duration ? duration.toFixed(1) + 's · ' : '') + ToolPro.fmtBytes(origSize) +
          (origSize > LIMIT ? ' — ' + ToolPro.fmtBytes(origSize - LIMIT) + ' over the WhatsApp limit' : ' — already under 16 MB');
        updEst();
      };
      document.getElementById('wcvResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — pick a preset', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; origW = 0; origH = 0; duration = 0; origSize = 0;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    document.getElementById('wcvResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!window.MediaRecorder){ ToolPro.toast('Your browser cannot compress video (MediaRecorder missing)', 'err'); return; }
    if(!duration){ ToolPro.toast('Video metadata not ready yet — wait a second', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('wcvProgWrap');
    var progBar = document.getElementById('wcvProgBar');
    var progText = document.getElementById('wcvProgText');
    var grid = document.getElementById('wcvGrid');
    var resBox = document.getElementById('wcvResults');
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
    var fits = blob.size <= LIMIT;
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<video class="r-preview" controls playsinline muted style="background:#000"></video>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Video</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'video') + '-whatsapp.webm';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      d.w + '×' + d.h + 'px · ' + ToolPro.fmtBytes(origSize) + ' → <b>' + ToolPro.fmtBytes(blob.size) + '</b><br>' +
      (fits ? '✅ <b>fits WhatsApp 16 MB limit</b>' : '⚠️ ' + ToolPro.fmtBytes(blob.size - LIMIT) + ' over 16 MB — try the Ultra-light preset');
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('wcvSummary').textContent = fits
      ? '🎉 ' + ToolPro.fmtBytes(blob.size) + ' — send it to WhatsApp, it fits the 16 MB limit.'
      : '⚠️ Still ' + ToolPro.fmtBytes(blob.size - LIMIT) + ' over — re-run with a lower preset.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast(fits ? 'Video fits WhatsApp' : 'Compressed, but still over 16 MB', fits ? 'ok' : undefined);
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your video. You'll see its resolution, length, and whether it's already under the 16MB limit.
- **Step 2** — Pick the **Status / Share** preset (or tune resolution and quality yourself). The live indicator tells you *before* encoding whether the estimate fits under 16MB.
- **Step 3** — Hit **Compress for WhatsApp**. The tool re-encodes your video in real time and confirms with a ✅ or ⚠️ whether the actual file fits.

## Everyday uses

- **WhatsApp Status** — post full-quality 30-second clips instead of WhatsApp's blurry auto-crush.
- **Family videos** — send vacation clips in chats without the "file too large" error.
- **Business catalogs** — share product demos with customers under the share limit.
- **Event recaps** — compress wedding and party footage before forwarding to groups.
- **Tutorials** — send screen recordings to students and clients without uploading anywhere.

## Frequently asked questions

**Why is the output WebM and not MP4?**
Browsers simply can't encode MP4 in JavaScript. WebM plays everywhere modern and WhatsApp accepts it when shared as a document. The file is smaller and private.

**Will my video look bad after compression?**
480p at 35% quality looks crisp on any phone screen — which is where WhatsApp videos are watched. It only looks soft if you blow it up on a big monitor.

**How long does compression take?**
Real time — a 2-minute video takes about 2 minutes, because the tool plays your video through a smaller canvas while recording it.

**Is my video private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
