---
title: "Local Business Citation Builder — Free NAP Citations for Google, Yelp & More"
description: "Build consistent local business citations for Google, Yelp, Bing and Apple Maps from one NAP form — copy-ready, free, and private in your browser."
category: seo
date: 2026-10-27
draft: false
---

Local citations — consistent mentions of your business name, address, and phone number across directories — are one of the simplest local SEO wins. Type your details once and this builder formats them for Google Business Profile, Yelp, Bing Places, and Apple Maps, so every listing matches exactly. Consistent NAP details help search engines trust your business and help customers actually find you. Everything runs in your browser; nothing is sent anywhere.

<div class="tool-shell" id="cbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Citation Builder</h2>
<p>One NAP form, perfectly formatted citations for Google, Yelp, Bing &amp; Apple Maps.</p>
</div>
<button type="button" class="theme-toggle" id="cbTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your business details</p>
<div class="settings-grid">
<div class="setting">
<label for="cbName">Business name *</label>
<input type="text" id="cbName" class="tool-input" placeholder="e.g. Maple Street Bakery" autocomplete="off">
</div>
<div class="setting">
<label for="cbAddress">Street address</label>
<input type="text" id="cbAddress" class="tool-input" placeholder="e.g. 12 Maple Street, Springfield, IL 62701" autocomplete="off">
</div>
<div class="setting">
<label for="cbPhone">Phone</label>
<input type="text" id="cbPhone" class="tool-input" placeholder="e.g. (555) 123-4567" autocomplete="off">
</div>
<div class="setting">
<label for="cbSite">Website</label>
<input type="text" id="cbSite" class="tool-input" placeholder="e.g. https://maplestreetbakery.com" autocomplete="off">
</div>
<div class="setting">
<label for="cbHours">Hours</label>
<input type="text" id="cbHours" class="tool-input" placeholder="e.g. Mon–Fri 8am–6pm, Sat 9am–2pm" autocomplete="off">
</div>
<div class="setting">
<label for="cbCat">Business category</label>
<input type="text" id="cbCat" class="tool-input" placeholder="e.g. Bakery" autocomplete="off">
</div>
</div>
<div class="hint">Use the exact same spelling, abbreviations, and phone format everywhere — consistency is the whole point of a citation.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Citation options</p>
<div class="settings-panel">
<div class="preset-row" id="cbPresets">
<button type="button" class="preset-chip active" data-mode="full">📋 Full — name, address, phone, site, hours</button>
<button type="button" class="preset-chip" data-mode="nap">📌 NAP only — name, address, phone</button>
<button type="button" class="preset-chip" data-mode="minimal">📞 Name + phone only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="cbGoogle" checked><span></span> Google Business Profile</label>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="cbYelp" checked><span></span> Yelp</label>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="cbBing" checked><span></span> Bing Places</label>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="cbApple" checked><span></span> Apple Maps</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; copy citations</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cbBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
Generate Citations
</button>
<button type="button" class="btn-pro-outline" id="cbClear">Clear</button>
</div>
<div class="progress-wrap" id="cbProgWrap">
<div class="progress-bar"><i id="cbProgBar"></i></div>
<div class="progress-text" id="cbProgText">Generating…</div>
</div>
<div class="results" id="cbResults">
<p class="result-head">✅ Your citations — copy each one into its directory</p>
<div class="result-summary" id="cbSummary"></div>
<div class="result-grid" id="cbGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Build citations for every location you manage — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('cbShell');
  ToolPro.themeToggle(shell, document.getElementById('cbTheme'));
  var nameEl = document.getElementById('cbName');
  var addrEl = document.getElementById('cbAddress');
  var phoneEl = document.getElementById('cbPhone');
  var siteEl = document.getElementById('cbSite');
  var hoursEl = document.getElementById('cbHours');
  var catEl = document.getElementById('cbCat');
  var btn = document.getElementById('cbBtn');
  var clearBtn = document.getElementById('cbClear');
  var presets = document.getElementById('cbPresets');
  var mode = 'full';
  var grid = document.getElementById('cbGrid');
  var resBox = document.getElementById('cbResults');
  var summaryEl = document.getElementById('cbSummary');
  function refresh(){
    btn.disabled = !nameEl.value.trim();
  }
  nameEl.addEventListener('input', refresh);
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    ToolPro.toast('Format: ' + chip.textContent.trim());
  });
  clearBtn.addEventListener('click', function(){
    [nameEl, addrEl, phoneEl, siteEl, hoursEl, catEl].forEach(function(el){ el.value = ''; });
    grid.innerHTML = ''; resBox.classList.remove('show'); refresh();
  });
  function linesFor(dir){
    var name = nameEl.value.trim();
    var addr = addrEl.value.trim();
    var phone = phoneEl.value.trim();
    var site = siteEl.value.trim();
    var hours = hoursEl.value.trim();
    var cat = catEl.value.trim();
    var out = [];
    if(dir === 'google'){
      out.push(name);
      if(cat) out.push('Category: ' + cat);
      if(addr) out.push(addr);
      if(mode !== 'minimal' && phone) out.push('Phone: ' + phone);
      if(mode === 'full' && site) out.push('Website: ' + site);
      if(mode === 'full' && hours) out.push('Hours: ' + hours);
    } else if(dir === 'yelp'){
      out.push(name + (cat ? ' — ' + cat : ''));
      if(addr) out.push(addr);
      if(mode !== 'minimal' && phone) out.push(phone);
      if(mode === 'full' && site) out.push(site);
      if(mode === 'full' && hours) out.push('Hours: ' + hours);
    } else if(dir === 'bing'){
      out.push(name);
      if(addr) out.push(addr);
      if(mode !== 'minimal' && phone) out.push('Phone: ' + phone);
      if(mode === 'full' && site) out.push('Website: ' + site);
      if(mode === 'full' && hours) out.push('Business hours: ' + hours);
    } else {
      out.push(name);
      if(addr) out.push(addr);
      if(mode !== 'minimal' && phone) out.push(phone);
      if(mode === 'full' && site) out.push(site);
      if(mode === 'full' && hours) out.push('Hours: ' + hours);
    }
    return out.join('\n');
  }
  btn.addEventListener('click', function(){
    if(!nameEl.value.trim()){ ToolPro.toast('Enter your business name first.', 'err'); return; }
    var dirs = [
      { id: 'google', label: 'Google Business Profile', on: document.getElementById('cbGoogle').checked },
      { id: 'yelp', label: 'Yelp', on: document.getElementById('cbYelp').checked },
      { id: 'bing', label: 'Bing Places', on: document.getElementById('cbBing').checked },
      { id: 'apple', label: 'Apple Maps', on: document.getElementById('cbApple').checked }
    ].filter(function(d){ return d.on; });
    if(!dirs.length){ ToolPro.toast('Tick at least one directory.', 'err'); return; }
    var progWrap = document.getElementById('cbProgWrap');
    progWrap.classList.add('show');
    document.getElementById('cbProgBar').style.width = '60%';
    grid.innerHTML = '';
    dirs.forEach(function(d){
      var text = linesFor(d.id);
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><pre class="r-stats" style="white-space:pre-wrap;"></pre><button type="button" class="btn-pro">📋 Copy citation</button>';
      card.querySelector('.r-name').textContent = d.label;
      card.querySelector('pre').textContent = text;
      (function(t){
        card.querySelector('button').addEventListener('click', function(){ ToolPro.copyText(t, 'Citation copied to clipboard'); });
      })(text);
      grid.appendChild(card);
    });
    document.getElementById('cbProgBar').style.width = '100%';
    summaryEl.textContent = '🎉 ' + dirs.length + ' citation' + (dirs.length === 1 ? '' : 's') + ' ready — paste each one exactly as shown so every listing matches.';
    setTimeout(function(){ progWrap.classList.remove('show'); }, 300);
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Citations generated', 'ok');
  });
  refresh();
})();
</script>

## How it works

Enter your business name, address, phone, website, hours, and category once, pick a format (Full, NAP only, or Name + phone), and tick the directories you need. The builder formats one citation per directory — each tuned to how that directory displays listings — with its own copy button. Paste each citation exactly as shown; changing abbreviations or phone formats between directories weakens the consistency search engines look for.

## Everyday uses

- **New businesses** — get listed consistently on day one instead of fixing mismatches later.
- **Multi-location brands** — generate one clean citation set per branch.
- **Agencies and freelancers** — hand clients copy-ready listings without retyping NAP details four times.
- **Rebrands and moves** — rebuild every citation from one corrected form after an address or phone change.
- **Audits** — compare what directories currently show against one canonical version.

**Rule of thumb:** pick one exact format for your name, address, and phone — "St." vs "Street" matters — and use it everywhere, forever.
