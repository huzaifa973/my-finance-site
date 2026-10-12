---
title: "Free HSA Calculator"
description: "Free HSA calculator: project your health savings account balance from your contributions, employer contributions, and investment growth."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your current HSA balance, what you and your employer contribute each year, and how long you plan to keep contributing. The calculator grows your balance year by year so you can see the projected total, how much of it came from contributions, and how much came from investment growth.

<div class="tool-shell" id="hsaShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HSA Calculator</h2>
<p>Project your health savings account — your contributions, your employer's money, and tax-free growth in one view.</p>
</div>
<button type="button" class="theme-toggle" id="hsaTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your HSA today</p>
<div class="settings-grid">
<div class="setting">
<label for="hsaBalance">Current HSA balance ($)</label>
<input type="number" id="hsaBalance" class="tool-input" placeholder="e.g. 2500" min="0">
</div>
<div class="setting">
<label for="hsaYears">Years to project</label>
<input type="number" id="hsaYears" class="tool-input" placeholder="e.g. 15" min="1" max="50">
</div>
<div class="setting">
<label for="hsaReturn">Expected annual return (%)</label>
<input type="number" id="hsaReturn" class="tool-input" placeholder="e.g. 6" min="0" max="30" step="0.1">
<div class="hint">Many people keep HSA cash at ~0–2%; invested HSAs often target 5–7% long term.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Annual contributions</p>
<div class="settings-grid">
<div class="setting">
<label for="hsaOwn">Your annual contribution ($)</label>
<input type="number" id="hsaOwn" class="tool-input" placeholder="e.g. 3000" min="0">
</div>
<div class="setting">
<label for="hsaEmployer">Employer annual contribution ($)</label>
<input type="number" id="hsaEmployer" class="tool-input" placeholder="e.g. 1000" min="0">
<div class="hint">Many employers seed or match HSA contributions — that is free money, include it.</div>
</div>
</div>
<div class="callout"><strong>The triple tax advantage:</strong> HSA money goes in pre-tax, grows tax-free, and comes out tax-free when spent on qualified medical expenses. No other US account offers all three.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your projection</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hsaBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/></svg>
Calculate projection
</button>
<button type="button" class="btn-pro-outline" id="hsaClear">Clear</button>
</div>
<div class="results" id="hsaResults">
<p class="result-head">🏥 Your HSA projection</p>
<div class="result-summary" id="hsaSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many HSA scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('hsaShell');
  ToolPro.themeToggle(shell, document.getElementById('hsaTheme'));
  var resBox = document.getElementById('hsaResults');
  var out = document.getElementById('hsaSummary');
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  document.getElementById('hsaBtn').addEventListener('click', function(){
    var bal = num('hsaBalance'), own = num('hsaOwn'), emp = num('hsaEmployer');
    var yrs = num('hsaYears'), ret = num('hsaReturn');
    if (isNaN(bal) || isNaN(own) || isNaN(emp) || isNaN(yrs) || isNaN(ret)) { showError('Please fill in every field with a number.'); return; }
    if (bal < 0 || own < 0 || emp < 0) { showError('Balances and contributions cannot be negative.'); return; }
    if (yrs < 1 || yrs > 50 || Math.floor(yrs) !== yrs) { showError('Enter a whole number of years between 1 and 50.'); return; }
    if (ret < 0 || ret > 30) { showError('Enter an expected return between 0% and 30%.'); return; }
    var r = ret / 100, b = bal;
    for (var y = 0; y < yrs; y++) { b = b * (1 + r) + own + emp; }
    var ownTotal = own * yrs, empTotal = emp * yrs;
    var contrib = ownTotal + empTotal;
    var growth = b - bal - contrib;
    out.innerHTML = '<p style="font-size:1.3rem;margin:.2rem 0">Projected balance: <strong>' + fmt(b) + '</strong></p>'
      + '<p style="margin:.2rem 0">Your contributions: ' + fmt(ownTotal) + ' · Employer contributions: ' + fmt(empTotal) + '</p>'
      + '<p style="margin:.2rem 0">Total contributions: <strong>' + fmt(contrib) + '</strong> · Investment growth: <strong style="color:#0b6e4f">' + fmt(growth) + '</strong></p>'
      + '<p style="margin:.2rem 0">Thanks to the triple tax advantage, none of that growth is taxed if the money is spent on qualified medical expenses.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('HSA projection ready', 'ok');
  });
  document.getElementById('hsaClear').addEventListener('click', function(){
    ['hsaBalance','hsaOwn','hsaEmployer','hsaYears','hsaReturn'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>

## The formula

The projection runs an annual loop. Each year, your balance first grows by your expected return, then both contributions are added: **next year's balance = balance × (1 + return) + your contribution + employer contribution**. Total contributions are simply the yearly contributions multiplied by the number of years, and investment growth is whatever is left: projected balance − starting balance − total contributions. It assumes contributions land at year-end and ignores taxes, fees, and any medical withdrawals along the way.

## Everyday uses

- **Open-enrollment decisions:** compare contributing the minimum versus maxing out your HSA before you lock in next year's elections.
- **Employer match check:** see how much of your future balance is your employer's money — and why you should never leave it on the table.
- **Retirement health fund:** project what your HSA could become by age 65 if you pay medical costs out of pocket now and let the account keep growing.
- **Job-change planning:** estimate your balance at a future date when you are comparing a new employer's HSA offer.

## Frequently asked questions

### What is the HSA triple tax advantage?

Contributions reduce your taxable income, the money grows with no tax on earnings, and withdrawals are tax-free when used for qualified medical expenses. It is the only US account that is tax-advantaged at all three steps.

### Does my HSA balance roll over every year?

Yes. Unlike a flexible spending account (FSA), an HSA has no use-it-or-lose-it rule. The full balance carries over, stays invested if you choose, and the account is yours even if you change jobs.

### What can I actually spend HSA money on?

Qualified medical expenses — doctor visits, prescriptions, dental and vision care, and many other IRS-listed expenses for you, your spouse, and your dependents. Keep your receipts, because the tax-free treatment depends on the expense qualifying.
