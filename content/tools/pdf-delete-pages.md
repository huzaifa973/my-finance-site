---
title: "Free PDF Page Deleter — Remove Pages from PDF Online"
description: "Delete unwanted pages from any PDF in your browser. Tick pages in the numbered grid, hit delete, and download the cleaned file. Free, unlimited, files stay private."
category: pdf
date: 2026-10-11
draft: false
---

Extra pages in a PDF — blank covers, ad inserts, duplicate sheets — are annoying to print and email. This free PDF page deleter lets you tick the pages you want gone in a simple numbered grid, with quick-select buttons for odd and even pages, then downloads a brand-new PDF with just the pages you kept. Everything runs locally in your browser; your file never leaves your device.

<style>
.page-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:.6rem;margin-top:.75rem}
.page-card{position:relative;display:flex;flex-direction:column;align-items:center;gap:.25rem;border:2px solid #e5e7eb;border-radius:10px;padding:.7rem .4rem;cursor:pointer;transition:border-color .15s,background .15s;user-select:none;background:#fff}
.page-card input{position:absolute;opacity:0;pointer-events:none}
.page-num{font-weight:700;font-size:.95rem}
.page-x{font-size:.75rem;color:#9ca3af}
.page-card.doomed{border-color:#ef4444;background:#fef2f2}
.page-card.doomed .page-x{color:#ef4444}
[data-theme="dark"] .page-card{border-color:#374151;background:#1f2937}
[data-theme="dark"] .page-card.doomed{border-color:#ef4444;background:#3f1d1d}
</style>

<div class="tool-shell" id="pdpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Page Deleter</h2>
<p>Remove pages from any PDF — tick them in the grid, hit delete, download the cleaned file. Free &amp; private.</p>
</div>
<button type="button" class="theme-toggle" id="pdpTheme">🌙 Dark</button>
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
<div class="dropzone" id="pdpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one .pdf file at a time</span>
<input type="file" id="pdpFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pdpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick pages to delete</p>
<div class="settings-panel">
<div class="preset-row" id="pdpQuick">
<button type="button" class="preset-chip" data-q="odd">1️⃣ Odd pages</button>
<button type="button" class="preset-chip" data-q="even">2️⃣ Even pages</button>
<button type="button" class="preset-chip" data-q="all">✅ All pages</button>
<button type="button" class="preset-chip" data-q="none">↩️ Clear selection</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Selected pages</label>
<div class="hint" id="pdpSelHint">No file loaded yet. Tick the pages you want removed — everything else stays.</div>
</div>
</div>
</div>
<div class="page-grid" id="pdpGrid" style="display:none"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Delete &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pdpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
Delete Pages
</button>
<button type="button" class="btn-pro-outline" id="pdpClear" disabled>Remove file</button>
</div>
<div class="progress-wrap" id="pdpProgWrap">
<div class="progress-bar"><i id="pdpProgBar"></i></div>
<div class="progress-text" id="pdpProgText">Working…</div>
</div>
<div class="results" id="pdpResults">
<p class="result-head">✅ Done — your cleaned PDF</p>
<div class="result-summary" id="pdpSummary"></div>
<div class="result-grid" id="pdpGridOut"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — delete pages from as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pdpShell');
  ToolPro.themeToggle(shell, document.getElementById('pdpTheme'));

  var file = null, pageCount = 0, origBytes = null;
  var listEl = document.getElementById('pdpList');
  var grid = document.getElementById('pdpGrid');
  var hint = document.getElementById('pdpSelHint');
  var btn = document.getElementById('pdpBtn');
  var clearBtn = document.getElementById('pdpClear');
  var quick = document.getElementById('pdpQuick');

  function selectedSet(){
    var s = [];
    grid.querySelectorAll('input[type="checkbox"]:checked').forEach(function(c){
      s.push(parseInt(c.value, 10));
    });
    return s;
  }
  function refreshButtons(){
    var sel = selectedSet();
    hint.textContent = file
      ? (sel.length ? sel.length + ' page' + (sel.length === 1 ? '' : 's') + ' marked for deletion (' + sel.sort(function(a,b){return a-b;}).join(', ') + ').' : 'No pages selected yet — tick the pages you want removed.')
      : 'No file loaded yet. Tick the pages you want removed — everything else stays.';
    btn.disabled = !(file && sel.length && sel.length < pageCount);
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> Delete ' +
      (sel.length ? sel.length + (sel.length === 1 ? ' Page' : ' Pages') : 'Pages');
    clearBtn.disabled = !file;
  }

  function loadPdf(f){
    var reader = new FileReader();
    reader.onload = function(){
      origBytes = new Uint8Array(reader.result);
      PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true }).then(function(doc){
        pageCount = doc.getPageCount();
        grid.innerHTML = '';
        for(var n = 1; n <= pageCount; n++){
          var card = document.createElement('label');
          card.className = 'page-card';
          card.innerHTML = '<input type="checkbox" value="' + n + '"><span class="page-num">Page ' + n + '</span><span class="page-x">✖ delete</span>';
          card.querySelector('input').addEventListener('change', function(){ this.closest('.page-card').classList.toggle('doomed', this.checked); refreshButtons(); });
          grid.appendChild(card);
        }
        grid.style.display = '';
        document.getElementById('pdpResults').classList.remove('show');
        refreshButtons();
        ToolPro.toast(pageCount + ' pages loaded — tick the ones to delete', 'ok');
      }).catch(function(){ ToolPro.toast('Could not read this PDF (it may be encrypted).', 'err'); });
    };
    reader.readAsArrayBuffer(f);
  }

  ToolPro.dropzone(document.getElementById('pdpDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[arr.length - 1];
      listEl.innerHTML = '';
      file = f;
      var row = ToolPro.fileRow(listEl, f, function(){ file = null; pageCount = 0; grid.innerHTML = ''; grid.style.display = 'none'; refreshButtons(); });
      loadPdf(f);
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; pageCount = 0; origBytes = null;
    listEl.innerHTML = ''; grid.innerHTML = ''; grid.style.display = 'none';
    document.getElementById('pdpResults').classList.remove('show');
    refreshButtons();
  });

  quick.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip || !file) return;
    var q = chip.dataset.q;
    grid.querySelectorAll('input[type="checkbox"]').forEach(function(c){
      var n = parseInt(c.value, 10);
      var on = q === 'all' ? true : (q === 'none' ? false : (q === 'odd' ? (n % 2 === 1) : (n % 2 === 0)));
      c.checked = on;
      c.closest('.page-card').classList.toggle('doomed', on);
    });
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    var sel = selectedSet();
    if(!file || !sel.length || sel.length >= pageCount) return;
    var progWrap = document.getElementById('pdpProgWrap');
    var progBar = document.getElementById('pdpProgBar');
    var progText = document.getElementById('pdpProgText');
    var outGrid = document.getElementById('pdpGridOut');
    var resBox = document.getElementById('pdpResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); outGrid.innerHTML = '';
    progText.textContent = 'Loading PDF…';
    try{
      var src = await PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true });
      var keep = [];
      for(var i = 0; i < pageCount; i++){ if(sel.indexOf(i + 1) === -1) keep.push(i); }
      var total = keep.length;
      var dst = await PDFLib.PDFDocument.create();
      for(var k = 0; k < total; k++){
        var copied = await dst.copyPages(src, [keep[k]]);
        dst.addPage(copied[0]);
        progBar.style.width = Math.round((k + 1) / total * 100) + '%';
        progText.textContent = 'Copying page ' + (k + 1) + ' of ' + total + '…';
      }
      var out = await dst.save({ useObjectStreams: true });
      var base = file.name.replace(/\.pdf$/i, '');
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-name').textContent = base + '-cleaned.pdf';
      card.querySelector('.r-name').title = base + '-cleaned.pdf';
      card.querySelector('.r-stats').innerHTML =
        'Kept <b>' + total + '</b> of ' + pageCount + ' pages · ' +
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(out.length) + '</b>';
      (function(bytes, name){
        card.querySelector('button').addEventListener('click', function(){
          ToolPro.download(URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), name);
        });
      })(out, base + '-cleaned.pdf');
      outGrid.appendChild(card);
      document.getElementById('pdpSummary').textContent =
        '🎉 Removed ' + sel.length + (sel.length === 1 ? ' page' : ' pages') + ' — your new PDF has ' + total + ' pages.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Pages deleted', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Something went wrong while rebuilding the PDF.', 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDF. It's read straight into your browser — nothing is uploaded.
- **Step 2** — Tick the pages you want gone in the numbered grid, or use the quick buttons: Odd, Even, All, or Clear. A live counter tells you exactly which pages are marked.
- **Step 3** — Hit **Delete Pages**. The remaining pages are copied into a fresh PDF (also re-saved with clean structure), and you download the result.

Your original file is never touched — the tool always creates a new file, so you can re-do it if you change your mind.

## Everyday uses

- **Job seekers** — strip blank cover pages and reference letters from your resume PDF.
- **Students** — remove ad inserts and filler pages from downloaded study guides before printing.
- **Freelancers** — clean up scanned contracts with crooked duplicate scans.
- **Office workers** — pull just the pages you need out of a long report for a meeting handout.
- **Anyone sharing docs** — make files smaller and easier to read by dropping what nobody needs.

## Frequently asked questions

**Can I delete ALL pages?**
No — the button stays disabled if every page is selected. Keep at least one page, or the result would be an empty file.

**Will my original PDF change?**
Never. The tool reads your file and builds a brand-new PDF with only the kept pages. Your original stays exactly as it was.

**Does it work on scanned PDFs?**
Yes — page deletion works on any PDF, scanned or not, because it operates on whole pages rather than their content.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored anywhere.