---
title: "Pakistan Income Tax Calculator 2025-26 — Salaried Tax Slab Calculator"
description: "Free Pakistan salary tax calculator for FY 2025-26 (Tax Year 2026): enter monthly or annual salary, see slab-wise tax, monthly deduction, and take-home pay. Private, no sign-up."
category: finance
date: 2026-10-22
draft: false
---

How much tax is cut from your salary each month? Enter your monthly or annual salary and see exactly how Pakistan's FY 2025-26 salaried tax slabs (Tax Year 2026, Finance Act 2025) apply to you — with a full slab-by-slab breakdown, monthly deduction, and take-home pay. This is an estimate for planning, not tax advice.

<div class="tool-shell" id="pkitShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4.24 4.25L18 9.49l-1.41-1.42-6.35 6.36-2.83-2.84z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Pakistan Salary Tax Calculator</h2>
<p>FY 2025-26 salaried slabs — slab breakdown, monthly deduction, and take-home pay.</p>
</div>
<button type="button" class="theme-toggle" id="pkitTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your salary</p>
<div class="settings-panel">
<div class="preset-row" id="pkitPresets">
<button type="button" class="preset-chip active" data-m="50000">Rs 50K/mo</button>
<button type="button" class="preset-chip" data-m="100000">Rs 100K/mo</button>
<button type="button" class="preset-chip" data-m="200000">Rs 200K/mo</button>
<button type="button" class="preset-chip" data-m="400000">Rs 400K/mo</button>
<button type="button" class="preset-chip" data-m="800000">Rs 800K/mo</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pkitAmount">Salary amount</label>
<input type="number" id="pkitAmount" class="tool-input" value="100000" min="0" step="1000" inputmode="decimal">
<div class="hint">Gross salary before tax.</div>
</div>
<div class="setting">
<label for="pkitPeriod">Salary period</label>
<select id="pkitPeriod">
<option value="monthly" selected>Monthly</option>
<option value="annual">Annual</option>
</select>
<div class="hint">Slabs are annual — monthly salaries are annualized for the math.</div>
</div>
<div class="setting">
<label for="pkitSlider">Quick adjust: <span class="val" id="pkitSliderVal">Rs 100,000 / month</span></label>
<input type="range" id="pkitSlider" min="0" max="1000000" step="5000" value="100000">
<div class="hint">Slide to explore how each salary level is taxed.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Calculation options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="pkitSurcharge">Surcharge (income &gt; Rs 10M)</label>
<select id="pkitSurcharge">
<option value="auto" selected>Auto — apply 9% surcharge above Rs 10M</option>
<option value="off">Off — show base tax only</option>
</select>
<div class="hint">The Finance Act 2025 cut the surcharge on taxable salary income above Rs 10M from 10% to 9%.</div>
</div>
<div class="setting">
<label>Show slab breakdown</label>
<div class="toggle on" id="pkitBreakdown"><span class="knob"></span></div>
<div class="hint">See how much tax falls in each income slab.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate &amp; review</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pkitBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
Calculate My Tax
</button>
<button type="button" class="btn-pro-outline" id="pkitCopy">📋 Copy summary</button>
</div>
<div class="progress-wrap" id="pkitProgWrap">
<div class="progress-bar"><i id="pkitProgBar"></i></div>
<div class="progress-text" id="pkitProgText">Working…</div>
</div>
<div class="results" id="pkitResults">
<p class="result-head">✅ FY 2025-26 tax estimate — salaried individual (Tax Year 2026)</p>
<div class="result-summary" id="pkitSummary"></div>
<div class="result-grid" id="pkitGrid"></div>
<div class="pkit-table-wrap">
<table class="pkit-table" id="pkitTable"></table>
</div>
<p class="hint" id="pkitDisclaimer">Estimate only — applies the FBR salaried slabs (Finance Act 2025) to gross salary. Excludes tax credits, deductible allowances, and other adjustments. Consult a tax professional for your actual liability.</p>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This calculator runs entirely in your browser — your salary figures are never sent anywhere.</p>
</div>
</div>
</div>
<style>
.pkit-table{width:100%;border-collapse:collapse;margin-top:14px;font-size:14px;}
.pkit-table th,.pkit-table td{padding:9px 10px;border-bottom:1px solid #e2e8f0;text-align:right;}
.pkit-table th:first-child,.pkit-table td:first-child{text-align:left;}
.pkit-table thead th{background:#f1f5f9;font-weight:700;}
.tool-input{width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:10px;font-size:15px;background:#fff;color:inherit;}
</style>

<script>
(function(){
  var shell = document.getElementById('pkitShell');
  ToolPro.themeToggle(shell, document.getElementById('pkitTheme'));

  // FY 2025-26 salaried slabs (Tax Year 2026, Finance Act 2025), verified Oct 2026:
  // 0% to 600k · 1% over 600k to 1.2M · 11% (+6,000) to 2.2M ·
  // 23% (+116,000) to 3.2M · 30% (+346,000) to 4.1M · 35% (+616,000) above.
  var BANDS = [
    { limit: 600000,   rate: 0.00 },
    { limit: 1200000,  rate: 0.01 },
    { limit: 2200000,  rate: 0.11 },
    { limit: 3200000,  rate: 0.23 },
    { limit: 4100000,  rate: 0.30 },
    { limit: Infinity, rate: 0.35 }
  ];
  var SURCHARGE_LIMIT = 10000000, SURCHARGE_RATE = 0.09;

  var amountInput = document.getElementById('pkitAmount');
  var periodSel = document.getElementById('pkitPeriod');
  var slider = document.getElementById('pkitSlider');
  var sliderVal = document.getElementById('pkitSliderVal');
  var surchargeSel = document.getElementById('pkitSurcharge');
  var breakdownT = document.getElementById('pkitBreakdown');
  var breakdownOn = true;
  var presets = document.getElementById('pkitPresets');
  var btn = document.getElementById('pkitBtn');
  var copyBtn = document.getElementById('pkitCopy');
  var lastResult = null;

  function fmtRs(n){ return 'Rs ' + Math.round(n).toLocaleString('en-PK'); }

  ToolPro.bindSlider(slider, sliderVal, function(v){
    return 'Rs ' + (+v).toLocaleString('en-PK') + ' / month';
  });
  slider.addEventListener('input', function(){
    if(periodSel.value === 'monthly'){
      amountInput.value = slider.value;
      presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    }
  });

  function refreshBtn(){
    btn.disabled = !(parseFloat(amountInput.value) > 0);
  }
  amountInput.addEventListener('input', refreshBtn);
  periodSel.addEventListener('change', refreshBtn);
  refreshBtn();

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    periodSel.value = 'monthly';
    amountInput.value = chip.dataset.m;
    slider.value = chip.dataset.m;
    slider.dispatchEvent(new Event('input'));
    refreshBtn();
    ToolPro.toast('Preset: Rs ' + (+chip.dataset.m).toLocaleString('en-PK') + '/month');
  });

  breakdownT.classList.add('on');
  breakdownT.addEventListener('click', function(){
    breakdownOn = !breakdownOn;
    breakdownT.classList.toggle('on', breakdownOn);
    ToolPro.toast('Slab breakdown ' + (breakdownOn ? 'on' : 'off'));
  });

  function calcTax(annual){
    var prev = 0, baseTax = 0, rows = [];
    BANDS.forEach(function(b){
      var inBand = Math.max(0, Math.min(annual, b.limit) - prev);
      var taxInBand = inBand * b.rate;
      if(inBand > 0) rows.push({ from: prev, to: Math.min(annual, b.limit), rate: b.rate, tax: taxInBand });
      baseTax += taxInBand;
      prev = b.limit;
    });
    var surcharge = (annual > SURCHARGE_LIMIT) ? baseTax * SURCHARGE_RATE : 0;
    return { base: baseTax, surcharge: surcharge, total: baseTax + surcharge, rows: rows };
  }

  btn.addEventListener('click', function(){
    var amt = parseFloat(amountInput.value) || 0;
    if(amt < 0) amt = 0;
    var annual = periodSel.value === 'monthly' ? amt * 12 : amt;
    var monthly = periodSel.value === 'monthly' ? amt : amt / 12;

    var r = calcTax(annual);
    var surchargeApplied = surchargeSel.value === 'auto' && r.surcharge > 0;
    if(surchargeSel.value === 'off'){ r.total = r.base; r.surcharge = 0; }
    var takeHomeAnnual = annual - r.total;
    var takeHomeMonthly = takeHomeAnnual / 12;
    var monthlyTax = r.total / 12;
    var effRate = annual > 0 ? (r.total / annual * 100) : 0;
    var marginal = 0;
    BANDS.forEach(function(b){ if(annual > b.limit || (b.limit === Infinity && annual > 4100000)) marginal = b.rate; });
    if(annual <= 600000) marginal = 0;

    lastResult = {
      monthly: monthly, annual: annual, monthlyTax: monthlyTax, totalTax: r.total,
      surcharge: r.surcharge, takeHomeMonthly: takeHomeMonthly, effRate: effRate,
      marginal: marginal, surchargeApplied: surchargeApplied
    };

    document.getElementById('pkitSummary').innerHTML =
      'On ' + fmtRs(monthly) + '/month, your annual tax is <b>' + fmtRs(r.total) + '</b>' +
      ' (' + fmtRs(monthlyTax) + '/month deducted) — take-home <b>' + fmtRs(takeHomeMonthly) +
      '/month</b>. Effective rate ' + effRate.toFixed(2) + '% · marginal rate ' +
      (marginal * 100).toFixed(0) + '%';

    var grid = document.getElementById('pkitGrid');
    grid.innerHTML = '';
    var cards = [
      { label: 'Annual tax payable', value: fmtRs(r.total), sub: 'FY 2025-26 · Tax Year 2026' },
      { label: 'Monthly tax deduction', value: fmtRs(monthlyTax), sub: 'deducted at source by employer' },
      { label: 'Monthly take-home', value: fmtRs(takeHomeMonthly), sub: 'after income tax' },
      { label: 'Effective tax rate', value: effRate.toFixed(2) + '%', sub: 'total tax ÷ total salary' }
    ];
    if(surchargeApplied) cards.push({ label: 'Surcharge (9%)', value: fmtRs(r.surcharge), sub: 'on income above Rs 10M' });
    cards.forEach(function(c){
      var el = document.createElement('div');
      el.className = 'result-card';
      el.innerHTML = '<div class="r-name"></div><div class="r-big"></div><div class="r-stats"></div>';
      el.querySelector('.r-name').textContent = c.label;
      el.querySelector('.r-big').textContent = c.value;
      el.querySelector('.r-big').style.fontSize = '22px';
      el.querySelector('.r-big').style.fontWeight = '700';
      el.querySelector('.r-stats').textContent = c.sub;
      grid.appendChild(el);
    });

    var tbl = document.getElementById('pkitTable');
    if(breakdownOn){
      var html = '<thead><tr><th>Slab (annual Rs)</th><th>Rate</th><th>Taxable in slab</th><th>Tax</th></tr></thead><tbody>';
      r.rows.forEach(function(row){
        html += '<tr><td>' + Math.round(row.from).toLocaleString('en-PK') + ' – ' +
          (row.to === Infinity ? '∞' : Math.round(row.to).toLocaleString('en-PK')) + '</td><td>' +
          (row.rate * 100).toFixed(0) + '%</td><td>' + fmtRs(row.to - row.from) + '</td><td>' +
          fmtRs(row.tax) + '</td></tr>';
      });
      html += '</tbody>';
      tbl.innerHTML = html;
      tbl.style.display = '';
    } else {
      tbl.style.display = 'none';
    }

    document.getElementById('pkitResults').classList.add('show');
    document.getElementById('pkitResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Tax calculated', 'ok');
  });

  copyBtn.addEventListener('click', function(){
    if(!lastResult){ ToolPro.toast('Calculate first', 'err'); return; }
    var r = lastResult;
    var t = 'Pakistan Salary Tax — FY 2025-26 (Tax Year 2026)\n' +
      'Salary: ' + fmtRs(r.monthly) + '/month (' + fmtRs(r.annual) + '/year)\n' +
      'Annual tax: ' + fmtRs(r.totalTax) + ' · Monthly deduction: ' + fmtRs(r.monthlyTax) + '\n' +
      'Monthly take-home: ' + fmtRs(r.takeHomeMonthly) + '\n' +
      'Effective rate: ' + r.effRate.toFixed(2) + '% · Marginal rate: ' + (r.marginal * 100).toFixed(0) + '%' +
      (r.surchargeApplied ? ' · Incl. 9% surcharge: ' + fmtRs(r.surcharge) : '') +
      '\n(via dollarwise.xyz — estimate only, not tax advice)';
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(function(){ ToolPro.toast('Summary copied', 'ok'); });
    } else { ToolPro.toast('Copy not supported in this browser', 'err'); }
  });
})();
</script>

## How it works

1. **Enter your salary** — monthly or annual, or tap a preset for common pay levels.
2. **Adjust options** — the 9% surcharge above Rs 10M is automatic (Finance Act 2025), and you can toggle the slab-by-slab breakdown.
3. **Calculate** — the tool annualizes your salary, applies each FY 2025-26 salaried slab progressively, and shows your monthly deduction and take-home.

## Everyday uses

- **Employees** — verify the tax your employer deducts at source each month.
- **Job seekers** — compare offers by actual take-home, not gross salary.
- **Freelancers shifting to jobs** — see how salaried tax differs from business-income slabs.
- **Budget planners** — build monthly budgets on real net pay, not estimates.
- **HR & finance teams** — quick payroll cross-checks against the current slabs.

**The FY 2025-26 slabs (Tax Year 2026, Finance Act 2025):** 0% to Rs 600,000 · 1% on Rs 600,001–1,200,000 · 11% on Rs 1,200,001–2,200,000 · 23% on Rs 2,200,001–3,200,000 · 30% on Rs 3,200,001–4,100,000 · 35% above Rs 4,100,000 · plus a 9% surcharge on the tax where taxable salary exceeds Rs 10M. Figures are estimates, not tax advice.
