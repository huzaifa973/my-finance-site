---
title: "Free Text to Binary Converter — Text ↔ Binary Both Ways Online"
description: "Convert text to binary and binary back to text instantly. UTF-8 aware (emoji work), clean 8-bit groups, both directions. Free, private, no sign-up."
category: text
date: 2026-10-13
draft: false
---

Convert text to binary and binary back to text — both directions, fully UTF-8 aware so emoji and non-Latin scripts encode correctly. Clean 8-bit byte groups, optional spacing, instant conversion, all in your browser.

<div class="tool-shell" id="tbShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Text ↔ Binary Converter</h2>
<p>Turn text into binary or decode binary back to text — UTF-8 aware, 8-bit groups, both directions, instantly.</p>
</div>
<button type="button" class="theme-toggle" id="tbTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter text or binary</p>
<div class="setting">
<label for="tbIn">Your input</label>
<textarea id="tbIn" class="tool-input" rows="5" placeholder="Type text to encode… or paste binary like 01001000 01101001" style="resize:vertical;font-family:monospace;"></textarea>
<div class="hint">UTF-8 aware — emoji, accents and non-Latin scripts encode as their real byte sequences.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Direction &amp; format</p>
<div class="settings-panel">
<div class="preset-row" id="tbModes">
<button type="button" class="preset-chip active" data-mode="encode">➡️ Text → Binary</button>
<button type="button" class="preset-chip" data-mode="decode">⬅️ Binary → Text</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Output format</span><label class="toggle"><input type="checkbox" id="tbSpace" checked><span class="track"></span><span class="lbl">Space between 8-bit byte groups</span></label><div class="hint">Uncheck for one continuous bit string.</div></div>
<div class="setting"><span class="t-label">Spaces in text</span><label class="toggle"><input type="checkbox" id="tbSpaceChar" checked><span class="track"></span><span class="lbl">Encode spaces as 00100000</span></label><div class="hint">Uncheck to skip spaces when encoding.</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tbGoBtn">
<svg viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg>
Convert to Binary
</button>
<button type="button" class="btn-pro-outline" id="tbCopyBtn">Copy result</button>
<button type="button" class="btn-pro-outline" id="tbSwapBtn">⇄ Swap</button>
<button type="button" class="btn-pro-outline" id="tbClearBtn">Clear</button>
</div>
<div class="progress-wrap" id="tbProgWrap">
<div class="progress-bar"><i id="tbProgBar"></i></div>
<div class="progress-text" id="tbProgText">Converting…</div>
</div>
<p id="tbErr" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
<div class="results show" id="tbResults">
<p class="result-head">💻 Result</p>
<div class="result-card">
<textarea id="tbOut" class="tool-output" rows="5" readonly placeholder="Your binary (or decoded text) appears here…" style="resize:vertical;font-family:monospace;"></textarea>
<div class="r-stats" id="tbStats" style="margin-top:.4rem;"></div>
</div>
<div class="result-summary" id="tbSummary">Type above and hit Convert — each character becomes its UTF-8 bytes in 8-bit groups.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This converter runs entirely in your browser — convert as much as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('tbShell');
ToolPro.themeToggle(shell,document.getElementById('tbTheme'));
var mode='encode';
var modes=document.getElementById('tbModes');
var errEl=document.getElementById('tbErr');
modes.addEventListener('click',function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  modes.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
  chip.classList.add('active'); mode=chip.dataset.mode;
  document.getElementById('tbGoBtn').innerHTML='<svg viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg> '+(mode==='encode'?'Convert to Binary':'Decode to Text');
});
function encode(){
  errEl.textContent='';
  var t=document.getElementById('tbIn').value;
  if(!t){ document.getElementById('tbOut').value=''; document.getElementById('tbStats').textContent=''; return; }
  var skipSpaces=!document.getElementById('tbSpaceChar').checked;
  var bytes=new TextEncoder().encode(t);
  var groups=[];
  for(var i=0;i<bytes.length;i++){
    if(skipSpaces && bytes[i]===32) continue;
    groups.push(bytes[i].toString(2).padStart(8,'0'));
  }
  var sep=document.getElementById('tbSpace').checked?' ':'';
  var out=groups.join(sep);
  document.getElementById('tbOut').value=out;
  document.getElementById('tbStats').textContent=t.length+' chars → '+bytes.length+' bytes ('+groups.length*8+' bits)';
  document.getElementById('tbSummary').textContent='Encoded '+bytes.length+' UTF-8 byte'+(bytes.length===1?'':'s')+' into '+groups.length+' 8-bit groups.';
  ToolPro.toast('Encoded to binary','ok');
}
function decode(){
  errEl.textContent='';
  var t=document.getElementById('tbIn').value.replace(/\s+/g,'');
  if(!t){ document.getElementById('tbOut').value=''; document.getElementById('tbStats').textContent=''; return; }
  if(/[^01]/.test(t)){ errEl.textContent='That is not binary — only the digits 0 and 1 are allowed (spaces are fine).'; return; }
  if(t.length%8!==0){ errEl.textContent='Binary length is '+t.length+' bits — it must be a multiple of 8 (one byte = 8 bits).'; return; }
  var bytes=new Uint8Array(t.length/8);
  for(var i=0;i<bytes.length;i++) bytes[i]=parseInt(t.substr(i*8,8),2);
  try{
    var out=new TextDecoder('utf-8',{fatal:true}).decode(bytes);
    document.getElementById('tbOut').value=out;
    document.getElementById('tbStats').textContent=bytes.length+' bytes → '+out.length+' chars';
    document.getElementById('tbSummary').textContent='Decoded '+bytes.length+' bytes back to readable text.';
    ToolPro.toast('Decoded to text','ok');
  }catch(e){
    errEl.textContent='Those bytes are not valid UTF-8 text — check for a typo in the bit groups.';
  }
}
function run(){
  var w=document.getElementById('tbProgWrap'); w.classList.add('show');
  document.getElementById('tbProgBar').style.width='60%';
  setTimeout(function(){
    if(mode==='encode') encode(); else decode();
    document.getElementById('tbProgBar').style.width='100%';
    setTimeout(function(){ w.classList.remove('show'); document.getElementById('tbProgBar').style.width='0%'; },300);
  },60);
}
document.getElementById('tbGoBtn').addEventListener('click',run);
document.getElementById('tbCopyBtn').addEventListener('click',function(){
  var v=document.getElementById('tbOut').value; if(!v) return;
  ToolPro.copyText(v,'Result copied to clipboard');
});
document.getElementById('tbSwapBtn').addEventListener('click',function(){
  var out=document.getElementById('tbOut').value;
  if(out){ document.getElementById('tbIn').value=out; }
  var chips=modes.querySelectorAll('.preset-chip');
  chips.forEach(function(c){c.classList.remove('active');});
  mode = mode==='encode' ? 'decode' : 'encode';
  modes.querySelector('[data-mode="'+mode+'"]').classList.add('active');
  document.getElementById('tbGoBtn').innerHTML='<svg viewBox="0 0 24 24"><path d="M4 5h16v3H4V5zm0 5h16v3H4v-3zm0 5h16v3H4v-3z"/></svg> '+(mode==='encode'?'Convert to Binary':'Decode to Text');
  ToolPro.toast('Direction swapped','ok');
});
document.getElementById('tbClearBtn').addEventListener('click',function(){
  document.getElementById('tbIn').value=''; document.getElementById('tbOut').value='';
  document.getElementById('tbStats').textContent=''; errEl.textContent='';
});
})();
</script>

## How it works

Encoding converts your text to its UTF-8 byte sequence first (that's why emoji like 😀 become four byte groups), then writes each byte as an 8-bit group of 0s and 1s. Decoding reverses it: the bit string is split into bytes and read back as UTF-8, with validation that catches stray characters or lengths that aren't multiples of 8.

## Everyday uses

- **Computer science homework:** check your hand-converted binary against the real UTF-8 bytes.
- **Fun messages:** send binary-encoded notes friends have to decode.
- **Debugging data:** see exactly which bytes a string contains when encodings misbehave.
- **Learning encoding:** type an emoji and watch it expand into four byte groups — UTF-8 made visible.
- **Puzzles and CTFs:** decode binary challenges in either direction instantly.

[END EXTERNAL CONTENT]
