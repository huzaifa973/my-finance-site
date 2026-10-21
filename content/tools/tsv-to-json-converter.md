---
title: "Free TSV to JSON Converter — Convert Tab-Delimited Data"
description: "Convert TSV to JSON online — paste or upload tab-delimited data with auto delimiter detection, header toggle, pretty or minified output. Free, private, no sign-up."
category: text
date: 2026-10-21
draft: false
---

Paste spreadsheet data copied from Excel or upload a TSV file and get clean JSON back — the converter auto-detects the delimiter (tab, comma, pipe, or semicolon), handles header rows, and gives you pretty or minified output to copy or download. Everything is parsed in your browser; your data never leaves your device.

<div class="tool-shell" id="tsvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TSV to JSON Converter</h2>
<p>Paste or upload TSV → get parsed JSON. Auto delimiter detection, header toggle, pretty or minified.</p>
</div>
<button type="button" class="theme-toggle" id="tsvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste or upload your data</p>
<div class="dropzone" id="tsvDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a TSV/CSV file here</strong>
<span>or click to browse — .tsv, .csv, .txt</span>
<input type="file" id="tsvFile" accept=".tsv,.csv,.txt">
</div>
<textarea class="tool-input" id="tsvIn" rows="7" placeholder="name&#9;age&#9;city&#10;Alice&#9;30&#9;New York&#10;Bob&#9;25&#9;Chicago"></textarea>
<div class="hint">Paste tab-delimited data straight from Excel or Google Sheets — or upload a file.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion options</p>
<div class="settings-panel">
<div class="preset-row" id="tsvPresets">
<button type="button" class="preset-chip active" data-delim="auto" data-fmt="pretty">✨ Auto-detect → Pretty</button>
<button type="button" class="preset-chip" data-delim="comma" data-fmt="pretty">CSV → Pretty JSON</button>
<button type="button" class="preset-chip" data-delim="tab" data-fmt="min">TSV → Minified</button>
</div>
<div class="settings-grid">
<div class="setting"><span class="t-label">Delimiter</span><select class="tool-input" id="tsvDelim"><option value="auto" selected>Auto-detect</option><option value="tab">Tab</option><option value="comma">Comma</option><option value="pipe">Pipe |</option><option value="semi">Semicolon ;</option></select><div class="hint">Detected: <b id="tsvDetected">—</b></div></div>
<div class="setting"><span class="t-label">Output format</span><select class="tool-input" id="tsvFmt"><option value="pretty" selected>Pretty — indented</option><option value="min">Minified — one line</option></select></div>
</div>
<div class="toggle-row"><span class="t-label">First row is a header</span><label class="toggle"><input type="checkbox" id="tsvHeader" checked><span></span></label></div>
<div class="hint">Tab, comma, pipe and semicolon are supported. Blank lines are skipped automatically.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="tsvGo" disabled>⚙️ Convert to JSON</button>
<button type="button" class="btn-pro-outline" id="tsvCopy" disabled>📋 Copy</button>
<button type="button" class="btn-pro-outline" id="tsvDl" disabled>⬇️ Download .json</button>
</div>
<div class="results" id="tsvRes">
<p class="result-head">✅ JSON output</p>
<div class="result-summary" id="tsvSummary"></div>
<div class="result-grid" id="tsvStats"></div>
<textarea class="tool-output" id="tsvOut" rows="9" readonly></textarea>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as much delimited data as you like — parsed entirely in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('tsvShell');
  ToolPro.themeToggle(shell, document.getElementById('tsvTheme'));
  var inEl = document.getElementById('tsvIn');
  var outEl = document.getElementById('tsvOut');
  var goBtn = document.getElementById('tsvGo');
  var copyBtn = document.getElementById('tsvCopy');
  var dlBtn = document.getElementById('tsvDl');
  var lastJson = '';
  var presets = document.getElementById('tsvPresets');
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('tsvDelim').value = chip.dataset.delim;
    document.getElementById('tsvFmt').value = chip.dataset.fmt;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  var DELIMS = [
    { id:'tab',   c:'\t', name:'Tab' },
    { id:'comma', c:',',  name:'Comma' },
    { id:'pipe',  c:'|',  name:'Pipe' },
    { id:'semi',  c:';',  name:'Semicolon' }
  ];
  function cleanLines(text){
    return text.split('\n').map(function(l){ return l.replace(/\r$/, ''); })
      .filter(function(l){ return l.trim() !== ''; });
  }
  function detectDelimiter(text){
    var lines = cleanLines(text).slice(0, 5);
    var best = DELIMS[0], bestScore = -1;
    DELIMS.forEach(function(d){
      var counts = lines.map(function(l){ return l.split(d.c).length - 1; });
      var total = counts.reduce(function(a,b){ return a + b; }, 0);
      var consistent = lines.length > 1 && counts.every(function(n){ return n === counts[0]; });
      var score = total * 2 + (consistent ? lines.length : 0);
      if(total > 0 && score > bestScore){ bestScore = score; best = d; }
    });
    return best;
  }
  function getDelimiter(text){
    var sel = document.getElementById('tsvDelim').value;
    if(sel === 'auto') return detectDelimiter(text);
    return DELIMS.filter(function(d){ return d.id === sel; })[0];
  }
  function convert(){
    var text = inEl.value;
    if(!text.trim()){ ToolPro.toast('Paste or upload some data first', 'err'); return; }
    var d = getDelimiter(text);
    document.getElementById('tsvDetected').textContent = d.name;
    var lines = cleanLines(text);
    var useHeader = document.getElementById('tsvHeader').checked;
    var keys = [];
    var start = 0;
    if(useHeader){
      keys = lines[0].split(d.c).map(function(k){ return k.trim() || 'column'; });
      start = 1;
    }
    var rows = [], cols = 0;
    for(var i = start; i < lines.length; i++){
      var cells = lines[i].split(d.c).map(function(c){ return c.trim(); });
      cols = Math.max(cols, cells.length);
      if(!keys.length || keys.length !== cells.length){
        keys = [];
        for(var k = 0; k < cells.length; k++){ keys.push('col_' + (k + 1)); }
      }
      var obj = {};
      for(var j = 0; j < cells.length; j++){ obj[keys[j]] = cells[j]; }
      rows.push(obj);
    }
    cols = Math.max(cols, keys.length);
    var pretty = document.getElementById('tsvFmt').value === 'pretty';
    lastJson = JSON.stringify(rows, null, pretty ? 2 : 0);
    outEl.value = lastJson;
    document.getElementById('tsvSummary').textContent =
      rows.length + (rows.length === 1 ? ' row' : ' rows') + ' × ' + cols + ' columns converted with ' + d.name + ' delimiter' + (useHeader ? ' (header row used)' : ' (generic col_1…n keys)') + '.';
    var stats = document.getElementById('tsvStats');
    stats.innerHTML = '';
    [['Rows', rows.length],['Columns', cols],['Output size', ToolPro.fmtBytes(lastJson.length)]].forEach(function(x){
      var card = document.createElement('div'); card.className = 'result-card';
      card.innerHTML = '<p class="r-name">' + x[0] + '</p><p class="r-stats" style="font-size:1.25rem;font-weight:700">' + x[1] + '</p>';
      stats.appendChild(card);
    });
    var box = document.getElementById('tsvRes');
    box.classList.add('show');
    copyBtn.disabled = false;
    dlBtn.disabled = false;
    box.scrollIntoView({ behavior:'smooth', block:'nearest' });
    ToolPro.toast('Converted to JSON', 'ok');
  }
  goBtn.addEventListener('click', convert);
  copyBtn.addEventListener('click', function(){
    if(!lastJson) return;
    ToolPro.copyText(lastJson);
    ToolPro.toast('JSON copied to clipboard', 'ok');
  });
  dlBtn.addEventListener('click', function(){
    if(!lastJson) return;
    ToolPro.download('data:application/json;charset=utf-8,' + encodeURIComponent(lastJson), 'data.json');
    ToolPro.toast('JSON downloaded', 'ok');
  });
  inEl.addEventListener('input', function(){
    goBtn.disabled = !inEl.value.trim();
  });
  ToolPro.dropzone(document.getElementById('tsvDrop'), {
    multiple: false,
    accept: '.tsv,.csv,.txt',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      var rd = new FileReader();
      rd.onload = function(){
        inEl.value = rd.result;
        goBtn.disabled = false;
        ToolPro.toast('File loaded: ' + f.name, 'ok');
      };
      rd.readAsText(f);
    }
  });
})();
</script>

## How it works

The tool reads your pasted text or uploaded file line by line, skipping blanks. When delimiter is set to Auto-detect, it tests tab, comma, pipe, and semicolon against the first five lines — the delimiter with the highest consistent count wins, and the detected delimiter is shown under the options. If the header toggle is on, the first row becomes the JSON keys; otherwise generic col_1…col_n keys are generated. You get pretty (indented) or minified JSON in a ready-to-copy output box, plus row and column counts. Parsing is pure JavaScript in the page — no uploads, no servers.

## Everyday uses

- **Developers** — turn spreadsheet exports into JSON for APIs and configs.
- **Excel / Sheets users** — copy a range and get JSON without any add-ons.
- **Data cleanup** — verify column structure before importing into a database.
- **Students** — convert class datasets into JSON for coding assignments.
- **Marketers** — reformat exported contact or campaign lists for other tools.
