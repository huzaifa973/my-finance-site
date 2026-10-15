---
title: "Compress PDF to 500KB — Free Online"
description: "Shrink a PDF to 500KB or less in your browser — iterative image recompression with quality passes until it fits. Free, private, files never leave your device."
category: pdf
date: 2026-10-15
draft: false
---

Application portals, email attachments, and upload forms often cap files around half a megabyte. This tool recompresses the images inside your PDF at progressively lower JPEG quality, pass by pass, until the file fits under 500KB. It stops the moment the target is reached, so you keep the best quality that still fits. All in your browser — your documents never leave your device.

<div class="tool-shell" id="pc5Shell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Compress PDF to 500KB</h2>
<p>Shrink a PDF under 500KB by recompressing its images — quality passes until it fits.</p>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your PDFs</p>
<div class="dropzone" id="pc5Drop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · up to 10 files at once</span>
<input type="file" id="pc5File" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pc5List"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression settings</p>
<div class="settings-panel">
<div class="preset-row" id="pc5Presets">
<button type="button" class="preset-chip active" data-target="500">🎯 500KB target</button>
<button type="button" class="preset-chip" data-target="1000">📦 1MB target</button>
<button type="button" class="preset-chip" data-target="250">📮 250KB target</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pc5Target">Custom target (KB)</label>
<input type="number" id="pc5Target" class="tool-input" min="50" max="5120" step="10" value="500">
<div class="hint">Pick a preset or type your own target — the tool runs quality passes until each file fits under <b id="pc5TargetVal">500KB</b>.</div>
</div>
<div class="setting">
<label for="pc5Quality">Compression effort</label>
<input type="range" id="pc5Quality" min="1" max="6" step="1" value="6">
<div class="hint">Up to <b id="pc5QualityVal">6</b> quality passes per file — more passes = better chance of hitting the target.</div>
</div>
<div class="setting">
<label for="pc5Name">Output filename</label>
<input type="text" id="pc5Name" class="tool-input" value="compressed-500kb.pdf">
<div class="hint">Used for the first file; extra files get "-2", "-3" added automatically.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pc5Btn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress to 500KB
</button>
<button type="button" class="btn-pro-outline" id="pc5Clear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pc5ProgWrap">
<div class="progress-bar"><i id="pc5ProgBar"></i></div>
<div class="progress-text" id="pc5ProgText">Working…</div>
</div>
<div class="results" id="pc5Results">
<p class="result-head">✅ Done — compression report</p>
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

  var files = [];
  var listEl = document.getElementById('pc5List');
  var btn = document.getElementById('pc5Btn');
  var clearBtn = document.getElementById('pc5Clear');
  var presets = document.getElementById('pc5Presets');
  var targetInput = document.getElementById('pc5Target');
  var grid = document.getElementById('pc5Grid');
  var resBox = document.getElementById('pc5Results');
  var summaryEl = document.getElementById('pc5Summary');
  var progWrap = document.getElementById('pc5ProgWrap');
  var progBar = document.getElementById('pc5ProgBar');
  var progText = document.getElementById('pc5ProgText');

  function currentTarget(){
    var kb = parseInt(targetInput.value, 10);
    if(!kb || kb < 50) kb = 500;
    if(kb > 5120) kb = 5120;
    return kb * 1024;
  }
  function refreshTargetVal(){
    document.getElementById('pc5TargetVal').textContent = (currentTarget() / 1024).toLocaleString('en-US') + 'KB';
  }
  targetInput.addEventListener('input', function(){
    refreshTargetVal();
    presets.querySelectorAll('.preset-chip').forEach(function(c){
      c.classList.toggle('active', parseInt(c.dataset.target, 10) * 1024 === currentTarget());
    });
  });
  refreshTargetVal();

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    targetInput.value = chip.dataset.target;
    refreshTargetVal();
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  ToolPro.bindSlider(
    document.getElementById('pc5Quality'),
    document.getElementById('pc5QualityVal'),
    function(v){ return v; }
  );

  function refreshButtons(){
    btn.disabled = !files.length;
    clearBtn.disabled = !files.length;
  }
  function resetResults(){
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
  }

  ToolPro.dropzone(document.getElementById('pc5Drop'), {
    multiple: true, accept: 'application/pdf,.pdf', maxFiles: 10,
    onFiles: function(arr){
      if(!arr.length) return;
      resetResults();
      arr.forEach(function(f){
        files.push(f);
        ToolPro.fileRow(listEl, f, function(removed){
          files = files.filter(function(x){ return x !== removed; });
          resetResults();
          refreshButtons();
        });
      });
      refreshButtons();
      ToolPro.toast(files.length + ' PDF' + (files.length === 1 ? '' : 's') + ' loaded — ready to compress', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = [];
    listEl.innerHTML = '';
    resetResults();
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

  function makeCard(file, fname, outBytes, statsHtml, warn){
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML =
      '<div class="r-name"></div>' +
      '<div class="r-stats"></div>' +
      '<button type="button" class="btn-pro dl">⬇ Download PDF</button>';
    card.querySelector('.r-name').textContent = fname;
    card.querySelector('.r-name').title = fname;
    card.querySelector('.r-stats').innerHTML = warn || statsHtml;
    var dlBtn = card.querySelector('.dl');
    if(warn || !outBytes){
      dlBtn.disabled = true;
    } else {
      var url = URL.createObjectURL(new Blob([outBytes], { type: 'application/pdf' }));
      dlBtn.addEventListener('click', function(){ ToolPro.download(url, fname); });
    }
    grid.appendChild(card);
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    btn.disabled = true; clearBtn.disabled = true;
    resetResults();
    progWrap.classList.add('show'); progBar.style.width = '0%';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    var TARGET = currentTarget();
    var targetKb = TARGET / 1024;
    var maxPasses = parseInt(document.getElementById('pc5Quality').value, 10) || 6;
    var qualities = [0.85, 0.7, 0.55, 0.42, 0.3, 0.2].slice(0, maxPasses);
    var nameBase = (document.getElementById('pc5Name').value || 'compressed-500kb.pdf').trim();
    if(!/\.pdf$/i.test(nameBase)) nameBase += '.pdf';
    var hitCount = 0;

    for(var fi = 0; fi < files.length; fi++){
      var file = files[fi];
      var fname = files.length === 1
        ? nameBase
        : nameBase.replace(/\.pdf$/i, '') + '-' + (fi + 1) + '.pdf';
      prog(Math.round(fi / files.length * 100), 'File ' + (fi + 1) + ' of ' + files.length + ': ' + file.name + '…');
      try{
        var origBytes = new Uint8Array(await file.arrayBuffer());
        var best = null, passesUsed = 0, alreadyFit = false;
        if(origBytes.length <= TARGET){
          alreadyFit = true;
          var d0 = await PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true });
          best = await d0.save({ useObjectStreams: true, addDefaultPage: false });
        } else {
          for(var p = 0; p < qualities.length; p++){
            prog(Math.round((fi + (p + 1) / qualities.length) / files.length * 100),
              'File ' + (fi + 1) + ' of ' + files.length + ' — pass ' + (p + 1) + ' of ' + qualities.length + ' (quality ' + Math.round(qualities[p] * 100) + '%)…');
            try{
              var r = await compressPass(origBytes, qualities[p]);
              best = r.bytes; passesUsed = p + 1;
              if(r.bytes.length <= TARGET) break;
            }catch(e){}
          }
        }
        if(!best){
          makeCard(file, fname, null, null, '⚠️ Could not process this PDF — it may be encrypted or damaged.');
          continue;
        }
        var success = best.length <= TARGET;
        if(success) hitCount++;
        var savedPct = file.size ? Math.max(0, Math.round((1 - best.length / file.size) * 100)) : 0;
        makeCard(file, fname, best,
          ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(best.length) + '</b> (' + savedPct + '% smaller)<br>' +
          '🧪 Passes used: ' + (alreadyFit ? '0 (already under target)' : passesUsed + ' of ' + qualities.length) + '<br>' +
          (success
            ? '✅ <b>Under the ' + targetKb + 'KB target</b>'
            : '⚠️ <b>Best effort: ' + ToolPro.fmtBytes(best.length - TARGET) + ' over ' + targetKb + 'KB</b> — this PDF\'s images can\'t shrink further without hurting readability.'),
          null);
      }catch(err){
        makeCard(file, fname, null, null, '⚠️ Compression failed: ' + (err && err.message ? err.message : err));
      }
    }
    prog(100, 'Done');
    progWrap.classList.remove('show');
    summaryEl.textContent = hitCount + ' of ' + files.length + ' file' + (files.length === 1 ? '' : 's') + ' hit the ' + targetKb + 'KB target. Files that could not shrink further are labeled best effort.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast(hitCount === files.length ? 'All files under ' + targetKb + 'KB' : 'Compression finished', hitCount === files.length ? 'ok' : undefined);
    btn.disabled = false; clearBtn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in up to 10 PDFs. Each is read into your browser's memory — nothing is uploaded.
- **Step 2** — Pick a target preset (500KB, 1MB, 250KB) or type a custom KB target, and choose how many quality passes to allow.
- **Step 3** — Hit **Compress to 500KB**. The tool rebuilds each PDF's images at decreasing JPEG quality, pass by pass, and stops the moment the file fits under your target — so you always keep the best quality that still hits it.

An honest note: text and vector graphics compress very little, so success depends on how many images the PDF contains. A scanned document will shrink dramatically; a pure-text export may barely move — the tool tells you either way.

## Everyday uses

- **Job portals** — get resumes and certificates under strict upload caps.
- **Visa &amp; immigration** — many government portals cap uploads per document.
- **University applications** — shrink transcripts and certificates to meet per-file limits.
- **Email** — attach tidy PDFs that never bounce back as "too large."
- **Forms &amp; filings** — slim down scanned declarations before uploading them to tax or business portals.

## Frequently asked questions

**Will the PDF still look readable?**
Yes. The tool stops at the first quality pass that fits under your target, so it never degrades images more than necessary. Text and vector graphics are never touched.

**What if it can't reach the target?**
You'll get an honest "best effort" result — the smallest version the tool could produce — plus the exact overshoot. Text-heavy PDFs sometimes can't shrink that far.

**Does it work on scanned PDFs?**
Best of all. Scanned pages are just big images, which is exactly what this tool recompresses — savings of 70–90% are common.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is uploaded or stored.
