---
title: "Free APY to APR Converter"
description: "Free APY to APR converter: convert between APR and APY for any compounding frequency and compare how the same rate looks at each frequency."
category: finance
date: 2026-10-12
draft: false
---

## How it works

APR is the simple yearly rate; APY is what you actually earn (or pay) once compounding is included. Pick a direction, enter a rate, and choose a compounding frequency — the converter gives you the equivalent rate plus a side-by-side table of the same rate under every compounding schedule.

<style>
.apy-table{width:100%;border-collapse:collapse;margin-top:1rem;font-size:.92rem}
.apy-table th,.apy-table td{padding:.45rem .4rem;border-bottom:1px solid var(--border);text-align:right}
.apy-table th:first-child,.apy-table td:first-child{text-align:left}
.apy-table th{background:var(--accent-soft);color:var(--accent-dark);font-weight:700}
.apy-table tr.hl td{font-weight:700}
</style>

<div class="tool-shell" id="apyShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19.7 2.3c-.6-.6-1.5-.6-2.1 0L2.3 17.6c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.7-.1 1-.4L19.7 4.4c.6-.6.6-1.6 0-2.1zM7 5C4.8 5 3 6.8 3 9s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10 2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>APY to APR Converter</h2>
<p>Convert APR to APY (or back) for any compounding schedule — and see all five side by side.</p>
</div>
<button type="button" class="theme-toggle" id="apyTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Direction and rate</p>
<div class="settings-grid">
<div class="setting">
<label for="apyMode">Convert</label>
<select id="apyMode" class="tool-input">
<option value="apr2apy" selected>APR → APY</option>
<option value="apy2apr">APY → APR</option>
</select>
</div>
<div class="setting">
<label for="apyRate">Rate (%)</label>
<input type="number" id="apyRate" class="tool-input" placeholder="e.g. 5" min="0" max="100" step="0.01">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compounding frequency</p>
<div class="setting">
<label for="apyFreq">How often interest compounds</label>
<select id="apyFreq" class="tool-input" style="max-width:260px;">
<option value="1">Annually</option>
<option value="2">Semiannually</option>
<option value="4">Quarterly</option>
<option value="12" selected>Monthly</option>
<option value="365">Daily</option>
</select>
<div class="hint">Savings accounts usually compound daily or monthly; most loans compound monthly.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; compare</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="apyBtn">
<svg viewBox="0 0 24 24"><path d="M19.7 2.3c-.6-.6-1.5-.6-2.1 0L2.3 17.6c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.7-.1 1-.4L19.7 4.4c.6-.6.6-1.6 0-2.1z"/></svg>
Convert rate
</button>
<button type="button" class="btn-pro-outline" id="apyClear">Clear</button>
</div>
<div class="results" id="apyResults">
<p class="result-head">🔁 Conversion result</p>
<div class="result-summary" id="apyResult"></div>
<div id="apyTableWrap"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many rates as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('apyShell');
  ToolPro.themeToggle(shell, document.getElementById('apyTheme'));
  var modeEl = document.getElementById('apyMode');
  var rateEl = document.getElementById('apyRate');
  var freqEl = document.getElementById('apyFreq');
  var resBox = document.getElementById('apyResults');
  var out = document.getElementById('apyResult');
  var tableWrap = document.getElementById('apyTableWrap');
  var FREQS = [
    { m: 1, label: 'Annually' },
    { m: 2, label: 'Semiannually' },
    { m: 4, label: 'Quarterly' },
    { m: 12, label: 'Monthly' },
    { m: 365, label: 'Daily' }
  ];

  function pct(n){ return n.toFixed(2) + '%'; }
  function aprToApy(aprPct, m){ return (Math.pow(1 + (aprPct / 100) / m, m) - 1) * 100; }
  function apyToApr(apyPct, m){ return m * (Math.pow(1 + apyPct / 100, 1 / m) - 1) * 100; }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    tableWrap.innerHTML = '';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('apyBtn').addEventListener('click', function(){
    var mode = modeEl.value;
    var rate = parseFloat(rateEl.value);
    var m = parseInt(freqEl.value, 10);
    if (isNaN(rate) || rate < 0 || rate > 100) { showError('Please enter a rate between 0 and 100%.'); return; }
    var freqLabel = freqEl.options[freqEl.selectedIndex].text;
    var result, fromName, toName;
    if (mode === 'apr2apy') { result = aprToApy(rate, m); fromName = 'APR'; toName = 'APY'; }
    else { result = apyToApr(rate, m); fromName = 'APY'; toName = 'APR'; }
    out.innerHTML = '<p style="font-size:1.4rem;">' + pct(rate) + ' ' + fromName + ' = <strong>' + pct(result) + ' ' + toName + '</strong></p>'
      + '<p>Compounding: ' + freqLabel.toLowerCase() + ' (' + m + '× per year)</p>';
    var rows = '';
    FREQS.forEach(function(f){
      var v = mode === 'apr2apy' ? aprToApy(rate, f.m) : apyToApr(rate, f.m);
      rows += '<tr' + (f.m === m ? ' class="hl"' : '') + '><td>' + f.label + '</td><td>' + pct(v) + '</td></tr>';
    });
    tableWrap.innerHTML = '<table class="apy-table"><thead><tr><th>Compounding</th><th>Equivalent ' + toName + '</th></tr></thead><tbody>' + rows + '</tbody></table>'
      + '<p style="margin-top:.6rem;">The same ' + pct(rate) + ' ' + fromName + ' under every compounding schedule — more frequent compounding pushes the ' + toName + ' further from the ' + fromName + '.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Rate converted', 'ok');
  });

  document.getElementById('apyClear').addEventListener('click', function(){
    rateEl.value = '';
    tableWrap.innerHTML = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Compounding means each interest payment itself starts earning interest. To convert APR to APY: **APY = (1 + APR ÷ m)^m − 1**, where m is the number of compounding periods per year. To go the other way: **APR = m × ((1 + APY)^(1/m) − 1)**. With annual compounding (m = 1) the two rates are identical; the more often interest compounds, the wider the gap grows.

## Everyday uses

- **Comparing savings accounts:** banks advertise APY, so convert a loan-style APR quote to APY for a fair comparison.
- **Credit card reality check:** most cards compound daily — see what a 24% APR really becomes over a year.
- **Comparing CD offers:** two CDs with the same APR but different compounding do not pay the same; APY settles it.

## Frequently asked questions

**Which is bigger, APR or APY?**
For the same underlying rate, APY is always equal to or bigger than APR, because APY includes the effect of compounding. They only match when interest compounds once a year.

**Why do banks quote APY for savings but APR for loans?**
US law requires it: the Truth in Savings Act makes banks disclose APY on deposits so savers can compare earnings, and the Truth in Lending Act requires APR on loans so borrowers see the borrowing rate.

**Does compounding frequency really matter?**
At low rates the difference is pennies, but it grows with the rate. On a 25% credit card APR, daily compounding adds roughly another 3 percentage points of effective cost over a year.
