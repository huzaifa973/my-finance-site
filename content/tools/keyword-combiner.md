---
title: "Free Keyword Combiner — Generate Every Keyword Combination"
description: "Combine keyword lists into every A×B and A×B×C combination, with exact/phrase/broad match-type wrapping, dedupe and CSV export. Free forever, runs 100% in your browser."
category: seo
date: 2026-10-15
draft: false
---

Building out ad groups or content clusters means mixing every service with every location and every modifier — by hand that's hours of copy-paste. Paste your lists below and this combiner builds every combination instantly, with match-type formatting, dedupe and lowercase options, plus one-click CSV export.

<div class="tool-shell" id="kcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14.83 4L16.66 2.17 20.83 6.34 18.99 8.17zM4.41 5.41L3 6.83l5.17 5.17 1.42-1.42zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Keyword Combiner</h2>
<p>Mix keyword lists into every combination — A×B or A×B×C — with match-type formatting.</p>
</div>
<button type="button" class="theme-toggle" id="kcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your keyword lists</p>
<div class="setting">
<label for="kcA">List A — services, products or topics <span class="val" id="kcCountA">0 keywords</span></label>
<textarea id="kcA" class="tool-input" rows="6" placeholder="plumber&#10;electrician&#10;roof repair"></textarea>
<div class="hint">One keyword per line. Example: services, products or seed topics.</div>
</div>
<div class="setting">
<label for="kcB">List B — locations, modifiers or intents <span class="val" id="kcCountB">0 keywords</span></label>
<textarea id="kcB" class="tool-input" rows="6" placeholder="new york&#10;near me&#10;emergency"></textarea>
<div class="hint">One keyword per line. Example: cities, "near me", "price", "best".</div>
</div>
<div class="setting">
<label for="kcC">List C — optional third list <span class="val" id="kcCountC">0 keywords</span></label>
<textarea id="kcC" class="tool-input" rows="4" placeholder="2026&#10;affordable&#10;(leave empty for A×B only)"></textarea>
<div class="hint">Only used when the A×B×C mode below is active.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Combination settings</p>
<div class="settings-panel">
<div class="preset-row" id="kcPresets">
<button type="button" class="preset-chip active" data-m="two">A×B pairs</button>
<button type="button" class="preset-chip" data-m="three">A×B×C triples</button>
<button type="button" class="preset-chip" data-m="exact">Exact-match ad groups</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="kcMatch">Match-type formatting</label>
<select id="kcMatch">
<option value="none">None — plain keywords</option>
<option value="exact">[Exact match] — [keyword]</option>
<option value="phrase">"Phrase match" — "keyword"</option>
<option value="broad">+Modified +broad — +word +word</option>
</select>
<div class="hint">Google Ads match types applied to every combination automatically.</div>
</div>
<div class="setting">
<label for="kcMaxLen">Max combination length: <span class="val" id="kcMaxLenVal">80 chars</span></label>
<input type="range" id="kcMaxLen" min="10" max="120" step="1" value="80">
<div class="hint">Overlong combos get dropped — ad headlines have limits too.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Remove duplicate combinations</span><label class="toggle"><input type="checkbox" id="kcDedupe" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Lowercase everything</span><label class="toggle"><input type="checkbox" id="kcLower" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; export</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="kcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M14.83 4L16.66 2.17 20.83 6.34 18.99 8.17zM4.41 5.41L3 6.83l5.17 5.17 1.42-1.42zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>
Generate Combinations
</button>
<button type="button" class="btn-pro-outline" id="kcCopy" disabled>📋 Copy all</button>
<button type="button" class="btn-pro-outline" id="kcCsv" disabled>⬇ Download CSV</button>
</div>
<div class="progress-wrap" id="kcProgWrap">
<div class="progress-bar"><i id="kcProgBar"></i></div>
<div class="progress-text" id="kcProgText">Combining…</div>
</div>
<div class="results" id="kcResults">
<p class="result-head">✅ Combinations generated</p>
<div class="result-summary" id="kcSummary"></div>
<div class="result-card" style="margin-top:1rem;text-align:left;align-items:flex-start;">
<div style="font-size:.85rem;font-weight:700;margin-bottom:.5rem;">📝 Preview (first 200)</div>
<div id="kcList" style="font-size:.85rem;line-height:1.7;max-height:320px;overflow:auto;"></div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — generate unlimited keyword combinations, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('kcShell');
  ToolPro.themeToggle(shell, document.getElementById('kcTheme'));
  var tA = document.getElementById('kcA'), tB = document.getElementById('kcB'), tC = document.getElementById('kcC');
  var btn = document.getElementById('kcBtn'), copyBtn = document.getElementById('kcCopy'), csvBtn = document.getElementById('kcCsv');
  var matchSel = document.getElementById('kcMatch'), dedupe = document.getElementById('kcDedupe'), lower = document.getElementById('kcLower');
  var maxR = document.getElementById('kcMaxLen'), maxV = document.getElementById('kcMaxLenVal');
  var presets = document.getElementById('kcPresets');
  var mode = 'two';
  ToolPro.bindSlider(maxR, maxV, function(v){ return v + ' chars'; });
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.m;
    if(mode === 'exact'){ matchSel.value = 'exact'; }
    refresh();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  function lines(el){
    return el.value.split('\n').map(function(s){ return s.trim(); }).filter(function(s){ return s; });
  }
  function refresh(){
    var a = lines(tA).length, b = lines(tB).length, c = lines(tC).length;
    document.getElementById('kcCountA').textContent = a + ' keywords';
    document.getElementById('kcCountB').textContent = b + ' keywords';
    document.getElementById('kcCountC').textContent = c + ' keywords';
    var ok = a > 0 && b > 0 && (mode === 'two' || c > 0);
    btn.disabled = !ok;
    if(ok){
      var est = mode === 'two' ? a * b : a * b * c;
      btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M14.83 4L16.66 2.17 20.83 6.34 18.99 8.17zM4.41 5.41L3 6.83l5.17 5.17 1.42-1.42zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg> Generate ~' + est.toLocaleString() + ' Combinations';
    }
  }
  [tA, tB, tC].forEach(function(el){ el.addEventListener('input', refresh); });
  function wrap(term){
    var m = matchSel.value;
    if(m === 'exact') return '[' + term + ']';
    if(m === 'phrase') return '"' + term + '"';
    if(m === 'broad') return term.split(/\s+/).map(function(w){ return '+' + w; }).join(' ');
    return term;
  }
  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  var lastOut = [];
  btn.addEventListener('click', function(){
    var A = lines(tA), B = lines(tB), C = lines(tC);
    if(!(A.length && B.length && (mode === 'two' || C.length))) return;
    var progWrap = document.getElementById('kcProgWrap'), progBar = document.getElementById('kcProgBar');
    var resBox = document.getElementById('kcResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '35%';
    document.getElementById('kcProgText').textContent = 'Combining lists…';
    setTimeout(function(){
      var maxLen = parseInt(maxR.value, 10);
      var out = [];
      var capped = false;
      outer:
      for(var i = 0; i < A.length; i++){
        for(var j = 0; j < B.length; j++){
          if(mode === 'two'){
            var t = A[i] + ' ' + B[j];
            if(lower.checked) t = t.toLowerCase();
            if(t.length <= maxLen) out.push(wrap(t));
          } else {
            for(var k = 0; k < C.length; k++){
              var t2 = A[i] + ' ' + B[j] + ' ' + C[k];
              if(lower.checked) t2 = t2.toLowerCase();
              if(t2.length <= maxLen) out.push(wrap(t2));
              if(out.length > 100000){ capped = true; break outer; }
            }
          }
          if(out.length > 100000){ capped = true; break outer; }
        }
        progBar.style.width = Math.round((i + 1) / A.length * 90) + '%';
      }
      if(dedupe.checked){
        var seen = {}, ded = [];
        out.forEach(function(t){ if(!seen[t]){ seen[t] = 1; ded.push(t); } });
        out = ded;
      }
      lastOut = out;
      var note = capped ? ' (capped at 100,000 — narrow your lists for the full set)' : '';
      document.getElementById('kcSummary').textContent =
        '🎉 Generated ' + out.length.toLocaleString() + ' unique combinations' + note + '. Preview below, copy or download the full list.';
      document.getElementById('kcList').innerHTML = out.slice(0, 200).map(function(t){
        return '<div>' + esc(t) + '</div>';
      }).join('') + (out.length > 200 ? '<div style="color:var(--tp-muted);">…and ' + (out.length - 200).toLocaleString() + ' more in the download.</div>' : '');
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = !out.length; csvBtn.disabled = !out.length;
      ToolPro.toast(out.length.toLocaleString() + ' combinations generated', 'ok');
      refresh();
    }, 300);
  });
  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(lastOut.join('\n'), lastOut.length.toLocaleString() + ' combinations copied');
  });
  csvBtn.addEventListener('click', function(){
    var csv = lastOut.map(function(t){ return '"' + t.replace(/"/g, '""') + '"'; }).join('\n');
    ToolPro.download('data:text/csv;charset=utf-8,' + encodeURIComponent(csv), 'keyword-combinations.csv');
    ToolPro.toast('CSV downloaded', 'ok');
  });
  refresh();
})();
</script>

## How it works

1. **Paste your lists** — one keyword per line in List A and List B (and List C for triples). The button shows a live estimate of how many combinations you'll get.
2. **Choose settings** — pick A×B or A×B×C mode, add exact/phrase/broad match-type formatting, toggle dedupe and lowercase, and set a max length.
3. **Generate &amp; export** — preview the first 200 combinations, then copy all or download the full set as CSV.

Everything runs in your browser — your keyword lists never leave this page.

## Everyday uses

- **Google Ads** — build tight ad groups: services × locations with [exact] match formatting in one click.
- **SEO content clusters** — topics × modifiers ("cost", "best", "near me") for hundreds of long-tail page ideas.
- **Keyword research** — expand a seed list into every realistic search variation before checking volume.
- **PPC agencies** — generate structured keyword sets for client accounts in minutes, not hours.
- **Niche sites** — product × use-case combinations make great comparison-article targets.

**Rule of thumb:** start with A×B pairs — triples explode fast (10×10×10 = 1,000). Use exact match for paid campaigns and plain output for content research.
