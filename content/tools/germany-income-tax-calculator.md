---
title: "Germany Income Tax Calculator 2026 — Estimate Your Tax"
description: "Estimate your 2026 German income tax with the official tariff zones, Grundfreibetrag and solidarity surcharge — free, in your browser."
category: finance
date: 2026-10-26
draft: false
slug: germany-income-tax-calculator
---

Germany taxes income on a smooth progressive tariff, not flat bands — and the 2026 figures moved again: the tax-free Grundfreibetrag is €12,348, the 42% top rate starts at €69,879, and the 45% rate applies above €277,826. Enter your annual income and filing status and this calculator estimates your federal income tax, your effective and marginal rates, and any solidarity surcharge, with the exact zone table it used. It is a planning estimate: it ignores deductions, church tax, and social contributions, and it approximates the curved progression zones with straight lines (the official tariff uses a formula), so treat results as close, not exact.

<div class="tool-shell" id="gitShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Germany Income Tax Calculator 2026</h2>
<p>Estimate your German income tax — official 2026 zones, allowance, and solidarity surcharge.</p>
</div>
<button type="button" class="theme-toggle" id="gitTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your income</p>
<label for="gitIncome">Annual gross income (€)</label>
<input type="number" id="gitIncome" class="tool-input" value="60000" min="0" step="1000">
<div class="hint">Use taxable income if you know it; otherwise gross salary is a fair starting point.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Settings & quick examples</p>
<div class="settings-panel">
<div class="preset-row" id="gitPresets">
<button type="button" class="preset-chip active" data-v="single">👤 Single</button>
<button type="button" class="preset-chip" data-v="joint">👥 Married / joint (splitting)</button>
<button type="button" class="preset-chip" data-v="example">💼 Example: €60,000 single</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>Filing status</label>
<label class="toggle"><input type="checkbox" id="gitJoint"><span></span> Joint assessment (Ehegattensplitting — thresholds double, tax doubles)</label>
</div>
<div class="setting">
<label>Solidarity surcharge</label>
<label class="toggle"><input type="checkbox" id="gitSoli" checked><span></span> Include solidarity surcharge (5.5% of tax, relief zone applied)</label>
<div class="hint">Most earners pay no surcharge in 2026: it starts only above about €20,350 of tax (single).</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your German tax</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gitBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Calculate Tax
</button>
<button type="button" class="btn-pro-outline" id="gitClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="gitProgWrap">
<div class="progress-bar"><i id="gitProgBar"></i></div>
<div class="progress-text" id="gitProgText">Working…</div>
</div>
<div class="results" id="gitResults">
<p class="result-head">✅ Done</p>
<div class="result-summary" id="gitSummary"></div>
<div class="result-grid" id="gitGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Use this tool as often as you like — your files and data never leave your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell=document.getElementById('gitShell'); ToolPro.themeToggle(shell,document.getElementById('gitTheme'));
  var inc=document.getElementById('gitIncome'),joint=document.getElementById('gitJoint'),soli=document.getElementById('gitSoli');
  var btn=document.getElementById('gitBtn'),clr=document.getElementById('gitClear');
  var res=document.getElementById('gitResults'),sum=document.getElementById('gitSummary'),grid=document.getElementById('gitGrid');
  function refresh(){btn.disabled=!inc.value;clr.disabled=!inc.value;}
  inc.addEventListener('input',refresh); refresh();
  clr.addEventListener('click',function(){inc.value='';grid.innerHTML='';res.classList.remove('show');refresh();});
  document.getElementById('gitPresets').addEventListener('click',function(e){var c=e.target.closest('.preset-chip');if(!c)return;document.querySelectorAll('#gitPresets .preset-chip').forEach(function(x){x.classList.remove('active');});c.classList.add('active');
    if(c.dataset.v==='joint'){joint.checked=true;} else if(c.dataset.v==='single'){joint.checked=false;}
    if(c.dataset.v==='example'){inc.value=60000;joint.checked=false;} refresh(); ToolPro.toast('Preset: '+c.textContent.trim());});
  function taxSingle(x){
    // 2026 zones (single). Progression zones approximated linearly; flat zones exact.
    var Z=[[12348,0],[17799,0.14],[69878,0.42],[277825,0.42],[Infinity,0.45]];
    if(x<=12348)return 0;
    // integrate piecewise-linear marginal rate: zone1 14%->~24%, zone2 ~24%->42%
    function rateAt(v){if(v<=12348)return 0; if(v<=17799)return 0.14+(v-12348)/(17799-12348)*0.10; if(v<=69878)return 0.24+(v-17799)/(69878-17799)*0.18; if(v<=277825)return 0.42; return 0.45;}
    function integ(a,b){var n=200,tot=0; for(var i=0;i<n;i++){var p=a+(b-a)*i/n; tot+=rateAt(p)*(b-a)/n;} return tot;}
    return integ(12348,x);
  }
  function margSingle(x){if(x<=12348)return 0; if(x<=17799)return 0.14+(x-12348)/(17799-12348)*0.10; if(x<=69878)return 0.24+(x-17799)/(69878-17799)*0.18; if(x<=277825)return 0.42; return 0.45;}
  btn.addEventListener('click',function(){
    var gross=parseFloat(inc.value)||0; var j=joint.checked;
    var tax=j?2*taxSingle(gross/2):taxSingle(gross);
    var marg=j?margSingle(gross/2):margSingle(gross);
    var sol=0;
    if(soli.checked){var thr=j?40700:20350; if(tax>thr){sol=Math.min(0.055*tax,0.119*(tax-thr));}}
    var total=tax+sol; var eff=gross?100*total/gross:0;
    var fmt=function(n){return '€'+Math.round(n).toLocaleString('en-US');};
    sum.textContent='Estimated federal income tax '+fmt(tax)+(sol?' plus '+fmt(sol)+' solidarity surcharge':'')+' = '+fmt(total)+' total on '+fmt(gross)+'.';
    grid.innerHTML='<div class="result-card"><strong>Estimated total tax</strong><p>'+fmt(total)+'</p><p>Effective rate '+eff.toFixed(1)+'% · Marginal rate '+(marg*100).toFixed(1)+'%</p></div>'
      +'<div class="result-card"><strong>Income tax (before surcharge)</strong><p>'+fmt(tax)+'</p><p>Net after federal tax: '+fmt(gross-tax)+'</p></div>'
      +'<div class="result-card"><strong>Solidarity surcharge</strong><p>'+fmt(sol)+'</p><p>5.5% of tax, relief zone applied; most earners pay €0.</p></div>'
      +'<div class="result-card"><strong>2026 zones used (single)</strong><p>€0–€12,348: 0% · €12,349–€17,799: rising 14%→~24% · €17,800–€69,878: rising ~24%→42% · €69,879–€277,825: 42% · above €277,826: 45%. Joint thresholds double. Sources: §32a EStG tariff 2026.</p></div>';
    res.classList.add('show'); ToolPro.toast('Estimate ready','ok');
  });
})();
</script>

## How it works

Enter your annual income, choose single or joint assessment, and press **Calculate Tax**. For joint assessment the calculator halves the income, taxes one half, and doubles the result — that is exactly how Ehegattensplitting works. Inside the curved progression zones the marginal rate is approximated as a straight line from the zone's entry rate to its exit rate (14% to about 24% in the first zone, about 24% to 42% in the second); the flat 42% and 45% zones are exact. The solidarity surcharge, when enabled, is 5.5% of the tax with the statutory relief zone: nothing below the threshold (about €20,350 single, €40,700 joint), then capped at 11.9% of the excess until the full 5.5% takes over.

## Everyday uses

- **Salary negotiations** — see what a raise really keeps after German tax.
- **Move planning** — compare German take-home with another country's.
- **Freelancers** — estimate quarterly prepayments before filing.
- **Joint vs single** — check what splitting saves a couple.
- **Budgeting** — turn a gross offer into a realistic net figure.
