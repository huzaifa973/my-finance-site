---
title: "Meta Tag Analyzer — Free SEO Head Audit Tool"
description: "Paste your page's <head> HTML and get a full SEO meta audit: title, description, Open Graph, Twitter cards, canonical, robots and more — with an overall score. Free, private, in-browser."
category: seo
date: 2026-10-21
draft: false
---

Your `<head>` section is your page's elevator pitch to Google and social networks — and most sites have broken or missing tags they never notice. Paste your head HTML below for a full audit: title and description length, Open Graph, Twitter cards, canonical, robots, charset, and duplicates — scored out of 100. No URL fetching (browsers block it), no uploads, no sign-up.

<div class="tool-shell" id="metaShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v4h-2V8H4v11H2V6a1 1 0 0 1 1-1zm4 5h14v2H7v-2zm0 4h10v2H7v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Meta Tag Analyzer</h2>
<p>Paste your &lt;head&gt; HTML — get a full SEO meta audit with an overall score out of 100.</p>
</div>
<button type="button" class="theme-toggle" id="metaTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your &lt;head&gt; HTML</p>
<div class="preset-row" id="maSamples">
<button type="button" class="preset-chip" data-sample="good">✅ Load good example</button>
<button type="button" class="preset-chip" data-sample="bad">❌ Load bad example</button>
</div>
<textarea class="tool-input" id="maInput" rows="10" placeholder="Paste everything between <head> and </head> here…"></textarea>
<div class="hint">Tip: in Chrome, right-click your page → View page source, copy the &lt;head&gt; section. Your HTML never leaves this tab.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audit settings</p>
<div class="settings-panel">
<div class="preset-row" id="maPresets">
<button type="button" class="preset-chip active" data-preset="full">🔍 Full audit</button>
<button type="button" class="preset-chip" data-preset="essentials">⚡ Essentials only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="maTitleLimit">Title target length: <span class="val" id="maTitleLimitVal">60 chars</span></label>
<input type="range" id="maTitleLimit" min="40" max="80" step="1" value="60">
<div class="hint">Google truncates around 60 chars / 580px. Shorter is safer.</div>
</div>
<div class="setting">
<label for="maDescMin">Description min: <span class="val" id="maDescMinVal">120 chars</span></label>
<input type="range" id="maDescMin" min="50" max="150" step="5" value="120">
<div class="hint">Too short wastes your search-result snippet.</div>
</div>
<div class="setting">
<label for="maDescMax">Description max: <span class="val" id="maDescMaxVal">160 chars</span></label>
<input type="range" id="maDescMax" min="150" max="220" step="5" value="160">
<div class="hint">Google truncates descriptions around 155–160 chars.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Require Open Graph tags</span><label class="toggle"><input type="checkbox" id="maOG" checked><span class="track"></span></label></div>
<div class="hint">og:title, og:description, og:image, og:url, og:type for rich social shares.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Require Twitter card tags</span><label class="toggle"><input type="checkbox" id="maTw" checked><span class="track"></span></label></div>
<div class="hint">twitter:card, twitter:title, twitter:description, twitter:image.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Check theme-color &amp; charset</span><label class="toggle"><input type="checkbox" id="maMisc" checked><span class="track"></span></label></div>
<div class="hint">Minor hygiene checks for mobile UI polish and encoding.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run the audit</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="maBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Analyze Meta Tags
</button>
<button type="button" class="btn-pro-outline" id="maClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="maProgWrap">
<div class="progress-bar"><i id="maProgBar"></i></div>
<div class="progress-text" id="maProgText">Auditing…</div>
</div>
<div class="results" id="maResults">
<p class="result-head">📋 Meta audit results</p>
<div class="result-summary" id="maSummary"></div>
<div class="result-grid" id="maList"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — audit as many pages as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('metaShell');
  ToolPro.themeToggle(shell, document.getElementById('metaTheme'));

  var ta = document.getElementById('maInput');
  var btn = document.getElementById('maBtn');
  var clearBtn = document.getElementById('maClear');
  var resBox = document.getElementById('maResults');
  var resList = document.getElementById('maList');
  var summary = document.getElementById('maSummary');
  var samples = document.getElementById('maSamples');
  var presets = document.getElementById('maPresets');

  var titleLimit = document.getElementById('maTitleLimit');
  var descMin = document.getElementById('maDescMin');
  var descMax = document.getElementById('maDescMax');
  var ogChk = document.getElementById('maOG');
  var twChk = document.getElementById('maTw');
  var miscChk = document.getElementById('maMisc');

  ToolPro.bindSlider(titleLimit, document.getElementById('maTitleLimitVal'), function(v){ return v + ' chars'; });
  ToolPro.bindSlider(descMin, document.getElementById('maDescMinVal'), function(v){ return v + ' chars'; });
  ToolPro.bindSlider(descMax, document.getElementById('maDescMaxVal'), function(v){ return v + ' chars'; });

  var SAMPLES = {
    good: '<title>10 Easy Weeknight Dinners Under 30 Minutes | DollarWise</title>\n<meta name="description" content="Busy weeknights? These 10 easy dinners come together in under 30 minutes with simple ingredients and minimal cleanup.">\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<link rel="canonical" href="https://dollarwise.xyz/posts/weeknight-dinners/">\n<meta name="robots" content="index, follow">\n<meta name="theme-color" content="#1a73e8">\n<meta property="og:type" content="article">\n<meta property="og:title" content="10 Easy Weeknight Dinners Under 30 Minutes">\n<meta property="og:description" content="10 easy dinners in under 30 minutes — simple ingredients, minimal cleanup.">\n<meta property="og:url" content="https://dollarwise.xyz/posts/weeknight-dinners/">\n<meta property="og:image" content="https://dollarwise.xyz/images/dinners.jpg">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="10 Easy Weeknight Dinners Under 30 Minutes">\n<meta name="twitter:description" content="10 easy dinners in under 30 minutes.">\n<meta name="twitter:image" content="https://dollarwise.xyz/images/dinners.jpg">',
    bad: '<title>The Ultimate Comprehensive Guide to Everything You Ever Wanted to Know About Weeknight Dinners and Meal Planning on a Budget for Busy Families</title>\n<title>Duplicate title tag</title>\n<meta name="description" content="Too short.">\n<meta property="og:title" content="Dinners">'
  };

  samples.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    ta.value = SAMPLES[chip.dataset.sample];
    resBox.classList.remove('show');
    refresh();
    ta.scrollIntoView({ behavior: 'smooth', block: 'center' });
    ToolPro.toast('Sample loaded — hit Analyze', 'ok');
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var full = chip.dataset.preset === 'full';
    ogChk.checked = full; twChk.checked = full; miscChk.checked = full;
    ToolPro.toast(full ? 'Full audit enabled' : 'Essentials-only audit enabled');
  });

  function refresh(){
    var ready = !!ta.value.trim();
    btn.disabled = !ready;
    clearBtn.disabled = !ready;
  }
  ta.addEventListener('input', refresh);
  clearBtn.addEventListener('click', function(){
    ta.value = ''; resBox.classList.remove('show'); refresh();
  });

  var score = 100, fails = 0, warns = 0, passes = 0;

  function verdict(status, title, detail, penalty){
    penalty = penalty || 0;
    score = Math.max(0, score - penalty);
    if(status === 'fail') fails++; else if(status === 'warn') warns++; else passes++;
    var card = document.createElement('div');
    card.className = 'result-card verdict v-' + status;
    var icon = status === 'pass' ? '✅' : (status === 'warn' ? '⚠️' : '❌');
    var name = document.createElement('div'); name.className = 'r-name';
    name.textContent = icon + ' ' + title;
    var stats = document.createElement('div'); stats.className = 'r-stats';
    stats.textContent = detail;
    card.appendChild(name); card.appendChild(stats);
    resList.appendChild(card);
  }

  function metaContent(doc, selector){
    var el = doc.querySelector(selector);
    return el ? (el.getAttribute('content') || '').trim() : null;
  }

  function audit(){
    resList.innerHTML = '';
    score = 100; fails = 0; warns = 0; passes = 0;

    var doc = new DOMParser().parseFromString(ta.value, 'text/html');
    var tLimit = parseInt(titleLimit.value, 10);
    var dMin = parseInt(descMin.value, 10);
    var dMax = parseInt(descMax.value, 10);

    // Title
    var titles = doc.querySelectorAll('title');
    if(!titles.length){
      verdict('fail', 'Missing <title> tag', 'Every page needs a unique title — it is the #1 on-page SEO element and your search-result headline.', 20);
    } else {
      if(titles.length > 1){
        verdict('fail', 'Duplicate <title> tags (' + titles.length + ')', 'Browsers and Google use only the first title. Remove the extras.', 10);
      }
      var t = titles[0].textContent.trim();
      if(!t){
        verdict('fail', 'Empty <title> tag', 'The title tag exists but has no text. Write a descriptive title under ' + tLimit + ' characters.', 15);
      } else if(t.length <= tLimit){
        verdict('pass', 'Title length OK (' + t.length + ' chars)', 'Fits within your ' + tLimit + '-char target — Google should display it in full.');
      } else if(t.length <= tLimit + 20){
        verdict('warn', 'Title slightly long (' + t.length + ' chars)', 'Over your ' + tLimit + '-char target — Google may truncate the end. Trim a few words.', 5);
      } else {
        verdict('fail', 'Title too long (' + t.length + ' chars)', 'Well over the ~60-char / 580px limit — Google will cut it off mid-sentence.', 10);
      }
    }

    // Meta description
    var descs = doc.querySelectorAll('meta[name="description"]');
    if(!descs.length){
      verdict('fail', 'Missing meta description', 'Google will invent a snippet from your page text. Write a 120–160 char pitch to control the message.', 15);
    } else {
      if(descs.length > 1){
        verdict('fail', 'Duplicate meta descriptions (' + descs.length + ')', 'Only the first is used. Remove the extras.', 10);
      }
      var d = (descs[0].getAttribute('content') || '').trim();
      if(!d){
        verdict('fail', 'Empty meta description', 'The tag exists but has no content. Write a 120–160 character summary.', 12);
      } else if(d.length < dMin){
        verdict('warn', 'Description short (' + d.length + ' chars)', 'Under your ' + dMin + '-char minimum — expand it to sell the click.', 5);
      } else if(d.length <= dMax){
        verdict('pass', 'Description length OK (' + d.length + ' chars)', 'In the ideal range — a full, compelling snippet for search results.');
      } else {
        verdict('warn', 'Description long (' + d.length + ' chars)', 'Over your ' + dMax + '-char max — Google will truncate it with "…".', 5);
      }
    }

    // Open Graph
    if(ogChk.checked){
      var ogTags = ['og:title', 'og:description', 'og:image', 'og:url', 'og:type'];
      var ogMissing = ogTags.filter(function(p){ return metaContent(doc, 'meta[property="' + p + '"]') === null; });
      if(!ogMissing.length){
        verdict('pass', 'Open Graph complete', 'All 5 core OG tags present — rich previews on Facebook, LinkedIn and WhatsApp.');
      } else {
        verdict('warn', 'Open Graph incomplete (' + ogMissing.length + ' missing)', 'Missing: ' + ogMissing.join(', ') + '. Social shares will look plain without them.', ogMissing.length * 3);
      }
    }

    // Twitter cards
    if(twChk.checked){
      var twTags = ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'];
      var twMissing = twTags.filter(function(n){ return metaContent(doc, 'meta[name="' + n + '"]') === null; });
      if(!twMissing.length){
        verdict('pass', 'Twitter cards complete', 'All 4 Twitter card tags present — rich previews on X.');
      } else {
        verdict('warn', 'Twitter cards incomplete (' + twMissing.length + ' missing)', 'Missing: ' + twMissing.join(', ') + '. Posts on X will show a plain link.', twMissing.length * 2);
      }
    }

    // Canonical
    var canons = doc.querySelectorAll('link[rel="canonical"]');
    if(!canons.length){
      verdict('warn', 'No canonical tag', 'Add <link rel="canonical"> to tell Google which URL is the master copy and avoid duplicate-content issues.', 5);
    } else if(canons.length > 1){
      verdict('fail', 'Multiple canonical tags (' + canons.length + ')', 'Conflicting canonicals confuse Google — keep exactly one.', 8);
    } else {
      var href = (canons[0].getAttribute('href') || '').trim();
      if(!href){ verdict('warn', 'Canonical has empty href', 'The tag exists but points nowhere. Set the full URL of this page.', 5); }
      else if(!/^https?:\/\//i.test(href)){ verdict('warn', 'Canonical is not absolute', '"' + href + '" — canonicals should be full absolute URLs (https://…).', 3); }
      else { verdict('pass', 'Canonical present', 'Points to ' + href); }
    }

    // Robots
    var robots = metaContent(doc, 'meta[name="robots"]');
    if(robots === null){
      verdict('pass', 'No robots meta tag', 'Defaults to index, follow — correct for pages you want in Google.');
    } else if(/noindex/i.test(robots)){
      verdict('warn', 'robots: noindex detected', 'This page is blocked from Google indexing. Fine for thank-you/admin pages — fatal for content you want ranked.', 5);
    } else if(/nofollow/i.test(robots)){
      verdict('warn', 'robots: nofollow detected', 'Link equity will not flow from this page. Usually only wanted on untrusted-content pages.', 3);
    } else {
      verdict('pass', 'Robots tag OK', 'robots="' + robots + '" — indexable and followable.');
    }

    // Viewport + charset + misc
    if(doc.querySelector('meta[name="viewport"]')){
      verdict('pass', 'Viewport tag present', 'Mobile browsers will render at device width.');
    } else {
      verdict('fail', 'No viewport meta tag', 'Mobile SEO killer — add <meta name="viewport" content="width=device-width, initial-scale=1">.', 10);
    }
    if(miscChk.checked){
      if(doc.querySelector('meta[charset]')){
        verdict('pass', 'Charset declared', 'Character encoding is set — no garbled text.');
      } else {
        verdict('warn', 'No charset declared', 'Add <meta charset="utf-8"> as the first tag in <head>.', 3);
      }
      if(metaContent(doc, 'meta[name="theme-color"]') !== null){
        verdict('pass', 'theme-color present', 'Mobile browsers tint the address bar with your brand color.');
      } else {
        verdict('warn', 'No theme-color', 'Minor polish: <meta name="theme-color"> colors the mobile browser UI.', 2);
      }
      if(doc.querySelector('link[rel="alternate"][hreflang]')){
        verdict('pass', 'hreflang present', 'Alternate-language versions are declared.');
      } else {
        verdict('pass', 'No hreflang tags', 'Only needed for multilingual sites — safe to skip.');
      }
    }

    var grade = score >= 90 ? 'A' : (score >= 75 ? 'B' : (score >= 60 ? 'C' : (score >= 40 ? 'D' : 'F')));
    var icon = score >= 75 ? '✅' : (score >= 60 ? '⚠️' : '❌');
    summary.textContent = icon + ' Overall SEO score: ' + score + '/100 (grade ' + grade + ') — ' +
      fails + ' fail' + (fails === 1 ? '' : 's') + ', ' + warns + ' warning' + (warns === 1 ? '' : 's') + ', ' + passes + ' passed.';
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('maProgWrap');
    var progBar = document.getElementById('maProgBar');
    progWrap.classList.add('show');
    resBox.classList.remove('show');
    progBar.style.width = '0%';
    var p = 0;
    var tick = setInterval(function(){
      p += 25; progBar.style.width = Math.min(p, 100) + '%';
      if(p >= 100){
        clearInterval(tick);
        audit();
        progWrap.classList.remove('show');
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast('Audit complete — score ' + score + '/100', 'ok');
      }
    }, 90);
  });

  refresh();
})();
</script>

## How it works

Paste your `<head>` HTML and the tool parses it with the browser's native DOM parser — the same engine that reads real web pages — then runs 15+ checks in milliseconds: title and description length against your slider settings, duplicate detection, all five core Open Graph tags, all four Twitter card tags, canonical validity, robots directives, viewport, charset, theme-color, and hreflang. Each check earns a pass, warning, or fail with the exact fix, and penalties roll up into an overall score out of 100 with a letter grade. Because everything happens locally, your page source never leaves your device — and no live URL fetching is attempted, since browsers block cross-site page reads.

## Everyday uses

- **Bloggers** — paste your theme's head output after updates to catch missing descriptions or broken OG tags before publishing.
- **SEO freelancers** — run client pages through the audit and drop the scored verdict list straight into site-audit reports.
- **Developers** — verify templates render exactly one title, one description, and one canonical with valid absolute URLs.
- **Social media managers** — confirm og:image and twitter:card tags exist so every shared link shows a rich preview, not a bare URL.
- **Site owners** — spot accidental `noindex` tags that silently remove pages from Google.

**Rule of thumb:** keep titles under ~60 characters, descriptions between 120–160, and never ship a page without og:image — it's the single tag that decides whether your link gets clicked on social.
