---
title: "Free Open Graph Debugger — Preview & Fix Social Share Tags"
description: "Debug Open Graph and Twitter Card tags online: paste your page head, see present vs missing tags, preview the social card, and fix issues. Free."
category: seo
date: 2026-10-16
draft: false
---

Broken share previews cost you clicks. This free Open Graph debugger audits the og: and twitter: meta tags in your page’s &lt;head&gt;, shows exactly which required tags are present or missing, renders a mock social-card preview, and flags the classic mistakes — like a missing og:image or a relative image URL that no platform can fetch.

<div class="tool-shell" id="ogdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Open Graph Debugger</h2>
<p>Paste your page’s <head> — get a full tag audit, a mock social card, and fixes.</p>
</div>
<button type="button" class="theme-toggle" id="ogdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your page’s <head> HTML</p>
<div class="setting"><label for="ogdHtml">Paste the &lt;head&gt; section of your page</label><textarea class="tool-input" id="ogdHtml" rows="8" placeholder="&lt;head&gt;&#10;&lt;meta property=&quot;og:title&quot; content=&quot;My Page&quot;&gt;&#10;&lt;/head&gt;"></textarea><div class="hint">Tip: in your browser, right-click the page → View page source, copy everything between &lt;head&gt; and &lt;/head&gt;.</div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="ogdPresets">
<button type="button" class="preset-chip active" data-preset="🔍 Quick audit">🔍 Quick audit</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="ogdPlatform">Preview style</label><select id="ogdPlatform"><option value="facebook" selected>Facebook / LinkedIn card</option><option value="twitter">X (Twitter) large card</option></select><div class="hint">Card layouts differ slightly per platform.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Strict mode</span><label class="toggle"><input type="checkbox" id="ogdStrict" checked><span class="slider"></span></label></div><div class="hint">Treat recommended tags (og:description, twitter:card) as required.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Audit tags</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ogdBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Audit My Tags
</button>
<button type="button" class="btn-pro-outline" id="ogdClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="ogdProgWrap">
<div class="progress-bar"><i id="ogdProgBar"></i></div>
<div class="progress-text" id="ogdProgText">Working…</div>
</div>
<div class="results" id="ogdResults">
<p class="result-head">✅ Done — your tag audit</p>
<div class="result-summary" id="ogdSummary"></div>
<div class="result-grid" id="ogdGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Audit unlimited pages — fix every share preview before you publish.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('ogdShell');
ToolPro.themeToggle(shell,document.getElementById('ogdTheme'));
var html=document.getElementById('ogdHtml'),plat=document.getElementById('ogdPlatform'),
strict=document.getElementById('ogdStrict'),btn=document.getElementById('ogdBtn'),
clearBtn=document.getElementById('ogdClear');
function refresh(){var ok=html.value.trim().length>20;btn.disabled=!ok;clearBtn.disabled=!ok&&!html.value;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Audit My Tags';}
html.addEventListener('input',refresh);
clearBtn.addEventListener('click',function(){html.value='';document.getElementById('ogdResults').classList.remove('show');refresh();});
function abs(u){return /^https?:\/\//i.test(u||'');}
btn.addEventListener('click',function(){
var doc=new DOMParser().parseFromString(html.value,'text/html');
var metas=Array.prototype.slice.call(doc.querySelectorAll('meta'));
var tags={};
metas.forEach(function(m){var k=m.getAttribute('property')||m.getAttribute('name');if(k)tags[k.toLowerCase()]=m.getAttribute('content')||'';});
var title=(doc.querySelector('title')||{}).textContent||'';
var required=['og:title','og:type','og:image','og:url'];
var recommended=['og:description','og:site_name','twitter:card','twitter:title','twitter:description','twitter:image'];
var issues=[],present=[],missing=[];
required.forEach(function(t){if(tags[t])present.push(t);else{missing.push(t);issues.push('❌ Missing required tag: '+t);}});
recommended.forEach(function(t){if(tags[t])present.push(t);else if(strict.checked){missing.push(t);issues.push('⚠️ Recommended tag missing: '+t);}});
if(tags['og:title']&&tags['og:title'].length>60)issues.push('⚠️ og:title is '+tags['og:title'].length+' characters — keep it under ~60 so it is not cut off.');
if(tags['og:description']&&tags['og:description'].length>160)issues.push('⚠️ og:description is '+tags['og:description'].length+' characters — ~155 is the sweet spot.');
if(tags['og:image']&&!abs(tags['og:image']))issues.push('❌ og:image is a relative URL ("'+tags['og:image']+'") — platforms cannot fetch it. Use an absolute https:// URL.');
if(tags['twitter:image']&&!abs(tags['twitter:image']))issues.push('❌ twitter:image is relative — use an absolute https:// URL.');
if(tags['og:image']&&tags['og:image'].indexOf('http://')===0)issues.push('⚠️ og:image uses http:// — switch to https:// to avoid mixed-content blocks.');
if(tags['twitter:card']&&tags['twitter:card']!=='summary_large_image'&&tags['twitter:card']!=='summary')issues.push('⚠️ Unusual twitter:card value "'+tags['twitter:card']+'" — use summary or summary_large_image.');
if(!title)issues.push('⚠️ No <title> found in the pasted head.');
var grid=document.getElementById('ogdGrid'),resBox=document.getElementById('ogdResults'),
wrap=document.getElementById('ogdProgWrap'),bar=document.getElementById('ogdProgBar'),
txt=document.getElementById('ogdProgText');
btn.disabled=true;wrap.classList.add('show');bar.style.width='50%';txt.textContent='Auditing tags…';grid.innerHTML='';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');
var cTitle=tags['og:title']||title||'(no title found)';
var cDesc=tags['og:description']||tags['description']||'(no description found)';
var cImg=tags['og:image']||tags['twitter:image']||'';
var cSite=tags['og:site_name']||(function(){try{return new URL(tags['og:url']||'').hostname;}catch(e){return 'yoursite.com';}})();
var cardHtml='<div style="border:1px solid rgba(0,0,0,.12);border-radius:10px;overflow:hidden;max-width:480px;margin:0 auto;text-align:left">'+
(cImg&&abs(cImg)?'<div style="height:200px;background:#e5e7eb center/cover url(&quot;'+cImg.replace(/"/g,'&quot;')+'&quot;)"></div>'
:'<div style="height:120px;background:repeating-linear-gradient(45deg,#f3f4f6,#f3f4f6 10px,#e5e7eb 10px,#e5e7eb 20px);display:flex;align-items:center;justify-content:center;color:#6b7280;font-size:.85rem">no image — add og:image</div>')+
'<div style="padding:.8rem 1rem"><div style="font-size:.75rem;color:#6b7280;text-transform:uppercase">'+cSite+'</div>'+
'<div style="font-weight:700">'+cTitle+'</div><div style="color:#4b5563;font-size:.9rem">'+cDesc+'</div></div></div>';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name">Mock '+(plat.value==='twitter'?'X (Twitter)':'Facebook / LinkedIn')+' card preview</div>'+cardHtml+
'<div class="r-stats"></div><button type="button" class="btn-pro">📋 Copy Audit Report</button>';
var report='OPEN GRAPH AUDIT\nPresent ('+present.length+'): '+present.join(', ')+'\nMissing ('+missing.length+'): '+(missing.join(', ')||'none')+'\n\nISSUES\n'+(issues.join('\n')||'None — looking good!');
card.querySelector('.r-stats').innerHTML='<strong>Present ('+present.length+'):</strong> '+present.join(', ')+
'<br><strong>Missing ('+missing.length+'):</strong> '+(missing.join(', ')||'none')+
'<br><br><strong>Issues:</strong><ul style="text-align:left">'+issues.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';
card.querySelector('button').addEventListener('click',function(){ToolPro.copyText(report,'Audit report copied');});
grid.appendChild(card);
document.getElementById('ogdSummary').textContent=issues.length?
('⚠️ '+issues.length+' issue'+(issues.length>1?'s':'')+' found — see fixes above.'):
'🎉 All checks passed — your share preview should look great.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
btn.disabled=false;refresh();ToolPro.toast('Audit complete','ok');
},350);
});
refresh();
})();

</script>

## How it works

- **Step 1** — Paste your page’s &lt;head&gt; HTML into the box. Nothing is uploaded; parsing happens locally.
- **Step 2** — Choose a preview style and hit Audit.
- **Step 3** — Review the present-vs-missing tag list, the mock social card, and the issue list with fixes.

## Everyday uses

- **Bloggers** — check every post shows a proper title, description, and image when shared.
- **Marketers** — catch missing og:image tags before a campaign goes live.
- **Developers** — verify template changes actually emit the right meta tags.
- **Store owners** — make product links unfurl with price-worthy images and titles.

**Tip:** after fixing tags, re-scrape the URL in each platform’s official debugger to clear their cache.