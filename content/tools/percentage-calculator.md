---
title: "Free Percentage Calculator"
description: "Calculate X% of Y, what percentage one number is of another, and percentage increase/decrease. Free, instant, no sign-up."
date: 2026-09-29
draft: false
---

## How it works

Three common percentage calculations in one place — discounts, tips, price changes, grades, and more.

<div class="tool-shell" id="pctShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18.5 3h-13A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h13a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 18.5 3zM7 8a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm10 8L8.5 7.5l1-1L18 15l-1 1zm0-2a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Percentage Calculator</h2>
<p>Discounts, tips, price changes, grades — three calculators in one.</p>
</div>
<button type="button" class="theme-toggle" id="pctTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> What is X% of Y?</p>
<div class="settings-grid">
<div class="setting">
<label for="p1x">X (%)</label>
<input type="number" id="p1x" class="tool-input" placeholder="20">
</div>
<div class="setting">
<label for="p1y">of Y</label>
<input type="number" id="p1y" class="tool-input" placeholder="150">
</div>
<div class="setting">
<label>&nbsp;</label>
<button type="button" class="btn-pro" id="p1Btn">Calculate</button>
</div>
</div>
<div class="results" id="pctR1Box"><div class="result-card" id="pctR1"></div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> X is what % of Y?</p>
<div class="settings-grid">
<div class="setting">
<label for="p2x">X</label>
<input type="number" id="p2x" class="tool-input" placeholder="45">
</div>
<div class="setting">
<label for="p2y">of Y</label>
<input type="number" id="p2y" class="tool-input" placeholder="200">
</div>
<div class="setting">
<label>&nbsp;</label>
<button type="button" class="btn-pro" id="p2Btn">Calculate</button>
</div>
</div>
<div class="results" id="pctR2Box"><div class="result-card" id="pctR2"></div></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Percentage change (increase / decrease)</p>
<div class="settings-panel">
<div class="preset-row" id="pctPresets">
<button type="button" class="preset-chip" data-calc="1" data-a="20" data-b="150">🏷️ 20% off $150</button>
<button type="button" class="preset-chip" data-calc="1" data-a="15" data-b="64">💵 15% tip on $64</button>
<button type="button" class="preset-chip" data-calc="3" data-a="80" data-b="100">📈 Change 80 → 100</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="p3from">From</label>
<input type="number" id="p3from" class="tool-input" placeholder="80">
</div>
<div class="setting">
<label for="p3to">To</label>
<input type="number" id="p3to" class="tool-input" placeholder="100">
</div>
<div class="setting">
<label>&nbsp;</label>
<button type="button" class="btn-pro" id="p3Btn">Calculate</button>
</div>
</div>
</div>
<div class="results" id="pctR3Box"><div class="result-card" id="pctR3"></div></div>
<div class="tool-actions" style="margin-top:1rem;">
<button type="button" class="btn-pro-outline" id="pctClear">Clear all</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — calculate as many percentages as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pctShell');
  ToolPro.themeToggle(shell, document.getElementById('pctTheme'));

  function val(id){ var v = parseFloat(document.getElementById(id).value); return isNaN(v) ? null : v; }
  function fmt(n){ return n.toLocaleString(undefined,{maximumFractionDigits:2}); }
  function show(boxId, html){
    document.getElementById(boxId).innerHTML = html;
    document.getElementById(boxId + 'Box').classList.add('show');
  }
  function pct1(){
    var x = val('p1x'), y = val('p1y');
    if (x === null || y === null) { show('pctR1', '<p>Enter both numbers.</p>'); return; }
    show('pctR1', '<p><strong>' + fmt(x) + '% of ' + fmt(y) + ' = ' + fmt(x/100*y) + '</strong></p>');
  }
  function pct2(){
    var x = val('p2x'), y = val('p2y');
    if (x === null || y === null || y === 0) { show('pctR2', '<p>Enter both numbers (Y can’t be zero).</p>'); return; }
    show('pctR2', '<p><strong>' + fmt(x) + ' is ' + fmt(x/y*100) + '% of ' + fmt(y) + '</strong></p>');
  }
  function pct3(){
    var a = val('p3from'), b = val('p3to');
    if (a === null || b === null || a === 0) { show('pctR3', '<p>Enter both numbers (From can’t be zero).</p>'); return; }
    var ch = (b - a) / Math.abs(a) * 100;
    var word = ch > 0 ? 'increase' : (ch < 0 ? 'decrease' : 'change');
    show('pctR3', '<p><strong>' + fmt(Math.abs(ch)) + '% ' + word + '</strong> (from ' + fmt(a) + ' to ' + fmt(b) + ')</p>');
  }

  document.getElementById('p1Btn').addEventListener('click', pct1);
  document.getElementById('p2Btn').addEventListener('click', pct2);
  document.getElementById('p3Btn').addEventListener('click', pct3);

  document.getElementById('pctPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var c = chip.dataset.calc, a = chip.dataset.a, b = chip.dataset.b;
    if(c === '1'){ document.getElementById('p1x').value = a; document.getElementById('p1y').value = b; pct1(); }
    else if(c === '3'){ document.getElementById('p3from').value = a; document.getElementById('p3to').value = b; pct3(); }
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  document.getElementById('pctClear').addEventListener('click', function(){
    ['p1x','p1y','p2x','p2y','p3from','p3to'].forEach(function(id){ document.getElementById(id).value = ''; });
    ['pctR1Box','pctR2Box','pctR3Box'].forEach(function(id){ document.getElementById(id).classList.remove('show'); });
  });
})();
</script>

## Everyday uses

- **Shopping:** a 20% discount on $150 = $30 off, so you pay $120.
- **Tipping:** 15% of a $64 bill = $9.60.
- **Savings:** track what percentage of your income you actually save each month.
