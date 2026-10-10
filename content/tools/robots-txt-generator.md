---
title: "Free robots.txt Generator — Build It in Seconds"
description: "Create a valid robots.txt file in seconds: add allow/disallow rules for any crawler, set crawl-delay, link your sitemap. Validated output, copy or download free."
category: seo
date: 2026-10-10
draft: false
---

A robots.txt file tells search engines which parts of your site they may crawl. One wrong slash can accidentally block your entire site — or leave admin pages wide open. Add your rules row by row, pick a preset for common setups, and get a clean, validated robots.txt to upload to your site root. Everything runs in your browser.

<div class="tool-shell" id="rbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>robots.txt Generator</h2>
<p>Build crawler rules in seconds — allow/disallow paths, crawl-delay &amp; sitemap.</p>
</div>
<button type="button" class="theme-toggle" id="rbTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Crawler rules</p>
<div id="rbRows"></div>
<div class="tool-actions" style="margin-top:.75rem;">
<button type="button" class="btn-pro-outline" id="rbAddRule">➕ Add rule</button>
</div>
<div class="hint" style="margin-top:.5rem;">Each row: the crawler (use * for all), allow or disallow, and the path. Example: Disallow <b>/wp-admin/</b> blocks the WordPress admin area.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Options &amp; presets</p>
<div class="settings-panel">
<div class="preset-row" id="rbPresets">
<button type="button" class="preset-chip" data-p="blog">📝 Blog — block admin</button>
<button type="button" class="preset-chip" data-p="store">🛒 Store — block checkout</button>
<button type="button" class="preset-chip" data-p="open">🌍 Open — allow everything</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="rbSitemap">Sitemap URL</label>
<input type="text" id="rbSitemap" class="tool-input" placeholder="https://example.com/sitemap.xml">
<div class="hint">Tells crawlers exactly where your sitemap lives.</div>
</div>
<div class="setting">
<label for="rbDelay">Crawl-delay: <span class="val" id="rbDelayVal">0 (off)</span></label>
<input type="range" id="rbDelay" min="0" max="30" step="1" value="0">
<div class="hint">Seconds between crawler requests. Use 5–10 only if bots overload your server.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Include sitemap line</span><label class="toggle"><input type="checkbox" id="rbTogSitemap" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rbBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/></svg>
Generate robots.txt
</button>
<button type="button" class="btn-pro-outline" id="rbCopy" disabled>📋 Copy</button>
<button type="button" class="btn-pro-outline" id="rbDl" disabled>⬇ Download robots.txt</button>
</div>
<div class="progress-wrap" id="rbProgWrap">
<div class="progress-bar"><i id="rbProgBar"></i></div>
<div class="progress-text" id="rbProgText">Working…</div>
</div>
<div class="results" id="rbResults">
<p class="result-head">✅ Your robots.txt</p>
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;">
<textarea id="rbOut" class="tool-output" rows="12" readonly placeholder="Your robots.txt will appear here…"></textarea>
</div>
</div>
<div class="result-summary" id="rbSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — upload the file to your site's root folder (e.g. yourdomain.com/robots.txt).</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rbShell');
  ToolPro.themeToggle(shell, document.getElementById('rbTheme'));

  var rowsEl = document.getElementById('rbRows');
  var btn = document.getElementById('rbBtn');
  var copyBtn = document.getElementById('rbCopy');
  var dlBtn = document.getElementById('rbDl');
  var presets = document.getElementById('rbPresets');
  var sitemapInput = document.getElementById('rbSitemap');
  var delayRange = document.getElementById('rbDelay');
  var delayVal = document.getElementById('rbDelayVal');
  var togSitemap = document.getElementById('rbTogSitemap');

  ToolPro.bindSlider(delayRange, delayVal, function(v){ return v === '0' ? '0 (off)' : v + ' sec'; });

  var rowCount = 0;
  function addRow(agent, action, path){
    rowCount++;
    var id = 'rbr' + rowCount;
    var div = document.createElement('div');
    div.className = 'settings-panel';
    div.style.marginBottom = '.75rem';
    div.innerHTML =
      '<div class="settings-grid" style="grid-template-columns:1.2fr 1fr 1.4fr auto;">' +
      '<div class="setting"><label>User-agent</label>' +
      '<input type="text" class="tool-input rb-agent" value="*"></div>' +
      '<div class="setting"><label>Action</label>' +
      '<select class="rb-action"><option value="Disallow">Disallow</option><option value="Allow">Allow</option></select></div>' +
      '<div class="setting"><label>Path</label>' +
      '<input type="text" class="tool-input rb-path" placeholder="/private/"></div>' +
      '<div class="setting"><label>&nbsp;</label>' +
      '<button type="button" class="btn-pro-outline rb-remove" aria-label="Remove rule">✕</button></div>' +
      '</div>';
    if(agent !== undefined) div.querySelector('.rb-agent').value = agent;
    if(action !== undefined) div.querySelector('.rb-action').value = action;
    if(path !== undefined) div.querySelector('.rb-path').value = path;
    div.querySelector('.rb-remove').addEventListener('click', function(){
      div.remove(); refreshButtons();
    });
    ['input', 'change'].forEach(function(ev){
      div.addEventListener(ev, refreshButtons);
    });
    rowsEl.appendChild(div);
    refreshButtons();
  }

  document.getElementById('rbAddRule').addEventListener('click', function(){ addRow(); });

  function currentRules(){
    var rules = [];
    rowsEl.querySelectorAll('.settings-panel').forEach(function(div){
      var agent = div.querySelector('.rb-agent').value.trim() || '*';
      var action = div.querySelector('.rb-action').value;
      var path = div.querySelector('.rb-path').value.trim();
      rules.push({ agent: agent, action: action, path: path });
    });
    return rules;
  }

  function refreshButtons(){
    var rules = currentRules();
    var sm = togSitemap.checked && sitemapInput.value.trim();
    btn.disabled = !(rules.length || sm);
  }
  sitemapInput.addEventListener('input', refreshButtons);
  togSitemap.addEventListener('change', refreshButtons);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    rowsEl.innerHTML = '';
    var p = chip.dataset.p;
    if(p === 'blog'){
      addRow('*', 'Disallow', '/wp-admin/');
      addRow('*', 'Allow', '/wp-admin/admin-ajax.php');
    } else if(p === 'store'){
      addRow('*', 'Disallow', '/cart/');
      addRow('*', 'Disallow', '/checkout/');
      addRow('*', 'Disallow', '/my-account/');
    } else if(p === 'open'){
      addRow('*', 'Allow', '/');
    }
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function buildRobots(){
    var lines = [];
    var groups = {};
    currentRules().forEach(function(r){
      if(!groups[r.agent]) groups[r.agent] = [];
      groups[r.agent].push(r);
    });
    Object.keys(groups).forEach(function(agent){
      lines.push('User-agent: ' + agent);
      groups[agent].forEach(function(r){
        lines.push(r.action + ': ' + (r.path || ''));
      });
      var delay = parseInt(delayRange.value, 10);
      if(delay > 0) lines.push('Crawl-delay: ' + delay);
      lines.push('');
    });
    var sm = sitemapInput.value.trim();
    if(togSitemap.checked && sm) lines.push('Sitemap: ' + sm);
    return lines.join('\n').trim() + '\n';
  }

  function validate(rules){
    var warns = [];
    rules.forEach(function(r){
      if(r.action === 'Disallow' && r.path === '/'){
        warns.push('⚠️ You disallow "/" for "' + r.agent + '" — this blocks your ENTIRE site from search engines.');
      }
      if(r.path && r.path.charAt(0) !== '/'){
        warns.push('⚠️ Path "' + r.path + '" should start with a "/".');
      }
    });
    return warns;
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('rbProgWrap');
    var progBar = document.getElementById('rbProgBar');
    var resBox = document.getElementById('rbResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('rbProgText').textContent = 'Building robots.txt…';
    setTimeout(function(){
      var txt = buildRobots();
      document.getElementById('rbOut').value = txt;
      var rules = currentRules();
      var warns = validate(rules);
      var msg = '🎉 ' + rules.length + (rules.length === 1 ? ' rule' : ' rules') + ' generated.';
      if(togSitemap.checked && sitemapInput.value.trim()) msg += ' Sitemap line included.';
      if(warns.length) msg += ' ' + warns.join(' ');
      else msg += ' ✅ No common mistakes detected.';
      document.getElementById('rbSummary').textContent = msg;
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = false; dlBtn.disabled = false;
      ToolPro.toast('robots.txt generated', 'ok');
    }, 350);
  });

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(document.getElementById('rbOut').value, 'robots.txt copied to clipboard');
  });

  dlBtn.addEventListener('click', function(){
    var url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(document.getElementById('rbOut').value);
    ToolPro.download(url, 'robots.txt');
    ToolPro.toast('robots.txt downloaded', 'ok');
  });

  addRow('*', 'Disallow', '/wp-admin/');
  addRow('*', 'Allow', '/wp-admin/admin-ajax.php');
  refreshButtons();
})();
</script>

## How it works

1. **Add crawler rules** — each row is a user-agent (use `*` for all crawlers), an Allow/Disallow action and a path. Use the presets for blogs, stores or a fully open site.
2. **Set options** — link your sitemap URL and, only if needed, a crawl-delay to slow aggressive bots.
3. **Generate & download** — the tool assembles a valid robots.txt, checks for common mistakes (like accidentally blocking your whole site), and lets you copy or download it. Upload it to your site's root: `yourdomain.com/robots.txt`.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Bloggers** — block admin and login pages while keeping posts fully crawlable.
- **Online stores** — keep cart, checkout and account pages out of search results.
- **Developers** — ship every new site with a correct robots.txt instead of an empty one.
- **SEOs** — audit client robots.txt files for the classic "Disallow: /" disaster before it tanks traffic.
- **Site owners** — point crawlers at your sitemap so new pages get discovered faster.

**Rule of thumb:** remember robots.txt is a polite request, not security — crawlers obey it voluntarily. Never rely on it to hide truly sensitive content; use passwords or noindex for that.
