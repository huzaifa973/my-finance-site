---
title: "Free Caesar Cipher Encoder & Decoder"
description: "Encode or decode Caesar ciphers and ROT13 online with any shift from 1–25. A brute-force table shows all shifts at once. Free and private."
category: text
date: 2026-10-12
draft: false
---

## How it works

A Caesar cipher shifts every letter of your message by a fixed number of places in the alphabet. Pick a shift, choose a direction, and see the result live. Not sure which shift a coded message used? The brute-force table at the bottom shows all 25 possible shifts at once so you can spot the readable one.

<div class="tool-shell" id="csrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 2.76 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Caesar Cipher Encoder &amp; Decoder</h2>
<p>Shift letters by any amount — includes ROT13 and a brute-force table of all 25 shifts.</p>
</div>
<button type="button" class="theme-toggle" id="csrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter your message</p>
<div class="setting">
<label for="csrInput">Plain text or coded text</label>
<textarea id="csrInput" class="tool-input" rows="6" placeholder="Type the message to encode or decode…"></textarea>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Shift &amp; direction</p>
<div class="settings-panel">
<div class="preset-row" id="csrChips">
<button type="button" class="preset-chip active" data-shift="13">ROT13 · shift 13</button>
<button type="button" class="preset-chip" data-shift="3">Classic Caesar · shift 3</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="csrShift">Shift amount: <span class="val" id="csrShiftVal">13</span></label>
<input type="range" id="csrShift" min="1" max="25" step="1" value="13">
<div class="hint">Encoding and decoding are the same operation — just pick the opposite direction (or the complementary shift).</div>
</div>
<div class="setting">
<label>Direction</label>
<div class="preset-row" id="csrDirRow">
<button type="button" class="preset-chip active" data-dir="1">→ Shift forward (encode)</button>
<button type="button" class="preset-chip" data-dir="-1">← Shift backward (decode)</button>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Result &amp; brute-force table</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="csrCopy">📋 Copy result</button>
<button type="button" class="btn-pro-outline" id="csrClear">Clear</button>
</div>
<div class="results show" id="csrResults">
<p class="result-head">🔐 Shifted text</p>
<div class="setting">
<textarea id="csrOutput" class="tool-input" rows="6" readonly placeholder="Your shifted text appears here…"></textarea>
</div>
<p class="result-head">🔍 All 25 shifts — spot the readable one</p>
<div id="csrBrute" style="font-family:ui-monospace,Menlo,Consolas,monospace;font-size:.85rem;line-height:1.7;word-break:break-all;">
<p>Type a message above and every possible shift will appear here.</p>
</div>
<div class="hint">Rows show your text shifted forward by each amount. If a message was encoded with shift 3, the readable row is +23.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — encode and decode as many messages as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('csrShell');
  ToolPro.themeToggle(shell, document.getElementById('csrTheme'));
  var input = document.getElementById('csrInput');
  var output = document.getElementById('csrOutput');
  var brute = document.getElementById('csrBrute');
  var shiftRange = document.getElementById('csrShift');
  var shiftVal = document.getElementById('csrShiftVal');
  var chips = document.getElementById('csrChips');
  var dirRow = document.getElementById('csrDirRow');
  var dir = 1;

  ToolPro.bindSlider(shiftRange, shiftVal, function(v){ return v; });

  function caesar(str, shift){
    var s = ((shift % 26) + 26) % 26;
    var out = '';
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 65 && c <= 90) out += String.fromCharCode((c - 65 + s) % 26 + 65);
      else if (c >= 97 && c <= 122) out += String.fromCharCode((c - 97 + s) % 26 + 97);
      else out += str.charAt(i);
    }
    return out;
  }

  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function syncChips(){
    var v = parseInt(shiftRange.value, 10);
    chips.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', parseInt(c.dataset.shift, 10) === v);
    });
  }

  function update(){
    var t = input.value;
    var shift = parseInt(shiftRange.value, 10) * dir;
    output.value = caesar(t, shift);
    if (!t) {
      brute.innerHTML = '<p>Type a message above and every possible shift will appear here.</p>';
      return;
    }
    var sample = t.slice(0, 60).replace(/\n/g, ' ');
    var rows = '';
    for (var k = 1; k <= 25; k++) {
      rows += '<div><strong>+' + k + ':</strong> ' + esc(caesar(sample, k)) + '</div>';
    }
    brute.innerHTML = rows;
  }

  shiftRange.addEventListener('input', function(){
    shiftVal.textContent = shiftRange.value;
    syncChips();
    update();
  });
  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if (!chip) return;
    shiftRange.value = chip.dataset.shift;
    shiftVal.textContent = chip.dataset.shift;
    syncChips();
    update();
    ToolPro.toast('Shift set to ' + chip.dataset.shift);
  });
  dirRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if (!chip) return;
    dir = parseInt(chip.dataset.dir, 10);
    dirRow.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', c === chip);
    });
    update();
  });
  input.addEventListener('input', update);
  document.getElementById('csrCopy').addEventListener('click', function(){
    if (!output.value) { ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(output.value, 'Shifted text copied');
  });
  document.getElementById('csrClear').addEventListener('click', function(){
    input.value = '';
    update();
    ToolPro.toast('Cleared');
  });

  update();
})();
</script>

## Everyday uses

- **Puzzles and geocaching:** decode the shifted clues hidden in puzzle hunts and cache listings.
- **Hiding spoilers:** ROT13 is the classic way to post spoilers that readers reveal only if they choose.
- **Classroom codes:** teach basic cryptography and let students pass "secret" notes.
- **CTF and coding practice:** brute-force a shift cipher instantly instead of trying keys by hand.

## Frequently asked questions

**What is ROT13?**
ROT13 is a Caesar cipher with a shift of 13. Because 13 is half of 26, applying ROT13 twice returns the original text — the same operation both encodes and decodes.

**Is a Caesar cipher secure?**
No — with only 25 possible shifts it can be broken at a glance (that's exactly what the brute-force table does). Use it for fun, puzzles, and learning, never for real secrets.

**What happens to numbers, spaces, and punctuation?**
They pass through unchanged. Only A–Z and a–z letters are shifted, and capital letters stay capital.
