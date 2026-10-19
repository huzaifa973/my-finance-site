---
title: "Free IndexNow URL Submitter — Notify Search Engines Instantly"
description: "Build copy-paste IndexNow payloads (JSON, curl, Python, JS) with key and URL validation. Honest CORS notes, free forever, no sign-up, runs in your browser."
category: seo
date: 2026-10-19
draft: false
---

Get new and updated pages indexed fast. Paste your URLs and your IndexNow key, and this tool validates both, then generates ready-to-use submission payloads — JSON, curl, Python, and JavaScript. Nothing is uploaded anywhere; the payloads are generated locally and you run them wherever you like.

<div class="tool-shell" id="idxShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>IndexNow URL Submitter</h2>
<p>Validate your key + URLs and generate copy-paste IndexNow payloads — JSON, curl, Python, JS.</p>
</div>
<button type="button" class="theme-toggle" id="idxTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your URLs + IndexNow key</p>
<label class="t-label" for="idxUrls" style="display:block;margin:.4rem 0 .3rem;font-weight:700">URLs to submit — one per line (max 10,000 per request)</label>
<textarea id="idxUrls" class="tool-input" rows="8" placeholder="https://example.com/new-post/&#10;https://example.com/updated-page/"></textarea>
<label class="t-label" for="idxKey" style="display:block;margin:.8rem 0 .3rem;font-weight:700">IndexNow key (the file &lt;key&gt;.txt must be live at your site root)</label>
<input type="text" id="idxKey" class="tool-input" placeholder="e.g. a3f9c2d1b4e5f6a7">
<div class="hint">Your key is the random string Bing/Webmaster tools gave you. It must match the file served at https://your-site.com/&lt;key&gt;.txt exactly.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Endpoint &amp; options</p>
<div class="settings-panel">
<div class="preset-row" id="idxPresets">
<button type="button" class="preset-chip active" data-end="https://api.indexnow.org/indexnow" data-kl="1">🌐 All engines (api.indexnow.org)</button>
<button type="button" class="preset-chip" data-end="https://www.bing.com/indexnow" data-kl="1">🔍 Bing only</button>
<button type="button" class="preset-chip" data-end="https://yandex.com/indexnow" data-kl="1">🇷🇺 Yandex only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="idxEndpoint">Submission endpoint</label>
<select id="idxEndpoint" class="tool-input">
<option value="https://api.indexnow.org/indexnow" selected>api.indexnow.org — all participating engines</option>
<option value="https://www.bing.com/indexnow">bing.com/indexnow</option>
<option value="https://yandex.com/indexnow">yandex.com/indexnow</option>
</select>
<div class="hint">api.indexnow.org is the shared endpoint — Bing, Yandex, Naver and others all accept it.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Include keyLocation field</span><label class="toggle"><input type="checkbox" id="idxKeyLoc" checked><span class="track"></span></label></div>
<div class="hint">Recommended — tells the engine where your &lt;key&gt;.txt file lives.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Skip blank lines automatically</span><label class="toggle"><input type="checkbox" id="idxBlanks" checked><span class="track"></span></label></div>
<div class="hint">Pasted lists from spreadsheets often have stray empty rows.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate payloads</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="idxBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Generate Submission Payloads
</button>
<button type="button" class="btn-pro-outline" id="idxPost" disabled>Try Direct POST From This Browser</button>
</div>
<div class="progress-wrap" id="idxProgWrap">
<div class="progress-bar"><i id="idxProgBar"></i></div>
<div class="progress-text" id="idxProgText">Working…</div>
</div>
<div class="results" id="idxResults">
<p class="result-head">✅ Payloads ready</p>
<div class="result-summary" id="idxSummary"></div>
<div class="result-grid" id="idxGrid"></div>
<div class="result-card" style="margin-top:1rem">
<div class="r-name">⚠️ Honest note about the "Try Direct POST" button</div>
<div class="r-stats">Browsers may block or hide cross-origin POST responses (CORS). If the direct POST fails with a network error, that does <b>not</b> mean IndexNow is broken — the generated <b>curl</b> or <b>Python</b> payloads run from your terminal/server and are the reliable path. Response code 200/202 = accepted.</div>
</div>
<div class="result-card" style="margin-top:.8rem">
<div class="r-name">🔑 Key-file check hint</div>
<div class="r-stats">Make sure https://YOUR-SITE.com/&lt;your-key&gt;.txt loads in a browser and shows only the key, nothing else. No key file = submissions silently ignored.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate as many IndexNow payloads as you like — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('idxShell');
  ToolPro.themeToggle(shell, document.getElementById('idxTheme'));

  var urlsEl = document.getElementById('idxUrls');
  var keyEl = document.getElementById('idxKey');
  var endSel = document.getElementById('idxEndpoint');
  var klTgl = document.getElementById('idxKeyLoc');
  var blanksTgl = document.getElementById('idxBlanks');
  var btn = document.getElementById('idxBtn');
  var postBtn = document.getElementById('idxPost');
  var lastPayload = null;

  document.getElementById('idxPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    var chips = document.getElementById('idxPresets').querySelectorAll('.preset-chip');
    chips.forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    endSel.value = chip.dataset.end;
    klTgl.checked = chip.dataset.kl === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refresh(){
    var ready = urlsEl.value.trim().length > 0 && keyEl.value.trim().length > 0;
    btn.disabled = !ready;
  }
  urlsEl.addEventListener('input', refresh);
  keyEl.addEventListener('input', refresh);

  function validKey(k){ return /^[A-Za-z0-9_-]{8,128}$/.test(k); }

  function parseUrls(){
    var lines = urlsEl.value.split(/\r?\n/);
    var ok = [], bad = [];
    lines.forEach(function(l){
      var t = l.trim();
      if(!t){ if(blanksTgl.checked) return; bad.push('(blank line)'); return; }
      try {
        var u = new URL(t);
        if(u.protocol === 'http:' || u.protocol === 'https:'){ ok.push(u.href); }
        else { bad.push(t + ' — only http/https allowed'); }
      } catch(e){ bad.push(t + ' — not a valid URL'); }
    });
    return { ok: ok, bad: bad };
  }

  function buildPayload(){
    var parsed = parseUrls();
    var key = keyEl.value.trim();
    var host = new URL(parsed.ok[0]).hostname;
    var p = { host: host, key: key, urlList: parsed.ok.slice(0, 10000) };
    if(klTgl.checked){ p.keyLocation = 'https://' + host + '/' + key + '.txt'; }
    return { payload: p, parsed: parsed, endpoint: endSel.value };
  }

  function card(title, sub, textareaId, text){
    var div = document.createElement('div');
    div.className = 'result-card';
    var ta = document.createElement('textarea');
    ta.className = 'tool-output'; ta.rows = 8; ta.readOnly = true; ta.id = textareaId;
    ta.value = text;
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'btn-pro-outline'; b.textContent = '📋 Copy';
    b.style.marginTop = '.5rem';
    b.addEventListener('click', function(){
      var done = function(){ ToolPro.toast(title + ' copied', 'ok'); };
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(ta.value).then(done, function(){ ta.select(); document.execCommand('copy'); done(); });
      } else { ta.select(); document.execCommand('copy'); done(); }
    });
    var name = document.createElement('div'); name.className = 'r-name'; name.textContent = title;
    var stats = document.createElement('div'); stats.className = 'r-stats'; stats.textContent = sub;
    div.appendChild(name); div.appendChild(stats); div.appendChild(ta); div.appendChild(b);
    return div;
  }

  btn.addEventListener('click', function(){
    var parsed = parseUrls();
    var key = keyEl.value.trim();
    if(!validKey(key)){
      ToolPro.toast('Key looks wrong — use 8+ chars: letters, numbers, - or _', 'err');
      return;
    }
    if(!parsed.ok.length){
      ToolPro.toast('No valid URLs found — check the list', 'err');
      return;
    }
    var built = buildPayload();
    lastPayload = built;
    var jsonPretty = JSON.stringify(built.payload, null, 2);
    var jsonCompact = JSON.stringify(built.payload);
    var curlCmd = 'curl -X POST "' + built.endpoint + '" \\\n  -H "Content-Type: application/json; charset=utf-8" \\\n  -d \'' + jsonCompact.replace(/'/g, "'\\''") + "'";
    var py = 'import requests\n\npayload = ' + jsonPretty.replace(/"([^"]+)":/g, '"$1":') +
      '\n\nr = requests.post("' + built.endpoint + '", json=payload, timeout=30)\nprint(r.status_code)\nprint(r.text)  # 200/202 = accepted';
    var jsf = 'fetch("' + built.endpoint + '", {\n  method: "POST",\n  headers: { "Content-Type": "application/json; charset=utf-8" },\n  body: JSON.stringify(' + jsonPretty.replace(/\n/g, '\n  ') + ')\n})\n  .then(r => console.log("Status:", r.status))\n  .catch(e => console.error("Blocked by CORS — use curl/Python instead", e));';

    var grid = document.getElementById('idxGrid');
    grid.innerHTML = '';
    grid.appendChild(card('JSON payload', 'Request body — works with any HTTP client', 'idxJson', jsonPretty));
    grid.appendChild(card('cURL command', 'Run in your terminal — the reliable path', 'idxCurl', curlCmd));
    grid.appendChild(card('Python snippet', 'Needs the requests package: pip install requests', 'idxPy', py));
    grid.appendChild(card('JavaScript fetch', 'For Node or your own site scripts (not cross-origin in browsers)', 'idxJs', jsf));

    var s = '✅ Key format OK · ' + parsed.ok.length + ' valid URL' + (parsed.ok.length === 1 ? '' : 's') +
      ' for host ' + built.payload.host;
    if(parsed.bad.length){ s += ' · ⚠️ ' + parsed.bad.length + ' skipped: ' + parsed.bad.slice(0,3).join(' | ') + (parsed.bad.length > 3 ? ' …' : ''); }
    if(parsed.ok.length > 10000){ s += ' · trimmed to 10,000 (IndexNow limit)'; }
    document.getElementById('idxSummary').textContent = s;
    document.getElementById('idxResults').classList.add('show');
    postBtn.disabled = false;
    ToolPro.toast('Payloads generated', 'ok');
  });

  postBtn.addEventListener('click', async function(){
    if(!lastPayload) return;
    postBtn.disabled = true;
    ToolPro.toast('Attempting direct POST…');
    try {
      var r = await fetch(lastPayload.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(lastPayload.payload)
      });
      ToolPro.toast('Response: HTTP ' + r.status + (r.status === 200 || r.status === 202 ? ' — accepted ✅' : ''), r.status === 200 || r.status === 202 ? 'ok' : 'err');
    } catch(e){
      ToolPro.toast('Blocked by the browser (CORS/network) — use curl or Python instead', 'err');
    }
    postBtn.disabled = false;
  });

  refresh();
})();
</script>

## How it works

IndexNow is a protocol that lets you ping participating search engines the moment a URL is created, updated, or deleted — instead of waiting for the next crawl. You generate a random key, host it as a plain text file at `https://your-site.com/<key>.txt`, then POST a JSON payload with your host, key, and URL list to the endpoint.

**What this tool does:** it validates your key format (letters, numbers, `-`, `_`, 8+ characters), validates every URL (must be absolute http/https), builds the exact JSON body, and wraps it as a curl command, a Python snippet, and a JS fetch snippet. **Honest limitation:** browsers enforce CORS, so a direct POST from a web page may fail with a network error even when everything is correct — the curl and Python payloads run outside the browser and are the reliable path.

**Key-file checklist:** the file must be at your domain root, contain only the key (no HTML, no extra whitespace), and return HTTP 200. If engines can't fetch it, submissions are silently ignored.

## Everyday uses

- **Bloggers** — ping new posts the minute they go live instead of waiting days for discovery.
- **E-commerce owners** — push price/stock updates and new product pages to engines instantly.
- **Site migrations** — submit changed URLs in bulk after a redesign to speed up re-indexing.
- **Developers** — grab the Python snippet and wire IndexNow into your CMS publish hook.
- **SEO audits** — use the key-file hint to verify a client's IndexNow setup in seconds.
