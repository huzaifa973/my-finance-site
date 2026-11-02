---
title: "Free RD Calculator — Recurring Deposit Maturity"
description: "Free RD calculator: estimate recurring deposit maturity from your monthly installment, the annual interest rate and tenure. Shows total invested, interest earned and maturity value with quarterly compounding."
category: finance
date: 2026-11-03
draft: false
---
## How it works
A recurring deposit (RD) lets you put the same fixed amount into a bank or post office every month for a chosen tenure, earning a fixed rate with interest compounded quarterly — the default for Indian RDs. Enter your monthly installment, the annual interest rate and the tenure in years and months — this calculator grows each installment month by month with quarterly compounding and shows your maturity value, total amount invested and total interest earned.
<div class="tool-shell" id="rdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .89-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>RD Calculator</h2>
<p>Same amount every month, fixed rate, quarterly compounding — see what it becomes.</p>
</div>
<button type="button" class="theme-toggle" id="rdTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — runs in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Your monthly installment and rate</p>
<div class="settings-grid">
<div class="setting">
<label for="rdInstallment">Monthly installment (₹)</label>
<input type="number" id="rdInstallment" class="tool-input" placeholder="e.g. 5000" min="0" step="100">
<div class="hint">Most bank RDs start at ₹100–₹500 a month with no upper cap.</div>
</div>
<div class="setting">
<label for="rdRate">Annual interest rate (%)</label>
<input type="number" id="rdRate" class="tool-input" placeholder="e.g. 6.5" min="0" max="20" step="0.01">
<div class="hint">RD rates track FD rates at the same bank; senior citizens usually get 0.25–0.5% extra.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Tenure</p>
<div class="settings-grid">
<div class="setting">
<label for="rdYears">Years</label>
<input type="number" id="rdYears" class="tool-input" placeholder="e.g. 1" min="0" max="10" step="1">
</div>
<div class="setting">
<label for="rdMonths">Months</label>
<input type="number" id="rdMonths" class="tool-input" placeholder="e.g. 6" min="0" max="11" step="1">
<div class="hint">RD tenures typically range from 6 months to 10 years, in monthly increments.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your maturity</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rdBtn">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
Calculate RD maturity
</button>
<button type="button" class="btn-pro-outline" id="rdClear">Clear</button>
</div>
<div class="results" id="rdResults">
<p class="result-head">🏦 Your RD maturity</p>
<div class="result-summary" id="rdSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('rdShell');
  ToolPro.themeToggle(shell, document.getElementById('rdTheme'));
  var resBox = document.getElementById('rdResults');
  var summary = document.getElementById('rdSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-₹' : '₹') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('rdBtn').addEventListener('click', function(){
    var R = num('rdInstallment');
    var rate = num('rdRate');
    var years = num('rdYears');
    var months = num('rdMonths');
    if (isNaN(R) || R <= 0) { showError('Enter a monthly installment greater than ₹0.'); return; }
    if (isNaN(rate) || rate < 0 || rate > 20) { showError('Enter a valid annual interest rate between 0% and 20%.'); return; }
    if (isNaN(years) || years < 0 || years > 10) { showError('Enter years between 0 and 10.'); return; }
    if (isNaN(months) || months < 0 || months > 11) { showError('Enter months between 0 and 11.'); return; }
    var totalMonths = Math.round(years * 12 + months);
    if (totalMonths < 1) { showError('Enter a tenure — at least one month.'); return; }
    var quarterlyRate = rate / 100 / 4;
    var monthlyFactor = Math.pow(1 + quarterlyRate, 1 / 3);
    var balance = 0, invested = 0;
    for (var m = 1; m <= totalMonths; m++) {
      balance = balance * monthlyFactor + R;
      invested += R;
    }
    var interest = balance - invested;
    summary.innerHTML = '<p style="font-size:1.3rem;margin:0 0 0.5rem;">Maturity value: <strong>' + fmt(balance) + '</strong></p>'
      + '<p>Total invested: <strong>' + fmt(invested) + '</strong> (' + totalMonths + ' installments of ' + fmt(R) + ')</p>'
      + '<p>Total interest earned: <strong style="color:#0b6e4f">' + fmt(interest) + '</strong> (quarterly compounding)</p>'
      + '<p style="font-size:0.85rem;opacity:0.75;margin-top:0.75rem;">Each installment grows at the quarterly rate converted to an equivalent monthly factor, so interest compounds every quarter as it does in a real RD. Interest is taxable at your slab rate; TDS rules for FDs also apply to RD interest.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('RD maturity ready', 'ok');
  });
  document.getElementById('rdClear').addEventListener('click', function(){
    var ids = ['rdInstallment','rdRate','rdYears','rdMonths'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
In an RD, the same amount is deposited every month and each deposit earns interest from the month it is made until maturity. Indian RDs compound interest quarterly, so the annual rate is divided by 4, and that quarterly rate is converted into an equivalent monthly growth factor:
**Monthly growth factor = (1 + r/4)^(1/3), where r = annual rate**
Each month: **new balance = balance × monthly factor + monthly installment**
After the final month, the balance is your maturity value. "Total invested" is simply installment × number of months, and "total interest" is maturity minus invested. Early installments earn interest for many more months than late ones, which is why longer tenures disproportionately boost the final amount.
## Everyday uses
- **Forced saving:** set an affordable monthly amount (₹2,000–₹10,000) and see how it builds over 1–3 years for a vacation, gadget or emergency buffer.
- **RD vs SIP comparison:** compare a guaranteed RD maturity at 6.5% against a market-linked SIP at an expected 10–12% for the same monthly outlay.
- **Tenure tuning:** test whether a 12-month or 24-month RD at a slightly higher rate beats several short RDs you would keep renewing.
## Frequently asked questions
### How is RD interest compounded?
Almost all Indian bank and post office RDs compound interest quarterly. The nominal annual rate is divided by 4, applied each quarter, and converted to a monthly equivalent for the purpose of monthly deposits. A few banks offer different schedules, so confirm the compounding frequency in your RD advice.
### Is there a minimum or maximum for RDs?
Minimums are low — often ₹100 (post office) or ₹500–₹1,000 (banks) per month, with no upper limit. Tenures usually start at 6 months and go up to 10 years in monthly steps. A missed installment typically attracts a small penalty and can default the account if repeated.
### Can I withdraw an RD before maturity?
Yes, but with a penalty — usually 0.5–1% lower than the rate for the actual tenure held, and some banks charge a prepayment fee. Unlike FDs, you cannot partially withdraw an RD; it must be closed entirely. Some banks offer loan/overdraft facilities against the RD balance instead.
