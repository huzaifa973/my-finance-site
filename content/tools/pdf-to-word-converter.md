---
title: "Free PDF to Word Converter — Turn a PDF into an Editable DOCX"
description: "Convert a PDF into an editable Word document in your browser — text rebuilt line by line with page breaks kept. Free, private, and no uploads."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Need to edit a PDF in Word? This converter reads the PDF's text layer right in your browser, rebuilds it line by line — keeping the reading order, paragraph gaps, and page breaks — and saves it as a real .docx you can open in Microsoft Word, Google Docs, or LibreOffice. Nothing is uploaded. Honest limits: it carries the words, not the design — fonts, images, and table grids don't come across, and scanned PDFs with no text layer will come out empty (run those through our [free PDF OCR tool](/tools/pdf-ocr/) first).

<div class="tool-shell" id="ptwShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to Word Converter</h2>
<p>Turn a PDF into an editable Word document — text rebuilt line by line, page breaks kept.</p>
</div>
<button type="button" class="theme-toggle" id="ptwTheme">🌙 Dark</button>
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
<div class="dropzone" id="ptwDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only · one file at a time</span>
<input type="file" id="ptwFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ptwList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="ptwBreaks">Keep page breaks</label>
<div class="toggle on" id="ptwBreaks" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Each PDF page starts on a new Word page. Turn this off to let the text flow continuously, like a normal document draft.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ptwBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Convert to Word
</button>
<button type="button" class="btn-pro-outline" id="ptwClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ptwProgWrap">
<div class="progress-bar"><i id="ptwProgBar"></i></div>
<div class="progress-text" id="ptwProgText">Working…</div>
</div>
<div class="results" id="ptwResults">
<p class="result-head">✅ Converted</p>
<div class="result-summary" id="ptwSummary"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="ptwDownload">⬇ Download Word file</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like, as often as you like. Your files never leave your device.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://unpkg.com/docx@8.5.0/build/index.umd.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('ptwShell');
  ToolPro.themeToggle(shell, document.getElementById('ptwTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var pdfFile = null, outUrl = null, outName = 'document.docx';
  var listEl = document.getElementById('ptwList');
  var btn = document.getElementById('ptwBtn');
  var clearBtn = document.getElementById('ptwClear');
  var progWrap = document.getElementById('ptwProgWrap');
  var progBar = document.getElementById('ptwProgBar');
  var progText = document.getElementById('ptwProgText');
  var resBox = document.getElementById('ptwResults');
  var summaryEl = document.getElementById('ptwSummary');
  var dlBtn = document.getElementById('ptwDownload');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
  }
  var tBreaks = bindToggle(document.getElementById('ptwBreaks'), true);

  function resetAll(){
    pdfFile = null;
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    if(outUrl){ URL.revokeObjectURL(outUrl); outUrl = null; }
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('ptwDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      pdfFile = arr[0];
      ToolPro.fileRow(listEl, pdfFile, resetAll);
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('PDF added — hit Convert to Word', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

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

  function escHtml(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function buildDocxBlob(pagesLines, useBreaks){
    var paras = [];
    pagesLines.forEach(function(lines, pi){
      if(!lines.length){
        if(pi > 0 && useBreaks) paras.push(new docx.Paragraph({ pageBreakBefore: true, children: [new docx.TextRun({ text: '' })] }));
        return;
      }
      lines.forEach(function(ln, li){
        var opts = { children: [new docx.TextRun({ text: ln })] };
        if(pi > 0 && li === 0 && useBreaks) opts.pageBreakBefore = true;
        paras.push(new docx.Paragraph(opts));
      });
    });
    if(!paras.length) paras.push(new docx.Paragraph({ children: [new docx.TextRun({ text: '' })] }));
    var doc = new docx.Document({ sections: [{ properties: {}, children: paras }] });
    return docx.Packer.toBlob(doc);
  }

  function buildFallbackDoc(pagesLines, useBreaks, base){
    var html = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word"><head><meta charset="utf-8"><title>' + escHtml(base) + '</title></head><body>';
    pagesLines.forEach(function(lines, pi){
      if(pi > 0 && useBreaks) html += '<br clear="all" style="page-break-before:always">';
      if(!lines.length) html += '<p>&nbsp;</p>';
      lines.forEach(function(ln){
        html += ln === '' ? '<p>&nbsp;</p>' : '<p>' + escHtml(ln) + '</p>';
      });
    });
    html += '</body></html>';
    return new Blob(['\ufeff', html], { type: 'application/msword' });
  }

  btn.addEventListener('click', async function(){
    if(!pdfFile) return;
    btn.disabled = true; clearBtn.disabled = true;
    resBox.classList.remove('show');
    progWrap.classList.add('show'); progBar.style.width = '0%';
    var pagesLines = [], totalChars = 0, totalPages = 0;
    try{
      var buf = await pdfFile.arrayBuffer();
      var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      totalPages = pdf.numPages;
      for(var n = 1; n <= totalPages; n++){
        progText.textContent = 'Reading page ' + n + ' of ' + totalPages + '…';
        progBar.style.width = Math.round((n - 1) / totalPages * 100) + '%';
        var page = await pdf.getPage(n);
        var tc = await page.getTextContent();
        var lines = pageToLines(tc);
        lines.forEach(function(ln){ totalChars += ln.length; });
        pagesLines.push(lines);
        page.cleanup();
      }
    }catch(err){
      progWrap.classList.remove('show');
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast(err && err.name === 'PasswordException' ? 'This PDF is password-protected — remove the password first.' : 'Could not read that PDF — it may be damaged.', 'err');
      return;
    }
    progBar.style.width = '100%';
    var useBreaks = tBreaks.get();
    var base = pdfFile.name.replace(/\.pdf$/i, '');
    if(totalChars === 0){
      progWrap.classList.remove('show');
      summaryEl.textContent = 'No text found in this PDF — it is almost certainly a scan or a photo of pages, so there is no text layer to convert. Run it through our free PDF OCR tool first to recognize the text, then convert the result.';
      dlBtn.style.display = 'none';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('No text layer found', 'err');
      return;
    }
    var lineCount = 0;
    pagesLines.forEach(function(l){ lineCount += l.length; });
    var usedFallback = false;
    try{
      if(typeof docx !== 'undefined' && docx.Document && docx.Packer && docx.Paragraph){
        var blob = await buildDocxBlob(pagesLines, useBreaks);
        outName = base + '.docx';
        if(outUrl) URL.revokeObjectURL(outUrl);
        outUrl = URL.createObjectURL(blob);
      } else {
        usedFallback = true;
      }
    }catch(e){ usedFallback = true; }
    if(usedFallback){
      var fb = buildFallbackDoc(pagesLines, useBreaks, base);
      outName = base + '.doc';
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(fb);
      ToolPro.toast('Word library unavailable — saved a compatible .doc instead', 'err');
    }
    summaryEl.textContent = 'Converted ' + totalPages + ' page' + (totalPages === 1 ? '' : 's') + ' — ' + lineCount + ' lines, ' + totalChars.toLocaleString() + ' characters of text.' +
      (usedFallback
        ? ' Saved as a Word-compatible .doc file because the .docx library could not be loaded.'
        : ' The .docx keeps the reading order, line breaks, and paragraph gaps — fonts, images, and table layouts are not carried over.');
    dlBtn.style.display = '';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false; clearBtn.disabled = false;
    ToolPro.toast('Conversion ready', 'ok');
  });

  dlBtn.addEventListener('click', function(){
    if(!outUrl) return;
    ToolPro.download(outUrl, outName);
  });
})();
</script>

## Everyday uses

- **Resumes** — your CV only exists as a PDF and a job portal wants an editable Word version.
- **Contract templates** — turn a standard agreement PDF back into a document you can reuse and edit.
- **Reports &amp; drafts** — pull a report's text into Word to rewrite, update figures, and reissue it.
- **Students** — convert assignment or handout PDFs into documents you can annotate and quote properly.
- **Old paperwork** — application forms, letters, and manuals that were only ever saved as PDFs.

## Frequently asked questions

**Why did my converted file come out almost empty?**
Because that PDF has no text layer — it is a scan or a photo of pages, so there are no words inside to convert. Run it through our free [PDF OCR tool](/tools/pdf-ocr/) first to recognize the text, then convert.

**Does it keep the original formatting, tables, and images?**
Honestly, no — it keeps the text, the line order, paragraph gaps, and (optionally) page breaks. Fonts, colors, images, and table grids are not reconstructed; tables arrive as lines of text you can reformat in Word. Think of it as a fast, faithful text conversion, not a design clone.

**What happens if the Word (.docx) library can't load?**
The tool falls back automatically to a Word-compatible .doc file with the same text and page breaks, and tells you it did. The .doc opens in Word, Google Docs, and LibreOffice just the same.
