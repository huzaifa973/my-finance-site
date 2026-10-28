---
title: "Add Page Numbers to PDF — Free Page X of Y Numbering Tool"
description: "Stamp Page X of Y numbers on every PDF page in your browser — format, position, font size, and skip-first-page options. Free, private, no sign-up."
category: pdf
date: 2026-10-28
draft: false
---

"Page 3 of 12" beats a bare "3" — readers instantly know how far through a document they are, and a missing page is obvious. Upload a PDF, choose the number format and position, and stamp accurate page numbers on every page. The pdf-lib engine counts the real pages and runs entirely in your browser, so your documents never leave your device.

<div class="tool-shell" id="pxyShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Page X of Y Numbering</h2>
<p>Stamp "Page 3 of 12" style numbers on every page — format, position, size.</p>
</div>
<button type="button" class="theme-toggle" id="pxyTheme">🌙 Dark</button>
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
<div class="dropzone" id="pxyDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="pxyFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="pxyList"></ul>
<div class="hint">Your files never leave your browser — numbering runs locally with pdf-lib.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Numbering settings</p>
<div class="settings-panel">
<div class="preset-row" id="pxyPresets">
<button type="button" class="preset-chip active" data-fmt="page">📄 Page X of Y</button>
<button type="button" class="preset-chip" data-fmt="slash">X / Y</button>
<button type="button" class="preset-chip" data-fmt="plain">X of Y</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pxySize">Font size <span id="pxySizeVal">10pt</span></label>
<input type="range" id="pxySize" min="8" max="20" value="10">
</div>
<div class="setting">
<label for="pxyColor">Text color</label>
<select id="pxyColor" class="tool-input">
<option value="gray" selected>Dark gray</option>
<option value="black">Black</option>
<option value="red">Dark red</option>
<option value="blue">Blue</option>
</select>
</div>
<div class="setting">
<label>Position</label>
<div class="preset-row" id="pxyPos" style="margin-top:.3rem;">
<button type="button" class="preset-chip active" data-pos="bc">Bottom center</button>
<button type="button" class="preset-chip" data-pos="br">Bottom right</button>
<button type="button" class="preset-chip" data-pos="bl">Bottom left</button>
<button type="button" class="preset-chip" data-pos="tc">Top center</button>
</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="pxySkip"><span></span> Skip first page (cover pages stay clean)</label>
<label class="toggle"><input type="checkbox" id="pxyStart"><span></span> Start numbering at page 2 as "Page 1"</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Number &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pxyBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Add Page Numbers
</button>
<button type="button" class="btn-pro-outline" id="pxyClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pxyProgWrap">
<div class="progress-bar"><i id="pxyProgBar"></i></div>
<div class="progress-text" id="pxyProgText">Working…</div>
</div>
<div class="results" id="pxyResults">
<p class="result-head">✅ Numbered PDFs</p>
<div class="result-summary" id="pxySummary"></div>
<div class="result-grid" id="pxyGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Number unlimited PDFs — everything happens in your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pxyShell');
  ToolPro.themeToggle(shell, document.getElementById('pxyTheme'));
  var files = [];
  var listEl = document.getElementById('pxyList');
  var btn = document.getElementById('pxyBtn');
  var clearBtn = document.getElementById('pxyClear');
  var resBox = document.getElementById('pxyResults');
  var summaryEl = document.getElementById('pxySummary');
  var gridEl = document.getElementById('pxyGrid');
  var progWrap = document.getElementById('pxyProgWrap');
  var progBar = document.getElementById('pxyProgBar');
  var progText = document.getElementById('pxyProgText');
  var fmt = 'page';
  var pos = 'bc';
  var outUrls = [];
  var COLORS = { black: [0, 0, 0], red: [0.6, 0, 0], blue: [0, 0.25, 0.75], gray: [0.3, 0.3, 0.3] };
  ToolPro.bindSlider(document.getElementById('pxySize'), document.getElementById('pxySizeVal'), function(v){ return v + 'pt'; });
  function wireRow(id, key){
    document.getElementById(id).addEventListener('click', function(e){
      var chip = e.target.closest('.preset-chip'); if(!chip) return;
      document.getElementById(id).querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      if(key === 'fmt') fmt = chip.dataset.fmt;
      else pos = chip.dataset.pos;
    });
  }
  wireRow('pxyPresets', 'fmt');
  wireRow('pxyPos', 'pos');
  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }
  ToolPro.dropzone(document.getElementById('pxyDrop'), {
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
  function labelFor(pageNum, total, offset){
    var n = pageNum - offset;
    if(fmt === 'slash') return n + ' / ' + total;
    if(fmt === 'plain') return n + ' of ' + total;
    return 'Page ' + n + ' of ' + total;
  }
  btn.addEventListener('click', async function(){
    if(!files.length){ ToolPro.toast('Add at least one PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var size = parseInt(document.getElementById('pxySize').value, 10) || 10;
    var col = COLORS[document.getElementById('pxyColor').value] || COLORS.gray;
    var skipFirst = document.getElementById('pxySkip').checked;
    var startAtTwo = document.getElementById('pxyStart').checked;
    var totalStamped = 0;
    try {
      for(var fi = 0; fi < files.length; fi++){
        var f = files[fi];
        progText.textContent = 'Numbering ' + f.name + ' (' + (fi + 1) + '/' + files.length + ')…';
        progBar.style.width = Math.round((fi / files.length) * 100) + '%';
        var buf = await readBuf(f);
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        var font = await doc.embedFont(PDFLib.StandardFonts.Helvetica);
        var pageCount = doc.getPageCount();
        var offset = startAtTwo ? 1 : 0;
        var total = pageCount - offset;
        if(total < 1) total = 1;
        for(var pi = 0; pi < pageCount; pi++){
          var pageNum = pi + 1;
          if(skipFirst && pageNum === 1) continue;
          if(startAtTwo && pageNum === 1) continue;
          var page = doc.getPage(pi);
          var pw = page.getWidth(), ph = page.getHeight();
          var text = labelFor(pageNum, total, offset);
          var tw = font.widthOfTextAtSize(text, size);
          var rgb = PDFLib.rgb(col[0], col[1], col[2]);
          var x = 36, y = 36;
          if(pos === 'bc' || pos === 'tc') x = (pw - tw) / 2;
          else if(pos === 'br') x = pw - 36 - tw;
          if(pos === 'tc') y = ph - 36 - size;
          page.drawText(text, { x: x, y: y, size: size, font: font, color: rgb, opacity: 0.9 });
          totalStamped++;
        }
        var bytes = await doc.save();
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        outUrls.push(url);
        var name = f.name.replace(/\.pdf$/i, '') + '-page-numbers.pdf';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-name').title = name;
        card.querySelector('.r-stats').textContent = pageCount + ' pages · format "' + labelFor(2, total, offset) + '" shown on page 2 · ' + ToolPro.fmtBytes(bytes.length);
        (function(u, nm){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
        })(url, name);
        gridEl.appendChild(card);
        progBar.style.width = Math.round(((fi + 1) / files.length) * 100) + '%';
      }
      progWrap.classList.remove('show');
      summaryEl.textContent = '🎉 ' + totalStamped + ' pages numbered across ' + files.length + ' file' + (files.length > 1 ? 's' : '') + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Page numbers added', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) + '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Numbering failed', 'err');
    }
    btn.disabled = false;
    refresh();
  });
  refresh();
})();
</script>

## How it works

Drop in your PDFs, pick a format ("Page X of Y", "X / Y", or "X of Y"), a position, a font size, and a color. The tool counts each file's real page total, then stamps every page with its correct number — page 3 of a 12-page file reads "Page 3 of 12", not just "3". Optionally skip the cover page, or start numbering at page 2 so the cover stays unnumbered and page 2 becomes "Page 1". Your files never leave your browser.

## Everyday uses

- **Reports and theses** — give readers a real sense of position in long documents.
- **Contracts and legal files** — make a missing page obvious at a glance.
- **Course packets** — number handouts so students can follow along.
- **Meeting packs** — "see page 7 of 20" works when every page says so.
- **Printed manuals** — page totals help with double-sided printing and binding.
