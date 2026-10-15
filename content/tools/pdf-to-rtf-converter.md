---
title: "Free PDF to RTF Converter — PDF to Rich Text Format"
description: "Convert a PDF into a Unicode-safe RTF rich-text file in your browser — page breaks kept, font size and indent your way. Free, private, no sign-up."
category: pdf
date: 2026-10-15
draft: false
---

RTF is the one format almost every word processor on earth opens — Word, Google Docs, LibreOffice, even old office software. This converter reads your PDF's text in the browser and writes a clean, valid RTF document: line breaks kept, page breaks optional, non-English characters safely Unicode-escaped. No uploads, no accounts.

<div class="tool-shell" id="ptrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM7 12h4v2H7v-2zm0 4h7v2H7v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to RTF Converter</h2>
<p>Turn a PDF into a universal RTF document — text rebuilt line by line, Unicode-safe.</p>
</div>
<button type="button" class="theme-toggle" id="ptrTheme">🌙 Dark</button>
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
<div class="dropzone" id="ptrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 10 files at once</span>
<input type="file" id="ptrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ptrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> RTF settings</p>
<div class="settings-panel">
<div class="preset-row" id="ptrPresets">
<button type="button" class="preset-chip active" data-fs="12">📄 Standard (12 pt)</button>
<button type="button" class="preset-chip" data-fs="14">🔍 Large print (14 pt)</button>
<button type="button" class="preset-chip" data-fs="10">📇 Compact (10 pt)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ptrBreaks">Page break between PDF pages</label>
<div class="toggle on" id="ptrBreaks" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Each PDF page starts on a new page in the RTF. Off = one continuous document.</div>
</div>
<div class="setting">
<label for="ptrFont">Font size</label>
<select id="ptrFont" class="tool-input">
<option value="10">10 pt — compact</option>
<option value="11">11 pt</option>
<option value="12" selected>12 pt — standard</option>
<option value="14">14 pt — large</option>
<option value="16">16 pt</option>
<option value="18">18 pt — extra large</option>
</select>
<div class="hint">Body text size for the whole RTF document.</div>
</div>
<div class="setting">
<label for="ptrIndent">First-line indent</label>
<input type="range" id="ptrIndent" min="0" max="720" step="72" value="0">
<div class="hint">Paragraph first-line indent: <b id="ptrIndentVal">0</b> twips (720 twips = 0.5 inch).</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ptrBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to RTF
</button>
<button type="button" class="btn-pro-outline" id="ptrClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ptrProgWrap">
<div class="progress-bar"><i id="ptrProgBar"></i></div>
<div class="progress-text" id="ptrProgText">Working…</div>
</div>
<div class="results" id="ptrResults">
<p class="result-head">✅ Converted — one RTF per PDF</p>
<div class="result-summary" id="ptrSummary"></div>
<div class="result-grid" id="ptrGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('ptrShell');
  ToolPro.themeToggle(shell, document.getElementById('ptrTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var files = [];
  var listEl = document.getElementById('ptrList');
  var btn = document.getElementById('ptrBtn');
  var clearBtn = document.getElementById('ptrClear');
  var grid = document.getElementById('ptrGrid');
  var resBox = document.getElementById('ptrResults');
  var summaryEl = document.getElementById('ptrSummary');
  var progWrap = document.getElementById('ptrProgWrap');
  var progBar = document.getElementById('ptrProgBar');
  var progText = document.getElementById('ptrProgText');
  var fontSel = document.getElementById('ptrFont');
  var chips = document.getElementById('ptrPresets');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
  }
  var tBreaks = bindToggle(document.getElementById('ptrBreaks'), true);

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    fontSel.value = chip.dataset.fs;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  fontSel.addEventListener('change', function(){
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.fs === fontSel.value);
    });
  });

  ToolPro.bindSlider(
    document.getElementById('ptrIndent'),
    document.getElementById('ptrIndentVal'),
    function(v){ return Number(v).toLocaleString('en-US'); }
  );

  function refreshButtons(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  function resetResults(){
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
  }

  ToolPro.dropzone(document.getElementById('ptrDrop'), {
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
      ToolPro.toast(files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' ready — hit Convert to RTF', 'ok');
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

  function rtfEscape(s){
    var out = '';
    for(var i = 0; i < s.length; i++){
      var c = s[i], code = s.charCodeAt(i);
      if(c === '\\') out += '\\\\';
      else if(c === '{') out += '\\{';
      else if(c === '}') out += '\\}';
      else if(code >= 32 && code < 128) out += c;
      else if(code >= 0xD800 && code <= 0xDBFF && i + 1 < s.length){
        var lo = s.charCodeAt(i + 1);
        if(lo >= 0xDC00 && lo <= 0xDFFF){
          var cp = 0x10000 + ((code - 0xD800) << 10) + (lo - 0xDC00);
          var hi = Math.floor((cp - 0x10000) / 0x400) + 0xD800;
          var low2 = ((cp - 0x10000) % 0x400) + 0xDC00;
          out += '\\u' + (hi > 32767 ? hi - 65536 : hi) + '?';
          out += '\\u' + (low2 > 32767 ? low2 - 65536 : low2) + '?';
          i++;
        } else {
          out += '\\u' + (code > 32767 ? code - 65536 : code) + '?';
        }
      }
      else {
        out += '\\u' + (code > 32767 ? code - 65536 : code) + '?';
      }
    }
    return out;
  }

  function buildRtf(pagesLines, opts){
    var fs = opts.fontSize * 2; // half-points
    var fi = opts.indent > 0 ? '\\fi' + opts.indent : '';
    var parts = [];
    parts.push('{\\rtf1\\ansi\\ansicpg1252\\deff0');
    parts.push('{\\fonttbl{\\f0\\fswiss\\fcharset0 Arial;}}');
    parts.push('\\viewkind4\\uc1\\pard\\f0\\fs' + fs + '\\lang1033');
    pagesLines.forEach(function(lines, pi){
      if(pi > 0 && opts.pageBreaks) parts.push('\\page');
      if(!lines.length){
        parts.push('\\pard' + fi + '\\fs' + fs + '\\par');
      }
      lines.forEach(function(ln){
        if(ln === '') parts.push('\\pard' + fi + '\\fs' + fs + '\\par');
        else parts.push('\\pard' + fi + '\\fs' + fs + ' ' + rtfEscape(ln) + '\\par');
      });
    });
    parts.push('}');
    return parts.join('\n');
  }

  function makeCard(file, base, rtfText, stats, warn){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro dl-rtf">⬇ Download RTF</button>';
    card.querySelector('.r-name').textContent = base + '.rtf';
    card.querySelector('.r-name').title = base + '.rtf';
    card.querySelector('.r-stats').textContent = warn || stats;
    var dlBtn = card.querySelector('.dl-rtf');
    if(warn){
      dlBtn.disabled = true;
    } else {
      var url = URL.createObjectURL(new Blob([rtfText], { type: 'application/rtf;charset=utf-8' }));
      dlBtn.addEventListener('click', function(){ ToolPro.download(url, base + '.rtf'); });
    }
    grid.appendChild(card);
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true; clearBtn.disabled = true;
    resetResults();
    progWrap.classList.add('show'); progBar.style.width = '0%';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var opts = {
      pageBreaks: tBreaks.get(),
      fontSize: parseInt(fontSel.value, 10) || 12,
      indent: parseInt(document.getElementById('ptrIndent').value, 10) || 0
    };
    var okCount = 0;
    for(var fi = 0; fi < files.length; fi++){
      var file = files[fi];
      var base = file.name.replace(/\.pdf$/i, '');
      try{
        var buf = await file.arrayBuffer();
        var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
        var total = pdf.numPages;
        var pagesLines = [];
        var charCount = 0;
        for(var n = 1; n <= total; n++){
          prog(Math.round((fi + n / total) / files.length * 100), 'File ' + (fi + 1) + ' of ' + files.length + ' — reading page ' + n + ' of ' + total + '…');
          var page = await pdf.getPage(n);
          var tc = await page.getTextContent();
          var lines = pageToLines(tc);
          lines.forEach(function(ln){ charCount += ln.length; });
          pagesLines.push(lines);
          page.cleanup();
        }
        if(charCount === 0){
          makeCard(file, base, null, null, '⚠️ No text layer found — this PDF is a scan or image. Run it through our free PDF OCR tool first, then convert.');
        } else {
          var rtf = buildRtf(pagesLines, opts);
          makeCard(file, base, rtf, total + ' page' + (total === 1 ? '' : 's') + ' → ' + charCount.toLocaleString('en-US') + ' characters · ' + opts.fontSize + ' pt Arial · ' + ToolPro.fmtBytes(rtf.length) + ' RTF');
          okCount++;
        }
      }catch(err){
        makeCard(file, base, null, null, '⚠️ Could not read this PDF — ' + (err && err.name === 'PasswordException' ? 'it is password-protected.' : 'it may be damaged or encrypted.'));
      }
    }
    prog(100, 'Done');
    progWrap.classList.remove('show');
    summaryEl.textContent = okCount + ' of ' + files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' converted to RTF. The files open in Word, Google Docs, and LibreOffice — text and page order kept, fonts and images not carried over.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(okCount ? 'RTF files ready' : 'Nothing converted', okCount ? 'ok' : 'err');
    btn.disabled = false; clearBtn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in up to 10 PDFs. Each is read in your browser's memory — nothing is uploaded.
- **Step 2** — Pick a font size (or a preset), toggle page breaks between PDF pages, and set an optional first-line indent.
- **Step 3** — Hit **Convert to RTF**. The tool rebuilds the text line by line and writes a valid RTF document — backslashes, braces, and every non-ASCII character (accents, Urdu, emoji) safely Unicode-escaped.

An honest note: RTF carries the words in reading order, not the design — fonts, columns, and images don't come across. Scanned PDFs with no text layer come out empty; run those through our [free PDF OCR tool](/tools/pdf-ocr/) first.

## Everyday uses

- **Old software** — open a PDF's text in legacy word processors that can't read PDFs.
- **Resumes** — hand over an editable RTF when a recruiter can't open your PDF properly.
- **Contracts** — get agreement text into an editable format for redlining.
- **Cross-platform sharing** — RTF opens on Windows, Mac, Linux, and phones without special apps.
- **Archiving** — keep documents in a simple, future-proof text format.

## Frequently asked questions

**Will my Urdu, Arabic, or accented characters survive?**
Yes. Every character outside basic ASCII is written as a Unicode escape, so accented Latin, Arabic script, Urdu, and even emoji round-trip correctly in any RTF reader.

**Why is the RTF smaller than the PDF?**
It carries only text — the images, fonts, and layout data of the original PDF are left behind.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
