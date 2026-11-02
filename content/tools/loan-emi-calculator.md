---
title: "Free Loan EMI Calculator — Monthly Installment & Total Interest"
description: "Free loan EMI calculator: compute your monthly installment, total interest payable and total payment for any loan amount, interest rate and tenure, with an amortization preview."
category: finance
date: 2026-11-03
draft: false
---
## How it works
Enter the loan amount, the annual interest rate and how long you will take to repay — this calculator works out your fixed monthly installment (EMI), the total interest you will pay over the life of the loan, and a month-by-month amortization preview so you can see how much of each early payment goes to interest versus principal.

<div class="tool-shell" id="emiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Loan EMI Calculator</h2>
<p>Monthly installment, total interest, and an amortization preview — in one click.</p>
</div>
<button type="button" class="theme-toggle" id="emiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Loan amount and rate</p>
<div class="settings-grid">
<div class="setting">
<label for="emiAmount">Loan amount ($)</label>
<input type="number" id="emiAmount" class="tool-input" placeholder="e.g. 250000" min="0">
</div>
<div class="setting">
<label for="emiRate">Annual interest rate (%)</label>
<input type="number" id="emiRate" class="tool-input" placeholder="e.g. 7.5" min="0" step="0.01">
<div class="hint">Use the annual rate your lender quotes — the calculator converts it to a monthly rate automatically.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Repayment tenure</p>
<div class="settings-grid">
<div class="setting">
<label for="emiTenure">Tenure</label>
<input type="number" id="emiTenure" class="tool-input" placeholder="e.g. 20" min="1" step="1">
</div>
<div class="setting">
<label for="emiUnit">Tenure unit</label>
<select id="emiUnit" class="tool-input">
<option value="years">Years</option>
<option value="months">Months</option>
</select>
<div class="hint">Pick years for a home loan, months for a short personal or car loan.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your repayment plan</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="emiBtn">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
Calculate EMI
</button>
<button type="button" class="btn-pro-outline" id="emiClear">Clear</button>
</div>
<div class="results" id="emiResults">
<p class="result-head">💳 Your loan repayment plan</p>
<div class="result-summary" id="emiSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many loan scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('emiShell');
  ToolPro.themeToggle(shell, document.getElementById('emiTheme'));
  var resBox = document.getElementById('emiResults');
  var summary = document.getElementById('emiSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('emiBtn').addEventListener('click', function(){
    var P = num('emiAmount');
    var annual = num('emiRate');
    var tenure = num('emiTenure');
    var unit = document.getElementById('emiUnit').value;
    if (isNaN(P) || P <= 0) { showError('Enter a loan amount greater than $0.'); return; }
    if (isNaN(annual) || annual < 0 || annual > 100) { showError('Enter an annual interest rate between 0% and 100%.'); return; }
    if (isNaN(tenure) || tenure <= 0 || tenure > 600) { showError('Enter a tenure greater than 0 (max 600 months / 50 years).'); return; }
    var n = unit === 'months' ? Math.round(tenure) : Math.round(tenure * 12);
    var r = annual / 100 / 12;
    var emi;
    if (r === 0) { emi = P / n; } else {
      var f = Math.pow(1 + r, n);
      emi = P * r * f / (f - 1);
    }
    var totalPay = emi * n;
    var totalInterest = totalPay - P;
    var bal = P, rows = '';
    var show = Math.min(6, n);
    for (var m = 1; m <= show; m++) {
      var interest = bal * r;
      var principal = emi - interest;
      bal = bal - principal;
      if (bal < 0) bal = 0;
      rows += '<tr><td>' + m + '</td><td>' + fmt(emi) + '</td><td>' + fmt(principal) + '</td><td>' + fmt(interest) + '</td><td>' + fmt(bal) + '</td></tr>';
    }
    var yearsLabel = unit === 'months' ? n + ' months' : (n / 12) + ' years';
    summary.innerHTML = '<p style="font-size:1.3rem;">Monthly EMI: <strong>' + fmt(emi) + '</strong> over ' + yearsLabel + '</p>'
      + '<p>Total interest payable: <strong style="color:#b45309">' + fmt(totalInterest) + '</strong></p>'
      + '<p>Total payment (principal + interest): <strong>' + fmt(totalPay) + '</strong></p>'
      + '<p>Principal borrowed: <strong>' + fmt(P) + '</strong></p>'
      + '<p style="margin-top:1rem;font-weight:600;">Amortization preview — first ' + show + ' months</p>'
      + '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;"><thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Month</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Payment</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Principal</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Interest</th><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>'
      + '<p style="font-size:0.85rem;color:#666;">Showing first ' + show + ' of ' + n + ' monthly payments. The interest portion shrinks and the principal portion grows each month.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('EMI calculation ready', 'ok');
  });
  document.getElementById('emiClear').addEventListener('click', function(){
    ['emiAmount','emiRate','emiTenure'].forEach(function(id){ document.getElementById(id).value = ''; });
    document.getElementById('emiUnit').value = 'years';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Every month the same fixed amount is due, but the split between interest and principal changes. The interest portion is the outstanding balance times the monthly rate (annual rate ÷ 12 ÷ 100); the rest of the EMI reduces the principal. The standard EMI formula is:
**EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)**
where P is the principal, r is the monthly interest rate, and n is the number of monthly installments. At a 0% rate the EMI is simply P ÷ n. Total interest is EMI × n − P, and total payment is EMI × n.
## Everyday uses
- **Home loan shopping:** compare two loan offers (different rate or tenure) side by side and see the lifetime interest difference.
- **Prepayment check:** shorten the tenure in the calculator to see how much interest a few extra payments per year would save.
- **Car or personal loan budgeting:** confirm the monthly EMI fits your budget before you sign, not after.
## Frequently asked questions
### What is the difference between flat rate and reducing balance?
A flat rate charges interest on the full original principal for the whole tenure, so the effective cost is much higher. This calculator uses the reducing-balance (diminishing) method that almost all banks and NBFCs quote — interest is charged only on the outstanding balance each month.
### Does a longer tenure reduce my EMI?
Yes, a longer tenure lowers the monthly EMI but raises the total interest paid over the life of the loan. Shortening the tenure usually saves far more in interest than it costs in extra monthly payment.
### Does this include processing fees, prepayment charges or taxes?
No. The result is the pure principal-and-interest schedule. Processing fees, stamp duty, prepayment penalties and any insurance bundled with the loan are extra and are not included here.
