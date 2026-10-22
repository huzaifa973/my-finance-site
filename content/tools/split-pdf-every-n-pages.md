---
title: "Free Split PDF Every N Pages — Chunk PDFs Online"
description: "Split a PDF into smaller PDFs every N pages — 1, 5, 10 or any chunk size — free in your browser with batch download. Files never leave your device."
category: pdf
date: 2026-10-22
draft: false
---

Long PDFs are hard to share and slow to load — email caps, upload limits, and endless scrolling. Drop in your PDF, set how many pages go into each chunk, and this tool splits it into separate PDF files you can download individually or all at once. The splitting runs entirely in your browser with the pdf-lib engine; your files never leave your browser.

<div class="tool-shell" id="spnShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13v5h8v-5H8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Split PDF Every N Pages</h2>
<p>Chunk any PDF into smaller files — pick the pages per chunk, download in bulk.</p>
</div>
<button type="button" class="theme-toggle" id="spnTheme">🌙 Dark</button>
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
<div class="dropzone" id="spnDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — .pdf only · one file at a time</span>
<input type="file" id="spnFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="spnList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="spnPresets">
<button type="button" class="preset-chip" data-n="1">📄 Every page</button>
<button type="button" class="preset-chip active" data-n="5">📑 Every 5 pages</button>
<button type="button" class="preset-chip" data-n="10">🗂️ Every 10 pages</button>
<button type="button" class="preset-chip" data-n="20">📚 Every 20 pages</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="spnN">Pages per chunk: <span class="val" id="spnNVal">5</span></label>
<input type="range" id="spnN" min="1" max="50" value="5">
<div class="hint">A 120-page PDF with 5 pages per chunk becomes 24 files.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="spnSeq" checked><span></span> Number chunks in order</label>
<div class="hint">Names files doc-part01.pdf, doc-part02.pdf, …</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spnBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM8 13v5h8v-5H8z"/></svg>
Split PDF
</button>
<button type="button" class="btn-pro-outline" id="spnClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="spnProgWrap">
<div class="progress-bar"><i id="spnProgBar"></i></div>
<div class="progress-text" id="spnProgText">Working…</div>
</div>
<div class="results" id="spnResults">
<p class="result-head">✅ Done — your split PDFs</p>
<div class="result-summary" id="spnSummary"></div>
<div class="tool-actions" style="margin:10px 0;">
<button type="button" class="btn-pro" id="spnAll">⬇ Download All</button>
</div>
<div class="result-grid" id="spnGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Split as many PDFs as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('spnShell');
  ToolPro.themeToggle(shell, document.getElementById('spnTheme'));
  var nR = document.getElementById('spnN');
  var nV = document.getElementById('spnNVal');
  var seqT = document.getElementById('spnSeq');
  var presets = document.getElementById('spnPresets');
  var listEl = document.getElementById('spnList');
  var btn = document.getElementById('spnBtn');
  var clearBtn = document.getElementById('spnClear');
  var progWrap = document.getElementById('spnProgWrap');
  var progBar = document.getElementById('spnProgBar');
  var progText = document.getElementById('spnProgText');
  var resBox = document.getElementById('spnResults');
  var grid = document.getElementById('spnGrid');
  var allBtn = document.getElementById('spnAll');
  ToolPro.bindSlider(nR, nV, function(v){ return v + (v == 1 ? ' page' : ' pages'); });

  var pdfFile = null;
  var chunkUrls = [];

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    nR.value = chip.dataset.n;
    nR.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function resetAll(){
    pdfFile = null;
    listEl.innerHTML = '';
    grid.innerHTML = '';
    chunkUrls.forEach(function(u){ URL.revokeObjectURL(u.url); });
    chunkUrls = [];
    resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('spnDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      pdfFile = arr[0];
      ToolPro.fileRow(listEl, pdfFile, resetAll);
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('PDF added — pick your chunk size and hit Split PDF', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  function pad(n){ return String(n).padStart(2, '0'); }

  btn.addEventListener('click', async function(){
    if(!pdfFile) return;
    if(typeof PDFLib === 'undefined'){
      ToolPro.toast('PDF engine failed to load — check your connection and retry.', 'err');
      return;
    }
    var per = parseInt(nR.value, 10);
    var base = pdfFile.name.replace(/\.pdf$/i, '');
    btn.disabled = true; clearBtn.disabled = true;
    resBox.classList.remove('show');
    grid.innerHTML = '';
    chunkUrls.forEach(function(u){ URL.revokeObjectURL(u.url); });
    chunkUrls = [];
    progWrap.classList.add('show');
    progBar.style.width = '10%';
    progText.textContent = 'Opening PDF…';
    try{
      var buf = await pdfFile.arrayBuffer();
      var src = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var total = src.getPageCount();
      if(per >= total){
        ToolPro.toast('Chunk size (' + per + ') is bigger than the PDF (' + total + ' pages) — nothing to split.', 'err');
        progWrap.classList.remove('show');
        btn.disabled = false; clearBtn.disabled = false;
        return;
      }
      var chunks = Math.ceil(total / per);
      for(var c = 0; c < chunks; c++){
        var start = c * per;
        var end = Math.min(start + per, total);
        progBar.style.width = Math.round(10 + (c / chunks) * 80) + '%';
        progText.textContent = 'Building chunk ' + (c + 1) + ' of ' + chunks + ' (pages ' + (start + 1) + '–' + end + ')…';
        var out = await PDFLib.PDFDocument.create();
        var pages = await out.copyPages(src, Array.from({ length: end - start }, function(_, i){ return start + i; }));
        pages.forEach(function(p){ out.addPage(p); });
        var bytes = await out.save();
        var blob = new Blob([bytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var name = seqT.checked ? base + '-part' + pad(c + 1) + '.pdf' : base + '-pages' + (start + 1) + '-' + end + '.pdf';
        chunkUrls.push({ url: url, name: name });
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML =
          '<div class="r-name"></div>' +
          '<div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-stats').textContent = 'Pages ' + (start + 1) + '–' + end + ' · ' + ToolPro.fmtBytes(blob.size);
        (function(u, nm){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, nm); });
        })(url, name);
        grid.appendChild(card);
      }
      document.getElementById('spnSummary').textContent =
        '🎉 ' + total + ' pages split into ' + chunks + ' PDFs (' + per + ' page' + (per === 1 ? '' : 's') + ' each). Download each chunk below, or grab them all at once.';
      progBar.style.width = '100%';
      progText.textContent = 'Done';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF split into ' + chunks + ' files', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Could not split this PDF — it may be password-protected or damaged.', 'err');
    }
    btn.disabled = false; clearBtn.disabled = false;
  });

  allBtn.addEventListener('click', function(){
    if(!chunkUrls.length){ ToolPro.toast('Split the PDF first.', 'err'); return; }
    ToolPro.toast('Downloading ' + chunkUrls.length + ' files — keep this tab open.', 'ok');
    chunkUrls.forEach(function(c, i){
      setTimeout(function(){ ToolPro.download(c.url, c.name); }, i * 600);
    });
  });
})();
</script>

## How it works

- **Step 1** — Drop in your PDF (any size — the engine reads it locally).
- **Step 2** — Pick a preset (every page, 5, 10, 20) or slide to any chunk size, and choose sequential file names.
- **Step 3** — Hit **Split PDF** — each chunk becomes its own PDF, downloadable one by one or all at once.

## Everyday uses

- **Email limits** — split a 50 MB document into 5 MB chunks that pass attachment caps.
- **Print shops** — send only the pages they need instead of the whole file.
- **Students** — split a textbook PDF into chapters for easier reading on a phone.
- **Offices** — break long reports into sections to share with different teams.
- **Archiving** — chunk yearly scans so one corrupted file can't take down the whole archive.

**Rule of thumb:** 10 pages per chunk is the sweet spot for email — most chunks land under 10 MB, which sails through Gmail, Outlook, and corporate filters.
