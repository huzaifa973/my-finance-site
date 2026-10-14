---
title: "Free Hreflang Tag Generator — Multilingual SEO"
description: "Generate hreflang tags free for multilingual SEO: add language-region rows, set x-default, and copy the link tag set. No sign-up, private."
category: seo
date: 2026-10-14
draft: false
---

Serving the same content in several languages or regions? Without **hreflang tags**, search engines may show the wrong version — or flag the pages as duplicates. Add one row per language version, set your fallback `x-default` URL, and copy the complete tag set.

<div class="tool-shell" id="hlShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Hreflang Tag Generator</h2>
<p>One row per language version — valid alternate tags with x-default fallback.</p>
</div>
<button type="button" class="theme-toggle" id="hlTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your language versions</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="hlSample">✨ Load sample</button>
<button type="button" class="preset-chip" id="hlClear">🗑 Clear</button>
<button type="button" class="preset-chip" id="hlAdd">➕ Add language</button>
</div>
<div id="hlRows"></div>
<div class="settings-grid" style="margin-top:10px;">
<div class="setting">
<label for="hlDefault">x-default URL (fallback)</label>
<input type="url" id="hlDefault" class="tool-input" placeholder="https://example.com/">
<div class="hint" id="hlStatus">The page shown when no language version matches the visitor.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Get your hreflang tags</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hlGo" disabled>
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Generate tags
</button>
<button type="button" class="btn-pro-outline" id="hlCopy" disabled>📋 Copy tags</button>
</div>
<div class="results" id="hlResults">
<p class="result-head">🏷 Paste into the &lt;head&gt; of every version</p>
<pre class="tool-output" id="hlOut" style="white-space:pre-wrap;word-break:break-all;max-height:340px;overflow:auto;font-size:.82rem;"></pre>
</div>
<div class="hint">The full tag set must appear on <strong>every</strong> language version of the page — not just the default one.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited hreflang tag sets — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
'use strict';
var shell = document.getElementById('hlShell');
ToolPro.themeToggle(shell, document.getElementById('hlTheme'));
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function isUrl(v){
  try { var u = new URL(v); return u.protocol === 'http:' || u.protocol === 'https:'; }
  catch(e){ return false; }
}
function codeOk(c){ return /^[a-z]{2,3}(-[a-z0-9]{2,4})?$/i.test(c); }
var last = '';
function rowData(){
  var rows = document.querySelectorAll('#hlRows .hl-row');
  var out = [];
  for(var i = 0; i < rows.length; i++){
    out.push({
      code: rows[i].querySelector('.hl-code').value.trim(),
      url: rows[i].querySelector('.hl-url').value.trim()
    });
  }
  return out;
}
function refresh(){
  var rows = rowData();
  var filled = rows.filter(function(r){ return r.code || r.url; });
  var st = document.getElementById('hlStatus');
  var badCode = filled.some(function(r){ return r.code && !codeOk(r.code); });
  var badUrl = filled.some(function(r){ return r.url && !isUrl(r.url); });
  var incomplete = filled.some(function(r){ return !(r.code && r.url); });
  var def = document.getElementById('hlDefault').value.trim();
  if(badCode) st.textContent = '⚠️ Language codes look like en or en-US (e.g. fr, es-ES, pt-BR).';
  else if(badUrl) st.textContent = '⚠️ One of the page URLs is not a valid http(s) URL.';
  else if(incomplete) st.textContent = '⚠️ Each row needs both a language code and a page URL.';
  else if(def && !isUrl(def)) st.textContent = '⚠️ The x-default URL is not a valid http(s) URL.';
  else if(filled.length) st.textContent = '✅ ' + filled.length + ' language version' + (filled.length > 1 ? 's' : '') + ' ready.';
  else st.textContent = 'The page shown when no language version matches the visitor.';
  var ok = filled.length > 0 && !badCode && !badUrl && !incomplete && (!def || isUrl(def));
  document.getElementById('hlGo').disabled = !ok;
}
function addRow(code, url){
  var rows = document.getElementById('hlRows');
  var div = document.createElement('div');
  div.style.cssText = 'display:flex;gap:8px;margin-bottom:8px;align-items:center;';
  var cIn = document.createElement('input');
  cIn.type = 'text'; cIn.className = 'tool-input hl-code'; cIn.placeholder = 'en-US';
  cIn.style.maxWidth = '150px'; cIn.value = code || '';
  var uIn = document.createElement('input');
  uIn.type = 'url'; uIn.className = 'tool-input hl-url'; uIn.placeholder = 'https://example.com/en/page';
  uIn.style.flex = '1'; uIn.value = url || '';
  var rm = document.createElement('button');
  rm.type = 'button'; rm.className = 'btn-pro-outline hl-rm'; rm.title = 'Remove row'; rm.textContent = '✕';
  div.appendChild(cIn); div.appendChild(uIn); div.appendChild(rm);
  rows.appendChild(div);
  rm.addEventListener('click', function(){
    if(rows.children.length > 1){ rows.removeChild(div); }
    else { ToolPro.toast('Keep at least one row', 'err'); }
    refresh();
  });
  cIn.addEventListener('input', refresh);
  uIn.addEventListener('input', refresh);
}
document.getElementById('hlAdd').addEventListener('click', function(){ addRow('', ''); refresh(); });
document.getElementById('hlDefault').addEventListener('input', refresh);
function gen(){
  var rows = rowData().filter(function(r){ return r.code && r.url; });
  if(!rows.length){ ToolPro.toast('Add at least one language version', 'err'); return; }
  for(var i = 0; i < rows.length; i++){
    if(!codeOk(rows[i].code)){ ToolPro.toast('Invalid language code: ' + rows[i].code, 'err'); return; }
    if(!isUrl(rows[i].url)){ ToolPro.toast('Invalid URL in row ' + (i + 1), 'err'); return; }
  }
  var seen = {};
  for(var j = 0; j < rows.length; j++){
    var k = rows[j].code.toLowerCase();
    if(seen[k]){ ToolPro.toast('Duplicate language code: ' + rows[j].code, 'err'); return; }
    seen[k] = true;
  }
  var def = document.getElementById('hlDefault').value.trim();
  if(def && !isUrl(def)){ ToolPro.toast('x-default URL is not valid', 'err'); return; }
  var L = rows.map(function(r){
    return '<link rel="alternate" hreflang="' + esc(r.code) + '" href="' + esc(r.url) + '">';
  });
  if(def) L.push('<link rel="alternate" hreflang="x-default" href="' + esc(def) + '">');
  last = L.join('\n');
  document.getElementById('hlOut').textContent = last;
  document.getElementById('hlResults').classList.add('show');
  document.getElementById('hlCopy').disabled = false;
  ToolPro.toast('Tags generated', 'ok');
}
document.getElementById('hlGo').addEventListener('click', gen);
document.getElementById('hlCopy').addEventListener('click', function(){
  if(!last) gen();
  if(last) ToolPro.copyText(last, 'Tags copied — paste into every version\'s <head>');
});
document.getElementById('hlSample').addEventListener('click', function(){
  document.getElementById('hlRows').innerHTML = '';
  addRow('en-US', 'https://example.com/en/guide');
  addRow('es-ES', 'https://example.com/es/guia');
  addRow('fr', 'https://example.com/fr/guide');
  document.getElementById('hlDefault').value = 'https://example.com/guide';
  refresh();
  ToolPro.toast('Sample loaded', 'ok');
});
document.getElementById('hlClear').addEventListener('click', function(){
  document.getElementById('hlRows').innerHTML = '';
  addRow('', '');
  document.getElementById('hlDefault').value = '';
  document.getElementById('hlResults').classList.remove('show');
  document.getElementById('hlCopy').disabled = true;
  last = '';
  refresh();
  ToolPro.toast('Form cleared');
});
addRow('', '');
addRow('', '');
refresh();
})();
</script>

## How it works

1. **Add a row per language version** — the language-region code (like `en-US`, `es-ES`, `fr`) plus that version's full page URL.
2. **Set the x-default fallback** — the URL visitors see when none of the versions match their language.
3. **Generate and copy** — paste the identical tag set into the `<head>` of every language version of the page.

## Everyday uses

- **Multilingual blogs** — serve English, Spanish and French readers the right version automatically.
- **E-commerce** — point US, UK and EU shoppers at their regional storefront pages.
- **SaaS landing pages** — localized pricing and signup pages without duplicate-content penalties.
- **Travel & tourism sites** — one destination, many languages, zero crawler confusion.
- **Global brands** — keep regional subfolders (/us/, /uk/, /de/) correctly mapped for search engines.

## Frequently asked questions

**What format do hreflang codes use?**
ISO 639-1 language plus optional ISO 3166-1 region: `en`, `en-US`, `pt-BR`, `zh-Hant`. Never use just a country code (`uk` is Ukrainian, not United Kingdom).

**What is x-default for?**
The fallback page for visitors whose language matches none of your versions — usually your main page or a language-selector page.

**Do I put the tags on every version or just one?**
Every version must carry the complete set, including a self-referencing entry. Google ignores hreflang that isn't reciprocated across all listed URLs.

**Can hreflang fix duplicate content across regions?**
Yes — that's its main job. It tells Google the pages are deliberate regional variants, not copies, so each can rank in its own market.
