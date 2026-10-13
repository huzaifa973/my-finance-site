---
title: "Free PDF to PNG Converter — PDF Pages to Images"
description: "Convert PDF pages to PNG images in your browser. Every page becomes a crisp PNG at your chosen DPI — download pages individually. Free, no sign-up."
category: pdf
date: 2026-10-13
draft: false
---

Need PDF pages as images — for slides, social posts, or a design mockup? This free PDF to PNG converter renders every page of your PDF into a crisp PNG at your chosen resolution, and you can download each page individually. Everything runs locally in your browser; your files never leave your browser.

<div class="tool-shell" id="p2pShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to PNG Converter</h2>
<p>Turn every PDF page into a crisp PNG image at web, print or HD resolution — download pages individually.</p>
</div>
<button type="button" class="theme-toggle" id="p2pTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDFs</p>
<div class="dropzone" id="p2pDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 5 files</span>
<input type="file" id="p2pFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="p2pList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Image settings</p>
<div class="settings-panel">
<div class="preset-row" id="p2pPresets">
<button type="button" class="preset-chip active" data-dpi="150">🖥 Web — 150 DPI</button>
<button type="button" class="preset-chip" data-dpi="200">🖨 Print — 200 DPI</button>
<button type="button" class="preset-chip" data-dpi="300">💎 HD — 300 DPI</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="p2pDpi">Resolution: <span class="val" id="p2pDpiVal">150 DPI</span></label>
<input type="range" id="p2pDpi" min="100" max="300" step="25" value="150">
<div class="hint">150 DPI is plenty for screens and slides; 300 DPI for print-quality output (bigger files).</div>
</div>
<div class="setting">
<label for="p2pLimit">Pages per file</label>
<select id="p2pLimit">
<option value="all" selected>All pages</option>
<option value="10">First 10 pages</option>
<option value="5">First 5 pages</option>
</select>
<div class="hint">Large documents render faster if you only need the beginning.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="p2pBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to PNG
</button>
<button type="button" class="btn-pro-outline" id="p2pClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="p2pProgWrap">
<div class="progress-bar"><i id="p2pProgBar"></i></div>
<div class="progress-text" id="p2pProgText">Working…</div>
</div>
<div class="results" id="p2pResults">
<p class="result-head">✅ Done — your PNG pages</p>
<div class="result-summary" id="p2pSummary"></div>
<div class="result-grid" id="p2pGrid"></div>
<div class="hint">Tip: "Download all" saves pages one by one — your browser may ask to allow multiple downloads; click "Allow".</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
var shell = document.getElementById('p2pShell');
ToolPro.themeToggle(shell, document.getElementById('p2pTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var files = [];
var listEl = document.getElementById('p2pList');
var btn = document.getElementById('p2pBtn');
var clearBtn = document.getElementById('p2pClear');
var dpiRange = document.getElementById('p2pDpi');
var dpiVal = document.getElementById('p2pDpiVal');
var presets = document.getElementById('p2pPresets');
ToolPro.bindSlider(dpiRange, dpiVal, function(v){ return v + ' DPI'; });
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  dpiRange.value = chip.dataset.dpi;
  dpiRange.dispatchEvent(new Event('input'));
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
function refreshButtons(){
  var n = files.length;
  btn.disabled = !n;
  clearBtn.disabled = !n;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert ' +
    (n ? '— ' + n + (n === 1 ? ' PDF' : ' PDFs') : 'to PNG');
}
ToolPro.dropzone(document.getElementById('p2pDrop'), {
  multiple: true,
  accept: 'application/pdf,.pdf',
  maxFiles: 5,
  onFiles: function(arr){
    arr.forEach(function(f){
      if(files.some(function(x){ return x.file === f; })) return;
      var row = ToolPro.fileRow(listEl, f, function(dead){
        files = files.filter(function(x){ return x.file !== dead; });
        refreshButtons();
      });
      files.push({ file: f, row: row });
    });
    document.getElementById('p2pResults').classList.remove('show');
    refreshButtons();
    ToolPro.toast(arr.length + (arr.length === 1 ? ' PDF' : ' PDFs') + ' added', 'ok');
  }
});
clearBtn.addEventListener('click', function(){
  files = []; listEl.innerHTML = '';
  document.getElementById('p2pResults').classList.remove('show');
  refreshButtons();
});
function loadPdf(file){
  return new Promise(function(resolve){
    var reader = new FileReader();
    reader.onload = function(){
      pdfjsLib.getDocument({ data: new Uint8Array(reader.result) }).promise.then(
        function(pdf){ resolve(pdf); },
        function(){ resolve(null); }
      );
    };
    reader.onerror = function(){ resolve(null); };
    reader.readAsArrayBuffer(file);
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
btn.addEventListener('click', async function(){
  if(!files.length) return;
  var dpi = parseInt(dpiRange.value, 10);
  var scale = dpi / 72;
  var limSel = document.getElementById('p2pLimit').value;
  var limit = limSel === 'all' ? 0 : parseInt(limSel, 10);
  var progWrap = document.getElementById('p2pProgWrap');
  var progBar = document.getElementById('p2pProgBar');
  var progText = document.getElementById('p2pProgText');
  var grid = document.getElementById('p2pGrid');
  var resBox = document.getElementById('p2pResults');
  btn.disabled = true;
  progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
  var totalPages = 0, doneFiles = 0;
  for(var i = 0; i < files.length; i++){
    var entry = files[i];
    entry.row.setStatus('Working…', 'working');
    progText.textContent = 'Rendering ' + (i + 1) + ' of ' + files.length + '…';
    var pdf = await loadPdf(entry.file);
    if(!pdf){ entry.row.setStatus('Failed', ''); continue; }
    var total = pdf.numPages;
    var n = limit ? Math.min(total, limit) : total;
    var pages = [];
    for(var p = 1; p <= n; p++){
      progText.textContent = 'Rendering ' + entry.file.name + ' — page ' + p + ' of ' + n + '…';
      var c = await renderPage(pdf, p, scale);
      if(c) pages.push({ n: p, url: c.toDataURL('image/png'), w: c.width, h: c.height });
      progBar.style.width = Math.round(((i + p / n) / files.length) * 100) + '%';
    }
    entry.row.setStatus('Done', 'done');
    doneFiles++;
    totalPages += pages.length;
    var base = entry.file.name.replace(/\.pdf$/i, '');
    var card = document.createElement('div');
    card.className = 'result-card';
    var thumbs = pages.map(function(pg){
      return '<div style="display:inline-block;margin:4px;text-align:center;vertical-align:top;">' +
        '<img src="' + pg.url + '" alt="Page ' + pg.n + '" style="max-width:110px;max-height:150px;border:1px solid var(--border,#e2e8f0);border-radius:6px;">' +
        '<div style="font-size:.72rem;margin-top:2px;">Page ' + pg.n + ' · ' + pg.w + '×' + pg.h + '</div>' +
        '<button type="button" class="btn-pro-outline dl-page" data-url="' + pg.url + '" data-name="' + base + '-page-' + pg.n + '.png" style="margin-top:4px;padding:.25rem .6rem;font-size:.75rem;">⬇ PNG</button>' +
        '</div>';
    }).join('');
    card.innerHTML =
      '<div class="r-name">' + base + ' — ' + pages.length + ' PNG' + (pages.length === 1 ? '' : 's') + '</div>' +
      '<div class="r-stats">' + dpi + ' DPI · ' + (limit ? 'first ' + pages.length + ' of ' + total + ' pages' : total + ' pages') + '</div>' +
      '<div>' + thumbs + '</div>' +
      '<div style="margin-top:8px;"><button type="button" class="btn-pro dl-all">⬇ Download all pages</button></div>';
    var urls = pages.map(function(pg){ return { url: pg.url, name: base + '-page-' + pg.n + '.png' }; });
    Array.prototype.forEach.call(card.querySelectorAll('.dl-page'), function(b){
      b.addEventListener('click', function(){ ToolPro.download(b.dataset.url, b.dataset.name); });
    });
    card.querySelector('.dl-all').addEventListener('click', function(){
      urls.forEach(function(u, k){
        setTimeout(function(){ ToolPro.download(u.url, u.name); }, k * 600);
      });
      ToolPro.toast('Downloading ' + urls.length + ' pages — allow multiple downloads if asked', 'ok');
    });
    grid.appendChild(card);
    progBar.style.width = Math.round(((i + 1) / files.length) * 100) + '%';
  }
  document.getElementById('p2pSummary').textContent =
    '🎉 ' + totalPages + ' page' + (totalPages === 1 ? '' : 's') + ' rendered from ' + doneFiles +
    (doneFiles === 1 ? ' PDF' : ' PDFs') + ' at ' + dpi + ' DPI. Click any page to download it.';
  progWrap.classList.remove('show');
  resBox.classList.add('show');
  resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  btn.disabled = false;
  ToolPro.toast('Conversion finished', 'ok');
});
refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDFs (up to 5 at a time). They're read straight into your browser — nothing leaves your device.
- **Step 2** — Pick a resolution preset: 150 DPI for web and slides, 200 DPI for print, 300 DPI for HD. You can also limit the render to the first pages of long documents.
- **Step 3** — Hit **Convert to PNG**. Each page is rendered pixel-perfect at your chosen resolution; thumbnails appear per file so you can download the pages you want individually, or grab them all at once.

## Everyday uses

- **Presentations** — turn a PDF report's key pages into slide-ready images.
- **Social media** — export document pages as PNGs to share as image posts.
- **Designers** — pull page images into mockups and mood boards without screenshots.
- **Students** — convert textbook pages to images for flashcards and notes apps.
- **Anyone archiving** — PNG is the lossless, everywhere-compatible way to freeze a page exactly as it looks.
