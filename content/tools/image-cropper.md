---
title: "Free Image Cropper — Crop Photos Online to Any Size"
description: "Crop photos to any size right in your browser — drag a crop box, lock aspect ratios like 1:1 or 16:9, zoom in for precision. Free, private, no sign-up."
category: image
date: 2026-10-11
draft: false
---

Cut photos to exactly what you need — profile pictures, thumbnails, banners, or print sizes. Drag a crop box over the preview, lock an aspect ratio, zoom in for pixel-perfect edges, and export as PNG or JPG. Everything happens in your browser; nothing is uploaded.

<div class="tool-shell" id="crShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Cropper</h2>
<p>Drag-to-crop with aspect-ratio presets and zoom — export crisp PNG or JPG.</p>
</div>
<button type="button" class="theme-toggle" id="crTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your image</p>
<div class="dropzone" id="crDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP · one image at a time</span>
<input type="file" id="crFile" accept="image/*">
</div>
<ul class="file-list" id="crList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Draw your crop box</p>
<div class="settings-panel">
<div class="preset-row" id="crRatios">
<button type="button" class="preset-chip active" data-r="0">🔓 Free</button>
<button type="button" class="preset-chip" data-r="1">⬛ 1:1 square</button>
<button type="button" class="preset-chip" data-r="1.3333">📺 4:3</button>
<button type="button" class="preset-chip" data-r="1.7778">🎬 16:9</button>
<button type="button" class="preset-chip" data-r="1.5">🖼️ 3:2 photo</button>
</div>
<div class="setting">
<div class="hint">Drag on the image below to draw a crop box. Touch works too.</div>
<div id="crStage" style="display:none; overflow:auto; max-width:100%; border-radius:10px; margin-top:8px;">
<div id="crInner" style="position:relative; display:inline-block; line-height:0;">
<canvas id="crCanvas" style="max-width:100%; border-radius:10px; cursor:crosshair; touch-action:none;"></canvas>
<div id="crSel" style="position:absolute; border:2px dashed #fff; box-shadow:0 0 0 9999px rgba(0,0,0,.45), 0 0 0 1px #000; display:none; pointer-events:none;"></div>
</div>
</div>
<div class="hint" id="crSizeInfo" style="margin-top:6px;"></div>
</div>
<div class="settings-grid">
<div class="setting">
<label for="crZoom">Zoom: <span class="val" id="crZoomVal">100%</span></label>
<input type="range" id="crZoom" min="50" max="300" step="10" value="100">
<div class="hint">Zoom in to crop with pixel precision.</div>
</div>
<div class="setting">
<label for="crFormat">Output format</label>
<select id="crFormat">
<option value="png" selected>PNG — crisp, larger</option>
<option value="jpeg">JPEG — smaller file</option>
</select>
<div class="hint">PNG keeps edges sharp; JPEG is lighter for photos.</div>
</div>
<div class="setting">
<label for="crQuality">JPEG quality: <span class="val" id="crQVal">92%</span></label>
<input type="range" id="crQuality" min="50" max="100" value="92">
<div class="hint">Only applies to JPEG output.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Crop &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="crBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Crop Image
</button>
<button type="button" class="btn-pro-outline" id="crReset" disabled>Reset crop</button>
<button type="button" class="btn-pro-outline" id="crClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="crProgWrap">
<div class="progress-bar"><i id="crProgBar"></i></div>
<div class="progress-text" id="crProgText">Working…</div>
</div>
<div class="results" id="crResults">
<p class="result-head">✅ Done — your cropped image</p>
<div class="result-summary" id="crSummary"></div>
<div class="result-grid" id="crGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — crop as many images as you like. Your files never leave your device.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('crShell');
  ToolPro.themeToggle(shell, document.getElementById('crTheme'));

  var listEl = document.getElementById('crList');
  var btn = document.getElementById('crBtn');
  var resetBtn = document.getElementById('crReset');
  var clearBtn = document.getElementById('crClear');
  var stage = document.getElementById('crStage');
  var inner = document.getElementById('crInner');
  var canvas = document.getElementById('crCanvas');
  var sel = document.getElementById('crSel');
  var sizeInfo = document.getElementById('crSizeInfo');
  var zoom = document.getElementById('crZoom');
  var zoomVal = document.getElementById('crZoomVal');
  var fmtSel = document.getElementById('crFormat');
  var qRange = document.getElementById('crQuality');
  var qVal = document.getElementById('crQVal');
  var chips = document.getElementById('crRatios');
  var resBox = document.getElementById('crResults');
  var grid = document.getElementById('crGrid');
  var progWrap = document.getElementById('crProgWrap');
  var progBar = document.getElementById('crProgBar');
  var progText = document.getElementById('crProgText');

  var img = null, imgFile = null, imgURL = null;
  var ratio = 0;               // 0 = free
  var crop = null;             // {x,y,w,h} in NATURAL pixels
  var dragging = false, startX = 0, startY = 0;

  ToolPro.bindSlider(zoom, zoomVal, function(v){ return v + '%'; });
  ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    ratio = parseFloat(chip.dataset.r) || 0;
    if(img && ratio > 0){ applyRatioToCrop(); draw(); }
    ToolPro.toast('Aspect: ' + chip.textContent.trim());
  });

  function baseScale(){
    return Math.min(1, 620 / img.naturalWidth);
  }
  function dispScale(){
    return baseScale() * (parseInt(zoom.value, 10) / 100);
  }
  function draw(){
    if(!img) return;
    var s = dispScale();
    var dw = Math.max(1, Math.round(img.naturalWidth * s));
    var dh = Math.max(1, Math.round(img.naturalHeight * s));
    canvas.width = dw; canvas.height = dh;
    canvas.getContext('2d').drawImage(img, 0, 0, dw, dh);
    if(crop){
      var x = Math.round(crop.x * s), y = Math.round(crop.y * s);
      var w = Math.round(crop.w * s), h = Math.round(crop.h * s);
      sel.style.display = 'block';
      sel.style.left = x + 'px'; sel.style.top = y + 'px';
      sel.style.width = w + 'px'; sel.style.height = h + 'px';
      sizeInfo.textContent = 'Crop: ' + Math.round(crop.w) + ' × ' + Math.round(crop.h) + ' px';
    }else{
      sel.style.display = 'none';
      sizeInfo.textContent = 'Drag on the image to draw a crop box.';
    }
  }

  function applyRatioToCrop(){
    if(!crop || !ratio) return;
    var h = crop.w / ratio;
    if(crop.y + h > img.naturalHeight){
      h = img.naturalHeight - crop.y;
      crop.w = h * ratio;
    }
    crop.h = h;
  }

  function canvasPos(e){
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  canvas.addEventListener('pointerdown', function(e){
    if(!img) return;
    e.preventDefault();
    var p = canvasPos(e), s = dispScale();
    dragging = true; startX = p.x; startY = p.y;
    crop = { x: p.x / s, y: p.y / s, w: 0, h: 0 };
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', function(e){
    if(!dragging || !img) return;
    var p = canvasPos(e), s = dispScale();
    var dx = p.x - startX, dy = p.y - startY;
    var w = Math.abs(dx), h = Math.abs(dy);
    if(ratio > 0 && w > 2){
      h = w / ratio;
      if(Math.abs(dy) > h){ h = Math.abs(dy); w = h * ratio; }
    }
    var nx = (dx < 0 ? startX - w : startX) / s;
    var ny = (dy < 0 ? startY - h : startY) / s;
    var nw = Math.min(w / s, img.naturalWidth - nx, img.naturalWidth);
    var nh = Math.min(h / s, img.naturalHeight - ny, img.naturalHeight);
    nx = Math.max(0, Math.min(nx, img.naturalWidth - 1));
    ny = Math.max(0, Math.min(ny, img.naturalHeight - 1));
    crop = { x: nx, y: ny, w: Math.max(1, nw), h: Math.max(1, nh) };
    draw();
  });
  function endDrag(){ dragging = false; }
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);

  zoom.addEventListener('input', draw);

  function resetAll(){
    if(imgURL){ URL.revokeObjectURL(imgURL); imgURL = null; }
    img = null; imgFile = null; crop = null; dragging = false;
    listEl.innerHTML = '';
    stage.style.display = 'none';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    btn.disabled = true; resetBtn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('crDrop'), {
    multiple: false,
    accept: 'image/*',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      imgFile = arr[0];
      imgURL = URL.createObjectURL(imgFile);
      ToolPro.fileRow(listEl, imgFile, resetAll);
      var im = new Image();
      im.onload = function(){
        img = im;
        crop = { x: 0, y: 0, w: im.naturalWidth, h: im.naturalHeight };
        if(ratio > 0) applyRatioToCrop();
        stage.style.display = '';
        draw();
        btn.disabled = false; resetBtn.disabled = false; clearBtn.disabled = false;
        ToolPro.toast('Image loaded — drag to draw a crop box', 'ok');
      };
      im.onerror = function(){ ToolPro.toast('Could not read this image.', 'err'); };
      im.src = imgURL;
    }
  });

  resetBtn.addEventListener('click', function(){
    if(!img) return;
    crop = { x: 0, y: 0, w: img.naturalWidth, h: img.naturalHeight };
    if(ratio > 0) applyRatioToCrop();
    resBox.classList.remove('show');
    draw();
    ToolPro.toast('Crop reset to full image');
  });
  clearBtn.addEventListener('click', resetAll);

  btn.addEventListener('click', function(){
    if(!img || !crop) return;
    progWrap.classList.add('show');
    progText.textContent = 'Cropping…';
    progBar.style.width = '60%';
    var x = Math.max(0, Math.round(crop.x)), y = Math.max(0, Math.round(crop.y));
    var w = Math.max(1, Math.min(Math.round(crop.w), img.naturalWidth - x));
    var h = Math.max(1, Math.min(Math.round(crop.h), img.naturalHeight - y));
    var out = document.createElement('canvas');
    out.width = w; out.height = h;
    var ctx = out.getContext('2d');
    var fmt = fmtSel.value, mime = fmt === 'jpeg' ? 'image/jpeg' : 'image/png';
    if(fmt === 'jpeg'){ ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h); }
    ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
    var dataUrl = out.toDataURL(mime, parseInt(qRange.value, 10) / 100);
    progBar.style.width = '100%';
    var base = (imgFile.name || 'image').replace(/\.[^.]+$/, '');
    var name = base + '-cropped.' + fmt;
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<img class="r-preview" alt="Cropped preview">' +
      '<div class="r-name"></div><div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download</button>';
    card.querySelector('.r-preview').src = dataUrl;
    card.querySelector('.r-name').textContent = name;
    card.querySelector('.r-stats').textContent = w + ' × ' + h + ' px · ' + fmt.toUpperCase() + ' · ' + ToolPro.fmtBytes(Math.round(dataUrl.length * 0.75));
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(dataUrl, name); });
    grid.innerHTML = ''; grid.appendChild(card);
    document.getElementById('crSummary').textContent =
      '🎉 Cropped to ' + w + ' × ' + h + ' px — download below.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Image cropped', 'ok');
  });
})();
</script>

## How it works

1. **Add one image** — drag &amp; drop or browse for a JPG, PNG, or WebP.
2. **Pick an aspect ratio** — Free, 1:1 square, 4:3, 16:9, or 3:2 photo — then drag on the image to draw the crop box. Zoom in for precision.
3. **Choose the output** — PNG for crisp edges or JPEG (with quality slider) for smaller files.
4. **Hit "Crop Image"** — preview the result and download it instantly.

## Everyday uses

- **Profile pictures** — square 1:1 crops for LinkedIn, WhatsApp, and social avatars.
- **YouTube thumbnails** — exact 16:9 crops that fill the frame.
- **Sellers** — consistent 4:3 product photos for cleaner listings.
- **Print** — 3:2 crops that match standard photo print sizes.
- **Screenshots** — cut away clutter before sharing in chats and docs.

**Tip:** crop at the largest size you might ever need — you can always shrink later, but you cannot get lost detail back.

## Frequently asked questions

**Is it really free?**
Yes — unlimited cropping, no sign-up, no credit card, no watermarks.

**Does my image get uploaded?**
No. Your file never leaves your browser; the crop happens on your device.

**Can I crop on my phone?**
Yes — drag works with touch, and the zoom slider helps on small screens.

**Why is my crop box locked to a shape?**
You picked an aspect-ratio preset (1:1, 16:9…). Choose "Free" to draw any shape.
