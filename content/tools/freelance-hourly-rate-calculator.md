---
title: "Free Freelance Hourly Rate Calculator"
description: "Free freelance rate calculator: enter your target income, billable hours, and expenses to find the hourly rate you should charge."
date: 2026-09-29
draft: false
---

Most freelancers set their rate by guessing — then discover they're earning less than their old salary. This free calculator works backward from the income you actually want, adding taxes, expenses, and time off, so your rate covers the real cost of being your own boss.

<div class="tool-shell" id="frShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Freelance Hourly Rate Calculator</h2>
<p>Work backward from the income you want — taxes, expenses, and time off included.</p>
</div>
<button type="button" class="theme-toggle" id="frTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your targets &amp; costs</p>
<div class="settings-grid">
<div class="setting">
<label for="frIncome">Target annual take-home income</label>
<input type="number" id="frIncome" class="tool-input" placeholder="e.g. 60000" min="1">
</div>
<div class="setting">
<label for="frExpenses">Annual business expenses (tools, insurance, software…)</label>
<input type="number" id="frExpenses" class="tool-input" placeholder="e.g. 4000" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Work schedule &amp; taxes</p>
<div class="settings-panel">
<div class="preset-row" id="frPresets">
<button type="button" class="preset-chip" data-t="15">📋 Light taxes — 15%</button>
<button type="button" class="preset-chip active" data-t="25">🧾 Standard — 25%</button>
<button type="button" class="preset-chip" data-t="35">🏛️ High-tax region — 35%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="frHoursRange">Billable hours per week: <span class="val" id="frHoursVal">25</span></label>
<input type="range" id="frHoursRange" min="1" max="80" step="1" value="25">
<input type="number" id="frHours" class="tool-input" placeholder="e.g. 25" min="1" max="80" value="25" style="margin-top:.4rem">
</div>
<div class="setting">
<label for="frWeeksRange">Weeks worked per year (vacation excluded): <span class="val" id="frWeeksVal">48</span></label>
<input type="range" id="frWeeksRange" min="1" max="52" step="1" value="48">
<input type="number" id="frWeeks" class="tool-input" placeholder="e.g. 48" min="1" max="52" value="48" style="margin-top:.4rem">
</div>
<div class="setting">
<label for="frTaxRange">Estimated tax rate: <span class="val" id="frTaxVal">25%</span></label>
<input type="range" id="frTaxRange" min="0" max="60" step="0.5" value="25">
<input type="number" id="frTax" class="tool-input" placeholder="e.g. 25" min="0" max="60" step="0.5" value="25" style="margin-top:.4rem">
<div class="hint">Includes self-employment / income tax — not just the headline rate.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your rate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="frBtn">
<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
Calculate my rate
</button>
<button type="button" class="btn-pro-outline" id="frClear">Clear</button>
</div>
<div class="results" id="frResults">
<p class="result-head">💼 Your freelance rate</p>
<div class="result-summary" id="frSummary"></div>
<div id="frDetail"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Requote with confidence — model any income goal, privately in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('frShell');
  ToolPro.themeToggle(shell, document.getElementById('frTheme'));

  var hoursRange = document.getElementById('frHoursRange');
  var hoursVal = document.getElementById('frHoursVal');
  var hoursNum = document.getElementById('frHours');
  var weeksRange = document.getElementById('frWeeksRange');
  var weeksVal = document.getElementById('frWeeksVal');
  var weeksNum = document.getElementById('frWeeks');
  var taxRange = document.getElementById('frTaxRange');
  var taxVal = document.getElementById('frTaxVal');
  var taxNum = document.getElementById('frTax');
  var presets = document.getElementById('frPresets');
  var resBox = document.getElementById('frResults');

  ToolPro.bindSlider(hoursRange, hoursVal, function(v){ return v; });
  ToolPro.bindSlider(weeksRange, weeksVal, function(v){ return v; });
  ToolPro.bindSlider(taxRange, taxVal, function(v){ return (+v).toFixed(1) + '%'; });
  function pairRangeNum(range, num){
    range.addEventListener('input', function(){ num.value = range.value; });
    num.addEventListener('input', function(){
      if(num.value !== ''){ range.value = num.value; range.dispatchEvent(new Event('input')); }
    });
  }
  pairRangeNum(hoursRange, hoursNum);
  pairRangeNum(weeksRange, weeksNum);
  pairRangeNum(taxRange, taxNum);

  function setTax(t){
    taxNum.value = t; taxRange.value = t; taxRange.dispatchEvent(new Event('input'));
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', +c.dataset.t === +t);
    });
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setTax(chip.dataset.t);
    ToolPro.toast('Tax rate set to ' + chip.dataset.t + '%');
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    document.getElementById('frSummary').innerHTML = '<p style="margin:0">' + msg + '</p>';
    document.getElementById('frDetail').innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function calcRate() {
    var income = parseFloat(document.getElementById('frIncome').value);
    var hours = parseFloat(hoursNum.value);
    var weeks = parseFloat(weeksNum.value);
    var expenses = parseFloat(document.getElementById('frExpenses').value) || 0;
    var tax = parseFloat(taxNum.value);
    if (!income || income <= 0) { showError('Please enter your target annual take-home income.'); return; }
    if (!hours || hours <= 0 || hours > 80) { showError('Please enter billable hours between 1 and 80 per week.'); return; }
    if (!weeks || weeks < 1 || weeks > 52) { showError('Please enter working weeks between 1 and 52.'); return; }
    if (expenses < 0) { showError('Expenses cannot be negative.'); return; }
    if (isNaN(tax) || tax < 0 || tax >= 100) { showError('Please enter a tax rate between 0 and 99%.'); return; }
    var grossNeeded = (income + expenses) / (1 - tax / 100);
    var billableHours = hours * weeks;
    var rate = grossNeeded / billableHours;
    var dayRate = rate * 8;
    document.getElementById('frSummary').innerHTML =
      'Your hourly rate: <strong>' + fmt(rate) + '</strong>';
    document.getElementById('frDetail').innerHTML =
      '<p><strong>Gross revenue you need:</strong> ' + fmt(grossNeeded) + ' (covers income + expenses + taxes)</p>' +
      '<p><strong>Billable hours per year:</strong> ' + billableHours.toLocaleString() + '</p>' +
      '<p>Equivalent day rate (8 hrs): <strong>' + fmt(dayRate) + '</strong></p>' +
      '<div class="callout"><strong>Tip:</strong> non-billable time (admin, marketing, proposals) isn\'t in this number — keep billable hours realistic, not optimistic. Many freelancers round their rate up to the nearest $5 and quote project rates from it.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Rate calculated: ' + fmt(rate) + '/hr', 'ok');
  }

  document.getElementById('frBtn').addEventListener('click', calcRate);
  document.getElementById('frClear').addEventListener('click', function(){
    document.getElementById('frIncome').value = '';
    document.getElementById('frExpenses').value = '';
    hoursNum.value = 25; hoursRange.value = 25; hoursRange.dispatchEvent(new Event('input'));
    weeksNum.value = 48; weeksRange.value = 48; weeksRange.dispatchEvent(new Event('input'));
    setTax(25);
    resBox.classList.remove('show');
  });
})();
</script>

## Why freelancers undercharge

A salary includes paid leave, employer taxes, and benefits — freelancing doesn't. If your old job paid $30/hour, your freelance rate needs to be far higher to match the same take-home. Run the numbers before you quote.
