---
title: "Free Photo Slideshow Maker — Images to Video Online"
description: "Turn photos into a video slideshow in your browser. Reorder slides, set timing, add crossfade transitions. Free, private — your files never leave your device."
category: video
date: 2026-10-14
draft: false
---

Turn a batch of photos into a real video — perfect for birthdays, trips, portfolios, and product showcases. Upload your images, reorder them with one-click up/down buttons, set how long each slide stays on screen, choose a crossfade transition, and download the result as a video file. Everything renders in your browser; nothing is uploaded.

<div class="tool-shell" id="slmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H7v-4h6v4zm0-6H7V8h6v4zm4 6h-2v-4h2v4zm0-6h-2V8h2v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Photo Slideshow Maker</h2>
<p>Turn photos into a video — reorder slides, set timing, add crossfades.</p>
</div>
<button type="button" class="theme-toggle" id="slmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your photos</p>
<div class="dropzone" id="slmDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop photos here</strong>
<span>or click to browse — JPG, PNG, WebP · up to 30 images</span>
<input type="file" id="slmFile" accept="image/*" multiple>
</div>
<ul class="file-list" id="slmList"></ul>
<div class="hint">Use the ↑ ↓ buttons on each photo to reorder your slides.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Slideshow settings</p>
<div class="settings-panel">
<div class="preset-row" id="slmPresets">
<button type="button" class="preset-chip active" data-sec="3" data-tr="fade" data-res="720">🎬 Classic — 3s crossfade</button>
<button type="button" class="preset-chip" data-sec="5" data-tr="none" data-res="1080">🖼️ Portfolio — 5s clean cuts</button>
<button type="button" class="preset-chip" data-sec="2" data-tr="fade" data-res="720">⚡ Snappy — 2s crossfade</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="slmSec">Seconds per slide: <span class="val" id="slmSecVal">3s</span></label>
<input type="range" id="slmSec" min="1" max="10" value="3">
<div class="hint">How long each photo stays on screen (1–10 seconds).</div>
</div>
<div class="setting">
<label for="slmTrans">Transition</label>
<select id="slmTrans">
<option value="fade" selected>Crossfade — smooth blend</option>
<option value="none">None — clean cuts</option>
</select>
<div class="hint">Crossfade blends each slide into the next over half a second.</div>
</div>
<div class="setting">
<label for="slmRes">Output resolution</label>
<select id="slmRes">
<option value="720" selected>720p — quick &amp; light</option>
<option value="1080">1080p — Full HD</option>
</select>
<div class="hint">720p renders faster; 1080p is sharper for TVs.</div>
</div>
</div>
<p class="hint" style="margin-top:8px">🎞️ Slideshow length: <strong id="slmLen">—</strong></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Create &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="slmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Create Slideshow
</button>
<button type="button" class="btn-pro-outline" id="slmClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="slmProgWrap">
<div class="progress-bar"><i id="slmProgBar"></i></div>
<div class="progress-text" id="slmProgText">Working…</div>
</div>
<div class="results" id="slmResults">
<p class="result-head">✅ Done — your slideshow video</p>
<div class="result-summary" id="slmSummary"></div>
<div class="result-grid" id="slmGrid"></div>
</div>
<p class="hint" style="margin-top:10px">ℹ️ Honest notes: output is <strong>WebM video with no audio</strong> (browsers can't add a soundtrack client-side) — it plays in Chrome, Edge, Firefox, and Safari 14.1+. Rendering runs in real time, so a 60-second slideshow takes about 60 seconds.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — make as many slideshows as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('slmShell');
  ToolPro.themeToggle(shell, document.getElementById('slmTheme'));

  var slides = []; // {file, img, url}
  var busy = false;
  var listEl = document.getElementById('slmList');
  var btn = document.getElementById('slmBtn');
  var clearBtn = document.getElementById('slmClear');
  var secR = document.getElementById('slmSec'), secV = document.getElementById('slmSecVal');
  var transSel = document.getElementById('slmTrans');
  var resSel = document.getElementById('slmRes');
  var lenEl = document.getElementById('slmLen');

  ToolPro.bindSlider(secR, secV, function(v){ return v + 's'; });

  function refreshButtons(){
    btn.disabled = slides.length < 2 || busy;
    clearBtn.disabled = !slides.length || busy;
    var total = slides.length * (+secR.value);
    lenEl.textContent = slides.length ? (total + 's from ' + slides.length + ' photos') : '—';
  }

  function move(i, dir){
    var j = i + dir;
    if(j < 0 || j >= slides.length) return;
    var t = slides[i]; slides[i] = slides[j]; slides[j] = t;
    renderList();
  }

  function renderList(){
    listEl.innerHTML = '';
    slides.forEach(function(s, i){
      var li = document.createElement('li');
      li.className = 'file-row';
      li.innerHTML =
        '<img class="file-thumb" alt="slide">' +
        '<span class="file-name"></span>' +
        '<span class="file-status">slide ' + (i + 1) + '</span>' +
        '<button type="button" class="file-move" data-dir="-1" aria-label="Move up">↑</button>' +
        '<button type="button" class="file-move" data-dir="1" aria-label="Move down">↓</button>' +
        '<button type="button" class="file-remove" aria-label="Remove photo">&times;</button>';
      li.querySelector('.file-thumb').src = s.url;
      li.querySelector('.file-thumb').style.cssText = 'width:44px;height:44px;object-fit:cover;border-radius:6px';
      li.querySelector('.file-name').textContent = s.file.name;
      li.querySelector('.file-name').title = s.file.name;
      li.querySelectorAll('.file-move').forEach(function(b){
        b.addEventListener('click', function(){ move(i, +b.dataset.dir); });
      });
      li.querySelector('.file-remove').addEventListener('click', function(){
        URL.revokeObjectURL(s.url);
        slides.splice(i, 1);
        renderList();
      });
      listEl.appendChild(li);
    });
    refreshButtons();
  }

  function loadImage(f){
    return new Promise(function(resolve, reject){
      var url = URL.createObjectURL(f);
      var img = new Image();
      img.onload = function(){ resolve({ file: f, img: img, url: url }); };
      img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('unreadable image')); };
      img.src = url;
    });
  }

  ToolPro.dropzone(document.getElementById('slmDrop'), {
    multiple: true, accept: 'image/*', maxFiles: 30,
    onFiles: function(arr){
      if(!arr.length) return;
      var added = 0;
      var jobs = arr.filter(function(f){
        return f.type && f.type.indexOf('image/') === 0 && slides.length + added < 30;
      });
      Promise.all(jobs.map(function(f){ return loadImage(f).catch(function(){ return null; }); }))
        .then(function(results){
          results.forEach(function(r){ if(r){ slides.push(r); added++; } });
          renderList();
          document.getElementById('slmResults').classList.remove('show');
          ToolPro.toast(added + (added === 1 ? ' photo' : ' photos') + ' added', 'ok');
        });
    }
  });

  clearBtn.addEventListener('click', function(){
    slides.forEach(function(s){ URL.revokeObjectURL(s.url); });
    slides = []; renderList();
    document.getElementById('slmResults').classList.remove('show');
  });

  document.getElementById('slmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#slmPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    secR.value = chip.dataset.sec;
    secR.dispatchEvent(new Event('input'));
    transSel.value = chip.dataset.tr;
    resSel.value = chip.dataset.res;
    refreshButtons();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  secR.addEventListener('input', refreshButtons);

  function drawCover(ctx, img, W, H){
    var iw = img.naturalWidth || img.width, ih = img.naturalHeight || img.height;
    var scale = Math.max(W / iw, H / ih);
    var dw = iw * scale, dh = ih * scale;
    ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
  }

  btn.addEventListener('click', async function(){
    if(slides.length < 2 || busy) return;
    if(!window.MediaRecorder){ ToolPro.toast('Your browser cannot create video (MediaRecorder missing)', 'err'); return; }
    busy = true; refreshButtons();
    var progWrap = document.getElementById('slmProgWrap');
    var progBar = document.getElementById('slmProgBar');
    var progText = document.getElementById('slmProgText');
    var grid = document.getElementById('slmGrid');
    var resBox = document.getElementById('slmResults');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var secPer = +secR.value;
    var fade = transSel.value === 'fade';
    var outH = +resSel.value;
    var W = Math.round(outH * 16 / 9), H = outH;
    var fadeDur = fade ? Math.min(0.5, secPer / 2) : 0;
    var total = slides.length * secPer;

    var canvas = document.createElement('canvas');
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    var stream = canvas.captureStream ? canvas.captureStream(30) : null;
    if(!stream){
      progWrap.classList.remove('show'); busy = false; refreshButtons();
      ToolPro.toast('Your browser does not support canvas capture', 'err');
      return;
    }
    var mime = 'video/webm';
    if(window.MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) mime = 'video/webm;codecs=vp9';
    var rec;
    try{ rec = new MediaRecorder(stream, { mimeType: mime, videoBitsPerSecond: 5000000 }); }
    catch(e){ try{ rec = new MediaRecorder(stream, { mimeType: mime }); } catch(e2){ rec = new MediaRecorder(stream); } }
    var chunks = [];
    rec.ondataavailable = function(ev){ if(ev.data && ev.data.size) chunks.push(ev.data); };
    var stopped = new Promise(function(res){ rec.onstop = function(){ res(); }; });

    rec.start(500);
    prog(1, 'Rendering slideshow (' + total + 's, real time)…');
    var t0 = performance.now(), raf, done = false;
    function frame(){
      if(done) return;
      var t = (performance.now() - t0) / 1000;
      if(t >= total){
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, W, H);
        drawCover(ctx, slides[slides.length - 1].img, W, H);
        done = true;
        return;
      }
      var idx = Math.min(slides.length - 1, Math.floor(t / secPer));
      var local = t - idx * secPer;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, W, H);
      if(fade && fadeDur > 0 && local > secPer - fadeDur && idx + 1 < slides.length){
        drawCover(ctx, slides[idx].img, W, H);
        ctx.globalAlpha = (local - (secPer - fadeDur)) / fadeDur;
        drawCover(ctx, slides[idx + 1].img, W, H);
        ctx.globalAlpha = 1;
      }else{
        drawCover(ctx, slides[idx].img, W, H);
      }
      prog(Math.min(97, t / total * 100), 'Rendering… ' + Math.round(t) + 's of ' + total + 's');
      raf = requestAnimationFrame(frame);
    }
    frame();
    await new Promise(function(res){ setTimeout(res, total * 1000 + 400); });
    done = true;
    if(raf) cancelAnimationFrame(raf);
    prog(98, 'Finalizing…');
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
      '<button type="button" class="btn-pro">⬇ Download Video</button>';
    card.querySelector('.r-preview').src = url;
    var fname = 'slideshow-' + slides.length + 'slides.webm';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML =
      slides.length + ' photos · ' + total + 's · ' + W + '×' + H + 'px · ' + ToolPro.fmtBytes(blob.size);
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
    grid.appendChild(card);
    document.getElementById('slmSummary').textContent =
      '🎉 ' + slides.length + '-photo slideshow rendered — ' + total + ' seconds, no audio, all in your browser.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    busy = false; refreshButtons();
    ToolPro.toast('Slideshow created', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your photos (up to 30). Reorder them with the ↑ ↓ buttons on each row.
- **Step 2** — Set seconds per slide (1–10), pick Crossfade or clean cuts, and choose 720p or 1080p output.
- **Step 3** — Hit **Create Slideshow**. Each photo is drawn cover-fit onto a canvas, crossfades blend the slides, and the recording is saved as a WebM video.

## Everyday uses

- **Birthdays &amp; anniversaries** — turn party photos into a video to share in the group chat.
- **Travel recaps** — make a 30-second trip highlight reel from your best shots.
- **Portfolios** — showcase design or photography work as a clean video loop.
- **Product sellers** — show multiple product angles as one shareable video.
- **Memorials** — assemble a gentle tribute video from family photos.

## Frequently asked questions

**Why is there no music?**
Browsers can record the canvas video but can't mix an audio track into it client-side. Add music later in any free editor, or play a track alongside the video.

**Will my photos get stretched?**
No. Every photo is cover-fit — it fills the frame and crops the edges, exactly like a phone gallery's slideshow mode.

**How long can the slideshow be?**
Up to 30 photos × 10 seconds = 5 minutes. Rendering is real-time, so a 5-minute slideshow takes about 5 minutes to create.

**Is my content private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded anywhere.
