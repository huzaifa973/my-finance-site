---
title: "Compress PDF to 100KB — Free Online"
description: "Shrink a PDF down to 100KB or smaller right in your browser. Iterative image re-compression with quality passes until it fits. Free, private — files never leave your device."
category: pdf
date: 2026-10-14
draft: false
---

Portal limits, email attachments, and application uploads love a tiny PDF — and 100KB is a common cutoff. This tool recompresses the images inside your PDF at progressively lower JPEG quality, pass by pass, until the file fits under 100KB. It stops the moment the target is reached, so you keep the best quality that still fits. All in your browser — your documents never leave your device.

<div class="tool-shell" id="pc1Shell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compress PDF to 100KB</h2>
<p>Shrink a PDF under 100KB by recompressing its images — quality passes until it fits.</p>
</div>
<button type="button" class="theme-toggle" id="pc1Theme">🌙 Dark</button>
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
<div class="dropzone" id="pc1Drop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pc1File" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pc1List"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression settings</p>
<div class="settings-panel">
<div class="preset-row" id="pc1Presets">
<button type="button" class="preset-chip active" data-maxq="0.85">🎯 Best quality (target 100KB)</button>
<button type="button" class="preset-chip" data-maxq="0.7">⚖️ Aggressive from the start</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pc1Name">Output filename</label>
<input type="text" id="pc1Name" class="tool-input" value="compressed-100kb.pdf">
<div class="hint">Iterates up to 6 quality passes — stops as soon as the file is ≤ 100KB.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pc1Btn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress to 100KB
</button>
<button type="button" class="btn-pro-outline" id="pc1Clear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pc1ProgWrap">
<div class="progress-bar"><i id="pc1ProgBar"></i></div>
<div class="progress-text" id="pc1ProgText">Working…</div>
</div>
<div class="results" id="pc1Results">
<p class="result-head">✅ Done — compression report</p>
<div class="result-summary" id="pc1Summary"></div>
<div class="result-grid" id="pc1Grid"></div>
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
  var shell = document.getElementById('pc1Shell');
  ToolPro.themeToggle(shell, document.getElementById('pc1Theme'));

  var TARGET = 100 * 1024;
  var file = null, listEl = document.getElementById('pc1List');
  var btn = document.getElementById('pc1Btn');
  var clearBtn = document.getElementById('pc1Clear');
  var presets = document.getElementById('pc1Presets');
  var startQuality = 0.85;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    startQuality = parseFloat(chip.dataset.maxq) || 0.85;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pc1Drop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pc1Results').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to compress', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pc1Results').classList.remove('show');
    refreshButtons();
  });

  // Decode an embedded image stream to pixels on a canvas, return canvas or null.
  function imageStreamToCanvas(doc, obj){
    return new Promise(function(resolve){
      try{
        var dict = obj.dict;
        if(!dict) return resolve(null);
        var smask = dict.lookup(PDFLib.PDFName.of('SMask'));
        if(smask) return resolve(null); // skip soft-masked images (risky to rebuild)
        var w = dict.lookup(PDFLib.PDFName.of('Width'));
        var h = dict.lookup(PDFLib.PDFName.of('Height'));
        if(!w || !h) return resolve(null);
        w = Number(w); h = Number(h);
        if(!w || !h || w > 8000 || h > 8000) return resolve(null);
        var filters = dict.lookup(PDFLib.PDFName.of('Filter'));
        var filtersArr = filters ? (filters.toString ? [filters.toString()] : []) : [];
        var raw = obj.getContents ? obj.getContents() : null;
        if(!raw || !raw.length) return resolve(null);
        var isJpeg = filtersArr.some(function(f){ return /DCT/i.test(f); });
        var blob, url;
        if(isJpeg){
          blob = new Blob([raw], { type: 'image/jpeg' });
          url = URL.createObjectURL(blob);
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
        }else{
          // raw RGB/RGBA flate pixels — attempt direct reconstruction
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
          if(subtype === PDFLib.PDFName.of('Image')){
            found.push({ ref: ref, obj: obj });
          }
        }
      }
    }catch(e){}
    return found;
  }

  function dataUrlToBytes(dataUrl){
    var b64 = dataUrl.split(',')[1];
    var bin = atob(b64);
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
        var dataUrl = canvas.toDataURL('image/jpeg', quality);
        var jpg = dataUrlToBytes(dataUrl);
        var w = canvas.width, h = canvas.height;
        var dict = {};
        dict[PDFLib.PDFName.of('Type')] = PDFLib.PDFName.of('XObject');
        dict[PDFLib.PDFName.of('Subtype')] = PDFLib.PDFName.of('Image');
        dict[PDFLib.PDFName.of('Width')] = PDFLib.PDFNumber.of(w);
        dict[PDFLib.PDFName.of('Height')] = PDFLib.PDFNumber.of(h);
        dict[PDFLib.PDFName.of('ColorSpace')] = PDFLib.PDFName.of('DeviceRGB');
        dict[PDFLib.PDFName.of('BitsPerComponent')] = PDFLib.PDFNumber.of(8);
        dict[PDFLib.PDFName.of('Filter')] = PDFLib.PDFName.of('DCTDecode');
        var newStream = doc.context.stream(jpg, dict);
        doc.context.assign(images[i].ref, newStream);
        replaced++;
      }catch(e){}
    }
    var out = await doc.save({ useObjectStreams: true, addDefaultPage: false });
    return { bytes: out, imagesReplaced: replaced };
  }

  btn.addEventListener('click', async function(){
    if(!file) return;
    var progWrap = document.getElementById('pc1ProgWrap');
    var progBar = document.getElementById('pc1ProgBar');
    var progText = document.getElementById('pc1ProgText');
    var grid = document.getElementById('pc1Grid');
    var resBox = document.getElementById('pc1Results');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      var origBytes = new Uint8Array(await file.arrayBuffer());
      if(origBytes.length <= TARGET){
        // Already fits — still rebuild cleanly for a tiny win.
        prog(90, 'Already under 100KB — rebuilding cleanly…');
        var d0 = await PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true });
        var out0 = await d0.save({ useObjectStreams: true, addDefaultPage: false });
        finish(out0, 0, true);
        return;
      }
      var qualities = [startQuality, 0.7, 0.55, 0.42, 0.3, 0.2];
      var best = null, passesUsed = 0;
      for(var p = 0; p < qualities.length; p++){
        prog(Math.round((p / qualities.length) * 100), 'Pass ' + (p + 1) + ' of ' + qualities.length + ' — image quality ' + Math.round(qualities[p] * 100) + '%…');
        try{
          var r = await compressPass(origBytes, qualities[p]);
          best = r.bytes; passesUsed = p + 1;
          if(r.bytes.length <= TARGET) break;
        }catch(e){}
      }
      finish(best, passesUsed, false);
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Compression failed: ' + (err && err.message ? err.message : err), 'err');
      btn.disabled = false;
    }

    function finish(outBytes, passes, alreadyFit){
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
      var fname = base + '-100kb.pdf';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      var savedPct = file.size ? Math.max(0, Math.round((1 - outBytes.length / file.size) * 100)) : 0;
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(outBytes.length) + '</b> (' + savedPct + '% smaller)<br>' +
        '🧪 Passes used: ' + (alreadyFit ? '0 (already under target)' : passes + ' of 6') + '<br>' +
        (success
          ? '✅ <b>Under the 100KB target</b>'
          : '⚠️ <b>Best effort: ' + ToolPro.fmtBytes(outBytes.length - TARGET) + ' over 100KB</b> — this PDF\'s images can\'t shrink further without hurting readability.');
      card.querySelector('button').addEventListener('click', function(){
        var name = (document.getElementById('pc1Name').value || fname).trim();
        if(!/\.pdf$/i.test(name)) name += '.pdf';
        ToolPro.download(url, name);
      });
      grid.appendChild(card);
      document.getElementById('pc1Summary').textContent = success
        ? '🎉 Target hit — your PDF is ' + ToolPro.fmtBytes(outBytes.length) + ', under the 100KB limit.'
        : 'ℹ️ Couldn\'t reach 100KB — the result is the smallest version the tool could make.';
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast(success ? 'Compressed under 100KB' : 'Best-effort compression finished', success ? 'ok' : undefined);
      btn.disabled = false;
    }
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in the PDF you need at 100KB or under. It's read into your browser's memory — nothing is uploaded.
- **Step 2** — Pick a starting quality (best-quality starts high, aggressive starts lower).
- **Step 3** — Hit **Compress to 100KB**. The tool rebuilds the PDF's images at decreasing JPEG quality, pass by pass (up to 6), and stops the moment the file fits under 100KB — so you always keep the best quality that still hits the target.

An honest note: text and vector graphics compress very little, so success depends on how many images the PDF contains. A scanned document will shrink dramatically; a pure-text export may barely move — the tool tells you either way.

## Everyday uses

- **Job portals** — get resumes and certificates under strict upload caps.
- **Visa &amp; immigration** — many government portals cap uploads at 100–200KB per document.
- **University applications** — shrink transcripts and certificates to meet per-file limits.
- **Email** — attach tiny PDFs that never bounce back as "too large."
- **Forms &amp; filings** — slim down scanned declarations before uploading them to tax or business portals.

## Frequently asked questions

**Will the PDF still look readable?**
Yes. The tool stops at the first quality pass that fits under 100KB, so it never degrades images more than necessary. Text and vector graphics are never touched.

**What if it can't reach 100KB?**
You'll get an honest "best effort" result — the smallest version the tool could produce — plus the exact overshoot. Text-heavy PDFs sometimes can't shrink that far.

**Does it work on scanned PDFs?**
Best of all. Scanned pages are just big images, which is exactly what this tool recompresses — savings of 70–90% are common.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
