---
title: "Split PDF in Half — Free Online PDF Splitter"
description: "Split a PDF into two files in your browser — at the midpoint or after any page you choose, with your own file names. Free, private, no uploads."
category: pdf
date: 2026-10-15
draft: false
---

Need to break a PDF into two parts — first half and second half, or everything before and after a specific page? This splitter copies the pages into two brand-new PDF files right in your browser: at the exact midpoint, or after any page you choose. Name the outputs yourself, download both, done.

<div class="tool-shell" id="pshShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 3h6v18H5V3zm8 0h6v18h-6V3zM3 3h1v18H3V3zm18 0h1v18h-1V3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Split PDF in Half</h2>
<p>Split a PDF into two files — at the midpoint, or after any page you pick.</p>
</div>
<button type="button" class="theme-toggle" id="pshTheme">🌙 Dark</button>
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
<div class="dropzone" id="pshDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 10 files at once</span>
<input type="file" id="pshFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pshList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="pshPresets">
<button type="button" class="preset-chip active" data-split="mid">⚖️ Split at midpoint</button>
<button type="button" class="preset-chip" data-split="page">🎯 Split after a page</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pshMid">Split at midpoint</label>
<div class="toggle on" id="pshMid" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Part 1 gets the first half of the pages, part 2 gets the rest. Turn off to choose the split page yourself.</div>
</div>
<div class="setting">
<label for="pshPage">Split after page</label>
<input type="number" id="pshPage" class="tool-input" min="1" value="1" disabled>
<div class="hint">Used when "Split at midpoint" is off. For a file with N pages, pick 1 … N−1.</div>
</div>
<div class="setting">
<label for="pshName">Output name</label>
<input type="text" id="pshName" class="tool-input" value="split-document">
<div class="hint">Both parts are named from this — rename every output your way.</div>
</div>
<div class="setting">
<label for="pshStyle">Filename style</label>
<select id="pshStyle" class="tool-input">
<option value="parts" selected>name-part-1.pdf / name-part-2.pdf</option>
<option value="ranges">name (pages 1-5).pdf</option>
</select>
<div class="hint">How the two output files are named.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pshBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M5 3h6v18H5V3zm8 0h6v18h-6V3z"/></svg>
Split PDF
</button>
<button type="button" class="btn-pro-outline" id="pshClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pshProgWrap">
<div class="progress-bar"><i id="pshProgBar"></i></div>
<div class="progress-text" id="pshProgText">Working…</div>
</div>
<div class="results" id="pshResults">
<p class="result-head">✅ Split — two files per PDF</p>
<div class="result-summary" id="pshSummary"></div>
<div class="result-grid" id="pshGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pshShell');
  ToolPro.themeToggle(shell, document.getElementById('pshTheme'));

  var files = [];
  var listEl = document.getElementById('pshList');
  var btn = document.getElementById('pshBtn');
  var clearBtn = document.getElementById('pshClear');
  var grid = document.getElementById('pshGrid');
  var resBox = document.getElementById('pshResults');
  var summaryEl = document.getElementById('pshSummary');
  var progWrap = document.getElementById('pshProgWrap');
  var progBar = document.getElementById('pshProgBar');
  var progText = document.getElementById('pshProgText');
  var midToggle = document.getElementById('pshMid');
  var pageInput = document.getElementById('pshPage');
  var chips = document.getElementById('pshPresets');

  function bindToggle(el, initial, onChange){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    function flip(){ state = !state; paint(); if(onChange) onChange(state); }
    el.addEventListener('click', flip);
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); flip(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ v = !!v; if(v !== state){ state = v; paint(); if(onChange) onChange(state); } } };
  }

  function syncChips(){
    var mid = tMid.get();
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', (c.dataset.split === 'mid') === mid);
    });
    pageInput.disabled = mid;
  }
  var tMid = bindToggle(midToggle, true, syncChips);
  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    tMid.set(chip.dataset.split === 'mid');
    syncChips();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  syncChips();

  function refreshButtons(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  function resetResults(){
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
  }

  ToolPro.dropzone(document.getElementById('pshDrop'), {
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
      ToolPro.toast(files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' ready — hit Split PDF', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = [];
    listEl.innerHTML = '';
    resetResults();
    refreshButtons();
  });

  function range(a, b){
    var out = [];
    for(var i = a; i <= b; i++) out.push(i);
    return out;
  }

  function makeCard(file, total, splitAt, name1, name2, bytes1, bytes2){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<div class="tool-actions" style="margin-top:.6rem;gap:.5rem;flex-wrap:wrap;">' +
      '<button type="button" class="btn-pro dl-1">⬇ Download part 1</button>' +
      '<button type="button" class="btn-pro-outline dl-2">⬇ Download part 2</button>' +
      '</div>';
    card.querySelector('.r-name').textContent = file.name;
    card.querySelector('.r-name').title = file.name;
    var el = card.querySelector('.r-stats');
    el.innerHTML = '';
    var l1 = document.createElement('div');
    l1.innerHTML = '📄 Part 1: <b></b> — pages 1–' + splitAt + ' (' + splitAt + ' of ' + total + ' pages) · ';
    l1.querySelector('b').textContent = name1;
    var s1 = document.createElement('span');
    s1.textContent = ToolPro.fmtBytes(bytes1.length);
    l1.appendChild(s1);
    var l2 = document.createElement('div');
    l2.innerHTML = '📄 Part 2: <b></b> — pages ' + (splitAt + 1) + '–' + total + ' (' + (total - splitAt) + ' of ' + total + ' pages) · ';
    l2.querySelector('b').textContent = name2;
    var s2 = document.createElement('span');
    s2.textContent = ToolPro.fmtBytes(bytes2.length);
    l2.appendChild(s2);
    el.appendChild(l1);
    el.appendChild(l2);
    var url1 = URL.createObjectURL(new Blob([bytes1], { type: 'application/pdf' }));
    var url2 = URL.createObjectURL(new Blob([bytes2], { type: 'application/pdf' }));
    card.querySelector('.dl-1').addEventListener('click', function(){ ToolPro.download(url1, name1); });
    card.querySelector('.dl-2').addEventListener('click', function(){ ToolPro.download(url2, name2); });
    grid.appendChild(card);
  }

  function makeWarnCard(file, msg){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
    card.querySelector('.r-name').textContent = file.name;
    card.querySelector('.r-stats').textContent = msg;
    grid.appendChild(card);
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true; clearBtn.disabled = true;
    resetResults();
    progWrap.classList.add('show'); progBar.style.width = '0%';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var base = ((document.getElementById('pshName').value || 'split-document').trim() || 'split-document')
      .replace(/[\\/:*?"<>|]+/g, '-').replace(/\.pdf$/i, '');
    var style = document.getElementById('pshStyle').value;
    var mid = tMid.get();
    var wantedPage = parseInt(pageInput.value, 10) || 1;
    var okCount = 0;

    for(var fi = 0; fi < files.length; fi++){
      var file = files[fi];
      prog(Math.round(fi / files.length * 100), 'File ' + (fi + 1) + ' of ' + files.length + ': ' + file.name + '…');
      try{
        var src = await PDFLib.PDFDocument.load(new Uint8Array(await file.arrayBuffer()), { ignoreEncryption: true });
        var total = src.getPageCount();
        if(total < 2){
          makeWarnCard(file, '⚠️ This PDF has only 1 page — nothing to split.');
          continue;
        }
        var splitAt = mid ? Math.ceil(total / 2) : Math.min(Math.max(wantedPage, 1), total - 1);
        var d1 = await PDFLib.PDFDocument.create();
        var d2 = await PDFLib.PDFDocument.create();
        var p1 = await d1.copyPages(src, range(0, splitAt - 1));
        var p2 = await d2.copyPages(src, range(splitAt, total - 1));
        p1.forEach(function(pg){ d1.addPage(pg); });
        p2.forEach(function(pg){ d2.addPage(pg); });
        var b1 = await d1.save({ useObjectStreams: true });
        var b2 = await d2.save({ useObjectStreams: true });
        var name1, name2;
        if(style === 'ranges'){
          name1 = base + ' (pages 1-' + splitAt + ').pdf';
          name2 = base + ' (pages ' + (splitAt + 1) + '-' + total + ').pdf';
        } else {
          name1 = base + '-part-1.pdf';
          name2 = base + '-part-2.pdf';
        }
        makeCard(file, total, splitAt, name1, name2, b1, b2);
        okCount++;
      }catch(err){
        makeWarnCard(file, '⚠️ Could not split this PDF — ' + (err && err.name === 'PasswordException' || (err && /password/i.test(err.message || '')) ? 'it is password-protected.' : 'it may be damaged or encrypted.'));
      }
      prog(Math.round((fi + 1) / files.length * 100), 'File ' + (fi + 1) + ' of ' + files.length + ' done');
    }
    prog(100, 'Done');
    progWrap.classList.remove('show');
    summaryEl.textContent = okCount + ' of ' + files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' split into two files. Each part keeps the original pages exactly as they were — nothing is recompressed or altered.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(okCount ? 'Split complete' : 'Nothing split', okCount ? 'ok' : 'err');
    btn.disabled = false; clearBtn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in up to 10 PDFs. Each is read in your browser's memory — nothing is uploaded.
- **Step 2** — Keep "Split at midpoint" for an even halves split, or turn it off and type the page to split after. Name the outputs and pick a filename style.
- **Step 3** — Hit **Split PDF**. The tool copies the pages into two brand-new PDF files — part 1 and part 2 — with the page counts shown on every result card.

An honest note: pages are copied exactly, never recompressed, so the two parts keep the original quality. Files are split one at a time using the same settings.

## Everyday uses

- **Reports** — hand someone just the first half of a long report.
- **Contracts** — separate the agreement from the exhibits and appendices.
- **Scans** — break a giant scanned batch into smaller files for email or upload limits.
- **Chapters** — split an ebook or manual at a chapter boundary.
- **Forms** — pull the pages you filled out away from blank extras.

## Frequently asked questions

**Where exactly does the midpoint split fall?**
For odd page counts, part 1 gets the extra page (e.g., a 9-page PDF splits into pages 1–5 and 6–9).

**Does splitting change the quality?**
No. Pages are copied bit-for-bit into the new files — text, images, and formatting are untouched.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
