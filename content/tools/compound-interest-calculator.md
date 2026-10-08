---
title: "Free Compound Interest Calculator"
description: "Free compound interest calculator: enter your principal, monthly contribution, rate, and years to see your money grow, year by year."
date: 2026-09-29
draft: false
---

Compound interest is the engine behind almost every long-term savings plan — interest earning interest on itself. This free calculator shows you exactly how your money could grow over time, with a year-by-year breakdown. No sign-up, no fees, just math.

<style>
.cic-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.92rem}
.cic-table th,.cic-table td{padding:.45rem .4rem;border-bottom:1px solid var(--border);text-align:right}
.cic-table th:first-child,.cic-table td:first-child{text-align:left}
.cic-table th{background:var(--accent-soft);color:var(--accent-dark);font-weight:700}
.cic-table td:first-child{font-weight:600}
</style>

<div class="tool-shell" id="ciShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compound Interest Calculator</h2>
<p>Watch your savings snowball — year-by-year growth from the eighth wonder of the world.</p>
</div>
<button type="button" class="theme-toggle" id="ciTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your contributions</p>
<div class="settings-grid">
<div class="setting">
<label for="ciPrincipal">Starting amount</label>
<input type="number" id="ciPrincipal" class="tool-input" placeholder="e.g. 1000" min="0">
</div>
<div class="setting">
<label for="ciMonthly">Monthly contribution</label>
<input type="number" id="ciMonthly" class="tool-input" placeholder="e.g. 200" min="0">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Growth settings</p>
<div class="settings-panel">
<div class="preset-row" id="ciPresets">
<button type="button" class="preset-chip" data-rate="4">🐢 Conservative — 4%</button>
<button type="button" class="preset-chip active" data-rate="7">⚖️ Balanced — 7%</button>
<button type="button" class="preset-chip" data-rate="10">🚀 Aggressive — 10%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ciRateRange">Annual interest rate: <span class="val" id="ciRateVal">7.0%</span></label>
<input type="range" id="ciRateRange" min="0" max="50" step="0.1" value="7">
<input type="number" id="ciRate" class="tool-input" placeholder="e.g. 7" min="0" max="50" step="0.1" value="7" style="margin-top:.4rem">
<div class="hint">Long-run stock market returns average ~7% after inflation.</div>
</div>
<div class="setting">
<label for="ciYearsRange">Number of years: <span class="val" id="ciYearsVal">20</span></label>
<input type="range" id="ciYearsRange" min="1" max="80" step="1" value="20">
<input type="number" id="ciYears" class="tool-input" placeholder="e.g. 20" min="1" max="80" value="20" style="margin-top:.4rem">
<div class="hint">Time matters more than timing — start early.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your growth</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ciBtn">
<svg viewBox="0 0 24 24"><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/></svg>
Calculate growth
</button>
<button type="button" class="btn-pro-outline" id="ciClear">Clear</button>
</div>
<div class="results" id="ciResults">
<p class="result-head">📈 Your growth projection</p>
<div class="result-summary" id="ciSummary"></div>
<div id="ciTableWrap"></div>
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
  var shell = document.getElementById('ciShell');
  ToolPro.themeToggle(shell, document.getElementById('ciTheme'));

  var rateRange = document.getElementById('ciRateRange');
  var rateVal = document.getElementById('ciRateVal');
  var rateNum = document.getElementById('ciRate');
  var yearsRange = document.getElementById('ciYearsRange');
  var yearsVal = document.getElementById('ciYearsVal');
  var yearsNum = document.getElementById('ciYears');
  var presets = document.getElementById('ciPresets');
  var resBox = document.getElementById('ciResults');

  ToolPro.bindSlider(rateRange, rateVal, function(v){ return (+v).toFixed(1) + '%'; });
  ToolPro.bindSlider(yearsRange, yearsVal, function(v){ return v; });
  function syncRateFromRange(){ rateNum.value = rateRange.value; }
  rateRange.addEventListener('input', syncRateFromRange);
  rateNum.addEventListener('input', function(){
    if(rateNum.value !== ''){ rateRange.value = rateNum.value; rateRange.dispatchEvent(new Event('input')); }
  });
  function syncYearsFromRange(){ yearsNum.value = yearsRange.value; }
  yearsRange.addEventListener('input', syncYearsFromRange);
  yearsNum.addEventListener('input', function(){
    if(yearsNum.value !== ''){ yearsRange.value = yearsNum.value; yearsRange.dispatchEvent(new Event('input')); }
  });
  function setRate(r){
    rateNum.value = r; rateRange.value = r; rateRange.dispatchEvent(new Event('input'));
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', +c.dataset.rate === +r);
    });
  }
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    setRate(chip.dataset.rate);
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    document.getElementById('ciSummary').innerHTML = '<p style="margin:0">' + msg + '</p>';
    document.getElementById('ciTableWrap').innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('ciBtn').addEventListener('click', function(){
    var p = parseFloat(document.getElementById('ciPrincipal').value) || 0;
    var m = parseFloat(document.getElementById('ciMonthly').value) || 0;
    var rate = parseFloat(rateNum.value);
    var years = parseInt(yearsNum.value, 10);
    if (isNaN(rate) || rate < 0 || rate > 50) { showError('Please enter an annual rate between 0 and 50%.'); return; }
    if (!years || years < 1 || years > 80) { showError('Please enter a number of years between 1 and 80.'); return; }
    if (p < 0 || m < 0) { showError('Amounts cannot be negative.'); return; }
    var r = rate / 100;
    var balance = p, invested = p, finalBalance = p;
    var rows = '', maxBal = p;
    var yearly = [];
    for (var y = 1; y <= years; y++) {
      balance = balance * (1 + r) + m * 12;
      invested += m * 12;
      yearly.push({y: y, bal: balance, inv: invested});
      if (balance > maxBal) maxBal = balance;
    }
    finalBalance = balance;
    var interest = finalBalance - invested;
    yearly.forEach(function (row) {
      var pct = maxBal > 0 ? (row.bal / maxBal * 100) : 0;
      rows += '<tr><td>' + row.y + '</td><td>' + fmt(row.inv) + '</td><td>' + fmt(row.bal - row.inv) + '</td><td>' + fmt(row.bal) + '</td></tr>' +
        '<tr><td colspan="4" style="padding-top:0"><div class="bar" style="margin:0"><i style="width:' + pct.toFixed(1) + '%;background:#0b6e4f"></i></div></td></tr>';
    });
    document.getElementById('ciSummary').innerHTML =
      'Future value: <strong>' + fmt(finalBalance) + '</strong> · You invested: ' + fmt(invested) +
      ' · Interest earned: <strong style="color:#0b6e4f">' + fmt(interest) + '</strong>';
    document.getElementById('ciTableWrap').innerHTML =
      '<table class="cic-table"><thead><tr><th>Year</th><th>Invested</th><th>Interest</th><th>Balance</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<div class="callout"><strong>Tip:</strong> time matters more than timing. Starting ten years earlier often beats a higher contribution later — small monthly amounts add up faster than you think.</div>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Growth projection ready', 'ok');
  });

  document.getElementById('ciClear').addEventListener('click', function(){
    document.getElementById('ciPrincipal').value = '';
    document.getElementById('ciMonthly').value = '';
    setRate(7);
    yearsNum.value = 20; yearsRange.value = 20; yearsRange.dispatchEvent(new Event('input'));
    resBox.classList.remove('show');
  });
})();
</script>

## Why compounding beats saving alone

If you invest $200 a month for 20 years at a 7% average annual return, you'll have put in $48,000 — but your balance can be close to double that. The extra comes from growth compounding on growth, which accelerates the longer you stay invested.
