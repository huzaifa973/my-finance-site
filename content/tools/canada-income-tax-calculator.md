---
title: "Canada Income Tax Calculator 2026 — Federal Brackets & Take-Home Pay"
description: "Estimate Canadian federal income tax for 2026 across all five brackets. Provincial tax not included — figures are estimates, verify with the CRA."
category: finance
date: 2026-10-16
draft: false
---

How much federal tax will you owe in 2026? Enter your income to see it broken down across Canada's five federal brackets — 14%, 20.5%, 26%, 29%, and 33% — with your take-home pay per month. This covers federal tax only; provincial tax is extra and varies by province. Figures are estimates — verify with the CRA.

<div class="tool-shell" id="catShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Canada Income Tax Calculator 2026</h2>
<p>Federal bracket breakdown with monthly take-home — provincial tax not included.</p>
</div>
<button type="button" class="theme-toggle" id="catTheme">🌙 Dark</button>
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
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="catIncome">Gross annual income (CAD $)</label>
<input type="number" class="tool-input" id="catIncome" min="0" step="500" value="85000" placeholder="85000">
</div>
<div class="setting">
<label for="catRrsp">RRSP contributions ($/year)</label>
<input type="number" class="tool-input" id="catRrsp" min="0" step="500" value="0" placeholder="0">
<div class="hint">RRSP contributions reduce your taxable income.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Calculate your federal tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="catBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V5h-2v7H5l3.5 4.5L12 12zm7 7h-2v-2h-2v-2h2v-2h2v6z"/></svg>
Calculate Federal Tax
</button>
<button type="button" class="btn-pro-outline" id="catClear">Reset</button>
</div>
<div class="results" id="catResults">
<p class="result-head">🍁 Your 2026 federal income tax</p>
<div class="result-summary" id="catSummary"></div>
<div class="result-grid" id="catGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run unlimited what-if scenarios — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('catShell');
  ToolPro.themeToggle(shell, document.getElementById('catTheme'));
  var incomeIn = document.getElementById('catIncome');
  var rrspIn = document.getElementById('catRrsp');
  var btn = document.getElementById('catBtn');
  var clearBtn = document.getElementById('catClear');
  var resBox = document.getElementById('catResults');
  var summary = document.getElementById('catSummary');
  var grid = document.getElementById('catGrid');

  function cad(n){
    return '$' + Math.round(n).toLocaleString('en-CA');
  }

  function calc(){
    var gross = Math.max(0, parseFloat(incomeIn.value) || 0);
    var rrsp = Math.max(0, parseFloat(rrspIn.value) || 0);
    var taxable = Math.max(0, gross - rrsp);
    var bands = [
      { name: '14% — up to $58,523', from: 0, to: 58523, rate: 0.14 },
      { name: '20.5% — $58,524 to $117,045', from: 58523, to: 117045, rate: 0.205 },
      { name: '26% — $117,046 to $181,440', from: 117045, to: 181440, rate: 0.26 },
      { name: '29% — $181,441 to $258,482', from: 181440, to: 258482, rate: 0.29 },
      { name: '33% — over $258,482', from: 258482, to: Infinity, rate: 0.33 }
    ];
    var totalTax = 0;
    var rows = bands.map(function(b){
      var inBand = Math.max(0, Math.min(taxable, b.to) - b.from);
      var tax = inBand * b.rate;
      totalTax += tax;
      return { name: b.name, amount: inBand, tax: tax };
    });
    var net = gross - totalTax;
    var eff = gross ? (totalTax / gross * 100) : 0;
    var marginal = 0.14;
    bands.forEach(function(b){ if(taxable > b.from) marginal = b.rate; });

    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    var html = '<div class="r-name">Taxable income: ' + cad(taxable) +
      (rrsp ? ' <span class="hint">(after ' + cad(rrsp) + ' RRSP)</span>' : '') + '</div>';
    html += '<div class="progress-bar" style="margin:8px 0;"><i style="width:' +
      Math.min(100, Math.round(eff * 2.5)) + '%;"></i></div>';
    rows.forEach(function(r){
      if(r.amount <= 0) return;
      html += '<div class="r-stats" style="padding:5px 0;border-bottom:1px solid #eee;">' +
        r.name + ': ' + cad(r.amount) + ' → <b>' + cad(r.tax) + '</b> tax</div>';
    });
    html += '<div class="r-stats" style="margin-top:8px;font-size:16px;">' +
      '💰 Total federal tax: <b>' + cad(totalTax) + '</b>/year<br>' +
      '🏠 Take-home (before provincial tax): <b>' + cad(net) + '</b>/year · <b>' + cad(net / 12) + '</b>/month<br>' +
      '📊 Effective federal rate: <b>' + eff.toFixed(1) + '%</b> · Marginal rate: <b>' + (marginal * 100).toFixed(1) + '%</b></div>';
    html += '<div class="hint" style="margin-top:8px;">Federal tax only — add your provincial tax on top (varies by province). Excludes the basic personal amount credit. Estimates only — verify with the CRA.</div>';
    card.innerHTML = html;
    grid.appendChild(card);
    summary.textContent = '🍁 On ' + cad(gross) + ' you pay about ' + cad(totalTax) +
      ' in federal tax and keep ' + cad(net / 12) + ' per month (before provincial tax).';
    resBox.classList.add('show');
  }

  btn.addEventListener('click', function(){
    calc();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Tax calculated', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    incomeIn.value = '85000'; rrspIn.value = '0';
    resBox.classList.remove('show');
  });
  [incomeIn, rrspIn].forEach(function(el){ el.addEventListener('input', calc); });
  calc();
})();
</script>

## How it works

- **Step 1** — Enter your gross annual income and any RRSP contributions (which reduce taxable income).
- **Step 2** — The calculator applies the 2026 federal brackets — 14% to $58,523, 20.5% to $117,045, 26% to $181,440, 29% to $258,482, 33% above — and shows each bracket's tax, your effective and marginal rates, and monthly take-home.

## Everyday uses

- **Employees** — sanity-check your pay stub and plan a raise negotiation.
- **Newcomers** — understand Canadian take-home pay before accepting an offer.
- **Freelancers** — estimate quarterly instalments.
- **Planners** — see how RRSP contributions lower your tax bill.

**Rule of thumb:** your marginal rate (the tax on your next dollar) matters more than your effective rate when deciding about overtime, bonuses, and RRSP contributions.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/canada-income-tax-calculator.md tool_name=read]
