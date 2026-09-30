---
title: "Free Tip & Bill Split Calculator"
description: "Calculate the perfect tip and split any restaurant bill fairly — per-person totals with tip included. Free, instant, no sign-up."
date: 2026-09-30
draft: false
---

## How it works

Enter the bill, pick a tip percentage, and split it evenly — no more awkward phone-math at the table.

<div class="calc">
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="tipBill">Bill amount ($)</label><input type="number" id="tipBill" placeholder="64.50" min="0" step="0.01" style="width:130px;"></div>
    <div><label for="tipPeople">Split between (people)</label><input type="number" id="tipPeople" placeholder="2" min="1" step="1" style="width:130px;"></div>
  </div>
  <div style="margin:.75rem 0;">
    <label>Tip percentage</label>
    <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-top:.25rem;" id="tipBtns">
      <button type="button" onclick="setTip(10)">10%</button>
      <button type="button" onclick="setTip(15)">15%</button>
      <button type="button" onclick="setTip(18)">18%</button>
      <button type="button" onclick="setTip(20)">20%</button>
      <button type="button" onclick="setTip(25)">25%</button>
      <div><input type="number" id="tipCustom" placeholder="Custom %" min="0" step="0.5" style="width:110px;" oninput="setTip(null)"></div>
    </div>
  </div>
  <div><button onclick="calcTip()">Calculate</button></div>
  <div class="result" id="tipResult"></div>
</div>

<script>
var tipPct = 18;
function setTip(p){
  if (p !== null) {
    tipPct = p;
    document.getElementById('tipCustom').value = '';
  } else {
    var c = parseFloat(document.getElementById('tipCustom').value);
    tipPct = isNaN(c) ? 18 : Math.max(0, c);
  }
  var btns = document.getElementById('tipBtns').querySelectorAll('button');
  for (var i = 0; i < btns.length; i++) {
    btns[i].style.fontWeight = (parseFloat(btns[i].textContent) === tipPct) ? 'bold' : 'normal';
  }
}
function money(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
function calcTip(){
  var bill = parseFloat(document.getElementById('tipBill').value);
  var people = parseInt(document.getElementById('tipPeople').value, 10);
  var o = document.getElementById('tipResult');
  if (isNaN(bill) || bill < 0) { o.innerHTML = '<p>Enter the bill amount.</p>'; return; }
  if (isNaN(people) || people < 1) { people = 1; }
  var tip = bill * tipPct / 100;
  var total = bill + tip;
  o.innerHTML = '<p><strong>Tip (' + tipPct + '%): ' + money(tip) + '</strong></p>'
    + '<p>Total bill: <strong>' + money(total) + '</strong></p>'
    + '<p>Each of ' + people + ' pays: <strong>' + money(total / people) + '</strong>'
    + (people > 1 ? ' (incl. ' + money(tip / people) + ' tip)' : '') + '</p>';
}
setTip(18);
</script>

## Everyday uses

- **Dining out:** 20% on a $64.50 bill split 2 ways = $38.70 each.
- **Takeout & delivery:** 10–15% is the usual range when there's no table service.
- **Large groups:** many restaurants auto-add 18–20% for parties of 6+ — check the bill before double-tipping.
