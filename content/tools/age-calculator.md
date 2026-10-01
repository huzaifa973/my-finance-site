---
title: "Free Age Calculator"
description: "Calculate your exact age in years, months, and days from any birthdate — plus total days lived and a countdown to your next birthday."
date: 2026-10-01
draft: false
---

## How it works

Enter a birthdate and get the exact age down to the day, along with total days lived and how long until the next birthday.

<div class="calc">
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="ageDob">Date of birth</label><input type="date" id="ageDob" style="width:170px;"></div>
  </div>
  <div style="margin-top:.75rem;"><button onclick="calcAge()">Calculate age</button></div>
  <div class="result" id="ageResult"></div>
</div>

<script>
function calcAge(){
  var o = document.getElementById('ageResult');
  var v = document.getElementById('ageDob').value;
  if (!v) { o.innerHTML = '<p>Pick a date of birth first.</p>'; return; }
  var parts = v.split('-');
  var b = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  if (b > today) { o.innerHTML = '<p>The birthdate is in the future — pick a past date.</p>'; return; }

  // Borrow-based breakdown: years, months, days
  var years = today.getFullYear() - b.getFullYear();
  var months = today.getMonth() - b.getMonth();
  var days = today.getDate() - b.getDate();
  if (days < 0) {
    months -= 1;
    var prevMonthLen = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonthLen;
  }
  if (months < 0) { years -= 1; months += 12; }

  var totalDays = Math.round((today - b) / 86400000);

  // Next birthday countdown
  var nb = new Date(today.getFullYear(), b.getMonth(), b.getDate());
  if (nb < today) nb = new Date(today.getFullYear() + 1, b.getMonth(), b.getDate());
  var daysToBday = Math.round((nb - today) / 86400000);
  var bdayText = daysToBday === 0
    ? "It's today! Happy birthday!"
    : 'in <strong>' + daysToBday + '</strong> day' + (daysToBday === 1 ? '' : 's');

  o.innerHTML = '<p style="font-size:1.4rem;"><strong>' + years + '</strong> years, <strong>' + months + '</strong> months, <strong>' + days + '</strong> days</p>'
    + '<p>Total days lived: <strong>' + totalDays.toLocaleString() + '</strong></p>'
    + '<p>Next birthday: ' + bdayText + '</p>';
}
</script>

## Everyday uses

- **Milestone birthdays:** see exactly how many days until someone turns 18, 21, 30, or 50.
- **Official forms:** some applications ask for age in years and months — get the precise figure instantly.
- **Fun facts:** find your total days lived, or figure out whose birthday comes next among friends and family.
