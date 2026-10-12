---
title: "Free 401(k) Calculator"
description: "Free 401(k) calculator: project your retirement balance with salary growth, your contributions, employer match and investment returns."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your age, salary, how much you contribute and how much your employer matches — this calculator grows your 401(k) year by year, adding your contributions, the employer match and investment returns, and shows exactly where the final balance came from.

<div class="tool-shell" id="k401Shell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>401(k) Calculator</h2>
<p>Your contributions, your employer's match, and decades of compounding — projected.</p>
</div>
<button type="button" class="theme-toggle" id="k401Theme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your timeline and balance</p>
<div class="settings-grid">
<div class="setting">
<label for="k401Age">Current age</label>
<input type="number" id="k401Age" class="tool-input" placeholder="e.g. 30" min="0" max="100">
</div>
<div class="setting">
<label for="k401Retire">Retirement age</label>
<input type="number" id="k401Retire" class="tool-input" placeholder="e.g. 65" min="0" max="100">
</div>
<div class="setting">
<label for="k401Balance">Current 401(k) balance ($)</label>
<input type="number" id="k401Balance" class="tool-input" placeholder="e.g. 25000" min="0">
</div>
<div class="setting">
<label for="k401Salary">Annual salary ($)</label>
<input type="number" id="k401Salary" class="tool-input" placeholder="e.g. 60000" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Contributions and growth</p>
<div class="settings-grid">
<div class="setting">
<label for="k401Contrib">Your contribution (% of salary)</label>
<input type="number" id="k401Contrib" class="tool-input" placeholder="e.g. 10" min="0" max="100" step="0.1">
</div>
<div class="setting">
<label for="k401Match">Employer match (% of salary)</label>
<input type="number" id="k401Match" class="tool-input" placeholder="e.g. 5" min="0" max="100" step="0.1">
<div class="hint">Enter the total match as a % of salary — e.g. "50% of the first 6%" equals 3%.</div>
</div>
<div class="setting">
<label for="k401Growth">Salary growth per year (%)</label>
<input type="number" id="k401Growth" class="tool-input" placeholder="e.g. 3" step="0.1">
</div>
<div class="setting">
<label for="k401Return">Expected annual return (%)</label>
<input type="number" id="k401Return" class="tool-input" placeholder="e.g. 7" step="0.1">
<div class="hint">Long-run diversified portfolios have averaged roughly 7% after inflation.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your projection</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="k401Btn">
<svg viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
Project my 401(k)
</button>
<button type="button" class="btn-pro-outline" id="k401Clear">Clear</button>
</div>
<div class="results" id="k401Results">
<p class="result-head">🏦 Your 401(k) projection</p>
<div class="result-summary" id="k401Summary"></div>
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
  var shell = document.getElementById('k401Shell');
  ToolPro.themeToggle(shell, document.getElementById('k401Theme'));
  var resBox = document.getElementById('k401Results');
  var summary = document.getElementById('k401Summary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('k401Btn').addEventListener('click', function(){
    var age = num('k401Age');
    var retire = num('k401Retire');
    var balance = num('k401Balance');
    var salary = num('k401Salary');
    var contribPct = num('k401Contrib');
    var matchPct = num('k401Match');
    var growthPct = num('k401Growth');
    var returnPct = num('k401Return');
    if (isNaN(age) || age < 1 || age > 100) { showError('Enter your current age (1–100).'); return; }
    if (isNaN(retire) || retire <= age || retire > 100) { showError('Retirement age must be after your current age (max 100).'); return; }
    if (isNaN(balance) || balance < 0) { showError('Enter your current balance ($0 if you have not started).'); return; }
    if (isNaN(salary) || salary < 0) { showError('Enter your annual salary ($0 or more).'); return; }
    if (isNaN(contribPct) || contribPct < 0 || contribPct > 100) { showError('Your contribution must be between 0% and 100% of salary.'); return; }
    if (isNaN(matchPct) || matchPct < 0 || matchPct > 100) { showError('Employer match must be between 0% and 100% of salary.'); return; }
    if (isNaN(growthPct) || growthPct < -50 || growthPct > 100) { showError('Salary growth must be between -50% and 100% per year.'); return; }
    if (isNaN(returnPct) || returnPct < -50 || returnPct > 100) { showError('Expected return must be between -50% and 100% per year.'); return; }
    var years = retire - age;
    var startBalance = balance;
    var sal = salary;
    var yourTotal = 0, employerTotal = 0;
    for (var y = 0; y < years; y++) {
      var contribution = sal * contribPct / 100;
      var employer = contribPct > 0 ? sal * matchPct / 100 : 0;
      yourTotal += contribution;
      employerTotal += employer;
      balance = (balance + contribution + employer) * (1 + returnPct / 100);
      sal = sal * (1 + growthPct / 100);
    }
    var growth = balance - startBalance - yourTotal - employerTotal;
    summary.innerHTML = '<p style="font-size:1.3rem;">Projected balance at ' + retire + ': <strong>' + fmt(balance) + '</strong></p>'
      + '<p>Your contributions: <strong>' + fmt(yourTotal) + '</strong> over ' + years + ' years</p>'
      + '<p>Employer contributions: <strong>' + fmt(employerTotal) + '</strong></p>'
      + '<p>Investment growth: <strong style="color:#0b6e4f">' + fmt(growth) + '</strong></p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('401(k) projection ready', 'ok');
  });
  document.getElementById('k401Clear').addEventListener('click', function(){
    var ids = ['k401Age','k401Retire','k401Balance','k401Salary','k401Contrib','k401Match','k401Growth','k401Return'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

The projection runs one year at a time, exactly like a real account. Each year: your contribution (salary × your %) and the employer match (salary × match %, paid only in years you contribute) are added to the balance, the whole balance grows by the expected return, and then your salary rises by the growth rate before the next year:

**New balance = (balance + your contribution + employer match) × (1 + return)**

"Investment growth" in the result is whatever is left after subtracting your starting balance and all contributions — it is the part compounding earned for you. Note the employer match here is a simplified model: enter it as a straight % of salary (so a typical "50% match on the first 6% you contribute" is 3% of salary).

## Everyday uses

- **Match check:** confirm you are contributing at least enough to capture the full employer match — leaving it unclaimed is leaving salary unpaid.
- **Raise planning:** test what bumping your contribution by 1–2% does over 20+ years before you change it at work.
- **Job-change decisions:** compare staying put versus a higher salary with a weaker match at a new employer.

## Frequently asked questions

### What is the 401(k) contribution limit for 2026?

The IRS employee contribution limit is $23,500 for 2025, and it is typically adjusted for inflation each year — check irs.gov for the current 2026 figure. Catch-up contributions allow extra savings from age 50. This calculator does not cap your inputs, so keep your % under the limit for your salary.

### Does this include taxes or fees?

No. Balances are pre-tax and before plan fees, and returns are assumed smooth. Traditional 401(k) withdrawals in retirement are taxed as income, so your spendable amount will be lower than the projected balance.

### Why does the employer match stop if I contribute 0%?

Because that is how real plans work — the match is the employer's incentive, paid only when you contribute. Even the minimum needed to unlock the full match is usually worth far more than the same money invested elsewhere.
