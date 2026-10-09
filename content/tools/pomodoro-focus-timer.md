---
title: "Free Pomodoro Focus Timer"
description: "A free Pomodoro timer with 25-min focus, 5-min short break, and 15-min long break modes — plus a session counter and gentle beep alarm."
category: everyday
date: 2026-10-01
draft: false
---

## How it works

Pick a mode, hit start, and stay focused — the timer beeps when time is up and counts your completed sessions.

<div class="tool-shell" id="pomoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-3.39l-1.42-1.42C16.93 19.01 14.59 20 12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7c1.98 0 3.77.81 5.03 2.11z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pomodoro Focus Timer</h2>
<p>Work in focused sprints, rest on purpose — with a gentle beep when time's up.</p>
</div>
<button type="button" class="theme-toggle" id="pomoTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose your session</p>
<div class="preset-row" id="pomoModes" style="justify-content:center;">
<button type="button" class="preset-chip active" data-mode="focus">🎯 Focus</button>
<button type="button" class="preset-chip" data-mode="short">☕ Short break</button>
<button type="button" class="preset-chip" data-mode="long">🌙 Long break</button>
</div>
<div style="text-align:center;margin-top:1rem;">
<div id="pomoMode" style="font-size:1.1rem;font-weight:bold;margin-bottom:.25rem;">Focus</div>
<div id="pomoTime" style="font-size:4rem;font-weight:bold;font-variant-numeric:tabular-nums;letter-spacing:.05em;line-height:1.1;">25:00</div>
<p style="margin:.5rem 0 0;">Sessions completed: <strong id="pomoSessions">0</strong></p>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Session settings</p>
<div class="settings-panel">
<div class="preset-row" id="pomoPresets">
<button type="button" class="preset-chip active" data-focus="25" data-short="5" data-long="15">🍅 Classic 25-5</button>
<button type="button" class="preset-chip" data-focus="50" data-short="10" data-long="20">🧠 Deep work 50-10</button>
<button type="button" class="preset-chip" data-focus="15" data-short="3" data-long="10">⚡ Sprint 15-3</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pomoFocusLen">Focus length: <span class="val" id="pomoFocusVal">25 min</span></label>
<input type="range" id="pomoFocusLen" min="5" max="60" step="5" value="25">
</div>
<div class="setting">
<label for="pomoShortLen">Short break: <span class="val" id="pomoShortVal">5 min</span></label>
<input type="range" id="pomoShortLen" min="1" max="15" step="1" value="5">
</div>
<div class="setting">
<label for="pomoLongLen">Long break: <span class="val" id="pomoLongVal">15 min</span></label>
<input type="range" id="pomoLongLen" min="5" max="30" step="5" value="15">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run the timer</p>
<div class="tool-actions" style="justify-content:center;">
<button type="button" class="btn-pro" id="pomoStartBtn">
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
Start
</button>
<button type="button" class="btn-pro-outline" id="pomoPauseBtn">⏸ Pause</button>
<button type="button" class="btn-pro-outline" id="pomoResetBtn">↺ Reset</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — run as many focus sessions as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pomoShell');
  ToolPro.themeToggle(shell, document.getElementById('pomoTheme'));

  var focusRange = document.getElementById('pomoFocusLen');
  var shortRange = document.getElementById('pomoShortLen');
  var longRange = document.getElementById('pomoLongLen');
  ToolPro.bindSlider(focusRange, document.getElementById('pomoFocusVal'), function(v){ return v + ' min'; });
  ToolPro.bindSlider(shortRange, document.getElementById('pomoShortVal'), function(v){ return v + ' min'; });
  ToolPro.bindSlider(longRange, document.getElementById('pomoLongVal'), function(v){ return v + ' min'; });

  var pomoTotal = 25 * 60, pomoLeft = 25 * 60, pomoTimer = null, pomoSessions = 0, pomoModeName = 'Focus';
  function pomoFmt(s){
    var m = Math.floor(s / 60), ss = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (ss < 10 ? '0' : '') + ss;
  }
  function pomoUpdate(){
    document.getElementById('pomoTime').textContent = pomoFmt(pomoLeft);
    document.title = pomoFmt(pomoLeft) + ' — ' + pomoModeName + ' | Pomodoro Timer';
  }
  function pomoBeep(){
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      var ctx = new AC();
      var o = ctx.createOscillator();
      var g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.3, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      o.start(); o.stop(ctx.currentTime + 1.2);
    } catch (e) { /* audio not supported — timer still works silently */ }
  }
  function pomoTick(){
    if (pomoLeft > 0) { pomoLeft--; pomoUpdate(); }
    else {
      pomoPause();
      pomoBeep();
      pomoSessions++;
      document.getElementById('pomoSessions').textContent = pomoSessions;
      document.getElementById('pomoMode').textContent = pomoModeName + ' — done!';
      ToolPro.toast(pomoModeName + ' finished! 🎉', 'ok');
    }
  }
  function pomoStart(){ if (!pomoTimer) pomoTimer = setInterval(pomoTick, 1000); }
  function pomoPause(){ if (pomoTimer) { clearInterval(pomoTimer); pomoTimer = null; } }
  function pomoReset(){ pomoPause(); pomoLeft = pomoTotal; document.getElementById('pomoMode').textContent = pomoModeName; pomoUpdate(); }
  function setPomo(mins, name, btn){
    pomoPause();
    pomoTotal = mins * 60; pomoLeft = pomoTotal; pomoModeName = name;
    document.getElementById('pomoMode').textContent = name.charAt(0).toUpperCase() + name.slice(1);
    var btns = document.getElementById('pomoModes').querySelectorAll('button');
    for (var i = 0; i < btns.length; i++) btns[i].classList.remove('active');
    if (btn) btn.classList.add('active');
    pomoUpdate();
  }

  function modeLen(mode){
    if(mode === 'short') return parseInt(shortRange.value, 10);
    if(mode === 'long') return parseInt(longRange.value, 10);
    return parseInt(focusRange.value, 10);
  }
  function modeName(mode){
    if(mode === 'short') return 'short break';
    if(mode === 'long') return 'long break';
    return 'focus';
  }
  document.getElementById('pomoModes').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var mode = chip.dataset.mode;
    setPomo(modeLen(mode), modeName(mode), chip);
  });

  document.getElementById('pomoPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#pomoPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    focusRange.value = chip.dataset.focus;
    shortRange.value = chip.dataset.short;
    longRange.value = chip.dataset.long;
    [focusRange, shortRange, longRange].forEach(function(r){ r.dispatchEvent(new Event('input')); });
    var active = document.querySelector('#pomoModes .preset-chip.active');
    setPomo(modeLen(active ? active.dataset.mode : 'focus'), modeName(active ? active.dataset.mode : 'focus'), active);
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  [focusRange, shortRange, longRange].forEach(function(r){
    r.addEventListener('change', function(){
      var active = document.querySelector('#pomoModes .preset-chip.active');
      if(active) setPomo(modeLen(active.dataset.mode), modeName(active.dataset.mode), active);
    });
  });

  document.getElementById('pomoStartBtn').addEventListener('click', pomoStart);
  document.getElementById('pomoPauseBtn').addEventListener('click', pomoPause);
  document.getElementById('pomoResetBtn').addEventListener('click', pomoReset);

  pomoUpdate();
})();
</script>

## Everyday uses

- **Deep work blocks:** run two 25-minute focus sessions with a 5-minute break between for a solid hour of study.
- **Breaking procrastination:** a ticking timer makes starting less painful — commit to just one pomodoro.
- **Rest honestly:** switch to break mode so your 5-minute pause doesn't stretch into 25 minutes of scrolling.
