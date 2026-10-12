---
title: "Free Days Until Calculator"
description: "Count down the days until any date — birthdays, holidays, deadlines. See the exact days left, weeks and days split, and the weekday it falls on."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Name your event, pick its date, and see exactly how many days are left from today — with a weeks-and-days split and the weekday the big day falls on.

<div class="tool-shell" id="duShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zM8 7.5V4h8v3.5l-4 4-4-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Days Until Calculator</h2>
<p>An exact countdown to any date — days left, weeks split &amp; the weekday.</p>
</div>
<button type="button" class="theme-toggle" id="duTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Name the event and pick its date</p>
<div class="setting">
<label for="duName">Event name</label>
<input type="text" id="duName" class="tool-input" style="max-width:260px;" placeholder="e.g. My birthday">
</div>
<div class="setting">
<label for="duDate">Event date</label>
<input type="date" id="duDate" class="tool-input" style="max-width:220px;">
<div class="hint">Pick any future date — the countdown is exact to the day.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or jump to a popular countdown</p>
<div class="settings-panel">
<div class="preset-row" id="duPresets">
<button type="button" class="preset-chip" data-preset="christmas">Christmas</button>
<button type="button" class="preset-chip" data-preset="newyear">New Year</button>
<button type="button" class="preset-chip" data-preset="30">+30 days</button>
<button type="button" class="preset-chip" data-preset="100">+100 days</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Start the countdown</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="duBtn">
<svg viewBox="0 0 24 24"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zM8 7.5V4h8v3.5l-4 4-4-4z"/></svg>
Calculate days left
</button>
<button type="button" class="btn-pro-outline" id="duClear">Clear</button>
</div>
<div class="results" id="duResults">
<p class="result-head">⏳ Your countdown</p>
<div class="result-summary" id="duResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — count down to as many events as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('duShell');
  ToolPro.themeToggle(shell, document.getElementById('duTheme'));
  var nameEl = document.getElementById('duName');
  var dateEl = document.getElementById('duDate');
  var resBox = document.getElementById('duResults');
  var out = document.getElementById('duResult');

  function fmt(d){
    var m = ('0' + (d.getMonth() + 1)).slice(-2);
    var day = ('0' + d.getDate()).slice(-2);
    return d.getFullYear() + '-' + m + '-' + day;
  }
  function todayStart(){
    var t = new Date(); t.setHours(0, 0, 0, 0); return t;
  }

  document.getElementById('duPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var today = todayStart();
    var target;
    if (chip.dataset.preset === 'christmas') {
      target = new Date(today.getFullYear(), 11, 25);
      if (target < today) target = new Date(today.getFullYear() + 1, 11, 25);
      nameEl.value = 'Christmas';
    } else if (chip.dataset.preset === 'newyear') {
      target = new Date(today.getFullYear(), 0, 1);
      if (target < today) target = new Date(today.getFullYear() + 1, 0, 1);
      nameEl.value = 'New Year';
    } else {
      target = new Date(today.getTime() + parseInt(chip.dataset.preset, 10) * 86400000);
      nameEl.value = 'My event';
    }
    dateEl.value = fmt(target);
    ToolPro.toast('Date set: ' + chip.textContent);
  });

  document.getElementById('duBtn').addEventListener('click', function(){
    var v = dateEl.value;
    if (!v) {
      out.innerHTML = '<p>Pick an event date first.</p>';
      resBox.classList.add('show');
      ToolPro.toast('Pick an event date first', 'err');
      return;
    }
    var p = v.split('-');
    var target = new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
    var today = todayStart();
    var name = nameEl.value.trim() || 'Your event';
    if (target < today) {
      out.innerHTML = '<p>That date has already passed — pick a future date to start a countdown.</p>';
      resBox.classList.add('show');
      ToolPro.toast('That date has already passed', 'err');
      return;
    }
    var days = Math.round((target - today) / 86400000);
    var weekday = target.toLocaleDateString('en-US', { weekday: 'long' });
    var niceDate = target.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    if (days === 0) {
      out.innerHTML = '<p style="font-size:1.6rem;"><strong>It\'s today!</strong></p>'
        + '<p>' + name + ' is today — ' + weekday + ', ' + niceDate + '. Enjoy the day!</p>';
    } else {
      var weeks = Math.floor(days / 7);
      var rem = days % 7;
      out.innerHTML = '<p style="font-size:2rem;"><strong>' + days.toLocaleString() + '</strong> day' + (days === 1 ? '' : 's') + ' to go</p>'
        + '<p>until <strong>' + name + '</strong> — ' + weekday + ', ' + niceDate + '.</p>'
        + '<p>That is <strong>' + weeks + '</strong> week' + (weeks === 1 ? '' : 's') + (rem ? ' and <strong>' + rem + '</strong> day' + (rem === 1 ? '' : 's') : '') + ' from today.</p>';
    }
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Countdown calculated', 'ok');
  });

  document.getElementById('duClear').addEventListener('click', function(){
    nameEl.value = '';
    dateEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Holidays and birthdays:** know exactly how long you have to shop, book, or plan.
- **Work deadlines:** turn a vague "due next quarter" into an exact number of days and weeks.
- **Goals and habits:** count down to a race day, exam, wedding, or the end of a savings challenge.
- **School and college:** track days until term starts, applications close, or graduation day.

## Frequently asked questions

**Does the countdown include today?**
No — it counts the full days remaining between today and the event date. If the event is tomorrow, it shows 1 day to go.

**What happens if I pick a date in the past?**
The tool will tell you the date has already passed instead of showing a negative countdown. Pick any future date and it works instantly.

**Which Christmas or New Year does the preset use?**
Always the next one coming up. If this year's date has passed, the preset automatically rolls over to next year's.
