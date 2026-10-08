---
title: "Free Image Resizer — Resize Images to Any Size Online"
description: "Resize any image to exact pixels, a percentage, or a max file size — without losing quality. Free, no sign-up, runs 100% in your browser."
date: 2026-10-08
draft: false
---

Resize images for profile pictures, blog thumbnails, or social media — without cropping and without distortion. Upload a JPG, PNG, or WebP, type the width and height you need (aspect ratio locks automatically), or shrink by percentage. Everything happens in your browser; your photos never leave your device.

## How it works

<div class="tool-shell" id="rsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm11-6H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H6V7h12v12z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Image Resizer</h2>
<p>Resize to exact pixels, a percentage, or a target file size — proportions locked, no distortion.</p>
</div>
<button type="button" class="theme-toggle" id="rsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload an image</p>
<div class="dropzone" id="rsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP</span>
<input type="file" id="rsFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="rsList"></ul>
<p id="rsOrigInfo" style="font-size:.9rem;color:var(--tp-muted);margin:.6rem 0 0"></p>
</div>
<div class="tool-step" id="rsStep2" style="display:none">
<p class="tool-step-title"><span class="tool-step-num">2</span> Resize settings</p>
<div class="settings-panel">
<div class="preset-row" id="rsPresets">
<button type="button" class="preset-chip" data-w="1280" data-h="">🖥️ HD — 1280px wide</button>
<button type="button" class="preset-chip" data-w="400" data-h="400">👤 Profile — 400×400</button>
<button type="button" class="preset-chip" data-pct="50">📉 Half size — 50%</button>
<button type="button" class="preset-chip" data-kb="200">📧 Email — 200KB target</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rsMode">Resize by</label>
<select id="rsMode">
<option value="px">Exact pixels</option>
<option value="pct">Percentage</option>
<option value="kbsize">Target file size (KB)</option>
</select>
</div>
<div class="setting" id="rsPx">
<label>Dimensions</label>
<div style="display:flex;gap:.5rem;align-items:center">
<input type="number" id="rsW" class="tool-input" min="1" placeholder="width" style="width:110px">
<span>×</span>
<input type="number" id="rsH" class="tool-input" min="1" placeholder="height" style="width:110px">
<span style="font-size:.85rem;color:var(--tp-muted)">px</span>
</div>
</div>
<div class="setting" id="rsPct" style="display:none">
<label for="rsP">Percentage: <span class="val" id="rsPVal">50%</span></label>
<input type="range" id="rsPRange" min="1" max="400" value="50">
<input type="number" id="rsP" class="tool-input" min="1" max="400" value="50" style="margin-top:.4rem">
<div class="hint">Upscaling beyond 100% can't add real detail — downscaling preserves quality.</div>
</div>
<div class="setting" id="rsKb" style="display:none">
<label for="rsK">Target file size: <span class="val" id="rsKVal">200 KB</span></label>
<input type="range" id="rsKRange" min="5" max="5000" step="5" value="200">
<input type="number" id="rsK" class="tool-input" min="5" value="200" style="margin-top:.4rem">
<div class="hint">Perfect for portals that demand "photo under 200KB".</div>
</div>
<div class="toggle-row">
<span class="t-label">🔒 Keep original proportions (no distortion)</span>
<label class="toggle"><input type="checkbox" id="rsLock" checked><span class="track"></span></label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Resize &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm11-6H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H6V7h12v12z"/></svg>
Resize image
</button>
<button type="button" class="btn-pro-outline" id="rsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="rsProgWrap">
<div class="progress-bar"><i id="rsProgBar"></i></div>
<div class="progress-text" id="rsProgText">Working…</div>
</div>
<div class="results" id="rsResults">
<p class="result-head">✅ Done — your resized image</p>
<div class="result-summary" id="rsStats"></div>
<div class="result-grid">
<div class="result-card">
<img class="r-preview" id="rsPreview" alt="Resized preview">
<div class="r-name" id="rsDlName">resized-image.jpg</div>
<button type="button" class="btn-pro" id="rsDownload">⬇ Download resized image</button>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Resize as many images as you like — everything happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rsShell');
  ToolPro.themeToggle(shell, document.getElementById('rsTheme'));

  var rsImg = null, rsRatio = 1, rsOrigSize = 0;
  var listEl = document.getElementById('rsList');
  var btn = document.getElementById('rsBtn');
  var clearBtn = document.getElementById('rsClear');
  var step2 = document.getElementById('rsStep2');
  var resBox = document.getElementById('rsResults');
  var rsData = null, rsName = 'resized-image.jpg';

  function rsFmt(bytes){ return bytes > 1048576 ? (bytes / 1048576).toFixed(2) + ' MB' : (bytes / 1024).toFixed(1) + ' KB'; }

  var pRange = document.getElementById('rsPRange');
  var pVal = document.getElementById('rsPVal');
  var pNum = document.getElementById('rsP');
  var kRange = document.getElementById('rsKRange');
  var kVal = document.getElementById('rsKVal');
  var kNum = document.getElementById('rsK');
  ToolPro.bindSlider(pRange, pVal, function(v){ return v + '%'; });
  ToolPro.bindSlider(kRange, kVal, function(v){ return (+v).toLocaleString() + ' KB'; });
  pRange.addEventListener('input', function(){ pNum.value = pRange.value; });
  pNum.addEventListener('input', function(){
    if(pNum.value !== ''){ pRange.value = pNum.value; pRange.dispatchEvent(new Event('input')); }
  });
  kRange.addEventListener('input', function(){ kNum.value = kRange.value; });
  kNum.addEventListener('input', function(){
    if(kNum.value !== ''){ kRange.value = kNum.value; kRange.dispatchEvent(new Event('input')); }
  });

  function refreshButtons(){
    var ok = !!rsImg;
    btn.disabled = !ok;
    clearBtn.disabled = !ok && !listEl.children.length;
  }

  function loadFile(f){
    if(!f) return;
    rsOrigSize = f.size;
    listEl.innerHTML = '';
    var row = ToolPro.fileRow(listEl, f, function(){
      resetAll();
    });
    var img = new Image();
    img.onload = function(){
      rsImg = img; rsRatio = img.naturalWidth / img.naturalHeight;
      document.getElementById('rsW').value = img.naturalWidth;
      document.getElementById('rsH').value = img.naturalHeight;
      document.getElementById('rsOrigInfo').textContent = 'Original: ' + img.naturalWidth + '×' + img.naturalHeight + 'px · ' + rsFmt(f.size);
      step2.style.display = 'block';
      refreshButtons();
      ToolPro.toast('Image loaded', 'ok');
    };
    img.onerror = function(){ ToolPro.toast('Could not read that image.', 'err'); };
    img.src = URL.createObjectURL(f);
  }

  ToolPro.dropzone(document.getElementById('rsDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    onFiles: function(arr){ loadFile(arr[0]); }
  });

  document.getElementById('rsW').addEventListener('input', function(){
    if(document.getElementById('rsLock').checked && rsImg && this.value > 0)
      document.getElementById('rsH').value = Math.round(this.value / rsRatio);
  });
  document.getElementById('rsH').addEventListener('input', function(){
    if(document.getElementById('rsLock').checked && rsImg && this.value > 0)
      document.getElementById('rsW').value = Math.round(this.value * rsRatio);
  });

  function rsModeChange(){
    var m = document.getElementById('rsMode').value;
    document.getElementById('rsPx').style.display = m === 'px' ? 'block' : 'none';
    document.getElementById('rsPct').style.display = m === 'pct' ? 'block' : 'none';
    document.getElementById('rsKb').style.display = m === 'kbsize' ? 'block' : 'none';
  }
  document.getElementById('rsMode').addEventListener('change', rsModeChange);

  document.getElementById('rsPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('rsPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var mode = document.getElementById('rsMode');
    if(chip.dataset.pct){
      mode.value = 'pct';
      pNum.value = chip.dataset.pct; pRange.value = chip.dataset.pct; pRange.dispatchEvent(new Event('input'));
    } else if(chip.dataset.kb){
      mode.value = 'kbsize';
      kNum.value = chip.dataset.kb; kRange.value = chip.dataset.kb; kRange.dispatchEvent(new Event('input'));
    } else {
      mode.value = 'px';
      var w = parseInt(chip.dataset.w, 10);
      var h = chip.dataset.h ? parseInt(chip.dataset.h, 10) : Math.round(w / rsRatio);
      document.getElementById('rsW').value = w;
      document.getElementById('rsH').value = h;
    }
    rsModeChange();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function rsRender(w, h, q, mime){
    var c = document.createElement('canvas'); c.width = w; c.height = h;
    var ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
    ctx.drawImage(rsImg, 0, 0, w, h);
    return c.toDataURL(mime, q);
  }
  function finish(w, h, q, mime, data){
    data = data || rsRender(w, h, q, mime);
    var size = data.length * 0.75;
    rsData = data;
    rsName = 'resized-' + w + 'x' + h + '.jpg';
    document.getElementById('rsPreview').src = data;
    document.getElementById('rsDlName').textContent = rsName;
    document.getElementById('rsDlName').title = rsName;
    document.getElementById('rsStats').innerHTML =
      'Resized to <strong>' + w + '×' + h + 'px</strong> · ' + ToolPro.fmtBytes(size) +
      ' (was ' + ToolPro.fmtBytes(rsOrigSize) + ') · quality ' + Math.round(q * 100) + '%';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Image resized', 'ok');
  }
  btn.addEventListener('click', function(){
    if(!rsImg) return;
    var progWrap = document.getElementById('rsProgWrap');
    progWrap.classList.add('show');
    document.getElementById('rsProgText').textContent = 'Resizing…';
    var m = document.getElementById('rsMode').value, w, h, q = 0.9, mime = 'image/jpeg';
    resBox.classList.remove('show');
    if(m === 'px'){
      w = Math.max(1, parseInt(document.getElementById('rsW').value, 10) || rsImg.naturalWidth);
      h = Math.max(1, parseInt(document.getElementById('rsH').value, 10) || rsImg.naturalHeight);
      document.getElementById('rsProgBar').style.width = '100%';
      progWrap.classList.remove('show');
      finish(w, h, q, mime);
      return;
    }
    if(m === 'pct'){
      var p = Math.max(1, Math.min(400, parseInt(pNum.value, 10) || 50));
      w = Math.max(1, Math.round(rsImg.naturalWidth * p / 100));
      h = Math.max(1, Math.round(rsImg.naturalHeight * p / 100));
      document.getElementById('rsProgBar').style.width = '100%';
      progWrap.classList.remove('show');
      finish(w, h, q, mime);
      return;
    }
    var targetKB = Math.max(5, parseInt(kNum.value, 10) || 200);
    w = rsImg.naturalWidth; h = rsImg.naturalHeight; q = 0.95;
    var data = '';
    while(q >= 0.3){
      data = rsRender(w, h, q, mime);
      document.getElementById('rsProgBar').style.width = Math.round((0.95 - q) / 0.65 * 100) + '%';
      if(data.length * 0.75 / 1024 <= targetKB) break;
      q -= 0.15;
      if(q < 0.3){ w = Math.round(w * 0.85); h = Math.round(h * 0.85); q = 0.95; }
    }
    progWrap.classList.remove('show');
    finish(w, h, q, mime, data);
  });

  document.getElementById('rsDownload').addEventListener('click', function(){
    if(rsData) ToolPro.download(rsData, rsName);
  });

  function resetAll(){
    rsImg = null; rsRatio = 1; rsOrigSize = 0; rsData = null;
    listEl.innerHTML = '';
    document.getElementById('rsOrigInfo').textContent = '';
    step2.style.display = 'none';
    resBox.classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', resetAll);
  refreshButtons();
})();
</script>

## Everyday uses

- **Job applications** — portals that demand "photo under 200KB" are exactly what the target-size mode is for.
- **Bloggers** — standardize every featured image to the same width so layouts stay clean.
- **Social profiles** — resize headshots to platform specs without awkward auto-crops.
- **Print** — shrink huge phone photos to sensible sizes before uploading to photo printing services.
- **Email** — batch-shrink images before attaching so they actually send.

**Upscale warning:** enlarging an image beyond its original size cannot add real detail — you'll get a bigger, softer image. This tool shines at *downscaling*, which preserves quality beautifully.
