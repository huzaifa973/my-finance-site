---
title: "Free Text to Hex Converter — Encode & Decode"
description: "Convert text to hex and back free: UTF-8 encoding with case and separator options, plus hex-to-text decoding with validation. No sign-up, private."
category: text
date: 2026-10-14
draft: false
---

Need the hexadecimal behind your text — for debugging, color codes, or crypto work? This tool **encodes text to hex** (UTF-8) with your choice of letter case and byte separator, and **decodes hex back to text** with strict validation. All local, all instant.

<div class="tool-shell" id="hxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v16h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Text to Hex Converter</h2>
<p>Encode text → hex or decode hex → text, with case &amp; separator control.</p>
</div>
<button type="button" class="theme-toggle" id="hxTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose a direction</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="hxTabEnc">🔤 Encode: text → hex</button>
<button type="button" class="preset-chip" id="hxTabDec">🔡 Decode: hex → text</button>
</div>
<div id="hxEncPanel">
<div class="settings-grid">
<div class="setting">
<label for="hxCase">Letter case</label>
<select id="hxCase">
<option value="lower" selected>lowercase (a1b2c3)</option>
<option value="upper">UPPERCASE (A1B2C3)</option>
</select>
</div><div class="setting">
<label for="hxSep">Byte separator</label>
<select id="hxSep">
<option value="none" selected>none — a1b2c3</option>
<option value="space">space — a1 b2 c3</option>
<option value="colon">colon — a1:b2:c3</option>
</select>
</div>
</div>
<textarea id="hxText" class="tool-input" rows="5" placeholder="Type or paste text to encode…" spellcheck="false" style="margin-top:10px;"></textarea>
</div>
<div id="hxDecPanel" style="display:none;">
<textarea id="hxHex" class="tool-input" rows="5" placeholder="Paste hex to decode, e.g. 48656c6c6f…" spellcheck="false" style="font-family:monospace;"></textarea>
<div class="hint">Spaces, colons and 0x prefixes are ignored automatically.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hxGo">
<svg viewBox="0 0 24 24"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
Convert
</button>
<button type="button" class="btn-pro-outline" id="hxCopy" disabled>📋 Copy result</button>
</div>
<div class="results" id="hxResults">
<p class="result-head" id="hxHead">Result</p>
<div class="result-summary" id="hxStatus"></div>
<pre class="tool-output" id="hxOut" style="white-space:pre-wrap;word-break:break-all;max-height:320px;overflow:auto;font-size:.82rem;font-family:monospace;display:none;"></pre>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Encode and decode unlimited text — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
'use strict';
var shell = document.getElementById('hxShell');
ToolPro.themeToggle(shell, document.getElementById('hxTheme'));
var mode = 'enc';
var lastOut = '';
function setMode(m){
  mode = m;
  document.getElementById('hxEncPanel').style.display = m === 'enc' ? '' : 'none';
  document.getElementById('hxDecPanel').style.display = m === 'dec' ? '' : 'none';
  document.getElementById('hxResults').classList.remove('show');
  document.getElementById('hxCopy').disabled = true;
  lastOut = '';
}
document.getElementById('hxTabEnc').addEventListener('click', function(){ setMode('enc'); });
document.getElementById('hxTabDec').addEventListener('click', function(){ setMode('dec'); });
function showResult(head, status, out, ok){
  document.getElementById('hxHead').textContent = head;
  document.getElementById('hxStatus').textContent = status;
  var o = document.getElementById('hxOut');
  if(out === null){ o.style.display = 'none'; lastOut = ''; }
  else { o.textContent = out; o.style.display = 'block'; lastOut = out; }
  document.getElementById('hxResults').classList.add('show');
  document.getElementById('hxCopy').disabled = !ok;
}
function encode(){
  var text = document.getElementById('hxText').value;
  if(!text){ showResult('⚠️ Nothing to encode', 'Type some text first.', null, false); ToolPro.toast('Type some text first', 'err'); return; }
  var bytes = new TextEncoder().encode(text);
  var upper = document.getElementById('hxCase').value === 'upper';
  var sep = document.getElementById('hxSep').value;
  var glue = sep === 'space' ? ' ' : (sep === 'colon' ? ':' : '');
  var hex = [];
  for(var i = 0; i < bytes.length; i++){
    var h = bytes[i].toString(16);
    if(h.length < 2) h = '0' + h;
    hex.push(upper ? h.toUpperCase() : h);
  }
  var out = hex.join(glue);
  showResult('✅ Encoded to hex', text.length + ' character' + (text.length === 1 ? '' : 's') + ' → ' + bytes.length + ' bytes (' + out.length + ' hex chars).', out, true);
  ToolPro.toast('Encoded', 'ok');
}
function decode(){
  var raw = document.getElementById('hxHex').value;
  if(!raw.trim()){ showResult('⚠️ Nothing to decode', 'Paste some hex first.', null, false); ToolPro.toast('Paste some hex first', 'err'); return; }
  var clean = raw.replace(/0x/gi, '').replace(/[\s:_\-]/g, '');
  if(/[^0-9a-fA-F]/.test(clean)){
    var bad = clean.match(/[^0-9a-fA-F]/)[0];
    showResult('❌ Invalid hex', 'Found a non-hex character: "' + bad + '". Hex uses 0-9 and a-f only.', null, false);
    ToolPro.toast('Invalid hex characters', 'err');
    return;
  }
  if(clean.length % 2 !== 0){
    showResult('❌ Invalid hex', 'Odd number of hex digits (' + clean.length + ') — every byte needs two digits.', null, false);
    ToolPro.toast('Hex length must be even', 'err');
    return;
  }
  var bytes = new Uint8Array(clean.length / 2);
  for(var i = 0; i < bytes.length; i++){ bytes[i] = parseInt(clean.substr(i * 2, 2), 16); }
  try {
    var text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    showResult('✅ Decoded to text', bytes.length + ' bytes → ' + text.length + ' character' + (text.length === 1 ? '' : 's') + '.', text, true);
    ToolPro.toast('Decoded', 'ok');
  } catch(e){
    showResult('❌ Invalid UTF-8', 'The bytes are valid hex but do not form valid UTF-8 text.', null, false);
    ToolPro.toast('Not valid UTF-8', 'err');
  }
}
document.getElementById('hxGo').addEventListener('click', function(){ mode === 'enc' ? encode() : decode(); });
document.getElementById('hxCopy').addEventListener('click', function(){
  if(lastOut) ToolPro.copyText(lastOut, 'Result copied');
});
})();
</script>

## How it works

1. **Pick a direction** — Encode (text → hex) or Decode (hex → text) using the tabs.
2. **Enter your input** — for encoding, choose letter case and a byte separator (none, space, or colon).
3. **Hit Convert** — the result appears instantly with byte stats; copy it with one click.

## Everyday uses

- **Developers** — inspect binary payloads, hashes and encoded tokens while debugging.
- **Designers** — verify hex color codes before pasting them into CSS.
- **Students** — see exactly how UTF-8 turns characters (including emoji) into bytes.
- **Security learners** — practice hex encoding, a building block of cryptography.
- **Data wranglers** — convert between human-readable text and machine-readable hex dumps.

## Frequently asked questions

**What encoding is used?**
UTF-8 — the web standard. ASCII text encodes to one byte per character; emoji and non-Latin scripts use multiple bytes each.

**Why is my hex twice as long as my text?**
Every byte becomes two hex digits, so plain English text doubles in length. That's normal.

**Can I decode hex with spaces or 0x prefixes?**
Yes — spaces, colons, underscores, dashes and 0x prefixes are stripped automatically before decoding.

**Is this the same as encryption?**
No. Hex encoding is just a different way of writing the same bytes — anyone can decode it. Never use it to hide secrets.
