---
title: "Free Open Graph Debugger — Validate OG & Twitter Card Tags Online"
description: "Paste your page's HTML head to validate Open Graph and Twitter Card meta tags, catch missing images, and preview the social share card. Free, private."
category: seo
date: 2026-10-23
draft: false
---

Broken social previews cost you clicks — a missing `og:image` or a relative image URL and your link looks dead on Facebook, X, and LinkedIn. Paste your page's `<head>` HTML below and this debugger validates every Open Graph and Twitter Card tag, flags what's missing or malformed, and renders a live preview of how the share card will look. Nothing is uploaded or fetched.

<div class="tool-shell" id="ogdShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Open Graph Debugger</h2>
<p>Validate OG &amp; Twitter Card tags and preview your social share card — instantly.</p>
</div>
<button type="button" class="theme-toggle" id="ogdTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your page's &lt;head&gt; HTML</p>
<div class="setting">
<label for="ogdInput">HTML markup</label>
<textarea id="ogdInput" class="tool-input" rows="8" placeholder="Paste the contents of your page's <head>… — all <meta> tags will be scanned automatically"></textarea>
</div>
<div class="hint">Open the page, right-click → View page source, copy the section between &lt;head&gt; and &lt;/head&gt;, paste it here.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Validation settings</p>
<div class="settings-panel">
<div class="preset-row" id="ogdPresets">
<button type="button" class="preset-chip active" data-strict="0">✅ Essential tags only</button>
<button type="button" class="preset-chip" data-strict="1">🔍 Full social check</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Require absolute URLs</span><label class="toggle"><input type="checkbox" id="ogdAbs" checked><span class="track"></span></label></div>
<div class="hint">Social crawlers need full https:// URLs — relative paths break share cards.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Require secure (https) URLs</span><label class="toggle"><input type="checkbox" id="ogdHttps" checked><span class="track"></span></label></div>
<div class="hint">http:// og:image URLs are blocked or downgraded on most platforms.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Check twitter:card explicitly</span><label class="toggle"><input type="checkbox" id="ogdTw" checked><span class="track"></span></label></div>
<div class="hint">X falls back to OG tags, but an explicit summary_large_image card renders better.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate &amp; preview</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ogdBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/></svg>
Validate Tags
</button>
<button type="button" class="btn-pro-outline" id="ogdClear" disabled>Clear</button>
</div>
<div class="results" id="ogdResults">
<p class="result-head">🔎 Validation results</p>
<div class="result-summary" id="ogdSummary"></div>
<div class="result-grid" id="ogdGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — debug as many pages as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ogdShell');
  ToolPro.themeToggle(shell, document.getElementById('ogdTheme'));
  var input = document.getElementById('ogdInput');
  var btn = document.getElementById('ogdBtn');
  var clearBtn = document.getElementById('ogdClear');
  var presets = document.getElementById('ogdPresets');
  var resBox = document.getElementById('ogdResults');
  var summaryEl = document.getElementById('ogdSummary');
  var gridEl = document.getElementById('ogdGrid');
  var strict = false;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    strict = chip.dataset.strict === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var has = input.value.trim().length > 0;
    btn.disabled = !has;
    clearBtn.disabled = !has && !gridEl.children.length;
  }
  input.addEventListener('input', refresh);

  clearBtn.addEventListener('click', function(){
    input.value = ''; gridEl.innerHTML = ''; summaryEl.textContent = '';
    resBox.classList.remove('show'); refresh();
  });

  function parseMeta(html){
    var tags = [], re = /<meta\b[^>]*>/gi, m;
    while((m = re.exec(html))){
      var tag = m[0];
      var prop = attrVal(tag, 'property') || attrVal(tag, 'name');
      var content = attrVal(tag, 'content');
      if(prop) tags.push({ prop: prop.toLowerCase(), content: content });
    }
    return tags;
  }
  function attrVal(tag, attr){
    var re = new RegExp(attr + '\\s*=\\s*("([^"]*)"|\'([^\']*)\'|([^\\s>]+))', 'i');
    var mm = re.exec(tag);
    return mm ? (mm[2] || mm[3] || mm[4] || '') : '';
  }
  function esc(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function first(tags, prop){
    for(var i = 0; i < tags.length; i++){
      if(tags[i].prop === prop) return tags[i].content;
    }
    return '';
  }

  btn.addEventListener('click', function(){
    var tags = parseMeta(input.value);
    var reqAbs = document.getElementById('ogdAbs').checked;
    var reqHttps = document.getElementById('ogdHttps').checked;
    var checkTw = document.getElementById('ogdTw').checked;
    if(!tags.length){ ToolPro.toast('No <meta> tags found — paste your page source.', 'err'); return; }

    var rows = [];   // {icon, level: ok|warn|fail, text}
    function need(prop, label){
      var v = first(tags, prop);
      if(!v){ rows.push({ icon: '❌', level: 'fail', text: label + ' is MISSING — add <meta property="' + prop + '">.' }); return ''; }
      rows.push({ icon: '✅', level: 'ok', text: label + ' present.' });
      return v;
    }
    function urlCheck(v, label){
      if(!v) return;
      if(reqAbs && !/^https?:\/\//i.test(v)){
        rows.push({ icon: '⚠️', level: 'warn', text: label + ' uses a relative URL — social crawlers need an absolute URL.' });
      } else if(reqHttps && /^http:\/\//i.test(v)){
        rows.push({ icon: '⚠️', level: 'warn', text: label + ' uses http:// — switch to https:// to avoid blocked images.' });
      }
    }

    var title = need('og:title', 'og:title');
    var type = need('og:type', 'og:type');
    var image = need('og:image', 'og:image');
    var url = need('og:url', 'og:url');
    urlCheck(image, 'og:image');
    urlCheck(url, 'og:url');

    var desc = first(tags, 'og:description');
    if(!desc) rows.push({ icon: '⚠️', level: 'warn', text: 'og:description is missing — platforms will grab random body text instead.' });
    else if(desc.length > 200) rows.push({ icon: '⚠️', level: 'warn', text: 'og:description is ' + desc.length + ' chars — keep it under ~200 so it is not truncated.' });
    else rows.push({ icon: '✅', level: 'ok', text: 'og:description present (' + desc.length + ' chars).' });

    if(strict){
      var site = first(tags, 'og:site_name');
      if(!site) rows.push({ icon: '⚠️', level: 'warn', text: 'og:site_name missing — branding the site name strengthens share cards.' });
      else rows.push({ icon: '✅', level: 'ok', text: 'og:site_name present.' });
      if(!first(tags, 'og:image:width')) rows.push({ icon: '⚠️', level: 'warn', text: 'og:image:width/height missing — explicit dimensions speed up card rendering.' });
      else rows.push({ icon: '✅', level: 'ok', text: 'og:image dimensions declared.' });
    }

    if(checkTw){
      var twCard = first(tags, 'twitter:card');
      if(!twCard) rows.push({ icon: '⚠️', level: 'warn', text: 'twitter:card missing — add summary_large_image for big X previews (X falls back to OG tags otherwise).' });
      else if(!/^summary/.test(twCard)) rows.push({ icon: '⚠️', level: 'warn', text: 'twitter:card is "' + esc(twCard) + '" — use summary_large_image for full-bleed images.' });
      else rows.push({ icon: '✅', level: 'ok', text: 'twitter:card set to ' + esc(twCard) + '.' });
    }

    var dups = {};
    tags.forEach(function(t){ dups[t.prop] = (dups[t.prop] || 0) + 1; });
    Object.keys(dups).forEach(function(p){
      if(dups[p] > 1) rows.push({ icon: '⚠️', level: 'warn', text: p + ' appears ' + dups[p] + '× — crawlers may use the first or last one unpredictably.' });
    });

    var fails = rows.filter(function(r){ return r.level === 'fail'; }).length;
    var warns = rows.filter(function(r){ return r.level === 'warn'; }).length;

    gridEl.innerHTML = '';
    var list = document.createElement('div');
    list.className = 'result-card';
    list.innerHTML = '<div class="r-name">Tag checks — ' + tags.length + ' meta tags scanned</div>';
    var ul = document.createElement('ul');
    ul.style.cssText = 'margin:.6rem 0 0;padding:0;list-style:none;text-align:left;';
    rows.forEach(function(r){
      var li = document.createElement('li');
      li.style.cssText = 'margin:.35rem 0;font-size:.92rem;line-height:1.45;';
      li.textContent = r.icon + ' ' + r.text;
      ul.appendChild(li);
    });
    list.appendChild(ul);
    gridEl.appendChild(list);

    var preview = document.createElement('div');
    preview.className = 'result-card';
    var siteName = esc(first(tags, 'og:site_name') || hostOf(url) || 'example.com');
    var safeTitle = esc(title || '(no og:title — using page <title>)');
    var safeDesc = esc(desc || '(no og:description set)');
    preview.innerHTML = '<div class="r-name">Share-card preview</div>' +
      '<div style="border:1px solid #dfe3ea;border-radius:.7rem;overflow:hidden;max-width:420px;margin:.6rem auto;text-align:left;">' +
      (image ? '<img alt="og:image preview" style="width:100%;display:block;aspect-ratio:1.91/1;object-fit:cover;background:#f2f4f8;">' : '<div style="aspect-ratio:1.91/1;background:#f2f4f8;display:flex;align-items:center;justify-content:center;color:#8a94a6;font-size:.85rem;">No og:image — no image will show</div>') +
      '<div style="padding:.7rem .9rem;">' +
      '<div style="font-size:.72rem;color:#8a94a6;text-transform:uppercase;letter-spacing:.04em;">' + siteName + '</div>' +
      '<div style="font-weight:700;margin:.15rem 0;">' + safeTitle + '</div>' +
      '<div style="font-size:.86rem;color:#5b6474;">' + safeDesc + '</div>' +
      '</div></div>' +
      '<div class="r-stats">' + esc(image || '—') + '</div>';
    if(image) preview.querySelector('img').src = image;
    gridEl.appendChild(preview);

    summaryEl.textContent = fails
      ? '🚫 ' + fails + ' required tag' + (fails === 1 ? '' : 's') + ' missing' + (warns ? ', ' + warns + ' warnings' : '') + ' — fix the red items first.'
      : warns
        ? '✅ All required tags present — ' + warns + ' recommendation' + (warns === 1 ? '' : 's') + ' to polish the card.'
        : '🎉 Perfect — all required tags present, no warnings.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Validation complete', 'ok');
  });

  function hostOf(u){
    var m = /^https?:\/\/([^\/]+)/i.exec(u || '');
    return m ? m[1] : '';
  }

  refresh();
})();
</script>

## How it works

Copy your page's `<head>` section from View page source and paste it above. The debugger scans every `<meta>` tag — no URL fetching, so it works on staging sites and localhost markup too. It checks the four required tags (`og:title`, `og:type`, `og:image`, `og:url`), validates absolute/https URLs, warns about duplicates and overlong descriptions, and renders a share-card preview so you can see the result before you publish.

**Rule of thumb:** every public page needs at minimum og:title, og:type, og:image (absolute https URL, 1200×630px), and og:url — that quartet alone fixes ~90% of broken share cards.

## Everyday uses

- **Bloggers** — preview every post's share card before hitting publish so links look sharp on Facebook and X.
- **Developers** — validate templates and CMS plugins (WordPress SEO, Hugo partials) for missing or duplicated tags.
- **Marketers** — audit landing pages before a campaign so paid social traffic lands on polished cards.
- **Freelancers** — add an OG audit to client site checklists — a five-minute check with visible payoff.
- **Site migrations** — confirm the new platform kept all social tags after the move.
