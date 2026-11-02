---
title: "Free Gratuity Calculator — India (15/26 × Last Drawn Salary × Years)"
description: "Free gratuity calculator for India: estimate your gratuity using 15/26 × last drawn salary (basic + DA) × years of service, with the ₹20 lakh tax-free cap and 5-year eligibility rule."
category: finance
date: 2026-11-03
draft: false
---
## How it works
Gratuity is a retirement benefit paid by your employer when you leave after 5 or more years of continuous service. For employees covered under the Payment of Gratuity Act, it is calculated as 15 days of your last drawn salary (basic + dearness allowance) for every completed year of service, based on a 26-working-day month — and the tax-free amount is capped at ₹20 lakh. Enter your last drawn monthly salary and years of service — this calculator applies the standard 15/26 formula, rounds up any partial year over 6 months, applies the cap, and shows your estimated gratuity.
<div class="tool-shell" id="grtShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Gratuity Calculator (India)</h2>
<p>15 days of last drawn salary per year of service — the statutory formula, capped.</p>
</div>
<button type="button" class="theme-toggle" id="grtTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your salary and service</p>
<div class="settings-grid">
<div class="setting">
<label for="grtSalary">Last drawn monthly salary — basic + DA (₹)</label>
<input type="number" id="grtSalary" class="tool-input" placeholder="e.g. 50000" min="0" step="1000">
<div class="hint">Use basic salary plus dearness allowance only — HRA, special allowances and bonuses are excluded.</div>
</div>
<div class="setting">
<label for="grtYears">Years of continuous service</label>
<input type="number" id="grtYears" class="tool-input" placeholder="e.g. 7.5" min="0" max="50" step="0.1">
<div class="hint">A partial year of 6 months or more counts as a full year. Gratuity is generally payable only after 5 years.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Confirm the details</p>
<div class="settings-grid">
<div class="setting" style="grid-column:1/-1;">
<div class="hint" style="margin:0;">This calculator uses the formula for employees covered under the Payment of Gratuity Act, 1972: <strong>Gratuity = Last drawn salary × 15/26 × years of service</strong>. The tax-free amount is capped at ₹20 lakh. If you are not covered by the Act, your employer may use a half-month per year formula instead — check your offer letter or HR policy.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your gratuity</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="grtBtn">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
Calculate my gratuity
</button>
<button type="button" class="btn-pro-outline" id="grtClear">Clear</button>
</div>
<div class="results" id="grtResults">
<p class="result-head">🎁 Your estimated gratuity</p>
<div class="result-summary" id="grtSummary"></div>
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
  var shell = document.getElementById('grtShell');
  ToolPro.themeToggle(shell, document.getElementById('grtTheme'));
  var resBox = document.getElementById('grtResults');
  var summary = document.getElementById('grtSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-₹' : '₹') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('grtBtn').addEventListener('click', function(){
    var salary = num('grtSalary');
    var yearsRaw = num('grtYears');
    if (isNaN(salary) || salary <= 0) { showError('Enter your last drawn monthly salary (basic + DA), greater than ₹0.'); return; }
    if (isNaN(yearsRaw) || yearsRaw <= 0 || yearsRaw > 50) { showError('Enter years of service between 0 and 50.'); return; }
    var fullYears = Math.floor(yearsRaw);
    var fraction = yearsRaw - fullYears;
    var yearsForCalc = fullYears + (fraction >= 0.5 ? 1 : 0);
    var raw = salary * 15 / 26 * yearsForCalc;
    var cap = 2000000;
    var payable = Math.min(raw, cap);
    var eligible = yearsForCalc >= 5;
    var eligibilityNote = eligible ? '' : '<p style="color:#b45309;margin:0.5rem 0 0;">Note: Gratuity is generally payable only after 5 continuous years of service (the 5-year rule is waived on death or disablement). The amount below is an estimate of what would be payable once eligible.</p>';
    var capNote = raw > cap ? '<p style="color:#b45309;margin:0.5rem 0 0;">Note: The uncapped amount (' + fmt(raw) + ') exceeds the ₹20 lakh statutory/tax-free limit. Amounts above ₹20 lakh may be paid as ex-gratia at the employer\'s discretion and are taxable.</p>' : '';
    summary.innerHTML = '<p style="font-size:1.3rem;margin:0 0 0.5rem;">Estimated gratuity payable: <strong>' + fmt(payable) + '</strong></p>'
      + '<p>Last drawn salary (basic + DA): <strong>' + fmt(salary) + '</strong> / month</p>'
      + '<p>Years counted for gratuity: <strong>' + yearsForCalc + '</strong> (you entered ' + yearsRaw + '; ' + (fraction >= 0.5 ? 'partial year ≥6 months rounded up' : 'partial year &lt;6 months ignored') + ')</p>'
      + '<p>Formula applied: ' + fmt(salary) + ' × 15/26 × ' + yearsForCalc + ' = <strong>' + fmt(raw) + '</strong> before cap</p>'
      + eligibilityNote + capNote;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Gratuity estimate ready', 'ok');
  });
  document.getElementById('grtClear').addEventListener('click', function(){
    var ids = ['grtSalary','grtYears'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
For employees covered under the Payment of Gratuity Act, 1972, gratuity is based on 15 working days of wages for each completed year of service. Since a month is treated as 26 working days, one day's wage = monthly salary / 26, and 15 days' wage = salary × 15/26:
**Gratuity = Last drawn salary (basic + DA) × 15/26 × years of service**
- A partial year of **6 months or more** counts as a full year; less than 6 months is ignored.
- The tax-free gratuity is **capped at ₹20 lakh** (raised from ₹10 lakh in 2018).
- "Last drawn salary" means basic + dearness allowance only — not HRA, conveyance, special allowances or bonuses.
- The 5-year minimum service rule is waived if employment ends due to death or disablement.
## Everyday uses
- **Resignation planning:** before putting in your papers, estimate the gratuity you will receive so it is not a surprise on your final settlement (Form I).
- **Job-change decision:** compare a higher salary at a new employer against the gratuity (and other benefits) you would forfeit by leaving before 5 years or before a rounding boundary.
- **Retirement checklist:** add your estimated gratuity to PF, NPS and other retiral benefits to project your final retirement corpus.
## Frequently asked questions
### Do I get gratuity if I leave before 5 years?
Generally no — gratuity is payable only after 5 continuous years of service with the same employer (or group of employers under common control). The two exceptions are death or disablement of the employee, where gratuity is paid regardless of tenure. If you have, say, 4 years 7 months, that counts as 5 years and you are eligible.
### Is gratuity taxable?
Gratuity received by government employees is fully tax-free. For non-government employees covered under the Act, the least of (a) actual gratuity, (b) ₹20 lakh, and (c) 15/26 × salary × years is exempt from tax; any excess is taxable as salary income. The ₹20 lakh limit is a lifetime ceiling across all employers.
### What if my employer is not covered by the Payment of Gratuity Act?
Employers with 10 or more employees are covered. If not covered, gratuity is still often paid voluntarily, usually calculated as half a month's average salary (last 10 months) per completed year of service, with no mandatory cap. Check your offer letter, appointment terms or HR policy for your employer's exact formula.
