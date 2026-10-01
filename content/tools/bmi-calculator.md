---
title: "Free BMI Calculator"
description: "Calculate your Body Mass Index instantly — metric and imperial units, plus the official BMI category table. Free, private, no sign-up."
date: 2026-10-01
draft: false
---

## How it works

Pick your units, enter your height and weight, and get your BMI with its health category.

<div class="calc">
  <div style="display:flex;gap:.5rem;margin-bottom:.75rem;">
    <button type="button" id="bmiMetricBtn" onclick="setBmiUnit('metric')">Metric (cm/kg)</button>
    <button type="button" id="bmiImpBtn" onclick="setBmiUnit('imperial')">Imperial (in/lb)</button>
  </div>
  <div id="bmiMetric" style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="bmiHeight">Height (cm)</label><input type="number" id="bmiHeight" placeholder="175" min="1" step="0.1" style="width:130px;"></div>
    <div><label for="bmiWeight">Weight (kg)</label><input type="number" id="bmiWeight" placeholder="70" min="1" step="0.1" style="width:130px;"></div>
  </div>
  <div id="bmiImperial" style="display:none;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="bmiHeightIn">Height (inches)</label><input type="number" id="bmiHeightIn" placeholder="69" min="1" step="0.1" style="width:130px;"></div>
    <div><label for="bmiWeightLb">Weight (pounds)</label><input type="number" id="bmiWeightLb" placeholder="154" min="1" step="0.1" style="width:130px;"></div>
  </div>
  <div style="margin-top:.75rem;"><button onclick="calcBMI()">Calculate BMI</button></div>
  <div class="result" id="bmiResult"></div>
</div>

<script>
var bmiUnit = 'metric';
function setBmiUnit(u){
  bmiUnit = u;
  document.getElementById('bmiMetric').style.display = (u === 'metric') ? 'flex' : 'none';
  document.getElementById('bmiImperial').style.display = (u === 'imperial') ? 'flex' : 'none';
  document.getElementById('bmiMetricBtn').style.fontWeight = (u === 'metric') ? 'bold' : 'normal';
  document.getElementById('bmiImpBtn').style.fontWeight = (u === 'imperial') ? 'bold' : 'normal';
}
function bmiCategory(b){
  if (b < 18.5) return { name: 'Underweight', color: '#3b82f6' };
  if (b < 25)   return { name: 'Healthy weight', color: '#22c55e' };
  if (b < 30)   return { name: 'Overweight', color: '#f59e0b' };
  return { name: 'Obese', color: '#ef4444' };
}
function calcBMI(){
  var h, w, bmi;
  if (bmiUnit === 'metric') {
    h = parseFloat(document.getElementById('bmiHeight').value) / 100;
    w = parseFloat(document.getElementById('bmiWeight').value);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) { document.getElementById('bmiResult').innerHTML = '<p>Enter a valid height and weight.</p>'; return; }
    bmi = w / (h * h);
  } else {
    h = parseFloat(document.getElementById('bmiHeightIn').value);
    w = parseFloat(document.getElementById('bmiWeightLb').value);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) { document.getElementById('bmiResult').innerHTML = '<p>Enter a valid height and weight.</p>'; return; }
    bmi = 703 * w / (h * h);
  }
  bmi = Math.round(bmi * 10) / 10;
  var cat = bmiCategory(bmi);
  document.getElementById('bmiResult').innerHTML =
    '<p style="font-size:1.5rem;"><strong>' + bmi + '</strong> — <span style="color:' + cat.color + ';"><strong>' + cat.name + '</strong></span></p>'
    + '<table style="margin-top:.5rem;border-collapse:collapse;font-size:.9rem;"><tr><th style="text-align:left;padding:.25rem .75rem .25rem 0;">BMI</th><th style="text-align:left;padding:.25rem 0;">Category</th></tr>'
    + '<tr><td style="padding:.25rem .75rem .25rem 0;">Below 18.5</td><td>Underweight</td></tr>'
    + '<tr><td style="padding:.25rem .75rem .25rem 0;">18.5 – 24.9</td><td>Healthy weight</td></tr>'
    + '<tr><td style="padding:.25rem .75rem .25rem 0;">25 – 29.9</td><td>Overweight</td></tr>'
    + '<tr><td style="padding:.25rem .75rem .25rem 0;">30 and above</td><td>Obese</td></tr></table>';
}
setBmiUnit('metric');
</script>

## Everyday uses

- **Annual checkup prep:** 175 cm and 70 kg = BMI 22.9, healthy weight — know where you stand before the doctor visit.
- **Fitness goals:** track your BMI monthly as you train to see the trend move toward your target range.
- **Unit switching:** traveling or reading a US health article? Flip to imperial and punch in inches and pounds directly.
