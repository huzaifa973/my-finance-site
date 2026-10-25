---
title: "Free JSON-LD Validator — Check Schema Markup Errors & Warnings"
description: "Paste JSON-LD schema and instantly check for JSON errors, missing required fields, and warnings per schema type. Free, private, and fully in your browser."
category: seo
date: 2026-10-25
draft: false
slug: json-ld-validator
---

Broken schema is invisible — your page looks fine, but Google quietly ignores the markup. Paste your JSON-LD (or a whole page's HTML and let the tool pull the script blocks out) and get a clear pass / warning / error report for every schema block, checked against the required fields for its type.

<div class="tool-shell" id="jlvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JSON-LD Validator</h2>
<p>Paste schema, get a clear error &amp; warning report per @type — in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="jlvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your JSON-LD or page HTML</p>
<div class="preset-row" id="jlvPresets">
<button type="button" class="preset-chip" data-sample="article">📰 Sample Article</button>
<button type="button" class="preset-chip" data-sample="faq">❓ Sample FAQPage</button>
<button type="button" class="preset-chip" data-sample="broken">💥 Sample broken JSON</button>
</div>
<div class="setting">
<label for="jlvIn">JSON-LD or HTML containing &lt;script type="application/ld+json"&gt;</label>
<textarea id="jlvIn" class="tool-input" rows="10" placeholder='Paste JSON-LD here, e.g. {"@context":"https://schema.org","@type":"Article","headline":"..."}'></textarea>
<div class="hint">If you paste full page HTML, every ld+json script block is extracted and checked separately.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Validation options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Strict mode (warnings count as failures)</span><label class="toggle"><input type="checkbox" id="jlvStrict"><span class="track"></span></label></div>
<div class="hint">Off = a block with only warnings still passes. On = warnings fail the block.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Check recommended fields too</span><label class="toggle"><input type="checkbox" id="jlvRec" checked><span class="track"></span></label></div>
<div class="hint">Recommended fields (image, datePublished, etc.) raise warnings, never errors.</div>
</div>
<div class="setting">
<label for="jlvDepth">Nesting detail <span id="jlvDepthVal">full</span></label>
<input type="range" id="jlvDepth" min="1" max="3" value="3">
<div class="hint">Controls how deep nested objects (author, publisher, offers) are reported.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jlvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2L4 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-8-3zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 9z"/></svg>
Validate JSON-LD
</button>
<button type="button" class="btn-pro-outline" id="jlvCopy" disabled>📋 Copy report</button>
<button type="button" class="btn-pro-outline" id="jlvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="jlvProgress" style="display:none;"><div class="progress-bar" id="jlvBar" style="width:0%"></div></div>
<div class="results" id="jlvResults">
<p class="result-head">🔍 Validation report</p>
<div class="result-summary" id="jlvSummary"></div>
<div class="result-grid" id="jlvGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate unlimited schema blocks — your markup never leaves your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('jlvShell');
ToolPro.themeToggle(shell, document.getElementById('jlvTheme'));
ToolPro.bindSlider(document.getElementById('jlvDepth'), document.getElementById('jlvDepthVal'), function(v){ return v === '1' ? 'top level' : v === '2' ? 'one level deep' : 'full'; });
var REQUIRED = {
Article: ['headline', 'author'], BlogPosting: ['headline', 'author'], NewsArticle: ['headline', 'author', 'datePublished'], TechArticle: ['headline', 'author'],
Product: ['name'], FAQPage: ['mainEntity'], BreadcrumbList: ['itemListElement'], Organization: ['name'], LocalBusiness: ['name'], Event: ['name', 'startDate', 'location'], Recipe: ['name', 'image'], JobPosting: ['title', 'datePosted'], HowTo: ['name', 'step'], VideoObject: ['name', 'uploadDate'], WebPage: ['name'], Person: ['name']
};
var RECOMMENDED = {
Article: ['image', 'datePublished', 'publisher'], BlogPosting: ['image', 'datePublished'], NewsArticle: ['image', 'datePublished', 'publisher'], Product: ['image', 'offers', 'description'], FAQPage: [], Event: ['image', 'description'], Recipe: ['description'], LocalBusiness: ['address', 'telephone'], Organization: ['url', 'logo']
};
var SAMPLES = {
article: '{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "How to Brew Pour-Over Coffee",\n  "author": {"@type": "Person", "name": "Jane Smith"}\n}',
faq: '{\n  "@context": "https://schema.org",\n  "@type": "FAQPage",\n  "mainEntity": [{"@type": "Question", "name": "Is it free?", "acceptedAnswer": {"@type": "Answer", "text": "Yes."}}]\n}',
broken: '{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Missing comma here"\n  "author": "Jane"\n}'
};
var input = document.getElementById('jlvIn');
var btn = document.getElementById('jlvBtn');
var copyBtn = document.getElementById('jlvCopy');
var clearBtn = document.getElementById('jlvClear');
var resBox = document.getElementById('jlvResults');
var summaryEl = document.getElementById('jlvSummary');
var grid = document.getElementById('jlvGrid');
var progress = document.getElementById('jlvProgress');
var bar = document.getElementById('jlvBar');
var lastReport = '';
function esc(s){ return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function refresh(){
var ok = input.value.trim().length > 0;
btn.disabled = !ok;
clearBtn.disabled = !(input.value || grid.innerHTML);
}
input.addEventListener('input', refresh);
document.getElementById('jlvPresets').addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
input.value = SAMPLES[chip.dataset.sample];
refresh();
ToolPro.toast('Sample loaded');
});
clearBtn.addEventListener('click', function(){
input.value = ''; grid.innerHTML = ''; summaryEl.textContent = ''; lastReport = '';
resBox.classList.remove('show'); copyBtn.disabled = true; refresh();
});
function extractBlocks(text){
var blocks = [];
var re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
var m;
while((m = re.exec(text)) !== null){ blocks.push(m[1].trim()); }
if(blocks.length === 0) blocks.push(text.trim());
return blocks;
}
function checkObject(obj, depth){
var errors = [], warnings = [];
if(!obj || typeof obj !== 'object' || Array.isArray(obj)){
errors.push('Block is not a JSON object.');
return { errors: errors, warnings: warnings, type: '(none)' };
}
if(!obj['@context']) warnings.push('Missing "@context" — should be "https://schema.org".');
else if(obj['@context'] !== 'https://schema.org' && obj['@context'] !== 'http://schema.org') warnings.push('"@context" is not schema.org — Google may ignore this block.');
var type = obj['@type'] || '';
if(!type) errors.push('Missing "@type" — the schema type is required.');
if(Array.isArray(type)) type = type[0];
var req = REQUIRED[type] || [];
req.forEach(function(f){
if(obj[f] === undefined || obj[f] === null || obj[f] === '') errors.push('Missing required field "' + f + '" for ' + type + '.');
});
if(document.getElementById('jlvRec').checked){
var rec = RECOMMENDED[type] || [];
rec.forEach(function(f){
if(obj[f] === undefined || obj[f] === null || obj[f] === '') warnings.push('Recommended field "' + f + '" is missing for ' + type + '.');
});
}
if(type === 'Article' || type === 'BlogPosting' || type === 'NewsArticle'){
if(obj.headline && obj.headline.length > 110) warnings.push('Headline is over 110 characters and may be truncated.');
}
if(type === 'FAQPage' && Array.isArray(obj.mainEntity)){
obj.mainEntity.forEach(function(q, i){
if(!q.name) errors.push('FAQ item ' + (i + 1) + ' is missing "name" (the question).');
if(!q.acceptedAnswer) warnings.push('FAQ item ' + (i + 1) + ' has no "acceptedAnswer".');
});
}
if(type === 'BreadcrumbList' && Array.isArray(obj.itemListElement)){
obj.itemListElement.forEach(function(item, i){
if(!item.position) warnings.push('Breadcrumb item ' + (i + 1) + ' is missing "position".');
if(!item.name && !item.item) warnings.push('Breadcrumb item ' + (i + 1) + ' has neither "name" nor "item".');
});
}
if(type === 'Product' && obj.offers && typeof obj.offers === 'object'){
if(!obj.offers.price && !obj.offers.lowPrice) warnings.push('Product offers block has no price.');
}
if(depth > 1 && obj.author && typeof obj.author === 'object' && !obj.author.name) warnings.push('Author object is missing "name".');
if(depth > 1 && obj.publisher && typeof obj.publisher === 'object' && !obj.publisher.name) warnings.push('Publisher object is missing "name".');
return { errors: errors, warnings: warnings, type: type || '(unknown)' };
}
btn.addEventListener('click', function(){
var raw = input.value.trim();
if(!raw){ ToolPro.toast('Paste some JSON-LD first.', 'err'); return; }
progress.style.display = 'block'; bar.style.width = '50%';
var blocks = extractBlocks(raw);
var strict = document.getElementById('jlvStrict').checked;
var depth = parseInt(document.getElementById('jlvDepth').value, 10) || 3;
var cards = [], reportLines = [];
var pass = 0, warn = 0, fail = 0;
blocks.forEach(function(block, i){
var label = 'Block ' + (i + 1);
var obj = null, parseErr = null;
try { obj = JSON.parse(block); }
catch(e){ parseErr = e.message; }
if(Array.isArray(obj)){
var sub = obj.map(function(o){ return checkObject(o, depth); });
var allErr = [], allWarn = [], types = [];
sub.forEach(function(r){ allErr = allErr.concat(r.errors); allWarn = allWarn.concat(r.warnings); types.push(r.type); });
var result = { errors: allErr, warnings: allWarn, type: types.join(', ') + ' (@graph/array of ' + obj.length + ')' };
obj = result;
} else if(parseErr){
obj = null;
} else {
obj = checkObject(obj, depth);
}
var status, cls;
if(parseErr){ status = '❌ FAIL — invalid JSON'; cls = 'fail'; fail++; }
else if(obj.errors.length > 0){ status = '❌ FAIL'; cls = 'fail'; fail++; }
else if(obj.warnings.length > 0){ status = strict ? '❌ FAIL (strict)' : '⚠️ PASS WITH WARNINGS'; cls = strict ? 'fail' : 'warn'; if(strict) fail++; else warn++; }
else { status = '✅ PASS'; cls = 'pass'; pass++; }
var lines = [];
if(parseErr) lines.push('<p>❌ JSON parse error: ' + esc(parseErr) + '</p>');
else {
obj.errors.forEach(function(e){ lines.push('<p>❌ ' + esc(e) + '</p>'); });
obj.warnings.forEach(function(w){ lines.push('<p>⚠️ ' + esc(w) + '</p>'); });
if(obj.errors.length === 0 && obj.warnings.length === 0) lines.push('<p>✅ No problems found. All required fields are present.</p>');
}
cards.push('<div class="result-card" style="grid-column:1/-1;"><div class="r-name">' + label + ' — ' + esc(obj ? obj.type : 'unparseable') + ' — ' + status + '</div><div style="margin-top:.4rem;">' + lines.join('') + '</div></div>');
reportLines.push(label + ' (' + (obj ? obj.type : 'unparseable') + '): ' + status);
if(!parseErr){
obj.errors.forEach(function(e){ reportLines.push('  ERROR: ' + e); });
obj.warnings.forEach(function(w){ reportLines.push('  WARNING: ' + w); });
} else reportLines.push('  JSON error: ' + parseErr);
});
bar.style.width = '100%';
setTimeout(function(){ progress.style.display = 'none'; bar.style.width = '0%'; }, 400);
grid.innerHTML = cards.join('');
summaryEl.textContent = 'Checked ' + blocks.length + ' block(s): ' + pass + ' passed, ' + warn + ' passed with warnings, ' + fail + ' failed.' + (blocks.length > 1 ? ' (HTML input: each ld+json script block was checked separately.)' : '');
lastReport = reportLines.join('\n');
copyBtn.disabled = false;
resBox.classList.add('show');
resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
ToolPro.toast('Validation complete', 'ok');
});
copyBtn.addEventListener('click', function(){ if(lastReport) ToolPro.copyText(lastReport, 'Report copied'); });
refresh();
})();
</script>

## How it works

Paste raw JSON-LD, a `@graph` array, or an entire page's HTML — the tool extracts every `<script type="application/ld+json">` block and checks each one separately. First it parses the JSON and reports the exact parse error if it fails. Then it checks the block against the required fields for its `@type` (Article, Product, FAQPage, BreadcrumbList, Event, Recipe, JobPosting, HowTo, and more), plus recommended fields like image and datePublished. You get a per-block verdict: **pass**, **pass with warnings**, or **fail**, with every issue listed in plain language. Strict mode turns warnings into failures if you want a zero-tolerance check.

**Honest limit:** this checks structure and required fields against common Google requirements — it is not Google's Rich Results Test, and passing here does not guarantee a rich result. Always confirm eligibility in Google's own tester before publishing.

## Everyday uses

- **SEOs** — debug a client's broken schema before blaming the theme.
- **Bloggers** — paste a post's HTML and confirm every schema block parses.
- **Developers** — catch a missing comma or missing `@type` in seconds.
- **Agencies** — attach the copied report to a QA checklist for every launch.
- **Site owners** — re-check schema after a theme or plugin update breaks it.

Everything runs in your browser — your markup is never uploaded anywhere.
