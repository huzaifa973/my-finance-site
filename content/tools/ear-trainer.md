---
title: "Free Ear Trainer — Learn to Recognize Music Intervals Online"
description: "Train your ear to recognize music intervals: hear two notes, pick the interval, build a streak. WebAudio piano tones, 3 difficulty levels. Free, no sign-up."
category: audio
date: 2026-10-24
draft: false
---

Can you tell a perfect fifth from a major third by ear? This free ear trainer plays two piano-like notes and asks you to name the interval — the foundation of relative pitch. Three difficulty levels, streak tracking, replay-on-demand, and instant feedback. Everything runs in your browser with synthesized WebAudio tones — no audio files, no downloads.

<div class="tool-shell" id="etShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Ear Trainer — Interval Recognition</h2>
<p>Hear two notes, name the interval, build your streak — train relative pitch free.</p>
</div>
<button type="button" class="theme-toggle" id="etTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose your difficulty</p>
<div class="settings-panel">
<div class="preset-row" id="etPresets">
<button type="button" class="preset-chip active" data-level="easy">🌱 Easy — 7 intervals</button>
<button type="button" class="preset-chip" data-level="medium">🎵 Medium — 11 intervals</button>
<button type="button" class="preset-chip" data-level="hard">🎻 Hard — all 13</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Descending intervals too</span><label class="toggle"><input type="checkbox" id="etDesc"><span class="track"></span></label></div>
<div class="hint">Off: pairs always rise (easier). On: half the pairs fall — much trickier.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Show note names</span><label class="toggle"><input type="checkbox" id="etNames" checked><span class="track"></span></label></div>
<div class="hint">See "C → G" after each answer. Turn off to rely on pure listening.</div>
</div>
<div class="setting"><label for="etWave">Tone type</label><select id="etWave" class="tool-input"><option value="triangle">🎹 Soft piano-ish (triangle)</option><option value="sine">🎺 Pure tone (sine)</option><option value="sawtooth">🎸 Bright (sawtooth)</option></select><div class="hint">Different timbres train your ear more thoroughly.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Listen &amp; answer</p>
<div class="tool-actions" style="justify-content:center;">
<button type="button" class="btn-pro" id="etPlay">
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
Play interval
</button>
<button type="button" class="btn-pro-outline" id="etReplay" disabled>🔁 Replay</button>
</div>
<div class="hint" style="text-align:center;">Two notes will play in sequence. Pick the interval you heard from the choices below.</div>
<div class="interval-choices" id="etChoices" style="display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-top:1rem;"></div>
<div class="results" id="etResults">
<p class="result-head">🎯 Your training session</p>
<div class="result-summary" id="etSummary">Hit "Play interval" to start your first round.</div>
<div class="result-grid" id="etGrid"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Track your progress</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="etNewRound" disabled>⏭ Next interval</button>
<button type="button" class="btn-pro-outline" id="etReset">↺ Reset score</button>
</div>
<div class="results" id="etScoreBox">
<p class="result-head">📊 Scoreboard</p>
<div class="result-summary" id="etScore">No rounds yet.</div>
<div class="result-grid" id="etHist"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Train as many rounds as you like — your scores never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('etShell');
ToolPro.themeToggle(shell,document.getElementById('etTheme'));
var presets=document.getElementById('etPresets'),playBtn=document.getElementById('etPlay'),
replayBtn=document.getElementById('etReplay'),nextBtn=document.getElementById('etNewRound'),
resetBtn=document.getElementById('etReset'),choicesEl=document.getElementById('etChoices'),
descEl=document.getElementById('etDesc'),namesEl=document.getElementById('etNames'),
waveSel=document.getElementById('etWave'),resBox=document.getElementById('etResults'),
summaryEl=document.getElementById('etSummary'),gridEl=document.getElementById('etGrid'),
scoreBox=document.getElementById('etScoreBox'),scoreEl=document.getElementById('etScore'),histEl=document.getElementById('etHist');

var INTERVALS=[
{n:'Unison',s:0,tip:'same note'},{n:'Minor 2nd',s:1,tip:'Jaws theme'},{n:'Major 2nd',s:2,tip:'Happy Birthday (first two notes)'},
{n:'Minor 3rd',s:3,tip:'Smoke on the Water riff'},{n:'Major 3rd',s:4,tip:'When the Saints…'},{n:'Perfect 4th',s:5,tip:'Here Comes the Bride'},
{n:'Tritone',s:6,tip:'The Simpsons'},{n:'Perfect 5th',s:7,tip:'Star Wars theme'},{n:'Minor 6th',s:8,tip:'The Entertainer'},
{n:'Major 6th',s:9,tip:'My Bonnie Lies Over the Ocean'},{n:'Minor 7th',s:10,tip:'Somewhere (West Side Story)'},
{n:'Major 7th',s:11,tip:'Take On Me (chorus)'},{n:'Octave',s:12,tip:'Somewhere Over the Rainbow'}
];
var LEVELS={easy:[0,1,2,3,4,7,12],medium:[0,1,2,3,4,5,6,7,8,9,12],hard:[0,1,2,3,4,5,6,7,8,9,10,11,12]};
var NOTES=['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];

var level='easy',current=null,ctx=null;
var score=0,streak=0,best=0,rounds=0,hist=[];

presets.addEventListener('click',function(e){
var chip=e.target.closest('.preset-chip');if(!chip)return;
presets.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
chip.classList.add('active');level=chip.dataset.level;
renderChoices();
ToolPro.toast('Difficulty: '+chip.textContent.trim());
});

function audio(){
if(!ctx){var AC=window.AudioContext||window.webkitAudioContext;ctx=new AC();}
if(ctx.state==='suspended')ctx.resume();
return ctx;
}

function tone(freq,t0,dur){
var ac=audio(),o=ac.createOscillator(),g=ac.createGain();
o.type=waveSel.value;o.frequency.value=freq;
g.gain.setValueAtTime(0.0001,t0);
g.gain.exponentialRampToValueAtTime(0.5,t0+0.02);
g.gain.exponentialRampToValueAtTime(0.0001,t0+dur);
o.connect(g);g.connect(ac.destination);
o.start(t0);o.stop(t0+dur+0.05);
}

function playPair(){
if(!current)return;
var ac=audio(),t0=ac.currentTime+0.03;
tone(current.f1,t0,0.6);
tone(current.f2,t0+0.75,0.8);
}

function noteName(midi){return NOTES[midi%12]+(Math.floor(midi/12)-1);}

function newRound(){
var pool=LEVELS[level];
var iv=INTERVALS[pool[Math.floor(Math.random()*pool.length)]];
var base=57+Math.floor(Math.random()*8); /* A3-ish to F4-ish */
var desc=descEl.checked&&Math.random()<0.5&&iv.s>0;
var f1,f2;
if(desc){f1=440*Math.pow(2,(base-69)/12);f2=440*Math.pow(2,(base-iv.s-69)/12);}
else{f1=440*Math.pow(2,(base-69)/12);f2=440*Math.pow(2,(base+iv.s-69)/12);}
current={interval:iv,f1:f1,f2:f2,n1:noteName(desc?base:base),n2:noteName(desc?base-iv.s:base+iv.s),desc:desc,answered:false};
playPair();
replayBtn.disabled=false;nextBtn.disabled=true;
summaryEl.textContent='🎧 Listen… what interval was that?';
resBox.classList.add('show');
}

function renderChoices(){
var pool=LEVELS[level];
choicesEl.innerHTML='';
pool.forEach(function(i){
var b=document.createElement('button');
b.type='button';b.className='preset-chip';b.style.fontSize='1rem';b.style.padding='.7rem 1.1rem';
b.textContent=INTERVALS[i].n;b.dataset.idx=i;
choicesEl.appendChild(b);
});
}

choicesEl.addEventListener('click',function(e){
var b=e.target.closest('.preset-chip');if(!b||!current||current.answered)return;
var picked=parseInt(b.dataset.idx,10);
current.answered=true;
rounds++;
var right=picked===current.interval.s;
if(right){score++;streak++;best=Math.max(best,streak);}
else{streak=0;}
hist.unshift({n:current.interval.n,ok:right});
if(hist.length>12)hist.pop();
gridEl.innerHTML='';
var card=document.createElement('div');
card.className='result-card';
var tip=right?'Nice ear! '+(streak>=3?'🔥 '+streak+'-round streak!':''):'It was a <b>'+current.interval.n+'</b> — think "'+current.interval.tip+'".';
card.innerHTML='<div class="r-name">'+(right?'✅ Correct!':'❌ Not quite')+'</div><div class="r-stats"></div>';
card.querySelector('.r-stats').innerHTML=tip+(namesEl.checked?'<br><span style="color:#8a94a6;">Notes: '+current.n1+' → '+current.n2+(current.desc?' (descending)':'')+'</span>':'');
gridEl.appendChild(card);
summaryEl.textContent=right?'✅ '+current.interval.n+' — well heard!':'❌ That was a '+current.interval.n+'. You picked '+INTERVALS[picked].n+'.';
scoreEl.textContent='Score: '+score+'/'+rounds+' correct · current streak '+streak+' · best streak '+best;
histEl.innerHTML='';
hist.forEach(function(h){
var c=document.createElement('div');
c.className='result-card';c.style.padding='.5rem .8rem';
c.innerHTML='<div class="r-stats" style="font-size:.9rem;">'+(h.ok?'✅ ':'❌ ')+h.n+'</div>';
histEl.appendChild(c);
});
scoreBox.classList.add('show');
nextBtn.disabled=false;
ToolPro.toast(right?'Correct! ✓':'That was '+current.interval.n,right?'ok':'err');
});

playBtn.addEventListener('click',newRound);
replayBtn.addEventListener('click',playPair);
nextBtn.addEventListener('click',newRound);
resetBtn.addEventListener('click',function(){
score=0;streak=0;best=0;rounds=0;hist=[];histEl.innerHTML='';
scoreEl.textContent='No rounds yet.';summaryEl.textContent='Hit "Play interval" to start your first round.';
gridEl.innerHTML='';nextBtn.disabled=true;
ToolPro.toast('Score reset');
});

renderChoices();
})();
</script>

## How it works

Hit **Play interval** — the tool synthesizes two piano-like notes in sequence using the WebAudio API (no audio files needed). Pick the interval you heard from the multiple-choice buttons: unison, minor/major 2nds and 3rds, perfect 4ths and 5ths, tritones, 6ths, 7ths, and octaves depending on difficulty. Each answer gets instant feedback with a memory-hook tip (e.g. the minor 2nd is the *Jaws* theme), and your streak and history build up on the scoreboard.

## Everyday uses

- **Music students** — drill interval recognition for theory exams and aural tests.
- **Guitarists & pianists** — learn to pick out melodies and chords by ear.
- **Singers** — build the relative pitch that makes sight-singing easier.
- **Producers** — transcribe basslines and riffs without hunting note-by-note.
- **Curious listeners** — finally understand what musicians mean by "a perfect fifth".

**Tip:** start on Easy until you can nail the unison, 2nds, 3rds, 5th and octave — those five carry most pop melodies. Then turn on descending intervals: they're the real test.
