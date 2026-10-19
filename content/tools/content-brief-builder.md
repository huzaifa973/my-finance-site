---
title: "Free SEO Content Brief Builder — Keyword to Article Outline"
description: "Turn a target keyword into a full SEO brief: 5 title options, H2/H3 outline, questions to answer, word count and placement checklists. Free, no sign-up, in-browser."
category: seo
date: 2026-10-19
draft: false
---

Stop staring at a blank page. Enter your target keyword and search intent, and this tool generates a structured content brief — title options, a full H2/H3 outline, questions to answer, target word count, keyword placement checklist, and internal-link slots — ready to copy or download as Markdown.

<div class="tool-shell" id="brfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zM5 20h14v-2H5v2zm0-4h14v-2H5v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>SEO Content Brief Builder</h2>
<p>Keyword in, full article brief out — titles, outline, FAQs, checklists, word count.</p>
</div>
<button type="button" class="theme-toggle" id="brfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Target keyword + intent</p>
<label class="t-label" for="brfKw" style="display:block;margin:.4rem 0 .3rem;font-weight:700">Target keyword</label>
<input type="text" id="brfKw" class="tool-input" placeholder="e.g. how to compress pdf without losing quality">
<label class="t-label" for="brfIntent" style="display:block;margin:.8rem 0 .3rem;font-weight:700">Search intent</label>
<select id="brfIntent" class="tool-input">
<option value="informational" selected>Informational — "how to / what is / guide"</option>
<option value="commercial">Commercial — "best / review / vs / top"</option>
<option value="transactional">Transactional — "buy / download / price / near me"</option>
</select>
<div class="hint">Match the brief to intent: informational wants steps and answers, commercial wants comparisons, transactional wants action.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Brief settings</p>
<div class="settings-panel">
<div class="preset-row" id="brfPresets">
<button type="button" class="preset-chip active" data-w="auto" data-t="5">⚖️ Balanced brief</button>
<button type="button" class="preset-chip" data-w="2000" data-t="7">📚 Pillar post (long)</button>
<button type="button" class="preset-chip" data-w="800" data-t="3">⚡ Quick answer post</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="brfWords">Target word count: <span class="val" id="brfWVal">Auto by intent</span></label>
<input type="range" id="brfWords" min="500" max="4000" step="100" value="0">
<div class="hint">0 = auto (informational 1500 · commercial 1800 · transactional 1200).</div>
</div>
<div class="setting">
<label for="brfTitles">Number of title options</label>
<select id="brfTitles" class="tool-input">
<option value="3">3 titles</option>
<option value="5" selected>5 titles</option>
<option value="7">7 titles</option>
</select>
<div class="hint">More options = more angles to A/B test in Search Console later.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include FAQ block (4 questions)</span><label class="toggle"><input type="checkbox" id="brfFaq" checked><span class="track"></span></label></div>
<div class="hint">FAQ sections win featured snippets and "People also ask" boxes.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include "questions to answer" list</span><label class="toggle"><input type="checkbox" id="brfPaa" checked><span class="track"></span></label></div>
<div class="hint">Question-style subheadings match how people actually search.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate the brief</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="brfBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Generate Content Brief
</button>
<button type="button" class="btn-pro-outline" id="brfCopy" disabled>📋 Copy Markdown</button>
<button type="button" class="btn-pro-outline" id="brfDl" disabled>⬇ Download .md</button>
</div>
<div class="progress-wrap" id="brfProgWrap">
<div class="progress-bar"><i id="brfProgBar"></i></div>
<div class="progress-text" id="brfProgText">Working…</div>
</div>
<div class="results" id="brfResults">
<p class="result-head">📝 Your content brief</p>
<div class="result-summary" id="brfSummary"></div>
<div class="result-grid" id="brfGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Build a brief for every keyword on your list — all in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('brfShell');
  ToolPro.themeToggle(shell, document.getElementById('brfTheme'));

  var kwEl = document.getElementById('brfKw');
  var intentEl = document.getElementById('brfIntent');
  var wordsEl = document.getElementById('brfWords');
  var wVal = document.getElementById('brfWVal');
  var titlesEl = document.getElementById('brfTitles');
  var faqTgl = document.getElementById('brfFaq');
  var paaTgl = document.getElementById('brfPaa');
  var btn = document.getElementById('brfBtn');
  var copyBtn = document.getElementById('brfCopy');
  var dlBtn = document.getElementById('brfDl');
  var lastMd = '';

  var AUTO = { informational: 1500, commercial: 1800, transactional: 1200 };

  document.getElementById('brfPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('brfPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    if(chip.dataset.w === 'auto'){ wordsEl.value = 0; }
    else { wordsEl.value = chip.dataset.w; }
    wordsEl.dispatchEvent(new Event('input'));
    titlesEl.value = chip.dataset.t;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ToolPro.bindSlider(wordsEl, wVal, function(v){ return +v === 0 ? 'Auto by intent' : v + ' words'; });

  function refresh(){ btn.disabled = !kwEl.value.trim(); }
  kwEl.addEventListener('input', refresh);

  function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

  function buildBrief(){
    var kw = kwEl.value.trim();
    var intent = intentEl.value;
    var words = +wordsEl.value === 0 ? AUTO[intent] : +wordsEl.value;
    var nTitles = +titlesEl.value;
    var kwCap = cap(kw);

    var titleSets = {
      informational: [
        kwCap + ': The Complete Step-by-Step Guide',
        'How to ' + kw + ' (Without the Headaches)',
        kwCap + ' Explained: Everything You Need to Know',
        'The Beginner\'s Guide to ' + kw,
        kwCap + ' in 2026: Methods, Tips & Mistakes to Avoid',
        '7 Proven Ways to ' + kw,
        kwCap + ' Made Simple: A Practical Walkthrough'
      ],
      commercial: [
        'Best ' + kw + ': Top Picks Compared & Tested',
        kwCap + ' — Which Option Is Right for You?',
        'Top 7 ' + kw + ' Reviewed (Honest Pros & Cons)',
        kwCap + ' vs the Alternatives: An Honest Comparison',
        'Best ' + kw + ' for Every Budget',
        kwCap + ': Our Hands-On Test Results',
        'What to Look for When Choosing ' + kwCap
      ],
      transactional: [
        kwCap + ': Get Started in Minutes',
        'Where to ' + kw + ' — Prices, Options & What to Know',
        kwCap + ' Deals: What You Get & What to Watch For',
        'How to ' + kw + ' Today (Quick Start)',
        kwCap + ' Pricing Explained',
        'Get ' + kwCap + ': The Fastest Way',
        kwCap + ' — Sign Up & First Steps'
      ]
    };
    var titles = titleSets[intent].slice(0, nTitles);

    var outlines = {
      informational: [
        ['H2', 'What ' + kw + ' actually means'],
        ['H2', 'Why it matters (the real-world payoff)'],
        ['H2', 'How to ' + kw + ': step by step', ['H3', 'Step 1 — Prepare', 'H3', 'Step 2 — Execute', 'H3', 'Step 3 — Verify the result']],
        ['H2', 'Common mistakes to avoid'],
        ['H2', 'Pro tips most guides skip'],
        ['H2', 'FAQ']
      ],
      commercial: [
        ['H2', 'Quick answer: our top pick'],
        ['H2', 'How we compared (methodology)'],
        ['H2', 'The top options, reviewed', ['H3', 'Best overall', 'H3', 'Best budget pick', 'H3', 'Best for beginners']],
        ['H2', 'Side-by-side comparison table'],
        ['H2', 'What to look for (buyer checklist)'],
        ['H2', 'FAQ']
      ],
      transactional: [
        ['H2', 'What you get'],
        ['H2', 'Pricing & plans'],
        ['H2', 'How to get started (3 steps)'],
        ['H2', 'What to know before you commit'],
        ['H2', 'Alternatives worth considering'],
        ['H2', 'FAQ']
      ]
    };

    var questions = [
      'What is ' + kw + '?',
      'How does ' + kw + ' work?',
      'Is ' + kw + ' free?',
      'What are the best alternatives to ' + kw + '?',
      'How long does ' + kw + ' take?',
      'What mistakes should I avoid with ' + kw + '?'
    ];

    var md = '# Content Brief: "' + kw + '"\n\n';
    md += '**Intent:** ' + intent + ' · **Target:** ~' + words + ' words\n\n';
    md += '## Title options\n\n';
    titles.forEach(function(t, i){ md += (i+1) + '. ' + t + '\n'; });
    md += '\n## Outline\n\n';
    outlines[intent].forEach(function(row){
      if(row.length === 2){ md += '### ' + row[0] + ': ' + row[1] + '\n'; }
      else { md += '### ' + row[0] + ': ' + row[1] + '\n'; for(var i = 2; i < row.length; i += 2){ md += '- ' + row[i] + ': ' + row[i+1] + '\n'; } }
    });
    if(paaTgl.checked){
      md += '\n## Questions to answer (use as H3s or FAQ)\n\n';
      questions.forEach(function(q){ md += '- ' + q + '\n'; });
    }
    md += '\n## Keyword placement checklist\n\n';
    md += '- [ ] Exact keyword in the title tag (front-load it)\n';
    md += '- [ ] Keyword in the H1\n';
    md += '- [ ] Keyword (or close variant) in the first 100 words\n';
    md += '- [ ] Keyword in the URL slug\n';
    md += '- [ ] Keyword in the meta description (~150 chars)\n';
    md += '- [ ] 2–3 natural variants in H2/H3 subheadings\n';
    md += '- [ ] Image alt text includes the keyword once\n';
    md += '\n## Internal-link slots\n\n';
    md += '- [ ] Link to 1 related pillar/guide page: ________________\n';
    md += '- [ ] Link to 1 related tool page: ________________\n';
    md += '- [ ] Link to 1 related post: ________________\n';
    md += '\n## Notes\n\n';
    md += '- Write for the ' + intent + ' intent first; SEO structure second.\n';
    md += '- Add one original element (screenshot, data, example) — templates alone don\'t rank.\n';
    if(faqTgl.checked){
      md += '\n## FAQ (publish with FAQ schema)\n\n';
      questions.slice(0, 4).forEach(function(q){ md += '**' + q + '**\n\nAnswer in 2–3 sentences.\n\n'; });
    }
    return { md: md, titles: titles, words: words, intent: intent, questions: questions, outline: outlines[intent] };
  }

  btn.addEventListener('click', function(){
    var b = buildBrief();
    lastMd = b.md;
    var grid = document.getElementById('brfGrid');
    grid.innerHTML = '';

    var tCard = document.createElement('div'); tCard.className = 'result-card';
    var tHtml = '<div class="r-name">🎯 ' + b.titles.length + ' title options</div><ol style="margin:.5rem 0 0 1.2rem;font-size:.9rem">';
    b.titles.forEach(function(t){ tHtml += '<li>' + t.replace(/</g, '&lt;') + '</li>'; });
    tHtml += '</ol>';
    tCard.innerHTML = tHtml;
    grid.appendChild(tCard);

    var oCard = document.createElement('div'); oCard.className = 'result-card';
    var oHtml = '<div class="r-name">🗂 Outline (~' + b.words + ' words, ' + b.intent + ' intent)</div><div class="r-stats" style="margin-top:.4rem">';
    b.outline.forEach(function(row){
      if(row.length === 2){ oHtml += '<b>' + row[0] + ':</b> ' + row[1].replace(/</g, '&lt;') + '<br>'; }
      else { oHtml += '<b>' + row[0] + ':</b> ' + row[1].replace(/</g, '&lt;') + '<br>'; for(var i = 2; i < row.length; i += 2){ oHtml += '&nbsp;&nbsp;• ' + row[i] + ': ' + row[i+1] + '<br>'; } }
    });
    oHtml += '</div>';
    oCard.innerHTML = oHtml;
    grid.appendChild(oCard);

    var cCard = document.createElement('div'); cCard.className = 'result-card';
    cCard.innerHTML = '<div class="r-name">✅ Included in the Markdown export</div><div class="r-stats">Keyword placement checklist (7 points) · 3 internal-link slots · ' +
      (paaTgl.checked ? b.questions.length + ' questions to answer · ' : '') +
      (faqTgl.checked ? 'FAQ block with 4 Q&As · ' : '') + 'writer notes. Hit <b>Copy Markdown</b> or <b>Download .md</b> above.</div>';
    grid.appendChild(cCard);

    document.getElementById('brfSummary').textContent = '✅ Brief ready — ~' + b.words + ' words targeting "' + kwEl.value.trim() + '" (' + b.intent + ').';
    document.getElementById('brfResults').classList.add('show');
    copyBtn.disabled = false; dlBtn.disabled = false;
    ToolPro.toast('Brief generated', 'ok');
  });

  function copyMd(){
    if(!lastMd) return;
    var done = function(){ ToolPro.toast('Brief copied as Markdown', 'ok'); };
    if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(lastMd).then(done, function(){ ToolPro.toast('Copy failed — use Download instead', 'err'); }); }
    else { ToolPro.toast('Clipboard unavailable — use Download instead', 'err'); }
  }
  copyBtn.addEventListener('click', copyMd);
  dlBtn.addEventListener('click', function(){
    if(!lastMd) return;
    var slug = kwEl.value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);
    ToolPro.download('data:text/markdown;charset=utf-8,' + encodeURIComponent(lastMd), 'content-brief-' + (slug || 'keyword') + '.md');
    ToolPro.toast('Brief downloaded', 'ok');
  });

  refresh();
})();
</script>

## How it works

The tool takes your keyword and intent, then assembles a brief from proven SEO structures: title formulas matched to intent (guides for informational, comparisons for commercial, action-led for transactional), a heading outline that mirrors what top-ranking pages cover, question-style subheadings drawn from common search patterns ("what is / how does / is it free"), and a placement checklist covering the seven spots that matter most (title, H1, first 100 words, URL, meta, subheadings, image alt). Word-count targets scale with intent — comparison content needs more room than a quick answer.

**Honest note:** this is a structure generator, not a rank guarantee. It gives you the skeleton top performers use; the content that fills it — original examples, data, screenshots — is what actually earns rankings.

## Everyday uses

- **Bloggers** — turn a keyword list into a month of outlined drafts in an afternoon.
- **Freelance writers** — deliver professional briefs to clients before writing a word.
- **Agencies** — standardize briefs so every writer hits the same SEO checklist.
- **Niche site owners** — plan pillar posts with the depth commercial intent demands.
- **Beginners** — learn what a "good" article structure looks like by generating a few briefs.
