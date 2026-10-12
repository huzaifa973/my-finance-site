---
title: "Free Crypto Profit Calculator"
description: "Free crypto profit calculator: enter buy and sell prices, amount and exchange fees to see your net profit or loss and ROI on any coin trade."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Enter how much you spent, the price you bought at and the price you sold (or plan to sell) at — including exchange fees on both sides — and this calculator shows your coins acquired, your true total cost, the sale proceeds, and your net profit or loss with ROI.

<div class="tool-shell" id="cryShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Crypto Profit Calculator</h2>
<p>Know your real profit after fees — before you brag about the trade.</p>
</div>
<button type="button" class="theme-toggle" id="cryTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your buy</p>
<div class="settings-grid">
<div class="setting">
<label for="cryAmount">Amount invested ($)</label>
<input type="number" id="cryAmount" class="tool-input" placeholder="e.g. 1000" min="0">
</div>
<div class="setting">
<label for="cryBuyPrice">Buy price per coin ($)</label>
<input type="number" id="cryBuyPrice" class="tool-input" placeholder="e.g. 20000" min="0" step="any">
</div>
<div class="setting">
<label for="cryBuyFee">Buy fee (%)</label>
<input type="number" id="cryBuyFee" class="tool-input" value="0" min="0" max="99" step="0.01">
<div class="hint">Most exchanges charge about 0.1%–1.5% per trade.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your sell</p>
<div class="settings-grid">
<div class="setting">
<label for="crySellPrice">Sell price per coin ($)</label>
<input type="number" id="crySellPrice" class="tool-input" placeholder="e.g. 30000" min="0" step="any">
</div>
<div class="setting">
<label for="crySellFee">Sell fee (%)</label>
<input type="number" id="crySellFee" class="tool-input" value="0" min="0" max="99" step="0.01">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See your net result</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cryBtn">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/></svg>
Calculate profit
</button>
<button type="button" class="btn-pro-outline" id="cryClear">Clear</button>
</div>
<div class="results" id="cryResults">
<p class="result-head">🪙 Your trade result</p>
<div class="result-summary" id="crySummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cryShell');
  ToolPro.themeToggle(shell, document.getElementById('cryTheme'));
  var resBox = document.getElementById('cryResults');
  var summary = document.getElementById('crySummary');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  function fee(id){ var v = document.getElementById(id).value; return v === '' ? 0 : parseFloat(v); }
  document.getElementById('cryBtn').addEventListener('click', function(){
    var amount = num('cryAmount');
    var buyPrice = num('cryBuyPrice');
    var sellPrice = num('crySellPrice');
    var buyFeePct = fee('cryBuyFee');
    var sellFeePct = fee('crySellFee');
    if (isNaN(amount) || amount <= 0) { showError('Enter an amount invested greater than $0.'); return; }
    if (isNaN(buyPrice) || buyPrice <= 0) { showError('Enter a buy price per coin greater than $0.'); return; }
    if (isNaN(sellPrice) || sellPrice < 0) { showError('Enter a sell price per coin of $0 or more.'); return; }
    if (isNaN(buyFeePct) || buyFeePct < 0 || buyFeePct >= 100) { showError('Buy fee must be between 0% and 100%.'); return; }
    if (isNaN(sellFeePct) || sellFeePct < 0 || sellFeePct >= 100) { showError('Sell fee must be between 0% and 100%.'); return; }
    var coins = amount / buyPrice;
    var buyFeeAmt = amount * buyFeePct / 100;
    var totalCost = amount + buyFeeAmt;
    var proceeds = coins * sellPrice * (1 - sellFeePct / 100);
    var profit = proceeds - totalCost;
    var roi = profit / totalCost * 100;
    var color = profit >= 0 ? '#0b6e4f' : '#b3261e';
    var label = profit >= 0 ? 'Net profit' : 'Net loss';
    summary.innerHTML = '<p style="font-size:1.3rem;">' + label + ': <strong style="color:' + color + '">' + fmt(profit) + '</strong></p>'
      + '<p>Coins acquired: <strong>' + coins.toLocaleString(undefined,{maximumFractionDigits:8}) + '</strong></p>'
      + '<p>Total cost (incl. buy fee ' + fmt(buyFeeAmt) + '): <strong>' + fmt(totalCost) + '</strong></p>'
      + '<p>Sale proceeds (after sell fee): <strong>' + fmt(proceeds) + '</strong></p>'
      + '<p>ROI: <strong style="color:' + color + '">' + roi.toFixed(2) + '%</strong></p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Trade result calculated', 'ok');
  });
  document.getElementById('cryClear').addEventListener('click', function(){
    document.getElementById('cryAmount').value = '';
    document.getElementById('cryBuyPrice').value = '';
    document.getElementById('crySellPrice').value = '';
    document.getElementById('cryBuyFee').value = '0';
    document.getElementById('crySellFee').value = '0';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

First, your dollars become coins: **coins = amount invested / buy price**. The buy fee is charged on top of your investment, so your true total cost is amount + (amount × buy fee %). When you sell, the exchange takes its cut first: **sale proceeds = coins × sell price × (1 − sell fee %)**. Net profit is proceeds minus total cost, and ROI is net profit divided by total cost, as a percentage. That is why a coin can rise 5% while you still lose money — fees on both sides quietly eat the first chunk of every gain.

## Everyday uses

- **"What if" planning:** test a target sell price before you place the trade, fees included.
- **Break-even finding:** nudge the sell price until net profit hits $0 — that is your real break-even.
- **Tax records:** get clean cost and proceeds figures for each closed trade when tax season arrives.

## Frequently asked questions

### Why does the exchange show a different profit?

Exchanges usually display price change only, ignoring the fees you paid on both the buy and the sell. This calculator counts both fees, so its profit figure is the honest, smaller one — the money you would actually keep.

### Can I use this for stocks or forex instead of crypto?

Yes. The math is the same for any asset where you know the buy price, sell price and percentage fees — just read "coin" as share or unit.

### Does it include network (gas) or withdrawal fees?

No — those are flat dollar charges, not percentages. If you paid a flat withdrawal fee, subtract it from the sale proceeds shown here to get your final take-home number.
