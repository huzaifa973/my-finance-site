---
title: "Free Annuity Calculator"
description: "Free annuity calculator: find the future value of regular payments, or the payment you need to hit a savings target, with annual compounding."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Pick what you want to solve for. In future-value mode, you enter a regular yearly payment and see what it grows into. In target mode, you enter the amount you want to end up with and the calculator works backwards to the yearly payment required. An optional starting principal can be included in both modes.

<div class="tool-shell" id="annShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Annuity Calculator</h2>
<p>Find what regular payments grow into — or the exact payment it takes to reach your target.</p>
</div>
<button type="button" class="theme-toggle" id="annTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose what to solve for</p>
<div class="setting">
<label for="annMode">Calculation mode</label>
<select id="annMode" class="tool-input" style="max-width:340px;">
<option value="fv">Future value of regular payments</option>
<option value="pmt">Payment needed for a target</option>
</select>
<div class="hint">Future-value mode: payments in, final amount out. Target mode: final amount in, required payment out.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your numbers</p>
<div class="settings-grid">
<div class="setting">
<label for="annAmount" id="annAmountLabel">Payment per year ($)</label>
<input type="number" id="annAmount" class="tool-input" placeholder="e.g. 5000" min="0">
</div>
<div class="setting">
<label for="annPrincipal">Starting principal ($) — optional</label>
<input type="number" id="annPrincipal" class="tool-input" placeholder="e.g. 10000" min="0">
</div>
<div class="setting">
<label for="annRate">Annual rate (%)</label>
<input type="number" id="annRate" class="tool-input" placeholder="e.g. 5" min="0" max="30" step="0.1">
</div>
<div class="setting">
<label for="annYears">Years</label>
<input type="number" id="annYears" class="tool-input" placeholder="e.g. 20" min="1" max="60">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="annBtn">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
Calculate annuity
</button>
<button type="button" class="btn-pro-outline" id="annClear">Clear</button>
</div>
<div class="results" id="annResults">
<p class="result-head">📅 Your annuity result</p>
<div class="result-summary" id="annSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Model as many payment plans as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('annShell');
  ToolPro.themeToggle(shell, document.getElementById('annTheme'));
  var resBox = document.getElementById('annResults');
  var out = document.getElementById('annSummary');
  var modeEl = document.getElementById('annMode');
  var amountLabel = document.getElementById('annAmountLabel');
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  modeEl.addEventListener('change', function(){
    amountLabel.textContent = modeEl.value === 'pmt' ? 'Target future value ($)' : 'Payment per year ($)';
  });
  document.getElementById('annBtn').addEventListener('click', function(){
    var mode = modeEl.value;
    var amt = num('annAmount');
    var prinRaw = document.getElementById('annPrincipal').value;
    var prin = prinRaw === '' ? 0 : parseFloat(prinRaw);
    var rate = num('annRate'), yrs = num('annYears');
    if (isNaN(amt)) { showError(mode === 'pmt' ? 'Please enter your target future value.' : 'Please enter a payment amount.'); return; }
    if (isNaN(prin)) { showError('Starting principal must be a number.'); return; }
    if (isNaN(rate) || isNaN(yrs)) { showError('Please fill in the rate and years.'); return; }
    if (amt < 0 || prin < 0) { showError('Amounts cannot be negative.'); return; }
    if (rate < 0 || rate > 30) { showError('Enter an annual rate between 0% and 30%.'); return; }
    if (yrs < 1 || yrs > 60 || Math.floor(yrs) !== yrs) { showError('Enter a whole number of years between 1 and 60.'); return; }
    var r = rate / 100;
    var growth = Math.pow(1 + r, yrs);
    if (mode === 'fv') {
      var fv = r === 0 ? prin + amt * yrs : prin * growth + amt * ((growth - 1) / r);
      var paidIn = prin + amt * yrs;
      var earned = fv - paidIn;
      out.innerHTML = '<p style="font-size:1.3rem;margin:.2rem 0">Future value: <strong>' + fmt(fv) + '</strong></p>'
        + '<p style="margin:.2rem 0">You pay in: ' + fmt(paidIn) + ' (principal ' + fmt(prin) + ' + ' + yrs + ' payments of ' + fmt(amt) + ')</p>'
        + '<p style="margin:.2rem 0">Growth earned: <strong style="color:#0b6e4f">' + fmt(earned) + '</strong></p>';
    } else {
      var grownPrin = prin * growth;
      var need = amt - grownPrin;
      if (need <= 0) {
        out.innerHTML = '<p style="font-size:1.3rem;margin:.2rem 0">No payments needed</p>'
          + '<p style="margin:.2rem 0">Your starting principal alone grows to <strong>' + fmt(grownPrin) + '</strong> in ' + yrs + ' years, which already meets your ' + fmt(amt) + ' target.</p>';
      } else {
        var pmt = r === 0 ? need / yrs : need * r / (growth - 1);
        out.innerHTML = '<p style="font-size:1.3rem;margin:.2rem 0">Required payment: <strong>' + fmt(pmt) + ' per year</strong></p>'
          + '<p style="margin:.2rem 0">Total you pay in: ' + fmt(prin + pmt * yrs) + ' · Growth earned: <strong style="color:#0b6e4f">' + fmt(amt - prin - pmt * yrs) + '</strong></p>'
          + '<p style="margin:.2rem 0">That reaches your target of ' + fmt(amt) + ' in ' + yrs + ' years at ' + rate + '%.</p>';
      }
    }
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Annuity calculated', 'ok');
  });
  document.getElementById('annClear').addEventListener('click', function(){
    ['annAmount','annPrincipal','annRate','annYears'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>

## The formula

With annual compounding and one payment at the end of each year, the future value is **FV = principal × (1 + r)^t + PMT × [((1 + r)^t − 1) / r]**, where r is the annual rate and t is the number of years. Target mode simply rearranges the same equation: **PMT = (Target − principal × (1 + r)^t) × r / ((1 + r)^t − 1)**. When the rate is 0%, both collapse to simple addition — principal plus payment × years.

## Everyday uses

- **Retirement saving targets:** work out the yearly amount you must set aside to reach a specific nest egg by a chosen age.
- **College fund planning:** set a target for 18 years from now and see the yearly payment that gets a newborn's fund there.
- **Comparing savings plans:** check what a fixed yearly deposit becomes at different rates before committing to a product.
- **Sinking funds:** plan for a roof replacement, a car, or a big trip with a firm deadline and a known price tag.

## Frequently asked questions

### Is this the same as an insurance annuity?

Not exactly. This calculator models the math of an annuity — a series of equal payments growing at a fixed rate. Insurance annuities add fees, surrender charges, and guarantees on top of the same core math, so use this to understand the numbers before comparing actual products.

### When are the payments assumed to happen?

At the end of each year (an "ordinary annuity"). Payments made at the start of each year would grow slightly more, because each payment gets one extra year of growth.

### What happens if the rate is 0%?

The formulas switch to plain addition: future value is principal plus payment × years, and the required payment is the shortfall divided by the number of years. No division-by-zero tricks, just arithmetic.
