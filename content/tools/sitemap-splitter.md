---
title: "Sitemap Splitter — Split Large XML Sitemaps Free"
description: "Split a big XML sitemap into smaller valid sitemaps of N URLs each — paste XML or upload the file, download every part free."
category: seo
date: 2026-10-26
draft: false
slug: sitemap-splitter
---

Search engines accept sitemaps of up to 50,000 URLs, but large sites, staging tools, and submission forms often choke long before that — and a single broken URL can invalidate a whole file. Paste your sitemap XML (or drop the file in), pick a chunk size, and this tool splits it into clean, valid sitemap files, each with the proper XML header and namespace, ready to download one by one. Everything runs in your browser, so your full URL list never leaves your device.

<div class="tool-shell" id="smsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sitemap Splitter</h2>
<p>Split one giant sitemap into small, valid parts — ready to submit anywhere.</p>
</div>
<button type="button" class="theme-toggle" id="smsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your sitemap</p>
<div class="dropzone" id="smsDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag & drop your sitemap.xml here</strong>
<span>or click to browse — .xml only</span>
<input type="file" id="smsFile" accept=".xml">
</div>
<ul class="file-list" id="smsList"></ul><div style="margin-top:10px"><label for="smsIn">Or paste sitemap XML here</label>
<textarea id="smsIn" class="tool-input" rows="6" placeholder="<?xml version="1.0"?> <urlset>…</urlset>"></textarea></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Split settings</p>
<div class="settings-panel">
<div class="preset-row" id="smsPresets">
<button type="button" class="preset-chip active" data-v="1000">1,000 URLs per file</button>
<button type="button" class="preset-chip" data-v="10000">10,000 URLs per file</button>
<button type="button" class="preset-chip" data-v="50000">50,000 URLs per file</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>URLs per file</label>
<input type="range" id="smsSize" min="100" max="50000" step="100" value="1000"> <span class="val" id="smsSizeVal">1000</span>
<div class="hint">Smaller files are easier to submit and debug.</div>
</div>
<div class="setting">
<label>Output naming</label>
<input type="text" id="smsBase" class="tool-input" value="sitemap-part">
<div class="hint">Files download as sitemap-part-1.xml, sitemap-part-2.xml, and so on.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Split sitemap</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="smsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Split Sitemap
</button>
<button type="button" class="btn-pro-outline" id="smsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="smsProgWrap">
<div class="progress-bar"><i id="smsProgBar"></i></div>
<div class="progress-text" id="smsProgText">Working…</div>
</div>
<div class="results" id="smsResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="smsSummary"></div>
<div class="result-grid" id="smsGrid"></div>
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
  var shell=document.getElementById('smsShell'); ToolPro.themeToggle(shell,document.getElementById('smsTheme'));
  var inp=document.getElementById('smsIn'),file=document.getElementById('smsFile'),listEl=document.getElementById('smsList');
  var btn=document.getElementById('smsBtn'),clr=document.getElementById('smsClear');
  var res=document.getElementById('smsResults'),sum=document.getElementById('smsSummary'),grid=document.getElementById('smsGrid');
  var sizeEl=document.getElementById('smsSize'),sizeVal=document.getElementById('smsSizeVal');
  ToolPro.bindSlider(sizeEl,sizeVal,function(v){return v;});
  var chunk=1000;
  document.getElementById('smsPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#smsPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');chunk=parseInt(c.dataset.v,10);sizeEl.value=chunk;sizeEl.dispatchEvent(new Event('input'));ToolPro.toast('Chunk size: '+chunk);});
  sizeEl.addEventListener('input',function(){chunk=parseInt(sizeEl.value,10);});
  ToolPro.dropzone(document.getElementById('smsDrop'),{multiple:false,accept:'.xml',maxFiles:1,onFiles:function(arr){if(!arr.length)return;var r=new FileReader();r.onload=function(){inp.value=r.result;refresh();ToolPro.toast('Sitemap loaded','ok');};r.readAsText(arr[0]);listEl.innerHTML='';ToolPro.fileRow(listEl,arr[0],function(){refresh();});}});
  function refresh(){btn.disabled=!inp.value.trim();clr.disabled=!inp.value.trim();}
  inp.addEventListener('input',refresh); refresh();
  clr.addEventListener('click',function(){inp.value='';file.value='';listEl.innerHTML='';grid.innerHTML='';res.classList.remove('show');refresh();});
  btn.addEventListener('click',function(){
    var xml=inp.value; var locs=[]; var re=/<loc>([^<]+)<\/loc>/gi; var m;
    while((m=re.exec(xml))!==null){locs.push(m[1].trim());}
    if(!locs.length){ToolPro.toast('No <loc> URLs found in that XML','err');return;}
    var base=(document.getElementById('smsBase').value||'sitemap-part').replace(/[^a-z0-9-_]/gi,'-');
    var parts=[]; for(var i=0;i<locs.length;i+=chunk){parts.push(locs.slice(i,i+chunk));}
    sum.textContent=locs.length+' URLs split into '+parts.length+' file(s) of up to '+chunk+' URLs each.';
    grid.innerHTML='';
    parts.forEach(function(part,idx){
      var body='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+part.map(function(u){return '  <url><loc>'+u+'</loc></url>';}).join('\n')+'\n</urlset>';
      var card=document.createElement('div'); card.className='result-card';
      var p=document.createElement('p'); p.textContent='Part '+(idx+1)+' — '+part.length+' URLs ('+part[0].slice(0,50)+'… )'; card.appendChild(p);
      var a=document.createElement('a'); a.className='btn-pro'; a.textContent='Download part '+(idx+1);
      a.addEventListener('click',function(){ToolPro.download('data:text/xml;charset=utf-8,'+encodeURIComponent(body),base+'-'+(idx+1)+'.xml');});
      card.appendChild(a); grid.appendChild(card);
    });
    res.classList.add('show'); ToolPro.toast('Split into '+parts.length+' files','ok');
  });
})();
</script>

## How it works

Drop a sitemap.xml (or paste its contents) into step 1, choose how many URLs belong in each part in step 2, and press **Split Sitemap**. The tool reads every `<loc>` entry with a plain pattern match, groups them into chunks, and rebuilds each chunk as a complete, valid sitemap — XML declaration, the sitemaps.org namespace, and one `<url>` element per entry. Each part downloads separately, named from your base name, so you can submit or inspect them one at a time.

## Everyday uses

- **Huge sites** — break a 200,000-URL sitemap into submittable parts.
- **Debugging** — isolate which section of a sitemap holds bad URLs.
- **Staging** — split before uploading to a host with file-size limits.
- **Indexing workflows** — submit one section at a time and watch coverage.
- **Migrations** — hand a developer clean per-section sitemaps.
