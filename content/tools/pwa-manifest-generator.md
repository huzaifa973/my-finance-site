---
title: "Free PWA Manifest Generator — Create manifest.json Online"
description: "Generate a valid PWA web app manifest.json in your browser — live preview, auto-resized 192 & 512 icons, install snippet. Free forever, no sign-up, fully private."
category: seo
date: 2026-10-18
draft: false
---

Turn any website into an installable app with a proper Web App Manifest. Fill in your app details, upload one icon (we resize it to the required 192×192 and 512×512 for you), and watch the manifest.json build live — then download it plus the icons and the HTML snippet that wires everything up. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="pwShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PWA Manifest Generator</h2>
<p>Build a valid manifest.json with live preview — auto-resized icons and the install snippet included.</p>
</div>
<button type="button" class="theme-toggle" id="pwTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> App details &amp; icon</p>
<div class="settings-grid">
<div class="setting">
<label for="pwName">App name *</label>
<input type="text" class="tool-input" id="pwName" placeholder="e.g. DollarWise" maxlength="60">
</div>
<div class="setting">
<label for="pwShort">Short name</label>
<input type="text" class="tool-input" id="pwShort" placeholder="e.g. DollarWise" maxlength="24">
<div class="hint">Shown on the home screen — keep it under 12 characters.</div>
</div>
<div class="setting">
<label for="pwDesc">Description</label>
<textarea class="tool-input" id="pwDesc" rows="2" placeholder="What does your app do?" maxlength="300"></textarea>
</div>
<div class="setting">
<label for="pwUrl">Start URL</label>
<input type="text" class="tool-input" id="pwUrl" value="/" maxlength="200" placeholder="/">
</div>
</div>
<div class="dropzone" id="pwDz">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Upload your app icon (PNG)</strong>
<span>one square PNG — we generate the 192px &amp; 512px versions</span>
<input type="file" id="pwFile" accept="image/png">
</div>
<div class="settings-grid" id="pwIconPrev" style="display:none">
<div class="setting"><span class="t-label">icon-192.png</span><img id="pwImg192" alt="192px icon preview" style="width:96px;height:96px;border-radius:12px;border:1px solid #ddd"></div>
<div class="setting"><span class="t-label">icon-512.png</span><img id="pwImg512" alt="512px icon preview" style="width:96px;height:96px;border-radius:12px;border:1px solid #ddd"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Display settings</p>
<div class="settings-panel">
<div class="preset-row" id="pwPresets">
<button type="button" class="preset-chip active" data-d="standalone" data-o="portrait">📱 Mobile app</button>
<button type="button" class="preset-chip" data-d="standalone" data-o="any">🖥️ Desktop PWA</button>
<button type="button" class="preset-chip" data-d="fullscreen" data-o="landscape">🎮 Game</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pwThemeC">Theme color</label>
<input type="color" class="tool-input" id="pwThemeC" value="#0d6efd" style="height:44px;padding:4px">
<div class="hint">Colors the browser toolbar on mobile.</div>
</div>
<div class="setting">
<label for="pwBg">Background color</label>
<input type="color" class="tool-input" id="pwBg" value="#ffffff" style="height:44px;padding:4px">
<div class="hint">Splash-screen background while the app loads.</div>
</div>
<div class="setting">
<label for="pwDisplay">Display mode</label>
<select id="pwDisplay">
<option value="standalone" selected>Standalone — app-like, no browser chrome</option>
<option value="fullscreen">Fullscreen — games &amp; media</option>
<option value="minimal-ui">Minimal UI — small browser controls</option>
<option value="browser">Browser — normal tab</option>
</select>
</div>
<div class="setting">
<label for="pwOrient">Orientation</label>
<select id="pwOrient">
<option value="portrait" selected>Portrait</option>
<option value="landscape">Landscape</option>
<option value="any">Any</option>
</select>
</div>
<div class="setting">
<label for="pwScope">Scope</label>
<input type="text" class="tool-input" id="pwScope" value="/" maxlength="200">
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="pwMask" checked><span></span> Maskable icon purpose</label>
<div class="hint">Lets Android crop your icon into adaptive shapes — recommended.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pwGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate Manifest
</button>
<button type="button" class="btn-pro-outline" id="pwDlIcons" disabled>⬇ Icons only</button>
</div>
<div class="results show" id="pwRes">
<p class="result-head">📄 Live manifest.json preview</p>
<div class="result-summary" id="pwWarn"></div>
<pre class="tool-output" id="pwPrev" style="max-height:320px;overflow:auto"></pre>
<div class="result-grid" id="pwGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate manifests for unlimited projects — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pwShell');
ToolPro.themeToggle(shell, document.getElementById('pwTheme'));
var nameIn=document.getElementById('pwName'), shortIn=document.getElementById('pwShort');
var descIn=document.getElementById('pwDesc'), urlIn=document.getElementById('pwUrl');
var themeIn=document.getElementById('pwThemeC'), bgIn=document.getElementById('pwBg');
var dispSel=document.getElementById('pwDisplay'), orientSel=document.getElementById('pwOrient');
var scopeIn=document.getElementById('pwScope'), maskBox=document.getElementById('pwMask');
var go=document.getElementById('pwGo'), dlIcons=document.getElementById('pwDlIcons');
var prev=document.getElementById('pwPrev'), warn=document.getElementById('pwWarn'), grid=document.getElementById('pwGrid');
var icon192=null, icon512=null, iconName='icon';
document.getElementById('pwPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#pwPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  dispSel.value=chip.dataset.d; orientSel.value=chip.dataset.o;
  render();
  ToolPro.toast('Preset applied: '+chip.textContent.trim());
});
function manifestObj(){
  var icons=[];
  if(icon192) icons.push({src:'icon-192.png', sizes:'192x192', type:'image/png'});
  if(icon512) icons.push({src:'icon-512.png', sizes:'512x512', type:'image/png', purpose:maskBox.checked?'any maskable':'any'});
  var m={ name:nameIn.value.trim()||'My App',
    short_name:shortIn.value.trim()||nameIn.value.trim().slice(0,12)||'My App',
    description:descIn.value.trim(),
    start_url:urlIn.value.trim()||'/',
    scope:scopeIn.value.trim()||'/',
    id:urlIn.value.trim()||'/',
    display:dispSel.value, orientation:orientSel.value,
    background_color:bgIn.value, theme_color:themeIn.value };
  if(icons.length) m.icons=icons;
  return m;
}
function installSnippet(){
  return '<link rel="manifest" href="/manifest.json">\n'+
    '<meta name="theme-color" content="'+themeIn.value+'">\n'+
    '<meta name="mobile-web-app-capable" content="yes">\n'+
    '<meta name="apple-mobile-web-app-capable" content="yes">';
}
function render(){
  var m=manifestObj();
  prev.textContent=JSON.stringify(m, null, 2);
  var warns=[];
  if(!nameIn.value.trim()) warns.push('⚠️ App name is required.');
  if(shortIn.value.trim().length>12) warns.push('⚠️ Short name over 12 characters may be truncated on home screens.');
  if(!icon192) warns.push('⚠️ No icon uploaded — Chrome requires 192px and 512px icons for the install prompt.');
  var u=urlIn.value.trim();
  if(u && u.charAt(0)!=='/' && u.indexOf('http')!==0) warns.push('⚠️ Start URL should begin with / or be a full URL.');
  warn.innerHTML=warns.length?warns.join('<br>'):'✅ Manifest looks valid — ready to download.';
  go.disabled=!nameIn.value.trim();
  dlIcons.disabled=!icon192;
}
['input','change'].forEach(function(ev){
  [nameIn,shortIn,descIn,urlIn,themeIn,bgIn,dispSel,orientSel,scopeIn,maskBox].forEach(function(el){
    el.addEventListener(ev, render);
  });
});
function resizeIcon(img, px){
  var c=document.createElement('canvas'); c.width=px; c.height=px;
  c.getContext('2d').drawImage(img, 0, 0, px, px);
  return c.toDataURL('image/png');
}
ToolPro.dropzone(document.getElementById('pwDz'), {accept:'image/png',
  onFiles:function(arr){
    var f=arr[0]; if(!f) return;
    iconName=f.name.replace(/\.[^.]+$/,'')||'icon';
    var url=URL.createObjectURL(f);
    var img=new Image();
    img.onload=function(){
      icon512=resizeIcon(img,512); icon192=resizeIcon(img,192);
      URL.revokeObjectURL(url);
      document.getElementById('pwImg192').src=icon192;
      document.getElementById('pwImg512').src=icon512;
      document.getElementById('pwIconPrev').style.display='';
      render();
      ToolPro.toast('Icon resized to 192px & 512px','ok');
    };
    img.onerror=function(){ URL.revokeObjectURL(url); ToolPro.toast('Could not read that image','err'); };
    img.src=url;
  }});
function downloadBlob(text, filename, type){
  var blob=new Blob([text],{type:type});
  var url=URL.createObjectURL(blob);
  ToolPro.download(url, filename);
  setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
}
go.addEventListener('click', function(){
  if(!nameIn.value.trim()){ ToolPro.toast('Enter your app name first','err'); return; }
  var m=JSON.stringify(manifestObj(), null, 2);
  downloadBlob(m, 'manifest.json', 'application/json');
  grid.innerHTML='';
  var card=document.createElement('div'); card.className='result-card';
  var pn=document.createElement('p'); pn.className='r-name'; pn.textContent='Install snippet — paste in <head>';
  var po=document.createElement('pre'); po.className='tool-output'; po.style.maxHeight='160px'; po.style.overflow='auto'; po.textContent=installSnippet();
  var b2=document.createElement('button'); b2.type='button'; b2.className='btn-pro'; b2.textContent='📋 Copy snippet';
  b2.addEventListener('click', function(){ ToolPro.copyText(installSnippet(), 'Snippet copied'); });
  card.appendChild(pn); card.appendChild(po); card.appendChild(b2); grid.appendChild(card);
  ToolPro.toast('manifest.json downloaded','ok');
});
dlIcons.addEventListener('click', function(){
  if(!icon192){ ToolPro.toast('Upload an icon first','err'); return; }
  ToolPro.download(icon192, iconName+'-192.png');
  setTimeout(function(){ ToolPro.download(icon512, iconName+'-512.png'); }, 600);
  ToolPro.toast('Both icons downloading','ok');
});
render();
})();
</script>

## How it works

The tool reads your app details and builds a Web App Manifest object in your browser — the JSON file that tells browsers your site is installable, with its name, colors, display mode, and icon set. Your uploaded icon is resized to 192×192 and 512×512 on a canvas (the two sizes Chrome requires for the install prompt), and a live preview shows exactly what will be saved. Downloads are plain files generated locally; nothing leaves your device.

## Everyday uses

- **Site owners** — make any website installable as an app in minutes.
- **Freelancers** — deliver a complete PWA starter pack (manifest + icons + snippet) to clients.
- **Bloggers** — let readers "install" your blog for one-tap return visits.
- **Indie hackers** — ship app-like experiences without app-store fees or reviews.

## Frequently asked questions

**Where do I put these files?**

Save manifest.json and both icons in your site root, then paste the install snippet into your pages' &lt;head&gt;. Serve everything over HTTPS.

**Why do I need both 192px and 512px icons?**

Chrome's installability checklist requires at least a 192px and a 512px icon. The 512px one is also used for the splash screen.

**Is anything uploaded?**

No. Icon resizing, JSON generation, and downloads all happen locally in your browser.
