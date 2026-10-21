---
title: "Free Thumbnail Maker — Perfect YouTube, X, Facebook & Instagram Sizes"
description: "Create perfect thumbnails for YouTube, X, Facebook, LinkedIn and Instagram with crop-to-fill presets and PNG/JPEG download. Free — files never leave your browser."
category: image
date: 2026-10-21
draft: false
---

Upload one image and get a pixel-perfect thumbnail for any platform — YouTube, X/Twitter, Facebook, LinkedIn, or Instagram square — with smart center crop-to-fill, a live before/after preview, and PNG or JPEG download with quality control. Everything happens on your device; your files never leave your browser.

<div class="tool-shell" id="thumbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Thumbnail Maker</h2>
<p>Perfect platform thumbnails — YouTube, X, Facebook, LinkedIn, Instagram. Crop-to-fill, before/after preview.</p>
</div>
<button type="button" class="theme-toggle" id="thumbTheme">🌙 Dark</button>
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
<div class="dropzone" id="thumbDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop an image here</strong>
<span>or click to browse — JPG, PNG, WebP · one image</span>
<input type="file" id="thumbFile" accept="image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="thumbList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Platform size &amp; quality</p>
<div class="settings-panel">
<div class="preset-row" id="thumbPresets">
<button type="button" class="preset-chip active" data-w="1280" data-h="720">📺 YouTube — 1280×720</button>
<button type="button" class="preset-chip" data-w="1200" data-h="675">🐦 X / Twitter — 1200×675</button>
<button type="button" class="preset-chip" data-w="1200" data-h="630">📘 Facebook — 1200×630</button>
<button type="button" class="preset-chip" data-w="1200" data-h="627">💼 LinkedIn — 1200×627</button>
<button type="button" class="preset-chip" data-w="1080" data-h="1080">📸 Instagram square — 1080×1080</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Custom width (px)</span><input type="number" class="tool-input" id="thumbW" value="1280" min="16" max="8000"></div>
<div class="setting"><span class="t-label">Custom height (px)</span><input type="number" class="tool-input" id="thumbH" value="720" min="16" max="8000"></div>
<div class="setting">
<label for="thumbQ">JPEG quality: <span class="val" id="thumbQVal">90%</span></label>
<input type="range" id="thumbQ" min="10" max="100" value="90">
<div class="hint">Only applies to JPEG downloads — PNG is always lossless.</div>
</div>
</div>
<div class="hint">Edit the width or height yourself to make a custom size — the crop stays centered on your image.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="thumbPng" disabled>⬇ Download PNG</button>
<button type="button" class="btn-pro-outline" id="thumbJpg" disabled>⬇ Download JPEG</button>
</div>
<div class="progress-wrap" id="thumbProg"><div class="progress-bar"><i></i></div><span class="progress-text"></span></div>
<div class="results" id="thumbRes">
<p class="result-head">✅ Before / after</p>
<div class="result-summary" id="thumbSummary"></div>
<div class="result-grid" id="thumbGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Make as many thumbnails as you like — files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('thumbShell');
  ToolPro.themeToggle(shell, document.getElementById('thumbTheme'));
  var img = null;
  var pngBtn = document.getElementById('thumbPng');
  var jpgBtn = document.getElementById('thumbJpg');
  var wIn = document.getElementById('thumbW');
  var hIn = document.getElementById('thumbH');
  var presets = document.getElementById('thumbPresets');
  var resBox = document.getElementById('thumbRes');
  ToolPro.bindSlider(document.getElementById('thumbQ'), document.getElementById('thumbQVal'), function(v){ return v + '%'; });
  function markCustom(){
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    wIn.value = chip.dataset.w;
    hIn.value = chip.dataset.h;
    render();
  });
  wIn.addEventListener('input', function(){ markCustom(); render(); });
  hIn.addEventListener('input', function(){ markCustom(); render(); });
  function render(){
    if(!img) return;
    var tw = parseInt(wIn.value, 10) || 1280;
    var th = parseInt(hIn.value, 10) || 720;
    tw = Math.min(8000, Math.max(16, tw));
    th = Math.min(8000, Math.max(16, th));
    var scale = Math.max(tw / img.naturalWidth, th / img.naturalHeight);
    var dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
    var grid = document.getElementById('thumbGrid');
    grid.innerHTML = '';
    var before = document.createElement('div'); before.className = 'result-card';
    before.innerHTML = '<p class="r-name">Before — original</p>';
    var bi = document.createElement('img'); bi.className = 'r-preview';
    bi.src = img.src; bi.alt = 'Original image'; before.appendChild(bi);
    var bs = document.createElement('div'); bs.className = 'r-stats';
    bs.textContent = img.naturalWidth + '×' + img.naturalHeight + 'px';
    before.appendChild(bs);
    var after = document.createElement('div'); after.className = 'result-card';
    after.innerHTML = '<p class="r-name">After — thumbnail</p>';
    var c = document.createElement('canvas');
    c.width = tw; c.height = th;
    var ctx = c.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, tw, th);
    ctx.drawImage(img, (tw - dw) / 2, (th - dh) / 2, dw, dh);
    c.className = 'r-preview';
    after.appendChild(c);
    var as = document.createElement('div'); as.className = 'r-stats';
    as.textContent = tw + '×' + th + 'px · crop-to-fill, centered';
    after.appendChild(as);
    grid.appendChild(before); grid.appendChild(after);
    document.getElementById('thumbSummary').textContent =
      'Thumbnail ready at ' + tw + '×' + th + 'px — cropped to fill from the center so no stretching or black bars.';
    resBox.classList.add('show');
    pngBtn.dataset.url = c.toDataURL('image/png');
    pngBtn.disabled = false; jpgBtn.disabled = false;
  }
  ToolPro.dropzone(document.getElementById('thumbDrop'), {
    multiple: false,
    accept: 'image/png,image/jpeg,image/webp',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      var url = URL.createObjectURL(f);
      var im = new Image();
      im.onload = function(){
        img = im;
        ToolPro.toast('Image loaded: ' + f.name, 'ok');
        render();
      };
      im.onerror = function(){
        URL.revokeObjectURL(url);
        ToolPro.toast('Could not load that image', 'err');
      };
      im.src = url;
    }
  });
  pngBtn.addEventListener('click', function(){
    if(!pngBtn.dataset.url) return;
    ToolPro.download(pngBtn.dataset.url, 'thumbnail-' + wIn.value + 'x' + hIn.value + '.png');
    ToolPro.toast('PNG downloaded', 'ok');
  });
  jpgBtn.addEventListener('click', function(){
    if(!img || !pngBtn.dataset.url) return;
    var tw = parseInt(wIn.value, 10) || 1280;
    var th = parseInt(hIn.value, 10) || 720;
    var card = document.querySelector('#thumbGrid canvas');
    var q = parseInt(document.getElementById('thumbQ').value, 10) / 100;
    ToolPro.download(card.toDataURL('image/jpeg', q), 'thumbnail-' + tw + 'x' + th + '.jpg');
    ToolPro.toast('JPEG downloaded', 'ok');
  });
})();
</script>

## How it works

Upload an image and pick a platform preset — each uses the platform's recommended thumbnail size, like YouTube's 1280×720 or Instagram's 1080×1080 square. The tool scales your image so it completely covers the target frame, then crops from the center (crop-to-fill), so there is no stretching and no black bars — the focal center stays in frame. You can type any custom width and height too. The before/after preview updates live as you change sizes, and you download the result as PNG (lossless) or JPEG with an adjustable quality slider. All processing uses the browser's own canvas engine — no uploads, no accounts.

## Everyday uses

- **YouTube creators** — nail the exact 1280×720 thumbnail size every time.
- **Social media managers** — one upload, correctly sized art for X, Facebook, LinkedIn, and Instagram.
- **Bloggers** — make consistent featured images in a custom size.
- **Sellers** — crop product photos to platform-perfect squares.
- **Streamers** — quick cover art in any custom resolution.
