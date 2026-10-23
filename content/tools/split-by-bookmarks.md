---
title: "Free Split PDF by Bookmarks — Divide PDF at Chapters Online"
description: "Split a PDF at its bookmark or outline entries — one chapter file each — right in your browser with pdf-lib. Free forever, private, no uploads."
category: pdf
date: 2026-10-23
draft: false
---

Long PDFs — textbooks, reports, manuals — usually have a bookmark outline where each chapter starts. Instead of splitting by hand, upload the PDF here and get one file per bookmark entry, automatically cut at each chapter's first page. The outline is read with pdf-lib entirely in your browser, so your document never leaves your device.

<div class="tool-shell" id="sbbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1zm7-1.5L18.5 6H13V.5zM8 11h8v1.5H8V11zm0 3.5h8V16H8v-1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Split PDF by Bookmarks</h2>
<p>Cut a PDF at its bookmark entries — one chapter file each, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="sbbTheme">🌙 Dark</button>
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
<div class="dropzone" id="sbbDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — must have bookmarks/outline</span>
<input type="file" id="sbbFile" accept="application/pdf">
</div>
<ul class="file-list" id="sbbList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="sbbPresets">
<button type="button" class="preset-chip active" data-levels="top">📖 Top-level chapters only</button>
<button type="button" class="preset-chip" data-levels="all">📚 All bookmark levels</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="sbbPrefix">Output filename prefix</label>
<input type="text" id="sbbPrefix" class="tool-input" value="chapter">
<div class="hint">Files are named like chapter-01-Introduction.pdf.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Number files (01-, 02-, …)</span><label class="toggle"><input type="checkbox" id="sbbNum" checked><span class="track"></span></label></div>
<div class="hint">Keeps chapters in reading order in your file manager.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Skip entries without a page target</span><label class="toggle"><input type="checkbox" id="sbbSkip" checked><span class="track"></span></label></div>
<div class="hint">Some outline entries are folders with no destination page.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sbbBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Split PDF
</button>
<button type="button" class="btn-pro-outline" id="sbbClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="sbbProgWrap">
<div class="progress-bar"><i id="sbbProgBar"></i></div>
<div class="progress-text" id="sbbProgText">Working…</div>
</div>
<div class="results" id="sbbResults">
<p class="result-head">✅ Done — chapters extracted</p>
<div class="result-summary" id="sbbSummary"></div>
<div class="result-grid" id="sbbGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many PDFs as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('sbbShell');
  ToolPro.themeToggle(shell, document.getElementById('sbbTheme'));
  var file = null;
  var listEl = document.getElementById('sbbList');
  var btn = document.getElementById('sbbBtn');
  var clearBtn = document.getElementById('sbbClear');
  var presets = document.getElementById('sbbPresets');
  var resBox = document.getElementById('sbbResults');
  var summaryEl = document.getElementById('sbbSummary');
  var gridEl = document.getElementById('sbbGrid');
  var progWrap = document.getElementById('sbbProgWrap');
  var progBar = document.getElementById('sbbProgBar');
  var progText = document.getElementById('sbbProgText');
  var levels = 'top';
  var urls = [];

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    levels = chip.dataset.levels;
    ToolPro.toast('Bookmark level: ' + chip.textContent.trim());
  });

  ToolPro.dropzone(document.getElementById('sbbDrop'), {
    multiple: false,
    accept: 'application/pdf',
    onFiles: function(arr){
      var f = arr[0];
      if(!f) return;
      if(f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){ ToolPro.toast('That is not a PDF file.', 'err'); return; }
      listEl.innerHTML = '';
      file = f;
      ToolPro.fileRow(listEl, f, function(){ file = null; refresh(); });
      resBox.classList.remove('show');
      refresh();
      ToolPro.toast(f.name + ' added', 'ok');
    }
  });

  function refresh(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = ''; gridEl.innerHTML = '';
    summaryEl.textContent = ''; resBox.classList.remove('show');
    urls.forEach(function(u){ URL.revokeObjectURL(u); }); urls = [];
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

  function collectItems(items, all, acc){
    items.forEach(function(it){
      acc.push(it);
      if(all && typeof it.getChildren === 'function') collectItems(it.getChildren(), all, acc);
    });
  }

  function pageIndexOf(src, dest){
    if(!dest || typeof dest.getPage !== 'function') return null;
    var pg = dest.getPage();
    if(typeof pg === 'number') return pg;
    var pages = src.getPages();
    for(var i = 0; i < pages.length; i++){
      if(pages[i].node === pg) return i;
    }
    return null;
  }

  function slugify(t){
    return t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'section';
  }

  btn.addEventListener('click', async function(){
    if(!file){ ToolPro.toast('Add a PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show'); progBar.style.width = '10%';
    progText.textContent = 'Reading PDF and its outline…';
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    urls.forEach(function(u){ URL.revokeObjectURL(u); }); urls = [];
    try {
      var buf = await readBuf(file);
      var src = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var pageCount = src.getPageCount();
      var outline = null;
      try { outline = src.getOutline(); } catch(e){ outline = null; }
      if(!outline || !outline.getItems || !outline.getItems().length){
        throw new Error('This PDF has no bookmark outline. Split tools need bookmarks to know where chapters start.');
      }
      progBar.style.width = '30%'; progText.textContent = 'Mapping bookmarks to pages…';
      var items = [];
      collectItems(outline.getItems(), levels === 'all', items);
      var skipEmpty = document.getElementById('sbbSkip').checked;
      var chapters = [];
      items.forEach(function(it){
        var title = '';
        try { title = it.getTitle() || ''; } catch(e){ title = ''; }
        var idx = null;
        try {
          var dest = (typeof it.getDestination === 'function') ? it.getDestination() : null;
          idx = pageIndexOf(src, dest);
        } catch(e){ idx = null; }
        if(idx === null){
          if(!skipEmpty) chapters.push({ title: title || 'untitled', index: null });
          return;
        }
        if(idx < 0) idx = 0;
        if(idx >= pageCount) idx = pageCount - 1;
        chapters.push({ title: title || 'untitled', index: idx });
      });
      var valid = chapters.filter(function(c){ return c.index !== null; });
      if(valid.length < 1) throw new Error('No bookmark pointed at a readable page.');
      valid.sort(function(a, b){ return a.index - b.index; });
      // Remove duplicate consecutive bookmarks pointing at the same page
      var uniq = valid.filter(function(c, i){ return i === 0 || c.index !== valid[i - 1].index; });
      var prefix = (document.getElementById('sbbPrefix').value || 'chapter').trim();
      var numbered = document.getElementById('sbbNum').checked;

      progText.textContent = 'Cutting ' + uniq.length + ' chapters…';
      gridEl.innerHTML = '';
      for(var i = 0; i < uniq.length; i++){
        var start = uniq[i].index;
        var end = (i + 1 < uniq.length) ? uniq[i + 1].index : pageCount;
        var idxs = [];
        for(var p = start; p < end; p++) idxs.push(p);
        var part = await PDFLib.PDFDocument.create();
        var copied = await part.copyPages(src, idxs);
        copied.forEach(function(pg){ part.addPage(pg); });
        var bytes = await part.save();
        var u = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        urls.push(u);
        var pad = numbered ? ('0' + (i + 1)).slice(-2) + '-' : '';
        var name = prefix + '-' + pad + slugify(uniq[i].title) + '.pdf';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-name').title = name;
        card.querySelector('.r-stats').innerHTML =
          '“' + uniq[i].title + '” · pages ' + (start + 1) + '–' + end +
          ' (' + idxs.length + ' page' + (idxs.length === 1 ? '' : 's') + ') · ' + ToolPro.fmtBytes(bytes.length);
        (function(url, n){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, n); });
        })(u, name);
        gridEl.appendChild(card);
        progBar.style.width = Math.round(30 + ((i + 1) / uniq.length) * 65) + '%';
      }
      summaryEl.textContent = '🎉 ' + uniq.length + (uniq.length === 1 ? ' chapter' : ' chapters') +
        ' extracted from “' + file.name + '”.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF split by bookmarks', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ ' + (err && err.message ? err.message : err);
      resBox.classList.add('show');
      ToolPro.toast('Split failed', 'err');
    }
    btn.disabled = false;
  });

  refresh();
})();
</script>

## How it works

Upload a PDF that has bookmarks (the chapter sidebar in your PDF reader). The tool reads the outline with pdf-lib, maps each bookmark to its start page, and cuts the document into one file per chapter — the last chapter runs to the final page. Each file downloads with a numbered, chapter-titled filename.

**Rule of thumb:** if your PDF has no bookmark outline, use a page-range splitter instead (or add bookmarks first) — this tool can only cut where bookmarks exist.

## Everyday uses

- **Students** — extract just the chapters you need from a giant textbook instead of carrying the whole file.
- **Course creators** — split a long ebook into one downloadable module per chapter.
- **Researchers** — pull out individual report sections to share with collaborators.
- **Manuals** — send a colleague only the troubleshooting chapter, not the 400-page manual.
- **Archiving** — break a scanned multi-document PDF into its original documents where bookmarks mark boundaries.

**Privacy note:** the outline is parsed with pdf-lib loaded in your own browser — your documents never leave your device.
