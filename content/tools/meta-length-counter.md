---
title: "Meta Length Counter — Title & Description Pixel + Character Checker"
description: "Live meta title and description length checker with pixel widths and a Google SERP truncation preview. Stay within display limits — free, no sign-up."
category: seo
date: 2026-10-16
draft: false
---

Meta titles get cut at ~580 pixels and meta descriptions at ~920 pixels on desktop — character counts alone lie, because letter widths differ. Type below and watch both counters update live, with a realistic Google preview showing exactly what searchers would see.

<div class="tool-shell" id="mlcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm2 4v2h12V8H6zm0 4v2h8v-2H6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Meta Length Counter</h2>
<p>Live character + pixel counters for your meta title and description, with a true SERP preview.</p>
</div>
<button type="button" class="theme-toggle" id="mlcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Type your meta tags</p>
<label for="mlcTitle" style="font-weight:600;display:block;margin-bottom:6px;">Meta title</label>
<textarea class="tool-input" id="mlcTitle" rows="2" placeholder="Your page title as it appears in the &lt;title&gt; tag"></textarea>
<label for="mlcDesc" style="font-weight:600;display:block;margin:12px 0 6px;">Meta description</label>
<textarea class="tool-input" id="mlcDesc" rows="3" placeholder="Your meta description — the snippet under the title"></textarea>
<label for="mlcUrl" style="font-weight:600;display:block;margin:12px 0 6px;">Page URL (for the preview)</label>
<input type="text" class="tool-input" id="mlcUrl" placeholder="https://example.com/my-page/">
<div class="hint">Counters update live as you type. Nothing leaves your browser.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Display limits</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="mlcTitleCut">Title pixel cutoff: <span class="val" id="mlcTitleCutVal">580px</span></label>
<input type="range" id="mlcTitleCut" min="500" max="650" step="5" value="580">
<div class="hint">Desktop Google shows ~580–600px.</div>
</div>
<div class="setting">
<label for="mlcDescCut">Description pixel cutoff: <span class="val" id="mlcDescCutVal">920px</span></label>
<input type="range" id="mlcDescCut" min="800" max="1000" step="10" value="920">
<div class="hint">Desktop descriptions truncate around ~920px.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Google SERP preview</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mlcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0A4.5 4.5 0 1 1 14 18.5 4.5 4.5 0 0 1 9.5 14z"/></svg>
Refresh Preview
</button>
<button type="button" class="btn-pro-outline" id="mlcClear" disabled>Clear all</button>
</div>
<div class="results" id="mlcResults">
<p class="result-head">🔍 Live SERP preview</p>
<div class="result-summary" id="mlcSummary"></div>
<div class="result-grid" id="mlcGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Check every page on your site — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mlcShell');
  ToolPro.themeToggle(shell, document.getElementById('mlcTheme'));
  var tIn = document.getElementById('mlcTitle');
  var dIn = document.getElementById('mlcDesc');
  var uIn = document.getElementById('mlcUrl');
  var btn = document.getElementById('mlcBtn');
  var clearBtn = document.getElementById('mlcClear');
  var resBox = document.getElementById('mlcResults');
  var summary = document.getElementById('mlcSummary');
  var grid = document.getElementById('mlcGrid');
  var titleCutR = document.getElementById('mlcTitleCut');
  var titleCutV = document.getElementById('mlcTitleCutVal');
  var descCutR = document.getElementById('mlcDescCut');
  var descCutV = document.getElementById('mlcDescCutVal');
  ToolPro.bindSlider(titleCutR, titleCutV, function(v){ return v + 'px'; });
  ToolPro.bindSlider(descCutR, descCutV, function(v){ return v + 'px'; });
  var c = document.createElement('canvas');
  var tctx = c.getContext('2d');
  var dctx = c.getContext('2d');

  function px(text, font){
    var x = document.createElement('canvas').getContext('2d');
    x.font = font;
    return Math.round(x.measureText(text).width);
  }
  function esc(s){
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function trunc(text, font, limit){
    if(px(text, font) <= limit) return text;
    var tmp = text;
    while(tmp.length > 1 && px(tmp + '…', font) > limit){ tmp = tmp.slice(0, -1); }
    return tmp + '…';
  }
  function chip(ok, warn, label){
    var icon = ok ? '✅' : (warn ? '⚠️' : '❌');
    return '<span style="display:inline-block;margin:2px 6px 2px 0;padding:3px 10px;border-radius:20px;background:' +
      (ok ? '#e6f6e6' : (warn ? '#fdf3dd' : '#fdecec')) + ';font-size:13px;">' + icon + ' ' + label + '</span>';
  }

  function render(){
    var t = tIn.value.trim(), d = dIn.value.trim();
    btn.disabled = !(t || d);
    clearBtn.disabled = !(tIn.value || dIn.value || uIn.value);
    if(!t && !d){ resBox.classList.remove('show'); return; }
    var tw = t ? px(t, '20px Arial') : 0;
    var dw = d ? px(d, '14px Arial') : 0;
    var tCut = parseInt(titleCutR.value, 10), dCut = parseInt(descCutR.value, 10);
    var tOk = !t || tw <= tCut, dOk = !d || dw <= dCut;
    var tTight = t && !tOk ? false : (t && tw > tCut * 0.92);
    var dTight = d && !dOk ? false : (d && dw > dCut * 0.92);
    var url = uIn.value.trim() || 'https://example.com/your-page/';
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name">Desktop Google preview</div>' +
      '<div style="border:1px solid #dfe1e5;border-radius:8px;padding:14px;margin:8px 0;background:#fff;">' +
      '<div style="color:#202124;font-size:14px;">' + esc(url.replace(/^https?:\/\//, '').split('/')[0]) +
      ' › ' + esc(url.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '').replace(/\//g, ' › ').slice(0, 60)) + '</div>' +
      (t ? '<div style="color:#1a0dab;font-size:20px;line-height:1.3;margin:2px 0;">' + esc(trunc(t, '20px Arial', tCut)) + '</div>' : '') +
      (d ? '<div style="color:#4d5156;font-size:14px;line-height:1.58;">' + esc(trunc(d, '14px Arial', dCut)) + '</div>' : '') +
      '</div>' +
      '<div class="r-stats">' +
      (t ? chip(tOk && !tTight, tTight, 'Title: ' + t.length + ' chars · ' + tw + 'px' + (tOk ? '' : ' — OVER ' + tCut + 'px')) : '') +
      (d ? chip(dOk && !dTight, dTight, 'Description: ' + d.length + ' chars · ' + dw + 'px' + (dOk ? '' : ' — OVER ' + dCut + 'px')) : '') +
      '</div>';
    grid.appendChild(card);
    summary.textContent = (tOk && dOk) ? '✅ Both tags fit Google\u2019s desktop display.' :
      '❌ One or more tags will be truncated — shorten the flagged one.';
    resBox.classList.add('show');
  }

  [tIn, dIn, uIn].forEach(function(el){ el.addEventListener('input', render); });
  [titleCutR, descCutR].forEach(function(el){ el.addEventListener('input', render); });
  btn.addEventListener('click', function(){
    render();
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Preview refreshed', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    tIn.value = ''; dIn.value = ''; uIn.value = '';
    resBox.classList.remove('show');
    btn.disabled = true; clearBtn.disabled = true;
  });
  render();
})();
</script>

## How it works

- **Step 1** — Type your meta title, meta description, and page URL. Every keystroke re-measures.
- **Step 2** — Optionally tune the pixel cutoffs (desktop Google truncates titles ~580px and descriptions ~920px).
- **Step 3** — The tool renders a desktop Google result card with true pixel truncation (20px Arial for titles, 14px for descriptions) and flags each tag with a ✅ / ⚠️ / ❌ chip showing characters and pixels.

## Everyday uses

- **Content writers** — finalize titles and descriptions that display in full.
- **SEOs** — bulk-check client pages without leaving the browser.
- **Bloggers** — write descriptions that actually get read instead of cut off mid-sentence.
- **Developers** — sanity-check CMS templates that auto-generate meta tags.

**Rule of thumb:** keep titles under ~550px and descriptions under ~880px for a safety margin — Google's exact cutoff shifts slightly by query and device.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/meta-length-counter.md tool_name=read]
