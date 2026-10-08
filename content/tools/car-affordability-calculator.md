---
title: "How Much Car Can I Afford? Free Calculator"
description: "Free car affordability calculator: enter your income and debts to find your affordable car price range using the 15% rule."
date: 2026-09-29
draft: false
---

Car dealers are happy to sell you a car you can't afford — this free calculator keeps them honest. Using the widely recommended **15% rule** (total car costs under 15% of take-home pay), it works backward from your income to a price range that won't wreck your budget.

<div class="tool-shell" id="caShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Car Affordability Calculator</h2>
<p>Find your real affordable price range with the 15% rule — before the dealer talks you up.</p>
</div>
<button type="button" class="theme-toggle" id="caTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your finances</p>
<div class="settings-grid">
<div class="setting">
<label for="caIncome">Monthly take-home income</label>
<input type="number" id="caIncome" class="tool-input" placeholder="e.g. 4000" min="1">
</div>
<div class="setting">
<label for="caDebts">Monthly debt payments (excluding any car payment)</label>
<input type="number" id="caDebts" class="tool-input" placeholder="e.g. 350" min="0">
</div>
<div class="setting">
<label for="caDown">Down payment / trade-in value</label>
<input type="number" id="caDown" class="tool-input" placeholder="e.g. 5000" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Loan settings</p>
<div class="settings-panel">
<div class="preset-row" id="caTerms">
<button type="button" class="preset-chip" data-term="36">3 years</button>
<button type="button" class="preset-chip" data-term="48">4 years</button>
<button type="button" class="preset-chip active" data-term="60">5 years</button>
<button type="button" class="preset-chip" data-term="72">6 years</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="caTerm">Loan term</label>
<select id="caTerm" class="tool-input">
<option value="36">3 years</option>
<option value="48">4 years</option>
<option value="60" selected>5 years</option>
<option value="72">6 years</option>
</select>
</div>
<div class="setting">
<label for="caRate">Expected APR <span class="val" id="caRateVal">7.0%</span></label>
<input type="range" id="caRate" min="0" max="30" step="0.5" value="7">
<div class="hint">Slide to match the rate your lender quoted you.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your price range</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="caBtn">
<svg viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
How much car can I afford?
</button>
<button type="button" class="btn-pro-outline" id="caClear">Clear</button>
</div>
<div class="results" id="caResults">
<p class="result-head">🚗 Your affordable price range</p>
<div class="result-summary" id="caResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — run as many car scenarios as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('caShell');
  ToolPro.themeToggle(shell, document.getElementById('caTheme'));

  var termSel = document.getElementById('caTerm');
  var rateRange = document.getElementById('caRate');
  var rateVal = document.getElementById('caRateVal');
  var resBox = document.getElementById('caResults');
  var out = document.getElementById('caResult');

  ToolPro.bindSlider(rateRange, rateVal, function(v){ return (+v).toFixed(1) + '%'; });

  document.getElementById('caTerms').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#caTerms .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    termSel.value = chip.dataset.term;
    ToolPro.toast('Loan term set to ' + chip.textContent.trim());
  });
  termSel.addEventListener('change', function(){
    document.querySelectorAll('#caTerms .preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.term === termSel.value);
    });
  });

  document.getElementById('caBtn').addEventListener('click', function(){
    var income = parseFloat(document.getElementById('caIncome').value);
    var debts = parseFloat(document.getElementById('caDebts').value) || 0;
    var down = parseFloat(document.getElementById('caDown').value) || 0;
    var term = parseInt(termSel.value, 10);
    var rate = parseFloat(rateRange.value);
    if (!income || income <= 0) { out.innerHTML = '<p>Please enter your monthly take-home income.</p>'; resBox.classList.add('show'); ToolPro.toast('Enter your monthly income first', 'err'); return; }
    if (debts < 0 || down < 0) { out.innerHTML = '<p>Amounts cannot be negative.</p>'; resBox.classList.add('show'); return; }
    function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
    // 15% of take-home is the max total car budget; reserve ~25% of that for insurance/fuel/maintenance
    var totalCarBudget = income * 0.15;
    var runningCosts = totalCarBudget * 0.25;
    var maxPayment = totalCarBudget - runningCosts;
    if (maxPayment <= 0) { out.innerHTML = '<p>Your current debts leave no room under the 15% rule. Reduce debts or increase the down payment first.</p>'; resBox.classList.add('show'); return; }
    var r = rate / 100 / 12, n = term;
    var maxLoan = rate === 0 ? maxPayment * n : maxPayment * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    var maxPrice = maxLoan + down;
    var comfyPrice = maxPrice * 0.8; // comfortable zone
    out.innerHTML =
      '<p><strong>Max monthly car budget (15% of take-home):</strong> ' + fmt(totalCarBudget) + '</p>' +
      '<p>Of that, ~' + fmt(runningCosts) + ' goes to insurance, fuel &amp; maintenance, leaving <strong>' + fmt(maxPayment) + '/month</strong> for the loan itself.</p>' +
      '<p style="font-size:1.3rem"><strong>Affordable price range: ' + fmt(comfyPrice) + ' – ' + fmt(maxPrice) + '</strong></p>' +
      '<p>The top of the range assumes a ' + term + '-month loan at ' + rate.toFixed(1) + '% APR with ' + fmt(down) + ' down. The bottom is the comfortable zone.</p>' +
      '<div class="callout"><strong>Tip:</strong> follow the 20/4/10 rule as a cross-check: at least 20% down, no more than a 4-year term, and total car costs under 10–15% of gross income. Shorter terms save thousands in interest.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Price range calculated', 'ok');
  });

  document.getElementById('caClear').addEventListener('click', function(){
    ['caIncome', 'caDebts', 'caDown'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>

## The 15% rule in plain English

Add up your loan payment, insurance, fuel, and maintenance. If the total is more than 15% of your take-home pay, the car is too much — no matter what the dealer says your monthly payment can be. A longer loan term lowers the payment but raises the total cost.
