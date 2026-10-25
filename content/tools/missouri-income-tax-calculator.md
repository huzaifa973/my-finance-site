---
title: "Missouri Income Tax Calculator 2026 — Estimate Your MO Tax"
description: "Estimate your 2026 Missouri income tax with the official 2026 brackets topping at 4.7% and the federal standard deduction. Fast, free, in your browser."
category: finance
date: 2026-10-25
draft: false
slug: missouri-income-tax-calculator
---

Estimate what you owe Missouri for tax year 2026. Missouri still uses a graduated schedule in 2026 — not a flat tax: the first $1,348 of taxable income is taxed at 0%, then rates step up through 2%, 2.5%, 3%, 3.5%, 4%, and 4.5%, topping out at 4.7% above $9,436. Because the brackets are narrow, most earners pay close to 4.7% on nearly everything above the standard deduction. Enter your income and filing status and the calculator shows your estimated tax, effective rate, marginal rate, and the bracket table used. This is a planning estimate: it omits Missouri's federal-income-tax deduction (which can lower the bill), credits, local earnings taxes, and the capital-gains subtraction, so it may read slightly higher than a filed return.

<div class="tool-shell" id="motShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Missouri Income Tax Calculator 2026</h2>
<p>Official 2026 MO brackets to 4.7% — your estimated state tax in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="motTheme">🌙 Dark</button>
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
<label for="motIncome">Annual income (gross, before deductions)</label>
<input type="number" id="motIncome" class="tool-input" min="0" step="100" placeholder="e.g. 75000">
<div class="hint">Use federal adjusted gross income if you have it; otherwise gross wages are a fair estimate.</div>
</div>
<div class="setting">
<label for="motStatus">Filing status</label>
<select id="motStatus" class="tool-input">
<option value="single" selected>Single</option>
<option value="mfj">Married filing jointly</option>
<option value="mfs">Married filing separately</option>
<option value="hoh">Head of household</option>
</select>
<div class="hint">Missouri applies the same bracket schedule to every status; on a combined return each spouse's share is taxed separately — this calculator taxes household income on one schedule as a simplification.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings &amp; quick examples</p>
<div class="settings-panel">
<div class="preset-row" id="motPresets">
<button type="button" class="preset-chip" data-inc="50000">$50,000</button>
<button type="button" class="preset-chip active" data-inc="75000">$75,000</button>
<button type="button" class="preset-chip" data-inc="100000">$100,000</button>
<button type="button" class="preset-chip" data-inc="150000">$150,000</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="motDed" checked><span></span> Apply standard deduction</label>
<div class="hint">Missouri follows the federal standard deduction: Single/MFS $16,100; MFJ $32,200; Head of household $24,150 (2026).</div>
</div>
<div class="setting">
<div class="hint">Note: this estimate omits Missouri's federal-income-tax deduction, so it may read slightly higher than a filed return.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your Missouri tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="motBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
Calculate MO Tax
</button>
<button type="button" class="btn-pro-outline" id="motClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="motProgWrap">
<div class="progress-bar"><i id="motProgBar"></i></div>
<div class="progress-text" id="motProgText">Working…</div>
</div>
<div class="results" id="motResults">
<p class="result-head">✅ Your 2026 Missouri estimate</p>
<div class="result-summary" id="motSummary"></div>
<div class="result-grid" id="motGrid"></div>
<div id="motTable" style="overflow-x:auto;margin-top:1rem;"></div>
<p class="hint" id="motSource"></p>
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
  var shell = document.getElementById('motShell');
  ToolPro.themeToggle(shell, document.getElementById('motTheme'));
  var incomeEl = document.getElementById('motIncome');
  var statusEl = document.getElementById('motStatus');
  var dedEl = document.getElementById('motDed');
  var btn = document.getElementById('motBtn');
  var clearBtn = document.getElementById('motClear');
  var presets = document.getElementById('motPresets');
  var progWrap = document.getElementById('motProgWrap');
  var progBar = document.getElementById('motProgBar');
  var results = document.getElementById('motResults');
  var summary = document.getElementById('motSummary');
  var grid = document.getElementById('motGrid');
  var tableBox = document.getElementById('motTable');
  var sourceEl = document.getElementById('motSource');
  var DED = { single: 16100, mfj: 32200, mfs: 16100, hoh: 24150 };
  var LIMITS = [1348, 2696, 4044, 5392, 6740, 8088, 9436];
  var RATES = [0, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.047];
  var LABELS = { single: 'Single', mfj: 'Married filing jointly', mfs: 'Married filing separately', hoh: 'Head of household' };
  function fmt(n){ return '$' + Math.round(n).toLocaleString('en-US'); }
  function calcTax(taxable){
    var tax = 0, prev = 0, marginal = 0;
    for(var i = 0; i < RATES.length; i++){
      var cap = i < LIMITS.length ? LIMITS[i] : Infinity;
      if(taxable > prev){
        tax += (Math.min(taxable, cap) - prev) * RATES[i];
        marginal = RATES[i];
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
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    incomeEl.value = chip.dataset.inc; refresh();
    ToolPro.toast('Example income set: $' + parseInt(chip.dataset.inc, 10).toLocaleString('en-US'));
  });
  clearBtn.addEventListener('click', function(){
    incomeEl.value = ''; grid.innerHTML = ''; summary.textContent = ''; tableBox.innerHTML = ''; sourceEl.textContent = '';
    results.classList.remove('show'); refresh();
  });
  btn.addEventListener('click', function(){
    var income = parseFloat(incomeEl.value);
    if(!(income > 0)){ ToolPro.toast('Enter your annual income first.', 'err'); return; }
    var st = statusEl.value;
    var ded = dedEl.checked ? DED[st] : 0;
    var taxable = Math.max(0, income - ded);
    var r = calcTax(taxable);
    var eff = income > 0 ? r.tax / income * 100 : 0;
    progWrap.classList.add('show'); progBar.style.width = '60%';
    var cards = [
      ['Estimated MO tax', fmt(r.tax), 'For tax year 2026, ' + LABELS[st].toLowerCase() + '.'],
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
    summary.textContent = '✅ On ' + fmt(income) + ' (' + LABELS[st] + '), estimated 2026 Missouri tax is ' + fmt(r.tax) + ' — an effective rate of ' + eff.toFixed(2) + '%.';
    var rows = '<table style="width:100%;border-collapse:collapse;"><tr><th style="text-align:left;padding:.4rem;border-bottom:2px solid currentColor;">Taxable income</th><th style="text-align:left;padding:.4rem;border-bottom:2px solid currentColor;">Rate</th></tr>' +
      '<tr><td style="padding:.4rem;">$0 – $1,348</td><td style="padding:.4rem;">0%</td></tr>' +
      '<tr><td style="padding:.4rem;">$1,349 – $2,696</td><td style="padding:.4rem;">2.0%</td></tr>' +
      '<tr><td style="padding:.4rem;">$2,697 – $4,044</td><td style="padding:.4rem;">2.5%</td></tr>' +
      '<tr><td style="padding:.4rem;">$4,045 – $5,392</td><td style="padding:.4rem;">3.0%</td></tr>' +
      '<tr><td style="padding:.4rem;">$5,393 – $6,740</td><td style="padding:.4rem;">3.5%</td></tr>' +
      '<tr><td style="padding:.4rem;">$6,741 – $8,088</td><td style="padding:.4rem;">4.0%</td></tr>' +
      '<tr><td style="padding:.4rem;">$8,089 – $9,436</td><td style="padding:.4rem;">4.5%</td></tr>' +
      '<tr><td style="padding:.4rem;">Over $9,436</td><td style="padding:.4rem;">4.7%</td></tr></table>';
    tableBox.innerHTML = '<p style="font-weight:700;">2026 Missouri bracket table used (all filing statuses)</p>' + rows;
    sourceEl.textContent = 'Source: Missouri Department of Revenue, 2026 Withholding Tax Formula (dor.mo.gov), annual table; standard deduction follows the federal 2026 amounts (Single/MFS $16,100; MFJ $32,200; Head of household $24,150). The top rate was $9,191 in 2025 and $9,436 in 2026; flat-tax proposals for 2026 did not replace this graduated schedule. Estimate only — excludes the federal-income-tax deduction, credits, local earnings taxes (Kansas City / St. Louis 1%), and the capital-gains subtraction.';
    progBar.style.width = '100%';
    setTimeout(function(){ progWrap.classList.remove('show'); }, 600);
    results.classList.add('show');
    ToolPro.toast('Missouri estimate ready', 'ok');
    refresh();
  });
  refresh();
})();
</script>

## How it works

Enter your annual income and filing status. The calculator subtracts the standard deduction for your status, then taxes the remainder bracket by bracket — only the slice inside each bracket pays that bracket's rate, and everything above $9,436 pays 4.7%. Because the brackets are only $1,348 wide, a typical earner lands in the top bracket quickly, so Missouri behaves almost like a flat 4.7% tax on income above the deduction. The bracket table used is printed in the results, with its source.

**2026 Missouri brackets used (all statuses):** 0% to $1,348; 2.0% to $2,696; 2.5% to $4,044; 3.0% to $5,392; 3.5% to $6,740; 4.0% to $8,088; 4.5% to $9,436; 4.7% above. Cumulative tax at the top of each band: $0, $27, $61, $101, $148, $202, $263. Standard deductions: Single/MFS $16,100; MFJ $32,200; Head of household $24,150. Source: Missouri Department of Revenue, 2026 Withholding Tax Formula.

## Everyday uses

- **Paycheck planning** — see what Missouri keeps from a raise or a new job.
- **Estimate payments** — check whether withholding covers the year's bill.
- **City-tax reminder** — Kansas City and St. Louis add a 1% earnings tax on top.
- **Move planning** — compare Missouri's near-flat 4.7% with another state's schedule.
- **Budgeting** — turn a gross salary into a realistic take-home figure.
