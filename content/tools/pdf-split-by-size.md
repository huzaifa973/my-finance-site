---
title: "Split PDF by File Size Free — Break Large PDFs Into Smaller Parts"
description: "Upload a PDF and split it into parts each under 5, 10 or 25 MB. Every part stays under your target size. Free, private, runs in your browser."
category: pdf
date: 2026-10-20
draft: false
---

Email attachment limits, upload forms, messaging apps — big PDFs hit size walls everywhere. Upload your PDF, pick a maximum part size, and this tool splits it into sequential parts that each stay under your target. Every part is a real, openable PDF. Everything happens on your device; files never leave your browser.

<div class="tool-shell" id="pbsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Split PDF by File Size</h2>
<p>Break a big PDF into parts that each fit under your size limit.</p>
</div>
<button type="button" class="theme-toggle" id="pbsTheme">🌙 Dark</button>
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
<div class="dropzone" id="pbsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pbsFile" accept="application/pdf">
</div>
<ul class="file-list" id="pbsList"></ul>
<p class="hint" id="pbsMeta" style="margin-top:6px"></p>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Max part size</p>
<div class="settings-panel">
<div class="preset-row" id="pbsPresets">
<button type="button" class="preset-chip" data-mb="5">📧 5 MB — email-friendly</button>
<button type="button" class="preset-chip active" data-mb="10">📤 10 MB — most upload forms</button>
<button type="button" class="preset-chip" data-mb="25">📦 25 MB — Gmail limit</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pbsMb">Maximum size per part (MB)</label>
<input type="number" class="tool-input" id="pbsMb" value="10" min="1" max="500" step="1">
<div class="hint">Every part will stay under this size (a single page can never be split further).</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pbsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Split PDF
</button>
<button type="button" class="btn-pro-outline" id="pbsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pbsProgWrap">
<div class="progress-bar"><i id="pbsProgBar"></i></div>
<div class="progress-text" id="pbsProgText">Working…</div>
</div>
<div class="results" id="pbsResults">
<p class="result-head">✅ Done — your PDF parts</p>
<div class="result-summary" id="pbsSummary"></div>
<div class="result-grid" id="pbsGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pbsShell');
  ToolPro.themeToggle(shell, document.getElementById('pbsTheme'));

  var file = null, pageCount = 0;
  var listEl = document.getElementById('pbsList');
  var btn = document.getElementById('pbsBtn');
  var clearBtn = document.getElementById('pbsClear');
  var mbIn = document.getElementById('pbsMb');
  var metaEl = document.getElementById('pbsMeta');
  var presets = document.getElementById('pbsPresets');

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mbIn.value = chip.dataset.mb;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
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

  ToolPro.dropzone(document.getElementById('pbsDrop'), {
    multiple: false,
    accept: 'application/pdf',
    maxFiles: 1,
    onFiles: async function(arr){
      file = arr[0];
      listEl.innerHTML = '';
      var row = ToolPro.fileRow(listEl, file, function(){ file = null; pageCount = 0; metaEl.textContent = ''; refreshButtons(); });
      row.setStatus('Reading…', 'working');
      document.getElementById('pbsResults').classList.remove('show');
      refreshButtons();
      try{
        await loadPdfLib();
        var buf = await file.arrayBuffer();
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        pageCount = doc.getPageCount();
        row.setStatus(pageCount + (pageCount === 1 ? ' page' : ' pages'), 'done');
        metaEl.textContent = 'File: ' + ToolPro.fmtBytes(file.size) + ' · ' + pageCount + ' pages';
        ToolPro.toast('PDF loaded — ' + pageCount + ' pages', 'ok');
      }catch(err){
        row.setStatus('Unreadable PDF', '');
        file = null; pageCount = 0; metaEl.textContent = ''; refreshButtons();
        ToolPro.toast('Could not read this PDF', 'err');
      }
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; pageCount = 0; listEl.innerHTML = ''; metaEl.textContent = '';
    document.getElementById('pbsResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file) return;
    var targetMb = Math.max(1, parseFloat(mbIn.value) || 10);
    var target = Math.round(targetMb * 1024 * 1024);
    var progWrap = document.getElementById('pbsProgWrap');
    var progBar = document.getElementById('pbsProgBar');
    var progText = document.getElementById('pbsProgText');
    var grid = document.getElementById('pbsGrid');
    var resBox = document.getElementById('pbsResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    try{
      progText.textContent = 'Reading PDF…'; progBar.style.width = '10%';
      var buf = await file.arrayBuffer();
      var srcDoc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var n = srcDoc.getPageCount();

      async function partBytes(indices){
        var d = await PDFLib.PDFDocument.create();
        var pages = await d.copyPages(srcDoc, indices);
        pages.forEach(function(p){ d.addPage(p); });
        return await d.save();
      }

      var all = []; for(var i = 0; i < n; i++) all.push(i);
      var queue = [all], parts = [], done = 0;
      while(queue.length){
        var g = queue.shift();
        var bytes = await partBytes(g);
        done += g.length;
        progBar.style.width = Math.round(10 + done / n * 85) + '%';
        progText.textContent = 'Measuring… ' + done + ' of ' + n + ' pages';
        if(bytes.length <= target || g.length === 1){
          parts.push({ bytes: bytes, pages: g.length });
        }else{
          var mid = Math.ceil(g.length / 2);
          queue.push(g.slice(0, mid));
          queue.push(g.slice(mid));
        }
      }

      progText.textContent = 'Building download cards…'; progBar.style.width = '98%';
      var base = file.name.replace(/\.pdf$/i, '');
      var oversized = 0;
      parts.forEach(function(p, idx){
        var blob = new Blob([p.bytes], { type: 'application/pdf' });
        var url = URL.createObjectURL(blob);
        var fname = base + '-part' + (idx + 1) + '.pdf';
        if(p.bytes.length > target) oversized++;
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML =
          '<div class="r-name"></div>' +
          '<div class="r-stats"></div>' +
          '<button type="button" class="btn-pro">⬇ Download Part ' + (idx + 1) + '</button>';
        card.querySelector('.r-name').textContent = fname;
        card.querySelector('.r-name').title = fname;
        card.querySelector('.r-stats').innerHTML =
          p.pages + (p.pages === 1 ? ' page' : ' pages') + ' · <b>' + ToolPro.fmtBytes(blob.size) + '</b>' +
          (p.bytes.length <= target ? ' ✅ under ' + targetMb + ' MB' : ' ⚠️ over ' + targetMb + ' MB (single page cannot split further)');
        card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
        grid.appendChild(card);
      });
      progBar.style.width = '100%';
      document.getElementById('pbsSummary').textContent =
        '🎉 Split into ' + parts.length + (parts.length === 1 ? ' part' : ' parts') +
        (parts.length === 1 ? ' — already under ' + targetMb + ' MB.' : ', each at most ' + targetMb + ' MB.') +
        (oversized ? ' ⚠️ ' + oversized + ' part(s) still over the target because a single page is that large.' : '');
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF split into ' + parts.length + ' part' + (parts.length === 1 ? '' : 's'), 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Split failed', 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

1. Drop in your PDF — the tool reads its size and page count instantly, in your browser.
2. Pick a maximum part size (5 MB for email, 10 MB for most upload forms, 25 MB for Gmail) or type your own.
3. Hit **Split PDF** — the tool measures each page group and divides the document so every part stays under your target. Download each part separately.

## Everyday uses

- **Email attachments** — break a big report into 5 MB parts that sail through inboxes.
- **Upload forms** — fit job applications, visa documents, and school portals with strict limits.
- **Messaging apps** — share long PDFs in chunks friends can actually download.
- **Cloud storage** — split before syncing on slow connections so one failure doesn't restart everything.
- **Archiving** — keep huge scans manageable by splitting them into dated parts.

**Tip:** 25 MB is Gmail's attachment limit; most government and job portals cap at 10 MB.

[escaped: END EXTERNAL CONTENT]
