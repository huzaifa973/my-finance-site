---
title: "Viewport Meta Tag Checker & Generator — Free Mobile SEO Tool"
description: "Audit your viewport meta tag for mobile SEO — checks width, initial-scale and zoom settings for accessibility — then generate a perfect responsive tag. Free, private, in-browser."
category: seo
date: 2026-10-21
draft: false
---

Google uses mobile-first indexing, so your viewport meta tag decides how your site renders on every phone. Paste your page's `<head>` snippet to audit the tag for responsiveness and zoom accessibility, or use the generator to build a perfect tag from scratch. Everything runs in your browser — nothing is uploaded anywhere.

<div class="tool-shell" id="vpShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v7h14V7H5zm2 9h10v2H7v-2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Viewport Meta Tag Checker</h2>
<p>Audit your viewport tag for mobile SEO &amp; zoom accessibility — or generate a perfect one.</p>
</div>
<button type="button" class="theme-toggle" id="vpTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose mode &amp; paste your HTML</p>
<div class="preset-row" id="vpMode">
<button type="button" class="preset-chip active" data-mode="audit">🔍 Audit existing tag</button>
<button type="button" class="preset-chip" data-mode="generate">⚙️ Generate new tag</button>
</div>
<div id="vpInputWrap">
<textarea class="tool-input" id="vpInput" rows="6" placeholder="Paste your <head> snippet here, e.g. <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;>"></textarea>
<div class="hint">Paste the whole &lt;head&gt; section or just the viewport tag — the audit finds it automatically. Nothing is uploaded.</div>
</div>
<div id="vpGenWrap" style="display:none">
<div class="hint">Your generated tag appears below the settings. Tweak the controls in step 2, then hit Generate.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Generator settings</p>
<div class="settings-panel">
<div class="preset-row" id="vpPresets">
<button type="button" class="preset-chip active" data-preset="responsive">✅ Responsive default</button>
<button type="button" class="preset-chip" data-preset="zoomlock">⚠️ Zoom locked (avoid)</button>
<button type="button" class="preset-chip" data-preset="notch">📱 iPhone notch (cover)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="vpWidth">Viewport width</label>
<select id="vpWidth">
<option value="device-width" selected>device-width — responsive</option>
<option value="320">320px — fixed (not responsive)</option>
<option value="480">480px — fixed (not responsive)</option>
<option value="768">768px — fixed (not responsive)</option>
</select>
<div class="hint">Always use device-width for responsive sites.</div>
</div>
<div class="setting">
<label for="vpInit">Initial scale: <span class="val" id="vpInitVal">1.0</span></label>
<input type="range" id="vpInit" min="0.5" max="2" step="0.1" value="1">
<div class="hint">1.0 is the standard — page loads at natural zoom.</div>
</div>
<div class="setting">
<label for="vpMin">Minimum scale: <span class="val" id="vpMinVal">0.5</span></label>
<input type="range" id="vpMin" min="0.25" max="2" step="0.25" value="0.5">
<div class="hint">How far users may zoom out.</div>
</div>
<div class="setting">
<label for="vpMax">Maximum scale: <span class="val" id="vpMaxVal">5.0</span></label>
<input type="range" id="vpMax" min="1" max="5" step="0.5" value="5">
<div class="hint">Keep at 2+ so low-vision users can pinch-zoom (WCAG).</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Allow user zoom (user-scalable)</span><label class="toggle"><input type="checkbox" id="vpZoom" checked><span class="track"></span></label></div>
<div class="hint">Turning this off harms accessibility — avoid it.</div>
</div>
<div class="setting">
<label for="vpFit">Viewport fit (notched phones)</label>
<select id="vpFit">
<option value="auto" selected>auto — default</option>
<option value="cover">cover — use full notch area</option>
<option value="contain">contain — letterbox the notch</option>
</select>
<div class="hint">cover lets your design fill iPhone notch screens.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Check or generate</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="vpBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
<span id="vpBtnLabel">Analyze Viewport Tag</span>
</button>
<button type="button" class="btn-pro-outline" id="vpClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="vpProgWrap">
<div class="progress-bar"><i id="vpProgBar"></i></div>
<div class="progress-text" id="vpProgText">Checking…</div>
</div>
<div class="results" id="vpResults">
<p class="result-head">📋 Viewport audit results</p>
<div class="result-summary" id="vpSummary"></div>
<div class="result-grid" id="vpList"></div>
<div class="gen-output" id="vpGenOut" style="display:none">
<pre class="code-block"><code id="vpGenCode"></code></pre>
<button type="button" class="btn-pro" id="vpCopy">📋 Copy Meta Tag</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — audit or generate as many viewport tags as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('vpShell');
  ToolPro.themeToggle(shell, document.getElementById('vpTheme'));

  var mode = 'audit';
  var modeChips = document.getElementById('vpMode');
  var inputWrap = document.getElementById('vpInputWrap');
  var genWrap = document.getElementById('vpGenWrap');
  var ta = document.getElementById('vpInput');
  var btn = document.getElementById('vpBtn');
  var btnLabel = document.getElementById('vpBtnLabel');
  var clearBtn = document.getElementById('vpClear');
  var resBox = document.getElementById('vpResults');
  var resList = document.getElementById('vpList');
  var summary = document.getElementById('vpSummary');
  var genOut = document.getElementById('vpGenOut');
  var genCode = document.getElementById('vpGenCode');
  var copyBtn = document.getElementById('vpCopy');

  var widthSel = document.getElementById('vpWidth');
  var initRange = document.getElementById('vpInit');
  var minRange = document.getElementById('vpMin');
  var maxRange = document.getElementById('vpMax');
  var zoomChk = document.getElementById('vpZoom');
  var fitSel = document.getElementById('vpFit');
  var presets = document.getElementById('vpPresets');

  ToolPro.bindSlider(initRange, document.getElementById('vpInitVal'), function(v){ return (+v).toFixed(1); });
  ToolPro.bindSlider(minRange, document.getElementById('vpMinVal'), function(v){ return (+v).toFixed(2); });
  ToolPro.bindSlider(maxRange, document.getElementById('vpMaxVal'), function(v){ return (+v).toFixed(1); });

  function refresh(){
    var ready = (mode === 'generate') || !!ta.value.trim();
    btn.disabled = !ready;
    clearBtn.disabled = (mode === 'audit') && !ta.value.trim();
    btnLabel.textContent = mode === 'audit' ? 'Analyze Viewport Tag' : 'Generate Viewport Tag';
  }

  modeChips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    modeChips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    inputWrap.style.display = mode === 'audit' ? '' : 'none';
    genWrap.style.display = mode === 'generate' ? '' : 'none';
    resBox.classList.remove('show');
    refresh();
  });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    var p = chip.dataset.preset;
    if(p === 'responsive'){
      widthSel.value = 'device-width'; initRange.value = '1'; minRange.value = '0.5';
      maxRange.value = '5'; zoomChk.checked = true; fitSel.value = 'auto';
    } else if(p === 'zoomlock'){
      widthSel.value = 'device-width'; initRange.value = '1'; minRange.value = '1';
      maxRange.value = '1'; zoomChk.checked = false; fitSel.value = 'auto';
    } else if(p === 'notch'){
      widthSel.value = 'device-width'; initRange.value = '1'; minRange.value = '0.5';
      maxRange.value = '5'; zoomChk.checked = true; fitSel.value = 'cover';
    }
    [initRange, minRange, maxRange].forEach(function(r){ r.dispatchEvent(new Event('input')); });
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ta.addEventListener('input', refresh);
  clearBtn.addEventListener('click', function(){
    ta.value = ''; resBox.classList.remove('show'); refresh();
  });

  function verdict(status, title, detail){
    var card = document.createElement('div');
    card.className = 'result-card verdict v-' + status;
    var icon = status === 'pass' ? '✅' : (status === 'warn' ? '⚠️' : '❌');
    var name = document.createElement('div'); name.className = 'r-name';
    name.textContent = icon + ' ' + title;
    var stats = document.createElement('div'); stats.className = 'r-stats';
    stats.textContent = detail;
    card.appendChild(name); card.appendChild(stats);
    resList.appendChild(card);
  }

  function parseContent(content){
    var props = {};
    content.split(/[;,]/).forEach(function(pair){
      var kv = pair.split('=');
      if(kv.length < 2) return;
      var k = kv[0].trim().toLowerCase();
      var v = kv.slice(1).join('=').trim().toLowerCase();
      if(k) props[k] = v;
    });
    return props;
  }

  function audit(){
    resList.innerHTML = ''; genOut.style.display = 'none';
    var doc = new DOMParser().parseFromString(ta.value, 'text/html');
    var tags = doc.querySelectorAll('meta[name="viewport"]');
    var fails = 0, warns = 0, passes = 0;
    function v(status, title, detail){
      verdict(status, title, detail);
      if(status === 'fail') fails++; else if(status === 'warn') warns++; else passes++;
    }
    if(!tags.length){
      v('fail', 'No viewport meta tag found', 'Mobile browsers will render your page at desktop width (~980px) and shrink it — a mobile SEO killer. Add: <meta name="viewport" content="width=device-width, initial-scale=1">');
      summary.textContent = '❌ Failed — no viewport tag detected. Use the generator below to build one.';
      return;
    }
    v('pass', 'Viewport tag present', tags.length + ' viewport meta tag' + (tags.length > 1 ? 's' : '') + ' found.');
    if(tags.length > 1){
      v('warn', 'Duplicate viewport tags', 'Only the first tag is honored by most browsers — remove the extras to avoid conflicts.');
    }
    var props = parseContent(tags[0].getAttribute('content') || '');
    var known = ['width', 'height', 'initial-scale', 'minimum-scale', 'maximum-scale', 'user-scalable', 'viewport-fit', 'shrink-to-fit'];
    Object.keys(props).forEach(function(k){
      if(known.indexOf(k) === -1) v('warn', 'Unknown property: ' + k, 'Browsers ignore "' + k + '" — it may be a typo. Valid keys: width, initial-scale, minimum-scale, maximum-scale, user-scalable, viewport-fit.');
    });

    if(!('width' in props)){
      v('fail', 'Missing width property', 'Without width=device-width the page is not responsive on mobile. This is the single most important property.');
    } else if(props.width === 'device-width'){
      v('pass', 'width=device-width', 'Page width matches the device screen — correct responsive setup.');
    } else if(/^\d+$/.test(props.width)){
      v('warn', 'Fixed width: ' + props.width + 'px', 'A fixed pixel width is not responsive. Switch to width=device-width unless you have a specific legacy reason.');
    } else {
      v('fail', 'Invalid width value', '"' + props.width + '" is not valid. Use width=device-width.');
    }

    if(!('initial-scale' in props)){
      v('warn', 'Missing initial-scale', 'Recommended: initial-scale=1 so the page loads at its natural zoom level.');
    } else {
      var is = parseFloat(props['initial-scale']);
      if(isNaN(is) || is <= 0){ v('fail', 'Invalid initial-scale', '"' + props['initial-scale'] + '" is not a valid number. Use initial-scale=1.'); }
      else if(is === 1){ v('pass', 'initial-scale=1', 'Page loads at natural zoom — correct.'); }
      else { v('warn', 'initial-scale=' + props['initial-scale'], 'Values other than 1 change the default zoom — usually unintentional.'); }
    }

    var zoomDisabled = (props['user-scalable'] === 'no' || props['user-scalable'] === '0');
    var maxS = parseFloat(props['maximum-scale']);
    if(zoomDisabled){
      v('warn', 'Pinch-zoom disabled (user-scalable=no)', 'Accessibility issue: low-vision users cannot zoom. WCAG recommends never disabling zoom. Remove user-scalable=no.');
    }
    if(!isNaN(maxS) && maxS < 2 && !zoomDisabled){
      v('warn', 'maximum-scale=' + props['maximum-scale'] + ' limits zoom', 'Accessibility issue: capping zoom below 2x hurts low-vision users. Use maximum-scale=5 or omit it.');
    } else if(!isNaN(maxS) && maxS >= 2){
      v('pass', 'maximum-scale allows zooming', 'maximum-scale=' + props['maximum-scale'] + ' keeps pinch-zoom usable.');
    } else if(isNaN(maxS) && !zoomDisabled){
      v('pass', 'Zoom not restricted', 'No maximum-scale cap — users can pinch-zoom freely. Good for accessibility.');
    }

    if(props['viewport-fit'] === 'cover'){
      v('pass', 'viewport-fit=cover', 'Page fills notched screens (iPhone X and later) edge to edge.');
    }

    if(!fails && !warns){
      summary.textContent = '✅ Perfect — your viewport tag is mobile-ready (' + passes + ' checks passed).';
    } else if(!fails){
      summary.textContent = '⚠️ ' + warns + ' warning' + (warns === 1 ? '' : 's') + ' to fix — ' + passes + ' checks passed.';
    } else {
      summary.textContent = '❌ ' + fails + ' issue' + (fails === 1 ? '' : 's') + ' need fixing (' + warns + ' warnings, ' + passes + ' passed).';
    }
  }

  function generate(){
    resList.innerHTML = '';
    var parts = ['width=' + widthSel.value];
    parts.push('initial-scale=' + (+initRange.value).toFixed(1));
    if(parseFloat(minRange.value) !== 0.5 || !zoomChk.checked){ parts.push('minimum-scale=' + (+minRange.value).toFixed(2)); }
    if(parseFloat(maxRange.value) !== 5){ parts.push('maximum-scale=' + (+maxRange.value).toFixed(1)); }
    if(!zoomChk.checked){ parts.push('user-scalable=no'); }
    if(fitSel.value !== 'auto'){ parts.push('viewport-fit=' + fitSel.value); }
    var tag = '<meta name="viewport" content="' + parts.join(', ') + '">';
    genCode.textContent = tag;
    genOut.style.display = '';
    var zoomWarn = !zoomChk.checked || parseFloat(maxRange.value) < 2;
    if(zoomWarn){
      verdict('warn', 'Zoom is restricted', 'Your settings disable or limit pinch-zoom — an accessibility issue (WCAG). Keep zoom enabled unless you have a strong reason.');
    } else {
      verdict('pass', 'Tag generated', 'Responsive, zoom-friendly tag ready to paste into your <head>.');
    }
    summary.textContent = zoomWarn ? '⚠️ Tag generated — but zoom is restricted (see warning).' : '✅ Tag generated — paste it inside your <head>.';
    copyBtn.onclick = function(){
      var done = function(){ ToolPro.toast('Viewport tag copied', 'ok'); };
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(tag).then(done, function(){ fallbackCopy(tag); done(); });
      } else { fallbackCopy(tag); done(); }
    };
  }

  function fallbackCopy(text){
    var tmp = document.createElement('textarea');
    tmp.value = text; tmp.style.position = 'fixed'; tmp.style.opacity = '0';
    document.body.appendChild(tmp); tmp.select();
    try { document.execCommand('copy'); } catch(e){}
    document.body.removeChild(tmp);
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('vpProgWrap');
    var progBar = document.getElementById('vpProgBar');
    progWrap.classList.add('show');
    resBox.classList.remove('show');
    progBar.style.width = '0%';
    var p = 0;
    var tick = setInterval(function(){
      p += 25; progBar.style.width = Math.min(p, 100) + '%';
      if(p >= 100){
        clearInterval(tick);
        if(mode === 'audit'){ audit(); } else { generate(); }
        progWrap.classList.remove('show');
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast(mode === 'audit' ? 'Audit complete' : 'Tag generated', 'ok');
      }
    }, 90);
  });

  refresh();
})();
</script>

## How it works

The auditor parses your pasted HTML with the browser's built-in DOM parser — the same engine that reads real web pages — and inspects the viewport meta tag property by property: presence, `width`, `initial-scale`, `maximum-scale`, `user-scalable`, and `viewport-fit`. Each check returns a pass, warning, or fail verdict with a plain-English explanation and the exact fix. The generator mode works in reverse: it assembles a standards-compliant tag from your slider and toggle settings, so you never have to memorize the syntax. Because there is no server involved, your HTML snippets never leave your device.

## Everyday uses

- **Bloggers & site owners** — verify the viewport tag after theme updates; a missing tag silently tanks mobile usability scores.
- **Web developers** — audit client sites quickly and generate correct tags without looking up the spec each time.
- **SEO freelancers** — include the verdict list in site audits as proof of mobile-friendliness work.
- **Accessibility advocates** — catch `user-scalable=no` and low `maximum-scale` values that lock out low-vision users.
- **Students** — learn what each viewport property actually does by toggling settings and watching the generated tag change.

**Rule of thumb:** `width=device-width, initial-scale=1` is the gold standard for 99% of sites — and never disable pinch-zoom unless you have an extraordinary reason.
