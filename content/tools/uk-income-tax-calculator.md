---
title: "UK Income Tax Calculator 2026/27 — Bands, Allowance & Take-Home Pay"
description: "Estimate UK 2026/27 income tax across the 20%, 40% and 45% bands with personal allowance taper. See take-home pay monthly — figures are estimates."
category: finance
date: 2026-10-16
draft: false
---

How much of your salary does HMRC actually take? Enter your gross annual income to see your 2026/27 UK income tax broken down band by band — including the personal allowance taper above £100,000 — plus your monthly take-home pay. Figures are estimates for England, Wales, and Northern Ireland rates; always verify with HMRC.

<div class="tool-shell" id="uktShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>UK Income Tax Calculator 2026/27</h2>
<p>Band-by-band tax breakdown with allowance taper — and your monthly take-home.</p>
</div>
<button type="button" class="theme-toggle" id="uktTheme">🌙 Dark</button>
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
<label for="uktIncome">Gross annual income (£)</label>
<input type="number" class="tool-input" id="uktIncome" min="0" step="100" value="45000" placeholder="45000">
</div>
<div class="setting">
<label for="uktPension">Pension contributions (£/year)</label>
<input type="number" class="tool-input" id="uktPension" min="0" step="100" value="0" placeholder="0">
<div class="hint">Pension contributions reduce your taxable income.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Calculate your tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="uktBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V5h-2v7H5l3.5 4.5L12 12zm7 7h-2v-2h-2v-2h2v-2h2v6z"/></svg>
Calculate UK Tax
</button>
<button type="button" class="btn-pro-outline" id="uktClear">Reset</button>
</div>
<div class="results" id="uktResults">
<p class="result-head">💷 Your 2026/27 UK income tax</p>
<div class="result-summary" id="uktSummary"></div>
<div class="result-grid" id="uktGrid"></div>
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
  var shell = document.getElementById('uktShell');
  ToolPro.themeToggle(shell, document.getElementById('uktTheme'));
  var incomeIn = document.getElementById('uktIncome');
  var pensionIn = document.getElementById('uktPension');
  var btn = document.getElementById('uktBtn');
  var clearBtn = document.getElementById('uktClear');
  var resBox = document.getElementById('uktResults');
  var summary = document.getElementById('uktSummary');
  var grid = document.getElementById('uktGrid');

  function gbp(n){
    return '£' + Math.round(n).toLocaleString('en-GB');
  }

  function calc(){
    var gross = Math.max(0, parseFloat(incomeIn.value) || 0);
    var pension = Math.max(0, parseFloat(pensionIn.value) || 0);
    var taxable = Math.max(0, gross - pension);
    // Personal allowance with taper
    var pa = 12570;
    if(taxable > 100000) pa = Math.max(0, 12570 - Math.floor((taxable - 100000) / 2));
    var bands = [
      { name: 'Personal allowance (0%)', from: 0, to: pa, rate: 0 },
      { name: 'Basic rate (20%)', from: pa, to: 50270, rate: 0.20 },
      { name: 'Higher rate (40%)', from: 50270, to: 125140, rate: 0.40 },
      { name: 'Additional rate (45%)', from: 125140, to: Infinity, rate: 0.45 }
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

    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    var html = '<div class="r-name">Taxable income: ' + gbp(taxable) +
      (pension ? ' <span class="hint">(after ' + gbp(pension) + ' pension)</span>' : '') + '</div>';
    html += '<div class="progress-bar" style="margin:8px 0;"><i style="width:' +
      Math.min(100, Math.round(eff * 2)) + '%;"></i></div>';
    rows.forEach(function(r){
      if(r.amount <= 0 && r.tax <= 0) return;
      html += '<div class="r-stats" style="padding:5px 0;border-bottom:1px solid #eee;">' +
        r.name + ': ' + gbp(r.amount) + ' → <b>' + gbp(r.tax) + '</b> tax</div>';
    });
    html += '<div class="r-stats" style="margin-top:8px;font-size:16px;">' +
      '💰 Total income tax: <b>' + gbp(totalTax) + '</b>/year<br>' +
      '🏠 Take-home pay: <b>' + gbp(net) + '</b>/year · <b>' + gbp(net / 12) + '</b>/month<br>' +
      '📊 Effective tax rate: <b>' + eff.toFixed(1) + '%</b></div>';
    if(pa < 12570) html += '<div class="hint" style="margin-top:6px;">⚠️ Personal allowance tapered to ' + gbp(pa) + ' because income exceeds £100,000.</div>';
    html += '<div class="hint" style="margin-top:8px;">Estimates only — excludes National Insurance and uses England/Wales/NI rates (Scotland differs). Verify with HMRC.</div>';
    card.innerHTML = html;
    grid.appendChild(card);
    summary.textContent = '💷 On ' + gbp(gross) + ' you pay about ' + gbp(totalTax) +
      ' tax and keep ' + gbp(net / 12) + ' per month.';
    resBox.classList.add('show');
  }

  btn.addEventListener('click', function(){
    calc();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Tax calculated', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    incomeIn.value = '45000'; pensionIn.value = '0';
    resBox.classList.remove('show');
  });
  [incomeIn, pensionIn].forEach(function(el){ el.addEventListener('input', calc); });
  calc();
})();
</script>

## How it works

- **Step 1** — Enter your gross annual salary and any pension contributions (which reduce taxable income).
- **Step 2** — The calculator applies the 2026/27 bands — £12,570 personal allowance, 20% to £50,270, 40% to £125,140, 45% above — with the allowance taper above £100,000, and shows a band-by-band breakdown plus monthly take-home.

## Everyday uses

- **Employees** — check your payslip makes sense and plan salary negotiations.
- **Contractors** — estimate tax before setting your day rate.
- **New arrivals** — understand UK take-home pay before accepting a job offer.
- **Planners** — model how pension contributions cut your tax bill.

**Rule of thumb:** between £100,000 and £125,140 the allowance taper creates an effective 60% marginal rate — pension contributions in that zone are extremely tax-efficient.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/uk-income-tax-calculator.md tool_name=read]
