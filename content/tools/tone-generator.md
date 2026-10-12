---
title: "Free Tone Generator — Test Tones & Frequencies Online"
description: "Generate pure test tones from 20 Hz to 20 kHz in your browser. Sine, square, triangle and sawtooth waves for speaker tests, tuning and hearing checks."
category: audio
date: 2026-10-12
draft: false
---

Need a clean test tone? This generator uses the Web Audio API to synthesize pure frequencies from deep 20 Hz sub-bass to the 20 kHz edge of human hearing, in sine, triangle, square, or sawtooth waves. Test speakers and headphones, tune instruments against A440, or check how high your hearing still reaches. No audio files, no downloads — the tone is generated live on your device.

<div class="tool-shell" id="toneGeneratorShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4zM14 3.2v2.1a7 7 0 010 13.4v2.1a9 9 0 000-17.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Tone Generator</h2>
<p>Pure tones from 20 Hz to 20,000 Hz — speaker tests, instrument tuning, and hearing checks, generated live in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="toneGeneratorTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Set your tone</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" data-tone-freq="440">🎵 A440 tuning</button>
<button type="button" class="preset-chip" data-tone-freq="1000">📻 1 kHz test tone</button>
<button type="button" class="preset-chip" data-tone-freq="50">🔊 50 Hz sub test</button>
<button type="button" class="preset-chip" data-tone-freq="15000">👂 15 kHz hearing test</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Frequency (Hz)</span><input type="range" id="tnFreq" min="20" max="20000" value="440" step="1"><span class="val" id="tnFreqVal">440</span></div>
<div class="setting"><span class="t-label">Exact frequency</span><input type="number" class="tool-input" id="tnFreqNum" value="440" min="20" max="20000"></div>
<div class="setting"><span class="t-label">Waveform</span><select class="tool-input" id="tnWave"><option value="sine">Sine (pure)</option><option value="triangle">Triangle</option><option value="square">Square</option><option value="sawtooth">Sawtooth</option></select></div>
<div class="setting"><span class="t-label">Volume</span><input type="range" id="tnVol" min="0" max="100" value="50"><span class="val" id="tnVolVal">50</span></div>
</div>
<div class="hint">Start at low volume — high frequencies and square waves get loud fast. Everything is generated live by the Web Audio API; no audio file is downloaded or uploaded.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Play &amp; test</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tnToggle">
▶ Play tone
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="tnRes">
<p class="result-head">🔊 Now playing</p>
<div class="result-summary" id="tnResSummary"></div>
<div class="result-grid" id="tnResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited test tones — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('toneGeneratorShell');
ToolPro.themeToggle(shell, document.getElementById('toneGeneratorTheme'));
var ctx=null, osc=null, gain=null, playing=false;
var freq=document.getElementById('tnFreq'), freqNum=document.getElementById('tnFreqNum');
ToolPro.bindSlider(freq, document.getElementById('tnFreqVal'), function(v){ return v+' Hz'; });
ToolPro.bindSlider(document.getElementById('tnVol'), document.getElementById('tnVolVal'), function(v){ return v+'%'; });
freq.addEventListener('input', function(){ freqNum.value=freq.value; if(osc) osc.frequency.value=parseFloat(freq.value); });
freqNum.addEventListener('change', function(){ var v=Math.min(20000, Math.max(20, parseFloat(freqNum.value)||440)); freq.value=v; freqNum.value=v; if(osc) osc.frequency.value=v; document.getElementById('tnFreqVal').textContent=v+' Hz'; });
document.getElementById('tnWave').addEventListener('change', function(){ if(osc) osc.type=this.value; });
document.getElementById('tnVol').addEventListener('input', function(){ if(gain&&ctx) gain.gain.setTargetAtTime(this.value/100*0.4, ctx.currentTime, 0.02); });
document.querySelectorAll('[data-tone-freq]').forEach(function(b){ b.addEventListener('click', function(){ var v=b.getAttribute('data-tone-freq'); freq.value=v; freqNum.value=v; document.getElementById('tnFreqVal').textContent=v+' Hz'; if(osc) osc.frequency.value=parseFloat(v); }); });
document.getElementById('tnToggle').addEventListener('click', function(){
  if(!playing){
    if(!ctx) ctx=new (window.AudioContext||window.webkitAudioContext)();
    ctx.resume();
    osc=ctx.createOscillator(); gain=ctx.createGain();
    osc.type=document.getElementById('tnWave').value;
    osc.frequency.value=parseFloat(freq.value);
    gain.gain.value=document.getElementById('tnVol').value/100*0.4;
    osc.connect(gain); gain.connect(ctx.destination); osc.start();
    playing=true; this.textContent='⏹ Stop tone';
    var res=document.getElementById('tnRes'); res.classList.add('show');
    document.getElementById('tnResSummary').textContent='Playing '+freq.value+' Hz '+document.getElementById('tnWave').value+' wave. Adjust frequency, waveform, or volume live.';
    ToolPro.toast('Tone playing','ok');
  } else {
    try{ osc.stop(); }catch(e){} osc.disconnect(); gain.disconnect(); osc=null;
    playing=false; this.textContent='▶ Play tone';
    document.getElementById('tnRes').classList.remove('show');
  }
});
})();
</script>

## How it works

When you press Play, the tool creates a Web Audio oscillator set to your frequency and waveform, routes it through a gain node (your volume control) to your speakers, and starts it. Moving the frequency or volume sliders adjusts the oscillator in real time. Press Stop and the oscillator is destroyed — nothing is recorded or stored.

## Everyday uses

- **Audio setup** — sweep frequencies to find room rattles, dead speaker ranges, and subwoofer limits.
- **Musicians** — use A440 (or any reference pitch) to tune by ear.
- **Hearing checks** — see which high frequencies you can still hear (results vary by headphones and age).
- **Science classes** — demonstrate pitch, waveforms, and the limits of human hearing live.

## Frequently asked questions

**Why can’t I hear very low or high tones?**

Human hearing runs roughly 20 Hz–20 kHz and narrows with age; small speakers also cannot reproduce deep bass. Use headphones for the extremes and keep volume modest.

**Is the tone exactly the frequency shown?**

Yes — the oscillator is set digitally, so 440 Hz is exactly 440 Hz, limited only by your device’s audio clock.

**Can high tones damage speakers or ears?**

At high volume, yes — especially tweeters and eardrums. Start quiet and raise volume slowly.
