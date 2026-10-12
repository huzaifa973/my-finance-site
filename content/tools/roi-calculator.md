---
title: "Free ROI Calculator"
description: "Free ROI calculator: enter what you invested and what you got back to see your return on investment, net profit, and annualized return."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter the amount you put in, the amount you got back, and (optionally) how long you held it — this calculator shows your net profit, your total ROI percentage, and the annualized return so you can fairly compare investments held for different lengths of time.

<div class="tool-shell" id="roiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19.14 12.94c-2.06 0-3.74 1.68-3.74 3.74s1.68 3.74 3.74 3.74 3.74-1.68 3.74-3.74-1.68-3.74-3.74-3.74zm0 5.49c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM5.86 3.06C3.8 3.06 2.12 4.74 2.12 6.8s1.68 3.74 3.74 3.74 3.74-1.68 3.74-3.74S7.92 3.06 5.86 3.06zm0 5.49c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM12.36 2.98l2.04.79L8.93 18.94l-2.04-.79L12.36 2.98z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>ROI Calculator</h2>
<p>See exactly what your money earned — total return, net profit, and return per year.</p>
</div>
<button type="button" class="theme-toggle" id="roiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your investment</p>
<div class="settings-grid">
<div class="setting">
<label for="roiInvested">Amount invested ($)</label>
<input type="number" id="roiInvested" class="tool-input" placeholder="e.g. 1000" min="0" step="any">
</div>
<div class="setting">
<label for="roiReturned">Amount returned ($)</label>
<input type="number" id="roiReturned" class="tool-input" placeholder="e.g. 1500" min="0" step="any">
<div class="hint">The final value of the investment, including anything you took out.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Time held (optional)</p>
<div class="setting">
<label for="roiYears">Years held</label>
<input type="number" id="roiYears" class="tool-input" placeholder="e.g. 2" min="0" step="any" style="max-width:220px;">
<div class="hint">Add this to see the annualized ROI. Leave it blank to hide that figure.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your return</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="roiBtn">
<svg viewBox="0 0 24 24"><path d="M19.14 12.94c-2.06 0-3.74 1.68-3.74 3.74s1.68 3.74 3.74 3.74 3.74-1.68 3.74-3.74-1.68-3.74-3.74-3.74zm0 5.49c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM5.86 3.06C3.8 3.06 2.12 4.74 2.12 6.8s1.68 3.74 3.74 3.74 3.74-1.68 3.74-3.74S7.92 3.06 5.86 3.06zm0 5.49c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zM12.36 2.98l2.04.79L8.93 18.94l-2.04-.79L12.36 2.98z"/></svg>
Calculate ROI
</button>
<button type="button" class="btn-pro-outline" id="roiClear">Clear</button>
</div>
<div class="results" id="roiResults">
<p class="result-head">📊 Your return on investment</p>
<div class="result-summary" id="roiResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — check as many investments as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('roiShell');
  ToolPro.themeToggle(shell, document.getElementById('roiTheme'));
  var resBox = document.getElementById('roiResults');
  var out = document.getElementById('roiResult');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('roiBtn').addEventListener('click', function(){
    var investedRaw = document.getElementById('roiInvested').value;
    var returnedRaw = document.getElementById('roiReturned').value;
    var yearsRaw = document.getElementById('roiYears').value;
    var invested = parseFloat(investedRaw);
    var returned = parseFloat(returnedRaw);
    if (investedRaw === '' || isNaN(invested) || invested <= 0) { showError('Enter an amount invested greater than $0.'); return; }
    if (returnedRaw === '' || isNaN(returned) || returned < 0) { showError('Enter the amount returned — use 0 if you got nothing back.'); return; }
    var years = null;
    if (yearsRaw !== '') {
      years = parseFloat(yearsRaw);
      if (isNaN(years) || years <= 0) { showError('Years held must be greater than 0 — or leave it blank.'); return; }
    }
    var profit = returned - invested;
    var roi = (returned - invested) / invested * 100;
    var html = '<p style="font-size:1.35rem;">ROI: <strong>' + roi.toFixed(2) + '%</strong></p>'
      + '<p>Net profit: <strong>' + fmt(profit) + '</strong> &middot; Invested: ' + fmt(invested) + ' &middot; Returned: ' + fmt(returned) + '</p>';
    if (years !== null) {
      var ann = (Math.pow(returned / invested, 1 / years) - 1) * 100;
      html += '<p>Annualized ROI: <strong>' + ann.toFixed(2) + '%</strong> per year over ' + years + (years === 1 ? ' year' : ' years') + '</p>';
    }
    out.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('ROI calculated', 'ok');
  });

  document.getElementById('roiClear').addEventListener('click', function(){
    document.getElementById('roiInvested').value = '';
    document.getElementById('roiReturned').value = '';
    document.getElementById('roiYears').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

ROI (return on investment) measures how much you gained or lost compared with what you put in: **ROI % = (amount returned − amount invested) ÷ amount invested × 100**. The annualized ROI spreads that return evenly across the holding period — **(returned ÷ invested) ^ (1 ÷ years) − 1** — so a 50% gain over 5 years (about 8.45% per year) can be compared honestly with a 50% gain over 1 year.

## Everyday uses

- **Stocks and funds:** compare the real return on shares you bought at different times for different amounts.
- **Property flips and rentals:** work out whether a deal actually beat simply leaving the money in a savings account.
- **Business spending:** check whether a new tool, ad campaign, or piece of equipment paid for itself.
- **Side hustles:** see the true return on gear, stock, or course fees versus what the hustle brought back.

## Frequently asked questions

**Q: What is a good ROI?**
A: It depends on the risk and the time involved. A broad stock index has historically returned roughly 7–10% per year; anything promising far more than that usually carries far more risk too. Always compare ROI together with the years held — that is what the annualized figure is for.

**Q: Can ROI be negative?**
A: Yes. If the amount returned is less than the amount invested, ROI is negative and the difference is your loss. An ROI of −100% means the investment became worthless.

**Q: Does ROI account for fees, taxes, or inflation?**
A: Only if you build them into your numbers. For a truer picture, add fees and taxes to the amount invested, and subtract any extra costs from the amount returned before calculating.
