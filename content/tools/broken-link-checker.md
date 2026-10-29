---
title: "Free Broken Link Checker — Check URLs for Dead Links Online"
description: "Paste a list of URLs and check each one for broken, redirected, or working status in your browser. Free forever, no sign-up, nothing uploaded."
category: seo
date: 2026-10-29
draft: false
---

Dead links hurt SEO and frustrate visitors. Paste a list of URLs — from a sitemap, a blog post, or a link audit — and this checker tests each one live from your browser, flagging broken links, redirects, and pages that could not be verified.

<div class="tool-shell" id="blcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Broken Link Checker</h2>
<p>Test a list of URLs for broken, redirected, or working links — right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="blcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your URLs</p>
<div class="settings-panel">
<div class="setting">
<label for="blcInput">URLs — one per line (up to 50)</label>
<textarea class="tool-input" id="blcInput" rows="8" placeholder="https://example.com/page-one&#10;https://example.com/page-two&#10;https://example.com/old-page"></textarea>
<div class="hint">Tip: paste URLs copied from a sitemap, spreadsheet, or link report.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Check settings</p>
<div class="settings-panel">
<div class="preset-row" id="blcPresets">
<button type="button" class="preset-chip active" data-m="all">🔍 Check all</button>
<button type="button" class="preset-chip" data-m="broken">🚨 Broken only view</button>
</div>
<div class="settings-grid">
<div class="setting"><div class="toggle-row"><span class="t-label">Follow redirects and report the final URL</span><label class="toggle"><input type="checkbox" id="blcFollow" checked><span class="slider"></span></label></div><div class="hint">Browsers follow redirects automatically; the final URL is shown when it differs.</div></div>
<div class="setting"><div class="toggle-row"><span class="t-label">Deduplicate identical URLs</span><label class="toggle"><input type="checkbox" id="blcDedupe" checked><span class="slider"></span></label></div><div class="hint">Removes exact duplicates before checking, so counts stay honest.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Check links &amp; review results</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="blcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Check Links
</button>
<button type="button" class="btn-pro-outline" id="blcClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="blcProgWrap">
<div class="progress-bar"><i id="blcProgBar"></i></div>
<div class="progress-text" id="blcProgText">Working…</div>
</div>
<div class="results" id="blcResults">
<p class="result-head">✅ Done — link check results</p>
<div class="result-summary" id="blcSummary"></div>
<div class="result-grid" id="blcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Check as many URL lists as you like — this tool runs entirely in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('blcShell');
ToolPro.themeToggle(shell,document.getElementById('blcTheme'));
var input=document.getElementById('blcInput'),btn=document.getElementById('blcBtn'),clearBtn=document.getElementById('blcClear'),grid=document.getElementById('blcGrid'),resBox=document.getElementById('blcResults'),sumEl=document.getElementById('blcSummary'),progWrap=document.getElementById('blcProgWrap'),progBar=document.getElementById('blcProgBar'),progText=document.getElementById('blcProgText'),presets=document.getElementById('blcPresets'),viewMode='all';
function refresh(){var has=input.value.trim().length>0;btn.disabled=!has;clearBtn.disabled=!has;}
input.addEventListener('input',refresh);
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');viewMode=c.dataset.m;ToolPro.toast('View: '+c.textContent.trim());});
clearBtn.addEventListener('click',function(){input.value='';grid.innerHTML='';resBox.classList.remove('show');refresh();});
function statusOf(r,url){if(r.redirected)return{label:'Redirected',cls:'',note:'Redirects to '+r.url};if(r.status>=200&&r.status<300)return{label:'OK ('+r.status+')',cls:'done',note:'Working link'};if(r.status>=300&&r.status<400)return{label:'Redirect ('+r.status+')',cls:'',note:'Redirect response'};if(r.status>=400)return{label:'Broken ('+r.status+')',cls:'',note:'Fix or remove this link'};return{label:'Unknown',cls:'',note:'Unexpected response'};}
btn.addEventListener('click',async function(){
var lines=input.value.split(/\r?\n/).map(function(s){return s.trim();}).filter(Boolean);
if(document.getElementById('blcDedupe').checked)lines=lines.filter(function(v,i,a){return a.indexOf(v)===i;});
lines=lines.slice(0,50);
if(!lines.length){ToolPro.toast('Paste at least one URL first','err');return;}
btn.disabled=true;grid.innerHTML='';resBox.classList.remove('show');progWrap.classList.add('show');
var counts={ok:0,broken:0,redir:0,unver:0};
for(var i=0;i<lines.length;i++){
var url=lines[i];progText.textContent='Checking '+(i+1)+' of '+lines.length+'…';progBar.style.width=Math.round(i/lines.length*100)+'%';
var st;
try{var r=await fetch(url,{method:'HEAD',redirect:document.getElementById('blcFollow').checked?'follow':'manual'});st=statusOf(r,url);if(st.label.indexOf('OK')===0)counts.ok++;else if(st.label.indexOf('Broken')===0)counts.broken++;else counts.redir;}
catch(e){try{var r2=await fetch(url,{redirect:'follow'});st=statusOf(r2,url);if(st.label.indexOf('OK')===0)counts.ok++;else if(st.label.indexOf('Broken')===0)counts.broken++;else counts.redir;}catch(e2){st={label:'Could not verify',cls:'',note:'Blocked by the site (CORS / network) — check it manually in a browser tab.'};counts.unver++;}}
if(viewMode==='broken'&&st.label.indexOf('Broken')!==0&&st.label!=='Could not verify'){continue;}
var card=document.createElement('div');card.className='result-card';
var b=document.createElement('div');b.className='r-name';b.textContent=url;b.title=url;
var s=document.createElement('div');s.className='r-stats';s.innerHTML='<b>'+st.label+'</b> — '+st.note;
card.appendChild(b);card.appendChild(s);grid.appendChild(card);
}
progBar.style.width='100%';progWrap.classList.remove('show');
sumEl.textContent='Checked '+lines.length+' URLs — '+counts.ok+' working, '+counts.broken+' broken, '+counts.redir+' redirected, '+counts.unver+' could not be verified.';
resBox.classList.add('show');btn.disabled=false;ToolPro.toast('Link check complete','ok');
});
refresh();
})();
</script>

## How it works

- **Step 1** — Paste one URL per line (up to 50 per run).
- **Step 2** — Choose whether to deduplicate and follow redirects.
- **Step 3** — Hit Check Links. Each URL is requested live from your browser and classified as working, broken, redirected, or unverifiable.

**Honest limitation:** many sites block cross-origin checks from a browser (CORS), so some live pages report as "Could not verify" even though they work fine. Open those in a tab to confirm — a 404 there is the real verdict.

## Everyday uses

- **Bloggers** — audit old posts for dead outbound links before a traffic push.
- **Site owners** — spot-check URLs after a redesign or domain move.
- **SEOs** — build a fix list: 404s to redirect, redirects to update to final URLs.
- **Freelancers** — run a quick link audit as part of a site health report.
