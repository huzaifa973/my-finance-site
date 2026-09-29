---
title: "Free Word Counter"
description: "Count words, characters, sentences, and reading time instantly. Free online word counter — no sign-up, text never leaves your browser."
date: 2026-09-29
draft: false
---

## How it works

Paste or type your text below — counts update live as you type. Nothing is uploaded; everything happens in your browser.

<div class="calc">
  <label for="wcText">Your text</label>
  <textarea id="wcText" rows="8" style="width:100%;padding:.7rem;border:2px solid #dfe7e2;border-radius:8px;font-size:1rem;" placeholder="Paste your text here…" oninput="countWords()"></textarea>
  <div class="result" id="wcResult"></div>
</div>

<script>
function countWords() {
  var t = document.getElementById('wcText').value;
  var out = document.getElementById('wcResult');
  var words = (t.trim().match(/\S+/g) || []).length;
  var chars = t.length;
  var charsNoSpaces = t.replace(/\s/g, '').length;
  var sentences = (t.match(/[^.!?]+[.!?]+/g) || []).length;
  var minutes = words / 200;
  var readTime = minutes < 1 ? 'under a minute' : ('about ' + Math.max(1, Math.round(minutes)) + ' min');
  out.innerHTML =
    '<p><strong>Words:</strong> ' + words.toLocaleString() + '</p>' +
    '<p><strong>Characters:</strong> ' + chars.toLocaleString() + ' (' + charsNoSpaces.toLocaleString() + ' without spaces)</p>' +
    '<p><strong>Sentences:</strong> ' + sentences.toLocaleString() + '</p>' +
    '<p><strong>Reading time:</strong> ' + readTime + '</p>';
}
countWords();
</script>

## Why count words?

- **Students:** check essays against word limits before submitting.
- **Bloggers:** aim for 1,000+ words for in-depth articles that rank.
- **Freelancers:** many clients pay per word — know your count before you quote.
