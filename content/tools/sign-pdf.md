---
title: "Free Sign PDF Online — Draw or Type Your Signature"
description: "Sign any PDF right in your browser — draw or type your signature and stamp it onto the page. Free and private: files never leave your device."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Contracts, permission slips, and forms still ask for a signature at the bottom — and printing, signing, and scanning is the slow way. Draw your signature with your mouse or finger, or type your name and have it rendered in a handwriting style, then choose the page and corner and this tool stamps it onto the PDF and hands you the signed file. Your document and your signature never leave your browser.

<div class="tool-shell" id="sgnShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Sign PDF</h2>
<p>Draw or type your signature and stamp it onto any PDF — no printing, no scanning, no uploads.</p>
</div>
<button type="button" class="theme-toggle" id="sgnTheme">🌙 Dark</button>
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
<div class="dropzone" id="sgnDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only · one file at a time</span>
<input type="file" id="sgnFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="sgnList"></ul>
<div class="hint" id="sgnInfo">No file yet — add a PDF above.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Create your signature</p>
<div class="settings-panel">
<div class="preset-row" id="sgnModeChips">
<button type="button" class="preset-chip active" data-m="draw">✍️ Draw it</button>
<button type="button" class="preset-chip" data-m="type">⌨️ Type it</button>
</div>
<div id="sgnDrawWrap">
<canvas id="sgnPad" width="560" height="180" style="width:100%;max-width:560px;height:auto;background:#fff;border:1.5px dashed #b9c2d0;border-radius:10px;touch-action:none;cursor:crosshair;display:block;"></canvas>
<div class="tool-actions" style="margin-top:.6rem;">
<button type="button" class="btn-pro-outline" id="sgnPadClear">Clear pad</button>
</div>
<div class="hint">Draw with your mouse or finger. Empty space around your signature is trimmed automatically, and the stamp is placed with a transparent background.</div>
</div>
<div id="sgnTypeWrap" style="display:none;">
<div class="setting">
<label for="sgnTypeName">Your name</label>
<input type="text" id="sgnTypeName" class="tool-input" placeholder="Type the name to sign with" autocomplete="off">
<div class="hint">Rendered in a handwriting-style font and stamped as a signature image, just like the drawn one.</div>
</div>
<canvas id="sgnTypePrev" width="560" height="180" style="width:100%;max-width:560px;height:auto;background:#fff;border:1.5px dashed #b9c2d0;border-radius:10px;display:block;margin-top:.6rem;"></canvas>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Place &amp; sign</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="sgnPage">Page number</label>
<input type="number" id="sgnPage" class="tool-input" min="1" value="1" style="max-width:120px;">
<div class="hint">Set automatically to the last page — where signatures usually go. Change it if yours goes elsewhere.</div>
</div>
<div class="setting">
<label for="sgnPos">Position on the page</label>
<select id="sgnPos">
<option value="right" selected>Bottom right</option>
<option value="left">Bottom left</option>
<option value="center">Bottom center</option>
</select>
<div class="hint">The signature sits just inside the bottom margin of the chosen page.</div>
</div>
<div class="setting">
<label for="sgnSize">Signature width: <span id="sgnSizeVal">30%</span> of page width</label>
<input type="range" id="sgnSize" min="10" max="60" step="1" value="30" style="width:100%;">
<div class="hint">Height scales automatically, so your signature never looks stretched.</div>
</div>
</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sgnBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
Sign PDF
</button>
<button type="button" class="btn-pro-outline" id="sgnClear" disabled>Clear file</button>
</div>
<div class="results" id="sgnResults">
<p class="result-head">✅ Signed</p>
<div class="result-summary" id="sgnStatus"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="sgnDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download signed PDF
</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — sign as many PDFs as you like, as often as you like. Your files never leave your device.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('sgnShell');
  ToolPro.themeToggle(shell, document.getElementById('sgnTheme'));

  var FONT_STACK = '"Segoe Script", "Brush Script MT", "Apple Chancery", cursive';
  var pdfFile = null, pdfBytes = null, pageCount = 0, signedUrl = null;
  var mode = 'draw', hasDrawn = false;
  var listEl = document.getElementById('sgnList');
  var infoEl = document.getElementById('sgnInfo');
  var pageInput = document.getElementById('sgnPage');
  var posSel = document.getElementById('sgnPos');
  var sizeRange = document.getElementById('sgnSize');
  var sizeVal = document.getElementById('sgnSizeVal');
  var btn = document.getElementById('sgnBtn');
  var clearBtn = document.getElementById('sgnClear');
  var resBox = document.getElementById('sgnResults');
  var statusEl = document.getElementById('sgnStatus');
  var chips = document.getElementById('sgnModeChips');
  var pad = document.getElementById('sgnPad');
  var pctx = pad.getContext('2d');
  pctx.lineWidth = 2.6;
  pctx.lineCap = 'round';
  pctx.lineJoin = 'round';
  pctx.strokeStyle = '#17264d';

  sizeRange.addEventListener('input', function(){ sizeVal.textContent = sizeRange.value + '%'; });

  chips.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    chips.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.m;
    document.getElementById('sgnDrawWrap').style.display = mode === 'draw' ? '' : 'none';
    document.getElementById('sgnTypeWrap').style.display = mode === 'type' ? '' : 'none';
  });

  function padPos(e){
    var r = pad.getBoundingClientRect();
    return { x: (e.clientX - r.left) * pad.width / r.width, y: (e.clientY - r.top) * pad.height / r.height };
  }
  var drawing = false, lastPt = null, midPt = null;
  pad.addEventListener('pointerdown', function(e){
    e.preventDefault();
    drawing = true; hasDrawn = true;
    try{ pad.setPointerCapture(e.pointerId); }catch(err){}
    var pt = padPos(e);
    lastPt = pt; midPt = pt;
    pctx.beginPath();
    pctx.moveTo(pt.x, pt.y);
    pctx.lineTo(pt.x + 0.01, pt.y + 0.01);
    pctx.stroke();
  });
  pad.addEventListener('pointermove', function(e){
    if(!drawing) return;
    e.preventDefault();
    var pt = padPos(e);
    var m = { x: (lastPt.x + pt.x) / 2, y: (lastPt.y + pt.y) / 2 };
    pctx.beginPath();
    pctx.moveTo(midPt.x, midPt.y);
    pctx.quadraticCurveTo(lastPt.x, lastPt.y, m.x, m.y);
    pctx.stroke();
    lastPt = pt; midPt = m;
  });
  function endDraw(){ drawing = false; }
  pad.addEventListener('pointerup', endDraw);
  pad.addEventListener('pointercancel', endDraw);
  document.getElementById('sgnPadClear').addEventListener('click', function(){
    pctx.clearRect(0, 0, pad.width, pad.height);
    hasDrawn = false;
  });

  var typeInput = document.getElementById('sgnTypeName');
  var typePrev = document.getElementById('sgnTypePrev');
  function renderTyped(){
    var x = typePrev.getContext('2d');
    x.clearRect(0, 0, typePrev.width, typePrev.height);
    var name = typeInput.value.trim();
    if(!name) return;
    var size = 84;
    x.font = size + 'px ' + FONT_STACK;
    while(x.measureText(name).width > typePrev.width - 28 && size > 20){
      size -= 6;
      x.font = size + 'px ' + FONT_STACK;
    }
    x.fillStyle = '#17264d';
    x.textBaseline = 'middle';
    x.fillText(name, 14, typePrev.height / 2 + 4);
  }
  typeInput.addEventListener('input', renderTyped);

  function trimCanvas(src){
    var w = src.width, h = src.height;
    var ctx = src.getContext('2d');
    var data;
    try{ data = ctx.getImageData(0, 0, w, h).data; }catch(e){ return null; }
    var minX = w, minY = h, maxX = -1, maxY = -1;
    for(var y = 0; y < h; y++){
      for(var x = 0; x < w; x++){
        if(data[(y * w + x) * 4 + 3] > 10){
          if(x < minX) minX = x;
          if(x > maxX) maxX = x;
          if(y < minY) minY = y;
          if(y > maxY) maxY = y;
        }
      }
    }
    if(maxX < 0) return null;
    var padPx = 6;
    minX = Math.max(0, minX - padPx); minY = Math.max(0, minY - padPx);
    maxX = Math.min(w - 1, maxX + padPx); maxY = Math.min(h - 1, maxY + padPx);
    var out = document.createElement('canvas');
    out.width = maxX - minX + 1;
    out.height = maxY - minY + 1;
    out.getContext('2d').drawImage(src, minX, minY, out.width, out.height, 0, 0, out.width, out.height);
    return out;
  }

  function signatureCanvas(){
    if(mode === 'draw'){
      if(!hasDrawn) return null;
      return trimCanvas(pad);
    }
    if(!typeInput.value.trim()) return null;
    return trimCanvas(typePrev);
  }

  function dataUrlToBytes(u){
    var b = atob(u.split(',')[1]);
    var arr = new Uint8Array(b.length);
    for(var i = 0; i < b.length; i++) arr[i] = b.charCodeAt(i);
    return arr;
  }

  function resetFile(){
    pdfFile = null; pdfBytes = null; pageCount = 0;
    listEl.innerHTML = '';
    infoEl.textContent = 'No file yet — add a PDF above.';
    resBox.classList.remove('show');
    if(signedUrl){ URL.revokeObjectURL(signedUrl); signedUrl = null; }
    btn.disabled = true; clearBtn.disabled = true;
  }

  ToolPro.dropzone(document.getElementById('sgnDrop'), {
    multiple: false,
    accept: 'application/pdf,.pdf',
    maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      pdfFile = f;
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, f, resetFile);
      resBox.classList.remove('show');
      infoEl.textContent = 'Reading ' + f.name + '…';
      f.arrayBuffer().then(function(buf){
        pdfBytes = buf;
        return PDFLib.PDFDocument.load(buf.slice(0));
      }).then(function(doc){
        pageCount = doc.getPageCount();
        pageInput.max = pageCount;
        pageInput.value = pageCount;
        infoEl.textContent = f.name + ' — ' + pageCount + ' page' + (pageCount === 1 ? '' : 's') + ', ' + ToolPro.fmtBytes(f.size) + '. Ready to sign.';
        btn.disabled = false; clearBtn.disabled = false;
        ToolPro.toast('PDF loaded: ' + pageCount + ' page' + (pageCount === 1 ? '' : 's'), 'ok');
      }).catch(function(){
        pdfFile = null; pdfBytes = null; pageCount = 0;
        infoEl.textContent = 'Could not read that PDF — it may be password-protected or damaged.';
        btn.disabled = true; clearBtn.disabled = true;
        ToolPro.toast('Could not read that PDF', 'err');
      });
    }
  });

  clearBtn.addEventListener('click', resetFile);

  btn.addEventListener('click', async function(){
    if(!pdfBytes){ ToolPro.toast('Add a PDF first', 'err'); return; }
    var sig = signatureCanvas();
    if(!sig){
      ToolPro.toast(mode === 'type' ? 'Type your name first' : 'Draw your signature on the pad first', 'err');
      return;
    }
    btn.disabled = true;
    statusEl.textContent = 'Signing… this happens in your browser.';
    resBox.classList.add('show');
    try{
      var doc = await PDFLib.PDFDocument.load(pdfBytes.slice(0));
      var pages = doc.getPages();
      var pno = parseInt(pageInput.value, 10);
      if(isNaN(pno)) pno = pages.length;
      pno = Math.max(1, Math.min(pages.length, pno));
      var page = pages[pno - 1];
      var pw = page.getWidth();
      var emb = await doc.embedPng(dataUrlToBytes(sig.toDataURL('image/png')));
      var w = pw * (parseInt(sizeRange.value, 10) / 100);
      var h = w * sig.height / sig.width;
      var margin = 36, pos = posSel.value;
      var x = pos === 'left' ? margin : (pos === 'center' ? (pw - w) / 2 : pw - w - margin);
      page.drawImage(emb, { x: x, y: margin, width: w, height: h });
      var out = await doc.save();
      var blob = new Blob([out], { type: 'application/pdf' });
      if(signedUrl) URL.revokeObjectURL(signedUrl);
      signedUrl = URL.createObjectURL(blob);
      statusEl.textContent = 'Done! Your signature is stamped on page ' + pno + ' of ' + pages.length + ', bottom ' + pos + ' (' + ToolPro.fmtBytes(out.length) + '). Download the signed copy below.';
      ToolPro.toast('PDF signed', 'ok');
    }catch(err){
      statusEl.textContent = 'Signing failed — the PDF may be damaged, or use features a browser editor cannot rewrite.';
      ToolPro.toast('Signing failed', 'err');
    }
    btn.disabled = false;
  });

  document.getElementById('sgnDownload').addEventListener('click', function(){
    if(!signedUrl) return;
    var base = pdfFile ? pdfFile.name.replace(/\.pdf$/i, '') : 'document';
    ToolPro.download(signedUrl, base + '-signed.pdf');
  });
})();
</script>

## Everyday uses

- **Freelance contracts &amp; proposals** — sign and send back in minutes instead of printing and scanning.
- **Permission slips &amp; school forms** — sign from your phone or laptop, wherever you are.
- **Rental &amp; service agreements** — add your signature to the last page and email the file straight back.
- **Invoices &amp; receipts** — sign to acknowledge a delivery or approve a payment.
- **Offer letters &amp; NDAs** — sign standard agreements without a printer in sight.

## Frequently asked questions

**Is a signature made here legally binding?**
A drawn or typed signature image is a simple electronic signature, widely accepted for everyday agreements in many countries — but the rules vary by place and document type, and some documents (wills, property transfers, notarized forms) need more. For anything high-value, check your local requirements or use a certified digital-signature service.

**Will my signature look stretched or blurry?**
No. The empty space around your signature is trimmed away, the height scales in proportion to the width you choose, and it is stamped as a crisp transparent PNG — so it sits on the page like real ink, with the document showing through around the strokes.

**Is my document or signature uploaded anywhere?**
Never. The PDF is opened, signed, and saved entirely on your device. Nothing — not the document, not your signature — is sent to a server.
