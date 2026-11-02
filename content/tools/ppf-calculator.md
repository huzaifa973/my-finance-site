---
title: "Free PPF Calculator — Public Provident Fund (15-Year Maturity)"
description: "Free PPF calculator: estimate your Public Provident Fund maturity with annual contributions, the current interest rate and yearly compounding. See total invested, interest earned and a year-by-year table."
category: finance
date: 2026-11-03
draft: false
---
## How it works
A Public Provident Fund (PPF) account lets you invest up to ₹1.5 lakh a year for a 15-year lock-in, with interest set quarterly by the government and compounded annually. Enter your annual investment, the current interest rate and how many years you will hold the account — this calculator builds a year-by-year balance table and shows your total invested, total interest earned and maturity value.
<div class="tool-shell" id="ppfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PPF Calculator</h2>
<p>Annual contributions, government-set interest and 15+ years of annual compounding.</p>
</div>
<button type="button" class="theme-toggle" id="ppfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your annual investment and rate</p>
<div class="settings-grid">
<div class="setting">
<label for="ppfInvest">Annual investment (₹)</label>
<input type="number" id="ppfInvest" class="tool-input" placeholder="e.g. 150000" min="0" step="500">
<div class="hint">PPF maximum is ₹1.5 lakh per financial year.</div>
</div>
<div class="setting">
<label for="ppfRate">Current interest rate (% per year)</label>
<input type="number" id="ppfRate" class="tool-input" placeholder="e.g. 7.1" value="7.1" min="0" max="15" step="0.01">
<div class="hint">The rate is set quarterly by the government; 7.1% is the rate for recent quarters.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Investment period</p>
<div class="settings-grid">
<div class="setting">
<label for="ppfYears">Years (15 minimum, extendable)</label>
<input type="number" id="ppfYears" class="tool-input" placeholder="e.g. 15" value="15" min="1" max="50" step="1">
<div class="hint">PPF has a 15-year lock-in; after maturity you can extend in 5-year blocks.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your maturity</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ppfBtn">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
Calculate PPF maturity
</button>
<button type="button" class="btn-pro-outline" id="ppfClear">Clear</button>
</div>
<div class="results" id="ppfResults">
<p class="result-head">🏦 Your PPF maturity projection</p>
<div class="result-summary" id="ppfSummary"></div>
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
  var shell = document.getElementById('ppfShell');
  ToolPro.themeToggle(shell, document.getElementById('ppfTheme'));
  var resBox = document.getElementById('ppfResults');
  var summary = document.getElementById('ppfSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-₹' : '₹') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('ppfBtn').addEventListener('click', function(){
    var invest = num('ppfInvest');
    var rate = num('ppfRate');
    var years = num('ppfYears');
    if (isNaN(invest) || invest <= 0) { showError('Enter your annual investment (greater than ₹0).'); return; }
    if (isNaN(rate) || rate < 0 || rate > 15) { showError('Enter a valid PPF interest rate between 0% and 15%.'); return; }
    if (isNaN(years) || years < 1 || years > 50) { showError('Enter years between 1 and 50 (PPF matures at 15 and can be extended).'); return; }
    var r = rate / 100;
    var balance = 0, totalInvested = 0, totalInterest = 0;
    var rows = '';
    for (var y = 1; y <= years; y++) {
      balance += invest;
      totalInvested += invest;
      var interest = balance * r;
      totalInterest += interest;
      balance += interest;
      rows += '<tr><td>' + y + '</td><td>' + fmt(invest) + '</td><td>' + fmt(interest) + '</td><td>' + fmt(balance) + '</td></tr>';
    }
    var overLimit = invest > 150000 ? '<p style="color:#b45309;margin:0.5rem 0 0;">Note: PPF annual contribution is capped at ₹1.5 lakh — amounts above that do not earn PPF interest.</p>' : '';
    summary.innerHTML = '<p style="font-size:1.3rem;margin:0 0 0.5rem;">Maturity value: <strong>' + fmt(balance) + '</strong></p>'
      + '<p>Total invested: <strong>' + fmt(totalInvested) + '</strong> over ' + years + ' years</p>'
      + '<p>Total interest earned: <strong style="color:#0b6e4f">' + fmt(totalInterest) + '</strong></p>'
      + overLimit
      + '<div style="overflow-x:auto;margin-top:1rem;"><table style="width:100%;border-collapse:collapse;font-size:0.85rem;"><thead><tr><th style="text-align:left;padding:6px;border-bottom:1px solid #ccc;">Year</th><th style="text-align:right;padding:6px;border-bottom:1px solid #ccc;">Invested</th><th style="text-align:right;padding:6px;border-bottom:1px solid #ccc;">Interest</th><th style="text-align:right;padding:6px;border-bottom:1px solid #ccc;">Year-end balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('PPF maturity ready', 'ok');
  });
  document.getElementById('ppfClear').addEventListener('click', function(){
    var ids = ['ppfInvest','ppfRate','ppfYears'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
PPF interest is compounded annually (interest is calculated monthly on the lowest balance between the 5th and the last day of the month, but credited once a year on 31 March). This calculator uses the standard simplified yearly model: at the start of each year your annual contribution is added, then the full balance earns that year's interest, and the new balance carries into the next year:
**Year-end balance = (balance + annual contribution) × (1 + rate)**
"Total interest" is the maturity value minus everything you put in. The interest rate is set quarterly by the government and can change, so a long-dated projection assumes the rate stays constant — update it whenever the rate changes.
## Everyday uses
- **Retirement planning:** see what ₹50,000–₹1.5 lakh a year becomes over a full 15-year PPF and one or two 5-year extensions.
- **PPF vs other options:** compare a PPF maturity against an FD or ELSS at the same contribution to weigh guaranteed returns against market-linked growth.
- **Extension decision:** at maturity, test whether extending in 5-year blocks (with or without fresh contributions) beats moving the money elsewhere.
## Frequently asked questions
### What is the PPF interest rate right now?
The government resets the PPF rate every quarter. Recent quarters have been around 7.1% per year, but check the latest notification from the Ministry of Finance or your bank/post office before relying on a figure. This calculator uses whatever rate you enter.
### Is there a limit on how much I can put in PPF?
Yes. The maximum annual contribution is ₹1.5 lakh per financial year (combined across all PPF accounts in your name), and the minimum is ₹500. Contributions above ₹1.5 lakh do not earn interest and may be returned.
### Can I withdraw before 15 years?
PPF has a 15-year lock-in, but partial withdrawals are allowed from the 7th financial year onward (up to 50% of the balance at the end of the 4th preceding year), and loans against the balance are available from the 3rd to the 6th year. Premature closure is permitted only for specific reasons such as medical emergencies or higher education, after 5 years.
