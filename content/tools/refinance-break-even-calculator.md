---
title: "Free Refinance Break-Even Calculator"
description: "Free refinance break-even calculator: compare your current mortgage payment to a new loan and see when the closing costs pay for themselves."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your current loan balance, rate, and remaining term, then the rate, term, and closing costs of the new loan you are considering. The calculator compares the two monthly payments, shows your monthly savings, calculates how many months it takes for those savings to cover the closing costs — your break-even point — and totals up the lifetime difference.

<div class="tool-shell" id="refiShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Refinance Break-Even Calculator</h2>
<p>See your new payment, your monthly savings, and the month refinancing starts paying off.</p>
</div>
<button type="button" class="theme-toggle" id="refiTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your current loan</p>
<div class="settings-grid">
<div class="setting">
<label for="refiBalance">Current loan balance ($)</label>
<input type="number" id="refiBalance" class="tool-input" placeholder="e.g. 280000" min="0">
</div>
<div class="setting">
<label for="refiCurRate">Current rate (%)</label>
<input type="number" id="refiCurRate" class="tool-input" placeholder="e.g. 7.25" min="0" max="25" step="0.01">
</div>
<div class="setting">
<label for="refiCurYears">Years remaining</label>
<input type="number" id="refiCurYears" class="tool-input" placeholder="e.g. 26" min="1" max="40">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> The new loan offer</p>
<div class="settings-grid">
<div class="setting">
<label for="refiNewRate">New rate (%)</label>
<input type="number" id="refiNewRate" class="tool-input" placeholder="e.g. 5.75" min="0" max="25" step="0.01">
</div>
<div class="setting">
<label for="refiNewYears">New term (years)</label>
<input type="number" id="refiNewYears" class="tool-input" placeholder="e.g. 30" min="1" max="40">
<div class="hint">A fresh 30-year term lowers the payment but restarts the clock — watch the lifetime figure below.</div>
</div>
<div class="setting">
<label for="refiClosing">Closing costs ($)</label>
<input type="number" id="refiClosing" class="tool-input" placeholder="e.g. 4500" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compare the loans</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="refiBtn">
<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
Compare loans
</button>
<button type="button" class="btn-pro-outline" id="refiClear">Clear</button>
</div>
<div class="results" id="refiResults">
<p class="result-head">🏠 Your refinance verdict</p>
<div class="result-summary" id="refiSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Compare every refinance offer you receive — every calculation happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('refiShell');
  ToolPro.themeToggle(shell, document.getElementById('refiTheme'));
  var resBox = document.getElementById('refiResults');
  var out = document.getElementById('refiSummary');
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  function payment(P, apr, n){
    var r = apr / 100 / 12;
    if (r === 0) return P / n;
    var f = Math.pow(1 + r, n);
    return P * r * f / (f - 1);
  }
  document.getElementById('refiBtn').addEventListener('click', function(){
    var bal = num('refiBalance'), curRate = num('refiCurRate'), curYrs = num('refiCurYears');
    var newRate = num('refiNewRate'), newYrs = num('refiNewYears'), closing = num('refiClosing');
    if (isNaN(bal) || isNaN(curRate) || isNaN(curYrs) || isNaN(newRate) || isNaN(newYrs) || isNaN(closing)) { showError('Please fill in every field with a number.'); return; }
    if (bal <= 0) { showError('Loan balance must be greater than zero.'); return; }
    if (curRate < 0 || curRate > 25 || newRate < 0 || newRate > 25) { showError('Enter rates between 0% and 25%.'); return; }
    if (curYrs < 1 || curYrs > 40 || Math.floor(curYrs) !== curYrs || newYrs < 1 || newYrs > 40 || Math.floor(newYrs) !== newYrs) { showError('Enter whole-year terms between 1 and 40.'); return; }
    if (closing < 0) { showError('Closing costs cannot be negative.'); return; }
    var curMonths = curYrs * 12, newMonths = newYrs * 12;
    var curM = payment(bal, curRate, curMonths);
    var newM = payment(bal, newRate, newMonths);
    var savings = curM - newM;
    var curTotal = curM * curMonths;
    var newTotal = newM * newMonths + closing;
    var lifetime = curTotal - newTotal;
    var html = '<p style="margin:.2rem 0">Current payment: <strong>' + fmt(curM) + '</strong> per month · New payment: <strong>' + fmt(newM) + '</strong> per month</p>';
    if (savings <= 0) {
      html += '<p style="margin:.2rem 0"><strong>This refinance does not save you money monthly</strong> — the new payment is not lower than your current one, so there is no monthly break-even point.</p>';
    } else {
      html += '<p style="font-size:1.3rem;margin:.2rem 0">Monthly savings: <strong>' + fmt(savings) + '</strong></p>';
      if (closing === 0) {
        html += '<p style="margin:.2rem 0">Break-even: <strong>immediate</strong> — with no closing costs, the savings start with your first new payment.</p>';
      } else {
        var be = Math.ceil(closing / savings);
        html += '<p style="margin:.2rem 0">Break-even point: <strong>about ' + be + ' months</strong> (' + fmt(closing) + ' in closing costs ÷ ' + fmt(savings) + ' saved per month). Stay in the home longer than that and the refinance pays off.</p>';
      }
    }
    if (lifetime >= 0) {
      html += '<p style="margin:.2rem 0">Net lifetime savings: <strong style="color:#0b6e4f">' + fmt(lifetime) + '</strong> (keeping the current loan costs ' + fmt(curTotal) + ' in total; the new loan costs ' + fmt(newTotal) + ' including closing costs).</p>';
    } else {
      html += '<p style="margin:.2rem 0">Net lifetime cost: <strong>' + fmt(-lifetime) + '</strong> more than keeping your current loan (keeping it costs ' + fmt(curTotal) + ' in total; the new loan costs ' + fmt(newTotal) + ' including closing costs) — usually because the new term stretches the loan out.</p>';
    }
    out.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Refinance compared', 'ok');
  });
  document.getElementById('refiClear').addEventListener('click', function(){
    ['refiBalance','refiCurRate','refiCurYears','refiNewRate','refiNewYears','refiClosing'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>

## The formula

Both payments use the standard loan formula on the same balance, with monthly rate r = APR ÷ 100 ÷ 12 and n = term in months: **M = P × r × (1 + r)^n ÷ ((1 + r)^n − 1)**. Monthly savings are the current payment minus the new payment, and the break-even point is **closing costs ÷ monthly savings** — the month where cumulative savings catch up with what the refinance cost you. Net lifetime savings compare the full remaining cost of the current loan (payment × months left) against the new loan's full cost (payment × new months + closing costs).

## Everyday uses

- **Rate-drop decisions:** rates fell a point since you bought — find out in seconds whether a refinance is actually worth it for your balance.
- **Offer comparisons:** lenders quote different rates, terms, and closing costs; this turns each offer into one break-even number.
- **Move-or-stay planning:** if you might sell in three years, the break-even month tells you whether refinancing before the move makes sense.
- **Term-reset awareness:** see the trade-off between a lower payment on a fresh 30-year term and the extra lifetime interest it can add.

## Frequently asked questions

### What is a good break-even point?

Shorter is better. Many homeowners look for a break-even under 24–36 months, and it only makes sense if you expect to stay in the home (and keep the loan) well past that point. If you might move or refinance again before break-even, the closing costs are money lost.

### Why can monthly savings be positive but lifetime savings negative?

Because the new loan may stretch your balance over more years. Restarting a 30-year clock lowers each payment but adds years of interest. That is why this calculator shows both figures — a lower payment is not the same thing as a cheaper loan.

### What closing costs should I include?

Lender fees, appraisal, title insurance, recording fees, and any points you pay — typically 2–5% of the loan amount. If the lender rolls the costs into the loan instead of charging them upfront, add them to the balance you enter so the comparison stays honest.
