---
title: "Add Blank Pages to PDF Online — Free"
description: "Insert blank pages anywhere in a PDF — at the start, end, or after any page. Pick A4, Letter, or match the document size. Free, private, no sign-up."
category: pdf
date: 2026-10-19
draft: false
---

Need room for handwritten notes, separator sheets, or a title page in an existing PDF? This free tool inserts up to 50 blank pages exactly where you want them — at the start, at the end, or right after any page — in A4, Letter, or the same size as your document. Everything runs locally in your browser; your file never leaves your device.

<div class="tool-shell" id="abpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Add Blank Pages to PDF</h2>
<p>Insert blank pages anywhere in your PDF — start, end, or after any page. Free &amp; private.</p>
</div>
<button type="button" class="theme-toggle" id="abpTheme">🌙 Dark</button>
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
<div class="dropzone" id="abpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one .pdf file at a time</span>
<input type="file" id="abpFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="abpList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Page settings</p>
<div class="settings-panel">
<div class="preset-row" id="abpPresets">
<button type="button" class="preset-chip active" data-pos="end" data-size="match">📄 Append at end — match size</button>
<button type="button" class="preset-chip" data-pos="start" data-size="match">⏮️ Insert at start — match size</button>
<button type="button" class="preset-chip" data-pos="end" data-size="a4">📐 Append at end — A4</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="abpCount">Pages to add: <span class="val" id="abpCountVal">1 page</span></label>
<input type="range" id="abpCount" min="1" max="50" value="1">
<div class="hint">Add 1 to 50 blank pages at once.</div>
</div>
<div class="setting">
<label for="abpPos">Insert position</label>
<select id="abpPos">
<option value="start">At the start</option>
<option value="end" selected>At the end</option>
<option value="after">After page N…</option>
</select>
<div class="hint">Choose where the blank pages go.</div>
</div>
<div class="setting" id="abpAfterWrap" style="display:none">
<label for="abpAfter">After page number</label>
<input type="number" id="abpAfter" min="1" value="1">
<div class="hint" id="abpAfterHint">Enter a page number (1–…).&nbsp;</div>
</div>
<div class="setting">
<label for="abpSize">Blank page size</label>
<select id="abpSize">
<option value="match" selected>Match document (first page)</option>
<option value="a4">A4</option>
<option value="letter">US Letter</option>
</select>
<div class="hint">Match keeps everything uniform; A4/Letter set a standard size.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Add pages &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="abpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
Add Pages
</button>
<button type="button" class="btn-pro-outline" id="abpClear" disabled>Remove file</button>
</div>
<div class="progress-wrap" id="abpProgWrap">
<div class="progress-bar"><i id="abpProgBar"></i></div>
<div class="progress-text" id="abpProgText">Working…</div>
</div>
<div class="results" id="abpResults">
<p class="result-head">✅ Done — your updated PDF</p>
<div class="result-summary" id="abpSummary"></div>
<div class="result-grid" id="abpGridOut"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — add blank pages to as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('abpShell');
  ToolPro.themeToggle(shell, document.getElementById('abpTheme'));

  var file = null, pageCount = 0, origBytes = null;
  var listEl = document.getElementById('abpList');
  var btn = document.getElementById('abpBtn');
  var clearBtn = document.getElementById('abpClear');
  var countRange = document.getElementById('abpCount');
  var countVal = document.getElementById('abpCountVal');
  var posSel = document.getElementById('abpPos');
  var sizeSel = document.getElementById('abpSize');
  var afterWrap = document.getElementById('abpAfterWrap');
  var afterInput = document.getElementById('abpAfter');
  var afterHint = document.getElementById('abpAfterHint');
  var presets = document.getElementById('abpPresets');

  ToolPro.bindSlider(countRange, countVal, function(v){
    v = parseInt(v, 10);
    return v + (v === 1 ? ' page' : ' pages');
  });

  var SIZES = {
    a4: [595.28, 841.89],
    letter: [612, 792]
  };

  function refreshButtons(){
    var count = parseInt(countRange.value, 10) || 0;
    btn.disabled = !(file && count >= 1 && count <= 50);
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg> Add ' +
      (count ? count + (count === 1 ? ' Page' : ' Pages') : 'Pages');
    clearBtn.disabled = !file;
  }

  function syncPos(){
    var show = posSel.value === 'after';
    afterWrap.style.display = show ? '' : 'none';
  }
  posSel.addEventListener('change', syncPos);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    posSel.value = chip.dataset.pos;
    sizeSel.value = chip.dataset.size;
    syncPos();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function loadPdf(f){
    var reader = new FileReader();
    reader.onload = function(){
      origBytes = new Uint8Array(reader.result);
      PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true }).then(function(doc){
        pageCount = doc.getPageCount();
        afterInput.max = pageCount;
        afterHint.textContent = 'Enter a page number (1–' + pageCount + ').';
        if(parseInt(afterInput.value, 10) > pageCount) afterInput.value = pageCount;
        document.getElementById('abpResults').classList.remove('show');
        refreshButtons();
        ToolPro.toast(pageCount + ' pages loaded — choose where to insert', 'ok');
      }).catch(function(){ ToolPro.toast('Could not read this PDF (it may be encrypted).', 'err'); });
    };
    reader.readAsArrayBuffer(f);
  }

  ToolPro.dropzone(document.getElementById('abpDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[arr.length - 1];
      listEl.innerHTML = '';
      file = f;
      var row = ToolPro.fileRow(listEl, f, function(){ file = null; pageCount = 0; origBytes = null; refreshButtons(); });
      loadPdf(f);
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; pageCount = 0; origBytes = null;
    listEl.innerHTML = '';
    document.getElementById('abpResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file || !pageCount) return;
    var count = parseInt(countRange.value, 10);
    if(!(count >= 1 && count <= 50)){ ToolPro.toast('Pick 1–50 pages to add.', 'err'); return; }
    var pos = posSel.value;
    var afterN = parseInt(afterInput.value, 10);
    if(pos === 'after'){
      if(isNaN(afterN) || afterN < 1){ ToolPro.toast('Enter a valid page number (1 or higher).', 'err'); return; }
      if(afterN > pageCount){ ToolPro.toast('That page is past the end — using the last page (' + pageCount + ').', 'err'); afterN = pageCount; afterInput.value = pageCount; }
    }
    var progWrap = document.getElementById('abpProgWrap');
    var progBar = document.getElementById('abpProgBar');
    var progText = document.getElementById('abpProgText');
    var outGrid = document.getElementById('abpGridOut');
    var resBox = document.getElementById('abpResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); outGrid.innerHTML = '';
    progText.textContent = 'Loading PDF…';
    try{
      var doc = await PDFLib.PDFDocument.load(origBytes.slice(), { ignoreEncryption: true });
      var size = sizeSel.value === 'match'
        ? (function(){ var s = doc.getPage(0).getSize(); return [s.width, s.height]; })()
        : SIZES[sizeSel.value];
      var insertAt = pos === 'start' ? 0 : (pos === 'end' ? doc.getPageCount() : afterN);
      for(var i = 0; i < count; i++){
        doc.insertPage(insertAt, size);
        progBar.style.width = Math.round((i + 1) / count * 100) + '%';
        progText.textContent = 'Inserting page ' + (i + 1) + ' of ' + count + '…';
      }
      var out = await doc.save({ useObjectStreams: true });
      var base = file.name.replace(/\.pdf$/i, '');
      var posLabel = pos === 'start' ? 'at the start' : (pos === 'end' ? 'at the end' : 'after page ' + afterN);
      var newCount = doc.getPageCount();
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-name').textContent = base + '-with-blank-pages.pdf';
      card.querySelector('.r-name').title = base + '-with-blank-pages.pdf';
      card.querySelector('.r-stats').innerHTML =
        'Added <b>' + count + (count === 1 ? ' page' : ' pages') + '</b> ' + posLabel + ' · ' +
        pageCount + ' → <b>' + newCount + ' pages</b> · ' +
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(out.length) + '</b>';
      (function(bytes, name){
        card.querySelector('button').addEventListener('click', function(){
          ToolPro.download(URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), name);
        });
      })(out, base + '-with-blank-pages.pdf');
      outGrid.appendChild(card);
      document.getElementById('abpSummary').textContent =
        '🎉 Added ' + count + (count === 1 ? ' blank page' : ' blank pages') + ' ' + posLabel +
        ' — your new PDF has ' + newCount + ' pages.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Blank pages added', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Something went wrong while updating the PDF.', 'err');
    }
    refreshButtons();
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDF. It's read straight into your browser — nothing is uploaded.
- **Step 2** — Pick how many blank pages to add (1–50), where they go (start, end, or after a specific page), and their size (A4, US Letter, or matched to your document). One-click presets cover the common cases.
- **Step 3** — Hit **Add Pages**. The blank pages are inserted into a fresh copy of your document, and you download the result.

Your original file is never touched — the tool always creates a new file, so you can re-do it if you change your mind.

## Everyday uses

- **Students** — add blank pages between lecture slides for handwritten revision notes.
- **Meeting organizers** — insert separator sheets between agenda sections before printing a packet.
- **Freelancers** — pad a proposal PDF with note pages for a client's markups.
- **Planners** — append blank pages to a digital journal or tracker PDF for extra writing room.
- **Teachers** — add answer sheets at the end of a worksheet PDF before sharing it with a class.

Your privacy is guaranteed: your files never leave your browser — everything is processed locally on your device, and nothing is uploaded or stored anywhere.
