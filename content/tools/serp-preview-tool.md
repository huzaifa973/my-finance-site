---
title: "Free SERP Preview Tool — See Your Google Snippet"
description: "Preview how your page looks in Google search results on desktop and mobile. Live title and description previews with pixel-width truncation warnings. Free, no sign-up."
category: seo
date: 2026-10-10
draft: false
---

Your title and meta description are your ad in Google — but Google cuts off text by pixel width, not character count, so a "perfect" 60-character title can still be truncated. Type your title, URL and description and watch a realistic desktop and mobile snippet update live, with warnings the moment anything would be cut off. Everything runs in your browser.

<div class="tool-shell" id="spShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>SERP Preview Tool</h2>
<p>See your Google snippet on desktop &amp; mobile — with live truncation warnings.</p>
</div>
<button type="button" class="theme-toggle" id="spTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your page details</p>
<div class="setting">
<label for="spTitle">Page title <span class="val" id="spTitlePx">0 px</span></label>
<input type="text" id="spTitle" class="tool-input" placeholder="e.g. Free PDF Merger — Combine PDF Files Online">
<div class="hint">Google shows about 580 px of title (roughly 50–60 characters) before truncating.</div>
</div>
<div class="setting">
<label for="spUrl">Page URL</label>
<input type="text" id="spUrl" class="tool-input" placeholder="https://example.com/my-page/">
<div class="hint">Shown under the title as a breadcrumb-style link.</div>
</div>
<div class="setting">
<label for="spDesc">Meta description <span class="val" id="spDescPx">0 px</span></label>
<textarea id="spDesc" class="tool-input" rows="3" placeholder="One or two sentences that sell the click…"></textarea>
<div class="hint">Google shows about two lines (~920 px, roughly 150–160 characters) of description.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Preview options</p>
<div class="settings-panel">
<div class="preset-row" id="spPresets">
<button type="button" class="preset-chip active" data-p="both">🖥️📱 Desktop + mobile</button>
<button type="button" class="preset-chip" data-p="desktop">🖥️ Desktop only</button>
<button type="button" class="preset-chip" data-p="mobile">📱 Mobile only</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="spDateSel">Published date display</label>
<select id="spDateSel">
<option value="none" selected>No date shown</option>
<option value="today">Show today's date</option>
</select>
<div class="hint">Google often shows a date on news and blog posts.</div>
</div>
</div>
<div class="toggle-row"><span class="t-label">Highlight truncation warnings</span><label class="toggle"><input type="checkbox" id="spTogWarn" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Live snippet preview</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="spBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
Update Preview
</button>
<button type="button" class="btn-pro-outline" id="spCopy">📋 Copy title + description</button>
</div>
<div class="progress-wrap" id="spProgWrap">
<div class="progress-bar"><i id="spProgBar"></i></div>
<div class="progress-text" id="spProgText">Working…</div>
</div>
<div class="results" id="spResults">
<p class="result-head">🔍 Your Google snippet</p>
<div class="result-summary" id="spSummary"></div>
<div class="result-grid" style="grid-template-columns:1fr;">
<div class="result-card" id="spDesktopCard" style="text-align:left;align-items:flex-start;">
<div style="font-size:.8rem;font-weight:700;color:var(--tp-muted);margin-bottom:.5rem;">🖥️ DESKTOP RESULT</div>
<div style="font-family:Arial,sans-serif;max-width:600px;">
<div id="spDeskTitle" style="color:#1a0dab;font-size:20px;line-height:1.3;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"></div>
<div id="spDeskUrl" style="color:#202124;font-size:14px;margin:3px 0;"></div>
<div id="spDeskDesc" style="color:#4d5156;font-size:13px;line-height:1.58;"></div>
</div>
</div>
<div class="result-card" id="spMobileCard" style="text-align:left;align-items:flex-start;">
<div style="font-size:.8rem;font-weight:700;color:var(--tp-muted);margin-bottom:.5rem;">📱 MOBILE RESULT</div>
<div style="font-family:Arial,sans-serif;max-width:360px;">
<div id="spMobTitle" style="color:#1a0dab;font-size:16px;line-height:1.3;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"></div>
<div id="spMobUrl" style="color:#202124;font-size:12px;margin:3px 0;"></div>
<div id="spMobDesc" style="color:#4d5156;font-size:12px;line-height:1.5;"></div>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — preview snippets for as many pages as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('spShell');
  ToolPro.themeToggle(shell, document.getElementById('spTheme'));

  var f = {
    title: document.getElementById('spTitle'),
    url: document.getElementById('spUrl'),
    desc: document.getElementById('spDesc'),
    date: document.getElementById('spDateSel'),
    warn: document.getElementById('spTogWarn')
  };
  var btn = document.getElementById('spBtn');
  var presets = document.getElementById('spPresets');
  var view = 'both';

  var measureCanvas = document.createElement('canvas');
  var mctx = measureCanvas.getContext('2d');
  function pxWidth(text, font){
    mctx.font = font;
    return mctx.measureText(text).width;
  }
  function truncateTo(text, maxPx, font){
    if(pxWidth(text, font) <= maxPx) return { text: text, cut: false };
    var words = text.split(' ');
    var out = '';
    for(var i = 0; i < words.length; i++){
      var next = out ? out + ' ' + words[i] : words[i];
      if(pxWidth(next + ' …', font) > maxPx){ return { text: out + ' …', cut: true }; }
      out = next;
    }
    return { text: out + ' …', cut: true };
  }
  function breadcrumb(url){
    var u = url.trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
    if(!u) return 'example.com';
    var parts = u.split('/');
    if(parts.length > 3) parts = [parts[0], '…', parts[parts.length - 1]];
    return parts.join(' › ');
  }

  function refreshButtons(){
    btn.disabled = !f.title.value.trim();
  }
  ['title','url','desc'].forEach(function(k){ f[k].addEventListener('input', refreshButtons); });
  f.date.addEventListener('change', function(){ if(!btn.disabled) update(); });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    view = chip.dataset.p;
    document.getElementById('spDesktopCard').style.display = (view === 'mobile') ? 'none' : '';
    document.getElementById('spMobileCard').style.display = (view === 'desktop') ? 'none' : '';
    if(!btn.disabled) update();
    ToolPro.toast('Preview view: ' + chip.textContent.trim());
  });

  function update(){
    var title = f.title.value.trim() || 'Your Page Title';
    var desc = f.desc.value.trim() || 'Your meta description will appear here. Write one or two sentences that make searchers want to click.';
    var urlTxt = breadcrumb(f.url.value);
    var datePrefix = '';
    if(f.date.value === 'today'){
      var now = new Date();
      datePrefix = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' — ';
    }

    var dt = truncateTo(title, 580, '20px Arial');
    var dd = truncateTo(datePrefix + desc, 920, '13px Arial');
    var mt = truncateTo(title, 430, '16px Arial');
    var md = truncateTo(datePrefix + desc, 560, '12px Arial');

    document.getElementById('spDeskTitle').textContent = dt.text;
    document.getElementById('spDeskUrl').textContent = urlTxt;
    document.getElementById('spDeskDesc').textContent = dd.text;
    document.getElementById('spMobTitle').textContent = mt.text;
    document.getElementById('spMobUrl').textContent = urlTxt;
    document.getElementById('spMobDesc').textContent = md.text;

    var tp = pxWidth(title, '20px Arial');
    var dp = pxWidth(datePrefix + desc, '13px Arial');
    document.getElementById('spTitlePx').textContent = Math.round(tp) + ' px of ~580 px';
    document.getElementById('spDescPx').textContent = Math.round(dp) + ' px of ~920 px';

    var warns = [];
    if(dt.cut && f.warn.checked) warns.push('⚠️ Title gets truncated on desktop (' + Math.round(tp) + ' px > 580 px). Shorten it.');
    if(dd.cut && f.warn.checked) warns.push('⚠️ Description gets truncated on desktop — keep it near 150–160 characters.');
    if(mt.cut && f.warn.checked) warns.push('⚠️ Title gets truncated on mobile — front-load your keywords.');
    if(md.cut && f.warn.checked) warns.push('⚠️ Description gets truncated on mobile — the first ~110 characters matter most.');
    document.getElementById('spSummary').textContent = warns.length
      ? warns.join(' ')
      : '✅ Title and description display fully on both desktop and mobile.';

    document.getElementById('spDesktopCard').style.display = (view === 'mobile') ? 'none' : '';
    document.getElementById('spMobileCard').style.display = (view === 'desktop') ? 'none' : '';
    document.getElementById('spResults').classList.add('show');
  }

  btn.addEventListener('click', function(){
    var progWrap = document.getElementById('spProgWrap');
    var progBar = document.getElementById('spProgBar');
    btn.disabled = true;
    progWrap.classList.add('show');
    progBar.style.width = '50%';
    document.getElementById('spProgText').textContent = 'Rendering snippet…';
    setTimeout(function(){
      update();
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      document.getElementById('spResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      ToolPro.toast('Preview updated', 'ok');
    }, 300);
  });

  document.getElementById('spCopy').addEventListener('click', function(){
    if(!f.title.value.trim()){ ToolPro.toast('Enter a title first', 'err'); return; }
    ToolPro.copyText(f.title.value.trim() + '\n\n' + f.desc.value.trim(), 'Title + description copied');
  });

  refreshButtons();
})();
</script>

## How it works

1. **Enter your page details** — title, URL and meta description. Live pixel counters show how close each is to Google's cutoff.
2. **Pick your preview options** — desktop only, mobile only, or both; optionally add a published date.
3. **Update the preview** — the tool renders a realistic Google-style snippet and flags anything that would be truncated, so you can shorten the right field.

Everything runs in your browser — your text never leaves this page.

## Everyday uses

- **Bloggers** — check every post's snippet before publishing so titles never get cut mid-word.
- **Small businesses** — make your homepage and service pages look sharp in search results.
- **Freelancers** — show clients exactly how their pages will appear in Google.
- **SEO beginners** — learn why Google cuts text by pixel width, not character count, with instant visual feedback.
- **Marketers** — A/B compare title rewrites and pick the one that displays fully and reads best.

**Rule of thumb:** put your most important words first — Google truncates from the right, so a title that starts strong still works even if the tail is cut.
