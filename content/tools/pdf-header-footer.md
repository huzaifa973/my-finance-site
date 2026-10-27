---
title: "Add Header & Footer to PDF — Free Online PDF Header Footer Tool"
description: "Add custom header and footer text to any PDF in your browser — position, font size, page range, and skip-first-page options. Private, free, no sign-up."
category: pdf
date: 2026-10-27
draft: false
---

Headers and footers turn a loose PDF into a finished document: a company name on every page, a confidentiality note at the bottom, a document title up top. Upload a PDF, type your header and footer text, choose positions and sizes, and download the stamped file. The pdf-lib engine runs entirely in your browser, so your documents never leave your device.

<div class="tool-shell" id="phfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Header &amp; Footer</h2>
<p>Stamp headers and footers on every page — position, size, range, skip first page.</p>
</div>
<button type="button" class="theme-toggle" id="phfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add PDF files</p>
<div class="dropzone" id="phfDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="phfFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="phfList"></ul>
<div class="hint">Your files never leave your browser — stamping runs locally with pdf-lib.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Header &amp; footer settings</p>
<div class="settings-panel">
<div class="preset-row" id="phfPresets">
<button type="button" class="preset-chip active" data-mode="both">📄 Header + footer</button>
<button type="button" class="preset-chip" data-mode="header">⬆ Header only</button>
<button type="button" class="preset-chip" data-mode="footer">⬇ Footer only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="phfHeader">Header text</label>
<input type="text" id="phfHeader" class="tool-input" placeholder="e.g. Acme Corp — Quarterly Report" maxlength="120" autocomplete="off">
</div>
<div class="setting">
<label for="phfFooter">Footer text</label>
<input type="text" id="phfFooter" class="tool-input" placeholder="e.g. Confidential — Internal use only" maxlength="120" autocomplete="off">
</div>
<div class="setting">
<label for="phfSize">Font size <span id="phfSizeVal">10pt</span></label>
<input type="range" id="phfSize" min="8" max="20" value="10">
</div>
<div class="setting">
<label for="phfColor">Text color</label>
<select id="phfColor" class="tool-input">
<option value="gray" selected>Dark gray</option>
<option value="black">Black</option>
<option value="red">Dark red</option>
<option value="blue">Blue</option>
</select>
</div>
<div class="setting">
<label>Header position</label>
<div class="preset-row" id="phfHPos" style="margin-top:.3rem;">
<button type="button" class="preset-chip active" data-pos="c">Center</button>
<button type="button" class="preset-chip" data-pos="l">Left</button>
<button type="button" class="preset-chip" data-pos="r">Right</button>
</div>
</div>
<div class="setting">
<label>Footer position</label>
<div class="preset-row" id="phfFPos" style="margin-top:.3rem;">
<button type="button" class="preset-chip active" data-pos="c">Center</button>
<button type="button" class="preset-chip" data-pos="l">Left</button>
<button type="button" class="preset-chip" data-pos="r">Right</button>
</div>
</div>
<div class="setting">
<label>Page range (optional)</label>
<div style="display:flex;gap:.6rem;align-items:center;">
<input type="number" id="phfFrom" class="tool-input" placeholder="From" min="1" style="max-width:110px;">
<span>–</span>
<input type="number" id="phfTo" class="tool-input" placeholder="To" min="1" style="max-width:110px;">
</div>
<div class="hint">Leave blank to stamp every page.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="phfSkip"><span></span> Skip first page (cover pages stay clean)</label>
<label class="toggle"><input type="checkbox" id="phfPageNum"><span></span> Add page numbers to the footer</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Apply &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="phfBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Apply Header &amp; Footer
</button>
<button type="button" class="btn-pro-outline" id="phfClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="phfProgWrap">
<div class="progress-bar"><i id="phfProgBar"></i></div>
<div class="progress-text" id="phfProgText">Working…</div>
</div>
<div class="results" id="phfResults">
<p class="result-head">✅ PDFs with headers &amp; footers</p>
<div class="result-summary" id="phfSummary"></div>
<div class="result-grid" id="phfGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Stamp unlimited PDFs — everything happens in your browser.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('phfShell');
  ToolPro.themeToggle(shell, document.getElementById('phfTheme'));
  var files = [];
  var listEl = document.getElementById('phfList');
  var btn = document.getElementById('phfBtn');
  var clearBtn = document.getElementById('phfClear');
  var resBox = document.getElementById('phfResults');
  var summaryEl = document.getElementById('phfSummary');
  var gridEl = document.getElementById('phfGrid');
  var progWrap = document.getElementById('phfProgWrap');
  var progBar = document.getElementById('phfProgBar');
  var progText = document.getElementById('phfProgText');
  var mode = 'both';
  var hPos = 'c', fPos = 'c';
  var outUrls = [];
  var COLORS = { black: [0, 0, 0], red: [0.6, 0, 0], blue: [0, 0.25, 0.75], gray: [0.3, 0.3, 0.3] };
  ToolPro.bindSlider(document.getElementById('phfSize'), document.getElementById('phfSizeVal'), function(v){ return v + 'pt'; });
  function wireRow(id, set){
    document.getElementById(id).addEventListener('click', function(e){
      var chip = e.target.closest('.preset-chip'); if(!chip) return;
      document.getElementById(id).querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      set(chip.dataset.pos || chip.dataset.mode);
    });
  }
  wireRow('phfPresets', function(m){ mode = m; });
  wireRow('phfHPos', function(p){ hPos = p; });
  wireRow('phfFPos', function(p){ fPos = p; });
  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }
  ToolPro.dropzone(document.getElementById('phfDrop'), {
    multiple: true,
    accept: 'application/pdf',
    onFiles: function(arr){
      var added = 0;
      arr.forEach(function(f){
        if(!isPdf(f)){ ToolPro.toast(f.name + ' is not a PDF — skipped.', 'err'); return; }
        if(files.some(function(p){ return p.name === f.name && p.size === f.size; })) return;
        files.push(f);
        ToolPro.fileRow(listEl, f, function(){
          files = files.filter(function(p){ return p !== f; });
          refresh();
        });
        added++;
      });
      if(added) ToolPro.toast(added + ' PDF' + (added > 1 ? 's' : '') + ' added', 'ok');
      resBox.classList.remove('show');
      refresh();
    }
  });
  function refresh(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    outUrls.forEach(function(u){ URL.revokeObjectURL(u); }); outUrls = [];
    resBox.classList.remove('show');
    refresh();
  });
  function readBuf(f){
    return new Promise(function(res, rej){
      var r = new FileReader();
      r.onload = function(){ res(r.result); };
      r.onerror = function(){ rej(new Error('Could not read ' + f.name)); };
      r.readAsArrayBuffer(f);
    });
  }
  function xFor(pos, pw, tw){
    if(pos === 'l') return 36;
    if(pos === 'r') return pw - 36 - tw;
    return (pw - tw) / 2;
  }
  btn.addEventListener('click', async function(){
    if(!files.length){ ToolPro.toast('Add at least one PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    var headerText = document.getElementById('phfHeader').value;
    var footerText = document.getElementById('phfFooter').value;
    if(mode !== 'footer' && !headerText.trim() && mode !== 'header'){ ToolPro.toast('Enter header text, footer text, or both.', 'err'); return; }
    if(mode === 'header' && !headerText.trim()){ ToolPro.toast('Enter header text.', 'err'); return; }
    if(mode === 'footer' && !footerText.trim()){ ToolPro.toast('Enter footer text.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var size = parseInt(document.getElementById('phfSize').value, 10) || 10;
    var col = COLORS[document.getElementById('phfColor').value] || COLORS.gray;
    var from = parseInt(document.getElementById('phfFrom').value, 10) || 1;
    var to = parseInt(document.getElementById('phfTo').value, 10) || Infinity;
    var skipFirst = document.getElementById('phfSkip').checked;
    var addNums = document.getElementById('phfPageNum').checked;
    if(from < 1) from = 1;
    var totalStamped = 0;
    try {
      for(var fi = 0; fi < files.length; fi++){
        var f = files[fi];
        progText.textContent = 'Stamping ' + f.name + ' (' + (fi + 1) + '/' + files.length + ')…';
        progBar.style.width = Math.round((fi / files.length) * 100) + '%';
        var buf = await readBuf(f);
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        var font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
        var pageCount = doc.getPageCount();
        var rFrom = Math.min(from, pageCount), rTo = Math.min(to, pageCount);
        for(var pi = 0; pi < pageCount; pi++){
          var pageNum = pi + 1;
          if(pageNum < rFrom || pageNum > rTo) continue;
          if(skipFirst && pageNum === 1) continue;
          var page = doc.getPage(pi);
          var pw = page.getWidth(), ph = page.getHeight();
          var rgb = PDFLib.rgb(col[0], col[1], col[2]);
          if(mode !== 'footer' && headerText.trim()){
            var ht = headerText.trim();
            var tw = font.widthOfTextAtSize(ht, size);
            page.drawText(ht, { x: xFor(hPos, pw, tw), y: ph - 36 - size, size: size, font: font, color: rgb, opacity: 0.9 });
          }
          if(mode !== 'header'){
            var ft = footerText.trim();
            if(addNums) ft = (ft ? ft + '  ·  ' : '') + 'Page ' + pageNum + ' of ' + pageCount;
            if(ft){
              var fw = font.widthOfTextAtSize(ft, size);
              page.drawText(ft, { x: xFor(fPos, pw, fw), y: 36, size: size, font: font, color: rgb, opacity: 0.9 });
            }
          }
          totalStamped++;
          progBar.style.width = Math.round(((fi + (pi + 1) / pageCount) / files.length) * 100) + '%';
        }
        var bytes = await doc.save();
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        outUrls.push(url);
        var name = f.name.replace(/\.pdf$/i, '') + '-header-footer.pdf';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-name').title = name;
        card.querySelector('.r-stats').textContent = pageCount + ' pages · ' + ToolPro.fmtBytes(bytes.length);
        (function(u, nm){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
        })(url, name);
        gridEl.appendChild(card);
      }
      progWrap.classList.remove('show');
      summaryEl.textContent = '🎉 ' + totalStamped + ' pages stamped across ' + files.length + ' file' + (files.length > 1 ? 's' : '') + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Headers & footers applied', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) + '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Stamping failed', 'err');
    }
    btn.disabled = false;
    refresh();
  });
  refresh();
})();
</script>

## How it works

Drop in your PDFs, type a header and/or footer, and set the position (left, center, or right), font size, and color. Optionally limit stamping to a page range, skip the first page so cover pages stay clean, or add automatic page numbers to the footer. Hit **Apply Header & Footer** and each page gets your text drawn with the pdf-lib engine in your browser — no upload, no account.

## Everyday uses

- **Reports and proposals** — put your company name and document title on every page.
- **Legal and compliance** — add "Confidential" footers to document sets.
- **Invoices and contracts** — brand every page consistently before sending.
- **Course materials** — header the course name, footer the page numbers.
- **Archives** — label digitized files with their source and date.

**Privacy note:** stamping happens entirely in your browser — your documents never leave your device.
