---
title: "Free PDF Compare — Diff Two PDFs Page by Page Online"
description: "Compare two PDFs in your browser: text extracted per page, similarity scores, changed-page highlighting and side-by-side diffs. Free forever, files never leave your device."
category: pdf
date: 2026-10-19
draft: false
---

Spot what changed between two versions of a document. Upload PDF A and PDF B, and this tool extracts the text of every page with pdf.js, scores each page pair for similarity, highlights the changed pages, and shows side-by-side diffs for the pages you pick. Everything runs in your browser; files never leave your device.

<div class="tool-shell" id="pcmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.5 3A2.5 2.5 0 0 1 12 5.5v.63c2.46.5 4.5 2.04 5.5 4.12L21 11l-3.5.75c-.28.92-.7 1.77-1.24 2.54l1.24 3.21-3.54-1.5c-.85.35-1.78.55-2.76.62L10.5 21l-.7-4.38c-.98-.07-1.91-.27-2.76-.62l-3.54 1.5 1.24-3.21C3.7 13.52 3 12.26 3 10.86V10.5C3 6.36 6.36 3 10.5 3h-1z" opacity="0"/><path d="M7 3h7l5 5v13c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 2v2h2V5H7zm4 0v2h2V5h-2zm4 0v2h1.5L15 5.5V5h1zM7 11v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 15v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compare Two PDFs</h2>
<p>Page-by-page text diff with similarity scores — find exactly what changed.</p>
</div>
<button type="button" class="theme-toggle" id="pcmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add both PDFs</p>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
<div>
<div class="dropzone" id="pcmDropA">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>
<strong>PDF A (original)</strong>
<span>drag &amp; drop or click</span>
<input type="file" id="pcmFileA" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pcmListA"></ul>
</div>
<div>
<div class="dropzone" id="pcmDropB">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"/></svg>
<strong>PDF B (revised)</strong>
<span>drag &amp; drop or click</span>
<input type="file" id="pcmFileB" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pcmListB"></ul>
</div>
</div>
<div class="hint">🔒 Private: text extraction happens on your device — files never leave your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Comparison options</p>
<div class="settings-panel">
<div class="preset-row" id="pcmPresets">
<button type="button" class="preset-chip active" data-ign="1" data-case="1">📄 Content compare (ignore formatting noise)</button>
<button type="button" class="preset-chip" data-ign="0" data-case="0">🔍 Strict (every character counts)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pcmThresh">Flag pages below: <span class="val" id="pcmTVal">98% similar</span></label>
<input type="range" id="pcmThresh" min="50" max="100" value="98">
<div class="hint">Pages scoring below this are listed as "changed".</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Ignore extra whitespace</span><label class="toggle"><input type="checkbox" id="pcmWs" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Ignore case</span><label class="toggle"><input type="checkbox" id="pcmCase" checked><span class="track"></span></label></div>
<div class="hint">Formatting-only edits (re-wrapped lines, caps) won't count as changes.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compare</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pcmBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Compare PDFs
</button>
<button type="button" class="btn-pro-outline" id="pcmClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pcmProgWrap">
<div class="progress-bar"><i id="pcmProgBar"></i></div>
<div class="progress-text" id="pcmProgText">Working…</div>
</div>
<div class="results" id="pcmResults">
<p class="result-head">📊 Comparison report</p>
<div class="result-summary" id="pcmSummary"></div>
<div class="result-grid" id="pcmGrid"></div>
<div class="result-card" id="pcmDetail" style="display:none;margin-top:1rem">
<div class="r-name" id="pcmDetailTitle">Side-by-side diff</div>
<div id="pcmDetailBody" style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:.5rem"></div>
</div>
<div class="result-card" style="margin-top:1rem">
<div class="r-name">⚠️ Honest note</div>
<div class="r-stats">This compares <b>extractable text</b> — scanned-image PDFs with no text layer will compare as empty unless OCR'd first. Layout, fonts, and images are not compared; two pages can look different yet score 100% if the text is identical.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Compare as many document pairs as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pcmShell');
  ToolPro.themeToggle(shell, document.getElementById('pcmTheme'));

  var fileA = null, fileB = null;
  var listA = document.getElementById('pcmListA'), listB = document.getElementById('pcmListB');
  var btn = document.getElementById('pcmBtn'), clearBtn = document.getElementById('pcmClear');
  var pagesA = [], pagesB = [];

  document.getElementById('pcmPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('pcmPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('pcmWs').checked = chip.dataset.ign === '1';
    document.getElementById('pcmCase').checked = chip.dataset.case === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ToolPro.bindSlider(document.getElementById('pcmThresh'), document.getElementById('pcmTVal'), function(v){ return v + '% similar'; });

  function refresh(){
    btn.disabled = !(fileA && fileB);
    clearBtn.disabled = !(fileA || fileB);
  }

  function wireDrop(dropId, listEl, set){
    ToolPro.dropzone(document.getElementById(dropId), {
      multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
      onFiles: function(arr){
        listEl.innerHTML = '';
        var f = arr[0];
        set(f);
        ToolPro.fileRow(listEl, f, function(){ set(null); refresh(); });
        document.getElementById('pcmResults').classList.remove('show');
        document.getElementById('pcmDetail').style.display = 'none';
        refresh();
        ToolPro.toast('Added: ' + f.name, 'ok');
      }
    });
  }
  wireDrop('pcmDropA', listA, function(f){ fileA = f; });
  wireDrop('pcmDropB', listB, function(f){ fileB = f; });

  clearBtn.addEventListener('click', function(){
    fileA = fileB = null; listA.innerHTML = ''; listB.innerHTML = '';
    document.getElementById('pcmResults').classList.remove('show');
    document.getElementById('pcmDetail').style.display = 'none';
    refresh();
  });

  function loadPdfJs(){
    return new Promise(function(resolve, reject){
      if(window.pdfjsLib) return resolve(window.pdfjsLib);
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
      s.onload = function(){
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        resolve(window.pdfjsLib);
      };
      s.onerror = function(){ reject(new Error('CDN unreachable')); };
      document.head.appendChild(s);
    });
  }

  async function extractPages(pdfjsLib, f, progBar, progText, label, base, span){
    var buf = await f.arrayBuffer();
    var doc = await pdfjsLib.getDocument({ data: buf }).promise;
    var pages = [];
    for(var i = 1; i <= doc.numPages; i++){
      var page = await doc.getPage(i);
      var tc = await page.getTextContent();
      var lines = [], cur = '';
      tc.items.forEach(function(it){
        cur += it.str;
        if(it.hasEOL){ lines.push(cur); cur = ''; }
      });
      if(cur.trim()) lines.push(cur);
      pages.push(lines);
      var pct = base + Math.round((i / doc.numPages) * span);
      progBar.style.width = pct + '%';
      progText.textContent = label + ' page ' + i + ' of ' + doc.numPages + '…';
    }
    return pages;
  }

  function normLines(lines, ignWs, ignCase){
    return lines.map(function(l){
      var t = ignWs ? l.replace(/\s+/g, ' ').trim() : l;
      return ignCase ? t.toLowerCase() : t;
    }).filter(function(l){ return l.length > 0; });
  }

  function similarity(aLines, bLines){
    var a = {}, b = {};
    aLines.join(' ').split(/\s+/).forEach(function(w){ if(w) a[w] = (a[w] || 0) + 1; });
    bLines.join(' ').split(/\s+/).forEach(function(w){ if(w) b[w] = (b[w] || 0) + 1; });
    var inter = 0, union = 0, keys = {};
    Object.keys(a).forEach(function(k){ keys[k] = 1; });
    Object.keys(b).forEach(function(k){ keys[k] = 1; });
    Object.keys(keys).forEach(function(k){
      inter += Math.min(a[k] || 0, b[k] || 0);
      union += Math.max(a[k] || 0, b[k] || 0);
    });
    return union === 0 ? 100 : Math.round(inter / union * 100);
  }

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function diffBlock(aLines, bLines){
    var a0 = 0, b0 = 0, a1 = aLines.length, b1 = bLines.length;
    while(a0 < a1 && b0 < b1 && aLines[a0] === bLines[b0]){ a0++; b0++; }
    while(a1 > a0 && b1 > b0 && aLines[a1-1] === bLines[b1-1]){ a1--; b1--; }
    return { pre: aLines.slice(0, a0), midA: aLines.slice(a0, a1), midB: bLines.slice(b0, b1), post: aLines.slice(a1) };
  }

  function showDiff(pageNum){
    var d = diffBlock(pagesA[pageNum - 1].raw, pagesB[pageNum - 1].raw);
    document.getElementById('pcmDetailTitle').textContent = '🔎 Page ' + pageNum + ' — side-by-side diff';
    var body = document.getElementById('pcmDetailBody');
    body.innerHTML =
      '<div><div class="r-name" style="font-size:.9rem">PDF A</div><div class="tool-output" style="min-height:120px;max-height:320px;overflow:auto;white-space:pre-wrap">' +
      d.pre.map(function(l){ return '<div>' + (esc(l) || '&nbsp;') + '</div>'; }).join('') +
      d.midA.map(function(l){ return '<div style="background:#fde2e2;padding:.15rem .3rem;border-radius:4px">− ' + (esc(l) || '&nbsp;') + '</div>'; }).join('') +
      d.post.map(function(l){ return '<div>' + (esc(l) || '&nbsp;') + '</div>'; }).join('') + '</div></div>' +
      '<div><div class="r-name" style="font-size:.9rem">PDF B</div><div class="tool-output" style="min-height:120px;max-height:320px;overflow:auto;white-space:pre-wrap">' +
      d.pre.map(function(l){ return '<div>' + (esc(l) || '&nbsp;') + '</div>'; }).join('') +
      d.midB.map(function(l){ return '<div style="background:#dcf5e3;padding:.15rem .3rem;border-radius:4px">+ ' + (esc(l) || '&nbsp;') + '</div>'; }).join('') +
      d.post.map(function(l){ return '<div>' + (esc(l) || '&nbsp;') + '</div>'; }).join('') + '</div></div>';
    document.getElementById('pcmDetail').style.display = 'block';
    document.getElementById('pcmDetail').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  btn.addEventListener('click', async function(){
    if(!fileA || !fileB) return;
    var progWrap = document.getElementById('pcmProgWrap');
    var progBar = document.getElementById('pcmProgBar');
    var progText = document.getElementById('pcmProgText');
    var grid = document.getElementById('pcmGrid');
    var resBox = document.getElementById('pcmResults');
    var ignWs = document.getElementById('pcmWs').checked;
    var ignCase = document.getElementById('pcmCase').checked;
    var thresh = +document.getElementById('pcmThresh').value;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    document.getElementById('pcmDetail').style.display = 'none';
    grid.innerHTML = '';
    progBar.style.width = '5%'; progText.textContent = 'Loading text engine…';
    try {
      var pdfjsLib = await loadPdfJs();
      var rawA = await extractPages(pdfjsLib, fileA, progBar, progText, 'PDF A', 5, 45);
      var rawB = await extractPages(pdfjsLib, fileB, progBar, progText, 'PDF B', 50, 45);
      pagesA = rawA.map(function(l){ return { raw: l, n: normLines(l, ignWs, ignCase) }; });
      pagesB = rawB.map(function(l){ return { raw: l, n: normLines(l, ignWs, ignCase) }; });
      progBar.style.width = '97%'; progText.textContent = 'Scoring pages…';

      var common = Math.min(pagesA.length, pagesB.length);
      var scores = [], changed = [];
      for(var i = 0; i < common; i++){
        var s = similarity(pagesA[i].n, pagesB[i].n);
        scores.push(s);
        if(s < thresh) changed.push({ page: i + 1, score: s });
      }
      var extra = [];
      if(pagesA.length > common) for(var a = common; a < pagesA.length; a++) extra.push({ page: a + 1, side: 'A', score: 0 });
      if(pagesB.length > common) for(var b = common; b < pagesB.length; b++) extra.push({ page: b + 1, side: 'B', score: 0 });

      var avg = scores.length ? Math.round(scores.reduce(function(x, y){ return x + y; }, 0) / scores.length) : 0;
      document.getElementById('pcmSummary').textContent =
        (avg === 100 && !extra.length ? '✅ Documents are text-identical.' : '📊 Overall similarity: ' + avg + '%. ') +
        common + ' page pairs compared · ' + changed.length + ' changed · ' +
        (extra.length ? extra.length + ' page(s) only in one file.' : 'same page count (' + pagesA.length + ').');

      changed.forEach(function(c){
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name">📝 Page ' + c.page + ' — ' + c.score + '% similar</div>' +
          '<div class="r-stats">Text differs between the two versions.</div>' +
          '<button type="button" class="btn-pro-outline" style="margin-top:.5rem">🔎 View side-by-side diff</button>';
        card.querySelector('button').addEventListener('click', function(){ showDiff(c.page); });
        grid.appendChild(card);
      });
      extra.forEach(function(x){
        var card2 = document.createElement('div');
        card2.className = 'result-card';
        card2.innerHTML = '<div class="r-name">➕ Page ' + x.page + ' exists only in PDF ' + x.side + '</div>' +
          '<div class="r-stats">Added or removed page — no counterpart to compare.</div>';
        grid.appendChild(card2);
      });
      if(!changed.length && !extra.length){
        var okCard = document.createElement('div');
        okCard.className = 'result-card';
        okCard.innerHTML = '<div class="r-name">🎉 No text differences found</div><div class="r-stats">Every page scored at or above your ' + thresh + '% threshold.</div>';
        grid.appendChild(okCard);
      }
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Comparison complete', 'ok');
    } catch(e){
      progWrap.classList.remove('show');
      ToolPro.toast('Failed: ' + (e && e.message ? e.message : 'could not read the PDFs'), 'err');
    }
    refresh();
  });

  refresh();
})();
</script>

## How it works

Each PDF is rendered page-by-page with pdf.js (Mozilla's JavaScript PDF engine), which extracts the embedded text layer. Lines are reconstructed from text items, then normalized per your settings (whitespace collapsing, case folding). Each page pair gets a similarity score using word-overlap math (shared words ÷ total unique words × 100). Pages below your threshold are flagged, and clicking one shows a side-by-side diff: matching lines at the top and bottom are aligned, the changed middle is highlighted red (removed) and green (added).

**Honest limitations:** only extractable text is compared — scanned images with no text layer compare as empty (run OCR first), and layout, fonts, colors, and images are ignored. Two pages can look different but score 100% if their text matches.

## Everyday uses

- **Contract review** — diff the redlined version against the original before signing.
- **Legal teams** — prove exactly which clauses changed between drafts.
- **Editors** — verify a "final" PDF matches the approved manuscript text.
- **Students** — compare your exported assignment against the draft to catch missing pages.
- **Compliance** — document what changed between policy versions, page by page.
