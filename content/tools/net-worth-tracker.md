---
title: "Free Net Worth Tracker"
description: "Free net worth tracker: list your assets and liabilities to calculate your net worth instantly and see the breakdown."
date: 2026-09-29
draft: false
---

Your net worth — everything you own minus everything you owe — is the single best number for tracking your financial progress over time. This free tracker calculates it in seconds. (Everything you enter stays in your browser; nothing is sent anywhere.)

<div class="tool-shell" id="nwShell" data-theme="light">

  <div class="tool-hero">
    <div class="tool-icon">
      <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
    </div>
    <div class="tool-hero-top">
      <div>
        <h2>Net Worth Tracker</h2>
        <p>Assets minus liabilities — your one number for financial progress.</p>
      </div>
      <button type="button" class="theme-toggle" id="nwTheme">🌙 Dark</button>
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
      <p class="tool-step-title"><span class="tool-step-num">1</span> List your assets &amp; liabilities</p>
      <p style="margin-top:0"><strong>Assets</strong> — cash, savings, investments, property, car value…</p>
      <div id="nwAssets"></div>
      <div class="tool-actions" style="margin-bottom:1.2rem;">
        <button type="button" class="btn-pro-outline" id="nwAddAsset">+ Add asset</button>
      </div>
      <p><strong>Liabilities</strong> — credit cards, loans, mortgage balance…</p>
      <div id="nwDebts"></div>
      <div class="tool-actions">
        <button type="button" class="btn-pro-outline" id="nwAddDebt">+ Add liability</button>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">2</span> Quick start</p>
      <div class="settings-panel">
        <div class="preset-row" id="nwPresets">
          <button type="button" class="preset-chip" data-preset="starter">✨ Starter example</button>
          <button type="button" class="preset-chip" data-preset="clear">🧹 Clear all rows</button>
        </div>
        <div class="settings-grid">
          <div class="setting">
            <label>Privacy</label>
            <div class="hint">Everything you type stays in your browser — nothing is sent anywhere. Estimates are fine; rough numbers beat no numbers.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">3</span> Calculate net worth</p>
      <div class="tool-actions">
        <button type="button" class="btn-pro" id="nwBtn">
          <svg viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
          Calculate net worth
        </button>
      </div>
      <div class="results" id="nwResults">
        <div class="result-card" id="nwResult"></div>
      </div>
    </div>

    <div class="free-banner">
      <strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
      <p>This tool runs entirely in your browser — recalculate monthly and watch the trend.</p>
    </div>

  </div>
</div>

<script>
(function(){
  var shell = document.getElementById('nwShell');
  ToolPro.themeToggle(shell, document.getElementById('nwTheme'));

  var resBox = document.getElementById('nwResults');
  var out = document.getElementById('nwResult');

  function addNwRow(containerId, name, amt) {
    var d = document.createElement('div');
    d.style.cssText = 'display:flex;gap:.5rem;margin-bottom:.5rem';
    var nm = document.createElement('input');
    nm.type = 'text'; nm.className = 'nw-name tool-input';
    nm.placeholder = 'e.g. Savings account'; nm.value = name || ''; nm.style.flex = '2';
    var va = document.createElement('input');
    va.type = 'number'; va.className = 'nw-amt tool-input';
    va.placeholder = 'Value'; va.min = '0'; va.value = amt || ''; va.style.flex = '1';
    d.appendChild(nm); d.appendChild(va);
    document.getElementById(containerId).appendChild(d);
  }
  function sumNw(containerId) {
    var total = 0, items = [];
    document.querySelectorAll('#' + containerId + ' > div').forEach(function (d) {
      var nm = d.querySelector('.nw-name').value.trim() || 'Unnamed';
      var amt = parseFloat(d.querySelector('.nw-amt').value);
      if (!isNaN(amt) && amt > 0) { total += amt; items.push({name: nm, amt: amt}); }
    });
    return {total: total, items: items};
  }
  function escapeHtml(s){ var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function calcNetWorth() {
    var assets = sumNw('nwAssets'), liabs = sumNw('nwDebts');
    function fmt(n){ return '$' + n.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); }
    if (assets.items.length === 0 && liabs.items.length === 0) { out.innerHTML = '<p>Please add at least one asset or liability.</p>'; resBox.classList.add('show'); return; }
    var net = assets.total - liabs.total;
    function pct(x, t) { return t > 0 ? (x / t * 100).toFixed(1) : 0; }
    var rows = assets.items.map(function (a) {
      return '<p>' + escapeHtml(a.name) + ': ' + fmt(a.amt) + ' (' + pct(a.amt, assets.total) + '% of assets)</p>' +
        '<div class="bar"><i style="width:' + pct(a.amt, assets.total) + '%;background:#0b6e4f"></i></div>';
    }).join('');
    var rowsL = liabs.items.map(function (l) {
      return '<p>' + escapeHtml(l.name) + ': ' + fmt(l.amt) + ' (' + pct(l.amt, liabs.total) + '% of liabilities)</p>' +
        '<div class="bar"><i style="width:' + pct(l.amt, liabs.total) + '%;background:#c9a227"></i></div>';
    }).join('');
    var tone = net >= 0 ? '#0b6e4f' : '#a31621';
    out.innerHTML =
      '<p style="font-size:1.4rem"><strong>Your net worth: <span style="color:' + tone + '">' + fmt(net) + '</span></strong></p>' +
      '<p><strong>Total assets:</strong> ' + fmt(assets.total) + ' &nbsp;|&nbsp; <strong>Total liabilities:</strong> ' + fmt(liabs.total) + '</p>' +
      rows + rowsL +
      '<div class="callout"><strong>Tip:</strong> recalculate monthly. The number going up — even slowly — means your plan is working.</div>';
    resBox.classList.add('show');
  }

  document.getElementById('nwAddAsset').addEventListener('click', function(){ addNwRow('nwAssets'); });
  document.getElementById('nwAddDebt').addEventListener('click', function(){ addNwRow('nwDebts'); });
  document.getElementById('nwBtn').addEventListener('click', calcNetWorth);

  document.getElementById('nwPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('nwAssets').innerHTML = '';
    document.getElementById('nwDebts').innerHTML = '';
    resBox.classList.remove('show');
    if(chip.dataset.preset === 'starter'){
      addNwRow('nwAssets', 'Savings account', ''); addNwRow('nwAssets', 'Investments', '');
      addNwRow('nwDebts', 'Credit card', ''); addNwRow('nwDebts', 'Student loan', '');
      ToolPro.toast('Starter example loaded', 'ok');
    } else {
      ToolPro.toast('All rows cleared');
    }
  });

  addNwRow('nwAssets', 'Savings account', ''); addNwRow('nwAssets', 'Investments', '');
  addNwRow('nwDebts', 'Credit card', ''); addNwRow('nwDebts', 'Student loan', '');
})();
</script>

## A negative net worth is a starting line, not a verdict

Many people start below zero — student loans and car debt do that. What matters is the trend. Watch the green side grow and the gold side shrink, month after month.
