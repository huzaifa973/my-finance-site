---
title: "Free UTM Builder — Campaign URL Tagging Tool"
description: "Build perfect UTM tracking URLs with live preview, one-click presets for Google, Facebook and Pinterest, URL validation and a bulk builder with CSV export. Free, no sign-up."
category: seo
date: 2026-10-15
draft: false
---

If your links aren't tagged with UTM parameters, your analytics can't tell a Pinterest click from an email click. Type your URL once, fill in the campaign details, and get a perfectly formatted tagged URL with a live preview — plus a bulk builder for tagging dozens of URLs at once.

<div class="tool-shell" id="utmShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0L7.76 13.42 5.34 10.99c-.39-.39-.39-1.03 0-1.42l2.83-2.83c.39-.39 1.03-.39 1.42 0 .39.39.39 1.03 0 1.42L8.17 9.59l1.41 1.41 1.01 2.41zm7.76 3.42l-2.83 2.83c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42l1.41-1.41-1.41-1.41-1.01-2.41c-.41-.39-.41-1.03 0-1.42.39-.39 1.03-.39 1.42 0l1.41 1.41 2.42 2.41c.39.39.39 1.03 0 1.42zM5 21h14c.55 0 1-.45 1-1v-4h-2v3H6v-3H4v4c0 .55.45 1 1 1zm0-16c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v4h-2V6H6v3H4V5z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>UTM Builder</h2>
<p>Build perfectly tagged campaign URLs — live preview, presets &amp; bulk builder included.</p>
</div>
<button type="button" class="theme-toggle" id="utmTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> URL &amp; campaign details</p>
<div class="setting">
<label for="utmUrl">Destination URL <span class="val" id="utmUrlHint">—</span></label>
<input type="text" id="utmUrl" class="tool-input" placeholder="https://example.com/landing-page">
<div class="hint">Must start with http:// or https:// — the validator checks as you type.</div>
</div>
<div class="settings-grid">
<div class="setting">
<label for="utmSource">Campaign source *</label>
<input type="text" id="utmSource" class="tool-input" placeholder="google">
<div class="hint">Where the traffic comes from (google, newsletter…).</div>
</div>
<div class="setting">
<label for="utmMedium">Campaign medium *</label>
<input type="text" id="utmMedium" class="tool-input" placeholder="cpc">
<div class="hint">The channel (organic, cpc, email, social…).</div>
</div>
<div class="setting">
<label for="utmCampaign">Campaign name *</label>
<input type="text" id="utmCampaign" class="tool-input" placeholder="spring_sale_2026">
<div class="hint">Your campaign identifier — keep it consistent.</div>
</div>
<div class="setting">
<label for="utmTerm">Campaign term <span style="font-weight:400;">(optional)</span></label>
<input type="text" id="utmTerm" class="tool-input" placeholder="running shoes">
<div class="hint">Paid keyword, if relevant.</div>
</div>
<div class="setting">
<label for="utmContent">Campaign content <span style="font-weight:400;">(optional)</span></label>
<input type="text" id="utmContent" class="tool-input" placeholder="banner_v2">
<div class="hint">Useful for A/B tests: banner_v1 vs banner_v2.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Presets &amp; formatting</p>
<div class="settings-panel">
<div class="preset-row" id="utmPresets">
<button type="button" class="preset-chip" data-s="google" data-m="organic">🔍 Google organic</button>
<button type="button" class="preset-chip" data-s="google" data-m="cpc">💰 Google CPC</button>
<button type="button" class="preset-chip" data-s="facebook" data-m="social">📘 Facebook</button>
<button type="button" class="preset-chip" data-s="newsletter" data-m="email">✉️ Newsletter</button>
<button type="button" class="preset-chip" data-s="pinterest" data-m="social">📌 Pinterest</button>
<button type="button" class="preset-chip" data-s="reddit" data-m="social">🤖 Reddit</button>
</div>
<div class="toggle-row"><span class="t-label">Lowercase all parameter values</span><label class="toggle"><input type="checkbox" id="utmLower" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Keep existing query parameters on the URL</span><label class="toggle"><input type="checkbox" id="utmKeep" checked><span class="track"></span></label></div>
<div class="toggle-row"><span class="t-label">Replace spaces with underscores</span><label class="toggle"><input type="checkbox" id="utmUnderscore" checked><span class="track"></span></label></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Preview, copy &amp; bulk build</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="utmCopy" disabled>
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Copy Tagged URL
</button>
</div>
<div class="progress-wrap" id="utmProgWrap">
<div class="progress-bar"><i id="utmProgBar"></i></div>
<div class="progress-text" id="utmProgText">Building…</div>
</div>
<div class="results show" id="utmResults">
<p class="result-head">🔗 Live preview</p>
<div class="result-card" style="text-align:left;align-items:flex-start;">
<div id="utmPreview" style="font-size:.85rem;word-break:break-all;color:var(--tp-muted);">Enter a URL above to see the tagged version…</div>
<div id="utmPreviewStatus" style="font-size:.8rem;margin-top:.5rem;"></div>
</div>
<div class="setting" style="margin-top:1.25rem;">
<label for="utmBulk">Bulk builder — one URL per line</label>
<textarea id="utmBulk" class="tool-input" rows="5" placeholder="https://example.com/page-1&#10;https://example.com/page-2"></textarea>
<div class="hint">Each URL gets the source, medium, term and content above, plus the campaign name below.</div>
</div>
<div class="setting" style="margin-top:.75rem;">
<label for="utmBulkCampaign">Campaign name for the bulk batch</label>
<input type="text" id="utmBulkCampaign" class="tool-input" placeholder="fall_promo_2026">
</div>
<div class="tool-actions" style="margin-top:.75rem;">
<button type="button" class="btn-pro" id="utmBulkBtn" disabled>⚙️ Tag Bulk URLs</button>
<button type="button" class="btn-pro-outline" id="utmBulkCsv" disabled>⬇ Download CSV</button>
</div>
<div class="result-summary" id="utmBulkSummary" style="margin-top:.75rem;"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — tag unlimited URLs, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('utmShell');
  ToolPro.themeToggle(shell, document.getElementById('utmTheme'));
  var urlIn = document.getElementById('utmUrl'), srcIn = document.getElementById('utmSource'),
      medIn = document.getElementById('utmMedium'), camIn = document.getElementById('utmCampaign'),
      termIn = document.getElementById('utmTerm'), conIn = document.getElementById('utmContent');
  var lower = document.getElementById('utmLower'), keep = document.getElementById('utmKeep'), under = document.getElementById('utmUnderscore');
  var presets = document.getElementById('utmPresets');
  var copyBtn = document.getElementById('utmCopy'), preview = document.getElementById('utmPreview'), pStatus = document.getElementById('utmPreviewStatus');
  var bulk = document.getElementById('utmBulk'), bulkCam = document.getElementById('utmBulkCampaign');
  var bulkBtn = document.getElementById('utmBulkBtn'), bulkCsv = document.getElementById('utmBulkCsv');
  var lastTagged = '', lastBulk = [];
  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    srcIn.value = chip.dataset.s; medIn.value = chip.dataset.m;
    update();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });
  function cleanVal(v){
    v = (v || '').trim();
    if(lower.checked) v = v.toLowerCase();
    if(under.checked) v = v.replace(/\s+/g, '_');
    return v;
  }
  function validUrl(s){
    try {
      var u = new URL(s.trim());
      return (u.protocol === 'http:' || u.protocol === 'https:') ? u : null;
    } catch(e){ return null; }
  }
  function buildTagged(raw, camOverride){
    var u = validUrl(raw);
    if(!u) return null;
    var src = cleanVal(srcIn.value), med = cleanVal(medIn.value),
        cam = cleanVal(camOverride !== undefined ? camOverride : camIn.value),
        trm = cleanVal(termIn.value), con = cleanVal(conIn.value);
    if(!src || !med || !cam) return 'incomplete';
    if(!keep.checked){
      var drop = [];
      u.searchParams.forEach(function(v, k){ if(/^utm_/i.test(k)) drop.push(k); });
      drop.forEach(function(k){ u.searchParams.delete(k); });
    }
    u.searchParams.set('utm_source', src);
    u.searchParams.set('utm_medium', med);
    u.searchParams.set('utm_campaign', cam);
    if(trm) u.searchParams.set('utm_term', trm);
    if(con) u.searchParams.set('utm_content', con);
    return u.toString();
  }
  function esc(s){ return s.replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function update(){
    var hint = document.getElementById('utmUrlHint');
    var raw = urlIn.value.trim();
    if(!raw){
      hint.textContent = '—';
      preview.textContent = 'Enter a URL above to see the tagged version…';
      preview.style.color = 'var(--tp-muted)';
      pStatus.textContent = '';
      copyBtn.disabled = true;
      return;
    }
    var u = validUrl(raw);
    if(!u){
      hint.textContent = '❌ Invalid URL';
      hint.style.color = '#dc2626';
      preview.textContent = raw;
      preview.style.color = '#dc2626';
      pStatus.textContent = '⚠️ That does not look like a valid URL — it must start with http:// or https://.';
      copyBtn.disabled = true;
      return;
    }
    hint.textContent = '✅ Valid URL';
    hint.style.color = '#16a34a';
    var tagged = buildTagged(raw);
    if(tagged === 'incomplete'){
      preview.textContent = raw;
      preview.style.color = 'var(--tp-muted)';
      pStatus.textContent = '⏳ Fill in source, medium and campaign name (marked *) to finish the tagged URL.';
      copyBtn.disabled = true;
      lastTagged = '';
    } else {
      preview.textContent = tagged;
      preview.style.color = 'inherit';
      var n = (tagged.match(/utm_/g) || []).length;
      pStatus.innerHTML = '✅ <b>' + n + '</b> UTM parameters attached. Ready to copy.';
      copyBtn.disabled = false;
      lastTagged = tagged;
    }
    refreshBulk();
  }
  [urlIn, srcIn, medIn, camIn, termIn, conIn, lower, keep, under].forEach(function(el){
    el.addEventListener('input', update);
    el.addEventListener('change', update);
  });
  copyBtn.addEventListener('click', function(){
    if(lastTagged) ToolPro.copyText(lastTagged, 'Tagged URL copied');
  });
  function refreshBulk(){
    var n = bulk.value.split('\n').map(function(s){ return s.trim(); }).filter(function(s){ return s; }).length;
    bulkBtn.disabled = !(n > 0 && bulkCam.value.trim() && srcIn.value.trim() && medIn.value.trim());
  }
  bulk.addEventListener('input', refreshBulk);
  bulkCam.addEventListener('input', refreshBulk);
  srcIn.addEventListener('input', refreshBulk);
  medIn.addEventListener('input', refreshBulk);
  bulkBtn.addEventListener('click', function(){
    var urls = bulk.value.split('\n').map(function(s){ return s.trim(); }).filter(function(s){ return s; });
    var progWrap = document.getElementById('utmProgWrap'), progBar = document.getElementById('utmProgBar');
    progWrap.classList.add('show');
    progBar.style.width = '40%';
    document.getElementById('utmProgText').textContent = 'Tagging URLs…';
    setTimeout(function(){
      lastBulk = [];
      var bad = 0;
      urls.forEach(function(u){
        var t = buildTagged(u, bulkCam.value);
        if(t && t !== 'incomplete') lastBulk.push({ url: u, tagged: t });
        else bad++;
      });
      progBar.style.width = '100%';
      progWrap.classList.remove('show');
      document.getElementById('utmBulkSummary').textContent =
        '🎉 Tagged ' + lastBulk.length + ' of ' + urls.length + ' URLs' + (bad ? ' (' + bad + ' invalid skipped)' : '') + '. Download the CSV for your records.';
      bulkCsv.disabled = !lastBulk.length;
      ToolPro.toast(lastBulk.length + ' URLs tagged', 'ok');
    }, 300);
  });
  bulkCsv.addEventListener('click', function(){
    var csv = 'Original URL,Tagged URL\n' + lastBulk.map(function(r){
      return '"' + r.url.replace(/"/g, '""') + '","' + r.tagged.replace(/"/g, '""') + '"';
    }).join('\n');
    ToolPro.download('data:text/csv;charset=utf-8,' + encodeURIComponent(csv), 'utm-tagged-urls.csv');
    ToolPro.toast('CSV downloaded', 'ok');
  });
  update();
})();
</script>

## How it works

1. **Enter your URL and campaign details** — source, medium and campaign name are required; term and content are optional. The URL validator checks your link as you type.
2. **Use a preset or fine-tune** — one-click presets for Google, Facebook, Pinterest and more; toggles for lowercase values, underscore spacing and keeping existing query parameters.
3. **Copy the tagged URL** — the live preview updates with every keystroke. For batches, paste many URLs and download a CSV of tagged links.

Everything runs in your browser — your URLs never leave this page.

## Everyday uses

- **Bloggers** — tag every social share to see which platform actually sends readers.
- **Email marketers** — distinguish newsletter clicks from automation clicks with utm_content.
- **PPC managers** — standardize lowercase, underscore-free tagging across client accounts.
- **Affiliate marketers** — prove exactly which placement earned each commission.
- **Small businesses** — bulk-tag a whole product catalog before a promo in minutes.

**Rule of thumb:** always lowercase your values ("Google" and "google" show as two sources in analytics). Be consistent with naming — decide on a convention once and stick to it.
