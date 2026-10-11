---
title: "Free HTML to Markdown Converter Online"
description: "Convert HTML to clean Markdown or Markdown to HTML in your browser — with live preview, copy, and one-click .md/.html downloads. Free, unlimited, fully private."
category: text
date: 2026-10-11
draft: false
---

Scraped web content, exported CMS pages, and email HTML are painful to reuse — Markdown is the portable fix. This free converter works both ways: paste HTML and get clean, readable Markdown, or flip the direction and turn Markdown into ready-to-publish HTML. With live preview, one-click copy, and file downloads, it's the quickest way to move content between formats. Everything runs locally — your text never leaves your browser.

<style>
.split-pane{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
@media(max-width:768px){.split-pane{grid-template-columns:1fr}}
.split-half{min-width:0}
.split-label{font-weight:600;margin:0 0 .5rem;font-size:.9rem}
.split-half .tool-input{width:100%;box-sizing:border-box;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;resize:vertical}
.md-preview{border:1px solid #e5e7eb;border-radius:8px;padding:1rem;min-height:220px;max-height:480px;overflow:auto;background:#fff}
.md-preview pre{background:#f4f4f5;padding:.75rem;border-radius:6px;overflow:auto}
.md-preview code{background:#f4f4f5;padding:.1rem .3rem;border-radius:4px}
.md-preview blockquote{border-left:4px solid #3b82f6;margin:1rem 0;padding:.4rem 1rem;color:#555}
.md-preview table{border-collapse:collapse;width:100%}
.md-preview th,.md-preview td{border:1px solid #ddd;padding:.4rem;text-align:left}
.md-preview img{max-width:100%}
[data-theme="dark"] .md-preview{background:#1f2937;border-color:#374151;color:#e5e7eb}
[data-theme="dark"] .md-preview pre,[data-theme="dark"] .md-preview code{background:#111827}
[data-theme="dark"] .md-preview blockquote{color:#9ca3af}
</style>

<div class="tool-shell" id="hmcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>HTML ↔ Markdown Converter</h2>
<p>Two-way conversion: HTML → Markdown or Markdown → HTML, with live preview, copy, and downloads.</p>
</div>
<button type="button" class="theme-toggle" id="hmcTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — your text never leaves your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose direction &amp; paste</p>
<div class="preset-row" id="hmcDir" style="margin-bottom:.75rem">
<button type="button" class="preset-chip active" data-dir="h2m">HTML → Markdown</button>
<button type="button" class="preset-chip" data-dir="m2h">Markdown → HTML</button>
</div>
<div class="split-pane">
<div class="split-half">
<p class="split-label" id="hmcInLabel">✏️ Paste HTML</p>
<textarea class="tool-input" id="hmcIn" rows="14" spellcheck="false" placeholder="&lt;h1&gt;Paste your HTML here…&lt;/h1&gt;"></textarea>
</div>
<div class="split-half">
<p class="split-label">👁️ Live preview</p>
<div class="md-preview" id="hmcPrev"></div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Conversion settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="hmcFlavor">Markdown flavor (HTML → Markdown)</label>
<select id="hmcFlavor">
<option value="gfm" selected>GitHub-flavored (tables, code fences)</option>
<option value="common">CommonMark (plain)</option>
</select>
<div class="hint">GitHub flavor keeps tables and fenced code blocks; CommonMark is the minimal standard.</div>
</div>
<div class="setting">
<label for="hmcBreaks">Markdown soft line breaks (Markdown → HTML)</label>
<div class="toggle" id="hmcBreaks" role="switch" aria-checked="false" tabindex="0"><i></i></div>
<div class="hint">On: single line breaks become new lines, like GitHub comments.</div>
</div>
<div class="setting">
<label>Live stats</label>
<div class="hint" id="hmcStats">0 words · 0 characters</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; use it</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="hmcBtn">
<svg viewBox="0 0 24 24"><path d="M12 4V1L7 6l5 5V7c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l5-5-5-5v4z"/></svg>
Convert
</button>
<button type="button" class="btn-pro-outline" id="hmcCopy" disabled>📋 Copy result</button>
<button type="button" class="btn-pro-outline" id="hmcDl" disabled>⬇ Download file</button>
</div>
<div class="results" id="hmcResults">
<p class="result-head">✅ Converted</p>
<div class="result-summary" id="hmcSummary"></div>
<textarea class="tool-output" id="hmcOut" rows="12" placeholder="Your converted result appears here…"></textarea>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as much content as you like, as often as you like, with complete privacy.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/turndown@7.2.0/dist/turndown.js"></script>

<script src="https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('hmcShell');
  ToolPro.themeToggle(shell, document.getElementById('hmcTheme'));

  var dir = 'h2m';
  var ta = document.getElementById('hmcIn');
  var prev = document.getElementById('hmcPrev');
  var inLabel = document.getElementById('hmcInLabel');
  var stats = document.getElementById('hmcStats');
  var dirRow = document.getElementById('hmcDir');
  var out = document.getElementById('hmcOut');
  var resBox = document.getElementById('hmcResults');
  var resSummary = document.getElementById('hmcSummary');
  var copyBtn = document.getElementById('hmcCopy');
  var dlBtn = document.getElementById('hmcDl');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; } };
  }
  var tBreaks = bindToggle(document.getElementById('hmcBreaks'), false);

  function renderPreview(){
    var raw = ta.value.trim();
    if(dir === 'h2m'){
      prev.innerHTML = raw ? '<em>Paste HTML, then hit Convert — your Markdown preview appears here.</em>' : '<em>Your Markdown preview appears here.</em>';
    } else {
      marked.setOptions({ breaks: tBreaks.get(), gfm: true });
      prev.innerHTML = raw ? marked.parse(raw) : '<em>Your HTML preview appears here.</em>';
    }
    var words = (ta.value.trim().match(/\S+/g) || []).length;
    stats.textContent = words.toLocaleString() + ' words · ' + ta.value.length.toLocaleString() + ' characters';
  }

  dirRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    dirRow.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    dir = chip.dataset.dir;
    ta.value = ''; out.value = '';
    resBox.classList.remove('show');
    copyBtn.disabled = true; dlBtn.disabled = true;
    inLabel.textContent = dir === 'h2m' ? '✏️ Paste HTML' : '✏️ Paste Markdown';
    ta.placeholder = dir === 'h2m' ? '<h1>Paste your HTML here…</h1>' : '# Paste your Markdown here…';
    renderPreview();
    ToolPro.toast(dir === 'h2m' ? 'Direction: HTML → Markdown' : 'Direction: Markdown → HTML');
  });

  ta.addEventListener('input', renderPreview);
  document.getElementById('hmcBreaks').addEventListener('click', renderPreview);

  function h2mConvert(html, flavor){
    var td = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced',
      bulletListMarker: '-'
    });
    if(flavor === 'common'){ td.options.gfm = false; }
    td.addRule('stripScripts', {
      filter: ['script', 'style', 'noscript', 'iframe'],
      replacement: function(){ return ''; }
    });
    td.addRule('cleanTables', {
      filter: function(node){ return node.nodeName === 'TABLE' && flavor === 'common'; },
      replacement: function(content){ return '\n\n' + content + '\n\n'; }
    });
    return td.turndown(html).replace(/\n{3,}/g, '\n\n').trim();
  }

  document.getElementById('hmcBtn').addEventListener('click', function(){
    var raw = ta.value.trim();
    if(!raw){ ToolPro.toast('Paste some content first', 'err'); return; }
    var result, note;
    if(dir === 'h2m'){
      result = h2mConvert(raw, document.getElementById('hmcFlavor').value);
      note = '🎉 Converted to clean Markdown — ' + result.length.toLocaleString() + ' characters. Scripts, styles, and clutter were stripped.';
      marked.setOptions({ gfm: true, breaks: false });
      prev.innerHTML = result ? marked.parse(result) : '<em>Nothing to preview.</em>';
    } else {
      marked.setOptions({ breaks: tBreaks.get(), gfm: true });
      result = marked.parse(raw);
      note = '🎉 Converted to HTML — ' + result.length.toLocaleString() + ' characters. Copy it straight into your site or email.';
      prev.innerHTML = result;
    }
    if(!result){ ToolPro.toast('Nothing convertible found in the input', 'err'); return; }
    out.value = result;
    resSummary.textContent = note;
    resBox.classList.add('show');
    copyBtn.disabled = false; dlBtn.disabled = false;
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Converted', 'ok');
  });

  copyBtn.addEventListener('click', function(){
    out.select();
    if(navigator.clipboard){ navigator.clipboard.writeText(out.value).then(function(){ ToolPro.toast('Copied to clipboard', 'ok'); }); }
    else { document.execCommand('copy'); ToolPro.toast('Copied to clipboard', 'ok'); }
  });

  dlBtn.addEventListener('click', function(){
    if(!out.value){ return; }
    var isMd = dir === 'h2m';
    ToolPro.download(
      URL.createObjectURL(new Blob([out.value], { type: isMd ? 'text/markdown' : 'text/html' })),
      isMd ? 'converted.md' : 'converted.html'
    );
    ToolPro.toast('File downloaded', 'ok');
  });

  renderPreview();
})();
</script>

## How it works

- **Step 1** — Pick a direction: **HTML → Markdown** or **Markdown → HTML**. Paste your content on the left; a live preview renders on the right.
- **Step 2** — Fine-tune: choose GitHub-flavored or CommonMark output for HTML→Markdown, or soft line breaks for Markdown→HTML. A live word/character counter keeps score.
- **Step 3** — Hit **Convert**. The result lands in an editable box — copy it to your clipboard or download it as a `.md` or `.html` file.

Scripts, styles, iframes, and other page clutter are automatically stripped from HTML→Markdown conversions, so you get clean content instead of junk.

## Everyday uses

- **Bloggers &amp; writers** — convert exported CMS pages or copied web articles into clean Markdown drafts.
- **Developers** — turn HTML email templates or scraped pages into Markdown docs for your repo.
- **Marketers** — convert Markdown drafts into HTML to paste into email tools that only accept HTML.
- **Students** — turn pasted web research into plain Markdown notes that are easy to search.
- **Freelancers** — move client content between formats without expensive conversion software.

## Frequently asked questions

**Will it handle messy, real-world HTML?**
Yes. Pasted page source with ads, scripts, and inline styles gets stripped down to the actual content — headings, paragraphs, lists, links, images, tables, and code blocks.

**What's the difference between GitHub and CommonMark flavor?**
GitHub-flavored Markdown keeps tables and fenced code blocks. CommonMark is the stricter baseline — choose it if your target app only supports standard Markdown.

**Does Markdown → HTML keep my formatting?**
Yes — headings, bold, italic, lists, tables, blockquotes, and code all become proper HTML. The output is clean markup with no styling attached.

**Is my content private?**
Completely. Everything runs locally in your browser. Your text never leaves your browser, and nothing is uploaded or stored.