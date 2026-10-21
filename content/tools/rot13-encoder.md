---
title: "ROT13 Encoder & Decoder Free — ROT13 / ROT47 Text Converter"
description: "Encode or decode ROT13 and ROT47 text instantly in your browser with live output. Free, private, no sign-up — great for puzzles and spoilers."
category: text
date: 2026-10-20
draft: false
---

ROT13 is the classic letter-shuffling cipher — perfect for hiding spoilers, solving puzzles, and geocaching hints. Type or paste text and watch the encoded output appear live. Switch to ROT47 for a stronger shuffle that also scrambles numbers and symbols. Encoding and decoding are the same operation, so it works both ways.

<div class="tool-shell" id="rotShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17.65 6.35A8 8 0 1 0 19.74 14h-2.08a6 6 0 1 1-1.41-6.24L13 11h7V4l-2.35 2.35z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>ROT13 Encoder / Decoder</h2>
<p>Live ROT13 &amp; ROT47 encoding — type and watch it transform instantly.</p>
</div>
<button type="button" class="theme-toggle" id="rotTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your text</p>
<textarea class="tool-input" id="rotIn" rows="6" placeholder="Type or paste text here — the output updates live…"></textarea>
<div class="hint"><span id="rotCount">0 characters</span> · ROT is its own inverse: run it again to decode.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Cipher mode</p>
<div class="settings-panel">
<div class="preset-row" id="rotPresets">
<button type="button" class="preset-chip active" data-m="rot13">🔤 ROT13 — letters only</button>
<button type="button" class="preset-chip" data-m="rot47">🔢 ROT47 — letters + numbers + symbols</button>
</div>
<div class="hint">ROT13 shifts A↔N, B↔O… ROT47 shifts every printable ASCII character by 47 places.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Live output</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="rotCopy">
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Copy Output
</button>
<button type="button" class="btn-pro-outline" id="rotSwap">⇅ Swap input/output</button>
<button type="button" class="btn-pro-outline" id="rotClear">Clear</button>
</div>
<div class="results show" id="rotResults">
<p class="result-head">🔁 Output</p>
<div class="result-summary" id="rotSummary">Start typing — the result appears here instantly.</div>
<div class="result-grid" id="rotGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Encode as much text as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('rotShell');
ToolPro.themeToggle(shell, document.getElementById('rotTheme'));
var inp=document.getElementById('rotIn');
var summary=document.getElementById('rotSummary'), grid=document.getElementById('rotGrid');
var mode='rot13';
var presets=document.getElementById('rotPresets');
presets.addEventListener('click', function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active'); mode=chip.dataset.m; render();
});

function rot13(s){
  return s.replace(/[a-zA-Z]/g, function(c){
    var base=c<='Z'?65:97;
    return String.fromCharCode((c.charCodeAt(0)-base+13)%26+base);
  });
}
function rot47(s){
  return s.replace(/[!-~]/g, function(c){
    return String.fromCharCode(33+((c.charCodeAt(0)-33+47)%94));
  });
}

function render(){
  var text=inp.value;
  var n=text.length;
  document.getElementById('rotCount').textContent=n+(n===1?' character':' characters');
  var out= mode==='rot13' ? rot13(text) : rot47(text);
  grid.innerHTML='';
  if(!text){
    summary.textContent='Start typing — the result appears here instantly.';
    return;
  }
  var card=document.createElement('div'); card.className='result-card';
  card.innerHTML='<div class="r-name">'+(mode==='rot13'?'🔤 ROT13 output':'🔢 ROT47 output')+'</div>'+
    '<textarea class="tool-input" rows="6" readonly style="font-family:monospace;margin-top:8px"></textarea>'+
    '<div class="r-stats" style="margin-top:6px">'+n+' characters · '+(mode==='rot13'?'letters shifted by 13':'all printable characters shifted by 47')+'</div>';
  card.querySelector('textarea').value=out;
  grid.appendChild(card);
  summary.textContent='✅ Encoded with '+mode.toUpperCase()+' — run the output through again to decode.';
}

inp.addEventListener('input', render);
document.getElementById('rotCopy').addEventListener('click', function(){
  var ta=grid.querySelector('textarea');
  if(!ta){ ToolPro.toast('Nothing to copy yet','err'); return; }
  ta.select(); document.execCommand('copy');
  ToolPro.toast('Output copied','ok');
});
document.getElementById('rotSwap').addEventListener('click', function(){
  var ta=grid.querySelector('textarea');
  if(!ta){ ToolPro.toast('Nothing to swap yet','err'); return; }
  inp.value=ta.value; render();
  ToolPro.toast('Swapped — this decodes it back','ok');
});
document.getElementById('rotClear').addEventListener('click', function(){
  inp.value=''; render();
});
render();
})();
</script>

## How it works

- **Step 1** — Type or paste your text. The output appears instantly — no button needed.
- **Step 2** — Pick **ROT13** (classic letter shift) or **ROT47** (also scrambles numbers and symbols).
- **Step 3** — Copy the output, or hit **Swap** to run it back through and decode.

## Everyday uses

- **Spoiler tags** — hide movie and game spoilers in forums and chats.
- **Puzzles** — create and solve geocaching hints, riddles, and ARG clues.
- **Learning** — see how substitution ciphers work with your own text.
- **Easter eggs** — bury ROT13 messages in READMEs and comments.
- **ROT47** — obfuscate serial-like strings that include numbers and symbols.

## Frequently asked questions

**How do I decode ROT13?**
Run the encoded text through ROT13 again — it's its own inverse. "Uryyb" becomes "Hello" and back again.

**What's the difference between ROT13 and ROT47?**
ROT13 only shifts the 26 letters. ROT47 shifts all 94 printable ASCII characters (letters, digits, punctuation), so it scrambles everything.

**Is ROT13 encryption?**
No — it's obfuscation, not security. Anyone can decode it instantly. Never use it for passwords or sensitive data.

**Does my text leave my browser?**
No. The transformation runs locally in JavaScript — nothing is uploaded anywhere.

[escaped: END EXTERNAL CONTENT]
