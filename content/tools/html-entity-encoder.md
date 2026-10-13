---
title: "Free HTML Entity Encoder & Decoder — Named, Decimal & Hex"
description: "Encode text to HTML entities or decode entities back to text. Named, decimal and hex output, live conversion, copy in one click. Free, private, no sign-up."
category: text
date: 2026-10-13
draft: false
---

Encode text into HTML entities (`&amp;`, `&#60;`, `&#x3C;`) or decode entities back to readable text — with named, decimal and hexadecimal output styles and live conversion as you type. Everything runs in your browser.

<div class="tool-shell" id="heShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HTML Entity Encoder &amp; Decoder</h2>
<p>Encode text to HTML entities or decode them back — named, decimal, or hex, live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="heTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter text or entities</p>
<div class="setting">
<label for="heIn">Your input</label>
<textarea id="heIn" class="tool-input" rows="5" placeholder="Type text to encode… or paste entities like &amp;#169; to decode" style="resize:vertical;font-family:monospace;"></textarea>
<div class="hint">Output updates live as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Direction &amp; entity style</p>
<div class="settings-panel">
<div class="preset-row" id="heModes">
<button type="button" class="preset-chip active" data-mode="encode">➡️ Encode → entities</button>
<button type="button" class="preset-chip" data-mode="decode">⬅️ Decode → text</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="heStyle">Entity style (encode)</label>
<select id="heStyle">
<option value="named" selected>Named — &amp;amp; &amp;lt; &amp;copy;</option>
<option value="decimal">Decimal — &amp;#38; &amp;#60; &amp;#169;</option>
<option value="hex">Hexadecimal — &amp;#x26; &amp;#x3C; &amp;#xA9;</option>
</select>
<div class="hint">Named is most readable; decimal/hex cover every Unicode character.</div>
</div>
<div class="setting"><span class="t-label">Encoding scope</span><label class="toggle"><input type="checkbox" id="heAll" checked><span class="track"></span><span class="lbl">Encode all non-ASCII characters too</span></label><div class="hint">Uncheck to encode only the five XML-critical characters (&amp; &lt; &gt; " ').</div></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Copy your result</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="heCopyBtn">
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Copy result
</button>
<button type="button" class="btn-pro-outline" id="heClearBtn">Clear</button>
</div>
<div class="progress-wrap" id="heProgWrap">
<div class="progress-bar"><i id="heProgBar"></i></div>
<div class="progress-text" id="heProgText">Working…</div>
</div>
<div class="results show" id="heResults">
<p class="result-head">🔣 Result</p>
<div class="result-card">
<textarea id="heOut" class="tool-output" rows="5" readonly placeholder="Encoded entities (or decoded text) appear here…" style="resize:vertical;font-family:monospace;"></textarea>
<div class="r-stats" id="heStats" style="margin-top:.4rem;"></div>
</div>
<div class="result-summary" id="heSummary">Start typing — encoding happens live.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — encode and decode as much as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('heShell');
ToolPro.themeToggle(shell,document.getElementById('heTheme'));
var mode='encode';
var modes=document.getElementById('heModes');
modes.addEventListener('click',function(e){
  var chip=e.target.closest('.preset-chip'); if(!chip) return;
  modes.querySelectorAll('.preset-chip').forEach(function(c){c.classList.remove('active');});
  chip.classList.add('active'); mode=chip.dataset.mode; live();
});
var NAMED={34:'quot',38:'amp',39:'apos',60:'lt',62:'gt',160:'nbsp',161:'iexcl',162:'cent',163:'pound',164:'curren',165:'yen',166:'brvbar',167:'sect',168:'uml',169:'copy',170:'ordf',171:'laquo',172:'not',173:'shy',174:'reg',175:'macr',176:'deg',177:'plusmn',178:'sup2',179:'sup3',180:'acute',181:'micro',182:'para',183:'middot',184:'cedil',185:'sup1',186:'ordm',187:'raquo',188:'frac14',189:'frac12',190:'frac34',191:'iquest',192:'Agrave',193:'Aacute',194:'Acirc',195:'Atilde',196:'Auml',197:'Aring',198:'AElig',199:'Ccedil',200:'Egrave',201:'Eacute',202:'Ecirc',203:'Euml',204:'Igrave',205:'Iacute',206:'Icirc',207:'Iuml',208:'ETH',209:'Ntilde',210:'Ograve',211:'Oacute',212:'Ocirc',213:'Otilde',214:'Ouml',215:'times',216:'Oslash',217:'Ugrave',218:'Uacute',219:'Ucirc',220:'Uuml',221:'Yacute',222:'THORN',223:'szlig',224:'agrave',225:'aacute',226:'acirc',227:'atilde',228:'auml',229:'aring',230:'aelig',231:'ccedil',232:'egrave',233:'eacute',234:'ecirc',235:'euml',236:'igrave',237:'iacute',238:'icirc',239:'iuml',240:'eth',241:'ntilde',242:'ograve',243:'oacute',244:'ocirc',245:'otilde',246:'ouml',247:'divide',248:'oslash',249:'ugrave',250:'uacute',251:'ucirc',252:'uuml',253:'yacute',254:'thorn',255:'yuml',338:'OElig',339:'oelig',352:'Scaron',353:'scaron',376:'Yuml',402:'fnof',710:'circ',732:'tilde',913:'Alpha',914:'Beta',915:'Gamma',916:'Delta',917:'Epsilon',918:'Zeta',919:'Eta',920:'Theta',921:'Iota',922:'Kappa',923:'Lambda',924:'Mu',925:'Nu',926:'Xi',927:'Omicron',928:'Pi',929:'Rho',931:'Sigma',932:'Tau',933:'Upsilon',934:'Phi',935:'Chi',936:'Psi',937:'Omega',945:'alpha',946:'beta',947:'gamma',948:'delta',949:'epsilon',950:'zeta',951:'eta',952:'theta',953:'iota',954:'kappa',955:'lambda',956:'mu',957:'nu',958:'xi',959:'omicron',960:'pi',961:'rho',962:'sigmaf',963:'sigma',964:'tau',965:'upsilon',966:'phi',967:'chi',968:'psi',969:'omega',8194:'ensp',8195:'emsp',8201:'thinsp',8204:'zwnj',8205:'zwj',8206:'lrm',8207:'rlm',8211:'ndash',8212:'mdash',8216:'lsquo',8217:'rsquo',8218:'sbquo',8220:'ldquo',8221:'rdquo',8222:'bdquo',8224:'dagger',8225:'Dagger',8226:'bull',8230:'hellip',8240:'permil',8242:'prime',8243:'Prime',8254:'oline',8364:'euro',8482:'trade',8800:'ne',8804:'le',8805:'ge'};
var CRITICAL={38:1,60:1,62:1,34:1,39:1};
function encodeChar(cp,style,all){
  var shouldEncode = !!CRITICAL[cp] || (all && cp>127);
  if(!shouldEncode) return String.fromCodePoint(cp);
  if(style==='named' && NAMED[cp]) return '&'+NAMED[cp]+';';
  if(style==='hex') return '&#x'+cp.toString(16).toUpperCase()+';';
  return '&#'+cp+';';
}
function encodeText(s){
  var style=document.getElementById('heStyle').value;
  var all=document.getElementById('heAll').checked;
  var out='';
  for(var i=0;i<s.length;){
    var cp=s.codePointAt(i);
    out+=encodeChar(cp,style,all);
    i+= cp>0xFFFF ? 2 : 1;
  }
  return out;
}
var decoderEl=document.createElement('textarea');
function decodeText(s){
  decoderEl.innerHTML=s;
  return decoderEl.value;
}
function live(){
  var t=document.getElementById('heIn').value;
  var outEl=document.getElementById('heOut');
  if(!t){ outEl.value=''; document.getElementById('heStats').textContent=''; return; }
  var out = mode==='encode' ? encodeText(t) : decodeText(t);
  outEl.value=out;
  var n=mode==='encode' ? (out.match(/&[#\w]+;/g)||[]).length : out.length;
  document.getElementById('heStats').textContent = mode==='encode'
    ? t.length+' chars → '+n+' entities ('+out.length+' chars)'
    : 'Decoded to '+n+' chars';
  document.getElementById('heSummary').textContent = mode==='encode'
    ? 'Live-encoded with '+document.getElementById('heStyle').value+' entities.'
    : 'Live-decoded back to plain text.';
}
var lt=null;
document.getElementById('heIn').addEventListener('input',function(){ clearTimeout(lt); lt=setTimeout(live,150); });
document.getElementById('heStyle').addEventListener('change',live);
document.getElementById('heAll').addEventListener('change',live);
document.getElementById('heCopyBtn').addEventListener('click',function(){
  var v=document.getElementById('heOut').value; if(!v) return;
  ToolPro.copyText(v,'Result copied to clipboard');
});
document.getElementById('heClearBtn').addEventListener('click',function(){
  document.getElementById('heIn').value=''; live(); ToolPro.toast('Cleared','ok');
});
live();
})();
</script>

## How it works

Encoding scans every character and replaces it with its entity: the five XML-critical characters (`& < > " '`) are always encoded, and with the full toggle on, every non-ASCII character (accented letters, symbols, emoji) gets a named, decimal, or hexadecimal entity. Decoding uses the browser's own HTML parser on an off-screen element, so even obscure entities and numeric references resolve exactly as a browser would render them.

## Everyday uses

- **Safe code samples:** paste code into a blog or CMS without the browser swallowing your `<div>` tags.
- **Email templates:** encode special characters so newsletters render the same in every client.
- **Debugging scraped HTML:** decode entity-heavy source into readable text.
- **XSS-safe output:** see exactly what user input becomes when properly escaped.
- **Learning HTML:** type `© € —` and watch the named entities appear.

[END EXTERNAL CONTENT]
