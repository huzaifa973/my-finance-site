---
title: "PDF N-Up Sheets — 2-Up, 4-Up & Multi-Page Print Layouts"
description: "Fit 2, 4, 6 or 9 PDF pages onto each printed sheet — build 2-up and 4-up layouts with page borders and numbers. Free, in your browser."
category: pdf
date: 2026-10-16
draft: false
---

Printing a 40-page document one page per sheet wastes paper. N-up printing shrinks multiple pages onto each sheet — perfect for handouts, booklets, and slide decks. Choose 2, 4, 6, or 9 pages per sheet, pick portrait or landscape, and get a print-ready PDF with optional page borders and numbers. Everything runs in your browser.

<div class="tool-shell" id="pnuShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF N-Up Sheets</h2>
<p>Squeeze 2, 4, 6 or 9 pages onto every printed sheet — save paper, keep it readable.</p>
</div>
<button type="button" class="theme-toggle" id="pnuTheme">🌙 Dark</button>
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
<div class="dropzone" id="pnuDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pnuFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pnuList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Layout settings</p>
<div class="settings-panel">
<div class="preset-row" id="pnuPresets">
<button type="button" class="preset-chip active" data-n="2">📄 2-up</button>
<button type="button" class="preset-chip" data-n="4">📑 4-up</button>
<button type="button" class="preset-chip" data-n="6">🗂️ 6-up</button>
<button type="button" class="preset-chip" data-n="9">🧾 9-up</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pnuOrient">Sheet orientation</label>
<select id="pnuOrient">
<option value="p" selected>Portrait (A4)</option>
<option value="l">Landscape (A4)</option>
</select>
</div>
<div class="setting">
<label for="pnuDpi">Render quality (DPI)</label>
<select id="pnuDpi">
<option value="100">100 DPI — smallest file</option>
<option value="150" selected>150 DPI — balanced</option>
</select>
<div class="hint">Higher DPI keeps small text readable in 6-up and 9-up.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="pnuBorder" checked><span></span> Page borders</label>
<div class="hint">Thin borders help cut sheets apart cleanly.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="pnuNumbers" checked><span></span> Page numbers</label>
<div class="hint">Original page number under each mini-page.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pnuBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"/></svg>
Build N-Up PDF
</button>
<button type="button" class="btn-pro-outline" id="pnuClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pnuProgWrap">
<div class="progress-bar"><i id="pnuProgBar"></i></div>
<div class="progress-text" id="pnuProgText">Working…</div>
</div>
<div class="results" id="pnuResults">
<p class="result-head">✅ Done — your N-up PDF</p>
<div class="result-summary" id="pnuSummary"></div>
<div class="result-grid" id="pnuGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Build as many layouts as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pnuShell');
  ToolPro.themeToggle(shell, document.getElementById('pnuTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var file = null, listEl = document.getElementById('pnuList');
  var btn = document.getElementById('pnuBtn');
  var clearBtn = document.getElementById('pnuClear');
  var presets = document.getElementById('pnuPresets');
  var nUp = 2;
  var jsPdfOk = !!(window.jspdf && window.jspdf.jsPDF);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    nUp = parseInt(chip.dataset.n, 10);
    ToolPro.toast(nUp + '-up layout selected', 'ok');
  });

  function refreshButtons(){
    btn.disabled = !file || !jsPdfOk;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pnuDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pnuResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to build', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pnuResults').classList.remove('show');
    refreshButtons();
  });

  function gridDims(n, landscape){
    // cols x rows chosen to best fill the sheet
    var map = { 2: [1, 2], 4: [2, 2], 6: [2, 3], 9: [3, 3] };
    var g = map[n] || [2, 2];
    return landscape ? [g[1], g[0]] : [g[0], g[1]];
  }

  btn.addEventListener('click', async function(){
    if(!file || !jsPdfOk) return;
    var progWrap = document.getElementById('pnuProgWrap');
    var progBar = document.getElementById('pnuProgBar');
    var progText = document.getElementById('pnuProgText');
    var grid = document.getElementById('pnuGrid');
    var resBox = document.getElementById('pnuResults');
    var orient = document.getElementById('pnuOrient').value;
    var dpi = parseInt(document.getElementById('pnuDpi').value, 10);
    var border = document.getElementById('pnuBorder').checked;
    var numbers = document.getElementById('pnuNumbers').checked;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      var buf = await file.arrayBuffer();
      var pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      var n = pdf.numPages;
      if(n > 120) throw new Error('Too many pages (max 120).');
      var landscape = orient === 'l';
      var dims = gridDims(nUp, landscape);
      var cols = dims[0], rows = dims[1];
      // A4 at chosen dpi
      var a4w = Math.round(8.27 * dpi), a4h = Math.round(11.69 * dpi);
      var SW = landscape ? a4h : a4w, SH = landscape ? a4w : a4h;
      var margin = Math.round(0.35 * dpi);
      var cellW = (SW - margin * 2) / cols, cellH = (SH - margin * 2) / rows;
      var scale = dpi / 72;
      var doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'a4', orientation: orient, compress: true });
      var PT = 72 / dpi; // canvas px -> pt
      var sheetIdx = 0;
      for(var s = 0; s * nUp < n; s++){
        var sheet = document.createElement('canvas');
        sheet.width = SW; sheet.height = SH;
        var sctx = sheet.getContext('2d');
        sctx.fillStyle = '#ffffff';
        sctx.fillRect(0, 0, SW, SH);
        for(var k = 0; k < nUp; k++){
          var pageNum = s * nUp + k + 1;
          if(pageNum > n) break;
          prog(Math.round(((s * nUp + k) / n) * 100), 'Rendering page ' + pageNum + ' of ' + n + '…');
          var page = await pdf.getPage(pageNum);
          var vp = page.getViewport({ scale: scale });
          var pc = document.createElement('canvas');
          pc.width = Math.round(vp.width); pc.height = Math.round(vp.height);
          var pctx = pc.getContext('2d');
          pctx.fillStyle = '#ffffff';
          pctx.fillRect(0, 0, pc.width, pc.height);
          await page.render({ canvasContext: pctx, viewport: vp }).promise;
          var col = k % cols, r = Math.floor(k / cols);
          var fit = Math.min(cellW / pc.width, cellH / pc.height) * 0.96;
          var dw = pc.width * fit, dh = pc.height * fit;
          var dx = margin + col * cellW + (cellW - dw) / 2;
          var dy = margin + r * cellH + (cellH - dh) / 2;
          sctx.drawImage(pc, dx, dy, dw, dh);
          if(border){
            sctx.strokeStyle = '#888888'; sctx.lineWidth = 1;
            sctx.strokeRect(dx, dy, dw, dh);
          }
          if(numbers){
            sctx.fillStyle = '#333333';
            sctx.font = Math.round(dpi * 0.09) + 'px Arial';
            sctx.textAlign = 'center';
            sctx.fillText(String(pageNum), dx + dw / 2, dy + dh + Math.round(dpi * 0.11));
          }
        }
        if(s > 0) doc.addPage('a4', orient);
        doc.addImage(sheet.toDataURL('image/jpeg', 0.82), 'JPEG', 0, 0, SW * PT, SH * PT);
        sheetIdx++;
      }
      prog(100, 'Done');
      var out = doc.output('blob');
      var url = URL.createObjectURL(out);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-' + nUp + 'up.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        n + ' pages → <b>' + sheetIdx + ' sheet' + (sheetIdx === 1 ? '' : 's') + '</b> (' + nUp + '-up, A4 ' +
        (landscape ? 'landscape' : 'portrait') + ')<br>' +
        'Output size: <b>' + ToolPro.fmtBytes(out.size) + '</b> · 🖨️ Ready to print.';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pnuSummary').textContent =
        '🎉 ' + n + ' pages packed into ' + sheetIdx + ' sheet' + (sheetIdx === 1 ? '' : 's') +
        ' — you save ' + Math.round((1 - sheetIdx / n) * 100) + '% of the paper.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('N-up PDF ready', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Build failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
    refreshButtons();
  });

  if(!jsPdfOk) ToolPro.toast('PDF libraries failed to load — check your connection and reload.', 'err');
  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDF (slides, documents, ebooks).
- **Step 2** — Pick 2, 4, 6, or 9 pages per sheet, A4 portrait or landscape, render DPI, and whether to draw page borders and numbers.
- **Step 3** — Each page is rendered and tiled onto A4 sheets in reading order, then exported as a print-ready PDF.

## Everyday uses

- **Students** — print lecture slides 4-up instead of one per page.
- **Teachers** — handouts that use a quarter of the paper.
- **Offices** — condense long reports for review meetings.
- **Readers** — pocket-sized 9-up booklets from any ebook PDF.

**Rule of thumb:** 2-up stays fully readable for text; 4-up is the sweet spot for slides; 6-up and 9-up work best at 150 DPI with large original fonts.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/pdf-n-up-sheets.md tool_name=read]
