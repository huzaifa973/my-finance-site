---
title: "Free PDF Unlock — Remove Password From PDF Online"
description: "Remove the password from a PDF you own: enter the known password, download a clean unlocked copy. 100% in-browser, free forever, files never leave your device."
category: pdf
date: 2026-10-19
draft: false
---

Tired of typing the password every time you open your own PDF? Upload it, enter the password you know, and download a clean unlocked copy. This only works when you know the password — it cannot crack or recover forgotten passwords. Everything runs in your browser; files never leave your device.

<div class="tool-shell" id="punShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Unlock PDF (Remove Password)</h2>
<p>Enter the password you know — get back a clean, unlocked PDF in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="punTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your locked PDF</p>
<div class="dropzone" id="punDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a password-protected PDF</strong>
<span>or click to browse — one file at a time</span>
<input type="file" id="punFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="punList"></ul>
<div class="hint">🔒 Private: decryption happens on your device — files never leave your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Enter the known password</p>
<div class="settings-panel">
<div class="preset-row" id="punPresets">
<button type="button" class="preset-chip active" data-mode="user">🔑 User password (opens the file)</button>
<button type="button" class="preset-chip" data-mode="owner">👑 Owner password (restrictions only)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="punPw">PDF password</label>
<input type="password" id="punPw" class="tool-input" placeholder="Enter the password you know" autocomplete="current-password">
<div class="hint" id="punHint">The user password is the one the PDF asks for when you open it.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Keep the original filename</span><label class="toggle"><input type="checkbox" id="punKeep" checked><span class="track"></span></label></div>
<div class="hint">Off = adds "-unlocked" to the filename.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Unlock &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="punBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>
Unlock PDF
</button>
<button type="button" class="btn-pro-outline" id="punClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="punProgWrap">
<div class="progress-bar"><i id="punProgBar"></i></div>
<div class="progress-text" id="punProgText">Unlocking…</div>
</div>
<div class="results" id="punResults">
<p class="result-head">✅ PDF unlocked</p>
<div class="result-summary" id="punSummary"></div>
<div class="result-grid" id="punGrid"></div>
<div class="result-card" style="margin-top:1rem">
<div class="r-name">⚠️ Honest note</div>
<div class="r-stats">This tool <b>only</b> removes encryption when you supply the correct password — it cannot crack, guess, or recover forgotten passwords. If you've lost the password, no legitimate online tool can help; contact the document's author.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Unlock as many of your own PDFs as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('punShell');
  ToolPro.themeToggle(shell, document.getElementById('punTheme'));

  var file = null, row = null;
  var listEl = document.getElementById('punList');
  var btn = document.getElementById('punBtn');
  var clearBtn = document.getElementById('punClear');
  var pwEl = document.getElementById('punPw');

  document.getElementById('punPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('punPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('punHint').textContent = chip.dataset.mode === 'owner'
      ? 'The owner password removes printing/copying restrictions even if you cannot open the file with a user password.'
      : 'The user password is the one the PDF asks for when you open it.';
    ToolPro.toast('Mode: ' + chip.textContent.trim());
  });

  function refresh(){
    btn.disabled = !(file && pwEl.value.length > 0);
    clearBtn.disabled = !file;
  }
  pwEl.addEventListener('input', refresh);

  ToolPro.dropzone(document.getElementById('punDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      var f = arr[0];
      listEl.innerHTML = ''; file = f;
      row = ToolPro.fileRow(listEl, f, function(){ file = null; refresh(); });
      document.getElementById('punResults').classList.remove('show');
      refresh();
      ToolPro.toast('PDF added: ' + f.name, 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('punResults').classList.remove('show');
    refresh();
  });

  function loadPdfLib(){
    return new Promise(function(resolve, reject){
      if(window.PDFLib) return resolve(window.PDFLib);
      var s = document.createElement('script');
      s.src = 'https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js';
      s.onload = function(){ resolve(window.PDFLib); };
      s.onerror = function(){ reject(new Error('CDN unreachable')); };
      document.head.appendChild(s);
    });
  }

  btn.addEventListener('click', async function(){
    if(!file || !pwEl.value) return;
    var pw = pwEl.value;
    var progWrap = document.getElementById('punProgWrap');
    var progBar = document.getElementById('punProgBar');
    var progText = document.getElementById('punProgText');
    var grid = document.getElementById('punGrid');
    var resBox = document.getElementById('punResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    progBar.style.width = '15%'; progText.textContent = 'Loading engine…';
    if(row) row.setStatus('Working…', 'working');
    try {
      var PDFLib = await loadPdfLib();
      progBar.style.width = '40%'; progText.textContent = 'Decrypting with your password…';
      var bytes = await file.arrayBuffer();
      var pdfDoc;
      try {
        pdfDoc = await PDFLib.PDFDocument.load(bytes, { password: pw });
      } catch(e){
        throw new Error('wrong-password');
      }
      progBar.style.width = '75%'; progText.textContent = 'Saving unlocked copy…';
      var out = await pdfDoc.save();
      var blob = new Blob([out], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      progBar.style.width = '100%';
      var keep = document.getElementById('punKeep').checked;
      var base = file.name.replace(/\.pdf$/i, '');
      var outName = keep ? file.name : base + '-unlocked.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download Unlocked PDF</button>';
      card.querySelector('.r-name').textContent = outName;
      card.querySelector('.r-stats').textContent = ToolPro.fmtBytes(out.length) + ' · ' + pdfDoc.getPageCount() + ' pages · no password required';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, outName); });
      grid.appendChild(card);
      document.getElementById('punSummary').textContent = '✅ Password removed — the downloaded copy opens without any password.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if(row) row.setStatus('Done', 'done');
      ToolPro.toast('PDF unlocked', 'ok');
    } catch(e){
      progWrap.classList.remove('show');
      if(row) row.setStatus('Failed', '');
      if(e && e.message === 'wrong-password'){
        ToolPro.toast('Wrong password — the PDF rejected it. Check caps lock and try again.', 'err');
      } else {
        ToolPro.toast('Failed: ' + (e && e.message ? e.message : 'could not process this file'), 'err');
      }
    }
    refresh();
  });

  refresh();
})();
</script>

## How it works

PDF encryption (AES) scrambles the document's content with a key derived from your password. This tool loads the file with pdf-lib, passes your password to derive the same key, and — when it matches — decrypts every object in memory, then saves a brand-new PDF **without** calling `encrypt()`. The result is a standard, fully readable PDF with identical pages and no password prompt.

**Why it can't crack passwords:** AES-256 with a proper password has no shortcut — trying every combination would take longer than the age of the universe. This tool only works because *you* supply the correct password. If a site claims to remove passwords without asking for them, it's either working on the weak "owner restrictions" flag or it's not legitimate.

## Everyday uses

- **Your own archives** — strip the password off bank statements you password-protect for email, so your own filing is searchable.
- **Team documents** — remove a shared password from a file everyone already has, ending the "what's the password again?" loop.
- **E-books you own** — unlock owner-restrictions (no-copy flags) on files you legitimately purchased, using the owner password.
- **Merging workflows** — unlock files first so merge/split tools can process them without prompts.
- **Only with the password** — this tool is for your own files; it will plainly tell you when the password is wrong.
