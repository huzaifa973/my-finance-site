---
title: "Free Subscription Cost Tracker"
description: "Free subscription tracker: add your monthly subscriptions to see the true yearly cost and find easy cuts that save hundreds."
date: 2026-09-29
draft: false
---

Streaming, apps, gyms, cloud storage — individually they're "just $9.99 a month," but together they can quietly eat hundreds of dollars a year. Add your subscriptions to this free tracker and see the real total. You might be surprised which one to cut first.

<div class="calc">
  <div id="subList"></div>
  <div style="display:flex;gap:.5rem;margin-bottom:.8rem">
    <input type="text" id="subName" placeholder="e.g. Music streaming" style="flex:2">
    <input type="number" id="subCost" placeholder="Monthly cost" min="0" step="0.01" style="flex:1">
    <button type="button" onclick="addSub()" style="margin-top:0;flex:0 0 auto">Add</button>
  </div>
  <div class="result" id="subResult"></div>
</div>

<script>
var subs = [];
function addSub() {
  var nameEl = document.getElementById('subName');
  var costEl = document.getElementById('subCost');
  var name = nameEl.value.trim() || 'Unnamed subscription';
  var cost = parseFloat(costEl.value);
  var out = document.getElementById('subResult');
  if (isNaN(cost) || cost <= 0) { out.innerHTML = '<p>Please enter a monthly cost greater than zero.</p>'; return; }
  subs.push({name: name, cost: cost});
  nameEl.value = ''; costEl.value = '';
  renderSubs();
}
function removeSub(i) { subs.splice(i, 1); renderSubs(); }
function renderSubs() {
  var out = document.getElementById('subResult');
  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
  if (subs.length === 0) { out.innerHTML = '<p>Add your first subscription above to see the total.</p>'; return; }
  var sorted = subs.slice().sort(function (a, b) { return b.cost - a.cost; });
  var monthly = subs.reduce(function (s, x) { return s + x.cost; }, 0);
  var yearly = monthly * 12;
  var max = sorted[0].cost;
  var rows = sorted.map(function (s) {
    var idx = subs.indexOf(s);
    var pct = (s.cost / max * 100).toFixed(0);
    return '<p><strong>' + escapeHtml(s.name) + ':</strong> ' + fmt(s.cost) + '/mo <button type="button" onclick="removeSub(' + idx + ')" style="padding:.2rem .6rem;margin-top:0;font-size:.8rem;background:#a31621">Remove</button></p>' +
      '<div class="bar"><i style="width:' + pct + '%;background:#0b6e4f"></i></div>';
  }).join('');
  var top = sorted[0];
  out.innerHTML = rows +
    '<p style="font-size:1.3rem"><strong>Total: ' + fmt(monthly) + '/month — ' + fmt(yearly) + '/year</strong></p>' +
    '<div class="callout"><strong>Cut-one challenge:</strong> dropping just your biggest subscription, <strong>' + escapeHtml(top.name) + '</strong> (' + fmt(top.cost) + '/mo), saves <strong>' + fmt(top.cost * 12) + ' a year</strong>. Audit your list every 6 months and cancel anything you haven\'t used this month.</div>';
}
function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
renderSubs();
</script>

## The $10 trap

Ten subscriptions at $9.99 a month is $1,199 a year — a holiday, or a solid start on an emergency fund. The fix isn't never subscribing; it's choosing deliberately and cancelling ruthlessly.
