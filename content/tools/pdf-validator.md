---
title: "Free PDF Validator — Check PDF Files for Errors & Corruption"
description: "Validate any PDF in your browser: header, version, page count, encryption, metadata and corruption signals, with a clear pass, warning or fail verdict."
category: pdf
date: 2026-10-25
draft: false
slug: pdf-validator
---

A PDF that "won't open" rarely explains why. Upload it here and get a structured diagnosis: header and version, page count, encryption status, metadata, and corruption signals — with a clear pass, warning, or fail verdict for each check.

<div class="tool-shell" id="pvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Validator</h2>
<p>Header, pages, encryption &amp; corruption checks — one clear verdict.</p>
</div>
<button type="button" class="theme-toggle" id="pvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Upload a PDF to validate</p>
<div class="dropzone" id="pvDrop">
<input type="file" id="pvFile" accept="application/pdf,.pdf">
<p class="dz-text">📄 Drop a PDF here or click to browse</p>
<p class="dz-sub">One file at a time · max 50 MB · files never leave your browser</p>
</div>
<div class="file-list" id="pvList"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Validation settings</p>
<div class="settings-panel">
<div class="preset-row" id="pvPresets">
<button type="button" class="preset-chip active" data-level="standard">🔍 Standard checks</button>
<button type="button" class="preset-chip" data-level="strict">🧪 Strict checks</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Flag missing metadata as warning</span><label class="toggle"><input type="checkbox" id="pvMeta" checked><span class="track"></span></label></div>
<div class="hint">Title/author metadata matters for archiving and search, not for opening the file.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Treat encryption as a failure</span><label class="toggle"><input type="checkbox" id="pvEncFail"><span class="track"></span></label></div>
<div class="hint">Off = encrypted files get a warning (they may still open with a password). On = they fail.</div>
</div>
<div class="setting">
<label for="pvDetail">Report detail <span id="pvDetailVal">full</span></label>
<input type="range" id="pvDetail" min="1" max="3" value="3">
<div class="hint">Full lists every check; summary shows only the verdict and failures.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 9z"/></svg>
Validate PDF
</button>
<button type="button" class="btn-pro-outline" id="pvCopy" disabled>📋 Copy report</button>
<button type="button" class="btn-pro-outline" id="pvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pvProgress" style="display:none;"><div class="progress-bar" id="pvBar" style="width:0%"></div></div>
<div class="results" id="pvResults">
<p class="result-head">🔍 Validation report</p>
<div class="result-summary" id="pvSummary"></div>
<div class="result-grid" id="pvGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate unlimited PDFs — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
var shell = document.getElementById('pvShell');
ToolPro.themeToggle(shell, document.getElementById('pvTheme'));
ToolPro.bindSlider(document.getElementById('pvDetail'), document.getElementById('pvDetailVal'), function(v){ return v === '1' ? 'summary' : v === '2' ? 'standard' : 'full'; });
var level = 'standard';
var presets = document.getElementById('pvPresets');
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
chip.classList.add('active');
level = chip.dataset.level;
ToolPro.toast(level === 'strict' ? 'Strict checks on' : 'Standard checks on');
});
var file = null, lastReport = '';
var btn = document.getElementById('pvBtn');
var copyBtn = document.getElementById('pvCopy');
var clearBtn = document.getElementById('pvClear');
var listEl = document.getElementById('pvList');
var resBox = document.getElementById('pvResults');
var summaryEl = document.getElementById('pvSummary');
var grid = document.getElementById('pvGrid');
var progress = document.getElementById('pvProgress');
var bar = document.getElementById('pvBar');
function refresh(){
btn.disabled = !file;
clearBtn.disabled = !(file || grid.innerHTML);
}
ToolPro.dropzone(document.getElementById('pvDrop'), {
multiple: false,
accept: 'application/pdf',
onFiles: function(arr){
var f = arr[0];
if(!f) return;
if(f.size > 50 * 1024 * 1024){ ToolPro.toast('File is over 50 MB.', 'err'); return; }
file = f; lastReport = '';
listEl.innerHTML = '';
ToolPro.fileRow(listEl, f, function(){ file = null; listEl.innerHTML = ''; resBox.classList.remove('show'); refresh(); });
resBox.classList.remove('show');
refresh();
ToolPro.toast('PDF loaded: ' + f.name);
}
});
clearBtn.addEventListener('click', function(){
file = null; lastReport = ''; listEl.innerHTML = ''; grid.innerHTML = ''; summaryEl.textContent = '';
resBox.classList.remove('show'); copyBtn.disabled = true; refresh();
});
function bytesToText(bytes, len){
var out = '';
var n = Math.min(len, bytes.length);
for(var i = 0; i < n; i++) out += String.fromCharCode(bytes[i]);
return out;
}
btn.addEventListener('click', async function(){
if(!file){ ToolPro.toast('Upload a PDF first.', 'err'); return; }
if(typeof PDFLib === 'undefined'){ ToolPro.toast('PDF engine failed to load — check your connection and retry.', 'err'); return; }
progress.style.display = 'block'; bar.style.width = '25%';
var checks = [];
function add(status, name, detail){ checks.push({ status: status, name: name, detail: detail }); }
try {
var buf = await file.arrayBuffer();
var bytes = new Uint8Array(buf);
var head = bytesToText(bytes, 1024);
var tail = bytesToText(bytes.slice(Math.max(0, bytes.length - 2048)), 2048);
if(bytes.length === 0) add('fail', 'File not empty', 'The file is 0 bytes.');
else add('pass', 'File not empty', bytes.length + ' bytes (' + (bytes.length / 1024).toFixed(1) + ' KB).');
var headerMatch = head.match(/%PDF-(\d\.\d)/);
if(headerMatch) add('pass', 'PDF header', 'Found %PDF-' + headerMatch[1] + ' at the start of the file.');
else if(head.indexOf('%PDF-') !== -1) add('warn', 'PDF header', 'A %PDF- marker exists but not at the very start — some readers may reject this file.');
else add('fail', 'PDF header', 'No %PDF- header found. This is not a valid PDF file.');
if(/%%EOF/.test(tail)) add('pass', 'End-of-file marker', 'Found %%EOF near the end of the file.');
else add('warn', 'End-of-file marker', 'No %%EOF marker in the last 2 KB — the file may be truncated.');
if(/\/Encrypt/.test(head) || /\/Encrypt/.test(tail)) add('warn', 'Encryption marker', 'An /Encrypt entry was spotted in the raw bytes (checked again below with pdf-lib).');
bar.style.width = '55%';
var doc = null, encrypted = false, loadErr = null;
try { doc = await PDFLib.PDFDocument.load(buf); }
catch(e){
loadErr = e;
try { doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true }); encrypted = true; }
catch(e2){ loadErr = e2; }
}
if(!doc){
add('fail', 'Parses with pdf-lib', 'pdf-lib could not open this file: ' + (loadErr && loadErr.message ? loadErr.message : 'unknown error'));
} else {
add('pass', 'Parses with pdf-lib', 'The document structure loads cleanly.');
var pages = 0;
try { pages = doc.getPageCount(); } catch(e){ pages = 0; }
if(pages > 0) add('pass', 'Page count', pages + ' page(s) found.');
else add('fail', 'Page count', 'No pages found in the document.');
if(encrypted){
if(document.getElementById('pvEncFail').checked) add('fail', 'Encryption', 'This PDF is encrypted and needs a password to open normally.');
else add('warn', 'Encryption', 'This PDF is encrypted — it may need a password in some readers.');
} else add('pass', 'Encryption', 'Not encrypted — opens without a password.');
if(document.getElementById('pvMeta').checked){
var title = '', author = '';
try { title = doc.getTitle() || ''; } catch(e){}
try { author = doc.getAuthor() || ''; } catch(e){}
if(title) add('pass', 'Title metadata', '"' + title + '"');
else add('warn', 'Title metadata', 'No title set. Harmless for opening, but bad for search and archiving.');
if(author) add('pass', 'Author metadata', author);
else add('warn', 'Author metadata', 'No author set.');
}
if(level === 'strict'){
var dims = [];
try {
doc.getPages().forEach(function(p, i){ var s = p.getSize(); dims.push('p' + (i + 1) + ' ' + Math.round(s.width) + 'x' + Math.round(s.height)); });
} catch(e){}
if(dims.length) add('pass', 'Page sizes readable', dims.slice(0, 5).join(', ') + (dims.length > 5 ? ' … (' + dims.length + ' pages)' : ''));
}
}
bar.style.width = '100%';
setTimeout(function(){ progress.style.display = 'none'; bar.style.width = '0%'; }, 400);
var fails = checks.filter(function(c){ return c.status === 'fail'; }).length;
var warns = checks.filter(function(c){ return c.status === 'warn'; }).length;
var passes = checks.filter(function(c){ return c.status === 'pass'; }).length;
var verdict = fails > 0 ? '❌ FAIL — this file has problems that may stop it opening.' : (warns > 0 ? '⚠️ PASS WITH WARNINGS — opens, but with issues worth fixing.' : '✅ PASS — this PDF looks healthy.');
summaryEl.textContent = verdict + ' (' + passes + ' passed, ' + warns + ' warnings, ' + fails + ' failed, ' + checks.length + ' checks).';
var detail = parseInt(document.getElementById('pvDetail').value, 10) || 3;
var shown = detail === 1 ? checks.filter(function(c){ return c.status !== 'pass'; }) : checks;
if(detail === 1 && shown.length === 0) shown = checks;
var icon = { pass: '✅', warn: '⚠️', fail: '❌' };
grid.innerHTML = '<div class="result-card" style="grid-column:1/-1;"><div class="r-name">Check-by-check report for ' + file.name + '</div><div style="margin-top:.4rem;">' + shown.map(function(c){ return '<p style="margin:.3rem 0;">' + icon[c.status] + ' <b>' + c.name + ':</b> ' + c.detail + '</p>'; }).join('') + '</div></div>';
lastReport = verdict + '\n' + checks.map(function(c){ return icon[c.status] + ' ' + c.name + ': ' + c.detail; }).join('\n');
copyBtn.disabled = false;
resBox.classList.add('show');
resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
ToolPro.toast('Validation complete', 'ok');
} catch(e){
progress.style.display = 'none'; bar.style.width = '0%';
ToolPro.toast('Validation failed: ' + (e && e.message ? e.message : 'unknown error'), 'err');
}
});
copyBtn.addEventListener('click', function(){ if(lastReport) ToolPro.copyText(lastReport, 'Report copied'); });
refresh();
})();
</script>

## How it works

Upload any PDF and hit **Validate**. The tool first inspects the raw bytes — checking the file is non-empty, starts with a `%PDF-` header, and ends with a `%%EOF` marker — then loads the document with pdf-lib to confirm the structure parses, count the pages, and detect encryption. Optional metadata checks flag a missing title or author, and strict mode adds page-size readability checks. Every check gets its own pass, warning, or fail line, plus one overall verdict.

**Honest limits:** this validates structure, not appearance — a PDF can pass here and still render oddly if its fonts or images are damaged, and page-content damage inside individual streams is not deeply scanned. Encrypted files are reported, not cracked: a password-protected PDF still needs its password in a real reader.

## Everyday uses

- **Anyone with a "won't open" PDF** — find out in seconds whether it is truncated, encrypted, or not a PDF at all.
- **Offices** — QA incoming files before archiving or forwarding them.
- **Students** — check a downloaded paper is complete before submission day.
- **Support teams** — ask a user to paste the verdict instead of guessing at the problem.
- **Archivists** — flag files with missing metadata before filing them away.

Your files never leave your browser — validation runs locally with pdf-lib.
