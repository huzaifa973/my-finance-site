---
title: "Free Redirect Checker & 301 Rule Generator — Test and Migrate URLs"
description: "Check where a URL ends up and generate 301 redirect rules for Cloudflare, Netlify, .htaccess and nginx from a bulk mapping table. Free, no sign-up, in-browser."
category: seo
date: 2026-10-19
draft: false
---

Two tools in one. **Part A** checks a single URL and reports its final destination after redirects. **Part B** turns a bulk old→new URL mapping table into ready-to-paste 301 rules for Cloudflare Bulk Redirects, Netlify `_redirects`, Apache `.htaccess`, and nginx. Everything runs in your browser.

<div class="tool-shell" id="rdcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 4V1L7 6l5 5V7c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6H4c0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Redirect Checker &amp; Rule Generator</h2>
<p>Test where a URL lands, then generate 301 rules for Cloudflare, Netlify, Apache &amp; nginx.</p>
</div>
<button type="button" class="theme-toggle" id="rdcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> A — Check one URL · B — Paste your mapping table</p>
<label class="t-label" for="rdcUrl" style="display:block;margin:.4rem 0 .3rem;font-weight:700">Part A: URL to check</label>
<input type="text" id="rdcUrl" class="tool-input" placeholder="https://example.com/old-page/">
<div class="hint">The browser follows redirects automatically and reports the final landing URL.</div>
<label class="t-label" for="rdcMap" style="display:block;margin:.8rem 0 .3rem;font-weight:700">Part B: old → new mapping — one pair per line, comma-separated</label>
<textarea id="rdcMap" class="tool-input" rows="7" placeholder="/old-page-1/, https://example.com/new-page-1/&#10;/blog/2019/post/, https://example.com/blog/post/&#10;https://oldsite.com/a, https://newsite.com/a"></textarea>
<div class="hint">Old URLs can be paths (/old/) or full URLs — paths are matched against your domain.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Rule options</p>
<div class="settings-panel">
<div class="preset-row" id="rdcPresets">
<button type="button" class="preset-chip active" data-wild="0">📄 Exact-match rules</button>
<button type="button" class="preset-chip" data-wild="1">🌊 Keep subpaths (wildcard)</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Cloudflare Bulk Redirect CSV</span><label class="toggle"><input type="checkbox" id="rdcCF" checked><span class="track"></span></label></div>
<div class="hint">Source URL, Target URL, Status 301, Preserve query string — upload in the Cloudflare dashboard.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Netlify _redirects</span><label class="toggle"><input type="checkbox" id="rdcNet" checked><span class="track"></span></label></div>
<div class="hint">Plain-text format for Netlify / Cloudflare Pages style deploys.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Apache .htaccess</span><label class="toggle"><input type="checkbox" id="rdcHt" checked><span class="track"></span></label></div>
<div class="hint">mod_rewrite rules — paste inside your site's .htaccess.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">nginx rewrite rules</span><label class="toggle"><input type="checkbox" id="rdcNgx" checked><span class="track"></span></label></div>
<div class="hint">location blocks with return 301 — for nginx server configs.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Check &amp; generate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rdcCheckBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Check Redirect
</button>
<button type="button" class="btn-pro" id="rdcGenBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate 301 Rules
</button>
</div>
<div class="progress-wrap" id="rdcProgWrap">
<div class="progress-bar"><i id="rdcProgBar"></i></div>
<div class="progress-text" id="rdcProgText">Working…</div>
</div>
<div class="results" id="rdcResults">
<p class="result-head">Results</p>
<div class="result-summary" id="rdcSummary"></div>
<div class="result-grid" id="rdcGrid"></div>
<div class="result-card" style="margin-top:1rem">
<div class="r-name">⚠️ Honest limitation (Part A)</div>
<div class="r-stats">Browsers hide the intermediate redirect chain for security — this tool can only show the <b>final</b> destination URL and whether a redirect happened, not each hop or its status codes. For the full chain, use server logs or a terminal: <b>curl -IL https://example.com/old/</b>.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Check URLs and generate migration rules as often as you like — all in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rdcShell');
  ToolPro.themeToggle(shell, document.getElementById('rdcTheme'));

  var urlEl = document.getElementById('rdcUrl');
  var mapEl = document.getElementById('rdcMap');
  var checkBtn = document.getElementById('rdcCheckBtn');
  var genBtn = document.getElementById('rdcGenBtn');
  var wild = false;

  document.getElementById('rdcPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('rdcPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    wild = chip.dataset.wild === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    checkBtn.disabled = !urlEl.value.trim();
    genBtn.disabled = !mapEl.value.trim();
  }
  urlEl.addEventListener('input', refresh);
  mapEl.addEventListener('input', refresh);

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  function outCard(title, sub, text, tid){
    var div = document.createElement('div');
    div.className = 'result-card';
    var name = document.createElement('div'); name.className = 'r-name'; name.textContent = title;
    var stats = document.createElement('div'); stats.className = 'r-stats'; stats.textContent = sub;
    var ta = document.createElement('textarea'); ta.className = 'tool-output'; ta.rows = 7; ta.readOnly = true; ta.value = text;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'btn-pro-outline';
    b.textContent = '📋 Copy'; b.style.marginTop = '.5rem';
    b.addEventListener('click', function(){
      var done = function(){ ToolPro.toast(title + ' copied', 'ok'); };
      if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(ta.value).then(done, function(){ ta.select(); document.execCommand('copy'); done(); }); }
      else { ta.select(); document.execCommand('copy'); done(); }
    });
    div.appendChild(name); div.appendChild(stats); div.appendChild(ta); div.appendChild(b);
    return div;
  }

  checkBtn.addEventListener('click', async function(){
    var input = urlEl.value.trim();
    var grid = document.getElementById('rdcGrid');
    var resBox = document.getElementById('rdcResults');
    var url;
    try { url = new URL(input.startsWith('http') ? input : 'https://' + input).href; }
    catch(e){ ToolPro.toast('That does not look like a valid URL', 'err'); return; }
    checkBtn.disabled = true;
    ToolPro.toast('Fetching — following redirects…');
    try {
      var r = await fetch(url, { redirect: 'follow' });
      var finalUrl = r.url;
      var redirected = finalUrl.replace(/\/$/, '') !== url.replace(/\/$/, '');
      grid.innerHTML = '';
      var div = document.createElement('div'); div.className = 'result-card';
      div.innerHTML = '<div class="r-name">' + (redirected ? '↪️ Redirect detected' : '✅ No redirect — direct hit') + '</div>' +
        '<div class="r-stats"><b>Started at:</b> ' + esc(url) + '<br><b>Final URL:</b> ' + esc(finalUrl) +
        '<br><b>Final status:</b> HTTP ' + r.status + ' ' + esc(r.statusText || '') + '</div>';
      grid.appendChild(div);
      document.getElementById('rdcSummary').textContent = redirected ? 'The URL redirects to a different destination (see above).' : 'The URL loads directly with no redirect.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch(e){
      ToolPro.toast('Fetch blocked (CORS or network) — the target site does not allow cross-origin reads', 'err');
    }
    refresh();
  });

  genBtn.addEventListener('click', function(){
    var lines = mapEl.value.split(/\r?\n/);
    var pairs = [];
    lines.forEach(function(l, i){
      var t = l.trim(); if(!t) return;
      var parts = t.split(',');
      if(parts.length < 2){
        ToolPro.toast('Line ' + (i+1) + ' skipped — needs old, new separated by a comma', 'err');
        return;
      }
      pairs.push({ old: parts[0].trim(), nw: parts.slice(1).join(',').trim() });
    });
    if(!pairs.length){ ToolPro.toast('No valid pairs found', 'err'); return; }
    var grid = document.getElementById('rdcGrid');
    var resBox = document.getElementById('rdcResults');
    grid.innerHTML = '';

    var w = wild ? '/*' : '';
    if(document.getElementById('rdcCF').checked){
      var csv = 'Source URL,Target URL,Status,Preserve query string,Include subpaths,Subpath matching,Preserve path suffix\n';
      pairs.forEach(function(p){ csv += '"' + p.old + '","' + p.nw + '",301,Yes,' + (wild ? 'Yes,Yes,No' : 'No,No,No') + '\n'; });
      grid.appendChild(outCard('Cloudflare Bulk Redirect CSV', pairs.length + ' rules — upload at Rules → Redirect Rules → Bulk Redirects', csv));
    }
    if(document.getElementById('rdcNet').checked){
      var net = pairs.map(function(p){ return p.old + w + '  ' + p.nw + (wild ? '/:splat' : '') + '  301!'; }).join('\n');
      grid.appendChild(outCard('Netlify _redirects', 'Save as _redirects in your publish directory', net));
    }
    if(document.getElementById('rdcHt').checked){
      var ht = '# 301 redirects — generated by DollarWise\n<IfModule mod_rewrite.c>\nRewriteEngine On\n' +
        pairs.map(function(p){
          var src = p.old.replace(/^https?:\/\/[^/]+/i, '');
          src = src.replace(/[.?+^${}()|[\]\\]/g, '\\$&');
          return 'RewriteRule ^' + src.replace(/^\//, '') + (wild ? '(.*)$' : '$') + ' ' + p.nw + (wild ? '$1' : '') + ' [R=301,L]';
        }).join('\n') + '\n</IfModule>';
      grid.appendChild(outCard('Apache .htaccess', 'Paste inside your site .htaccess (requires mod_rewrite)', ht));
    }
    if(document.getElementById('rdcNgx').checked){
      var ngx = '# 301 redirects — generated by DollarWise\n' +
        pairs.map(function(p){
          var src = p.old.replace(/^https?:\/\/[^/]+/i, '') || '/';
          if(wild){ return 'location ~ ^' + src.replace(/\/$/, '') + '/(.*)$ {\n  return 301 ' + p.nw.replace(/\/$/, '') + '/$1;\n}'; }
          return 'location = ' + src + ' {\n  return 301 ' + p.nw + ';\n}';
        }).join('\n\n');
      grid.appendChild(outCard('nginx rewrite rules', 'Paste inside your server { } block, then nginx -s reload', ngx));
    }
    document.getElementById('rdcSummary').textContent = '✅ ' + pairs.length + ' redirect rule' + (pairs.length === 1 ? '' : 's') + ' generated — test on staging before going live.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Rules generated', 'ok');
  });

  refresh();
})();
</script>

## How it works

**Part A** uses the browser's `fetch()` with `redirect: 'follow'` — the browser walks the whole redirect chain itself, and the tool reads `response.url` (the final destination) and the final HTTP status. **Honest limitation:** browsers deliberately hide the intermediate hops (each 301/302 and its Location header) from JavaScript, so you get the start and the end, not the middle. Cross-origin fetches can also be blocked by the target site's CORS policy.

**Part B** is pure text generation — no network needed. It parses your old→new table and emits the exact syntax each platform expects: Cloudflare's Bulk Redirect CSV columns, Netlify's `_redirects` triple format, Apache `RewriteRule` directives, and nginx `location` blocks with `return 301`. The wildcard preset appends subpath matching so `/blog/*` follows to the new location.

## Everyday uses

- **Site migrations** — map hundreds of old URLs to new ones and deploy rules on any platform.
- **HTTPS/www cleanup** — verify your canonical redirects actually land where you think.
- **Broken backlinks** — check what a dead link resolves to before asking for a link update.
- **Platform switches** — moving WordPress → static or vice versa? Generate the rule set in one paste.
- **SEO audits** — confirm redirect chains resolve instead of looping or 404ing.
