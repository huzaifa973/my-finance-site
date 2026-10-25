---
title: "Free Bates Numbering Tool — Stamp PDFs with Bates Labels"
description: "Add sequential Bates stamps (e.g. ABC000123) to every page of your PDFs — custom prefix, start number, zero-padding, position, size, and color. In-browser, private, free."
category: pdf
date: 2026-10-24
draft: false
---

Bates numbering gives every page of a document set a unique sequential label — ABC000001, ABC000002, and so on — so legal teams, auditors, and archivists can cite exact pages. Drop in one or more PDFs, set your prefix, start number, and zero-padding, choose where the stamp sits, and download. Numbering can continue across all your files or restart per file. The pdf-lib engine runs entirely in your browser, so your documents never leave your device.

<div class="tool-shell" id="bnShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6s1.5.67 1.5 1.5S8.33 9 7.5 9zm4.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9C11.17 9 10.5 8.33 10.5 7.5S11.17 6 12 6s1.5.67 1.5 1.5S12.83 9 12 9zm4.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Bates Numbering</h2>
<p>Sequential page stamps — prefix, padding, position, color — all in-browser.</p>
</div>
<button type="button" class="theme-toggle" id="bnTheme">🌙 Dark</button>
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
<div class="setting">
<label>PDF files</label>
<div class="dropzone" id="bnDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="bnFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="bnList"></ul>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Bates stamp settings</p>
<div class="settings-panel">
<div class="preset-row" id="bnPresets">
<button type="button" class="preset-chip active" data-prefix="ABC-" data-start="1" data-digits="6">⚖️ Legal — ABC-000001</button>
<button type="button" class="preset-chip" data-prefix="DEF" data-start="1" data-digits="4">🔍 Discovery — DEF0001</button>
<button type="button" class="preset-chip" data-prefix="" data-start="1" data-digits="4">🔢 Simple — 0001</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="bnPrefix">Prefix</label>
<input type="text" id="bnPrefix" class="tool-input" value="ABC-" maxlength="20" autocomplete="off">
</div>
<div class="setting">
<label for="bnStart">Start number</label>
<input type="number" id="bnStart" class="tool-input" value="1" min="0" max="99999999">
</div>
<div class="setting">
<label for="bnDigits">Zero-padding — digits <span id="bnDigitsVal">6</span></label>
<input type="range" id="bnDigits" min="1" max="8" value="6">
<div class="hint">6 digits → 000001, 000002… Preview: <b id="bnPreview">ABC-000001</b></div>
</div>
<div class="setting">
<label for="bnSize">Font size <span id="bnSizeVal">10pt</span></label>
<input type="range" id="bnSize" min="8" max="24" value="10">
</div>
<div class="setting">
<label for="bnColor">Stamp color</label>
<select id="bnColor" class="tool-input">
<option value="black" selected>Black</option>
<option value="red">Dark red</option>
<option value="blue">Blue</option>
<option value="gray">Dark gray</option>
</select>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Continue numbering across files</span><label class="toggle"><input type="checkbox" id="bnAcross" checked><span class="track"></span></label></div>
<div class="hint">On: file 2 continues where file 1 ended. Off: every file restarts at the start number.</div>
</div>
</div>
<div class="settings-grid">
<div class="setting">
<label>Stamp position</label>
<div class="preset-row" id="bnPos" style="margin-top:.3rem;">
<button type="button" class="preset-chip active" data-pos="br">↘ Bottom right</button>
<button type="button" class="preset-chip" data-pos="bc">⬇ Bottom center</button>
<button type="button" class="preset-chip" data-pos="bl">↙ Bottom left</button>
<button type="button" class="preset-chip" data-pos="tr">↗ Top right</button>
<button type="button" class="preset-chip" data-pos="tc">⬆ Top center</button>
<button type="button" class="preset-chip" data-pos="tl">↖ Top left</button>
</div>
</div>
<div class="setting">
<label>Page range (optional)</label>
<div style="display:flex;gap:.6rem;align-items:center;">
<input type="number" id="bnFrom" class="tool-input" placeholder="From" min="1" style="max-width:110px;">
<span>–</span>
<input type="number" id="bnTo" class="tool-input" placeholder="To" min="1" style="max-width:110px;">
</div>
<div class="hint">Leave blank to stamp every page.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Apply &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="bnBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Apply Bates Numbering
</button>
<button type="button" class="btn-pro-outline" id="bnClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="bnProgWrap">
<div class="progress-bar"><i id="bnProgBar"></i></div>
<div class="progress-text" id="bnProgText">Working…</div>
</div>
<div class="results" id="bnResults">
<p class="result-head">✅ Bates-stamped PDFs</p>
<div class="result-summary" id="bnSummary"></div>
<div class="result-grid" id="bnGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Stamp unlimited document sets — everything happens in your browser.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('bnShell');
  ToolPro.themeToggle(shell, document.getElementById('bnTheme'));

  var files = [];
  var listEl = document.getElementById('bnList');
  var btn = document.getElementById('bnBtn');
  var clearBtn = document.getElementById('bnClear');
  var presets = document.getElementById('bnPresets');
  var posRow = document.getElementById('bnPos');
  var resBox = document.getElementById('bnResults');
  var summaryEl = document.getElementById('bnSummary');
  var gridEl = document.getElementById('bnGrid');
  var progWrap = document.getElementById('bnProgWrap');
  var progBar = document.getElementById('bnProgBar');
  var progText = document.getElementById('bnProgText');
  var prefixEl = document.getElementById('bnPrefix');
  var startEl = document.getElementById('bnStart');
  var previewEl = document.getElementById('bnPreview');
  var pos = 'br';
  var outUrls = [];

  var COLORS = {
    black: [0, 0, 0],
    red: [0.6, 0, 0],
    blue: [0, 0.25, 0.75],
    gray: [0.3, 0.3, 0.3]
  };

  ToolPro.bindSlider(document.getElementById('bnDigits'), document.getElementById('bnDigitsVal'), function(v){ return v; });
  ToolPro.bindSlider(document.getElementById('bnSize'), document.getElementById('bnSizeVal'), function(v){ return v + 'pt'; });

  function labelFor(n){
    var d = parseInt(document.getElementById('bnDigits').value, 10) || 1;
    return prefixEl.value + String(n).padStart(d, '0');
  }
  function updatePreview(){
    previewEl.textContent = labelFor(parseInt(startEl.value, 10) || 0);
  }
  [prefixEl, startEl].forEach(function(el){ el.addEventListener('input', updatePreview); });
  document.getElementById('bnDigits').addEventListener('input', updatePreview);
  updatePreview();

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    prefixEl.value = chip.dataset.prefix;
    startEl.value = chip.dataset.start;
    document.getElementById('bnDigits').value = chip.dataset.digits;
    document.getElementById('bnDigitsVal').textContent = chip.dataset.digits;
    updatePreview();
    ToolPro.toast('Style: ' + chip.textContent.trim());
  });

  posRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    posRow.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    pos = chip.dataset.pos;
    ToolPro.toast('Position: ' + chip.textContent.trim());
  });

  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }

  ToolPro.dropzone(document.getElementById('bnDrop'), {
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
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> ' +
      (files.length ? 'Stamp ' + files.length + ' PDF' + (files.length > 1 ? 's' : '') : 'Apply Bates Numbering');
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

  btn.addEventListener('click', async function(){
    if(!files.length){ ToolPro.toast('Add at least one PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var startNum = Math.max(0, parseInt(startEl.value, 10) || 0);
    var size = parseInt(document.getElementById('bnSize').value, 10) || 10;
    var across = document.getElementById('bnAcross').checked;
    var col = COLORS[document.getElementById('bnColor').value] || COLORS.black;
    var from = parseInt(document.getElementById('bnFrom').value, 10) || 1;
    var to = parseInt(document.getElementById('bnTo').value, 10) || Infinity;
    if(from < 1) from = 1;
    var MARGIN = 36;
    var n = startNum;
    var totalStamped = 0, failed = 0;
    try {
      var font = null;
      for(var fi = 0; fi < files.length; fi++){
        var f = files[fi];
        progText.textContent = 'Stamping ' + f.name + ' (' + (fi + 1) + '/' + files.length + ')…';
        progBar.style.width = Math.round((fi / files.length) * 100) + '%';
        var buf = await readBuf(f);
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        if(!font) font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
        if(!across) n = startNum;
        var pageCount = doc.getPageCount();
        var rFrom = Math.min(from, pageCount), rTo = Math.min(to, pageCount);
        for(var pi = 0; pi < pageCount; pi++){
          var pageNum = pi + 1;
          if(pageNum >= rFrom && pageNum <= rTo){
            var label = labelFor(n++);
            var page = doc.getPage(pi);
            var pw = page.getWidth(), ph = page.getHeight();
            var tw = font.widthOfTextAtSize(label, size);
            var x, y;
            if(pos === 'br'){ x = pw - MARGIN - tw; y = MARGIN; }
            else if(pos === 'bc'){ x = (pw - tw) / 2; y = MARGIN; }
            else if(pos === 'bl'){ x = MARGIN; y = MARGIN; }
            else if(pos === 'tr'){ x = pw - MARGIN - tw; y = ph - MARGIN - size; }
            else if(pos === 'tc'){ x = (pw - tw) / 2; y = ph - MARGIN - size; }
            else { x = MARGIN; y = ph - MARGIN - size; }
            page.drawText(label, { x: x, y: y, size: size, font: font, color: PDFLib.rgb(col[0], col[1], col[2]), opacity: 0.9 });
            totalStamped++;
          }
          progBar.style.width = Math.round(((fi + (pi + 1) / pageCount) / files.length) * 100) + '%';
        }
        var bytes = await doc.save();
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        outUrls.push(url);
        var name = f.name.replace(/\.pdf$/i, '') + '-bates.pdf';
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
      var lastLabel = labelFor(n - 1);
      summaryEl.textContent = '🎉 ' + totalStamped + ' pages stamped across ' + files.length + ' file' + (files.length > 1 ? 's' : '') + ' — last label: ' + lastLabel + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Bates stamps applied', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) + '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Bates stamping failed', 'err');
      failed++;
    }
    btn.disabled = false;
    refresh();
  });

  refresh();
})();
</script>

## How it works

Drop in your PDFs, pick a preset (Legal, Discovery, or Simple) or set your own prefix, start number, and zero-padding — the live preview shows exactly what the next label looks like. Choose the stamp position, size, and color, optionally limit stamping to a page range, then hit **Apply Bates Numbering**. Each page gets a unique sequential label drawn with the pdf-lib engine in your browser. Turn on "Continue numbering across files" to number a whole document set as one sequence.

**Convention:** most legal Bates stamps use a 2–4 letter prefix, a hyphen, and 6 zero-padded digits — e.g. ABC-000001.

## Everyday uses

- **Litigation** — number discovery productions so every page is citable.
- **Audits** — give workpaper sets unique sequential references.
- **Archives** — stamp digitized collections with permanent page IDs.
- **Real estate closings** — label large document packages page by page.
- **Researchers** — number scanned source sets for exact citations.

**Privacy note:** stamping happens entirely in your browser with pdf-lib — your documents never leave your device.
