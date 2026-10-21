---
title: "Free PDF Poster Printer — Tile PDF Pages Into Printable Poster Sheets"
description: "Turn any PDF page into a tiled poster: split pages across printable sheets with overlap margins and cut marks, then tape them together. 100% client-side, free forever, no sign-up."
category: pdf
date: 2026-10-21
draft: false
---

Want a wall poster but only have a regular printer? Upload a PDF and this free poster printer splits every page across a grid of printable sheets — with overlap margins for easy gluing and optional cut marks. Tape the sheets together into one big poster. Everything runs in your browser; your files never leave your browser.

<div class="tool-shell" id="ppShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Poster Printer</h2>
<p>Tile any PDF page across printable sheets — set the grid, overlap and cut marks, download the poster PDF.</p>
</div>
<button type="button" class="theme-toggle" id="ppTheme">🌙 Dark</button>
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
<div class="dropzone" id="ppDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — single PDF · first 10 pages tiled</span>
<input type="file" id="ppFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ppList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Poster settings</p>
<div class="settings-panel">
<div class="preset-row" id="ppPresets">
<button type="button" class="preset-chip" data-g="2x2">🖼️ 2×2 — big print</button>
<button type="button" class="preset-chip active" data-g="3x3">🧱 3×3 — wall poster</button>
<button type="button" class="preset-chip" data-g="4x4">🔍 4×4 — fine detail</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ppGrid">Tile grid</label>
<select id="ppGrid">
<option value="2x2">2 × 2 — 4 sheets</option>
<option value="3x3" selected>3 × 3 — 9 sheets</option>
<option value="4x4">4 × 4 — 16 sheets</option>
<option value="2x3">2 × 3 — 6 sheets</option>
<option value="3x2">3 × 2 — 6 sheets</option>
</select>
<div class="hint">A 3×3 grid on A4 makes a poster roughly 63 × 89 cm.</div>
</div>
<div class="setting">
<label for="ppOverlap">Overlap margin: <span class="val" id="ppOverlapVal">5 mm</span></label>
<input type="range" id="ppOverlap" min="0" max="20" step="0.5" value="5">
<div class="hint">Extra image on each tile edge so sheets overlap when taped — 5 mm is a safe default.</div>
</div>
<div class="setting">
<label for="ppSheet">Output sheet size</label>
<select id="ppSheet">
<option value="a4" selected>A4 — 210 × 297 mm</option>
<option value="letter">US Letter — 8.5 × 11 in</option>
</select>
<div class="hint">Match the paper in your printer tray.</div>
</div>
<div class="setting">
<label for="ppOrient">Sheet orientation</label>
<select id="ppOrient">
<option value="portrait" selected>Portrait</option>
<option value="landscape">Landscape</option>
</select>
<div class="hint">Landscape works well for wide panoramas and banners.</div>
</div>
<div class="setting">
<label for="ppRes">Tile resolution</label>
<select id="ppRes">
<option value="100">100 DPI — fastest</option>
<option value="150" selected>150 DPI — recommended</option>
<option value="200">200 DPI — crisp</option>
<option value="300">300 DPI — print quality (slow)</option>
</select>
<div class="hint">Higher DPI = sharper tiles but slower tiling and bigger files.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="ppMarks" checked><span></span> Print cut marks</label>
<div class="hint">Adds crop marks at each tile's corners so you can trim precisely before taping.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Tile &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ppBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Tile PDF
</button>
<button type="button" class="btn-pro-outline" id="ppClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ppProg">
<div class="progress-bar"><i id="ppBar"></i></div>
<div class="progress-text" id="ppTxt">Working…</div>
</div>
<div class="results" id="ppResults">
<p class="result-head">✅ Done — your poster sheets</p>
<div class="result-summary" id="ppSum"></div>
<div class="result-grid" id="ppOutGrid"></div>
<div class="hint">Print every sheet at 100% scale (no "fit to page"), trim the cut marks, and tape the sheets together edge to edge.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Tile as many PDFs as you like — everything runs in your browser, and your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>

<script>
(function(){
var shell = document.getElementById('ppShell');
ToolPro.themeToggle(shell, document.getElementById('ppTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var file = null, fileRow = null;
var listEl = document.getElementById('ppList');
var btn = document.getElementById('ppBtn');
var clearBtn = document.getElementById('ppClear');
var ovRange = document.getElementById('ppOverlap');
var ovVal = document.getElementById('ppOverlapVal');
var gridSel = document.getElementById('ppGrid');
var presets = document.getElementById('ppPresets');
ToolPro.bindSlider(ovRange, ovVal, function(v){ return v + ' mm'; });
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  gridSel.value = chip.dataset.g;
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
function refresh(){
  btn.disabled = !file; clearBtn.disabled = !file;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> ' +
    (file ? 'Tile ' + file.name.replace(/\.pdf$/i, '') : 'Tile PDF');
}
ToolPro.dropzone(document.getElementById('ppDrop'), {
  multiple: false,
  accept: 'application/pdf,.pdf',
  maxFiles: 1,
  onFiles: function(arr){
    if(!arr.length) return;
    listEl.innerHTML = ''; file = arr[0];
    fileRow = ToolPro.fileRow(listEl, file, function(){ file = null; fileRow = null; refresh(); });
    document.getElementById('ppResults').classList.remove('show');
    refresh();
    ToolPro.toast('PDF added: ' + file.name, 'ok');
  }
});
clearBtn.addEventListener('click', function(){
  file = null; fileRow = null; listEl.innerHTML = '';
  document.getElementById('ppResults').classList.remove('show');
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
btn.addEventListener('click', async function(){
  if(!file){ ToolPro.toast('Add a PDF first', 'err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading — try again in a second', 'err'); return; }
  var g = gridSel.value.split('x');
  var cols = parseInt(g[0], 10), rows = parseInt(g[1], 10);
  var overlapMm = parseFloat(ovRange.value);
  var cutMarks = document.getElementById('ppMarks').checked;
  var sheetSel = document.getElementById('ppSheet').value;
  var land = document.getElementById('ppOrient').value === 'landscape';
  var dpi = parseInt(document.getElementById('ppRes').value, 10);
  var sheetMM = sheetSel === 'letter' ? [215.9, 279.4] : [210, 297];
  var wMM = land ? Math.max(sheetMM[0], sheetMM[1]) : Math.min(sheetMM[0], sheetMM[1]);
  var hMM = land ? Math.min(sheetMM[0], sheetMM[1]) : Math.max(sheetMM[0], sheetMM[1]);
  var sheetWpt = wMM / 25.4 * 72, sheetHpt = hMM / 25.4 * 72;
  var tilePxW = Math.round(wMM / 25.4 * dpi), tilePxH = Math.round(hMM / 25.4 * dpi);
  var ovPx = Math.round(overlapMm / 25.4 * dpi);
  var bar = document.getElementById('ppBar'), txt = document.getElementById('ppTxt'), wrap = document.getElementById('ppProg');
  var outGrid = document.getElementById('ppOutGrid'), res = document.getElementById('ppResults');
  btn.disabled = true; wrap.classList.add('show'); res.classList.remove('show'); outGrid.innerHTML = '';
  fileRow.setStatus('Working…', 'working');
  try{
    var pdf = await loadPdf(file);
    if(!pdf) throw new Error('Could not read this PDF.');
    var total = pdf.numPages;
    var n = Math.min(total, 10);
    var outDoc = await PDFLib.PDFDocument.create();
    var previewUrl = null, sheetCount = 0, tiledPages = 0;
    var totalTiles = n * cols * rows, doneTiles = 0;
    for(var p = 1; p <= n; p++){
      txt.textContent = 'Tiling page ' + p + ' of ' + n + '…';
      var page = await pdf.getPage(p);
      var vp0 = page.getViewport({ scale: 1 });
      var scale = Math.max(cols * tilePxW / vp0.width, rows * tilePxH / vp0.height);
      var maxDim = 14000;
      var curMax = Math.max(vp0.width * scale, vp0.height * scale);
      if(curMax > maxDim) scale *= maxDim / curMax;
      var src = await renderPage(pdf, p, scale);
      if(!src) continue;
      var W = src.width, H = src.height;
      var cellW = W / cols, cellH = H / rows;
      for(var r = 0; r < rows; r++){
        for(var c = 0; c < cols; c++){
          var x0 = Math.max(0, Math.floor(c * cellW - ovPx));
          var x1 = Math.min(W, Math.ceil((c + 1) * cellW + ovPx));
          var y0 = Math.max(0, Math.floor(r * cellH - ovPx));
          var y1 = Math.min(H, Math.ceil((r + 1) * cellH + ovPx));
          var tw = x1 - x0, th = y1 - y0;
          var tc = document.createElement('canvas'); tc.width = tw; tc.height = th;
          tc.getContext('2d').drawImage(src, x0, y0, tw, th, 0, 0, tw, th);
          var tileUrl = tc.toDataURL('image/png');
          if(!previewUrl) previewUrl = tileUrl;
          var img = await outDoc.embedPng(dataUrlToBytes(tileUrl));
          var sp = outDoc.addPage([sheetWpt, sheetHpt]);
          if(cutMarks){
            var inset = 12 / 25.4 * 72;
            var mLen = 8 / 25.4 * 72, mOff = 4 / 25.4 * 72;
            var ix0 = inset, iy0 = inset, ix1 = sheetWpt - inset, iy1 = sheetHpt - inset;
            sp.drawImage(img, { x: ix0, y: iy0, width: ix1 - ix0, height: iy1 - iy0 });
            var black = PDFLib.rgb(0, 0, 0);
            var corners = [[ix0, iy0, 1, 1], [ix1, iy0, -1, 1], [ix0, iy1, 1, -1], [ix1, iy1, -1, -1]];
            corners.forEach(function(cn){
              var cx = cn[0], cy = cn[1], sx = cn[2], sy = cn[3];
              sp.drawLine({ start: { x: cx + sx * mOff, y: cy }, end: { x: cx + sx * (mOff + mLen), y: cy }, thickness: 0.75, color: black });
              sp.drawLine({ start: { x: cx, y: cy + sy * mOff }, end: { x: cx, y: cy + sy * (mOff + mLen) }, thickness: 0.75, color: black });
            });
          } else {
            sp.drawImage(img, { x: 0, y: 0, width: sheetWpt, height: sheetHpt });
          }
          sheetCount++;
          doneTiles++;
          bar.style.width = Math.round(doneTiles / totalTiles * 100) + '%';
        }
      }
      tiledPages++;
    }
    var out = await outDoc.save();
    var blob = new Blob([out], { type: 'application/pdf' });
    var url = URL.createObjectURL(blob);
    var base = file.name.replace(/\.pdf$/i, '');
    var nm = base + '-poster-' + cols + 'x' + rows + '.pdf';
    fileRow.setStatus('Done', 'done');
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<img class="r-preview" alt="First tile preview">' +
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro">⬇ Download poster PDF</button>';
    card.querySelector('.r-preview').src = previewUrl || '';
    card.querySelector('.r-name').textContent = nm;
    card.querySelector('.r-name').title = nm;
    card.querySelector('.r-stats').textContent =
      tiledPages + (tiledPages === 1 ? ' page' : ' pages') + ' tiled into ' + sheetCount +
      ' sheets · ' + cols + '×' + rows + ' grid · ' + dpi + ' DPI · ' + ToolPro.fmtBytes(blob.size);
    card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, nm); });
    outGrid.appendChild(card);
    var sum = '🎉 Tiled ' + tiledPages + (tiledPages === 1 ? ' page' : ' pages') + ' into ' + sheetCount +
      ' printable sheets (' + cols + '×' + rows + ' grid, ' + overlapMm + ' mm overlap).';
    if(total > 10) sum += ' Only the first 10 of ' + total + ' pages were tiled.';
    document.getElementById('ppSum').textContent = sum;
    wrap.classList.remove('show'); res.classList.add('show');
    res.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Poster tiled — ready to print', 'ok');
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

- **Step 1** — Drop in a PDF (one file; the first 10 pages are tiled). It's read straight into your browser — nothing is uploaded anywhere.
- **Step 2** — Choose your tile grid (2×2 up to 4×4), the overlap margin (0–20 mm so sheets glue together seamlessly), the output sheet size and orientation, tile resolution, and whether to print crop marks.
- **Step 3** — Hit **Tile PDF**. Each page is rasterized at your chosen resolution, sliced into overlapping tiles, and assembled into a multi-page poster PDF — one printable sheet per tile. Print at 100% scale, trim the marks, and tape the poster together.

## Everyday uses

- **Classrooms & events** — turn a diagram, chart, or announcement PDF into a big wall display.
- **Kids' rooms** — print coloring-book pages and illustrations as giant posters.
- **Workshops** — enlarge schematics, plans, and timelines so a whole team can read them.
- **Parties** — make photo collages and banners from a single PDF without a print shop.
- **Retail** — print sale signs and menus poster-sized on a normal office printer.
