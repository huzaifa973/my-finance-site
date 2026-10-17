---
title: "PDF Booklet Maker — Reorder Pages for Print-and-Fold Booklets"
description: "Turn any PDF into a printable booklet: pages reordered into fold signatures, two-up per sheet, ready for double-sided printing. Free, in-browser, no sign-up."
category: pdf
date: 2026-10-17
draft: false
---

Want to print a PDF as a real booklet — fold it in half and staple the spine? The pages need to be reordered into "signatures" so that everything lands in the right place after folding. Upload your PDF and this tool rearranges the pages into proper booklet order, places two pages side by side on each sheet, and gives you a print-ready file. Your document never leaves your browser.

<div class="tool-shell" id="pbmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Booklet Maker</h2>
<p>Reorder any PDF into printable booklet signatures — 2-up sheets, fold order, ready to staple.</p>
</div>
<button type="button" class="theme-toggle" id="pbmTheme">🌙 Dark</button>
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
<div class="dropzone" id="pbmDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pbmFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pbmList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Booklet settings</p>
<div class="settings-panel">
<div class="preset-row" id="pbmPresets">
<button type="button" class="preset-chip active" data-sig="all">📖 Whole document — one signature</button>
<button type="button" class="preset-chip" data-sig="8">📚 8-page signatures</button>
<button type="button" class="preset-chip" data-sig="16">📚 16-page signatures</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pbmSig">Signature size</label>
<select id="pbmSig">
<option value="all" selected>Whole document as one signature</option>
<option value="8">8 pages per signature</option>
<option value="16">16 pages per signature</option>
</select>
<div class="hint">Small signatures fold flatter for thick booklets; one signature is simplest for short documents.</div>
</div>
<div class="setting">
<label for="pbmBind">Binding edge</label>
<select id="pbmBind">
<option value="left" selected>Left edge — standard books</option>
<option value="right">Right edge — right-to-left books</option>
</select>
<div class="hint">Right-edge binding suits Arabic, Hebrew, and manga-style layouts.</div>
</div>
<div class="setting">
<label>Booklet plan</label>
<div class="hint" id="pbmPlan">Upload a PDF to see the imposition plan.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pbmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Build Booklet PDF
</button>
<button type="button" class="btn-pro-outline" id="pbmClear" disabled>Remove PDF</button>
</div>
<div class="progress-wrap" id="pbmProgWrap">
<div class="progress-bar"><i id="pbmProgBar"></i></div>
<div class="progress-text" id="pbmProgText">Working…</div>
</div>
<div class="results" id="pbmResults">
<p class="result-head">✅ Done — your booklet PDF</p>
<div class="result-summary" id="pbmSummary"></div>
<div class="result-grid" id="pbmGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — build as many booklets as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pbmShell');
  ToolPro.themeToggle(shell, document.getElementById('pbmTheme'));

  var file = null, pdfBytes = null, numPages = 0;
  var btn = document.getElementById('pbmBtn');
  var clearBtn = document.getElementById('pbmClear');
  var listEl = document.getElementById('pbmList');
  var presets = document.getElementById('pbmPresets');
  var sigSel = document.getElementById('pbmSig');

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
    updatePlan();
  }

  ToolPro.dropzone(document.getElementById('pbmDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: async function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ resetAll(); });
      document.getElementById('pbmResults').classList.remove('show');
      try{
        pdfBytes = new Uint8Array(await file.arrayBuffer());
        var doc = await PDFLib.PDFDocument.load(pdfBytes, { ignoreEncryption: true });
        numPages = doc.getPageCount();
        ToolPro.toast(numPages + (numPages === 1 ? ' page' : ' pages') + ' loaded', 'ok');
      }catch(e){
        numPages = 0;
        ToolPro.toast('Could not read this PDF — it may be encrypted or damaged.', 'err');
      }
      refreshButtons();
    }
  });

  function resetAll(){
    file = null; pdfBytes = null; numPages = 0;
    listEl.innerHTML = '';
    document.getElementById('pbmResults').classList.remove('show');
    refreshButtons();
  }
  clearBtn.addEventListener('click', resetAll);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    sigSel.value = chip.dataset.sig;
    updatePlan();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  sigSel.addEventListener('change', function(){
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.sig === sigSel.value);
    });
    updatePlan();
  });
  document.getElementById('pbmBind').addEventListener('change', updatePlan);

  // imposition order for one signature of S pages (local 1-indexed), returns pairs [left, right] (1-indexed, -1 = blank)
  function signatureOrder(S, bindRight){
    var pairs = [];
    for(var i = 0; i < S / 4; i++){
      var a = S - 4 * i, b = 4 * i + 1, c = 4 * i + 2, d = S - 4 * i - 1;
      if(bindRight){ pairs.push([b, a]); pairs.push([d, c]); }
      else { pairs.push([a, b]); pairs.push([c, d]); }
    }
    return pairs;
  }

  function computePlan(){
    if(!numPages) return null;
    var sigVal = sigSel.value;
    var S = sigVal === 'all' ? Math.ceil(numPages / 4) * 4 : parseInt(sigVal, 10);
    if(S < 4) S = 4;
    var M = Math.ceil(numPages / S) * S;
    var sheets = M / 2;
    var bindRight = document.getElementById('pbmBind').value === 'right';
    var preview = [];
    for(var g = 0; g < M / S && preview.length < 4; g++){
      var pairs = signatureOrder(S, bindRight);
      for(var k = 0; k < pairs.length && preview.length < 4; k++){
        var L = pairs[k][0] + g * S, R = pairs[k][1] + g * S;
        preview.push((L > numPages ? 'blank' : L) + ' | ' + (R > numPages ? 'blank' : R));
      }
    }
    return { S: S, M: M, blanks: M - numPages, sheets: sheets, preview: preview };
  }

  function updatePlan(){
    var el = document.getElementById('pbmPlan');
    if(!numPages){ el.textContent = 'Upload a PDF to see the imposition plan.'; return; }
    var p = computePlan();
    el.innerHTML = '📄 ' + numPages + ' pages → padded to ' + p.M + ' (' + p.blanks + ' blank) · ' +
      p.sheets + ' sheets of ' + p.S + '-page signatures.<br>First sheets (left | right): ' +
      p.preview.join(' &nbsp;·&nbsp; ');
  }

  btn.addEventListener('click', async function(){
    if(!file || !pdfBytes) return;
    var progWrap = document.getElementById('pbmProgWrap');
    var progBar = document.getElementById('pbmProgBar');
    var progText = document.getElementById('pbmProgText');
    var grid = document.getElementById('pbmGrid');
    var resBox = document.getElementById('pbmResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }
    try{
      prog(10, 'Loading source PDF…');
      var src = await PDFLib.PDFDocument.load(pdfBytes.slice(), { ignoreEncryption: true });
      var plan = computePlan();
      var p0 = src.getPage(0);
      var pw = p0.getWidth(), ph = p0.getHeight();
      var out = await PDFLib.PDFDocument.create();
      var bindRight = document.getElementById('pbmBind').value === 'right';
      var embedded = {};
      async function emb(idx){
        if(idx < 0 || idx >= numPages) return null;
        if(!embedded[idx]) embedded[idx] = await out.embedPage(src.getPage(idx));
        return embedded[idx];
      }
      var sheetNo = 0;
      for(var g = 0; g < plan.M / plan.S; g++){
        var pairs = signatureOrder(plan.S, bindRight);
        for(var k = 0; k < pairs.length; k++){
          sheetNo++;
          prog(10 + Math.round(sheetNo / plan.sheets * 80), 'Imposing sheet ' + sheetNo + ' of ' + plan.sheets + '…');
          var sheet = out.addPage([pw * 2, ph]);
          var li = pairs[k][0] + g * plan.S - 1; // to 0-indexed, may be blank
          var ri = pairs[k][1] + g * plan.S - 1;
          if(li >= numPages) li = -1;
          if(ri >= numPages) ri = -1;
          var le = await emb(li), re = await emb(ri);
          if(le) sheet.drawPage(le, { x: 0, y: 0, width: pw, height: ph });
          if(re) sheet.drawPage(re, { x: pw, y: 0, width: pw, height: ph });
        }
      }
      prog(95, 'Saving booklet…');
      var bytes = await out.save({ useObjectStreams: true, addDefaultPage: false });
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-booklet.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        '📖 ' + plan.sheets + ' sheets · ' + plan.M + ' imposed pages (' + plan.blanks + ' blank) · ' +
        ToolPro.fmtBytes(bytes.length) + '<br>🖨️ Print double-sided, <b>flip on short edge</b>, then fold &amp; staple the spine.';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pbmSummary').textContent =
        '🎉 Booklet built — ' + numPages + ' pages imposed into ' + plan.sheets + ' print-ready sheets.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Booklet PDF ready', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Booklet failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in one PDF — zines, manuals, programs, anything you want as a booklet.
- **Step 2** — Choose the signature size (whole document, or 8/16-page signatures for thicker booklets) and the binding edge. The tool shows the full imposition plan — padded pages, sheet count, and the first sheets' left|right order.
- **Step 3** — Hit "Build Booklet PDF" to get a print-ready file with two pages per sheet in fold order. Print double-sided flipping on the short edge, fold the stack in half, and staple the spine. Your file never leaves your browser.

## Everyday uses

- **Event organizers** — print programs and schedules as proper folded booklets.
- **Teachers** — turn worksheets into take-home booklets students actually keep.
- **Zine makers** — impose your zine pages for home printing without layout software.
- **Small businesses** — menus, catalogs, and lookbooks as saddle-stitched booklets.

**Rule of thumb:** page counts are padded to multiples of 4 with blanks — an 11-page document becomes 12 with one blank at the end. Keep important content off the very last pages if blanks bother you.

**Print tip:** after downloading, print double-sided with "flip on short edge", fold each signature in half with the page numbers facing out, nest them in order, then staple at the spine.
