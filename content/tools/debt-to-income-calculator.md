---
title: "Free Debt-to-Income (DTI) Calculator"
description: "Free DTI calculator: enter your gross monthly income and debt payments to get your debt-to-income ratio and what it means."
date: 2026-09-29
draft: false
---

Your **debt-to-income ratio (DTI)** is the number lenders check first — it's your monthly debt payments divided by your gross monthly income. A lower DTI means more borrowing power and less stress. This free calculator gives you your ratio and a plain-English rating.

<div class="tool-shell" id="dtiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Debt-to-Income Calculator</h2>
<p>Find the ratio lenders check first — and get a plain-English rating of where you stand.</p>
</div>
<button type="button" class="theme-toggle" id="dtiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your numbers</p>
<div class="settings-grid">
<div class="setting">
<label for="dtiIncome">Gross monthly income (before taxes)</label>
<input type="number" id="dtiIncome" class="tool-input" placeholder="e.g. 6000" min="1">
</div>
<div class="setting">
<label for="dtiDebts">Total monthly debt payments (mortgage/rent, loans, credit cards, car…)</label>
<input type="number" id="dtiDebts" class="tool-input" placeholder="e.g. 1800" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Try a scenario</p>
<div class="settings-panel">
<div class="preset-row" id="dtiPresets">
<button type="button" class="preset-chip" data-i="6000" data-d="1800">🏠 Renter couple — $6k / $1.8k</button>
<button type="button" class="preset-chip" data-i="4500" data-d="2000">🏡 Mortgaged — $4.5k / $2k</button>
<button type="button" class="preset-chip" data-i="8000" data-d="1500">💼 High earner — $8k / $1.5k</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="dtiDebtsRange">Debt payments slider: <span class="val" id="dtiDebtsVal">$0</span></label>
<input type="range" id="dtiDebtsRange" min="0" max="10000" step="50" value="0">
<div class="hint">Drag to see how paying down debt moves your ratio in real time.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your DTI rating</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="dtiBtn">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
Calculate my DTI
</button>
<button type="button" class="btn-pro-outline" id="dtiClear">Clear</button>
</div>
<div class="results" id="dtiResults">
<p class="result-head">⚖️ Your DTI result</p>
<div class="result-summary" id="dtiSummary"></div>
<div id="dtiDetail"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Recheck your ratio anytime — it all happens privately in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('dtiShell');
  ToolPro.themeToggle(shell, document.getElementById('dtiTheme'));

  var incomeNum = document.getElementById('dtiIncome');
  var debtsNum = document.getElementById('dtiDebts');
  var debtsRange = document.getElementById('dtiDebtsRange');
  var debtsVal = document.getElementById('dtiDebtsVal');
  var presets = document.getElementById('dtiPresets');
  var resBox = document.getElementById('dtiResults');

  ToolPro.bindSlider(debtsRange, debtsVal, function(v){ return '$' + (+v).toLocaleString(); });
  debtsRange.addEventListener('input', function(){
    debtsNum.value = debtsRange.value;
    resBox.classList.contains('show') && calcDti();
  });
  debtsNum.addEventListener('input', function(){
    if(debtsNum.value !== ''){ debtsRange.value = debtsNum.value; debtsRange.dispatchEvent(new Event('input')); }
  });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    incomeNum.value = chip.dataset.i;
    debtsNum.value = chip.dataset.d;
    debtsRange.value = chip.dataset.d;
    debtsRange.dispatchEvent(new Event('input'));
    calcDti();
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    document.getElementById('dtiSummary').innerHTML = '<p style="margin:0">' + msg + '</p>';
    document.getElementById('dtiDetail').innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function calcDti() {
    var income = parseFloat(incomeNum.value);
    var debts = parseFloat(debtsNum.value);
    if (!income || income <= 0) { showError('Please enter your gross monthly income.'); return; }
    if (isNaN(debts) || debts < 0) { showError('Please enter your monthly debt payments (0 is fine).'); return; }
    var dti = debts / income * 100;
    var rating, color, advice;
    if (dti < 20) {
      rating = 'Excellent'; color = '#0b6e4f';
      advice = 'Lenders love this. You have plenty of room for a mortgage or loan if you want one — keep it this way.';
    } else if (dti < 36) {
      rating = 'Good'; color = '#0b6e4f';
      advice = 'Healthy range. Most lenders are comfortable here. Keep saving and avoid new debt before big applications.';
    } else if (dti < 43) {
      rating = 'Fair — caution zone'; color = '#c9a227';
      advice = 'Many mortgage lenders cap here. Avoid taking on new debt and work on paying balances down before applying for credit.';
    } else if (dti < 50) {
      rating = 'High'; color = '#a31621';
      advice = 'Borrowing will be difficult and expensive. Prioritize paying down the highest-rate debt first.';
    } else {
      rating = 'Critical'; color = '#a31621';
      advice = 'Over half your income goes to debt. Consider a debt payoff plan or professional advice before borrowing anything new.';
    }
    document.getElementById('dtiSummary').innerHTML =
      'Your DTI: <strong style="color:' + color + '">' + dti.toFixed(1) + '%</strong> — ' + rating;
    document.getElementById('dtiDetail').innerHTML =
      '<div class="bar"><i style="width:' + Math.min(dti, 100).toFixed(1) + '%;background:' + color + '"></i></div>' +
      '<p>' + fmt(debts) + ' in debt payments ÷ ' + fmt(income) + ' gross income</p>' +
      '<div class="callout"><strong>What this means:</strong> ' + advice + '</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('DTI calculated: ' + dti.toFixed(1) + '%', 'ok');
  }

  document.getElementById('dtiBtn').addEventListener('click', calcDti);
  document.getElementById('dtiClear').addEventListener('click', function(){
    incomeNum.value = ''; debtsNum.value = '';
    debtsRange.value = 0; debtsRange.dispatchEvent(new Event('input'));
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    resBox.classList.remove('show');
  });
})();
</script>

## Front-end vs. back-end DTI

Lenders sometimes use two versions: **front-end** (housing costs only) and **back-end** (all debts, which is what this calculator does). Back-end is the stricter and more common test — aim to keep it under 36%.
