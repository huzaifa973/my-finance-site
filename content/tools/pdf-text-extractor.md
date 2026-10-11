---
title: "Free PDF to Text Converter — Extract Text from PDF"
description: "Pull the text out of any PDF in your browser with our free PDF to text converter. Page-by-page extraction, copy or download as .txt. No sign-up, files stay on your device."
category: pdf
date: 2026-10-11
draft: false
---

Need the words out of a PDF without retyping? This free PDF to text converter reads every page and pulls the selectable text into a clean, editable text box — then lets you copy it or download it as a .txt file. Everything runs locally in your browser; your documents are never uploaded. Note: scanned or image-only PDFs contain no text to extract — for those, use our free [image-to-text OCR tool](/tools/image-to-text-ocr/).

<div class="tool-shell" id="pteShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to Text Extractor</h2>
<p>Extract selectable text from any PDF, page by page — copy it or download as .txt, right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="pteTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDFs</p>
<div class="dropzone" id="pteDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · batch supported</span>
<input type="file" id="pteFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pteList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Extraction settings</p>
<div class="settings-panel">
<div class="preset-row" id="ptePresets">
<button type="button" class="preset-chip active" data-pages="1" data-layout="1">📄 Clean text — recommended</button>
<button type="button" class="preset-chip" data-pages="0" data-layout="0">🧹 Just the words</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ptePageSep">Show page separators</label>
<div class="toggle on" id="ptePageSep" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Adds a "— Page 2 —" marker between pages so you know where each page begins.</div>
</div>
<div class="setting">
<label for="pteLayout">Preserve line breaks</label>
<div class="toggle on" id="pteLayout" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Keeps the paragraph structure of the original document. Turn off for one flowing block of text.</div>
</div>
<div class="setting">
<label for="ptePages">Page range to extract</label>
<select id="ptePages">
<option value="all" selected>All pages</option>
<option value="first10">First 10 pages</option>
<option value="first5">First 5 pages</option>
</select>
<div class="hint">Large documents extract faster if you only need the beginning.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Extract &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pteBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Extract Text
</button>
<button type="button" class="btn-pro-outline" id="pteClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pteProgWrap">
<div class="progress-bar"><i id="pteProgBar"></i></div>
<div class="progress-text" id="pteProgText">Working…</div>
</div>
<div class="results" id="pteResults">
<p class="result-head">✅ Done — extracted text</p>
<div class="result-summary" id="pteSummary"></div>
<div class="result-grid" id="pteGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — extract text from as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pteShell');
  ToolPro.themeToggle(shell, document.getElementById('pteTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var files = [];
  var listEl = document.getElementById('pteList');
  var btn = document.getElementById('pteBtn');
  var clearBtn = document.getElementById('pteClear');
  var presets = document.getElementById('ptePresets');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
  }
  var tPageSep = bindToggle(document.getElementById('ptePageSep'), true);
  var tLayout = bindToggle(document.getElementById('pteLayout'), true);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    tPageSep.set(chip.dataset.pages === '1');
    tLayout.set(chip.dataset.layout === '1');
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Extract ' +
      (n ? 'from ' + n + (n === 1 ? ' PDF' : ' PDFs') : 'Text');
  }

  ToolPro.dropzone(document.getElementById('pteDrop'), {
    multiple: true,
    accept: 'application/pdf,.pdf',
    maxFiles: 10,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('pteResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' PDF' : ' PDFs') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('pteResults').classList.remove('show');
    refreshButtons();
  });

  function extractOne(file, pageSep, keepLayout, pageLimit){
    return new Promise(function(resolve){
      var reader = new FileReader();
      reader.onload = function(){
        var loading = pdfjsLib.getDocument({ data: new Uint8Array(reader.result) });
        loading.promise.then(function(pdf){
          var total = pdf.numPages;
          var limit = Math.min(total, pageLimit || total);
          var pages = [];
          function next(n){
            if(n > limit){ resolve({ pages: pages, total: total, extracted: limit }); return; }
            pdf.getPage(n).then(function(page){
              return page.getTextContent().then(function(tc){
                var str = '';
                tc.items.forEach(function(item){
                  str += item.str;
                  str += item.hasEOL ? '\n' : ' ';
                });
                pages.push({ n: n, text: keepLayout ? str.replace(/ +\n/g, '\n').replace(/\n{3,}/g, '\n\n').trim() : str.replace(/\s+/g, ' ').trim() });
                next(n + 1);
              });
            }).catch(function(){ pages.push({ n: n, text: '' }); next(n + 1); });
          }
          next(1);
        }).catch(function(){ resolve(null); });
      };
      reader.onerror = function(){ resolve(null); };
      reader.readAsArrayBuffer(file);
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var pageSep = tPageSep.get();
    var keepLayout = tLayout.get();
    var range = document.getElementById('ptePages').value;
    var limit = range === 'first5' ? 5 : (range === 'first10' ? 10 : 0);
    var progWrap = document.getElementById('pteProgWrap');
    var progBar = document.getElementById('pteProgBar');
    var progText = document.getElementById('pteProgText');
    var grid = document.getElementById('pteGrid');
    var resBox = document.getElementById('pteResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    var totalChars = 0, done = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Reading ' + (i + 1) + ' of ' + files.length + '…';
      var out = await extractOne(entry.file, pageSep, keepLayout, limit);
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!out){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      var parts = [];
      out.pages.forEach(function(p){
        if(pageSep) parts.push('— Page ' + p.n + ' —');
        parts.push(p.text);
      });
      var text = parts.join('\n\n').trim();
      totalChars += text.length;
      var empty = !text.length;
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = entry.file.name.replace(/\.pdf$/i, '');
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<textarea class="tool-output" rows="8" placeholder="No extractable text found on these pages."></textarea>' +
        '<div style="display:flex;gap:.5rem;flex-wrap:wrap">' +
        '<button type="button" class="btn-pro copy-btn" ' + (empty ? 'disabled' : '') + '>📋 Copy</button>' +
        '<button type="button" class="btn-pro-outline dl-btn" ' + (empty ? 'disabled' : '') + '>⬇ Download .txt</button>' +
        '</div>';
      card.querySelector('.r-name').textContent = base + '.txt';
      card.querySelector('.r-name').title = base + '.txt';
      card.querySelector('.r-stats').innerHTML = empty
        ? '<i>No selectable text found — this looks like a scanned/image PDF. Try our <a href="/tools/image-to-text-ocr/">image-to-text OCR tool</a>.</i>'
        : out.extracted + ' of ' + out.total + ' pages · ' + text.length.toLocaleString() + ' characters';
      var ta = card.querySelector('textarea');
      ta.value = text;
      if(!empty){
        card.querySelector('.copy-btn').addEventListener('click', function(){
          ta.select();
          if(navigator.clipboard){ navigator.clipboard.writeText(ta.value).then(function(){ ToolPro.toast('Copied to clipboard', 'ok'); }); }
          else { document.execCommand('copy'); ToolPro.toast('Copied to clipboard', 'ok'); }
        });
        (function(t, name){
          card.querySelector('.dl-btn').addEventListener('click', function(){
            ToolPro.download(URL.createObjectURL(new Blob([t], { type: 'text/plain' })), name);
          });
        })(text, base + '.txt');
      }
      grid.appendChild(card);
    }
    document.getElementById('pteSummary').textContent =
      '🎉 Text extracted from ' + done + (done === 1 ? ' PDF' : ' PDFs') + ' — ' +
      totalChars.toLocaleString() + ' characters total. Edit the text in the boxes before copying.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('Extraction finished', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDF files. They're read straight into your browser — nothing leaves your device.
- **Step 2** — Choose your settings: page separators, line-break preservation, and optionally just the first pages of long documents.
- **Step 3** — Hit **Extract Text**. Each page is read in order, the text lands in an editable box, and you can copy it or download it as a clean .txt file.

Scanned PDFs (photos of pages) contain no selectable text, so the tool will honestly tell you when a file is empty — those pages need OCR instead.

## Everyday uses

- **Students** — pull quotes from research PDFs for essays without retyping.
- **Job seekers** — grab your resume text to paste into online application forms.
- **Writers &amp; editors** — extract chapters or articles from PDFs into your writing app.
- **Accountants** — copy tables and figures out of bank statements and reports.
- **Anyone digitizing paperwork** — turn old PDF manuals and guides into editable text.

## Frequently asked questions

**Why did my scanned PDF return no text?**
Scanned PDFs are really just pictures of pages — there's no actual text inside to extract. Run those pages through our free [image-to-text OCR tool](/tools/image-to-text-ocr/) instead.

**Does it keep the original formatting?**
It keeps paragraph line breaks and page order, but not fonts, colors, or tables-as-tables. For editable layout work, extraction is a starting point, not a conversion.

**Can it handle password-protected PDFs?**
Encrypted files that block copying can't be processed. Remove the password in your PDF reader first, then extract.

**Is my document private?**
Yes. Everything happens locally in your browser. Your files never leave your browser, and nothing is uploaded or stored anywhere.