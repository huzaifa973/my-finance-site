---
title: "Free Paycheck Budget Planner"
description: "Free paycheck budget planner: enter your pay and expenses to allocate every dollar before payday and see what's left over."
category: finance
date: 2026-09-29
draft: false
---

Planning from one paycheck to the next is how most of us actually budget — forget the monthly average. Tell this free planner what hits your account each payday and where it needs to go, and it allocates every dollar before you spend a cent.

<div class="tool-shell" id="pbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 7H3a1 1 0 0 1 0-2h17V3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 7.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Paycheck Budget Planner</h2>
<p>Give every dollar a job before payday — see what's left over.</p>
</div>
<button type="button" class="theme-toggle" id="pbTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your pay &amp; expenses</p>
<div class="settings-grid" style="margin-bottom:1rem;">
<div class="setting">
<label for="pbPay">Pay amount (take-home)</label>
<input type="number" id="pbPay" class="tool-input" placeholder="e.g. 1800" min="1">
</div>
<div class="setting">
<label for="pbFreq">Pay frequency</label>
<select id="pbFreq" class="tool-input">
<option value="1">Weekly</option>
<option value="2">Every 2 weeks</option>
<option value="2.1667">Twice a month</option>
<option value="4.3333" selected>Monthly</option>
</select>
</div>
</div>
<div id="pbCats"></div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="pbAdd">+ Add expense</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Quick start</p>
<div class="settings-panel">
<div class="preset-row" id="pbPresets">
<button type="button" class="preset-chip" data-preset="example">✨ Load example budget</button>
<button type="button" class="preset-chip" data-preset="clear">🧹 Clear expenses</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Priority order</label>
<div class="hint">Enter expenses in priority order — housing, bills, food, transport first — so if pay comes up short, you know exactly what gets cut.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Plan my paycheck</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pbBtn">
<svg viewBox="0 0 24 24"><path d="M21 7H3a1 1 0 0 1 0-2h17V3H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-4 7.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"/></svg>
Plan my paycheck
</button>
</div>
<div class="results" id="pbResults">
<div class="result-card" id="pbResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — plan every paycheck, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pbShell');
  ToolPro.themeToggle(shell, document.getElementById('pbTheme'));

  var pbCount = 0;
  var resBox = document.getElementById('pbResults');
  var out = document.getElementById('pbResult');

  function addPbCat(name, amt) {
    if (pbCount >= 15) { ToolPro.toast('You can add up to 15 expenses.', 'err'); return; }
    pbCount++;
    var d = document.createElement('div');
    d.style.cssText = 'display:flex;gap:.5rem;margin-bottom:.5rem';
    var nm = document.createElement('input');
    nm.type = 'text'; nm.className = 'pb-name tool-input';
    nm.placeholder = 'e.g. Rent'; nm.value = name || ''; nm.style.flex = '2';
    var va = document.createElement('input');
    va.type = 'number'; va.className = 'pb-amt tool-input';
    va.placeholder = 'Amount'; va.min = '0'; va.value = amt || ''; va.style.flex = '1';
    d.appendChild(nm); d.appendChild(va);
    document.getElementById('pbCats').appendChild(d);
  }
  function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function calcPaycheck() {
    var pay = parseFloat(document.getElementById('pbPay').value);
    var freq = parseFloat(document.getElementById('pbFreq').value);
    if (!pay || pay <= 0) { out.innerHTML = '<p>Please enter a valid pay amount.</p>'; resBox.classList.add('show'); return; }
    var cats = [];
    document.querySelectorAll('#pbCats > div').forEach(function (d) {
      var nm = d.querySelector('.pb-name').value.trim() || 'Unnamed';
      var amt = parseFloat(d.querySelector('.pb-amt').value);
      if (!isNaN(amt) && amt > 0) cats.push({name: nm, amt: amt});
    });
    if (cats.length === 0) { out.innerHTML = '<p>Please add at least one expense.</p>'; resBox.classList.add('show'); return; }
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
    resBox.classList.add('show');
  }

  document.getElementById('pbAdd').addEventListener('click', function(){ addPbCat(); });
  document.getElementById('pbBtn').addEventListener('click', calcPaycheck);

  document.getElementById('pbPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('pbCats').innerHTML = ''; pbCount = 0;
    resBox.classList.remove('show');
    if(chip.dataset.preset === 'example'){
      addPbCat('Rent', ''); addPbCat('Groceries', ''); addPbCat('Bills', ''); addPbCat('Transport', '');
      ToolPro.toast('Example budget loaded', 'ok');
    } else {
      ToolPro.toast('Expenses cleared');
    }
  });

  addPbCat('Rent', ''); addPbCat('Groceries', ''); addPbCat('Bills', ''); addPbCat('Transport', '');
})();
</script>

## Paycheck-to-paycheck, but on purpose

Zero-based paycheck planning means your money gets a job before payday arrives. Enter expenses in priority order — housing, bills, food, transport first — so if pay ever comes up short, you know exactly what gets cut.
