---
title: "Video Target Size Compressor — Hit an Exact File Size"
description: "Set a target file size in MB and this tool picks the bitrate and resolution to hit it. Live estimate, honest accuracy note. Free, private — files never leave your device."
category: video
date: 2026-10-14
draft: false
---

Need a video that's exactly, say, 25MB — no bigger? Set your target size and this tool works backwards from your video's length to pick the resolution and bitrate needed, then re-encodes to land as close as possible. It shows the target vs. actual size afterward, with an honest note that client-side encoding is an estimate, not an exact science.

<div class="tool-shell" id="vtsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-4h6v4zm0-6H7V8h6v4zm4 6h-2v-4h2v4zm0-6h-2V8h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Target Size Compressor</h2>
<p>Pick a target size in MB — the tool calculates the bitrate to hit it, then encodes.</p>
</div>
<button type="button" class="theme-toggle" id="vtsTheme">🌙 Dark</button>
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
<div class="dropzone" id="vtsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a video here</strong>
<span>or click to browse — MP4, WebM, MOV</span>
<input type="file" id="vtsFile" accept="video/*">
</div>
<ul class="file-list" id="vtsList"></ul>
<div class="tool-input" id="vtsPreviewWrap" style="display:none;margin-top:12px">
<video id="vtsPreview" controls playsinline muted style="width:100%;max-height:300px;background:#000;border-radius:10px"></video>
<p class="hint" id="vtsMeta" style="margin-top:6px"></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Target size</p>
<div class="settings-panel">
<div class="preset-row" id="vtsPresets">
<button type="button" class="preset-chip active" data-mb="10">📧 10 MB — email</button>
<button type="button" class="preset-chip" data-mb="16">💬 16 MB — WhatsApp</button>
<button type="button" class="preset-chip" data-mb="25">📎 25 MB — Gmail</button>
<button type="button" class="preset-chip" data-mb="50">☁️ 50 MB — forms</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="vtsTarget">Target size: <span class="val" id="vtsTargetVal">10 MB</span></label>
<input type="range" id="vtsTarget" min="1" max="100" value="10">
<div class="hint">1–100 MB. The tool picks resolution + bitrate from this and your video's length.</div>
</div>
</div>
<p class="hint" style="margin-top:8px">🧮 Plan: <strong id="vtsPlan">—</strong></p>
<p class="hint" id="vtsWarn" style="margin-top:4px"></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vtsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress to Target Size
</button>
<button type="button" class="btn-pro-outline" id="vtsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="vtsProgWrap">
<div class="progress-bar"><i id="vtsProgBar"></i></div>
<div class="progress-text" id="vtsProgText">Working…</div>
</div>
<div class="results" id="vtsResults">
<p class="result-head">✅ Done — target vs. actual</p>
<div class="result-summary" id="vtsSummary"></div>
<div class="result-grid" id="vtsGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ Honest note: the target is an <strong>estimate</strong>. Browser encoders don't follow bitrate instructions exactly, so the result can land 10–30% off — if it overshoots, re-run with a smaller target. Output is <strong>WebM</strong> (browsers can't encode MP4), and encoding runs in real time.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many videos as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('vtsShell');
  ToolPro.themeToggle(shell, document.getElementById('vtsTheme'));

  var file = null, videoUrl = null, busy = false;
  var origW = 0, origH = 0, duration = 0, origSize = 0;
  var listEl = document.getElementById('vtsList');
  var btn = document.getElementById('vtsBtn');
  var clearBtn = document.getElementById('vtsClear');
  var previewWrap = document.getElementById('vtsPreviewWrap');
  var preview = document.getElementById('vtsPreview');
  var metaEl = document.getElementById('vtsMeta');
  var targetR = document.getElementById('vtsTarget'), targetV = document.getElementById('vtsTargetVal');
  var planEl = document.getElementById('vtsPlan');
  var warnEl = document.getElementById('vtsWarn');

  ToolPro.bindSlider(targetR, targetV, function(v){ return v + ' MB'; });

  // Pick resolution from target size, then solve quality from target bitrate.
  function plan(){
    var targetBytes = (+targetR.value) * 1024 * 1024;
    var res = targetBytes <= 8 * 1024 * 1024 ? 480 : (targetBytes <= 30 * 1024 * 1024 ? 720 : 1080);
    var d;
    if(!origW){ d = { w: 640, h: 360 }; }
    else{
      var h = Math.min(res, origH);
      var w = Math.round(origW * h / origH);
      if(w % 2) w += 1; if(h % 2) h += 1;
      d = { w: w, h: h };
    }
    var bitrate = duration ? (targetBytes * 8) / duration : 0;
    var areaF = (d.w * d.h) / (854 * 480);
    var q = Math.round(((bitrate / 1000) - 250) / (14 * areaF));
    q = Math.max(10, Math.min(100, q));
    return { targetBytes: targetBytes, res: res, dims: d, q: q, kbps: bitrate / 1000 };
  }
  function updPlan(){
    if(!duration){ planEl.textContent = '—'; warnEl.textContent = ''; return; }
    var p = plan();
    planEl.textContent = p.dims.w + '×' + p.dims.h + 'px · quality ' + p.q + '% · ~' + Math.round(p.kbps) + ' kbps → target ' + (+targetR.value) + ' MB';
    if(p.q <= 10){
      warnEl.textContent = '⚠️ This target is extremely tight for a ' + duration.toFixed(0) + 's video — expect visible softness. Shorten the clip or raise the target.';
    }else if(p.q < 25){
      warnEl.textContent = '⚠️ Tight target — quality will be visibly soft on big screens.';
    }else{
      warnEl.textContent = '';
    }
  }
  targetR.addEventListener('input', updPlan);

  document.getElementById('vtsPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#vtsPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    targetR.value = chip.dataset.mb;
    targetR.dispatchEvent(new Event('input'));
    updPlan();
    ToolPro.toast('Target set: ' + chip.dataset.mb + ' MB');
  });

  function refreshButtons(){
    btn.disabled = !file || busy;
    clearBtn.disabled = !file || busy;
  }

  ToolPro.dropzone(document.getElementById('vtsDrop'), {
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
        updPlan();
      };
      document.getElementById('vtsResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('Video loaded — set your target size', 'ok');
    }
  });

  function reset(clearList){
    if(clearList){ listEl.innerHTML = ''; }
    file = null; origW = 0; origH = 0; duration = 0; origSize = 0;
    if(videoUrl){ URL.revokeObjectURL(videoUrl); videoUrl = null; }
    preview.removeAttribute('src'); preview.load();
    previewWrap.style.display = 'none';
    document.getElementById('vtsResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', function(){ reset(true); });

  btn.addEventListener('click', async function(){
    if(!file || busy) return;
    if(!window.MediaRecorder){ ToolPro.toast('Your browser cannot compress video (MediaRecorder missing)', 'err'); return; }
    if(!duration){ ToolPro.toast('Video metadata not ready yet — wait a second', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('vtsProgWrap');
    var progBar = document.getElementById('vtsProgBar');
    var progText = document.getElementById('vtsProgText');
    var grid = document.getElementById('vtsGrid');
    var resBox = document.getElementById('vtsResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var p = plan();
    var d = p.dims;
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
    var bitrate = Math.round((250 + p.q * 14 * (d.w * d.h) / (854 * 480)) * 1000);
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
    prog(2, 'Encoding to ~' + (+targetR.value) + ' MB (plays in real time)…');
    var raf, t0 = Date.now();
    function draw(){
      if(preview.readyState >= 2) ctx.drawImage(preview, 0, 0, d.w, d.h);
      var pr = Math.min(97, (Date.now() - t0) / (duration * 1000) * 100);
      prog(pr, 'Encoding… ' + Math.round(pr) + '% (real time)');
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
    var off = blob.size - p.targetBytes;
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<video class="r-preview" controls playsinline muted style="background:#000"></video>' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download Video</button>';
    card.querySelector('.r-preview').src = url;
    var fname = (file.name.replace(/\.[^.]+$/, '') || 'video') + '-' + (+targetR.value) + 'mb.webm';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      '🎯 Target: ' + ToolPro.fmtBytes(p.targetBytes) + ' · ✅ Actual: <b>' + ToolPro.fmtBytes(blob.size) + '</b> (' +
      d.w + '×' + d.h + 'px, quality ' + p.q + '%)<br>' +
      (off <= 0
        ? '✅ <b>Under target</b> by ' + ToolPro.fmtBytes(Math.abs(off))
        : '⚠️ <b>Over target</b> by ' + ToolPro.fmtBytes(off) + ' — re-run with a smaller target');
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('vtsSummary').textContent =
      '🎉 Encoded to ' + ToolPro.fmtBytes(blob.size) + ' vs. the ' + (+targetR.value) + ' MB target (' +
      Math.round(blob.size / p.targetBytes * 100) + '% of target).';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Target-size encode finished', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your video. The tool reads its length — that's the key input for sizing.
- **Step 2** — Set your target size (slider 1–100 MB, or a preset like 16MB for WhatsApp). The tool computes the resolution and bitrate needed and shows you the plan upfront.
- **Step 3** — Hit **Compress to Target Size**. It re-encodes in real time, then reports the actual size next to your target.

The honest part: browser encoders approximate bitrates, so the result can land 10–30% off. If it overshoots, just re-run with a smaller target — it's free and unlimited.

## Everyday uses

- **Email attachments** — land exactly under Gmail's 25MB cap without guessing.
- **WhatsApp** — hit the 16MB limit on the first try.
- **Upload forms** — match job, visa, and university portals' exact size caps.
- **Course platforms** — fit LMS per-video limits without re-exporting from an editor.
- **Client previews** — deliver "under 50MB" review files exactly as asked.

## Frequently asked questions

**How does it calculate the bitrate?**
Bitrate = (target MB × 8 bits) ÷ video seconds. The tool then picks a resolution that suits the target and solves for the quality level matching that bitrate.

**Why didn't it hit the target exactly?**
The browser's encoder treats the requested bitrate as a guideline, not a law — especially for complex footage. The tool reports the actual size honestly so you can adjust.

**Why does a lower target look softer?**
Same seconds + smaller size = fewer bits per second = less detail. For tiny targets on long videos, expect softness; shorten the clip or accept it.

**Is my video private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
