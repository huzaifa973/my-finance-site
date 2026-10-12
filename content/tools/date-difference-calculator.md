---
title: "Free Date Difference Calculator"
description: "Find the exact number of days between two dates — with a years, months and days breakdown, total weeks, and an option to include the end date."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Pick any start date and end date and get the exact gap between them: total days, a years-months-days breakdown, and the number of full weeks — handy for deadlines, contracts, trips, and project timelines.

<div class="tool-shell" id="ddShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Date Difference Calculator</h2>
<p>Exact days between two dates — with a years, months &amp; days breakdown.</p>
</div>
<button type="button" class="theme-toggle" id="ddTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Pick the start and end dates</p>
<div class="setting">
<label for="ddStart">Start date</label>
<input type="date" id="ddStart" class="tool-input" style="max-width:220px;">
</div>
<div class="setting">
<label for="ddEnd">End date</label>
<input type="date" id="ddEnd" class="tool-input" style="max-width:220px;">
</div>
<div class="setting">
<label><input type="checkbox" id="ddInclude"> Include end date (+1 day)</label>
<div class="hint">Turn this on when both the first and last day count — for example, hotel nights or leave days.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or use a quick preset range</p>
<div class="settings-panel">
<div class="preset-row" id="ddPresets">
<button type="button" class="preset-chip" data-preset="30">Last 30 days</button>
<button type="button" class="preset-chip" data-preset="90">Last 90 days</button>
<button type="button" class="preset-chip" data-preset="ytd">This year so far</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate the difference</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ddBtn">
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
Calculate difference
</button>
<button type="button" class="btn-pro-outline" id="ddClear">Clear</button>
</div>
<div class="results" id="ddResults">
<p class="result-head">📅 Date difference</p>
<div class="result-summary" id="ddResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compare as many date ranges as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ddShell');
  ToolPro.themeToggle(shell, document.getElementById('ddTheme'));
  var startEl = document.getElementById('ddStart');
  var endEl = document.getElementById('ddEnd');
  var incEl = document.getElementById('ddInclude');
  var resBox = document.getElementById('ddResults');
  var out = document.getElementById('ddResult');

  function fmt(d){
    var m = ('0' + (d.getMonth() + 1)).slice(-2);
    var day = ('0' + d.getDate()).slice(-2);
    return d.getFullYear() + '-' + m + '-' + day;
  }
  function parse(v){
    var p = v.split('-');
    return new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
  }

  document.getElementById('ddPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var start;
    if (chip.dataset.preset === 'ytd') {
      start = new Date(today.getFullYear(), 0, 1);
    } else {
      start = new Date(today.getTime() - parseInt(chip.dataset.preset, 10) * 86400000);
    }
    startEl.value = fmt(start);
    endEl.value = fmt(today);
    ToolPro.toast('Range set: ' + chip.textContent);
  });

  document.getElementById('ddBtn').addEventListener('click', function(){
    if (!startEl.value || !endEl.value) {
      out.innerHTML = '<p>Pick both a start date and an end date first.</p>';
      resBox.classList.add('show');
      ToolPro.toast('Pick both dates first', 'err');
      return;
    }
    var s = parse(startEl.value);
    var en = parse(endEl.value);
    if (en < s) {
      out.innerHTML = '<p>The end date is before the start date — swap them and try again.</p>';
      resBox.classList.add('show');
      ToolPro.toast('End date is before start date', 'err');
      return;
    }
    var eff = new Date(en.getTime());
    if (incEl.checked) eff = new Date(eff.getTime() + 86400000);
    var totalDays = Math.round((eff - s) / 86400000);

    var years = eff.getFullYear() - s.getFullYear();
    var months = eff.getMonth() - s.getMonth();
    var days = eff.getDate() - s.getDate();
    if (days < 0) {
      months -= 1;
      var prevMonthLen = new Date(eff.getFullYear(), eff.getMonth(), 0).getDate();
      days += prevMonthLen;
    }
    if (months < 0) { years -= 1; months += 12; }

    var weeks = Math.floor(totalDays / 7);
    var remDays = totalDays % 7;

    out.innerHTML = '<p style="font-size:1.4rem;"><strong>' + totalDays.toLocaleString() + '</strong> total day' + (totalDays === 1 ? '' : 's') + '</p>'
      + '<p>That is <strong>' + years + '</strong> year' + (years === 1 ? '' : 's') + ', <strong>' + months + '</strong> month' + (months === 1 ? '' : 's') + ' and <strong>' + days + '</strong> day' + (days === 1 ? '' : 's') + '.</p>'
      + '<p>Or <strong>' + weeks.toLocaleString() + '</strong> full week' + (weeks === 1 ? '' : 's') + (remDays ? ' plus <strong>' + remDays + '</strong> day' + (remDays === 1 ? '' : 's') : '') + '.</p>'
      + (incEl.checked ? '<p>End date included in the count.</p>' : '');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Difference calculated', 'ok');
  });

  document.getElementById('ddClear').addEventListener('click', function(){
    startEl.value = '';
    endEl.value = '';
    incEl.checked = false;
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Project deadlines:** count the exact working window between a start date and a delivery date.
- **Travel planning:** work out how many days a trip, visa, or rental period actually covers.
- **Contracts and billing:** measure subscription periods, notice periods, and payment terms in days and weeks.
- **Personal milestones:** find the days between two life events, or how long a habit streak has really lasted.

## Frequently asked questions

**Does the calculator count both the first and last day?**
By default it counts the days between the two dates, not including the end date. Tick "Include end date" to add one extra day when both the starting and ending day should count.

**How are leap years handled?**
Automatically. The calculation uses real calendar dates, so February 29 in leap years is counted exactly like any other day.

**Can I compare dates far in the past or future?**
Yes — the date pickers accept any year, so you can measure anything from historical spans to long-term plans decades ahead.
