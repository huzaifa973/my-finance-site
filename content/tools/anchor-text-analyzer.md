---
title: "Anchor Text Analyzer — Check Your Backlink Anchor Text Mix Free"
description: "Paste page HTML and analyze anchor text distribution — exact match, partial, branded, generic, and naked URLs — with over-optimization warnings. Free, private, in your browser."
category: seo
date: 2026-10-28
draft: false
---

Anchor text is the clickable text of a link, and its mix matters: too many exact-match anchors pointing at one page can look manipulative to search engines, while a natural profile blends branded, partial-match, generic, and naked-URL anchors. Paste the HTML of a page (or any chunk of HTML containing links) and this analyzer extracts every anchor, classifies it, and shows the distribution with plain-English warnings. Nothing is uploaded — the analysis runs entirely in your browser.

<div class="tool-shell" id="ataShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Anchor Text Analyzer</h2>
<p>Paste HTML, see your anchor mix — exact, partial, branded, generic, naked URL.</p>
</div>
<button type="button" class="theme-toggle" id="ataTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste HTML containing links</p>
<textarea id="ataHtml" class="tool-input" rows="8" placeholder="Paste HTML here, e.g. &lt;a href=&quot;https://example.com/best-coffee-makers&quot;&gt;best coffee makers&lt;/a&gt;"></textarea>
<div class="hint">Tip: in your browser, right-click a page and choose View Source, or copy any block of HTML that contains &lt;a&gt; tags. Internal links (starting with / or #) are skipped by default.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Classification settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="ataBrand">Your brand / domain (for branded detection)</label>
<input type="text" id="ataBrand" class="tool-input" placeholder="e.g. example.com or Acme" autocomplete="off">
</div>
<div class="setting">
<label for="ataKeyword">Target keyword (for exact-match detection)</label>
<input type="text" id="ataKeyword" class="tool-input" placeholder="e.g. best coffee makers" autocomplete="off">
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="ataInternal" checked><span></span> Skip internal links (starting with / or #)</label>
<label class="toggle"><input type="checkbox" id="ataNofollow" checked><span></span> Flag nofollow / sponsored links</label>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Analyze &amp; review the mix</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ataBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
Analyze Anchors
</button>
<button type="button" class="btn-pro-outline" id="ataClear">Clear</button>
</div>
<div class="progress-wrap" id="ataProgWrap">
<div class="progress-bar"><i id="ataProgBar"></i></div>
<div class="progress-text" id="ataProgText">Analyzing…</div>
</div>
<div class="results" id="ataResults">
<p class="result-head">✅ Anchor text analysis</p>
<div class="result-summary" id="ataSummary"></div>
<div class="result-grid" id="ataGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Analyze as many pages as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('ataShell');
  ToolPro.themeToggle(shell, document.getElementById('ataTheme'));
  var htmlEl = document.getElementById('ataHtml');
  var btn = document.getElementById('ataBtn');
  var clearBtn = document.getElementById('ataClear');
  var resBox = document.getElementById('ataResults');
  var summaryEl = document.getElementById('ataSummary');
  var gridEl = document.getElementById('ataGrid');
  var progWrap = document.getElementById('ataProgWrap');
  var progBar = document.getElementById('ataProgBar');
  var GENERIC = ['click here', 'learn more', 'read more', 'click', 'here', 'this', 'website', 'link', 'more', 'visit', 'check this out', 'find out more', 'see more', 'go here', 'this page', 'article'];
  function stripTags(s){ return s.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim(); }
  function classify(text, href, brand, keyword){
    var t = text.toLowerCase();
    if(!text) return 'Image / no text';
    if(/^https?:\/\//i.test(text) || /^www\./i.test(text)) return 'Naked URL';
    if(GENERIC.indexOf(t) !== -1) return 'Generic';
    if(brand && t.indexOf(brand.toLowerCase()) !== -1) return 'Branded';
    if(keyword && t === keyword.toLowerCase()) return 'Exact match';
    if(keyword && t.indexOf(keyword.toLowerCase()) !== -1) return 'Partial match';
    if(keyword){
      var kw = keyword.toLowerCase().split(/\s+/).filter(Boolean);
      var hits = kw.filter(function(w){ return t.indexOf(w) !== -1; }).length;
      if(hits && hits < kw.length) return 'Partial match';
    }
    return 'Other';
  }
  function refresh(){ btn.disabled = !htmlEl.value.trim(); }
  htmlEl.addEventListener('input', refresh);
  clearBtn.addEventListener('click', function(){
    htmlEl.value = ''; document.getElementById('ataBrand').value = ''; document.getElementById('ataKeyword').value = '';
    gridEl.innerHTML = ''; summaryEl.textContent = ''; resBox.classList.remove('show'); refresh();
  });
  btn.addEventListener('click', function(){
    var html = htmlEl.value;
    var brand = document.getElementById('ataBrand').value.trim();
    var keyword = document.getElementById('ataKeyword').value.trim();
    var skipInternal = document.getElementById('ataInternal').checked;
    var flagNofollow = document.getElementById('ataNofollow').checked;
    var re = /<a\b([^>]*)>([\s\S]*?)<\/a\s*>/gi;
    var links = [], m;
    while((m = re.exec(html)) !== null){
      var attrs = m[1] || '';
      var hrefM = /href\s*=\s*"([^"]*)"|href\s*=\s*'([^']*)'/.exec(attrs);
      var href = hrefM ? (hrefM[1] || hrefM[2] || '') : '';
      if(skipInternal && (href.charAt(0) === '/' || href.charAt(0) === '#')) continue;
      var relM = /rel\s*=\s*"([^"]*)"|rel\s*=\s*'([^']*)'/.exec(attrs);
      var rel = relM ? (relM[1] || relM[2] || '').toLowerCase() : '';
      var text = stripTags(m[2]);
      var hasImg = /<img\b/i.test(m[2]);
      links.push({ href: href, text: text, type: classify(text, href, brand, keyword), rel: rel, hasImg: hasImg });
    }
    if(!links.length){ ToolPro.toast('No links found — paste HTML containing <a> tags.', 'err'); return; }
    progWrap.classList.add('show'); progBar.style.width = '60%';
    var counts = {};
    links.forEach(function(l){ counts[l.type] = (counts[l.type] || 0) + 1; });
    var total = links.length;
    var pct = function(n){ return Math.round(n / total * 100); };
    var order = ['Exact match', 'Partial match', 'Branded', 'Generic', 'Naked URL', 'Image / no text', 'Other'];
    var rows = order.filter(function(k){ return counts[k]; }).map(function(k){
      return k + ': ' + counts[k] + ' (' + pct(counts[k]) + '%)';
    }).join('  ·  ');
    var warnings = [];
    if(counts['Exact match'] && pct(counts['Exact match']) > 30) warnings.push('Exact-match anchors are ' + pct(counts['Exact match']) + '% — above the rough 30% caution line. Vary them with branded and partial-match text.');
    if(counts['Generic'] && pct(counts['Generic']) > 40) warnings.push('Generic anchors are ' + pct(counts['Generic']) + '% — they tell search engines nothing about the target page.');
    if(!counts['Branded'] && brand) warnings.push('No branded anchors found for "' + brand + '" — branded links are the safest backbone of a natural profile.');
    var nofollowCount = links.filter(function(l){ return /nofollow|sponsored|ugc/.test(l.rel); }).length;
    gridEl.innerHTML = '';
    var distCard = document.createElement('div');
    distCard.className = 'result-card';
    distCard.innerHTML = '<div class="r-name">Distribution — ' + total + ' links analyzed</div><div class="r-stats"></div>';
    distCard.querySelector('.r-stats').textContent = rows + (flagNofollow ? '  ·  nofollow/sponsored/UGC: ' + nofollowCount : '');
    gridEl.appendChild(distCard);
    if(warnings.length){
      var wCard = document.createElement('div');
      wCard.className = 'result-card';
      wCard.innerHTML = '<div class="r-name">⚠️ Notes</div><div class="r-stats"></div>';
      wCard.querySelector('.r-stats').textContent = warnings.join(' ');
      gridEl.appendChild(wCard);
    }
    var tableCard = document.createElement('div');
    tableCard.className = 'result-card';
    var listHtml = links.slice(0, 200).map(function(l){
      var esc = function(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); };
      return esc(l.type) + ' — "' + esc(l.text || '(no text)') + '" → ' + esc(l.href || '(no href)') + (l.rel ? ' [' + esc(l.rel) + ']' : '');
    }).join('\n');
    tableCard.innerHTML = '<div class="r-name">All anchors (first 200)</div><pre class="r-stats" style="white-space:pre-wrap;"></pre><button type="button" class="btn-pro">⬇ Download CSV report</button>';
    tableCard.querySelector('pre').textContent = listHtml;
    tableCard.querySelector('button').addEventListener('click', function(){
      var csv = 'anchor_text,url,type,rel\n' + links.map(function(l){
        var q = function(s){ return '"' + String(s).replace(/"/g, '""') + '"'; };
        return [q(l.text), q(l.href), q(l.type), q(l.rel)].join(',');
      }).join('\n');
      ToolPro.download(URL.createObjectURL(new Blob([csv], { type: 'text/csv' })), 'anchor-text-report.csv');
    });
    gridEl.appendChild(tableCard);
    progBar.style.width = '100%';
    summaryEl.textContent = '🎉 ' + total + ' links classified. ' + (warnings.length ? warnings.length + ' note' + (warnings.length > 1 ? 's' : '') + ' to review.' : 'No over-optimization flags — a natural-looking mix.');
    setTimeout(function(){ progWrap.classList.remove('show'); }, 300);
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Analysis complete', 'ok');
  });
  refresh();
})();
</script>

## How it works

Paste any HTML containing links, optionally add your brand name and one target keyword, and hit **Analyze Anchors**. The tool extracts every `<a>` tag, reads its anchor text and `rel` attribute, and sorts each link into exact match, partial match, branded, generic ("click here"), naked URL, image/no-text, or other. You get a percentage distribution, plain-English caution notes when exact-match or generic anchors dominate, and a downloadable CSV of every anchor found.

## Everyday uses

- **Backlink audits** — check whether a link profile leans too hard on exact-match anchors.
- **Guest posts and outreach** — vary your anchor text before a post goes live.
- **Client reporting** — show the anchor mix in numbers instead of impressions.
- **Competitor checks** — paste a competitor page's HTML and compare its mix to yours.
- **Cleanup decisions** — spot which anchors to change first when a profile looks over-optimized.
