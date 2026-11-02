---
title: "Free Net Worth Calculator — Assets Minus Liabilities"
description: "Free net worth calculator: add up your cash, investments, home and other assets, subtract every debt, and see where you stand versus an age-based benchmark."
category: finance
date: 2026-11-03
draft: false
---
## How it works
List everything you own (cash, investments, home, car and other assets) and everything you owe (mortgage, loans, credit cards and other debts). This calculator totals each side and subtracts liabilities from assets to give you your net worth — and, if you share your age and income, compares it with a common age-based benchmark.

<div class="tool-shell" id="nwcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Net Worth Calculator</h2>
<p>Assets minus liabilities — your real financial scorecard, computed privately.</p>
</div>
<button type="button" class="theme-toggle" id="nwcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> What you own (assets)</p>
<div class="settings-grid">
<div class="setting">
<label for="nwcCash">Cash &amp; savings ($)</label>
<input type="number" id="nwcCash" class="tool-input" placeholder="e.g. 15000" min="0">
</div>
<div class="setting">
<label for="nwcInvest">Investments ($)</label>
<input type="number" id="nwcInvest" class="tool-input" placeholder="e.g. 60000" min="0">
<div class="hint">Stocks, mutual funds, retirement accounts, crypto — current market value.</div>
</div>
<div class="setting">
<label for="nwcHome">Home value ($)</label>
<input type="number" id="nwcHome" class="tool-input" placeholder="e.g. 350000" min="0">
</div>
<div class="setting">
<label for="nwcOtherAssets">Car &amp; other assets ($)</label>
<input type="number" id="nwcOtherAssets" class="tool-input" placeholder="e.g. 20000" min="0">
<div class="hint">Vehicles, jewellery, art, business equity — use conservative resale values.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> What you owe (liabilities) + optional benchmark</p>
<div class="settings-grid">
<div class="setting">
<label for="nwcMortgage">Mortgage balance ($)</label>
<input type="number" id="nwcMortgage" class="tool-input" placeholder="e.g. 220000" min="0">
</div>
<div class="setting">
<label for="nwcLoans">Loans ($)</label>
<input type="number" id="nwcLoans" class="tool-input" placeholder="e.g. 15000" min="0">
<div class="hint">Car, student, personal and any other installment loans.</div>
</div>
<div class="setting">
<label for="nwcCreditCard">Credit card debt ($)</label>
<input type="number" id="nwcCreditCard" class="tool-input" placeholder="e.g. 3000" min="0">
</div>
<div class="setting">
<label for="nwcOtherLiab">Other liabilities ($)</label>
<input type="number" id="nwcOtherLiab" class="tool-input" placeholder="e.g. 5000" min="0">
</div>
<div class="setting">
<label for="nwcAge">Your age (optional)</label>
<input type="number" id="nwcAge" class="tool-input" placeholder="e.g. 32" min="0" max="120">
</div>
<div class="setting">
<label for="nwcIncome">Annual income ($, optional)</label>
<input type="number" id="nwcIncome" class="tool-input" placeholder="e.g. 75000" min="0">
<div class="hint">Used only for the age-based benchmark. Leave blank to skip it.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your net worth</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="nwcBtn">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
Calculate Net Worth
</button>
<button type="button" class="btn-pro-outline" id="nwcClear">Clear</button>
</div>
<div class="results" id="nwcResults">
<p class="result-head">🏦 Your net worth</p>
<div class="result-summary" id="nwcSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Recompute as often as you like — every number stays in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('nwcShell');
  ToolPro.themeToggle(shell, document.getElementById('nwcTheme'));
  var resBox = document.getElementById('nwcResults');
  var summary = document.getElementById('nwcSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:0, maximumFractionDigits:0}); return (n < 0 ? '-$' : '$') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? 0 : parseFloat(v); }
  document.getElementById('nwcBtn').addEventListener('click', function(){
    var cash = num('nwcCash'), invest = num('nwcInvest'), home = num('nwcHome'), otherA = num('nwcOtherAssets');
    var mortgage = num('nwcMortgage'), loans = num('nwcLoans'), cc = num('nwcCreditCard'), otherL = num('nwcOtherLiab');
    var ageV = document.getElementById('nwcAge').value;
    var incV = document.getElementById('nwcIncome').value;
    if ([cash,invest,home,otherA,mortgage,loans,cc,otherL].some(function(x){ return isNaN(x) || x < 0; })) { showError('Every asset and liability must be $0 or more.'); return; }
    var age = ageV === '' ? NaN : parseFloat(ageV);
    var income = incV === '' ? NaN : parseFloat(incV);
    if (!isNaN(age) && (age < 0 || age > 120)) { showError('Age must be between 0 and 120.'); return; }
    if (!isNaN(income) && income < 0) { showError('Annual income must be $0 or more.'); return; }
    var assets = cash + invest + home + otherA;
    var liabilities = mortgage + loans + cc + otherL;
    var net = assets - liabilities;
    var color = net >= 0 ? '#0b6e4f' : '#b91c1c';
    var html = '<p style="font-size:1.4rem;">Net worth: <strong style="color:' + color + '">' + fmt(net) + '</strong></p>'
      + '<p>Total assets: <strong>' + fmt(assets) + '</strong></p>'
      + '<p>Total liabilities: <strong>' + fmt(liabilities) + '</strong></p>'
      + '<p>Assets breakdown — cash ' + fmt(cash) + ' · investments ' + fmt(invest) + ' · home ' + fmt(home) + ' · other ' + fmt(otherA) + '</p>'
      + '<p>Debt breakdown — mortgage ' + fmt(mortgage) + ' · loans ' + fmt(loans) + ' · credit cards ' + fmt(cc) + ' · other ' + fmt(otherL) + '</p>';
    if (!isNaN(age) && !isNaN(income) && income > 0 && age > 0) {
      var target = age * income / 10;
      var diff = net - target;
      var verdict = diff >= 0 ? 'You are ahead of the benchmark by ' + fmt(diff) + '.' : 'You are ' + fmt(diff) + ' below the benchmark — keep saving and investing.';
      html += '<p style="margin-top:1rem;font-weight:600;">Age-based benchmark (age × income ÷ 10)</p>'
        + '<p>Benchmark net worth at age ' + Math.round(age) + ': <strong>' + fmt(target) + '</strong></p>'
        + '<p>' + verdict + '</p>';
    } else {
      html += '<p style="margin-top:1rem;font-size:0.85rem;color:#666;">Enter your age and annual income to compare against the common "age × income ÷ 10" benchmark.</p>';
    }
    summary.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Net worth calculated', 'ok');
  });
  document.getElementById('nwcClear').addEventListener('click', function(){
    ['nwcCash','nwcInvest','nwcHome','nwcOtherAssets','nwcMortgage','nwcLoans','nwcCreditCard','nwcOtherLiab','nwcAge','nwcIncome'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
Net worth is simply everything you own minus everything you owe:
**Net worth = (cash + investments + home + other assets) − (mortgage + loans + credit cards + other liabilities)**
Each item is entered at its current value — use today's market price for investments and a realistic resale estimate for a home or car, not what you paid. The optional benchmark uses the widely cited "expected net worth" formula from *The Millionaire Next Door*: **age × annual pre-tax income ÷ 10**. It is a rough rule of thumb, not a personalized target.
## Everyday uses
- **Annual check-up:** recompute once a year to see whether your net worth is actually growing, not just your income.
- **Debt-payoff motivation:** watch how paying off a high-interest credit card lifts your net worth dollar for dollar.
- **Big-decision filter:** before a major purchase, estimate how it moves both sides of the ledger and what it does to your net worth.
## Frequently asked questions
### Should I include my car and home at purchase price or current value?
Current value. Net worth is a snapshot of today, so use a realistic resale estimate (e.g. recent comparable sales for a home, Kelley Blue Book for a car). Overstating assets gives you a falsely comforting number.
### Is a negative net worth bad?
It is common early in life (e.g. right after college with student loans) and not permanent. The key is the trend: if your net worth is rising year over year, you are on the right path. Focus first on high-interest debt.
### Why does the benchmark use income instead of expenses?
The "age × income ÷ 10" rule is a quick relative benchmark, not a goal. Someone with a high income but low savings rate can fall below it, and a disciplined saver can exceed it. Use it as motivation, not as a diagnosis.
