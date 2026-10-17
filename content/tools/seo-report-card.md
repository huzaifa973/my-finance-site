---
title: "SEO Report Card — Grade Your Page's On-Page SEO in Seconds"
description: "Enter your title, meta description, H1, word count and more to get an instant on-page SEO scorecard with a letter grade and fix-it checklist. Free, no sign-up."
category: seo
date: 2026-10-17
draft: false
---

Wondering why a page isn't ranking? Run it through a quick on-page health check first. Enter your title tag, meta description, H1, word count, and a few technical signals — this tool grades each one against SEO best practices and hands you a letter-graded report card with a prioritized fix list. Everything runs in your browser.

<div class="tool-shell" id="srcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-4v2h2v3H6v2h2v3h2v-3h2v3h2v-3h2v-2h-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>SEO Report Card</h2>
<p>Grade your page's on-page SEO — title, meta, H1, content depth &amp; technicals — with a fix-it checklist.</p>
</div>
<button type="button" class="theme-toggle" id="srcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your page details</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="srcTitle">Page title (title tag)</label>
<input type="text" class="tool-input" id="srcTitle" placeholder="e.g. Best Running Shoes for Beginners 2026 — Top 10 Tested" style="width:100%">
<div class="hint">What shows in the browser tab and search results.</div>
</div>
<div class="setting">
<label for="srcMeta">Meta description</label>
<textarea class="tool-input" id="srcMeta" rows="2" placeholder="The ~155-character summary under your title in search results…" style="width:100%"></textarea>
</div>
<div class="setting">
<label for="srcH1">H1 heading</label>
<input type="text" class="tool-input" id="srcH1" placeholder="e.g. Best Running Shoes for Beginners" style="width:100%">
</div>
<div class="setting">
<label for="srcKw">Target keyword</label>
<input type="text" class="tool-input" id="srcKw" placeholder="e.g. running shoes for beginners" style="width:100%">
</div>
<div class="setting">
<label for="srcWords">Word count: <span class="val" id="srcWordsVal">800</span></label>
<input type="range" id="srcWords" min="0" max="3000" step="50" value="800">
</div>
<div class="setting">
<label for="srcSlug">URL slug</label>
<input type="text" class="tool-input" id="srcSlug" placeholder="e.g. best-running-shoes-beginners" style="width:100%">
<div class="hint">Just the last part of the URL, no domain.</div>
</div>
<div class="setting">
<label for="srcImgs">Images on page: <span class="val" id="srcImgsVal">4</span></label>
<input type="range" id="srcImgs" min="0" max="20" step="1" value="4">
</div>
<div class="setting">
<label for="srcAlts">Images with alt text: <span class="val" id="srcAltsVal">4</span></label>
<input type="range" id="srcAlts" min="0" max="20" step="1" value="4">
</div>
<div class="setting">
<label for="srcLinks">Internal links: <span class="val" id="srcLinksVal">3</span></label>
<input type="range" id="srcLinks" min="0" max="15" step="1" value="3">
</div>
<div class="setting">
<label for="srcSpeed">Page speed</label>
<select id="srcSpeed">
<option value="fast">Fast — loads under 2.5s</option>
<option value="avg" selected>Average — 2.5 to 4s</option>
<option value="slow">Slow — over 4s</option>
</select>
</div>
<div class="setting">
<label>Technical signals</label>
<div class="toggle-row"><span class="t-label">Mobile-friendly layout</span><label class="toggle"><input type="checkbox" id="srcMobile" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Served over HTTPS</span><label class="toggle"><input type="checkbox" id="srcHttps" checked><span class="track"></span></label></div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Grade your page</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="srcBtn">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate Report Card
</button>
<button type="button" class="btn-pro-outline" id="srcSample">Fill sample data</button>
</div>
<div class="progress-wrap" id="srcProgWrap">
<div class="progress-bar"><i id="srcProgBar"></i></div>
<div class="progress-text" id="srcProgText">Working…</div>
</div>
<div class="results" id="srcResults">
<p class="result-head">✅ Done — your SEO report card</p>
<div class="result-summary" id="srcSummary"></div>
<div class="result-grid" id="srcGrid"></div>
<div class="tool-actions" style="margin-top:10px">
<button type="button" class="btn-pro-outline" id="srcCopy">📋 Copy report</button>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Grade unlimited pages — everything happens in your browser, nothing is sent anywhere.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('srcShell');
  ToolPro.themeToggle(shell, document.getElementById('srcTheme'));
  var btn = document.getElementById('srcBtn');

  ToolPro.bindSlider(document.getElementById('srcWords'), document.getElementById('srcWordsVal'), function(v){ return v + ' words'; });
  ToolPro.bindSlider(document.getElementById('srcImgs'), document.getElementById('srcImgsVal'), function(v){ return v; });
  ToolPro.bindSlider(document.getElementById('srcAlts'), document.getElementById('srcAltsVal'), function(v){ return v; });
  ToolPro.bindSlider(document.getElementById('srcLinks'), document.getElementById('srcLinksVal'), function(v){ return v; });

  document.getElementById('srcSample').addEventListener('click', function(){
    document.getElementById('srcTitle').value = 'Best Running Shoes for Beginners in 2026 — Top 10 Tested Picks';
    document.getElementById('srcMeta').value = 'We tested 24 pairs to find the best running shoes for beginners — cushioned, affordable, and injury-friendly. See our top 10 picks with prices.';
    document.getElementById('srcH1').value = 'Best Running Shoes for Beginners';
    document.getElementById('srcKw').value = 'running shoes for beginners';
    ToolPro.toast('Sample data filled', 'ok');
  });

  function val(id){ return document.getElementById(id).value.trim(); }

  btn.addEventListener('click', function(){
    var title = val('srcTitle'), meta = val('srcMeta'), h1 = val('srcH1');
    var kw = val('srcKw').toLowerCase();
    var words = parseInt(document.getElementById('srcWords').value, 10);
    var slug = val('srcSlug').toLowerCase();
    var imgs = parseInt(document.getElementById('srcImgs').value, 10);
    var alts = Math.min(parseInt(document.getElementById('srcAlts').value, 10), Math.max(imgs, 1));
    var links = parseInt(document.getElementById('srcLinks').value, 10);
    var speed = document.getElementById('srcSpeed').value;
    var mobile = document.getElementById('srcMobile').checked;
    var https = document.getElementById('srcHttps').checked;
    var checks = [];
    function add(label, status, detail, fix){
      checks.push({ label: label, status: status, detail: detail, fix: fix,
        pts: status === 'pass' ? 10 : (status === 'warn' ? 5 : 0) });
    }
    // Title
    if(!title) add('Title tag', 'fail', 'Missing', 'Write a 50–60 character title with your keyword near the front.');
    else if(title.length >= 50 && title.length <= 60) add('Title tag', 'pass', title.length + ' characters — ideal length' + (kw && title.toLowerCase().indexOf(kw) >= 0 ? ', keyword included ✅' : ''), '');
    else if(title.length >= 30 && title.length <= 70) add('Title tag', 'warn', title.length + ' characters', 'Aim for 50–60 characters so it never truncates in search results.');
    else add('Title tag', 'fail', title.length + ' characters', title.length < 30 ? 'Too short — expand to 50–60 characters with your keyword.' : 'Too long — Google truncates past ~60 characters. Trim it.');
    // Meta
    if(!meta) add('Meta description', 'fail', 'Missing', 'Write a 120–160 character summary with a call to action.');
    else if(meta.length >= 120 && meta.length <= 160) add('Meta description', 'pass', meta.length + ' characters — ideal length', '');
    else if(meta.length >= 70 && meta.length <= 200) add('Meta description', 'warn', meta.length + ' characters', 'Aim for 120–160 characters for the cleanest snippet.');
    else add('Meta description', 'fail', meta.length + ' characters', meta.length < 70 ? 'Too short to sell the click — expand it.' : 'Will be truncated — trim to ~155 characters.');
    // H1
    if(!h1) add('H1 heading', 'fail', 'Missing', 'Add one H1 that mirrors your title and includes the keyword.');
    else if(kw && h1.toLowerCase().indexOf(kw) >= 0) add('H1 heading', 'pass', 'Present, keyword included', '');
    else add('H1 heading', 'warn', 'Present but missing the target keyword', 'Work your exact keyword into the H1 naturally.');
    // Words
    if(words >= 600) add('Content depth', 'pass', words + ' words — solid depth', '');
    else if(words >= 300) add('Content depth', 'warn', words + ' words', 'Thin vs. competitors — aim for 600+ words of genuinely useful content.');
    else add('Content depth', 'fail', words + ' words', 'Too thin to rank — expand with examples, steps, and FAQs.');
    // Slug
    if(!slug) add('URL slug', 'warn', 'Not provided', 'Use a short, lowercase, hyphenated slug containing your keyword.');
    else if(slug.length <= 75 && (!kw || slug.indexOf(kw.replace(/\s+/g, '-')) >= 0)) add('URL slug', 'pass', 'Short and keyword-rich', '');
    else add('URL slug', 'warn', 'Could be cleaner', 'Keep slugs under 75 characters, lowercase with hyphens, and include the keyword.');
    // Images
    if(imgs === 0) add('Image SEO', 'warn', 'No images on the page', 'Add 2–4 relevant images with descriptive alt text to boost engagement.');
    else if(alts / imgs >= 0.9) add('Image SEO', 'pass', alts + ' of ' + imgs + ' images have alt text', '');
    else if(alts / imgs >= 0.5) add('Image SEO', 'warn', alts + ' of ' + imgs + ' have alt text', 'Add alt text to every image — it feeds Google Images and accessibility.');
    else add('Image SEO', 'fail', 'Only ' + alts + ' of ' + imgs + ' have alt text', 'Most images lack alt text — describe each one in under 125 characters.');
    // Internal links
    if(links >= 3) add('Internal links', 'pass', links + ' internal links', '');
    else if(links >= 1) add('Internal links', 'warn', 'Only ' + links, 'Link to 3+ related pages to spread authority and keep readers around.');
    else add('Internal links', 'fail', 'None found', 'Add internal links to related content — orphan pages rank poorly.');
    // Speed
    if(speed === 'fast') add('Page speed', 'pass', 'Under 2.5s — excellent', '');
    else if(speed === 'avg') add('Page speed', 'warn', '2.5–4s', 'Compress images and cut heavy scripts to get under 2.5s.');
    else add('Page speed', 'fail', 'Over 4s', 'Slow pages lose rankings and readers — optimize images, caching, and scripts.');
    // Mobile / HTTPS
    add('Mobile-friendly', mobile ? 'pass' : 'fail', mobile ? 'Yes' : 'No', mobile ? '' : 'Most traffic is mobile — fix layout, tap targets, and font sizes.');
    add('HTTPS', https ? 'pass' : 'fail', https ? 'Yes' : 'No', https ? '' : 'HTTPS is a ranking signal and a trust signal — enable it.');

    var score = checks.reduce(function(s, c){ return s + c.pts; }, 0);
    var grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
    var gradeColor = score >= 80 ? '#16a34a' : score >= 60 ? '#d97706' : '#dc2626';
    var icon = { pass: '✅', warn: '⚠️', fail: '❌' };

    var grid = document.getElementById('srcGrid');
    grid.innerHTML = '';
    var gradeCard = document.createElement('div');
    gradeCard.className = 'result-card';
    gradeCard.style.gridColumn = '1 / -1';
    gradeCard.style.textAlign = 'center';
    gradeCard.innerHTML = '<div class="r-name">🏆 Overall grade</div>' +
      '<div style="font-size:4rem;font-weight:800;color:' + gradeColor + ';line-height:1">' + grade + '</div>' +
      '<div class="r-stats"><b>' + score + ' / 100</b></div>' +
      '<div class="progress-bar" style="margin-top:8px"><i style="width:' + score + '%;background:' + gradeColor + '"></i></div>';
    grid.appendChild(gradeCard);

    var fixes = [];
    checks.forEach(function(c){
      var card = document.createElement('div');
      card.className = 'result-card';
      var inner = '<div class="r-name">' + icon[c.status] + ' ' + c.label + '</div>' +
        '<div class="r-stats">' + c.detail + '</div>';
      if(c.fix){ inner += '<div class="r-stats" style="margin-top:6px">💡 <i>' + c.fix + '</i></div>'; fixes.push(c.label + ': ' + c.fix); }
      card.innerHTML = inner;
      grid.appendChild(card);
    });

    document.getElementById('srcSummary').textContent =
      '🎉 Scored ' + score + '/100 (grade ' + grade + ') — ' +
      checks.filter(function(c){ return c.status === 'fail'; }).length + ' failing, ' +
      checks.filter(function(c){ return c.status === 'warn'; }).length + ' to improve.';
    document.getElementById('srcResults').classList.add('show');

    var reportText = 'SEO REPORT CARD — ' + score + '/100 (Grade ' + grade + ')\n\n';
    checks.forEach(function(c){
      reportText += icon[c.status] + ' ' + c.label + ': ' + c.detail + (c.fix ? '\n   Fix: ' + c.fix : '') + '\n';
    });
    document.getElementById('srcCopy').onclick = function(){
      if(navigator.clipboard) navigator.clipboard.writeText(reportText);
      ToolPro.toast('Report copied', 'ok');
    };
    ToolPro.toast('Report card ready', 'ok');
  });
})();
</script>

## How it works

- **Step 1** — Fill in your page details: title, meta description, H1, target keyword, word count, slug, image and link counts, speed, and technical toggles (or load the sample).
- **Step 2** — Hit "Generate Report Card" for a 0–100 score, an A–F letter grade, and a per-check breakdown with fix-it tips for every warning and failure. Copy the full report to share. All processing happens locally in your browser.

## Everyday uses

- **Bloggers** — audit every post before publishing to catch missing metas and thin content.
- **Freelancers** — hand clients a professional-looking SEO report card with their audit.
- **Small business owners** — see exactly which on-page basics your site is missing.
- **Students** — learn on-page SEO by grading real pages and reading the fixes.

**Rule of thumb:** fix the ❌ failures first — missing titles, missing H1s, and slow pages cost the most rankings. Then work through the ⚠️ warnings. A page at 85+ with genuinely helpful content beats a "perfect 100" thin page every time.
