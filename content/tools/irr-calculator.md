---
title: "Free IRR Calculator"
description: "Free IRR calculator: enter an initial investment and its yearly cash flows to find the internal rate of return, plus NPV at your discount rate."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter what you put in up front, then the cash the investment returns (or costs) in each following year. The calculator finds the internal rate of return — the discount rate that makes the net present value exactly zero — and also shows the NPV at a discount rate you choose.

<div class="tool-shell" id="irrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19.3 4.7c-.7-.7-1.7-.7-2.4 0L4.7 16.9c-.7.7-.7 1.7 0 2.4.3.3.7.4 1.2.4.4 0 .9-.1 1.2-.4L19.3 7.1c.7-.7.7-1.7 0-2.4zM6.5 9C7.9 9 9 7.9 9 6.5S7.9 4 6.5 4 4 5.1 4 6.5 5.1 9 6.5 9zm0-3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM17.5 20c1.4 0 2.5-1.1 2.5-2.5S18.9 15 17.5 15 15 16.1 15 17.5s1.1 2.5 2.5 2.5zm0-3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>IRR Calculator</h2>
<p>The internal rate of return on any investment, worked out from its yearly cash flows.</p>
</div>
<button type="button" class="theme-toggle" id="irrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> The investment</p>
<div class="settings-grid">
<div class="setting">
<label for="irrInitial">Initial investment ($)</label>
<input type="number" id="irrInitial" class="tool-input" placeholder="e.g. 10000" min="0">
<div class="hint">Enter it as a positive number — the calculator treats it as money going out.</div>
</div>
<div class="setting">
<label for="irrDiscount">Discount rate for NPV (%)</label>
<input type="number" id="irrDiscount" class="tool-input" placeholder="e.g. 10" min="0" max="100" step="0.1" value="10">
<div class="hint">Your required rate of return — often your cost of capital or an alternative investment's return.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Yearly cash flows</p>
<div id="irrRows"></div>
<div class="tool-actions" style="margin-top:.4rem">
<button type="button" class="btn-pro-outline" id="irrAdd">+ Add another year</button>
</div>
<div class="hint">Money the investment pays you is positive; money you put in later is negative. A final sale price goes in the last year.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate IRR &amp; NPV</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="irrBtn">
<svg viewBox="0 0 24 24"><path d="M19.3 4.7c-.7-.7-1.7-.7-2.4 0L4.7 16.9c-.7.7-.7 1.7 0 2.4.3.3.7.4 1.2.4.4 0 .9-.1 1.2-.4L19.3 7.1c.7-.7.7-1.7 0-2.4zM6.5 9C7.9 9 9 7.9 9 6.5S7.9 4 6.5 4 4 5.1 4 6.5 5.1 9 6.5 9zm0-3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM17.5 20c1.4 0 2.5-1.1 2.5-2.5S18.9 15 17.5 15 15 16.1 15 17.5s1.1 2.5 2.5 2.5zm0-3.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/></svg>
Calculate IRR
</button>
<button type="button" class="btn-pro-outline" id="irrClear">Clear</button>
</div>
<div class="results" id="irrResults">
<p class="result-head">🎯 Your IRR result</p>
<div class="result-summary" id="irrSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Score as many deals as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('irrShell');
  ToolPro.themeToggle(shell, document.getElementById('irrTheme'));
  var resBox = document.getElementById('irrResults');
  var out = document.getElementById('irrSummary');
  var rowsWrap = document.getElementById('irrRows');
  var flows = ['', '', '', '', ''];
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }
  function renderRows(){
    rowsWrap.innerHTML = '';
    flows.forEach(function(v, i){
      var row = document.createElement('div');
      row.className = 'setting';
      row.style.marginBottom = '.6rem';
      var lab = document.createElement('label');
      lab.textContent = 'Year ' + (i + 1) + ' cash flow ($)';
      row.appendChild(lab);
      var inp = document.createElement('input');
      inp.type = 'number';
      inp.className = 'tool-input';
      inp.value = v;
      inp.placeholder = 'e.g. 3000';
      inp.addEventListener('input', function(){ flows[i] = inp.value; });
      row.appendChild(inp);
      if (flows.length > 1) {
        var rm = document.createElement('button');
        rm.type = 'button';
        rm.className = 'btn-pro-outline';
        rm.textContent = 'Remove year ' + (i + 1);
        rm.style.marginTop = '.4rem';
        rm.addEventListener('click', function(){ flows.splice(i, 1); renderRows(); });
        row.appendChild(rm);
      }
      rowsWrap.appendChild(row);
    });
  }
  renderRows();
  document.getElementById('irrAdd').addEventListener('click', function(){
    flows.push('');
    renderRows();
    ToolPro.toast('Year ' + flows.length + ' added');
  });
  function npv(rate, initial, cfs){
    var v = -initial;
    for (var t = 0; t < cfs.length; t++) { v += cfs[t] / Math.pow(1 + rate, t + 1); }
    return v;
  }
  document.getElementById('irrBtn').addEventListener('click', function(){
    var initial = num('irrInitial');
    var disc = num('irrDiscount');
    if (isNaN(initial) || initial <= 0) { showError('Enter your initial investment as a positive number.'); return; }
    if (isNaN(disc) || disc < 0) { showError('Enter a discount rate of 0% or more.'); return; }
    var cfs = [];
    var bad = false, anyNonZero = false;
    flows.forEach(function(v){
      if (v === '') { cfs.push(0); return; }
      var n = parseFloat(v);
      if (isNaN(n)) { bad = true; return; }
      if (n !== 0) anyNonZero = true;
      cfs.push(n);
    });
    if (bad) { showError('Cash flows must be numbers.'); return; }
    if (!anyNonZero) { showError('Enter at least one non-zero cash flow.'); return; }
    var npvAtDisc = npv(disc / 100, initial, cfs);
    var lo = -0.99, hi = 10.0;
    var flo = npv(lo, initial, cfs), fhi = npv(hi, initial, cfs);
    if (flo * fhi > 0) {
      out.innerHTML = '<p style="margin:.2rem 0"><strong>IRR could not be found for these cash flows</strong> — the NPV never crosses zero between -99% and 1000%, which usually means the cash flows never change sign overall or change sign more than once.</p>'
        + '<p style="margin:.2rem 0">NPV at your ' + disc + '% discount rate: <strong>' + fmt(npvAtDisc) + '</strong></p>';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('No IRR found for these cash flows', 'err');
      return;
    }
    for (var i = 0; i < 200; i++) {
      var mid = (lo + hi) / 2;
      var fm = npv(mid, initial, cfs);
      if (flo * fm <= 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
    }
    var irr = (lo + hi) / 2 * 100;
    var verdict = npvAtDisc > 0
      ? 'At a ' + disc + '% discount rate the NPV is positive — this investment beats your required return.'
      : 'At a ' + disc + '% discount rate the NPV is not positive — this investment falls short of your required return.';
    out.innerHTML = '<p style="font-size:1.3rem;margin:.2rem 0">IRR: <strong>' + irr.toFixed(2) + '%</strong> per year</p>'
      + '<p style="margin:.2rem 0">NPV at ' + disc + '% discount rate: <strong>' + fmt(npvAtDisc) + '</strong></p>'
      + '<p style="margin:.2rem 0">' + verdict + '</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('IRR calculated', 'ok');
  });
  document.getElementById('irrClear').addEventListener('click', function(){
    document.getElementById('irrInitial').value = '';
    document.getElementById('irrDiscount').value = '10';
    flows = ['', '', '', '', ''];
    renderRows();
    resBox.classList.remove('show');
  });
})();
</script>

## The formula

IRR is the rate r that solves **NPV = 0**, where NPV = −initial investment + Σ cash flow in year t ÷ (1 + r)^t. There is no direct algebraic solution, so the calculator uses bisection: it evaluates NPV at −99% and at 1000%, confirms the sign changes between them, then halves the interval 200 times until the rate is pinned down to full precision. If NPV has the same sign at both ends, no single IRR exists for those cash flows and the calculator says so instead of guessing.

## Everyday uses

- **Rental property deals:** enter the purchase price, yearly net rent, and the expected sale price in the final year to score a deal in seconds.
- **Business projects:** compare two projects with different cash-flow shapes on one equal footing — the higher IRR usually wins.
- **Equipment purchases:** weigh a machine's cost against the yearly savings and income it generates.
- **Startup and side-hustle checks:** see what return your money in actually has to beat before an opportunity is worth it.

## Frequently asked questions

### What is a good IRR?

It depends on the risk. A common rule of thumb: the IRR should comfortably beat a safe alternative (like Treasury bonds) and your own required return. Many investors look for 12–20%+ on riskier private deals, while stable real estate often lands in the high single digits.

### Why can some cash flows have no IRR — or several?

IRR exists when NPV crosses zero. If every cash flow after the initial investment is positive, NPV crosses exactly once. If cash flows flip sign more than once (for example, a big cost in the final year), NPV can cross zero multiple times, giving several valid IRRs — in those cases, NPV at your discount rate is the more reliable guide.

### What is the difference between IRR and NPV?

IRR is a percentage — the break-even rate of return. NPV is a dollar amount — how much value the investment creates above your required return, in today's dollars. Use IRR to compare efficiency, NPV to compare actual value created.
