---
title: "Free Character Counter — Count Characters, Words & More"
description: "Count characters with and without spaces, words, sentences, lines, and reading time instantly as you type. Free, no sign-up — all in your browser."
date: 2026-10-04
draft: false
---

Type or paste your text below and every count updates live as you type — characters with and without spaces, words, sentences, lines, paragraphs, and reading time. Everything you enter stays in your browser; nothing is uploaded anywhere.

## How it works

<div class="calc">
  <div>
    <label for="chcInput">Your text</label>
    <textarea id="chcInput" rows="7" placeholder="Type or paste your text here…" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;" oninput="chcUpdate()"></textarea>
  </div>
  <div id="chcStats" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:.6rem;margin-top:1rem;"></div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:1rem;">
    <button type="button" id="chcCopyBtn" onclick="chcCopy()">Copy text</button>
    <button type="button" onclick="chcClear()" style="background:#6b7280;">Clear</button>
  </div>
</div>

<script>
function chcUpdate() {
  var t = document.getElementById('chcInput').value;
  var chars = t.length;
  var charsNoSpaces = t.replace(/\s/g, '').length;
  var words = (t.match(/\S+/g) || []).length;
  var sentences = (t.match(/[.!?\u2026]+/g) || []).length;
  var lines = t === '' ? 0 : t.split('\n').length;
  var paragraphs = t === '' ? 0 : t.split(/\n\s*\n/).filter(function(p){ return p.trim().length > 0; }).length;
  var readTime = words === 0 ? '—' : (words < 200 ? '< 1 min' : Math.ceil(words / 200) + ' min');
  var stats = [
    ['Characters', chars],
    ['Characters (no spaces)', charsNoSpaces],
    ['Words', words],
    ['Sentences', sentences],
    ['Lines', lines],
    ['Paragraphs', paragraphs],
    ['Reading time', readTime]
  ];
  var html = '';
  stats.forEach(function(s) {
    html += '<div style="background:#fff;border:1px solid var(--border);border-radius:8px;padding:.7rem .8rem;">'
      + '<div style="font-size:1.35rem;font-weight:800;color:var(--accent-dark);line-height:1.2;">' + s[1] + '</div>'
      + '<div style="font-size:.78rem;color:var(--muted);margin-top:.15rem;">' + s[0] + '</div></div>';
  });
  document.getElementById('chcStats').innerHTML = html;
}
function chcCopy() {
  var el = document.getElementById('chcInput');
  var btn = document.getElementById('chcCopyBtn');
  function done() { btn.textContent = 'Copied ✓'; setTimeout(function(){ btn.textContent = 'Copy text'; }, 1500); }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(el.value).then(done, function(){ el.select(); document.execCommand('copy'); done(); });
  } else {
    el.select(); document.execCommand('copy'); done();
  }
}
function chcClear() {
  document.getElementById('chcInput').value = '';
  chcUpdate();
}
chcUpdate();
</script>

## Common character limits cheat sheet

Use the counter above to stay inside these limits before you hit publish:

- **X (Twitter) post** — 280 characters
- **SMS text message** — 160 characters per segment (longer texts split and cost extra)
- **Google meta description** — about 155 characters before it gets cut off in search results
- **Instagram bio** — 150 characters
- **LinkedIn headline** — 220 characters
- **YouTube video title** — 100 characters
- **Reddit post title** — 300 characters
- **TikTok caption** — 2,200 characters

## Everyday uses

- **Write posts that fit:** check an X post or SMS is inside the limit before sending — no surprise splits or cut-off text.
- **Hit assignment minimums:** students can verify an essay meets the required character or word count in seconds.
- **Write better meta descriptions:** keep them near 155 characters so Google shows the whole thing in search results.
- **Tighten your bio:** trim an Instagram bio or LinkedIn headline until it fits the platform's limit without losing meaning.
- **Estimate reading time:** see at a glance whether your draft is a 1-minute skim or a 10-minute read.
- **Clean up pasted text:** spot double line breaks and empty paragraphs by watching the paragraph and line counts.
