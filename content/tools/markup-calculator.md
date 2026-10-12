---
title: "Free Markup Calculator"
description: "Free markup calculator: turn cost plus markup into a selling price, or work backward from a price to find your markup and margin."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Work in whichever direction suits you: enter a cost and a markup percentage to get the selling price, or enter a cost and the price you want to charge to find the markup — either way you also see the profit per unit and the resulting profit margin.

<div class="tool-shell" id="mkpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Markup Calculator</h2>
<p>Cost plus markup equals price — or work backward from any price to the markup behind it.</p>
</div>
<button type="button" class="theme-toggle" id="mkpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your unit cost</p>
<div class="setting">
<label for="mkpCost">Cost per unit ($)</label>
<input type="number" id="mkpCost" class="tool-input" placeholder="e.g. 80" min="0" step="any" style="max-width:220px;">
<div class="hint">What one unit costs you to buy, make, or deliver.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Choose how to calculate</p>
<div class="settings-panel">
<div class="setting">
<label for="mkpMode">I want to enter</label>
<select id="mkpMode" class="tool-input" style="max-width:280px;">
<option value="pct">Cost + markup % &rarr; price</option>
<option value="price">Cost + selling price &rarr; markup %</option>
</select>
</div>
<div class="setting" id="mkpPctWrap">
<label for="mkpPct">Markup (%)</label>
<input type="number" id="mkpPct" class="tool-input" placeholder="e.g. 25" step="any" style="max-width:220px;">
</div>
<div class="setting" id="mkpPriceWrap" style="display:none;">
<label for="mkpPrice">Desired selling price ($)</label>
<input type="number" id="mkpPrice" class="tool-input" placeholder="e.g. 100" min="0" step="any" style="max-width:220px;">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your price</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mkpBtn">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>
Calculate
</button>
<button type="button" class="btn-pro-outline" id="mkpClear">Clear</button>
</div>
<div class="results" id="mkpResults">
<p class="result-head">🏷️ Your pricing breakdown</p>
<div class="result-summary" id="mkpResult"></div>
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
  var shell = document.getElementById('mkpShell');
  ToolPro.themeToggle(shell, document.getElementById('mkpTheme'));
  var resBox = document.getElementById('mkpResults');
  var out = document.getElementById('mkpResult');
  var modeEl = document.getElementById('mkpMode');
  var pctWrap = document.getElementById('mkpPctWrap');
  var priceWrap = document.getElementById('mkpPriceWrap');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function syncMode(){
    var isPct = modeEl.value === 'pct';
    pctWrap.style.display = isPct ? '' : 'none';
    priceWrap.style.display = isPct ? 'none' : '';
  }
  modeEl.addEventListener('change', syncMode);
  syncMode();

  document.getElementById('mkpBtn').addEventListener('click', function(){
    var costRaw = document.getElementById('mkpCost').value;
    var cost = parseFloat(costRaw);
    if (costRaw === '' || isNaN(cost) || cost <= 0) { showError('Enter a cost per unit greater than $0.'); return; }
    var price, markup;
    if (modeEl.value === 'pct') {
      var pctRaw = document.getElementById('mkpPct').value;
      markup = parseFloat(pctRaw);
      if (pctRaw === '' || isNaN(markup)) { showError('Enter a markup percentage.'); return; }
      price = cost * (1 + markup / 100);
      if (price <= 0) { showError('That markup makes the price $0 or less — enter a markup above -100%.'); return; }
    } else {
      var priceRaw = document.getElementById('mkpPrice').value;
      price = parseFloat(priceRaw);
      if (priceRaw === '' || isNaN(price) || price <= 0) { showError('Enter a selling price greater than $0.'); return; }
      markup = (price - cost) / cost * 100;
    }
    var profit = price - cost;
    var margin = profit / price * 100;
    out.innerHTML = '<p style="font-size:1.35rem;">Selling price: <strong>' + fmt(price) + '</strong></p>'
      + '<p>Markup: <strong>' + markup.toFixed(2) + '%</strong> &middot; Profit margin: <strong>' + margin.toFixed(2) + '%</strong></p>'
      + '<p>Profit per unit: <strong>' + fmt(profit) + '</strong> on a cost of ' + fmt(cost) + '</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Pricing calculated', 'ok');
  });

  document.getElementById('mkpClear').addEventListener('click', function(){
    document.getElementById('mkpCost').value = '';
    document.getElementById('mkpPct').value = '';
    document.getElementById('mkpPrice').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Markup is the percentage you add on top of cost to set a price: **price = cost × (1 + markup ÷ 100)**. Working backward, **markup % = (price − cost) ÷ cost × 100**. The calculator also shows the profit margin — **(price − cost) ÷ price × 100** — because the two are easy to confuse: a 25% markup on an $80 cost gives a $100 price, but the margin on that sale is 20%, not 25%.

## Everyday uses

- **Retail and resale:** set shelf prices from wholesale cost with a consistent markup across a whole product line.
- **Etsy and handmade goods:** turn materials-plus-time cost into a price that actually includes your profit.
- **Contractor quotes:** build a bid from materials and labor cost plus your standard markup.
- **Reverse-checking competitors:** enter their price and your cost to see what markup they are working with.

## Frequently asked questions

**Q: Is markup the same as profit margin?**
A: No. Markup is calculated on cost, margin is calculated on price. Because price is the bigger number, the margin percentage is always smaller than the markup percentage for the same sale. This calculator shows both so you never mix them up.

**Q: What markup should I use?**
A: Common retail markups run from about 50% (keystone pricing doubles the cost) to several hundred percent on small or specialty items. The right figure covers your overheads — rent, fees, shipping, returns — with profit left over, while staying in line with what customers will pay.

**Q: Can markup be negative?**
A: Yes — that means selling below cost, which businesses sometimes do deliberately for clearance or loss-leader promotions. Enter a price below your cost in the second mode and the calculator will show the negative markup and margin.
