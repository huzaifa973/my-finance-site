---
title: "Free New York Income Tax Calculator 2026 — Estimate Your NY Tax"
description: "Estimate your 2026 New York income tax with the real 4%–10.9% brackets and standard deduction. See effective and marginal rates. Free, private."
category: finance
date: 2026-10-20
draft: false
---

Enter your income and filing status, and this calculator applies New York's real 2026 brackets (4% to 10.9%), the 2026 standard deduction, and your deductions to estimate your state tax, effective rate, and marginal bracket. It runs entirely in your browser — your income is never typed into anyone's server. Educational estimate only; it excludes federal tax, New York City tax, and other credits.

<div class="tool-shell" id="nyTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.3-.6-3.8-1.3-3.8-2.8 0-1.6 1.4-2.7 3.8-2.7 2.1 0 3.5.9 3.9 2.4h2.2c-.3-2.4-1.9-4-4.6-4.4V1h-2.4v2.4C8 3.8 5.9 5.7 5.9 8.1c0 3.2 2.6 4.5 5.9 5.3 2.5.6 4 1.4 4 3 0 1.8-1.6 2.9-4 2.9-2.4 0-3.9-1-4.2-2.8h-2.2c.3 2.7 2.1 4.4 4.9 4.8V23h2.4v-2.4c2.9-.4 5-2.3 5-4.9 0-3.4-2.7-4.7-6.3-5.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>New York Income Tax Calculator (2026)</h2>
<p>Estimate your 2026 New York tax in seconds — real 4%–10.9% brackets, standard deduction, effective and marginal rates.</p>
</div>
<button type="button" class="theme-toggle" id="nyTaxTheme">🌙 Dark</button>
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
<div class="setting"><span class="t-label">Filing status</span><select class="tool-input" id="nyStatus"><option value="single">Single</option><option value="married">Married filing jointly</option><option value="separate">Married filing separately</option><option value="head">Head of household</option></select></div>
<div class="setting"><span class="t-label">Gross annual income ($)</span><input type="number" class="tool-input" id="nyIncome" value="100000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Pre-tax deductions — 401(k), HSA etc. ($)</span><input type="number" class="tool-input" id="nyPre" value="0" min="0" step="any"></div>
<div class="setting"><span class="t-label">Other deductions above standard ($, 0 = use standard)</span><input type="number" class="tool-input" id="nyItem" value="0" min="0" step="any"></div>
</div>
<div class="hint">Uses New York's 2026 figures: nine brackets from 4% to 10.9% and the standard deduction (Single $8,000 · Joint $16,050). Excludes federal tax, New York City tax, and other credits. Educational estimate, not tax advice.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="nyGo">
🧮 Estimate my New York tax
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="nyRes">
<p class="result-head">🧾 2026 New York estimate</p>
<div class="result-summary" id="nyResSummary"></div>
<div class="result-grid" id="nyResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Estimate your 2026 New York tax — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('nyTaxShell');
ToolPro.themeToggle(shell, document.getElementById('nyTaxTheme'));
var STD={single:8000, married:16050, separate:8000, head:16050};
var BR={
 single:[[8500,0.04],[11700,0.045],[13900,0.0525],[80650,0.055],[215400,0.06],[1077550,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]],
 separate:[[8500,0.04],[11700,0.045],[13900,0.0525],[80650,0.055],[215400,0.06],[1077550,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]],
 married:[[17100,0.04],[23600,0.045],[27900,0.0525],[161550,0.055],[323200,0.06],[2155350,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]],
 head:[[8500,0.04],[11700,0.045],[13900,0.0525],[80650,0.055],[215400,0.06],[1077550,0.0685],[5000000,0.0965],[25000000,0.103],[Infinity,0.109]]
};
function taxOn(taxable, status){
  var br=BR[status], tax=0, prev=0, marginal=0;
  for(var i=0;i<br.length;i++){ var cap=br[i][0], rate=br[i][1];
    if(taxable>prev){ tax+=(Math.min(taxable,cap)-prev)*rate; marginal=rate; }
    prev=cap; if(taxable<=cap) break; }
  return {tax:tax, marginal:marginal};
}
function money(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
document.getElementById('nyGo').addEventListener('click', function(){
  var status=document.getElementById('nyStatus').value;
  var gross=parseFloat(document.getElementById('nyIncome').value)||0;
  var pre=parseFloat(document.getElementById('nyPre').value)||0;
  var item=parseFloat(document.getElementById('nyItem').value)||0;
  if(gross<=0){ ToolPro.toast('Enter your income','err'); return; }
  var ded=Math.max(STD[status], item);
  var taxable=Math.max(0, gross-pre-ded);
  var r=taxOn(taxable, status);
  var tax=Math.max(0, r.tax);
  var eff=gross>0? (tax/gross*100):0;
  var res=document.getElementById('nyRes'); res.classList.add('show');
  document.getElementById('nyResSummary').textContent='Estimates from the latest published NY brackets — verify with the NY Department of Taxation and Finance. Standard deduction applied: '+money(ded)+'. Excludes federal tax, NYC tax, and other credits.';
  var grid=document.getElementById('nyResGrid'); grid.innerHTML='';
  [['New York tax owed', money(tax)],['Taxable income', money(taxable)],['Effective rate', eff.toFixed(2)+'%'],['Marginal bracket', (r.marginal*100).toFixed(2).replace(/\.?0+$/,'')+'%'],['Take-home after NY tax', money(gross-tax)],['Monthly take-home', money((gross-tax)/12)]].forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The calculator subtracts pre-tax deductions and the larger of the 2026 standard deduction ($8,000 single, $16,050 joint) or your itemized amount from gross income to get New York taxable income. It then walks the real 2026 bracket table — nine brackets from 4% to 10.9% — taxing each slice at its marginal rate, and reports your total tax, effective rate, marginal bracket, and take-home pay.

## Everyday uses

- **New York workers** — sanity-check your state withholding before year-end.
- **New arrivals** — see what New York's progressive brackets mean for your paycheck.
- **Freelancers** — rough out quarterly New York estimated payments.
- **Movers** — compare the real cost of relocating into or out of New York.
- **Raises** — see how much of a raise the next bracket actually keeps for itself.

## Frequently asked questions

**Does this include federal income tax?**

No — New York State only. Federal tax is a separate calculation.

**Does it include New York City tax?**

No — New York City levies its own income tax on top of the state tax. This tool estimates the state portion only.

**Why is there no personal exemption credit?**

New York's personal exemption is built into the brackets and standard deduction rather than applied as a separate credit.

**Is this tax advice?**

No — it is an educational estimator using 2026 figures. Credits, other income, and special situations can change your real bill; a tax professional can advise on your situation.

**Where is my data stored?**

Nowhere. The calculation runs in your browser and the numbers vanish when you close the tab.

[escaped: END EXTERNAL CONTENT]
