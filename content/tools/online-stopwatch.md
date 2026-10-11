---
title: "Free Online Stopwatch with Lap Times"
description: "Precision online stopwatch with millisecond display, lap splits, best/worst lap highlighting and keyboard shortcuts. Free forever, runs in your browser."
category: everyday
date: 2026-10-11
draft: false
---

Need to time a workout, a study sprint, a recipe, or a race? This free online stopwatch counts in milliseconds, records unlimited lap splits, and automatically highlights your fastest and slowest laps. Press the spacebar to start and stop — no sign-up, no app download, and it works offline once loaded.

<div class="tool-shell" id="swShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Online Stopwatch</h2>
<p>Millisecond precision, unlimited laps &amp; spacebar control — right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="swTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Timer</p>
<div class="results show">
<div class="result-card" style="grid-column:1/-1;text-align:center;padding:24px 12px;">
<div id="swDisplay" class="tool-output" style="font-size:3.2rem;font-weight:800;font-variant-numeric:tabular-nums;letter-spacing:2px;line-height:1;">00:00<span style="font-size:1.6rem;color:var(--muted);">.00</span></div>
<div style="margin-top:6px;color:var(--muted);font-size:.9rem;">Press <b>Space</b> to start/stop · <b>L</b> for lap · <b>R</b> to reset</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Controls</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="swStart">
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
Start
</button>
<button type="button" class="btn-pro-outline" id="swLap" disabled>🏁 Lap</button>
<button type="button" class="btn-pro-outline" id="swReset" disabled>↺ Reset</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Lap times</p>
<div class="results show">
<p class="result-head">🏁 Laps <span class="val" id="swLapCount">0</span></p>
<div class="result-summary" id="swEmpty">No laps yet — press Lap while the timer is running to record a split.</div>
<table id="swTable" style="width:100%;border-collapse:collapse;display:none;">
<thead><tr style="text-align:left;border-bottom:2px solid var(--border,#e2e8f0);">
<th style="padding:8px 4px;">Lap</th><th style="padding:8px 4px;">Lap time</th><th style="padding:8px 4px;">Total</th><th style="padding:8px 4px;"></th>
</tr></thead>
<tbody id="swLaps" style="font-variant-numeric:tabular-nums;"></tbody>
</table>
</div>
<div class="tool-actions" style="margin-top:12px;">
<button type="button" class="btn-pro-outline" id="swCopy" disabled>📋 Copy laps</button>
<button type="button" class="btn-pro-outline" id="swClearLaps" disabled>Clear laps</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Time workouts, races, study sessions and more — unlimited laps, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('swShell');
ToolPro.themeToggle(shell, document.getElementById('swTheme'));
var display = document.getElementById('swDisplay');
var startBtn = document.getElementById('swStart');
var lapBtn = document.getElementById('swLap');
var resetBtn = document.getElementById('swReset');
var lapsBody = document.getElementById('swLaps');
var table = document.getElementById('swTable');
var emptyMsg = document.getElementById('swEmpty');
var lapCount = document.getElementById('swLapCount');
var copyBtn = document.getElementById('swCopy');
var clearLapsBtn = document.getElementById('swClearLaps');

var running = false, startAt = 0, elapsed = 0, timerId = null;
var laps = []; // {lapMs, totalMs}

function pad(n, w){ n = String(n); while(n.length < w) n = '0' + n; return n; }
function fmt(ms){
  var cs = Math.floor(ms / 10) % 100;
  var s = Math.floor(ms / 1000) % 60;
  var m = Math.floor(ms / 60000) % 60;
  var h = Math.floor(ms / 3600000);
  var main = h > 0 ? h + ':' + pad(m, 2) + ':' + pad(s, 2) : pad(m, 2) + ':' + pad(s, 2);
  return {main: main, cs: pad(cs, 2)};
}
function now(){ return elapsed + (running ? performance.now() - startAt : 0); }

function render(){
  var f = fmt(now());
  display.innerHTML = f.main + '<span style="font-size:1.6rem;color:var(--muted);">.' + f.cs + '</span>';
}

function setRunningUI(){
  startBtn.innerHTML = running
    ? '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Stop'
    : '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> Start';
  lapBtn.disabled = !running;
  resetBtn.disabled = !(running || elapsed > 0 || laps.length);
}

function start(){
  if(running) return;
  running = true; startAt = performance.now();
  timerId = setInterval(render, 33);
  setRunningUI();
}
function stop(){
  if(!running) return;
  elapsed = now(); running = false;
  clearInterval(timerId); timerId = null;
  render(); setRunningUI();
}
function toggle(){ running ? stop() : start(); }

function refreshLaps(){
  var n = laps.length;
  lapCount.textContent = n;
  copyBtn.disabled = !n;
  clearLapsBtn.disabled = !n;
  if(!n){ table.style.display = 'none'; emptyMsg.style.display = ''; lapsBody.innerHTML = ''; return; }
  table.style.display = ''; emptyMsg.style.display = 'none';
  var best = Math.min.apply(null, laps.map(function(l){ return l.lapMs; }));
  var worst = Math.max.apply(null, laps.map(function(l){ return l.lapMs; }));
  lapsBody.innerHTML = '';
  laps.forEach(function(l, i){
    var f1 = fmt(l.lapMs), f2 = fmt(l.totalMs);
    var tr = document.createElement('tr');
    var tag = '';
    if(n > 1 && l.lapMs === best) tag = ' 🥇 fastest';
    else if(n > 1 && l.lapMs === worst) tag = ' 🐢 slowest';
    tr.style.cssText = 'border-bottom:1px solid var(--border,#e2e8f0);' +
      (tag.indexOf('fastest') !== -1 ? 'background:rgba(34,197,94,.12);' : '') +
      (tag.indexOf('slowest') !== -1 ? 'background:rgba(239,68,68,.10);' : '');
    tr.innerHTML = '<td style="padding:8px 4px;"><b>#' + (i + 1) + '</b></td>' +
      '<td style="padding:8px 4px;">' + f1.main + '.' + f1.cs + '</td>' +
      '<td style="padding:8px 4px;color:var(--muted);">' + f2.main + '.' + f2.cs + '</td>' +
      '<td style="padding:8px 4px;">' + tag + '</td>';
    lapsBody.appendChild(tr);
  });
}

function doLap(){
  if(!running) return;
  var total = now();
  var prev = laps.length ? laps[laps.length - 1].totalMs : 0;
  laps.push({lapMs: total - prev, totalMs: total});
  refreshLaps(); setRunningUI();
  ToolPro.toast('Lap ' + laps.length + ' recorded', 'ok');
}
function doReset(){
  stop(); elapsed = 0; laps = [];
  render(); refreshLaps(); setRunningUI();
  ToolPro.toast('Stopwatch reset');
}

startBtn.addEventListener('click', toggle);
lapBtn.addEventListener('click', doLap);
resetBtn.addEventListener('click', doReset);
clearLapsBtn.addEventListener('click', function(){ laps = []; refreshLaps(); setRunningUI(); });

copyBtn.addEventListener('click', function(){
  var lines = laps.map(function(l, i){
    var f1 = fmt(l.lapMs), f2 = fmt(l.totalMs);
    return 'Lap ' + (i + 1) + ': ' + f1.main + '.' + f1.cs + ' (total ' + f2.main + '.' + f2.cs + ')';
  });
  var t = 'Stopwatch laps — total ' + fmt(now()).main + '\n' + lines.join('\n');
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(function(){ ToolPro.toast('Laps copied', 'ok'); });
  }
});

document.addEventListener('keydown', function(e){
  if(e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
  if(e.code === 'Space'){ e.preventDefault(); toggle(); }
  else if(e.key === 'l' || e.key === 'L'){ doLap(); }
  else if(e.key === 'r' || e.key === 'R'){ doReset(); }
});

render(); refreshLaps(); setRunningUI();
})();
</script>

## How it works

Hit **Start** (or press the spacebar) and the timer counts in hundredths of a second. Press **Lap** (or **L**) any time to record a split without stopping the clock — your fastest lap gets a 🥇 highlight and your slowest a 🐢 so you can spot trends instantly. **Reset** (or **R**) clears everything, and **Copy laps** exports your splits as plain text.

## Everyday uses

- **Workouts** — time intervals, rest periods, and track whether your mile splits are improving.
- **Study & Pomodoro sessions** — run focus sprints and log lap marks at each chapter or problem set.
- **Cooking** — time multi-step recipes: lap at each stage so nothing overcooks.
- **Races & sports** — a free lap timer for coaches, runners, and swimmers without buying a device.
- **Presentations & speeches** — rehearse with lap marks at each section to nail your timing.

**Tip:** the stopwatch keeps running if you switch tabs — the display just updates when you come back, and lap times stay accurate.

## FAQ

**Is this online stopwatch really free?**
Yes — 100% free forever, unlimited laps, no sign-up, no credit card. It runs entirely in your browser.

**How accurate is it?**
It measures with your device's high-resolution timer (millisecond precision) and the display updates about 30 times per second. Great for training and everyday timing — not certified for official competition.

**Do the keyboard shortcuts work on mobile?**
The shortcuts are for desktop keyboards. On phones and tablets, use the big on-screen Start, Lap, and Reset buttons — they're thumb-friendly.

**Will it keep running if I switch tabs?**
Yes — the underlying timer keeps counting. The display refreshes when you return, and lap times remain accurate.
