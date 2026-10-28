---
title: "New Jersey Income Tax Calculator 2026 — Estimate Your NJ Tax"
description: "Estimate your 2026 New Jersey income tax with real brackets — single, joint, head of household — plus exemptions and a bracket-by-bracket breakdown. Free, in your browser."
category: finance
date: 2026-10-28
draft: false
---

New Jersey taxes income on a graduated scale from 1.4% to 10.75%, and it works differently from federal tax: there is no standard deduction — instead you get personal exemptions ($1,000 single, $2,000 joint, $1,500 per dependent) that come off your income before the brackets apply. Enter your income and filing status and this calculator applies the real 2026 NJ brackets (Table A for single filers, Table B for joint and head-of-household filers) with a bracket-by-bracket breakdown. Results are estimates, not tax advice — credits, the property-tax deduction, and other adjustments are not included.

<div class="tool-shell" id="njcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>NJ Income Tax Calculator</h2>
<p>2026 New Jersey brackets — single, joint, head of household, with exemptions.</p>
</div>
<button type="button" class="theme-toggle" id="njcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your income &amp; filing status</p>
<div class="settings-grid">
<div class="setting">
<label for="njcIncome">Annual gross income ($) *</label>
<input type="number" id="njcIncome" class="tool-input" placeholder="e.g. 75000" min="0" step="100">
</div>
<div class="setting">
<label for="njcStatus">Filing status</label>
<select id="njcStatus" class="tool-input">
<option value="single" selected>Single (Table A)</option>
<option value="joint">Married filing jointly (Table B)</option>
<option value="hoh">Head of household (Table B)</option>
<option value="mfs">Married filing separately (Table A)</option>
</select>
</div>
<div class="setting">
<label for="njcDeps">Dependents</label>
<input type="number" id="njcDeps" class="tool-input" placeholder="0" min="0" max="20" value="0">
<div class="hint">$1,500 exemption each.</div>
</div>
<div class="setting">
<label for="njcOther">Other NJ deductions ($, optional)</label>
<input type="number" id="njcOther" class="tool-input" placeholder="e.g. property tax deduction" min="0" step="100">
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="njc65"><span></span> Age 65 or older (+$1,000 exemption)</label>
</div>
</div>
<div class="hint">New Jersey has no standard deduction. Personal exemptions: $1,000 single / $2,000 joint / $1,500 per dependent. Rates: 1.4%–10.75% (2026 NJ-1040 tables).</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Bracket tables used</p>
<div class="settings-panel">
<div class="preset-row" id="njcPresets">
<button type="button" class="preset-chip active" data-ex="75000">💼 Example: $75,000 single</button>
<button type="button" class="preset-chip" data-ex="150000">💼 Example: $150,000 joint</button>
<button type="button" class="preset-chip" data-ex="45000">💼 Example: $45,000 single</button>
</div>
<div class="hint">Table A (single / married filing separately): 1.4% to $20,000 · 1.75% to $35,000 · 3.5% to $40,000 · 5.525% to $75,000 · 6.37% to $500,000 · 8.97% to $1,000,000 · 10.75% above. Table B (joint / head of household): 1.4% to $20,000 · 1.75% to $50,000 · 2.45% to $70,000 · 3.5% to $80,000 · 5.525% to $150,000 · 6.37% to $500,000 · 8.97% to $1,000,000 · 10.75% above.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="njcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Calculate NJ Tax
</button>
<button type="button" class="btn-pro-outline" id="njcClear">Clear</button>
</div>
<div class="progress-wrap" id="njcProgWrap">
<div class="progress-bar"><i id="njcProgBar"></i></div>
<div class="progress-text" id="njcProgText">Calculating…</div>
</div>
<div class="results" id="njcResults">
<p class="result-head">✅ Your estimated New Jersey tax</p>
<div class="result-summary" id="njcSummary"></div>
<div class="result-grid" id="njcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited estimates — everything happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('njcShell');
  ToolPro.themeToggle(shell, document.getElementById('njcTheme'));
  var incomeEl = document.getElementById('njcIncome');
  var statusEl = document.getElementById('njcStatus');
  var depsEl = document.getElementById('njcDeps');
  var otherEl = document.getElementById('njcOther');
  var ageEl = document.getElementById('njc65');
  var btn = document.getElementById('njcBtn');
  var clearBtn = document.getElementById('njcClear');
  var resBox = document.getElementById('njcResults');
  var summaryEl = document.getElementById('njcSummary');
  var gridEl = document.getElementById('njcGrid');
  var progWrap = document.getElementById('njcProgWrap');
  var progBar = document.getElementById('njcProgBar');
  var TABLE_A = [
    { upTo: 20000, rate: 0.014 },
    { upTo: 35000, rate: 0.0175 },
    { upTo: 40000, rate: 0.035 },
    { upTo: 75000, rate: 0.05525 },
    { upTo: 500000, rate: 0.0637 },
    { upTo: 1000000, rate: 0.0897 },
    { upTo: Infinity, rate: 0.1075 }
  ];
  var TABLE_B = [
    { upTo: 20000, rate: 0.014 },
    { upTo: 50000, rate: 0.0175 },
    { upTo: 70000, rate: 0.0245 },
    { upTo: 80000, rate: 0.035 },
    { upTo: 150000, rate: 0.05525 },
    { upTo: 500000, rate: 0.0637 },
    { upTo: 1000000, rate: 0.0897 },
    { upTo: Infinity, rate: 0.1075 }
  ];
  function money(n){
    return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',').replace(/\.00$/, '');
  }
  function compute(gross, status, deps, other, over65){
    var baseEx = (status === 'joint') ? 2000 : 1000;
    var exemptions = baseEx + deps * 1500 + (over65 ? 1000 : 0);
    var taxable = Math.max(0, gross - exemptions - other);
    var table = (status === 'joint' || status === 'hoh') ? TABLE_B : TABLE_A;
    var tax = 0, lower = 0, marginal = 0, rows = [];
    table.forEach(function(b){
      if(taxable <= lower) return;
      var slice = Math.min(taxable, b.upTo) - lower;
      var sliceTax = slice * b.rate;
      tax += sliceTax;
      marginal = b.rate;
      rows.push({ from: lower, to: b.upTo, rate: b.rate, slice: slice, tax: sliceTax });
      lower = b.upTo;
    });
    return { exemptions: exemptions, taxable: taxable, tax: tax, marginal: marginal, rows: rows };
  }
  function refresh(){ btn.disabled = !(parseFloat(incomeEl.value) > 0); }
  incomeEl.addEventListener('input', refresh);
  document.getElementById('njcPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('njcPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var ex = chip.dataset.ex;
    incomeEl.value = ex;
    if(ex === '150000') statusEl.value = 'joint';
    else statusEl.value = 'single';
    depsEl.value = '0'; otherEl.value = ''; ageEl.checked = false;
    refresh();
    ToolPro.toast('Example loaded: $' + ex);
  });
  clearBtn.addEventListener('click', function(){
    [incomeEl, depsEl, otherEl].forEach(function(el){ el.value = ''; });
    ageEl.checked = false; statusEl.value = 'single';
    gridEl.innerHTML = ''; summaryEl.textContent = ''; resBox.classList.remove('show'); refresh();
  });
  btn.addEventListener('click', function(){
    var gross = parseFloat(incomeEl.value);
    if(!(gross > 0)){ ToolPro.toast('Enter your annual gross income first.', 'err'); return; }
    var status = statusEl.value;
    var deps = parseInt(depsEl.value, 10) || 0;
    var other = parseFloat(otherEl.value) || 0;
    var r = compute(gross, status, deps, other, ageEl.checked);
    progWrap.classList.add('show'); progBar.style.width = '60%';
    gridEl.innerHTML = '';
    var headCard = document.createElement('div');
    headCard.className = 'result-card';
    headCard.innerHTML = '<div class="r-name">Estimated NJ income tax</div><div class="r-stats"></div>';
    headCard.querySelector('.r-stats').textContent = 'Gross income: ' + money(gross) + ' · Exemptions: ' + money(r.exemptions) + (other ? ' · Other deductions: ' + money(other) : '') + ' · Taxable income: ' + money(r.taxable) + ' · Tax: ' + money(r.tax) + ' · Effective rate on gross: ' + (gross ? (r.tax / gross * 100).toFixed(2) : '0') + '% · Marginal rate: ' + (r.marginal * 100).toFixed(3).replace(/\.?0+$/, '') + '% · About ' + money(r.tax / 12) + ' per month · After-tax income: ' + money(gross - r.tax);
    gridEl.appendChild(headCard);
    var brCard = document.createElement('div');
    brCard.className = 'result-card';
    var lines = r.rows.map(function(row){
      var toLabel = row.to === Infinity ? 'and above' : 'to ' + money(row.to);
      return (row.rate * 100).toFixed(3).replace(/\.?0+$/, '') + '% on ' + money(row.from) + ' ' + toLabel + ': ' + money(row.slice) + ' taxed = ' + money(row.tax);
    }).join('\n');
    brCard.innerHTML = '<div class="r-name">Bracket-by-bracket breakdown</div><pre class="r-stats" style="white-space:pre-wrap;"></pre>';
    brCard.querySelector('pre').textContent = lines || 'No taxable income — no tax due.';
    gridEl.appendChild(brCard);
    progBar.style.width = '100%';
    summaryEl.textContent = '🎉 Estimated NJ tax: ' + money(r.tax) + ' on ' + money(r.taxable) + ' of taxable income (' + (gross ? (r.tax / gross * 100).toFixed(2) : '0') + '% of gross). This is an estimate — it excludes credits, the property-tax deduction rules, and other adjustments.';
    setTimeout(function(){ progWrap.classList.remove('show'); }, 300);
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Estimate calculated', 'ok');
  });
  refresh();
})();
</script>

## How it works

Enter your annual gross income, filing status, dependents, and any other NJ deductions. The calculator subtracts your personal exemptions ($1,000 single, $2,000 joint, $1,500 per dependent, $1,000 more if 65 or older) and other deductions to get NJ taxable income, then applies the 2026 graduated brackets slice by slice — only the income inside each bracket is taxed at that bracket's rate. You get the total tax, effective and marginal rates, a monthly equivalent, and the full bracket breakdown.

**Worked example (hand-checked):** $75,000 gross, single, no dependents. Taxable income = $75,000 − $1,000 = $74,000. Tax = $20,000 × 1.4% ($280) + $15,000 × 1.75% ($262.50) + $5,000 × 3.5% ($175) + $34,000 × 5.525% ($1,878.50) = **$2,596** — a 3.46% effective rate on gross income. Try the example preset to see it in the tool.

## Everyday uses

- **Paycheck planning** — estimate what NJ keeps before you ever see a pay stub.
- **Move decisions** — compare NJ tax against another state before relocating.
- **Raise math** — see what a raise is really worth after the marginal rate.
- **Filing prep** — sanity-check your return's NJ line before you file.
- **Retirement planning** — model NJ tax on pension and retirement income.
