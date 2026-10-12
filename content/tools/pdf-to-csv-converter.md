---
title: "Free PDF to CSV Converter — Extract Tables from PDF"
description: "Turn PDF tables into a CSV spreadsheet file in your browser. Rows and columns are rebuilt from the text positions — free, private, no uploads, no sign-up."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Bank statements, price lists, and reports love locking tables inside PDFs. This tool reads the text of each page together with its exact on-page positions, groups the words back into rows, splits them into columns where the gaps are wide, and hands you a proper CSV file you can open in Excel, Google Sheets, or LibreOffice. It works best on PDFs that were generated from real tables or spreadsheets — scanned pages are pictures and need OCR instead.

<div class="tool-shell" id="pcvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 2v4h6V5H5zm8 0v4h6V5h-6zM5 11v4h6v-4H5zm8 0v4h6v-4h-6zM5 17v2h6v-2H5zm8 0v2h6v-2h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to CSV Converter</h2>
<p>Rebuild rows and columns from a PDF table and download a clean CSV for your spreadsheet.</p>
</div>
<button type="button" class="theme-toggle" id="pcvTheme">🌙 Dark</button>
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
<div class="dropzone" id="pcvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pcvFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pcvList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Page range (optional)</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="pcvFrom">From page</label>
<input type="number" id="pcvFrom" class="tool-input" min="1" placeholder="First page">
<div class="hint">Leave blank to start at page 1.</div>
</div>
<div class="setting">
<label for="pcvTo">To page</label>
<input type="number" id="pcvTo" class="tool-input" min="1" placeholder="Last page">
<div class="hint">Leave blank to go to the final page. Handy when the table lives on a few pages of a long report.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Extract &amp; download CSV</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pcvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 2v4h6V5H5zm8 0v4h6V5h-6zM5 11v4h6v-4H5zm8 0v4h6v-4h-6zM5 17v2h6v-2H5zm8 0v2h6v-2h-6z"/></svg>
Extract CSV
</button>
<button type="button" class="btn-pro-outline" id="pcvClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pcvProgWrap">
<div class="progress-bar"><i id="pcvProgBar"></i></div>
<div class="progress-text" id="pcvProgText">Working…</div>
</div>
<div class="results" id="pcvResults">
<p class="result-head">✅ Done — your CSV is ready</p>
<div class="result-summary" id="pcvSummary"></div>
<textarea class="tool-output" id="pcvPreview" rows="12" readonly placeholder="Your CSV preview will appear here."></textarea>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="pcvDownload" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download .csv
</button>
<button type="button" class="btn-pro-outline" id="pcvCopy" disabled>📋 Copy CSV</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pcvShell');
  ToolPro.themeToggle(shell, document.getElementById('pcvTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var listEl = document.getElementById('pcvList');
  var btn = document.getElementById('pcvBtn');
  var clearBtn = document.getElementById('pcvClear');
  var dlBtn = document.getElementById('pcvDownload');
  var copyBtn = document.getElementById('pcvCopy');
  var progWrap = document.getElementById('pcvProgWrap');
  var progBar = document.getElementById('pcvProgBar');
  var progText = document.getElementById('pcvProgText');
  var resBox = document.getElementById('pcvResults');
  var summaryEl = document.getElementById('pcvSummary');
  var previewEl = document.getElementById('pcvPreview');

  var srcFile = null;
  var rowRef = null;
  var csvUrl = null;
  var csvText = '';
  var csvName = 'table.csv';

  function refreshButtons(){
    btn.disabled = !srcFile;
    clearBtn.disabled = !srcFile;
    dlBtn.disabled = !csvText;
    copyBtn.disabled = !csvText;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 2v4h6V5H5zm8 0v4h6V5h-6zM5 11v4h6v-4H5zm8 0v4h6v-4h-6zM5 17v2h6v-2H5zm8 0v2h6v-2h-6z"/></svg> Extract CSV' +
      (srcFile ? ' — ' + srcFile.name : '');
  }

  function resetAll(){
    srcFile = null;
    rowRef = null;
    csvText = '';
    if(csvUrl){ URL.revokeObjectURL(csvUrl); csvUrl = null; }
    listEl.innerHTML = '';
    previewEl.value = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('pcvDrop'), {
    accept: 'application/pdf,.pdf',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){
        ToolPro.toast('That file is not a PDF.', 'err');
        return;
      }
      resetAll();
      srcFile = f;
      csvName = f.name.replace(/\.pdf$/i, '') + '.csv';
      rowRef = ToolPro.fileRow(listEl, f, function(){ resetAll(); });
      rowRef.setStatus('Ready — ' + ToolPro.fmtBytes(f.size), 'done');
      refreshButtons();
      ToolPro.toast('PDF added', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  function median(nums){
    if(!nums.length) return 0;
    var s = nums.slice().sort(function(a, b){ return a - b; });
    var m = Math.floor(s.length / 2);
    return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
  }

  function csvCell(text){
    var t = String(text);
    if(/[",\n]/.test(t)) return '"' + t.replace(/"/g, '""') + '"';
    return t;
  }

  function pageToRows(items){
    var clean = items.filter(function(it){ return it.str && it.str.length; }).map(function(it){
      return {
        str: it.str,
        x: it.transform[4],
        y: it.transform[5],
        w: it.width || 0,
        h: Math.abs(it.transform[3]) || it.height || 10
      };
    });
    clean.sort(function(a, b){
      if(Math.abs(a.y - b.y) > 2) return b.y - a.y;
      return a.x - b.x;
    });
    var lines = [];
    var cur = null;
    clean.forEach(function(it){
      var tol = Math.max(2, it.h * 0.4);
      if(cur && Math.abs(it.y - cur.y) <= tol){
        cur.items.push(it);
      } else {
        cur = { y: it.y, items: [it] };
        lines.push(cur);
      }
    });
    var rows = [];
    lines.forEach(function(line){
      line.items.sort(function(a, b){ return a.x - b.x; });
      var widths = [];
      line.items.forEach(function(it){
        if(it.str.length && it.w > 0) widths.push(it.w / it.str.length);
      });
      var med = median(widths) || 5;
      var cells = [];
      var cell = line.items[0].str;
      for(var i = 1; i < line.items.length; i++){
        var prev = line.items[i - 1];
        var next = line.items[i];
        var gap = next.x - (prev.x + prev.w);
        if(gap > med * 1.5){
          cells.push(cell);
          cell = next.str;
        } else if(gap > med * 0.3){
          cell += ' ' + next.str;
        } else {
          cell += next.str;
        }
      }
      cells.push(cell);
      var hasContent = cells.some(function(c){ return c.replace(/\s+/g, '').length; });
      if(hasContent) rows.push(cells.map(csvCell).join(','));
    });
    return rows;
  }

  function readFile(file){
    return new Promise(function(resolve, reject){
      var r = new FileReader();
      r.onload = function(){ resolve(r.result); };
      r.onerror = reject;
      r.readAsArrayBuffer(file);
    });
  }

  btn.addEventListener('click', async function(){
    if(!srcFile) return;
    btn.disabled = true;
    csvText = '';
    if(csvUrl){ URL.revokeObjectURL(csvUrl); csvUrl = null; }
    previewEl.value = '';
    resBox.classList.remove('show');
    progWrap.classList.add('show');
    progBar.style.width = '0%';
    if(rowRef) rowRef.setStatus('Extracting…', 'working');
    try {
      var buf = await readFile(srcFile);
      var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      var total = pdf.numPages;
      var from = parseInt(document.getElementById('pcvFrom').value, 10);
      var to = parseInt(document.getElementById('pcvTo').value, 10);
      if(isNaN(from) || from < 1) from = 1;
      if(isNaN(to) || to > total) to = total;
      if(from > to) from = to;
      var allRows = [];
      for(var n = from; n <= to; n++){
        progText.textContent = 'Reading page ' + n + ' of ' + to + '…';
        var page = await pdf.getPage(n);
        var tc = await page.getTextContent();
        pageToRows(tc.items).forEach(function(r){ allRows.push(r); });
        progBar.style.width = Math.round((n - from + 1) / (to - from + 1) * 100) + '%';
      }
      if(!allRows.length){
        summaryEl.textContent = 'No text rows found in that page range — the pages look like scans or images, which contain no extractable text. Try our image-to-text OCR tool for those.';
        previewEl.value = '';
        resBox.classList.add('show');
        if(rowRef) rowRef.setStatus('No text found', '');
        ToolPro.toast('No extractable text found', 'err');
      } else {
        csvText = allRows.join('\n');
        csvUrl = URL.createObjectURL(new Blob([csvText], { type: 'text/csv' }));
        var previewLines = allRows.slice(0, 50);
        previewEl.value = previewLines.join('\n') + (allRows.length > 50 ? '\n… (' + (allRows.length - 50) + ' more lines in the download)' : '');
        summaryEl.textContent = '🎉 ' + allRows.length + ' rows extracted from pages ' + from + '–' + to + ' of ' + total + '. Preview shows the first ' + Math.min(50, allRows.length) + ' lines — the download has everything.';
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        if(rowRef) rowRef.setStatus('Done — ' + allRows.length + ' rows', 'done');
        ToolPro.toast('CSV extracted — ' + allRows.length + ' rows', 'ok');
      }
    } catch(err){
      summaryEl.textContent = 'Extraction failed — the PDF may be damaged or password-protected.';
      resBox.classList.add('show');
      if(rowRef) rowRef.setStatus('Failed', '');
      ToolPro.toast('Extraction failed', 'err');
    }
    progWrap.classList.remove('show');
    btn.disabled = false;
    refreshButtons();
  });

  dlBtn.addEventListener('click', function(){
    if(csvUrl) ToolPro.download(csvUrl, csvName);
  });

  copyBtn.addEventListener('click', function(){
    if(!csvText) return;
    if(navigator.clipboard){
      navigator.clipboard.writeText(csvText).then(function(){ ToolPro.toast('CSV copied to clipboard', 'ok'); });
    } else {
      previewEl.removeAttribute('readonly');
      previewEl.select();
      document.execCommand('copy');
      previewEl.setAttribute('readonly', '');
      ToolPro.toast('CSV copied to clipboard', 'ok');
    }
  });

  refreshButtons();
})();
</script>

## Everyday uses

- **Bank &amp; card statements** — pull transactions into a spreadsheet so you can sort, filter, and total them.
- **Supplier price lists** — get product tables out of PDF catalogs and into your own sheet.
- **Reports &amp; research** — rescue data tables from published PDFs instead of retyping hundreds of numbers.
- **Invoices &amp; orders** — move line items into accounting or inventory spreadsheets.

## Frequently asked questions

**Why did some columns merge together or split apart?**
PDFs store words at positions, not in a real table grid. The tool rebuilds columns from the spacing between words, which works well on evenly spaced tables; tightly packed or irregular layouts can merge neighboring columns or split one column in two. A quick tidy-up in your spreadsheet fixes most cases.

**Will it work on scanned PDFs?**
No — scans are pictures of pages with no text inside, so there is nothing to rebuild rows from. Run scanned pages through our free [image-to-text OCR tool](/tools/image-to-text-ocr/) first, and use PDFs generated from real spreadsheets or documents here.

**What opens a .csv file?**
Almost everything: Microsoft Excel, Google Sheets, LibreOffice Calc, and Apple Numbers all open CSV files directly, one row per line and one column per comma.
