---
title: "Free Profit Margin Calculator"
description: "Free profit margin calculator: enter cost and revenue to see your profit, gross margin percentage, and markup percentage instantly."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter what a product or job costs you and the revenue it brings in — this calculator shows your profit in dollars, your gross margin percentage, and your markup percentage, so you can see at a glance whether your pricing actually leaves money on the table.

<div class="tool-shell" id="mgnShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Profit Margin Calculator</h2>
<p>Profit, gross margin, and markup from two numbers — know what every sale really earns.</p>
</div>
<button type="button" class="theme-toggle" id="mgnTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your numbers</p>
<div class="settings-grid">
<div class="setting">
<label for="mgnCost">Cost ($)</label>
<input type="number" id="mgnCost" class="tool-input" placeholder="e.g. 60" min="0" step="any">
<div class="hint">Everything it costs to make or deliver one unit — materials, labor, shipping in.</div>
</div>
<div class="setting">
<label for="mgnRevenue">Revenue ($)</label>
<input type="number" id="mgnRevenue" class="tool-input" placeholder="e.g. 100" min="0" step="any">
<div class="hint">The selling price, or the total revenue for the same units covered by the cost.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> See your margins</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mgnBtn">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
Calculate margin
</button>
<button type="button" class="btn-pro-outline" id="mgnClear">Clear</button>
</div>
<div class="results" id="mgnResults">
<p class="result-head">🧮 Your profit breakdown</p>
<div class="result-summary" id="mgnResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — price as many products as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mgnShell');
  ToolPro.themeToggle(shell, document.getElementById('mgnTheme'));
  var resBox = document.getElementById('mgnResults');
  var out = document.getElementById('mgnResult');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  document.getElementById('mgnBtn').addEventListener('click', function(){
    var costRaw = document.getElementById('mgnCost').value;
    var revRaw = document.getElementById('mgnRevenue').value;
    var cost = parseFloat(costRaw);
    var revenue = parseFloat(revRaw);
    if (costRaw === '' || isNaN(cost) || cost < 0) { showError('Enter a cost of $0 or more.'); return; }
    if (revRaw === '' || isNaN(revenue) || revenue === 0) { showError('Revenue cannot be $0 — margin is undefined with no revenue. Enter your selling price or total revenue.'); return; }
    if (revenue < 0) { showError('Revenue cannot be negative.'); return; }
    var profit = revenue - cost;
    var margin = profit / revenue * 100;
    var markupText = cost > 0 ? (profit / cost * 100).toFixed(2) + '%' : 'n/a (cost is $0)';
    out.innerHTML = '<p style="font-size:1.35rem;">Gross margin: <strong>' + margin.toFixed(2) + '%</strong></p>'
      + '<p>Profit: <strong>' + fmt(profit) + '</strong> &middot; Markup: <strong>' + markupText + '</strong></p>'
      + '<p>Cost: ' + fmt(cost) + ' &middot; Revenue: ' + fmt(revenue) + '</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Margin calculated', 'ok');
  });

  document.getElementById('mgnClear').addEventListener('click', function(){
    document.getElementById('mgnCost').value = '';
    document.getElementById('mgnRevenue').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Profit is simply **revenue − cost**. Gross margin expresses that profit as a share of the money you took in: **margin % = profit ÷ revenue × 100**. Markup expresses the same profit as a share of what it cost you: **markup % = profit ÷ cost × 100**. Because the two percentages divide by different numbers, markup is always higher than margin on a profitable sale — a product that costs $60 and sells for $100 has a 40% margin but a 66.67% markup.

## Everyday uses

- **Pricing products:** check whether a handmade item, resale find, or digital product is priced high enough to be worth selling.
- **Freelance quotes:** enter your time and expenses as cost and your quote as revenue to see the margin on a job before you send it.
- **Restaurant and retail menus:** see which items actually carry the business and which are barely breaking even.
- **Wholesale decisions:** compare suppliers by running the same selling price against different unit costs.

## Frequently asked questions

**Q: What is the difference between margin and markup?**
A: Margin divides profit by revenue (the selling price); markup divides profit by cost. A 50% markup on a $60 item gives a $90 price, but the margin on that sale is only 33.33%. Mixing the two up is one of the most common pricing mistakes.

**Q: What is a healthy gross margin?**
A: It varies widely by industry — grocery stores often run on 1–3% net margins, while software and digital products can exceed 70% gross margin. Compare yours against businesses similar to yours, and make sure it covers your overheads, not just the unit cost.

**Q: Can margin be over 100%?**
A: No. Margin is profit divided by revenue, and profit can never exceed revenue, so gross margin tops out at 100% (when cost is $0). Markup, which divides by cost, can go well above 100%.
