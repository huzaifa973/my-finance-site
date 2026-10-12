---
title: "Free PDF Watermark — Add Text Watermark to PDF Online"
description: "Add a text watermark to every page of a PDF — pick the words, opacity, size, color, angle and position. Runs in your browser; files never leave your device."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Stamp "CONFIDENTIAL", "DRAFT", your name, or your business across every page of a PDF — without uploading the document to a server. Choose the text, how see-through it is, the size, color, angle, and whether it sits in the center, at the top or bottom, or tiled across the whole page. The watermark is drawn into the PDF itself with pdf-lib, right in your browser.

<div class="tool-shell" id="wmkShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2.7s6.5 7.02 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 9.72 12 2.7 12 2.7zM12 20a4.25 4.25 0 0 0 4.25-4.25c0-.35-.06-.76-.19-1.2L12 18.6l-4.06-4.05c-.13.44-.19.85-.19 1.2A4.25 4.25 0 0 0 12 20z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Add Watermark to PDF</h2>
<p>Stamp text on every page — control the opacity, size, color, angle and layout.</p>
</div>
<button type="button" class="theme-toggle" id="wmkTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDF</p>
<div class="dropzone" id="wmkDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="wmkFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="wmkList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Watermark settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="wmkText">Watermark text</label>
<input type="text" id="wmkText" class="tool-input" value="CONFIDENTIAL" maxlength="60">
<div class="hint">Plain A–Z text works best — the built-in font covers Latin characters.</div>
</div>
<div class="setting">
<label for="wmkPos">Position</label>
<select id="wmkPos">
<option value="center" selected>Center of page</option>
<option value="tiled">Tiled — repeated grid</option>
<option value="top">Top center</option>
<option value="bottom">Bottom center</option>
</select>
<div class="hint">Tiled repeats the text across the whole page — hardest to crop out.</div>
</div>
<div class="setting">
<label for="wmkOpacity">Opacity: <span class="val" id="wmkOpacityVal">35%</span></label>
<input type="range" id="wmkOpacity" min="0.1" max="0.9" step="0.05" value="0.35">
<div class="hint">Lower = fainter stamp, higher = bolder stamp.</div>
</div>
<div class="setting">
<label for="wmkSize">Text size</label>
<select id="wmkSize">
<option value="24">Small — 24 pt</option>
<option value="36" selected>Medium — 36 pt</option>
<option value="48">Large — 48 pt</option>
<option value="72">Huge — 72 pt</option>
</select>
<div class="hint">Relative to the page — 36 pt reads well on A4 / Letter.</div>
</div>
<div class="setting">
<label for="wmkRotate">Angle</label>
<select id="wmkRotate">
<option value="-45" selected>Diagonal — −45°</option>
<option value="0">Straight — 0°</option>
</select>
<div class="hint">Diagonal is the classic document-stamp look.</div>
</div>
<div class="setting">
<label for="wmkColor">Color</label>
<select id="wmkColor">
<option value="gray" selected>Gray</option>
<option value="red">Red</option>
<option value="blue">Blue</option>
<option value="black">Black</option>
</select>
<div class="hint">Gray at low opacity stays readable without hiding the text under it.</div>
</div>
<div class="setting">
<label for="wmkName">Output filename</label>
<input type="text" id="wmkName" class="tool-input" value="watermarked.pdf">
<div class="hint">The name your watermarked PDF downloads with.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Apply &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="wmkBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2.7s6.5 7.02 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 9.72 12 2.7 12 2.7z"/></svg>
Apply watermark
</button>
<button type="button" class="btn-pro-outline" id="wmkClear" disabled>Clear all</button>
</div>
<div class="results" id="wmkResults">
<p class="result-head">✅ Watermarked — your PDF is ready</p>
<div class="result-summary" id="wmkStatus"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="wmkDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download watermarked PDF
</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — watermark as many PDFs as you like, as often as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('wmkShell');
  ToolPro.themeToggle(shell, document.getElementById('wmkTheme'));

  var listEl = document.getElementById('wmkList');
  var btn = document.getElementById('wmkBtn');
  var clearBtn = document.getElementById('wmkClear');
  var resBox = document.getElementById('wmkResults');
  var statusEl = document.getElementById('wmkStatus');
  var opRange = document.getElementById('wmkOpacity');
  var opVal = document.getElementById('wmkOpacityVal');

  var srcBytes = null;
  var pageCount = 0;
  var outUrl = null;

  ToolPro.bindSlider(opRange, opVal, function(v){ return Math.round(parseFloat(v) * 100) + '%'; });

  function refreshButtons(){
    var loaded = pageCount > 0;
    btn.disabled = !loaded;
    clearBtn.disabled = !loaded;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2.7s6.5 7.02 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 9.72 12 2.7 12 2.7z"/></svg> Apply watermark' +
      (loaded ? ' — ' + pageCount + (pageCount === 1 ? ' page' : ' pages') : '');
  }

  function resetAll(){
    srcBytes = null;
    pageCount = 0;
    listEl.innerHTML = '';
    resBox.classList.remove('show');
    if(outUrl){ URL.revokeObjectURL(outUrl); outUrl = null; }
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('wmkDrop'), {
    accept: 'application/pdf,.pdf',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){
        ToolPro.toast('That file is not a PDF.', 'err');
        return;
      }
      var reader = new FileReader();
      reader.onload = function(){
        PDFLib.PDFDocument.load(reader.result, { ignoreEncryption: true }).then(function(doc){
          resetAll();
          srcBytes = reader.result;
          pageCount = doc.getPageCount();
          var row = ToolPro.fileRow(listEl, f, function(){ resetAll(); });
          row.setStatus('Loaded — ' + pageCount + (pageCount === 1 ? ' page' : ' pages'), 'done');
          refreshButtons();
          ToolPro.toast('PDF loaded — ' + pageCount + (pageCount === 1 ? ' page' : ' pages'), 'ok');
        }).catch(function(){
          ToolPro.toast('Could not read that PDF — it may be damaged or password-protected.', 'err');
        });
      };
      reader.onerror = function(){ ToolPro.toast('Could not read that file.', 'err'); };
      reader.readAsArrayBuffer(f);
    }
  });

  clearBtn.addEventListener('click', resetAll);

  btn.addEventListener('click', function(){
    if(!pageCount || !srcBytes) return;
    var text = document.getElementById('wmkText').value.replace(/\s+/g, ' ').trim();
    if(!text){
      ToolPro.toast('Type the watermark text first.', 'err');
      return;
    }
    var opacity = parseFloat(opRange.value);
    var size = parseInt(document.getElementById('wmkSize').value, 10);
    var rotDeg = parseInt(document.getElementById('wmkRotate').value, 10);
    var posMode = document.getElementById('wmkPos').value;
    var colors = {
      gray: [0.5, 0.5, 0.5],
      red: [0.85, 0.15, 0.15],
      blue: [0.15, 0.35, 0.9],
      black: [0, 0, 0]
    };
    var rgbArr = colors[document.getElementById('wmkColor').value] || colors.gray;

    btn.disabled = true;
    statusEl.textContent = 'Stamping ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + '…';
    resBox.classList.add('show');

    PDFLib.PDFDocument.load(srcBytes.slice(0), { ignoreEncryption: true }).then(function(doc){
      return doc.embedFont(PDFLib.StandardFonts.Helvetica).then(function(font){
        var textWidth = font.widthOfTextAtSize(text, size);
        var textHeight = font.heightAtSize(size);
        doc.getPages().forEach(function(page){
          var w = page.getWidth();
          var h = page.getHeight();
          var opts = {
            size: size,
            font: font,
            color: PDFLib.rgb(rgbArr[0], rgbArr[1], rgbArr[2]),
            opacity: opacity,
            rotate: PDFLib.degrees(rotDeg)
          };
          if(posMode === 'tiled'){
            var stepX = textWidth + size * 1.8;
            var stepY = size * 4.2;
            for(var x = -textWidth * 0.2; x < w + textWidth * 0.2; x += stepX){
              for(var y = size * 0.6; y < h; y += stepY){
                page.drawText(text, Object.assign({}, opts, { x: x, y: y }));
              }
            }
          } else if(posMode === 'top'){
            page.drawText(text, Object.assign({}, opts, { x: (w - textWidth) / 2, y: h - textHeight * 1.7 }));
          } else if(posMode === 'bottom'){
            page.drawText(text, Object.assign({}, opts, { x: (w - textWidth) / 2, y: size * 0.7 }));
          } else {
            page.drawText(text, Object.assign({}, opts, { x: (w - textWidth) / 2, y: h / 2 - textHeight / 2 }));
          }
        });
        return doc.save();
      });
    }).then(function(bytes){
      var blob = new Blob([bytes], { type: 'application/pdf' });
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(blob);
      statusEl.textContent = 'Done! "' + text + '" stamped on all ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + ' (' + ToolPro.fmtBytes(bytes.length) + ').';
      btn.disabled = false;
      ToolPro.toast('Watermark applied', 'ok');
    }).catch(function(err){
      statusEl.textContent = 'Watermark failed: ' + err + '. Very long text or unusual characters can cause this — try shorter plain A–Z text.';
      btn.disabled = false;
      ToolPro.toast('Watermark failed', 'err');
    });
  });

  document.getElementById('wmkDownload').addEventListener('click', function(){
    if(!outUrl) return;
    var name = (document.getElementById('wmkName').value || 'watermarked.pdf').trim();
    if(!/\.pdf$/i.test(name)) name += '.pdf';
    ToolPro.download(outUrl, name);
  });

  refreshButtons();
})();
</script>

## Everyday uses

- **Drafts &amp; proposals** — stamp DRAFT or CONFIDENTIAL so nobody mistakes a work-in-progress for the final version.
- **Freelance previews** — tile your name across design or document previews until the client pays.
- **Invoices &amp; quotes** — mark copies as PAID or COPY so originals stay distinguishable.
- **Shared handouts** — put your business or class name on worksheets and guides you give away.

## Frequently asked questions

**Which characters can the watermark use?**
The stamp is drawn with a standard built-in font (Helvetica), which covers Latin letters, numbers, and common punctuation. Text in scripts like Arabic, Urdu, Chinese, or emoji may not render — keep watermarks to plain A–Z text for reliable results.

**Can the watermark be removed later?**
It's drawn into each page as real content, so it can't be switched off like a viewer overlay. Determined editors with full PDF software can sometimes alter page content, so treat a watermark as a strong deterrent, not copy protection — the tiled layout makes removal hardest.

**Does it stamp every page?**
Yes — every page of the document gets the watermark in the same position, size, and opacity, including pages of different sizes.
