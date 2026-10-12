---
title: "Free Reaction Time Test"
description: "Test your reaction speed free online — click when the box turns green and get your time in milliseconds, plus best and average scores."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Click the box to start, wait for it to turn green, then click as fast as you can. Your reaction time is measured in milliseconds — click too early and the attempt does not count.

<div class="tool-shell" id="rtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H11L9.5 22 19 10h-6.5L13 2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Reaction Time Test</h2>
<p>Click the box the instant it turns green — your time in milliseconds, best score and average.</p>
</div>
<button type="button" class="theme-toggle" id="rtTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Read the rules</p>
<div class="setting">
<div class="hint">The box turns red first — do NOT click while it is red. The moment it turns green, click as fast as you can. Clicking on red is a fault and the attempt restarts.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Take the test</p>
<div id="rtBox" style="background:#2563eb;color:#fff;border-radius:12px;min-height:180px;display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer;padding:20px;user-select:none;-webkit-user-select:none;">
<span id="rtBoxText" style="font-size:1.5rem;font-weight:700;">Click to start</span>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="rtReset">Reset stats</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your results</p>
<div class="results" id="rtResults">
<p class="result-head">⚡ Your reaction times</p>
<div class="result-summary" id="rtResult"></div>
<p style="margin-top:10px;"><strong>Recent attempts</strong></p>
<ul id="rtHistory" style="margin:4px 0 0 18px;"></ul>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This test runs entirely in your browser — take it as many times as you like and watch your average improve.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rtShell');
  ToolPro.themeToggle(shell, document.getElementById('rtTheme'));
  var box = document.getElementById('rtBox');
  var txt = document.getElementById('rtBoxText');
  var resBox = document.getElementById('rtResults');
  var out = document.getElementById('rtResult');
  var historyEl = document.getElementById('rtHistory');
  var state = 'idle';
  var start = 0;
  var timer = null;
  var attempts = [];
  function setBox(bg, msg){
    box.style.background = bg;
    txt.textContent = msg;
  }
  function render(){
    if (!attempts.length) return;
    var last = attempts[attempts.length - 1];
    var best = Math.min.apply(null, attempts);
    var sum = 0;
    for (var i = 0; i < attempts.length; i++) sum += attempts[i];
    var avg = Math.round(sum / attempts.length);
    out.innerHTML = '<p style="font-size:1.4rem;">Last: <strong>' + last + ' ms</strong></p>'
      + '<p>Best: <strong>' + best + ' ms</strong> · Average: <strong>' + avg + ' ms</strong> · Attempts: <strong>' + attempts.length + '</strong></p>';
    var recent = attempts.slice(-5).reverse();
    var items = '';
    for (var j = 0; j < recent.length; j++) items += '<li>' + recent[j] + ' ms</li>';
    historyEl.innerHTML = items;
    resBox.classList.add('show');
  }
  box.addEventListener('click', function(){
    if (state === 'idle' || state === 'done') {
      state = 'waiting';
      setBox('#dc2626', 'Wait for green…');
      timer = setTimeout(function(){
        state = 'ready';
        start = performance.now();
        setBox('#16a34a', 'Click!');
      }, 1000 + Math.random() * 3000);
    } else if (state === 'waiting') {
      clearTimeout(timer);
      state = 'idle';
      setBox('#d97706', 'Too soon! That click does not count — click to try again.');
      ToolPro.toast('Too soon — wait for green', 'err');
    } else if (state === 'ready') {
      var ms = Math.max(1, Math.round(performance.now() - start));
      attempts.push(ms);
      state = 'done';
      setBox('#2563eb', ms + ' ms — click to go again');
      render();
      ToolPro.toast('Reaction time: ' + ms + ' ms', 'ok');
    }
  });
  document.getElementById('rtReset').addEventListener('click', function(){
    attempts = [];
    clearTimeout(timer);
    state = 'idle';
    setBox('#2563eb', 'Click to start');
    resBox.classList.remove('show');
    historyEl.innerHTML = '';
    ToolPro.toast('Stats cleared');
  });
})();
</script>

## Everyday uses

- **Gamers:** check your raw click speed before ranked sessions and track whether aim training is paying off.
- **Alertness check:** a quick self-test before a long drive or a night shift — a much slower score than usual is a sign you are tired.
- **Friendly competitions:** challenge friends or classmates to beat your best time on the same device.
- **Progress tracking:** take five attempts a day and watch your average drop over a few weeks.

## Frequently asked questions

**What is a good reaction time?**
The average for adults is around 250 milliseconds. Under 200 ms is fast, and trained gamers often land between 150 and 180 ms on a mouse.

**Why did I get a "too soon" fault?**
You clicked while the box was still red. The green appears after a random 1–4 second wait, so guessing early always faults — wait for the color change.

**Does my device change my score?**
Yes, a little. Touchscreens and wireless mice add a few milliseconds of input delay, so compare scores taken on the same device for a fair result.

**How is the time measured?**
The timer starts the exact moment the box turns green and stops when your click registers, using your browser's high-resolution clock.
