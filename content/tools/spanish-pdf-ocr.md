---
title: "Free Spanish PDF OCR — Extract Spanish Text from Scans"
description: "Turn scanned Spanish PDFs and photos into editable text with free in-browser OCR for Spanish (Español). Copy or download .txt — files never leave your device."
category: pdf
date: 2026-10-22
draft: false
---

Scanned Spanish documents — contratos, facturas, certificados, old letters — are just images: you can't search them, copy them, or translate them. This tool runs OCR tuned for Spanish (including ñ, accents like á/é/í/ó/ú and inverted punctuation) entirely in your browser, then hands you the text to copy or download. Upload a scanned PDF or a photo of the page. Your files never leave your browser.

<div class="tool-shell" id="spoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Spanish PDF OCR</h2>
<p>Extract Spanish text from scanned PDFs and photos — ñ, accents and all.</p>
</div>
<button type="button" class="theme-toggle" id="spoTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your scanned file</p>
<div class="dropzone" id="spoDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a file here</strong>
<span>or click to browse — .pdf or image (.jpg, .png, .webp) · one file at a time</span>
<input type="file" id="spoFile" accept="application/pdf,.pdf,image/png,image/jpeg,image/webp">
</div>
<ul class="file-list" id="spoList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> OCR settings</p>
<div class="settings-panel">
<div class="preset-row" id="spoPresets">
<button type="button" class="preset-chip active" data-p="5">⚡ Quick — 5 pages</button>
<button type="button" class="preset-chip" data-p="20">⚖️ Standard — 20 pages</button>
<button type="button" class="preset-chip" data-p="50">📚 Deep — 50 pages</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="spoScale">Render scale: <span class="val" id="spoScaleVal">2×</span></label>
<input type="range" id="spoScale" min="1" max="3" step="1" value="2">
<div class="hint">Higher scale reads faint scans better but runs slower.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="spoClean" checked><span></span> Tidy whitespace</label>
<div class="hint">Collapse repeated blank lines and extra spaces in the output.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run OCR &amp; copy your text</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spoBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z"/></svg>
Run Spanish OCR
</button>
<button type="button" class="btn-pro-outline" id="spoClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="spoProgWrap">
<div class="progress-bar"><i id="spoProgBar"></i></div>
<div class="progress-text" id="spoProgText">Working…</div>
</div>
<div class="results" id="spoResults">
<p class="result-head">✅ Done — recognized Spanish text</p>
<div class="result-summary" id="spoSummary"></div>
<div class="setting">
<label for="spoText">Recognized text — edit freely, then copy or download</label>
<textarea class="tool-output" id="spoText" rows="10" spellcheck="false" style="width:100%;"></textarea>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spoCopy">📋 Copy Text</button>
<button type="button" class="btn-pro-outline" id="spoDownload">⬇ Download .txt</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>OCR as many Spanish documents as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('spoShell');
  ToolPro.themeToggle(shell, document.getElementById('spoTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var scaleR = document.getElementById('spoScale');
  var scaleV = document.getElementById('spoScaleVal');
  var cleanT = document.getElementById('spoClean');
  var presets = document.getElementById('spoPresets');
  var listEl = document.getElementById('spoList');
  var btn = document.getElementById('spoBtn');
  var clearBtn = document.getElementById('spoClear');
  var progWrap = document.getElementById('spoProgWrap');
  var progBar = document.getElementById('spoProgBar');
  var progText = document.getElementById('spoProgText');
  var resBox = document.getElementById('spoResults');
  var summaryEl = document.getElementById('spoSummary');
  var out = document.getElementById('spoText');
  ToolPro.bindSlider(scaleR, scaleV, function(v){ return v + '×'; });

  var MAXP = 5;
  var srcFile = null;
  var tmod = null, worker = null;
  var state = { page: 1, total: 1 };

  var statusLabels = {
    'loading tesseract core': 'Loading OCR engine…',
    'initializing tesseract': 'Starting OCR engine…',
    'loading language traineddata': 'Loading Spanish language data…',
    'recognizing text': 'Reading text…'
  };

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    MAXP = parseInt(chip.dataset.p, 10);
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function resetAll(){
    srcFile = null;
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    out.value = '';
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('spoDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf,image/png,image/jpeg,image/webp',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      srcFile = arr[0];
      ToolPro.fileRow(listEl, srcFile, resetAll);
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('File added — hit Run Spanish OCR (engine downloads once)', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  function tidy(t){
    return t.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim();
  }

  function recognizeCanvas(canvas){
    return worker.recognize(canvas).then(function(ret){
      var txt = (ret && ret.data && ret.data.text) ? ret.data.text : '';
      return cleanT.checked ? tidy(txt) : txt.trim();
    });
  }

  btn.addEventListener('click', async function(){
    if(!srcFile) return;
    btn.disabled = true; clearBtn.disabled = true;
    resBox.classList.remove('show');
    progWrap.classList.add('show');
    progBar.style.width = '0%';
    var isPdf = /pdf$/i.test(srcFile.type) || /\.pdf$/i.test(srcFile.name);
    try{
      progText.textContent = 'Loading OCR engine…';
      if(!tmod){
        tmod = await import('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.esm.min.js');
      }
      if(!worker){
        worker = await tmod.createWorker('spa', undefined, {
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
      }
      var parts = [], totalChars = 0;
      if(isPdf){
        progText.textContent = 'Opening PDF…';
        var buf = await srcFile.arrayBuffer();
        var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
        var totalPages = pdf.numPages;
        var total = Math.min(totalPages, MAXP);
        state.total = total;
        if(totalPages > MAXP){
          ToolPro.toast('This PDF has ' + totalPages + ' pages — OCR covers the first ' + MAXP + ' only.', 'err');
        }
        var scale = parseInt(scaleR.value, 10);
        for(var n = 1; n <= total; n++){
          state.page = n;
          progText.textContent = 'Rendering page ' + n + ' of ' + total + '…';
          progBar.style.width = Math.round((n - 1) / total * 100) + '%';
          var page = await pdf.getPage(n);
          var viewport = page.getViewport({ scale: scale });
          var canvas = document.createElement('canvas');
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport }).promise;
          var txt = await recognizeCanvas(canvas);
          totalChars += txt.length;
          parts.push('— Página ' + n + ' —' + (txt ? '\n' + txt : '\n(Sin texto reconocido en esta página.)'));
          page.cleanup();
        }
        state.total = total;
      } else {
        state.page = 1; state.total = 1;
        progText.textContent = 'Reading image…';
        var imgUrl = URL.createObjectURL(srcFile);
        var img = await new Promise(function(resolve, reject){
          var im = new Image();
          im.onload = function(){ resolve(im); };
          im.onerror = reject;
          im.src = imgUrl;
        });
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        URL.revokeObjectURL(imgUrl);
        var itxt = await recognizeCanvas(canvas);
        totalChars = itxt.length;
        parts.push(itxt || '(No se reconoció texto en esta imagen.)');
      }
      out.value = parts.join('\n\n');
      var words = totalChars ? out.value.split(/\s+/).length : 0;
      summaryEl.textContent = '🎉 Recognized ' + totalChars.toLocaleString() + ' characters (~' + words.toLocaleString() + ' words) in Spanish' +
        (isPdf ? ' across ' + state.total + ' page' + (state.total === 1 ? '' : 's') + '.' : '.') +
        ' Skim before relying on it: OCR misreads faint or skewed scans.';
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

  function copyText(t){
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){ ToolPro.toast('Text copied to clipboard', 'ok'); },
        function(){ fallbackCopy(); });
    } else { fallbackCopy(); }
  }
  function fallbackCopy(){
    out.select();
    try{ document.execCommand('copy'); ToolPro.toast('Text copied to clipboard', 'ok'); }
    catch(e){ ToolPro.toast('Copy manually: the text is selected above.', 'err'); }
  }
  document.getElementById('spoCopy').addEventListener('click', function(){
    if(!out.value){ ToolPro.toast('Nothing to copy yet.', 'err'); return; }
    copyText(out.value);
  });
  document.getElementById('spoDownload').addEventListener('click', function(){
    if(!out.value){ ToolPro.toast('Nothing to download yet.', 'err'); return; }
    var blob = new Blob([out.value], { type: 'text/plain;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var base = srcFile && srcFile.name ? srcFile.name.replace(/\.[^.]+$/, '') : 'spanish-ocr';
    ToolPro.download(url, base + '-ocr.txt');
    setTimeout(function(){ URL.revokeObjectURL(url); }, 2000);
    ToolPro.toast('Downloaded as .txt', 'ok');
  });
})();
</script>

## How it works

- **Step 1** — Drop in a scanned Spanish PDF or a photo of the page (.jpg, .png, .webp).
- **Step 2** — Pick a page limit preset and render scale; higher scale reads faint scans better.
- **Step 3** — Hit **Run Spanish OCR** — the Spanish-trained engine loads once (~10 MB, then cached), reads each page, and you copy or download the text.

## Everyday uses

- **Bilingual offices** — digitize contratos, facturas, and certificates into searchable text.
- **Students** — pull quotes from scanned Spanish textbooks without retyping accents and ñ.
- **Genealogy & archives** — transcribe old Spanish-language letters and records.
- **Translators** — get clean Spanish source text to feed into your translation workflow.
- **Receipts & bills** — digitize Spanish invoices for expense records and accounting.

**Rule of thumb:** OCR reads Spanish best at 300 DPI or higher, straight-on and well-lit — rescan blurry or skewed pages before trusting the output for official paperwork.
