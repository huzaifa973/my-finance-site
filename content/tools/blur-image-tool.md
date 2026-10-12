---
title: "Free Image Blur Tool — Blur, Pixelate & Censor Photos Online"
description: "Blur a whole photo, pixelate it, or censor faces, plates and text by dragging a box over them. Free and private — files never leave your browser."
category: image
date: 2026-10-12
draft: false
---

## How it works

Upload a photo, then blur the whole image, pixelate it, or drag boxes over faces, license plates, names and anything else that should stay hidden. Everything happens on your device — the image is never uploaded anywhere.

<div class="tool-shell" id="blrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><circle cx="5" cy="5" r="1.8"/><circle cx="12" cy="5" r="1.8" fill-opacity=".55"/><circle cx="19" cy="5" r="1.8" fill-opacity=".3"/><circle cx="5" cy="12" r="1.8" fill-opacity=".55"/><circle cx="12" cy="12" r="1.8"/><circle cx="19" cy="12" r="1.8" fill-opacity=".55"/><circle cx="5" cy="19" r="1.8" fill-opacity=".3"/><circle cx="12" cy="19" r="1.8" fill-opacity=".55"/><circle cx="19" cy="19" r="1.8"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Blur &amp; Censor Tool</h2>
<p>Blur or pixelate a whole photo — or drag a box to hide faces, plates and private details.</p>
</div>
<button type="button" class="theme-toggle" id="blrTheme">🌙 Dark</button>
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
<div class="dropzone" id="blrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="blrFile" accept="image/png,image/jpeg,image/webp">
</div>
<div class="hint" id="blrInfo">No image loaded yet.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Choose the effect</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="blrMode">Mode</label>
<select id="blrMode">
<option value="blur" selected>Blur whole image</option>
<option value="pixel">Pixelate whole image</option>
<option value="region">Censor a region (drag on image)</option>
</select>
<div class="hint">Region mode hides only the boxes you draw — the rest stays sharp.</div>
</div>
<div class="setting">
<label for="blrEffect">Region effect</label>
<select id="blrEffect">
<option value="blur" selected>Blur the region</option>
<option value="pixel">Pixelate the region</option>
</select>
<div class="hint">Used only in Censor a region mode. Pixelate hides details more thoroughly.</div>
</div>
<div class="setting">
<label for="blrBlur">Blur strength: <span class="val" id="blrBlurVal">12px</span></label>
<input type="range" id="blrBlur" min="0" max="30" value="12">
<div class="hint">Higher means softer and harder to recognize.</div>
</div>
<div class="setting">
<label for="blrBlock">Pixel block size: <span class="val" id="blrBlockVal">16px</span></label>
<input type="range" id="blrBlock" min="4" max="60" value="16">
<div class="hint">Bigger blocks hide more. 16–24px works well for faces.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="hint">In Censor mode, press and drag on the image to draw a box — that area is hidden instantly. Add as many boxes as you need.</div>
<div style="text-align:center;">
<canvas id="blrCanvas" style="display:none;max-width:100%;height:auto;border-radius:10px;touch-action:none;"></canvas>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="blrDownload" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
<button type="button" class="btn-pro-outline" id="blrUndo" disabled>Undo region</button>
<button type="button" class="btn-pro-outline" id="blrReset" disabled>Reset regions</button>
</div>
<div class="results" id="blrResults">
<p class="result-head">🖼️ Preview status</p>
<div class="result-summary" id="blrSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — blur as many images as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('blrShell');
  ToolPro.themeToggle(shell, document.getElementById('blrTheme'));

  var canvas = document.getElementById('blrCanvas');
  var ctx = canvas.getContext('2d');
  var orig = document.createElement('canvas');
  var infoEl = document.getElementById('blrInfo');
  var modeSel = document.getElementById('blrMode');
  var effectSel = document.getElementById('blrEffect');
  var blurRange = document.getElementById('blrBlur');
  var blurVal = document.getElementById('blrBlurVal');
  var blockRange = document.getElementById('blrBlock');
  var blockVal = document.getElementById('blrBlockVal');
  var dlBtn = document.getElementById('blrDownload');
  var undoBtn = document.getElementById('blrUndo');
  var resetBtn = document.getElementById('blrReset');
  var resBox = document.getElementById('blrResults');
  var sumEl = document.getElementById('blrSummary');
  var loaded = false;
  var regions = [];
  var drag = null;

  function refreshButtons(){
    dlBtn.disabled = !loaded;
    undoBtn.disabled = !regions.length;
    resetBtn.disabled = !regions.length;
  }

  function modeName(){
    var m = modeSel.value;
    return m === 'blur' ? 'Blur whole image' : (m === 'pixel' ? 'Pixelate whole image' : 'Censor regions');
  }

  function updateSummary(msg){
    if(!loaded) return;
    sumEl.innerHTML = (msg ? msg + '<br>' : '') +
      'Image: <strong>' + canvas.width + '×' + canvas.height + 'px</strong> · Mode: <strong>' +
      modeName() + '</strong> · Regions hidden: <strong>' + regions.length + '</strong>';
    resBox.classList.add('show');
  }

  function pixelateInto(sx, sy, sw, sh, block){
    var tw = Math.max(1, Math.round(sw / block));
    var th = Math.max(1, Math.round(sh / block));
    var t = document.createElement('canvas');
    t.width = tw; t.height = th;
    t.getContext('2d').drawImage(orig, sx, sy, sw, sh, 0, 0, tw, th);
    ctx.save();
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(t, 0, 0, tw, th, sx, sy, sw, sh);
    ctx.restore();
  }

  function applyRegion(r){
    if(effectSel.value === 'pixel'){
      pixelateInto(r.x, r.y, r.w, r.h, parseInt(blockRange.value, 10));
    } else {
      var b = parseInt(blurRange.value, 10) || 12;
      ctx.save();
      ctx.beginPath();
      ctx.rect(r.x, r.y, r.w, r.h);
      ctx.clip();
      ctx.filter = 'blur(' + b + 'px)';
      ctx.drawImage(orig, 0, 0);
      ctx.restore();
      ctx.filter = 'none';
    }
  }

  function render(){
    if(!loaded) return;
    var w = canvas.width, h = canvas.height;
    ctx.filter = 'none';
    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(orig, 0, 0);
    var mode = modeSel.value;
    if(mode === 'blur'){
      var b = parseInt(blurRange.value, 10);
      if(b > 0){
        ctx.filter = 'blur(' + b + 'px)';
        ctx.drawImage(orig, 0, 0);
        ctx.filter = 'none';
      }
    } else if(mode === 'pixel'){
      pixelateInto(0, 0, w, h, parseInt(blockRange.value, 10));
    } else {
      for(var i = 0; i < regions.length; i++) applyRegion(regions[i]);
    }
  }

  function loadFile(file){
    var url = URL.createObjectURL(file);
    var im = new Image();
    im.onload = function(){
      var maxDim = 2000;
      var w = im.naturalWidth, h = im.naturalHeight;
      if(w > maxDim || h > maxDim){
        var s = maxDim / Math.max(w, h);
        w = Math.round(w * s); h = Math.round(h * s);
      }
      orig.width = w; orig.height = h;
      orig.getContext('2d').drawImage(im, 0, 0, w, h);
      canvas.width = w; canvas.height = h;
      regions = [];
      loaded = true;
      canvas.style.display = 'block';
      infoEl.textContent = file.name + ' — ' + w + '×' + h + 'px · ' + ToolPro.fmtBytes(file.size);
      render();
      refreshButtons();
      updateSummary('Image loaded. Adjust the effect, then download your copy.');
      URL.revokeObjectURL(url);
      ToolPro.toast('Image loaded', 'ok');
    };
    im.onerror = function(){
      URL.revokeObjectURL(url);
      ToolPro.toast('That file could not be read as an image', 'err');
    };
    im.src = url;
  }

  ToolPro.dropzone(document.getElementById('blrDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    maxFiles: 1,
    onFiles: function(arr){ if(arr[0]) loadFile(arr[0]); }
  });

  modeSel.addEventListener('change', function(){ render(); updateSummary(); });
  effectSel.addEventListener('change', function(){ render(); });
  blurRange.addEventListener('input', function(){
    blurVal.textContent = blurRange.value + 'px';
    render();
  });
  blockRange.addEventListener('input', function(){
    blockVal.textContent = blockRange.value + 'px';
    render();
  });

  function toCanvas(e){
    var rect = canvas.getBoundingClientRect();
    var x = (e.clientX - rect.left) * canvas.width / rect.width;
    var y = (e.clientY - rect.top) * canvas.height / rect.height;
    return {
      x: Math.max(0, Math.min(canvas.width, x)),
      y: Math.max(0, Math.min(canvas.height, y))
    };
  }

  function normRect(d){
    return {
      x: Math.round(Math.min(d.x0, d.x1)),
      y: Math.round(Math.min(d.y0, d.y1)),
      w: Math.round(Math.abs(d.x1 - d.x0)),
      h: Math.round(Math.abs(d.y1 - d.y0))
    };
  }

  canvas.addEventListener('pointerdown', function(e){
    if(!loaded || modeSel.value !== 'region') return;
    var p = toCanvas(e);
    drag = { x0: p.x, y0: p.y, x1: p.x, y1: p.y };
    try { canvas.setPointerCapture(e.pointerId); } catch(err) {}
  });

  canvas.addEventListener('pointermove', function(e){
    if(!drag) return;
    var p = toCanvas(e);
    drag.x1 = p.x; drag.y1 = p.y;
    render();
    var r = normRect(drag);
    ctx.save();
    ctx.strokeStyle = '#ff3860';
    ctx.lineWidth = Math.max(2, canvas.width / 400);
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(r.x, r.y, r.w, r.h);
    ctx.restore();
  });

  function endDrag(){
    if(!drag) return;
    var r = normRect(drag);
    drag = null;
    if(r.w >= 8 && r.h >= 8){
      regions.push(r);
      ToolPro.toast('Region hidden — ' + regions.length + ' total', 'ok');
    }
    render();
    refreshButtons();
    updateSummary();
  }

  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', function(){ drag = null; render(); });

  undoBtn.addEventListener('click', function(){
    regions.pop();
    render();
    refreshButtons();
    updateSummary();
  });

  resetBtn.addEventListener('click', function(){
    regions = [];
    render();
    refreshButtons();
    updateSummary();
    ToolPro.toast('All regions cleared');
  });

  dlBtn.addEventListener('click', function(){
    if(!loaded) return;
    ToolPro.download(canvas.toDataURL('image/png'), 'blurred-image.png');
    updateSummary('Downloaded as PNG. The original file on your device was not changed.');
    ToolPro.toast('Image downloaded', 'ok');
  });

  refreshButtons();
})();
</script>

## Everyday uses

- **Selling online:** hide license plates, house numbers and faces in listing photos before posting them publicly.
- **Screenshots for work:** censor names, email addresses, order numbers and chat messages before sharing a screenshot.
- **Family photos:** blur children's faces in photos you post on public social media.
- **Documents:** cover signatures, account numbers and addresses in scanned letters or ID photos.
- **Artistic effects:** soften a busy background so the main subject stands out.

## Frequently asked questions

**Is blurring enough to hide something permanently?**
Once you download the result, the hidden area is baked into the new image — the original detail is not stored in the file and cannot be recovered from it. For very sensitive details (like text), pixelate with a large block size hides more thoroughly than a light blur.

**Does my photo get uploaded to a server?**
No. The tool runs 100% in your browser using the Canvas API. Your image never leaves your device, which is exactly what you want when censoring private photos.

**What is the difference between blur and pixelate?**
Blur smears the area smoothly — good for faces in casual photos. Pixelate replaces the area with big colored squares — better for text, numbers and plates, because shapes and letters become unreadable even at strong settings.
