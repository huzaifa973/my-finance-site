---
title: "Minnesota Income Tax Calculator 2026 — Estimate Your MN Tax"
description: "Estimate your 2026 Minnesota income tax with the official 2026 brackets and standard deduction. Enter income and filing status for tax and effective rate."
category: finance
date: 2026-10-25
draft: false
slug: minnesota-income-tax-calculator
---

Estimate what you owe Minnesota for tax year 2026. Enter your income, pick a filing status, and the calculator applies Minnesota's official 2026 brackets — 5.35%, 6.80%, 7.85%, and 9.85% — after the state's 2026 standard deduction. It shows your estimated state tax, your effective rate, your marginal bracket, and the exact bracket table used, so you can check the math yourself. This is a planning estimate, not a tax return: it ignores credits, itemized deductions, and special subtractions.

<div class="tool-shell" id="mntShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Minnesota Income Tax Calculator 2026</h2>
<p>Official 2026 MN brackets and standard deduction — your estimated state tax in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="mntTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your income</p>
<div class="setting">
<label for="mntIncome">Annual income (gross, before deductions)</label>
<input type="number" id="mntIncome" class="tool-input" min="0" step="100" placeholder="e.g. 100000">
<div class="hint">Use federal adjusted gross income if you have it; otherwise gross wages are a fair estimate.</div>
</div>
<div class="setting">
<label for="mntStatus">Filing status</label>
<select id="mntStatus" class="tool-input">
<option value="single" selected>Single</option>
<option value="mfj">Married filing jointly</option>
<option value="mfs">Married filing separately</option>
<option value="hoh">Head of household</option>
</select>
</div>
<div class="setting">
<label for="mntDeps">Dependents (optional)</label>
<input type="number" id="mntDeps" class="tool-input" min="0" step="1" value="0">
<div class="hint">Minnesota's 2026 dependent exemption is $5,300 per dependent.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings &amp; quick examples</p>
<div class="settings-panel">
<div class="preset-row" id="mntPresets">
<button type="button" class="preset-chip" data-inc="50000">$50,000</button>
<button type="button" class="preset-chip" data-inc="75000">$75,000</button>
<button type="button" class="preset-chip active" data-inc="100000">$100,000</button>
<button type="button" class="preset-chip" data-inc="150000">$150,000</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="mntDed" checked><span></span> Apply 2026 standard deduction</label>
<div class="hint">Uncheck to tax the full income (for comparison with itemizing).</div>
</div>
<div class="setting">
<div class="hint">Source: Minnesota Department of Revenue, 2026 inflation-adjusted amounts. Rates unchanged for 2026; only thresholds moved.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your Minnesota tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mntBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Calculate MN Tax
</button>
<button type="button" class="btn-pro-outline" id="mntClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="mntProgWrap">
<div class="progress-bar"><i id="mntProgBar"></i></div>
<div class="progress-text" id="mntProgText">Working…</div>
</div>
<div class="results" id="mntResults">
<p class="result-head">✅ Your 2026 Minnesota estimate</p>
<div class="result-summary" id="mntSummary"></div>
<div class="result-grid" id="mntGrid"></div>
<div id="mntTable" style="overflow-x:auto;margin-top:1rem;"></div>
<p class="hint" id="mntSource"></p>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited estimates — the math happens entirely in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mntShell');
  ToolPro.themeToggle(shell, document.getElementById('mntTheme'));
  var incomeEl = document.getElementById('mntIncome');
  var statusEl = document.getElementById('mntStatus');
  var depsEl = document.getElementById('mntDeps');
  var dedEl = document.getElementById('mntDed');
  var btn = document.getElementById('mntBtn');
  var clearBtn = document.getElementById('mntClear');
  var presets = document.getElementById('mntPresets');
  var progWrap = document.getElementById('mntProgWrap');
  var progBar = document.getElementById('mntProgBar');
  var results = document.getElementById('mntResults');
  var summary = document.getElementById('mntSummary');
  var grid = document.getElementById('mntGrid');
  var tableBox = document.getElementById('mntTable');
  var sourceEl = document.getElementById('mntSource');
  var DED = { single: 15300, mfj: 30600, mfs: 15300, hoh: 23000 };
  var LIMITS = { single: [33310, 109430, 203150], mfj: [48700, 193480, 337930], mfs: [24350, 96740, 168965], hoh: [41010, 164800, 270060] };
  var RATES = [0.0535, 0.068, 0.0785, 0.0985];
  var LABELS = { single: 'Single', mfj: 'Married filing jointly', mfs: 'Married filing separately', hoh: 'Head of household' };
  function fmt(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
  function calcTax(taxable, limits){
    var tax = 0, prev = 0, marginal = RATES[0];
    for(var i = 0; i < RATES.length; i++){
      var cap = i < limits.length ? limits[i] : Infinity;
      if(taxable > prev){
        var portion = Math.min(taxable, cap) - prev;
        tax += portion * RATES[i];
        if(taxable > prev) marginal = RATES[i];
      }
      prev = cap;
    }
    return { tax: tax, marginal: marginal };
  }
  function refresh(){
    var ok = parseFloat(incomeEl.value) > 0;
    btn.disabled = !ok;
    clearBtn.disabled = !(incomeEl.value || grid.children.length);
  }
  incomeEl.addEventListener('input', refresh);
  statusEl.addEventListener('change', refresh);
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    incomeEl.value = chip.dataset.inc; refresh();
    ToolPro.toast('Example income set: $' + parseInt(chip.dataset.inc, 10).toLocaleString('en-US'));
  });
  clearBtn.addEventListener('click', function(){
    incomeEl.value = ''; depsEl.value = '0'; grid.innerHTML = ''; summary.textContent = ''; tableBox.innerHTML = ''; sourceEl.textContent = '';
    results.classList.remove('show'); refresh();
  });
  btn.addEventListener('click', function(){
    var income = parseFloat(incomeEl.value);
    if(!(income > 0)){ ToolPro.toast('Enter your annual income first.', 'err'); return; }
    var st = statusEl.value;
    var deps = Math.max(0, parseInt(depsEl.value, 10) || 0);
    var ded = dedEl.checked ? DED[st] + deps * 5300 : 0;
    var taxable = Math.max(0, income - ded);
    var r = calcTax(taxable, LIMITS[st]);
    var eff = income > 0 ? r.tax / income * 100 : 0;
    progWrap.classList.add('show'); progBar.style.width = '60%';
    var cards = [
      ['Estimated MN tax', fmt(r.tax), 'For tax year 2026, ' + LABELS[st].toLowerCase() + '.'],
      ['Effective rate', eff.toFixed(2) + '%', 'Tax as a share of your full income.'],
      ['Taxable income', fmt(taxable), 'Income minus ' + fmt(ded) + ' in deductions.'],
      ['Marginal rate', (r.marginal * 100).toFixed(2) + '%', 'Rate on your next dollar of income.']
    ];
    grid.innerHTML = '';
    cards.forEach(function(c){
      var d = document.createElement('div'); d.className = 'result-card';
      d.innerHTML = '<div class="r-name">' + c[0] + '</div><div class="r-value" style="font-size:1.4rem;font-weight:700;">' + c[1] + '</div><div class="r-meta">' + c[2] + '</div>';
      grid.appendChild(d);
    });
    summary.textContent = '✅ On ' + fmt(income) + ' (' + LABELS[st] + '), estimated 2026 Minnesota tax is ' + fmt(r.tax) + ' — an effective rate of ' + eff.toFixed(2) + '%.';
    var lim = LIMITS[st];
    var rows = '<table style="width:100%;border-collapse:collapse;"><tr><th style="text-align:left;padding:.4rem;border-bottom:2px solid currentColor;">Taxable income</th><th style="text-align:left;padding:.4rem;border-bottom:2px solid currentColor;">Rate</th></tr>' +
      '<tr><td style="padding:.4rem;">$0 – ' + fmt(lim[0]) + '</td><td style="padding:.4rem;">5.35%</td></tr>' +
      '<tr><td style="padding:.4rem;">' + fmt(lim[0] + 1) + ' – ' + fmt(lim[1]) + '</td><td style="padding:.4rem;">6.80%</td></tr>' +
      '<tr><td style="padding:.4rem;">' + fmt(lim[1] + 1) + ' – ' + fmt(lim[2]) + '</td><td style="padding:.4rem;">7.85%</td></tr>' +
      '<tr><td style="padding:.4rem;">Over ' + fmt(lim[2]) + '</td><td style="padding:.4rem;">9.85%</td></tr></table>';
    tableBox.innerHTML = '<p style="font-weight:700;">2026 Minnesota bracket table used (' + LABELS[st] + ')</p>' + rows;
    sourceEl.textContent = 'Source: Minnesota Department of Revenue, "Minnesota income tax brackets, standard deduction and dependent exemption amounts for tax year 2026" (revenue.state.mn.us). Standard deduction: Single/MFS $15,300; MFJ $30,600; Head of household $23,000; dependent exemption $5,300. Estimate only — excludes credits, itemized deductions, and Social Security subtraction phase-outs.';
    progBar.style.width = '100%';
    setTimeout(function(){ progWrap.classList.remove('show'); }, 600);
    results.classList.add('show');
    ToolPro.toast('Minnesota estimate ready', 'ok');
    refresh();
  });
  refresh();
})();
</script>

## How it works

Enter your annual income, choose a filing status, and optionally add dependents. The calculator subtracts the 2026 standard deduction for your status (plus $5,300 per dependent), then taxes the remainder bracket by bracket: only the slice of income inside each bracket pays that bracket's rate. Your top slice sets your marginal rate, while your effective rate — total tax divided by full income — is always lower. The bracket table used is printed right in the results, with its source.

**2026 Minnesota brackets and standard deductions used:** Single — 5.35% to $33,310; 6.80% to $109,430; 7.85% to $203,150; 9.85% above; standard deduction $15,300. Married filing jointly — 5.35% to $48,700; 6.80% to $193,480; 7.85% to $337,930; 9.85% above; standard deduction $30,600. Married filing separately — $24,350 / $96,740 / $168,965; standard deduction $15,300. Head of household — $41,010 / $164,800 / $270,060; standard deduction $23,000. Dependent exemption $5,300. Source: Minnesota Department of Revenue, 2026 inflation-adjusted amounts.

## Everyday uses

- **Paycheck planning** — see roughly what Minnesota keeps from a raise or a new job.
- **Estimate payments** — check whether your withholding covers the year's bill.
- **Filing-status comparison** — compare single vs. joint outcomes before you file.
- **Move planning** — weigh Minnesota's top 9.85% rate against another state's schedule.
- **Budgeting** — turn a gross salary into a realistic take-home figure.
