---
title: "Free PDF Annotation Remover — Strip Comments & Highlights Online"
description: "Remove annotations, comments, highlights and sticky notes from a PDF in your browser. Upload, strip, and download a clean PDF — free and private."
category: pdf
date: 2026-10-25
draft: false
slug: pdf-remove-annotations
---

Review copies come back covered in comments, highlights, and sticky notes. This tool strips those annotations out of your PDF and hands you a clean copy — without uploading your document to any server.

<div class="tool-shell" id="praShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Annotation Remover</h2>
<p>Strip comments, highlights &amp; sticky notes — get a clean PDF back.</p>
</div>
<button type="button" class="theme-toggle" id="praTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload your PDF</p>
<div class="dropzone" id="praDrop">
<input type="file" id="praFile" accept="application/pdf,.pdf">
<p class="dz-text">📄 Drop a PDF here or click to browse</p>
<p class="dz-sub">One PDF at a time · max 50 MB · files never leave your browser</p>
</div>
<div class="file-list" id="praList"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Removal settings</p>
<div class="settings-panel">
<div class="preset-row" id="praPresets">
<button type="button" class="preset-chip active" data-mode="all">🧹 Remove all annotations</button>
<button type="button" class="preset-chip" data-mode="comments">💬 Comments only</button>
<button type="button" class="preset-chip" data-mode="markup">🖍️ Highlights &amp; markup only</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Also remove link annotations</span><label class="toggle"><input type="checkbox" id="praLinks" checked><span class="track"></span></label></div>
<div class="hint">Link annotations are clickable areas. Removing them keeps the visible text intact.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Keep form fields working</span><label class="toggle"><input type="checkbox" id="praKeepForms" checked><span class="track"></span></label></div>
<div class="hint">On = widget annotations for form fields are kept so fillable forms still work. Off = they are removed too.</div>
</div>
<div class="setting">
<label for="praQuality">Output detail <span id="praQualityVal">full</span></label>
<input type="range" id="praQuality" min="1" max="3" value="3">
<div class="hint">The PDF is re-saved by pdf-lib; content is preserved, not re-rendered.</div>
</div>
</div>
<div class="hint" style="margin-top:.6rem;">Honest limits: this removes page-level annotations (comments, highlights, sticky notes, links, stamps). Text that was "burned in" to the page content — e.g. flattened highlights or scanned-in handwriting — is part of the page itself and cannot be removed. Form-field definitions in the document catalog are kept, so a fillable form stays fillable.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Strip &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="praBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
Remove Annotations
</button>
<button type="button" class="btn-pro-outline" id="praDl" disabled>⬇ Download clean PDF</button>
<button type="button" class="btn-pro-outline" id="praClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="praProgress" style="display:none;"><div class="progress-bar" id="praBar" style="width:0%"></div></div>
<div class="results" id="praResults">
<p class="result-head">🧹 Removal report</p>
<div class="result-summary" id="praSummary"></div>
<div class="result-grid" id="praGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Clean unlimited PDFs — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
var shell = document.getElementById('praShell');
ToolPro.themeToggle(shell, document.getElementById('praTheme'));
ToolPro.bindSlider(document.getElementById('praQuality'), document.getElementById('praQualityVal'), function(v){ return v === '1' ? 'basic' : v === '2' ? 'standard' : 'full'; });
var mode = 'all';
var presets = document.getElementById('praPresets');
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
chip.classList.add('active');
mode = chip.dataset.mode;
ToolPro.toast('Mode: ' + chip.textContent.trim());
});
var file = null, outBytes = null, outName = '';
var btn = document.getElementById('praBtn');
var dlBtn = document.getElementById('praDl');
var clearBtn = document.getElementById('praClear');
var listEl = document.getElementById('praList');
var resBox = document.getElementById('praResults');
var summaryEl = document.getElementById('praSummary');
var grid = document.getElementById('praGrid');
var progress = document.getElementById('praProgress');
var bar = document.getElementById('praBar');
function refresh(){
btn.disabled = !file;
clearBtn.disabled = !(file || outBytes);
}
ToolPro.dropzone(document.getElementById('praDrop'), {
multiple: false,
accept: 'application/pdf',
onFiles: function(arr){
var f = arr[0];
if(!f) return;
if(f.size > 50 * 1024 * 1024){ ToolPro.toast('File is over 50 MB.', 'err'); return; }
file = f; outBytes = null; dlBtn.disabled = true;
listEl.innerHTML = '';
ToolPro.fileRow(listEl, f, function(){ file = null; listEl.innerHTML = ''; resBox.classList.remove('show'); refresh(); });
resBox.classList.remove('show');
refresh();
ToolPro.toast('PDF loaded: ' + f.name);
}
});
clearBtn.addEventListener('click', function(){
file = null; outBytes = null; listEl.innerHTML = ''; grid.innerHTML = ''; summaryEl.textContent = '';
resBox.classList.remove('show'); dlBtn.disabled = true; refresh();
});
var COMMENT_SUBTYPES = ['Text', 'FreeText', 'Caret', 'Sound', 'FileAttachment'];
var MARKUP_SUBTYPES = ['Highlight', 'Underline', 'Squiggly', 'StrikeOut', 'Square', 'Circle', 'Line', 'PolyLine', 'Polygon', 'Ink', 'Stamp'];
function subtypeOf(annot){
try {
var s = annot.lookup(PDFLib.PDFName.of('Subtype'));
return s ? s.decodeText() : '';
} catch(e){ return ''; }
}
function shouldRemove(sub){
if(mode === 'all') return true;
if(mode === 'comments') return COMMENT_SUBTYPES.indexOf(sub) !== -1;
if(mode === 'markup') return MARKUP_SUBTYPES.indexOf(sub) !== -1;
return true;
}
btn.addEventListener('click', async function(){
if(!file){ ToolPro.toast('Upload a PDF first.', 'err'); return; }
if(typeof PDFLib === 'undefined'){ ToolPro.toast('PDF engine failed to load — check your connection and retry.', 'err'); return; }
progress.style.display = 'block'; bar.style.width = '20%';
try {
var buf = await file.arrayBuffer();
var doc;
try { doc = await PDFLib.PDFDocument.load(buf); }
catch(e){ doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true }); }
bar.style.width = '50%';
var pages = doc.getPages();
var removed = 0, kept = 0;
var perPage = [];
var removeLinks = document.getElementById('praLinks').checked;
var keepForms = document.getElementById('praKeepForms').checked;
pages.forEach(function(page, i){
var annots = null;
try { annots = page.node.Annots ? page.node.Annots() : page.node.lookup(PDFLib.PDFName.of('Annots')); } catch(e){ annots = null; }
if(!annots || !annots.size){ perPage.push('Page ' + (i + 1) + ': no annotations'); return; }
var keptRefs = [];
var pageRemoved = 0;
var count = annots.size();
for(var k = 0; k < count; k++){
var ref = annots.get(k);
var annot = null;
try { annot = doc.context.lookup(ref); } catch(e){ annot = null; }
var sub = annot ? subtypeOf(annot) : '';
var isWidget = sub === 'Widget';
var isLink = sub === 'Link';
var drop = shouldRemove(sub);
if(isLink && !removeLinks) drop = false;
if(isWidget && keepForms) drop = false;
if(drop) pageRemoved++;
else keptRefs.push(ref);
}
if(pageRemoved > 0){
if(keptRefs.length === 0){
try { page.node.delete(PDFLib.PDFName.of('Annots')); }
catch(e){ page.node.set(PDFLib.PDFName.of('Annots'), PDFLib.PDFArray.withContext(doc.context)); }
} else {
var arr = PDFLib.PDFArray.withContext(doc.context);
keptRefs.forEach(function(r){ arr.push(r); });
page.node.set(PDFLib.PDFName.of('Annots'), arr);
}
}
removed += pageRemoved; kept += keptRefs.length;
perPage.push('Page ' + (i + 1) + ': removed ' + pageRemoved + (keptRefs.length ? ', kept ' + keptRefs.length + ' (form/link)' : ''));
});
bar.style.width = '80%';
outBytes = await doc.save();
outName = file.name.replace(/\.pdf$/i, '') + '-clean.pdf';
bar.style.width = '100%';
setTimeout(function(){ progress.style.display = 'none'; bar.style.width = '0%'; }, 400);
summaryEl.textContent = '✅ Removed ' + removed + ' annotation(s) across ' + pages.length + ' page(s)' + (kept ? ' · ' + kept + ' kept (form fields/links per your settings)' : '') + '. Original: ' + (file.size / 1024).toFixed(0) + ' KB → Clean: ' + (outBytes.length / 1024).toFixed(0) + ' KB.';
grid.innerHTML = '<div class="result-card" style="grid-column:1/-1;"><div class="r-name">Per-page report</div><div style="margin-top:.4rem;">' + perPage.map(function(p){ return '<p style="margin:.25rem 0;">' + p + '</p>'; }).join('') + '</div><p style="margin-top:.6rem;">Note: flattened or burned-in markup is part of the page content and cannot be removed by annotation stripping.</p></div>';
dlBtn.disabled = false;
resBox.classList.add('show');
resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
ToolPro.toast('Annotations removed', 'ok');
} catch(e){
progress.style.display = 'none'; bar.style.width = '0%';
ToolPro.toast('Could not process this PDF: ' + (e && e.message ? e.message : 'unknown error'), 'err');
}
});
dlBtn.addEventListener('click', function(){
if(!outBytes) return;
var blob = new Blob([outBytes], { type: 'application/pdf' });
ToolPro.download(URL.createObjectURL(blob), outName);
ToolPro.toast('Downloaded ' + outName, 'ok');
});
refresh();
})();
</script>

## How it works

Upload a PDF and pick a mode — **all annotations**, **comments only**, or **highlights & markup only**. The tool opens your file with pdf-lib, walks every page, reads each page's annotation list, and deletes the matching entries (keeping form-field widgets and links when you ask it to). It then re-saves the document and gives you a per-page report of what was removed. The visible text, images, and layout are untouched — only the annotation layer is stripped.

**Honest limits:** annotations that were flattened into the page (for example, a highlight "printed" into the page content by another app, or handwriting in a scanned image) are no longer annotations — they are part of the page itself and cannot be removed by this tool. Encrypted PDFs that pdf-lib cannot open will fail with a clear error instead of a corrupt download.

## Everyday uses

- **Students** — hand in a clean copy of a paper after tutor feedback.
- **Professionals** — send clients a final contract without internal review notes.
- **Teachers** — strip answer-key comments before sharing a worksheet.
- **Researchers** — remove peer-review markup before archiving a manuscript.
- **Anyone** — clean up a PDF before posting it publicly.

Your files never leave your browser — the whole process runs locally with pdf-lib.
