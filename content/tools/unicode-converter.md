---
title: "Free Unicode Converter — Text to \u Escapes, HTML Entities & URL Encoding"
description: "Convert text to unicode escapes, HTML entities, URL encoding and code-point lists — and back. Free forever, no sign-up, runs in your browser."
category: text
date: 2026-10-16
draft: false
---

Working with emoji, special characters, or international text in code? This free Unicode converter translates text into \uXXXX escapes, HTML entities, URL percent-encoding, and code-point lists — and decodes them back just as easily. A must-have for developers and localization teams.

<div class="tool-shell" id="uniShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Unicode Converter</h2>
<p>Text ⇔ \uXXXX escapes, HTML entities, URL encoding — both directions, free.</p>
</div>
<button type="button" class="theme-toggle" id="uniTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter text or code</p>
<div class="setting"><label for="uniIn">Input</label><textarea class="tool-input" id="uniIn" rows="6" placeholder="Type text or encoded code here…"></textarea><div class="hint">Direction depends on the conversion you pick below.</div></div><div class="setting"><label for="uniOut">Live output</label><textarea class="tool-output" id="uniOut" rows="6" readonly placeholder="Converted output appears here…"></textarea></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="uniPresets">
<button type="button" class="preset-chip active" data-preset="💻 Text → \uXXXX">💻 Text → \uXXXX</button>
<button type="button" class="preset-chip" data-preset="🌐 Text → URL encoding">🌐 Text → URL encoding</button>
<button type="button" class="preset-chip" data-preset="🔤 Text → HTML entities">🔤 Text → HTML entities</button>
<button type="button" class="preset-chip" data-preset="🔢 Text → code points">🔢 Text → code points</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="uniMode">Conversion</label><select id="uniMode"><option value="t2u" selected>Text → \uXXXX escapes</option><option value="u2t">\uXXXX escapes → Text</option><option value="t2h">Text → HTML entities</option><option value="h2t">HTML entities → Text</option><option value="t2url">Text → URL encoding</option><option value="url2t">URL encoding → Text</option><option value="t2cp">Text → Code-point list</option></select><div class="hint">Pick what to convert and in which direction.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="uniBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert
</button>
<button type="button" class="btn-pro-outline" id="uniClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="uniProgWrap">
<div class="progress-bar"><i id="uniProgBar"></i></div>
<div class="progress-text" id="uniProgText">Working…</div>
</div>
<div class="results" id="uniResults">
<p class="result-head">✅ Done — your converted output</p>
<div class="result-summary" id="uniSummary"></div>
<div class="result-grid" id="uniGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited text — every encoding, both directions, forever free.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('uniShell');
ToolPro.themeToggle(shell,document.getElementById('uniTheme'));
var input=document.getElementById('uniIn'),mode=document.getElementById('uniMode'),
out=document.getElementById('uniOut'),btn=document.getElementById('uniBtn'),
clearBtn=document.getElementById('uniClear'),presets=document.getElementById('uniPresets');
function t2u(s){var r='';for(var i=0;i<s.length;i++){var c=s.charCodeAt(i);r+='\\u'+('0000'+c.toString(16)).slice(-4);}return r;}
function u2t(s){return s.replace(/\\u([0-9a-fA-F]{4})/g,function(m,h){return String.fromCharCode(parseInt(h,16));});}
function t2h(s){var r='';for(var i=0;i<s.length;i++){var c=s.codePointAt(i);if(c>0xFFFF)i++;r+='&#'+c+';';}return r;}
function h2t(s){var d=document.createElement('div');d.innerHTML=s;return d.textContent;}
function t2url(s){return encodeURIComponent(s);}
function url2t(s){try{return decodeURIComponent(s.replace(/\+/g,' '));}catch(e){return s;}}
function t2cp(s){var r=[];for(var i=0;i<s.length;){var c=s.codePointAt(i);r.push('U+'+c.toString(16).toUpperCase());i+=c>0xFFFF?2:1;}return r.join(' ');}
function process(){
var v=input.value,m=mode.value,r='';
try{
if(m==='t2u')r=t2u(v);else if(m==='u2t')r=u2t(v);
else if(m==='t2h')r=t2h(v);else if(m==='h2t')r=h2t(v);
else if(m==='t2url')r=t2url(v);else if(m==='url2t')r=url2t(v);
else r=t2cp(v);
}catch(e){r='';}
out.value=r;
var ok=v.length>0;btn.disabled=!ok;clearBtn.disabled=!ok&&!v;
btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert';
}
[input,mode].forEach(function(el){el.addEventListener('input',process);el.addEventListener('change',process);});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('URL')>-1)mode.value='t2url';
else if(t.indexOf('HTML')>-1)mode.value='t2h';
else if(t.indexOf('code points')>-1)mode.value='t2cp';
else mode.value='t2u';
process();ToolPro.toast('Conversion: '+mode.options[mode.selectedIndex].text);
});
clearBtn.addEventListener('click',function(){input.value='';out.value='';
document.getElementById('uniResults').classList.remove('show');process();});
btn.addEventListener('click',function(){
process();
var grid=document.getElementById('uniGrid'),resBox=document.getElementById('uniResults'),
wrap=document.getElementById('uniProgWrap'),bar=document.getElementById('uniProgBar'),
txt=document.getElementById('uniProgText');
wrap.classList.add('show');bar.style.width='60%';txt.textContent='Converting…';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');grid.innerHTML='';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name">Converted output</div><div class="r-stats"></div>'+
'<div style="display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center">'+
'<button type="button" class="btn-pro" id="uniCopy">📋 Copy</button>'+
'<button type="button" class="btn-pro-outline" id="uniDl">⬇ Download .txt</button></div>';
card.querySelector('.r-stats').textContent=out.value.length+' characters of output.';
card.querySelector('#uniCopy').addEventListener('click',function(){ToolPro.copyText(out.value,'Converted output copied');});
card.querySelector('#uniDl').addEventListener('click',function(){
ToolPro.download(URL.createObjectURL(new Blob([out.value],{type:'text/plain'})),'unicode-output.txt');});
grid.appendChild(card);
document.getElementById('uniSummary').textContent='🎉 Converted via '+mode.options[mode.selectedIndex].text+'.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('Converted','ok');
},250);
});
process();
})();

</script>

## How it works

- **Step 1** — Paste text or encoded code into the input box. Output updates live.
- **Step 2** — Choose the conversion (escapes, entities, URL encoding, code points) and direction.
- **Step 3** — Copy the result or download it.

Emoji and astral characters are handled as surrogate pairs (\ud83d\ude00 style) in escape mode.

## Everyday uses

- **Developers** — safely embed unicode in JSON, JavaScript, and Java strings.
- **Web teams** — encode special characters as HTML entities for email templates.
- **Localization** — inspect exact code points of tricky characters.
- **API work** — URL-encode parameters without guessing.

**Example:** "café" → "\u0063\u0061\u0066\u00e9" → "caf&#233;" → "caf%C3%A9".