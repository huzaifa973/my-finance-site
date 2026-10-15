---
title: "Free PDF to Excel Converter — Turn PDF Pages into XLSX"
description: "Convert PDF pages into a real Excel workbook in your browser — one sheet per page plus an all-pages sheet, with CSV fallback. Free and private."
category: pdf
date: 2026-10-15
draft: false
---

Tables trapped inside a PDF are a pain to reuse. This converter reads the PDF's text layer in your browser and writes a real .xlsx workbook — one sheet per page, plus an "All Pages" combined sheet — so you can sort, filter, and calculate on the data right away. No uploads, no sign-up, no limits.

<div class="tool-shell" id="ptxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5zm4 0v4h4V5H7zm6 0v4h4V5h-4zM7 11v4h4v-4H7zm6 0v4h4v-4h-4zM7 17v2h4v-2H7zm6 0v2h4v-2h-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to Excel Converter</h2>
<p>Turn PDF pages into a real .xlsx workbook — one sheet per page, plus an all-pages sheet.</p>
</div>
<button type="button" class="theme-toggle" id="ptxTheme">🌙 Dark</button>
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
<div class="dropzone" id="ptxDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 10 files at once</span>
<input type="file" id="ptxFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ptxList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="preset-row" id="ptxPresets">
<button type="button" class="preset-chip active" data-mode="sheets">📑 Sheet per page + combined sheet</button>
<button type="button" class="preset-chip" data-mode="single">📄 Single combined sheet only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ptxSheets">One sheet per page</label>
<div class="toggle on" id="ptxSheets" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Each PDF page gets its own sheet, plus an "All Pages" sheet. Off = one combined sheet only.</div>
</div>
<div class="setting">
<label for="ptxSep">Page separator (combined sheet)</label>
<select id="ptxSep" class="tool-input">
<option value="labeled" selected>Labeled row — "--- Page N ---"</option>
<option value="blank">Blank row</option>
<option value="none">No separator</option>
</select>
<div class="hint">How pages are divided on the combined sheet.</div>
</div>
<div class="setting">
<label for="ptxCell">Max characters per cell</label>
<input type="range" id="ptxCell" min="500" max="10000" step="500" value="5000">
<div class="hint">Very long lines are cut at <b id="ptxCellVal">5,000</b> characters per cell.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ptxBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to Excel
</button>
<button type="button" class="btn-pro-outline" id="ptxClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ptxProgWrap">
<div class="progress-bar"><i id="ptxProgBar"></i></div>
<div class="progress-text" id="ptxProgText">Working…</div>
</div>
<div class="results" id="ptxResults">
<p class="result-head">✅ Converted — one workbook per PDF</p>
<div class="result-summary" id="ptxSummary"></div>
<div class="result-grid" id="ptxGrid"></div>
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
  var shell = document.getElementById('ptxShell');
  ToolPro.themeToggle(shell, document.getElementById('ptxTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var files = [];
  var listEl = document.getElementById('ptxList');
  var btn = document.getElementById('ptxBtn');
  var clearBtn = document.getElementById('ptxClear');
  var grid = document.getElementById('ptxGrid');
  var resBox = document.getElementById('ptxResults');
  var summaryEl = document.getElementById('ptxSummary');
  var progWrap = document.getElementById('ptxProgWrap');
  var progBar = document.getElementById('ptxProgBar');
  var progText = document.getElementById('ptxProgText');
  var chips = document.getElementById('ptxPresets');

  function bindToggle(el, initial, onChange){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    function flip(){ state = !state; paint(); if(onChange) onChange(state); }
    el.addEventListener('click', flip);
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ v = !!v; if(v !== state){ state = v; paint(); if(onChange) onChange(state); } } };
  }

  function syncChips(){
    var sheets = tSheets.get();
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', (c.dataset.mode === 'sheets') === sheets);
    });
  }
  var tSheets = bindToggle(document.getElementById('ptxSheets'), true, syncChips);
  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    tSheets.set(chip.dataset.mode === 'sheets');
    syncChips();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ToolPro.bindSlider(
    document.getElementById('ptxCell'),
    document.getElementById('ptxCellVal'),
    function(v){ return Number(v).toLocaleString('en-US'); }
  );

  function refreshButtons(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }

  function resetResults(){
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
  }

  ToolPro.dropzone(document.getElementById('ptxDrop'), {
    multiple: true, accept: 'application/pdf,.pdf', maxFiles: 10,
    onFiles: function(arr){
      if(!arr.length) return;
      resetResults();
      arr.forEach(function(f){
        files.push(f);
        ToolPro.fileRow(listEl, f, function(removed){
          files = files.filter(function(x){ return x !== removed; });
          resetResults();
          refreshButtons();
        });
      });
      refreshButtons();
      ToolPro.toast(files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' ready — hit Convert to Excel', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = [];
    listEl.innerHTML = '';
    resetResults();
    refreshButtons();
  });

  // Lazy-load SheetJS only when the user actually converts.
  var xlsxPromise = null;
  function ensureXlsx(){
    if(window.XLSX) return Promise.resolve(window.XLSX);
    if(xlsxPromise) return xlsxPromise;
    xlsxPromise = new Promise(function(resolve, reject){
      var tries = 0;
      function attempt(){
        tries++;
        var s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
        s.onload = function(){
          if(window.XLSX) resolve(window.XLSX);
          else fail();
        };
        s.onerror = fail;
        document.head.appendChild(s);
      }
      function fail(){
        if(tries < 2){ setTimeout(attempt, 1500); }
        else reject(new Error('spreadsheet library failed to load'));
      }
      attempt();
    });
    return xlsxPromise;
  }

  function pageToLines(tc){
    var items = [];
    tc.items.forEach(function(it){ if(typeof it.str === 'string') items.push(it); });
    var lines = [];
    items.forEach(function(it){
      var y = it.transform[5];
      var line = null;
      for(var i = 0; i < lines.length; i++){
        if(Math.abs(lines[i].y - y) <= 3){ line = lines[i]; break; }
      }
      if(!line){ line = { y: y, items: [] }; lines.push(line); }
      line.items.push(it);
    });
    lines.sort(function(a, b){ return b.y - a.y; });
    var out = [];
    var prevY = null, prevH = 12;
    lines.forEach(function(line){
      line.items.sort(function(a, b){ return a.transform[4] - b.transform[4]; });
      var text = '', prevEnd = null, fontH = 0;
      line.items.forEach(function(it){
        var h = it.height || Math.abs(it.transform[3]) || 12;
        if(h > fontH) fontH = h;
        var x = it.transform[4];
        if(prevEnd !== null && (x - prevEnd) > fontH * 0.25) text += ' ';
        text += it.str;
        prevEnd = x + (it.width || 0);
      });
      text = text.replace(/\s+/g, ' ').trim();
      if(prevY !== null && (prevY - line.y) > prevH * 1.7 && out.length && out[out.length - 1] !== '') out.push('');
      if(text) out.push(text);
      prevY = line.y;
      if(fontH) prevH = fontH;
    });
    return out;
  }

  async function extractPages(file, onPage){
    var buf = await file.arrayBuffer();
    var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
    var pages = [];
    var total = pdf.numPages;
    for(var n = 1; n <= total; n++){
      if(onPage) onPage(n, total);
      var page = await pdf.getPage(n);
      var tc = await page.getTextContent();
      pages.push(pageToLines(tc));
      page.cleanup();
    }
    return { pages: pages, total: total };
  }

  function toCsv(rows){
    return rows.map(function(r){
      return r.map(function(c){
        c = String(c == null ? '' : c);
        return /[",\n\r]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c;
      }).join(',');
    }).join('\n');
  }

  function buildWorkbook(pagesLines, opts){
    var maxCell = opts.maxCell;
    function cell(t){
      t = t == null ? '' : String(t);
      if(t.length > maxCell) t = t.slice(0, maxCell) + '…';
      return [t];
    }
    var wb = XLSX.utils.book_new();
    if(opts.sheets){
      pagesLines.forEach(function(lines, pi){
        var rows = lines.map(function(ln){ return cell(ln); });
        var ws = XLSX.utils.aoa_to_sheet(rows.length ? rows : [['']]);
        ws['!cols'] = [{ wch: 100 }];
        XLSX.utils.book_append_sheet(wb, ws, 'Page ' + (pi + 1));
      });
    }
    var all = [];
    pagesLines.forEach(function(lines, pi){
      if(pi > 0){
        if(opts.sep === 'labeled') all.push(['--- Page ' + (pi + 1) + ' ---']);
        else if(opts.sep === 'blank') all.push(['']);
      }
      lines.forEach(function(ln){ all.push(cell(ln)); });
    });
    var wsAll = XLSX.utils.aoa_to_sheet(all.length ? all : [['']]);
    wsAll['!cols'] = [{ wch: 100 }];
    XLSX.utils.book_append_sheet(wb, wsAll, opts.sheets ? 'All Pages' : 'Sheet1');
    return { wb: wb, combinedRows: all };
  }

  function makeCard(file, base, xlsxBytes, csvText, stats, warn){
    var card = document.createElement('div');
    card.className = 'result-card';
    var html =
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<div class="tool-actions" style="margin-top:.6rem;gap:.5rem;flex-wrap:wrap;">' +
      '<button type="button" class="btn-pro dl-xlsx">⬇ Download Excel (.xlsx)</button>' +
      '<button type="button" class="btn-pro-outline dl-csv">⬇ CSV fallback</button>' +
      '</div>';
    card.innerHTML = html;
    card.querySelector('.r-name').textContent = base + '.xlsx';
    card.querySelector('.r-name').title = base + '.xlsx';
    card.querySelector('.r-stats').textContent = warn || stats;
    if(!warn){
      var xlsxUrl = URL.createObjectURL(new Blob([xlsxBytes], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }));
      var csvUrl = URL.createObjectURL(new Blob(['\ufeff' + csvText], { type: 'text/csv;charset=utf-8' }));
      card.querySelector('.dl-xlsx').addEventListener('click', function(){ ToolPro.download(xlsxUrl, base + '.xlsx'); });
      card.querySelector('.dl-csv').addEventListener('click', function(){ ToolPro.download(csvUrl, base + '.csv'); });
    } else {
      card.querySelector('.dl-xlsx').disabled = true;
      card.querySelector('.dl-csv').disabled = true;
    }
    grid.appendChild(card);
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true; clearBtn.disabled = true;
    resetResults();
    progWrap.classList.add('show'); progBar.style.width = '0%';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var XLSX;
    try{
      prog(2, 'Loading spreadsheet engine…');
      XLSX = await ensureXlsx();
    }catch(e){
      progWrap.classList.remove('show');
      ToolPro.toast('Spreadsheet engine failed to load — check your connection and retry.', 'err');
      btn.disabled = false; clearBtn.disabled = false;
      return;
    }

    var opts = {
      sheets: tSheets.get(),
      sep: document.getElementById('ptxSep').value,
      maxCell: parseInt(document.getElementById('ptxCell').value, 10) || 5000
    };
    window.XLSX = XLSX;
    var done = 0, okCount = 0;
    for(var fi = 0; fi < files.length; fi++){
      var file = files[fi];
      prog(Math.round(fi / files.length * 90), 'File ' + (fi + 1) + ' of ' + files.length + ': ' + file.name);
      try{
        var res = await extractPages(file, function(n, total){
          prog(Math.round((fi + n / total) / files.length * 90), 'File ' + (fi + 1) + ' of ' + files.length + ' — reading page ' + n + ' of ' + total + '…');
        });
        var base = file.name.replace(/\.pdf$/i, '');
        var charCount = 0, lineCount = 0;
        res.pages.forEach(function(l){ lineCount += l.length; l.forEach(function(ln){ charCount += ln.length; }); });
        if(charCount === 0){
          makeCard(file, base, null, null, null, '⚠️ No text layer found — this PDF is a scan or image, so there are no words to put in a spreadsheet. Run it through our free PDF OCR tool first.');
        } else {
          var built = buildWorkbook(res.pages, opts);
          var xlsxBytes = XLSX.write(built.wb, { bookType: 'xlsx', type: 'array' });
          var csvText = toCsv(built.combinedRows);
          makeCard(file, base, xlsxBytes, csvText, res.total + ' page' + (res.total === 1 ? '' : 's') + ' → ' + lineCount.toLocaleString('en-US') + ' rows · ' + charCount.toLocaleString('en-US') + ' chars · ' + ToolPro.fmtBytes(xlsxBytes.length));
          okCount++;
        }
      }catch(err){
        makeCard(file, file.name.replace(/\.pdf$/i, ''), null, null, null, '⚠️ Could not read this PDF — ' + (err && err.name === 'PasswordException' ? 'it is password-protected.' : 'it may be damaged or encrypted.'));
      }
      done++;
    }
    prog(100, 'Done');
    progWrap.classList.remove('show');
    summaryEl.textContent = okCount + ' of ' + files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' converted to Excel workbooks. Each workbook carries the extracted text line by line — layout, fonts, and images are not carried over.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(okCount ? 'Workbooks ready' : 'Nothing converted', okCount ? 'ok' : 'err');
    btn.disabled = false; clearBtn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in up to 10 PDFs. Each is read into your browser's memory — nothing is uploaded.
- **Step 2** — Choose sheet-per-page (plus an "All Pages" combined sheet) or a single combined sheet, set the page separator and the per-cell character cap.
- **Step 3** — Hit **Convert to Excel**. The tool reads each page's text line by line, builds a real .xlsx workbook, and gives you a CSV fallback button on every card too.

An honest note: this carries the words, not the design — merged table cells, column alignment, and images are not reconstructed. It works on text-based PDFs; scans with no text layer come out empty (run those through our [free PDF OCR tool](/tools/pdf-ocr/) first).

## Everyday uses

- **Invoices &amp; statements** — pull line items out of PDF bills into a spreadsheet you can total and sort.
- **Reports** — turn a PDF report's figures into data you can chart and pivot.
- **Research** — collect text from several PDFs into one workbook instead of copy-pasting page by page.
- **Price lists** — convert a supplier's PDF catalog into rows you can filter and compare.
- **Students** — extract study material into a sheet for flashcards or notes.

## Frequently asked questions

**Why does the spreadsheet put each line in its own row?**
PDFs don't store real tables — just positioned text — so the honest, predictable conversion is one line per row. You can merge or clean up rows in Excel in seconds.

**What is the CSV fallback for?**
If Excel, Google Sheets, or another app has trouble with the .xlsx, the CSV opens anywhere and carries the same combined text.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
