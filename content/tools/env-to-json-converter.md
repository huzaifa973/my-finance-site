---
title: "Free .env to JSON Converter — Parse ENV Files Online"
description: "Convert .env files to JSON online free — handles quotes, export prefix, comments, duplicates. Private, instant, right in your browser."
category: text
date: 2026-10-17
draft: false
---

Paste the contents of a `.env` file and get clean JSON back instantly — quotes, `export` prefixes, `#` comments, and duplicate keys are all handled for you. Perfect for converting environment configs for Node.js apps, serverless platforms, or JSON-based settings files. Free, private, and runs 100% in your browser.

<div class="tool-shell" id="ejShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 2v2h4V7H6zm6 0v2h6V7h-6zM6 11v2h9v-2H6zm0 4v2h6v-2H6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>.env to JSON Converter</h2>
<p>Paste a .env file and get clean JSON back — quotes, comments, and duplicates handled.</p>
</div>
<button type="button" class="theme-toggle" id="ejTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your .env file</p>
<div class="setting">
<label for="ejInput">.env contents</label>
<textarea id="ejInput" class="tool-input" rows="6" placeholder="API_URL=https://api.example.com&#10;DB_PASS=&quot;secret#123&quot;&#10;# comments are ignored" style="resize:vertical;"></textarea>
<div class="hint">Converts automatically as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output options</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="ejPretty" checked><span></span> Pretty-print (2 spaces)</label>
<div class="hint">Human-readable indented JSON. Uncheck for compact output.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="ejDups" checked><span></span> Keep duplicates count</label>
<div class="hint">Show how many duplicate keys were found in the stats.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ejGo" disabled>Convert to JSON</button>
<button type="button" class="btn-pro-outline" id="ejCopy">Copy JSON</button>
<button type="button" class="btn-pro-outline" id="ejDl">Download .json</button>
<button type="button" class="btn-pro-outline" id="ejClear">Clear</button>
</div>
<div class="results show" id="ejResults">
<p class="result-head">📋 JSON result</p>
<textarea id="ejOutput" class="tool-output" rows="6" readonly placeholder="Your JSON will appear here…" style="resize:vertical;"></textarea>
<div class="result-summary" style="margin-top:.6rem;">
<span id="ejStats" style="font-size:.9rem;">0 keys</span>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as many .env files as you like — your secrets never leave your browser.</p>
</div>
</div>
</div>

<script>
function parseEnv(text) {
var obj = {}, order = [], dups = 0;
function hasKey(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
var lines = text.split('\n');
for (var li = 0; li < lines.length; li++) {
var line = lines[li], cleaned = '', q = null, ci, ch;
for (ci = 0; ci < line.length; ci++) {
ch = line.charAt(ci);
if (q) {
cleaned += ch;
if (ch === '\\' && ci + 1 < line.length) { cleaned += line.charAt(ci + 1); ci++; }
else if (ch === q) q = null;
} else {
if (ch === '"' || ch === "'" || ch === '`') { q = ch; cleaned += ch; }
else if (ch === '#') break;
else cleaned += ch;
}
}
var s = cleaned.trim();
if (!s) continue;
var exp = /^export\s+/i.exec(s);
if (exp) s = s.slice(exp[0].length).trim();
var eq = s.indexOf('='), key, val;
if (eq === -1) { key = s; val = ''; }
else { key = s.slice(0, eq).trim(); val = s.slice(eq + 1).trim(); }
if (!key) continue;
if (val.length >= 2) {
var f = val.charAt(0), l = val.charAt(val.length - 1);
if ((f === '"' && l === '"') || (f === "'" && l === "'") || (f === '`' && l === '`')) {
var inner = val.slice(1, -1), un = '', ui, uc, nc2;
if (f === '"') {
for (ui = 0; ui < inner.length; ui++) {
uc = inner.charAt(ui);
if (uc === '\\' && ui + 1 < inner.length) {
nc2 = inner.charAt(ui + 1);
if (nc2 === 'n') un += '\n'; else if (nc2 === 't') un += '\t';
else if (nc2 === '"') un += '"'; else if (nc2 === '\\') un += '\\';
else un += nc2;
ui++;
} else un += uc;
}
inner = un;
}
val = inner;
}
}
if (hasKey(obj, key)) dups++; else order.push(key);
obj[key] = val;
}
return { obj: obj, keys: order.length, dups: dups };
}
(function(){
var shell = document.getElementById('ejShell');
ToolPro.themeToggle(shell, document.getElementById('ejTheme'));
var input = document.getElementById('ejInput');
var output = document.getElementById('ejOutput');
var goBtn = document.getElementById('ejGo');
var prettyT = document.getElementById('ejPretty');
var dupsT = document.getElementById('ejDups');
var statsEl = document.getElementById('ejStats');
var lastDups = -1;
function ejRun(silent){
var src = input.value;
goBtn.disabled = !src.trim();
if (!src.trim()) { output.value = ''; statsEl.textContent = '0 keys'; lastDups = -1; return; }
var parsed;
try { parsed = parseEnv(src); }
catch (err) {
ToolPro.toast('Could not parse .env input', 'err');
return;
}
var json;
try { json = prettyT.checked ? JSON.stringify(parsed.obj, null, 2) : JSON.stringify(parsed.obj); }
catch (err) {
ToolPro.toast('Could not build JSON', 'err');
return;
}
output.value = json;
var s = parsed.keys + (parsed.keys === 1 ? ' key' : ' keys');
if (dupsT.checked && parsed.dups > 0) s += ' \u00b7 ' + parsed.dups + ' duplicate' + (parsed.dups === 1 ? '' : 's') + ' (last kept)';
statsEl.textContent = s;
if (parsed.dups > 0 && parsed.dups !== lastDups) {
ToolPro.toast(parsed.dups + ' duplicate key' + (parsed.dups === 1 ? '' : 's') + ' found \u2014 last value kept', 'err');
}
else if (!silent && parsed.dups === 0) ToolPro.toast('Converted to JSON', 'ok');
lastDups = parsed.dups;
}
input.addEventListener('input', function(){ ejRun(true); });
prettyT.addEventListener('change', function(){ ejRun(true); });
dupsT.addEventListener('change', function(){ ejRun(true); });
goBtn.addEventListener('click', function(){ lastDups = -1; ejRun(false); });
document.getElementById('ejCopy').addEventListener('click', function(){
if (!output.value) return;
ToolPro.copyText(output.value, 'JSON copied');
});
document.getElementById('ejDl').addEventListener('click', function(){
if (!output.value) return;
var blob = new Blob([output.value], { type: 'application/json' });
var url = URL.createObjectURL(blob);
ToolPro.download(url, 'config.json');
setTimeout(function(){ URL.revokeObjectURL(url); }, 4000);
});
document.getElementById('ejClear').addEventListener('click', function(){
input.value = ''; output.value = '';
statsEl.textContent = '0 keys';
goBtn.disabled = true; lastDups = -1; input.focus();
});
})();
</script>

## How it works

- Paste your `.env` contents — conversion runs automatically as you type.
- Empty lines are skipped and `#` comments stripped, unless the `#` sits inside quotes.
- Leading `export KEY=` is accepted, values split on the first `=`, and surrounding single, double, or backtick quotes are removed — with `\n`, `\t`, `\\`, and `\"` unescaped inside double quotes.
- Keys without `=` get an empty-string value; duplicate keys keep the last value and raise a warning with the count.
- Copy the JSON or download it as `config.json`; toggle pretty-print for compact output.

## Everyday uses

- **Node.js configs:** turn a `.env` file into JSON for `config.json`-style setups.
- **Serverless deploys:** convert local env files to the JSON format your platform expects.
- **Audit env files:** the duplicate-key warning instantly reveals copy-paste mistakes.
- **Migrate platforms:** move settings between hosts with different config formats.
- **Document structure:** share the shape of your config without pasting secrets anywhere.
