---
title: "NAP Checker — Verify Business Name, Address & Phone Consistency"
description: "Check your business name, address, and phone number for consistency across directory listings — paste listings, spot mismatches instantly. Free, private, in your browser."
category: seo
date: 2026-10-28
draft: false
---

NAP consistency — the same business Name, Address, and Phone number everywhere — is a basic local SEO trust signal. One "St." here, one old phone number there, and search engines (and customers) start doubting which listing is right. Enter your canonical details once, paste your directory listings separated by blank lines, and this checker normalizes spelling, abbreviations, and phone formats, then flags every mismatch field by field. Everything runs in your browser; nothing is sent anywhere.

<div class="tool-shell" id="napShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>NAP Checker</h2>
<p>One canonical NAP, every listing compared — mismatches flagged field by field.</p>
</div>
<button type="button" class="theme-toggle" id="napTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your canonical NAP</p>
<div class="settings-grid">
<div class="setting">
<label for="napName">Business name *</label>
<input type="text" id="napName" class="tool-input" placeholder="e.g. Maple Street Bakery" autocomplete="off">
</div>
<div class="setting">
<label for="napAddress">Street address *</label>
<input type="text" id="napAddress" class="tool-input" placeholder="e.g. 12 Maple Street, Springfield, IL 62701" autocomplete="off">
</div>
<div class="setting">
<label for="napPhone">Phone *</label>
<input type="text" id="napPhone" class="tool-input" placeholder="e.g. (555) 123-4567" autocomplete="off">
</div>
<div class="setting">
<label for="napSite">Website (optional)</label>
<input type="text" id="napSite" class="tool-input" placeholder="e.g. maplestreetbakery.com" autocomplete="off">
</div>
</div>
<div class="hint">This is the single correct version every listing should match.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Paste your listings</p>
<textarea id="napListings" class="tool-input" rows="10" placeholder="Paste one listing per block, separated by a blank line. Example:&#10;Google — Maple Street Bakery, 12 Maple St, Springfield, IL 62701, (555) 123-4567&#10;&#10;Yelp — Maple Street Bakery, 12 Maple Street, Springfield, IL 62701, 555-123-4567"></textarea>
<div class="hint">Copy each directory listing's text as shown and separate listings with a blank line. The checker normalizes "St." vs "Street", punctuation, and phone formatting before comparing.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Check consistency</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="napBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Check Listings
</button>
<button type="button" class="btn-pro-outline" id="napClear">Clear</button>
</div>
<div class="progress-wrap" id="napProgWrap">
<div class="progress-bar"><i id="napProgBar"></i></div>
<div class="progress-text" id="napProgText">Checking…</div>
</div>
<div class="results" id="napResults">
<p class="result-head">✅ NAP consistency report</p>
<div class="result-summary" id="napSummary"></div>
<div class="result-grid" id="napGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Check every location you manage — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('napShell');
  ToolPro.themeToggle(shell, document.getElementById('napTheme'));
  var nameEl = document.getElementById('napName');
  var addrEl = document.getElementById('napAddress');
  var phoneEl = document.getElementById('napPhone');
  var siteEl = document.getElementById('napSite');
  var listEl = document.getElementById('napListings');
  var btn = document.getElementById('napBtn');
  var clearBtn = document.getElementById('napClear');
  var resBox = document.getElementById('napResults');
  var summaryEl = document.getElementById('napSummary');
  var gridEl = document.getElementById('napGrid');
  var progWrap = document.getElementById('napProgWrap');
  var progBar = document.getElementById('napProgBar');
  var ABBR = { 'st': 'street', 'ave': 'avenue', 'av': 'avenue', 'rd': 'road', 'blvd': 'boulevard', 'dr': 'drive', 'ln': 'lane', 'ct': 'court', 'ste': 'suite', 'apt': 'apartment', 'fl': 'floor', 'n': 'north', 's': 'south', 'e': 'east', 'w': 'west' };
  function normText(s){
    return s.toLowerCase().replace(/[.,#]/g, ' ').split(/\s+/).filter(Boolean).map(function(w){ return ABBR[w] || w; }).join(' ');
  }
  function normPhone(s){
    var d = s.replace(/\D/g, '');
    if(d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
    return d;
  }
  function normSite(s){
    return s.toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
  }
  function refresh(){ btn.disabled = !(nameEl.value.trim() && addrEl.value.trim() && phoneEl.value.trim() && listEl.value.trim()); }
  [nameEl, addrEl, phoneEl, siteEl, listEl].forEach(function(el){ el.addEventListener('input', refresh); });
  clearBtn.addEventListener('click', function(){
    [nameEl, addrEl, phoneEl, siteEl, listEl].forEach(function(el){ el.value = ''; });
    gridEl.innerHTML = ''; summaryEl.textContent = ''; resBox.classList.remove('show'); refresh();
  });
  btn.addEventListener('click', function(){
    var cName = normText(nameEl.value), cAddr = normText(addrEl.value), cPhone = normPhone(phoneEl.value), cSite = normSite(siteEl.value);
    var blocks = listEl.value.split(/\n\s*\n/).map(function(b){ return b.trim(); }).filter(Boolean);
    if(!blocks.length){ ToolPro.toast('Paste at least one listing, separated by a blank line.', 'err'); return; }
    progWrap.classList.add('show'); progBar.style.width = '60%';
    gridEl.innerHTML = '';
    var full = 0, rows = [];
    blocks.forEach(function(block, i){
      var nb = normText(block);
      var nameOk = nb.indexOf(cName) !== -1;
      var addrOk = nb.indexOf(cAddr) !== -1;
      var digits = block.replace(/\D/g, ' ');
      var phoneOk = false;
      block.replace(/[\d\s().+-]{7,}/g, function(chunk){
        if(normPhone(chunk) === cPhone && cPhone.length >= 7) phoneOk = true;
        return chunk;
      });
      var siteOk = null;
      if(cSite) siteOk = normText(block).indexOf(cSite.replace(/\./g, ' ')) !== -1 || block.toLowerCase().indexOf(cSite) !== -1;
      var okCount = (nameOk ? 1 : 0) + (addrOk ? 1 : 0) + (phoneOk ? 1 : 0) + (siteOk === null ? 0 : (siteOk ? 1 : 0));
      var fields = (siteOk === null ? 3 : 4);
      if(okCount === fields) full++;
      var label = block.split('\n')[0].slice(0, 60);
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
      card.querySelector('.r-name').textContent = 'Listing ' + (i + 1) + ' — ' + label + ' (' + okCount + '/' + fields + ' match)';
      card.querySelector('.r-stats').textContent = 'Name: ' + (nameOk ? '✅ match' : '❌ MISMATCH — not found as "' + nameEl.value.trim() + '"') + '  ·  Address: ' + (addrOk ? '✅ match' : '❌ MISMATCH — not found as "' + addrEl.value.trim() + '"') + '  ·  Phone: ' + (phoneOk ? '✅ match' : '❌ MISMATCH — no number matching ' + phoneEl.value.trim()) + (siteOk === null ? '' : '  ·  Website: ' + (siteOk ? '✅ match' : '❌ MISMATCH'));
      gridEl.appendChild(card);
      rows.push(['Listing ' + (i + 1), nameOk ? 'match' : 'MISMATCH', addrOk ? 'match' : 'MISMATCH', phoneOk ? 'match' : 'MISMATCH', siteOk === null ? 'n/a' : (siteOk ? 'match' : 'MISMATCH')]);
    });
    var dlCard = document.createElement('div');
    dlCard.className = 'result-card';
    dlCard.innerHTML = '<div class="r-name">Report</div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download CSV report</button>';
    dlCard.querySelector('.r-stats').textContent = full + ' of ' + blocks.length + ' listings fully consistent.';
    dlCard.querySelector('button').addEventListener('click', function(){
      var csv = 'listing,name,address,phone,website\n' + rows.map(function(r){ return r.map(function(c){ return '"' + c.replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
      ToolPro.download(URL.createObjectURL(new Blob([csv], { type: 'text/csv' })), 'nap-consistency-report.csv');
    });
    gridEl.appendChild(dlCard);
    progBar.style.width = '100%';
    summaryEl.textContent = '🎉 ' + full + ' of ' + blocks.length + ' listings fully match your canonical NAP. ' + (full === blocks.length ? 'Nothing to fix.' : (blocks.length - full) + ' listing' + (blocks.length - full > 1 ? 's' : '') + ' need' + (blocks.length - full > 1 ? '' : 's') + ' correcting — fix the flagged fields first.');
    setTimeout(function(){ progWrap.classList.remove('show'); }, 300);
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('NAP check complete', 'ok');
  });
  refresh();
})();
</script>

## How it works

Type your one canonical name, address, phone number, and website, then paste each directory listing as its own block separated by a blank line. The checker normalizes everything first — "St." and "Street" count as the same, punctuation is ignored, and phone numbers are compared by digits only — then reports each field as a match or a mismatch per listing. Download the CSV report to hand to whoever fixes the listings.

## Everyday uses

- **New business launches** — confirm every directory went live with the right details.
- **Moves and rebrands** — find the listings still showing the old address or number.
- **Agency audits** — run a client's whole listing set through one check.
- **Franchise checks** — verify each location's listings separately.
- **Quarterly hygiene** — re-run the check every few months to catch drift early.
