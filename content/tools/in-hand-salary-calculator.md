---
title: "Free In-Hand Salary Calculator (Pakistan — Take-Home Pay)"
description: "Free in-hand salary calculator for Pakistan: enter your monthly gross, bonuses and deductions, and see your exact take-home pay after FBR income tax and provident fund."
category: finance
date: 2026-11-02
draft: false
---
## How it works
Enter your monthly gross salary, any annual bonuses, your provident fund deduction and other monthly deductions. This calculator works out your annual gross package, applies the approximate Pakistan salaried income-tax slabs, subtracts tax and deductions, and shows your real in-hand (take-home) pay per month and per year.
<div class="tool-shell" id="salShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>In-Hand Salary Calculator</h2>
<p>Pakistan take-home pay — tax, provident fund and deductions, all in one number.</p>
</div>
<button type="button" class="theme-toggle" id="salTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your salary package</p>
<div class="settings-grid">
<div class="setting">
<label for="salGross">Monthly gross salary (PKR)</label>
<input type="number" id="salGross" class="tool-input" placeholder="e.g. 150000" min="0">
<div class="hint">Your basic + allowances before any tax or deductions.</div>
</div>
<div class="setting">
<label for="salBonus">Bonuses / extra per year (PKR)</label>
<input type="number" id="salBonus" class="tool-input" placeholder="e.g. 100000" min="0">
<div class="hint">Annual bonus, Eid bonus or commissions — enter 0 if none.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Deductions</p>
<div class="settings-grid">
<div class="setting">
<label for="salPf">Provident fund deduction (% of basic)</label>
<input type="number" id="salPf" class="tool-input" placeholder="e.g. 10" min="0" max="50" step="0.5">
<div class="hint">Employee PF contribution — reduces your taxable income.</div>
</div>
<div class="setting">
<label for="salOther">Other deductions per month (PKR)</label>
<input type="number" id="salOther" class="tool-input" placeholder="e.g. 5000" min="0">
<div class="hint">Loan instalments, insurance, union fee etc. — subtracted after tax.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your take-home pay</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="salBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-10h-2v3.2l2.6 2.6-1.4 1.4-3.2-3.2V7z"/></svg>
Calculate take-home
</button>
<button type="button" class="btn-pro-outline" id="salClear">Clear</button>
</div>
<div class="results" id="salResults">
<p class="result-head">💰 Your take-home pay</p>
<div class="result-summary" id="salSummary"></div>
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
  var shell = document.getElementById('salShell');
  ToolPro.themeToggle(shell, document.getElementById('salTheme'));
  var resBox = document.getElementById('salResults');
  var summary = document.getElementById('salSummary');
  function fmt(n){ return 'Rs. ' + Math.round(n).toLocaleString('en-PK'); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  /* Approximate Pakistan salaried tax slabs (FY 2025-26 / Tax Year 2026) — verify with FBR */
  function pkTax(taxable){
    var t = Math.max(0, taxable);
    if (t <= 600000) return 0;
    if (t <= 1200000) return (t - 600000) * 0.025;
    if (t <= 2400000) return 15000 + (t - 1200000) * 0.125;
    if (t <= 3600000) return 165000 + (t - 2400000) * 0.20;
    if (t <= 6000000) return 405000 + (t - 3600000) * 0.25;
    if (t <= 12000000) return 1005000 + (t - 6000000) * 0.325;
    return 2955000 + (t - 12000000) * 0.35;
  }
  document.getElementById('salBtn').addEventListener('click', function(){
    var gross = num('salGross');
    var bonus = num('salBonus');
    var pfPct = num('salPf');
    var other = num('salOther');
    if (isNaN(gross) || gross <= 0) { showError('Enter your monthly gross salary (more than 0).'); return; }
    if (isNaN(bonus) || bonus < 0) { showError('Enter yearly bonuses (0 if you have none).'); return; }
    if (isNaN(pfPct) || pfPct < 0 || pfPct > 50) { showError('Provident fund must be between 0% and 50%.'); return; }
    if (isNaN(other) || other < 0) { showError('Other deductions must be 0 or more.'); return; }
    var annualGross = gross * 12 + bonus;
    var pfAnnual = gross * 12 * pfPct / 100;
    var taxable = annualGross - pfAnnual;
    var tax = pkTax(taxable);
    var otherAnnual = other * 12;
    var inHandAnnual = annualGross - tax - pfAnnual - otherAnnual;
    var inHandMonthly = inHandAnnual / 12;
    var effRate = annualGross > 0 ? (tax / annualGross * 100) : 0;
    summary.innerHTML =
      '<p style="font-size:1.35rem;">In-hand per month: <strong>' + fmt(inHandMonthly) + '</strong></p>'
      + '<p>In-hand per year: <strong>' + fmt(inHandAnnual) + '</strong></p>'
      + '<hr style="border:none;border-top:1px solid #ddd;margin:10px 0;">'
      + '<p>Annual gross package: <strong>' + fmt(annualGross) + '</strong></p>'
      + '<p>Provident fund (per year): <strong>' + fmt(pfAnnual) + '</strong></p>'
      + '<p>Income tax (approx, per year): <strong style="color:#b45309">' + fmt(tax) + '</strong></p>'
      + '<p>Other deductions (per year): <strong>' + fmt(otherAnnual) + '</strong></p>'
      + '<p>Effective tax rate on gross: <strong>' + effRate.toFixed(2) + '%</strong></p>'
      + '<p style="font-size:0.85rem;color:#666;margin-top:10px;">Tax slabs are approximate FY 2025-26 (Tax Year 2026) salaried rates — verify your final liability with the FBR or a tax consultant.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Take-home pay calculated', 'ok');
  });
  document.getElementById('salClear').addEventListener('click', function(){
    ['salGross','salBonus','salPf','salOther'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Your annual gross package is monthly salary × 12 plus bonuses. The provident fund contribution (basic × 12 × PF%) is subtracted first because it reduces your taxable income. The remaining taxable income is passed through the approximate Pakistan salaried slabs — each slab only taxes the portion of income that falls inside it, so your marginal rate is never applied to your whole salary:
**Tax = slab base + marginal rate × (taxable − slab lower bound)**
Finally, tax, PF and other (post-tax) deductions are subtracted from gross to give in-hand pay. Effective tax rate = income tax ÷ annual gross.
## Everyday uses
- **Job offer comparison:** quickly see which of two offers actually puts more cash in your pocket after tax and PF.
- **Bonus planning:** check how much of a bonus survives tax so you can plan big purchases realistically.
- **Budgeting:** base your monthly budget on true take-home, not on the gross figure on your offer letter.
## Frequently asked questions
### Are these the official FBR tax slabs?
The slabs used here are the approximate salaried-individual rates for FY 2025-26 (Tax Year 2026). They are a planning estimate only — FBR may update slabs, and exemptions, tax credits and surcharges can change your actual bill. Always confirm with the FBR website or a qualified tax consultant before filing.
### Does provident fund really reduce my tax?
Employee contributions to a recognised provident fund are generally part of your taxable income but may qualify for related tax treatment; this calculator subtracts PF from taxable income as a simplification. Your employer's PF contribution is treated separately. Exact deductibility depends on your fund's recognition status — check with your payroll office.
### Why is my in-hand lower than my company's "gross"?
Because gross includes money you never see in your bank account: income tax withheld at source, your provident fund contribution (which is yours but locked until retirement), and any loan/insurance deductions. In-hand is what actually lands in your account each month.
