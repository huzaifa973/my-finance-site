---
title: "Free JPG to PDF Converter — Images to PDF Online"
description: "Turn JPG, PNG and WebP images into a single PDF online. Reorder pages, set page size and margins — free forever, no sign-up, files never leave your browser."
category: pdf
date: 2026-10-09
draft: false
---

Turn photos and screenshots into a single, clean PDF — right in your browser. Add up to 20 images, drag them into page order with the arrow buttons, choose A4, Letter or Legal (or size every page to the image itself), then download one polished PDF. Your files are never uploaded anywhere.

<div class="tool-shell" id="jpgPdfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8.5 7.5c0 .83-.67 1.5-1.5 1.5H9v2H7.5V7H10c.83 0 1.5.67 1.5 1.5v1zm5 2c0 .83-.67 1.5-1.5 1.5h-2.5V7H15c.83 0 1.5.67 1.5 1.5v3zm4-3H19v1h1.5V11H19v2h-1.5V7h3v1.5zM9 9.5h1v-1H9v1z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JPG to PDF Converter</h2>
<p>Combine your images into one PDF — reorder pages, pick the paper size, set margins. Free, private, unlimited.</p>
</div>
<button type="button" class="theme-toggle" id="jpgPdfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your images</p>
<div class="dropzone" id="jpgPdfDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop images here</strong>
<span>or click to browse — JPG, PNG, WebP · up to 20 files</span>
<input type="file" id="jpgPdfFile" accept="image/jpeg,image/png,image/webp">
</div>
<ul class="file-list" id="jpgPdfList"></ul>
<div class="hint">Use the ↑ ↓ arrows to reorder — the top file becomes page 1.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> PDF settings</p>
<div class="settings-panel">
<div class="preset-row" id="jpgPdfPresets">
<button type="button" class="preset-chip active" data-size="a4" data-orient="portrait" data-margin="10">📄 A4 Portrait — documents</button>
<button type="button" class="preset-chip" data-size="letter" data-orient="portrait" data-margin="12">🇺🇸 Letter — US paperwork</button>
<button type="button" class="preset-chip" data-size="fit" data-orient="auto" data-margin="0">🖼️ Fit image — exact size</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="jpgPdfSize">Page size</label>
<select id="jpgPdfSize">
<option value="a4" selected>A4 — 210 × 297 mm</option>
<option value="letter">Letter — 216 × 279 mm</option>
<option value="legal">Legal — 216 × 356 mm</option>
<option value="fit">Fit image — page matches the image</option>
</select>
<div class="hint">A4 is the world standard; Letter is used in the US &amp; Canada.</div>
</div>
<div class="setting">
<label for="jpgPdfOrient">Orientation</label>
<select id="jpgPdfOrient">
<option value="portrait" selected>Portrait</option>
<option value="landscape">Landscape</option>
<option value="auto">Auto — match each image</option>
</select>
<div class="hint">Auto flips each page to match the image's own shape.</div>
</div>
<div class="setting">
<label for="jpgPdfMargin">Margin: <span class="val" id="jpgPdfMarginVal">10 mm</span></label>
<input type="range" id="jpgPdfMargin" min="0" max="25" value="10">
<div class="hint">White space around each image on the page.</div>
</div>
<div class="setting">
<label for="jpgPdfQuality">Image quality: <span class="val" id="jpgPdfQualityVal">90%</span></label>
<input type="range" id="jpgPdfQuality" min="50" max="100" value="90">
<div class="hint">Higher quality = sharper images but a bigger PDF.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Create your PDF</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jpgPdfBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Create PDF
</button>
<button type="button" class="btn-pro-outline" id="jpgPdfClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="jpgPdfProgWrap">
<div class="progress-bar"><i id="jpgPdfProgBar"></i></div>
<div class="progress-text" id="jpgPdfProgText">Working…</div>
</div>
<div class="results" id="jpgPdfResults">
<p class="result-head">✅ Done — your PDF is ready</p>
<div class="result-summary" id="jpgPdfSummary"></div>
<div class="result-grid" id="jpgPdfGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — create as many PDFs as you like. Your images never leave your device.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(){
var shell = document.getElementById('jpgPdfShell');
ToolPro.themeToggle(shell, document.getElementById('jpgPdfTheme'));
var listEl = document.getElementById('jpgPdfList');
var btn = document.getElementById('jpgPdfBtn');
var clearBtn = document.getElementById('jpgPdfClear');
var sizeSel = document.getElementById('jpgPdfSize');
var oriSel = document.getElementById('jpgPdfOrient');
var mRange = document.getElementById('jpgPdfMargin');
var mVal = document.getElementById('jpgPdfMarginVal');
var qRange = document.getElementById('jpgPdfQuality');
var qVal = document.getElementById('jpgPdfQualityVal');
var presets = document.getElementById('jpgPdfPresets');
var files = [];
var jsPdfOk = !!(window.jspdf && window.jspdf.jsPDF);

ToolPro.bindSlider(mRange, mVal, function(v){ return v + ' mm'; });
ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });

presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  sizeSel.value = chip.dataset.size;
  oriSel.value = chip.dataset.orient;
  mRange.value = chip.dataset.margin;
  mRange.dispatchEvent(new Event('input'));
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});

function loadImage(file){
  return new Promise(function(resolve){
    var url = URL.createObjectURL(file);
    var img = new Image();
    img.onload = function(){ resolve({ url: url, w: img.naturalWidth, h: img.naturalHeight }); };
    img.onerror = function(){ URL.revokeObjectURL(url); resolve(null); };
    img.src = url;
  });
}

function setEntryStatus(entry, txt){
  entry.status = txt;
  if(entry.li){ entry.li.querySelector('.file-status').textContent = txt; }
}

function renderList(){
  listEl.innerHTML = '';
  files.forEach(function(entry, idx){
    var li = document.createElement('li');
    li.className = 'file-row';
    var upDis = idx === 0 ? ' disabled' : '';
    var dnDis = idx === files.length - 1 ? ' disabled' : '';
    li.innerHTML =
      '<img class="file-thumb" alt="" style="width:44px;height:44px;object-fit:cover;border-radius:6px;flex:none">' +
      '<span class="file-name"></span>' +
      '<span class="file-size">' + ToolPro.fmtBytes(entry.file.size) + '</span>' +
      '<span class="file-status">' + entry.status + '</span>' +
      '<button type="button" class="move-up" title="Move up"' + upDis + '>↑</button>' +
      '<button type="button" class="move-down" title="Move down"' + dnDis + '>↓</button>' +
      '<button type="button" class="file-remove" aria-label="Remove file">&times;</button>';
    li.querySelector('.file-thumb').src = entry.url;
    li.querySelector('.file-name').textContent = (idx + 1) + '. ' + entry.file.name;
    li.querySelector('.file-name').title = entry.file.name;
    li.querySelector('.move-up').addEventListener('click', function(){
      if(idx > 0){ var t = files[idx - 1]; files[idx - 1] = files[idx]; files[idx] = t; renderList(); }
    });
    li.querySelector('.move-down').addEventListener('click', function(){
      if(idx < files.length - 1){ var t = files[idx + 1]; files[idx + 1] = files[idx]; files[idx] = t; renderList(); }
    });
    li.querySelector('.file-remove').addEventListener('click', function(){
      URL.revokeObjectURL(entry.url);
      files.splice(idx, 1);
      renderList();
      document.getElementById('jpgPdfResults').classList.remove('show');
      refreshButtons();
    });
    entry.li = li;
    listEl.appendChild(li);
  });
}

function refreshButtons(){
  var n = files.length;
  btn.disabled = !n || !jsPdfOk;
  clearBtn.disabled = !n;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Create PDF' +
    (n ? ' — ' + n + (n === 1 ? ' page' : ' pages') : '');
}

ToolPro.dropzone(document.getElementById('jpgPdfDrop'), {
  multiple: true,
  accept: 'image/jpeg,image/png,image/webp',
  maxFiles: 20,
  onFiles: function(arr){
    (async function(){
      var added = 0;
      for(var i = 0; i < arr.length; i++){
        if(files.length >= 20){ ToolPro.toast('Maximum 20 images per PDF', 'err'); break; }
        var info = await loadImage(arr[i]);
        if(!info){ ToolPro.toast('Could not read: ' + arr[i].name, 'err'); continue; }
        files.push({ file: arr[i], url: info.url, w: info.w, h: info.h, status: 'Ready', li: null });
        added++;
      }
      renderList();
      document.getElementById('jpgPdfResults').classList.remove('show');
      refreshButtons();
      if(added){ ToolPro.toast(added + (added === 1 ? ' image' : ' images') + ' added — use ↑ ↓ to reorder', 'ok'); }
    })();
  }
});

clearBtn.addEventListener('click', function(){
  files.forEach(function(e){ URL.revokeObjectURL(e.url); });
  files = [];
  renderList();
  document.getElementById('jpgPdfResults').classList.remove('show');
  refreshButtons();
});

function imageToJpeg(url, w, h, q){
  return new Promise(function(resolve, reject){
    var img = new Image();
    img.onload = function(){
      var c = document.createElement('canvas');
      c.width = w; c.height = h;
      var ctx = c.getContext('2d');
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0);
      resolve(c.toDataURL('image/jpeg', q));
    };
    img.onerror = reject;
    img.src = url;
  });
}

btn.addEventListener('click', async function(){
  if(!files.length || !jsPdfOk) return;
  var pageSizes = { a4: [210, 297], letter: [216, 279], legal: [216, 356] };
  var sizeMode = sizeSel.value;
  var orientMode = oriSel.value;
  var margin = parseInt(mRange.value, 10);
  var q = parseInt(qRange.value, 10) / 100;
  var progWrap = document.getElementById('jpgPdfProgWrap');
  var progBar = document.getElementById('jpgPdfProgBar');
  var progText = document.getElementById('jpgPdfProgText');
  var grid = document.getElementById('jpgPdfGrid');
  var resBox = document.getElementById('jpgPdfResults');
  btn.disabled = true;
  progWrap.classList.add('show');
  resBox.classList.remove('show');
  grid.innerHTML = '';
  var JPDF = window.jspdf.jsPDF;
  var doc = null;
  var ok = 0, failed = 0;
  for(var i = 0; i < files.length; i++){
    var entry = files[i];
    progText.textContent = 'Adding page ' + (i + 1) + ' of ' + files.length + '…';
    setEntryStatus(entry, 'Working…');
    try {
      var pw, ph;
      if(sizeMode === 'fit'){
        pw = Math.round(entry.w * 25.4 / 96 * 100) / 100;
        ph = Math.round(entry.h * 25.4 / 96 * 100) / 100;
      } else {
        var s = pageSizes[sizeMode];
        var o = orientMode;
        if(o === 'auto'){ o = entry.w >= entry.h ? 'landscape' : 'portrait'; }
        if(o === 'landscape'){ pw = s[1]; ph = s[0]; } else { pw = s[0]; ph = s[1]; }
      }
      var orientation = pw >= ph ? 'landscape' : 'portrait';
      var data = await imageToJpeg(entry.url, entry.w, entry.h, q);
      var availW = Math.max(10, pw - margin * 2);
      var availH = Math.max(10, ph - margin * 2);
      var scale = Math.min(availW / entry.w, availH / entry.h);
      var iw = entry.w * scale, ih = entry.h * scale;
      var ox = (pw - iw) / 2, oy = (ph - ih) / 2;
      if(!doc){ doc = new JPDF({ orientation: orientation, unit: 'mm', format: [pw, ph] }); }
      else { doc.addPage([pw, ph], orientation); }
      doc.addImage(data, 'JPEG', ox, oy, iw, ih);
      ok++;
      setEntryStatus(entry, 'Done');
    } catch(err){ failed++; setEntryStatus(entry, 'Failed'); }
    progBar.style.width = Math.round((i + 1) / files.length * 100) + '%';
  }
  if(doc && ok){
    var blob = doc.output('blob');
    var pdfUrl = URL.createObjectURL(blob);
    document.getElementById('jpgPdfSummary').textContent =
      '🎉 ' + ok + (ok === 1 ? ' page' : ' pages') + ' combined into one PDF (' +
      ToolPro.fmtBytes(blob.size) + ')' + (failed ? ' — ' + failed + ' image(s) failed.' : '');
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name">dollarwise-images.pdf</div>' +
      '<div class="r-stats">' + ok + ' pages · ' + ToolPro.fmtBytes(blob.size) + '</div>' +
      '<button type="button" class="btn-pro">⬇ Download PDF</button>';
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(pdfUrl, 'dollarwise-images.pdf'); });
    grid.appendChild(card);
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('PDF created — ' + ok + (ok === 1 ? ' page' : ' pages'), 'ok');
  } else {
    ToolPro.toast('Could not create the PDF — no images were converted', 'err');
  }
  progWrap.classList.remove('show');
  btn.disabled = false;
  refreshButtons();
});

if(!jsPdfOk){
  ToolPro.toast('PDF library failed to load — check your connection and reload the page.', 'err');
}
refreshButtons();
})();
</script>

## How it works

- **One image, one page:** each image you add becomes exactly one PDF page, in your list order — the top item is page 1.
- **Real paper sizes:** A4 (210 × 297 mm), Letter (216 × 279 mm) and Legal (216 × 356 mm) use true print dimensions, so the PDF looks right when printed.
- **Fit-image mode:** sizes every page to the image itself (measured at 96 DPI), giving you a borderless, exact-size document.
- **Smart scaling:** each image is scaled proportionally to fit inside the page minus your margins and centred — never stretched, never cropped.
- **JPEG embedding:** images are drawn on a white background and embedded as JPEGs at your chosen quality, so transparent PNG areas can't turn black.

## Everyday uses

- **Phone-camera scans → PDF** — snap documents with your phone, combine them into one clean PDF for emailing.
- **Expense reports** — merge a pile of receipts into a single PDF for your finance team.
- **Portfolio pages** — turn project screenshots into one shareable document for clients.
- **Homework & assignments** — combine question screenshots into one submission file.
- **Applications** — bundle your ID, certificates and documents into one PDF for a job or visa.
- **Rental paperwork** — one PDF with every page a landlord or agent asked for.
