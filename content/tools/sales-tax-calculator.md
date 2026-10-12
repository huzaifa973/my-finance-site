---
title: "Free Sales Tax Calculator"
description: "Free sales tax calculator: add tax to a price or strip it out of a total, with one-tap presets for CA, NYC, TX, FL, and OR rates."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Pick whether you are adding tax to a price or removing it from a total that already includes tax, enter the amount and the tax rate — or tap a state preset — and this calculator shows the tax amount and the final figure, down to the cent.

<div class="tool-shell" id="staxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 18l-3-2-3 2V4h12v16l-3-2-3 2zM8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sales Tax Calculator</h2>
<p>Add tax to any price — or work out how much of a total was tax in the first place.</p>
</div>
<button type="button" class="theme-toggle" id="staxTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Amount &amp; direction</p>
<div class="settings-grid">
<div class="setting">
<label for="staxMode">I want to</label>
<select id="staxMode" class="tool-input">
<option value="add">Add tax to a price</option>
<option value="remove">Remove tax from a total</option>
</select>
</div>
<div class="setting">
<label for="staxPrice" id="staxPriceLabel">Price before tax ($)</label>
<input type="number" id="staxPrice" class="tool-input" placeholder="e.g. 100" min="0" step="any">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Tax rate</p>
<div class="settings-panel">
<div class="preset-row" id="staxPresets">
<button type="button" class="preset-chip" data-rate="7.25">CA — 7.25%</button>
<button type="button" class="preset-chip" data-rate="8.875">NYC — 8.875%</button>
<button type="button" class="preset-chip" data-rate="6.25">TX — 6.25%</button>
<button type="button" class="preset-chip" data-rate="6">FL — 6%</button>
<button type="button" class="preset-chip" data-rate="0">OR — 0%</button>
</div>
<div class="setting">
<label for="staxRate">Tax rate (%)</label>
<input type="number" id="staxRate" class="tool-input" placeholder="e.g. 7.25" min="0" step="any" style="max-width:220px;">
<div class="hint">Presets are statewide base rates — many cities and counties add a local rate on top.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See the breakdown</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="staxBtn">
<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 18l-3-2-3 2V4h12v16l-3-2-3 2zM8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h5v2H8v-2z"/></svg>
Calculate tax
</button>
<button type="button" class="btn-pro-outline" id="staxClear">Clear</button>
</div>
<div class="results" id="staxResults">
<p class="result-head">🧾 Your sales tax breakdown</p>
<div class="result-summary" id="staxResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — work out tax on as many prices as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('staxShell');
  ToolPro.themeToggle(shell, document.getElementById('staxTheme'));
  var resBox = document.getElementById('staxResults');
  var out = document.getElementById('staxResult');
  var modeEl = document.getElementById('staxMode');
  var rateEl = document.getElementById('staxRate');
  var priceLabel = document.getElementById('staxPriceLabel');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function syncMode(){
    priceLabel.textContent = modeEl.value === 'add' ? 'Price before tax ($)' : 'Total including tax ($)';
  }
  modeEl.addEventListener('change', syncMode);
  syncMode();

  document.getElementById('staxPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    rateEl.value = chip.dataset.rate;
    ToolPro.toast('Rate set: ' + chip.textContent.trim());
  });

  document.getElementById('staxBtn').addEventListener('click', function(){
    var priceRaw = document.getElementById('staxPrice').value;
    var rateRaw = rateEl.value;
    var amount = parseFloat(priceRaw);
    var rate = parseFloat(rateRaw);
    if (priceRaw === '' || isNaN(amount) || amount < 0) { showError('Enter an amount of $0 or more.'); return; }
    if (rateRaw === '' || isNaN(rate) || rate < 0) { showError('Enter a tax rate of 0% or more — or tap a state preset.'); return; }
    var preTax, tax, total;
    if (modeEl.value === 'add') {
      preTax = amount;
      tax = amount * rate / 100;
      total = amount + tax;
    } else {
      total = amount;
      preTax = amount / (1 + rate / 100);
      tax = total - preTax;
    }
    out.innerHTML = '<p style="font-size:1.35rem;">Total: <strong>' + fmt(total) + '</strong></p>'
      + '<p>Price before tax: ' + fmt(preTax) + ' &middot; Sales tax (' + rate + '%): <strong>' + fmt(tax) + '</strong></p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Sales tax calculated', 'ok');
  });

  document.getElementById('staxClear').addEventListener('click', function(){
    document.getElementById('staxPrice').value = '';
    rateEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Adding tax is straightforward: **tax = price × rate ÷ 100**, and the total is price + tax. Removing tax from a total takes one extra step, because the tax was charged on the pre-tax price, not on the total: **pre-tax price = total ÷ (1 + rate ÷ 100)**, and the tax portion is whatever is left. That is why you cannot find the tax in a $108.88 total just by taking 8.875% of $108.88 — you have to divide, not multiply.

## Everyday uses

- **Shopping and big purchases:** know the true out-the-door price of a car, laptop, or appliance before you reach the register.
- **Invoicing clients:** add the correct tax to a quote, or split a tax-inclusive payment into net and tax for your records.
- **Expense reports:** pull the tax portion out of a receipt total when your employer or your books need it separated.
- **Moving or buying across state lines:** compare how the same purchase is taxed in different states.

## Frequently asked questions

**Q: Why does the preset rate differ from what I was charged?**
A: The presets are statewide base rates. Most states let cities, counties, and transit districts add their own percentage on top, which is why the combined rate in a place like Chicago or Los Angeles is higher than the state base. Enter your exact combined local rate for a precise figure.

**Q: Which states have no sales tax?**
A: Oregon, Montana, New Hampshire, Delaware, and (mostly) Alaska have no statewide sales tax — hence the OR 0% preset. Some Alaskan localities do charge a local tax.

**Q: Is sales tax calculated on the discounted price?**
A: Usually yes for store discounts — tax applies to the price after a store's own discount. Manufacturer coupons are treated differently in some states and may be taxed on the pre-coupon price.
