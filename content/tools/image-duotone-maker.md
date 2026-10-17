---
title: "Free Duotone Image Maker — Two-Tone Photos Online"
description: "Turn any photo into a bold two-tone duotone image free. Pick two colors, tune contrast, preview live and download a PNG. Private — files never leave your browser."
category: image
date: 2026-10-17
draft: false
---

Duotone images — one photo in two tones — look sharp on posters, album covers and social posts. Upload a photo, pick a dark and a light color, and get a bold two-tone version in seconds. Everything runs 100% in your browser — your files never leave your browser — so it's free forever with no sign-up.

<div class="tool-shell" id="dtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20z" fill="currentColor"/><path d="M12 2a10 10 0 1 1 0 20z" fill="currentColor" fill-opacity=".35"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Free Duotone Image Maker</h2>
<p>Recolor any photo in two tones — pick the colors, tune the contrast, download the PNG.</p>
</div>
<button type="button" class="theme-toggle" id="dtTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload your image</p>
<div class="dropzone" id="dtDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="dtFile" accept="image/*">
</div>
<ul class="file-list" id="dtList"></ul>
<div class="hint" id="dtInfo">No image loaded yet.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Choose your duotone colors</p>
<div class="settings-panel">
<div class="preset-row" id="dtPresets">
<button type="button" class="preset-chip active" data-dark="#14245e" data-light="#f2e3c6">🌌 Midnight Blue</button>
<button type="button" class="preset-chip" data-dark="#3b1f0b" data-light="#ffb347">🔥 Retro Orange</button>
<button type="button" class="preset-chip" data-dark="#451a2e" data-light="#ffd6e4">🌸 Rose Gold</button>
<button type="button" class="preset-chip" data-dark="#0b2e1a" data-light="#cdebc0">🌲 Forest</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="dtDark">Dark tone (shadows)</label>
<div style="display:flex;gap:8px;align-items:center;">
<input type="color" id="dtDark" value="#14245e">
<input type="text" id="dtDarkHex" value="#14245e" maxlength="7" spellcheck="false" style="max-width:110px;">
</div>
<div class="hint">Replaces the dark areas of your photo.</div>
</div>
<div class="setting">
<label for="dtLight">Light tone (highlights)</label>
<div style="display:flex;gap:8px;align-items:center;">
<input type="color" id="dtLight" value="#f2e3c6">
<input type="text" id="dtLightHex" value="#f2e3c6" maxlength="7" spellcheck="false" style="max-width:110px;">
</div>
<div class="hint">Replaces the bright areas of your photo.</div>
</div>
<div class="setting">
<label for="dtContrast">Contrast: <span class="val" id="dtContrastVal">1×</span></label>
<input type="range" id="dtContrast" min="0.5" max="2" step="0.05" value="1">
<div class="hint">Higher contrast pushes shadows and highlights further apart for a punchier look.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div style="text-align:center;">
<canvas id="dtCanvas" style="display:none;max-width:100%;height:auto;border-radius:10px;"></canvas>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="dtGo" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20z"/><path d="M12 2a10 10 0 1 1 0 20z" fill-opacity=".35"/></svg>
Apply Duotone
</button>
<button type="button" class="btn-pro-outline" id="dtDownload" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download PNG
</button>
</div>
<div class="results" id="dtResults">
<p class="result-head">🖼️ Preview status</p>
<div class="result-summary" id="dtSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Make as many duotone images as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('dtShell');
  ToolPro.themeToggle(shell, document.getElementById('dtTheme'));

  var canvas = document.getElementById('dtCanvas');
  var ctx = canvas.getContext('2d');
  var orig = document.createElement('canvas');
  var proc = document.createElement('canvas');
  var pctx = proc.getContext('2d');
  var listEl = document.getElementById('dtList');
  var infoEl = document.getElementById('dtInfo');
  var darkIn = document.getElementById('dtDark');
  var darkHex = document.getElementById('dtDarkHex');
  var lightIn = document.getElementById('dtLight');
  var lightHex = document.getElementById('dtLightHex');
  var contrastR = document.getElementById('dtContrast');
  var contrastV = document.getElementById('dtContrastVal');
  var presets = document.getElementById('dtPresets');
  var goBtn = document.getElementById('dtGo');
  var dlBtn = document.getElementById('dtDownload');
  var resBox = document.getElementById('dtResults');
  var sumEl = document.getElementById('dtSummary');
  var loaded = false, fileSize = 0, fileName = '';

  function hexToRgb(h){
    h = (h || '').replace('#', '');
    if(h.length === 3) h = h.charAt(0) + h.charAt(0) + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2);
    var n = parseInt(h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function validHex(h){ return /^#?[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(h); }
  function normHex(h){
    h = h.replace('#', '');
    if(h.length === 3) h = h.charAt(0) + h.charAt(0) + h.charAt(1) + h.charAt(1) + h.charAt(2) + h.charAt(2);
    return '#' + h.toLowerCase();
  }

  function updateSummary(){
    if(!loaded) return;
    sumEl.innerHTML = 'Dimensions: <strong>' + proc.width + '×' + proc.height + 'px</strong>' +
      ' · File size: <strong>' + ToolPro.fmtBytes(fileSize) + '</strong>' +
      ' · Preview scaled to 720px max — download is full resolution';
    resBox.classList.add('show');
  }

  function render(){
    if(!loaded) return;
    var w = proc.width, h = proc.height;
    var octx = orig.getContext('2d');
    var src = octx.getImageData(0, 0, w, h);
    var dst = pctx.createImageData(w, h);
    var sd = src.data, dd = dst.data;
    var dark = hexToRgb(darkIn.value), light = hexToRgb(lightIn.value);
    var c = parseFloat(contrastR.value) || 1;
    for(var i = 0; i < sd.length; i += 4){
      var t = (0.299 * sd[i] + 0.587 * sd[i+1] + 0.114 * sd[i+2]) / 255;
      t = (t - 0.5) * c + 0.5;
      if(t < 0) t = 0; else if(t > 1) t = 1;
      dd[i]   = Math.round(dark.r + (light.r - dark.r) * t);
      dd[i+1] = Math.round(dark.g + (light.g - dark.g) * t);
      dd[i+2] = Math.round(dark.b + (light.b - dark.b) * t);
      dd[i+3] = 255;
    }
    pctx.putImageData(dst, 0, 0);
    var s = Math.min(1, 720 / Math.max(w, h));
    canvas.width = Math.max(1, Math.round(w * s));
    canvas.height = Math.max(1, Math.round(h * s));
    ctx.drawImage(proc, 0, 0, canvas.width, canvas.height);
    updateSummary();
  }

  function clearAll(){
    loaded = false;
    listEl.innerHTML = '';
    canvas.style.display = 'none';
    infoEl.textContent = 'No image loaded yet.';
    goBtn.disabled = true;
    dlBtn.disabled = true;
    resBox.classList.remove('show');
  }

  function loadFile(file){
    var url = URL.createObjectURL(file);
    var im = new Image();
    im.onload = function(){
      var w = im.naturalWidth, h = im.naturalHeight;
      orig.width = w; orig.height = h;
      proc.width = w; proc.height = h;
      orig.getContext('2d').drawImage(im, 0, 0, w, h);
      fileSize = file.size;
      fileName = file.name;
      loaded = true;
      canvas.style.display = 'block';
      infoEl.textContent = file.name + ' — ' + w + '×' + h + 'px · ' + ToolPro.fmtBytes(file.size);
      render();
      goBtn.disabled = false;
      dlBtn.disabled = false;
      URL.revokeObjectURL(url);
      ToolPro.toast('Image loaded', 'ok');
    };
    im.onerror = function(){
      URL.revokeObjectURL(url);
      ToolPro.toast('That file could not be read as an image', 'err');
    };
    im.src = url;
  }

  ToolPro.dropzone(document.getElementById('dtDrop'), {
    multiple: false,
    accept: 'image/*',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr[0]) return;
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, arr[0], clearAll);
      loadFile(arr[0]);
    }
  });

  function pairHex(picker, text){
    picker.addEventListener('input', function(){
      text.value = picker.value;
      render();
    });
    text.addEventListener('input', function(){
      var v = text.value.trim();
      if(validHex(v)){
        picker.value = normHex(v);
        render();
      }
    });
  }
  pairHex(darkIn, darkHex);
  pairHex(lightIn, lightHex);

  ToolPro.bindSlider(contrastR, contrastV, function(v){
    return (Math.round(parseFloat(v) * 100) / 100) + '×';
  });
  contrastR.addEventListener('input', function(){ render(); });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip');
    if(!chip) return;
    var chips = presets.querySelectorAll('.preset-chip');
    for(var i = 0; i < chips.length; i++) chips[i].classList.remove('active');
    chip.classList.add('active');
    darkIn.value = chip.getAttribute('data-dark');
    darkHex.value = chip.getAttribute('data-dark');
    lightIn.value = chip.getAttribute('data-light');
    lightHex.value = chip.getAttribute('data-light');
    render();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  goBtn.addEventListener('click', function(){
    render();
    ToolPro.toast('Duotone applied', 'ok');
  });

  dlBtn.addEventListener('click', function(){
    if(!loaded) return;
    var base = fileName.replace(/\.[^.]+$/, '') || 'image';
    ToolPro.download(proc.toDataURL('image/png'), base + '-duotone.png');
    ToolPro.toast('PNG downloaded', 'ok');
  });
})();
</script>

## How it works

- **Step 1** — Upload a JPG, PNG or WebP photo. It is drawn to an offscreen canvas at full resolution — nothing is sent anywhere, because your files never leave your browser.
- **Step 2** — Pick a dark tone (replaces the shadows) and a light tone (replaces the highlights). Try a preset or type your own hex codes, then tune the contrast slider.
- **Step 3** — Every pixel's brightness is mapped through your two colors and shown in a live preview. Hit Download PNG for the full-resolution two-tone image.

## Everyday uses

- **Posters and flyers** — turn any photo into a bold one-ink-style graphic.
- **Brand content** — recolor photos to match your brand's exact colors.
- **Album art and social headers** — get the designer look without a designer.
- **Video thumbnails** — high-contrast two-tone images pop at small sizes.
