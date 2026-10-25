---
title: "Free JSON to SQL Converter — JSON Array to CREATE TABLE & INSERT"
description: "Convert a JSON array into SQL CREATE TABLE and INSERT statements for MySQL, PostgreSQL or SQLite. Paste JSON, pick a dialect, copy or download the SQL."
category: text
date: 2026-10-25
draft: false
slug: json-to-sql-converter
---

Moving data from an API into a database usually means hand-writing SQL. Paste a JSON array of objects here and get a ready-to-run `CREATE TABLE` plus `INSERT` statements — in MySQL, PostgreSQL, or SQLite dialect — with types inferred from your actual data.

<div class="tool-shell" id="jtsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 5v4H8v2h4v4h2v-4h4v-2h-4V8h-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>JSON to SQL Converter</h2>
<p>JSON array → CREATE TABLE + INSERTs, in MySQL, PostgreSQL or SQLite.</p>
</div>
<button type="button" class="theme-toggle" id="jtsTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your JSON</p>
<div class="preset-row" id="jtsPresets">
<button type="button" class="preset-chip" data-sample="users">👥 Sample users</button>
<button type="button" class="preset-chip" data-sample="products">🛒 Sample products</button>
<button type="button" class="preset-chip" data-sample="single">📄 Single object</button>
</div>
<div class="setting">
<label for="jtsIn">JSON array of objects (a single object works too)</label>
<textarea id="jtsIn" class="tool-input" rows="10" placeholder='[{"id": 1, "name": "Ada", "email": "ada@example.com", "active": true}]'></textarea>
<div class="hint">Nested objects and arrays are stored as JSON text. Keys with different types across rows fall back to TEXT.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> SQL settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="jtsTable">Table name</label>
<input type="text" id="jtsTable" class="tool-input" value="my_table" placeholder="my_table">
</div>
<div class="setting">
<label for="jtsDialect">SQL dialect</label>
<select id="jtsDialect" class="tool-input">
<option value="mysql">MySQL</option>
<option value="postgres">PostgreSQL</option>
<option value="sqlite">SQLite</option>
</select>
</div>
<div class="setting">
<label for="jtsPk">Primary key column (optional)</label>
<input type="text" id="jtsPk" class="tool-input" placeholder="e.g. id">
<div class="hint">Left blank = no PRIMARY KEY clause. Must match a key in your JSON.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include CREATE TABLE</span><label class="toggle"><input type="checkbox" id="jtsCreate" checked><span class="track"></span></label></div>
<div class="hint">Off = INSERT statements only.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Multi-row INSERT (one statement)</span><label class="toggle"><input type="checkbox" id="jtsMulti" checked><span class="track"></span></label></div>
<div class="hint">Off = one INSERT per row (safer for very large imports).</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">DROP TABLE IF EXISTS first</span><label class="toggle"><input type="checkbox" id="jtsDrop"><span class="track"></span></label></div>
<div class="hint">Dangerous on live data — only for fresh imports.</div>
</div>
<div class="setting">
<label for="jtsBatch">Rows per INSERT batch <span id="jtsBatchVal">500</span></label>
<input type="range" id="jtsBatch" min="1" max="1000" step="1" value="500">
<div class="hint">Only applies when multi-row INSERT is on.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; copy</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="jtsBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm7 5v4H8v2h4v4h2v-4h4v-2h-4V8h-2z"/></svg>
Convert to SQL
</button>
<button type="button" class="btn-pro-outline" id="jtsCopy" disabled>📋 Copy SQL</button>
<button type="button" class="btn-pro-outline" id="jtsDl" disabled>⬇ Download .sql</button>
<button type="button" class="btn-pro-outline" id="jtsClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="jtsProgress" style="display:none;"><div class="progress-bar" id="jtsBar" style="width:0%"></div></div>
<div class="results" id="jtsResults">
<p class="result-head">🗄️ Generated SQL</p>
<div class="result-summary" id="jtsSummary"></div>
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;">
<div class="r-name">SQL output</div>
<textarea id="jtsOut" class="tool-output" rows="16" readonly style="width:100%;margin-top:.5rem;font-family:monospace;"></textarea>
<div class="r-name" style="margin-top:.8rem;">Inferred column types</div>
<div id="jtsTypes" style="margin-top:.4rem;"></div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited JSON — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('jtsShell');
ToolPro.themeToggle(shell, document.getElementById('jtsTheme'));
ToolPro.bindSlider(document.getElementById('jtsBatch'), document.getElementById('jtsBatchVal'), function(v){ return v + ' rows'; });
var SAMPLES = {
users: '[\n  {"id": 1, "name": "Ada Lovelace", "email": "ada@example.com", "age": 36, "active": true, "joined": "2024-01-15"},\n  {"id": 2, "name": "Alan Turing", "email": "alan@example.com", "age": 41, "active": false, "joined": "2024-02-20"}\n]',
products: '[\n  {"sku": "A-100", "name": "Coffee Mug", "price": 12.99, "stock": 240, "tags": ["kitchen", "gift"]},\n  {"sku": "B-200", "name": "Notebook", "price": 8.5, "stock": 0, "tags": []}\n]',
single: '{"id": 1, "name": "Ada Lovelace", "email": "ada@example.com", "active": true}'
};
var input = document.getElementById('jtsIn');
var btn = document.getElementById('jtsBtn');
var copyBtn = document.getElementById('jtsCopy');
var dlBtn = document.getElementById('jtsDl');
var clearBtn = document.getElementById('jtsClear');
var out = document.getElementById('jtsOut');
var resBox = document.getElementById('jtsResults');
var summaryEl = document.getElementById('jtsSummary');
var typesEl = document.getElementById('jtsTypes');
var progress = document.getElementById('jtsProgress');
var bar = document.getElementById('jtsBar');
function refresh(){
var ok = input.value.trim().length > 0;
btn.disabled = !ok;
clearBtn.disabled = !(input.value || out.value);
}
input.addEventListener('input', refresh);
document.getElementById('jtsPresets').addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip'); if(!chip) return;
input.value = SAMPLES[chip.dataset.sample];
refresh();
ToolPro.toast('Sample loaded');
});
clearBtn.addEventListener('click', function(){
input.value = ''; out.value = ''; summaryEl.textContent = ''; typesEl.innerHTML = '';
resBox.classList.remove('show'); copyBtn.disabled = true; dlBtn.disabled = true; refresh();
});
function sanitizeIdent(name){
return String(name).replace(/[^A-Za-z0-9_]/g, '_').replace(/^(\d)/, '_$1') || 'col';
}
function quoteIdent(name, dialect){
var clean = sanitizeIdent(name);
if(dialect === 'mysql') return '`' + clean + '`';
return '"' + clean + '"';
}
function inferType(values, dialect){
var kinds = {};
values.forEach(function(v){
if(v === null || v === undefined) return;
if(typeof v === 'boolean') kinds.bool = true;
else if(typeof v === 'number') { if(Number.isInteger(v)) kinds.int = true; else kinds.float = true; }
else if(typeof v === 'string') { if(/^\d{4}-\d{2}-\d{2}$/.test(v)) kinds.date = true; else if(/^\d{4}-\d{2}-\d{2}[T ]\d{2}:\d{2}/.test(v)) kinds.datetime = true; else kinds.text = true; }
else kinds.json = true;
});
var keys = Object.keys(kinds);
if(keys.length === 0) return dialect === 'postgres' ? 'TEXT' : 'TEXT';
if(keys.length > 1){
if(keys.indexOf('text') !== -1 || keys.indexOf('json') !== -1) return 'TEXT';
if(keys.indexOf('float') !== -1 && keys.indexOf('int') !== -1 && keys.length === 2) return dialect === 'mysql' ? 'DOUBLE' : 'DOUBLE PRECISION';
return 'TEXT';
}
var k = keys[0];
if(k === 'bool') return dialect === 'mysql' ? 'TINYINT(1)' : 'BOOLEAN';
if(k === 'int') return dialect === 'mysql' ? 'BIGINT' : 'BIGINT';
if(k === 'float') return dialect === 'mysql' ? 'DOUBLE' : 'DOUBLE PRECISION';
if(k === 'date') return 'DATE';
if(k === 'datetime') return dialect === 'mysql' ? 'DATETIME' : 'TIMESTAMP';
return 'TEXT';
}
function sqlValue(v, dialect){
if(v === null || v === undefined) return 'NULL';
if(typeof v === 'boolean') return dialect === 'postgres' ? (v ? 'TRUE' : 'FALSE') : (v ? '1' : '0');
if(typeof v === 'number') return isFinite(v) ? String(v) : 'NULL';
if(typeof v === 'string') return "'" + v.replace(/'/g, "''") + "'";
return "'" + JSON.stringify(v).replace(/'/g, "''") + "'";
}
btn.addEventListener('click', function(){
var raw = input.value.trim();
if(!raw){ ToolPro.toast('Paste some JSON first.', 'err'); return; }
progress.style.display = 'block'; bar.style.width = '40%';
var data;
try { data = JSON.parse(raw); }
catch(e){ progress.style.display = 'none'; bar.style.width = '0%'; ToolPro.toast('Invalid JSON: ' + e.message, 'err'); return; }
var rows = Array.isArray(data) ? data : [data];
rows = rows.filter(function(r){ return r && typeof r === 'object' && !Array.isArray(r); });
if(rows.length === 0){ progress.style.display = 'none'; bar.style.width = '0%'; ToolPro.toast('JSON must be an array of objects (or a single object).', 'err'); return; }
var dialect = document.getElementById('jtsDialect').value;
var tableRaw = document.getElementById('jtsTable').value.trim() || 'my_table';
var table = quoteIdent(tableRaw, dialect);
var colOrder = [];
rows.forEach(function(r){
Object.keys(r).forEach(function(k){
var clean = sanitizeIdent(k);
if(colOrder.indexOf(clean) === -1) colOrder.push(clean);
});
});
var colMap = {};
colOrder.forEach(function(c){ colMap[c] = []; });
rows.forEach(function(r){
colOrder.forEach(function(c){
var orig = Object.keys(r).filter(function(k){ return sanitizeIdent(k) === c; })[0];
colMap[c].push(orig !== undefined ? r[orig] : null);
});
});
var types = {};
colOrder.forEach(function(c){ types[c] = inferType(colMap[c], dialect); });
var lines = [];
if(document.getElementById('jtsDrop').checked) lines.push('DROP TABLE IF EXISTS ' + table + ';');
if(document.getElementById('jtsCreate').checked){
var pk = document.getElementById('jtsPk').value.trim();
var pkClean = pk ? sanitizeIdent(pk) : '';
var defs = colOrder.map(function(c){
var def = '  ' + quoteIdent(c, dialect) + ' ' + types[c];
if(pkClean && c === pkClean) def += ' PRIMARY KEY';
return def;
});
lines.push('CREATE TABLE ' + table + ' (');
lines.push(defs.join(',\n'));
lines.push(');');
}
var colsSql = colOrder.map(function(c){ return quoteIdent(c, dialect); }).join(', ');
var multi = document.getElementById('jtsMulti').checked;
var batchSize = parseInt(document.getElementById('jtsBatch').value, 10) || 500;
if(multi){
for(var s = 0; s < rows.length; s += batchSize){
var chunk = rows.slice(s, s + batchSize);
var vals = chunk.map(function(r){
return '(' + colOrder.map(function(c){
var orig = Object.keys(r).filter(function(k){ return sanitizeIdent(k) === c; })[0];
return sqlValue(orig !== undefined ? r[orig] : null, dialect);
}).join(', ') + ')';
});
lines.push('INSERT INTO ' + table + ' (' + colsSql + ') VALUES');
lines.push(vals.join(',\n') + ';');
}
} else {
rows.forEach(function(r){
var vals = colOrder.map(function(c){
var orig = Object.keys(r).filter(function(k){ return sanitizeIdent(k) === c; })[0];
return sqlValue(orig !== undefined ? r[orig] : null, dialect);
});
lines.push('INSERT INTO ' + table + ' (' + colsSql + ') VALUES (' + vals.join(', ') + ');');
});
}
bar.style.width = '100%';
setTimeout(function(){ progress.style.display = 'none'; bar.style.width = '0%'; }, 400);
out.value = lines.join('\n');
typesEl.innerHTML = colOrder.map(function(c){ return '<p style="margin:.25rem 0;"><b>' + c + '</b>: ' + types[c] + '</p>'; }).join('');
summaryEl.textContent = '✅ Converted ' + rows.length + ' row(s) × ' + colOrder.length + ' column(s) to ' + (dialect === 'mysql' ? 'MySQL' : dialect === 'postgres' ? 'PostgreSQL' : 'SQLite') + ' SQL.' + (document.getElementById('jtsPk').value.trim() && colOrder.indexOf(sanitizeIdent(document.getElementById('jtsPk').value.trim())) === -1 ? ' Note: primary key column not found in the JSON — no PRIMARY KEY was added.' : '');
copyBtn.disabled = false; dlBtn.disabled = false;
resBox.classList.add('show');
resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
ToolPro.toast('SQL generated', 'ok');
});
copyBtn.addEventListener('click', function(){ if(out.value) ToolPro.copyText(out.value, 'SQL copied'); });
dlBtn.addEventListener('click', function(){
if(!out.value) return;
var blob = new Blob([out.value], { type: 'text/plain' });
ToolPro.download(URL.createObjectURL(blob), 'output.sql');
ToolPro.toast('Downloaded output.sql', 'ok');
});
refresh();
})();
</script>

## How it works

Paste a JSON array of objects (or a single object) and set the table name, dialect, and options. The tool scans every row, builds one column per unique key, and infers each column's type from your data — integers, floats, booleans, dates, datetimes, or TEXT — falling back to TEXT when a key's type varies across rows. It then emits a `CREATE TABLE` statement (with an optional primary key and `DROP TABLE IF EXISTS`) plus `INSERT` statements, either batched multi-row or one per row. Identifiers are quoted per dialect (backticks for MySQL, double quotes for PostgreSQL/SQLite) and strings are escaped by doubling single quotes.

**Honest limits:** type inference is a best guess from the sample you paste — if later rows hold longer text or different types, widen the column before importing. Nested objects and arrays are stored as JSON text, not separate tables, and no foreign keys are generated. Always test the SQL on a copy of your database first.

## Everyday uses

- **Developers** — seed a database from an API response in seconds.
- **Data analysts** — move JSON exports into SQL for querying.
- **Students** — learn CREATE TABLE and INSERT syntax from real data.
- **Migrations** — convert a JSON backup into importable SQL.
- **Prototyping** — spin up a demo database without hand-writing DDL.

Everything runs in your browser — your data is never uploaded anywhere.
