---
title: "Free Merge PDF — Combine PDFs Online Without Uploading"
description: "Merge multiple PDF files into one, right in your browser. Reorder pages with drag and drop. Free, private — your files never leave your device."
date: 2026-10-08
draft: false
---

Combine invoices, resumes, applications, or scanned documents into a single PDF — without uploading sensitive files to a stranger's server. Drop your PDFs here, reorder them by dragging, and download the merged file. The merging happens 100% in your browser; your documents never leave your device.

## How it works

<div class="tool-shell" id="mpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Merge PDF</h2>
<p>Combine multiple PDFs into one file — reorder by dragging, all in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="mpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDF files</p>
<div class="dropzone" id="mpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — PDFs only</span>
<input type="file" id="mpFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="mpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Merge settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="mpName">Output filename</label>
<input type="text" id="mpName" class="tool-input" value="merged.pdf">
<div class="hint">Tip: drag the file rows up/down to change the merge order.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Merge &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></svg>
Merge PDFs
</button>
<button type="button" class="btn-pro-outline" id="mpClear" disabled>Clear all</button>
</div>
<div class="results" id="mpResults">
<p class="result-head">✅ Merged</p>
<div class="result-summary" id="mpStatus"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="mpDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download merged PDF
</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — merge as many PDFs as you like, as often as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>
<script>
(function(){
  var shell = document.getElementById('mpShell');
  ToolPro.themeToggle(shell, document.getElementById('mpTheme'));

  var mpFiles = [];
  var listEl = document.getElementById('mpList');
  var btn = document.getElementById('mpBtn');
  var clearBtn = document.getElementById('mpClear');
  var resBox = document.getElementById('mpResults');
  var statusEl = document.getElementById('mpStatus');
  var mergedUrl = null;

  function refreshButtons(){
    var n = mpFiles.length;
    btn.disabled = n < 2;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/></svg> Merge ' +
      (n ? n + (n === 1 ? ' PDF' : ' PDFs') : 'PDFs');
  }

  function mpRender(){
    listEl.innerHTML = '';
    mpFiles.forEach(function(f, i){
      var li = document.createElement('li');
      li.className = 'file-row';
      li.draggable = true;
      li.dataset.idx = i;
      li.innerHTML =
        '<span class="file-ic">PDF</span>' +
        '<span class="file-name"></span>' +
        '<span class="file-size">' + ToolPro.fmtBytes(f.size) + '</span>' +
        '<span class="file-status">' + (i + 1) + ' of ' + mpFiles.length + '</span>' +
        '<button type="button" class="file-remove" aria-label="Remove file">&times;</button>';
      li.querySelector('.file-name').textContent = f.name;
      li.querySelector('.file-name').title = f.name;
      li.querySelector('.file-remove').addEventListener('click', function(){ mpFiles.splice(i, 1); mpRender(); });
      li.addEventListener('dragstart', function(ev){ ev.dataTransfer.setData('text/plain', i); });
      li.addEventListener('dragover', function(ev){ ev.preventDefault(); });
      li.addEventListener('drop', function(ev){
        ev.preventDefault();
        var from = parseInt(ev.dataTransfer.getData('text/plain'), 10), to = i;
        var item = mpFiles.splice(from, 1)[0];
        mpFiles.splice(to, 0, item);
        mpRender();
      });
      listEl.appendChild(li);
    });
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('mpDrop'), {
    multiple: true,
    accept: 'application/pdf',
    onFiles: function(arr){
      arr.forEach(function(f){
        if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)) return;
        mpFiles.push(f);
      });
      resBox.classList.remove('show');
      mpRender();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' PDF' : ' PDFs') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    mpFiles = []; mpRender(); resBox.classList.remove('show');
    if(mergedUrl){ URL.revokeObjectURL(mergedUrl); mergedUrl = null; }
  });

  function mpMerge(){
    if(mpFiles.length < 2){
      ToolPro.toast('Please add at least 2 PDF files to merge.', 'err');
      return;
    }
    btn.disabled = true;
    statusEl.textContent = 'Merging ' + mpFiles.length + ' PDFs… this happens in your browser.';
    resBox.classList.add('show');
    var reads = mpFiles.map(function(f){
      return new Promise(function(res, rej){
        var r = new FileReader();
        r.onload = function(){ res(r.result); };
        r.onerror = function(){ rej('Could not read ' + f.name); };
        r.readAsArrayBuffer(f);
      });
    });
    Promise.all(reads).then(function(buffers){
      return PDFLib.PDFDocument.create().then(function(out){
        var chain = Promise.resolve();
        buffers.forEach(function(buf){
          chain = chain.then(function(){
            return PDFLib.PDFDocument.load(buf, {ignoreEncryption: true}).then(function(src){
              return out.copyPages(src, src.getPageIndices()).then(function(pages){
                pages.forEach(function(p){ out.addPage(p); });
              });
            });
          });
        });
        return chain.then(function(){ return out.save(); });
      });
    }).then(function(bytes){
      var blob = new Blob([bytes], {type: 'application/pdf'});
      if(mergedUrl) URL.revokeObjectURL(mergedUrl);
      mergedUrl = URL.createObjectURL(blob);
      statusEl.textContent = 'Done! Merged into one PDF (' + ToolPro.fmtBytes(bytes.length) + ').';
      btn.disabled = false;
      ToolPro.toast('PDFs merged', 'ok');
    }).catch(function(err){
      statusEl.textContent = 'Merge failed: ' + err + '. Password-protected or damaged PDFs may not merge.';
      btn.disabled = false;
      ToolPro.toast('Merge failed', 'err');
    });
  }

  btn.addEventListener('click', mpMerge);

  document.getElementById('mpDownload').addEventListener('click', function(){
    if(!mergedUrl) return;
    var name = (document.getElementById('mpName').value || 'merged.pdf').trim();
    if(!/\.pdf$/i.test(name)) name += '.pdf';
    ToolPro.download(mergedUrl, name);
  });

  mpRender();
})();
</script>

## Everyday uses

- **Job applications** — merge resume, cover letter, and certificates into one file that recruiters can download once.
- **Expenses & taxes** — combine monthly receipts and invoices into a single document for your accountant.
- **Scans** — a phone scanner app produces one PDF per page; merge them into the complete document.
- **University applications** — admissions portals often accept one file; merge transcripts, statements, and references.
- **Contracts** — join the signed agreement and its addenda so nothing gets lost.

**Privacy note:** most "free" PDF mergers upload your files to their servers — where sensitive contracts and IDs sit on someone else's disk. This tool uses the pdf-lib library loaded in your own browser, so your documents never leave your device. That privacy-first design is exactly why DollarWise tools exist.
