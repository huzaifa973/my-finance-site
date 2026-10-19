---
title: "Free ads.txt Validator — Check Your File Against the IAB Spec"
description: "Validate ads.txt in your browser: record format, DIRECT/RESELLER values, duplicates, missing fields. Line-numbered errors + downloadable report. Free, no sign-up."
category: seo
date: 2026-10-19
draft: false
---

A malformed ads.txt can silently block ad revenue. Paste your ads.txt content or upload the file, and this tool validates every line against the IAB spec — record format, DIRECT/RESELLER relationships, missing fields, and duplicate seller entries — with line numbers and a downloadable report.

<div class="tool-shell" id="atvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15h2.5v2H8v-2zm0-4.5h8V12H8v-1.5zm0-4.5h8V7.5H8V6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>ads.txt Validator</h2>
<p>Validate every line of your ads.txt against the IAB spec — errors with line numbers.</p>
</div>
<button type="button" class="theme-toggle" id="atvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your ads.txt</p>
<textarea id="atvTxt" class="tool-input" rows="10" placeholder="Paste your ads.txt here…&#10;&#10;google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0&#10;appnexus.com, 1234, RESELLER"></textarea>
<div class="hint" style="margin-top:.4rem">…or upload the file instead:</div>
<input type="file" id="atvFile" accept=".txt,text/plain" class="tool-input" style="margin-top:.3rem">
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Check options</p>
<div class="settings-panel">
<div class="preset-row" id="atvPresets">
<button type="button" class="preset-chip active" data-cert="0" data-dup="1" data-dir="1">✅ Standard IAB check</button>
<button type="button" class="preset-chip" data-cert="1" data-dup="1" data-dir="1">🔍 Strict (cert ID required)</button>
</div>
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Flag duplicate seller entries</span><label class="toggle"><input type="checkbox" id="atvDup" checked><span class="track"></span></label></div>
<div class="hint">Same domain + publisher ID listed twice is almost always a copy-paste error.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Warn if no DIRECT entries</span><label class="toggle"><input type="checkbox" id="atvDir" checked><span class="track"></span></label></div>
<div class="hint">Most publishers should have at least one DIRECT relationship (e.g. Google AdSense).</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Require certification authority ID</span><label class="toggle"><input type="checkbox" id="atvCert"><span class="track"></span></label></div>
<div class="hint">The 4th field (e.g. f08c47fec0942fa0 for Google). Optional per spec, but good hygiene.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate &amp; report</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="atvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Validate ads.txt
</button>
<button type="button" class="btn-pro-outline" id="atvDl" disabled>⬇ Download Report</button>
<button type="button" class="btn-pro-outline" id="atvClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="atvProgWrap">
<div class="progress-bar"><i id="atvProgBar"></i></div>
<div class="progress-text" id="atvProgText">Working…</div>
</div>
<div class="results" id="atvResults">
<p class="result-head" id="atvHead">Validation report</p>
<div class="result-summary" id="atvSummary"></div>
<div class="result-grid" id="atvGrid"></div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate as many ads.txt files as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('atvShell');
  ToolPro.themeToggle(shell, document.getElementById('atvTheme'));

  var txtEl = document.getElementById('atvTxt');
  var fileEl = document.getElementById('atvFile');
  var btn = document.getElementById('atvBtn');
  var dlBtn = document.getElementById('atvDl');
  var clearBtn = document.getElementById('atvClear');
  var lastReport = '';

  document.getElementById('atvPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.getElementById('atvPresets').querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    document.getElementById('atvCert').checked = chip.dataset.cert === '1';
    document.getElementById('atvDup').checked = chip.dataset.dup === '1';
    document.getElementById('atvDir').checked = chip.dataset.dir === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var n = txtEl.value.trim().length > 0;
    btn.disabled = !n; clearBtn.disabled = !n;
  }
  txtEl.addEventListener('input', refresh);

  fileEl.addEventListener('change', function(){
    var f = fileEl.files[0]; if(!f) return;
    var rd = new FileReader();
    rd.onload = function(){ txtEl.value = rd.result; refresh(); ToolPro.toast('File loaded: ' + f.name, 'ok'); };
    rd.readAsText(f);
    fileEl.value = '';
  });

  clearBtn.addEventListener('click', function(){
    txtEl.value = '';
    document.getElementById('atvResults').classList.remove('show');
    dlBtn.disabled = true;
    refresh();
  });

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  var DOMAIN_RE = /^(?=.{1,253}$)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))+$/;
  var VAR_RE = /^(CONTACT|SUBDOMAIN|OWNERDOMAIN|MANAGERDOMAIN)=/i;

  btn.addEventListener('click', function(){
    var lines = txtEl.value.split(/\r?\n/);
    var chkDup = document.getElementById('atvDup').checked;
    var chkDir = document.getElementById('atvDir').checked;
    var chkCert = document.getElementById('atvCert').checked;
    var errors = [], warnings = [];
    var records = 0, direct = 0, reseller = 0;
    var seen = {};
    var report = ['ads.txt validation report', 'Generated in-browser by DollarWise', ''];

    lines.forEach(function(raw, i){
      var ln = i + 1;
      var line = raw.trim();
      if(!line) return;
      if(line.charAt(0) === '#'){ return; }
      if(VAR_RE.test(line)){
        report.push('Line ' + ln + ': variable declaration — ' + line);
        return;
      }
      var parts = line.split(',').map(function(p){ return p.trim(); });
      if(parts.length < 3){
        errors.push({ line: ln, msg: 'Needs at least 3 comma-separated fields (domain, publisher ID, DIRECT/RESELLER). Found ' + parts.length + '.' });
        report.push('Line ' + ln + ': ERROR — only ' + parts.length + ' fields');
        return;
      }
      records++;
      var domain = parts[0], pubId = parts[1], rel = parts[2].toUpperCase(), cert = parts[3] || '';
      var lineErr = [];
      if(!DOMAIN_RE.test(domain)) lineErr.push('domain "' + domain + '" is not a valid domain name');
      if(!pubId) lineErr.push('publisher ID is empty');
      if(rel !== 'DIRECT' && rel !== 'RESELLER') lineErr.push('relationship must be DIRECT or RESELLER (found "' + parts[2] + '")');
      else if(rel === 'DIRECT') direct++; else reseller++;
      if(chkCert && !cert) warnings.push({ line: ln, msg: 'Missing certification authority ID (4th field) — recommended for trust.' });
      var dupKey = domain.toLowerCase() + '|' + pubId.toLowerCase();
      if(chkDup){
        if(seen[dupKey]) warnings.push({ line: ln, msg: 'Duplicate seller entry: ' + domain + ', ' + pubId + ' (first seen on line ' + seen[dupKey] + ').' });
        else seen[dupKey] = ln;
      }
      lineErr.forEach(function(m){ errors.push({ line: ln, msg: m + '.' }); report.push('Line ' + ln + ': ERROR — ' + m); });
      if(!lineErr.length) report.push('Line ' + ln + ': OK — ' + domain + ', ' + pubId + ', ' + rel);
    });

    if(!records && !errors.length){
      errors.push({ line: 0, msg: 'No seller records found — only comments/blank lines. An ads.txt needs at least one record.' });
    }
    if(chkDir && records > 0 && direct === 0){
      warnings.push({ line: 0, msg: 'No DIRECT entries found — most publishers sell at least some inventory directly.' });
    }

    report.unshift('Records: ' + records + ' (' + direct + ' DIRECT, ' + reseller + ' RESELLER) · Errors: ' + errors.length + ' · Warnings: ' + warnings.length);
    lastReport = report.join('\n');

    document.getElementById('atvHead').textContent = errors.length ? '❌ ' + errors.length + ' error' + (errors.length === 1 ? '' : 's') + ' found' : '✅ ads.txt looks valid';
    document.getElementById('atvSummary').textContent = records + ' seller records · ' + direct + ' DIRECT · ' + reseller + ' RESELLER · ' + errors.length + ' errors · ' + warnings.length + ' warnings';

    var grid = document.getElementById('atvGrid');
    grid.innerHTML = '';
    var list = document.createElement('div');
    list.className = 'result-card';
    if(!errors.length && !warnings.length){
      list.innerHTML = '<div class="r-name">🎉 All checks passed</div><div class="r-stats">Every record has a valid domain, publisher ID, and DIRECT/RESELLER relationship.</div>';
    } else {
      var html = '<div class="r-name">Issues found</div><ol style="margin:.5rem 0 0 1.2rem;font-size:.9rem">';
      errors.forEach(function(e){ html += '<li>❌ ' + (e.line ? 'Line ' + e.line + ': ' : '') + esc(e.msg) + '</li>'; });
      warnings.forEach(function(e){ html += '<li>⚠️ ' + (e.line ? 'Line ' + e.line + ': ' : '') + esc(e.msg) + '</li>'; });
      html += '</ol><div class="r-stats" style="margin-top:.5rem">Fix the ❌ errors first — malformed lines can cause buyers to skip your inventory.</div>';
      list.innerHTML = html;
    }
    grid.appendChild(list);
    document.getElementById('atvResults').classList.add('show');
    dlBtn.disabled = false;
    ToolPro.toast(errors.length ? errors.length + ' error(s) found' : 'ads.txt is valid', errors.length ? 'err' : 'ok');
  });

  dlBtn.addEventListener('click', function(){
    if(!lastReport) return;
    ToolPro.download('data:text/plain;charset=utf-8,' + encodeURIComponent(lastReport), 'ads-txt-report.txt');
    ToolPro.toast('Report downloaded', 'ok');
  });

  refresh();
})();
</script>

## How it works

The IAB ads.txt spec is simple: each data line is `domain, publisher_id, DIRECT|RESELLER[, certification_id]`, comments start with `#`, and variable declarations (`CONTACT=`, `SUBDOMAIN=`, `OWNERDOMAIN=`, `MANAGERDOMAIN=`) are allowed. This tool checks every line in your browser: at least 3 comma-separated fields, a syntactically valid domain, a non-empty publisher ID, and a relationship of exactly DIRECT or RESELLER (case-insensitive). Optional checks flag duplicate domain+ID pairs, missing certification IDs, and files with zero DIRECT entries. The downloadable report lists the verdict for every line.

**Honest limitation:** syntax is only half the story — this tool can't verify that the publisher IDs actually belong to you or that the file is live at `yoursite.com/ads.txt`. After fixing syntax, confirm the live file loads and matches what you validated here.

## Everyday uses

- **AdSense/Ad Manager publishers** — verify your ads.txt before and after every edit; one typo can pause revenue.
- **New sites** — generate your first ads.txt, then validate it here before going live.
- **Agencies** — audit client files in bulk without touching their servers.
- **Reseller cleanup** — spot duplicate entries added by multiple ad partners over time.
- **Revenue troubleshooting** — "ads.txt missing/invalid" warnings in AdSense often trace to a single bad line.
