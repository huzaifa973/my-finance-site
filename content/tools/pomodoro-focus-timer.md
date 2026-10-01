---
title: "Free Pomodoro Focus Timer"
description: "A free Pomodoro timer with 25-min focus, 5-min short break, and 15-min long break modes — plus a session counter and gentle beep alarm."
date: 2026-10-01
draft: false
---

## How it works

Pick a mode, hit start, and stay focused — the timer beeps when time is up and counts your completed sessions.

<div class="calc" style="text-align:center;">
  <div style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-bottom:1rem;" id="pomoBtns">
    <button type="button" onclick="setPomo(25,'focus',this)">Focus 25:00</button>
    <button type="button" onclick="setPomo(5,'short break',this)">Short break 5:00</button>
    <button type="button" onclick="setPomo(15,'long break',this)">Long break 15:00</button>
  </div>
  <div id="pomoMode" style="font-size:1.1rem;font-weight:bold;margin-bottom:.25rem;">Focus</div>
  <div id="pomoTime" style="font-size:4rem;font-weight:bold;font-variant-numeric:tabular-nums;letter-spacing:.05em;">25:00</div>
  <div style="display:flex;gap:.5rem;justify-content:center;flex-wrap:wrap;margin-top:.75rem;">
    <button onclick="pomoStart()">Start</button>
    <button type="button" onclick="pomoPause()">Pause</button>
    <button type="button" onclick="pomoReset()">Reset</button>
  </div>
  <div class="result" style="margin-top:.75rem;"><p>Sessions completed: <strong id="pomoSessions">0</strong></p></div>
</div>

<script>
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
  }
}
function pomoStart(){ if (!pomoTimer) pomoTimer = setInterval(pomoTick, 1000); }
function pomoPause(){ if (pomoTimer) { clearInterval(pomoTimer); pomoTimer = null; } }
function pomoReset(){ pomoPause(); pomoLeft = pomoTotal; document.getElementById('pomoMode').textContent = pomoModeName; pomoUpdate(); }
function setPomo(mins, name, btn){
  pomoPause();
  pomoTotal = mins * 60; pomoLeft = pomoTotal; pomoModeName = name;
  document.getElementById('pomoMode').textContent = name.charAt(0).toUpperCase() + name.slice(1);
  var btns = document.getElementById('pomoBtns').querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) btns[i].style.fontWeight = 'normal';
  if (btn) btn.style.fontWeight = 'bold';
  pomoUpdate();
}
pomoUpdate();
</script>

## Everyday uses

- **Deep work blocks:** run two 25-minute focus sessions with a 5-minute break between for a solid hour of study.
- **Breaking procrastination:** a ticking timer makes starting less painful — commit to just one pomodoro.
- **Rest honestly:** switch to break mode so your 5-minute pause doesn't stretch into 25 minutes of scrolling.
