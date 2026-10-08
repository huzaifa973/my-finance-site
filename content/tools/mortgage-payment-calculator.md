---
title: "Free Mortgage Payment Calculator"
description: "Free mortgage calculator: enter home price, down payment, rate, and term to see your monthly payment with a principal vs interest split."
date: 2026-09-29
draft: false
---

A mortgage is usually the biggest bill of your life, so knowing the real monthly payment before you fall in love with a house matters. This free calculator breaks your payment into principal and interest — and shows how much of the first payment actually builds your equity.

<div class="tool-shell" id="mgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Mortgage Payment Calculator</h2>
<p>See your real monthly payment — principal vs interest — before you buy.</p>
</div>
<button type="button" class="theme-toggle" id="mgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your loan details</p>
<div class="settings-grid">
<div class="setting">
<label for="mgPrice">Home price</label>
<input type="number" id="mgPrice" class="tool-input" placeholder="e.g. 350000" min="1">
</div>
<div class="setting">
<label for="mgDown">Down payment</label>
<input type="number" id="mgDown" class="tool-input" placeholder="e.g. 70000" min="0">
</div>
<div class="setting">
<label for="mgRate">Annual interest rate (%)</label>
<input type="number" id="mgRate" class="tool-input" placeholder="e.g. 6.5" min="0" max="30" step="0.01">
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Loan term</p>
<div class="settings-panel">
<div class="preset-row" id="mgPresets">
<button type="button" class="preset-chip" data-term="15">📅 15 years</button>
<button type="button" class="preset-chip" data-term="20">📅 20 years</button>
<button type="button" class="preset-chip active" data-term="30">📅 30 years</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="mgTerm">Loan term</label>
<select id="mgTerm" class="tool-input">
<option value="15">15 years</option>
<option value="20">20 years</option>
<option value="30" selected>30 years</option>
</select>
<div class="hint">Shorter terms mean higher payments but far less total interest.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate payment</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mgBtn">
<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
Calculate payment
</button>
<button type="button" class="btn-pro-outline" id="mgClear">Clear</button>
</div>
<div class="results" id="mgResults">
<div class="result-card" id="mgResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — run as many scenarios as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mgShell');
  ToolPro.themeToggle(shell, document.getElementById('mgTheme'));

  var termSel = document.getElementById('mgTerm');
  var resBox = document.getElementById('mgResults');
  var out = document.getElementById('mgResult');

  document.getElementById('mgPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#mgPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    termSel.value = chip.dataset.term;
    ToolPro.toast('Term set to ' + chip.dataset.term + ' years');
  });
  termSel.addEventListener('change', function(){
    document.querySelectorAll('#mgPresets .preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.term === termSel.value);
    });
  });

  document.getElementById('mgClear').addEventListener('click', function(){
    ['mgPrice','mgDown','mgRate'].forEach(function(id){ document.getElementById(id).value = ''; });
    resBox.classList.remove('show');
  });

  function calcMortgage() {
    var price = parseFloat(document.getElementById('mgPrice').value);
    var down = parseFloat(document.getElementById('mgDown').value) || 0;
    var rate = parseFloat(document.getElementById('mgRate').value);
    var years = parseInt(termSel.value, 10);
    function err(msg){ out.innerHTML = '<p>' + msg + '</p>'; resBox.classList.add('show'); }
    if (!price || price <= 0) { err('Please enter a valid home price.'); return; }
    if (down < 0 || down >= price) { err('The down payment must be between 0 and the home price.'); return; }
    if (isNaN(rate) || rate < 0 || rate > 30) { err('Please enter an annual rate between 0 and 30%.'); return; }
    function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
    var loan = price - down;
    var r = rate / 100 / 12, n = years * 12;
    var pmt = rate === 0 ? loan / n : loan * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    var firstInterest = loan * r;
    var firstPrincipal = pmt - firstInterest;
    var totalPaid = pmt * n;
    var totalInterest = totalPaid - loan;
    var dpPct = (down / price * 100).toFixed(1);
    var html = '<p style="font-size:1.4rem"><strong>Monthly payment (P&amp;I): ' + fmt(pmt) + '</strong></p>' +
      '<p><strong>Loan amount:</strong> ' + fmt(loan) + ' &nbsp;|&nbsp; <strong>Down payment:</strong> ' + fmt(down) + ' (' + dpPct + '%)</p>' +
      '<p><strong>First payment split:</strong></p>' +
      '<p>Principal: ' + fmt(firstPrincipal) + '</p><div class="bar"><i style="width:' + (firstPrincipal / pmt * 100).toFixed(1) + '%;background:#0b6e4f"></i></div>' +
      '<p>Interest: ' + fmt(firstInterest) + '</p><div class="bar"><i style="width:' + (firstInterest / pmt * 100).toFixed(1) + '%;background:#c9a227"></i></div>' +
      '<p><strong>Total interest over ' + years + ' years:</strong> ' + fmt(totalInterest) + '</p>';
    if (dpPct < 20) {
      html += '<div class="callout"><strong>Note:</strong> with less than 20% down, most lenders add mortgage insurance (PMI/MI) to your bill until you build equity. Ask your lender for the exact figure.</div>';
    } else {
      html += '<div class="callout"><strong>Tip:</strong> 20% down typically avoids mortgage insurance. Paying just one extra payment a year can shave years off a 30-year loan.</div>';
    }
    out.innerHTML = html;
    resBox.classList.add('show');
  }

  document.getElementById('mgBtn').addEventListener('click', calcMortgage);
})();
</script>

## Remember the rest of the bill

Principal and interest are only part of ownership. Budget separately for property taxes, homeowner's insurance, maintenance (about 1% of the home's value per year), and any HOA fees before deciding what you can afford.
