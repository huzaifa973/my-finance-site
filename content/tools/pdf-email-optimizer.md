---
title: "PDF Email Optimizer — Shrink PDFs to Fit Attachment Limits"
description: "Shrink a PDF for email: recompress images, flatten forms, and check the result against Gmail and Outlook attachment limits. Free, files stay private."
category: pdf
date: 2026-10-16
draft: false
---

"Attachment too large" is the most annoying email error there is. This optimizer does three things in one pass: recompresses oversized images, flattens fillable form fields so the file can't be edited in transit, and rebuilds the PDF cleanly — then checks the result against Gmail's 25MB and Outlook's 20MB attachment limits with a clear pass/fail readout. All in your browser.

<div class="tool-shell" id="peoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Email Optimizer</h2>
<p>One pass: shrink images, flatten forms, and verify it fits your mail provider's limits.</p>
</div>
<button type="button" class="theme-toggle" id="peoTheme">🌙 Dark</button>
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
<div class="dropzone" id="peoDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="peoFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="peoList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Optimization options</p>
<div class="settings-panel">
<div class="preset-row" id="peoPresets">
<button type="button" class="preset-chip active" data-maxq="0.75">✉️ Email preset — quality 75%</button>
<button type="button" class="preset-chip" data-maxq="0.9">🖼️ Gentle — quality 90%</button>
<button type="button" class="preset-chip" data-maxq="0.55">🗜️ Maximum shrink — quality 55%</button>
</div>
<div class="settings-grid">
<div class="setting">
<label class="toggle"><input type="checkbox" id="peoFlatten" checked><span></span> Flatten form fields</label>
<div class="hint">Locks fillable fields into the page so recipients can't edit them.</div>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="peoMeta" checked><span></span> Strip document metadata</label>
<div class="hint">Removes author, creator app, and timestamps from the file properties.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Optimize &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="peoBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
Optimize for Email
</button>
<button type="button" class="btn-pro-outline" id="peoClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="peoProgWrap">
<div class="progress-bar"><i id="peoProgBar"></i></div>
<div class="progress-text" id="peoProgText">Working…</div>
</div>
<div class="results" id="peoResults">
<p class="result-head">✅ Done — your email-ready PDF</p>
<div class="result-summary" id="peoSummary"></div>
<div class="result-grid" id="peoGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Optimize as many PDFs as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('peoShell');
  ToolPro.themeToggle(shell, document.getElementById('peoTheme'));
  var GMAIL = 25 * 1024 * 1024, OUTLOOK = 20 * 1024 * 1024;
  var file = null, listEl = document.getElementById('peoList');
  var btn = document.getElementById('peoBtn');
  var clearBtn = document.getElementById('peoClear');
  var presets = document.getElementById('peoPresets');
  var startQuality = 0.75;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    startQuality = parseFloat(chip.dataset.maxq) || 0.75;
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('peoDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('peoResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to optimize', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('peoResults').classList.remove('show');
    refreshButtons();
  });

  function imageStreamToCanvas(obj){
    return new Promise(function(resolve){
      try{
        var dict = obj.dict;
        if(!dict) return resolve(null);
        if(dict.lookup(PDFLib.PDFName.of('SMask'))) return resolve(null);
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

  btn.addEventListener('click', async function(){
    if(!file) return;
    var progWrap = document.getElementById('peoProgWrap');
    var progBar = document.getElementById('peoProgBar');
    var progText = document.getElementById('peoProgText');
    var grid = document.getElementById('peoGrid');
    var resBox = document.getElementById('peoResults');
    var doFlatten = document.getElementById('peoFlatten').checked;
    var doMeta = document.getElementById('peoMeta').checked;
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      prog(10, 'Loading PDF…');
      var origBytes = new Uint8Array(await file.arrayBuffer());
      var doc = await PDFLib.PDFDocument.load(origBytes, { ignoreEncryption: true });
      var replaced = 0, flattened = false, metaStripped = false;

      prog(30, 'Recompressing images…');
      var entries = doc.context.enumerateIndirectObjects();
      for(var i = 0; i < entries.length; i++){
        var obj = entries[i][1];
        if(!(obj instanceof PDFLib.PDFRawStream) && !(obj instanceof PDFLib.PDFStream)) continue;
        var dict = obj.dict;
        if(!dict || dict.lookup(PDFLib.PDFName.of('Subtype')) !== PDFLib.PDFName.of('Image')) continue;
        var canvas = await imageStreamToCanvas(obj);
        if(!canvas || !canvas.width || !canvas.height) continue;
        try{
          var bin = atob(canvas.toDataURL('image/jpeg', startQuality).split(',')[1]);
          var jpg = new Uint8Array(bin.length);
          for(var b = 0; b < bin.length; b++) jpg[b] = bin.charCodeAt(b);
          var nd = {};
          nd[PDFLib.PDFName.of('Type')] = PDFLib.PDFName.of('XObject');
          nd[PDFLib.PDFName.of('Subtype')] = PDFLib.PDFName.of('Image');
          nd[PDFLib.PDFName.of('Width')] = PDFLib.PDFNumber.of(canvas.width);
          nd[PDFLib.PDFName.of('Height')] = PDFLib.PDFNumber.of(canvas.height);
          nd[PDFLib.PDFName.of('ColorSpace')] = PDFLib.PDFName.of('DeviceRGB');
          nd[PDFLib.PDFName.of('BitsPerComponent')] = PDFLib.PDFNumber.of(8);
          nd[PDFLib.PDFName.of('Filter')] = PDFLib.PDFName.of('DCTDecode');
          doc.context.assign(entries[i][0], doc.context.stream(jpg, nd));
          replaced++;
        }catch(e){}
      }

      if(doFlatten){
        prog(65, 'Flattening form fields…');
        try{
          var form = doc.getForm();
          if(form.getFields().length){ form.flatten(); flattened = true; }
        }catch(e){}
      }

      if(doMeta){
        prog(80, 'Stripping metadata…');
        try{
          doc.setTitle(''); doc.setAuthor(''); doc.setSubject('');
          doc.setKeywords([]); doc.setProducer(''); doc.setCreator('');
          doc.setCreationDate(new Date(0)); doc.setModificationDate(new Date(0));
          metaStripped = true;
        }catch(e){}
      }

      prog(92, 'Rebuilding PDF…');
      var out = await doc.save({ useObjectStreams: true, addDefaultPage: false });
      prog(100, 'Done');
      progWrap.classList.remove('show');

      var blob = new Blob([out], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-email.pdf';
      var savedPct = file.size ? Math.max(0, Math.round((1 - out.length / file.size) * 100)) : 0;
      var gmailOk = out.length <= GMAIL, outlookOk = out.length <= OUTLOOK;
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(out.length) + '</b> (' + savedPct + '% smaller)<br>' +
        '🖼️ Images recompressed: ' + replaced +
        (flattened ? ' · 📝 Forms flattened' : '') +
        (metaStripped ? ' · 🧹 Metadata stripped' : '') + '<br>' +
        (gmailOk ? '✅' : '❌') + ' Gmail 25MB limit — ' + (gmailOk ? 'fits' : 'still too large') + '<br>' +
        (outlookOk ? '✅' : '⚠️') + ' Outlook 20MB limit — ' + (outlookOk ? 'fits' : 'still too large');
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('peoSummary').textContent =
        (gmailOk && outlookOk) ? '🎉 Done — attaches cleanly in Gmail and Outlook.'
        : (gmailOk ? '🎉 Done — fits Gmail. Outlook users may need a smaller file.'
        : 'Done — still over mail limits; try the Maximum shrink preset.');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('PDF optimized for email', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Optimization failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
    refreshButtons();
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in the PDF you want to email.
- **Step 2** — Pick a quality preset, and choose whether to flatten fillable forms and strip metadata.
- **Step 3** — Images are recompressed, forms are flattened (fields become permanent page content), metadata is stripped, and the PDF is rebuilt — then the result is checked against Gmail (25MB) and Outlook (20MB) limits.

## Everyday uses

- **Job seekers** — resumes that sail through any company's inbox.
- **Freelancers** — invoices and contracts clients can open without download errors.
- **Students** — assignment PDFs that fit the school mail quota.
- **Anyone** — flattened forms can't be tampered with after you send them.

**Rule of thumb:** the Email preset (75% image quality) is the sweet spot — visibly identical on screen, dramatically smaller to send.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/pdf-email-optimizer.md tool_name=read]
