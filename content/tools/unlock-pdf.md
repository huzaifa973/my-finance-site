---
title: "Free Unlock PDF Online — Remove an Open Password You Know"
description: "Remove the open password from a PDF you own, right in your browser. You must know the password — nothing is uploaded, cracked, or stored anywhere."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Locked out of your own PDF by a password you actually know? Enter it here and this tool rebuilds the document as a fresh PDF with no password at all. Everything happens in your browser — the file and the password never leave your device, and the password is never sent or stored. One honest trade-off: the unlocked copy is rebuilt from high-resolution renders of each page, so it looks and prints exactly the same, but its text becomes part of the page image rather than selectable text.

<div class="tool-shell" id="unlShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10.5 3a6.5 6.5 0 1 0 4.6 10.98l1.4 1.4v2.12h2.12v-2.12h1.77v-2.83h-2.83l-2.35-2.35A6.5 6.5 0 0 0 10.5 3zm0 3.5A3.5 3.5 0 1 1 7 10a3.5 3.5 0 0 1 3.5-3.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Unlock PDF</h2>
<p>Remove the open password from a PDF you own — you bring the password, your browser does the rest.</p>
</div>
<button type="button" class="theme-toggle" id="unlTheme">🌙 Dark</button>
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
<div class="dropzone" id="unlDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only · one file at a time</span>
<input type="file" id="unlFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="unlList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Enter the password</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="unlPass">Open password</label>
<input type="password" id="unlPass" class="tool-input" placeholder="The password that opens the file" autocomplete="off">
<div class="hint">Used only inside your browser — never sent or stored. Leave it blank if you think the file might not be locked; the tool will check and tell you. This tool cannot guess or crack a forgotten password.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Unlock &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="unlBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M10.5 3a6.5 6.5 0 1 0 4.6 10.98l1.4 1.4v2.12h2.12v-2.12h1.77v-2.83h-2.83l-2.35-2.35A6.5 6.5 0 0 0 10.5 3zm0 3.5A3.5 3.5 0 1 1 7 10a3.5 3.5 0 0 1 3.5-3.5z"/></svg>
Unlock PDF
</button>
<button type="button" class="btn-pro-outline" id="unlClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="unlProgWrap">
<div class="progress-bar"><i id="unlProgBar"></i></div>
<div class="progress-text" id="unlProgText">Working…</div>
</div>
<div class="results" id="unlResults">
<p class="result-head" id="unlHead">✅ Done</p>
<div class="result-summary" id="unlSummary"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="unlDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download unlocked PDF
</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — unlock as many of your own PDFs as you like. Your files and passwords never leave your device.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('unlShell');
  ToolPro.themeToggle(shell, document.getElementById('unlTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var pdfFile = null, outUrl = null;
  var listEl = document.getElementById('unlList');
  var passInput = document.getElementById('unlPass');
  var btn = document.getElementById('unlBtn');
  var clearBtn = document.getElementById('unlClear');
  var progWrap = document.getElementById('unlProgWrap');
  var progBar = document.getElementById('unlProgBar');
  var progText = document.getElementById('unlProgText');
  var resBox = document.getElementById('unlResults');
  var headEl = document.getElementById('unlHead');
  var summaryEl = document.getElementById('unlSummary');
  var dlBtn = document.getElementById('unlDownload');

  function resetAll(){
    pdfFile = null;
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    if(outUrl){ URL.revokeObjectURL(outUrl); outUrl = null; }
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('unlDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      resetAll();
      pdfFile = arr[0];
      ToolPro.fileRow(listEl, pdfFile, resetAll);
      btn.disabled = false; clearBtn.disabled = false;
      ToolPro.toast('PDF added — enter its password and hit Unlock', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  function showResult(head, text, canDownload){
    headEl.textContent = head;
    summaryEl.textContent = text;
    dlBtn.style.display = canDownload ? '' : 'none';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false; clearBtn.disabled = false;
  }

  function tryOpen(buf, password){
    var opts = { data: new Uint8Array(buf) };
    if(password) opts.password = password;
    return pdfjsLib.getDocument(opts).promise;
  }

  btn.addEventListener('click', async function(){
    if(!pdfFile) return;
    btn.disabled = true; clearBtn.disabled = true;
    resBox.classList.remove('show');
    var buf;
    try{ buf = await pdfFile.arrayBuffer(); }
    catch(e){
      showResult('⚠️ Could not read the file', 'Your browser could not read that file. Try again with a fresh copy of it.', false);
      return;
    }
    var pass = passInput.value;
    var pdf = null, wasLocked = false;
    try{
      pdf = await tryOpen(buf.slice(0), '');
    }catch(e1){
      if(e1 && e1.name === 'PasswordException'){
        if(!pass){
          showResult('🔒 This PDF is locked', 'This file needs its open password. Type it in step 2, then click Unlock again. Nothing has been changed.', false);
          ToolPro.toast('Password required', 'err');
          return;
        }
        try{
          pdf = await tryOpen(buf.slice(0), pass);
          wasLocked = true;
        }catch(e2){
          if(e2 && e2.name === 'PasswordException' && e2.code === 2){
            showResult('🔑 Wrong password', 'That password did not open the file — check for typos (passwords are case-sensitive) and try again. Nothing has been changed.', false);
          } else if(e2 && e2.name === 'PasswordException'){
            showResult('🔒 Still locked', 'The file is still asking for a password. Double-check it and try again.', false);
          } else {
            showResult('⚠️ Could not open the PDF', 'The password was accepted but the file could not be read — it may be damaged.', false);
          }
          ToolPro.toast('Could not unlock', 'err');
          return;
        }
      } else {
        showResult('⚠️ Could not open the PDF', 'That file could not be read — it may be damaged, or not a real PDF.', false);
        ToolPro.toast('Could not open the PDF', 'err');
        return;
      }
    }
    if(!wasLocked){
      showResult('ℹ️ This PDF was not locked', 'Good news: the file opened without any password, so there is no open password to remove — it is already free to open and share. (A few PDFs carry an invisible "owner" password that only restricts copying or printing; those open normally too, and no browser tool can detect or strip them.)', false);
      ToolPro.toast('This PDF was not locked', 'ok');
      return;
    }
    var jsPDFCtor = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if(!jsPDFCtor){
      showResult('⚠️ Writer library unavailable', 'The PDF writer library failed to load. Check your internet connection and try again.', false);
      return;
    }
    progWrap.classList.add('show');
    progBar.style.width = '0%';
    try{
      var total = pdf.numPages, doc = null;
      for(var n = 1; n <= total; n++){
        progText.textContent = 'Rebuilding page ' + n + ' of ' + total + '…';
        progBar.style.width = Math.round((n - 1) / total * 100) + '%';
        var page = await pdf.getPage(n);
        var v1 = page.getViewport({ scale: 1 });
        var v2 = page.getViewport({ scale: 2 });
        var canvas = document.createElement('canvas');
        canvas.width = Math.floor(v2.width);
        canvas.height = Math.floor(v2.height);
        await page.render({ canvasContext: canvas.getContext('2d'), viewport: v2 }).promise;
        var img = canvas.toDataURL('image/jpeg', 0.92);
        var orient = v1.width > v1.height ? 'landscape' : 'portrait';
        if(!doc){
          doc = new jsPDFCtor({ unit: 'pt', format: [v1.width, v1.height], orientation: orient, compress: true });
        } else {
          doc.addPage([v1.width, v1.height], orient);
        }
        doc.addImage(img, 'JPEG', 0, 0, v1.width, v1.height);
        page.cleanup();
      }
      progBar.style.width = '100%';
      var blob = doc.output('blob');
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(blob);
      showResult('✅ Unlocked copy ready', total + ' page' + (total === 1 ? '' : 's') + ' rebuilt into a new PDF with no password (' + ToolPro.fmtBytes(blob.size) + '). Honest note: each page is a high-resolution visual copy — it looks and prints exactly the same, but the text is now part of the page image, so it is not selectable or searchable.', true);
      ToolPro.toast('Unlocked PDF ready', 'ok');
    }catch(err){
      showResult('⚠️ Rebuild failed', 'The password worked, but rebuilding the pages failed — the file may use unusual features. Try a smaller or simpler PDF.', false);
      ToolPro.toast('Rebuild failed', 'err');
    }
  });

  dlBtn.addEventListener('click', function(){
    if(!outUrl) return;
    var base = pdfFile ? pdfFile.name.replace(/\.pdf$/i, '') : 'document';
    ToolPro.download(outUrl, base + '-unlocked.pdf');
  });
})();
</script>

## Everyday uses

- **Bank &amp; tax PDFs** — statements you protected with a password and are tired of typing it every time you open them.
- **Payslips &amp; salary letters** — share a copy with your accountant or a landlord without handing over the password.
- **Study material** — course and exam PDFs that annotation or read-aloud apps refuse to open while locked.
- **Your own archives** — old scanned documents you locked years ago and now want in your normal filing system.
- **Client files** — a customer sends a locked invoice you legitimately need to attach, print, or forward.

## Frequently asked questions

**I forgot the password — can this tool crack it?**
No. This tool only removes protection when you already know the correct password; it does not guess, brute-force, or recover passwords. If the password is lost, the issuing bank or organization is usually the only way back in.

**Why isn't the text selectable in the unlocked file?**
Because the unlocked copy is rebuilt from high-resolution renders of the pages: each page becomes one faithful image. It looks and prints identically and is perfect for viewing, sharing, and printing — but the words are part of the picture, so you can't select, copy, or search them. Run the unlocked file through our free PDF OCR tool if you need the text back.

**The tool says my PDF "was not locked", but my reader shows restrictions. Why?**
There are two kinds of PDF passwords. An *open* (user) password stops the file opening — that's what this tool removes. An *owner* password lets the file open but restricts copying, editing, or printing, and it isn't visible to browser-based tools, so those files open here normally and are reported as not locked.
