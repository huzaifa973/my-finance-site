---
title: "Free Shoe Size Converter"
description: "Convert shoe sizes between US, UK and EU for men, women and kids — with foot length in cm and inches so you can order the right fit."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Pick who the shoes are for, then type a size in any system — US, UK, or EU. The other two sizes update instantly, along with the matching foot length in centimeters and inches. Brands vary a little, so use the foot length to double-check your fit.

<div class="tool-shell" id="shShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Shoe Size Converter</h2>
<p>US, UK and EU sizes for men, women and kids — plus true foot length in cm and inches.</p>
</div>
<button type="button" class="theme-toggle" id="shTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Who are the shoes for?</p>
<div class="setting">
<label for="shCat">Category</label>
<select id="shCat" class="tool-input" style="max-width:200px;">
<option value="men" selected>Men</option>
<option value="women">Women</option>
<option value="kids">Kids</option>
</select>
<div class="hint">Men's, women's, and kids' sizes all use different scales — pick the right one first.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Enter a size in any system</p>
<div class="setting">
<label for="shUS">US size</label>
<input type="number" id="shUS" class="tool-input" style="max-width:160px;" min="0" step="0.5" placeholder="e.g. 9">
</div>
<div class="setting">
<label for="shUK">UK size</label>
<input type="number" id="shUK" class="tool-input" style="max-width:160px;" min="0" step="0.5" placeholder="e.g. 8.5">
</div>
<div class="setting">
<label for="shEU">EU size</label>
<input type="number" id="shEU" class="tool-input" style="max-width:160px;" min="0" step="0.5" placeholder="e.g. 42.5">
</div>
<div class="hint">All three boxes stay in sync — type in any one of them. If your size falls between rows, the closest standard match is shown.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your full size row</p>
<div class="results" id="shResults">
<p class="result-head">👟 Converted sizes</p>
<div class="result-summary" id="shResult"></div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="shClear">Clear</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This converter runs entirely in your browser — convert as many sizes as you like before you order.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('shShell');
  ToolPro.themeToggle(shell, document.getElementById('shTheme'));
  // Rows: [US, UK, EU, foot length cm] — standard published conversion tables (approximate; brands vary).
  var tables = {
    men: [
      [6,5.5,38.5,24.1],[6.5,6,39,24.5],[7,6.5,40,24.9],[7.5,7,40.5,25.4],
      [8,7.5,41,25.7],[8.5,8,42,26.0],[9,8.5,42.5,26.5],[9.5,9,43,27.0],
      [10,9.5,44,27.4],[10.5,10,44.5,27.8],[11,10.5,45,28.3],[12,11.5,46,29.2],
      [13,12.5,47.5,30.0],[14,13.5,48.5,30.8],[15,14.5,49.5,31.7]
    ],
    women: [
      [5,3,35.5,22.0],[5.5,3.5,36,22.4],[6,4,36.5,22.9],[6.5,4.5,37.5,23.3],
      [7,5,38,23.7],[7.5,5.5,38.5,24.1],[8,6,39,24.6],[8.5,6.5,40,25.0],
      [9,7,40.5,25.4],[9.5,7.5,41,25.8],[10,8,42,26.2],[11,9,43,27.1],
      [12,10,44,27.9]
    ],
    kids: [
      [1,0.5,16,8.9],[1.5,1,16.5,9.2],[2,1.5,17,9.5],[2.5,2,18,9.8],
      [3,2.5,18.5,10.2],[3.5,3,19,10.5],[4,3.5,19.5,10.8],[4.5,4,20,11.1],
      [5,4.5,21,11.4],[5.5,5,22,11.7],[6,5.5,22.5,12.1],[6.5,6,23,12.4],
      [7,6.5,23.5,12.7],[7.5,7,24,13.0],[8,7.5,25,13.3],[9,8.5,26,14.0],
      [10,9.5,27,14.6],[11,10.5,28,15.2],[12,11.5,29,15.9],[13,12.5,30,16.5],
      [13.5,13,31,16.8]
    ]
  };
  var catEl = document.getElementById('shCat');
  var usEl = document.getElementById('shUS');
  var ukEl = document.getElementById('shUK');
  var euEl = document.getElementById('shEU');
  var resBox = document.getElementById('shResults');
  var out = document.getElementById('shResult');
  function table(){ return tables[catEl.value]; }
  function nearest(col, val){
    var rows = table();
    var best = rows[0];
    var bestDiff = Math.abs(rows[0][col] - val);
    for (var i = 1; i < rows.length; i++) {
      var diff = Math.abs(rows[i][col] - val);
      if (diff < bestDiff) { bestDiff = diff; best = rows[i]; }
    }
    return best;
  }
  function render(row){
    var inches = (row[3] / 2.54).toFixed(1);
    out.innerHTML = '<p style="font-size:1.3rem;">US <strong>' + row[0] + '</strong> · UK <strong>' + row[1] + '</strong> · EU <strong>' + row[2] + '</strong></p>'
      + '<p>Foot length: <strong>' + row[3].toFixed(1) + ' cm</strong> (' + inches + ' in)</p>'
      + '<p>Sizes vary slightly between brands — if your foot measures longer than this row, size up.</p>';
    resBox.classList.add('show');
  }
  function syncFrom(col, el){
    var val = parseFloat(el.value);
    if (isNaN(val)) { resBox.classList.remove('show'); return; }
    var row = nearest(col, val);
    if (el !== usEl) usEl.value = row[0];
    if (el !== ukEl) ukEl.value = row[1];
    if (el !== euEl) euEl.value = row[2];
    render(row);
  }
  usEl.addEventListener('input', function(){ syncFrom(0, usEl); });
  ukEl.addEventListener('input', function(){ syncFrom(1, ukEl); });
  euEl.addEventListener('input', function(){ syncFrom(2, euEl); });
  catEl.addEventListener('change', function(){
    if (usEl.value !== '') syncFrom(0, usEl);
    var labels = { men: 'Men', women: 'Women', kids: 'Kids' };
    ToolPro.toast('Category: ' + (labels[catEl.value] || catEl.value));
  });
  document.getElementById('shClear').addEventListener('click', function(){
    usEl.value = '';
    ukEl.value = '';
    euEl.value = '';
    resBox.classList.remove('show');
  });
})();
</script>

## Everyday uses

- **Online shopping:** order from US, UK, or European stores without guessing which size to pick.
- **Kids' shoes:** children's sizes jump systems quickly — convert before buying school or sports shoes abroad.
- **Gifts:** convert a family member's size from the label of a pair they already own.
- **Second-hand finds:** check marketplace listings in foreign sizes against your own foot length.

## Frequently asked questions

**Why does the same foot have different sizes in each system?**
Each system starts counting from a different zero point and uses different step sizes. US and UK sizes are close but offset, while EU sizes follow a completely different scale based on the Paris point.

**Are these conversions exact?**
They follow the standard published tables, but brands vary by up to half a size. The foot length in cm is the most reliable number — measure your foot in the evening and compare.

**What if my size is between two rows?**
The converter shows the closest standard row. For running shoes most people prefer the larger size; for dress shoes, the smaller one often fits better.
