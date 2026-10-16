---
title: "Free Robots Meta Tag Generator — Build SEO noindex & Crawl Directives"
description: "Generate robots meta tags online: noindex, nofollow, max-snippet and more, with plain-English explainers. Free forever, no sign-up."
category: seo
date: 2026-10-16
draft: false
---

Controlling how search engines treat a page starts with the robots meta tag. This free generator lets you tick the directives you need — noindex, nofollow, noarchive, snippet limits and more — and produces a copy-ready &lt;meta&gt; tag with a plain-English explainer for every directive you chose.

<div class="tool-shell" id="robotsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7v9l-2 2v1h18v-1l-2-2V9a7 7 0 0 0-7-7zm-3 12V9a3 3 0 0 1 6 0v5H9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Robots Meta Tag Generator</h2>
<p>Build a perfect robots meta tag — tick directives, copy the snippet, done.</p>
</div>
<button type="button" class="theme-toggle" id="robotsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Build your tag</p>
<div class="setting"><label>Live preview — updates as you tick</label><code class="tool-output" id="robotsOut" style="display:block;word-break:break-all"></code></div><ul id="robotsExpl" class="check-list"></ul><div id="robotsChecks"><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">noindex<br><small style="font-weight:400;opacity:.7">Tell search engines not to index this page.</small></span><label class="toggle"><input type="checkbox" data-dir="noindex"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">nofollow<br><small style="font-weight:400;opacity:.7">Tell crawlers not to follow links on this page.</small></span><label class="toggle"><input type="checkbox" data-dir="nofollow"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">noarchive<br><small style="font-weight:400;opacity:.7">Stop search engines keeping a cached copy.</small></span><label class="toggle"><input type="checkbox" data-dir="noarchive"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">nosnippet<br><small style="font-weight:400;opacity:.7">Block text snippets in search results.</small></span><label class="toggle"><input type="checkbox" data-dir="nosnippet"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">noimageindex<br><small style="font-weight:400;opacity:.7">Keep this page’s images out of image search.</small></span><label class="toggle"><input type="checkbox" data-dir="noimageindex"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">notranslate<br><small style="font-weight:400;opacity:.7">Don’t offer automatic translation of this page.</small></span><label class="toggle"><input type="checkbox" data-dir="notranslate"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">unavailable_after<br><small style="font-weight:400;opacity:.7">Remove the page from the index after a date/time.</small></span><label class="toggle"><input type="checkbox" data-dir="unavailable_after"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">max-snippet<br><small style="font-weight:400;opacity:.7">Limit snippet length, in characters (-1 = no limit).</small></span><label class="toggle"><input type="checkbox" data-dir="max-snippet"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">max-image-preview<br><small style="font-weight:400;opacity:.7">Control how large image previews may be.</small></span><label class="toggle"><input type="checkbox" data-dir="max-image-preview"><span class="slider"></span></label></div><div class="toggle-row" style="border-bottom:1px solid rgba(0,0,0,.06)"><span class="t-label">max-video-preview<br><small style="font-weight:400;opacity:.7">Limit video preview length, in seconds (-1 = no limit).</small></span><label class="toggle"><input type="checkbox" data-dir="max-video-preview"><span class="slider"></span></label></div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="robotsPresets">
<button type="button" class="preset-chip active" data-preset="🔍 Index, follow — default">🔍 Index, follow — default</button>
<button type="button" class="preset-chip" data-preset="🚫 Hide page — noindex, nofollow">🚫 Hide page — noindex, nofollow</button>
<button type="button" class="preset-chip" data-preset="🖼️ No previews — nosnippet, noimageindex">🖼️ No previews — nosnippet, noimageindex</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="robotsName">Meta tag name</label><select id="robotsName"><option value="robots" selected>robots — all search engines</option><option value="googlebot">googlebot — Google only</option><option value="bingbot">bingbot — Bing only</option></select><div class="hint">Use robots for everyone; a bot name targets one crawler.</div></div><div class="setting"><label for="robotsAfter">unavailable_after date/time</label><input type="datetime-local" class="tool-input" id="robotsAfter" placeholder="2026-12-31T23:59:00" value=""><div class="hint">Only used when unavailable_after is ticked.</div></div><div class="setting"><label for="robotsSnippet">max-snippet value</label><input type="number" class="tool-input" id="robotsSnippet" placeholder="-1 for no limit" value="-1"><div class="hint">Characters of snippet allowed. Only used when ticked.</div></div><div class="setting"><label for="robotsImgPrev">max-image-preview value</label><select id="robotsImgPrev"><option value="large" selected>large</option><option value="standard">standard</option><option value="none">none</option></select><div class="hint">Only used when max-image-preview is ticked.</div></div><div class="setting"><label for="robotsVidPrev">max-video-preview value (seconds)</label><input type="number" class="tool-input" id="robotsVidPrev" placeholder="-1 for no limit" value="-1"><div class="hint">Only used when ticked.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Copy your tag</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="robotsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate &amp; Copy
</button>
<button type="button" class="btn-pro-outline" id="robotsClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="robotsProgWrap">
<div class="progress-bar"><i id="robotsProgBar"></i></div>
<div class="progress-text" id="robotsProgText">Working…</div>
</div>
<div class="results" id="robotsResults">
<p class="result-head">✅ Done — your robots meta tag</p>
<div class="result-summary" id="robotsSummary"></div>
<div class="result-grid" id="robotsGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited robots meta tags — for every page on every site you run.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('robotsShell');
ToolPro.themeToggle(shell,document.getElementById('robotsTheme'));
var boxes=Array.prototype.slice.call(document.querySelectorAll('#robotsChecks input[type=checkbox]')),
nameS=document.getElementById('robotsName'),afterI=document.getElementById('robotsAfter'),
snipI=document.getElementById('robotsSnippet'),imgS=document.getElementById('robotsImgPrev'),
vidI=document.getElementById('robotsVidPrev'),presets=document.getElementById('robotsPresets'),
btn=document.getElementById('robotsBtn'),clearBtn=document.getElementById('robotsClear'),
out=document.getElementById('robotsOut'),expl=document.getElementById('robotsExpl');
var DESC={};boxes.forEach(function(b){DESC[b.getAttribute('data-dir')]=b.closest('.toggle-row').querySelector('small').textContent;});
function current(){
var dirs=[];
boxes.forEach(function(b){
if(!b.checked)return;var d=b.getAttribute('data-dir');
if(d==='unavailable_after'){var v=afterI.value;if(v)dirs.push('unavailable_after: '+v.replace('T',' ')+':00');}
else if(d==='max-snippet')dirs.push('max-snippet:'+snipI.value);
else if(d==='max-image-preview')dirs.push('max-image-preview:'+imgS.value);
else if(d==='max-video-preview')dirs.push('max-video-preview:'+vidI.value);
else dirs.push(d);
});
return dirs;
}
function render(){
var dirs=current();
btn.disabled=false;clearBtn.disabled=dirs.length===0;
if(!dirs.length){out.textContent='<meta name="'+nameS.value+'" content="index, follow">';}
else{out.textContent='<meta name="'+nameS.value+'" content="'+dirs.join(', ')+'">';}
expl.innerHTML=dirs.length?dirs.map(function(d){
var base=d.split(':')[0];
return '<li><strong>'+base+'</strong> — '+(DESC[base]||'')+'</li>';
}).join(''):'<li>index, follow — the default: let search engines index the page and follow its links.</li>';
}
document.getElementById('robotsChecks').addEventListener('change',render);
[nameS,afterI,snipI,imgS,vidI].forEach(function(el){el.addEventListener('input',render);el.addEventListener('change',render);});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
boxes.forEach(function(b){b.checked=false;});
if(t.indexOf('Hide')>-1){boxes.forEach(function(b){var d=b.getAttribute('data-dir');b.checked=(d==='noindex'||d==='nofollow');});}
else if(t.indexOf('previews')>-1){boxes.forEach(function(b){var d=b.getAttribute('data-dir');b.checked=(d==='nosnippet'||d==='noimageindex');});}
render();ToolPro.toast('Preset applied: '+t.trim());
});
clearBtn.addEventListener('click',function(){boxes.forEach(function(b){b.checked=false;});render();
document.getElementById('robotsResults').classList.remove('show');});
btn.addEventListener('click',function(){
render();
var wrap=document.getElementById('robotsProgWrap'),bar=document.getElementById('robotsProgBar'),
txt=document.getElementById('robotsProgText'),resBox=document.getElementById('robotsResults'),
grid=document.getElementById('robotsGrid');
wrap.classList.add('show');bar.style.width='60%';txt.textContent='Building tag…';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');
grid.innerHTML='';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name">robots meta tag</div><button type="button" class="btn-pro">📋 Copy Tag</button>';
var tag=out.textContent;
card.querySelector('button').addEventListener('click',function(){ToolPro.copyText(tag,'Robots tag copied');});
grid.appendChild(card);
document.getElementById('robotsSummary').textContent='🎉 Tag generated — paste it inside your page’s <head>.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Tag generated','ok');
},250);
});
btn.disabled=false;
render();
})();

</script>

## How it works

- **Step 1** — Tick the crawl directives you need; each one shows a plain-English explainer.
- **Step 2** — Pick the target crawler and fill in any values (dates, snippet limits).
- **Step 3** — Copy the generated &lt;meta&gt; tag and paste it inside your page’s &lt;head&gt;.

## Everyday uses

- **Bloggers** — noindex thin pages like tag archives and thank-you pages.
- **Developers** — keep staging sites out of Google with noindex, nofollow.
- **Store owners** — hide out-of-stock or duplicate product pages from the index.
- **SEOs** — fine-tune snippets and previews for brand control in results.

**Warning:** a noindex tag on an important page removes it from Google — double-check before deploying.