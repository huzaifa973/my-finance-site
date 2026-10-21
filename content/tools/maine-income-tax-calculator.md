---
title: "Free Maine Income Tax Calculator 2026 — Estimate Your ME Tax"
description: "Estimate your 2026 Maine income tax with the real 5.8%–7.15% brackets, standard deduction, and 2% surcharge. See effective and marginal rates. Free, private."
category: finance
date: 2026-10-21
draft: false
---

Enter your income and filing status, and this calculator applies Maine's real 2026 brackets (5.8% to 7.15%), the 2026 standard deduction and personal exemption, plus the 2% surcharge on very high income, to estimate your state tax, effective rate, and marginal bracket. It runs entirely in your browser — your income is never typed into anyone's server. Educational estimate only; it excludes federal tax and other credits.

<div class="tool-shell" id="meTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.3-.6-3.8-1.3-3.8-2.8 0-1.6 1.4-2.7 3.8-2.7 2.1 0 3.5.9 3.9 2.4h2.2c-.3-2.4-1.9-4-4.6-4.4V1h-2.4v2.4C8 3.8 5.9 5.7 5.9 8.1c0 3.2 2.6 4.5 5.9 5.3 2.5.6 4 1.4 4 3 0 1.8-1.6 2.9-4 2.9-2.4 0-3.9-1-4.2-2.8h-2.2c.3 2.7 2.1 4.4 4.9 4.8V23h2.4v-2.4c2.9-.4 5-2.3 5-4.9 0-3.4-2.7-4.7-6.3-5.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Maine Income Tax Calculator (2026)</h2>
<p>Estimate your 2026 Maine tax in seconds — real 5.8%–7.15% brackets, standard deduction, exemption, and 2% surcharge.</p>
</div>
<button type="button" class="theme-toggle" id="meTaxTheme">🌙 Dark</button>
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
<div class="setting"><span class="t-label">Filing status</span><select class="tool-input" id="meStatus"><option value="single">Single</option><option value="married">Married filing jointly</option><option value="separate">Married filing separately</option><option value="head">Head of household</option></select></div>
<div class="setting"><span class="t-label">Gross annual income ($)</span><input type="number" class="tool-input" id="meIncome" value="100000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Pre-tax deductions — 401(k), HSA etc. ($)</span><input type="number" class="tool-input" id="mePre" value="0" min="0" step="any"></div>
<div class="setting"><span class="t-label">Itemized deductions ($, 0 = use standard)</span><input type="number" class="tool-input" id="meItem" value="0" min="0" step="any"></div>
</div>
<div class="hint">Uses Maine's 2026 figures: 5.8%, 6.75%, 7.15% brackets; standard deduction Single $15,300 · Joint $30,600 · Head of household $22,950; personal exemption $5,300 per taxpayer. The 2% surcharge applies to taxable income over $1M (single/separate) or $1.5M (joint/head). Excludes federal tax. Educational estimate, not tax advice.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="meGo">
🧮 Estimate my Maine tax
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="meRes">
<p class="result-head">🧾 2026 Maine estimate</p>
<div class="result-summary" id="meResSummary"></div>
<div class="result-grid" id="meResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Estimate your 2026 Maine tax — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('meTaxShell');
ToolPro.themeToggle(shell, document.getElementById('meTaxTheme'));
var STD={single:15300, separate:15300, married:30600, head:22950};
var EXE={single:5300, separate:5300, married:10600, head:5300};
var BR={
 single:[[27400,0.058],[64850,0.0675],[Infinity,0.0715]],
 separate:[[27400,0.058],[64850,0.0675],[Infinity,0.0715]],
 married:[[54850,0.058],[129750,0.0675],[Infinity,0.0715]],
 head:[[41100,0.058],[97300,0.0675],[Infinity,0.0715]]
};
var SURT={single:1000000, separate:1000000, married:1500000, head:1500000};
function taxOn(taxable, status){
  var br=BR[status], tax=0, prev=0, marginal=0;
  for(var i=0;i<br.length;i++){ var cap=br[i][0], rate=br[i][1];
    if(taxable>prev){ tax+=(Math.min(taxable,cap)-prev)*rate; marginal=rate; }
    prev=cap; if(taxable<=cap) break; }
  return {tax:tax, marginal:marginal};
}
function money(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
function pct(r){ return (r*100).toFixed(2).replace(/\.?0+$/,'')+'%'; }
document.getElementById('meGo').addEventListener('click', function(){
  var status=document.getElementById('meStatus').value;
  var gross=parseFloat(document.getElementById('meIncome').value)||0;
  var pre=parseFloat(document.getElementById('mePre').value)||0;
  var item=parseFloat(document.getElementById('meItem').value)||0;
  if(gross<=0){ ToolPro.toast('Enter your income','err'); return; }
  var ded=Math.max(STD[status], item);
  var exe=EXE[status];
  var taxable=Math.max(0, gross-pre-ded-exe);
  var r=taxOn(taxable, status);
  var surcharge=taxable>SURT[status] ? (taxable-SURT[status])*0.02 : 0;
  var tax=Math.max(0, r.tax+surcharge);
  var marginal=r.marginal+(taxable>SURT[status] ? 0.02 : 0);
  var eff=gross>0 ? (tax/gross*100) : 0;
  var res=document.getElementById('meRes'); res.classList.add('show');
  document.getElementById('meResSummary').textContent='Estimates from the latest published ME brackets — verify with Maine Revenue Services. Standard deduction applied: '+money(ded)+'; personal exemption: '+money(exe)+(surcharge>0 ? '; 2% surcharge applied: '+money(surcharge)+'.' : '.')+' Excludes federal tax and other credits.';
  var grid=document.getElementById('meResGrid'); grid.innerHTML='';
  var cards=[['Maine tax owed', money(tax)],['Taxable income', money(taxable)],['Effective rate', eff.toFixed(2)+'%'],['Marginal bracket', pct(marginal)],['Take-home after ME tax', money(gross-tax)],['Monthly take-home', money((gross-tax)/12)]];
  if(surcharge>0) cards.splice(1,0,['2% high-income surcharge', money(surcharge)]);
  cards.forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The calculator subtracts pre-tax deductions, the larger of the 2026 standard deduction ($15,300 single, $30,600 joint, $22,950 head of household) or your itemized amount, and Maine's $5,300 personal exemption per taxpayer ($10,600 for joint filers) from gross income to get Maine taxable income. It then walks the real 2026 bracket table — 5.8% on the first slice, 6.75% on the middle slice, 7.15% above that — taxing each slice at its marginal rate, and adds Maine's 2% surcharge on taxable income over $1 million (single/separate) or $1.5 million (joint/head). The result cards show your total tax, effective and marginal rates, and take-home pay. Good to know: Maine does not tax Social Security income, and this tool excludes federal tax and other credits — it is an educational estimate, not tax advice.

## Everyday uses

- **Maine workers** — sanity-check your state withholding before year-end.
- **New arrivals** — see what Maine's progressive brackets mean for your paycheck.
- **Freelancers** — rough out quarterly Maine estimated payments.
- **Movers** — compare the real cost of relocating into or out of Maine.
- **Retirees** — confirm that your Social Security income stays untaxed by Maine.

## Frequently asked questions

**Does this include federal income tax?**

No — Maine State only. Federal tax is a separate calculation.

**Does Maine tax Social Security income?**

No — Maine exempts Social Security benefits from state income tax. This calculator estimates tax on wages and other taxable income only.

**What is the 2% surcharge?**

Maine adds a 2% surcharge on Maine taxable income above $1 million (single/married filing separately) or $1.5 million (joint/head of household). The calculator applies it automatically and shows it as a separate result card.

**Is this tax advice?**

No — it is an educational estimator using 2026 figures. Credits, other income, and special situations can change your real bill; a tax professional can advise on your situation.

**Where is my data stored?**

Nowhere. The calculation runs in your browser and the numbers vanish when you close the tab.
