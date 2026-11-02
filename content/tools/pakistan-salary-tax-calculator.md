---
title: "Free Pakistan Salary Tax Calculator 2026 (FBR Tax Slabs)"
description: "Free Pakistan salary tax calculator for Tax Year 2026 (FY 2025-26): enter annual taxable salary and see slab-wise FBR tax, marginal rate, effective rate, monthly deduction and take-home."
category: finance
date: 2026-11-02
draft: false
---
## How it works
Enter your annual taxable salary and any tax credits you expect. This calculator runs your income through the approximate Pakistan salaried tax slab by slab, shows exactly how much tax falls in each bracket, and gives you your total tax, marginal and effective rates, monthly deduction and take-home pay.
<div class="tool-shell" id="pstShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pakistan Salary Tax Calculator</h2>
<p>Slab-by-slab FBR tax for salaried individuals — Tax Year 2026.</p>
</div>
<button type="button" class="theme-toggle" id="pstTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your taxable income</p>
<div class="settings-grid">
<div class="setting">
<label for="pstIncome">Annual taxable salary (PKR)</label>
<input type="number" id="pstIncome" class="tool-input" placeholder="e.g. 2400000" min="0">
<div class="hint">Gross salary minus any exempt allowances and deductible contributions.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Adjustments (optional)</p>
<div class="settings-grid">
<div class="setting">
<label for="pstCredit">Tax credits / rebates (PKR per year)</label>
<input type="number" id="pstCredit" class="tool-input" placeholder="e.g. 0" min="0">
<div class="hint">Investment tax credits, Zakat or other rebates — subtracted directly from tax. Enter 0 if unsure.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your slab breakdown</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pstBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-10h-2v3.2l2.6 2.6-1.4 1.4-3.2-3.2V7z"/></svg>
Calculate my tax
</button>
<button type="button" class="btn-pro-outline" id="pstClear">Clear</button>
</div>
<div class="results" id="pstResults">
<p class="result-head">🧾 Your salary tax breakdown</p>
<div class="result-summary" id="pstSummary"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many salary scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('pstShell');
  ToolPro.themeToggle(shell, document.getElementById('pstTheme'));
  var resBox = document.getElementById('pstResults');
  var summary = document.getElementById('pstSummary');
  function fmt(n){ return 'Rs. ' + Math.round(n).toLocaleString('en-PK'); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  /* Approximate Pakistan salaried slabs — FY 2025-26 (Tax Year 2026). Verify with FBR. */
  var slabs = [
    { min: 0,          max: 600000,    rate: 0,     label: 'Up to Rs. 600,000' },
    { min: 600000,     max: 1200000,   rate: 0.025, label: 'Rs. 600,001 – 1,200,000' },
    { min: 1200000,    max: 2400000,   rate: 0.125, label: 'Rs. 1,200,001 – 2,400,000' },
    { min: 2400000,    max: 3600000,   rate: 0.20,  label: 'Rs. 2,400,001 – 3,600,000' },
    { min: 3600000,    max: 6000000,   rate: 0.25,  label: 'Rs. 3,600,001 – 6,000,000' },
    { min: 6000000,    max: 12000000,  rate: 0.325, label: 'Rs. 6,000,001 – 12,000,000' },
    { min: 12000000,   max: Infinity,  rate: 0.35,  label: 'Above Rs. 12,000,000' }
  ];
  document.getElementById('pstBtn').addEventListener('click', function(){
    var income = num('pstIncome');
    var credit = num('pstCredit');
    if (isNaN(income) || income < 0) { showError('Enter your annual taxable salary (0 or more).'); return; }
    if (isNaN(credit) || credit < 0) { showError('Tax credits must be 0 or more.'); return; }
    var total = 0, marginal = 0, rows = '';
    for (var i = 0; i < slabs.length; i++) {
      var s = slabs[i];
      var amt = Math.max(0, Math.min(income, s.max) - s.min);
      if (amt <= 0) continue;
      var tax = amt * s.rate;
      total += tax;
      marginal = s.rate;
      rows += '<tr><td>' + s.label + '</td><td style="text-align:right">' + fmt(amt) + '</td><td style="text-align:right">' + (s.rate*100) + '%</td><td style="text-align:right">' + fmt(tax) + '</td></tr>';
    }
    var netTax = Math.max(0, total - credit);
    var effRate = income > 0 ? (netTax / income * 100) : 0;
    var monthlyTax = netTax / 12;
    var takeHomeAnnual = income - netTax;
    summary.innerHTML =
      '<p style="font-size:1.35rem;">Total income tax: <strong style="color:#b45309">' + fmt(netTax) + '</strong> / year</p>'
      + '<p>Monthly tax deduction: <strong>' + fmt(monthlyTax) + '</strong></p>'
      + '<p>Take-home (annual): <strong>' + fmt(takeHomeAnnual) + '</strong> &nbsp;·&nbsp; per month: <strong>' + fmt(takeHomeAnnual/12) + '</strong></p>'
      + '<p>Marginal rate: <strong>' + (marginal*100) + '%</strong> &nbsp;·&nbsp; Effective rate: <strong>' + effRate.toFixed(2) + '%</strong></p>'
      + '<table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:0.9rem;"><thead><tr><th style="text-align:left;border-bottom:1px solid #ddd;padding:4px;">Slab</th><th style="text-align:right;border-bottom:1px solid #ddd;padding:4px;">Taxable in slab</th><th style="text-align:right;border-bottom:1px solid #ddd;padding:4px;">Rate</th><th style="text-align:right;border-bottom:1px solid #ddd;padding:4px;">Tax</th></tr></thead><tbody>'
      + rows + '</tbody></table>'
      + (credit > 0 ? '<p style="font-size:0.85rem;color:#666;margin-top:8px;">Includes ' + fmt(credit) + ' in tax credits/rebates.</p>' : '')
      + '<p style="font-size:0.85rem;color:#666;margin-top:10px;">Slabs are approximate FY 2025-26 (Tax Year 2026) salaried rates — verify your final liability with the FBR or a tax consultant.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Tax breakdown ready', 'ok');
  });
  document.getElementById('pstClear').addEventListener('click', function(){
    ['pstIncome','pstCredit'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Pakistan uses a progressive slab system — only the portion of your income inside each bracket is taxed at that bracket's rate. Your income is sliced from the bottom up: the first Rs. 600,000 is tax-free, the next Rs. 600,000 is taxed at 2.5%, the next Rs. 1.2M at 12.5%, and so on:
**Tax in slab = (income in that slab) × slab rate**
**Total tax = sum of tax in all slabs − tax credits**
Your marginal rate is the rate of the top slab your income reaches; your effective rate is total tax ÷ taxable income.
## Everyday uses
- **Salary negotiation:** know exactly how much of a raise you keep before accepting an offer.
- **Advance tax planning:** estimate your monthly withholding so there are no surprises at filing time.
- **Bonus vs. salary:** see how a one-time bonus pushes you into a higher slab and what it costs.
## Frequently asked questions
### Are these the official FBR 2026 slabs?
These are the approximate salaried-individual slabs for FY 2025-26 (Tax Year 2026). They are a planning estimate — FBR may revise rates, and exemptions, tax credits, surcharges and the difference between salaried and non-salaried rates can change your actual liability. Always confirm with the FBR website or a qualified tax consultant.
### What is the difference between marginal and effective rate?
Marginal rate is the tax rate on your last rupee of income (the top slab you reach). Effective rate is total tax divided by total income — it is always lower than the marginal rate because your earlier rupees were taxed at lower or zero rates.
### Do I pay tax on my provident fund and gratuity?
Recognised provident fund accumulations and eligible gratuity are generally exempt up to FBR limits, but employer contributions above thresholds and investment income inside the fund can be taxable. This calculator works on taxable income — subtract your exempt portions before entering the number, and check the current FBR limits for exact figures.
