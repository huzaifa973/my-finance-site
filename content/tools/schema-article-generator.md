---
title: "Free Article Schema Generator — JSON-LD for Articles & Blog Posts"
description: "Generate valid Article JSON-LD schema for your blog posts and news articles in seconds. Fill in headline, author, dates and publisher, then copy or download the code."
category: seo
date: 2026-10-25
draft: false
slug: schema-article-generator
---

Help Google understand your articles and qualify for rich results. Fill in your article details below and this generator builds clean, valid Article JSON-LD you can paste into any page — no coding, no plugins, no sign-up.

<div class="tool-shell" id="sagShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Article Schema Generator</h2>
<p>Valid Article JSON-LD for blog posts and news — built in seconds, ready to paste.</p>
</div>
<button type="button" class="theme-toggle" id="sagTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Article details</p>
<div class="preset-row" id="sagPresets">
<button type="button" class="preset-chip active" data-type="Article">📰 Article</button>
<button type="button" class="preset-chip" data-type="BlogPosting">📝 BlogPosting</button>
<button type="button" class="preset-chip" data-type="NewsArticle">📡 NewsArticle</button>
<button type="button" class="preset-chip" data-type="TechArticle">💻 TechArticle</button>
</div>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="sagHeadline">Headline *</label>
<input type="text" id="sagHeadline" class="tool-input" placeholder="e.g. How to Brew Pour-Over Coffee at Home">
</div>
<div class="setting">
<label for="sagUrl">Article URL</label>
<input type="text" id="sagUrl" class="tool-input" placeholder="https://example.com/my-article">
</div>
<div class="setting">
<label for="sagDesc">Description</label>
<textarea id="sagDesc" class="tool-input" rows="2" placeholder="One or two sentences summarising the article"></textarea>
</div>
<div class="setting">
<label for="sagImage">Image URL</label>
<input type="text" id="sagImage" class="tool-input" placeholder="https://example.com/images/cover.jpg">
</div>
<div class="setting">
<label for="sagAuthor">Author name *</label>
<input type="text" id="sagAuthor" class="tool-input" placeholder="e.g. Jane Smith">
</div>
<div class="setting">
<label for="sagAuthorType">Author type</label>
<select id="sagAuthorType" class="tool-input">
<option value="Person">Person</option>
<option value="Organization">Organization</option>
</select>
</div>
<div class="setting">
<label for="sagPub">Date published</label>
<input type="date" id="sagPub" class="tool-input">
</div>
<div class="setting">
<label for="sagMod">Date modified</label>
<input type="date" id="sagMod" class="tool-input">
</div>
<div class="setting">
<label for="sagPublisher">Publisher name</label>
<input type="text" id="sagPublisher" class="tool-input" placeholder="e.g. Example Blog">
</div>
<div class="setting">
<label for="sagLogo">Publisher logo URL</label>
<input type="text" id="sagLogo" class="tool-input" placeholder="https://example.com/logo.png">
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include publisher</span><label class="toggle"><input type="checkbox" id="sagIncPub" checked><span class="track"></span></label></div>
<div class="hint">Google recommends a publisher with a logo for Article rich results.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include author URL</span><label class="toggle"><input type="checkbox" id="sagIncAuthorUrl"><span class="track"></span></label></div>
<div class="hint">Adds an author "url" field when you also fill in the article URL.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="sagIndent">JSON indent <span id="sagIndentVal">2 spaces</span></label>
<input type="range" id="sagIndent" min="0" max="4" value="2">
<div class="hint">0 = minified output. 2 is the usual readable default.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Wrap in &lt;script&gt; tag</span><label class="toggle"><input type="checkbox" id="sagWrap" checked><span class="track"></span></label></div>
<div class="hint">On = paste-ready HTML snippet. Off = raw JSON only.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sagBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Generate JSON-LD
</button>
<button type="button" class="btn-pro-outline" id="sagCopy" disabled>📋 Copy</button>
<button type="button" class="btn-pro-outline" id="sagDl" disabled>⬇ Download .json</button>
<button type="button" class="btn-pro-outline" id="sagClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="sagProgress" style="display:none;"><div class="progress-bar" id="sagBar" style="width:0%"></div></div>
<div class="results" id="sagResults">
<p class="result-head">✅ Generated schema</p>
<div class="result-summary" id="sagSummary"></div>
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;">
<div class="r-name">JSON-LD output</div>
<textarea id="sagOut" class="tool-output" rows="14" readonly style="width:100%;margin-top:.5rem;font-family:monospace;"></textarea>
<div class="r-name" style="margin-top:.8rem;">Validation hints</div>
<div id="sagHints" style="margin-top:.4rem;"></div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited Article schemas — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('sagShell');
ToolPro.themeToggle(shell, document.getElementById('sagTheme'));
var schemaType = 'Article';
var presets = document.getElementById('sagPresets');
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
chip.classList.add('active');
schemaType = chip.dataset.type;
ToolPro.toast(schemaType + ' selected');
refresh();
});
ToolPro.bindSlider(document.getElementById('sagIndent'), document.getElementById('sagIndentVal'), function(v){ return v === '0' ? 'minified' : v + ' spaces'; });
var headline = document.getElementById('sagHeadline');
var author = document.getElementById('sagAuthor');
var btn = document.getElementById('sagBtn');
var copyBtn = document.getElementById('sagCopy');
var dlBtn = document.getElementById('sagDl');
var clearBtn = document.getElementById('sagClear');
var out = document.getElementById('sagOut');
var resBox = document.getElementById('sagResults');
var summaryEl = document.getElementById('sagSummary');
var hintsEl = document.getElementById('sagHints');
var progress = document.getElementById('sagProgress');
var bar = document.getElementById('sagBar');
function val(id){ return document.getElementById(id).value.trim(); }
function refresh(){
var ok = headline.value.trim().length > 0 && author.value.trim().length > 0;
btn.disabled = !ok;
clearBtn.disabled = !(headline.value || author.value || out.value);
}
[headline, author].forEach(function(el){ el.addEventListener('input', refresh); });
clearBtn.addEventListener('click', function(){
['sagHeadline','sagUrl','sagDesc','sagImage','sagAuthor','sagPublisher','sagLogo','sagPub','sagMod'].forEach(function(id){ document.getElementById(id).value = ''; });
out.value = ''; summaryEl.textContent = ''; hintsEl.innerHTML = '';
resBox.classList.remove('show');
copyBtn.disabled = true; dlBtn.disabled = true;
refresh();
});
btn.addEventListener('click', function(){
if(!headline.value.trim() || !author.value.trim()){ ToolPro.toast('Headline and author are required.', 'err'); return; }
progress.style.display = 'block'; bar.style.width = '40%';
var authorObj = { '@type': val('sagAuthorType') || 'Person', name: author.value.trim() };
if(document.getElementById('sagIncAuthorUrl').checked && val('sagUrl')) authorObj.url = val('sagUrl');
var schema = { '@context': 'https://schema.org', '@type': schemaType, headline: headline.value.trim(), author: authorObj };
if(val('sagDesc')) schema.description = val('sagDesc');
if(val('sagUrl')) schema.mainEntityOfPage = { '@type': 'WebPage', '@id': val('sagUrl') };
if(val('sagImage')) schema.image = val('sagImage');
if(val('sagPub')) schema.datePublished = val('sagPub');
if(val('sagMod')) schema.dateModified = val('sagMod');
if(document.getElementById('sagIncPub').checked && val('sagPublisher')){
var pub = { '@type': 'Organization', name: val('sagPublisher') };
if(val('sagLogo')) pub.logo = { '@type': 'ImageObject', url: val('sagLogo') };
schema.publisher = pub;
}
var indent = parseInt(document.getElementById('sagIndent').value, 10) || 0;
var json = JSON.stringify(schema, null, indent === 0 ? 0 : indent);
var wrapped = document.getElementById('sagWrap').checked;
out.value = wrapped ? '<script type="application/ld+json">\n' + json + '\n<\/script>' : json;
bar.style.width = '100%';
setTimeout(function(){ progress.style.display = 'none'; bar.style.width = '0%'; }, 400);
var hints = [];
if(headline.value.trim().length > 110) hints.push('⚠️ Headline is over 110 characters — Google may truncate it in rich results.');
else hints.push('✅ Headline length looks good.');
if(!val('sagImage')) hints.push('⚠️ No image URL — an image is recommended for Article rich results.');
else hints.push('✅ Image included.');
if(!val('sagPub')) hints.push('⚠️ No date published — add one so Google can show freshness.');
if(!val('sagPublisher') || !val('sagLogo')) hints.push('⚠️ Publisher logo missing — Google recommends a publisher logo for Article results.');
else hints.push('✅ Publisher with logo included.');
if(val('sagPub') && val('sagMod') && val('sagMod') < val('sagPub')) hints.push('❌ Date modified is earlier than date published — fix the dates.');
hintsEl.innerHTML = hints.map(function(h){ return '<p style="margin:.3rem 0;">' + h + '</p>'; }).join('');
summaryEl.textContent = '✅ ' + schemaType + ' schema generated with ' + Object.keys(schema).length + ' top-level fields. Paste it into the <head> of your article page.';
copyBtn.disabled = false; dlBtn.disabled = false;
resBox.classList.add('show');
resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
ToolPro.toast('Schema generated', 'ok');
});
copyBtn.addEventListener('click', function(){ if(out.value) ToolPro.copyText(out.value, 'JSON-LD copied'); });
dlBtn.addEventListener('click', function(){
if(!out.value) return;
var blob = new Blob([out.value], { type: 'application/json' });
ToolPro.download(URL.createObjectURL(blob), 'article-schema.json');
ToolPro.toast('Downloaded article-schema.json', 'ok');
});
refresh();
})();
</script>

## How it works

Pick a schema type — **Article**, **BlogPosting**, **NewsArticle**, or **TechArticle** — then fill in the headline, author, dates, image, and publisher. Hit **Generate JSON-LD** and the tool builds a clean schema.org object, checks it against common Google requirements, and hands you paste-ready code (wrapped in a `<script type="application/ld+json">` tag, or raw JSON if you prefer). Copy it or download it as a `.json` file and drop it into your page's `<head>`.

**Validation hints included:** the tool flags a headline over 110 characters, a missing image, missing publish date, a missing publisher logo, and a modified date earlier than the publish date — the five mistakes that most often block Article rich results.

## Everyday uses

- **Bloggers** — add Article schema to every post in under a minute, no plugin needed.
- **News sites** — generate NewsArticle markup for each story you publish.
- **SEO freelancers** — hand clients paste-ready schema without touching their CMS code.
- **Developers** — prototype schema quickly, then validate it in Google's Rich Results Test.
- **Content teams** — standardise schema across hundreds of posts with one repeatable form.

Everything runs in your browser — your article details are never uploaded anywhere.
