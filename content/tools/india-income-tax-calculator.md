---
title: "India Income Tax Calculator FY 2025-26 — New Regime Slabs, 87A Rebate & Cess"
description: "Estimate Indian income tax under the FY 2025-26 new regime — slabs, ₹75,000 standard deduction, 87A rebate and 4% cess. Free, private."
category: finance
date: 2026-10-20
draft: false
---

How much tax will you actually pay under India's new regime? Enter your gross annual income to see your FY 2025-26 tax broken down slab by slab — including the ₹75,000 standard deduction, the Section 87A rebate that makes income up to ₹12 lakh tax-free, and the 4% health & education cess — plus your monthly take-home. Figures are estimates; always verify with the Income Tax Department of India.

<div class="tool-shell" id="inTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>India Income Tax Calculator FY 2025-26</h2>
<p>New-regime slabs, 87A rebate, and cess — slab-by-slab breakdown with take-home.</p>
</div>
<button type="button" class="theme-toggle" id="inTaxTheme">🌙 Dark</button>
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
<label for="inTaxIncome">Gross annual income (₹)</label>
<input type="number" class="tool-input" id="inTaxIncome" min="0" step="1000" value="1200000" placeholder="1200000">
<div class="hint">Uses the FY 2025-26 new regime: ₹75,000 standard deduction, 87A rebate up to ₹12 lakh, 4% cess.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Calculate your tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="inTaxBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V5h-2v7H5l3.5 4.5L12 12zm7 7h-2v-2h-2v-2h2v-2h2v6z"/></svg>
Calculate India Tax
</button>
<button type="button" class="btn-pro-outline" id="inTaxClear">Reset</button>
</div>
<div class="results" id="inTaxResults">
<p class="result-head">🇮🇳 Your FY 2025-26 tax (new regime)</p>
<div class="result-summary" id="inTaxSummary"></div>
<div class="result-grid" id="inTaxGrid"></div>
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
  var shell = document.getElementById('inTaxShell');
  ToolPro.themeToggle(shell, document.getElementById('inTaxTheme'));
  var incomeIn = document.getElementById('inTaxIncome');
  var btn = document.getElementById('inTaxBtn');
  var clearBtn = document.getElementById('inTaxClear');
  var resBox = document.getElementById('inTaxResults');
  var summary = document.getElementById('inTaxSummary');
  var grid = document.getElementById('inTaxGrid');
  var STD_DED = 75000;

  function inr(n){
    return '₹' + Math.round(n).toLocaleString('en-IN');
  }

  function calc(){
    var gross = Math.max(0, parseFloat(incomeIn.value) || 0);
    var taxable = Math.max(0, gross - STD_DED);
    var bands = [
      { name: 'No tax (0%)', from: 0, to: 400000, rate: 0 },
      { name: '5% slab', from: 400000, to: 800000, rate: 0.05 },
      { name: '10% slab', from: 800000, to: 1200000, rate: 0.10 },
      { name: '15% slab', from: 1200000, to: 1600000, rate: 0.15 },
      { name: '20% slab', from: 1600000, to: 2000000, rate: 0.20 },
      { name: '25% slab', from: 2000000, to: 2400000, rate: 0.25 },
      { name: '30% slab', from: 2400000, to: Infinity, rate: 0.30 }
    ];
    var slabTax = 0;
    var rows = bands.map(function(b){
      var inBand = Math.max(0, Math.min(taxable, b.to) - b.from);
      var tax = inBand * b.rate;
      slabTax += tax;
      return { name: b.name, amount: inBand, tax: tax };
    });
    // Section 87A rebate: zero tax up to Rs 12 lakh taxable income
    var rebate = 0, rebateApplied = false;
    if(taxable <= 1200000 && taxable > 0){
      rebate = slabTax; rebateApplied = true;
    }
    var taxAfterRebate = Math.max(0, slabTax - rebate);
    var cess = taxAfterRebate * 0.04;
    var totalTax = taxAfterRebate + cess;
    var net = gross - totalTax;
    var eff = gross ? (totalTax / gross * 100) : 0;

    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    var html = '<div class="r-name">Taxable income: ' + inr(taxable) +
      ' <span class="hint">(after ' + inr(STD_DED) + ' standard deduction)</span></div>';
    html += '<div class="progress-bar" style="margin:8px 0;"><i style="width:' +
      Math.min(100, Math.round(eff * 2)) + '%;"></i></div>';
    rows.forEach(function(r){
      if(r.amount <= 0 && r.tax <= 0) return;
      html += '<div class="r-stats" style="padding:5px 0;border-bottom:1px solid #eee;">' +
        r.name + ': ' + inr(r.amount) + ' → <b>' + inr(r.tax) + '</b> tax</div>';
    });
    if(rebateApplied){
      html += '<div class="r-stats" style="padding:5px 0;border-bottom:1px solid #eee;">Section 87A rebate: <b>−' + inr(rebate) + '</b> (taxable income ≤ ₹12 lakh)</div>';
    }
    html += '<div class="r-stats" style="margin-top:8px;font-size:16px;">' +
      '💰 Total income tax + 4% cess: <b>' + inr(totalTax) + '</b>/year<br>' +
      '🏠 Take-home pay: <b>' + inr(net) + '</b>/year · <b>' + inr(net / 12) + '</b>/month<br>' +
      '📊 Effective tax rate: <b>' + eff.toFixed(1) + '%</b></div>';
    html += '<div class="hint" style="margin-top:8px;">Estimates only — new regime, FY 2025-26. Excludes surcharge, old-regime deductions, and capital gains. Verify with the Income Tax Department of India.</div>';
    card.innerHTML = html;
    grid.appendChild(card);
    summary.textContent = '🇮🇳 On ' + inr(gross) + ' you pay about ' + inr(totalTax) +
      ' tax and keep ' + inr(net / 12) + ' per month.';
    resBox.classList.add('show');
  }

  btn.addEventListener('click', function(){
    calc();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Tax calculated', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    incomeIn.value = '1200000';
    resBox.classList.remove('show');
  });
  incomeIn.addEventListener('input', calc);
  calc();
})();
</script>

## How it works

- **Step 1** — Enter your gross annual salary.
- **Step 2** — The calculator subtracts the ₹75,000 new-regime standard deduction, walks the FY 2025-26 slabs (0% to ₹4 lakh, 5% to ₹8 lakh, 10% to ₹12 lakh, 15% to ₹16 lakh, 20% to ₹20 lakh, 25% to ₹24 lakh, 30% above), applies the Section 87A rebate (zero tax when taxable income is ₹12 lakh or less), adds the 4% health & education cess, and shows a slab-by-slab breakdown plus monthly take-home.

## Everyday uses

- **Salaried employees** — check your TDS and plan the financial year.
- **Job switchers** — compare take-home pay across offers under the new regime.
- **Freelancers** — rough out advance tax for the year.
- **New vs old regime** — get the new-regime number before comparing with old-regime deductions.
- **Planners** — see exactly where the 87A rebate cliff sits (₹12 lakh taxable).

**Rule of thumb:** under the new regime, taxable income of ₹12 lakh or less means zero tax thanks to the 87A rebate — but cross it by even a rupee and the full slab tax applies.

[escaped: END EXTERNAL CONTENT]
