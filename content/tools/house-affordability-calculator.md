---
title: "Free House Affordability Calculator — 28/36 Rule"
description: "How much house can you afford? The 28/36 rule with your rate, term, down payment and real tax/insurance costs. Free US calculator, no sign-up."
category: finance
date: 2026-10-12
draft: false
---

Lenders will happily approve more house than most people enjoy paying for. This calculator starts from the classic 28/36 guideline — housing at or under 28% of gross monthly income, all debts at or under 36% — then backs into a real price using your down payment, rate, term, and the taxes, insurance, and HOA dues that listings love to hide. Pair it with our guide on <a href="/posts/how-much-house-can-i-afford-on-a-us-salary/">how much house you can afford on a US salary</a> for worked examples at common incomes.

<div class="tool-shell" id="houseAffordabilityShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>House Affordability Calculator</h2>
<p>The 28/36 rule, your down payment, and real tax-and-insurance costs — one honest price range, no lender sales pitch.</p>
</div>
<button type="button" class="theme-toggle" id="houseAffordabilityTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your finances</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Gross annual income ($)</span><input type="number" class="tool-input" id="haInc" value="90000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Monthly debts — car, cards, loans ($)</span><input type="number" class="tool-input" id="haDebt" value="450" min="0" step="any"></div>
<div class="setting"><span class="t-label">Down payment saved ($)</span><input type="number" class="tool-input" id="haDown" value="60000" min="0" step="any"></div>
<div class="setting"><span class="t-label">Mortgage rate (%)</span><input type="number" class="tool-input" id="haRate" value="6.5" min="0" step="any"></div>
<div class="setting"><span class="t-label">Loan term (years)</span><select class="tool-input" id="haTerm"><option value="30">30 years</option><option value="20">20 years</option><option value="15">15 years</option></select></div>
<div class="setting"><span class="t-label">Taxes + insurance + HOA (% of price / year)</span><input type="number" class="tool-input" id="haTax" value="1.6" min="0" step="any"></div>
</div>
<div class="hint">Uses the classic 28/36 rule lenders start with: housing ≤ 28% of gross monthly income, total debts ≤ 36%. Rates are your input — no live data, nothing stored.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> What you can afford</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="haGo">
🏡 Calculate affordability
</button>
</div>
<div class="progress-wrap"><div class="progress-bar"></div><span class="progress-text"></span></div>
<div class="results" id="haRes">
<p class="result-head">🏡 Your price range</p>
<div class="result-summary" id="haResSummary"></div>
<div class="result-grid" id="haResGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Know your real number — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('houseAffordabilityShell');
ToolPro.themeToggle(shell, document.getElementById('houseAffordabilityTheme'));
function money(n){ return '$'+Math.round(n).toLocaleString('en-US'); }
document.getElementById('haGo').addEventListener('click', function(){
  var inc=parseFloat(document.getElementById('haInc').value)||0;
  var debts=parseFloat(document.getElementById('haDebt').value)||0;
  var down=parseFloat(document.getElementById('haDown').value)||0;
  var rate=(parseFloat(document.getElementById('haRate').value)||0)/100/12;
  var n=parseInt(document.getElementById('haTerm').value,10)*12;
  var taxRate=(parseFloat(document.getElementById('haTax').value)||0)/100;
  if(inc<=0){ ToolPro.toast('Enter your income','err'); return; }
  var monthly=inc/12;
  var maxHousing=Math.min(monthly*0.28, monthly*0.36-debts);
  if(maxHousing<=0){ ToolPro.toast('Your debts already exceed the 36% guideline — focus there first','err'); return; }
  // Solve price: monthly housing = P&I on (price-down) + taxes/ins on price
  // P&I factor per $ of loan:
  var f = rate>0 ? rate/(1-Math.pow(1+rate,-n)) : 1/n;
  // housing = (price-down)*f + price*taxRate/12  =>  price = (housing + down*f) / (f + taxRate/12)
  var price=(maxHousing + down*f)/(f + taxRate/12);
  var loan=price-down;
  var pi=loan*f, ti=price*taxRate/12;
  var res=document.getElementById('haRes'); res.classList.add('show');
  document.getElementById('haResSummary').textContent='By the 28/36 rule you can target about '+money(price)+' with '+money(down)+' down. Comfort check: many buyers feel safest one notch below the lender maximum.';
  var grid=document.getElementById('haResGrid'); grid.innerHTML='';
  [['Max home price (28/36 rule)', money(price)],['Loan amount', money(loan)],['Max monthly housing payment', money(maxHousing)],['Of which: principal & interest', money(pi)],['Of which: taxes/ins/HOA est.', money(ti)],['Income rule check', '28% = '+money(monthly*0.28)+' · 36% room = '+money(monthly*0.36-debts)]].forEach(function(x){
    var card=document.createElement('div'); card.className='result-card';
    card.innerHTML='<p class="r-name">'+x[0]+'</p><p class="r-stats" style="font-size:1.2rem;font-weight:700">'+x[1]+'</p>';
    grid.appendChild(card);
  });
});
})();
</script>

## How it works

The tool computes your maximum monthly housing payment from the tighter of the two rules (28% of income, or 36% minus your other debts), then solves the price algebraically: the payment must cover principal and interest on (price − down payment) plus monthly taxes/insurance charged as a yearly percentage of price. Everything runs locally with the rate you enter — no live rate data and no lead form.

## Everyday uses

- **First-time buyers** — set a search filter price that will not strain the budget.
- **Offer shoppers** — see how rate changes move your true price ceiling.
- **Savers** — learn how much extra down payment actually buys in price terms.

## Frequently asked questions

**Is the 28/36 rule what lenders actually use?**

It is the classic starting framework. Many lenders now allow higher back-end ratios for strong files, which is exactly why running your own conservative number matters.

**Why include taxes and insurance in the price solve?**

Because in high-tax states they can add $500+/month. A price that fits on principal-and-interest alone may fail once escrow is counted.

**Should I buy at my maximum?**

Most households are happier below it — the maximum assumes nothing goes wrong. Treat it as a ceiling, not a target.
