---
title: "Free TXT to PDF Converter — Text to PDF Online"
description: "Convert plain text to PDF in your browser: paste or upload .txt, set font size, margins and page size, download a clean PDF. Free, no sign-up."
category: pdf
date: 2026-10-13
draft: false
---

Have notes, a story, or code in plain text? This free TXT to PDF converter turns it into a clean, printable PDF — paste your text or upload a .txt file, tune the font size, margins and paper size, and download the result. Everything runs locally in your browser; your files never leave your browser.

<div class="tool-shell" id="t2pShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>TXT to PDF Converter</h2>
<p>Paste or upload plain text, set the typography &amp; page size, and download a clean, printable PDF.</p>
</div>
<button type="button" class="theme-toggle" id="t2pTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your text</p>
<div class="settings-panel">
<textarea id="t2pText" class="tool-input" rows="10" placeholder="Paste your plain text here…"></textarea>
<div class="hint">…or drop a .txt file below and it will load into the box.</div>
</div>
<div class="dropzone" id="t2pDrop" style="margin-top:12px;">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a .txt file here</strong>
<span>or click to browse — loads the file into the text box</span>
<input type="file" id="t2pFile" accept=".txt,text/plain">
</div>
<div class="hint" id="t2pCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> PDF settings</p>
<div class="settings-panel">
<div class="preset-row" id="t2pPresets">
<button type="button" class="preset-chip active" data-size="a4" data-orient="portrait" data-margin="20" data-font="12" data-face="helvetica">📄 A4 Document — standard</button>
<button type="button" class="preset-chip" data-size="letter" data-orient="portrait" data-margin="25" data-font="12" data-face="times">🇺🇸 Letter — US paperwork</button>
<button type="button" class="preset-chip" data-size="a4" data-orient="portrait" data-margin="15" data-font="10" data-face="courier">💻 Code — monospace compact</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="t2pSize">Page size</label>
<select id="t2pSize">
<option value="a4" selected>A4 — 210 × 297 mm</option>
<option value="letter">Letter — 216 × 279 mm</option>
<option value="legal">Legal — 216 × 356 mm</option>
</select>
</div>
<div class="setting">
<label for="t2pOrient">Orientation</label>
<select id="t2pOrient">
<option value="portrait" selected>Portrait</option>
<option value="landscape">Landscape</option>
</select>
</div>
<div class="setting">
<label for="t2pFont">Font</label>
<select id="t2pFont">
<option value="helvetica" selected>Helvetica — clean sans-serif</option>
<option value="times">Times — classic serif</option>
<option value="courier">Courier — monospace</option>
</select>
</div>
<div class="setting">
<label for="t2pFontSize">Font size: <span class="val" id="t2pFontSizeVal">12 pt</span></label>
<input type="range" id="t2pFontSize" min="8" max="20" value="12">
</div>
<div class="setting">
<label for="t2pMargin">Margin: <span class="val" id="t2pMarginVal">20 mm</span></label>
<input type="range" id="t2pMargin" min="5" max="40" value="20">
</div>
<div class="setting">
<label for="t2pSpacing">Line spacing: <span class="val" id="t2pSpacingVal">1.4×</span></label>
<input type="range" id="t2pSpacing" min="100" max="200" step="10" value="140">
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Create your PDF</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="t2pBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Create PDF
</button>
<button type="button" class="btn-pro-outline" id="t2pSample">✨ Load sample text</button>
</div>
<div class="progress-wrap" id="t2pProgWrap">
<div class="progress-bar"><i id="t2pProgBar"></i></div>
<div class="progress-text" id="t2pProgText">Working…</div>
</div>
<div class="results" id="t2pResults">
<p class="result-head">✅ Done — your PDF is ready</p>
<div class="result-summary" id="t2pSummary"></div>
<div class="result-grid" id="t2pGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — create as many PDFs as you like. Your text never leaves your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(){
var shell = document.getElementById('t2pShell');
ToolPro.themeToggle(shell, document.getElementById('t2pTheme'));
var ta = document.getElementById('t2pText');
var btn = document.getElementById('t2pBtn');
var count = document.getElementById('t2pCount');
var sizeSel = document.getElementById('t2pSize');
var oriSel = document.getElementById('t2pOrient');
var fontSel = document.getElementById('t2pFont');
var fsRange = document.getElementById('t2pFontSize');
var fsVal = document.getElementById('t2pFontSizeVal');
var mRange = document.getElementById('t2pMargin');
var mVal = document.getElementById('t2pMarginVal');
var sRange = document.getElementById('t2pSpacing');
var sVal = document.getElementById('t2pSpacingVal');
var presets = document.getElementById('t2pPresets');
var jsPdfOk = !!(window.jspdf && window.jspdf.jsPDF);
ToolPro.bindSlider(fsRange, fsVal, function(v){ return v + ' pt'; });
ToolPro.bindSlider(mRange, mVal, function(v){ return v + ' mm'; });
ToolPro.bindSlider(sRange, sVal, function(v){ return (v / 100).toFixed(1) + '×'; });
function refresh(){
  var t = ta.value;
  var chars = t.length;
  var words = t.trim() ? t.trim().split(/\s+/).length : 0;
  count.textContent = chars.toLocaleString() + ' characters · ' + words.toLocaleString() + ' words';
  btn.disabled = !t.trim() || !jsPdfOk;
}
ta.addEventListener('input', refresh);
presets.addEventListener('click', function(e){
  var chip = e.target.closest('.preset-chip'); if(!chip) return;
  presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
  chip.classList.add('active');
  sizeSel.value = chip.dataset.size;
  oriSel.value = chip.dataset.orient;
  fontSel.value = chip.dataset.face;
  mRange.value = chip.dataset.margin; mRange.dispatchEvent(new Event('input'));
  fsRange.value = chip.dataset.font; fsRange.dispatchEvent(new Event('input'));
  ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
document.getElementById('t2pSample').addEventListener('click', function(){
  ta.value = 'The Quiet Power of Saving Small\n\nSaving money does not require a big salary. It requires a small, repeatable habit.\n\n1. Pay yourself first — move 10% to savings the day you get paid.\n2. Track every expense for one month. Awareness beats willpower.\n3. Automate what you can; remove temptation from what you cannot.\n\nStart today. Future you will be grateful.';
  refresh();
  ToolPro.toast('Sample text loaded', 'ok');
});
ToolPro.dropzone(document.getElementById('t2pDrop'), {
  multiple: false,
  accept: '.txt,text/plain',
  maxFiles: 1,
  onFiles: function(arr){
    var f = arr[0];
    var reader = new FileReader();
    reader.onload = function(){ ta.value = String(reader.result || ''); refresh(); ToolPro.toast('Loaded: ' + f.name, 'ok'); };
    reader.onerror = function(){ ToolPro.toast('Could not read ' + f.name, 'err'); };
    reader.readAsText(f);
  }
});
btn.addEventListener('click', function(){
  var text = ta.value.trim();
  if(!text || !jsPdfOk) return;
  var pageSizes = { a4: [210, 297], letter: [216, 279], legal: [216, 356] };
  var s = pageSizes[sizeSel.value];
  var pw = s[0], ph = s[1];
  if(oriSel.value === 'landscape'){ var tmp = pw; pw = ph; ph = tmp; }
  var margin = parseInt(mRange.value, 10);
  var fontSize = parseInt(fsRange.value, 10);
  var lineH = fontSize * (parseInt(sRange.value, 10) / 100) * 0.3528;
  var JPDF = window.jspdf.jsPDF;
  var doc = new JPDF({ orientation: pw >= ph ? 'landscape' : 'portrait', unit: 'mm', format: [pw, ph] });
  doc.setFont(fontSel.value, 'normal');
  doc.setFontSize(fontSize);
  var maxW = pw - margin * 2;
  var rawLines = text.replace(/\r/g, '').split('\n');
  var lines = [];
  rawLines.forEach(function(rl){
    if(!rl.trim()){ lines.push(''); return; }
    doc.splitTextToSize(rl, maxW).forEach(function(l){ lines.push(l); });
  });
  var y = margin;
  var pageCount = 1;
  lines.forEach(function(l){
    if(y + lineH > ph - margin){
      doc.addPage([pw, ph], pw >= ph ? 'landscape' : 'portrait');
      pageCount++;
      y = margin;
    }
    if(l) doc.text(l, margin, y);
    y += lineH;
  });
  var blob = doc.output('blob');
  var url = URL.createObjectURL(blob);
  var name = 'dollarwise-text.pdf';
  document.getElementById('t2pSummary').textContent =
    '🎉 ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + ' created (' + ToolPro.fmtBytes(blob.size) + ') — ' +
    sizeSel.options[sizeSel.selectedIndex].text + ', ' + fontSel.value + ' ' + fontSize + 'pt.';
  var grid = document.getElementById('t2pGrid');
  grid.innerHTML = '';
  var card = document.createElement('div');
  card.className = 'result-card';
  card.innerHTML =
    '<div class="r-name">' + name + '</div>' +
    '<div class="r-stats">' + pageCount + (pageCount === 1 ? ' page' : ' pages') + ' · ' + ToolPro.fmtBytes(blob.size) + '</div>' +
    '<button type="button" class="btn-pro">⬇ Download PDF</button>';
  card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, name); });
  grid.appendChild(card);
  var resBox = document.getElementById('t2pResults');
  resBox.classList.add('show');
  resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  ToolPro.toast('PDF created — ' + pageCount + (pageCount === 1 ? ' page' : ' pages'), 'ok');
});
if(!jsPdfOk){
  ToolPro.toast('PDF library failed to load — check your connection and reload the page.', 'err');
}
refresh();
})();
</script>

## How it works

- **Step 1** — Paste your text into the box, or drop a `.txt` file to load it automatically. A live counter shows characters and words.
- **Step 2** — Choose your page size (A4, Letter, Legal), orientation, font (Helvetica, Times or Courier), font size, margins and line spacing — or tap a one-click preset.
- **Step 3** — Hit **Create PDF**. The text is wrapped to fit your margins, paginated automatically with your line spacing, and rendered into a real PDF you can download, print, or email.

Long lines wrap cleanly at word boundaries, blank lines become paragraph spacing, and every page respects your margins.

## Everyday uses

- **Students** — turn study notes into a printable PDF for class.
- **Writers** — convert a draft chapter from plain text into a shareable document.
- **Developers** — export logs, READMEs or config dumps as Courier-set PDFs.
- **Job seekers** — build a plain-text resume into a clean PDF in seconds.
- **Anyone** — notes, lists, letters and stories become proper documents with zero software.
