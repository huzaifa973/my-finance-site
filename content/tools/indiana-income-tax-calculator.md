---
title: "Free Indiana Income Tax Calculator 2026 — Flat 2.95% Rate"
description: "Estimate your 2026 Indiana income tax with the real flat 2.95% rate plus an optional county income tax rate. Free, private, no sign-up."
category: finance
date: 2026-10-17
draft: false
---

Indiana charges a flat income tax that has been falling every year — 2.95% for 2026 — and counties levy their own income taxes on top. Enter your income and your county rate and this calculator applies Indiana's real 2026 figures to estimate your state tax, county tax, effective rate, and take-home pay. Educational estimate only; your numbers never leave the browser.

<div class="tool-shell" id="inTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.3-.6-3.8-1.3-3.8-2.8 0-1.6 1.4-2.7 3.8-2.7 2.1 0 3.5.9 3.9 2.4h2.2c-.3-2.4-1.9-4-4.6-4.4V1h-2.4v2.4C8 3.8 5.9 5.7 5.9 8.1c0 3.2 2.6 4.5 5.9 5.3 2.5.6 4 1.4 4 3 0 1.8-1.6 2.9-4 2.9-2.4 0-3.9-1-4.2-2.8h-2.2c.3 2.7 2.1 4.4 4.9 4.8V23h2.4v-2.4c2.9-.4 5-2.3 5-4.9 0-3.4-2.7-4.7-6.3-5.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Indiana Income Tax Calculator (2026)</h2>
<p>Estimate your 2026 Indiana tax in seconds — real 2.95% flat state rate, optional county tax, effective rate and take-home pay.</p>
</div>
<button type="button" class="theme-toggle" id="inTaxTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your 2026 income</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Gross annual income ($)</span><input type="number" class="tool-input" id="inIncome" value="60000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Pre-tax deductions — 401(k), HSA etc. ($)</span><input type="number" class="tool-input" id="inPre" value="0" min="0" step="any"></div>
<div class="setting"><span class="t-label">County income tax rate (%)</span><input type="number" class="tool-input" id="inCounty" value="0" min="0" max="3.5" step="0.01"><div class="hint">0 = state tax only. Example: Marion County (Indianapolis) is about 2.02%.</div></div>
</div>
<div class="hint">Uses Indiana's 2026 figures: flat 2.95% state rate (scheduled to fall to 2.90% in 2027). County rates range roughly 0.5%–3.5%. Credits and most deductions are excluded. Educational estimate, not tax advice.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="inGo">
🧮 Estimate my Indiana tax
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="inRes">
<p class="result-head">🧾 2026 Indiana estimate</p>
<div class="result-summary" id="inResSummary"></div>
<div class="result-grid" id="inResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Estimate your 2026 Indiana tax — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('inTaxShell');
ToolPro.themeToggle(shell, document.getElementById('inTaxTheme'));
var RATE=0.0295;
function money(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
document.getElementById('inGo').addEventListener('click', function(){
  var gross=parseFloat(document.getElementById('inIncome').value)||0;
  var pre=parseFloat(document.getElementById('inPre').value)||0;
  var county=parseFloat(document.getElementById('inCounty').value)||0;
  if(county<0){ county=0; }
  if(county>3.5){ county=3.5; }
  if(gross<=0){ ToolPro.toast('Enter your income','err'); return; }
  var base=Math.max(0, gross-pre);
  var stateTax=base*RATE;
  var countyTax=base*(county/100);
  var total=stateTax+countyTax;
  var eff=gross>0?(total/gross*100):0;
  var res=document.getElementById('inRes'); res.classList.add('show');
  document.getElementById('inResSummary').textContent='Estimate only — excludes Indiana credits and most deductions. State rate: 2.95% on adjusted income; county rate applied: '+county.toFixed(2)+'%.';
  var grid=document.getElementById('inResGrid'); grid.innerHTML='';
  [['Indiana state tax (2.95%)', money(stateTax)],['County tax ('+county.toFixed(2)+'%)', money(countyTax)],['Total state + county tax', money(total)],['Effective rate', eff.toFixed(2)+'%'],['Take-home after IN tax', money(gross-total)],['Monthly take-home', money((gross-total)/12)]].forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The calculator subtracts pre-tax deductions (401(k), HSA) from gross income to get the base Indiana taxes. It then applies Indiana's flat 2.95% state rate — down from 3.23% just a few years ago as the state phases toward 2.90% — and adds your county's income tax on the same base, because Indiana counties (Marion County ~2.02%, for example) levy their own separate rates. The total state-plus-county tax is what you compare against withholding and what drives your effective rate.

## Everyday uses

- **Indiana workers** — estimate your real state + county withholding, not just the headline 2.95%.
- **New residents** — see what Indianapolis, Fort Wayne, or any county costs you in local income tax.
- **Retirees** — check how Social Security and pensions are treated in your Indiana estimate.
- **Job changers** — compare offers by real take-home, not headline salary.
- **Freelancers** — rough out quarterly Indiana estimated payments.
