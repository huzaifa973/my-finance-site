---
title: "Free HTML Formatter — Pretty Print HTML Online"
description: "Pretty-print and format HTML online free — clean indentation, raw pre/script/style handling, inline short tags. No sign-up, runs in your browser."
category: text
date: 2026-10-17
draft: false
---

Paste messy, minified, or single-line HTML and get neatly indented, readable markup instantly. Void elements, comments, and doctypes are handled correctly, while the contents of `pre`, `script`, and `style` tags are left byte-for-byte untouched. Everything runs in your browser — free, private, no sign-up.

<div class="tool-shell" id="hfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M7.4 7l-1.4 1.4 2.6 2.6-2.6 2.6L7.4 14 11 10.4 7.4 7zm9.2 0L13 10.4l3.6 3.6 1.4-1.4-2.6-2.6 2.6-2.6-1.4-1.4zM13.5 5l-2 14 1.9.4 2-14-1.9-.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HTML Formatter</h2>
<p>Paste messy or minified HTML and get neatly indented, readable markup — instantly.</p>
</div>
<button type="button" class="theme-toggle" id="hfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your HTML</p>
<div class="setting">
<label for="hfInput">HTML code</label>
<textarea id="hfInput" class="tool-input" rows="6" placeholder="Paste minified or messy HTML here…" style="resize:vertical;"></textarea>
<div class="hint">Formatting happens live as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Format settings</p>
<div class="settings-panel">
<div class="preset-row" id="hfPresets">
<button type="button" class="preset-chip active" data-i="2">2 spaces</button>
<button type="button" class="preset-chip" data-i="4">4 spaces</button>
<button type="button" class="preset-chip" data-i="8">8 spaces</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="hfIndent">Indent size: <span class="val" id="hfIndentVal">2 spaces</span></label>
<input type="range" id="hfIndent" min="2" max="8" value="2">
<div class="hint">Spaces per indent level.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="hfBlank" checked><span></span> Remove blank lines</label>
<div class="hint">Collapse empty lines in the output.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="hfInline" checked><span></span> Inline short elements</label>
<div class="hint">Keep text-only elements under ~60 chars on one line.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Get your formatted HTML</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hfGo" disabled>Format HTML</button>
<button type="button" class="btn-pro-outline" id="hfCopy">Copy output</button>
<button type="button" class="btn-pro-outline" id="hfClear">Clear</button>
</div>
<div class="results show" id="hfResults">
<p class="result-head">✨ Formatted result</p>
<textarea id="hfOutput" class="tool-output" rows="6" readonly placeholder="Your formatted HTML will appear here…" style="resize:vertical;"></textarea>
<div class="result-summary" style="margin-top:.6rem;">
<span id="hfStats" style="font-size:.9rem;">0 tags formatted</span>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Format as much HTML as you like — your markup never leaves your browser.</p>
</div>
</div>
</div>

<script>
function formatHTML(html, opts) {
  opts = opts || {};
  var indentSize = opts.indentSize || 2;
  if (indentSize < 1) indentSize = 1;
  if (indentSize > 8) indentSize = 8;
  var removeBlank = opts.removeBlankLines !== false;
  var inlineShort = !!opts.inlineShort;

  var VOID = { area:1, base:1, br:1, col:1, embed:1, hr:1, img:1, input:1, link:1,
    meta:1, param:1, source:1, track:1, wbr:1 };
  var RAW = { pre:1, script:1, style:1 };
  function has(map, k) { return Object.prototype.hasOwnProperty.call(map, k); }
  function rep(s, n) { var r = ''; for (var k = 0; k < n; k++) r += s; return r; }

  // ---------- tokenizer ----------
  var tokens = [];
  var i = 0, n = html.length;
  while (i < n) {
    if (html.substr(i, 4) === '<!--') {
      var e = html.indexOf('-->', i + 4);
      e = e === -1 ? n : e + 3;
      tokens.push({ t: 'comment', v: html.slice(i, e) });
      i = e; continue;
    }
    if (html.substr(i, 9).toLowerCase() === '<!doctype') {
      var e2 = html.indexOf('>', i + 9);
      e2 = e2 === -1 ? n : e2 + 1;
      tokens.push({ t: 'doctype', v: html.slice(i, e2) });
      i = e2; continue;
    }
    if (html.charAt(i) === '<') {
      var k = i + 1, q = null;
      while (k < n) {
        var ch = html.charAt(k);
        if (q) { if (ch === q) q = null; }
        else if (ch === '"' || ch === "'") q = ch;
        else if (ch === '>') break;
        k++;
      }
      k = Math.min(n, k + 1);
      var tag = html.slice(i, k);
      var m = /^<\/?\s*([a-zA-Z0-9-]+)/.exec(tag);
      var name = m ? m[1].toLowerCase() : '';
      var isClose = tag.charAt(1) === '/';
      var isSelf = /\/>$/.test(tag) || (!isClose && has(VOID, name));
      tokens.push({ t: 'tag', v: tag, name: name, close: isClose, self: isSelf });
      i = k; continue;
    }
    var nx = html.indexOf('<', i);
    if (nx === -1) nx = n;
    tokens.push({ t: 'text', v: html.slice(i, nx) });
    i = nx;
  }

  // ---------- emitter ----------
  var out = [], tagCount = 0;
  function emitLine(depth, s) {
    if (depth < 0) depth = 0;
    out.push(rep(' ', depth * indentSize) + s);
  }
  function proc(p, depth) {
    while (p < tokens.length) {
      var tk = tokens[p];
      if (tk.t === 'text') {
        var txt = tk.v.replace(/\s+/g, ' ').trim();
        if (txt !== '') emitLine(depth, txt);
        p++; continue;
      }
      if (tk.t === 'comment' || tk.t === 'doctype') {
        var cv = tk.v.trim();
        if (cv !== '' || !removeBlank) emitLine(depth, cv);
        p++; continue;
      }
      tagCount++;
      if (tk.close) {
        emitLine(depth > 0 ? depth - 1 : 0, tk.v);
        return p + 1;
      }
      if (tk.self) { emitLine(depth, tk.v); p++; continue; }
      if (has(RAW, tk.name)) {
        emitLine(depth, tk.v);
        p++;
        var raw = '';
        while (p < tokens.length) {
          var rt = tokens[p];
          if (rt.t === 'tag' && rt.close && rt.name === tk.name) break;
          raw += rt.v; p++;
        }
        var rl = raw.split('\n'), r;
        for (r = 0; r < rl.length; r++) {
          if (removeBlank && /^\s*$/.test(rl[r])) continue;
          out.push(rl[r]);
        }
        if (p < tokens.length) { tagCount++; emitLine(depth, tokens[p].v); p++; }
        continue;
      }
      if (inlineShort) {
        var t1 = tokens[p + 1], t2 = tokens[p + 2];
        if (t1 && t1.t === 'text' && t2 && t2.t === 'tag' && t2.close && t2.name === tk.name) {
          var inner = t1.v.replace(/\s+/g, ' ').trim();
          if (inner !== '' && inner.length <= 60 && inner.indexOf('<') === -1) {
            emitLine(depth, tk.v + inner + t2.v);
            tagCount += 2; p += 3; continue;
          }
        }
      }
      emitLine(depth, tk.v);
      p = proc(p + 1, depth + 1);
    }
    return p;
  }
  proc(0, 0);
  return { html: out.join('\n'), tags: tagCount };
}
(function(){
var shell = document.getElementById('hfShell');
ToolPro.themeToggle(shell, document.getElementById('hfTheme'));
var input = document.getElementById('hfInput');
var output = document.getElementById('hfOutput');
var goBtn = document.getElementById('hfGo');
var indentR = document.getElementById('hfIndent');
var blankT = document.getElementById('hfBlank');
var inlineT = document.getElementById('hfInline');
var presets = document.getElementById('hfPresets');
var statsEl = document.getElementById('hfStats');
ToolPro.bindSlider(indentR, document.getElementById('hfIndentVal'), function(v){ return v + ' spaces'; });
function hfMarkChips(){
var cur = indentR.value;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.toggle('active', c.getAttribute('data-i') === cur); });
}
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
indentR.value = chip.getAttribute('data-i');
indentR.dispatchEvent(new Event('input'));
hfMarkChips();
});
indentR.addEventListener('input', hfMarkChips);
function hfRun(silent){
var src = input.value;
goBtn.disabled = !src.trim();
if (!src.trim()) { output.value = ''; statsEl.textContent = '0 tags formatted'; return; }
var r;
try {
r = formatHTML(src, { indentSize: parseInt(indentR.value, 10), removeBlankLines: blankT.checked, inlineShort: inlineT.checked });
}
catch (err) {
output.value = src;
statsEl.textContent = '0 tags formatted';
ToolPro.toast('Could not fully parse \u2014 showing original', 'err');
return;
}
output.value = r.html;
statsEl.textContent = r.tags + ' tags formatted';
if (!silent) ToolPro.toast('HTML formatted', 'ok');
}
input.addEventListener('input', function(){ hfRun(true); });
indentR.addEventListener('change', function(){ hfRun(true); });
blankT.addEventListener('change', function(){ hfRun(true); });
inlineT.addEventListener('change', function(){ hfRun(true); });
goBtn.addEventListener('click', function(){ hfRun(false); });
document.getElementById('hfCopy').addEventListener('click', function(){
if (!output.value) return;
ToolPro.copyText(output.value, 'Formatted HTML copied');
});
document.getElementById('hfClear').addEventListener('click', function(){
input.value = ''; output.value = '';
statsEl.textContent = '0 tags formatted';
goBtn.disabled = true; input.focus();
});
})();
</script>

## How it works

- Paste raw HTML into the input box — pretty-printing runs live in your browser.
- The parser tokenizes tags, comments, doctypes, and text; void elements (`br`, `img`, `input`, …) self-close without adding depth.
- Content inside `pre`, `script`, and `style` is emitted raw — never re-indented, never altered.
- Pick an indent size, drop blank lines, and keep short text-only elements on one line with **Inline short elements**.
- Copy the clean HTML with one click.

## Everyday uses

- **Tidy embed codes:** clean up pasted widgets, video embeds, and email templates.
- **Debug nesting:** mis-nested or unclosed divs become obvious once everything is indented.
- **Clean CMS output:** fix up WYSIWYG or page-builder markup before saving.
- **Prepare tutorials:** present readable HTML examples in blog posts and docs.
- **Review diffs:** formatted markup makes code reviews and comparisons far easier.
