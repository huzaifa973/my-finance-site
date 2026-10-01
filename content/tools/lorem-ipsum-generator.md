---
title: "Free Lorem Ipsum Generator"
description: "Generate lorem ipsum placeholder text instantly — paragraphs, words, or sentences — and copy it with one click. Free, no sign-up."
date: 2026-10-01
draft: false
---

## How it works

Choose paragraphs, words, or sentences, set how many you need, and copy the result with one click.

<div class="calc">
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:end;">
    <div><label for="loremType">Generate</label>
      <select id="loremType" style="width:140px;">
        <option value="paragraphs">Paragraphs</option>
        <option value="sentences">Sentences</option>
        <option value="words">Words</option>
      </select>
    </div>
    <div><label for="loremCount">How many</label><input type="number" id="loremCount" value="3" min="1" max="50" step="1" style="width:100px;"></div>
  </div>
  <div style="margin:.75rem 0;display:flex;gap:.5rem;flex-wrap:wrap;">
    <button onclick="genLorem()">Generate</button>
    <button type="button" onclick="copyLorem()">Copy text</button>
  </div>
  <div id="loremCopyMsg" style="font-size:.9rem;color:#15803d;min-height:1.4em;"></div>
  <textarea id="loremOut" rows="10" readonly style="width:100%;padding:.6rem;border:1px solid #d1d5db;border-radius:8px;font-size:1rem;"></textarea>
</div>

<script>
var loremWords = ("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt " +
  "ut labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris nisi " +
  "aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum dolore " +
  "fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt " +
  "mollit anim id est laborum perspiciatis unde omnis iste natus error voluptatem accusantium doloremque " +
  "laudantium totam rem aperiam eaque ab illo inventore veritatis quasi architecto beatae vitae dicta " +
  "explicabo nemo enim ipsam voluptatem quia voluptas aspernatur odit aut fugit consequuntur magni dolores " +
  "eos ratione sequi nesciunt neque porro quisquam dolorem numquam eius modi tempora incidunt magnam quaerat").split(' ');
function loremWord(){ return loremWords[Math.floor(Math.random() * loremWords.length)]; }
function loremSentence(){
  var len = 8 + Math.floor(Math.random() * 8), s = [];
  for (var i = 0; i < len; i++) s.push(loremWord());
  s[0] = s[0].charAt(0).toUpperCase() + s[0].slice(1);
  return s.join(' ') + '.';
}
function loremParagraph(){
  var n = 4 + Math.floor(Math.random() * 3), s = [];
  for (var i = 0; i < n; i++) s.push(loremSentence());
  return s.join(' ');
}
function genLorem(){
  var type = document.getElementById('loremType').value;
  var count = parseInt(document.getElementById('loremCount').value, 10);
  if (isNaN(count) || count < 1) count = 1;
  if (count > 50) count = 50;
  var out = [];
  if (type === 'paragraphs') { for (var i = 0; i < count; i++) out.push(loremParagraph()); }
  else if (type === 'sentences') { for (var j = 0; j < count; j++) out.push(loremSentence()); }
  else { for (var k = 0; k < count; k++) out.push(loremWord()); }
  document.getElementById('loremOut').value = type === 'words'
    ? out.join(' ')
    : out.join('\n\n');
  document.getElementById('loremCopyMsg').textContent = '';
}
function copyLorem(){
  var ta = document.getElementById('loremOut');
  var msg = document.getElementById('loremCopyMsg');
  function done(){ msg.textContent = 'Copied to clipboard!'; }
  function fallback(){
    ta.select();
    try { document.execCommand('copy'); done(); }
    catch (e) { msg.textContent = 'Copy failed — select the text manually.'; }
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ta.value).then(done, fallback);
  } else { fallback(); }
}
genLorem();
</script>

## Everyday uses

- **Mocking up a design:** fill a website wireframe with realistic-looking text before the real copy arrives.
- **Testing layouts:** paste 5 paragraphs into a blog theme to check typography, spacing, and mobile wrapping.
- **Quick placeholders:** need 20 words for a headline area or 3 sentences for a card? Generate exactly that much.
