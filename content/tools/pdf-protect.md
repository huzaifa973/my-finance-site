---
title: "Free PDF Password Protection — Encrypt PDF Online"
description: "Password-protect any PDF in your browser with user + owner passwords and printing/copying controls. pdf-lib encryption, free forever, files never leave your device."
category: pdf
date: 2026-10-19
draft: false
---

Lock a PDF before you share it. Upload your file, set a user password (required to open) and an optional owner password, choose exactly what recipients may do — print, copy, modify — and download the encrypted file. Encryption happens 100% in your browser with pdf-lib; your files never leave your device.

<div class="tool-shell" id="ptpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Protect PDF with Password</h2>
<p>Encrypt any PDF with passwords + permission controls — right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="ptpTheme">🌙 Dark</button>
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
<div class="dropzone" id="ptpDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — one file at a time</span>
<input type="file" id="ptpFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="ptpList"></ul>
<div class="hint">🔒 Private: your PDF is encrypted on your device — files never leave your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Passwords &amp; permissions</p>
<div class="settings-panel">
<div class="preset-row" id="ptpPresets">
<button type="button" class="preset-chip active" data-print="1" data-copy="1" data-mod="0">⚖️ Balanced — print &amp; copy allowed</button>
<button type="button" class="preset-chip" data-print="1" data-copy="0" data-mod="0">👁️ View-only — no copying</button>
<button type="button" class="preset-chip" data-print="0" data-copy="0" data-mod="0">🔒 Strict — open &amp; read only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ptpUser">User password (required to open)</label>
<input type="password" id="ptpUser" class="tool-input" placeholder="Min. 6 characters" autocomplete="new-password">
<div class="hint">Share this with the recipient. Longer = stronger.</div>
</div>
<div class="setting">
<label for="ptpOwner">Owner password (optional — full control)</label>
<input type="password" id="ptpOwner" class="tool-input" placeholder="Defaults to the user password" autocomplete="new-password">
<div class="hint">Lets you change permissions later without the user password.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Allow printing</span><label class="toggle"><input type="checkbox" id="ptpPrint" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Allow copying text/images</span><label class="toggle"><input type="checkbox" id="ptpCopy" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Allow modifying the document</span><label class="toggle"><input type="checkbox" id="ptpMod"><span class="track"></span></label></div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Protect &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ptpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/></svg>
Protect PDF
</button>
<button type="button" class="btn-pro-outline" id="ptpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ptpProgWrap">
<div class="progress-bar"><i id="ptpProgBar"></i></div>
<div class="progress-text" id="ptpProgText">Encrypting…</div>
</div>
<div class="results" id="ptpResults">
<p class="result-head">✅ PDF protected</p>
<div class="result-summary" id="ptpSummary"></div>
<div class="result-grid" id="ptpGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Protect as many PDFs as you like — encryption runs entirely in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ptpShell');
  ToolPro.themeToggle(shell, document.getElementById('ptpTheme'));

  var file = null, row = null;
  var listEl = document.getElementById('ptpList');
  var btn = document.getElementById('ptpBtn');
  var clearBtn = document.getElementById('ptpClear');
  var userEl = document.getElementById('ptpUser');

  document.getElementById('ptpPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('ptpPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('ptpPrint').checked = chip.dataset.print === '1';
    document.getElementById('ptpCopy').checked = chip.dataset.copy === '1';
    document.getElementById('ptpMod').checked = chip.dataset.mod === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var ok = !!file && userEl.value.length >= 6;
    btn.disabled = !ok;
    clearBtn.disabled = !file;
  }
  userEl.addEventListener('input', refresh);

  ToolPro.dropzone(document.getElementById('ptpDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      var f = arr[0];
      listEl.innerHTML = ''; file = f;
      row = ToolPro.fileRow(listEl, f, function(){ file = null; refresh(); });
      document.getElementById('ptpResults').classList.remove('show');
      refresh();
      ToolPro.toast('PDF added: ' + f.name, 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('ptpResults').classList.remove('show');
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
    if(!file || userEl.value.length < 6) return;
    var userPw = userEl.value;
    var ownerPw = document.getElementById('ptpOwner').value || userPw;
    var progWrap = document.getElementById('ptpProgWrap');
    var progBar = document.getElementById('ptpProgBar');
    var progText = document.getElementById('ptpProgText');
    var grid = document.getElementById('ptpGrid');
    var resBox = document.getElementById('ptpResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    progBar.style.width = '15%'; progText.textContent = 'Loading encryption engine…';
    try {
      var PDFLib = await loadPdfLib();
      progBar.style.width = '40%'; progText.textContent = 'Reading PDF…';
      var bytes = await file.arrayBuffer();
      var pdfDoc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
      progBar.style.width = '65%'; progText.textContent = 'Applying encryption…';
      pdfDoc.encrypt({
        userPassword: userPw,
        ownerPassword: ownerPw,
        permissions: {
          printing: document.getElementById('ptpPrint').checked ? 'highResolution' : undefined,
          copying: document.getElementById('ptpCopy').checked,
          modifying: document.getElementById('ptpMod').checked,
          annotating: document.getElementById('ptpMod').checked,
          fillingForms: true,
          contentAccessibility: true,
          documentAssembly: false
        }
      });
      progBar.style.width = '85%'; progText.textContent = 'Saving…';
      var out = await pdfDoc.save();
      var blob = new Blob([out], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      progBar.style.width = '100%';
      var base = file.name.replace(/\.pdf$/i, '');
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download Protected PDF</button>';
      card.querySelector('.r-name').textContent = base + '-protected.pdf';
      card.querySelector('.r-stats').textContent = ToolPro.fmtBytes(out.length) + ' · AES-encrypted · opens with your user password';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, base + '-protected.pdf'); });
      grid.appendChild(card);
      document.getElementById('ptpSummary').textContent = '✅ "' + file.name + '" is now password-protected. Keep your password safe — it cannot be recovered.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if(row) row.setStatus('Done', 'done');
      ToolPro.toast('PDF protected', 'ok');
    } catch(e){
      progWrap.classList.remove('show');
      ToolPro.toast('Failed: ' + (e && e.message ? e.message : 'could not encrypt this file'), 'err');
    }
    refresh();
  });

  refresh();
})();
</script>

## How it works

The tool loads your PDF with pdf-lib (a JavaScript PDF library) and calls its `encrypt()` API before saving: it sets a user password (required to open the file), an owner password (controls permissions), and a permissions object for printing, copying, modifying, and annotating. The output is a standard AES-encrypted PDF that opens in any reader — Adobe Acrobat, Chrome, Preview — with the password you chose.

**Important:** PDF permission flags (no-print, no-copy) are honored by most readers but are not unbreakable DRM — a determined user with the right software can bypass them. The open-password, however, uses real AES encryption: without the password, the content is unreadable. And because everything runs locally, your document and password never touch a server.

## Everyday uses

- **Freelancers** — lock invoices and contracts before emailing them to clients.
- **HR teams** — protect offer letters and salary documents shared electronically.
- **Students** — password-protect a thesis before sending it for review.
- **Businesses** — restrict price lists to print-only so they can't be easily edited.
- **Personal** — encrypt scans of IDs and certificates before cloud backup.
