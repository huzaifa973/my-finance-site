---
title: "Free Salary to Hourly Converter"
description: "Free salary to hourly converter: turn an annual salary into an hourly rate — and convert hourly pay back to a salary."
date: 2026-09-29
draft: false
---

Is $75,000 a year actually good pay per hour? This free converter turns any annual salary into an hourly rate — and works in reverse too, so hourly workers can see their yearly equivalent. Handy for job offers, negotiations, and side-hustle math.

<div class="calc">
  <p style="margin-top:0"><strong>Salary → Hourly</strong></p>
  <label for="shSalary">Annual salary</label>
  <input type="number" id="shSalary" placeholder="e.g. 75000" min="1">
  <label for="shHours">Hours worked per week</label>
  <input type="number" id="shHours" placeholder="e.g. 40" min="1" max="100">
  <button onclick="calcSalaryToHourly()">Convert to hourly</button>
  <div class="result" id="shResult1"></div>
  <hr style="border:0;border-top:1px solid var(--border);margin:1.4rem 0">
  <p><strong>Hourly → Salary</strong></p>
  <label for="shRate">Hourly rate</label>
  <input type="number" id="shRate" placeholder="e.g. 25" min="0.01">
  <label for="shHours2">Hours worked per week</label>
  <input type="number" id="shHours2" placeholder="e.g. 40" min="1" max="100">
  <button onclick="calcHourlyToSalary()">Convert to salary</button>
  <div class="result" id="shResult2"></div>
</div>

<script>
function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
function calcSalaryToHourly() {
  var sal = parseFloat(document.getElementById('shSalary').value);
  var hrs = parseFloat(document.getElementById('shHours').value);
  var out = document.getElementById('shResult1');
  if (!sal || sal <= 0) { out.innerHTML = '<p>Please enter a valid annual salary.</p>'; return; }
  if (!hrs || hrs <= 0 || hrs > 100) { out.innerHTML = '<p>Please enter weekly hours between 1 and 100.</p>'; return; }
  var hourly = sal / 52 / hrs;
  out.innerHTML = '<p style="font-size:1.3rem"><strong>' + fmt(sal) + '/year = ' + fmt(hourly) + '/hour</strong></p>' +
    '<p>Based on 52 weeks at ' + hrs + ' hours/week (' + (hrs * 52).toLocaleString() + ' hours a year). Weekly equivalent: ' + fmt(sal / 52) + '.</p>';
}
function calcHourlyToSalary() {
  var rate = parseFloat(document.getElementById('shRate').value);
  var hrs = parseFloat(document.getElementById('shHours2').value);
  var out = document.getElementById('shResult2');
  if (!rate || rate <= 0) { out.innerHTML = '<p>Please enter a valid hourly rate.</p>'; return; }
  if (!hrs || hrs <= 0 || hrs > 100) { out.innerHTML = '<p>Please enter weekly hours between 1 and 100.</p>'; return; }
  var annual = rate * hrs * 52;
  out.innerHTML = '<p style="font-size:1.3rem"><strong>' + fmt(rate) + '/hour = ' + fmt(annual) + '/year</strong></p>' +
    '<p>Based on 52 weeks at ' + hrs + ' hours/week. Weekly: ' + fmt(rate * hrs) + ' · Monthly: ' + fmt(rate * hrs * 52 / 12) + '.</p>';
}
</script>

## The numbers are before tax

Both directions use gross pay, before taxes and deductions. Your take-home will be lower — run the hourly figure through a tax estimate for your area to see what actually lands in your account.
