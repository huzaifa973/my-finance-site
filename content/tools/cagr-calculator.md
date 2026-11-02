---
title: "Free CAGR Calculator — Compound Annual Growth Rate"
description: "Free CAGR calculator: find the compound annual growth rate of any investment from its beginning value, ending value and years — plus total growth and a reverse check."
category: finance
date: 2026-11-02
draft: false
---
## How it works
CAGR (Compound Annual Growth Rate) smooths a bumpy investment into one steady yearly growth rate. Enter the beginning value, the ending value and the number of years — this calculator gives you the CAGR, total growth and absolute gain, then runs the formula in reverse to confirm exactly what final value that CAGR produces.
<div class="tool-shell" id="cgrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>CAGR Calculator</h2>
<p>One honest yearly growth rate for any investment — no matter how bumpy the ride.</p>
</div>
<button type="button" class="theme-toggle" id="cgrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Start and end values</p>
<div class="settings-grid">
<div class="setting">
<label for="cgrStart">Beginning value ($)</label>
<input type="number" id="cgrStart" class="tool-input" placeholder="e.g. 10000" min="0">
</div>
<div class="setting">
<label for="cgrEnd">Ending value ($)</label>
<input type="number" id="cgrEnd" class="tool-input" placeholder="e.g. 19500" min="0">
<div class="hint">Use values from the same investment, with nothing added or withdrawn in between.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Time period</p>
<div class="settings-grid">
<div class="setting">
<label for="cgrYears">Number of years</label>
<input type="number" id="cgrYears" class="tool-input" placeholder="e.g. 5" min="0" max="500" step="0.1">
<div class="hint">Fractions work too — 2.5 for two and a half years. In PKR, replace $ with Rs.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your growth rate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cgrBtn">
<svg viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>
Calculate CAGR
</button>
<button type="button" class="btn-pro-outline" id="cgrClear">Clear</button>
</div>
<div class="results" id="cgrResults">
<p class="result-head">📊 Your growth rate</p>
<div class="result-summary" id="cgrSummary"></div>
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
  var shell = document.getElementById('cgrShell');
  ToolPro.themeToggle(shell, document.getElementById('cgrTheme'));
  var resBox = document.getElementById('cgrResults');
  var summary = document.getElementById('cgrSummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function pct(n){ return n.toFixed(2) + '%'; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('cgrBtn').addEventListener('click', function(){
    var start = num('cgrStart');
    var end = num('cgrEnd');
    var years = num('cgrYears');
    if (isNaN(start) || start <= 0) { showError('Enter a beginning value greater than $0.'); return; }
    if (isNaN(end) || end < 0) { showError('Enter an ending value of $0 or more.'); return; }
    if (isNaN(years) || years <= 0 || years > 500) { showError('Enter a number of years greater than 0.'); return; }
    var cagr = (Math.pow(end / start, 1 / years) - 1) * 100;
    var totalGrowth = (end - start) / start * 100;
    var gain = end - start;
    /* Reverse: apply the CAGR forward to reproduce the final value */
    var reverseEnd = start * Math.pow(1 + cagr / 100, years);
    var inFiveMore = end * Math.pow(1 + cagr / 100, 5);
    summary.innerHTML = '<p style="font-size:1.3rem;">CAGR: <strong>' + pct(cagr) + '</strong> per year</p>'
      + '<p>Total growth: <strong>' + pct(totalGrowth) + '</strong> over ' + years + ' year' + (years === 1 ? '' : 's') + '</p>'
      + '<p>Absolute gain: <strong style="color:#0b6e4f">' + fmt(gain) + '</strong> (' + fmt(start) + ' → ' + fmt(end) + ')</p>'
      + '<p style="margin-top:0.6rem;border-top:1px solid currentColor;opacity:0.85;padding-top:0.6rem;">Reverse check: ' + fmt(start) + ' × (1 + ' + pct(cagr) + ')^' + years + ' = <strong>' + fmt(reverseEnd) + '</strong> — matches your ending value.</p>'
      + '<p>At this same CAGR, five more years would take it to <strong>' + fmt(inFiveMore) + '</strong>.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('CAGR calculated', 'ok');
  });
  document.getElementById('cgrClear').addEventListener('click', function(){
    var ids = ['cgrStart','cgrEnd','cgrYears'];
    ids.forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
CAGR answers the question: "What steady yearly growth rate would turn the start value into the end value over this many years?" The formula is:
**CAGR = (Ending value ÷ Beginning value)^(1 ÷ years) − 1**
Total growth is simpler: (Ending − Beginning) ÷ Beginning × 100, and the absolute gain is Ending − Beginning. The reverse check applies the CAGR forward — Beginning × (1 + CAGR)^years — which must reproduce the ending value exactly. A quick sanity check: money that doubles in 5 years has a CAGR of about 14.87%, no matter what path it took to get there.
## Everyday uses
- **Portfolio check-up:** compare your brokerage or mutual fund growth against an index fund's CAGR over the same years.
- **Business revenue:** founders and freelancers use CAGR to describe multi-year revenue growth in one number.
- **Real estate:** see the yearly appreciation rate of a property between purchase and sale prices.
## Frequently asked questions
### How is CAGR different from average annual return?
Average return adds up each year's return and divides by the number of years — it ignores compounding and can overstate growth. CAGR is the single rate that, compounded every year, exactly reproduces the start-to-end result, so it is the fairer comparison across investments.
### Can CAGR be negative?
Yes. If the ending value is lower than the beginning value, CAGR is negative — for example, $5,000 shrinking to $3,500 over 3 years is a CAGR of about −11.21% per year.
### What if I added or withdrew money along the way?
Then a simple start-to-end CAGR is misleading, because the ending value includes your deposits or withdrawals, not just growth. For accounts with regular contributions, a money-weighted measure like IRR (XIRR in a spreadsheet) is the better tool.
