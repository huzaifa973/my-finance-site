---
title: "Free Case Converter — UPPERCASE, lowercase, Title Case & More"
description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case and 8 more styles instantly. Free, no sign-up — everything stays in your browser."
category: text
date: 2026-10-02
draft: false
---

Paste or type your text below, then click any style to convert it instantly. Word, character, and line counts update live as you type — and everything you enter stays in your browser; nothing is uploaded anywhere.

## How it works

<div class="tool-shell" id="csShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Case Converter</h2>
<p>13 text styles — UPPERCASE, Title Case, camelCase &amp; more — applied in one click.</p>
</div>
<button type="button" class="theme-toggle" id="csTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your text</p>
<div class="setting">
<label for="csInput">Your text</label>
<textarea id="csInput" class="tool-input" rows="6" placeholder="Type or paste your text here…" style="resize:vertical;"></textarea>
<div class="hint">Stats update live as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Pick a conversion style</p>
<div class="settings-panel">
<div class="preset-row" id="csModes">
<button type="button" class="preset-chip" data-m="upper">UPPERCASE</button>
<button type="button" class="preset-chip" data-m="lower">lowercase</button>
<button type="button" class="preset-chip" data-m="sentence">Sentence case</button>
<button type="button" class="preset-chip" data-m="title">Title Case</button>
<button type="button" class="preset-chip" data-m="capital">Capitalize Each Word</button>
<button type="button" class="preset-chip" data-m="toggle">aLtErNaTiNg</button>
<button type="button" class="preset-chip" data-m="inverse">InVeRsE cAsE</button>
<button type="button" class="preset-chip" data-m="camel">camelCase</button>
<button type="button" class="preset-chip" data-m="pascal">PascalCase</button>
<button type="button" class="preset-chip" data-m="snake">snake_case</button>
<button type="button" class="preset-chip" data-m="kebab">kebab-case</button>
<button type="button" class="preset-chip" data-m="constant">CONSTANT_CASE</button>
<button type="button" class="preset-chip" data-m="dot">dot.case</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Copy your converted text</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="csCopyBtn">Copy result</button>
<button type="button" class="btn-pro-outline" id="csClearBtn">Clear</button>
</div>
<div class="results show" id="csResults">
<p class="result-head">📝 Converted result</p>
<textarea id="csOutput" class="tool-output" rows="6" readonly placeholder="Your converted text will appear here…" style="resize:vertical;"></textarea>
<div class="result-summary" style="margin-top:.6rem;">
<span id="csStats" style="font-size:.9rem;">0 characters · 0 words · 0 lines</span>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('csShell');
  ToolPro.themeToggle(shell, document.getElementById('csTheme'));

  var csMinorWords = ['a','an','the','and','but','or','for','nor','as','at','by','in','of','on','to','up','vs'];
  function csCap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }

  function csConvert(mode) {
    var t = document.getElementById('csInput').value;
    var out = t;
    if (mode === 'upper') out = t.toUpperCase();
    else if (mode === 'lower') out = t.toLowerCase();
    else if (mode === 'sentence') out = t.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, function(c){ return c.toUpperCase(); });
    else if (mode === 'title') {
      var parts = t.toLowerCase().split(/(\s+)/);
      var wordIdx = 0;
      var totalWords = parts.filter(function(p){ return !/^\s*$/.test(p); }).length;
      out = parts.map(function(part){
        if (/^\s*$/.test(part)) return part;
        wordIdx++;
        var clean = part.replace(/^[("'\u201c]+|[.,;:!?)"'\u201d]+$/g, '');
        if (csMinorWords.indexOf(clean) !== -1 && wordIdx !== 1 && wordIdx !== totalWords) return part;
        return part.replace(/^(["'(\u201c]*)([a-z])/, function(m, pre, ch){ return pre + ch.toUpperCase(); });
      }).join('');
    }
    else if (mode === 'capital') {
      out = t.toLowerCase().replace(/(?:^|\s|[("'\u201c-])\S/g, function(a){ return a.toUpperCase(); });
    }
    else if (mode === 'toggle') {
      out = t.split('').map(function(c, i){ return i % 2 === 0 ? c.toLowerCase() : c.toUpperCase(); }).join('');
    }
    else if (mode === 'inverse') {
      out = t.split('').map(function(c){ return c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase(); }).join('');
    }
    else {
      var words = t.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().match(/[a-z0-9]+/g) || [];
      if (mode === 'camel') out = words.map(function(w, i){ return i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1); }).join('');
      else if (mode === 'pascal') out = words.map(function(w){ return w.charAt(0).toUpperCase() + w.slice(1); }).join('');
      else if (mode === 'snake') out = words.join('_');
      else if (mode === 'kebab') out = words.join('-');
      else if (mode === 'constant') out = words.join('_').toUpperCase();
      else if (mode === 'dot') out = words.join('.');
    }
    document.getElementById('csOutput').value = out;
    ToolPro.toast('Converted to ' + document.querySelector('#csModes [data-m="' + mode + '"]').textContent.trim(), 'ok');
  }

  function csUpdateStats() {
    var t = document.getElementById('csInput').value;
    var chars = t.length;
    var words = (t.match(/\S+/g) || []).length;
    var lines = t === '' ? 0 : t.split('\n').length;
    document.getElementById('csStats').textContent = chars + ' characters · ' + words + ' words · ' + lines + ' lines';
  }

  document.getElementById('csInput').addEventListener('input', csUpdateStats);

  document.getElementById('csModes').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    csConvert(chip.dataset.m);
  });

  document.getElementById('csCopyBtn').addEventListener('click', function(){
    var out = document.getElementById('csOutput');
    if (!out.value) return;
    ToolPro.copyText(out.value, 'Converted text copied');
  });

  document.getElementById('csClearBtn').addEventListener('click', function(){
    document.getElementById('csInput').value = '';
    document.getElementById('csOutput').value = '';
    csUpdateStats();
  });

  csUpdateStats();
})();
</script>

**When to use each style:**

- **UPPERCASE** — shouting a headline, filling forms that require all-caps, or fixing text that was accidentally typed in caps.
- **lowercase** — normalizing tags, usernames, or any text where capitals cause mismatches.
- **Sentence case** — cleaning up pasted text so it reads like a normal sentence.
- **Title Case** — headlines, book titles, and essay headings (capitalize the first letter of each major word).
- **Capitalize Each Word** — presentation slides and poster titles where you want every word capitalized, including small ones.
- **aLtErNaTiNg / InVeRsE** — playful social-media captions and memes.
- **camelCase / PascalCase / snake_case / CONSTANT_CASE** — naming variables, files, and constants when coding; converting a phrase into code-ready names in one click.
- **kebab-case / dot.case** — URL slugs, CSS class names, and file names.

## Everyday uses

- **Fix accidental CAPS LOCK:** typed a whole email with caps lock on? Convert it back in one click instead of retyping.
- **Format essay and blog headings:** paste a heading and get clean Title Case that looks professional.
- **Clean copied text:** strip random capitalization from PDFs, websites, or documents before reusing the text.
- **Name things for code:** turn "User Profile Settings" into `userProfileSettings`, `user_profile_settings`, or `USER_PROFILE_SETTINGS` instantly.
- **Write social captions:** make bios, captions, and comments stand out with alternating or inverted case.
- **Standardize lists:** convert messy, inconsistently-capitalized lists (names, places, tags) into one uniform style.
