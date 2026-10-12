---
title: "Free Break-Even Calculator"
description: "Free break-even calculator: enter fixed costs, price, and variable cost per unit to find your break-even units, revenue, and contribution margin."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter your fixed costs, the price you charge per unit, and the variable cost of making or delivering one unit. The calculator finds your break-even point — the exact number of units you must sell before every cost is covered and profit begins.

<div class="tool-shell" id="beShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Break-Even Calculator</h2>
<p>Find exactly how many units you must sell before your business starts making profit.</p>
</div>
<button type="button" class="theme-toggle" id="beTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fixed costs</p>
<div class="setting">
<label for="beFixed">Total fixed costs</label>
<input type="number" id="beFixed" class="tool-input" placeholder="e.g. 10000" min="0" style="max-width:260px;">
<div class="hint">Rent, salaries, insurance, software — costs that stay the same whether you sell 1 unit or 1,000. Use one period (e.g. a month) consistently.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Per-unit numbers</p>
<div class="settings-grid">
<div class="setting">
<label for="bePrice">Price per unit</label>
<input type="number" id="bePrice" class="tool-input" placeholder="e.g. 50" min="0" step="0.01">
</div>
<div class="setting">
<label for="beVar">Variable cost per unit</label>
<input type="number" id="beVar" class="tool-input" placeholder="e.g. 30" min="0" step="0.01">
<div class="hint">Materials, packaging, shipping, platform fees — what one more unit costs you.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Find your break-even point</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="beBtn">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>
Calculate break-even
</button>
<button type="button" class="btn-pro-outline" id="beClear">Clear</button>
</div>
<div class="results" id="beResults">
<p class="result-head">🎯 Your break-even point</p>
<div class="result-summary" id="beResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — test as many prices and products as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('beShell');
  ToolPro.themeToggle(shell, document.getElementById('beTheme'));
  var fixedEl = document.getElementById('beFixed');
  var priceEl = document.getElementById('bePrice');
  var varEl = document.getElementById('beVar');
  var resBox = document.getElementById('beResults');
  var out = document.getElementById('beResult');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('beBtn').addEventListener('click', function(){
    var fixed = parseFloat(fixedEl.value);
    var price = parseFloat(priceEl.value);
    var variable = parseFloat(varEl.value);
    if (isNaN(fixed) || fixed < 0) { showError('Please enter fixed costs of $0 or more.'); return; }
    if (isNaN(price) || price <= 0) { showError('Please enter a price per unit above $0.'); return; }
    if (isNaN(variable) || variable < 0) { showError('Please enter a variable cost per unit of $0 or more.'); return; }
    if (price <= variable) {
      showError('There is no break-even point: your price (' + fmt(price) + ') must be higher than the variable cost per unit (' + fmt(variable) + '), or every sale loses money.');
      return;
    }
    var margin = price - variable;
    var marginPct = margin / price * 100;
    var unitsExact = fixed / margin;
    var units = Math.ceil(unitsExact);
    var revenue = units * price;
    out.innerHTML = '<p style="font-size:1.4rem;">Break-even: <strong>' + units.toLocaleString() + ' units</strong></p>'
      + '<p>Break-even revenue: <strong>' + fmt(revenue) + '</strong></p>'
      + '<p>Contribution margin per unit: <strong>' + fmt(margin) + '</strong> (' + marginPct.toFixed(2) + '% of the price)</p>'
      + '<p>Every unit sold beyond ' + units.toLocaleString() + ' adds ' + fmt(margin) + ' of profit.</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Break-even calculated', 'ok');
  });

  document.getElementById('beClear').addEventListener('click', function(){
    fixedEl.value = ''; priceEl.value = ''; varEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Every sale contributes the gap between price and variable cost — the **contribution margin** — toward covering fixed costs. So **break-even units = fixed costs ÷ (price − variable cost per unit)**, and break-even revenue is those units times the price. If the price is at or below the variable cost, the margin is zero or negative and no break-even exists: each sale loses money, so selling more only digs the hole deeper.

## Everyday uses

- **Pricing a new product:** see how the break-even point moves when you raise or lower the price by a few dollars.
- **Freelancers and consultants:** treat one project as a "unit" and find how many projects a month covers your costs.
- **Testing a side hustle:** plug in rough numbers before you spend anything and see whether the idea can ever cover its costs.

## Frequently asked questions

**What counts as a fixed cost?**
Anything you pay whether or not you sell: rent, salaries, insurance, software subscriptions, loan payments. Costs that grow with each sale — materials, packaging, transaction fees — are variable instead.

**Why are the units rounded up?**
You cannot sell a fraction of a unit. The exact figure might be 412.3 units; rounding up to 413 gives the first whole number of sales at which all fixed costs are fully covered.

**Can I use this for a service business?**
Yes — define one "unit" as one client, project, or billable hour, the price as what you charge for it, and the variable cost as what delivering it directly costs you (subcontractors, per-project tools, travel).
