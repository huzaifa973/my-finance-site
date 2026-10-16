---
title: "Pixelator — Pixelate & Blur Faces and Private Details in Photos"
description: "Pixelate or blur faces, plates and private details in photos with a brush — or pixelate the whole image. Undo supported, free, fully private."
category: image
date: 2026-10-16
draft: false
---

Sharing a photo but need to hide a face, a license plate, or an address? Paint over any region with the pixelate or blur brush — or pixelate the entire image in one click. Multi-step undo included, and your photo never leaves your browser.

<div class="tool-shell" id="pxlShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h10v4H10v-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pixelator</h2>
<p>Brush over faces and private details to pixelate or blur them — right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="pxlTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your photo</p>
<div class="dropzone" id="pxlDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your photo here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="pxlFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="pxlList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Brush settings</p>
<div class="settings-panel">
<div class="preset-row" id="pxlPresets">
<button type="button" class="preset-chip active" data-mode="pixel">🧱 Pixelate brush</button>
<button type="button" class="preset-chip" data-mode="blur">💧 Blur brush</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pxlBrush">Brush size: <span class="val" id="pxlBrushVal">120px</span></label>
<input type="range" id="pxlBrush" min="20" max="400" step="10" value="120">
</div>
<div class="setting">
<label for="pxlBlock">Pixel block size: <span class="val" id="pxlBlockVal">16px</span></label>
<input type="range" id="pxlBlock" min="6" max="60" step="2" value="16">
<div class="hint">Bigger blocks = stronger censoring.</div>
</div>
<div class="setting">
<label for="pxlBlur">Blur strength: <span class="val" id="pxlBlurVal">12px</span></label>
<input type="range" id="pxlBlur" min="4" max="40" step="1" value="12">
</div>
</div>
</div>
<div id="pxlCanvasWrap" style="display:none;margin-top:12px;">
<canvas id="pxlCanvas" style="max-width:100%;height:auto;border-radius:8px;touch-action:none;cursor:crosshair;"></canvas>
<div class="hint">Click and drag over the photo to censor regions. Works with touch too.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Finish &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pxlAll" disabled>
<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h10v4H10v-4z"/></svg>
Pixelate Whole Image
</button>
<button type="button" class="btn-pro-outline" id="pxlUndo" disabled>↩ Undo</button>
<button type="button" class="btn-pro" id="pxlBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
<button type="button" class="btn-pro-outline" id="pxlClear" disabled>Clear</button>
</div>
<div class="results" id="pxlResults">
<p class="result-head">✅ Your censored photo</p>
<div class="result-summary" id="pxlSummary"></div>
<div class="result-grid" id="pxlGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Censor as many photos as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pxlShell');
  ToolPro.themeToggle(shell, document.getElementById('pxlTheme'));
  var canvas = document.getElementById('pxlCanvas');
  var ctx = canvas.getContext('2d');
  var wrap = document.getElementById('pxlCanvasWrap');
  var brushR = document.getElementById('pxlBrush');
  var brushV = document.getElementById('pxlBrushVal');
  var blockR = document.getElementById('pxlBlock');
  var blockV = document.getElementById('pxlBlockVal');
  var blurR = document.getElementById('pxlBlur');
  var blurV = document.getElementById('pxlBlurVal');
  var presets = document.getElementById('pxlPresets');
  var allBtn = document.getElementById('pxlAll');
  var undoBtn = document.getElementById('pxlUndo');
  var dlBtn = document.getElementById('pxlBtn');
  var clearBtn = document.getElementById('pxlClear');
  var resBox = document.getElementById('pxlResults');
  var summary = document.getElementById('pxlSummary');
  var grid = document.getElementById('pxlGrid');
  var mode = 'pixel';
  var loaded = false, drawing = false;
  var undoStack = [];
  var imgName = 'photo';

  ToolPro.bindSlider(brushR, brushV, function(v){ return v + 'px'; });
  ToolPro.bindSlider(blockR, blockV, function(v){ return v + 'px'; });
  ToolPro.bindSlider(blurR, blurV, function(v){ return v + 'px'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    ToolPro.toast('Brush: ' + mode);
  });

  function pushUndo(){
    undoStack.push(canvas.toDataURL('image/png'));
    if(undoStack.length > 12) undoStack.shift();
    undoBtn.disabled = false;
  }

  ToolPro.dropzone(document.getElementById('pxlDrop'), {
    multiple: false, accept: 'image/png,image/jpeg,image/webp', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      imgName = f.name.replace(/\.[^.]+$/, '');
      var url = URL.createObjectURL(f);
      var img = new Image();
      img.onload = function(){
        var maxDim = 1600;
        var sc = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight));
        canvas.width = Math.round(img.naturalWidth * sc);
        canvas.height = Math.round(img.naturalHeight * sc);
        ctx.imageSmoothingEnabled = true;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        loaded = true;
        undoStack = [];
        undoBtn.disabled = true;
        wrap.style.display = '';
        resBox.classList.remove('show');
        refreshButtons();
        ToolPro.toast('Photo loaded — paint to censor', 'ok');
      };
      img.onerror = function(){ URL.revokeObjectURL(url); ToolPro.toast('Could not load that image', 'err'); };
      img.src = url;
      var listEl = document.getElementById('pxlList');
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, f, function(){ resetAll(); });
    }
  });

  function refreshButtons(){
    allBtn.disabled = !loaded;
    dlBtn.disabled = !loaded;
    clearBtn.disabled = !loaded;
  }
  function resetAll(){
    loaded = false;
    wrap.style.display = 'none';
    document.getElementById('pxlList').innerHTML = '';
    resBox.classList.remove('show');
    undoStack = [];
    refreshButtons();
  }
  clearBtn.addEventListener('click', resetAll);

  function canvasPos(e){
    var r = canvas.getBoundingClientRect();
    var cx = (e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX);
    var cy = (e.touches && e.touches[0] ? e.touches[0].clientY : e.clientY);
    return {
      x: (cx - r.left) * (canvas.width / r.width),
      y: (cy - r.top) * (canvas.height / r.height)
    };
  }

  function pixelateRect(x, y, w, h){
    var bs = parseInt(blockR.value, 10);
    x = Math.max(0, Math.round(x)); y = Math.max(0, Math.round(y));
    w = Math.min(Math.round(w), canvas.width - x);
    h = Math.min(Math.round(h), canvas.height - y);
    if(w <= 0 || h <= 0) return;
    var tiny = document.createElement('canvas');
    tiny.width = Math.max(1, Math.round(w / bs));
    tiny.height = Math.max(1, Math.round(h / bs));
    var tctx = tiny.getContext('2d');
    tctx.drawImage(canvas, x, y, w, h, 0, 0, tiny.width, tiny.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(tiny, 0, 0, tiny.width, tiny.height, x, y, w, h);
    ctx.imageSmoothingEnabled = true;
  }
  function blurRect(x, y, w, h){
    var amt = parseInt(blurR.value, 10);
    x = Math.max(0, Math.round(x)); y = Math.max(0, Math.round(y));
    w = Math.min(Math.round(w), canvas.width - x);
    h = Math.min(Math.round(h), canvas.height - y);
    if(w <= 0 || h <= 0) return;
    var tmp = document.createElement('canvas');
    tmp.width = w; tmp.height = h;
    tmp.getContext('2d').drawImage(canvas, x, y, w, h, 0, 0, w, h);
    ctx.save();
    ctx.filter = 'blur(' + amt + 'px)';
    ctx.drawImage(tmp, x, y);
    ctx.restore();
  }
  function applyAt(p){
    var s = parseInt(brushR.value, 10) * (canvas.width / canvas.getBoundingClientRect().width);
    var half = s / 2;
    if(mode === 'pixel') pixelateRect(p.x - half, p.y - half, s, s);
    else blurRect(p.x - half, p.y - half, s, s);
  }

  canvas.addEventListener('pointerdown', function(e){
    if(!loaded) return;
    pushUndo();
    drawing = true;
    canvas.setPointerCapture(e.pointerId);
    applyAt(canvasPos(e));
    e.preventDefault();
  });
  canvas.addEventListener('pointermove', function(e){
    if(!drawing || !loaded) return;
    applyAt(canvasPos(e));
  });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(function(ev){
    canvas.addEventListener(ev, function(){ drawing = false; });
  });

  undoBtn.addEventListener('click', function(){
    var prev = undoStack.pop();
    if(!prev) return;
    var img = new Image();
    img.onload = function(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
      undoBtn.disabled = !undoStack.length;
      ToolPro.toast('Undone');
    };
    img.src = prev;
  });

  allBtn.addEventListener('click', function(){
    if(!loaded) return;
    pushUndo();
    if(mode === 'blur') blurRect(0, 0, canvas.width, canvas.height);
    else pixelateRect(0, 0, canvas.width, canvas.height);
    ToolPro.toast('Whole image ' + (mode === 'blur' ? 'blurred' : 'pixelated'), 'ok');
  });

  dlBtn.addEventListener('click', function(){
    if(!loaded) return;
    var url = canvas.toDataURL('image/png');
    ToolPro.download(url, imgName + '-censored.png');
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    var im = document.createElement('img');
    im.className = 'r-preview'; im.src = url; im.alt = 'Censored preview';
    card.appendChild(im);
    var nm = document.createElement('div');
    nm.className = 'r-name'; nm.textContent = imgName + '-censored.png';
    card.appendChild(nm);
    var st = document.createElement('div');
    st.className = 'r-stats';
    st.textContent = canvas.width + '×' + canvas.height + 'px PNG';
    card.appendChild(st);
    grid.appendChild(card);
    summary.textContent = '🎉 Downloaded — share it safely.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Downloaded', 'ok');
  });
})();
</script>

## How it works

- **Step 1** — Drop in your photo (JPG, PNG, or WebP).
- **Step 2** — Pick the pixelate or blur brush, set the brush size, pixel block size, and blur strength — then paint over faces, plates, addresses, or anything private. Undo backs out the last 12 strokes.
- **Step 3** — Use "Pixelate Whole Image" for a fully censored version, then download as PNG.

## Everyday uses

- **Parents** — hide kids' faces before posting family photos publicly.
- **Sellers** — blur license plates in car listing photos.
- **Reviewers** — censor addresses on screenshots and unboxing photos.
- **Anyone** — anonymize profile pictures and memes.

**Rule of thumb:** use a block size at least as tall as the text you want to hide — if you can still read it, go bigger.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/pixelator.md tool_name=read]
