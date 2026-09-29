---
title: "Free Percentage Calculator"
description: "Calculate X% of Y, what percentage one number is of another, and percentage increase/decrease. Free, instant, no sign-up."
date: 2026-09-29
draft: false
---

## How it works

Three common percentage calculations in one place — discounts, tips, price changes, grades, and more.

<div class="calc">
  <h3 style="margin-top:0;">What is X% of Y?</h3>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="p1x">X (%)</label><input type="number" id="p1x" placeholder="20" style="width:110px;"></div>
    <div><label for="p1y">of Y</label><input type="number" id="p1y" placeholder="150" style="width:110px;"></div>
    <div><button onclick="pct1()">Calculate</button></div>
  </div>
  <div class="result" id="pctR1"></div>

  <h3>X is what % of Y?</h3>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="p2x">X</label><input type="number" id="p2x" placeholder="45" style="width:110px;"></div>
    <div><label for="p2y">of Y</label><input type="number" id="p2y" placeholder="200" style="width:110px;"></div>
    <div><button onclick="pct2()">Calculate</button></div>
  </div>
  <div class="result" id="pctR2"></div>

  <h3>Percentage change (increase / decrease)</h3>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="p3from">From</label><input type="number" id="p3from" placeholder="80" style="width:110px;"></div>
    <div><label for="p3to">To</label><input type="number" id="p3to" placeholder="100" style="width:110px;"></div>
    <div><button onclick="pct3()">Calculate</button></div>
  </div>
  <div class="result" id="pctR3"></div>
</div>

<script>
function val(id){ var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? null : v; }
function fmt(n){ return n.toLocaleString(undefined,{maximumFractionDigits:2}); }
function pct1(){
  var x = val('p1x'), y = val('p1y'), o = document.getElementById('pctR1');
  if (x === null || y === null) { o.innerHTML = '<p>Enter both numbers.</p>'; return; }
  o.innerHTML = '<p><strong>' + fmt(x) + '% of ' + fmt(y) + ' = ' + fmt(x/100*y) + '</strong></p>';
}
function pct2(){
  var x = val('p2x'), y = val('p2y'), o = document.getElementById('pctR2');
  if (x === null || y === null || y === 0) { o.innerHTML = '<p>Enter both numbers (Y can’t be zero).</p>'; return; }
  o.innerHTML = '<p><strong>' + fmt(x) + ' is ' + fmt(x/y*100) + '% of ' + fmt(y) + '</strong></p>';
}
function pct3(){
  var a = val('p3from'), b = val('p3to'), o = document.getElementById('pctR3');
  if (a === null || b === null || a === 0) { o.innerHTML = '<p>Enter both numbers (From can’t be zero).</p>'; return; }
  var ch = (b - a) / Math.abs(a) * 100;
  var word = ch > 0 ? 'increase' : (ch < 0 ? 'decrease' : 'change');
  o.innerHTML = '<p><strong>' + fmt(Math.abs(ch)) + '% ' + word + '</strong> (from ' + fmt(a) + ' to ' + fmt(b) + ')</p>';
}
</script>

## Everyday uses

- **Shopping:** a 20% discount on $150 = $30 off, so you pay $120.
- **Tipping:** 15% of a $64 bill = $9.60.
- **Savings:** track what percentage of your income you actually save each month.
