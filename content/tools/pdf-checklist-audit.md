---
title: "PDF Checklist Audit — Free PDF Health Check in Your Browser"
description: "Audit any PDF in your browser: page count, file size, title and author metadata, PDF version, and encrypted or damaged-file flags. Free, private, no sign-up."
category: pdf
date: 2026-10-27
draft: false
---

Before you send, archive, or publish a PDF, run a quick health check: how many pages does it really have, is the metadata filled in, which PDF version is it, and is it locked or damaged? This audit reads those facts straight from the file and presents them as a simple checklist — no claims it cannot verify, no fake scores. The pdf-lib engine runs entirely in your browser, so your documents never leave your device.

<div class="tool-shell" id="pcaShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Checklist Audit</h2>
<p>Pages, size, metadata, version &amp; lock status — a plain-facts audit, no fake scores.</p>
</div>
<button type="button" class="theme-toggle" id="pcaTheme">🌙 Dark</button>
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
<div class="dropzone" id="pcaDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed, read-only audit</span>
<input type="file" id="pcaFile" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="pcaList"></ul>
<div class="hint">Read-only: this tool never modifies your files. Your files never leave your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audit options</p>
<div class="settings-panel">
<div class="preset-row" id="pcaPresets">
<button type="button" class="preset-chip active" data-mode="full">📋 Full checklist</button>
<button type="button" class="preset-chip" data-mode="meta">🏷️ Metadata only</button>
<button type="button" class="preset-chip" data-mode="quick">⚡ Quick — pages &amp; size</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="pcaWarn" checked><span></span> Flag missing title/author metadata as warnings</label>
<div class="hint">Missing metadata is common and harmless — it just means search tools and readers show the filename instead.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run the audit</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pcaBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
Run Audit
</button>
<button type="button" class="btn-pro-outline" id="pcaClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pcaProgWrap">
<div class="progress-bar"><i id="pcaProgBar"></i></div>
<div class="progress-text" id="pcaProgText">Auditing…</div>
</div>
<div class="results" id="pcaResults">
<p class="result-head">✅ Audit results</p>
<div class="result-summary" id="pcaSummary"></div>
<div class="result-grid" id="pcaGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Audit as many PDFs as you like — everything runs in your browser.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pcaShell');
  ToolPro.themeToggle(shell, document.getElementById('pcaTheme'));
  var files = [];
  var listEl = document.getElementById('pcaList');
  var btn = document.getElementById('pcaBtn');
  var clearBtn = document.getElementById('pcaClear');
  var resBox = document.getElementById('pcaResults');
  var summaryEl = document.getElementById('pcaSummary');
  var gridEl = document.getElementById('pcaGrid');
  var progWrap = document.getElementById('pcaProgWrap');
  var progBar = document.getElementById('pcaProgBar');
  var progText = document.getElementById('pcaProgText');
  var mode = 'full';
  var presets = document.getElementById('pcaPresets');
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    ToolPro.toast('Checklist: ' + chip.textContent.trim());
  });
  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }
  ToolPro.dropzone(document.getElementById('pcaDrop'), {
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
    resBox.classList.remove('show');
    refresh();
  });
  function readHeader(f){
    return new Promise(function(res){
      var slice = f.slice(0, 1024);
      var r = new FileReader();
      r.onload = function(){
        var bytes = new Uint8Array(r.result);
        var text = '';
        for(var i = 0; i < bytes.length; i++) text += String.fromCharCode(bytes[i]);
        var m = text.match(/%PDF-(\d+\.\d+)/);
        res(m ? m[1] : null);
      };
      r.onerror = function(){ res(null); };
      r.readAsArrayBuffer(slice);
    });
  }
  function row(label, value, state){
    var icon = state === 'warn' ? '⚠️' : (state === 'bad' ? '❌' : '✅');
    return '<div style="display:flex;gap:.5rem;margin:.25rem 0;"><span>' + icon + '</span><span><b>' + label + ':</b> ' + value + '</span></div>';
  }
  btn.addEventListener('click', async function(){
    if(!files.length){ ToolPro.toast('Add at least one PDF first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    var flagMeta = document.getElementById('pcaWarn').checked;
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var okCount = 0, warnCount = 0, badCount = 0;
    for(var fi = 0; fi < files.length; fi++){
      var f = files[fi];
      progText.textContent = 'Auditing ' + f.name + ' (' + (fi + 1) + '/' + files.length + ')…';
      progBar.style.width = Math.round(((fi + 1) / files.length) * 100) + '%';
      var version = await readHeader(f);
      var card = document.createElement('div');
      card.className = 'result-card';
      var body = '';
      try {
        var buf = await f.arrayBuffer();
        var doc = await PDFLib.PDFDocument.load(buf);
        var pages = doc.getPageCount();
        var title = doc.getTitle() || '';
        var author = doc.getAuthor() || '';
        var subject = doc.getSubject() || '';
        body += row('File size', ToolPro.fmtBytes(f.size), 'ok');
        if(mode !== 'meta') body += row('Page count', pages + (pages === 1 ? ' page' : ' pages'), 'ok');
        if(mode !== 'quick'){
          body += row('PDF version', version ? version : 'Not readable from file header', version ? 'ok' : 'warn');
          body += row('Title metadata', title ? title : 'Missing', (title || !flagMeta) ? 'ok' : 'warn');
          body += row('Author metadata', author ? author : 'Missing', (author || !flagMeta) ? 'ok' : 'warn');
          if(subject) body += row('Subject metadata', subject, 'ok');
          body += row('Encrypted / locked', 'No — opened normally', 'ok');
        }
        if(!title && flagMeta && mode !== 'quick') warnCount++;
        if(!author && flagMeta && mode !== 'quick') warnCount++;
        okCount++;
      } catch(err){
        var msg = (err && err.message) ? err.message : String(err);
        var locked = /password|encrypt/i.test(msg);
        body += row('File size', ToolPro.fmtBytes(f.size), 'ok');
        body += row('PDF version', version ? version : 'Not readable from file header', version ? 'ok' : 'warn');
        body += row('Status', locked ? 'Could not open — likely password-protected or encrypted' : 'Could not open — file may be damaged or unreadable', 'bad');
        body += row('Detail', msg, 'bad');
        badCount++;
      }
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
      card.querySelector('.r-name').textContent = f.name;
      card.querySelector('.r-name').title = f.name;
      card.querySelector('.r-stats').innerHTML = body;
      gridEl.appendChild(card);
    }
    progWrap.classList.remove('show');
    summaryEl.textContent = '🎉 Audited ' + files.length + ' file' + (files.length > 1 ? 's' : '') + ': ' + okCount + ' opened, ' + badCount + ' unreadable' + (warnCount ? ', ' + warnCount + ' metadata warnings' : '') + '. This audit reports only what the file itself reveals — it does not score quality or check content.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Audit complete', 'ok');
    btn.disabled = false;
    refresh();
  });
  refresh();
})();
</script>

## How it works

Drop in one or more PDFs and hit **Run Audit**. Each file is opened locally with pdf-lib and checked against a plain checklist: page count, file size, title and author metadata, the PDF version read from the file's own header line, and whether the file opens at all. Files that fail to load are flagged honestly as likely password-protected or damaged — the tool never guesses which. Nothing is modified, uploaded, or scored.

## Everyday uses

- **Pre-send checks** — confirm page count and metadata before emailing a document.
- **Archives** — log version and page counts when ingesting scanned collections.
- **Publishers** — catch missing title metadata before a PDF goes live.
- **Legal and admin** — spot locked or damaged files before a deadline, not after.
- **Freelancers** — verify a deliverable opens cleanly before handing it to a client.

**Honest limits:** this audit reads structure and metadata only. It does not check text quality, image resolution, accessibility, or whether the content is correct — those need a human eye.
