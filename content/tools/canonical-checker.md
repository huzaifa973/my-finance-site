---
title: "Canonical Tag Checker — Validate Your Canonical URLs Free"
description: "Paste your page's <head> HTML to validate the canonical tag — duplicates, relative URLs, www mismatches and self-reference errors caught instantly."
category: seo
date: 2026-10-20
draft: false
---

A broken canonical tag quietly tells Google to rank the wrong page — or no page at all. Paste your page's `<head>` HTML below and this checker validates your canonical: is it present, is there exactly one, is the URL absolute, does it match your page URL, and are there www/http/trailing-slash mismatches. Pure static analysis, right in your browser.

<div class="tool-shell" id="canShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Canonical Tag Checker</h2>
<p>Paste your &lt;head&gt; HTML — catch canonical mistakes before Google does.</p>
</div>
<button type="button" class="theme-toggle" id="canTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your page details</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="canUrl">Page URL (optional — for self-reference checks)</label>
<input type="text" class="tool-input" id="canUrl" placeholder="https://example.com/blog/my-post/">
<div class="hint">Add this to check the canonical is self-referencing and matches www/http conventions.</div>
</div>
<div class="setting">
<label for="canHtml">Paste your &lt;head&gt; HTML</label>
<textarea class="tool-input" id="canHtml" rows="7" placeholder="<link rel=&quot;canonical&quot; href=&quot;https://example.com/blog/my-post/&quot; />" style="font-family:monospace"></textarea>
<div class="hint">Right-click your page → View Source → copy the &lt;head&gt; section (or just the canonical line).</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Validate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="canBtn">
<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
Validate Canonical
</button>
<button type="button" class="btn-pro-outline" id="canClear">Clear</button>
</div>
<div class="results" id="canResults">
<p class="result-head">🔗 Canonical report</p>
<div class="result-summary" id="canSummary"></div>
<div class="result-grid" id="canGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate as many pages as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('canShell');
ToolPro.themeToggle(shell, document.getElementById('canTheme'));
var urlIn=document.getElementById('canUrl'), htmlIn=document.getElementById('canHtml');
var btn=document.getElementById('canBtn'), clearBtn=document.getElementById('canClear');
var resBox=document.getElementById('canResults');
var summary=document.getElementById('canSummary'), grid=document.getElementById('canGrid');

function norm(u){
  return (u||'').trim().replace(/\/+$/,'').toLowerCase();
}
function hostOf(u){
  var m=(u||'').match(/^https?:\/\/([^\/]+)/i);
  return m?m[1].toLowerCase():'';
}

function validate(){
  var html=htmlIn.value;
  var pageUrl=urlIn.value.trim();
  if(!html.trim()){ ToolPro.toast('Paste your <head> HTML first','err'); return; }
  var rows=[], fails=0, warns=0;
  function add(status,label,detail,fix){
    rows.push({status:status,label:label,detail:detail,fix:fix});
    if(status==='fail') fails++; if(status==='warn') warns++;
  }
  var icon=function(s){ return s==='pass'?'✅':(s==='warn'?'⚠️':'❌'); };

  // Typo hunt
  if(/cannonical|canonnical|canoncial/i.test(html) && !/rel\s*=\s*["']canonical["']/i.test(html)){
    add('warn','Typo detected','Found a misspelling like "cannonical" — browsers and Google ignore it.','Fix the spelling to rel="canonical".');
  }

  // Find canonical tags
  var tags=html.match(/<link\b[^>]*>/gi)||[];
  var canTags=tags.filter(function(t){ return /rel\s*=\s*["']canonical["']/i.test(t); });
  var canHref=null;

  if(!canTags.length){
    add('fail','Canonical present','No <link rel="canonical"> found in the pasted HTML.','Add one pointing at the preferred URL of this page.');
  } else {
    add('pass','Canonical present','Found '+canTags.length+' canonical tag'+(canTags.length===1?'':'s')+'.','');
    if(canTags.length>1){
      add('fail','Only one canonical','Multiple canonical tags — search engines may ignore all of them.','Keep exactly one canonical tag per page.');
    } else {
      add('pass','Only one canonical','Exactly one canonical tag — correct.','');
    }
    var m=canTags[0].match(/href\s*=\s*["']([^"']*)["']/i);
    canHref=m?m[1].trim():'';
    if(!canHref){
      add('fail','href value','The canonical tag has an empty or missing href.','Set href to the full preferred URL.');
    } else if(/^https?:\/\//i.test(canHref)){
      add('pass','Absolute URL','Canonical uses an absolute URL: '+canHref,'');
    } else {
      add('fail','Absolute URL','Canonical uses a relative URL ("'+canHref+'") — Google requires absolute URLs.','Use the full URL including https:// and your domain.');
    }
    if(/^http:\/\//i.test(canHref)){
      add('warn','HTTPS','Canonical points to http:// — most sites should canonicalize to https://.','Switch the canonical href to https://.');
    }
    // rel case check
    var relM=canTags[0].match(/rel\s*=\s*["']([^"']*)["']/i);
    if(relM && relM[1]!=='canonical'){
      add('warn','rel casing','rel="'+relM[1]+'" works but lowercase is the standard.','Use rel="canonical" in lowercase.');
    }
  }

  // Compare with page URL
  if(pageUrl && canHref && /^https?:\/\//i.test(canHref)){
    if(norm(pageUrl)===norm(canHref)){
      add('pass','Self-referencing','Canonical matches the page URL — the standard setup.','');
    } else {
      var ph=hostOf(pageUrl), ch=hostOf(canHref);
      if(ph&&ch&&ph!==ch){
        var wwwA=ph.replace(/^www\./,'')===ch.replace(/^www\./,'');
        if(wwwA) add('warn','www mismatch','Page is on '+ph+' but the canonical points to '+ch+'.','Make the canonical match your site\u2019s chosen www or non-www version.');
        else add('warn','Cross-domain canonical','Canonical points to a different domain ('+ch+').','That is only correct for true syndication; otherwise point it at this page.');
      } else {
        add('warn','Not self-referencing','Canonical ('+canHref+') differs from the page URL.','If this page is the original, the canonical should match it exactly (including trailing slash).');
      }
    }
    // trailing slash
    var pEnd=/\/$/.test(pageUrl.trim()), cEnd=/\/$/.test(canHref);
    if(pEnd!==cEnd && norm(pageUrl)===norm(canHref)){
      add('warn','Trailing slash','Page URL and canonical differ only by trailing slash.','Pick one convention and use it everywhere.');
    }
    // homepage canonical on deep page
    try{
      var pPath=(pageUrl.match(/^https?:\/\/[^\/]+(\/.*)$/i)||[])[1]||'/';
      var cPath=(canHref.match(/^https?:\/\/[^\/]+(\/.*)$/i)||[])[1]||'/';
      if(pPath!=='/'&&cPath==='/'){
        add('warn','Homepage canonical','A deep page canonicalizing to the homepage usually means a template bug.','Point the canonical at the page\u2019s own URL.');
      }
    }catch(e){}
  } else if(!pageUrl){
    add('warn','Page URL','No page URL entered — self-reference checks were skipped.','Enter the page URL above for the full check.');
  }

  grid.innerHTML='';
  rows.forEach(function(r){
    var c=document.createElement('div'); c.className='result-card';
    var h='<div class="r-name">'+icon(r.status)+' '+r.label+'</div><div class="r-stats">'+r.detail+'</div>';
    if(r.fix) h+='<div class="hint" style="margin-top:6px">💡 Fix: '+r.fix+'</div>';
    c.innerHTML=h; grid.appendChild(c);
  });
  if(canHref) summary.textContent='Canonical URL: '+canHref+' — '+fails+' error'+(fails===1?'':'s')+', '+warns+' warning'+(warns===1?'':'s')+'.';
  else summary.textContent='No canonical URL found — '+fails+' error'+(fails===1?'':'s')+', '+warns+' warning'+(warns===1?'':'s')+'.';
  if(!fails&&!warns) summary.textContent='🎉 Canonical looks perfect — no issues found.';
  resBox.classList.add('show');
  resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
  ToolPro.toast(fails?'Found '+fails+' canonical error'+(fails===1?'':'s'):'Canonical check complete', fails?'err':'ok');
}

btn.addEventListener('click', validate);
clearBtn.addEventListener('click', function(){
  urlIn.value=''; htmlIn.value=''; resBox.classList.remove('show');
});
})();
</script>

## How it works

- **Step 1** — Paste your page's `<head>` HTML (View Source → copy the head section) and optionally the page's own URL.
- **Step 2** — Hit **Validate Canonical**. The tool statically checks for presence, duplicates, relative URLs, typos, HTTPS, www mismatches, and self-reference errors.
- **Step 3** — Apply the 💡 fixes. Re-paste and re-validate after you edit the page.

## Everyday uses

- **Site audits** — spot-check canonicals across key pages after a redesign or migration.
- **Template debugging** — find pages where the CMS emits a homepage or duplicate canonical.
- **SEO learning** — see exactly what a correct canonical tag looks like.
- **Client reports** — validate canonicals before handing off a site.
- **Migrations** — confirm http→https and www→non-www canonicals are consistent.

## Frequently asked questions

**Can this tool fetch my URL directly?**
No — browsers block cross-site fetching (CORS), so the tool analyzes HTML you paste instead. That also means your pages stay private.

**Should every page have a self-referencing canonical?**
Yes, in almost all cases. A self-referencing canonical is the safe default; only point elsewhere for genuine duplicates or syndicated originals.

**Is a relative canonical URL really a problem?**
Yes — Google's documentation requires absolute URLs in canonical tags. Relative ones get ignored or misinterpreted.

**Does the tool send my HTML anywhere?**
No. All analysis happens locally in your browser — nothing is uploaded.

[escaped: END EXTERNAL CONTENT]
