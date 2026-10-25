---
title: "Free PDF Watermark Tool — Add Image Watermark to PDF"
description: "Stamp an image watermark (logo, CONFIDENTIAL, DRAFT) onto every page of your PDFs with adjustable opacity, size, position, and rotation. 100% in-browser, private, free."
category: pdf
date: 2026-10-24
draft: false
---

Protect your documents or brand them in seconds: drop in one or more PDFs plus a watermark image — your logo, a "CONFIDENTIAL" stamp, or a "DRAFT" mark — choose the position, size, opacity, and rotation, and download the watermarked PDFs. The watermark is stamped onto every page with the pdf-lib engine running entirely in your browser, so your files never leave your device.

<div class="tool-shell" id="pwShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Image Watermark</h2>
<p>Stamp your logo or mark onto every PDF page — opacity, size, rotation.</p>
</div>
<button type="button" class="theme-toggle" id="pwTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add PDFs + watermark image</p>
<div class="setting">
<label>PDF files</label>
<div class="dropzone" id="pwDropPdf">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drop PDFs here</strong>
<span>or click to browse — multiple allowed</span>
<input type="file" id="pwFilePdf" accept="application/pdf" multiple>
</div>
<ul class="file-list" id="pwListPdf"></ul>
</div>
<div class="setting">
<label>Watermark image (PNG/JPG with transparency works best)</label>
<div class="dropzone" id="pwDropImg">
<svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
<strong>Drop watermark image here</strong>
<span>or click to browse — one image</span>
<input type="file" id="pwFileImg" accept="image/*">
</div>
<ul class="file-list" id="pwListImg"></ul>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Watermark style</p>
<div class="settings-panel">
<div class="preset-row" id="pwPresets">
<button type="button" class="preset-chip active" data-pos="center">🎯 Center</button>
<button type="button" class="preset-chip" data-pos="topleft">↖ Top left</button>
<button type="button" class="preset-chip" data-pos="topright">↗ Top right</button>
<button type="button" class="preset-chip" data-pos="bottomleft">↙ Bottom left</button>
<button type="button" class="preset-chip" data-pos="bottomright">↘ Bottom right</button>
<button type="button" class="preset-chip" data-pos="tiled">🔲 Tiled</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pwOpacity">Opacity <span id="pwOpacityVal">25%</span></label>
<input type="range" id="pwOpacity" min="5" max="90" value="25">
<div class="hint">Lower = subtler background-style mark.</div>
</div>
<div class="setting">
<label for="pwSize">Size — % of page width <span id="pwSizeVal">40%</span></label>
<input type="range" id="pwSize" min="10" max="100" value="40">
</div>
<div class="setting">
<label for="pwRotate">Rotation <span id="pwRotateVal">0°</span></label>
<input type="range" id="pwRotate" min="-45" max="45" value="0">
<div class="hint">Try −30° for a classic diagonal stamp look.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Keep image aspect ratio</span><label class="toggle"><input type="checkbox" id="pwAspect" checked><span class="track"></span></label></div>
<div class="hint">Off stretches the image to fill the tile (tiled mode).</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Apply &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pwBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Add Watermark
</button>
<button type="button" class="btn-pro-outline" id="pwClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="pwProgWrap">
<div class="progress-bar"><i id="pwProgBar"></i></div>
<div class="progress-text" id="pwProgText">Working…</div>
</div>
<div class="results" id="pwResults">
<p class="result-head">✅ Watermarked PDFs</p>
<div class="result-summary" id="pwSummary"></div>
<div class="result-grid" id="pwGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Watermark as many PDFs as you like — everything happens in your browser.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pwShell');
  ToolPro.themeToggle(shell, document.getElementById('pwTheme'));

  var pdfs = [];
  var imgFile = null, imgEl = null;
  var listPdf = document.getElementById('pwListPdf');
  var listImg = document.getElementById('pwListImg');
  var btn = document.getElementById('pwBtn');
  var clearBtn = document.getElementById('pwClear');
  var presets = document.getElementById('pwPresets');
  var resBox = document.getElementById('pwResults');
  var summaryEl = document.getElementById('pwSummary');
  var gridEl = document.getElementById('pwGrid');
  var progWrap = document.getElementById('pwProgWrap');
  var progBar = document.getElementById('pwProgBar');
  var progText = document.getElementById('pwProgText');
  var pos = 'center';
  var outUrls = [];

  ToolPro.bindSlider(document.getElementById('pwOpacity'), document.getElementById('pwOpacityVal'), function(v){ return v + '%'; });
  ToolPro.bindSlider(document.getElementById('pwSize'), document.getElementById('pwSizeVal'), function(v){ return v + '%'; });
  ToolPro.bindSlider(document.getElementById('pwRotate'), document.getElementById('pwRotateVal'), function(v){ return v + '°'; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    pos = chip.dataset.pos;
    ToolPro.toast('Position: ' + chip.textContent.trim());
  });

  function isPdf(f){ return f.type === 'application/pdf' || /\.pdf$/i.test(f.name); }

  ToolPro.dropzone(document.getElementById('pwDropPdf'), {
    multiple: true,
    accept: 'application/pdf',
    onFiles: function(arr){
      var added = 0;
      arr.forEach(function(f){
        if(!isPdf(f)){ ToolPro.toast(f.name + ' is not a PDF — skipped.', 'err'); return; }
        if(pdfs.some(function(p){ return p.name === f.name && p.size === f.size; })) return;
        pdfs.push(f);
        ToolPro.fileRow(listPdf, f, function(){
          pdfs = pdfs.filter(function(p){ return p !== f; });
          refresh();
        });
        added++;
      });
      if(added) ToolPro.toast(added + ' PDF' + (added > 1 ? 's' : '') + ' added', 'ok');
      resBox.classList.remove('show');
      refresh();
    }
  });

  ToolPro.dropzone(document.getElementById('pwDropImg'), {
    multiple: false,
    accept: 'image/*',
    onFiles: function(arr){
      var f = arr[0];
      if(!f) return;
      if(!/^image\//.test(f.type)){ ToolPro.toast('That is not an image file.', 'err'); return; }
      listImg.innerHTML = '';
      imgFile = f; imgEl = null;
      var url = URL.createObjectURL(f);
      var im = new Image();
      im.onload = function(){
        URL.revokeObjectURL(url);
        imgEl = im;
        refresh();
        ToolPro.toast('Watermark image loaded (' + im.naturalWidth + '×' + im.naturalHeight + ')', 'ok');
      };
      im.onerror = function(){ URL.revokeObjectURL(url); ToolPro.toast('Could not read that image.', 'err'); };
      im.src = url;
      ToolPro.fileRow(listImg, f, function(){ imgFile = null; imgEl = null; refresh(); });
      resBox.classList.remove('show');
      refresh();
    }
  });

  function refresh(){
    var ok = pdfs.length > 0 && imgFile && imgEl;
    btn.disabled = !ok;
    clearBtn.disabled = !(pdfs.length || imgFile);
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> ' +
      (pdfs.length ? 'Watermark ' + pdfs.length + ' PDF' + (pdfs.length > 1 ? 's' : '') : 'Add Watermark');
  }

  clearBtn.addEventListener('click', function(){
    pdfs = []; imgFile = null; imgEl = null;
    listPdf.innerHTML = ''; listImg.innerHTML = '';
    gridEl.innerHTML = ''; summaryEl.textContent = '';
    outUrls.forEach(function(u){ URL.revokeObjectURL(u); }); outUrls = [];
    resBox.classList.remove('show');
    refresh();
  });

  function readBuf(f){
    return new Promise(function(res, rej){
      var r = new FileReader();
      r.onload = function(){ res(r.result); };
      r.onerror = function(){ rej(new Error('Could not read ' + f.name)); };
      r.readAsArrayBuffer(f);
    });
  }

  function embedImage(pdfDoc){
    if(imgFile.type === 'image/png') return readBuf(imgFile).then(function(b){ return pdfDoc.embedPng(b); });
    if(imgFile.type === 'image/jpeg') return readBuf(imgFile).then(function(b){ return pdfDoc.embedJpg(b); });
    var c = document.createElement('canvas');
    c.width = imgEl.naturalWidth; c.height = imgEl.naturalHeight;
    c.getContext('2d').drawImage(imgEl, 0, 0);
    return new Promise(function(res, rej){
      c.toBlob(function(blob){
        if(!blob){ rej(new Error('Image conversion failed.')); return; }
        blob.arrayBuffer().then(function(buf){ return pdfDoc.embedPng(buf); }).then(res, rej);
      }, 'image/png');
    });
  }

  btn.addEventListener('click', async function(){
    if(!pdfs.length || !imgFile || !imgEl){ ToolPro.toast('Add at least one PDF and a watermark image first.', 'err'); return; }
    if(typeof PDFLib === 'undefined'){ ToolPro.toast('The PDF engine (pdf-lib CDN) could not load. Check your connection and retry.', 'err'); return; }
    btn.disabled = true;
    progWrap.classList.add('show');
    resBox.classList.remove('show'); gridEl.innerHTML = '';
    var opacity = document.getElementById('pwOpacity').value / 100;
    var sizePct = document.getElementById('pwSize').value / 100;
    var rotDeg = parseInt(document.getElementById('pwRotate').value, 10) || 0;
    var keepAspect = document.getElementById('pwAspect').checked;
    var MARGIN = 36;
    var done = 0, failed = 0;
    try {
      for(var fi = 0; fi < pdfs.length; fi++){
        var f = pdfs[fi];
        progText.textContent = 'Processing ' + f.name + ' (' + (fi + 1) + '/' + pdfs.length + ')…';
        progBar.style.width = Math.round((fi / pdfs.length) * 100) + '%';
        var buf = await readBuf(f);
        var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
        var emb = await embedImage(doc);
        var iw = emb.width, ih = emb.height;
        var pageCount = doc.getPageCount();
        for(var pi = 0; pi < pageCount; pi++){
          var page = doc.getPage(pi);
          var pw = page.getWidth(), ph = page.getHeight();
          var w = pw * sizePct;
          var h = keepAspect ? (w * ih / iw) : (ph * sizePct * 0.6);
          var spots = [];
          if(pos === 'center') spots.push([(pw - w) / 2, (ph - h) / 2]);
          else if(pos === 'topleft') spots.push([MARGIN, ph - MARGIN - h]);
          else if(pos === 'topright') spots.push([pw - MARGIN - w, ph - MARGIN - h]);
          else if(pos === 'bottomleft') spots.push([MARGIN, MARGIN]);
          else if(pos === 'bottomright') spots.push([pw - MARGIN - w, MARGIN]);
          else {
            var gx = w * 1.7, gy = h * 2.2;
            for(var ty = MARGIN; ty < ph - MARGIN; ty += gy)
              for(var tx = MARGIN; tx < pw - MARGIN; tx += gx)
                spots.push([tx, ty]);
          }
          spots.forEach(function(s){
            page.drawImage(emb, {
              x: s[0], y: s[1], width: w, height: h,
              opacity: opacity,
              rotate: PDFLib.degrees(rotDeg)
            });
          });
          progBar.style.width = Math.round(((fi + (pi + 1) / pageCount) / pdfs.length) * 100) + '%';
        }
        var bytes = await doc.save();
        var url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }));
        outUrls.push(url);
        var name = f.name.replace(/\.pdf$/i, '') + '-watermarked.pdf';
        var card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download</button>';
        card.querySelector('.r-name').textContent = name;
        card.querySelector('.r-name').title = name;
        card.querySelector('.r-stats').textContent = pageCount + ' pages · ' + ToolPro.fmtBytes(bytes.length);
        (function(u, n){
          card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, n); });
        })(url, name);
        gridEl.appendChild(card);
        done++;
      }
      progWrap.classList.remove('show');
      summaryEl.textContent = '🎉 ' + done + ' PDF' + (done > 1 ? 's' : '') + ' watermarked' + (failed ? ' · ' + failed + ' failed' : '') + '.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Watermarks applied', 'ok');
    } catch(err){
      progWrap.classList.remove('show');
      summaryEl.textContent = '❌ Failed: ' + (err && err.message ? err.message : err) + '. Password-protected or damaged PDFs may not process.';
      resBox.classList.add('show');
      ToolPro.toast('Watermark failed', 'err');
    }
    btn.disabled = false;
    refresh();
  });

  refresh();
})();
</script>

## How it works

Drop in your PDFs and a watermark image (PNG with transparency works best — your logo, a CONFIDENTIAL stamp, or a DRAFT mark), pick a position preset (center, corners, or tiled across the page), tune the opacity, size, and rotation sliders, then hit **Add Watermark**. The tool embeds your image and stamps it onto every page with the pdf-lib engine running locally in your browser. Download each watermarked PDF with one click.

**Tip:** for the classic diagonal "DRAFT" look, choose Center position, ~25% opacity, and −30° rotation.

## Everyday uses

- **Business** — stamp CONFIDENTIAL or company logos on contracts and reports.
- **Creators** — watermark sample PDFs, portfolios, and previews before sharing.
- **Legal** — mark exhibits and drafts clearly on every page.
- **Real estate & agencies** — brand property brochures and proposals.
- **Teachers** — stamp answer keys as "DO NOT DISTRIBUTE" before printing.

**Privacy note:** watermarking happens entirely in your browser with pdf-lib — your documents and images never leave your device.
