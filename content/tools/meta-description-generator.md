---
title: "Free Meta Description Generator — SERP Snippet Writer"
description: "Generate 10 SEO meta description drafts from proven templates — benefit-led, question-led, CTA-led — with live 155–160 character counters and keyword checks. Free, no sign-up."
category: seo
date: 2026-10-15
draft: false
---

The meta description is your 160-character sales pitch in the search results. Enter your topic and target keyword, and this generator drafts 10 descriptions from proven templates — benefit-led, question-led, CTA-led and number-led — each with a live character counter against the 155–160 ideal range and a keyword-presence check.

<div class="tool-shell" id="mdgShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm6 4V7h6v2H9zm0 4v-2h8v2H9zm0 4v-2h5v2H9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Meta Description Generator</h2>
<p>10 SERP-ready description drafts — character counters &amp; keyword checks built in.</p>
</div>
<button type="button" class="theme-toggle" id="mdgTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Topic &amp; keyword</p>
<div class="settings-grid">
<div class="setting">
<label for="mdgTopic">Page topic <span class="val" id="mdgTopicCount">0 chars</span></label>
<input type="text" id="mdgTopic" class="tool-input" placeholder="indoor plants for beginners">
<div class="hint">What the page is about, in plain words.</div>
</div>
<div class="setting">
<label for="mdgKeyword">Target keyword <span class="val" id="mdgKwCount">0 chars</span></label>
<input type="text" id="mdgKeyword" class="tool-input" placeholder="best indoor plants">
<div class="hint">The keyword you want bolded in the search results.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Draft settings</p>
<div class="settings-panel">
<div class="preset-row" id="mdgPresets">
<button type="button" class="preset-chip active" data-p="mix">🎯 Balanced mix</button>
<button type="button" class="preset-chip" data-p="benefit">💎 Benefit-led</button>
<button type="button" class="preset-chip" data-p="question">❓ Question-led</button>
<button type="button" class="preset-chip" data-p="cta">👉 CTA-led</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="mdgLen">Target max length: <span class="val" id="mdgLenVal">160 chars</span></label>
<input type="range" id="mdgLen" min="140" max="165" step="1" value="160">
<div class="hint">The 155–160 range is ideal — Google truncates longer ones.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Front-load the keyword (start drafts with it)</span><label class="toggle"><input type="checkbox" id="mdgFront" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Add a 2026 freshness angle where it fits</span><label class="toggle"><input type="checkbox" id="mdgYear" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; pick your draft</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mdgBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9 2 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm6 4V7h6v2H9zm0 4v-2h8v2H9zm0 4v-2h5v2H9z"/></svg>
Generate Descriptions
</button>
<button type="button" class="btn-pro-outline" id="mdgCopyAll" disabled>📋 Copy all</button>
</div>
<div class="progress-wrap" id="mdgProgWrap">
<div class="progress-bar"><i id="mdgProgBar"></i></div>
<div class="progress-text" id="mdgProgText">Drafting descriptions…</div>
</div>
<div class="results" id="mdgResults">
<p class="result-head">✨ Your meta description drafts</p>
<div class="result-summary" id="mdgSummary"></div>
<div id="mdgList" style="margin-top:1rem;"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — draft unlimited meta descriptions, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mdgShell');
  ToolPro.themeToggle(shell, document.getElementById('mdgTheme'));
  var topic = document.getElementById('mdgTopic'), kw = document.getElementById('mdgKeyword');
  var btn = document.getElementById('mdgBtn'), copyAll = document.getElementById('mdgCopyAll');
  var lenR = document.getElementById('mdgLen'), lenV = document.getElementById('mdgLenVal');
  var frontT = document.getElementById('mdgFront'), yearT = document.getElementById('mdgYear');
  var presets = document.getElementById('mdgPresets');
  var style = 'mix';
  var lastDrafts = [];
  ToolPro.bindSlider(lenR, lenV, function(v){ return v + ' chars'; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    style = chip.dataset.p;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  function refresh(){
    document.getElementById('mdgTopicCount').textContent = topic.value.trim().length + ' chars';
    document.getElementById('mdgKwCount').textContent = kw.value.trim().length + ' chars';
    btn.disabled = !(topic.value.trim() && kw.value.trim());
  }
  topic.addEventListener('input', refresh);
  kw.addEventListener('input', refresh);
  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function yr(){ return yearT.checked ? ' in 2026' : ''; }
  function TPL(t, k){
    return [
      { s: 'benefit', f: function(){ return 'Discover the ' + k + ' that save you time and money. Our complete guide to ' + t + ' covers everything you need' + yr() + '.'; } },
      { s: 'benefit', f: function(){ return 'Get better results with ' + t + '. Learn proven tips, avoid common mistakes, and find the ' + k + ' for your needs' + yr() + '.'; } },
      { s: 'benefit', f: function(){ return 'Looking for ' + k + '? This practical guide to ' + t + ' gives you clear steps, real examples, and zero fluff' + yr() + '.'; } },
      { s: 'question', f: function(){ return 'Struggling with ' + t + '? See how the ' + k + ' can help — plus answers to the questions everyone asks' + yr() + '.'; } },
      { s: 'question', f: function(){ return 'What are the ' + k + '? We break down ' + t + ' in plain English so you can decide with confidence' + yr() + '.'; } },
      { s: 'cta', f: function(){ return 'Ready to master ' + t + '? Explore our guide to the ' + k + ' and start today — free tips, no sign-up needed' + yr() + '.'; } },
      { s: 'cta', f: function(){ return 'Start improving your ' + t + ' now. Find the ' + k + ', follow our checklist, and see results faster' + yr() + '.'; } },
      { s: 'number', f: function(){ return Math.floor(Math.random() * 10) + 7 + ' proven ' + k + ' tips inside: a data-backed guide to ' + t + ' for beginners and pros' + yr() + '.'; } },
      { s: 'curiosity', f: function(){ return 'The ' + k + ' most people overlook — and why ' + t + ' experts swear by them. Read the full breakdown' + yr() + '.'; } },
      { s: 'social', f: function(){ return 'Join thousands learning ' + t + ' the smart way. Our guide to the ' + k + ' is updated and beginner-friendly' + yr() + '.'; } }
    ];
  }
  function trimTo(str, max){
    if(str.length <= max) return str;
    var cut = str.slice(0, max);
    var last = cut.lastIndexOf(' ');
    return (last > max * 0.6 ? cut.slice(0, last) : cut).replace(/[.,;:!?]+$/, '') + '…';
  }
  btn.addEventListener('click', function(){
    var t = topic.value.trim(), k = kw.value.trim();
    if(!(t && k)) return;
    var progWrap = document.getElementById('mdgProgWrap'), progBar = document.getElementById('mdgProgBar');
    var resBox = document.getElementById('mdgResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '45%';
    document.getElementById('mdgProgText').textContent = 'Drafting descriptions…';
    setTimeout(function(){
      var max = parseInt(lenR.value, 10);
      var all = TPL(t, k);
      var pool = style === 'mix' ? all : all.filter(function(x){ return x.s === style; }).concat(all.filter(function(x){ return x.s !== style; }));
      var out = [], used = {};
      pool.forEach(function(x){
        var d = x.f();
        if(frontT.checked && d.toLowerCase().indexOf(k.toLowerCase()) > 12){
          d = k.charAt(0).toUpperCase() + k.slice(1) + ': ' + d.charAt(0).toLowerCase() + d.slice(1);
        }
        d = trimTo(d, max);
        if(!used[d]){ used[d] = 1; out.push({ text: d, style: x.s }); }
      });
      out = out.slice(0, 10);
      lastDrafts = out.map(function(x){ return x.text; });
      var ideal = out.filter(function(x){ return x.text.length >= 150 && x.text.length <= 160; }).length;
      var withKw = out.filter(function(x){ return x.text.toLowerCase().indexOf(k.toLowerCase()) !== -1; }).length;
      document.getElementById('mdgSummary').textContent =
        '🎉 ' + out.length + ' drafts — ' + ideal + ' in the ideal 155–160 range, ' + withKw + ' contain your keyword. Copy your favorite below.';
      var list = document.getElementById('mdgList');
      list.innerHTML = '';
      out.forEach(function(x, i){
        var n = x.text.length;
        var inRange = n >= 150 && n <= 160;
        var hasKw = x.text.toLowerCase().indexOf(k.toLowerCase()) !== -1;
        var row = document.createElement('div');
        row.className = 'result-card';
        row.style.cssText = 'margin-bottom:.5rem;text-align:left;align-items:flex-start;';
        row.innerHTML =
          '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:.5rem;width:100%;">' +
          '<div><div style="font-size:.72rem;font-weight:700;color:var(--tp-muted);text-transform:uppercase;letter-spacing:.04em;">Draft ' + (i + 1) + ' · ' + x.style + '</div>' +
          '<div style="font-size:.9rem;margin-top:.25rem;">' + esc(x.text) + '</div></div>' +
          '<button type="button" class="btn-pro-outline" style="font-size:.75rem;padding:.25rem .6rem;flex-shrink:0;">Copy</button>' +
          '</div>' +
          '<div style="margin-top:.4rem;display:flex;gap:.35rem;flex-wrap:wrap;">' +
          '<span class="tool-badge" style="' + (inRange ? 'background:#dcfce7;color:#166534;' : (n > 160 ? 'background:#fee2e2;color:#991b1b;' : 'background:#fef9c3;color:#854d0e;')) + '">' +
          n + ' chars' + (inRange ? ' · ideal ✓' : (n > 160 ? ' · too long — trim it' : ' · a bit short')) + '</span>' +
          '<span class="tool-badge" style="' + (hasKw ? 'background:#dcfce7;color:#166534;' : 'background:#fee2e2;color:#991b1b;') + '">' +
          (hasKw ? 'Keyword present ✓' : 'Keyword missing') + '</span>' +
          '</div>';
        row.querySelector('button').addEventListener('click', (function(txt){
          return function(){ ToolPro.copyText(txt, 'Draft copied'); };
        })(x.text));
        list.appendChild(row);
      });
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyAll.disabled = !!out.length;
      ToolPro.toast(out.length + ' drafts generated', 'ok');
      refresh();
    }, 300);
  });
  copyAll.addEventListener('click', function(){
    ToolPro.copyText(lastDrafts.join('\n\n'), lastDrafts.length + ' drafts copied');
  });
  refresh();
})();
</script>

## How it works

1. **Enter your topic and target keyword** — the keyword is checked in every draft and bolded by Google when it matches the search.
2. **Choose a style preset** — balanced mix, benefit-led, question-led or CTA-led — set your max length (155–160 is ideal) and toggle keyword front-loading and a 2026 freshness angle.
3. **Pick your draft** — each draft shows a live character counter with an ideal-range badge and a keyword-presence check. Copy your favorite, or copy all ten.

Everything runs in your browser — your content never leaves this page.

## Everyday uses

- **Bloggers** — write a click-worthy snippet for every post in seconds, not minutes.
- **SEO freelancers** — deliver 10 options per page and let clients pick their favorite.
- **E-commerce** — punch up product and category page snippets that actually get clicks.
- **Agencies** — standardize snippet length and keyword placement across client sites.
- **Local businesses** — front-load "[service] [city]" keywords so they bold in local results.

**Rule of thumb:** 155–160 characters is the safe zone — Google truncates longer descriptions mid-sentence. Put the keyword near the start and end with a reason to click.
