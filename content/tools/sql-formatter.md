---
title: "Free SQL Formatter — Beautify SQL Queries Online"
description: "Format messy SQL into clean, readable queries free in your browser — keywords uppercased, clauses on their own lines, plus one-click minify. No sign-up."
category: text
date: 2026-10-12
draft: false
---

## How it works

Paste any SQL query — a one-line monster copied from an ORM log, a hand-written report query, anything — and get it back with keywords uppercased, each clause on its own line, and conditions neatly indented. Strings and comments are respected, so nothing inside quotes is ever touched. Everything runs locally in your browser; your queries never leave your device.

<div class="tool-shell" id="sqlShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 1.34-9 3v12c0 1.66 4.03 3 9 3s9-1.34 9-3V6c0-1.66-4.03-3-9-3zm7 15c0 .55-2.9 2-7 2s-7-1.45-7-2v-2.17C6.6 16.9 9.1 17.5 12 17.5s5.4-.6 7-1.67V18zm0-5c0 .55-2.9 2-7 2s-7-1.45-7-2v-2.17c1.6 1.07 4.1 1.67 7 1.67s5.4-.6 7-1.67V13zm0-5c0 .55-2.9 2-7 2S5 8.55 5 8V6c0-.55 2.9-2 7-2s7 1.45 7 2v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>SQL Formatter</h2>
<p>Turn messy one-line SQL into clean, readable queries — keywords uppercased, clauses lined up, conditions indented.</p>
</div>
<button type="button" class="theme-toggle" id="sqlTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your SQL</p>
<textarea class="tool-input" id="sqlIn" rows="9" placeholder="Paste your SQL here, e.g. select * from users where id = 1 and status = 'active' order by created_at desc;" spellcheck="false"></textarea>
<div class="hint" id="sqlCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Or try an example</p>
<div class="settings-panel">
<div class="preset-row" id="sqlExamples">
<button type="button" class="preset-chip" data-ex="ex1">Messy SELECT</button>
<button type="button" class="preset-chip" data-ex="ex2">UPDATE with JOIN</button>
<button type="button" class="preset-chip" data-ex="ex3">Subquery + GROUP BY</button>
</div>
<div class="hint">Examples load into the box above — then hit Format SQL to see the cleanup.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Format or minify</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sqlBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 1.34-9 3v12c0 1.66 4.03 3 9 3s9-1.34 9-3V6c0-1.66-4.03-3-9-3zm7 15c0 .55-2.9 2-7 2s-7-1.45-7-2v-2.17C6.6 16.9 9.1 17.5 12 17.5s5.4-.6 7-1.67V18zm0-5c0 .55-2.9 2-7 2s-7-1.45-7-2v-2.17c1.6 1.07 4.1 1.67 7 1.67s5.4-.6 7-1.67V13zm0-5c0 .55-2.9 2-7 2S5 8.55 5 8V6c0-.55 2.9-2 7-2s7 1.45 7 2v2z"/></svg>
Format SQL
</button>
<button type="button" class="btn-pro-outline" id="sqlMinBtn" disabled>Minify</button>
<button type="button" class="btn-pro-outline" id="sqlClear" disabled>Clear</button>
</div>
<div class="results" id="sqlResults">
<p class="result-head">✅ Your SQL</p>
<div class="result-summary" id="sqlSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="sqlStatus"></div>
<textarea class="tool-output" id="sqlOut" rows="10" readonly spellcheck="false"></textarea>
<div class="r-stats" id="sqlStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="sqlCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — format as many queries as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('sqlShell');
  ToolPro.themeToggle(shell, document.getElementById('sqlTheme'));

  var inEl = document.getElementById('sqlIn');
  var outEl = document.getElementById('sqlOut');
  var resBox = document.getElementById('sqlResults');
  var statusEl = document.getElementById('sqlStatus');
  var statsEl = document.getElementById('sqlStats');
  var summaryEl = document.getElementById('sqlSummary');
  var countEl = document.getElementById('sqlCount');
  var btn = document.getElementById('sqlBtn');
  var minBtn = document.getElementById('sqlMinBtn');
  var clearBtn = document.getElementById('sqlClear');

  var KEYWORDS = {};
  'SELECT FROM WHERE GROUP ORDER BY HAVING LIMIT OFFSET JOIN LEFT RIGHT INNER OUTER FULL CROSS ON AND OR NOT IN LIKE BETWEEN IS NULL AS DISTINCT UNION ALL INSERT INTO VALUES UPDATE SET DELETE CREATE TABLE EXISTS CASE WHEN THEN ELSE END ASC DESC'.split(' ').forEach(function(k){ KEYWORDS[k] = true; });
  var CLAUSES = {};
  'SELECT|FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|UNION|UNION ALL|INSERT INTO|VALUES|UPDATE|DELETE|SET|CREATE TABLE'.split('|').forEach(function(k){ CLAUSES[k] = true; });
  var FUNCTIONS = {};
  'COUNT SUM AVG MIN MAX COALESCE NULLIF CAST UPPER LOWER LENGTH TRIM ABS ROUND NOW EXTRACT SUBSTRING REPLACE CONCAT'.split(' ').forEach(function(k){ FUNCTIONS[k] = true; });

  function tokenizeSql(sql){
    var tokens = [];
    var i = 0, n = sql.length;
    while(i < n){
      var c = sql[i];
      if(/\s/.test(c)){ i++; continue; }
      if(c === '-' && sql[i + 1] === '-'){
        var le = sql.indexOf('\n', i);
        if(le === -1) le = n;
        tokens.push({ t: 'comment', v: sql.slice(i, le).trim() });
        i = le; continue;
      }
      if(c === '/' && sql[i + 1] === '*'){
        var be = sql.indexOf('*/', i + 2);
        if(be === -1) be = n - 2;
        tokens.push({ t: 'comment', v: sql.slice(i, be + 2) });
        i = be + 2; continue;
      }
      if(c === "'"){
        var s = i + 1;
        while(s < n){
          if(sql[s] === '\\'){ s += 2; continue; }
          if(sql[s] === "'"){
            if(sql[s + 1] === "'"){ s += 2; continue; }
            break;
          }
          s++;
        }
        tokens.push({ t: 'string', v: sql.slice(i, Math.min(s + 1, n)) });
        i = Math.min(s + 1, n); continue;
      }
      if(c === '"' || c === '`'){
        var e = i + 1;
        while(e < n && sql[e] !== c) e++;
        tokens.push({ t: 'string', v: sql.slice(i, Math.min(e + 1, n)) });
        i = Math.min(e + 1, n); continue;
      }
      if(/[A-Za-z0-9_$]/.test(c)){
        var w = i;
        while(w < n && /[A-Za-z0-9_$]/.test(sql[w])) w++;
        tokens.push({ t: 'word', v: sql.slice(i, w) });
        i = w; continue;
      }
      var two = sql.substr(i, 2);
      if(two === '>=' || two === '<=' || two === '<>' || two === '!=' || two === '||'){
        tokens.push({ t: 'op', v: two }); i += 2; continue;
      }
      tokens.push({ t: 'op', v: c });
      i++;
    }
    return tokens;
  }

  function wordUpper(tok){
    return tok && tok.t === 'word' ? tok.v.toUpperCase() : null;
  }

  function mergeKeywords(tokens){
    var out = [];
    for(var i = 0; i < tokens.length; i++){
      var t = tokens[i];
      if(t.t !== 'word'){ out.push(t); continue; }
      var w = t.v.toUpperCase();
      var w1 = wordUpper(tokens[i + 1]);
      var w2 = wordUpper(tokens[i + 2]);
      var merged = null, skip = 0;
      if(w === 'GROUP' && w1 === 'BY'){ merged = 'GROUP BY'; skip = 1; }
      else if(w === 'ORDER' && w1 === 'BY'){ merged = 'ORDER BY'; skip = 1; }
      else if(w === 'INSERT' && w1 === 'INTO'){ merged = 'INSERT INTO'; skip = 1; }
      else if(w === 'CREATE' && w1 === 'TABLE'){ merged = 'CREATE TABLE'; skip = 1; }
      else if(w === 'UNION' && w1 === 'ALL'){ merged = 'UNION ALL'; skip = 1; }
      else if(w === 'IS' && w1 === 'NOT' && w2 === 'NULL'){ merged = 'IS NOT NULL'; skip = 2; }
      else if(w === 'IS' && w1 === 'NULL'){ merged = 'IS NULL'; skip = 1; }
      else if(w === 'LEFT' && w1 === 'OUTER' && w2 === 'JOIN'){ merged = 'LEFT OUTER JOIN'; skip = 2; }
      else if(w === 'RIGHT' && w1 === 'OUTER' && w2 === 'JOIN'){ merged = 'RIGHT OUTER JOIN'; skip = 2; }
      else if(w === 'FULL' && w1 === 'OUTER' && w2 === 'JOIN'){ merged = 'FULL OUTER JOIN'; skip = 2; }
      else if(w === 'LEFT' && w1 === 'JOIN'){ merged = 'LEFT JOIN'; skip = 1; }
      else if(w === 'RIGHT' && w1 === 'JOIN'){ merged = 'RIGHT JOIN'; skip = 1; }
      else if(w === 'INNER' && w1 === 'JOIN'){ merged = 'INNER JOIN'; skip = 1; }
      else if(w === 'OUTER' && w1 === 'JOIN'){ merged = 'OUTER JOIN'; skip = 1; }
      else if(w === 'FULL' && w1 === 'JOIN'){ merged = 'FULL JOIN'; skip = 1; }
      else if(w === 'CROSS' && w1 === 'JOIN'){ merged = 'CROSS JOIN'; skip = 1; }
      if(merged){ out.push({ t: 'kw', v: merged }); i += skip; continue; }
      if(KEYWORDS[w]){ out.push({ t: 'kw', v: w }); continue; }
      out.push(t);
    }
    return out;
  }

  function isJoinKw(v){
    return v === 'JOIN' || / JOIN$/.test(v);
  }

  function joinSpace(prev, tok){
    if(!prev) return false;
    if(tok.v === ',' || tok.v === ')' || tok.v === ';' || tok.v === '.') return false;
    if(prev.v === '(' || prev.v === '.') return false;
    if(tok.v === '(' && prev.t === 'word') return !FUNCTIONS[prev.v.toUpperCase()];
    return true;
  }

  function formatSql(sql){
    var toks = mergeKeywords(tokenizeSql(sql));
    var lines = [];
    var cur = '';
    var curIndent = 0;
    var baseIndent = 0;
    var depth = 0;
    var parenStack = [];
    var prev = null;
    var betweenAnd = false;

    function pushLine(){
      if(cur !== '') lines.push({ ind: curIndent, text: cur });
      cur = '';
    }
    function newline(ind){
      pushLine();
      curIndent = ind;
    }
    function add(tok){
      if(cur !== '' && joinSpace(prev, tok)) cur += ' ';
      cur += tok.v;
      prev = tok;
    }

    for(var i = 0; i < toks.length; i++){
      var tok = toks[i];
      var next = toks[i + 1];
      if(tok.t === 'comment'){
        if(cur !== '') cur += ' ';
        cur += tok.v;
        prev = tok;
        if(tok.v.charAt(0) === '-') newline(baseIndent);
        continue;
      }
      if(tok.t === 'kw' && isJoinKw(tok.v)){
        newline(baseIndent);
        add(tok);
        continue;
      }
      if(tok.t === 'kw' && CLAUSES[tok.v]){
        if(cur !== '') newline(baseIndent);
        add(tok);
        continue;
      }
      if(tok.t === 'kw' && tok.v === 'BETWEEN'){
        add(tok);
        betweenAnd = true;
        continue;
      }
      if(tok.t === 'kw' && (tok.v === 'AND' || tok.v === 'OR')){
        if(tok.v === 'AND' && betweenAnd){
          betweenAnd = false;
          add(tok);
          continue;
        }
        if(depth === 0){
          newline(baseIndent + 2);
          add(tok);
          continue;
        }
        add(tok);
        continue;
      }
      if(tok.v === '('){
        var isSub = !!(next && next.t === 'kw' && next.v === 'SELECT');
        add(tok);
        depth++;
        parenStack.push(isSub);
        if(isSub){
          baseIndent += 2;
          newline(baseIndent);
        }
        continue;
      }
      if(tok.v === ')'){
        var wasSub = parenStack.pop();
        depth--;
        if(wasSub){
          baseIndent -= 2;
          newline(baseIndent);
        }
        add(tok);
        continue;
      }
      if(tok.v === ';'){
        add(tok);
        if(i < toks.length - 1) newline(baseIndent);
        continue;
      }
      add(tok);
    }
    pushLine();
    return lines.map(function(l){
      var pad = '';
      for(var s = 0; s < l.ind; s++) pad += ' ';
      return pad + l.text;
    }).join('\n');
  }

  function minifySql(sql){
    var toks = mergeKeywords(tokenizeSql(sql)).filter(function(t){ return t.t !== 'comment'; });
    var out = '';
    var prev = null;
    toks.forEach(function(tok){
      if(out !== '' && joinSpace(prev, tok)) out += ' ';
      out += tok.v;
      prev = tok;
    });
    return out;
  }

  var EXAMPLES = {
    ex1: "select id, name, email from users where age>=21 and city='New York' or city='Boston' order by name limit 10;",
    ex2: "update orders o inner join customers c on o.customer_id=c.id set o.status='shipped' where o.total>100 and c.country='US';",
    ex3: "SELECT dept, COUNT(*) AS n FROM employees WHERE salary > (SELECT AVG(salary) FROM employees) GROUP BY dept HAVING COUNT(*) > 5;"
  };
  document.getElementById('sqlExamples').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    inEl.value = EXAMPLES[chip.dataset.ex] || '';
    updateCount(); refreshButtons();
    ToolPro.toast('Example loaded — hit Format SQL');
  });

  function updateCount(){
    var t = inEl.value;
    var words = t.trim() ? t.trim().split(/\s+/).length : 0;
    countEl.textContent = t.length.toLocaleString() + ' characters · ' + words.toLocaleString() + ' words';
  }
  function refreshButtons(){
    var has = inEl.value.trim().length > 0;
    btn.disabled = !has; minBtn.disabled = !has; clearBtn.disabled = !has;
  }
  inEl.addEventListener('input', function(){ updateCount(); refreshButtons(); });

  function showResult(formatted, mode){
    outEl.value = formatted;
    statusEl.innerHTML = '<span class="ok-pill">✓ ' + (mode === 'min' ? 'Minified' : 'Formatted') + '</span>';
    var before = new Blob([inEl.value]).size;
    var after = new Blob([formatted]).size;
    var lineCount = formatted === '' ? 0 : formatted.split('\n').length;
    statsEl.textContent = ToolPro.fmtBytes(before) + ' → ' + ToolPro.fmtBytes(after) + ' · ' + lineCount + (lineCount === 1 ? ' line' : ' lines');
    summaryEl.textContent = mode === 'min'
      ? '🎉 Your SQL is on a single line, comments removed.'
      : '🎉 Your SQL is formatted and ready to paste anywhere.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  btn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Paste some SQL first', 'err'); return; }
    showResult(formatSql(inEl.value), 'fmt');
    ToolPro.toast('SQL formatted', 'ok');
  });
  minBtn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Paste some SQL first', 'err'); return; }
    showResult(minifySql(inEl.value), 'min');
    ToolPro.toast('SQL minified', 'ok');
  });
  document.getElementById('sqlCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(outEl.value, 'SQL copied');
  });
  clearBtn.addEventListener('click', function(){
    inEl.value = ''; outEl.value = '';
    resBox.classList.remove('show');
    updateCount(); refreshButtons();
  });

  updateCount(); refreshButtons();
})();
</script>

## Everyday uses

- **Reading generated queries:** ORMs and query builders spit out one-line SQL — format it before you try to debug it.
- **Code reviews:** paste formatted SQL into pull requests, tickets, and docs so reviewers can actually read it.
- **Learning SQL:** seeing each clause on its own line makes the structure of SELECT, JOIN, and GROUP BY click much faster.
- **Reports and migrations:** tidy up hand-written queries before they go into production scripts.

## Frequently asked questions

### Is this a full SQL parser?

No — and we would rather be honest about that. It is a smart, hand-written formatter that tokenizes your query (respecting quoted strings and comments) and applies consistent layout rules. It handles everyday SELECT, INSERT, UPDATE, and DELETE statements very well, but it does not build a full syntax tree, so exotic vendor-specific syntax may not be laid out perfectly. Your original text is never modified — the output is always a separate copy.

### Which SQL dialects does it support?

Standard SQL plus the common syntax shared by MySQL, PostgreSQL, SQL Server, and SQLite. Backtick-quoted identifiers (MySQL) and double-quoted identifiers are respected, keywords are uppercased, and string literals are never altered — including quotes escaped with a backslash or doubled up.

### Is my SQL sent to a server?

No. The formatter runs entirely in your browser with JavaScript. You can paste production queries, schema names, and sample data without anything leaving your device.
