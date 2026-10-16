---
title: "Free Shuffle Lines Tool — Randomize List Order Online (Fisher-Yates)"
description: "Shuffle lines online with true Fisher-Yates randomization: randomize lists, remove duplicates, or sort A–Z. Free forever, no sign-up."
category: text
date: 2026-10-16
draft: false
---

Need a list in random order — for a raffle, a quiz, or a workout? This free tool shuffles your lines with the Fisher-Yates algorithm (the gold standard for unbiased shuffling), and can also remove duplicates or sort alphabetically instead.

<div class="tool-shell" id="shufShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 6h4l10 12h4v-2h-2.5L8.5 4H6v2H3v2zm0 12v-2h4l2-2.4 2 2.4H3zm18 0h-4l-6-7.2 1.5-1.8L21 16v2zM21 4h-4l-1.5 1.8L17 7.6 21 4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Shuffle Lines Tool</h2>
<p>Randomize any list in one click — true Fisher-Yates shuffle, free.</p>
</div>
<button type="button" class="theme-toggle" id="shufTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your list (one item per line)</p>
<div class="setting"><label for="shufIn">Input list</label><textarea class="tool-input" id="shufIn" rows="7" placeholder="Alice&#10;Bob&#10;Carol&#10;Dave"></textarea><div class="hint" id="shufStats">0 lines</div></div><div class="setting"><label for="shufOut">Live output</label><textarea class="tool-output" id="shufOut" rows="7" readonly placeholder="Shuffled list appears here…"></textarea></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings</p>
<div class="settings-panel">
<div class="preset-row" id="shufPresets">
<button type="button" class="preset-chip active" data-preset="🎲 Random shuffle">🎲 Random shuffle</button>
<button type="button" class="preset-chip" data-preset="🧹 Shuffle, no duplicates">🧹 Shuffle, no duplicates</button>
<button type="button" class="preset-chip" data-preset="🔤 Sort A–Z">🔤 Sort A–Z</button>
</div>
<div class="settings-grid">
<div class="setting"><label for="shufMode">Mode</label><select id="shufMode"><option value="shuffle" selected>Shuffle randomly (Fisher-Yates)</option><option value="sortaz">Sort A–Z</option><option value="sortza">Sort Z–A</option><option value="reverse">Reverse order</option></select><div class="hint">Shuffle is random every time; the others are deterministic.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Remove duplicate lines</span><label class="toggle"><input type="checkbox" id="shufDedupe"><span class="slider"></span></label></div><div class="hint">Keeps only the first occurrence before shuffling.</div></div><div class="setting"><div class="toggle-row"><span class="t-label">Drop empty lines</span><label class="toggle"><input type="checkbox" id="shufEmpty" checked><span class="slider"></span></label></div><div class="hint">Blank lines never make it into the output.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Shuffle the list</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="shufBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Shuffle Lines
</button>
<button type="button" class="btn-pro-outline" id="shufClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="shufProgWrap">
<div class="progress-bar"><i id="shufProgBar"></i></div>
<div class="progress-text" id="shufProgText">Working…</div>
</div>
<div class="results" id="shufResults">
<p class="result-head">✅ Done — your shuffled list</p>
<div class="result-summary" id="shufSummary"></div>
<div class="result-grid" id="shufGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Shuffle unlimited lists — raffles, quizzes, and workouts, forever free.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('shufShell');
ToolPro.themeToggle(shell,document.getElementById('shufTheme'));
var input=document.getElementById('shufIn'),mode=document.getElementById('shufMode'),
dedupeT=document.getElementById('shufDedupe'),emptyT=document.getElementById('shufEmpty'),
stats=document.getElementById('shufStats'),out=document.getElementById('shufOut'),
btn=document.getElementById('shufBtn'),clearBtn=document.getElementById('shufClear'),
presets=document.getElementById('shufPresets');
function cleanLines(){
var lines=input.value.split('\n').map(function(l){return l.trim();});
if(emptyT.checked)lines=lines.filter(function(l){return l.length>0;});
if(dedupeT.checked){var seen={},u=[];lines.forEach(function(l){if(!seen[l]){seen[l]=1;u.push(l);}});lines=u;}
return lines;
}
function shuffle(a){for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}
function process(reshuffle){
var lines=cleanLines();
stats.textContent=lines.length+' lines';
if(!lines.length){out.value='';return;}
var m=mode.value;
if(m==='shuffle'){if(reshuffle||!out.value)out.value=shuffle(lines.slice()).join('\n');}
else if(m==='sortaz')out.value=lines.slice().sort(function(a,b){return a.localeCompare(b);}).join('\n');
else if(m==='sortza')out.value=lines.slice().sort(function(a,b){return b.localeCompare(a);}).join('\n');
else out.value=lines.slice().reverse().join('\n');
var ok=input.value.trim().length>0;btn.disabled=!ok;clearBtn.disabled=!ok&&!input.value;
}
[input,mode,dedupeT,emptyT].forEach(function(el){el.addEventListener('input',function(){process(false);});el.addEventListener('change',function(){process(false);});});
presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');var t=chip.textContent;
if(t.indexOf('no duplicates')>-1){mode.value='shuffle';dedupeT.checked=true;}
else if(t.indexOf('Sort')>-1){mode.value='sortaz';}
else{mode.value='shuffle';dedupeT.checked=false;}
process(true);ToolPro.toast('Preset applied: '+t.trim());
});
clearBtn.addEventListener('click',function(){input.value='';out.value='';
document.getElementById('shufResults').classList.remove('show');process(false);});
btn.addEventListener('click',function(){
process(true);
var grid=document.getElementById('shufGrid'),resBox=document.getElementById('shufResults'),
wrap=document.getElementById('shufProgWrap'),bar=document.getElementById('shufProgBar'),
txt=document.getElementById('shufProgText');
wrap.classList.add('show');bar.style.width='60%';txt.textContent='Shuffling…';
setTimeout(function(){
bar.style.width='100%';wrap.classList.remove('show');grid.innerHTML='';
var card=document.createElement('div');card.className='result-card';
card.innerHTML='<div class="r-name">Shuffled list</div><div class="r-stats"></div>'+
'<div style="display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center">'+
'<button type="button" class="btn-pro" id="shufCopy">📋 Copy</button>'+
'<button type="button" class="btn-pro-outline" id="shufAgain">🎲 Shuffle Again</button>'+
'<button type="button" class="btn-pro-outline" id="shufDl">⬇ Download .txt</button></div>';
card.querySelector('.r-stats').textContent=out.value.split('\n').filter(Boolean).length+' items in random order.';
card.querySelector('#shufCopy').addEventListener('click',function(){ToolPro.copyText(out.value,'Shuffled list copied');});
card.querySelector('#shufAgain').addEventListener('click',function(){process(true);ToolPro.toast('Re-shuffled','ok');});
card.querySelector('#shufDl').addEventListener('click',function(){
ToolPro.download(URL.createObjectURL(new Blob([out.value],{type:'text/plain'})),'shuffled-list.txt');});
grid.appendChild(card);
document.getElementById('shufSummary').textContent='🎉 List shuffled with Fisher-Yates — every order equally likely.';
resBox.classList.add('show');resBox.scrollIntoView({behavior:'smooth',block:'nearest'});
ToolPro.toast('List shuffled','ok');
},250);
});
process(false);
})();

</script>

## How it works

- **Step 1** — Paste your list, one item per line. Output updates live.
- **Step 2** — Pick shuffle, sort, or reverse — plus duplicate and blank-line cleanup.
- **Step 3** — Hit Shuffle again for a fresh random order, then copy or download.

## Everyday uses

- **Teachers** — randomize quiz question or student presentation order.
- **Giveaways** — shuffle entrants for a fair, unbiased draw.
- **Fitness** — randomize your exercise list for varied workouts.
- **Writers** — shuffle prompts or ideas to beat creative blocks.

**Fairness note:** Fisher-Yates gives every ordering an equal chance — no hidden bias.