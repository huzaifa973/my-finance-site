---
title: "TIFF to ICO Converter — Free Favicon & Icon Maker in Your Browser"
description: "Convert TIFF/TIF images to real .ico icon files in your browser — 16, 32, 48 or 256 px, PNG-embedded ICO for modern Windows. Free, private, no sign-up."
category: image
date: 2026-10-27
draft: false
---

Icons power favicons, app shortcuts, and desktop files — and the .ico format is still the one Windows expects. Drop in a TIFF, pick an icon size, and get a real .ico file built in your browser. One plain fact about the output: the icon is a PNG image embedded inside a standard ICO container. That is a valid .ico, and it works in modern Windows (Vista and later), browsers, and icon tools — but very old software that only understands BMP-based icons will not read it. Everything runs in your browser; your files never leave your device.

<div class="tool-shell" id="t2iShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TIFF to ICO Converter</h2>
<p>Turn TIFF/TIF images into real .ico icons — 16 to 256 px, PNG-embedded, Windows-ready.</p>
</div>
<button type="button" class="theme-toggle" id="t2iTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your TIFF files</p>
<div class="dropzone" id="t2iDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop TIFF files here</strong>
<span>or click to browse — .tif / .tiff · batch supported</span>
<input type="file" id="t2iFile" accept=".tif,.tiff,image/tiff">
</div>
<ul class="file-list" id="t2iList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Icon settings</p>
<div class="settings-panel">
<div class="preset-row" id="t2iPresets">
<button type="button" class="preset-chip" data-size="16">16 px — taskbar</button>
<button type="button" class="preset-chip active" data-size="32">32 px — desktop</button>
<button type="button" class="preset-chip" data-size="48">48 px — large icons</button>
<button type="button" class="preset-chip" data-size="256">256 px — favicon / Vista+</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="t2iSize">Icon size: <span class="val" id="t2iSizeVal">32 px</span></label>
<input type="range" id="t2iSize" min="16" max="256" step="16" value="32">
<div class="hint">Square icons only — non-square TIFFs are center-cropped to a square first.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="t2iBg" checked><span></span> Keep transparency</label>
<div class="hint">Uncheck to flatten transparency onto a white background.</div>
</div>
</div>
<div class="hint" style="margin-top:8px">ℹ️ Output is a PNG embedded in a standard ICO container — valid for modern Windows (Vista+), browsers, and icon tools. TIFFs with multiple pages convert the first page only.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="t2iBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to ICO
</button>
<button type="button" class="btn-pro-outline" id="t2iClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="t2iProgWrap">
<div class="progress-bar"><i id="t2iProgBar"></i></div>
<div class="progress-text" id="t2iProgText">Working…</div>
</div>
<div class="results" id="t2iResults">
<p class="result-head">✅ Done — your ICO icons</p>
<div class="result-summary" id="t2iSummary"></div>
<div class="result-grid" id="t2iGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many TIFFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('t2iShell');
  ToolPro.themeToggle(shell, document.getElementById('t2iTheme'));
  var files = [];
  var listEl = document.getElementById('t2iList');
  var btn = document.getElementById('t2iBtn');
  var clearBtn = document.getElementById('t2iClear');
  var sizeRange = document.getElementById('t2iSize');
  var sizeVal = document.getElementById('t2iSizeVal');
  var utifLoading = null;
  ToolPro.bindSlider(sizeRange, sizeVal, function(v){ return v + ' px'; });
  document.getElementById('t2iPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#t2iPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    sizeRange.value = chip.dataset.size;
    sizeRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Size: ' + chip.textContent.trim());
  });
  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert ' +
      (n ? n + (n === 1 ? ' File' : ' Files') : 'Files') + ' to ICO';
  }
  ToolPro.dropzone(document.getElementById('t2iDrop'), {
    multiple: true,
    accept: '.tif,.tiff,image/tiff',
    maxFiles: 20,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('t2iResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' TIFF' : ' TIFFs') + ' added', 'ok');
    }
  });
  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('t2iResults').classList.remove('show');
    refreshButtons();
  });
  function loadUTIF(){
    if(window.UTIF) return Promise.resolve();
    if(utifLoading) return utifLoading;
    utifLoading = new Promise(function(res, rej){
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/utif@3.1.0/UTIF.min.js';
      s.onload = function(){ res(); };
      s.onerror = function(){ utifLoading = null; rej(new Error('decoder failed to load')); };
      document.head.appendChild(s);
    });
    return utifLoading;
  }
  function tiffToIco(file, size, keepAlpha){
    return file.arrayBuffer().then(function(buf){
      var ifds = UTIF.decode(buf);
      if(!ifds || !ifds.length) throw new Error('not a TIFF');
      UTIF.decodeImage(buf, ifds[0]);
      var rgba = UTIF.toRGBA8(ifds[0]);
      var w0 = ifds[0].width, h0 = ifds[0].height;
      var full = document.createElement('canvas');
      full.width = w0; full.height = h0;
      var img = full.getContext('2d').createImageData(w0, h0);
      img.data.set(rgba);
      full.getContext('2d').putImageData(img, 0, 0);
      var side = Math.min(w0, h0);
      var sx = Math.floor((w0 - side) / 2), sy = Math.floor((h0 - side) / 2);
      var c = document.createElement('canvas');
      c.width = size; c.height = size;
      var ctx = c.getContext('2d');
      if(!keepAlpha){ ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, size, size); }
      ctx.drawImage(full, sx, sy, side, side, 0, 0, size, size);
      return new Promise(function(resolve, reject){
        c.toBlob(function(blob){
          if(!blob){ reject(new Error('PNG encode failed')); return; }
          var reader = new FileReader();
          reader.onload = function(){
            var png = new Uint8Array(reader.result);
            var ico = new Uint8Array(6 + 16 + png.length);
            var view = new DataView(ico.buffer);
            view.setUint16(0, 0, true);
            view.setUint16(2, 1, true);
            view.setUint16(4, 1, true);
            ico[6] = size >= 256 ? 0 : size;
            ico[7] = size >= 256 ? 0 : size;
            ico[8] = 0;
            ico[9] = 0;
            view.setUint16(10, 1, true);
            view.setUint16(12, 32, true);
            view.setUint32(14, png.length, true);
            view.setUint32(18, 22, true);
            ico.set(png, 22);
            var url = URL.createObjectURL(new Blob([ico], { type: 'image/x-icon' }));
            resolve({ url: url, preview: c.toDataURL('image/png'), size: ico.length });
          };
          reader.onerror = function(){ reject(new Error('read failed')); };
          reader.readAsArrayBuffer(blob);
        }, 'image/png');
      });
    });
  }
  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var size = parseInt(sizeRange.value, 10);
    var keepAlpha = document.getElementById('t2iBg').checked;
    var progWrap = document.getElementById('t2iProgWrap');
    var progBar = document.getElementById('t2iProgBar');
    var progText = document.getElementById('t2iProgText');
    var grid = document.getElementById('t2iGrid');
    var resBox = document.getElementById('t2iResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    progText.textContent = 'Loading the TIFF decoder (first run only)…';
    try{ await loadUTIF(); }
    catch(e){
      progWrap.classList.remove('show'); btn.disabled = false;
      ToolPro.toast('Could not load the TIFF decoder — check your connection', 'err');
      return;
    }
    var done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + '…';
      var out = null;
      try{ out = await tiffToIco(entry.file, size, keepAlpha); }
      catch(e){ out = null; }
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!out){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = (entry.file.name.replace(/\.[^.]+$/, '') || 'icon') + '.ico';
      card.innerHTML =
        '<img class="r-preview" alt="Icon preview">' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download ICO</button>';
      card.querySelector('.r-preview').src = out.preview;
      card.querySelector('.r-name').textContent = base;
      card.querySelector('.r-name').title = base;
      card.querySelector('.r-stats').textContent = size + '×' + size + ' px · PNG-embedded ICO · ' + ToolPro.fmtBytes(out.size);
      (function(url, name){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
      })(out.url, base);
      grid.appendChild(card);
    }
    document.getElementById('t2iSummary').textContent =
      '🎉 ' + done + (done === 1 ? ' TIFF' : ' TIFFs') + ' converted to ' + size + '×' + size + ' px ICO icons.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('All TIFFs converted', 'ok');
  });
  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your .tif / .tiff files, one or a batch.
- **Step 2** — Pick an icon size (16, 32, 48, or 256 px) and whether to keep transparency. Non-square images are center-cropped to a square first.
- **Step 3** — Hit **Convert to ICO**. Each TIFF is decoded in your browser (UTIF.js loads on first use), resized to a square canvas, encoded as PNG, and wrapped in a standard ICO container with its own download button.
- **Private by design** — everything runs locally in your browser; your files never leave your browser.

## Everyday uses

- **Favicons** — make a favicon.ico from a logo scan or artwork.
- **Desktop shortcuts** — give folders and apps custom icons on Windows.
- **App icons** — produce quick .ico builds during development.
- **Brand kits** — convert one source image into every standard icon size.
- **Retro projects** — turn old scans into icons for classic-style desktops.

**Plain note on compatibility:** the .ico files here embed a PNG image, which is the modern standard and works in Windows Vista and later, all major browsers, and icon editors. Software from before ~2007 that expects BMP-based icons may not open them.
