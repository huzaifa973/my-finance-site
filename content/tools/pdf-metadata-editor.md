---
title: "Free PDF Metadata Editor — Change Title & Author"
description: "View and edit PDF metadata in your browser: title, author, subject, keywords and creator. Fix PDFs that show the wrong title in tabs and search. Free, private."
category: pdf
date: 2026-10-12
draft: false
---

Every PDF carries hidden metadata, and it is what shows up in browser tabs, Google results, and ebook libraries — not your filename. If your reports open as "Microsoft Word - final.docx" or "untitled", this tool fixes it: view the current title, author, subject, and keywords, rewrite them properly, and download a clean copy. All editing happens in your browser; your document never leaves your device.

<div class="tool-shell" id="pdfMetadataShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.4-1.4L10 14.2l7.6-7.6L19 8l-9 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Metadata Editor</h2>
<p>Fix the title readers actually see — edit PDF title, author, subject, and keywords without uploading your document.</p>
</div>
<button type="button" class="theme-toggle" id="pdfMetadataTheme">🌙 Dark</button>
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
<div class="dropzone" id="pmDz">
<input type="file" hidden>
<p>📂 Drag &amp; drop your file here, or <strong>click to browse</strong></p>
<p class="hint">PDF only — read and edited locally, never uploaded.</p>
</div>
<ul class="file-list" id="pmList"></ul>
<div class="hint">After adding a PDF, its current metadata loads into the fields below.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Edit metadata</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Title</span><input type="text" class="tool-input" id="pmTitle" value="" placeholder="Document title"></div>
<div class="setting"><span class="t-label">Author</span><input type="text" class="tool-input" id="pmAuthor" value="" placeholder="Author name"></div>
<div class="setting"><span class="t-label">Subject</span><input type="text" class="tool-input" id="pmSubject" value="" placeholder="What is it about?"></div>
<div class="setting"><span class="t-label">Keywords (comma separated)</span><input type="text" class="tool-input" id="pmKeywords" value="" placeholder="report, 2026, finance"></div>
<div class="setting"><span class="t-label">Creator / tool name</span><input type="text" class="tool-input" id="pmCreator" value="" placeholder="e.g. DollarWise"></div>
</div>
<div class="hint">Good metadata helps readers, search engines, and document managers. Titles matter most — make it descriptive, not "final_v2".</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Save &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pmGo">
💾 Save metadata
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="pmRes">
<p class="result-head">✅ Updated PDF</p>
<div class="result-summary" id="pmResSummary"></div>
<div class="result-grid" id="pmResGrid"></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js"></script>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Clean up unlimited PDFs — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pdfMetadataShell');
ToolPro.themeToggle(shell, document.getElementById('pdfMetadataTheme'));
var pdfFile=null;
ToolPro.dropzone(document.getElementById('pmDz'), {accept:'application/pdf', onFiles:async function(files){
  pdfFile=files[0]||null; var list=document.getElementById('pmList'); list.innerHTML='';
  if(!pdfFile) return;
  ToolPro.fileRow(list, pdfFile, function(){ pdfFile=null; });
  if(!window.PDFLib){ ToolPro.toast('PDF engine loading — re-add the file in a second','err'); return; }
  try{
    var doc=await PDFLib.PDFDocument.load(await pdfFile.arrayBuffer(), {ignoreEncryption:true});
    document.getElementById('pmTitle').value=doc.getTitle()||'';
    document.getElementById('pmAuthor').value=doc.getAuthor()||'';
    document.getElementById('pmSubject').value=doc.getSubject()||'';
    document.getElementById('pmKeywords').value=doc.getKeywords()||'';
    document.getElementById('pmCreator').value=doc.getCreator()||'';
    ToolPro.toast('Metadata loaded','ok');
  }catch(e){ ToolPro.toast('Could not read that PDF','err'); }
}});
document.getElementById('pmGo').addEventListener('click', async function(){
  if(!pdfFile){ ToolPro.toast('Add a PDF first','err'); return; }
  if(!window.PDFLib){ ToolPro.toast('PDF engine still loading','err'); return; }
  var btn=this; btn.disabled=true; btn.textContent='⏳ Working…';
  try{
    var doc=await PDFLib.PDFDocument.load(await pdfFile.arrayBuffer());
    doc.setTitle(document.getElementById('pmTitle').value);
    doc.setAuthor(document.getElementById('pmAuthor').value);
    doc.setSubject(document.getElementById('pmSubject').value);
    doc.setKeywords(document.getElementById('pmKeywords').value.split(',').map(function(s){return s.trim();}).filter(Boolean));
    doc.setCreator(document.getElementById('pmCreator').value);
    doc.setProducer('DollarWise PDF Metadata Editor');
    doc.setModificationDate(new Date());
    var out=await doc.save();
    var blob=new Blob([out], {type:'application/pdf'}); var url=URL.createObjectURL(blob);
    var res=document.getElementById('pmRes'); res.classList.add('show');
    document.getElementById('pmResSummary').textContent='Metadata updated. Readers and search engines will now see your title and author instead of a filename.';
    var grid=document.getElementById('pmResGrid'); grid.innerHTML='';
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+pdfFile.name+'</p><p class="r-stats">'+doc.getPageCount()+' pages · '+ToolPro.fmtBytes(blob.size)+'</p>';
    var b=document.createElement('button'); b.type='button'; b.className='btn-pro'; b.textContent='⬇ Download PDF';
    b.addEventListener('click', function(){ ToolPro.download(url, pdfFile.name); });
    card.appendChild(b); grid.appendChild(card);
    ToolPro.toast('Metadata saved','ok');
  }catch(e){ ToolPro.toast('Could not save metadata','err'); }
  btn.disabled=false; btn.textContent='💾 Save metadata';
});
})();
</script>

## How it works

When you add a PDF, pdf-lib reads its information dictionary and fills the form with the current values. Edit any field and press Save: the tool writes your values back into a fresh copy of the document (and stamps the modification date) and offers it as a download. No server is involved at any point.

## Everyday uses

- **Marketers** — give lead-magnet PDFs proper titles so they rank and display correctly in search.
- **Authors** — set ebook title and author before uploading to stores.
- **Professionals** — clean client-facing reports of embarrassing internal filenames.
- **Students** — make sure submitted PDFs show your name as author.

## Frequently asked questions

**Why does my PDF show a different name in the browser tab?**

Browser tabs and search results display the metadata Title, not the filename. Fixing the Title here fixes the tab.

**Does editing metadata change the pages?**

No — only the hidden document information changes. Page content, images, and layout are untouched.

**Is my document uploaded?**

Never. The reading and writing both happen locally in your browser with pdf-lib.
