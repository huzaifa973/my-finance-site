---
title: "Free security.txt Generator — Create a Security Policy File (RFC 9116)"
description: "Generate a valid security.txt file per RFC 9116 in your browser — contact, expiry, encryption, policy fields with validation. Free forever, no sign-up, private."
category: seo
date: 2026-10-18
draft: false
---

A security.txt file tells security researchers exactly how to report vulnerabilities in your site — and RFC 9116 made it an official standard. This generator builds a correctly formatted file with all the standard fields, validates your contacts and expiry date, and previews everything live. Download it and drop it in your site's .well-known folder. Everything runs in your browser.

<div class="tool-shell" id="stShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>security.txt Generator</h2>
<p>Publish a proper vulnerability-disclosure policy — RFC 9116 fields, validation, and live preview.</p>
</div>
<button type="button" class="theme-toggle" id="stTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Contact points</p>
<div id="stContacts"></div>
<div class="tool-actions" style="margin-bottom:4px">
<button type="button" class="btn-pro-outline" id="stAdd">＋ Add contact</button>
</div>
<div class="hint">RFC 9116 requires at least one Contact. Use <b>mailto:security@yoursite.com</b> or an <b>https://</b> form URL — plain email addresses are not valid.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Policy fields</p>
<div class="settings-panel">
<div class="preset-row" id="stPresets">
<button type="button" class="preset-chip active" data-p="basic">🔰 Basic</button>
<button type="button" class="preset-chip" data-p="bounty">💰 Bug bounty</button>
<button type="button" class="preset-chip" data-p="enterprise">🏢 Enterprise</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="stExp">Expires *</label>
<input type="date" class="tool-input" id="stExp">
<div class="hint">Must be a future date. <a href="#" id="stYear" style="text-decoration:underline">Set to one year from now</a></div>
</div>
<div class="setting">
<label for="stEnc">Encryption (PGP key URL)</label>
<input type="url" class="tool-input" id="stEnc" placeholder="https://yoursite.com/pgp-key.txt" maxlength="200">
</div>
<div class="setting">
<label for="stAck">Acknowledgments URL</label>
<input type="url" class="tool-input" id="stAck" placeholder="https://yoursite.com/hall-of-fame" maxlength="200">
</div>
<div class="setting">
<label for="stLang">Preferred languages</label>
<input type="text" class="tool-input" id="stLang" value="en" maxlength="40" placeholder="en, es">
</div>
<div class="setting">
<label for="stCanon">Canonical URL</label>
<input type="url" class="tool-input" id="stCanon" placeholder="https://yoursite.com/.well-known/security.txt" maxlength="200">
</div>
<div class="setting">
<label for="stPolicy">Policy URL</label>
<input type="url" class="tool-input" id="stPolicy" placeholder="https://yoursite.com/security-policy" maxlength="200">
</div>
<div class="setting">
<label for="stHire">Hiring URL</label>
<input type="url" class="tool-input" id="stHire" placeholder="https://yoursite.com/careers" maxlength="200">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="stGo" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate security.txt
</button>
<button type="button" class="btn-pro-outline" id="stCopy">📋 Copy</button>
</div>
<div class="results show" id="stRes">
<p class="result-head">📄 Live preview</p>
<div class="result-summary" id="stWarn"></div>
<pre class="tool-output" id="stPrev" style="max-height:320px;overflow:auto"></pre>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate security.txt files for unlimited sites — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('stShell');
ToolPro.themeToggle(shell, document.getElementById('stTheme'));
var cBox=document.getElementById('stContacts');
var expIn=document.getElementById('stExp'), encIn=document.getElementById('stEnc'), ackIn=document.getElementById('stAck');
var langIn=document.getElementById('stLang'), canonIn=document.getElementById('stCanon');
var polIn=document.getElementById('stPolicy'), hireIn=document.getElementById('stHire');
var go=document.getElementById('stGo'), copyBtn=document.getElementById('stCopy');
var prev=document.getElementById('stPrev'), warn=document.getElementById('stWarn');
function setYear(){ var d=new Date(); d.setFullYear(d.getFullYear()+1); expIn.value=d.toISOString().slice(0,10); render(); }
document.getElementById('stYear').addEventListener('click', function(e){ e.preventDefault(); setYear(); });
function addContact(val){
  var wrap=document.createElement('div');
  wrap.className='setting'; wrap.style.marginBottom='8px';
  var inp=document.createElement('input');
  inp.type='text'; inp.className='tool-input st-c'; inp.maxLength=200;
  inp.placeholder='mailto:security@yoursite.com or https://yoursite.com/report';
  if(val) inp.value=val;
  var rm=document.createElement('button');
  rm.type='button'; rm.className='btn-pro-outline'; rm.textContent='✕ Remove'; rm.style.marginTop='6px';
  rm.addEventListener('click', function(){ cBox.removeChild(wrap); render(); });
  wrap.appendChild(inp); wrap.appendChild(rm);
  cBox.appendChild(wrap);
  render();
}
document.getElementById('stAdd').addEventListener('click', function(){ addContact(); });
function contacts(){
  var out=[], els=cBox.querySelectorAll('.st-c');
  for(var i=0;i<els.length;i++){ var v=els[i].value.trim(); if(v) out.push(v); }
  return out;
}
function validContact(c){ return /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c) || /^https:\/\/\S+$/.test(c); }
function build(){
  var L=['# Security policy — generated with DollarWise (dollarwise.xyz)'];
  contacts().forEach(function(c){ L.push('Contact: '+c); });
  if(expIn.value){
    var d=expIn.value.split('-');
    L.push('Expires: '+d[0]+'-'+d[1]+'-'+d[2]+'T00:00:00.000Z');
  }
  if(encIn.value.trim()) L.push('Encryption: '+encIn.value.trim());
  if(ackIn.value.trim()) L.push('Acknowledgments: '+ackIn.value.trim());
  if(langIn.value.trim()) L.push('Preferred-Languages: '+langIn.value.trim());
  if(canonIn.value.trim()) L.push('Canonical: '+canonIn.value.trim());
  if(polIn.value.trim()) L.push('Policy: '+polIn.value.trim());
  if(hireIn.value.trim()) L.push('Hiring: '+hireIn.value.trim());
  L.push('');
  return L.join('\n');
}
function render(){
  var cs=contacts();
  var good=cs.filter(validContact);
  var warns=[];
  if(!cs.length) warns.push('⚠️ At least one Contact is required by RFC 9116.');
  else if(good.length<cs.length) warns.push('⚠️ A contact looks invalid — use mailto:email or an https:// URL.');
  if(!expIn.value) warns.push('⚠️ Expires is required and must be a future date.');
  else {
    var exp=new Date(expIn.value+'T00:00:00');
    if(exp<=new Date()) warns.push('⚠️ Expires must be in the future.');
  }
  var ok=good.length>0 && expIn.value && (new Date(expIn.value+'T00:00:00')>new Date());
  prev.textContent=build();
  warn.innerHTML=warns.length?warns.join('<br>'):'✅ Valid security.txt — ready to download.';
  go.disabled=!ok;
}
cBox.addEventListener('input', render);
[expIn,encIn,ackIn,langIn,canonIn,polIn,hireIn].forEach(function(el){ el.addEventListener('input', render); });
var PRESETS={
  basic:{enc:'',ack:'',lang:'en',canon:'',pol:'',hire:''},
  bounty:{enc:'',ack:'https://yoursite.com/hall-of-fame',lang:'en',canon:'',pol:'https://yoursite.com/bug-bounty',hire:''},
  enterprise:{enc:'https://yoursite.com/pgp-key.txt',ack:'https://yoursite.com/hall-of-fame',lang:'en',canon:'https://yoursite.com/.well-known/security.txt',pol:'https://yoursite.com/security-policy',hire:'https://yoursite.com/careers'}
};
document.getElementById('stPresets').addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  var chips=document.querySelectorAll('#stPresets .preset-chip');
  for(var i=0;i<chips.length;i++) chips[i].classList.remove('active');
  chip.classList.add('active');
  var p=PRESETS[chip.dataset.p];
  encIn.value=p.enc; ackIn.value=p.ack; langIn.value=p.lang;
  canonIn.value=p.canon; polIn.value=p.pol; hireIn.value=p.hire;
  render();
  ToolPro.toast('Preset applied: '+chip.textContent.trim());
});
copyBtn.addEventListener('click', function(){ ToolPro.copyText(build(), 'security.txt copied'); });
go.addEventListener('click', function(){
  var blob=new Blob([build()],{type:'text/plain'});
  var url=URL.createObjectURL(blob);
  ToolPro.download(url, 'security.txt');
  setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
  ToolPro.toast('security.txt downloaded — place it in /.well-known/','ok');
});
addContact('mailto:security@yoursite.com');
setYear();
render();
})();
</script>

## How it works

The generator assembles your security.txt from the RFC 9116 field set — Contact, Expires, Encryption, Acknowledgments, Preferred-Languages, Canonical, Policy, and Hiring — in your browser. It validates as you type: contacts must use a mailto: or https:// scheme, and the expiry date must be in the future (security tools ignore expired files). The preview updates live, and the download is a plain text file generated locally.

## Everyday uses

- **Site owners** — publish a vulnerability-disclosure policy in minutes.
- **Freelancers** — add security.txt to every client site as a professionalism signal.
- **Startups** — look serious to enterprise buyers who check for disclosure policies.
- **Bug-bounty hosts** — point researchers at your policy, scope, and PGP key.

## Frequently asked questions

**Where do I put the security.txt file?**

In your site's /.well-known/ folder (https://yoursite.com/.well-known/security.txt). The legacy root location also works but .well-known is the standard.

**Why does the expiry date matter?**

RFC 9116 says readers should treat an expired file as stale. Set a reminder to refresh it yearly — the "+1 year" button makes that easy.

**Is anything uploaded?**

No. Validation, preview, and the download all happen locally in your browser.
