---
title: "Free XML Sitemap Generator — Build a Sitemap Online"
description: "Turn a list of URLs into a valid XML sitemap in seconds: lastmod, changefreq and priority defaults, 50,000-URL support. Copy or download sitemap.xml free."
category: seo
date: 2026-10-10
draft: false
---

A sitemap helps Google discover and index every page on your site — especially new sites with few backlinks. Paste your URLs one per line, set smart defaults for lastmod, changefreq and priority, and get a valid sitemap.xml ready to upload and submit to Google Search Console. Everything runs in your browser.

<div class="tool-shell" id="smShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>XML Sitemap Generator</h2>
<p>Paste your URLs — get a valid sitemap.xml with lastmod, changefreq &amp; priority.</p>
</div>
<button type="button" class="theme-toggle" id="smTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your URLs</p>
<div class="setting">
<label for="smUrls">One URL per line <span class="val" id="smLive">0 URLs</span></label>
<textarea id="smUrls" class="tool-input" rows="10" placeholder="https://example.com/&#10;https://example.com/about/&#10;https://example.com/blog/how-to-save-money/"></textarea>
<div class="hint">Google and Bing accept up to 50,000 URLs per sitemap file — paste more and the tool warns you to split them into batches.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Defaults for each URL</p>
<div class="settings-panel">
<div class="preset-row" id="smPresets">
<button type="button" class="preset-chip active" data-p="blog">📰 Blog — weekly, 0.8</button>
<button type="button" class="preset-chip" data-p="static">🏠 Static site — monthly, 0.5</button>
<button type="button" class="preset-chip" data-p="news">⚡ News — daily, 1.0</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="smLastmod">lastmod (last updated)</label>
<input type="date" id="smLastmod" class="tool-input">
<div class="hint">Tells Google when the page last changed. Defaults to today.</div>
</div>
<div class="setting">
<label for="smFreq">changefreq (update frequency)</label>
<select id="smFreq">
<option value="daily">daily — changes every day</option>
<option value="weekly" selected>weekly — changes most weeks</option>
<option value="monthly">monthly — rarely changes</option>
<option value="yearly">yearly — almost never changes</option>
<option value="always">always — every page load</option>
<option value="hourly">hourly — very active pages</option>
<option value="never">never — archived content</option>
</select>
<div class="hint">A hint to crawlers, not a command — Google decides the real crawl rate.</div>
</div>
<div class="setting">
<label for="smPriority">priority: <span class="val" id="smPriorityVal">0.8</span></label>
<input type="range" id="smPriority" min="0" max="1" step="0.1" value="0.8">
<div class="hint">0.0–1.0 relative importance. Your homepage deserves 1.0; archives get 0.3.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Include lastmod tag</span><label class="toggle"><input type="checkbox" id="smTogLastmod" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Include changefreq + priority</span><label class="toggle"><input type="checkbox" id="smTogFreq" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="smBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"/></svg>
Generate Sitemap
</button>
<button type="button" class="btn-pro-outline" id="smCopy" disabled>📋 Copy XML</button>
<button type="button" class="btn-pro-outline" id="smDl" disabled>⬇ Download sitemap.xml</button>
</div>
<div class="progress-wrap" id="smProgWrap">
<div class="progress-bar"><i id="smProgBar"></i></div>
<div class="progress-text" id="smProgText">Working…</div>
</div>
<div class="results" id="smResults">
<p class="result-head">✅ Your sitemap.xml</p>
<div class="result-grid">
<div class="result-card" style="grid-column:1/-1;">
<textarea id="smOut" class="tool-output" rows="14" readonly placeholder="Your sitemap XML will appear here…"></textarea>
</div>
</div>
<div class="result-summary" id="smSummary"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — generate sitemaps for as many sites as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('smShell');
  ToolPro.themeToggle(shell, document.getElementById('smTheme'));

  var urlsTa = document.getElementById('smUrls');
  var lastmodInput = document.getElementById('smLastmod');
  var freqSel = document.getElementById('smFreq');
  var priRange = document.getElementById('smPriority');
  var priVal = document.getElementById('smPriorityVal');
  var togLastmod = document.getElementById('smTogLastmod');
  var togFreq = document.getElementById('smTogFreq');
  var btn = document.getElementById('smBtn');
  var copyBtn = document.getElementById('smCopy');
  var dlBtn = document.getElementById('smDl');
  var presets = document.getElementById('smPresets');

  var today = new Date().toISOString().slice(0, 10);
  lastmodInput.value = today;

  ToolPro.bindSlider(priRange, priVal, function(v){ return parseFloat(v).toFixed(1); });

  function esc(s){
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
  function urlLines(){
    var seen = {};
    return urlsTa.value.split('\n').map(function(l){ return l.trim(); })
      .filter(function(l){
        if(!l) return false;
        if(!/^https?:\/\//i.test(l)) return false;
        if(seen[l]) return false;
        seen[l] = true;
        return true;
      });
  }

  urlsTa.addEventListener('input', function(){
    var n = urlLines().length;
    document.getElementById('smLive').textContent = n.toLocaleString() + (n === 1 ? ' URL' : ' URLs');
    btn.disabled = !n;
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var p = chip.dataset.p;
    if(p === 'blog'){ freqSel.value = 'weekly'; priRange.value = 0.8; }
    if(p === 'static'){ freqSel.value = 'monthly'; priRange.value = 0.5; }
    if(p === 'news'){ freqSel.value = 'daily'; priRange.value = 1.0; }
    priRange.dispatchEvent(new Event('input'));
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function buildXml(urls){
    var lastmod = lastmodInput.value || today;
    var freq = freqSel.value;
    var pri = parseFloat(priRange.value).toFixed(1);
    var lines = ['<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
    urls.forEach(function(u){
      lines.push('  <url>');
      lines.push('    <loc>' + esc(u) + '</loc>');
      if(togLastmod.checked) lines.push('    <lastmod>' + esc(lastmod) + '</lastmod>');
      if(togFreq.checked){
        lines.push('    <changefreq>' + esc(freq) + '</changefreq>');
        lines.push('    <priority>' + pri + '</priority>');
      }
      lines.push('  </url>');
    });
    lines.push('</urlset>');
    return lines.join('\n');
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('smProgWrap');
    var progBar = document.getElementById('smProgBar');
    var resBox = document.getElementById('smResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show');
    progBar.style.width = '40%';
    document.getElementById('smProgText').textContent = 'Building sitemap…';
    setTimeout(function(){
      var urls = urlLines();
      if(urls.length > 50000){
        ToolPro.toast('50,000-URL limit exceeded — generate in batches', 'err');
        document.getElementById('smSummary').textContent =
          '⚠️ You pasted ' + urls.length.toLocaleString() + ' URLs, but Google/Bing accept max 50,000 per sitemap. Split your list into batches of 50,000 and generate one file per batch.';
        document.getElementById('smOut').value = '';
        progWrap.classList.remove('show');
        btn.disabled = false;
        return;
      }
      var xml = buildXml(urls);
      document.getElementById('smOut').value = xml;
      var sizeKB = Math.round(new Blob([xml]).size / 1024);
      document.getElementById('smSummary').textContent =
        '🎉 Sitemap generated: ' + urls.length.toLocaleString() + (urls.length === 1 ? ' URL' : ' URLs') +
        ' · ~' + sizeKB.toLocaleString() + ' KB. ✅ Valid XML. Upload as sitemap.xml, then submit it in Google Search Console.';
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      copyBtn.disabled = false; dlBtn.disabled = false;
      ToolPro.toast('Sitemap generated', 'ok');
    }, 350);
  });

  copyBtn.addEventListener('click', function(){
    ToolPro.copyText(document.getElementById('smOut').value, 'sitemap.xml copied to clipboard');
  });

  dlBtn.addEventListener('click', function(){
    var url = 'data:text/xml;charset=utf-8,' + encodeURIComponent(document.getElementById('smOut').value);
    ToolPro.download(url, 'sitemap.xml');
    ToolPro.toast('sitemap.xml downloaded', 'ok');
  });
})();
</script>

## How it works

1. **Paste your URLs** — one per line. The tool de-duplicates them and ignores anything that isn't a valid http(s) URL.
2. **Set defaults** — pick a preset (blog, static site, news) or fine-tune lastmod, changefreq and priority yourself. Every URL gets the same defaults.
3. **Generate & download** — the tool builds valid XML, warns you if you exceed the honest 50,000-URL-per-file limit, and lets you copy or download sitemap.xml. Upload it to your site root and submit it in Google Search Console under Sitemaps.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **New site owners** — get every page indexed faster by submitting a sitemap on day one.
- **Bloggers** — regenerate the sitemap whenever you publish so Google finds new posts quickly.
- **Freelancers** — hand every client a ready-made sitemap.xml at launch.
- **Store owners** — make sure product and category pages are all discoverable by crawlers.
- **SEOs** — audit which URLs a client includes (and which they're missing) before submission.

**Rule of thumb:** a sitemap helps discovery, but it doesn't force indexing — Google still decides what to index. Pair it with good internal linking so every URL is reachable by clicks, not just by the sitemap.
