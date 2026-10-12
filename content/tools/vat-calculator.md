---
title: "Free VAT Calculator"
description: "Free VAT calculator: add VAT to a net price or remove it from a gross total, with presets for the UK, Germany, France, UAE, and more."
category: finance
date: 2026-10-12
draft: false
---

## How it works

Choose whether you are adding VAT to a net price or removing it from a VAT-inclusive total, enter the amount and the rate — or tap a country preset — and this calculator shows the net, the VAT amount, and the gross, all to the cent.

<div class="tool-shell" id="vatShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>VAT Calculator</h2>
<p>Add VAT to a net price, or split any gross total into net plus VAT — instantly.</p>
</div>
<button type="button" class="theme-toggle" id="vatTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Amount &amp; direction</p>
<div class="settings-grid">
<div class="setting">
<label for="vatMode">I want to</label>
<select id="vatMode" class="tool-input">
<option value="add">Add VAT to a net price</option>
<option value="remove">Remove VAT from a gross total</option>
</select>
</div>
<div class="setting">
<label for="vatAmount" id="vatAmountLabel">Net amount (before VAT)</label>
<input type="number" id="vatAmount" class="tool-input" placeholder="e.g. 100" min="0" step="any">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> VAT rate</p>
<div class="settings-panel">
<div class="preset-row" id="vatPresets">
<button type="button" class="preset-chip" data-rate="20">UK — 20%</button>
<button type="button" class="preset-chip" data-rate="19">Germany — 19%</button>
<button type="button" class="preset-chip" data-rate="20">France — 20%</button>
<button type="button" class="preset-chip" data-rate="5">UAE — 5%</button>
<button type="button" class="preset-chip" data-rate="18">Pakistan — 18%</button>
<button type="button" class="preset-chip" data-rate="18">India GST — 18%</button>
</div>
<div class="setting">
<label for="vatRate">VAT rate (%)</label>
<input type="number" id="vatRate" class="tool-input" placeholder="e.g. 20" min="0" step="any" style="max-width:220px;">
<div class="hint">Presets are standard rates — reduced rates apply to some goods and services.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> See the breakdown</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vatBtn">
<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"/></svg>
Calculate VAT
</button>
<button type="button" class="btn-pro-outline" id="vatClear">Clear</button>
</div>
<div class="results" id="vatResults">
<p class="result-head">🧾 Your VAT breakdown</p>
<div class="result-summary" id="vatResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — split as many invoices as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('vatShell');
  ToolPro.themeToggle(shell, document.getElementById('vatTheme'));
  var resBox = document.getElementById('vatResults');
  var out = document.getElementById('vatResult');
  var modeEl = document.getElementById('vatMode');
  var rateEl = document.getElementById('vatRate');
  var amountLabel = document.getElementById('vatAmountLabel');

  function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }

  function showError(msg){
    out.innerHTML = '<p style="margin:0">' + msg + '</p>';
    resBox.classList.add('show');
    ToolPro.toast(msg, 'err');
  }

  function syncMode(){
    amountLabel.textContent = modeEl.value === 'add' ? 'Net amount (before VAT)' : 'Gross amount (VAT included)';
  }
  modeEl.addEventListener('change', syncMode);
  syncMode();

  document.getElementById('vatPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    rateEl.value = chip.dataset.rate;
    ToolPro.toast('Rate set: ' + chip.textContent.trim());
  });

  document.getElementById('vatBtn').addEventListener('click', function(){
    var amountRaw = document.getElementById('vatAmount').value;
    var rateRaw = rateEl.value;
    var amount = parseFloat(amountRaw);
    var rate = parseFloat(rateRaw);
    if (amountRaw === '' || isNaN(amount) || amount < 0) { showError('Enter an amount of $0 or more.'); return; }
    if (rateRaw === '' || isNaN(rate) || rate < 0) { showError('Enter a VAT rate of 0% or more — or tap a country preset.'); return; }
    var net, vat, gross;
    if (modeEl.value === 'add') {
      net = amount;
      vat = amount * rate / 100;
      gross = amount + vat;
    } else {
      gross = amount;
      net = amount / (1 + rate / 100);
      vat = gross - net;
    }
    out.innerHTML = '<p style="font-size:1.35rem;">Gross: <strong>' + fmt(gross) + '</strong></p>'
      + '<p>Net: ' + fmt(net) + ' &middot; VAT (' + rate + '%): <strong>' + fmt(vat) + '</strong></p>';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('VAT calculated', 'ok');
  });

  document.getElementById('vatClear').addEventListener('click', function(){
    document.getElementById('vatAmount').value = '';
    rateEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## How the math works

Adding VAT: **VAT amount = net × rate ÷ 100**, and gross = net + VAT. Removing VAT from a gross figure is the step people most often get wrong: because VAT was charged on the net price, you recover it with division, not subtraction — **net = gross ÷ (1 + rate ÷ 100)**, and the VAT is the difference. At the UK's 20% rate, the VAT inside a $120 gross price is $20 — not the $24 you would get by taking 20% of $120.

## Everyday uses

- **Freelance invoices:** quote a client a net fee and show the VAT line correctly, or split a lump-sum payment into net and VAT for your return.
- **Online selling:** work out how much of a VAT-inclusive marketplace price is actually yours after the tax portion comes out.
- **Business purchases:** find the net cost of equipment bought at a gross price when you can reclaim the VAT.
- **Cross-border work:** apply the right standard rate for clients in the UK, the EU, the UAE, Pakistan, or India with one tap.

## Frequently asked questions

**Q: Why is removing VAT not just subtracting the percentage?**
A: Because the percentage was applied to the smaller net figure. Taking 20% off a gross price overstates the VAT and understates your net. Dividing by 1.20 (at a 20% rate) reverses the original calculation exactly.

**Q: What is the difference between VAT and sales tax?**
A: Sales tax (US-style) is charged once, to the final customer. VAT is charged at every stage of production and supply, with each business reclaiming the VAT it paid — so the math for a single price looks the same, but who reports and reclaims it differs.

**Q: Are these the current standard rates?**
A: The presets reflect the widely used standard rates for each country (UK 20%, Germany 19%, France 20%, UAE 5%, Pakistan 18%, India GST 18%). Reduced rates exist for essentials like food, books, and energy in many countries — type your exact rate into the rate box whenever a reduced rate applies.
