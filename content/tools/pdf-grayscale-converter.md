---
title: "PDF Grayscale Converter — Color PDF to Black & White (Print-Friendly)"
description: "Turn a color PDF into grayscale or true black-and-white for cheap printing. DPI and threshold controls, all in your browser — free, no sign-up."
category: pdf
date: 2026-10-16
draft: false
---

Color PDFs drink expensive ink — for drafts, handouts, and archiving, black-and-white is all you need. This print-friendly converter renders every page and rebuilds it as grayscale, or as true 1-bit-style black-and-white with an adjustable threshold for maximum ink savings. Everything happens in your browser; your document is never uploaded.

<div class="tool-shell" id="pgrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Grayscale Converter</h2>
<p>Color PDF → ink-saving grayscale or crisp black-and-white, page by page, in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="pgrTheme">🌙 Dark</button>
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
<div class="dropzone" id="pgrDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop your PDF here</strong>
<span>or click to browse — one PDF at a time</span>
<input type="file" id="pgrFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pgrList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Print-friendly settings</p>
<div class="settings-panel">
<div class="preset-row" id="pgrPresets">
<button type="button" class="preset-chip active" data-mode="gray">🖨️ Grayscale — smooth tones</button>
<button type="button" class="preset-chip" data-mode="bw">⚫ True B&amp;W — max ink savings</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pgrDpi">Render quality (DPI)</label>
<select id="pgrDpi">
<option value="100">100 DPI — smallest file</option>
<option value="150" selected>150 DPI — balanced</option>
<option value="200">200 DPI — sharp print</option>
</select>
<div class="hint">Higher DPI = sharper print, bigger file.</div>
</div>
<div class="setting" id="pgrThreshWrap" style="display:none;">
<label for="pgrThresh">B&amp;W threshold: <span class="val" id="pgrThreshVal">128</span></label>
<input type="range" id="pgrThresh" min="60" max="200" value="128">
<div class="hint">Pixels darker than this become black; lighter become white.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pgrBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>
Convert to Black &amp; White
</button>
<button type="button" class="btn-pro-outline" id="pgrClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pgrProgWrap">
<div class="progress-bar"><i id="pgrProgBar"></i></div>
<div class="progress-text" id="pgrProgText">Working…</div>
</div>
<div class="results" id="pgrResults">
<p class="result-head">✅ Done — your print-friendly PDF</p>
<div class="result-summary" id="pgrSummary"></div>
<div class="result-grid" id="pgrGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert as many PDFs as you like — your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pgrShell');
  ToolPro.themeToggle(shell, document.getElementById('pgrTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var file = null, listEl = document.getElementById('pgrList');
  var btn = document.getElementById('pgrBtn');
  var clearBtn = document.getElementById('pgrClear');
  var presets = document.getElementById('pgrPresets');
  var dpiSel = document.getElementById('pgrDpi');
  var threshWrap = document.getElementById('pgrThreshWrap');
  var threshR = document.getElementById('pgrThresh');
  var threshV = document.getElementById('pgrThreshVal');
  var mode = 'gray';
  var jsPdfOk = !!(window.jspdf && window.jspdf.jsPDF);

  ToolPro.bindSlider(threshR, threshV, function(v){ return v; });

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    threshWrap.style.display = mode === 'bw' ? '' : 'none';
    ToolPro.toast('Mode: ' + (mode === 'bw' ? 'true black & white' : 'grayscale'), 'ok');
  });

  function refreshButtons(){
    btn.disabled = !file || !jsPdfOk;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pgrDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pgrResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to convert', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pgrResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file || !jsPdfOk) return;
    var progWrap = document.getElementById('pgrProgWrap');
    var progBar = document.getElementById('pgrProgBar');
    var progText = document.getElementById('pgrProgText');
    var grid = document.getElementById('pgrGrid');
    var resBox = document.getElementById('pgrResults');
    var dpi = parseInt(dpiSel.value, 10);
    var thresh = parseInt(threshR.value, 10);
    var bw = mode === 'bw';
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      var buf = await file.arrayBuffer();
      var pdf = await pdfjsLib.getDocument({ data: buf }).promise;
      var n = pdf.numPages;
      if(n > 200) throw new Error('Too many pages (max 200).');
      var first = await pdf.getPage(1);
      var v0 = first.getViewport({ scale: 1 });
      var landscape = v0.width > v0.height;
      var doc = new window.jspdf.jsPDF({
        unit: 'pt',
        format: [v0.width, v0.height],
        orientation: landscape ? 'l' : 'p',
        compress: true
      });
      var scale = dpi / 72;
      for(var i = 1; i <= n; i++){
        prog(Math.round(((i - 1) / n) * 100), 'Page ' + i + ' of ' + n + '…');
        var page = await pdf.getPage(i);
        var vp = page.getViewport({ scale: scale });
        var c = document.createElement('canvas');
        c.width = Math.round(vp.width); c.height = Math.round(vp.height);
        var ctx = c.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        var id = ctx.getImageData(0, 0, c.width, c.height);
        var d = id.data;
        for(var p = 0; p < d.length; p += 4){
          var luma = 0.299 * d[p] + 0.587 * d[p + 1] + 0.114 * d[p + 2];
          var v = bw ? (luma < thresh ? 0 : 255) : Math.round(luma);
          d[p] = v; d[p + 1] = v; d[p + 2] = v; d[p + 3] = 255;
        }
        ctx.putImageData(id, 0, 0);
        var pv = page.getViewport({ scale: 1 });
        if(i > 1) doc.addPage([pv.width, pv.height], pv.width > pv.height ? 'l' : 'p');
        doc.addImage(c.toDataURL('image/jpeg', 0.85), 'JPEG', 0, 0, pv.width, pv.height);
      }
      prog(100, 'Done');
      var out = doc.output('blob');
      var url = URL.createObjectURL(out);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + (bw ? '-bw.pdf' : '-grayscale.pdf');
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = '<div class="r-name"></div><div class="r-stats"></div><button type="button" class="btn-pro">⬇ Download PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      var savedPct = file.size ? Math.max(0, Math.round((1 - out.size / file.size) * 100)) : 0;
      card.querySelector('.r-stats').innerHTML =
        n + ' page' + (n === 1 ? '' : 's') + ' · ' + (bw ? 'true black &amp; white (threshold ' + thresh + ')' : 'grayscale') +
        ' · ' + dpi + ' DPI<br>' +
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(out.size) + '</b>' +
        (savedPct ? ' (' + savedPct + '% smaller)' : '') + '<br>' +
        '🖨️ Prints with black ink only.';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(url, fname); });
      grid.appendChild(card);
      document.getElementById('pgrSummary').textContent = '🎉 ' + n + ' page' + (n === 1 ? '' : 's') + ' converted — ready to print cheaply.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Grayscale PDF ready', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      ToolPro.toast('Conversion failed: ' + (err && err.message ? err.message : err), 'err');
    }
    btn.disabled = false;
    refreshButtons();
  });

  if(!jsPdfOk) ToolPro.toast('PDF libraries failed to load — check your connection and reload.', 'err');
  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in a color PDF.
- **Step 2** — Choose Grayscale (smooth tones, looks like the original) or True B&W (every pixel becomes pure black or white past your threshold — maximum ink savings), plus render DPI.
- **Step 3** — Each page is rendered, converted pixel by pixel, and rebuilt into a print-friendly PDF. Note: pages become images, so text is no longer selectable — the trade-off for cheap printing.

## Everyday uses

- **Teachers** — print class handouts without draining the color cartridge.
- **Students** — cheap draft prints of long readings and slides.
- **Offices** — archive-friendly B&W copies of invoices and contracts.
- **Anyone** — True B&W mode makes scanned documents dramatically smaller too.

**Rule of thumb:** use Grayscale for photos and diagrams you still want to read clearly; use True B&W with threshold ~140 for text-heavy scans.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/pdf-grayscale-converter.md tool_name=read]
