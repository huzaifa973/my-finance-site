---
title: "Free PDF OCR Online — Turn Scanned PDFs into Text"
description: "Turn scanned PDFs into editable text with free in-browser OCR in 7 languages, including Urdu, Hindi, and Arabic. Files never leave your device."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

A scanned PDF is really just a photo of each page — you can't search it, copy from it, or edit it. This tool renders every page and runs OCR (optical character recognition) on it right in your browser, in English, Urdu, Hindi, Arabic, Spanish, French, or German, then hands you the recognized text to copy or download. Up to 20 pages per document. If your PDF already has selectable text, the faster [PDF to Text extractor](/tools/pdf-text-extractor/) will give you a cleaner result with no recognition errors.

<div class="tool-shell" id="ocrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF OCR</h2>
<p>Make scanned PDFs readable: turn page images into editable text in 7 languages.</p>
</div>
<button type="button" class="theme-toggle" id="ocrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your scanned PDF</p>
<div class="dropzone" id="ocrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only · one file at a time · up to 20 pages</span>
<input type="file" id="ocrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ocrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> OCR settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="ocrLang">Document language</label>
<select id="ocrLang">
<option value="eng" selected>English</option>
<option value="urd">Urdu</option>
<option value="hin">Hindi</option>
<option value="ara">Arabic</option>
<option value="spa">Spanish</option>
<option value="fra">French</option>
<option value="deu">German</option>
</select>
<div class="hint">Pick the main language of the document. The first run downloads the OCR engine and language data once (a few MB) — after that it is cached in your browser.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run OCR &amp; copy your text</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ocrBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
Run OCR
</button>
<button type="button" class="btn-pro-outline" id="ocrClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ocrProgWrap">
<div class="progress-bar"><i id="ocrProgBar"></i></div>
<div class="progress-text" id="ocrProgText">Working…</div>
</div>
<div class="results" id="ocrResults">
<p class="result-head">✅ Done — recognized text</p>
<div class="result-summary" id="ocrSummary"></div>
<div class="setting">
<label for="ocrText">Recognized text — edit freely, then copy or download</label>
<textarea class="tool-output" id="ocrText" rows="10" spellcheck="false" style="width:100%;"></textarea>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ocrCopy">📋 Copy Text</button>
<button type="button" class="btn-pro-outline" id="ocrDownload">⬇ Download .txt</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — OCR as many scanned PDFs as you like. Your files never leave your device.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('ocrShell');
  ToolPro.themeToggle(shell, document.getElementById('ocrTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var MAXP = 20;
  var pdfFile = null;
  var tmod = null, worker = null, workerLang = '';
  var state = { page: 1, total: 1 };
  var langNames = { eng: 'English', urd: 'Urdu', hin: 'Hindi', ara: 'Arabic', spa: 'Spanish', fra: 'French', deu: 'German' };
  var statusLabels = {
    'loading tesseract core': 'Loading OCR engine…',
    'initializing tesseract': 'Starting OCR engine…',
    'loading language traineddata': 'Loading language data…',
    'recognizing text': 'Reading text…'
  };
  var listEl = document.getElementById('ocrList');
  var langSel = document.getElementById('ocrLang');
  var btn = document.getElementById('ocrBtn');
  var clearBtn = document.getElementById('ocrClear');
  var progWrap = document.getElementById('ocrProgWrap');
  var progBar = document.getElementById('ocrProgBar');
  var progText = document.getElementById('ocrProgText');
  var resBox = document.getElementById('ocrResults');
  var summaryEl = document.getElementById('ocrSummary');
  var out = document.getElementById('ocrText');
  var copyBtn = document.getElementById('ocrCopy');
  var dlBtn = document.getElementById('ocrDownload');

  function resetAll(){
    pdfFile = null;
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    out.value = '';
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('ocrDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      pdfFile = arr[0];
      ToolPro.fileRow(listEl, pdfFile, resetAll);
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('PDF added — pick the language and hit Run OCR', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  btn.addEventListener('click', async function(){
    if(!pdfFile) return;
    var lang = langSel.value;
    btn.disabled = true; clearBtn.disabled = true;
    resBox.classList.remove('show');
    progWrap.classList.add('show');
    progBar.style.width = '0%';
    progText.textContent = 'Opening PDF…';
    try{
      var buf = await pdfFile.arrayBuffer();
      var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      var totalPages = pdf.numPages;
      var total = Math.min(totalPages, MAXP);
      state.total = total;
      state.page = 1;
      if(totalPages > MAXP){
        ToolPro.toast('This PDF has ' + totalPages + ' pages — OCR covers the first ' + MAXP + ' only.', 'err');
      }
      progText.textContent = 'Loading OCR engine…';
      if(!tmod){
        tmod = await import('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.esm.min.js');
      }
      if(worker && workerLang !== lang){ await worker.terminate(); worker = null; }
      if(!worker){
        worker = await tmod.createWorker(lang, undefined, {
          logger: function(m){
            if(m.status === 'recognizing text'){
              var pct = Math.round((m.progress || 0) * 100);
              progBar.style.width = Math.round(((state.page - 1 + (m.progress || 0)) / state.total) * 100) + '%';
              progText.textContent = 'Page ' + state.page + ' of ' + state.total + ' — reading text… ' + pct + '%';
            } else if(statusLabels[m.status]){
              progText.textContent = statusLabels[m.status];
            }
          }
        });
        workerLang = lang;
      }
      var parts = [], totalChars = 0;
      for(var n = 1; n <= total; n++){
        state.page = n;
        progText.textContent = 'Rendering page ' + n + ' of ' + total + '…';
        progBar.style.width = Math.round((n - 1) / total * 100) + '%';
        var page = await pdf.getPage(n);
        var viewport = page.getViewport({ scale: 2 });
        var canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
        var ret = await worker.recognize(canvas);
        var txt = (ret && ret.data && ret.data.text) ? ret.data.text.trim() : '';
        totalChars += txt.length;
        parts.push('— Page ' + n + ' —' + (txt ? '\n' + txt : '\n(No text recognized on this page.)'));
        page.cleanup();
      }
      out.value = parts.join('\n\n');
      var words = totalChars ? out.value.split(/\s+/).length : 0;
      summaryEl.textContent = '🎉 Recognized ' + totalChars.toLocaleString() + ' characters (~' + words.toLocaleString() + ' words) across ' + total + ' page' + (total === 1 ? '' : 's') + ' in ' + langNames[lang] +
        (totalPages > MAXP ? ' — the document has ' + totalPages + ' pages; only the first ' + MAXP + ' were processed.' : '.') +
        ' Skim the text before relying on it: OCR can misread faint, skewed, or low-resolution scans.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast(totalChars ? 'Text recognized' : 'No text recognized', totalChars ? 'ok' : 'err');
    }catch(err){
      progWrap.classList.remove('show');
      if(err && err.name === 'PasswordException'){
        ToolPro.toast('This PDF is password-protected — remove the password first.', 'err');
      } else {
        ToolPro.toast('OCR failed — check your connection and try again.', 'err');
      }
    }
    btn.disabled = false; clearBtn.disabled = false;
  });

  copyBtn.addEventListener('click', function(){
    var t = out.value;
    if(!t){ ToolPro.toast('Nothing to copy yet.', 'err'); return; }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){
        ToolPro.toast('Text copied to clipboard', 'ok');
      }, function(){ fallbackCopy(t); });
    } else { fallbackCopy(t); }
  });

  function fallbackCopy(t){
    out.select();
    try{ document.execCommand('copy'); ToolPro.toast('Text copied to clipboard', 'ok'); }
    catch(e){ ToolPro.toast('Copy manually: the text is selected above.', 'err'); }
  }

  dlBtn.addEventListener('click', function(){
    var t = out.value;
    if(!t){ ToolPro.toast('Nothing to download yet.', 'err'); return; }
    var blob = new Blob([t], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var base = pdfFile && pdfFile.name ? pdfFile.name.replace(/\.pdf$/i, '') : 'pdf-ocr';
    ToolPro.download(url, base + '-ocr.txt');
    setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
    ToolPro.toast('Downloaded as .txt', 'ok');
  });
})();
</script>

## Everyday uses

- **Scanned letters &amp; certificates** — turn paper archives into text you can search and reuse.
- **Old books &amp; notes** — pull quotes and passages out of scanned pages without retyping them.
- **Urdu, Hindi &amp; Arabic documents** — recognize regional-language paperwork into editable text.
- **Receipts &amp; invoices** — digitize scanned bills for expense records and accounting.
- **Office paperwork** — make a scanned contract or form searchable before you file it away.

## Frequently asked questions

**How accurate is the OCR?**
On clean, straight, high-resolution scans it is very good; on faint, blurry, skewed, or handwritten pages it will make mistakes — handwriting especially. Always skim the result before relying on it, and re-scan at a higher resolution if a page comes out garbled.

**Why is there a 20-page limit?**
OCR runs entirely on your own device, page by page, and long documents can take many minutes and a lot of memory. The first 20 pages keeps the tool fast and reliable. For a longer document, split it into chunks (or OCR the sections you actually need) and run them one at a time.

**Which languages are supported, and is my document uploaded?**
English, Urdu, Hindi, Arabic, Spanish, French, and German — pick the document's main language before running. And no: the pages are rendered and read entirely in your browser. Your files never leave your device; only the OCR engine and language data are downloaded, once, on first use.
