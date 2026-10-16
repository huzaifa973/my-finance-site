---
title: "URL Length Checker — SEO URL Score & Readability Check"
description: "Score any URL for SEO: length, hyphens vs underscores, uppercase, stop words and readability checks with a 0–100 score. Free, no sign-up."
category: seo
date: 2026-10-16
draft: false
---

Short, readable URLs rank better and get clicked more. Paste any URL to get a 0–100 SEO score with a rule-by-rule checklist: total length, hyphen usage, uppercase letters, stop words, numbers, query strings, and more.

<div class="tool-shell" id="ulcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>URL Length Checker</h2>
<p>Paste a URL, get an SEO score out of 100 with every readability check explained.</p>
</div>
<button type="button" class="theme-toggle" id="ulcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste the URL</p>
<input type="text" class="tool-input" id="ulcInput" placeholder="https://example.com/blog/how-to-bake-sourdough-bread/">
<div class="hint">Include the full URL with https:// — analysis is instant and private.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Scoring options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="ulcStrict">Strictness</label>
<select id="ulcStrict">
<option value="1" selected>Standard scoring</option>
<option value="0.6">Lenient — half deductions</option>
<option value="1.5">Strict — 1.5× deductions</option>
</select>
<div class="hint">Lenient is kinder to long CMS-generated URLs; strict is for perfectionists.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="ulcStop" checked><span></span> Penalize stop words</label>
<div class="hint">Filler words like "the" and "and" in the slug.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="ulcDate" checked><span></span> Penalize dates in URL</label>
<div class="hint">Year/month paths like /2024/03/ make content look stale.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Score the URL</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ulcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Check URL
</button>
<button type="button" class="btn-pro-outline" id="ulcClear" disabled>Clear</button>
</div>
<div class="results" id="ulcResults">
<p class="result-head">🔗 URL SEO score</p>
<div class="result-summary" id="ulcSummary"></div>
<div class="result-grid" id="ulcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Audit every URL on your site — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ulcShell');
  ToolPro.themeToggle(shell, document.getElementById('ulcTheme'));
  var input = document.getElementById('ulcInput');
  var btn = document.getElementById('ulcBtn');
  var clearBtn = document.getElementById('ulcClear');
  var resBox = document.getElementById('ulcResults');
  var summary = document.getElementById('ulcSummary');
  var grid = document.getElementById('ulcGrid');
  var STOP = ['a','an','the','and','or','but','of','for','to','in','on','with','at','by','from','is','are','was','were','it','this','that'];

  function row(ok, warn, label, detail){
    var icon = ok ? '✅' : (warn ? '⚠️' : '❌');
    return '<div class="r-stats" style="padding:6px 0;border-bottom:1px solid #eee;"><b>' + icon + ' ' + label +
      '</b><br><span class="hint">' + detail + '</span></div>';
  }

  function check(){
    var raw = input.value.trim();
    if(!raw) return;
    var url = raw.match(/^https?:\/\//i) ? raw : 'https://' + raw;
    var a = document.createElement('a');
    a.href = url;
    var path = (a.pathname || '/') + (a.search || '');
    var slug = (a.pathname || '/').replace(/^\/+|\/+$/g, '');
    var words = slug.split(/[-_\/]+/).filter(Boolean).map(function(w){ return w.toLowerCase(); });
    var score = 100;
    var rows = '';
    var mult = parseFloat(document.getElementById('ulcStrict').value) || 1;
    var checkStop = document.getElementById('ulcStop').checked;
    var checkDate = document.getElementById('ulcDate').checked;
    function ded(n){ score -= Math.round(n * mult); }

    var len = url.length;
    if(len <= 60){ rows += row(true, false, 'Total length: ' + len + ' characters', 'Under 60 characters — ideal for sharing and display.'); }
    else if(len <= 75){ ded(5); rows += row(false, true, 'Total length: ' + len + ' characters', 'Slightly long. Fine for most pages, but shorter is better.'); }
    else if(len <= 100){ ded(12); rows += row(false, true, 'Total length: ' + len + ' characters', 'Long — consider trimming the slug. Google can truncate long URLs.'); }
    else { ded(25); rows += row(false, false, 'Total length: ' + len + ' characters', 'Too long. Shorten the slug to its core keywords.'); }

    if(/_/.test(path)){ ded(15); rows += row(false, false, 'Underscores found', 'Google treats hyphens as word separators but not underscores — use hyphens.'); }
    else { rows += row(true, false, 'No underscores', 'Word separators are hyphens, which Google reads correctly.'); }

    if(/[A-Z]/.test(path)){ ded(8); rows += row(false, true, 'Uppercase letters found', 'Lowercase URLs avoid duplicate-content and broken-link issues on case-sensitive servers.'); }
    else { rows += row(true, false, 'All lowercase', 'Consistent lowercase — no case-sensitivity risks.'); }

    if(words.length > 6){ ded(8); rows += row(false, true, words.length + ' words in slug', 'More than 6 words dilutes the keyword signal — keep the slug to its core terms.'); }
    else { rows += row(true, false, words.length + ' word' + (words.length === 1 ? '' : 's') + ' in slug', 'Concise slug — easy to read and share.'); }

    if(checkStop){
      var stops = words.filter(function(w){ return STOP.indexOf(w) > -1; });
      if(stops.length){ ded(5); rows += row(false, true, 'Stop words: ' + stops.join(', '), 'Filler words like "the" and "and" add length without meaning — safe to drop.'); }
      else { rows += row(true, false, 'No stop words', 'Every word in the slug carries meaning.'); }
    }

    var seen = {}, dup = [];
    words.forEach(function(w){ seen[w] = (seen[w] || 0) + 1; if(seen[w] === 2) dup.push(w); });
    if(dup.length){ ded(7); rows += row(false, true, 'Repeated words: ' + dup.join(', '), 'Repeating a keyword in the slug looks spammy — use it once.'); }
    else { rows += row(true, false, 'No repeated words', 'Each keyword appears once.'); }

    if(/[^\x00-\x7F]/.test(path)){ ded(8); rows += row(false, true, 'Non-ASCII characters', 'Encoded characters (%C3%A9…) hurt readability — use plain ASCII.'); }
    else { rows += row(true, false, 'Plain ASCII only', 'Clean, shareable characters throughout.'); }

    if(a.search){ ded(6); rows += row(false, true, 'Query string present', 'Parameters like ?id=123 can cause duplicate-content issues — prefer clean static URLs.'); }
    else { rows += row(true, false, 'No query string', 'Clean static URL — best for SEO and sharing.'); }

    if(!/^https:/i.test(url)){ ded(10); rows += row(false, false, 'Not HTTPS', 'HTTPS is a ranking signal and a browser trust requirement.'); }
    else { rows += row(true, false, 'HTTPS', 'Secure protocol — required for rankings and user trust.'); }

    if(checkDate && /\/\d{4}\/\d{2}\//.test(a.pathname)){ ded(4); rows += row(false, true, 'Date in URL', 'Dates make content look stale over time — a timeless slug ages better.'); }

    score = Math.max(0, score);
    var grade = score >= 90 ? 'A — excellent URL' : score >= 75 ? 'B — good, minor fixes' :
                score >= 55 ? 'C — needs cleanup' : 'D — rewrite recommended';
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<div class="r-name" style="word-break:break-all;">' + url.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</div>' +
      '<div class="progress-bar" style="margin:8px 0;"><i style="width:' + score + '%;' +
      (score >= 75 ? '' : (score >= 55 ? 'background:#e0a020;' : 'background:#d23c3c;')) + '"></i></div>' + rows;
    grid.appendChild(card);
    summary.textContent = '🏆 Score: ' + score + '/100 — ' + grade;
    resBox.classList.add('show');
  }

  input.addEventListener('input', function(){
    var t = input.value.trim();
    btn.disabled = !t;
    clearBtn.disabled = !input.value;
  });
  input.addEventListener('keydown', function(e){ if(e.key === 'Enter'){ e.preventDefault(); check(); } });
  btn.addEventListener('click', function(){
    check();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('URL scored', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    input.value = ''; resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
  });
})();
</script>

## How it works

- **Step 1** — Paste the full URL (with https://).
- **Step 2** — Optionally tune the scoring: standard, lenient, or strict deductions, and toggle the stop-word and date checks.
- **Step 3** — The tool runs ten SEO readability checks — length, hyphens vs underscores, case, slug word count, stop words, repeated words, non-ASCII characters, query strings, HTTPS, and dates — then scores the URL out of 100 with a fix-it checklist.

## Everyday uses

- **Bloggers** — clean up slugs before publishing new posts.
- **SEOs** — audit client URLs during a site review.
- **E-commerce** — product URLs with session IDs or uppercase SKUs hurt; check before launch.
- **Developers** — validate auto-generated URLs from a CMS.

**Rule of thumb:** under 60 characters, lowercase, hyphens only, no stop words, and the core keyword near the front of the slug.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/url-length-checker.md tool_name=read]
