---
title: "Free CD Calculator"
description: "Free CD calculator: enter your deposit, APY, and term to see your certificate of deposit's maturity value, interest earned, and maturity date."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter the amount you plan to deposit into a certificate of deposit, the APY the bank is offering, and the term. The calculator shows exactly what the CD will be worth at maturity, how much interest you earn, and the calendar date the CD matures.

<div class="tool-shell" id="cdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>CD Calculator</h2>
<p>Know exactly what your CD will be worth at maturity — and the date it gets there.</p>
</div>
<button type="button" class="theme-toggle" id="cdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your deposit</p>
<div class="settings-grid">
<div class="setting">
<label for="cdDeposit">Deposit amount</label>
<input type="number" id="cdDeposit" class="tool-input" placeholder="e.g. 10000" min="0">
</div>
<div class="setting">
<label for="cdApy">APY (%)</label>
<input type="number" id="cdApy" class="tool-input" placeholder="e.g. 5" min="0" max="30" step="0.01">
<div class="hint">APY already includes compounding — it is the rate banks must advertise for CDs.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Term length</p>
<div class="settings-panel">
<div class="preset-row" id="cdPresets">
<button type="button" class="preset-chip" data-months="6">6 months</button>
<button type="button" class="preset-chip" data-months="12">12 months</button>
<button type="button" class="preset-chip" data-months="18">18 months</button>
<button type="button" class="preset-chip" data-months="24">24 months</button>
<button type="button" class="preset-chip" data-months="36">36 months</button>
<button type="button" class="preset-chip" data-months="60">60 months</button>
</div>
<div class="setting">
<label for="cdMonths">Term (months)</label>
<input type="number" id="cdMonths" class="tool-input" placeholder="e.g. 12" min="1" max="360" step="1" style="max-width:220px;">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your maturity value</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cdBtn">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/></svg>
Calculate CD value
</button>
<button type="button" class="btn-pro-outline" id="cdClear">Clear</button>
</div>
<div class="results" id="cdResults">
<p class="result-head">💿 Your CD at maturity</p>
<div class="result-summary" id="cdResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compare as many CD offers as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cdShell');
  ToolPro.themeToggle(shell, document.getElementById('cdTheme'));
  var depEl = document.getElementById('cdDeposit');
  var apyEl = document.getElementById('cdApy');
  var monthsEl = document.getElementById('cdMonths');
  var resBox = document.getElementById('cdResults');
  var out = document.getElementById('cdResult');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('cdPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    monthsEl.value = chip.dataset.months;
    document.querySelectorAll('#cdPresets .preset-chip').forEach(function(c){ c.classList.toggle('active', c === chip); });
    ToolPro.toast('Term set to ' + chip.dataset.months + ' months');
  });

  document.getElementById('cdBtn').addEventListener('click', function(){
    var deposit = parseFloat(depEl.value);
    var apy = parseFloat(apyEl.value);
    var months = parseInt(monthsEl.value, 10);
    if (isNaN(deposit) || deposit <= 0) { showError('Please enter a deposit amount above $0.'); return; }
    if (isNaN(apy) || apy < 0 || apy > 30) { showError('Please enter an APY between 0 and 30%.'); return; }
    if (!months || months < 1 || months > 360) { showError('Please enter a term between 1 and 360 months.'); return; }
    var maturity = deposit * Math.pow(1 + apy / 100, months / 12);
    var interest = maturity - deposit;
    var d = new Date();
    d.setMonth(d.getMonth() + months);
    var dateText = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    out.innerHTML = '<p style="font-size:1.4rem;">Maturity value: <strong>' + fmt(maturity) + '</strong></p>'
      + '<p>Interest earned: <strong>' + fmt(interest) + '</strong></p>'
      + '<p>Matures on: <strong>' + dateText + '</strong></p>'
      + '<p>Deposit: ' + fmt(deposit) + ' at ' + apy + '% APY for ' + months + ' months.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('CD maturity calculated', 'ok');
  });

  document.getElementById('cdClear').addEventListener('click', function(){
    depEl.value = ''; apyEl.value = ''; monthsEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Because APY already includes the effect of compounding, the math is a single step: **maturity value = deposit × (1 + APY)^(months ÷ 12)**. A $10,000 CD at 5% APY for 12 months grows to exactly $10,500. One catch the formula cannot show: withdrawing before maturity usually triggers an early-withdrawal penalty of 3–6 months of interest, which can erase your earnings — only lock up money you will not need during the term.

## Everyday uses

- **Comparing bank offers:** line up two CDs with different APYs and terms and see the actual dollar difference.
- **Building a CD ladder:** check what each rung pays so money matures on a regular schedule.
- **Saving for a dated goal:** match a CD's maturity date to a tuition bill, tax payment, or down payment deadline.

## Frequently asked questions

**What happens if I withdraw from a CD early?**
The bank charges an early-withdrawal penalty, typically 3–6 months of interest depending on the term. On a brand-new CD the penalty can even eat into your principal, so treat the maturity date as a real commitment.

**Is CD interest taxed?**
In the US, yes — CD interest is taxed as ordinary income in the year it is earned, even if you leave it in the CD until maturity. Your bank sends a 1099-INT for interest over $10.

**What is a CD ladder?**
Splitting your money across several CDs with staggered terms — say 1, 2, 3, 4, and 5 years. As each one matures you renew it at the longest term, so you get long-term rates while still having cash free up every year.
