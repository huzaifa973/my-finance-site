---
title: "Free PDF Compressor — Reduce PDF File Size Online"
description: "Shrink bloated PDF files right in your browser. Our free PDF compressor cleans up wasted structure — typical savings 5–20%. No sign-up, files never leave your device."
category: pdf
date: 2026-10-11
draft: false
---

Bloated PDFs eat up email attachment limits, storage, and upload time. This free PDF compressor rewrites your PDF with clean, modern structure to strip the wasted overhead software leaves behind — all in your browser, so your documents never leave your device. Honest note: typical savings are 5–20% and it works best on software-generated PDFs; already-optimized PDFs may barely shrink, and that's normal.

<div class="tool-shell" id="psrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Compressor</h2>
<p>Shrink bloated PDFs by rebuilding them cleanly — typical savings 5–20%. Free, unlimited, private.</p>
</div>
<button type="button" class="theme-toggle" id="psrTheme">🌙 Dark</button>
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
<div class="dropzone" id="psrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop PDFs here</strong>
<span>or click to browse — .pdf only · batch supported</span>
<input type="file" id="psrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="psrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Compression settings</p>
<div class="settings-panel">
<div class="preset-row" id="psrPresets">
<button type="button" class="preset-chip active" data-streams="1" data-meta="1">⚙️ Recommended</button>
<button type="button" class="preset-chip" data-streams="1" data-meta="0">🧲 Keep metadata</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="psrStreams">Compressed object streams</label>
<div class="toggle" id="psrStreams" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Rewrites the PDF with compressed object streams — this is where most of the savings come from.</div>
</div>
<div class="setting">
<label for="psrMeta">Remove document metadata</label>
<div class="toggle" id="psrMeta" role="switch" aria-checked="true" tabindex="0"><i></i></div>
<div class="hint">Strips author, title, and keyword info. Turn off if you want that info preserved.</div>
</div>
<div class="setting">
<label for="psrLarger">If the result isn't smaller</label>
<select id="psrLarger">
<option value="keep" selected>Keep the original file</option>
<option value="anyway">Download the rebuilt file anyway</option>
</select>
<div class="hint">Already-optimized PDFs sometimes can't shrink — then the original is the better file.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Compress &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="psrBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Compress PDFs
</button>
<button type="button" class="btn-pro-outline" id="psrClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="psrProgWrap">
<div class="progress-bar"><i id="psrProgBar"></i></div>
<div class="progress-text" id="psrProgText">Working…</div>
</div>
<div class="results" id="psrResults">
<p class="result-head">✅ Done — your compressed PDFs</p>
<div class="result-summary" id="psrSummary"></div>
<div class="result-grid" id="psrGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — compress as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('psrShell');
  ToolPro.themeToggle(shell, document.getElementById('psrTheme'));

  var files = [];
  var listEl = document.getElementById('psrList');
  var btn = document.getElementById('psrBtn');
  var clearBtn = document.getElementById('psrClear');
  var presets = document.getElementById('psrPresets');

  function bindToggle(el, initial){
    var state = initial !== false;
    function paint(){ el.setAttribute('aria-checked', state ? 'true' : 'false'); el.classList.toggle('on', state); }
    el.addEventListener('click', function(){ state = !state; paint(); });
    el.addEventListener('keydown', function(e){ if(e.key === ' ' || e.key === 'Enter'){ e.preventDefault(); state = !state; paint(); } });
    paint();
    return { get: function(){ return state; }, set: function(v){ state = !!v; paint(); } };
  }
  var tStreams = bindToggle(document.getElementById('psrStreams'), true);
  var tMeta = bindToggle(document.getElementById('psrMeta'), true);

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    tStreams.set(chip.dataset.streams === '1');
    tMeta.set(chip.dataset.meta === '1');
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    var n = files.length;
    btn.disabled = !n;
    clearBtn.disabled = !n;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Compress ' +
      (n ? n + (n === 1 ? ' PDF' : ' PDFs') : 'PDFs');
  }

  ToolPro.dropzone(document.getElementById('psrDrop'), {
    multiple: true,
    accept: 'application/pdf,.pdf',
    maxFiles: 10,
    onFiles: function(arr){
      arr.forEach(function(f){
        if(files.some(function(x){ return x.file === f; })) return;
        var row = ToolPro.fileRow(listEl, f, function(dead){
          files = files.filter(function(x){ return x.file !== dead; });
          refreshButtons();
        });
        files.push({ file: f, row: row });
      });
      document.getElementById('psrResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast(arr.length + (arr.length === 1 ? ' PDF' : ' PDFs') + ' added', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    files = []; listEl.innerHTML = '';
    document.getElementById('psrResults').classList.remove('show');
    refreshButtons();
  });

  function compressOne(file){
    return new Promise(function(resolve){
      var reader = new FileReader();
      reader.onload = function(){
        try{
          var bytes = new Uint8Array(reader.result);
          PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true }).then(function(doc){
            if(tMeta.get()){
              doc.setTitle(''); doc.setAuthor(''); doc.setSubject('');
              doc.setKeywords([]); doc.setProducer(''); doc.setCreator('');
            }
            return doc.save({ useObjectStreams: tStreams.get(), addDefaultPage: false });
          }).then(function(out){ resolve(out); }).catch(function(){ resolve(null); });
        }catch(e){ resolve(null); }
      };
      reader.onerror = function(){ resolve(null); };
      reader.readAsArrayBuffer(file);
    });
  }

  btn.addEventListener('click', async function(){
    if(!files.length) return;
    var ifLarger = document.getElementById('psrLarger').value;
    var progWrap = document.getElementById('psrProgWrap');
    var progBar = document.getElementById('psrProgBar');
    var progText = document.getElementById('psrProgText');
    var grid = document.getElementById('psrGrid');
    var resBox = document.getElementById('psrResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';

    var totalSaved = 0, totalOrig = 0, done = 0, downloaded = 0;
    for(var i = 0; i < files.length; i++){
      var entry = files[i];
      entry.row.setStatus('Working…', 'working');
      progText.textContent = 'Compressing ' + (i + 1) + ' of ' + files.length + '…';
      var out = await compressOne(entry.file);
      done++;
      progBar.style.width = Math.round(done / files.length * 100) + '%';
      if(!out){ entry.row.setStatus('Failed', ''); continue; }
      entry.row.setStatus('Done', 'done');
      var origSize = entry.file.size, newSize = out.length;
      var saved = origSize - newSize;
      var savedPct = origSize ? Math.round((1 - newSize / origSize) * 100) : 0;
      var take = newSize < origSize || ifLarger === 'anyway';
      if(take && newSize < origSize){ totalOrig += origSize; totalSaved += Math.max(0, saved); }
      var card = document.createElement('div');
      card.className = 'result-card';
      var base = entry.file.name.replace(/\.pdf$/i, '');
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro"' + (take ? '' : ' disabled') + '>⬇ Download</button>';
      card.querySelector('.r-name').textContent = base + '.pdf';
      card.querySelector('.r-name').title = base + '.pdf';
      card.querySelector('.r-stats').innerHTML =
        ToolPro.fmtBytes(origSize) + ' → <b>' + ToolPro.fmtBytes(newSize) + '</b> (' +
        (savedPct >= 0 ? savedPct + '% smaller' : Math.abs(savedPct) + '% larger') + ')' +
        (take ? '' : ' — <i>original kept</i>');
      if(take){
        downloaded++;
        (function(bytes, name){
          card.querySelector('button').addEventListener('click', function(){
            ToolPro.download(URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' })), name);
          });
        })(out, base + '-compressed.pdf');
      }
      grid.appendChild(card);
    }
    var allPct = totalOrig ? Math.round(totalSaved / totalOrig * 100) : 0;
    document.getElementById('psrSummary').textContent =
      totalSaved > 0
        ? '🎉 ' + downloaded + (downloaded === 1 ? ' PDF' : ' PDFs') + ' compressed — saved ' +
          ToolPro.fmtBytes(totalSaved) + ' total (' + allPct + '% smaller).'
        : 'ℹ️ No file shrank — these PDFs are already well optimized. Try a larger, software-generated PDF.';
    progWrap.classList.remove('show');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    btn.disabled = false;
    ToolPro.toast('Compression finished', 'ok');
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in your PDF files (one or several). They are read directly into your browser's memory — nothing is uploaded.
- **Step 2** — Pick your settings. The recommended preset rebuilds the PDF with compressed object streams and strips leftover metadata like author and title info.
- **Step 3** — Hit **Compress PDFs**. Each file is rebuilt with clean structure, and you get a before/after size breakdown with the exact savings percentage.

An honest note on expectations: this tool removes structural overhead — it does not re-compress embedded images, so typical savings land between 5% and 20%. Word-processor exports, scanner PDFs, and reports with lots of pages are the biggest winners.

## Everyday uses

- **Job seekers** — get your resume under the 2 MB portal upload limit without degrading the text quality.
- **Freelancers** — shrink invoices and proposals before emailing them to clients.
- **Students** — compress research papers and assignments to meet learning-platform file-size caps.
- **Realtors &amp; agents** — send contracts and disclosure packets without bouncing back as too large.
- **Office workers** — lighten weekly report PDFs before sharing them on Slack or Teams.

## Frequently asked questions

**Will compressing change how my PDF looks?**
No. This rebuild preserves every page, font, image, and link — it only removes wasted structure around them. If the result isn't smaller, the tool can simply keep your original.

**Why did my PDF only shrink by 2%?**
Some PDFs are already saved efficiently (for example, exports from modern tools). There's simply nothing left to trim — that's a sign your file is already healthy, not a problem with the tool.

**Can it compress the images inside my PDF?**
No — and we'd rather be honest about it. True image re-compression needs a desktop app. This tool targets the structural overhead, which is free to remove without touching quality.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and no one else can see or store them.