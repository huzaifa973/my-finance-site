---
title: "Free Favicon Generator — Create Full Favicon Package Online"
description: "Upload one logo and generate the complete favicon package — favicon.ico, apple-touch-icon, PWA icons, and a ready site.webmanifest. Free forever, no sign-up, private."
category: image
date: 2026-10-22
draft: false
---

Missing or mismatched favicons make a site look unfinished in browser tabs, bookmarks, and phone home screens. Upload one logo and get the complete package in one click: a real multi-size favicon.ico, all PNG sizes, the Apple touch icon, PWA icons, and a copy-paste site.webmanifest snippet. Everything renders in your browser — your logo is never uploaded.

<div class="tool-shell" id="fvgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" opacity="0"/><path d="M7 3h10c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm4 16h2v-2h-2v2zm0-4h2V9h-2v6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Favicon Package Generator</h2>
<p>One logo in — favicon.ico, touch icons, PWA icons, and webmanifest out. The complete set.</p>
</div>
<button type="button" class="theme-toggle" id="fvgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your logo</p>
<div class="dropzone" id="fvgDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your logo here</strong>
<span>or click to browse — square logos work best · PNG, JPG, SVG, WebP</span>
<input type="file" id="fvgFile" accept="image/*">
</div>
<ul class="file-list" id="fvgList"></ul>
<div class="fvg-source-preview" id="fvgSrcPrev" style="display:none;">
<p class="hint"><strong>Source logo</strong> — how it will be centered and cropped to a square.</p>
<canvas id="fvgSrcCanvas" width="180" height="180"></canvas>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Package settings</p>
<div class="settings-panel">
<div class="preset-row" id="fvgPresets">
<button type="button" class="preset-chip active" data-pad="10" data-bg="transparent">✨ Logo on transparent</button>
<button type="button" class="preset-chip" data-pad="18" data-bg="#ffffff">⬜ White padding — app style</button>
<button type="button" class="preset-chip" data-pad="0" data-bg="transparent">🖼️ Fill the square — no padding</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="fvgPad">Icon padding: <span class="val" id="fvgPadVal">10%</span></label>
<input type="range" id="fvgPad" min="0" max="30" value="10">
<div class="hint">Breathing room around your logo inside the square — 10% is the sweet spot.</div>
</div>
<div class="setting">
<label for="fvgBg">Background color</label>
<select id="fvgBg">
<option value="transparent" selected>Transparent (shows site/theme behind)</option>
<option value="#ffffff">White</option>
<option value="#000000">Black</option>
</select>
<div class="hint">Only affects the padded area, not your logo.</div>
</div>
<div class="setting">
<label for="fvgSiteName">Site name (for site.webmanifest)</label>
<input type="text" id="fvgSiteName" class="tool-input" value="My Website" maxlength="40">
<div class="hint">Used in the generated manifest snippet.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fvgBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate Favicon Package
</button>
<button type="button" class="btn-pro-outline" id="fvgAll" disabled>⬇ Download entire package</button>
<button type="button" class="btn-pro-outline" id="fvgClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="fvgProgWrap">
<div class="progress-bar"><i id="fvgProgBar"></i></div>
<div class="progress-text" id="fvgProgText">Working…</div>
</div>
<div class="results" id="fvgResults">
<p class="result-head">✅ Done — your favicon package</p>
<div class="result-summary" id="fvgSummary"></div>
<div class="result-grid" id="fvgGrid"></div>
<div class="fvg-manifest">
<p class="hint"><strong>site.webmanifest</strong> — copy this into your site root, then add <code>&lt;link rel="manifest" href="/site.webmanifest"&gt;</code> and <code>&lt;link rel="apple-touch-icon" href="/apple-touch-icon.png"&gt;</code> in your <code>&lt;head&gt;</code>.</p>
<pre id="fvgManifestCode"></pre>
<div class="fvg-manifest-btns">
<button type="button" class="btn-pro-outline" id="fvgCopyManifest">📋 Copy manifest</button>
<button type="button" class="btn-pro-outline" id="fvgDlManifest">⬇ Download site.webmanifest</button>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — generate favicon packages for every site you own, free.</p>
</div>
</div>
</div>
<style>
.fvg-source-preview canvas{border:1px dashed #94a3b8;border-radius:12px;background:repeating-conic-gradient(#e2e8f0 0 25%,#fff 0 50%) 0 0/24px 24px;}
.fvg-manifest{margin-top:16px;}
.fvg-manifest pre{background:#0f172a;color:#e2e8f0;padding:14px;border-radius:10px;overflow-x:auto;font-size:12.5px;line-height:1.5;max-height:280px;overflow-y:auto;}
.fvg-manifest-btns{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px;}
.tool-input{width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:10px;font-size:15px;background:#fff;color:inherit;}
</style>

<script>
(function(){
  var shell = document.getElementById('fvgShell');
  ToolPro.themeToggle(shell, document.getElementById('fvgTheme'));

  var sourceImg = null, sourceName = '';
  var listEl = document.getElementById('fvgList');
  var btn = document.getElementById('fvgBtn');
  var allBtn = document.getElementById('fvgAll');
  var clearBtn = document.getElementById('fvgClear');
  var presets = document.getElementById('fvgPresets');
  var padRange = document.getElementById('fvgPad');
  var padVal = document.getElementById('fvgPadVal');
  var bgSel = document.getElementById('fvgBg');
  var siteNameInput = document.getElementById('fvgSiteName');
  var srcPrev = document.getElementById('fvgSrcPrev');
  var srcCanvas = document.getElementById('fvgSrcCanvas');
  var pkg = []; // {name, url, blob}

  ToolPro.bindSlider(padRange, padVal, function(v){ return v + '%'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    padRange.value = chip.dataset.pad; padRange.dispatchEvent(new Event('input'));
    bgSel.value = chip.dataset.bg;
    drawSourcePreview();
    ToolPro.toast('Package preset applied');
  });

  function refreshButtons(){
    btn.disabled = !sourceImg; allBtn.disabled = !pkg.length; clearBtn.disabled = !sourceImg;
  }

  ToolPro.dropzone(document.getElementById('fvgDrop'), {
    multiple: false,
    accept: 'image/*',
    maxFiles: 1,
    onFiles: function(arr){
      var f = arr[0]; if(!f) return;
      var url = URL.createObjectURL(f);
      var img = new Image();
      img.onload = function(){
        sourceImg = img; sourceName = f.name;
        listEl.innerHTML = '';
        ToolPro.fileRow(listEl, f, function(){ sourceImg = null; listEl.innerHTML = ''; srcPrev.style.display = 'none'; document.getElementById('fvgResults').classList.remove('show'); refreshButtons(); });
        srcPrev.style.display = '';
        drawSourcePreview();
        document.getElementById('fvgResults').classList.remove('show');
        refreshButtons();
        ToolPro.toast('Logo loaded — pick a preset and generate', 'ok');
      };
      img.onerror = function(){ ToolPro.toast('Could not read that image', 'err'); };
      img.src = url;
    }
  });

  clearBtn.addEventListener('click', function(){
    sourceImg = null; pkg = []; listEl.innerHTML = '';
    srcPrev.style.display = 'none';
    document.getElementById('fvgResults').classList.remove('show');
    refreshButtons();
  });

  padRange.addEventListener('input', drawSourcePreview);
  bgSel.addEventListener('change', drawSourcePreview);

  // Center-crop the logo to a square with padding %, on chosen background.
  function drawSquare(size){
    var c = document.createElement('canvas'); c.width = size; c.height = size;
    var ctx = c.getContext('2d');
    var bg = bgSel.value;
    if(bg !== 'transparent'){ ctx.fillStyle = bg; ctx.fillRect(0, 0, size, size); }
    var pad = parseFloat(padRange.value) / 100;
    var iw = sourceImg.naturalWidth, ih = sourceImg.naturalHeight;
    var s = Math.min(iw, ih);
    var sx = (iw - s) / 2, sy = (ih - s) / 2;
    var d = size * (1 - pad * 2);
    var dx = (size - d) / 2, dy = (size - d) / 2;
    ctx.drawImage(sourceImg, sx, sy, s, s, dx, dy, d, d);
    return c;
  }

  function drawSourcePreview(){
    if(!sourceImg) return;
    var c = drawSquare(180);
    var ctx = srcCanvas.getContext('2d');
    ctx.clearRect(0, 0, 180, 180);
    ctx.drawImage(c, 0, 0);
  }

  function canvasBlob(c){
    return new Promise(function(res){ c.toBlob(function(b){ res(b); }, 'image/png'); });
  }

  // Build a real multi-size favicon.ico (PNG-in-ICO container) from PNG blobs.
  function buildIco(pngs){ // pngs: [{size, blob}]
    return new Promise(function(resolve){
      var readers = pngs.map(function(p){
        return new Promise(function(r){
          var fr = new FileReader();
          fr.onload = function(){ r(new Uint8Array(fr.result)); };
          fr.readAsArrayBuffer(p.blob);
        });
      });
      Promise.all(readers).then(function(datas){
        var headerSize = 6 + 16 * datas.length;
        var total = headerSize + datas.reduce(function(a, d){ return a + d.length; }, 0);
        var buf = new ArrayBuffer(total);
        var v = new DataView(buf);
        v.setUint16(0, 0, true); v.setUint16(2, 1, true); v.setUint16(4, datas.length, true);
        var offset = headerSize;
        datas.forEach(function(d, i){
          var size = pngs[i].size;
          v.setUint8(6 + i * 16, size >= 256 ? 0 : size);
          v.setUint8(6 + i * 16 + 1, size >= 256 ? 0 : size);
          v.setUint8(6 + i * 16 + 2, 0);
          v.setUint8(6 + i * 16 + 3, 0);
          v.setUint16(6 + i * 16 + 4, 1, true);
          v.setUint16(6 + i * 16 + 6, 32, true);
          v.setUint32(6 + i * 16 + 8, d.length, true);
          v.setUint32(6 + i * 16 + 12, offset, true);
          new Uint8Array(buf, offset, d.length).set(d);
          offset += d.length;
        });
        resolve(new Blob([buf], { type: 'image/x-icon' }));
      });
    });
  }

  function manifestText(){
    var name = (siteNameInput.value || 'My Website').trim();
    return JSON.stringify({
      name: name,
      short_name: name,
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    }, null, 2);
  }

  btn.addEventListener('click', async function(){
    if(!sourceImg) return;
    var progWrap = document.getElementById('fvgProgWrap');
    var progBar = document.getElementById('fvgProgBar');
    var progText = document.getElementById('fvgProgText');
    var grid = document.getElementById('fvgGrid');
    var resBox = document.getElementById('fvgResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    pkg = [];
    progText.textContent = 'Rendering icon sizes…';
    progBar.style.width = '30%';

    var sizes = [16, 32, 48, 180, 192, 512];
    var pngs = [];
    for(var i = 0; i < sizes.length; i++){
      var blob = await canvasBlob(drawSquare(sizes[i]));
      pngs.push({ size: sizes[i], blob: blob });
      progBar.style.width = Math.round(30 + (i + 1) / sizes.length * 40) + '%';
    }

    progText.textContent = 'Building favicon.ico…';
    var icoBlob = await buildIco(pngs.filter(function(p){ return [16, 32, 48].indexOf(p.size) >= 0; }));
    progBar.style.width = '90%';

    function addItem(name, blob, note){
      var url = URL.createObjectURL(blob);
      pkg.push({ name: name, url: url });
      var card = document.createElement('div');
      card.className = 'result-card';
      var isIco = name.slice(-4) === '.ico';
      card.innerHTML =
        (isIco ? '<div class="r-preview r-ico">🖼️</div>' : '<img class="r-preview" alt="icon preview">') +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      if(!isIco) card.querySelector('.r-preview').src = url;
      card.querySelector('.r-name').textContent = name;
      card.querySelector('.r-name').title = name;
      card.querySelector('.r-stats').textContent = note + ' · ' + ToolPro.fmtBytes(blob.size);
      (function(u, n){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
      })(url, name);
      grid.appendChild(card);
    }

    addItem('favicon.ico', icoBlob, 'multi-size 16/32/48 — browser tabs');
    addItem('favicon-16x16.png', pngs[0].blob, '16×16 — legacy fallback');
    addItem('favicon-32x32.png', pngs[1].blob, '32×32 — standard tab icon');
    addItem('favicon-48x48.png', pngs[2].blob, '48×48 — Windows site icon');
    addItem('apple-touch-icon.png', pngs[3].blob, '180×180 — iOS home screen');
    addItem('icon-192.png', pngs[4].blob, '192×192 — Android / PWA');
    addItem('icon-512.png', pngs[5].blob, '512×512 — PWA splash');

    document.getElementById('fvgManifestCode').textContent = manifestText();
    document.getElementById('fvgSummary').textContent =
      '🎉 7 files + manifest ready — drop favicon.ico and the PNGs in your site root, then wire the <head> links.';
    progBar.style.width = '100%';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    refreshButtons();
    ToolPro.toast('Favicon package generated', 'ok');
  });

  allBtn.addEventListener('click', function(){
    if(!pkg.length) return;
    var i = 0;
    function next(){
      if(i >= pkg.length) return;
      ToolPro.download(pkg[i].url, pkg[i].name);
      i++; setTimeout(next, 600);
    }
    next();
    ToolPro.toast('Downloading ' + pkg.length + ' files…');
  });

  document.getElementById('fvgCopyManifest').addEventListener('click', function(){
    var t = manifestText();
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){ ToolPro.toast('Manifest copied', 'ok'); });
    } else {
      ToolPro.toast('Copy not supported in this browser', 'err');
    }
  });
  document.getElementById('fvgDlManifest').addEventListener('click', function(){
    var blob = new Blob([manifestText()], { type: 'application/json' });
    ToolPro.download(URL.createObjectURL(blob), 'site.webmanifest');
  });
  siteNameInput.addEventListener('input', function(){
    if(pkg.length) document.getElementById('fvgManifestCode').textContent = manifestText();
  });

  refreshButtons();
})();
</script>

## How it works

1. **Add your logo** — square logos crop best; we center-crop anything else to a square automatically.
2. **Pick a style** — padding amount and background (transparent, white, or black) via one-click presets.
3. **Generate** — we render 16/32/48/180/192/512 icons, build a real multi-size favicon.ico, and compose your site.webmanifest.
4. **Download** — grab files individually or the whole package at once, and copy the manifest snippet into your site.

## Everyday uses

- **Bloggers** — give your blog a real tab icon instead of the default blank page.
- **Developers** — ship a complete PWA icon set without opening an image editor.
- **Agencies** — generate client favicon packages in seconds, not Photoshop sessions.
- **Store owners** — apple-touch-icon makes your site look native when customers save it to their home screen.
- **Redesigns** — regenerate the full package every time the logo changes, keeping everything consistent.

**Checklist:** place `favicon.ico`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, and `site.webmanifest` in your site root, then add the `<link>` tags to your `<head>`.
