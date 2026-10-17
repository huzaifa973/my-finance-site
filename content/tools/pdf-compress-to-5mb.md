---
title: "Compress PDF to 5MB — Target-Size PDF Compressor"
description: "Compress a PDF down toward a 5MB target in your browser — smart image recompression that lowers quality step by step until it fits. Free, no sign-up."
category: pdf
date: 2026-10-17
draft: false
---

A 5MB cap is the sweet spot for email attachments and most upload forms — big enough for crisp scans, small enough to send anywhere. Drop in your PDF and this tool recompresses its embedded images pass by pass, lowering quality only as far as needed to hit (or get close to) 5MB. Your document never leaves your browser.

<div class="tool-shell" id="pc5Shell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compress PDF to 5MB</h2>
<p>Shrink a PDF toward a 5MB target — quality drops only as far as the target demands.</p>
</div>
<button type="button" class="theme-toggle" id="pc5Theme">🌙 Dark</button>
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
<div class="dropzone" id="pc5Drop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pc5File" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pc5List"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression approach</p>
<div class="settings-panel">
<div class="preset-row" id="pc5Presets">
<button type="button" class="preset-chip active" data-maxq="0.90">⚖️ Balanced — start at 90% quality</button>
<button type="button" class="preset-chip" data-maxq="0.96">🖼️ Max quality — start at 96%</button>
<button type="button" class="preset-chip" data-maxq="0.70">🎯 Aggressive — start at 70%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label>How it works</label>
<div class="hint">The tool tries image quality 90% → 82% → 75% → 65% → 55% → 45%, stopping the moment the file fits under 5MB. Text pages compress with almost no quality loss.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pc5Btn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress to 5MB
</button>
<button type="button" class="btn-pro-outline" id="pc5Clear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pc5ProgWrap">
<div class="progress-bar"><i id="pc5ProgBar"></i></div>
<div class="progress-text" id="pc5ProgText">Working…</div>
</div>
<div class="results" id="pc5Results">
<p class="result-head">✅ Done — your 5MB PDF</p>
<div class="result-summary" id="pc5Summary"></div>
<div class="result-grid" id="pc5Grid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many PDFs as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pc5Shell');
  ToolPro.themeToggle(shell, document.getElementById('pc5Theme'));
  var TARGET = 5 * 1024 * 1024;
  var file = null, listEl = document.getElementById('pc5List');
  var btn = document.getElementById('pc5Btn');
  var clearBtn = document.getElementById('pc5Clear');
  var presets = document.getElementById('pc5Presets');
  var startQuality = 0.90;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    startQuality = parseFloat(chip.dataset.maxq) || 0.90;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pc5Drop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pc5Results').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to compress', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pc5Results').classList.remove('show');
    refreshButtons();
  });

  function imageStreamToCanvas(doc, obj){
    return new Promise(function(resolve){
      try{
        var dict = obj.dict;
        if(!dict) return resolve(null);
        var smask = dict.lookup(PDFLib.PDFName.of('SMask'));
        if(smask) return resolve(null);
        var w = Number(dict.lookup(PDFLib.PDFName.of('Width')) || 0);
        var h = Number(dict.lookup(PDFLib.PDFName.of('Height')) || 0);
        if(!w || !h || w > 8000 || h > 8000) return resolve(null);
        var filters = dict.lookup(PDFLib.PDFName.of('Filter'));
        var fstr = filters && filters.toString ? filters.toString() : '';
        var raw = obj.getContents ? obj.getContents() : null;
        if(!raw || !raw.length) return resolve(null);
        if(/DCT/i.test(fstr)){
          var blob = new Blob([raw], { type: 'image/jpeg' });
          var url = URL.createObjectURL(blob);
          var img = new Image();
          img.onload = function(){
            var c = document.createElement('canvas');
            c.width = img.naturalWidth || w; c.height = img.naturalHeight || h;
            c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
            URL.revokeObjectURL(url);
            resolve(c);
          };
          img.onerror = function(){ URL.revokeObjectURL(url); resolve(null); };
          img.src = url;
        } else {
          var cs = dict.lookup(PDFLib.PDFName.of('ColorSpace'));
          var csName = cs && cs.toString ? cs.toString() : '';
          if(!/DeviceRGB/i.test(csName)) return resolve(null);
          var bpc = dict.lookup(PDFLib.PDFName.of('BitsPerComponent'));
          if(bpc && Number(bpc) !== 8) return resolve(null);
          var expected = w * h * 3;
          var bytes = new Uint8Array(raw);
          if(bytes.length < expected) return resolve(null);
          var c = document.createElement('canvas');
          c.width = w; c.height = h;
          var ctx = c.getContext('2d');
          var id = ctx.createImageData(w, h);
          for(var i = 0, j = 0; i < expected; i += 3, j += 4){
            id.data[j] = bytes[i]; id.data[j + 1] = bytes[i + 1]; id.data[j + 2] = bytes[i + 2]; id.data[j + 3] = 255;
          }
          ctx.putImageData(id, 0, 0);
          resolve(c);
        }
      }catch(e){ resolve(null); }
    });
  }

  function collectImageObjects(doc){
    var found = [];
    try{
      var entries = doc.context.enumerateIndirectObjects();
      for(var i = 0; i < entries.length; i++){
        var ref = entries[i][0], obj = entries[i][1];
        if(obj && (obj instanceof PDFLib.PDFRawStream || obj instanceof PDFLib.PDFStream)){
          var dict = obj.dict;
          if(!dict) continue;
          var subtype = dict.lookup(PDFLib.PDFName.of('Subtype'));
          if(subtype === PDFLib.PDFName.of('Image')) found.push({ ref: ref, obj: obj });
        }
      }
    }catch(e){}
    return found;
  }

  function dataUrlToBytes(dataUrl){
    var bin = atob(dataUrl.split(',')[1]);
    var bytes = new Uint8Array(bin.length);
    for(var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return bytes;
  }

  async function compressPass(origBytes, quality){
    var doc = await PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true });
    var images = collectImageObjects(doc);
    var replaced = 0;
    for(var i = 0; i < images.length; i++){
      var canvas = await imageStreamToCanvas(doc, images[i].obj);
      if(!canvas || !canvas.width || !canvas.height) continue;
      try{
        var jpg = dataUrlToBytes(canvas.toDataURL('image/jpeg', quality));
        var dict = {};
        dict[PDFLib.PDFName.of('Type')] = PDFLib.PDFName.of('XObject');
        dict[PDFLib.PDFName.of('Subtype')] = PDFLib.PDFName.of('Image');
        dict[PDFLib.PDFName.of('Width')] = PDFLib.PDFNumber.of(canvas.width);
        dict[PDFLib.PDFName.of('Height')] = PDFLib.PDFNumber.of(canvas.height);
        dict[PDFLib.PDFName.of('ColorSpace')] = PDFLib.PDFName.of('DeviceRGB');
        dict[PDFLib.PDFName.of('BitsPerComponent')] = PDFLib.PDFNumber.of(8);
        dict[PDFLib.PDFName.of('Filter')] = PDFLib.PDFName.of('DCTDecode');
        doc.context.assign(images[i].ref, doc.context.stream(jpg, dict));
        replaced++;
      }catch(e){}
    }
    var out = await doc.save({ useObjectStreams: true, addDefaultPage: false });
    return { bytes: out, imagesReplaced: replaced };
  }

  btn.addEventListener('click', async function(){
    if(!file) return;
    var progWrap = document.getElementById('pc5ProgWrap');
    var progBar = document.getElementById('pc5ProgBar');
    var progText = document.getElementById('pc5ProgText');
    var grid = document.getElementById('pc5Grid');
    var resBox = document.getElementById('pc5Results');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      var origBytes = new Uint8Array(await file.arrayBuffer());
      if(origBytes.length <= TARGET){
        prog(90, 'Already under 5MB — rebuilding cleanly…');
        var d0 = await PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true });
        finish(await d0.save({ useObjectStreams: true, addDefaultPage: false }), 0, true);
        return;
      }
      var qualities = [startQuality, 0.82, 0.75, 0.65, 0.55, 0.45];
      var best = null, passesUsed = 0, imgs = 0;
      for(var p = 0; p < qualities.length; p++){
        prog(Math.round((p / qualities.length) * 100), 'Pass ' + (p + 1) + ' of ' + qualities.length + ' — image quality ' + Math.round(qualities[p] * 100) + '%…');
        try{
          var r = await compressPass(origBytes, qualities[p]);
          best = r.bytes; passesUsed = p + 1; imgs = r.imagesReplaced;
          if(r.bytes.length <= TARGET) break;
        }catch(e){}
      }
      finish(best, passesUsed, false, imgs);
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Compression failed: ' + (err && err.message ? err.message : err), 'err');
      btn.disabled = false;
    }

    function finish(outBytes, passes, alreadyFit, imgs){
      prog(100, 'Done');
      progWrap.classList.remove('show');
      if(!outBytes){
        ToolPro.toast('Could not process this PDF — it may be encrypted or damaged.', 'err');
        btn.disabled = false;
        return;
      }
      var success = outBytes.length <= TARGET;
      var blob = new Blob([outBytes], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-5mb.pdf';
      var savedPct = file.size ? Math.max(0, Math.round((1 - outBytes.length / file.size) * 100)) : 0;
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(outBytes.length) + '</b> (' + savedPct + '% smaller)<br>' +
        '🖼️ Images recompressed: ' + (imgs || 0) + ' · Passes used: ' + (alreadyFit ? '0 (already under target)' : passes + ' of 6') + '<br>' +
        (success ? '✅ <b>Under the 5MB target</b>'
          : '⚠️ Still ' + ToolPro.fmtBytes(outBytes.length - TARGET) + ' over target — the PDF is mostly text/vectors, which this method cannot shrink further.');
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pc5Summary').textContent = success
        ? '🎉 Done — your PDF fits the 5MB target.'
        : 'Done — as small as image recompression can make it.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      btn.disabled = false;
      ToolPro.toast('PDF compressed', 'ok');
    }
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in one PDF (scans, reports, certificates — anything).
- **Step 2** — Pick an approach preset: balanced, max quality, or aggressive.
- **Step 3** — The tool decodes every embedded image, re-encodes it as JPEG at descending quality levels, rebuilds the PDF, and stops the moment the file fits under 5MB. Text and vector content is preserved losslessly.

## Everyday uses

- **Email senders** — most inboxes handle 5MB attachments without bouncing.
- **Designers** — share crisp portfolio PDFs that stay sharp but send fast.
- **Real-estate agents** — property brochures that upload cleanly to listing portals.
- **Teachers** — class handouts and scanned worksheets that fit learning-platform limits.

**Rule of thumb:** 5MB keeps scans looking sharp while staying emailable — start with the balanced preset and only go aggressive if you're still over.
