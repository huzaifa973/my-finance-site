---
title: "Free Hreflang Validator — Check Language Tags Online"
description: "Paste your page's <head> HTML to validate hreflang tags — missing self-references, invalid language-region codes, x-default, and reciprocal links. Free & private."
category: seo
date: 2026-10-24
draft: false
---

Broken hreflang tags are one of the most common reasons multilingual sites show the wrong language version in Google. Paste your page's `<head>` HTML below — for one page, or all of your locale pages at once — and this validator checks every tag: valid ISO language-region codes, self-referencing hreflang, x-default, duplicates, and reciprocal linking across the whole set. Each finding comes with a plain-language fix. Everything runs in your browser; nothing is uploaded.

<div class="tool-shell" id="hrvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.27 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Hreflang Validator</h2>
<p>Paste your &lt;head&gt; HTML — get every hreflang error with a plain-language fix.</p>
</div>
<button type="button" class="theme-toggle" id="hrvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your &lt;head&gt; HTML</p>
<div class="preset-row" id="hrvSamples">
<button type="button" class="preset-chip" data-sample="good">✅ Load a correct example</button>
<button type="button" class="preset-chip" data-sample="bad">❌ Load a broken example</button>
</div>
<div class="setting">
<label for="hrvInput">Head HTML (one page, or all locale pages pasted together)</label>
<textarea id="hrvInput" class="tool-input" rows="9" placeholder="Paste everything between <head> and </head> here…"></textarea>
</div>
<div class="setting">
<label for="hrvUrl">This page's URL (for the self-reference check)</label>
<input type="url" id="hrvUrl" class="tool-input" placeholder="https://example.com/en/">
<div class="hint">Optional if your head has a canonical or og:url tag — the validator reads it from there. Pasting several heads? The URL box is ignored and each head's canonical is used.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Check strictness</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<div class="toggle-row"><span class="t-label">Require x-default</span><label class="toggle"><input type="checkbox" id="hrvReqX" checked><span class="track"></span></label></div>
<div class="hint">Warn when no x-default fallback tag is present.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Strict closure: every page must list all locales</span><label class="toggle"><input type="checkbox" id="hrvStrict" checked><span class="track"></span></label></div>
<div class="hint">When you paste several heads, each one should declare the full set of language versions.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Validate &amp; fix</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hrvBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
Validate Hreflang Tags
</button>
<button type="button" class="btn-pro-outline" id="hrvCopy" disabled>📋 Copy report</button>
<button type="button" class="btn-pro-outline" id="hrvClear" disabled>Clear</button>
</div>
<div class="results" id="hrvResults">
<p class="result-head">🔍 Validation report</p>
<div class="result-summary" id="hrvSummary"></div>
<div class="result-grid" id="hrvGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Validate as many pages as you like — the checker runs entirely in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('hrvShell');
  ToolPro.themeToggle(shell, document.getElementById('hrvTheme'));

  var LANGS = {}, REGIONS = {};
  'aa ab ae af ak am an ar as av ay az ba be bg bi bm bn bo br bs ca ce ch co cr cs cu cv cy da de dv dz ee el en eo es et eu fa ff fi fj fo fr fy ga gd gl gn gu gv ha he hi ho hr ht hu hy hz ia id ie ig ii ik io is it iu ja jv ka kg ki kj kk kl km kn ko kr ks ku kv kw ky la lb lg li ln lo lt lu lv mg mh mi mk ml mn mr ms mt my na nb nd ne ng nl nn no nr nv ny oc oj om or os pa pi pl ps pt qu rm rn ro ru rw sa sc sd se sg sh si sk sl sm sn so sq sr ss st su sv sw ta te tg th ti tk tl tn to tr ts tt tw ty ug uk ur uz ve vi vo wa wo xh yi yo za zh zu'.split(' ').forEach(function(c){ LANGS[c] = 1; });
  'AA AC AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CP CQ CR CU CV CW CX CY CZ DE DG DJ DK DM DO DZ EA EC EE EG EH ER ES ET EU EZ FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU IC ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA QM RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TA TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM UN US UY UZ VA VC VE VG VI VN VU WF WS XA YE YT ZA ZM ZW ZZ'.split(' ').forEach(function(c){ REGIONS[c] = 1; });

  var input = document.getElementById('hrvInput');
  var urlIn = document.getElementById('hrvUrl');
  var btn = document.getElementById('hrvBtn');
  var copyBtn = document.getElementById('hrvCopy');
  var clearBtn = document.getElementById('hrvClear');
  var samples = document.getElementById('hrvSamples');
  var resBox = document.getElementById('hrvResults');
  var summaryEl = document.getElementById('hrvSummary');
  var gridEl = document.getElementById('hrvGrid');
  var lastReport = '';

  var SAMPLES = {
    good: '<head>\n<title>Example store</title>\n<link rel="canonical" href="https://example.com/en/">\n<link rel="alternate" hreflang="en" href="https://example.com/en/">\n<link rel="alternate" hreflang="fr" href="https://example.com/fr/">\n<link rel="alternate" hreflang="de" href="https://example.com/de/">\n<link rel="alternate" hreflang="x-default" href="https://example.com/en/">\n</head>',
    bad: '<head>\n<title>Broken store</title>\n<link rel="alternate" hreflang="en_US" href="https://example.com/en/">\n<link rel="alternate" hreflang="fr" href="https://example.com/fr/">\n<link rel="alternate" hreflang="fr" href="https://example.com/fr-old/">\n<link rel="alternate" hreflang="en-XX" href="https://example.com/en/">\n</head>'
  };

  samples.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    input.value = SAMPLES[chip.dataset.sample];
    resBox.classList.remove('show'); refresh();
    ToolPro.toast(chip.dataset.sample === 'good' ? 'Correct example loaded — try Validate' : 'Broken example loaded — try Validate');
  });

  function esc(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
    });
  }
  function normUrl(u){ return String(u || '').trim().replace(/\/+$/, ''); }

  function splitPages(html){
    var pages = [], re = /<head[^>]*>([\s\S]*?)<\/head>/gi, m;
    while((m = re.exec(html))){ pages.push(m[1]); }
    if(!pages.length && /hreflang/i.test(html)) pages.push(html);
    return pages;
  }
  function attrVal(tag, name){
    var re = new RegExp(name + '\\s*=\\s*"([^"]*)"|' + name + "\\s*=\\s*'([^']*)'|" + name + '\\s*=\\s*([^\\s>]+)', 'i');
    var m = tag.match(re);
    return m ? (m[1] || m[2] || m[3] || '') : null;
  }
  function pageUrl(head){
    var tags = head.match(/<link[^>]*>/gi) || [], i, rel, h;
    for(i = 0; i < tags.length; i++){
      rel = attrVal(tags[i], 'rel');
      if(rel && rel.toLowerCase() === 'canonical'){ h = attrVal(tags[i], 'href'); if(h) return h; }
    }
    var metas = head.match(/<meta[^>]*>/gi) || [], p, c;
    for(i = 0; i < metas.length; i++){
      p = attrVal(metas[i], 'property');
      if(p && p.toLowerCase() === 'og:url'){ c = attrVal(metas[i], 'content'); if(c) return c; }
    }
    return null;
  }
  function hreflangLinks(head){
    var out = [], tags = head.match(/<link[^>]*>/gi) || [];
    tags.forEach(function(t){
      var rel = attrVal(t, 'rel');
      if(!rel || rel.toLowerCase() !== 'alternate') return;
      out.push({ code: attrVal(t, 'hreflang'), href: attrVal(t, 'href') });
    });
    return out;
  }

  function checkCode(code){
    if(code === null || code === '') return { ok: false, level: 'err', title: 'hreflang attribute is missing or empty', fix: 'Add a valid language code, e.g. hreflang="en" or hreflang="es-MX".' };
    if(/^x-default$/i.test(code)){
      if(code !== 'x-default') return { ok: true, level: 'warn', norm: 'x-default', title: 'x-default should be lowercase', fix: 'Change hreflang="' + code + '" to hreflang="x-default".' };
      return { ok: true, norm: 'x-default' };
    }
    if(code.indexOf('_') >= 0){
      var sug = code.replace(/_/g, '-');
      var sp = sug.split('-');
      sug = sp[0].toLowerCase() + (sp[1] ? '-' + sp[1].toUpperCase() : '');
      return { ok: false, level: 'err', title: 'Wrong separator in "' + code + '"', fix: 'hreflang uses a hyphen, not an underscore. Change it to hreflang="' + sug + '".' };
    }
    var parts = code.split('-');
    var lang = parts[0].toLowerCase();
    var region = parts[1] ? parts[1].toUpperCase() : null;
    if(!LANGS[lang]) return { ok: false, level: 'err', title: 'Unknown language code "' + parts[0] + '"', fix: '"' + parts[0] + '" is not an ISO 639-1 language code. Check the spelling — e.g. "en" for English, "es" for Spanish, "pt" for Portuguese.' };
    if(region === 'UK') return { ok: true, level: 'warn', norm: lang + '-GB', title: '"UK" is the wrong region for British English', fix: 'Use "' + lang + '-GB" instead of "' + code + '" — GB is the ISO code for the United Kingdom. "UK" is only exceptionally reserved and may be ignored by search engines.' };
    if(region && !REGIONS[region]) return { ok: false, level: 'err', title: 'Unknown region code "' + parts[1] + '"', fix: '"' + parts[1] + '" is not an ISO 3166-1 region code. Use the right one — e.g. "US" for the United States, "GB" for the United Kingdom (not "UK").' };
    if(parts.length > 2) return { ok: true, level: 'warn', norm: lang + (region ? '-' + region : ''), title: 'Unneeded variant in "' + code + '"', fix: 'hreflang works best as language or language-REGION only. Drop the extra part and keep "' + lang + (region ? '-' + region : '') + '".' };
    if(parts[0] !== lang) return { ok: true, level: 'warn', norm: lang + (region ? '-' + region : ''), title: 'Language code should be lowercase ("' + code + '")', fix: 'Change it to "' + lang + (region ? '-' + region : '') + '". Google may treat the wrong case as a different value.' };
    if(region && parts[1] !== region) return { ok: true, level: 'warn', norm: lang + '-' + region, title: 'Region code should be UPPERCASE ("' + code + '")', fix: 'Change it to "' + lang + '-' + region + '".' };
    return { ok: true, norm: lang + (region ? '-' + region : '') };
  }

  function analyzePage(head, idx, selfUrl, opts){
    var issues = [];
    var links = hreflangLinks(head);
    var url = normUrl(pageUrl(head) || selfUrl || '');
    var label = 'Page ' + (idx + 1) + (url ? ' (' + url + ')' : '');
    if(!links.length){
      issues.push({ level: 'err', page: label, title: 'No hreflang tags found', fix: 'Add <link rel="alternate" hreflang="..." href="..."> tags for every language version of this page, including the page itself.' });
      return { label: label, url: url, links: links, issues: issues, selfCode: null };
    }
    var seen = {}, selfFound = false, xdef = false, selfCode = null;
    links.forEach(function(L, i){
      if(!L.href) issues.push({ level: 'err', page: label, title: 'Tag #' + (i + 1) + ' is missing its href', fix: 'Every hreflang tag needs an href with the full URL of that language version.' });
      var c = checkCode(L.code);
      if(!c.ok) issues.push({ level: 'err', page: label, title: 'Tag #' + (i + 1) + ': ' + c.title, fix: c.fix });
      else if(c.level === 'warn') issues.push({ level: 'warn', page: label, title: 'Tag #' + (i + 1) + ': ' + c.title, fix: c.fix });
      if(c.norm && c.norm !== 'x-default'){
        if(seen[c.norm]) issues.push({ level: 'err', page: label, title: 'Duplicate hreflang "' + c.norm + '"', fix: 'Each hreflang value may appear only once per page. "' + c.norm + '" points at two different URLs — keep the correct one and delete the other.' });
        seen[c.norm] = 1;
        if(url && normUrl(L.href) === url){ selfFound = true; selfCode = c.norm; }
      }
      if(c.norm === 'x-default') xdef = true;
    });
    if(url){
      if(!selfFound) issues.push({ level: 'err', page: label, title: 'Missing self-referencing hreflang', fix: 'One hreflang tag must point back at this page itself. Add: <link rel="alternate" hreflang="YOUR-CODE" href="' + url + '">' });
    } else {
      issues.push({ level: 'warn', page: label, title: "Could not determine this page's URL", fix: 'Add a canonical tag (<link rel="canonical" href="...">) or fill in "This page\'s URL" above so the self-reference check can run.' });
    }
    if(opts.reqX && !xdef) issues.push({ level: 'warn', page: label, title: 'No x-default hreflang', fix: 'Add <link rel="alternate" hreflang="x-default" href="..."> pointing at your default page — the version shown to visitors who match no listed language.' });
    return { label: label, url: url, links: links, issues: issues, selfCode: selfCode };
  }

  function checkReciprocal(pages, opts){
    var issues = [];
    if(pages.length < 2) return issues;
    var withUrl = pages.filter(function(p){ return p.url; });
    pages.forEach(function(q){
      withUrl.forEach(function(p){
        if(p === q) return;
        var back = q.links.some(function(L){ return normUrl(L.href) === p.url; });
        if(!back){
          var want = p.selfCode ? 'hreflang="' + p.selfCode + '"' : 'a hreflang tag';
          issues.push({ level: 'err', page: q.label, title: 'Does not link back to ' + p.url, fix: 'Reciprocal linking is required: add ' + want + ' with href="' + p.url + '" to this page\'s <head>. Every page in an hreflang set must link to every other page.' });
        }
      });
    });
    if(opts.strict){
      var allUrls = withUrl.map(function(p){ return p.url; });
      pages.forEach(function(q){
        var have = {};
        q.links.forEach(function(L){ if(L.href) have[normUrl(L.href)] = 1; });
        allUrls.forEach(function(u){
          if(!have[u]) issues.push({ level: 'warn', page: q.label, title: 'Missing link to ' + u, fix: 'In a complete hreflang set every page lists every locale. Add a tag with href="' + u + '".' });
        });
      });
    }
    return issues;
  }

  function refresh(){
    var ok = input.value.trim().length > 0;
    btn.disabled = !ok;
    clearBtn.disabled = !(input.value || urlIn.value || gridEl.children.length);
  }
  input.addEventListener('input', refresh);
  urlIn.addEventListener('input', refresh);

  clearBtn.addEventListener('click', function(){
    input.value = ''; urlIn.value = '';
    gridEl.innerHTML = ''; summaryEl.textContent = ''; lastReport = '';
    resBox.classList.remove('show'); copyBtn.disabled = true; refresh();
  });

  btn.addEventListener('click', function(){
    var html = input.value;
    if(!html.trim()){ ToolPro.toast('Paste your <head> HTML first.', 'err'); return; }
    var opts = { reqX: document.getElementById('hrvReqX').checked, strict: document.getElementById('hrvStrict').checked };
    var heads = splitPages(html);
    if(!heads.length){
      gridEl.innerHTML = '';
      summaryEl.textContent = '❌ No hreflang tags found in the pasted text. Paste the HTML between <head> and </head>.';
      resBox.classList.add('show');
      ToolPro.toast('No hreflang tags found', 'err');
      return;
    }
    var selfUrl = heads.length === 1 ? urlIn.value.trim() : '';
    var pages = heads.map(function(h, i){ return analyzePage(h, i, selfUrl, opts); });
    var issues = [];
    pages.forEach(function(p){ issues = issues.concat(p.issues); });
    issues = issues.concat(checkReciprocal(pages, opts));

    var errs = issues.filter(function(x){ return x.level === 'err'; }).length;
    var warns = issues.filter(function(x){ return x.level === 'warn'; }).length;
    var totalLinks = pages.reduce(function(n, p){ return n + p.links.length; }, 0);

    gridEl.innerHTML = '';
    issues.forEach(function(x){
      var card = document.createElement('div');
      card.className = 'result-card';
      var icon = x.level === 'err' ? '❌' : '⚠️';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div>';
      card.querySelector('.r-name').textContent = icon + ' ' + x.title;
      card.querySelector('.r-name').title = x.page;
      var stats = card.querySelector('.r-stats');
      var pg = document.createElement('div');
      pg.style.cssText = 'font-size:.82rem;opacity:.75;margin-bottom:.25rem;';
      pg.textContent = x.page;
      stats.appendChild(pg);
      var fx = document.createElement('div');
      fx.innerHTML = '<b>Fix:</b> ';
      fx.appendChild(document.createTextNode(x.fix));
      stats.appendChild(fx);
      gridEl.appendChild(card);
    });

    var verdict;
    if(errs) verdict = '❌ ' + errs + ' error' + (errs > 1 ? 's' : '') + ' found — fix these first; Google may ignore the whole hreflang set until then.';
    else if(warns) verdict = '⚠️ No errors, but ' + warns + ' warning' + (warns > 1 ? 's' : '') + ' to clean up.';
    else verdict = '✅ All checks passed — this hreflang set is clean.';
    summaryEl.textContent = pages.length + ' page' + (pages.length > 1 ? 's' : '') + ' · ' + totalLinks + ' hreflang tags · ' + verdict;

    var lines = ['HREFLANG VALIDATION REPORT', summaryEl.textContent, ''];
    issues.forEach(function(x){
      lines.push((x.level === 'err' ? '[ERROR] ' : '[WARNING] ') + x.title + ' (' + x.page + ')');
      lines.push('Fix: ' + x.fix);
      lines.push('');
    });
    lastReport = lines.join('\n');
    copyBtn.disabled = false;

    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(errs ? errs + ' error(s) found' : 'Validation complete', errs ? 'err' : 'ok');
    refresh();
  });

  copyBtn.addEventListener('click', function(){
    if(!lastReport) return;
    ToolPro.copyText(lastReport, 'Report copied to clipboard');
  });

  refresh();
})();
</script>

## How it works

Paste the HTML from inside your page's `<head>` — or paste the heads of all your locale pages together — fill in the page URL if there's no canonical tag, and hit **Validate Hreflang Tags**. The checker finds every `<link rel="alternate" hreflang>` tag, validates each code against the built-in ISO 639-1 language and ISO 3166-1 region lists (hyphen separators, lowercase language, UPPERCASE region), and runs five checks: valid codes, no duplicates, a self-referencing tag, x-default presence, and reciprocal linking between pages. Every issue card explains the problem in plain language and tells you exactly how to fix it.

**Pro tip:** paste the heads of every locale version at once — the tool then verifies the full reciprocal matrix, which is the check most single-page validators skip.

## Everyday uses

- **Launching translated pages** — verify the hreflang set before Google crawls it.
- **SEO audits** — scan client sites for the duplicate-hreflang and missing-self-reference errors that silently break language targeting.
- **Fixing "wrong language in search results"** — most cases trace back to one of the five checks here.
- **CMS migrations** — confirm the new templates emit identical hreflang sets on every locale.
- **Learning SEO** — load the broken example and see each classic mistake explained.

No HTML you paste is stored or sent anywhere — the whole validator runs in your browser.
