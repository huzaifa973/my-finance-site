---
title: "Free Typing Speed Test"
description: "Test your typing speed in 60 seconds — live WPM, accuracy and character-by-character feedback as you type. Free, no sign-up, unlimited retries."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Type the paragraph below as fast and accurately as you can. The moment you start typing, a 60-second countdown begins — your words per minute and accuracy update live, and every character lights up green or red as you go.

<div class="tool-shell" id="tsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Typing Speed Test</h2>
<p>60 seconds, live WPM &amp; accuracy — how fast are your fingers?</p>
</div>
<button type="button" class="theme-toggle" id="tsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Read the paragraph</p>
<div id="tsText" style="border:1px solid rgba(127,127,127,.35);border-radius:10px;padding:12px 14px;font-size:1.05rem;line-height:1.8;letter-spacing:.2px;"></div>
<div class="hint">Green means correct, red means a mistake. The timer starts on your first keystroke.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Type it here</p>
<div class="setting">
<label for="tsInput">Your typing</label>
<textarea id="tsInput" class="tool-input" rows="4" style="width:100%;" placeholder="Start typing the paragraph above…" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea>
</div>
<p style="margin:6px 0 0;">Time left: <strong id="tsTime">60</strong>s · WPM: <strong id="tsWpm">0</strong> · Accuracy: <strong id="tsAcc">100%</strong></p>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your score &amp; go again</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tsRestart">
<svg viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>
Restart with a new paragraph
</button>
</div>
<div class="results" id="tsResults">
<p class="result-head">⌨️ Your final score</p>
<div class="result-summary" id="tsResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — test your speed as many times as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('tsShell');
  ToolPro.themeToggle(shell, document.getElementById('tsTheme'));
  var textBox = document.getElementById('tsText');
  var input = document.getElementById('tsInput');
  var timeEl = document.getElementById('tsTime');
  var wpmEl = document.getElementById('tsWpm');
  var accEl = document.getElementById('tsAcc');
  var resBox = document.getElementById('tsResults');
  var out = document.getElementById('tsResult');

  var paragraphs = [
    'The quick brown fox jumps over the lazy dog near the river bank. Every morning the village baker opens his shop early, and the smell of fresh bread drifts slowly through the quiet streets.',
    'Learning to type faster takes practice, patience, and a little bit of rhythm. Keep your eyes on the screen, relax your shoulders, and let your fingers learn where every key lives.',
    'A good day starts with a clear plan and a hot cup of tea. Write down the three most important tasks, finish the hardest one first, and the rest of the day will feel much lighter.'
  ];
  var pIdx = 0;
  var sample = '';
  var started = false;
  var finished = false;
  var startTime = 0;
  var timer = null;
  var LIMIT = 60;

  function renderSample(){
    var typed = input.value;
    var html = '';
    for (var i = 0; i < sample.length; i++) {
      var ch = sample[i] === ' ' ? '&nbsp;' : sample[i];
      if (i < typed.length) {
        if (typed[i] === sample[i]) html += '<span style="color:#1e9e57;">' + ch + '</span>';
        else html += '<span style="color:#d33;background:rgba(255,0,0,.14);border-radius:3px;">' + ch + '</span>';
      } else if (i === typed.length && !finished) {
        html += '<span style="text-decoration:underline;text-underline-offset:4px;">' + ch + '</span>';
      } else {
        html += '<span>' + ch + '</span>';
      }
    }
    textBox.innerHTML = html;
  }
  function counts(){
    var typed = input.value;
    var correct = 0;
    for (var i = 0; i < typed.length && i < sample.length; i++) {
      if (typed[i] === sample[i]) correct++;
    }
    return { typed: typed.length, correct: correct };
  }
  function elapsedSec(){
    return started ? (Date.now() - startTime) / 1000 : 0;
  }
  function updateStats(){
    var c = counts();
    var el = Math.max(elapsedSec(), 0.5);
    var wpm = Math.round((c.correct / 5) / (el / 60));
    var acc = c.typed ? Math.round(c.correct / c.typed * 100) : 100;
    wpmEl.textContent = wpm;
    accEl.textContent = acc + '%';
    return { wpm: wpm, acc: acc, typed: c.typed, correct: c.correct };
  }
  function finish(reason){
    if (finished) return;
    finished = true;
    clearInterval(timer);
    input.disabled = true;
    var s = updateStats();
    var el = Math.round(elapsedSec());
    out.innerHTML = '<p style="font-size:1.5rem;"><strong>' + s.wpm + '</strong> WPM · <strong>' + s.acc + '%</strong> accuracy</p>'
      + '<p>You typed <strong>' + s.typed + '</strong> characters (' + s.correct + ' correct) in <strong>' + el + '</strong> seconds' + (reason === 'done' ? ' — you finished the whole paragraph!' : ' before the clock ran out.') + '</p>'
      + '<p>Average adult typing speed is about 40 WPM. Hit restart and try to beat your score.</p>';
    renderSample();
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Test complete: ' + s.wpm + ' WPM', 'ok');
  }
  function startTimer(){
    started = true;
    startTime = Date.now();
    timer = setInterval(function(){
      var left = Math.max(0, LIMIT - elapsedSec());
      timeEl.textContent = Math.ceil(left);
      updateStats();
      if (left <= 0) finish('time');
    }, 200);
  }
  function reset(next){
    clearInterval(timer);
    if (next) pIdx = (pIdx + 1) % paragraphs.length;
    sample = paragraphs[pIdx];
    input.value = '';
    input.disabled = false;
    started = false;
    finished = false;
    timeEl.textContent = LIMIT;
    wpmEl.textContent = '0';
    accEl.textContent = '100%';
    resBox.classList.remove('show');
    renderSample();
  }

  input.addEventListener('input', function(){
    if (finished) return;
    if (!started && input.value.length > 0) startTimer();
    renderSample();
    updateStats();
    if (input.value.length >= sample.length) finish('done');
  });
  input.addEventListener('paste', function(e){ e.preventDefault(); ToolPro.toast('Pasting is off — type it out!', 'err'); });
  document.getElementById('tsRestart').addEventListener('click', function(){
    reset(true);
    input.focus();
    ToolPro.toast('New paragraph loaded');
  });
  reset(false);
})();
</script>

## Everyday uses

- **Job readiness:** many admin and data-entry jobs ask for 40+ WPM — check your number before you apply.
- **Students:** faster, accurate typing makes essays and exam prep noticeably less painful.
- **Daily practice:** one 60-second test a day steadily builds speed without boring drills.
- **Friendly contests:** challenge family or coworkers and see who really types fastest.

## Frequently asked questions

**How is WPM calculated?**
Standard method: every 5 correct characters count as one "word," divided by the time in minutes. Only correct characters count, so accuracy matters as much as raw speed.

**Why does the timer start on my first keystroke?**
So you can read the paragraph and get comfortable first. The 60 seconds only begin when you actually start typing.

**What is a good typing speed?**
Around 40 WPM is the adult average, 60–80 WPM is fast, and trained typists exceed 100 WPM. Regular short practice sessions like this one are the quickest way to improve.
