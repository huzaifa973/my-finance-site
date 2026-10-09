---
title: "Free PDF Splitter — Split PDF Files Online"
description: "Split PDF files in your browser — extract page ranges or save every page as its own file. Free forever, no sign-up, files never leave your device."
date: 2026-10-09
draft: false
---

Pull exactly the pages you need out of a PDF — no more emailing a 200-page report when someone asked for chapter 3. Upload a PDF, pick a page range or split every page into its own file, and download the results. The splitting runs entirely in your browser with the pdf-lib engine, so your documents are never uploaded anywhere.

<div class="tool-shell" id="spShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.64 7.64L2 15.27l2.73 2.73L12.36 10.36 9.64 7.64zM7 2L3.91 5.09 10.36 11.54 13.45 8.45 7 2zm11.36 1.64L15.64 6.36l3.45 3.46 2.73-2.73-3.46-3.45zM17 11l-4 4 4 4 1.41-1.41L15.83 15l2.58-2.59L17 11z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Splitter</h2>
<p>Extract a page range or split every page into its own PDF — right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="spTheme">🌙 Dark</button>
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
<div class="dropzone" id="spDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="spFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="spList"></ul>
<p class="page-info" id="spPages"></p>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="spPresets">
<button type="button" class="preset-chip active" data-mode="custom">📄 Custom range</button>
<button type="button" class="preset-chip" data-mode="first">1️⃣ First 3 pages</button>
<button type="button" class="preset-chip" data-mode="mid">🔀 Middle half</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Page range <span class="val" id="spRangeVal">—</span></label>
<div>
<input type="number" id="spStart" min="1" value="1" inputmode="numeric" aria-label="Start page">
<span> to </span>
<input type="number" id="spEnd" min="1" value="1" inputmode="numeric" aria-label="End page">
</div>
<div class="hint">Page numbers run from 1 to the last page of your PDF.</div>
</div>
<div class="setting">
<label>Split mode</label>
<label><input type="checkbox" id="spSingle"> Split into single-page PDFs</label>
<div class="hint">One PDF per page — the page range is ignored.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9.64 7.64L2 15.27l2.73 2.73L12.36 10.36 9.64 7.64zM7 2L3.91 5.09 10.36 11.54 13.45 8.45 7 2zm11.36 1.64L15.64 6.36l3.45 3.46 2.73-2.73-3.46-3.45zM17 11l-4 4 4 4 1.41-1.41L15.83 15l2.58-2.59L17 11z"/></svg>
Split PDF
</button>
<button type="button" class="btn-pro-outline" id="spClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="spProgWrap">
<div class="progress-bar"><i id="spProgBar"></i></div>
<div class="progress-text" id="spProgText">Working…</div>
</div>
<div class="results" id="spResults">
<p class="result-head">✅ Done — your split PDFs</p>
<div class="result-summary" id="spSummary"></div>
<div class="result-grid" id="spGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many PDFs as you like, as often as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('spShell');
  ToolPro.themeToggle(shell, document.getElementById('spTheme'));

  var listEl = document.getElementById('spList');
  var btn = document.getElementById('spBtn');
  var clearBtn = document.getElementById('spClear');
  var pagesEl = document.getElementById('spPages');
  var startInput = document.getElementById('spStart');
  var endInput = document.getElementById('spEnd');
  var rangeVal = document.getElementById('spRangeVal');
  var singleChk = document.getElementById('spSingle');
  var presets = document.getElementById('spPresets');
  var resBox = document.getElementById('spResults');

  var pdfFile = null, pdfBytes = null, pageCount = 0;
  var MAX_SHOW = 20;

  function pdfLibReady(){
    return typeof window.PDFLib !== 'undefined';
  }

  function refreshButtons(){
    btn.disabled = !(pdfFile && pageCount > 0);
    clearBtn.disabled = !pdfFile;
  }

  function updateRangeVal(){
    var s = parseInt(startInput.value, 10), e = parseInt(endInput.value, 10);
    if(!pageCount || !s || !e){ rangeVal.textContent = '—'; return; }
    rangeVal.textContent = s + '–' + e + ' of ' + pageCount;
  }
  startInput.addEventListener('input', updateRangeVal);
  endInput.addEventListener('input', updateRangeVal);

  function applyPreset(mode){
    if(mode === 'first'){ startInput.value = 1; endInput.value = Math.min(3, pageCount); }
    else if(mode === 'mid'){
      startInput.value = Math.floor(pageCount * 0.25) + 1;
      endInput.value = Math.ceil(pageCount * 0.75);
    }
    else { startInput.value = 1; endInput.value = pageCount; }
    updateRangeVal();
  }

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    if(!pageCount){ ToolPro.toast('Add a PDF first', 'err'); return; }
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    singleChk.checked = false;
    startInput.disabled = false; endInput.disabled = false;
    applyPreset(chip.dataset.mode);
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  singleChk.addEventListener('change', function(){
    var off = singleChk.checked;
    startInput.disabled = off; endInput.disabled = off;
    if(off){
      presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    }
  });

  function resetAll(){
    pdfFile = null; pdfBytes = null; pageCount = 0;
    listEl.innerHTML = '';
    pagesEl.textContent = '';
    startInput.value = 1; endInput.value = 1;
    startInput.disabled = false; endInput.disabled = false;
    singleChk.checked = false;
    updateRangeVal();
    resBox.classList.remove('show');
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('spDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      var f = arr[0]; if(!f) return;
      if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){
        ToolPro.toast('Please add a PDF file', 'err'); return;
      }
      if(!pdfLibReady()){
        ToolPro.toast('PDF engine failed to load — check your connection and reload the page', 'err');
        return;
      }
      var r = new FileReader();
      r.onload = function(){
        pdfBytes = r.result;
        window.PDFLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true }).then(function(doc){
          pdfFile = f;
          pageCount = doc.getPageCount();
          listEl.innerHTML = '';
          ToolPro.fileRow(listEl, f, function(){ resetAll(); });
          pagesEl.textContent = '✅ Loaded — this PDF has ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + '.';
          startInput.max = pageCount; endInput.max = pageCount;
          startInput.value = 1; endInput.value = pageCount;
          resBox.classList.remove('show');
          updateRangeVal();
          refreshButtons();
          ToolPro.toast('PDF loaded: ' + pageCount + ' pages', 'ok');
        }).catch(function(err){
          pdfFile = null; pdfBytes = null; pageCount = 0;
          var msg = (err && err.message) || '';
          if(/encrypt|password/i.test(msg)){
            ToolPro.toast('This PDF is password-protected — remove the password first, then split it', 'err');
          } else {
            ToolPro.toast('Could not read this PDF — the file may be damaged', 'err');
          }
          refreshButtons();
        });
      };
      r.onerror = function(){ ToolPro.toast('Could not read the file', 'err'); };
      r.readAsArrayBuffer(f);
    }
  });

  clearBtn.addEventListener('click', resetAll);

  btn.addEventListener('click', async function(){
    if(!pdfBytes || !pageCount) return;
    if(!pdfLibReady()){ ToolPro.toast('PDF engine failed to load — reload the page', 'err'); return; }

    var single = singleChk.checked;
    var s = parseInt(startInput.value, 10) || 1;
    var e = parseInt(endInput.value, 10) || pageCount;
    if(!single){
      if(s < 1) s = 1;
      if(e > pageCount) e = pageCount;
      if(s > e){ ToolPro.toast('Start page must come before the end page', 'err'); return; }
    }

    btn.disabled = true;
    var progWrap = document.getElementById('spProgWrap');
    var progBar = document.getElementById('spProgBar');
    var progText = document.getElementById('spProgText');
    var grid = document.getElementById('spGrid');
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    var pieces = []; // {name, bytes, label}
    var base = pdfFile.name.replace(/\.pdf$/i, '');
    try {
      var src = await window.PDFLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true });
      if(single){
        for(var i = 0; i < pageCount; i++){
          progText.textContent = 'Splitting page ' + (i + 1) + ' of ' + pageCount + '…';
          var d = await window.PDFLib.PDFDocument.create();
          var cp = await d.copyPages(src, [i]);
          d.addPage(cp[0]);
          var b = await d.save();
          pieces.push({ name: base + '-page-' + (i + 1) + '.pdf', bytes: b, label: 'Page ' + (i + 1) });
          progBar.style.width = Math.round((i + 1) / pageCount * 100) + '%';
          await new Promise(function(r){ setTimeout(r, 0); });
        }
      } else {
        var idx = [];
        for(var p = s; p <= e; p++){ idx.push(p - 1); }
        progText.textContent = 'Extracting pages ' + s + '–' + e + '…';
        var d2 = await window.PDFLib.PDFDocument.create();
        var cp2 = await d2.copyPages(src, idx);
        cp2.forEach(function(pg){ d2.addPage(pg); });
        var b2 = await d2.save();
        pieces.push({ name: base + '-pages-' + s + '-' + e + '.pdf', bytes: b2,
                      label: 'Pages ' + s + '–' + e + ' (' + idx.length + (idx.length === 1 ? ' page' : ' pages') + ')' });
        progBar.style.width = '100%';
      }
    } catch(err){
      progWrap.classList.remove('show');
      btn.disabled = false;
      ToolPro.toast('Splitting failed: ' + ((err && err.message) || 'unknown error'), 'err');
      return;
    }

    var urls = pieces.map(function(piece){
      return URL.createObjectURL(new Blob([piece.bytes], { type: 'application/pdf' }));
    });

    pieces.slice(0, MAX_SHOW).forEach(function(piece, i){
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<svg class="r-preview" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' +
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-name').textContent = piece.name;
      card.querySelector('.r-name').title = piece.name;
      card.querySelector('.r-stats').textContent = ToolPro.fmtBytes(piece.bytes.length) + ' · ' + piece.label;
      (function(u, n){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
      })(urls[i], piece.name);
      grid.appendChild(card);
    });

    var summary = document.getElementById('spSummary');
    if(single && pieces.length > MAX_SHOW){
      summary.textContent = '🎉 Split into ' + pieces.length + ' single-page PDFs. Showing the first ' + MAX_SHOW + ' below.';
    } else if(single){
      summary.textContent = '🎉 Split into ' + pieces.length + (pieces.length === 1 ? ' single-page PDF.' : ' single-page PDFs.');
    } else {
      summary.textContent = '🎉 Extracted pages ' + s + '–' + e + ' into a new PDF.';
    }
    if(single && pieces.length > 1){
      var allBtn = document.createElement('button');
      allBtn.type = 'button';
      allBtn.className = 'btn-pro-outline';
      allBtn.textContent = '⬇ Download all ' + pieces.length + ' PDFs';
      allBtn.addEventListener('click', function(){
        ToolPro.toast('Downloading ' + pieces.length + ' PDFs…');
        pieces.forEach(function(piece, i){
          setTimeout(function(){ ToolPro.download(urls[i], piece.name); }, i * 400);
        });
      });
      summary.appendChild(document.createElement('br'));
      summary.appendChild(allBtn);
    }

    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('PDF split complete', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

**Page ranges, simply explained:** a PDF is a numbered stack of pages. "Custom range" copies only the pages you choose (for example 3–7) into a brand-new PDF — the original file is never changed. **Extraction vs. single-page split:** extraction bundles your chosen pages into one smaller PDF, while single-page mode turns a 40-page document into 40 one-page PDFs. Because pdf-lib copies pages losslessly, the extracted pages keep their original quality — text, images, and formatting come through untouched.

**Privacy note:** most "free" PDF splitters upload your documents to their servers, where sensitive reports and contracts sit on someone else's disk. This tool loads the pdf-lib engine in your own browser, so your files never leave your device. That privacy-first design is exactly why DollarWise tools exist.

## Everyday uses

- **Send only chapter 3** — extract the pages someone actually asked for instead of the whole 200-page report.
- **Split a scanned book** — break a big scan into one file per chapter so it's easier to read and share.
- **Separate invoices** — pull individual invoices out of a combined statement PDF.
- **Extract a form** — grab the two-page form buried inside a 50-page document.
- **Smaller email attachments** — send a trimmed-down PDF that fits under attachment size limits.
