---
title: "Free humans.txt Generator — Create a humans.txt File Online"
description: "Generate a proper humans.txt credits file in your browser — team members, thanks, site stack. Live preview, copy & download. Free forever, no sign-up, private."
category: seo
date: 2026-10-18
draft: false
---

A humans.txt file is the web's lovely little tradition: a plain-text credit roll for the people behind a website, sitting right next to robots.txt. Add your team, thank your tools and inspirations, list your stack — this generator builds a correctly formatted file with a live preview, then lets you copy or download it. Everything runs in your browser.

<div class="tool-shell" id="htShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>humans.txt Generator</h2>
<p>Credit the humans behind your website — team, thanks, and stack in one clean file, previewed live.</p>
</div>
<button type="button" class="theme-toggle" id="htTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Team &amp; site info</p>
<div id="htTeam"></div>
<div class="tool-actions" style="margin-bottom:12px">
<button type="button" class="btn-pro-outline" id="htAdd">＋ Add team member</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="htThanks">Thanks / credits</label>
<textarea class="tool-input" id="htThanks" rows="2" placeholder="Who or what helped? e.g. Cloudflare, my readers…" maxlength="500"></textarea>
</div>
<div class="setting">
<label for="htUpdate">Last update</label>
<input type="date" class="tool-input" id="htUpdate">
</div>
<div class="setting">
<label for="htLang">Language</label>
<input type="text" class="tool-input" id="htLang" value="English" maxlength="40">
</div>
<div class="setting">
<label for="htStandards">Standards</label>
<input type="text" class="tool-input" id="htStandards" value="HTML5, CSS3" maxlength="120">
</div>
<div class="setting">
<label for="htSoftware">Software / stack</label>
<input type="text" class="tool-input" id="htSoftware" placeholder="e.g. Hugo, Cloudflare Pages" maxlength="160">
</div>
</div>
<div class="hint">The preview updates live as you type. Nothing is sent anywhere.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quick-fill presets</p>
<div class="settings-panel">
<div class="preset-row" id="htPresets">
<button type="button" class="preset-chip" data-p="solo">🧑 Solo developer</button>
<button type="button" class="preset-chip" data-p="team">👥 Small team</button>
<button type="button" class="preset-chip" data-p="agency">🏢 Agency</button>
</div>
<div class="hint">Presets fill example data — replace with your real team before downloading.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="htGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate humans.txt
</button>
<button type="button" class="btn-pro-outline" id="htCopy">📋 Copy</button>
</div>
<div class="results show" id="htRes">
<p class="result-head">📄 Live preview</p>
<div class="result-summary" id="htWarn"></div>
<pre class="tool-output" id="htPrev" style="max-height:320px;overflow:auto"></pre>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate humans.txt files for unlimited sites — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('htShell');
ToolPro.themeToggle(shell, document.getElementById('htTheme'));
var teamBox=document.getElementById('htTeam');
var thanksIn=document.getElementById('htThanks'), updateIn=document.getElementById('htUpdate');
var langIn=document.getElementById('htLang'), stdIn=document.getElementById('htStandards'), softIn=document.getElementById('htSoftware');
var go=document.getElementById('htGo'), copyBtn=document.getElementById('htCopy');
var prev=document.getElementById('htPrev'), warn=document.getElementById('htWarn');
updateIn.value=new Date().toISOString().slice(0,10);
function addMember(name, role, contact, location){
  var row=document.createElement('div');
  row.className='settings-grid';
  row.style.marginBottom='8px';
  row.innerHTML=
    '<div class="setting"><label>Name *</label><input type="text" class="tool-input ht-n" maxlength="60" placeholder="Jane Doe"></div>'+
    '<div class="setting"><label>Role</label><input type="text" class="tool-input ht-r" maxlength="60" placeholder="Founder"></div>'+
    '<div class="setting"><label>Contact</label><input type="text" class="tool-input ht-c" maxlength="80" placeholder="jane@example.com"></div>'+
    '<div class="setting"><label>Location</label><input type="text" class="tool-input ht-l" maxlength="60" placeholder="City, Country"></div>';
  var rm=document.createElement('button');
  rm.type='button'; rm.className='btn-pro-outline'; rm.textContent='✕ Remove'; rm.style.marginTop='6px';
  rm.addEventListener('click', function(){ teamBox.removeChild(row); teamBox.removeChild(rm); render(); });
  if(name) row.querySelector('.ht-n').value=name;
  if(role) row.querySelector('.ht-r').value=role;
  if(contact) row.querySelector('.ht-c').value=contact;
  if(location) row.querySelector('.ht-l').value=location;
  teamBox.appendChild(row); teamBox.appendChild(rm);
  render();
}
document.getElementById('htAdd').addEventListener('click', function(){ addMember(); });
function members(){
  var out=[];
  var rows=teamBox.querySelectorAll('.settings-grid');
  for(var i=0;i<rows.length;i++){
    out.push({
      n:rows[i].querySelector('.ht-n').value.trim(),
      r:rows[i].querySelector('.ht-r').value.trim(),
      c:rows[i].querySelector('.ht-c').value.trim(),
      l:rows[i].querySelector('.ht-l').value.trim()
    });
  }
  return out;
}
function build(){
  var ms=members().filter(function(m){ return m.n; });
  var L=[];
  L.push('/* TEAM */');
  ms.forEach(function(m){
    L.push('  Name: '+m.n);
    if(m.r) L.push('  Role: '+m.r);
    if(m.c) L.push('  Contact: '+m.c);
    if(m.l) L.push('  Location: '+m.l);
    L.push('');
  });
  if(thanksIn.value.trim()){ L.push('/* THANKS */'); L.push('  '+thanksIn.value.trim().split('\n').join('\n  ')); L.push(''); }
  L.push('/* SITE */');
  if(updateIn.value){
    var d=updateIn.value.split('-');
    L.push('  Last update: '+d[0]+'/'+d[1]+'/'+d[2]);
  }
  if(langIn.value.trim()) L.push('  Language: '+langIn.value.trim());
  if(stdIn.value.trim()) L.push('  Standards: '+stdIn.value.trim());
  if(softIn.value.trim()) L.push('  Software: '+softIn.value.trim());
  L.push('');
  return L.join('\n');
}
function render(){
  var ms=members().filter(function(m){ return m.n; });
  prev.textContent=build();
  go.disabled=!ms.length;
  warn.textContent=ms.length?('✅ '+ms.length+(ms.length===1?' team member':' team members')+' — ready to download.'):'⚠️ Add at least one team member with a name.';
}
teamBox.addEventListener('input', render);
[thanksIn,updateIn,langIn,stdIn,softIn].forEach(function(el){ el.addEventListener('input', render); });
var PRESETS={
  solo:[['Alex Carter','Founder & Developer','alex@example.com','Austin, USA']],
  team:[['Alex Carter','Founder','alex@example.com','Austin, USA'],['Priya Nair','Designer','priya@example.com','Mumbai, India'],['Sam Lee','Writer','sam@example.com','London, UK']],
  agency:[['Alex Carter','Creative Director','alex@example.com','Austin, USA'],['Priya Nair','Lead Designer','priya@example.com','Mumbai, India'],['Sam Lee','Content Lead','sam@example.com','London, UK'],['Mia Chen','Developer','mia@example.com','Toronto, Canada']]
};
document.getElementById('htPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#htPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  teamBox.innerHTML='';
  PRESETS[chip.dataset.p].forEach(function(m){ addMember(m[0],m[1],m[2],m[3]); });
  if(chip.dataset.p==='agency'){ thanksIn.value='Our clients, the open-source community, and everyone who reports bugs.'; }
  render();
  ToolPro.toast('Example team loaded — replace with your real details');
});
copyBtn.addEventListener('click', function(){ ToolPro.copyText(build(), 'humans.txt copied'); });
go.addEventListener('click', function(){
  var ms=members().filter(function(m){ return m.n; });
  if(!ms.length){ ToolPro.toast('Add at least one team member first','err'); return; }
  var blob=new Blob([build()],{type:'text/plain'});
  var url=URL.createObjectURL(blob);
  ToolPro.download(url, 'humans.txt');
  setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
  ToolPro.toast('humans.txt downloaded — place it in your site root','ok');
});
addMember();
render();
})();
</script>

## How it works

The generator reads your team entries and site details and assembles a correctly formatted humans.txt in your browser — the classic `/* TEAM */`, `/* THANKS */`, and `/* SITE */` blocks with two-space indentation, per the humans.txt convention. The preview updates live as you type, and the download is a plain UTF-8 text file generated locally. Nothing is sent anywhere.

## Everyday uses

- **Site owners** — give credit to the people behind your website in seconds.
- **Freelancers** — list yourself and collaborators on every client project.
- **Agencies** — standardize credits across all client sites.
- **Open-source fans** — thank the tools and communities you build on.

## Frequently asked questions

**Where do I put the humans.txt file?**

Place it in your website's root folder (next to robots.txt), so it is reachable at yoursite.com/humans.txt.

**Do search engines care about humans.txt?**

No — it is purely a human courtesy and a nice trust signal for visitors who look under the hood.

**Is anything uploaded?**

No. Everything — including the file download — happens locally in your browser.
