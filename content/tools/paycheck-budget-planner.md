---
title: "Free Paycheck Budget Planner"
description: "Free paycheck budget planner: enter your pay and expenses to allocate every dollar before payday and see what's left over."
date: 2026-09-29
draft: false
---

Planning from one paycheck to the next is how most of us actually budget — forget the monthly average. Tell this free planner what hits your account each payday and where it needs to go, and it allocates every dollar before you spend a cent.

<div class="calc">
  <label for="pbPay">Pay amount (take-home)</label>
  <input type="number" id="pbPay" placeholder="e.g. 1800" min="1">
  <label for="pbFreq">Pay frequency</label>
  <select id="pbFreq" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font)">
    <option value="1">Weekly</option>
    <option value="2">Every 2 weeks</option>
    <option value="2.1667">Twice a month</option>
    <option value="4.3333" selected>Monthly</option>
  </select>
  <div id="pbCats"></div>
  <button type="button" onclick="addPbCat()" style="background:#2f9e6e">+ Add expense</button>
  <button onclick="calcPaycheck()">Plan my paycheck</button>
  <div class="result" id="pbResult"></div>
</div>

<script>
var pbCount = 0;
function addPbCat(name, amt) {
  if (pbCount >= 15) { alert('You can add up to 15 expenses.'); return; }
  pbCount++;
  var d = document.createElement('div');
  d.style.cssText = 'display:flex;gap:.5rem;margin-bottom:.5rem';
  d.innerHTML =
    '<input type="text" class="pb-name" placeholder="e.g. Rent" value="' + (name || '') + '" style="flex:2">' +
    '<input type="number" class="pb-amt" placeholder="Amount" min="0" value="' + (amt || '') + '" style="flex:1">';
  document.getElementById('pbCats').appendChild(d);
}
function calcPaycheck() {
  var pay = parseFloat(document.getElementById('pbPay').value);
  var freq = parseFloat(document.getElementById('pbFreq').value);
  var out = document.getElementById('pbResult');
  if (!pay || pay <= 0) { out.innerHTML = '<p>Please enter a valid pay amount.</p>'; return; }
  var cats = [];
  document.querySelectorAll('#pbCats > div').forEach(function (d) {
    var nm = d.querySelector('.pb-name').value.trim() || 'Unnamed';
    var amt = parseFloat(d.querySelector('.pb-amt').value);
    if (!isNaN(amt) && amt > 0) cats.push({name: nm, amt: amt});
  });
  if (cats.length === 0) { out.innerHTML = '<p>Please add at least one expense.</p>'; return; }
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  var total = cats.reduce(function (s, c) { return s + c.amt; }, 0);
  var leftover = pay - total;
  var monthlyIncome = pay * freq;
  var monthlyExpenses = total * freq;
  var rows = cats.map(function (c) {
    var pct = (c.amt / pay * 100);
    return '<p><strong>' + escapeHtml(c.name) + ':</strong> ' + fmt(c.amt) + ' (' + pct.toFixed(1) + '% of paycheck)</p>' +
      '<div class="bar"><i style="width:' + Math.min(pct, 100).toFixed(1) + '%;background:' + (pct > 40 ? '#c9a227' : '#0b6e4f') + '"></i></div>';
  }).join('');
  var verdict = leftover >= 0
    ? '<p><strong>Leftover per paycheck:</strong> <span style="color:#0b6e4f;font-weight:700">' + fmt(leftover) + '</span></p><div class="callout"><strong>Tip:</strong> send that leftover to savings on payday — don\'t let it sit where you can spend it.</div>'
    : '<p><strong>Shortfall per paycheck:</strong> <span style="color:#a31621;font-weight:700">' + fmt(-leftover) + '</span> — expenses exceed pay. Trim or downgrade something to get back in the black.</p>';
  out.innerHTML = rows +
    '<p><strong>Total expenses:</strong> ' + fmt(total) + '</p>' +
    '<p><strong>Monthly equivalent:</strong> ' + fmt(monthlyIncome) + ' in, ' + fmt(monthlyExpenses) + ' out</p>' + verdict;
}
function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
addPbCat('Rent', ''); addPbCat('Groceries', ''); addPbCat('Bills', ''); addPbCat('Transport', '');
</script>

## Paycheck-to-paycheck, but on purpose

Zero-based paycheck planning means your money gets a job before payday arrives. Enter expenses in priority order — housing, bills, food, transport first — so if pay ever comes up short, you know exactly what gets cut.
