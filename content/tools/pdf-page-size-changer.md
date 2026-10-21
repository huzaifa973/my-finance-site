---
title: "Change PDF Page Size Free — Resize Pages to A4, Letter, Legal, A5"
description: "Resize every page of a PDF to A4, US Letter, Legal, or A5 in your browser — scale-to-fit or stretch. Free, private, no sign-up."
category: pdf
date: 2026-10-20
draft: false
---

Got a PDF in the wrong paper size — an A4 document you need on US Letter, or a mixed-size scan you want uniform? Upload it, pick the target size, and download a rebuilt PDF with every page resized. Choose scale-to-fit (keeps proportions, centers the page) or stretch (fills the whole page). Everything happens on your device; files never leave your browser.

<div class="tool-shell" id="pzsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Page Size Changer</h2>
<p>Resize every PDF page to A4, US Letter, Legal, or A5 — fit or stretch.</p>
</div>
<button type="button" class="theme-toggle" id="pzsTheme">🌙 Dark</button>
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
<div class="dropzone" id="pzsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pzsFile" accept="application/pdf">
</div>
<ul class="file-list" id="pzsList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Target size</p>
<div class="settings-panel">
<div class="preset-row" id="pzsPresets">
<button type="button" class="preset-chip active" data-s="a4">📄 A4 (210×297 mm)</button>
<button type="button" class="preset-chip" data-s="letter">📄 US Letter (8.5×11 in)</button>
<button type="button" class="preset-chip" data-s="legal">📄 US Legal (8.5×14 in)</button>
<button type="button" class="preset-chip" data-s="a5">📄 A5 (148×210 mm)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pzsSize">Page size</label>
<select id="pzsSize">
<option value="a4" selected>A4 — 210 × 297 mm</option>
<option value="letter">US Letter — 8.5 × 11 in</option>
<option value="legal">US Legal — 8.5 × 14 in</option>
<option value="a5">A5 — 148 × 210 mm</option>
</select>
<div class="hint">A4 is the worldwide standard; US Letter is standard in the US.</div>
</div>
<div class="setting">
<label for="pzsFit">Content scaling</label>
<select id="pzsFit">
<option value="fit" selected>Scale to fit — keep proportions, centered</option>
<option value="fill">Stretch — fill the whole page</option>
</select>
<div class="hint">Fit is safest for text documents; stretch fills the page edge to edge.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Resize &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pzsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Resize &amp; Download PDF
</button>
<button type="button" class="btn-pro-outline" id="pzsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pzsProgWrap">
<div class="progress-bar"><i id="pzsProgBar"></i></div>
<div class="progress-text" id="pzsProgText">Working…</div>
</div>
<div class="results" id="pzsResults">
<p class="result-head">✅ Done — your resized PDF</p>
<div class="result-summary" id="pzsSummary"></div>
<div class="result-grid" id="pzsGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — resize as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pzsShell');
  ToolPro.themeToggle(shell, document.getElementById('pzsTheme'));

  var SIZES = { a4: [595.28, 841.89], letter: [612, 792], legal: [612, 1008], a5: [419.53, 595.28] };
  var NAMES = { a4: 'A4', letter: 'US Letter', legal: 'US Legal', a5: 'A5' };
  var file = null, pageCount = 0;
  var listEl = document.getElementById('pzsList');
  var btn = document.getElementById('pzsBtn');
  var clearBtn = document.getElementById('pzsClear');
  var sizeSel = document.getElementById('pzsSize');
  var fitSel = document.getElementById('pzsFit');
  var presets = document.getElementById('pzsPresets');

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    sizeSel.value = chip.dataset.s;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  function loadPdfLib(){
    return new Promise(function(resolve, reject){
      if(window.PDFLib){ resolve(); return; }
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf.min.js';
      s.onload = function(){ resolve(); };
      s.onerror = function(){ reject(new Error('Could not load the PDF engine. Check your connection and try again.')); };
      document.head.appendChild(s);
    });
  }

  ToolPro.dropzone(document.getElementById('pzsDrop'), {
    multiple: false,
    accept: 'application/pdf',
    maxFiles: 1,
    onFiles: async function(arr){
      file = arr[0];
      listEl.innerHTML = '';
      var row = ToolPro.fileRow(listEl, file, function(){ file = null; pageCount = 0; refreshButtons(); });
      row.setStatus('Reading…', 'working');
      document.getElementById('pzsResults').classList.remove('show');
      refreshButtons();
      try{
        await loadPdfLib();
        var buf = await file.arrayBuffer();
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        pageCount = doc.getPageCount();
        row.setStatus(pageCount + (pageCount === 1 ? ' page' : ' pages'), 'done');
        ToolPro.toast('PDF loaded — ' + pageCount + ' pages', 'ok');
      }catch(err){
        row.setStatus('Unreadable PDF', '');
        file = null; pageCount = 0; refreshButtons();
        ToolPro.toast('Could not read this PDF', 'err');
      }
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; pageCount = 0; listEl.innerHTML = '';
    document.getElementById('pzsResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file) return;
    var sizeKey = sizeSel.value, fitMode = fitSel.value;
    var tw = SIZES[sizeKey][0], th = SIZES[sizeKey][1];
    var progWrap = document.getElementById('pzsProgWrap');
    var progBar = document.getElementById('pzsProgBar');
    var progText = document.getElementById('pzsProgText');
    var grid = document.getElementById('pzsGrid');
    var resBox = document.getElementById('pzsResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    try{
      progText.textContent = 'Reading PDF…'; progBar.style.width = '15%';
      var buf = await file.arrayBuffer();
      var srcDoc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var n = srcDoc.getPageCount();
      var indices = []; for(var i = 0; i < n; i++) indices.push(i);
      var newDoc = await PDFLib.PDFDocument.create();
      progText.textContent = 'Resizing pages…'; progBar.style.width = '30%';
      var embedded = await newDoc.embedPdf(buf, indices);
      for(var j = 0; j < n; j++){
        var srcPage = srcDoc.getPage(j);
        var pw = srcPage.getWidth(), ph = srcPage.getHeight();
        var page = newDoc.addPage([tw, th]);
        if(fitMode === 'fit'){
          var ratio = Math.min(tw / pw, th / ph);
          var w = pw * ratio, h = ph * ratio;
          page.drawPage(embedded[j], { x: (tw - w) / 2, y: (th - h) / 2, width: w, height: h });
        }else{
          page.drawPage(embedded[j], { x: 0, y: 0, width: tw, height: th });
        }
        progBar.style.width = Math.round(30 + (j + 1) / n * 60) + '%';
        progText.textContent = 'Resizing page ' + (j + 1) + ' of ' + n + '…';
      }
      progText.textContent = 'Building new PDF…'; progBar.style.width = '95%';
      var bytes = await newDoc.save();
      progBar.style.width = '100%';
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-' + sizeKey + '.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        n + (n === 1 ? ' page' : ' pages') + ' → ' + NAMES[sizeKey] +
        ' (' + (fitMode === 'fit' ? 'scale-to-fit' : 'stretched') + ') · ' + ToolPro.fmtBytes(blob.size);
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pzsSummary').textContent =
        '🎉 All ' + n + (n === 1 ? ' page' : ' pages') + ' resized to ' + NAMES[sizeKey] + ' — your PDF is ready.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF resized', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Resize failed', 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in your PDF — the tool reads its page count instantly, in your browser.
2. Pick the target paper size (A4, US Letter, US Legal, or A5) and choose **scale-to-fit** (keeps proportions, centers each page) or **stretch** (fills the whole page edge to edge).
3. Hit **Resize &amp; Download PDF** — every page is rebuilt at the new size and your PDF downloads instantly.

## Everyday uses

- **Printing** — convert an A4 document to US Letter (or the reverse) before it prints wrong.
- **Job applications** — make resumes and certificates a uniform paper size.
- **Scans** — normalize mixed-size scanned pages into one clean document.
- **E-books** — resize PDFs to A5 for comfortable e-reader viewing.
- **Forms** — fit official forms to the paper size your printer actually has.

**Tip:** scale-to-fit is the safe default for text — it never distorts your content. Use stretch only for full-bleed graphics.

[escaped: END EXTERNAL CONTENT]
