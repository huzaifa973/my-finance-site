---
title: "Free Heading Checker — Audit Your H1–H6 Structure Online"
description: "Audit your page's H1–H6 heading structure instantly: find missing H1s, skipped levels, empty headings and length issues, with a fix checklist."
category: seo
date: 2026-10-22
draft: false
---

Headings are the skeleton of your page — Google and screen readers both depend on them. Paste any HTML or page source below and get a full H1–H6 audit: counts per level, missing H1s, skipped levels, empty headings, and headings that are too long or too short — with a plain-language fix checklist. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="hcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 9h16v2H4V9zm0 4h16v2H4v-2zm0 4h16v2H4v-2zM2 4h20v2H2V4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Heading Checker</h2>
<p>Audit H1–H6 structure: find missing, skipped, and duplicate headings in seconds.</p>
</div>
<button type="button" class="theme-toggle" id="hcTheme">🌙 Dark</button>
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
<label for="hcInput">HTML or page source with headings</label>
<textarea class="tool-input" id="hcInput" rows="10" style="width:100%;" placeholder="Paste your HTML here — e.g. view page source and paste it, or paste just your &lt;h1&gt;–&lt;h6&gt; tags."></textarea>
<div class="hint">Only the heading tags are analyzed — everything else is ignored. Your text never leaves this page.</div>
</div>
<div class="tool-actions" style="margin-top:10px;">
<button type="button" class="btn-pro-outline" id="hcSample">📄 Load sample</button>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audit settings</p>
<div class="settings-panel">
<div class="preset-row" id="hcPresets">
<button type="button" class="preset-chip active" data-p="default">⚖️ Default SEO audit</button>
<button type="button" class="preset-chip" data-p="strict">🔍 Strict (one H1 only)</button>
<button type="button" class="preset-chip" data-p="a11y">♿ Accessibility focus</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="hcMaxLen">Max heading length: <span class="val" id="hcMaxLenVal">70 chars</span></label>
<input type="range" id="hcMaxLen" min="30" max="120" value="70">
<div class="hint">Headings longer than this get flagged for trimming.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="hcCheckSkip" checked><span></span> Flag skipped levels</label>
<div class="hint">H1 followed by H3, H2 by H4, etc.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="hcCheckMulti" checked><span></span> Flag multiple H1s</label>
<div class="hint">One H1 per page is the safe default.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="hcCheckEmpty" checked><span></span> Flag empty &amp; tiny headings</label>
<div class="hint">Headings with no text, or under 3 characters.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Run the audit</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M4 9h16v2H4V9zm0 4h16v2H4v-2zm0 4h16v2H4v-2zM2 4h20v2H2V4z"/></svg>
Audit Headings
</button>
<button type="button" class="btn-pro-outline" id="hcClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="hcProgWrap">
<div class="progress-bar"><i id="hcProgBar"></i></div>
<div class="progress-text" id="hcProgText">Working…</div>
</div>
<div class="results" id="hcResults">
<p class="result-head">✅ Done — heading audit report</p>
<div class="result-summary" id="hcSummary"></div>
<div class="result-grid" id="hcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Audit as many pages as you like — everything runs locally in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('hcShell');
  ToolPro.themeToggle(shell, document.getElementById('hcTheme'));
  var input = document.getElementById('hcInput');
  var btn = document.getElementById('hcBtn');
  var clearBtn = document.getElementById('hcClear');
  var sampleBtn = document.getElementById('hcSample');
  var lenR = document.getElementById('hcMaxLen');
  var lenV = document.getElementById('hcMaxLenVal');
  var presets = document.getElementById('hcPresets');
  var resBox = document.getElementById('hcResults');
  var grid = document.getElementById('hcGrid');
  var progWrap = document.getElementById('hcProgWrap');
  var progBar = document.getElementById('hcProgBar');
  var progText = document.getElementById('hcProgText');
  ToolPro.bindSlider(lenR, lenV, function(v){ return v + ' chars'; });

  var PRESET_CFG = {
    default: { max: 70, skip: true, multi: true, empty: true },
    strict:  { max: 60, skip: true, multi: true, empty: true },
    a11y:    { max: 90, skip: true, multi: false, empty: true }
  };
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var c = PRESET_CFG[chip.dataset.p];
    lenR.value = c.max; lenR.dispatchEvent(new Event('input'));
    document.getElementById('hcCheckSkip').checked = c.skip;
    document.getElementById('hcCheckMulti').checked = c.multi;
    document.getElementById('hcCheckEmpty').checked = c.empty;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var ready = input.value.trim().length > 10;
    btn.disabled = !ready;
    clearBtn.disabled = !ready;
  }
  input.addEventListener('input', refresh);

  sampleBtn.addEventListener('click', function(){
    input.value = '<h1>Best Budget Laptops for Students 2026</h1>\n<h3>Why laptops matter</h3>\n<h2>Top picks under $500</h2>\n<h2></h2>\n<h2>Laptop buying guide for students who need a very long and detailed heading that should probably be shortened</h2>\n<h1>Another H1 by mistake</h1>\n<h4>Accessories</h4>';
    refresh();
    ToolPro.toast('Sample HTML loaded — hit Audit Headings', 'ok');
  });

  clearBtn.addEventListener('click', function(){
    input.value = '';
    resBox.classList.remove('show');
    grid.innerHTML = '';
    refresh();
  });

  function stripTags(html){
    var d = document.createElement('div');
    d.innerHTML = html;
    return (d.textContent || '').replace(/\s+/g, ' ').trim();
  }
  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  btn.addEventListener('click', function(){
    if(!input.value.trim()) return;
    btn.disabled = true;
    progWrap.classList.add('show');
    progBar.style.width = '30%';
    progText.textContent = 'Scanning headings…';
    resBox.classList.remove('show');
    grid.innerHTML = '';
    setTimeout(function(){
      var re = /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi;
      var heads = [], m;
      while((m = re.exec(input.value)) !== null){
        heads.push({ level: parseInt(m[1], 10), text: stripTags(m[2]) });
      }
      progBar.style.width = '70%';
      progText.textContent = 'Checking structure…';
      var counts = [0, 0, 0, 0, 0, 0];
      heads.forEach(function(h){ counts[h.level - 1]++; });
      var issues = [];
      var checkSkip = document.getElementById('hcCheckSkip').checked;
      var checkMulti = document.getElementById('hcCheckMulti').checked;
      var checkEmpty = document.getElementById('hcCheckEmpty').checked;
      var maxLen = parseInt(lenR.value, 10);

      if(!heads.length){
        issues.push({ sev: 'bad', msg: 'No headings found — paste HTML that contains <h1>–<h6> tags.' });
      } else {
        if(heads[0].level !== 1){
          issues.push({ sev: 'bad', msg: 'Your first heading is H' + heads[0].level + ', not H1.', fix: 'Start the page with one H1 that states the main topic (usually the page title).' });
        }
        if(counts[0] === 0){
          issues.push({ sev: 'bad', msg: 'Missing H1 — the page has no top-level heading.', fix: 'Add exactly one H1 with your main keyword, near the top of the page.' });
        }
        if(checkMulti && counts[0] > 1){
          issues.push({ sev: 'warn', msg: 'Multiple H1s found (' + counts[0] + ').', fix: 'Keep one H1 for the page topic; demote the others to H2.' });
        }
        if(checkSkip){
          var seen = [];
          for(var i = 1; i < heads.length; i++){
            if(heads[i].level - heads[i - 1].level > 1){
              seen.push('H' + heads[i - 1].level + ' → H' + heads[i].level + ' ("' + heads[i].text.slice(0, 40) + '")');
            }
          }
          if(seen.length){
            issues.push({ sev: 'warn', msg: 'Skipped heading level(s): ' + seen.slice(0, 3).join('; ') + (seen.length > 3 ? ' …' : ''), fix: 'Fill the missing level in between, or demote the deeper heading so levels step one at a time.' });
          }
        }
        heads.forEach(function(h){
          if(checkEmpty && h.text.length < 3){
            issues.push({ sev: 'warn', msg: 'Empty or tiny H' + h.level + ' heading.', fix: 'Give every heading real text — empty headings confuse screen readers and crawlers.' });
          }
          if(h.text.length > maxLen){
            issues.push({ sev: 'warn', msg: 'H' + h.level + ' is ' + h.text.length + ' chars — over your ' + maxLen + ' limit.', fix: 'Trim to the key phrase; move extra words into the paragraph below.' });
          }
        });
        var seenTxt = {};
        heads.forEach(function(h){
          var t = h.text.toLowerCase();
          if(t.length > 5 && seenTxt[t]){ seenTxt[t]++; } else if(t.length > 5){ seenTxt[t] = 1; }
        });
        Object.keys(seenTxt).forEach(function(t){
          if(seenTxt[t] > 1){
            issues.push({ sev: 'warn', msg: 'Duplicate heading text ("' + t.slice(0, 40) + '") used ' + seenTxt[t] + ' times.', fix: 'Make each heading unique so readers and crawlers can tell sections apart.' });
          }
        });
        if(!issues.length){
          issues.push({ sev: 'ok', msg: 'Clean structure — single H1, levels step down correctly, all headings have useful text.', fix: '' });
        }
      }

      var score = 100;
      if(counts[0] === 0) score -= 30;
      if(checkMulti && counts[0] > 1) score -= 15;
      if(heads.length && heads[0].level !== 1) score -= 10;
      issues.forEach(function(it){
        if(it.sev === 'warn') score -= 4;
      });
      score = Math.max(0, Math.min(100, score));
      var grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';

      var countsHtml = counts.map(function(n, i){
        return '<span style="display:inline-block;margin:4px 8px 4px 0;"><b>H' + (i + 1) + '</b>: ' + n + '</span>';
      }).join('');
      var issueHtml = issues.map(function(it){
        var icon = it.sev === 'ok' ? '✅' : it.sev === 'bad' ? '🔴' : '⚠️';
        return '<li>' + icon + ' <b>' + esc(it.msg) + '</b>' + (it.fix ? '<br><span class="hint">Fix: ' + esc(it.fix) + '</span>' : '') + '</li>';
      }).join('');
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div style="font-size:2.2em;font-weight:bold;">Grade: ' + grade + ' <span class="hint">(' + score + '/100)</span></div>' +
        '<div class="r-stats">' + countsHtml + '</div>' +
        '<div class="r-stats">' + heads.length + ' heading' + (heads.length === 1 ? '' : 's') + ' analyzed</div>' +
        '<ol style="text-align:left;margin-top:8px;">' + issueHtml + '</ol>';
      grid.appendChild(card);

      var bad = issues.filter(function(i){ return i.sev !== 'ok'; }).length;
      document.getElementById('hcSummary').textContent =
        bad ? 'Found ' + bad + ' issue' + (bad === 1 ? '' : 's') + ' in ' + heads.length + ' headings — work through the fix checklist above.'
            : 'No issues found — ' + heads.length + ' headings, clean structure.';
      progBar.style.width = '100%';
      progText.textContent = 'Done';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      ToolPro.toast(bad ? 'Audit complete — ' + bad + ' issue' + (bad === 1 ? '' : 's') + ' found' : 'Audit complete — all clean', bad ? 'err' : 'ok');
    }, 150);
  });
  refresh();
})();
</script>

## How it works

- **Step 1** — Paste your page HTML (View Source → copy everything, or just your heading tags) into the box.
- **Step 2** — Tune the audit: pick a preset, set the max heading length, and toggle which checks run.
- **Step 3** — Hit **Audit Headings** and get a grade plus a fix checklist with plain-language fixes.

## Everyday uses

- **Bloggers & SEOs** — check heading hierarchy before publishing every post; missing H1s are one of the most common on-page SEO mistakes.
- **Content editors** — hand writers a concrete fix list instead of vague "fix your headings" feedback.
- **Accessibility audits** — skipped levels and empty headings break screen-reader navigation; catch them in seconds.
- **Site migrations** — paste pages from the old site to make sure heading structure survived the move.
- **Competitor research** — see how a ranking page structures its headings and model your own outline.

**Rule of thumb:** one H1 for the page's main topic, then H2s for main sections and H3s for sub-points — never skip a level, and keep each heading under about 70 characters.
