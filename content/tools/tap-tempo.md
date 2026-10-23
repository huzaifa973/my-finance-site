---
title: "Free Tap Tempo — Find BPM by Tapping Online"
description: "Tap a button or the spacebar to measure beats per minute. Live BPM readout with average, tap history and reset. Free forever, no sign-up, in-browser."
category: audio
date: 2026-10-23
draft: false
---

Hear a song and need its tempo? Tap along — the big button (or your spacebar) measures the time between your taps and converts it to beats per minute in real time. Great for DJs beat-matching, producers dialing in a DAW tempo, dancers counting a routine, or anyone settling a "how fast is this song?" debate. No microphone needed; everything runs in your browser.

<div class="tool-shell" id="ttShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Tap Tempo</h2>
<p>Tap along to any beat — get the BPM instantly, live in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="ttTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Tap the beat</p>
<div class="tool-actions" style="justify-content:center;">
<button type="button" class="btn-pro" id="ttTap" style="font-size:1.6rem;padding:2.2rem 4rem;min-width:280px;">
🥁 TAP
</button>
</div>
<div class="hint" style="text-align:center;">Tap the button or press the <strong>spacebar</strong> in time with the music. Two or more taps are needed for a reading.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Measurement settings</p>
<div class="settings-panel">
<div class="preset-row" id="ttPresets">
<button type="button" class="preset-chip" data-n="4">⚡ Last 4 taps — fast</button>
<button type="button" class="preset-chip active" data-n="8">🎯 Last 8 taps — balanced</button>
<button type="button" class="preset-chip" data-n="0">📊 All taps — smooth</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Auto-restart after a 2s pause</span><label class="toggle"><input type="checkbox" id="ttPause" checked><span class="track"></span></label></div>
<div class="hint">A gap over 2 seconds starts a fresh measurement instead of dragging the average down.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Round to whole BPM</span><label class="toggle"><input type="checkbox" id="ttRound" checked><span class="track"></span></label></div>
<div class="hint">Most DAWs and DJ software use whole-number tempos.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your tempo</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="ttReset" disabled>↺ Reset</button>
</div>
<div class="results" id="ttResults">
<p class="result-head">🎵 Tempo readout</p>
<div class="result-summary" id="ttSummary">Tap the button or press spacebar twice to begin.</div>
<div class="result-grid" id="ttGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — measure as many tempos as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ttShell');
  ToolPro.themeToggle(shell, document.getElementById('ttTheme'));
  var tapBtn = document.getElementById('ttTap');
  var resetBtn = document.getElementById('ttReset');
  var presets = document.getElementById('ttPresets');
  var pauseEl = document.getElementById('ttPause');
  var roundEl = document.getElementById('ttRound');
  var resBox = document.getElementById('ttResults');
  var summaryEl = document.getElementById('ttSummary');
  var gridEl = document.getElementById('ttGrid');
  var taps = [];          // timestamps in ms
  var windowSize = 8;     // 0 = all
  var card = null, bpmEl = null, statsEl = null, histEl = null;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    windowSize = parseInt(chip.dataset.n, 10);
    update();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function fmtBpm(b){
    return roundEl.checked ? Math.round(b) + '' : b.toFixed(1);
  }

  function stats(){
    if(taps.length < 2) return null;
    var iv = [];
    for(var i = 1; i < taps.length; i++) iv.push(taps[i] - taps[i - 1]);
    var use = windowSize > 0 ? iv.slice(-(windowSize - 1)) : iv;
    var avg = use.reduce(function(a, b){ return a + b; }, 0) / use.length;
    var allAvg = iv.reduce(function(a, b){ return a + b; }, 0) / iv.length;
    return {
      bpm: 60000 / avg,
      avgBpm: 60000 / allAvg,
      taps: taps.length,
      lastMs: iv[iv.length - 1],
      avgMs: avg,
      iv: iv.slice(-8)
    };
  }

  function ensureCard(){
    if(card) return;
    gridEl.innerHTML = '';
    card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name">Current tempo</div>' +
      '<div style="font-size:3.2rem;font-weight:800;line-height:1.1;margin:.4rem 0;"><span class="bpm-num">—</span><span style="font-size:1.1rem;font-weight:600;color:#8a94a6;"> BPM</span></div>' +
      '<div class="r-stats"></div>' +
      '<div class="tap-hist" style="margin-top:.6rem;font-size:.82rem;color:#8a94a6;"></div>';
    gridEl.appendChild(card);
    bpmEl = card.querySelector('.bpm-num');
    statsEl = card.querySelector('.r-stats');
    histEl = card.querySelector('.tap-hist');
  }

  function update(){
    var s = stats();
    if(!s){
      summaryEl.textContent = taps.length === 1
        ? '👆 One tap registered — keep tapping to the beat…'
        : 'Tap the button or press spacebar twice to begin.';
      return;
    }
    ensureCard();
    bpmEl.textContent = fmtBpm(s.bpm);
    statsEl.innerHTML =
      s.taps + ' taps · session average <b>' + fmtBpm(s.avgBpm) + ' BPM</b> · ' +
      'avg interval ' + Math.round(s.avgMs) + ' ms';
    histEl.textContent = 'Recent intervals: ' + s.iv.map(function(ms){ return Math.round(ms) + 'ms'; }).join(' · ');
    summaryEl.textContent = '🎵 ' + fmtBpm(s.bpm) + ' BPM' + (s.taps >= 8 ? ' — solid reading.' : ' — tap a few more times to steady it.');
    resBox.classList.add('show');
  }

  function tap(){
    var now = performance.now();
    if(pauseEl.checked && taps.length && (now - taps[taps.length - 1] > 2000)){
      taps = [];
    }
    taps.push(now);
    if(taps.length > 64) taps = taps.slice(-64);
    resetBtn.disabled = false;
    tapBtn.style.transform = 'scale(0.96)';
    setTimeout(function(){ tapBtn.style.transform = ''; }, 90);
    update();
  }

  tapBtn.addEventListener('click', tap);
  document.addEventListener('keydown', function(e){
    if(e.code !== 'Space' || e.repeat) return;
    var tag = (e.target && e.target.tagName) ? e.target.tagName : '';
    // Never hijack spacebar inside form fields or on buttons (the TAP
    // button already fires tap() through its own click on spacebar).
    if(tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON') return;
    e.preventDefault();
    tap();
  });

  resetBtn.addEventListener('click', function(){
    taps = [];
    card = null; bpmEl = null; statsEl = null; histEl = null;
    gridEl.innerHTML = '';
    summaryEl.textContent = 'Tap the button or press spacebar twice to begin.';
    resBox.classList.remove('show');
    resetBtn.disabled = true;
    ToolPro.toast('Tempo reset', 'ok');
  });
})();
</script>

## How it works

Tap the big **TAP** button — or just hit your spacebar — in time with whatever you're hearing. After two taps the tool starts showing BPM, computed from the average gap between your recent taps (BPM = 60,000 ÷ average milliseconds per beat). More taps = steadier reading. A pause longer than 2 seconds starts a fresh measurement so old taps don't pollute the new one.

**Rule of thumb:** tap with the downbeat of a full bar (kick drum or bass hits), not hi-hats — subdividing the beat doubles the reading.

## Everyday uses

- **DJs** — find a track's tempo in seconds for clean beat-matching.
- **Producers** — dial a DAW project to the exact tempo of a sample or reference track.
- **Musicians** — set a metronome to the right speed before rehearsal.
- **Dancers** — confirm a routine's BPM when planning choreography counts.
- **Curious listeners** — settle the eternal debate: is this song 120 or 128 BPM?
