---
title: "Free Online Metronome — Accurate Click Track with Tap Tempo"
description: "Free online metronome with rock-solid Web Audio timing, tap tempo, accents and time signatures from 30–240 BPM. No sign-up, works on any device."
category: audio
date: 2026-10-12
draft: false
---

## How it works

Set a tempo, pick a time signature and press start — a precise click track keeps the beat for you, with a higher, louder accented click on the first beat of every bar and a visual pulse so you can follow along even with the sound turned down.

<div class="tool-shell" id="metShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2l6.8 20H5.2L12 2zm0 3.8L7.5 20h9L12 5.8z"/><path d="M13.1 17.9l3.2-8.6 1.4.5-3.2 8.6z"/><circle cx="16.9" cy="8.4" r="1.4"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Online Metronome</h2>
<p>A steady, accurate click from 30–240 BPM — with tap tempo, accents and a visual beat pulse.</p>
</div>
<button type="button" class="theme-toggle" id="metTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Set the tempo</p>
<div class="setting">
<label for="metBpm">Tempo (BPM)</label>
<input type="range" id="metBpm" min="30" max="240" value="100" style="width:100%;">
<div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
<input type="number" id="metBpmNum" class="tool-input" min="30" max="240" value="100" style="max-width:110px;">
<span>beats per minute (30–240)</span>
</div>
<div class="hint">Drag the slider or type an exact tempo. 60 BPM is one beat per second; most pop songs sit between 90 and 130.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick a time signature</p>
<div class="settings-panel">
<div class="setting">
<label for="metSig">Time signature</label>
<select id="metSig" style="max-width:240px;">
<option value="2">2/4 — marches &amp; polkas</option>
<option value="3">3/4 — waltzes</option>
<option value="4" selected>4/4 — most songs</option>
<option value="6">6/8 — ballads &amp; folk</option>
</select>
<div class="hint">The first beat of every bar gets a higher, louder accent click, so you always know where the bar starts.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Start the click</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="metStart">Start metronome</button>
<button type="button" class="btn-pro-outline" id="metTap">Tap tempo</button>
</div>
<div style="text-align:center;padding:18px 0 6px;">
<div id="metPulse" style="width:84px;height:84px;border-radius:50%;background:#cbd5e1;margin:0 auto;transition:transform .1s ease;"></div>
<div id="metDots" style="display:flex;gap:8px;justify-content:center;margin-top:16px;"></div>
<p id="metBeatLabel" style="margin-top:10px;">Press start — or hit Tap tempo in time with a song to find its BPM.</p>
</div>
<div class="results" id="metResults">
<p class="result-head">Tempo</p>
<div class="result-summary" id="metOut"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This metronome runs entirely in your browser — practice as long as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('metShell');
  ToolPro.themeToggle(shell, document.getElementById('metTheme'));
  var range = document.getElementById('metBpm');
  var num = document.getElementById('metBpmNum');
  var sig = document.getElementById('metSig');
  var startBtn = document.getElementById('metStart');
  var tapBtn = document.getElementById('metTap');
  var pulse = document.getElementById('metPulse');
  var dotsBox = document.getElementById('metDots');
  var beatLabel = document.getElementById('metBeatLabel');
  var resBox = document.getElementById('metResults');
  var out = document.getElementById('metOut');
  var ctx = null, timer = null, nextNote = 0, beat = 0, playing = false;
  var taps = [];

  function bar(){ return parseInt(sig.value, 10); }
  function getBpm(){
    var v = parseInt(num.value, 10);
    if (isNaN(v)) v = 100;
    return Math.min(240, Math.max(30, v));
  }
  function setBpm(v){
    v = Math.min(240, Math.max(30, Math.round(v)));
    range.value = v;
    num.value = v;
    status();
  }
  function status(){
    out.innerHTML = '<p style="font-size:1.3rem;"><strong>' + getBpm() + '</strong> BPM &middot; <strong>' + sig.options[sig.selectedIndex].text + '</strong></p>'
      + '<p>' + (playing ? 'Playing — the first beat of each bar clicks higher and louder.' : 'Press Start metronome when you are ready.') + '</p>';
  }
  function buildDots(){
    dotsBox.innerHTML = '';
    for (var i = 0; i < bar(); i++){
      var d = document.createElement('span');
      d.style.cssText = 'width:14px;height:14px;border-radius:50%;background:#cbd5e1;display:inline-block;';
      dotsBox.appendChild(d);
    }
  }
  range.addEventListener('input', function(){ num.value = range.value; status(); });
  num.addEventListener('input', function(){ if (num.value) range.value = getBpm(); status(); });
  num.addEventListener('change', function(){ setBpm(getBpm()); });
  sig.addEventListener('change', function(){ beat = 0; buildDots(); status(); });

  function clickAt(time, accent){
    var osc = ctx.createOscillator();
    var g = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = accent ? 1568 : 1047;
    g.gain.setValueAtTime(0.0001, time);
    g.gain.exponentialRampToValueAtTime(accent ? 0.9 : 0.55, time + 0.002);
    g.gain.exponentialRampToValueAtTime(0.0001, time + (accent ? 0.1 : 0.07));
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.12);
  }
  function flash(b, accent){
    pulse.style.background = accent ? '#dc2626' : '#2563eb';
    pulse.style.transform = 'scale(1.18)';
    setTimeout(function(){ pulse.style.transform = 'scale(1)'; }, 110);
    var kids = dotsBox.children;
    for (var i = 0; i < kids.length; i++){
      kids[i].style.background = (i === b) ? (accent ? '#dc2626' : '#2563eb') : '#cbd5e1';
    }
    beatLabel.textContent = 'Beat ' + (b + 1) + ' of ' + bar();
  }
  function scheduler(){
    while (nextNote < ctx.currentTime + 0.1){
      var b = beat, acc = (b === 0), t = nextNote;
      clickAt(t, acc);
      (function(bb, aa, tt){
        setTimeout(function(){ if (playing) flash(bb, aa); }, Math.max(0, (tt - ctx.currentTime) * 1000));
      })(b, acc, t);
      nextNote += 60 / getBpm();
      beat = (beat + 1) % bar();
    }
  }
  function start(){
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    playing = true;
    beat = 0;
    nextNote = ctx.currentTime + 0.06;
    timer = setInterval(scheduler, 25);
    startBtn.textContent = 'Stop metronome';
    resBox.classList.add('show');
    status();
    ToolPro.toast('Metronome started', 'ok');
  }
  function stop(){
    playing = false;
    if (timer) clearInterval(timer);
    timer = null;
    startBtn.textContent = 'Start metronome';
    pulse.style.background = '#cbd5e1';
    beatLabel.textContent = 'Stopped — press start to play again.';
    status();
  }
  startBtn.addEventListener('click', function(){ if (playing) stop(); else start(); });

  tapBtn.addEventListener('click', function(){
    var now = performance.now();
    if (taps.length && now - taps[taps.length - 1] > 2000) taps = [];
    taps.push(now);
    if (taps.length > 7) taps.shift();
    if (taps.length >= 2){
      var sum = 0;
      for (var i = 1; i < taps.length; i++) sum += taps[i] - taps[i - 1];
      setBpm(60000 / (sum / (taps.length - 1)));
      resBox.classList.add('show');
      ToolPro.toast('Tempo set from your taps: ' + getBpm() + ' BPM', 'ok');
    } else {
      ToolPro.toast('Keep tapping in time…');
    }
  });

  buildDots();
  status();
})();
</script>

## Everyday uses

- **Instrument practice:** keep scales, arpeggios and tricky passages honest at any tempo.
- **Learning songs by ear:** tap along with a recording to find its BPM, then practice at that speed.
- **Dance and drills:** count steps, rehearsals and routines against a beat everyone can hear and see.
- **Running and workouts:** set a cadence click (170–180 BPM matches a healthy running stride) and move to it.

## Frequently asked questions

**Is this metronome accurate?**
Yes. Clicks are scheduled ahead of time against the Web Audio clock using a lookahead scheduler, not plain JavaScript timers, so the beat stays steady and does not drift — even if the tab stutters for a moment.

**What tempo should I practice at?**
Start about 20–30% slower than the speed you want to reach, and only raise the BPM by 3–5 once you can play the part cleanly three times in a row. Slow and clean beats fast and messy.

**What does the accent click mean?**
The first beat of every bar clicks higher and louder (and the pulse flashes red). It tells you where each bar begins, which makes counting in 3/4 or 6/8 much easier.
