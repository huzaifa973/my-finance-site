---
title: "Free Salary Raise Calculator"
description: "Free salary raise calculator: see your new salary after a percentage raise, or find the raise percentage you need to hit a target pay."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your current annual salary, then either type the raise percentage you were offered or the salary you want to reach — this calculator shows your new annual pay, the increase in dollars, and what the raise means for your monthly and biweekly paychecks.

<div class="tool-shell" id="raiseShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.54 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Salary Raise Calculator</h2>
<p>Turn a raise percentage into real paycheck numbers — or find the raise you need to ask for.</p>
</div>
<button type="button" class="theme-toggle" id="raiseTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your current salary</p>
<div class="setting">
<label for="raiseCurrent">Current annual salary ($)</label>
<input type="number" id="raiseCurrent" class="tool-input" placeholder="e.g. 60000" min="0" step="any" style="max-width:240px;">
<div class="hint">Your gross annual pay, before tax.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> The raise</p>
<div class="settings-panel">
<div class="setting">
<label for="raiseMode">I know</label>
<select id="raiseMode" class="tool-input" style="max-width:300px;">
<option value="pct">The raise percentage</option>
<option value="target">The salary I want to reach</option>
</select>
</div>
<div class="setting" id="raisePctWrap">
<label for="raisePct">Raise (%)</label>
<input type="number" id="raisePct" class="tool-input" placeholder="e.g. 10" step="any" style="max-width:220px;">
</div>
<div class="setting" id="raiseTargetWrap" style="display:none;">
<label for="raiseTarget">Target annual salary ($)</label>
<input type="number" id="raiseTarget" class="tool-input" placeholder="e.g. 66000" min="0" step="any" style="max-width:220px;">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your new pay</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="raiseBtn">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.54 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
Calculate raise
</button>
<button type="button" class="btn-pro-outline" id="raiseClear">Clear</button>
</div>
<div class="results" id="raiseResults">
<p class="result-head">💵 Your new salary</p>
<div class="result-summary" id="raiseResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — test as many raise scenarios as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('raiseShell');
  ToolPro.themeToggle(shell, document.getElementById('raiseTheme'));
  var resBox = document.getElementById('raiseResults');
  var out = document.getElementById('raiseResult');
  var modeEl = document.getElementById('raiseMode');
  var pctWrap = document.getElementById('raisePctWrap');
  var targetWrap = document.getElementById('raiseTargetWrap');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function syncMode(){
    var isPct = modeEl.value === 'pct';
    pctWrap.style.display = isPct ? '' : 'none';
    targetWrap.style.display = isPct ? 'none' : '';
  }
  modeEl.addEventListener('change', syncMode);
  syncMode();

  document.getElementById('raiseBtn').addEventListener('click', function(){
    var curRaw = document.getElementById('raiseCurrent').value;
    var current = parseFloat(curRaw);
    if (curRaw === '' || isNaN(current) || current <= 0) { showError('Enter a current annual salary greater than $0.'); return; }
    var newSalary, pctIncrease;
    if (modeEl.value === 'pct') {
      var pctRaw = document.getElementById('raisePct').value;
      pctIncrease = parseFloat(pctRaw);
      if (pctRaw === '' || isNaN(pctIncrease)) { showError('Enter the raise percentage.'); return; }
      newSalary = current * (1 + pctIncrease / 100);
      if (newSalary <= 0) { showError('That percentage makes the salary $0 or less — enter a raise above -100%.'); return; }
    } else {
      var targetRaw = document.getElementById('raiseTarget').value;
      newSalary = parseFloat(targetRaw);
      if (targetRaw === '' || isNaN(newSalary) || newSalary <= 0) { showError('Enter a target annual salary greater than $0.'); return; }
      pctIncrease = (newSalary - current) / current * 100;
    }
    var increase = newSalary - current;
    out.innerHTML = '<p style="font-size:1.35rem;">New salary: <strong>' + fmt(newSalary) + '</strong> per year</p>'
      + '<p>Increase: <strong>' + fmt(increase) + '</strong> (' + pctIncrease.toFixed(2) + '%)</p>'
      + '<p>New monthly pay: <strong>' + fmt(newSalary / 12) + '</strong> &middot; New biweekly pay: <strong>' + fmt(newSalary / 26) + '</strong></p>'
      + '<p>For comparison, your current monthly pay is ' + fmt(current / 12) + '.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Raise calculated', 'ok');
  });

  document.getElementById('raiseClear').addEventListener('click', function(){
    document.getElementById('raiseCurrent').value = '';
    document.getElementById('raisePct').value = '';
    document.getElementById('raiseTarget').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

A percentage raise multiplies your salary: **new salary = current × (1 + raise % ÷ 100)**. Working the other way, the raise needed to reach a target is **(target − current) ÷ current × 100**. The paycheck figures simply spread the annual salary out: monthly is the annual figure divided by 12, and biweekly is divided by 26 (26 two-week pay periods in a year).

## Everyday uses

- **Annual review prep:** arrive knowing exactly what a 3%, 5%, or 10% raise is worth in real paycheck terms.
- **Counter-offers:** set a target salary and instantly see the percentage increase you need to ask for.
- **Job offers:** compare a new offer against your current pay as both an annual figure and a per-paycheck difference.
- **Budgeting:** see how much extra lands in each monthly budget after a raise, before lifestyle creep spends it for you.

## Frequently asked questions

**Q: Is a 3% raise actually a raise?**
A: Only if it beats inflation. If prices rose 3.5% this year, a 3% raise is a small pay cut in real terms. Compare your raise percentage with the current inflation rate to see whether you are genuinely ahead.

**Q: What is the difference between monthly and biweekly pay here?**
A: Monthly pay is the annual salary divided by 12. Biweekly pay is divided by 26, because a year has 52 weeks and biweekly means every two weeks. Twice a year, a biweekly schedule produces three paychecks in one month.

**Q: Should I negotiate in percentages or dollar amounts?**
A: Percentages frame the conversation (a 10% raise sounds standard at any level), but dollars decide your budget. Run both through this calculator so you know what the percentage being discussed is actually worth per paycheck.
