---
title: "Free Loan Amortization Calculator"
description: "Free loan amortization calculator: enter any loan amount, rate, and term to see your monthly payment and a full schedule."
date: 2026-09-29
draft: false
---

Ever wonder why your loan balance barely moves in the first year? That's amortization: early payments are mostly interest, later ones mostly principal. This free calculator shows your monthly payment and a month-by-month schedule so you can see exactly where your money goes.

<style>
.am-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.88rem}
.am-table th,.am-table td{padding:.4rem .35rem;border-bottom:1px solid var(--border);text-align:right}
.am-table th{background:var(--accent-soft);color:var(--accent-dark);font-weight:700}
.am-table-wrap{overflow-x:auto}
</style>

<div class="tool-shell" id="laShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h20v-3H2v3zm14-12v7h3v-7h-3zm-4-9L2 6v2h20V6l-10-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Loan Amortization Calculator</h2>
<p>See your monthly payment and exactly where every dollar goes — principal vs. interest.</p>
</div>
<button type="button" class="theme-toggle" id="laTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Loan amount</p>
<div class="settings-grid">
<div class="setting">
<label for="laAmount">Loan amount</label>
<input type="number" id="laAmount" class="tool-input" placeholder="e.g. 20000" min="1">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Rate &amp; term</p>
<div class="settings-panel">
<div class="preset-row" id="laPresets">
<button type="button" class="preset-chip" data-r="6" data-y="5">🚗 5-year auto — 6%</button>
<button type="button" class="preset-chip" data-r="6" data-y="15">🏠 15-year home — 6%</button>
<button type="button" class="preset-chip" data-r="7" data-y="30">🏡 30-year home — 7%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="laRateRange">Annual interest rate: <span class="val" id="laRateVal">6.5%</span></label>
<input type="range" id="laRateRange" min="0" max="40" step="0.01" value="6.5">
<input type="number" id="laRate" class="tool-input" placeholder="e.g. 6.5" min="0" max="40" step="0.01" value="6.5" style="margin-top:.4rem">
</div>
<div class="setting">
<label for="laTermRange">Term: <span class="val" id="laTermVal">5 years</span></label>
<input type="range" id="laTermRange" min="1" max="40" step="1" value="5">
<input type="number" id="laTerm" class="tool-input" placeholder="e.g. 5" min="1" max="40" value="5" style="margin-top:.4rem">
<div class="hint">Shorter terms = higher payment, much less total interest.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build your schedule</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="laBtn">
<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h20v-3H2v3zm14-12v7h3v-7h-3zm-4-9L2 6v2h20V6l-10-5z"/></svg>
Build my schedule
</button>
<button type="button" class="btn-pro-outline" id="laClear">Clear</button>
</div>
<div class="results" id="laResults">
<p class="result-head">📊 Your amortization schedule</p>
<div class="result-summary" id="laSummary"></div>
<div id="laTableWrap"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Model any loan scenario — every calculation stays private in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('laShell');
  ToolPro.themeToggle(shell, document.getElementById('laTheme'));

  var rateRange = document.getElementById('laRateRange');
  var rateVal = document.getElementById('laRateVal');
  var rateNum = document.getElementById('laRate');
  var termRange = document.getElementById('laTermRange');
  var termVal = document.getElementById('laTermVal');
  var termNum = document.getElementById('laTerm');
  var presets = document.getElementById('laPresets');
  var resBox = document.getElementById('laResults');

  ToolPro.bindSlider(rateRange, rateVal, function(v){ return (+v).toFixed(2) + '%'; });
  ToolPro.bindSlider(termRange, termVal, function(v){ return v + (v === '1' ? ' year' : ' years'); });
  function pairRangeNum(range, num){
    range.addEventListener('input', function(){ num.value = range.value; });
    num.addEventListener('input', function(){
      if(num.value !== ''){ range.value = num.value; range.dispatchEvent(new Event('input')); }
    });
  }
  pairRangeNum(rateRange, rateNum);
  pairRangeNum(termRange, termNum);

  function setLoan(r, y){
    rateNum.value = r; rateRange.value = r; rateRange.dispatchEvent(new Event('input'));
    termNum.value = y; termRange.value = y; termRange.dispatchEvent(new Event('input'));
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.r == r && c.dataset.y == y);
    });
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setLoan(chip.dataset.r, chip.dataset.y);
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    document.getElementById('laSummary').innerHTML = '<p style="margin:0">' + msg + '</p>';
    document.getElementById('laTableWrap').innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function calcAmort() {
    var amount = parseFloat(document.getElementById('laAmount').value);
    var rate = parseFloat(rateNum.value);
    var years = parseFloat(termNum.value);
    if (!amount || amount <= 0) { showError('Please enter a valid loan amount.'); return; }
    if (isNaN(rate) || rate < 0 || rate > 40) { showError('Please enter an annual rate between 0 and 40%.'); return; }
    if (!years || years < 1 || years > 40) { showError('Please enter a term between 1 and 40 years.'); return; }
    var r = rate / 100 / 12, n = Math.round(years * 12);
    var pmt = rate === 0 ? amount / n : amount * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var bal = amount, totalInterest = 0;
    var rows = '';
    var show = Math.min(n, 12);
    for (var m = 1; m <= show; m++) {
      var interest = bal * r;
      var principal = pmt - interest;
      bal -= principal;
      if (bal < 0.005) bal = 0;
      totalInterest += interest;
      rows += '<tr><td>' + m + '</td><td>' + fmt(pmt) + '</td><td>' + fmt(principal) + '</td><td>' + fmt(interest) + '</td><td>' + fmt(bal) + '</td></tr>';
    }
    // finish off totals without rendering every row
    var bal2 = bal;
    for (var m2 = show + 1; m2 <= n; m2++) {
      var interest2 = bal2 * r;
      var principal2 = pmt - interest2;
      bal2 -= principal2;
      totalInterest += interest2;
    }
    var totalPaid = amount + totalInterest;
    var table = '<div class="am-table-wrap"><table class="am-table"><thead><tr><th>Mo</th><th>Payment</th><th>Principal</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      (n > 12 ? '<p>…showing the first 12 of ' + n + ' months. The pattern continues: principal rises, interest falls.</p>' : '');
    document.getElementById('laSummary').innerHTML =
      'Monthly payment: <strong>' + fmt(pmt) + '</strong> · Total interest: ' + fmt(totalInterest) + ' · Total repaid: ' + fmt(totalPaid);
    document.getElementById('laTableWrap').innerHTML = table +
      '<div class="callout"><strong>Tip:</strong> extra payments attack the principal directly. Even $50 extra a month can cut months off a multi-year loan — check that your lender applies extra payments to principal, not just future interest.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Schedule ready — ' + fmt(pmt) + '/mo', 'ok');
  }

  document.getElementById('laBtn').addEventListener('click', calcAmort);
  document.getElementById('laClear').addEventListener('click', function(){
    document.getElementById('laAmount').value = '';
    setLoan(6.5, 5);
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    resBox.classList.remove('show');
  });
})();
</script>

## Fixed-rate, simplified

This schedule assumes a fixed interest rate, equal monthly payments, and no fees or early-payment penalties. Variable-rate or interest-only loans follow different patterns — but the core idea holds: more principal, sooner, always wins.
