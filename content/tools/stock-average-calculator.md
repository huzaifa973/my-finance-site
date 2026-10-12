---
title: "Free Stock Average Calculator"
description: "Free stock average calculator: average down (or up) across multiple buys. Add each purchase to get total shares, cost and average price."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Bought the same stock at different prices? Add each purchase — shares and price per share — and this calculator works out your total shares, total invested and your true average cost per share. Add today's price to instantly see your profit or loss.

<div class="tool-shell" id="stkShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7 2h2v4H7zM7 15h2v7H7zM5 6h6v9H5zM16 1h2v4h-2zM16 14h2v7h-2zM14 5h6v9h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Stock Average Calculator</h2>
<p>Multiple buys, one true average cost — plus your live profit or loss.</p>
</div>
<button type="button" class="theme-toggle" id="stkTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your purchases</p>
<div id="stkRows"></div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="stkAdd">+ Add another purchase</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Current price (optional)</p>
<div class="setting">
<label for="stkCurrent">Current price per share ($)</label>
<input type="number" id="stkCurrent" class="tool-input" placeholder="e.g. 160" min="0" step="any" style="max-width:220px;">
<div class="hint">Leave blank to see just your average cost, or enter a price to see profit and loss.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your average cost</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="stkBtn">
<svg viewBox="0 0 24 24"><path d="M7 2h2v4H7zM7 15h2v7H7zM5 6h6v9H5zM16 1h2v4h-2zM16 14h2v7h-2zM14 5h6v9h-6z"/></svg>
Calculate average
</button>
<button type="button" class="btn-pro-outline" id="stkClear">Clear</button>
</div>
<div class="results" id="stkResults">
<p class="result-head">🧾 Your average cost</p>
<div class="result-summary" id="stkSummary"></div>
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
  var shell = document.getElementById('stkShell');
  ToolPro.themeToggle(shell, document.getElementById('stkTheme'));
  var resBox = document.getElementById('stkResults');
  var summary = document.getElementById('stkSummary');
  var rowsWrap = document.getElementById('stkRows');
  function fmt(n){ var s = Math.abs(n).toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); return (n < 0 ? '-$' : '$') + s; }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function addRow(){
    var row = document.createElement('div');
    row.className = 'settings-grid stk-row';
    row.innerHTML = '<div class="setting"><label>Shares bought</label><input type="number" class="tool-input stk-shares" placeholder="e.g. 10" min="0" step="any"></div>'
      + '<div class="setting"><label>Price per share ($)</label><input type="number" class="tool-input stk-price" placeholder="e.g. 150" min="0" step="any"></div>'
      + '<div class="setting"><label>&nbsp;</label><button type="button" class="btn-pro-outline stk-remove">Remove</button></div>';
    rowsWrap.appendChild(row);
  }
  addRow(); addRow(); addRow();
  document.getElementById('stkAdd').addEventListener('click', function(){
    addRow();
    ToolPro.toast('Purchase row added');
  });
  rowsWrap.addEventListener('click', function(e){
    if (!e.target.classList || !e.target.classList.contains('stk-remove')) return;
    if (rowsWrap.querySelectorAll('.stk-row').length <= 1) { ToolPro.toast('Keep at least one purchase row', 'err'); return; }
    e.target.closest('.stk-row').remove();
  });
  document.getElementById('stkBtn').addEventListener('click', function(){
    var rows = rowsWrap.querySelectorAll('.stk-row');
    var totalShares = 0, totalInvested = 0, used = 0;
    for (var k = 0; k < rows.length; k++) {
      var sv = rows[k].querySelector('.stk-shares').value;
      var pv = rows[k].querySelector('.stk-price').value;
      if (sv === '' && pv === '') continue;
      var s = parseFloat(sv), p = parseFloat(pv);
      if (isNaN(s) || isNaN(p) || s < 0 || p < 0) { showError('Complete each purchase row with shares and a price (or remove the row).'); return; }
      totalShares += s;
      totalInvested += s * p;
      used++;
    }
    if (!used || totalShares <= 0) { showError('Add at least one purchase with shares above 0.'); return; }
    var avg = totalInvested / totalShares;
    var html = '<p style="font-size:1.3rem;">Average cost: <strong>' + fmt(avg) + '</strong> per share</p>'
      + '<p>Total shares: <strong>' + totalShares.toLocaleString(undefined,{maximumFractionDigits:8}) + '</strong></p>'
      + '<p>Total invested: <strong>' + fmt(totalInvested) + '</strong></p>';
    var curRaw = document.getElementById('stkCurrent').value;
    if (curRaw !== '') {
      var cur = parseFloat(curRaw);
      if (isNaN(cur) || cur < 0) { showError('Current price must be $0 or more.'); return; }
      var value = totalShares * cur;
      var pl = value - totalInvested;
      var plPct = totalInvested > 0 ? pl / totalInvested * 100 : 0;
      var color = pl >= 0 ? '#0b6e4f' : '#b3261e';
      var label = pl >= 0 ? 'Profit' : 'Loss';
      html += '<p>Current value at ' + fmt(cur) + ': <strong>' + fmt(value) + '</strong></p>'
        + '<p>' + label + ': <strong style="color:' + color + '">' + fmt(pl) + ' (' + plPct.toFixed(2) + '%)</strong></p>';
    }
    summary.innerHTML = html;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Average cost calculated', 'ok');
  });
  document.getElementById('stkClear').addEventListener('click', function(){
    rowsWrap.innerHTML = '';
    addRow(); addRow(); addRow();
    document.getElementById('stkCurrent').value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Your average cost is a **weighted average** — bigger purchases count more than smaller ones:

**Average cost per share = Total amount invested / Total shares**

Each purchase contributes shares × price to the total invested. Buying 10 shares at $100 and 20 shares at $150 is not an average of $125 — it is ($1,000 + $3,000) / 30 shares = **$133.33**, because twice as much money went in at the higher price. Profit or loss at any current price is simply (current price − average cost) × total shares.

## Everyday uses

- **Averaging down:** see how a dip purchase pulls your average cost toward your break-even point.
- **Break-even checks:** your average cost is exactly the price where profit and loss are both zero.
- **Brokerage cross-check:** verify the cost basis your broker shows, especially after several partial buys.

## Frequently asked questions

### Does this include brokerage commissions and fees?

Not by default. If your broker charges a per-trade fee, add it to that purchase by slightly increasing the price per share (fee divided by shares), or add the fee to the total for that row's price. Most US brokers are commission-free for stocks, so the plain average is usually exact.

### Should I average down on a falling stock?

This calculator only does the math — averaging down lowers your break-even but also concentrates more money in one position. Whether that is wise depends on why the price fell, not on the average itself.

### Can I use this for crypto or mutual funds too?

Yes — the weighted-average math is identical for any asset bought in lots. Enter each buy's units and unit price, whether they are shares, coins or fund units.
