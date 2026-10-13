---
title: "Free PDF to Markdown Converter — PDF to MD"
description: "Convert PDF to Markdown in your browser: headings detected from font size, page separators, copy or download the .md file. Free, no sign-up, private."
category: pdf
date: 2026-10-13
draft: false
---

Want your PDF in a format you can edit in any notes app, wiki, or static-site generator? This free PDF to Markdown converter extracts the text and rebuilds it as clean Markdown — with headings detected automatically from font sizes. Everything runs locally in your browser; your files never leave your browser.

<div class="tool-shell" id="p2mShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF to Markdown Converter</h2>
<p>Turn any PDF into clean Markdown — headings detected from font sizes, page separators, copy or download.</p>
</div>
<button type="button" class="theme-toggle" id="p2mTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDFs</p>
<div class="dropzone" id="p2mDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 5 files</span>
<input type="file" id="p2mFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="p2mList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Markdown settings</p>
<div class="settings-panel">
<div class="preset-row" id="p2mPresets">
<button type="button" class="preset-chip active" data-head="1" data-sep="1">📝 Structured — headings + page markers</button>
<button type="button" class="preset-chip" data-head="0" data-sep="0">📜 Plain — just the text</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="p2mHead">Detect headings from font size</label>
<div class="toggle on" id="p2mHead" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Larger text lines become # / ## / ### headings based on their size relative to body text.</div>
</div>
<div class="setting">
<label for="p2mSep">Page separators</label>
<div class="toggle on" id="p2mSep" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Adds an HTML comment (&lt;!-- Page 2 --&gt;) between pages so you know where each page starts.</div>
</div>
<div class="setting">
<label for="p2mTitle">Document title</label>
<input type="text" id="p2mTitle" class="tool-input" placeholder="Used as the top # heading (optional)">
</div>
<div class="setting">
<label for="p2mPages">Page range</label>
<select id="p2mPages">
<option value="all" selected>All pages</option>
<option value="first10">First 10 pages</option>
<option value="first5">First 5 pages</option>
</select>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="p2mBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Convert to Markdown
</button>
<button type="button" class="btn-pro-outline" id="p2mClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="p2mProgWrap">
<div class="progress-bar"><i id="p2mProgBar"></i></div>
<div class="progress-text" id="p2mProgText">Working…</div>
</div>
<div class="results" id="p2mResults">
<p class="result-head">✅ Done — your Markdown</p>
<div class="result-summary" id="p2mSummary"></div>
<div class="result-grid" id="p2mGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>

<script>
(function(){
var shell = document.getElementById('p2mShell');
ToolPro.themeToggle(shell, document.getElementById('p2mTheme'));
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
var files = [];
var listEl = document.getElementById('p2mList');
var btn = document.getElementById('p2mBtn');
var clearBtn = document.getElementById('p2mClear');
var presets = document.getElementById('p2mPresets');
function bindToggle(el, initial){
  var state = initial !== false;
  function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
  el.addEventListener('click', function(){ state = !state; paint(); });
  el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
  paint();
  return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
}
var tHead = bindToggle(document.getElementById('p2mHead'), true);
var tSep = bindToggle(document.getElementById('p2mSep'), true);
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  tHead.set(chip.dataset.head === '1');
  tSep.set(chip.dataset.sep === '1');
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
function refreshButtons(){
  var n = files.length;
  btn.disabled = !n;
  clearBtn.disabled = !n;
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Convert ' +
    (n ? '— ' + n + (n === 1 ? ' PDF' : ' PDFs') : 'to Markdown');
}
ToolPro.dropzone(document.getElementById('p2mDrop'), {
  multiple: true,
  accept: 'application/pdf,.pdf',
  maxFiles: 5,
  onFiles: function(arr){
    arr.forEach(function(f){
      if(files.some(function(x){ return x.file === f; })) return;
      var row = ToolPro.fileRow(listEl, f, function(dead){
        files = files.filter(function(x){ return x.file !== dead; });
        refreshButtons();
      });
      files.push({ file: f, row: row });
    });
    document.getElementById('p2mResults').classList.remove('show');
    refreshButtons();
    ToolPro.toast(arr.length + (arr.length === 1 ? ' PDF' : ' PDFs') + ' added', 'ok');
  }
});
clearBtn.addEventListener('click', function(){
  files = []; listEl.innerHTML = '';
  document.getElementById('p2mResults').classList.remove('show');
  refreshButtons();
});
function fontSizeOf(item){
  if(item.height) return item.height;
  if(item.transform && item.transform.length >= 4) return Math.abs(item.transform[3]);
  return 12;
}
function extractLines(file, limit){
  return new Promise(function(resolve){
    var reader = new FileReader();
    reader.onload = function(){
      pdfjsLib.getDocument({ data: new Uint8Array(reader.result) }).promise.then(function(pdf){
        var total = pdf.numPages;
        var lim = limit ? Math.min(total, limit) : total;
        var pages = [];
        function next(n){
          if(n > lim){ resolve({ pages: pages, total: total }); return; }
          pdf.getPage(n).then(function(page){
            return page.getTextContent().then(function(tc){
              var lines = [], cur = { text: '', sizes: [] };
              tc.items.forEach(function(item){
                cur.text += item.str;
                cur.sizes.push(fontSizeOf(item));
                if(item.hasEOL){ lines.push(cur); cur = { text: '', sizes: [] }; }
                else { cur.text += ' '; }
              });
              if(cur.text.trim()) lines.push(cur);
              lines.forEach(function(l){
                l.text = l.text.replace(/\s+/g, ' ').trim();
                l.size = l.sizes.length ? Math.max.apply(null, l.sizes) : 0;
              });
              pages.push(lines.filter(function(l){ return l.text; }));
              next(n + 1);
            });
          }).catch(function(){ pages.push([]); next(n + 1); });
        }
        next(1);
      }).catch(function(){ resolve(null); });
    };
    reader.onerror = function(){ resolve(null); };
    reader.readAsArrayBuffer(file);
  });
}
function bodySize(lines){
  var sizes = [];
  lines.forEach(function(p){ p.forEach(function(l){ if(l.size) sizes.push(l.size); }); });
  if(!sizes.length) return 12;
  sizes.sort(function(a, b){ return a - b; });
  return sizes[Math.floor(sizes.length / 2)];
}
function mdEscape(s){
  return String(s).replace(/([\\`*_{}\[\]()#+\-.!>])/g, '\\$1');
}
function toMarkdown(pages, opts){
  var body = bodySize(pages);
  var out = [];
  if(opts.title) out.push('# ' + mdEscape(opts.title), '');
  pages.forEach(function(lines, pi){
    if(opts.sep && pi > 0){ out.push('<!-- Page ' + (pi + 1) + ' -->', ''); }
    var para = [];
    function flush(){
      if(para.length){ out.push(para.join(' '), ''); para = []; }
    }
    lines.forEach(function(l){
      if(opts.head && l.size >= body * 1.25 && l.text.length <= 140){
        flush();
        var level = l.size >= body * 1.8 ? '#' : (l.size >= body * 1.45 ? '##' : '###');
        out.push(level + ' ' + mdEscape(l.text), '');
      } else {
        para.push(mdEscape(l.text));
      }
    });
    flush();
  });
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}
btn.addEventListener('click', async function(){
  if(!files.length) return;
  var head = tHead.get(), sep = tSep.get();
  var range = document.getElementById('p2mPages').value;
  var limit = range === 'first5' ? 5 : (range === 'first10' ? 10 : 0);
  var docTitle = document.getElementById('p2mTitle').value.trim();
  var progWrap = document.getElementById('p2mProgWrap');
  var progBar = document.getElementById('p2mProgBar');
  var progText = document.getElementById('p2mProgText');
  var grid = document.getElementById('p2mGrid');
  var resBox = document.getElementById('p2mResults');
  btn.disabled = true;
  progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
  var done = 0;
  for(var i = 0; i < files.length; i++){
    var entry = files[i];
    entry.row.setStatus('Working…', 'working');
    progText.textContent = 'Reading ' + (i + 1) + ' of ' + files.length + '…';
    var out = await extractLines(entry.file, limit);
    done++;
    progBar.style.width = Math.round(done / files.length * 100) + '%';
    if(!out){ entry.row.setStatus('Failed', ''); continue; }
    entry.row.setStatus('Done', 'done');
    var base = entry.file.name.replace(/\.pdf$/i, '');
    var md = toMarkdown(out.pages, { head: head, sep: sep, title: docTitle || base });
    var url = URL.createObjectURL(new Blob([md], { type: 'text/markdown' }));
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name">' + base + '.md</div>' +
      '<div class="r-stats">' + out.pages.length + ' of ' + out.total + ' pages · ' + md.length.toLocaleString() + ' characters · headings ' + (head ? 'detected' : 'off') + '</div>' +
      '<textarea class="tool-output" rows="10" readonly></textarea>' +
      '<div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.5rem">' +
      '<button type="button" class="btn-pro copy-btn">📋 Copy Markdown</button>' +
      '<button type="button" class="btn-pro-outline dl-btn">⬇ Download .md</button>' +
      '</div>';
    card.querySelector('textarea').value = md.slice(0, 2500) + (md.length > 2500 ? '\n…(truncated preview — copy or download for the full file)' : '');
    card.querySelector('.copy-btn').addEventListener('click', function(){ ToolPro.copyText(md, 'Markdown copied to clipboard'); });
    card.querySelector('.dl-btn').addEventListener('click', function(){ ToolPro.download(url, base + '.md'); });
    grid.appendChild(card);
  }
  document.getElementById('p2mSummary').textContent =
    '🎉 ' + done + (done === 1 ? ' PDF' : ' PDFs') + ' converted to Markdown. Paste it into Obsidian, Notion, GitHub, or any static-site generator.';
  progWrap.classList.remove('show');
  resBox.classList.add('show');
  resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  btn.disabled = false;
  ToolPro.toast('Conversion finished', 'ok');
});
refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDFs. They're read straight into your browser — nothing leaves your device.
- **Step 2** — Choose your settings: automatic heading detection (lines set in a noticeably larger font become `#` / `##` / `###` headings), page separator markers, an optional document title, and a page range for long documents.
- **Step 3** — Hit **Convert to Markdown**. The tool measures the median body font size, promotes oversized lines to headings, escapes Markdown special characters in body text, and outputs one clean `.md` file per PDF — ready to copy or download.

Heading detection is a heuristic based on relative font sizes, so documents with uniform text simply get clean paragraphs — the tool never invents structure that isn't there.

## Everyday uses

- **Note-takers** — drop research PDFs into Obsidian, Logseq or Notion as editable Markdown.
- **Developers** — convert documentation PDFs into Markdown for your repo or docs site.
- **Bloggers** — turn a PDF draft into a Markdown post for Hugo, Jekyll or WordPress.
- **Students** — get study material into a format you can actually highlight and rearrange.
- **Writers** — extract book chapters from PDF into Markdown for editing.
