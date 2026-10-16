---
title: "Free Dublin Core Metadata Generator — DC Meta Tags for Libraries & Archives"
description: "Generate Dublin Core metadata tags online: title, creator, subject, date and more. Loved by libraries and archives. Free forever, no sign-up."
category: seo
date: 2026-10-16
draft: false
---

Dublin Core is the metadata standard libraries, archives, and academic repositories rely on to catalog digital resources. This free generator turns your form entries into valid DC.* meta tags — title, creator, subject, date, rights and more — ready to paste into your page’s &lt;head&gt;.

<div class="tool-shell" id="dcoreShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 3v2h4V7H6zm0 4v2h4v-2H6zm10 0v6h-6v-2h4v-2h-4v-2h6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Dublin Core Metadata Generator</h2>
<p>Build standards-compliant Dublin Core meta tags — fill the form, copy, done.</p>
</div>
<button type="button" class="theme-toggle" id="dcoreTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Describe your resource</p>
<div class="setting"><label>Live preview</label><code class="tool-output" id="dcoreOut" style="display:block;white-space:pre-wrap;word-break:break-all"></code><div class="hint" id="dcoreCount"></div></div><div class="setting"><label for="dcTitle">Title</label><input type="text" class="tool-input" id="dcTitle" placeholder="e.g. A Complete Guide to Urban Gardening"></div><div class="setting"><label for="dcCreator">Creator</label><input type="text" class="tool-input" id="dcCreator" placeholder="e.g. Jane Doe"></div><div class="setting"><label for="dcSubject">Subject</label><input type="text" class="tool-input" id="dcSubject" placeholder="e.g. gardening, sustainability"></div><div class="setting"><label for="dcDescription">Description</label><input type="text" class="tool-input" id="dcDescription" placeholder="One or two sentences about the resource."></div><div class="setting"><label for="dcPublisher">Publisher</label><input type="text" class="tool-input" id="dcPublisher" placeholder="e.g. DollarWise"></div><div class="setting"><label for="dcDate">Date</label><input type="text" class="tool-input" id="dcDate" placeholder="e.g. 2026-10-16"></div><div class="setting"><label for="dcIdentifier">Identifier</label><input type="text" class="tool-input" id="dcIdentifier" placeholder="e.g. https://example.com/guide"></div><div class="setting"><label for="dcLanguage">Language</label><input type="text" class="tool-input" id="dcLanguage" placeholder="e.g. en"></div><div class="setting"><label for="dcRights">Rights</label><input type="text" class="tool-input" id="dcRights" placeholder="e.g. CC BY 4.0 — free to share"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="dcorePresets">
<button type="button" class="preset-chip active" data-preset="📚 Article">📚 Article</button>
<button type="button" class="preset-chip" data-preset="🖼️ Image">🖼️ Image</button>
<button type="button" class="preset-chip" data-preset="🎥 Video">🎥 Video</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="dcType">Resource type (DC.type)</label><select id="dcType"><option value="Text" selected>Text — articles, books</option><option value="Image">Image — photos, illustrations</option><option value="MovingImage">MovingImage — video</option><option value="Sound">Sound — audio</option><option value="Dataset">Dataset — data files</option></select><div class="hint">The DCMI type vocabulary value for your resource.</div></div><div class="setting"><label for="dcFormat">Format / MIME type (DC.format)</label><input type="text" class="tool-input" id="dcFormat" placeholder="e.g. text/html" value=""><div class="hint">The file format, e.g. text/html or image/jpeg.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate tags</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="dcoreBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate &amp; Copy
</button>
<button type="button" class="btn-pro-outline" id="dcoreClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="dcoreProgWrap">
<div class="progress-bar"><i id="dcoreProgBar"></i></div>
<div class="progress-text" id="dcoreProgText">Working…</div>
</div>
<div class="results" id="dcoreResults">
<p class="result-head">✅ Done — your Dublin Core tags</p>
<div class="result-summary" id="dcoreSummary"></div>
<div class="result-grid" id="dcoreGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited Dublin Core tag sets — for every resource you publish.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('dcoreShell');
ToolPro.themeToggle(shell,document.getElementById('dcoreTheme'));
var ids=['dcTitle','dcCreator','dcSubject','dcDescription','dcPublisher','dcDate','dcIdentifier','dcLanguage','dcRights'],
typeS=document.getElementById('dcType'),fmtI=document.getElementById('dcFormat'),
btn=document.getElementById('dcoreBtn'),clearBtn=document.getElementById('dcoreClear'),
out=document.getElementById('dcoreOut'),count=document.getElementById('dcoreCount'),
presets=document.getElementById('dcorePresets');
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function build(){
var tags=[];
function add(name,val){if(val&&val.trim())tags.push('<meta name="DC.'+name+'" content="'+esc(val.trim())+'">');}
add('title',document.getElementById('dcTitle').value);
add('creator',document.getElementById('dcCreator').value);
document.getElementById('dcSubject').value.split(',').forEach(function(s){add('subject',s);});
add('description',document.getElementById('dcDescription').value);
add('publisher',document.getElementById('dcPublisher').value);
add('date',document.getElementById('dcDate').value);
add('type',typeS.value);
add('format',fmtI.value);
add('identifier',document.getElementById('dcIdentifier').value);
add('language',document.getElementById('dcLanguage').value);
add('rights',document.getElementById('dcRights').value);
return tags;
}
function render(){
var tags=build();
out.textContent=tags.join('\n')||'<!-- Fill in at least one field above -->';
count.textContent=tags.length+' tag'+(tags.length===1?'':'s')+' generated';
var any=ids.some(function(i){return document.getElementById(i).value.trim();})||fmtI.value.trim();
btn.disabled=false;clearBtn.disabled=!any;
}
ids.concat(['dcFormat']).forEach(function(i){document.getElementById(i).addEventListener('input',render);});
typeS.addEventListener('change',render);
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('Image')>-1){typeS.value='Image';fmtI.value='image/jpeg';}
else if(t.indexOf('Video')>-1){typeS.value='MovingImage';fmtI.value='video/mp4';}
else{typeS.value='Text';fmtI.value='text/html';}
render();ToolPro.toast('Preset applied: '+t.trim());
});
clearBtn.addEventListener('click',function(){ids.forEach(function(i){document.getElementById(i).value='';});
fmtI.value='';render();document.getElementById('dcoreResults').classList.remove('show');});
btn.addEventListener('click',function(){
var tags=build();
if(!tags.length){ToolPro.toast('Fill in at least one field first','err');return;}
var grid=document.getElementById('dcoreGrid'),resBox=document.getElementById('dcoreResults'),
wrap=document.getElementById('dcoreProgWrap'),bar=document.getElementById('dcoreProgBar'),
txt=document.getElementById('dcoreProgText');
wrap.classList.add('show');bar.style.width='60%';txt.textContent='Building tags…';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');grid.innerHTML='';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name">Dublin Core meta tags</div><div class="r-stats"></div><button type="button" class="btn-pro">📋 Copy Tags</button>';
card.querySelector('.r-stats').textContent=tags.length+' tags ready for your <head>.';
card.querySelector('button').addEventListener('click',function(){ToolPro.copyText(tags.join('\n'),'Dublin Core tags copied');});
grid.appendChild(card);
document.getElementById('dcoreSummary').textContent='🎉 '+tags.length+' Dublin Core tags generated.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Tags generated','ok');
},250);
});
render();
})();

</script>

## How it works

- **Step 1** — Fill in the fields that describe your resource (title, creator, subject…).
- **Step 2** — Pick the DCMI resource type and MIME format.
- **Step 3** — Copy the generated DC.* meta tags into your page’s &lt;head&gt;. Only filled fields produce tags.

## Everyday uses

- **Librarians & archivists** — catalog digital collections with standard metadata.
- **Academics** — add proper metadata to papers and datasets for repositories.
- **Publishers** — make ebooks and articles harvestable by aggregators.
- **Bloggers** — richer metadata helps discovery beyond basic SEO tags.

**Tip:** the Subject field accepts comma-separated keywords — one tag per term.