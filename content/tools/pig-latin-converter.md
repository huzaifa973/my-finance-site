---
title: "Free Pig Latin Converter — Translate English to Pig Latin Online"
description: "Convert English text to Pig Latin instantly in your browser — with classic rules, qu handling, and capitalization kept. Free forever, no sign-up."
category: text
date: 2026-10-29
draft: false
---

Pig Latin turns "hello world" into "ellohay orldway" — move the starting consonants to the end and add "ay", or add "way" after vowel-starting words. Paste any text and translate it instantly, with punctuation and capitalization preserved.

<div class="tool-shell" id="pglShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pig Latin Converter</h2>
<p>Turn English into Pig Latin instantly — punctuation &amp; capitals preserved.</p>
</div>
<button type="button" class="theme-toggle" id="pglTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your text</p>
<div class="settings-panel">
<div class="setting">
<label for="pglInput">English text</label>
<textarea class="tool-input" id="pglInput" rows="6" placeholder="Hello world, this is fun!"></textarea>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Translation settings</p>
<div class="settings-panel">
<div class="preset-row" id="pglPresets">
<button type="button" class="preset-chip active" data-ex="Hello world, this is fun!">👋 Classic example</button>
<button type="button" class="preset-chip" data-ex="The quick brown fox jumps over the lazy dog.">🦊 Quick fox example</button>
</div>
<div class="settings-grid">
<div class="setting"><div class="toggle-row"><span class="t-label">Vowel words get "way" (apple → appleway)</span><label class="toggle"><input type="checkbox" id="pglWay" checked><span class="slider"></span></label></div><div class="hint">Off: vowel words get "yay" instead (apple → appleyay).</div></div>
<div class="setting"><div class="toggle-row"><span class="t-label">Keep capitalization (Hello → Ellohay)</span><label class="toggle"><input type="checkbox" id="pglCaps" checked><span class="slider"></span></label></div><div class="hint">Sentence-initial capitals move with the word.</div></div>
<div class="setting"><div class="toggle-row"><span class="t-label">Treat "qu" as one sound (queen → eenquay)</span><label class="toggle"><input type="checkbox" id="pglQu" checked><span class="slider"></span></label></div><div class="hint">Classic rule: the "qu" cluster moves together.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pglBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to Pig Latin
</button>
<button type="button" class="btn-pro-outline" id="pglClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pglProgWrap">
<div class="progress-bar"><i id="pglProgBar"></i></div>
<div class="progress-text" id="pglProgText">Working…</div>
</div>
<div class="results" id="pglResults">
<p class="result-head">✅ Done — your Pig Latin text</p>
<div class="result-summary" id="pglSummary"></div>
<div class="result-grid" id="pglGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Translate as much text as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('pglShell');
ToolPro.themeToggle(shell,document.getElementById('pglTheme'));
var input=document.getElementById('pglInput'),btn=document.getElementById('pglBtn'),clearBtn=document.getElementById('pglClear'),grid=document.getElementById('pglGrid'),resBox=document.getElementById('pglResults'),sumEl=document.getElementById('pglSummary'),presets=document.getElementById('pglPresets');
function refresh(){var has=input.value.trim().length>0;btn.disabled=!has;clearBtn.disabled=!has;}
input.addEventListener('input',refresh);
presets.addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;presets.querySelectorAll('.preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');input.value=c.dataset.ex;refresh();ToolPro.toast('Example loaded');});
clearBtn.addEventListener('click',function(){input.value='';grid.innerHTML='';resBox.classList.remove('show');refresh();});
function isVowel(ch){return 'aeiou'.indexOf(ch)>-1;}
function pigWord(word,opts){
var cap=opts.caps&&word[0]===word[0].toUpperCase()&&word[0]!==word[0].toLowerCase();
var low=word.toLowerCase();
if(!/[a-z]/.test(low))return word;
if(isVowel(low[0])){var out=low+(opts.way?'way':'yay');return cap?out[0].toUpperCase()+out.slice(1):out;}
var i=0;
while(i<low.length&&!isVowel(low[i])){if(opts.qu&&low[i]==='q'&&low[i+1]==='u'){i+=2;break;}i++;}
if(i===0||i>=low.length)return low+'ay';
var moved=low.slice(0,i),rest=low.slice(i);
var res=rest+moved+'ay';
return cap?res[0].toUpperCase()+res.slice(1):res;
}
btn.addEventListener('click',function(){
var opts={way:document.getElementById('pglWay').checked,caps:document.getElementById('pglCaps').checked,qu:document.getElementById('pglQu').checked};
var out=input.value.replace(/[A-Za-z]+/g,function(w){return pigWord(w,opts);});
var words=input.value.match(/[A-Za-z]+/g)||[];
sumEl.textContent='Translated '+words.length+' word(s) — classic Pig Latin rules applied.';
var card=document.createElement('div');card.className='result-card';var ta=document.createElement('textarea');ta.className='tool-input';ta.rows=6;ta.value=out;ta.readOnly=true;var b=document.createElement('button');b.type='button';b.className='btn-pro';b.textContent='📋 Copy Pig Latin';b.addEventListener('click',function(){ToolPro.copyText(out,'Pig Latin copied');});card.appendChild(ta);card.appendChild(b);grid.innerHTML='';grid.appendChild(card);resBox.classList.add('show');ToolPro.toast('Converted to Pig Latin','ok');
});
refresh();
})();
</script>

## How it works

- **Step 1** — Paste or type English text.
- **Step 2** — Pick your rule variant: "way" vs "yay" for vowel words, capitalization, and "qu" handling.
- **Step 3** — Convert. Consonant-starting words move their opening cluster to the end plus "ay" (hello → ellohay); vowel-starting words add "way" (apple → appleway). Punctuation and spacing stay exactly where they were.

## Everyday uses

- **Kids &amp; classrooms** — a fun wordplay game for language lessons.
- **Party games** — write secret messages friends can decode.
- **Writers** — add playful dialogue to stories and scripts.
- **Puzzle makers** — create Pig Latin clues for scavenger hunts.
