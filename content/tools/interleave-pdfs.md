---
title: "Free Interleave PDFs — Alternate Pages A-B-A-B Online"
description: "Interleave the pages of two PDFs — A1, B1, A2, B2 — right in your browser with pdf-lib. Free forever, private, no uploads."
category: pdf
date: 2026-10-23
draft: false
---

Interleaving is for when two PDFs belong together page by page — original and translation, question sheet and answer key, before and after scans, or two card decks that must alternate. Drop in PDF A and PDF B and this tool weaves their pages A1, B1, A2, B2… into a single document. If one PDF is longer, its leftover pages are appended at the end. Everything runs in your browser; your files never leave your device.

<div class="tool-shell" id="ilpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Interleave PDFs</h2>
<p>Weave two PDFs together page by page — A1, B1, A2, B2 — all in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="ilpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add PDF A and PDF B</p>
<div class="setting">
<label>PDF A</label>
<div class="dropzone" id="ilpDropA">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDF A here</strong>
<span>or click to browse — one PDF</span>
<input type="file" id="ilpFileA" accept="application/pdf">
</div>
<ul class="file-list" id="ilpListA"></ul>
</div>
<div class="setting">
<label>PDF B</label>
<div class="dropzone" id="ilpDropB">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDF B here</strong>
<span>or click to browse — one PDF</span>
<input type="file" id="ilpFileB" accept="application/pdf">
</div>
<ul class="file-list" id="ilpListB"></ul>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Interleave settings</p>
<div class="settings-panel">
<div class="preset-row" id="ilpPresets">
<button type="button" class="preset-chip active" data-first="A">🔤 A first — A1, B1, A2, B2…</button>
<button type="button" class="preset-chip" data-first="B">🔡 B first — B1, A1, B2, A2…</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ilpName">Output filename</label>
<input type="text" id="ilpName" class="tool-input" value="interleaved.pdf">
<div class="hint">If one PDF is longer, its extra pages are appended at the end.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Interleave &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ilpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Interleave PDFs
</button>
<button type="button" class="btn-pro-outline" id="ilpClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="ilpProgWrap">
<div class="progress-bar"><i id="ilpProgBar"></i></div>
<div class="progress-text" id="ilpProgText">Working…</div>
</div>
<div class="results" id="ilpResults">
<p class="result-head">✅ Done — your interleaved PDF</p>
<div class="result-summary" id="ilpSummary"></div>
<div class="result-grid" id="ilpGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — interleave as many PDFs as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('ilpShell');
  ToolPro.themeToggle(shell, document.getElementById('ilpTheme'));
  var fileA = null, fileB = null;
  var listA = document.getElementById('ilpListA');
  var listB = document.getElementById('ilpListB');
  var btn = document.getElementById('ilpBtn');
  var clearBtn = document.getElementById('ilpClear');
  var presets = document.getElementById('ilpPresets');
  var resBox = document.getElementById('ilpResults');
  var summaryEl = document.getElementById('ilpSummary');
  var gridEl = document.getElementById('ilpGrid');
  var progWrap = document.getElementById('ilpProgWrap');
  var progBar = document.getElementById('ilpProgBar');
  var progText = document.getElementById('ilpProgText');
  var firstSide = 'A';
  var outUrl = null;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    firstSide = chip.dataset.first;
    ToolPro.toast('Order set: ' + (firstSide === 'A' ? 'A first' : 'B first'));
  });

  function isPdf(f){
    return (f.type === 'application/pdf') || /\.pdf$/i.test(f.name);
  }

  function wire(dropId, listEl, setter){
    ToolPro.dropzone(document.getElementById(dropId), {
      multiple: false,
      accept: 'application/pdf',
      onFiles: function(arr){
        var f = arr[0];
        if(!f) return;
        if(!isPdf(f)){ ToolPro.toast('That is not a PDF file.', 'err'); return; }
        listEl.innerHTML = '';
        setter(f);
        ToolPro.fileRow(listEl, f, function(){ setter(null); refresh(); });
        resBox.classList.remove('show');
        refresh();
        ToolPro.toast(f.name + ' added', 'ok');
      }
    });
  }
  wire('ilpDropA', listA, function(f){ fileA = f; });
  wire('ilpDropB', listB, function(f){ fileB = f; });

  function refresh(){
    var ok = !!(fileA && fileB);
    btn.disabled = !ok;
    clearBtn.disabled = !(fileA || fileB);
    if(ok){
      btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Interleave 2 PDFs';
    } else {
      btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Interleave PDFs';
    }
  }

  clearBtn.addEventListener('click', function(){
    fileA = null; fileB = null; listA.innerHTML = ''; listB.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    resBox.classList.remove('show');
    if(outUrl){ URL.revokeObjectURL(outUrl); outUrl = null; }
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
    if(!fileA || !fileB){ ToolPro.toast('Add both PDF A and PDF B first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show'); progBar.style.width = '10%';
    progText.textContent = 'Reading both PDFs…';
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    try {
      var bufs = await Promise.all([readBuf(fileA), readBuf(fileB)]);
      progBar.style.width = '35%'; progText.textContent = 'Weaving pages…';
      var srcA = await PDFLib.PDFDocument.load(bufs[0], { ignoreEncryption: true });
      var srcB = await PDFLib.PDFDocument.load(bufs[1], { ignoreEncryption: true });
      var pagesA = srcA.getPageCount(), pagesB = srcB.getPageCount();
      var out = await PDFLib.PDFDocument.create();
      var first = firstSide === 'A' ? srcA : srcB;
      var second = firstSide === 'A' ? srcB : srcA;
      var max = Math.max(pagesA, pagesB);
      var copied = 0, total = pagesA + pagesB;
      for(var i = 0; i < max; i++){
        if(i < first.getPageCount()){
          var p1 = await out.copyPages(first, [i]);
          out.addPage(p1[0]);
          copied++;
          progBar.style.width = Math.round(35 + (copied / total) * 55) + '%';
        }
        if(i < second.getPageCount()){
          var p2 = await out.copyPages(second, [i]);
          out.addPage(p2[0]);
          copied++;
          progBar.style.width = Math.round(35 + (copied / total) * 55) + '%';
        }
      }
      progBar.style.width = '95%'; progText.textContent = 'Saving…';
      var bytes = await out.save();
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
      var name = (document.getElementById('ilpName').value || 'interleaved.pdf').trim();
      if(!/\.pdf$/i.test(name)) name += '.pdf';

      gridEl.innerHTML = '';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div><div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download</button>';
      card.querySelector('.r-name').textContent = name;
      card.querySelector('.r-name').title = name;
      card.querySelector('.r-stats').innerHTML =
        'PDF A: ' + pagesA + ' pages · PDF B: ' + pagesB + ' pages → <b>' + total + ' pages</b> (' +
        ToolPro.fmtBytes(bytes.length) + ')';
      (function(u, n){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
      })(outUrl, name);
      gridEl.appendChild(card);

      var pattern = firstSide === 'A' ? 'A1, B1, A2, B2…' : 'B1, A1, B2, A2…';
      summaryEl.textContent = '🎉 Woven in ' + pattern + ' order — ' + total + ' pages total.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDFs interleaved', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) +
        '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Interleave failed', 'err');
    }
    btn.disabled = false;
  });

  refresh();
})();
</script>

## How it works

Add your two PDFs (A and B), choose whether A or B goes first, then hit **Interleave PDFs**. The tool copies pages one from each source in turn — A1, B1, A2, B2 — using the pdf-lib engine loaded in your browser. If one file has more pages, the extras are appended after the interleaving finishes. Download the woven PDF with one click.

**Rule of thumb:** interleaving differs from merging — merging stacks B after A; interleaving alternates them. Use interleaving when page pairs belong together (question/answer, source/translation), merging when they don't.

## Everyday uses

- **Language study** — alternate original and translated pages of a bilingual document.
- **Teachers** — weave question sheets and answer keys into one alternating handout.
- **Scans** — combine front-side and back-side scan batches of a double-sided document in the right order.
- **Before/after reports** — alternate before and after photos of a project so each pair sits together.
- **Flashcards** — alternate term cards and definition cards into a single printable deck.

**Privacy note:** interleaving happens with pdf-lib loaded in your own browser — your documents never leave your device.
