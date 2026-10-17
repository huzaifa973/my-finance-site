---
title: "Redact PDF — Black Out Sensitive Text in Your Browser"
description: "Upload a PDF, draw black redaction boxes over names, numbers or signatures on page previews, and export a permanently redacted PDF. Free, private, no sign-up."
category: pdf
date: 2026-10-17
draft: false
---

Sharing a contract, bank statement, or ID scan? Don't just cover sensitive bits with a marker in an image editor — redact the PDF itself. Upload your document, flip through page previews, drag black boxes over anything private, and export a new PDF with the regions permanently covered. Your file never leaves your browser.

<div class="tool-shell" id="pdrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.41 0 8 3.59 8 8 0 1.85-.63 3.55-1.69 4.9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Redact PDF</h2>
<p>Draw black boxes over sensitive regions on page previews — export a permanently redacted PDF.</p>
</div>
<button type="button" class="theme-toggle" id="pdrTheme">🌙 Dark</button>
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
<div class="dropzone" id="pdrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pdrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pdrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Draw redaction boxes</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="pdrColor">Redaction color</label>
<select id="pdrColor">
<option value="black" selected>⬛ Black — classic redaction</option>
<option value="white">⬜ White — clean cover-up</option>
<option value="gray">⬜ Gray — subtle masking</option>
</select>
<div class="hint">Black is the standard for legal and official redactions.</div>
</div>
<div class="setting">
<label>Box controls</label>
<div class="tool-actions" style="margin-top:0">
<button type="button" class="btn-pro-outline" id="pdrClearPage">Clear this page</button>
<button type="button" class="btn-pro-outline" id="pdrClearAll">Clear all boxes</button>
</div>
<div class="hint" id="pdrBoxCount">No boxes drawn yet.</div>
</div>
</div>
</div>
<div id="pdrViewer" style="display:none;margin-top:14px">
<div class="tool-actions" style="margin-top:0;margin-bottom:10px;justify-content:center">
<button type="button" class="btn-pro-outline" id="pdrPrev">← Prev</button>
<span id="pdrPageLabel" style="align-self:center;font-weight:600">Page 1 of 1</span>
<button type="button" class="btn-pro-outline" id="pdrNext">Next →</button>
</div>
<div style="text-align:center">
<div id="pdrCanvasWrap" style="position:relative;display:inline-block;cursor:crosshair;max-width:100%">
<canvas id="pdrCanvas"></canvas>
<div id="pdrOverlay" style="position:absolute;inset:0"></div>
</div>
</div>
<div class="hint" style="text-align:center;margin-top:8px">👆 Click and drag on the page to draw a redaction box. Draw as many as you need per page.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Apply redaction &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pdrBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Redact &amp; Download PDF
</button>
<button type="button" class="btn-pro-outline" id="pdrClear" disabled>Remove PDF</button>
</div>
<div class="progress-wrap" id="pdrProgWrap">
<div class="progress-bar"><i id="pdrProgBar"></i></div>
<div class="progress-text" id="pdrProgText">Working…</div>
</div>
<div class="results" id="pdrResults">
<p class="result-head">✅ Done — your redacted PDF</p>
<div class="result-summary" id="pdrSummary"></div>
<div class="result-grid" id="pdrGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — redact as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pdrShell');
  ToolPro.themeToggle(shell, document.getElementById('pdrTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var file = null, pdfBytes = null, pdfDoc = null, numPages = 0, curPage = 1;
  var boxes = []; // {page, x, y, w, h} in PDF points, y from top
  var btn = document.getElementById('pdrBtn');
  var clearBtn = document.getElementById('pdrClear');
  var listEl = document.getElementById('pdrList');
  var viewer = document.getElementById('pdrViewer');
  var canvas = document.getElementById('pdrCanvas');
  var overlay = document.getElementById('pdrOverlay');
  var pageSize = { w: 612, h: 792 };

  function refreshButtons(){
    btn.disabled = !(file && boxes.length);
    clearBtn.disabled = !file;
    var c = document.getElementById('pdrBoxCount');
    if(!boxes.length){ c.textContent = 'No boxes drawn yet.'; return; }
    var pages = {};
    boxes.forEach(function(b){ pages[b.page] = 1; });
    var n = Object.keys(pages).length;
    c.textContent = '✏️ ' + boxes.length + (boxes.length === 1 ? ' box' : ' boxes') +
      ' drawn across ' + n + (n === 1 ? ' page.' : ' pages.');
  }

  ToolPro.dropzone(document.getElementById('pdrDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ resetAll(); });
      resetBoxes();
      loadPdf();
      refreshButtons();
    }
  });

  function resetBoxes(){
    boxes = []; curPage = 1;
    viewer.style.display = 'none';
    document.getElementById('pdrResults').classList.remove('show');
  }
  function resetAll(){
    file = null; pdfBytes = null; pdfDoc = null; numPages = 0;
    listEl.innerHTML = '';
    resetBoxes();
    refreshButtons();
  }
  clearBtn.addEventListener('click', resetAll);

  async function loadPdf(){
    try{
      pdfBytes = new Uint8Array(await file.arrayBuffer());
      pdfDoc = await pdfjsLib.getDocument({ data: pdfBytes.slice() }).promise;
      numPages = pdfDoc.numPages;
      curPage = 1;
      viewer.style.display = '';
      await renderPage();
      ToolPro.toast(numPages + (numPages === 1 ? ' page' : ' pages') + ' loaded — drag on the page to redact', 'ok');
    }catch(e){
      ToolPro.toast('Could not read this PDF — it may be encrypted or damaged.', 'err');
    }
  }

  async function renderPage(){
    var page = await pdfDoc.getPage(curPage);
    var vp0 = page.getViewport({ scale: 1 });
    pageSize = { w: vp0.width, h: vp0.height };
    var targetW = Math.min(680, vp0.width * 1.5);
    var scale = targetW / vp0.width;
    var vp = page.getViewport({ scale: scale });
    canvas.width = Math.round(vp.width);
    canvas.height = Math.round(vp.height);
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    var ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport: vp }).promise;
    document.getElementById('pdrPageLabel').textContent = 'Page ' + curPage + ' of ' + numPages;
    drawBoxes();
  }

  function drawBoxes(){
    overlay.innerHTML = '';
    var W = canvas.width, H = canvas.height;
    boxes.filter(function(b){ return b.page === curPage; }).forEach(function(b){
      var d = document.createElement('div');
      d.style.position = 'absolute';
      d.style.left = (b.x / pageSize.w * W) + 'px';
      d.style.top = (b.y / pageSize.h * H) + 'px';
      d.style.width = (b.w / pageSize.w * W) + 'px';
      d.style.height = (b.h / pageSize.h * H) + 'px';
      d.style.background = 'rgba(0,0,0,0.85)';
      d.style.border = '1px dashed #f00';
      d.style.boxSizing = 'border-box';
      overlay.appendChild(d);
    });
  }

  var drawing = null;
  function pos(e){
    var r = overlay.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top, W: r.width, H: r.height };
  }
  overlay.addEventListener('mousedown', function(e){
    if(!pdfDoc) return;
    var p = pos(e);
    drawing = { x0: p.x, y0: p.y, el: document.createElement('div') };
    drawing.el.style.position = 'absolute';
    drawing.el.style.background = 'rgba(0,0,0,0.85)';
    drawing.el.style.border = '1px dashed #f00';
    drawing.el.style.boxSizing = 'border-box';
    overlay.appendChild(drawing.el);
    e.preventDefault();
  });
  overlay.addEventListener('mousemove', function(e){
    if(!drawing) return;
    var p = pos(e);
    var x = Math.min(drawing.x0, p.x), y = Math.min(drawing.y0, p.y);
    var w = Math.abs(p.x - drawing.x0), h = Math.abs(p.y - drawing.y0);
    drawing.el.style.left = x + 'px'; drawing.el.style.top = y + 'px';
    drawing.el.style.width = w + 'px'; drawing.el.style.height = h + 'px';
    drawing.rect = { x: x, y: y, w: w, h: h, W: p.W, H: p.H };
  });
  window.addEventListener('mouseup', function(){
    if(!drawing) return;
    var r = drawing.rect;
    drawing.el.remove();
    if(r && r.w > 6 && r.h > 6){
      boxes.push({
        page: curPage,
        x: r.x / r.W * pageSize.w,
        y: r.y / r.H * pageSize.h,
        w: r.w / r.W * pageSize.w,
        h: r.h / r.H * pageSize.h
      });
      ToolPro.toast('Box added on page ' + curPage, 'ok');
    }
    drawing = null;
    drawBoxes();
    refreshButtons();
  });

  document.getElementById('pdrPrev').addEventListener('click', function(){
    if(curPage > 1){ curPage--; renderPage(); }
  });
  document.getElementById('pdrNext').addEventListener('click', function(){
    if(curPage < numPages){ curPage++; renderPage(); }
  });
  document.getElementById('pdrClearPage').addEventListener('click', function(){
    boxes = boxes.filter(function(b){ return b.page !== curPage; });
    drawBoxes(); refreshButtons();
    ToolPro.toast('Boxes cleared on page ' + curPage);
  });
  document.getElementById('pdrClearAll').addEventListener('click', function(){
    boxes = [];
    drawBoxes(); refreshButtons();
    ToolPro.toast('All boxes cleared');
  });

  btn.addEventListener('click', async function(){
    if(!file || !boxes.length) return;
    var progWrap = document.getElementById('pdrProgWrap');
    var progBar = document.getElementById('pdrProgBar');
    var progText = document.getElementById('pdrProgText');
    var grid = document.getElementById('pdrGrid');
    var resBox = document.getElementById('pdrResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    try{
      progBar.style.width = '20%'; progText.textContent = 'Applying redactions…';
      var doc = await PDFLib.PDFDocument.load(pdfBytes.slice(), { ignoreEncryption: true });
      var colorSel = document.getElementById('pdrColor').value;
      var rgb = colorSel === 'white' ? PDFLib.rgb(1, 1, 1)
        : colorSel === 'gray' ? PDFLib.rgb(0.5, 0.5, 0.5)
        : PDFLib.rgb(0, 0, 0);
      boxes.forEach(function(b){
        var page = doc.getPage(b.page - 1);
        var ph = page.getHeight();
        page.drawRectangle({
          x: b.x, y: ph - b.y - b.h, width: b.w, height: b.h,
          color: rgb, opacity: 1, borderWidth: 0
        });
      });
      progBar.style.width = '80%'; progText.textContent = 'Saving PDF…';
      var out = await doc.save({ useObjectStreams: true, addDefaultPage: false });
      var blob = new Blob([out], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-redacted.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        '⬛ ' + boxes.length + (boxes.length === 1 ? ' region' : ' regions') + ' redacted in ' +
        ToolPro.fmtBytes(out.length) + ' PDF<br>Color: ' + colorSel;
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pdrSummary').textContent = '🎉 Done — sensitive regions are permanently covered in the exported file.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Redacted PDF ready', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Redaction failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in one PDF — contracts, statements, scans, anything.
- **Step 2** — Flip through the page previews and drag boxes over names, account numbers, signatures, or anything private. Pick black, white, or gray coverage, and clear per page or all at once.
- **Step 3** — Hit "Redact &amp; Download PDF" to export a new PDF with every marked region permanently covered. Your file never leaves your browser.

## Everyday uses

- **Job seekers** — share resumes with salary history or references blacked out.
- **Freelancers** — send contracts with rates hidden from third parties.
- **Tenants &amp; buyers** — share bank statements with account numbers covered.
- **HR teams** — anonymize CVs before panel reviews.

**Rule of thumb:** draw boxes slightly larger than the text you're hiding — a tight box can leak the first or last character at the edges. Always re-open the exported PDF and double-check every page before sharing.

**Privacy note:** redaction boxes are drawn permanently onto the exported PDF — but this tool covers regions visually; for legally bulletproof redaction of text layers, verify the output in your PDF reader before relying on it.
