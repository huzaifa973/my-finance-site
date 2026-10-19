---
title: "Free Scan to PDF — Phone Camera Document Scanner Online"
description: "Turn phone photos into a clean multi-page PDF: camera capture, auto-enhance, reorder pages, A4/Letter export. Free forever, files never leave your device."
category: pdf
date: 2026-10-19
draft: false
---

Turn your phone into a document scanner. Snap pages with your camera (or upload photos), auto-enhance them for readability, reorder the pages, and export one clean multi-page PDF. Everything runs in your browser — your scans never leave your device.

<div class="tool-shell" id="scpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 5l-.8 1.5c-.3.1-.7.1-1 .1H6c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-11c0-.6-.4-1-1-1h-1.6c-.4 0-.7 0-1-.1L14.6 5h-5.2zM12 18c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Scan to PDF (Phone Camera)</h2>
<p>Snap, enhance, reorder, export — a document scanner in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="scpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Capture or upload pages</p>
<div class="dropzone" id="scpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop page photos here</strong>
<span>or click to browse — JPG, PNG, WebP · multi-page supported</span>
<input type="file" id="scpFile" accept="image/*">
</div>
<div class="tool-actions" style="margin-top:.8rem">
<button type="button" class="btn-pro-outline" id="scpCam">📷 Use Phone Camera</button>
<input type="file" id="scpCamInput" accept="image/*" capture="environment" style="display:none">
</div>
<div class="hint">🔒 Private: your scans are processed on your device — files never leave your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Enhance &amp; page options</p>
<div class="settings-panel">
<div class="preset-row" id="scpPresets">
<button type="button" class="preset-chip active" data-enh="1" data-q="85" data-size="a4">📄 Document (A4)</button>
<button type="button" class="preset-chip" data-enh="0" data-q="95" data-size="fit">🖼️ Photo (keep colors)</button>
<button type="button" class="preset-chip" data-enh="1" data-q="80" data-size="fit">🧾 Receipt (compact)</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Auto-enhance (grayscale + contrast)</span><label class="toggle"><input type="checkbox" id="scpEnh" checked><span class="track"></span></label></div>
<div class="hint">Cleans up shadows and uneven lighting — best for text documents.</div>
</div>
<div class="setting">
<label for="scpSize">Page size</label>
<select id="scpSize" class="tool-input">
<option value="a4" selected>A4 (210 × 297 mm)</option>
<option value="letter">US Letter (8.5 × 11 in)</option>
<option value="fit">Fit to image (no white borders)</option>
</select>
<div class="hint">Fit-to-image keeps photos full-bleed; A4/Letter is best for printing.</div>
</div>
<div class="setting">
<label for="scpQ">JPEG quality: <span class="val" id="scpQVal">85%</span></label>
<input type="range" id="scpQ" min="50" max="100" value="85">
<div class="hint">Higher = sharper text but bigger file. 85% is the sweet spot.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Order pages &amp; export</p>
<div class="results show" id="scpPagesWrap" style="display:none">
<div class="result-grid" id="scpPages"></div>
<div class="hint">Use ↑ ↓ to reorder pages, ✕ to remove one.</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="scpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Export PDF
</button>
<button type="button" class="btn-pro-outline" id="scpClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="scpProgWrap">
<div class="progress-bar"><i id="scpProgBar"></i></div>
<div class="progress-text" id="scpProgText">Working…</div>
</div>
<div class="results" id="scpResults">
<p class="result-head">✅ Scan complete</p>
<div class="result-summary" id="scpSummary"></div>
<div class="result-grid" id="scpGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Scan as many documents as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('scpShell');
  ToolPro.themeToggle(shell, document.getElementById('scpTheme'));

  var pages = []; // {img, name}
  var btn = document.getElementById('scpBtn');
  var clearBtn = document.getElementById('scpClear');
  var pagesWrap = document.getElementById('scpPagesWrap');
  var pagesEl = document.getElementById('scpPages');

  document.getElementById('scpPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('scpPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('scpEnh').checked = chip.dataset.enh === '1';
    document.getElementById('scpQ').value = chip.dataset.q;
    document.getElementById('scpQ').dispatchEvent(new Event('input'));
    document.getElementById('scpSize').value = chip.dataset.size;
    renderPages();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ToolPro.bindSlider(document.getElementById('scpQ'), document.getElementById('scpQVal'), function(v){ return v + '%'; });
  document.getElementById('scpEnh').addEventListener('change', renderPages);

  function refresh(){
    btn.disabled = !pages.length;
    clearBtn.disabled = !pages.length;
    pagesWrap.style.display = pages.length ? 'block' : 'none';
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Export ' +
      (pages.length ? pages.length + (pages.length === 1 ? ' Page' : ' Pages') + ' to PDF' : 'PDF');
  }

  function loadImage(file){
    return new Promise(function(resolve, reject){
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function(){ resolve({ img: img, url: url }); };
      img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('bad image')); };
      img.src = url;
    });
  }

  async function addFiles(arr){
    var added = 0;
    for(var i = 0; i < arr.length; i++){
      try {
        var r = await loadImage(arr[i]);
        pages.push({ img: r.img, url: r.url, name: arr[i].name });
        added++;
      } catch(e){ /* skip unreadable */ }
    }
    if(added){
      document.getElementById('scpResults').classList.remove('show');
      renderPages(); refresh();
      ToolPro.toast(added + (added === 1 ? ' page' : ' pages') + ' added', 'ok');
    } else {
      ToolPro.toast('No readable images in that batch', 'err');
    }
  }

  ToolPro.dropzone(document.getElementById('scpDrop'), {
    multiple: true,
    accept: 'image/*',
    maxFiles: 50,
    onFiles: addFiles
  });

  document.getElementById('scpCam').addEventListener('click', function(){
    document.getElementById('scpCamInput').click();
  });
  document.getElementById('scpCamInput').addEventListener('change', function(){
    if(this.files.length) addFiles(Array.prototype.slice.call(this.files));
    this.value = '';
  });

  clearBtn.addEventListener('click', function(){
    pages.forEach(function(p){ URL.revokeObjectURL(p.url); });
    pages = [];
    document.getElementById('scpResults').classList.remove('show');
    renderPages(); refresh();
  });

  function enhanceCanvas(img){
    var c = document.createElement('canvas');
    c.width = img.naturalWidth; c.height = img.naturalHeight;
    var ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var d = ctx.getImageData(0, 0, c.width, c.height);
    var p = d.data;
    for(var i = 0; i < p.length; i += 4){
      var g = 0.299 * p[i] + 0.587 * p[i+1] + 0.114 * p[i+2];
      g = (g - 128) * 1.35 + 128;
      g = g < 0 ? 0 : (g > 255 ? 255 : g);
      p[i] = p[i+1] = p[i+2] = g;
    }
    ctx.putImageData(d, 0, 0);
    return c;
  }

  function renderPages(){
    pagesEl.innerHTML = '';
    var enh = document.getElementById('scpEnh').checked;
    pages.forEach(function(p, idx){
      var card = document.createElement('div');
      card.className = 'result-card';
      var thumb = document.createElement('canvas');
      var tw = 160, th = Math.round(tw * p.img.naturalHeight / p.img.naturalWidth);
      thumb.width = tw; thumb.height = th;
      thumb.style.width = '100%'; thumb.style.borderRadius = '6px';
      var tctx = thumb.getContext('2d');
      if(enh){
        var ec = enhanceCanvas(p.img);
        tctx.drawImage(ec, 0, 0, tw, th);
      } else {
        tctx.drawImage(p.img, 0, 0, tw, th);
      }
      var name = document.createElement('div');
      name.className = 'r-name'; name.style.fontSize = '.85rem';
      name.textContent = 'Page ' + (idx + 1);
      var ctrls = document.createElement('div');
      ctrls.style.cssText = 'display:flex;gap:.4rem;margin-top:.4rem';
      var up = document.createElement('button'); up.type = 'button'; up.className = 'btn-pro-outline'; up.textContent = '↑'; up.style.padding = '.3rem .7rem';
      var down = document.createElement('button'); down.type = 'button'; down.className = 'btn-pro-outline'; down.textContent = '↓'; down.style.padding = '.3rem .7rem';
      var del = document.createElement('button'); del.type = 'button'; del.className = 'btn-pro-outline'; del.textContent = '✕'; del.style.padding = '.3rem .7rem';
      up.disabled = idx === 0; down.disabled = idx === pages.length - 1;
      up.addEventListener('click', function(){ movePage(idx, -1); });
      down.addEventListener('click', function(){ movePage(idx, 1); });
      del.addEventListener('click', function(){
        URL.revokeObjectURL(pages[idx].url);
        pages.splice(idx, 1);
        renderPages(); refresh();
      });
      ctrls.appendChild(up); ctrls.appendChild(down); ctrls.appendChild(del);
      card.appendChild(thumb); card.appendChild(name); card.appendChild(ctrls);
      pagesEl.appendChild(card);
    });
  }

  function movePage(idx, dir){
    var j = idx + dir;
    if(j < 0 || j >= pages.length) return;
    var t = pages[idx]; pages[idx] = pages[j]; pages[j] = t;
    renderPages();
  }

  function loadJsPdf(){
    return new Promise(function(resolve, reject){
      if(window.jspdf && window.jspdf.jsPDF) return resolve(window.jspdf.jsPDF);
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js';
      s.onload = function(){ resolve(window.jspdf.jsPDF); };
      s.onerror = function(){ reject(new Error('CDN unreachable')); };
      document.head.appendChild(s);
    });
  }

  btn.addEventListener('click', async function(){
    if(!pages.length) return;
    var progWrap = document.getElementById('scpProgWrap');
    var progBar = document.getElementById('scpProgBar');
    var progText = document.getElementById('scpProgText');
    var grid = document.getElementById('scpGrid');
    var resBox = document.getElementById('scpResults');
    var enh = document.getElementById('scpEnh').checked;
    var q = +document.getElementById('scpQ').value / 100;
    var size = document.getElementById('scpSize').value;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    progBar.style.width = '10%'; progText.textContent = 'Loading PDF engine…';
    try {
      var JsPDF = await loadJsPdf();
      var SIZES = { a4: [210, 297], letter: [215.9, 279.4] };
      var pdf = null;
      for(var i = 0; i < pages.length; i++){
        var p = pages[i];
        progBar.style.width = Math.round(10 + (i / pages.length) * 80) + '%';
        progText.textContent = 'Adding page ' + (i + 1) + ' of ' + pages.length + '…';
        var src = enh ? enhanceCanvas(p.img) : p.img;
        var dataUrl = src.toDataURL ? src.toDataURL('image/jpeg', q) : null;
        if(!dataUrl){
          var tmp = document.createElement('canvas');
          tmp.width = p.img.naturalWidth; tmp.height = p.img.naturalHeight;
          var tctx = tmp.getContext('2d');
          tctx.fillStyle = '#fff'; tctx.fillRect(0, 0, tmp.width, tmp.height);
          tctx.drawImage(p.img, 0, 0);
          dataUrl = tmp.toDataURL('image/jpeg', q);
        }
        var w = src.width || p.img.naturalWidth, h = src.height || p.img.naturalHeight;
        var pw, ph, orient;
        if(size === 'fit'){
          var unit = 210 / w;
          pw = 210; ph = Math.max(10, h * unit);
          orient = pw >= ph ? 'landscape' : 'portrait';
        } else {
          var dims = SIZES[size];
          orient = w >= h ? 'landscape' : 'portrait';
          pw = orient === 'portrait' ? dims[0] : dims[1];
          ph = orient === 'portrait' ? dims[1] : dims[0];
        }
        if(!pdf){
          pdf = new JsPDF({ unit: 'mm', format: [pw, ph], orientation: orient });
        } else {
          pdf.addPage([pw, ph], orient);
        }
        var margin = size === 'fit' ? 0 : 10;
        var maxW = pw - margin * 2, maxH = ph - margin * 2;
        var scale = Math.min(maxW / w, maxH / h); // mm per pixel
        var dw = w * scale, dh = h * scale;      // display size in mm
        var dx = (pw - dw) / 2, dy = (ph - dh) / 2;
        pdf.addImage(dataUrl, 'JPEG', dx, dy, dw, dh);
      }
      progBar.style.width = '95%'; progText.textContent = 'Finalizing…';
      var blob = pdf.output('blob');
      var url = URL.createObjectURL(blob);
      progBar.style.width = '100%';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name">scanned-document.pdf</div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-stats').textContent = pages.length + (pages.length === 1 ? ' page' : ' pages') + ' · ' + ToolPro.fmtBytes(blob.size) + (enh ? ' · auto-enhanced' : '');
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, 'scanned-document.pdf'); });
      grid.appendChild(card);
      document.getElementById('scpSummary').textContent = '✅ ' + pages.length + (pages.length === 1 ? ' page' : ' pages') + ' exported to a single PDF.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF exported', 'ok');
    } catch(e){
      progWrap.classList.remove('show');
      ToolPro.toast('Failed: ' + (e && e.message ? e.message : 'could not build the PDF'), 'err');
    }
    refresh();
  });

  refresh();
})();
</script>

## How it works

**Capture:** the camera button opens your phone's camera directly (`capture="environment"` picks the rear camera); on desktop it opens the file picker. **Enhance:** each page is drawn to a canvas, converted to grayscale (luminosity formula), and run through a contrast stretch — dark text gets darker, paper gets whiter, shadows fade. **Layout:** jsPDF builds the PDF; "Fit to image" sizes each page to the photo's aspect ratio, while A4/Letter centers the page with a 10mm margin. Quality slider controls JPEG compression per page.

**Honest note:** this is a photo-to-PDF scanner, not OCR — the output pages are images, so text isn't selectable or searchable. For searchable scans, run the PDF through an OCR tool afterward.

## Everyday uses

- **Receipts & expenses** — snap receipts on the go, export one PDF for your accountant.
- **Students** — scan handwritten notes and worksheets into a single study file.
- **Contracts** — photograph signed pages and merge them into one sendable PDF.
- **Whiteboards** — capture meeting whiteboards before they're erased.
- **No app needed** — works on any phone browser, nothing to install, scans stay on your device.
