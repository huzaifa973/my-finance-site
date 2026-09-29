---
title: "Free Net Worth Tracker"
description: "Free net worth tracker: list your assets and liabilities to calculate your net worth instantly and see the breakdown."
date: 2026-09-29
draft: false
---

Your net worth — everything you own minus everything you owe — is the single best number for tracking your financial progress over time. This free tracker calculates it in seconds. (Everything you enter stays in your browser; nothing is sent anywhere.)

<div class="calc">
  <p style="margin-top:0"><strong>Assets</strong> — cash, savings, investments, property, car value…</p>
  <div id="nwAssets"></div>
  <button type="button" onclick="addNwRow('nwAssets')" style="background:#2f9e6e">+ Add asset</button>
  <p style="margin-top:1.2rem"><strong>Liabilities</strong> — credit cards, loans, mortgage balance…</p>
  <div id="nwDebts"></div>
  <button type="button" onclick="addNwRow('nwDebts')" style="background:#2f9e6e">+ Add liability</button>
  <br>
  <button onclick="calcNetWorth()">Calculate net worth</button>
  <div class="result" id="nwResult"></div>
</div>

<script>
var nwCount = 0;
function addNwRow(containerId, name, amt) {
  nwCount++;
  var d = document.createElement('div');
  d.style.cssText = 'display:flex;gap:.5rem;margin-bottom:.5rem';
  d.innerHTML =
    '<input type="text" class="nw-name" placeholder="e.g. Savings account" value="' + (name || '') + '" style="flex:2">' +
    '<input type="number" class="nw-amt" placeholder="Value" min="0" value="' + (amt || '') + '" style="flex:1">';
  document.getElementById(containerId).appendChild(d);
}
function sumNw(containerId) {
  var total = 0, items = [];
  document.querySelectorAll('#' + containerId + ' > div').forEach(function (d) {
    var nm = d.querySelector('.nw-name').value.trim() || 'Unnamed';
    var amt = parseFloat(d.querySelector('.nw-amt').value);
    if (!isNaN(amt) && amt > 0) { total += amt; items.push({name: nm, amt: amt}); }
  });
  return {total: total, items: items};
}
function calcNetWorth() {
  var out = document.getElementById('nwResult');
  var assets = sumNw('nwAssets'), liabs = sumNw('nwDebts');
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  if (assets.items.length === 0 && liabs.items.length === 0) { out.innerHTML = '<p>Please add at least one asset or liability.</p>'; return; }
  var net = assets.total - liabs.total;
  function pct(x, t) { return t > 0 ? (x / t * 100).toFixed(1) : 0; }
  var rows = assets.items.map(function (a) {
    return '<p>' + escapeHtml(a.name) + ': ' + fmt(a.amt) + ' (' + pct(a.amt, assets.total) + '% of assets)</p>' +
      '<div class="bar"><i style="width:' + pct(a.amt, assets.total) + '%;background:#0b6e4f"></i></div>';
  }).join('');
  var rowsL = liabs.items.map(function (l) {
    return '<p>' + escapeHtml(l.name) + ': ' + fmt(l.amt) + ' (' + pct(l.amt, liabs.total) + '% of liabilities)</p>' +
      '<div class="bar"><i style="width:' + pct(l.amt, liabs.total) + '%;background:#c9a227"></i></div>';
  }).join('');
  var tone = net >= 0 ? '#0b6e4f' : '#a31621';
  out.innerHTML =
    '<p style="font-size:1.4rem"><strong>Your net worth: <span style="color:' + tone + '">' + fmt(net) + '</span></strong></p>' +
    '<p><strong>Total assets:</strong> ' + fmt(assets.total) + ' &nbsp;|&nbsp; <strong>Total liabilities:</strong> ' + fmt(liabs.total) + '</p>' +
    rows + rowsL +
    '<div class="callout"><strong>Tip:</strong> recalculate monthly. The number going up — even slowly — means your plan is working.</div>';
}
function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
addNwRow('nwAssets', 'Savings account', ''); addNwRow('nwAssets', 'Investments', '');
addNwRow('nwDebts', 'Credit card', ''); addNwRow('nwDebts', 'Student loan', '');
</script>

## A negative net worth is a starting line, not a verdict

Many people start below zero — student loans and car debt do that. What matters is the trend. Watch the green side grow and the gold side shrink, month after month.
