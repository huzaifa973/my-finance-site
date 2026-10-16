---
title: "Robots.txt Tester — Check Allow / Disallow Rules for Any URL"
description: "Test any URL against your robots.txt rules — paste the file, pick a user-agent, and get an allow/block verdict rule by rule. Free, runs in your browser."
category: seo
date: 2026-10-16
draft: false
---

A single wrong `Disallow` can deindex your whole site — and a missing one can expose your admin pages. Paste your robots.txt, enter any URL from your site, and this tester parses every rule, applies longest-match logic like Google does, and gives you an allow/block verdict with the exact winning rule.

<div class="tool-shell" id="rttShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zM9 21v-1h6v1c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Robots.txt Tester</h2>
<p>Paste your robots.txt, test any URL, and see exactly which rule allows or blocks it.</p>
</div>
<button type="button" class="theme-toggle" id="rttTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your robots.txt</p>
<textarea class="tool-input" id="rttFile" rows="8" placeholder="User-agent: *&#10;Disallow: /admin/&#10;Allow: /blog/">User-agent: *
Disallow: /admin/
Disallow: /wp-login.php
Allow: /blog/
Allow: /
User-agent: Googlebot
Disallow: /tmp/
Sitemap: https://example.com/sitemap.xml</textarea>
<div class="hint">Comments (#) and Sitemap lines are recognized and shown, but don't affect the verdict.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> URL + crawler to test</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="rttUrl">URL to test</label>
<input type="text" class="tool-input" id="rttUrl" placeholder="/blog/my-post/ or https://example.com/admin/">
</div>
<div class="setting">
<label for="rttUa">User-agent</label>
<select id="rttUa">
<option value="Googlebot">Googlebot</option>
<option value="Bingbot">Bingbot</option>
<option value="*">*</option>
<option value="custom">Custom…</option>
</select>
</div>
<div class="setting" id="rttCustomWrap" style="display:none;">
<label for="rttCustom">Custom user-agent</label>
<input type="text" class="tool-input" id="rttCustom" placeholder="e.g. AhrefsBot">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get the verdict</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rttBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Test URL
</button>
<button type="button" class="btn-pro-outline" id="rttClear" disabled>Clear</button>
</div>
<div class="results" id="rttResults">
<p class="result-head">🤖 Crawl verdict</p>
<div class="result-summary" id="rttSummary"></div>
<div class="result-grid" id="rttGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Test every important URL on your site — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('rttShell');
  ToolPro.themeToggle(shell, document.getElementById('rttTheme'));
  var fileIn = document.getElementById('rttFile');
  var urlIn = document.getElementById('rttUrl');
  var uaSel = document.getElementById('rttUa');
  var customWrap = document.getElementById('rttCustomWrap');
  var customIn = document.getElementById('rttCustom');
  var btn = document.getElementById('rttBtn');
  var clearBtn = document.getElementById('rttClear');
  var resBox = document.getElementById('rttResults');
  var summary = document.getElementById('rttSummary');
  var grid = document.getElementById('rttGrid');

  uaSel.addEventListener('change', function(){
    customWrap.style.display = uaSel.value === 'custom' ? '' : 'none';
  });

  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function parseRobots(text){
    var groups = [], cur = null, sitemaps = [];
    text.split(/\r?\n/).forEach(function(line){
      var t = line.replace(/#.*$/, '').trim();
      if(!t) return;
      var m = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(t);
      if(!m) return;
      var field = m[1].toLowerCase(), val = m[2].trim();
      if(field === 'user-agent'){
        if(!cur || cur.rules.length){ cur = { agents: [], rules: [] }; groups.push(cur); }
        cur.agents.push(val.toLowerCase());
      } else if(field === 'disallow' || field === 'allow'){
        if(!cur){ cur = { agents: ['*'], rules: [] }; groups.push(cur); }
        cur.rules.push({ type: field, path: val });
      } else if(field === 'sitemap'){
        sitemaps.push(val);
      }
    });
    return { groups: groups, sitemaps: sitemaps };
  }

  function matchingRules(groups, ua){
    var uaL = ua.toLowerCase();
    var rules = [];
    groups.forEach(function(g){
      var hit = g.agents.some(function(a){ return a === uaL || a === '*'; });
      if(hit) rules = rules.concat(g.rules);
    });
    return rules;
  }

  function ruleMatches(rulePath, urlPath){
    if(rulePath === '') return true; // empty Disallow matches nothing for blocking, everything for allow-all
    return urlPath.indexOf(rulePath) === 0;
  }

  function test(){
    var text = fileIn.value;
    var urlRaw = urlIn.value.trim();
    if(!text.trim() || !urlRaw){ ToolPro.toast('Paste robots.txt and a URL first', 'err'); return; }
    var ua = uaSel.value === 'custom' ? (customIn.value.trim() || '*') : uaSel.value;
    var a = document.createElement('a');
    a.href = /^\//.test(urlRaw) ? 'https://example.com' + urlRaw : urlRaw;
    var urlPath = a.pathname + a.search;
    var parsed = parseRobots(text);
    var rules = matchingRules(parsed.groups, ua);

    var winner = null, winnerLen = -1;
    var rows = rules.map(function(r){
      var hit = ruleMatches(r.path, urlPath);
      var len = r.path.length;
      var wins = false;
      if(hit && (len > winnerLen || (len === winnerLen && r.type === 'allow' && winner && winner.type !== 'allow'))){
        winner = r; winnerLen = len; wins = true;
      }
      return { r: r, hit: hit, wins: wins };
    });
    // re-mark wins after full scan
    var best = null, bestLen = -1;
    rows.forEach(function(x){
      if(x.hit){
        var len = x.r.path.length;
        if(len > bestLen || (len === bestLen && x.r.type === 'allow' && best && best.type === 'disallow')){
          best = x.r; bestLen = len;
        }
      }
    });
    rows.forEach(function(x){ x.wins = (x.r === best); });

    var allowed = !best || best.type === 'allow';
    // empty Disallow: / never blocks
    if(best && best.type === 'disallow' && best.path === ''){ allowed = true; best = null; }

    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    var html = '<div class="r-name" style="word-break:break-all;">' + esc(urlPath) +
      ' <span class="hint">as ' + esc(ua) + '</span></div>';
    html += '<div class="progress-bar" style="margin:8px 0;"><i style="width:' +
      (allowed ? 100 : 8) + '%;' + (allowed ? '' : 'background:#d23c3c;') + '"></i></div>';
    if(!rules.length){
      html += '<div class="r-stats">No rules matched this user-agent — nothing blocks the URL.</div>';
    } else {
      html += '<div class="r-stats"><b>Rule-by-rule:</b></div>';
      rows.forEach(function(x){
        html += '<div class="r-stats" style="padding:5px 0;border-bottom:1px solid #eee;font-family:monospace;font-size:13px;' +
          (x.wins ? 'background:#eef7ee;border-radius:4px;padding-left:6px;' : '') + '">' +
          (x.wins ? '🏆 ' : (x.hit ? '✔ ' : '· ')) +
          esc(x.r.type) + ': ' + esc(x.r.path || '(empty)') +
          (x.wins ? ' <b>← decides the verdict</b>' : (x.hit ? ' (matched, overridden)' : ' (no match)')) + '</div>';
      });
    }
    if(parsed.sitemaps.length){
      html += '<div class="r-stats" style="margin-top:8px;"><b>Sitemaps declared:</b> ' +
        parsed.sitemaps.map(esc).join(', ') + '</div>';
    }
    html += '<div class="hint" style="margin-top:8px;">Longest matching rule wins; ties go to Allow — the same logic Google uses. Crawl-delay and wildcards (*) are noted but not applied in this simplified tester.</div>';
    card.innerHTML = html;
    grid.appendChild(card);
    summary.textContent = allowed
      ? '✅ ALLOWED — ' + ua + ' may crawl ' + urlPath
      : '⛔ BLOCKED — ' + ua + ' may NOT crawl ' + urlPath;
    resBox.classList.add('show');
  }

  function refresh(){
    btn.disabled = !(fileIn.value.trim() && urlIn.value.trim());
    clearBtn.disabled = !(fileIn.value || urlIn.value);
  }
  [fileIn, urlIn, customIn].forEach(function(el){ el.addEventListener('input', refresh); });
  urlIn.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); test(); } });
  btn.addEventListener('click', function(){
    test();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  clearBtn.addEventListener('click', function(){
    urlIn.value = ''; customIn.value = '';
    resBox.classList.remove('show');
    refresh();
  });
  refresh();
})();
</script>

## How it works

- **Step 1** — Paste your full robots.txt (comments and Sitemap lines are fine).
- **Step 2** — Enter the URL to test (a path like `/admin/` works) and pick the crawler: Googlebot, Bingbot, `*`, or a custom user-agent.
- **Step 3** — The parser groups rules by user-agent, matches each rule against the URL path, and applies longest-match-wins logic (ties go to Allow) — showing exactly which rule decided the verdict.

## Everyday uses

- **Site owners** — verify a new `Disallow` doesn't accidentally block your whole blog.
- **SEOs** — debug "blocked by robots.txt" warnings in Search Console.
- **Developers** — test staging-server rules before pushing them live.
- **Migrations** — confirm old admin and API paths stay hidden from crawlers.

**Rule of thumb:** `Disallow: /` with no Allow rules blocks everything — always test your homepage URL after editing robots.txt.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/robots-txt-tester.md tool_name=read]
