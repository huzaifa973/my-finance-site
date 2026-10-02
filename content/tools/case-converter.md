---
title: "Free Case Converter — UPPERCASE, lowercase, Title Case & More"
description: "Convert text between UPPERCASE, lowercase, Title Case, camelCase, snake_case and 8 more styles instantly. Free, no sign-up — everything stays in your browser."
date: 2026-10-02
draft: false
---

Paste or type your text below, then click any style to convert it instantly. Word, character, and line counts update live as you type — and everything you enter stays in your browser; nothing is uploaded anywhere.

## How it works

<div class="calc">
  <div>
    <label for="ccInput">Your text</label>
    <textarea id="ccInput" rows="6" placeholder="Type or paste your text here…" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;" oninput="ccUpdateStats()"></textarea>
  </div>
  <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-top:.9rem;">
    <button type="button" onclick="ccConvert('upper')" style="margin-top:0;">UPPERCASE</button>
    <button type="button" onclick="ccConvert('lower')" style="margin-top:0;">lowercase</button>
    <button type="button" onclick="ccConvert('sentence')" style="margin-top:0;">Sentence case</button>
    <button type="button" onclick="ccConvert('title')" style="margin-top:0;">Title Case</button>
    <button type="button" onclick="ccConvert('capital')" style="margin-top:0;">Capitalize Each Word</button>
    <button type="button" onclick="ccConvert('toggle')" style="margin-top:0;">aLtErNaTiNg</button>
    <button type="button" onclick="ccConvert('inverse')" style="margin-top:0;">InVeRsE cAsE</button>
    <button type="button" onclick="ccConvert('camel')" style="margin-top:0;">camelCase</button>
    <button type="button" onclick="ccConvert('pascal')" style="margin-top:0;">PascalCase</button>
    <button type="button" onclick="ccConvert('snake')" style="margin-top:0;">snake_case</button>
    <button type="button" onclick="ccConvert('kebab')" style="margin-top:0;">kebab-case</button>
    <button type="button" onclick="ccConvert('constant')" style="margin-top:0;">CONSTANT_CASE</button>
    <button type="button" onclick="ccConvert('dot')" style="margin-top:0;">dot.case</button>
  </div>
  <div>
    <label for="ccOutput">Converted result</label>
    <textarea id="ccOutput" rows="6" readonly placeholder="Your converted text will appear here…" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;background:var(--card);"></textarea>
  </div>
  <div id="ccStats" style="margin-top:.6rem;color:#6b7280;font-size:.9rem;">0 characters · 0 words · 0 lines</div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
    <button type="button" id="ccCopyBtn" onclick="ccCopy()">Copy result</button>
    <button type="button" onclick="ccClear()" style="background:#6b7280;">Clear</button>
  </div>
</div>

<script>
var ccMinorWords = ['a','an','the','and','but','or','for','nor','as','at','by','in','of','on','to','up','vs'];
function ccCap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }
function ccConvert(mode) {
  var t = document.getElementById('ccInput').value;
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
      if (ccMinorWords.indexOf(clean) !== -1 && wordIdx !== 1 && wordIdx !== totalWords) return part;
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
  document.getElementById('ccOutput').value = out;
}
function ccUpdateStats() {
  var t = document.getElementById('ccInput').value;
  var chars = t.length;
  var words = (t.match(/\S+/g) || []).length;
  var lines = t === '' ? 0 : t.split('\n').length;
  document.getElementById('ccStats').textContent = chars + ' characters · ' + words + ' words · ' + lines + ' lines';
}
function ccCopy() {
  var out = document.getElementById('ccOutput');
  var btn = document.getElementById('ccCopyBtn');
  function done() { btn.textContent = 'Copied ✓'; setTimeout(function(){ btn.textContent = 'Copy result'; }, 1500); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(out.value).then(done, function(){ out.select(); document.execCommand('copy'); done(); });
  } else {
    out.select(); document.execCommand('copy'); done();
  }
}
function ccClear() {
  document.getElementById('ccInput').value = '';
  document.getElementById('ccOutput').value = '';
  ccUpdateStats();
}
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
