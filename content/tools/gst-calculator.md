---
title: "Free GST Calculator — Add or Remove GST (India CGST/SGST/IGST)"
description: "Free GST calculator for India: add GST to a base amount or remove GST from a gross total, with CGST, SGST and IGST breakdown for the 5%, 12%, 18% and 28% slabs."
category: finance
date: 2026-11-03
draft: false
---
## How it works
Enter an amount, pick the GST slab and whether you want to add GST to a base price or remove GST from a GST-inclusive total — this calculator splits the tax into CGST + SGST for intra-state supplies or IGST for inter-state supplies, and shows the exact base, tax and final amount.

<div class="tool-shell" id="gstShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-.59.28-1 .87-1 1.53 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.47-.19-.89-.49-1.2l-1.51-1.51c-.63-.63-1.02-1.51-1.02-2.45 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5h-2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .42.17.8.45 1.08l1.51 1.51c.7.7 1.04 1.65 1.04 2.66 0 1.93-1.57 3.5-3.5 3.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>GST Calculator (India)</h2>
<p>Add or remove GST — CGST / SGST / IGST split in one click.</p>
</div>
<button type="button" class="theme-toggle" id="gstTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — runs in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Amount and GST slab</p>
<div class="settings-grid">
<div class="setting">
<label for="gstAmount">Amount (₹)</label>
<input type="number" id="gstAmount" class="tool-input" placeholder="e.g. 10000" min="0">
</div>
<div class="setting">
<label for="gstRate">GST rate</label>
<select id="gstRate" class="tool-input">
<option value="5">5% (essential goods)</option>
<option value="12">12% (processed food)</option>
<option value="18" selected>18% (most services)</option>
<option value="28">28% (luxury / sin goods)</option>
</select>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Calculation mode and supply type</p>
<div class="settings-grid">
<div class="setting">
<label for="gstMode">Mode</label>
<select id="gstMode" class="tool-input">
<option value="add">Add GST (base → gross)</option>
<option value="remove">Remove GST (gross → base)</option>
</select>
<div class="hint">Use "Add" when you have a pre-GST price; use "Remove" when you have a GST-inclusive total and want the base amount.</div>
</div>
<div class="setting">
<label for="gstSupply">Supply type</label>
<select id="gstSupply" class="tool-input">
<option value="intra">Intra-state (CGST + SGST)</option>
<option value="inter">Inter-state (IGST)</option>
</select>
<div class="hint">Same state = CGST + SGST (half each). Different state = IGST (full).</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See the GST breakdown</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gstBtn">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-.59.28-1 .87-1 1.53 0 .97.78 1.75 1.75 1.75s1.75-.78 1.75-1.75c0-.47-.19-.89-.49-1.2l-1.51-1.51c-.63-.63-1.02-1.51-1.02-2.45 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5h-2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .42.17.8.45 1.08l1.51 1.51c.7.7 1.04 1.65 1.04 2.66 0 1.93-1.57 3.5-3.5 3.5z"/></svg>
Calculate GST
</button>
<button type="button" class="btn-pro-outline" id="gstClear">Clear</button>
</div>
<div class="results" id="gstResults">
<p class="result-head">🧾 Your GST breakdown</p>
<div class="result-summary" id="gstSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Run as many GST scenarios as you like — every calculation happens in your browser.</p>
</div>
</div>
</div>
<script>
(function(){
  var shell = document.getElementById('gstShell');
  ToolPro.themeToggle(shell, document.getElementById('gstTheme'));
  var resBox = document.getElementById('gstResults');
  var summary = document.getElementById('gstSummary');
  function fmt(n){ return '₹' + Math.abs(n).toLocaleString('en-IN',{minimumFractionDigits:2, maximumFractionDigits:2}); }
  function showError(msg){ summary.innerHTML = '<p style="margin:0">' + msg + '</p>'; resBox.classList.add('show'); ToolPro.toast(msg, 'err'); }
  function num(id){ var v = document.getElementById(id).value; return v === '' ? NaN : parseFloat(v); }
  document.getElementById('gstBtn').addEventListener('click', function(){
    var amount = num('gstAmount');
    var rate = parseFloat(document.getElementById('gstRate').value);
    var mode = document.getElementById('gstMode').value;
    var supply = document.getElementById('gstSupply').value;
    if (isNaN(amount) || amount < 0) { showError('Enter an amount of ₹0 or more.'); return; }
    var base, tax, gross;
    if (mode === 'add') {
      base = amount;
      tax = base * rate / 100;
      gross = base + tax;
    } else {
      gross = amount;
      base = gross / (1 + rate / 100);
      tax = gross - base;
    }
    var half = tax / 2;
    var splitHtml;
    if (supply === 'intra') {
      splitHtml = '<p>CGST (' + (rate/2) + '%): <strong>' + fmt(half) + '</strong></p>'
        + '<p>SGST (' + (rate/2) + '%): <strong>' + fmt(half) + '</strong></p>';
    } else {
      splitHtml = '<p>IGST (' + rate + '%): <strong>' + fmt(tax) + '</strong></p>';
    }
    var modeLabel = mode === 'add' ? 'Adding ' + rate + '% GST to base' : 'Removing ' + rate + '% GST from gross';
    summary.innerHTML = '<p style="font-size:1.1rem;font-weight:600;">' + modeLabel + '</p>'
      + '<p>Base amount (pre-GST): <strong>' + fmt(base) + '</strong></p>'
      + splitHtml
      + '<p>Total GST: <strong style="color:#b45309">' + fmt(tax) + '</strong></p>'
      + '<p style="font-size:1.2rem;">Gross amount (incl. GST): <strong>' + fmt(gross) + '</strong></p>'
      + '<p style="font-size:0.85rem;color:#666;">Effective GST rate: ' + rate + '%. ' + (supply === 'intra' ? 'Intra-state supply: CGST and SGST are each half of the total GST.' : 'Inter-state supply: IGST equals the full GST amount.') + '</p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('GST breakdown ready', 'ok');
  });
  document.getElementById('gstClear').addEventListener('click', function(){
    document.getElementById('gstAmount').value = '';
    document.getElementById('gstRate').value = '18';
    document.getElementById('gstMode').value = 'add';
    document.getElementById('gstSupply').value = 'intra';
    resBox.classList.remove('show');
  });
})();
</script>
## How the math works
GST is a percentage of the base (pre-tax) amount. When you **add** GST: tax = base × rate ÷ 100 and gross = base + tax. When you **remove** GST from a gross total: base = gross ÷ (1 + rate ÷ 100) and tax = gross − base. For an **intra-state** supply (seller and buyer in the same state) the total GST is split equally into CGST (central) and SGST (state), each at half the rate. For an **inter-state** supply the full amount is charged as IGST.
## Everyday uses
- **Invoice pricing:** add GST to your base selling price so you issue correct GST-compliant invoices.
- **Purchase reconciliation:** remove GST from a bill total to find the actual pre-tax cost and claim accurate input tax credit.
- **E-commerce checkout check:** verify that a platform's "GST included" price splits correctly into CGST/SGST or IGST.
## Frequently asked questions
### Which GST slab applies to my product or service?
The four standard slabs are 5%, 12%, 18% and 28%, plus a 0% rate for essential items and special rates for gold, jewellery and some goods. The exact slab depends on the HSN/SAC code — check the latest CBIC GST rate schedule for your category.
### What is the difference between CGST, SGST and IGST?
CGST and SGST are levied together on intra-state (same-state) transactions, each at half the total rate. IGST is levied alone on inter-state (different-state) transactions at the full rate. The total tax collected is the same either way; only which government receives it differs.
### Can I use this for composition scheme dealers?
No. Composition dealers pay a flat turnover-based tax (e.g. 1% for traders, 5% for restaurants) and cannot charge GST separately or claim input tax credit. This calculator assumes a normal (regular) GST registration.
