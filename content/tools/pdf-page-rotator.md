---
title: "Rotate PDF Pages Online Free — Fix Sideways Pages"
description: "Rotate PDF pages 90°, 180°, or 270° free in your browser — fix sideways scans and upside-down pages, then download the corrected PDF. No sign-up, files stay private."
category: pdf
date: 2026-10-10
draft: false
---

Scanned a document sideways? Some pages in a PDF come out rotated — upside down, landscape instead of portrait, or just plain wrong. Fix them in seconds: pick which pages to rotate, choose the angle, and download a corrected PDF. Everything happens on your device; files never leave your browser.

<div class="tool-shell" id="prShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm1 2.29V12l4.5 2.7-.75 1.23L11 12.59V7.29L12 7.29z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Page Rotator</h2>
<p>Straighten sideways or upside-down PDF pages — rotate all pages or just the ones you pick.</p>
</div>
<button type="button" class="theme-toggle" id="prTheme">🌙 Dark</button>
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
<div class="dropzone" id="prDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="prFile" accept="application/pdf">
</div>
<ul class="file-list" id="prList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Rotation settings</p>
<div class="settings-panel">
<div class="preset-row" id="prPresets">
<button type="button" class="preset-chip active" data-r="90">↻ Rotate 90° right</button>
<button type="button" class="preset-chip" data-r="270">↺ Rotate 90° left</button>
<button type="button" class="preset-chip" data-r="180">⟲ Flip 180°</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="prAngle">Rotation angle</label>
<select id="prAngle">
<option value="90" selected>90° clockwise</option>
<option value="270">90° counter-clockwise</option>
<option value="180">180° (upside down → upright)</option>
</select>
<div class="hint">Most phone scans just need a single 90° turn.</div>
</div>
<div class="setting">
<label for="prMode">Pages to rotate</label>
<select id="prMode">
<option value="all" selected>All pages</option>
<option value="pick">Pick specific pages</option>
</select>
<div class="hint">Choose "pick" to rotate only the sideways ones.</div>
</div>
</div>
<div class="page-picker" id="prPickerWrap" style="display:none">
<p class="picker-label">Select pages to rotate <span class="val" id="prCount"></span></p>
<div class="page-chips" id="prChips"></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Rotate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="prBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Rotate &amp; Download PDF
</button>
<button type="button" class="btn-pro-outline" id="prClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="prProgWrap">
<div class="progress-bar"><i id="prProgBar"></i></div>
<div class="progress-text" id="prProgText">Working…</div>
</div>
<div class="results" id="prResults">
<p class="result-head">✅ Done — your rotated PDF</p>
<div class="result-summary" id="prSummary"></div>
<div class="result-grid" id="prGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — rotate as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('prShell');
  ToolPro.themeToggle(shell, document.getElementById('prTheme'));

  var file = null;
  var pageCount = 0;
  var selected = {};
  var listEl = document.getElementById('prList');
  var btn = document.getElementById('prBtn');
  var clearBtn = document.getElementById('prClear');
  var angleSel = document.getElementById('prAngle');
  var modeSel = document.getElementById('prMode');
  var presets = document.getElementById('prPresets');
  var pickerWrap = document.getElementById('prPickerWrap');
  var chipsEl = document.getElementById('prChips');
  var countEl = document.getElementById('prCount');

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    angleSel.value = chip.dataset.r;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  function updateCount(){
    var n = Object.keys(selected).filter(function(k){ return selected[k]; }).length;
    countEl.textContent = '(' + n + ' selected)';
    return n;
  }

  function buildChips(){
    chipsEl.innerHTML = ''; selected = {};
    for(var i = 1; i <= pageCount; i++){
      selected[i] = true;
      (function(p){
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'page-chip active';
        b.textContent = p;
        b.addEventListener('click', function(){
          selected[p] = !selected[p];
          b.classList.toggle('active', selected[p]);
          updateCount();
        });
        chipsEl.appendChild(b);
      })(i);
    }
    updateCount();
  }

  function loadPdfLib(){
    return new Promise(function(resolve, reject){
      if(window.PDFLib){ resolve(); return; }
      var s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf.min.js';
      s.onload = function(){ resolve(); };
      s.onerror = function(){ reject(new Error('Could not load the PDF engine. Check your connection and try again.')); };
      document.head.appendChild(s);
    });
  }

  ToolPro.dropzone(document.getElementById('prDrop'), {
    multiple: false,
    accept: 'application/pdf',
    maxFiles: 1,
    onFiles: async function(arr){
      file = arr[0];
      listEl.innerHTML = '';
      var row = ToolPro.fileRow(listEl, file, function(){ file = null; pageCount = 0; refreshButtons(); });
      row.setStatus('Reading…', 'working');
      document.getElementById('prResults').classList.remove('show');
      refreshButtons();
      try{
        await loadPdfLib();
        var buf = await file.arrayBuffer();
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        pageCount = doc.getPageCount();
        row.setStatus(pageCount + (pageCount === 1 ? ' page' : ' pages'), 'done');
        buildChips();
        ToolPro.toast('PDF loaded — ' + pageCount + ' pages', 'ok');
      }catch(err){
        row.setStatus('Unreadable PDF', '');
        file = null; pageCount = 0; refreshButtons();
        ToolPro.toast('Could not read this PDF', 'err');
      }
    }
  });

  modeSel.addEventListener('change', function(){
    pickerWrap.style.display = (modeSel.value === 'pick' && pageCount) ? 'block' : 'none';
  });

  clearBtn.addEventListener('click', function(){
    file = null; pageCount = 0; listEl.innerHTML = ''; chipsEl.innerHTML = '';
    pickerWrap.style.display = 'none';
    document.getElementById('prResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file) return;
    var angle = parseInt(angleSel.value, 10);
    var progWrap = document.getElementById('prProgWrap');
    var progBar = document.getElementById('prProgBar');
    var progText = document.getElementById('prProgText');
    var grid = document.getElementById('prGrid');
    var resBox = document.getElementById('prResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    try{
      progText.textContent = 'Rotating pages…';
      progBar.style.width = '30%';
      var buf = await file.arrayBuffer();
      var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var pages = doc.getPages();
      var rotated = 0;
      for(var i = 0; i < pages.length; i++){
        var pageNum = i + 1;
        if(modeSel.value === 'pick' && !selected[pageNum]) continue;
        var cur = pages[i].getRotation().angle;
        pages[i].setRotation(PDFLib.degrees((cur + angle) % 360));
        rotated++;
      }
      progBar.style.width = '80%';
      progText.textContent = 'Building new PDF…';
      var bytes = await doc.save();
      progBar.style.width = '100%';
      var blob = new Blob([bytes], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-rotated.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        rotated + (rotated === 1 ? ' page' : ' pages') + ' rotated by ' + angle + '° · ' +
        ToolPro.fmtBytes(blob.size);
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('prSummary').textContent =
        '🎉 ' + rotated + (rotated === 1 ? ' page' : ' pages') + ' rotated — your fixed PDF is ready.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF rotated', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Rotation failed', 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in your PDF — page count is detected right in your browser.
2. Choose a rotation angle (90° right, 90° left, or 180° flip) and whether to rotate all pages or pick specific ones.
3. Hit **Rotate &amp; Download PDF** — your corrected PDF downloads instantly.

## Everyday uses

- **Phone scans** — fix sideways scans from scanner apps before emailing them.
- **Students** — straighten lecture slides and readings a classmate scanned crooked.
- **Job applications** — make sure your resume and certificates open right-side up for recruiters.
- **Contracts &amp; forms** — rotate upside-down pages in multi-page documents.
- **Receipts** — fix rotated receipt scans before submitting expenses.

**Tip:** 90° clockwise fixes most phone scans. If a document was scanned upside down, use the 180° flip.
