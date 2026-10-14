---
title: "Free Meta Refresh Tag Generator — Timed Page Redirects"
description: "Generate meta refresh redirect tags free: set the destination URL and delay with a slider, then copy the snippet. SEO caveat included — no sign-up."
category: seo
date: 2026-10-14
draft: false
---

Sometimes you need a page to send visitors elsewhere after a few seconds — a "you'll be redirected shortly" notice, a splash page, or a retired promo. The **meta refresh tag** does it with one line of HTML. Set the destination and delay, copy the snippet, and paste it into your page's `<head>`.

<div class="tool-shell" id="mrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Meta Refresh Generator</h2>
<p>Timed redirect snippet with delay slider &amp; live preview — copy in one click.</p>
</div>
<button type="button" class="theme-toggle" id="mrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Redirect details</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="mrSample">✨ Load sample</button>
<button type="button" class="preset-chip" id="mrClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="mrUrl">Destination URL</label>
<input type="url" id="mrUrl" class="tool-input" placeholder="https://example.com/new-page">
<div class="hint" id="mrUrlStatus">Leave blank for a plain timed page reload (no redirect).</div>
</div><div class="setting">
<label for="mrDelay">Delay before redirect: <span id="mrDelayVal">5s</span></label>
<input type="range" id="mrDelay" min="0" max="60" step="1" value="5">
<div class="hint">0 = instant redirect · up to 60 seconds.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Get your meta refresh tag</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mrGo">
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Generate tag
</button>
<button type="button" class="btn-pro-outline" id="mrCopy" disabled>📋 Copy tag</button>
</div>
<div class="results" id="mrResults">
<p class="result-head">🏷 Paste into your page's &lt;head&gt;</p>
<pre class="tool-output" id="mrOut" style="white-space:pre-wrap;word-break:break-all;max-height:300px;overflow:auto;font-size:.82rem;"></pre>
</div>
<div class="hint">⚠️ <strong>SEO caveat:</strong> search engines prefer a server-side <strong>301 redirect</strong> for moved pages — it passes full ranking signals. Use meta refresh only for timed/interstitial redirects where a 301 is not possible; Google treats a 0–1s refresh like a redirect, longer delays like a normal link.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited meta refresh tags — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
'use strict';
var shell = document.getElementById('mrShell');
ToolPro.themeToggle(shell, document.getElementById('mrTheme'));
ToolPro.bindSlider(document.getElementById('mrDelay'), document.getElementById('mrDelayVal'), function(v){ return v + 's'; });
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function isUrl(v){
  if(!v) return true;
  try { var u = new URL(v); return u.protocol === 'http:' || u.protocol === 'https:'; }
  catch(e){ return false; }
}
var last = '';
function refresh(){
  var v = document.getElementById('mrUrl').value.trim();
  var st = document.getElementById('mrUrlStatus');
  if(!v){ st.textContent = 'Leave blank for a plain timed page reload (no redirect).'; }
  else if(isUrl(v)){ st.textContent = '✅ URL looks valid.'; }
  else { st.textContent = '⚠️ That does not look like a valid URL — include http(s)://'; }
  document.getElementById('mrGo').disabled = !isUrl(v);
}
document.getElementById('mrUrl').addEventListener('input', refresh);
function gen(){
  var url = document.getElementById('mrUrl').value.trim();
  if(!isUrl(url)){ ToolPro.toast('Enter a valid URL or leave it blank', 'err'); return; }
  var delay = document.getElementById('mrDelay').value;
  last = url
    ? '<meta http-equiv="refresh" content="' + delay + ';url=' + esc(url) + '">'
    : '<meta http-equiv="refresh" content="' + delay + '">';
  document.getElementById('mrOut').textContent = last;
  document.getElementById('mrResults').classList.add('show');
  document.getElementById('mrCopy').disabled = false;
  ToolPro.toast('Tag generated', 'ok');
}
document.getElementById('mrGo').addEventListener('click', gen);
document.getElementById('mrCopy').addEventListener('click', function(){
  if(!last) gen();
  if(last) ToolPro.copyText(last, 'Tag copied — paste into your <head>');
});
document.getElementById('mrSample').addEventListener('click', function(){
  document.getElementById('mrUrl').value = 'https://dollarwise.xyz/tools/';
  document.getElementById('mrDelay').value = '5';
  document.getElementById('mrDelay').dispatchEvent(new Event('input'));
  refresh();
  ToolPro.toast('Sample loaded', 'ok');
});
document.getElementById('mrClear').addEventListener('click', function(){
  document.getElementById('mrUrl').value = '';
  document.getElementById('mrDelay').value = '5';
  document.getElementById('mrDelay').dispatchEvent(new Event('input'));
  document.getElementById('mrResults').classList.remove('show');
  document.getElementById('mrCopy').disabled = true;
  last = '';
  refresh();
  ToolPro.toast('Form cleared');
});
refresh();
})();
</script>

## How it works

1. **Enter the destination URL** — or leave it blank for a plain timed reload of the same page.
2. **Set the delay** — drag the slider from 0 (instant) to 60 seconds.
3. **Generate and copy** — paste the one-line tag into your page's `<head>` and the redirect happens automatically.

## Everyday uses

- **Site owners** — show a "this page has moved" notice for a few seconds before sending visitors on.
- **Marketers** — bridge splash or countdown pages to the final campaign URL.
- **Bloggers** — retire old promo pages gracefully with a timed hand-off.
- **Developers** — prototype a redirect on static hosting where server-side 301s are unavailable.
- **Event pages** — auto-refresh a live updates page every minute without JavaScript.

## Frequently asked questions

**Is meta refresh bad for SEO?**
For permanently moved pages, yes — use a 301 redirect instead. Meta refresh is fine for timed/interstitial cases, and a 0–1 second delay is treated much like a redirect by Google.

**Why does Google recommend 301 over meta refresh?**
A 301 passes nearly all ranking signals to the new URL and is understood instantly by crawlers. Meta refresh with a long delay can look like a doorway-page trick if abused.

**Can I redirect after showing a message?**
Exactly — set a 5–10 second delay and put your "you are being redirected" message in the page body. Screen-reader users get time to read it.

**Does the destination URL have to be absolute?**
Relative URLs technically work in browsers, but absolute URLs are safer and required for reliable behavior across all user agents.
