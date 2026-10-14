---
title: "Free PDF Metadata Viewer — Check PDF Properties Online"
description: "Read any PDF's hidden properties in your browser: title, author, creation date, page size, PDF version, encryption. Free, private — your files never leave your device."
category: pdf
date: 2026-10-14
draft: false
---

Every PDF carries hidden metadata — who created it, when, with what software, how many pages it has, even whether it's encrypted. This tool reads all of it instantly, right in your browser, without uploading your document anywhere. Handy for checking a file before you submit it or verifying a document someone sent you.

<div class="tool-shell" id="pivShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Metadata Viewer</h2>
<p>See every hidden property of a PDF — author, dates, page size, version, encryption.</p>
</div>
<button type="button" class="theme-toggle" id="pivTheme">🌙 Dark</button>
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
<div class="dropzone" id="pivDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pivFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pivList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> View properties</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pivBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
Read PDF Info
</button>
<button type="button" class="btn-pro-outline" id="pivClear" disabled>Clear</button>
</div>
<div class="results" id="pivResults">
<p class="result-head">📋 PDF properties</p>
<div class="result-summary" id="pivSummary"></div>
<div class="result-grid" id="pivGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — inspect as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pivShell');
  ToolPro.themeToggle(shell, document.getElementById('pivTheme'));

  var file = null, listEl = document.getElementById('pivList');
  var btn = document.getElementById('pivBtn');
  var clearBtn = document.getElementById('pivClear');

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pivDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pivResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — click Read PDF Info', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pivResults').classList.remove('show');
    refreshButtons();
  });

  function clean(v){
    if(v === undefined || v === null) return 'Not set';
    if(typeof v === 'string' && !v.trim()) return 'Not set';
    return String(v);
  }
  function cleanDate(d){
    if(!d) return 'Not set';
    try{
      var dt = d instanceof Date ? d : new Date(d);
      if(isNaN(dt.getTime())) return clean(d);
      return dt.toLocaleString();
    }catch(e){ return clean(d); }
  }
  function pdfVersion(bytes){
    try{
      var head = '';
      for(var i = 0; i < Math.min(12, bytes.length); i++) head += String.fromCharCode(bytes[i]);
      var m = head.match(/%PDF-(\d\.\d+)/);
      return m ? m[1] : 'Not set';
    }catch(e){ return 'Not set'; }
  }

  btn.addEventListener('click', async function(){
    if(!file) return;
    var grid = document.getElementById('pivGrid');
    var resBox = document.getElementById('pivResults');
    btn.disabled = true;
    resBox.classList.remove('show'); grid.innerHTML = '';

    try{
      var buf = await file.arrayBuffer();
      var bytes = new Uint8Array(buf);
      var encrypted = false;
      var doc = null;
      try{
        doc = await PDFLib.PDFDocument.load(bytes);
      }catch(err){
        if(err && /encrypt/i.test(err.message || String(err))){
          encrypted = true;
          doc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
        }else{
          throw err;
        }
      }
      var rows = [];
      function add(label, value, icon){
        rows.push({ label: label, value: value, icon: icon });
      }
      add('📄 Title', clean(doc.getTitle()));
      add('✍️ Author', clean(doc.getAuthor()));
      add('📝 Subject', clean(doc.getSubject()));
      add('🔖 Keywords', (doc.getKeywords() || []).length ? doc.getKeywords().join(', ') : 'Not set');
      add('🏭 Creator', clean(doc.getCreator()));
      add('🖨️ Producer', clean(doc.getProducer()));
      add('📅 Created', cleanDate(doc.getCreationDate()));
      add('🔄 Modified', cleanDate(doc.getModificationDate()));
      add('📑 Pages', doc.getPageCount());
      var ps = doc.getPage(0).getSize();
      add('📐 Page size (pts)', Math.round(ps.width) + ' × ' + Math.round(ps.height) +
        ' pts ≈ ' + (ps.width / 72).toFixed(2) + ' × ' + (ps.height / 72).toFixed(2) + ' in');
      add('🧾 PDF version', pdfVersion(bytes));
      add('🔒 Encrypted', encrypted ? 'Yes — password protected' : 'No');
      add('💾 File size', ToolPro.fmtBytes(file.size));

      rows.forEach(function(r){
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
        card.querySelector('.r-name').textContent = r.label;
        card.querySelector('.r-stats').textContent = r.value;
        grid.appendChild(card);
      });
      document.getElementById('pivSummary').textContent =
        '🎉 Found ' + rows.length + ' properties for "' + file.name + '"' +
        (encrypted ? ' (encrypted — text content may be unreadable).' : '.');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Properties read', 'ok');
    }catch(err){
      ToolPro.toast('Could not read this PDF: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in any PDF. It's parsed directly in your browser's memory — nothing is uploaded.
- **Step 2** — Hit **Read PDF Info**. The tool decodes the document's info dictionary, page boxes, file header, and encryption status, and shows each property as its own card.

## Everyday uses

- **Before submitting** — check that your resume or manuscript actually has a title and author set, not "Microsoft Word" defaults.
- **Receiving files** — verify a contract's page size and page count before printing it.
- **Research** — see creation dates and producer software to judge a document's age and source.
- **Troubleshooting uploads** — check PDF version and encryption when a portal rejects your file.
- **Privacy cleanup** — spot leftover author and keyword metadata before sharing a file publicly.

## Frequently asked questions

**What does "Not set" mean?**
The PDF simply doesn't store that property. Many files carry blank titles or authors — this tool just reports what's there honestly.

**Can it read encrypted PDFs?**
If the file is password-protected, the tool detects the encryption and still reads the metadata it can reach, but page contents stay unreadable without the password.

**Why is the page size in points?**
Points (1/72 inch) are the PDF standard. The tool also converts to inches so you can compare with US Letter (8.5 × 11 in) or A4 (8.27 × 11.69 in).

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is stored or uploaded.
