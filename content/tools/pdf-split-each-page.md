---
title: "Split PDF Into Single Pages — Free Online"
description: "Turn one PDF into separate one-page PDFs in your browser. Each page downloads individually. Free, private — your files never leave your device."
category: pdf
date: 2026-10-14
draft: false
---

Need every page of a PDF as its own file? Drop the document here and this tool splits it into individual one-page PDFs — each with its own download button, named for its page number. Handy for submitting single certificates, extracting one invoice from a batch scan, or feeding pages into other tools one at a time. Everything runs in your browser — your files never leave your device.

<div class="tool-shell" id="pseShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Split PDF Into Single Pages</h2>
<p>Turn one PDF into individual one-page PDFs — each page downloads on its own.</p>
</div>
<button type="button" class="theme-toggle" id="pseTheme">🌙 Dark</button>
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
<div class="dropzone" id="pseDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pseFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pseList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="psePresets">
<button type="button" class="preset-chip active" data-name="page">📄 name-page-N.pdf</button>
<button type="button" class="preset-chip" data-name="dash">📄 name-N.pdf</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pseName">Filename pattern</label>
<input type="text" id="pseName" class="tool-input" value="">
<div class="hint">Leave blank to use the original filename. "page" → myfile-page-3.pdf.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pseBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Split Into Pages
</button>
<button type="button" class="btn-pro-outline" id="pseClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pseProgWrap">
<div class="progress-bar"><i id="pseProgBar"></i></div>
<div class="progress-text" id="pseProgText">Working…</div>
</div>
<div class="results" id="pseResults">
<p class="result-head">✅ Split — every page is its own PDF</p>
<div class="result-summary" id="pseSummary"></div>
<div class="result-grid" id="pseGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pseShell');
  ToolPro.themeToggle(shell, document.getElementById('pseTheme'));

  var file = null, listEl = document.getElementById('pseList');
  var btn = document.getElementById('pseBtn');
  var clearBtn = document.getElementById('pseClear');
  var presets = document.getElementById('psePresets');
  var nameStyle = 'page';

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    nameStyle = chip.dataset.name || 'page';
    ToolPro.toast('Naming style: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pseDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pseResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to split', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pseResults').classList.remove('show');
    refreshButtons();
  });

  function pageName(base, n){
    var mid = nameStyle === 'page' ? '-page-' : '-';
    return base + mid + n + '.pdf';
  }

  btn.addEventListener('click', async function(){
    if(!file) return;
    var progWrap = document.getElementById('pseProgWrap');
    var progBar = document.getElementById('pseProgBar');
    var progText = document.getElementById('pseProgText');
    var grid = document.getElementById('pseGrid');
    var resBox = document.getElementById('pseResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      prog(10, 'Reading PDF…');
      var buf = await file.arrayBuffer();
      var src = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var count = src.getPageCount();
      if(count > 60){
        progWrap.classList.remove('show'); btn.disabled = false;
        ToolPro.toast('This PDF has ' + count + ' pages — splitting is limited to 60 pages per run for browser performance.', 'err');
        return;
      }
      var baseInput = (document.getElementById('pseName').value || '').trim();
      var base = baseInput || file.name.replace(/\.pdf$/i, '') || 'page';
      for(var i = 0; i < count; i++){
        prog(10 + Math.round((i / count) * 85), 'Splitting page ' + (i + 1) + ' of ' + count + '…');
        var single = await PDFLib.PDFDocument.create();
        var copied = await single.copyPages(src, [i]);
        single.addPage(copied[0]);
        var bytes = await single.save({ useObjectStreams: true, addDefaultPage: false });
        (function(bytes, n){
          var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
          var fname = pageName(base, n);
          var card = document.createElement('div');
          card.className = 'result-card';
          card.innerHTML =
            '<div class="r-name"></div>' +
            '<div class="r-stats"></div>' +
            '<button type="button" class="btn-pro">⬇ Page ' + n + '</button>';
          card.querySelector('.r-name').textContent = fname;
          card.querySelector('.r-name').title = fname;
          card.querySelector('.r-stats').textContent = 'Page ' + n + ' of ' + count + ' · ' + ToolPro.fmtBytes(bytes.length);
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
          grid.appendChild(card);
        })(bytes, i + 1);
      }
      prog(100, 'Done');
      progWrap.classList.remove('show');
      document.getElementById('pseSummary').textContent =
        '🎉 Split ' + count + (count === 1 ? ' page' : ' pages') + ' — each card has its own download button.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF split into ' + count + ' files', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Split failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in the PDF. It's read into your browser's memory — nothing is uploaded.
- **Step 2** — Choose a filename pattern (optional).
- **Step 3** — Hit **Split Into Pages**. Each page is copied into its own PDF document, and every one gets a download button. (Capped at 60 pages per run to keep your browser fast.)

## Everyday uses

- **Certificates** — pull a single certificate out of a scanned bundle for a job portal.
- **Invoices** — split a month's batch scan into individual invoices for your accountant.
- **Real estate** — send clients one listing sheet at a time instead of a 40-page packet.
- **Students** — extract one assignment page from a multi-page scan before submitting.
- **HR &amp; admin** — separate ID copies and forms that were scanned together.

## Frequently asked questions

**Do the pages lose quality?**
No. Pages are copied losslessly — text, images, and formatting are identical to the original.

**Can I download all pages at once?**
Each page has its own download button so you can grab exactly what you need. For very large documents, do a couple of runs.

**Why the 60-page cap?**
Copying hundreds of pages can exhaust a phone's memory. Sixty pages covers the vast majority of real documents; split bigger PDFs in two runs.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is stored anywhere.
