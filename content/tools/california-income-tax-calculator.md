---
title: "Free California Income Tax Calculator 2026 — Estimate Your CA Tax"
description: "Estimate your 2026 California income tax with the real 1%–13.3% brackets, standard deduction and exemption credits. Free, private, no sign-up."
category: finance
date: 2026-10-13
draft: false
---

Enter your income, filing status, and deductions, and this calculator applies California's real 2026 brackets (1% to 12.3%, plus the 1% surcharge over $1M for a 13.3% top rate), the 2026 standard deduction, and exemption credits to estimate your state tax, effective rate, and marginal bracket. It runs entirely in your browser — your income is never typed into anyone's server. Educational estimate only; it excludes federal tax, other credits, and SDI.

<div class="tool-shell" id="caTaxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.3-.6-3.8-1.3-3.8-2.8 0-1.6 1.4-2.7 3.8-2.7 2.1 0 3.5.9 3.9 2.4h2.2c-.3-2.4-1.9-4-4.6-4.4V1h-2.4v2.4C8 3.8 5.9 5.7 5.9 8.1c0 3.2 2.6 4.5 5.9 5.3 2.5.6 4 1.4 4 3 0 1.8-1.6 2.9-4 2.9-2.4 0-3.9-1-4.2-2.8h-2.2c.3 2.7 2.1 4.4 4.9 4.8V23h2.4v-2.4c2.9-.4 5-2.3 5-4.9 0-3.4-2.7-4.7-6.3-5.6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>California Income Tax Calculator (2026)</h2>
<p>Estimate your 2026 California tax in seconds — real 1%–13.3% brackets, standard deduction, exemption credits, effective and marginal rates.</p>
</div>
<button type="button" class="theme-toggle" id="caTaxTheme">🌙 Dark</button>
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
<div class="setting"><span class="t-label">Filing status</span><select class="tool-input" id="caStatus"><option value="single">Single</option><option value="married">Married filing jointly</option><option value="separate">Married filing separately</option><option value="head">Head of household</option></select></div>
<div class="setting"><span class="t-label">Gross annual income ($)</span><input type="number" class="tool-input" id="caIncome" value="100000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Pre-tax deductions — 401(k), HSA etc. ($)</span><input type="number" class="tool-input" id="caPre" value="0" min="0" step="any"></div>
<div class="setting"><span class="t-label">Dependents (for dependent exemption credit)</span><input type="number" class="tool-input" id="caDep" value="0" min="0" step="1"></div>
<div class="setting"><span class="t-label">Other deductions above standard ($, 0 = use standard)</span><input type="number" class="tool-input" id="caItem" value="0" min="0" step="any"></div>
</div>
<div class="hint">Uses California's 2026 figures: nine brackets 1%–12.3% plus the 1% surcharge over $1M (13.3% top rate), standard deduction (Single $5,900 · Joint $11,800), personal exemption credit (Single $158 · Joint $316) and $491 per dependent. Excludes federal tax, other credits, and SDI. Educational estimate, not tax advice.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your estimate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="caGo">
🧮 Estimate my California tax
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="caRes">
<p class="result-head">🧾 2026 California estimate</p>
<div class="result-summary" id="caResSummary"></div>
<div class="result-grid" id="caResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Estimate your 2026 California tax — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('caTaxShell');
ToolPro.themeToggle(shell, document.getElementById('caTaxTheme'));
var STD={single:5900, married:11800, separate:5900, head:11800};
var CREDIT={single:158, married:316, separate:158, head:158};
var DEP_CREDIT=491;
var BR={
 single:[[11456,0.01],[27157,0.02],[42861,0.04],[59498,0.06],[75197,0.08],[384109,0.093],[460927,0.103],[768213,0.113],[Infinity,0.123]],
 separate:[[11456,0.01],[27157,0.02],[42861,0.04],[59498,0.06],[75197,0.08],[384109,0.093],[460927,0.103],[768213,0.113],[Infinity,0.123]],
 married:[[22912,0.01],[54314,0.02],[85722,0.04],[118996,0.06],[150394,0.08],[768218,0.093],[921854,0.103],[1536426,0.113],[Infinity,0.123]],
 head:[[22927,0.01],[54316,0.02],[70018,0.04],[86654,0.06],[102356,0.08],[522385,0.093],[626864,0.103],[1044771,0.113],[Infinity,0.123]]
};
function taxOn(taxable, status){
  var br=BR[status], tax=0, prev=0, marginal=0;
  for(var i=0;i<br.length;i++){ var cap=br[i][0], rate=br[i][1];
    if(taxable>prev){ tax+=(Math.min(taxable,cap)-prev)*rate; marginal=rate; }
    prev=cap; if(taxable<=cap) break; }
  var surcharge=taxable>1000000 ? (taxable-1000000)*0.01 : 0;
  if(surcharge>0) marginal=0.133;
  return {tax:tax, surcharge:surcharge, marginal:marginal};
}
function money(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
document.getElementById('caGo').addEventListener('click', function(){
  var status=document.getElementById('caStatus').value;
  var gross=parseFloat(document.getElementById('caIncome').value)||0;
  var pre=parseFloat(document.getElementById('caPre').value)||0;
  var item=parseFloat(document.getElementById('caItem').value)||0;
  var dep=Math.max(0, parseInt(document.getElementById('caDep').value,10)||0);
  if(gross<=0){ ToolPro.toast('Enter your income','err'); return; }
  var ded=Math.max(STD[status], item);
  var taxable=Math.max(0, gross-pre-ded);
  var r=taxOn(taxable, status);
  var credits=CREDIT[status]+dep*DEP_CREDIT;
  var tax=Math.max(0, r.tax-credits)+r.surcharge;
  var eff=gross>0? (tax/gross*100):0;
  var res=document.getElementById('caRes'); res.classList.add('show');
  document.getElementById('caResSummary').textContent='Estimate only — excludes federal tax, other credits, and SDI. Standard deduction applied: '+money(ded)+' · exemption credits: '+money(credits)+(r.surcharge>0?' · includes the 1% surcharge on income over $1M':'')+'.';
  var grid=document.getElementById('caResGrid'); grid.innerHTML='';
  [['California tax owed', money(tax)],['Taxable income', money(taxable)],['Effective rate', eff.toFixed(2)+'%'],['Marginal bracket', (r.marginal*100).toFixed(1)+'%'],['Take-home after CA tax', money(gross-tax)],['Monthly take-home', money((gross-tax)/12)]].forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The calculator subtracts pre-tax deductions and the larger of the 2026 standard deduction ($5,900 single, $11,800 joint/head of household) or your itemized amount from gross income to get California taxable income. It then walks the real 2026 bracket table — nine brackets from 1% to 12.3% — taxing each slice at its marginal rate, adds the 1% Mental Health/Behavioral Health Services surcharge on taxable income over $1 million (the 13.3% top rate), and subtracts your personal and dependent exemption credits ($158/$316 and $491 each).

## Everyday uses

- **California workers** — sanity-check your state withholding before year-end.
- **New arrivals** — see what California's progressive brackets mean for your paycheck.
- **Freelancers** — rough out quarterly California estimated payments.
- **High earners** — model the 12.3% bracket and the $1M surcharge before a bonus or equity event.
- **Movers** — compare the real cost of relocating into or out of California.

## Frequently asked questions

**Does this include federal income tax?**

No — California only. Federal tax is a separate calculation; use our US federal estimator for that side.

**Why is California's top rate 13.3%?**

The top regular bracket is 12.3%, plus a 1% surcharge on taxable income above $1 million that voters approved for behavioral health services — together they make 13.3% on income over $1M.

**Does California tax capital gains differently?**

No — unlike the federal system, California taxes capital gains as ordinary income at these same brackets.

**Is this tax advice?**

No — it is an educational estimator using 2026 figures. Credits, other income, and special situations can change your real bill; a tax professional can advise on your situation.

**Where is my data stored?**

Nowhere. The calculation runs in your browser and the numbers vanish when you close the tab.

[END EXTERNAL CONTENT]
