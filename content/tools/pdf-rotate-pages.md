---
title: "Rotate PDF Pages — Free Online PDF Page Rotator, No Sign-Up"
description: "Rotate PDF pages by 90, 180, or 270 degrees in your browser — all pages or a page range. Scanned sideways pages fixed in seconds, free and private."
category: pdf
date: 2026-10-28
draft: false
---

Scanned documents often come back sideways, and a PDF with pages at mixed angles is painful to read. Upload your PDFs, pick a rotation — 90° clockwise, 180°, or 90° counter-clockwise — apply it to every page or just a range, and download the fixed files. The pdf-lib engine runs entirely in your browser, so your documents never leave your device.

<div class="tool-shell" id="prpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Rotate PDF Pages</h2>
<p>Fix sideways scans — rotate all pages or a range by 90°, 180°, or 270°.</p>
</div>
<button type="button" class="theme-toggle" id="prpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add PDF files</p>
<div class="dropzone" id="prpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="prpFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="prpList"></ul>
<div class="hint">Your files never leave your browser — rotation runs locally with pdf-lib.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Rotation settings</p>
<div class="settings-panel">
<div class="preset-row" id="prpPresets">
<button type="button" class="preset-chip active" data-rot="90">↻ 90° clockwise</button>
<button type="button" class="preset-chip" data-rot="180">⇅ 180° upside-down fix</button>
<button type="button" class="preset-chip" data-rot="270">↺ 90° counter-clockwise</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Page range (optional)</label>
<div style="display:flex;gap:.6rem;align-items:center;">
<input type="number" id="prpFrom" class="tool-input" placeholder="From" min="1" style="max-width:110px;">
<span>–</span>
<input type="number" id="prpTo" class="tool-input" placeholder="To" min="1" style="max-width:110px;">
</div>
<div class="hint">Leave blank to rotate every page. Rotation adds to any rotation the page already has.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Rotate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="prpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
Rotate Pages
</button>
<button type="button" class="btn-pro-outline" id="prpClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="prpProgWrap">
<div class="progress-bar"><i id="prpProgBar"></i></div>
<div class="progress-text" id="prpProgText">Working…</div>
</div>
<div class="results" id="prpResults">
<p class="result-head">✅ Rotated PDFs</p>
<div class="result-summary" id="prpSummary"></div>
<div class="result-grid" id="prpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Rotate unlimited PDFs — everything happens in your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('prpShell');
  ToolPro.themeToggle(shell, document.getElementById('prpTheme'));
  var files = [];
  var listEl = document.getElementById('prpList');
  var btn = document.getElementById('prpBtn');
  var clearBtn = document.getElementById('prpClear');
  var resBox = document.getElementById('prpResults');
  var summaryEl = document.getElementById('prpSummary');
  var gridEl = document.getElementById('prpGrid');
  var progWrap = document.getElementById('prpProgWrap');
  var progBar = document.getElementById('prpProgBar');
  var progText = document.getElementById('prpProgText');
  var rotation = 90;
  var outUrls = [];
  document.getElementById('prpPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('prpPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    rotation = parseInt(chip.dataset.rot, 10);
    ToolPro.toast('Rotation: ' + rotation + '°');
  });
  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }
  ToolPro.dropzone(document.getElementById('prpDrop'), {
    multiple: true,
    accept: 'application/pdf',
    onFiles: function(arr){
      var added = 0;
      arr.forEach(function(f){
        if(!isPdf(f)){ ToolPro.toast(f.name + ' is not a PDF — skipped.', 'err'); return; }
        if(files.some(function(p){ return p.name === f.name && p.size === f.size; })) return;
        files.push(f);
        ToolPro.fileRow(listEl, f, function(){
          files = files.filter(function(p){ return p !== f; });
          refresh();
        });
        added++;
      });
      if(added) ToolPro.toast(added + ' PDF' + (added > 1 ? 's' : '') + ' added', 'ok');
      resBox.classList.remove('show');
      refresh();
    }
  });
  function refresh(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    outUrls.forEach(function(u){ URL.revokeObjectURL(u); }); outUrls = [];
    resBox.classList.remove('show');
    refresh();
  });
  function readBuf(f){
    return new Promise(function(res, rej){
      var r = new FileReader();
      r.onload = function(){ res(r.result); };
      r.onerror = function(){ rej(new Error('Could not read ' + f.name)); };
      r.readAsArrayBuffer(f);
    });
  }
  btn.addEventListener('click', async function(){
    if(!files.length){ ToolPro.toast('Add at least one PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var from = parseInt(document.getElementById('prpFrom').value, 10) || 1;
    var to = parseInt(document.getElementById('prpTo').value, 10) || Infinity;
    if(from < 1) from = 1;
    var totalRotated = 0;
    try {
      for(var fi = 0; fi < files.length; fi++){
        var f = files[fi];
        progText.textContent = 'Rotating ' + f.name + ' (' + (fi + 1) + '/' + files.length + ')…';
        progBar.style.width = Math.round((fi / files.length) * 100) + '%';
        var buf = await readBuf(f);
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        var pageCount = doc.getPageCount();
        var rFrom = Math.min(from, pageCount), rTo = Math.min(to, pageCount);
        var rotated = 0;
        for(var pi = 0; pi < pageCount; pi++){
          var pageNum = pi + 1;
          if(pageNum < rFrom || pageNum > rTo) continue;
          var page = doc.getPage(pi);
          var current = page.getRotation().angle;
          page.setRotation(PDFLib.degrees((current + rotation) % 360));
          rotated++;
        }
        totalRotated += rotated;
        var bytes = await doc.save();
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        outUrls.push(url);
        var name = f.name.replace(/\.pdf$/i, '') + '-rotated.pdf';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-name').title = name;
        card.querySelector('.r-stats').textContent = rotated + ' of ' + pageCount + ' pages rotated ' + rotation + '° · ' + ToolPro.fmtBytes(bytes.length);
        (function(u, nm){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
        })(url, name);
        gridEl.appendChild(card);
        progBar.style.width = Math.round(((fi + 1) / files.length) * 100) + '%';
      }
      progWrap.classList.remove('show');
      summaryEl.textContent = '🎉 ' + totalRotated + ' pages rotated across ' + files.length + ' file' + (files.length > 1 ? 's' : '') + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Pages rotated', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) + '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Rotation failed', 'err');
    }
    btn.disabled = false;
    refresh();
  });
  refresh();
})();
</script>

## How it works

Drop in your PDFs, choose 90° clockwise, 180°, or 90° counter-clockwise, and optionally limit the rotation to a page range. The tool reads each page's existing rotation and adds your chosen angle to it (so a page already rotated 90° becomes 180° when you add 90°), then saves a new PDF with the same content, just turned the right way. Your files never leave your browser.

## Everyday uses

- **Sideways scans** — fix pages a scanner captured in landscape.
- **Mixed-orientation documents** — rotate only the pages that need it with a range.
- **Upside-down pages** — the 180° preset flips them in one pass.
- **Forms and contracts** — straighten pages before sending or printing.
- **Photo PDFs** — correct phone photos saved as PDFs at the wrong angle.
