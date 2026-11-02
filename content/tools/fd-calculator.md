---
title: "Free FD Calculator — Fixed Deposit Maturity & Interest"
description: "Free FD calculator: compute fixed deposit maturity value and total interest with monthly, quarterly, half-yearly or yearly compounding. See the effective annual yield instantly."
category: finance
date: 2026-11-03
draft: false
---
## How it works
A fixed deposit (FD) locks in a lump sum at a fixed annual interest rate for a chosen period, with interest compounded at a set frequency — usually quarterly in India. Enter your principal, the FD rate, the tenure in years and months, and how often interest compounds — this calculator applies the standard compound-interest formula and shows your maturity value, total interest earned and the effective annual yield.
<div class="tool-shell" id="fdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>FD Calculator</h2>
<p>Lump sum, fixed rate, compounding on your schedule — maturity in one click.</p>
</div>
<button type="button" class="theme-toggle" id="fdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your deposit and rate</p>
<div class="settings-grid">
<div class="setting">
<label for="fdPrincipal">Principal amount (₹)</label>
<input type="number" id="fdPrincipal" class="tool-input" placeholder="e.g. 100000" min="0" step="1000">
</div>
<div class="setting">
<label for="fdRate">Annual interest rate (%)</label>
<input type="number" id="fdRate" class="tool-input" placeholder="e.g. 7.0" min="0" max="20" step="0.01">
<div class="hint">Use the rate your bank or post office quotes for your tenure (senior citizens often get 0.25–0.5% extra).</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Tenure and compounding</p>
<div class="settings-grid">
<div class="setting">
<label for="fdYears">Years</label>
<input type="number" id="fdYears" class="tool-input" placeholder="e.g. 2" min="0" max="30" step="1">
</div>
<div class="setting">
<label for="fdMonths">Months</label>
<input type="number" id="fdMonths" class="tool-input" placeholder="e.g. 6" min="0" max="11" step="1">
</div>
<div class="setting">
<label for="fdFreq">Compounding frequency</label>
<select id="fdFreq" class="tool-input">
<option value="12">Monthly</option>
<option value="4" selected>Quarterly</option>
<option value="2">Half-yearly</option>
<option value="1">Yearly</option>
</select>
<div class="hint">Most Indian bank FDs compound quarterly. Cumulative FDs reinvest interest; payout FDs pay it out periodically.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your maturity</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="fdBtn">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
Calculate FD maturity
</button>
<button type="button" class="btn-pro-outline" id="fdClear">Clear</button>
</div>
<div class="results" id="fdResults">
<p class="result-head">🏦 Your FD maturity</p>
<div class="result-summary" id="fdSummary"></div>
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
  var shell = document.getElementById('fdShell');
  ToolPro.themeToggle(shell, document.getElementById('fdTheme'));
  var resBox = document.getElementById('fdResults');
  var summary = document.getElementById('fdSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-₹' : '₹') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('fdBtn').addEventListener('click', function(){
    var P = num('fdPrincipal');
    var rate = num('fdRate');
    var years = num('fdYears');
    var months = num('fdMonths');
    var n = parseFloat(document.getElementById('fdFreq').value);
    if (isNaN(P) || P <= 0) { showError('Enter a principal amount greater than ₹0.'); return; }
    if (isNaN(rate) || rate < 0 || rate > 20) { showError('Enter a valid annual interest rate between 0% and 20%.'); return; }
    if (isNaN(years) || years < 0 || years > 30) { showError('Enter years between 0 and 30.'); return; }
    if (isNaN(months) || months < 0 || months > 11) { showError('Enter months between 0 and 11.'); return; }
    if (years === 0 && months === 0) { showError('Enter a tenure — at least one month.'); return; }
    var t = years + months / 12;
    var r = rate / 100;
    var A = P * Math.pow(1 + r / n, n * t);
    var interest = A - P;
    var effYield = (Math.pow(1 + r / n, n) - 1) * 100;
    var freqLabel = {12:'monthly',4:'quarterly',2:'half-yearly',1:'yearly'}[n];
    summary.innerHTML = '<p style="font-size:1.3rem;margin:0 0 0.5rem;">Maturity value: <strong>' + fmt(A) + '</strong></p>'
      + '<p>Principal invested: <strong>' + fmt(P) + '</strong></p>'
      + '<p>Total interest earned: <strong style="color:#0b6e4f">' + fmt(interest) + '</strong> (' + freqLabel + ' compounding)</p>'
      + '<p>Effective annual yield: <strong>' + effYield.toFixed(2) + '%</strong> (vs. nominal ' + rate.toFixed(2) + '%)</p>'
      + '<p style="font-size:0.85rem;opacity:0.75;margin-top:0.75rem;">Formula: A = P(1 + r/n)<sup>nt</sup> where P = ' + fmt(P) + ', r = ' + rate + '%/yr, n = ' + n + ' (' + freqLabel + '), t = ' + t.toFixed(2) + ' years. Interest before tax; TDS may apply on interest above ₹40,000/yr (₹50,000 for senior citizens).</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('FD maturity ready', 'ok');
  });
  document.getElementById('fdClear').addEventListener('click', function(){
    var ids = ['fdPrincipal','fdRate','fdYears','fdMonths'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    document.getElementById('fdFreq').value = '4';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
A fixed deposit uses the standard compound interest formula. The annual rate is split across each compounding period, and interest is added that many times a year, so the balance grows slightly faster than simple interest:
**A = P × (1 + r/n)^(n × t)**
- **P** = principal (lump sum deposited)
- **r** = annual interest rate (as a decimal)
- **n** = compounding periods per year (12 monthly, 4 quarterly, 2 half-yearly, 1 yearly)
- **t** = tenure in years
"Total interest" is maturity minus principal. The "effective annual yield" is what the compounding frequency actually delivers per year — it is always slightly above the nominal rate, and the gap widens the more often interest compounds.
## Everyday uses
- **Bank shopping:** compare the same ₹1 lakh at 6.8% quarterly at one bank versus 7% yearly at another — effective yield tells you which really pays more.
- **Goal planning:** see how much you need to deposit today to hit a target (tuition, down payment) in N years at the current FD rate.
- **Cumulative vs payout:** decide whether to reinvest interest (compounding, higher maturity) or take monthly/quarterly payouts (income stream, lower final amount).
## Frequently asked questions
### Which compounding frequency do Indian banks use for FDs?
Most banks compound interest quarterly for cumulative FDs. Some offer monthly or quarterly interest payout options where interest is paid out rather than reinvested, so it does not compound. Always check the schedule — a "7% per annum" FD with annual compounding pays less at maturity than one with quarterly compounding.
### Is FD interest taxable?
Yes. FD interest is added to your income and taxed at your slab rate. Banks deduct TDS at 10% (20% without PAN) if interest exceeds ₹40,000 in a financial year (₹50,000 for senior citizens). Submit Form 15G/15H if your total income is below the taxable limit to avoid TDS.
### What happens if I break my FD early?
You can withdraw prematurely, but the bank usually pays 0.5–1% less than the rate applicable for the actual tenure you held it, and some FDs (tax-saving FDs under Section 80C) have a mandatory 5-year lock-in with no premature withdrawal.
