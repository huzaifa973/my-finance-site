---
title: "Free PDF Contact Sheet Maker — Thumbnail Grid of PDF Pages"
description: "Turn a PDF into a contact sheet: every page as a labeled thumbnail in one grid image or PDF. Choose columns, DPI, labels, and background — 100% in your browser, free forever."
category: pdf
date: 2026-10-21
draft: false
---

Photographers use contact sheets to review a whole shoot at a glance — now you can do the same with PDFs. Upload a document and get every page as a thumbnail in one tidy grid, with page numbers, your choice of columns and background, downloadable as a single PNG image or a one-page PDF. Everything runs locally in your browser; your files never leave your browser.

<div class="tool-shell" id="csShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 11h5V5H4zm0 7h5v-5H4zm6 0h5v-5h-5zm6 0h5v-5h-5zm-6-7h5V5h-5zm6 0h5V5h-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Contact Sheet Maker</h2>
<p>Every PDF page as a thumbnail in one grid — download as a single PNG image or a one-page PDF.</p>
</div>
<button type="button" class="theme-toggle" id="csTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDF</p>
<div class="dropzone" id="csDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — single PDF · up to 20 pages</span>
<input type="file" id="csFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="csList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Grid settings</p>
<div class="settings-panel">
<div class="preset-row" id="csPresets">
<button type="button" class="preset-chip" data-c="3">🔍 3 columns — detailed</button>
<button type="button" class="preset-chip active" data-c="4">🖼️ 4 columns — balanced</button>
<button type="button" class="preset-chip" data-c="6">🧩 6 columns — compact</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="csCols">Grid columns</label>
<select id="csCols">
<option value="2">2 columns</option>
<option value="3">3 columns</option>
<option value="4" selected>4 columns</option>
<option value="5">5 columns</option>
<option value="6">6 columns</option>
<option value="7">7 columns</option>
<option value="8">8 columns</option>
</select>
<div class="hint">Fewer columns = bigger thumbnails; more columns = the whole document on one glance.</div>
</div>
<div class="setting">
<label for="csDpi">Thumbnail resolution</label>
<select id="csDpi">
<option value="72">72 DPI — small &amp; fast</option>
<option value="100" selected>100 DPI — recommended</option>
<option value="150">150 DPI — crisp</option>
</select>
<div class="hint">Thumbnails don't need print resolution — 100 DPI keeps the sheet fast and light.</div>
</div>
<div class="setting">
<label for="csBg">Sheet background</label>
<input type="color" id="csBg" value="#ffffff">
<div class="hint">Pick any background color for the sheet.</div>
</div>
<div class="setting">
<label for="csFmt">Download format</label>
<select id="csFmt">
<option value="png" selected>PNG — single image</option>
<option value="pdf">PDF — one-page document</option>
</select>
<div class="hint">PNG is perfect for sharing; PDF keeps it as a proper document.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="csLabels" checked><span></span> Show page numbers</label>
<div class="hint">Prints "Page 1", "Page 2"… under each thumbnail.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="csBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Build Contact Sheet
</button>
<button type="button" class="btn-pro-outline" id="csClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="csProg">
<div class="progress-bar"><i id="csBar"></i></div>
<div class="progress-text" id="csTxt">Working…</div>
</div>
<div class="results" id="csResults">
<p class="result-head">✅ Done — your contact sheet</p>
<div class="result-summary" id="csSum"></div>
<div class="result-grid" id="csOutGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Build as many contact sheets as you like — everything runs in your browser, and your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>

<script>
(function(){
var shell = document.getElementById('csShell');
ToolPro.themeToggle(shell, document.getElementById('csTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var file = null, fileRow = null;
var listEl = document.getElementById('csList');
var btn = document.getElementById('csBtn');
var clearBtn = document.getElementById('csClear');
var colsSel = document.getElementById('csCols');
var presets = document.getElementById('csPresets');
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  colsSel.value = chip.dataset.c;
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
function refresh(){
  btn.disabled = !file; clearBtn.disabled = !file;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> ' +
    (file ? 'Build sheet for ' + file.name.replace(/\.pdf$/i, '') : 'Build Contact Sheet');
}
ToolPro.dropzone(document.getElementById('csDrop'), {
  multiple: false,
  accept: 'application/pdf,.pdf',
  maxFiles: 1,
  onFiles: function(arr){
    if(!arr.length) return;
    listEl.innerHTML = ''; file = arr[0];
    fileRow = ToolPro.fileRow(listEl, file, function(){ file = null; fileRow = null; refresh(); });
    document.getElementById('csResults').classList.remove('show');
    refresh();
    ToolPro.toast('PDF added: ' + file.name, 'ok');
  }
});
clearBtn.addEventListener('click', function(){
  file = null; fileRow = null; listEl.innerHTML = '';
  document.getElementById('csResults').classList.remove('show');
  refresh();
});
function loadPdf(f){
  return new Promise(function(resolve){
    var reader = new FileReader();
    reader.onload = function(){
      pdfjsLib.getDocument({ data: new Uint8Array(reader.result) }).promise.then(
        function(pdf){ resolve(pdf); },
        function(){ resolve(null); }
      );
    };
    reader.onerror = function(){ resolve(null); };
    reader.readAsArrayBuffer(f);
  });
}
function renderPage(pdf, n, scale){
  return new Promise(function(resolve){
    pdf.getPage(n).then(function(page){
      var vp = page.getViewport({ scale: scale });
      var c = document.createElement('canvas');
      c.width = Math.ceil(vp.width); c.height = Math.ceil(vp.height);
      page.render({ canvasContext: c.getContext('2d'), viewport: vp }).promise.then(
        function(){ resolve(c); },
        function(){ resolve(null); }
      );
    }).catch(function(){ resolve(null); });
  });
}
function dataUrlToBytes(url){
  var b64 = url.split(',')[1];
  var bin = atob(b64);
  var bytes = new Uint8Array(bin.length);
  for(var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
function labelColor(bg){
  var m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(bg || '#ffffff');
  if(!m) return '#1e293b';
  var lum = (0.299 * parseInt(m[1], 16) + 0.587 * parseInt(m[2], 16) + 0.114 * parseInt(m[3], 16)) / 255;
  return lum > 0.6 ? '#1e293b' : '#f1f5f9';
}
btn.addEventListener('click', async function(){
  if(!file){ ToolPro.toast('Add a PDF first', 'err'); return; }
  var fmt = document.getElementById('csFmt').value;
  if(fmt === 'pdf' && !window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second', 'err'); return; }
  var cols = parseInt(colsSel.value, 10);
  var dpi = parseInt(document.getElementById('csDpi').value, 10);
  var labels = document.getElementById('csLabels').checked;
  var bg = document.getElementById('csBg').value;
  var scale = dpi / 72;
  var bar = document.getElementById('csBar'), txt = document.getElementById('csTxt'), wrap = document.getElementById('csProg');
  var outGrid = document.getElementById('csOutGrid'), res = document.getElementById('csResults');
  btn.disabled = true; wrap.classList.add('show'); res.classList.remove('show'); outGrid.innerHTML = '';
  fileRow.setStatus('Working…', 'working');
  try{
    var pdf = await loadPdf(file);
    if(!pdf) throw new Error('Could not read this PDF.');
    var total = pdf.numPages;
    var n = Math.min(total, 20);
    var thumbs = [];
    for(var p = 1; p <= n; p++){
      txt.textContent = 'Rendering page ' + p + ' of ' + n + '…';
      var c = await renderPage(pdf, p, scale);
      if(c) thumbs.push({ n: p, c: c });
      bar.style.width = Math.round(p / n * 50) + '%';
    }
    if(!thumbs.length) throw new Error('No pages could be rendered.');
    var sheetW = 1600, pad = 24, labelH = labels ? 34 : 0;
    var colW = (sheetW - pad * (cols + 1)) / cols;
    var rows = Math.ceil(thumbs.length / cols);
    var rowHs = [];
    for(var r = 0; r < rows; r++){
      var rh = 0;
      for(var k = r * cols; k < Math.min((r + 1) * cols, thumbs.length); k++){
        var th = colW * thumbs[k].c.height / thumbs[k].c.width;
        if(th > rh) rh = th;
      }
      rowHs.push(rh);
    }
    var sheetH = pad;
    rowHs.forEach(function(rh){ sheetH += rh + pad + labelH; });
    sheetH = Math.ceil(sheetH);
    var sheet = document.createElement('canvas');
    sheet.width = sheetW; sheet.height = sheetH;
    var sctx = sheet.getContext('2d');
    sctx.fillStyle = bg; sctx.fillRect(0, 0, sheetW, sheetH);
    sctx.fillStyle = labelColor(bg);
    sctx.font = '16px system-ui, -apple-system, sans-serif';
    sctx.textAlign = 'center'; sctx.textBaseline = 'top';
    var y = pad;
    for(var r2 = 0; r2 < rows; r2++){
      for(var k2 = r2 * cols; k2 < Math.min((r2 + 1) * cols, thumbs.length); k2++){
        var t = thumbs[k2];
        var tw = colW, thh = colW * t.c.height / t.c.width;
        var x = pad + (k2 % cols) * (colW + pad);
        var ty = y + (rowHs[r2] - thh) / 2;
        sctx.drawImage(t.c, x, ty, tw, thh);
        if(labels) sctx.fillText('Page ' + t.n, x + tw / 2, y + rowHs[r2] + 8);
        bar.style.width = Math.round(50 + ((r2 * cols + (k2 % cols) + 1) / thumbs.length) * 50) + '%';
      }
      y += rowHs[r2] + pad + labelH;
    }
    var dataUrl = sheet.toDataURL('image/png');
    var base = file.name.replace(/\.pdf$/i, '');
    var nm, url;
    if(fmt === 'pdf'){
      var doc = await PDFLib.PDFDocument.create();
      var img = await doc.embedPng(dataUrlToBytes(dataUrl));
      var kk = 0.5;
      var pg = doc.addPage([sheetW * kk, sheetH * kk]);
      pg.drawImage(img, { x: 0, y: 0, width: sheetW * kk, height: sheetH * kk });
      var out = await doc.save();
      var blob = new Blob([out], { type: 'application/pdf' });
      url = URL.createObjectURL(blob);
      nm = base + '-contact-sheet.pdf';
    } else {
      var pngBin = dataUrlToBytes(dataUrl);
      var pngBlob = new Blob([pngBin], { type: 'image/png' });
      url = URL.createObjectURL(pngBlob);
      nm = base + '-contact-sheet.png';
    }
    fileRow.setStatus('Done', 'done');
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<img class="r-preview" alt="Contact sheet preview" style="max-width:100%;height:auto;">' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download contact sheet</button>';
    card.querySelector('.r-preview').src = dataUrl;
    card.querySelector('.r-name').textContent = nm;
    card.querySelector('.r-name').title = nm;
    var statTxt = thumbs.length + (thumbs.length === 1 ? ' page' : ' pages') + ' · ' + cols +
      ' columns · ' + sheetW + '×' + sheetH + 'px';
    if(total > 20) statTxt += ' · first 20 of ' + total + ' pages';
    card.querySelector('.r-stats').textContent = statTxt;
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, nm); });
    outGrid.appendChild(card);
    var sum = '🎉 Contact sheet built from ' + thumbs.length + (thumbs.length === 1 ? ' page' : ' pages') +
      ' (' + fmt.toUpperCase() + ').';
    if(total > 20) sum += ' Only the first 20 of ' + total + ' pages were included.';
    document.getElementById('csSum').textContent = sum;
    wrap.classList.remove('show'); res.classList.add('show');
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Contact sheet ready', 'ok');
  }catch(e){
    fileRow.setStatus('Failed', '');
    ToolPro.toast(e.message || 'Something went wrong', 'err');
  }
  btn.disabled = false;
});
refresh();
})();
</script>

## How it works

- **Step 1** — Drop in a PDF (one file; the first 20 pages are used). It's read straight into your browser — nothing is uploaded anywhere.
- **Step 2** — Set the grid columns (2–8), thumbnail resolution, sheet background color, whether page numbers print under each thumbnail, and your download format: PNG single image or a one-page PDF.
- **Step 3** — Hit **Build Contact Sheet**. Every page renders to a thumbnail and is laid out in a tidy grid on a 1600 px-wide sheet — preview it, then download it in your chosen format.

## Everyday uses

- **Reviewing documents** — scan a whole contract, report, or ebook at a glance before reading in detail.
- **Teachers** — make a one-page visual index of a worksheet pack or slide deck.
- **Designers** — archive layout iterations of a PDF as a single overview image.
- **Students** — build a visual study map of a chapter PDF for quick revision.
- **Offices** — attach a contact sheet to emails as a document preview instead of sending the whole file.
