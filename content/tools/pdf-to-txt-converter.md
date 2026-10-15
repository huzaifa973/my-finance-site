---
title: "Free PDF to TXT Converter — Extract Plain Text from PDF"
description: "Pull clean plain text out of any PDF right in your browser — page separators, page headers, copy-all, download per file. Free, private, no uploads."
category: pdf
date: 2026-10-15
draft: false
---

Need the words out of a PDF — for notes, quotes, analysis, or pasting into another app? This converter reads the PDF's text layer in your browser and gives you clean plain text: download a .txt per file, preview it, or copy everything to the clipboard in one click. Nothing is uploaded, ever.

<div class="tool-shell" id="pttShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 5h16v2H4V5zm0 4h16v2H4V9zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to TXT Converter</h2>
<p>Extract clean plain text from PDFs — download .txt per file or copy it all in one click.</p>
</div>
<button type="button" class="theme-toggle" id="pttTheme">🌙 Dark</button>
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
<div class="dropzone" id="pttDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 10 files at once</span>
<input type="file" id="pttFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pttList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Text settings</p>
<div class="settings-panel">
<div class="preset-row" id="pttPresets">
<button type="button" class="preset-chip active" data-sep="labeled">📌 Labeled page headers</button>
<button type="button" class="preset-chip" data-sep="blank">↔️ Blank-line separators</button>
<button type="button" class="preset-chip" data-sep="none">🚫 No separators</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pttHeaders">Include page headers</label>
<div class="toggle on" id="pttHeaders" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Adds a "--- Page N ---" line at the top of every page so you always know where you are.</div>
</div>
<div class="setting">
<label for="pttTrim">Trim extra whitespace</label>
<div class="toggle on" id="pttTrim" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Collapses runs of spaces and stray blank lines into clean, readable text.</div>
</div>
<div class="setting">
<label for="pttSep">Page separator</label>
<select id="pttSep" class="tool-input">
<option value="labeled" selected>Labeled header — "--- Page N ---"</option>
<option value="blank">Blank line between pages</option>
<option value="none">No separator</option>
</select>
<div class="hint">How pages are joined inside the .txt file.</div>
</div>
<div class="setting">
<label for="pttPrev">Preview length</label>
<input type="range" id="pttPrev" min="500" max="20000" step="500" value="4000">
<div class="hint">Each result card previews the first <b id="pttPrevVal">4,000</b> characters.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Extract &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pttBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Extract Text
</button>
<button type="button" class="btn-pro-outline" id="pttClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pttProgWrap">
<div class="progress-bar"><i id="pttProgBar"></i></div>
<div class="progress-text" id="pttProgText">Working…</div>
</div>
<div class="results" id="pttResults">
<p class="result-head">✅ Text extracted — one file per PDF</p>
<div class="result-summary" id="pttSummary"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro-outline" id="pttCopyAll">📋 Copy all text</button>
</div>
<div class="result-grid" id="pttGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — extract text from as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pttShell');
  ToolPro.themeToggle(shell, document.getElementById('pttTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var files = [];
  var texts = []; // { file, text }
  var listEl = document.getElementById('pttList');
  var btn = document.getElementById('pttBtn');
  var clearBtn = document.getElementById('pttClear');
  var copyAllBtn = document.getElementById('pttCopyAll');
  var grid = document.getElementById('pttGrid');
  var resBox = document.getElementById('pttResults');
  var summaryEl = document.getElementById('pttSummary');
  var progWrap = document.getElementById('pttProgWrap');
  var progBar = document.getElementById('pttProgBar');
  var progText = document.getElementById('pttProgText');
  var sepSel = document.getElementById('pttSep');
  var chips = document.getElementById('pttPresets');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
  }
  var tHeaders = bindToggle(document.getElementById('pttHeaders'), true);
  var tTrim = bindToggle(document.getElementById('pttTrim'), true);

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    sepSel.value = chip.dataset.sep;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  sepSel.addEventListener('change', function(){
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.sep === sepSel.value);
    });
  });

  ToolPro.bindSlider(
    document.getElementById('pttPrev'),
    document.getElementById('pttPrevVal'),
    function(v){ return Number(v).toLocaleString('en-US'); }
  );

  function refreshButtons(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  function resetResults(){
    grid.innerHTML = '';
    texts = [];
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
  }

  ToolPro.dropzone(document.getElementById('pttDrop'), {
    multiple: true, accept: 'application/pdf,.pdf', maxFiles: 10,
    onFiles: function(arr){
      if(!arr.length) return;
      resetResults();
      arr.forEach(function(f){
        files.push(f);
        ToolPro.fileRow(listEl, f, function(removed){
          files = files.filter(function(x){ return x !== removed; });
          resetResults();
          refreshButtons();
        });
      });
      refreshButtons();
      ToolPro.toast(files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' ready — hit Extract Text', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = [];
    listEl.innerHTML = '';
    resetResults();
    refreshButtons();
  });

  function pageToLines(tc){
    var items = [];
    tc.items.forEach(function(it){ if(typeof it.str === 'string') items.push(it); });
    var lines = [];
    items.forEach(function(it){
      var y = it.transform[5];
      var line = null;
      for(var i = 0; i < lines.length; i++){
        if(Math.abs(lines[i].y - y) <= 3){ line = lines[i]; break; }
      }
      if(!line){ line = { y: y, items: [] }; lines.push(line); }
      line.items.push(it);
    });
    lines.sort(function(a, b){ return b.y - a.y; });
    var out = [];
    var prevY = null, prevH = 12;
    lines.forEach(function(line){
      line.items.sort(function(a, b){ return a.transform[4] - b.transform[4]; });
      var text = '', prevEnd = null, fontH = 0;
      line.items.forEach(function(it){
        var h = it.height || Math.abs(it.transform[3]) || 12;
        if(h > fontH) fontH = h;
        var x = it.transform[4];
        if(prevEnd !== null && (x - prevEnd) > fontH * 0.25) text += ' ';
        text += it.str;
        prevEnd = x + (it.width || 0);
      });
      text = text.replace(/\s+/g, ' ').trim();
      if(prevY !== null && (prevY - line.y) > prevH * 1.7 && out.length && out[out.length - 1] !== '') out.push('');
      if(text) out.push(text);
      prevY = line.y;
      if(fontH) prevH = fontH;
    });
    return out;
  }

  function buildTxt(pagesLines, opts){
    var parts = [];
    pagesLines.forEach(function(lines, pi){
      if(opts.headers) parts.push('--- Page ' + (pi + 1) + ' ---');
      lines.forEach(function(ln){
        parts.push(opts.trim ? ln.replace(/\s+/g, ' ').trim() : ln);
      });
      if(pi < pagesLines.length - 1){
        if(opts.sep === 'labeled') parts.push('--- Page ' + (pi + 2) + ' ---');
        else if(opts.sep === 'blank') parts.push('');
      }
    });
    var txt = parts.join('\n');
    if(opts.trim) txt = txt.replace(/\n{3,}/g, '\n\n').replace(/[ \t]+\n/g, '\n').trim();
    return txt;
  }

  function makeCard(file, base, text, stats, warn, previewLen){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<pre class="txt-preview"></pre>' +
      '<div class="tool-actions" style="margin-top:.6rem;gap:.5rem;flex-wrap:wrap;">' +
      '<button type="button" class="btn-pro dl-txt">⬇ Download .txt</button>' +
      '<button type="button" class="btn-pro-outline cp-txt">📋 Copy text</button>' +
      '</div>';
    card.querySelector('.r-name').textContent = base + '.txt';
    card.querySelector('.r-name').title = base + '.txt';
    card.querySelector('.r-stats').textContent = warn || stats;
    if(warn){
      card.querySelector('.txt-preview').style.display = 'none';
      card.querySelector('.dl-txt').disabled = true;
      card.querySelector('.cp-txt').disabled = true;
    } else {
      var preview = text.length > previewLen ? text.slice(0, previewLen) + '…' : text;
      card.querySelector('.txt-preview').textContent = preview;
      var url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
      card.querySelector('.dl-txt').addEventListener('click', function(){ ToolPro.download(url, base + '.txt'); });
      card.querySelector('.cp-txt').addEventListener('click', function(){ ToolPro.copyText(text, 'Text copied — ' + base + '.txt'); });
    }
    grid.appendChild(card);
  }

  copyAllBtn.addEventListener('click', function(){
    if(!texts.length){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    var all = texts.map(function(t){
      return '===== ' + t.file + ' =====\n' + t.text;
    }).join('\n\n\n');
    ToolPro.copyText(all, 'All extracted text copied');
  });

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true; clearBtn.disabled = true;
    resetResults();
    progWrap.classList.add('show'); progBar.style.width = '0%';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var opts = {
      headers: tHeaders.get(),
      trim: tTrim.get(),
      sep: sepSel.value,
      previewLen: parseInt(document.getElementById('pttPrev').value, 10) || 4000
    };
    var okCount = 0, totalChars = 0;
    for(var fi = 0; fi < files.length; fi++){
      var file = files[fi];
      var base = file.name.replace(/\.pdf$/i, '');
      try{
        var buf = await file.arrayBuffer();
        var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
        var total = pdf.numPages;
        var pagesLines = [];
        for(var n = 1; n <= total; n++){
          prog(Math.round((fi + n / total) / files.length * 100), 'File ' + (fi + 1) + ' of ' + files.length + ' — reading page ' + n + ' of ' + total + '…');
          var page = await pdf.getPage(n);
          var tc = await page.getTextContent();
          pagesLines.push(pageToLines(tc));
          page.cleanup();
        }
        var text = buildTxt(pagesLines, opts);
        if(!text){
          makeCard(file, base, null, null, '⚠️ No text layer found — this PDF is a scan or image, so there is nothing to extract. Run it through our free PDF OCR tool first.', opts.previewLen);
        } else {
          totalChars += text.length;
          texts.push({ file: file.name, text: text });
          makeCard(file, base, text, total + ' page' + (total === 1 ? '' : 's') + ' → ' + text.length.toLocaleString('en-US') + ' characters of plain text.', null, opts.previewLen);
          okCount++;
        }
      }catch(err){
        makeCard(file, base, null, null, '⚠️ Could not read this PDF — ' + (err && err.name === 'PasswordException' ? 'it is password-protected.' : 'it may be damaged or encrypted.'), opts.previewLen);
      }
    }
    prog(100, 'Done');
    progWrap.classList.remove('show');
    summaryEl.textContent = okCount + ' of ' + files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' extracted — ' + totalChars.toLocaleString('en-US') + ' characters total. Use Copy all text to grab everything at once.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(okCount ? 'Text extracted' : 'Nothing extracted', okCount ? 'ok' : 'err');
    btn.disabled = false; clearBtn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in up to 10 PDFs. Each is read in your browser's memory — nothing is uploaded.
- **Step 2** — Pick a page separator style, toggle page headers and whitespace trimming, and set the preview length.
- **Step 3** — Hit **Extract Text**. The tool rebuilds each page's text in reading order and gives you a .txt download per file, a copy button per file, and a Copy all text button for everything.

An honest note: this extracts the PDF's text layer — it can't read scanned images. If a file comes out empty, it's a scan: run it through our [free PDF OCR tool](/tools/pdf-ocr/) first, then extract the text from the result.

## Everyday uses

- **Quotes &amp; citations** — pull exact wording from papers, reports, and contracts for writing.
- **Notes** — turn readings and handouts into plain text you can highlight and annotate.
- **AI prompts** — feed a document's text into a chatbot that can't read PDFs directly.
- **Data prep** — get raw text ready for search, analysis, or translation tools.
- **Accessibility** — convert documents into simple text that screen readers handle cleanly.

## Frequently asked questions

**Will the text keep the original layout and formatting?**
No — plain text carries words and line order, not fonts, columns, or tables. For an editable document with page breaks, use our [free PDF to Word converter](/tools/pdf-to-word-converter/).

**Why did one file come out empty?**
That PDF has no text layer — it's a scan or photo of pages. OCR it first, then extract.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
