---
title: "Internal Link Analyzer — Audit Links on Any Page, Free"
description: "Paste a page's HTML and audit its internal links: counts, anchors, duplicates, empty links and external links — free, in your browser."
category: seo
date: 2026-10-26
draft: false
slug: internal-link-analyzer
---

Internal links are how search engines and readers move through your site — but broken, empty, or anchor-less links quietly waste that value. Paste the HTML of any page below and this analyzer pulls out every link, sorts internal from external, flags empty and duplicate links, and lists the anchor text so you can spot vague anchors like “click here” at a glance. Nothing is fetched and nothing leaves your browser: you paste the HTML yourself, so there are no CORS blocks and no server calls.

<div class="tool-shell" id="ilaShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Internal Link Analyzer</h2>
<p>Paste page HTML, get a full internal-link audit — anchors, duplicates, and dead ends.</p>
</div>
<button type="button" class="theme-toggle" id="ilaTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste the page HTML</p>
<label for="ilaIn">Page HTML (View Source, copy everything)</label>
<textarea id="ilaIn" class="tool-input" rows="10" placeholder="<html>… paste the full page source here …</html>"></textarea>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audit settings</p>
<div class="settings-panel">
<div class="preset-row" id="ilaPresets">
<button type="button" class="preset-chip active" data-v="all">🔗 All links</button>
<button type="button" class="preset-chip" data-v="internal">🏠 Internal only</button>
<button type="button" class="preset-chip" data-v="problems">⚠️ Problems only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Your site domain (for internal vs external)</label>
<input type="text" id="ilaDomain" class="tool-input" value="example.com">
<div class="hint">Links to this domain, and all relative links, count as internal.</div>
</div>
<div class="setting">
<label>Options</label>
<label class="toggle"><input type="checkbox" id="ilaGroup" checked><span></span> Group duplicate URLs</label>
<label class="toggle"><input type="checkbox" id="ilaEmpty" checked><span></span> Flag empty or missing hrefs</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze links</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ilaBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Analyze Links
</button>
<button type="button" class="btn-pro-outline" id="ilaClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="ilaProgWrap">
<div class="progress-bar"><i id="ilaProgBar"></i></div>
<div class="progress-text" id="ilaProgText">Working…</div>
</div>
<div class="results" id="ilaResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="ilaSummary"></div>
<div class="result-grid" id="ilaGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Use this tool as often as you like — your files and data never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell=document.getElementById('ilaShell'); ToolPro.themeToggle(shell,document.getElementById('ilaTheme'));
  var inp=document.getElementById('ilaIn'),btn=document.getElementById('ilaBtn'),clr=document.getElementById('ilaClear');
  var res=document.getElementById('ilaResults'),sum=document.getElementById('ilaSummary'),grid=document.getElementById('ilaGrid');
  var mode='all';
  document.getElementById('ilaPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#ilaPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');mode=c.dataset.v;ToolPro.toast('View: '+c.textContent.trim());});
  function refresh(){btn.disabled=!inp.value.trim();clr.disabled=!inp.value.trim();}
  inp.addEventListener('input',refresh); refresh();
  clr.addEventListener('click',function(){inp.value='';grid.innerHTML='';res.classList.remove('show');refresh();});
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  btn.addEventListener('click',function(){
    var doc=new DOMParser().parseFromString(inp.value,'text/html');
    var dom=(document.getElementById('ilaDomain').value||'').trim().toLowerCase().replace(/^https?:\/\//,'').replace(/\/.*$/,'');
    var links=[].slice.call(doc.querySelectorAll('a')); var rows=[];
    links.forEach(function(a){var href=(a.getAttribute('href')||'').trim();var txt=(a.textContent||'').trim()||'(no anchor text)';
      var kind='internal'; if(!href)kind='empty'; else if(/^mailto:|^tel:|^javascript:/.test(href))kind='special'; else if(/^#/.test(href))kind='anchor'; else if(/^https?:\/\//i.test(href)){try{kind=(new URL(href).hostname.replace(/^www\./,'')===dom)?'internal':'external';}catch(e){kind='external';}}
      rows.push({href:href||'(missing)',txt:txt,kind:kind});});
    var counts={}; rows.forEach(function(r){counts[r.kind]=(counts[r.kind]||0)+1;});
    var dup={}; rows.forEach(function(r){if(r.href&&r.href!=='(missing)')dup[r.href]=(dup[r.href]||0)+1;});
    var dupN=Object.keys(dup).filter(function(k){return dup[k]>1;}).length;
    var show=rows.filter(function(r){if(mode==='internal')return r.kind==='internal'; if(mode==='problems')return r.kind==='empty'||r.txt==='(no anchor text)'; return true;});
    if(document.getElementById('ilaGroup').checked){var seen={}; show=show.filter(function(r){if(seen[r.href])return false; seen[r.href]=true; return true;});}
    sum.textContent=rows.length+' links found — '+(counts.internal||0)+' internal, '+(counts.external||0)+' external, '+(counts.anchor||0)+' page anchors, '+(counts.empty||0)+' empty, '+dupN+' duplicated URLs.';
    grid.innerHTML=show.map(function(r){return '<div class="result-card"><strong>'+esc(r.kind)+'</strong><p>'+esc(r.txt)+'</p><p>'+esc(r.href)+'</p></div>';}).join('')||'<p>No links match this view.</p>';
    res.classList.add('show'); ToolPro.toast('Audit complete — '+rows.length+' links','ok');
  });
})();
</script>

## How it works

Paste the page source (right-click a page in your browser, choose View Page Source, select all, copy) into step 1, type your domain in step 2, and press **Analyze Links**. The tool parses every `<a>` tag in your browser: relative links and links to your domain count as internal, everything else counts as external, `#` links count as page anchors, and links with no `href` are flagged as empty. Grouping collapses repeat links so navigation menus do not drown the report, and the Problems view isolates empty links and missing anchor text.

## Everyday uses

- **Site audits** — find empty links and vague anchors before a redesign.
- **SEO cleanups** — check a page actually links inward, not just outward.
- **Content edits** — see every anchor on a long article at a glance.
- **Migration checks** — compare link counts before and after moving a site.
- **Learning SEO** — study how well-linked pages structure their navigation.
