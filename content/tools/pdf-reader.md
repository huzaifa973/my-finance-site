---
title: "Free PDF Reader — Read PDFs Online in Your Browser"
description: "Read PDFs in a clean, distraction-free reader right in your browser — fit-to-width pages, zoom levels, and quick page jumps. Nothing is uploaded, ever."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Open a PDF and read it as a calm, continuous column of pages — no cluttered viewer chrome, no ads, and no upload. Pages render in your browser with pdf.js, sized to fit your screen (up to 900px wide). Scroll and the page counter follows you, jump straight to a page, or zoom in for fine print. Your document never leaves your device.

<div class="tool-shell" id="rdrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 5.2c-1.4-1.3-3.3-2-5.5-2H5v15.6h1.5c2 0 3.7.6 5 1.7V5.7c.2-.2.3-.3.5-.5zm0 0c1.4-1.3 3.3-2 5.5-2H19v15.6h-1.5c-2 0-3.7.6-5 1.7V5.7c-.2-.2-.3-.3-.5-.5zM12 3c-1.7-1.4-4-2-6.5-2H3v19h2.5c2.3 0 4.3.7 5.7 2.1l.8.8.8.8C14.2 20.7 16.2 20 18.5 20H21V1h-2.5C16 1 13.7 1.6 12 3zm-1 17.4c-1.4-1.1-3.2-1.7-5.2-1.8H5V3.2h1.6c2.1 0 3.5.5 4.4 1.4v15.8zm2 0V4.6c.9-.9 2.3-1.4 4.4-1.4H19v15.4h-.8c-2 .1-3.8.7-5.2 1.8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Reader</h2>
<p>A clean, distraction-free way to read PDFs — pages fit your screen, zoom when you need it.</p>
</div>
<button type="button" class="theme-toggle" id="rdrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Open your PDF</p>
<div class="dropzone" id="rdrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="rdrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="rdrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Reading options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="rdrZoom">Zoom</label>
<select id="rdrZoom">
<option value="fit" selected>Fit width — fill the reading column</option>
<option value="1">100% — actual size</option>
<option value="1.5">150% — larger</option>
<option value="2">200% — fine print</option>
</select>
<div class="hint">Changing zoom re-renders every page at the new size.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Read</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="rdrPrev" disabled>← Prev</button>
<span id="rdrCounter" style="align-self:center;font-weight:600;">Page – of –</span>
<button type="button" class="btn-pro-outline" id="rdrNext" disabled>Next →</button>
<input type="number" id="rdrGo" class="tool-input" min="1" placeholder="Go to page" style="max-width:130px;">
<button type="button" class="btn-pro" id="rdrGoBtn" disabled>Go</button>
<button type="button" class="btn-pro-outline" id="rdrClear" disabled>Close PDF</button>
</div>
<div class="progress-text" id="rdrStatus" style="margin-top:.6rem;">Open a PDF above to start reading.</div>
<div id="rdrPages" style="max-width:900px;margin:1rem auto 0;"></div>
<div class="results" id="rdrResults">
<p class="result-head">📖 Now reading</p>
<div class="result-summary" id="rdrSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — read as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('rdrShell');
  ToolPro.themeToggle(shell, document.getElementById('rdrTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var listEl = document.getElementById('rdrList');
  var pagesEl = document.getElementById('rdrPages');
  var statusEl = document.getElementById('rdrStatus');
  var counterEl = document.getElementById('rdrCounter');
  var prevBtn = document.getElementById('rdrPrev');
  var nextBtn = document.getElementById('rdrNext');
  var goInput = document.getElementById('rdrGo');
  var goBtn = document.getElementById('rdrGoBtn');
  var clearBtn = document.getElementById('rdrClear');
  var zoomSel = document.getElementById('rdrZoom');
  var resBox = document.getElementById('rdrResults');
  var summaryEl = document.getElementById('rdrSummary');

  var pdfDoc = null;
  var docName = '';
  var current = 1;
  var rendering = false;
  var observer = null;

  function updateCounter(){
    counterEl.textContent = pdfDoc ? ('Page ' + current + ' of ' + pdfDoc.numPages) : 'Page – of –';
    prevBtn.disabled = !pdfDoc || current <= 1;
    nextBtn.disabled = !pdfDoc || current >= pdfDoc.numPages;
  }

  function refreshButtons(){
    var loaded = !!pdfDoc;
    goBtn.disabled = !loaded;
    clearBtn.disabled = !loaded;
    updateCounter();
  }

  function jumpTo(n){
    if(!pdfDoc) return;
    n = Math.max(1, Math.min(pdfDoc.numPages, n));
    var target = pagesEl.querySelector('canvas[data-page="' + n + '"]');
    if(target){
      current = n;
      updateCounter();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function setupObserver(){
    if(observer) observer.disconnect();
    if(!('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          current = parseInt(en.target.dataset.page, 10);
          updateCounter();
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    pagesEl.querySelectorAll('canvas').forEach(function(c){ observer.observe(c); });
  }

  function renderPage(n){
    return pdfDoc.getPage(n).then(function(page){
      var mode = zoomSel.value;
      var base = page.getViewport({ scale: 1 });
      var scale;
      if(mode === 'fit'){
        var targetW = Math.min(pagesEl.clientWidth || 900, 900);
        scale = targetW / base.width;
      } else {
        scale = parseFloat(mode);
      }
      var viewport = page.getViewport({ scale: scale });
      var dpr = window.devicePixelRatio || 1;
      var canvas = document.createElement('canvas');
      canvas.dataset.page = n;
      canvas.style.display = 'block';
      canvas.style.margin = '0 auto 16px';
      canvas.style.background = '#ffffff';
      canvas.style.boxShadow = '0 2px 14px rgba(0,0,0,.18)';
      canvas.style.maxWidth = '100%';
      canvas.style.height = 'auto';
      canvas.width = Math.floor(viewport.width * dpr);
      canvas.height = Math.floor(viewport.height * dpr);
      pagesEl.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      statusEl.textContent = 'Rendering page ' + n + ' of ' + pdfDoc.numPages + '…';
      return page.render({
        canvasContext: ctx,
        viewport: viewport,
        transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null
      }).promise;
    });
  }

  function renderAll(){
    if(!pdfDoc || rendering) return;
    rendering = true;
    pagesEl.innerHTML = '';
    current = 1;
    updateCounter();
    var chain = Promise.resolve();
    for(var n = 1; n <= pdfDoc.numPages; n++){
      (function(p){ chain = chain.then(function(){ return renderPage(p); }); })(n);
    }
    chain.then(function(){
      rendering = false;
      statusEl.textContent = 'Showing all ' + pdfDoc.numPages + (pdfDoc.numPages === 1 ? ' page' : ' pages') + ' of ' + docName + '. Pages are rendered as images, so read and zoom freely — use the PDF to Text tool if you need selectable text.';
      summaryEl.textContent = docName + ' — ' + pdfDoc.numPages + (pdfDoc.numPages === 1 ? ' page' : ' pages') + ', rendered privately in your browser.';
      resBox.classList.add('show');
      setupObserver();
      updateCounter();
      ToolPro.toast('PDF ready to read', 'ok');
    }).catch(function(){
      rendering = false;
      statusEl.textContent = 'Something went wrong while rendering this PDF.';
      ToolPro.toast('Render failed', 'err');
    });
  }

  function resetAll(){
    if(observer){ observer.disconnect(); observer = null; }
    if(pdfDoc){ pdfDoc.destroy(); pdfDoc = null; }
    docName = '';
    pagesEl.innerHTML = '';
    listEl.innerHTML = '';
    current = 1;
    statusEl.textContent = 'Open a PDF above to start reading.';
    resBox.classList.remove('show');
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('rdrDrop'), {
    accept: 'application/pdf,.pdf',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){
        ToolPro.toast('That file is not a PDF.', 'err');
        return;
      }
      var reader = new FileReader();
      reader.onload = function(){
        resetAll();
        docName = f.name;
        var row = ToolPro.fileRow(listEl, f, function(){ resetAll(); });
        row.setStatus('Opening…', 'working');
        statusEl.textContent = 'Opening ' + f.name + '…';
        pdfjsLib.getDocument({ data: new Uint8Array(reader.result) }).promise.then(function(pdf){
          pdfDoc = pdf;
          row.setStatus('Loaded — ' + pdf.numPages + (pdf.numPages === 1 ? ' page' : ' pages'), 'done');
          goInput.max = pdf.numPages;
          refreshButtons();
          renderAll();
        }).catch(function(){
          row.setStatus('Failed', '');
          statusEl.textContent = 'Could not open that PDF — it may be damaged or password-protected.';
          ToolPro.toast('Could not open that PDF', 'err');
        });
      };
      reader.onerror = function(){ ToolPro.toast('Could not read that file.', 'err'); };
      reader.readAsArrayBuffer(f);
    }
  });

  zoomSel.addEventListener('change', function(){
    if(pdfDoc && !rendering) renderAll();
  });
  prevBtn.addEventListener('click', function(){ jumpTo(current - 1); });
  nextBtn.addEventListener('click', function(){ jumpTo(current + 1); });
  goBtn.addEventListener('click', function(){
    var n = parseInt(goInput.value, 10);
    if(isNaN(n)){ ToolPro.toast('Type a page number first.', 'err'); return; }
    jumpTo(n);
  });
  goInput.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){ e.preventDefault(); goBtn.click(); }
  });
  clearBtn.addEventListener('click', resetAll);

  refreshButtons();
})();
</script>

## Everyday uses

- **Ebooks &amp; manuals** — read long documents in a clean column without installing a heavy PDF app.
- **Contracts &amp; forms** — zoom to 200% for the fine print before you sign anything.
- **Study material** — jump straight to a chapter page with the go-to box instead of endless scrolling.
- **Private documents** — read bank statements or ID scans without uploading them to an online viewer.

## Frequently asked questions

**Can I select or copy text in this reader?**
Pages are rendered as page images for a clean, print-faithful view, so text isn't selectable here. If you need the words themselves, use our free [PDF to text extractor](/tools/pdf-text-extractor/) instead.

**Why does a very large PDF take a moment to open?**
Every page is rendered on your own device, which keeps the document private but means a 500-page file renders page by page. The counter and pages appear as rendering finishes.

**Is my document private?**
Completely. The file is read into your browser's memory only — your files never leave your browser, and closing the tab removes it.
