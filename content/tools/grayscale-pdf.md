---
title: "Free Grayscale PDF — Convert PDF to Black & White Online"
description: "Convert a color PDF to grayscale (black & white) in your browser — the file often shrinks too. Free and private; your document never leaves your device."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Color PDFs waste ink and file size when all you need is the content. This tool renders every page, converts it to grayscale, and rebuilds it as a clean black-and-white PDF — all in your browser. Grayscale files often come out smaller than the original, and they print with black ink only. Two honest trade-offs: pages become images (text is no longer selectable), and photos lose their color by design — that's the point.

<div class="tool-shell" id="gryShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Grayscale PDF Converter</h2>
<p>Turn any color PDF black &amp; white — cheaper to print, often smaller to send.</p>
</div>
<button type="button" class="theme-toggle" id="gryTheme">🌙 Dark</button>
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
<div class="dropzone" id="gryDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="gryFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="gryList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Output quality</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="gryDpi">Render quality</label>
<select id="gryDpi">
<option value="150" selected>150 DPI — lightest file</option>
<option value="200">200 DPI — balanced</option>
<option value="300">300 DPI — sharpest print</option>
</select>
<div class="hint">Higher DPI keeps small text crisp but makes a bigger file and converts slower — 300 DPI on long documents is heavy work for a browser tab.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gryBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg>
Convert to grayscale
</button>
<button type="button" class="btn-pro-outline" id="gryClear" disabled>Clear all</button>
</div>
<div class="progress-wrap" id="gryProgWrap">
<div class="progress-bar"><i id="gryProgBar"></i></div>
<div class="progress-text" id="gryProgText">Working…</div>
</div>
<div class="results" id="gryResults">
<p class="result-head">✅ Done — grayscale PDF ready</p>
<div class="result-summary" id="grySummary"></div>
<div class="result-grid" id="gryGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — convert as many PDFs as you like, as often as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('gryShell');
  ToolPro.themeToggle(shell, document.getElementById('gryTheme'));
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  var listEl = document.getElementById('gryList');
  var btn = document.getElementById('gryBtn');
  var clearBtn = document.getElementById('gryClear');
  var dpiSel = document.getElementById('gryDpi');
  var progWrap = document.getElementById('gryProgWrap');
  var progBar = document.getElementById('gryProgBar');
  var progText = document.getElementById('gryProgText');
  var resBox = document.getElementById('gryResults');
  var summaryEl = document.getElementById('grySummary');
  var grid = document.getElementById('gryGrid');

  var srcFile = null;
  var rowRef = null;
  var jsPdfOk = !!(window.jspdf && window.jspdf.jsPDF);

  function refreshButtons(){
    btn.disabled = !srcFile || !jsPdfOk;
    clearBtn.disabled = !srcFile;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18V4a8 8 0 0 1 0 16z"/></svg> Convert to grayscale' +
      (srcFile ? ' — ' + srcFile.name : '');
  }

  function resetAll(){
    srcFile = null;
    rowRef = null;
    listEl.innerHTML = '';
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.remove('show');
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('gryDrop'), {
    accept: 'application/pdf,.pdf',
    onFiles: function(arr){
      if(!arr.length) return;
      var f = arr[0];
      if(f.type && f.type !== 'application/pdf' && !/\.pdf$/i.test(f.name)){
        ToolPro.toast('That file is not a PDF.', 'err');
        return;
      }
      resetAll();
      srcFile = f;
      rowRef = ToolPro.fileRow(listEl, f, function(){ resetAll(); });
      rowRef.setStatus('Ready — ' + ToolPro.fmtBytes(f.size), 'done');
      refreshButtons();
      ToolPro.toast('PDF added', 'ok');
    }
  });

  clearBtn.addEventListener('click', resetAll);

  function readFile(file){
    return new Promise(function(resolve, reject){
      var r = new FileReader();
      r.onload = function(){ resolve(r.result); };
      r.onerror = reject;
      r.readAsArrayBuffer(file);
    });
  }

  btn.addEventListener('click', async function(){
    if(!srcFile || !jsPdfOk) return;
    var dpi = parseInt(dpiSel.value, 10);
    var scale = dpi / 72;
    var origSize = srcFile.size;
    var baseName = srcFile.name.replace(/\.pdf$/i, '');
    btn.disabled = true;
    grid.innerHTML = '';
    resBox.classList.remove('show');
    progWrap.classList.add('show');
    progBar.style.width = '0%';
    if(rowRef) rowRef.setStatus('Converting…', 'working');
    try {
      var buf = await readFile(srcFile);
      var pdf = await pdfjsLib.getDocument({ data: new Uint8Array(buf) }).promise;
      var total = pdf.numPages;
      var JPDF = window.jspdf.jsPDF;
      var doc = null;
      for(var n = 1; n <= total; n++){
        progText.textContent = 'Converting page ' + n + ' of ' + total + '…';
        var page = await pdf.getPage(n);
        var viewport = page.getViewport({ scale: scale });
        var canvas = document.createElement('canvas');
        canvas.width = Math.floor(viewport.width);
        canvas.height = Math.floor(viewport.height);
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        var img = ctx.getImageData(0, 0, canvas.width, canvas.height);
        var d = img.data;
        for(var i = 0; i < d.length; i += 4){
          var lum = Math.round(0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2]);
          d[i] = lum; d[i + 1] = lum; d[i + 2] = lum;
        }
        ctx.putImageData(img, 0, 0);
        var dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        var wMm = Math.round((viewport.width / scale) * 25.4 / 72 * 100) / 100;
        var hMm = Math.round((viewport.height / scale) * 25.4 / 72 * 100) / 100;
        var orient = wMm >= hMm ? 'landscape' : 'portrait';
        if(!doc){ doc = new JPDF({ orientation: orient, unit: 'mm', format: [wMm, hMm] }); }
        else { doc.addPage([wMm, hMm], orient); }
        doc.addImage(dataUrl, 'JPEG', 0, 0, wMm, hMm);
        progBar.style.width = Math.round(n / total * 100) + '%';
      }
      var blob = doc.output('blob');
      var outUrl = URL.createObjectURL(blob);
      var saved = origSize - blob.size;
      var savedText = saved > 0
        ? ' — ' + ToolPro.fmtBytes(saved) + ' smaller than the original'
        : ' — about the same size as the original this time';
      summaryEl.textContent = '🎉 ' + total + (total === 1 ? ' page' : ' pages') + ' converted to grayscale (' + ToolPro.fmtBytes(blob.size) + ')' + savedText + '. Pages are now images, so text is no longer selectable.';
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats">' + total + (total === 1 ? ' page' : ' pages') + ' · grayscale · ' + dpi + ' DPI · ' + ToolPro.fmtBytes(blob.size) + '</div>' +
        '<button type="button" class="btn-pro">⬇ Download grayscale PDF</button>';
      card.querySelector('.r-name').textContent = baseName + '-grayscale.pdf';
      card.querySelector('button').addEventListener('click', function(){ ToolPro.download(outUrl, baseName + '-grayscale.pdf'); });
      grid.appendChild(card);
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      if(rowRef) rowRef.setStatus('Done', 'done');
      ToolPro.toast('Grayscale PDF ready', 'ok');
    } catch(err){
      if(rowRef) rowRef.setStatus('Failed', '');
      ToolPro.toast('Conversion failed — the PDF may be damaged or password-protected.', 'err');
    }
    progWrap.classList.remove('show');
    btn.disabled = false;
    refreshButtons();
  });

  if(!jsPdfOk){
    ToolPro.toast('PDF library failed to load — check your connection and reload the page.', 'err');
  }
  refreshButtons();
})();
</script>

## Everyday uses

- **Cheaper printing** — black-only output uses no color ink or toner on home and office printers.
- **Email size limits** — grayscale rebuilds often come out smaller, slipping under attachment caps.
- **Forms &amp; documents** — many offices prefer black-and-white copies for records and archives.
- **Reading comfort** — colorful slides and charts can be easier on the eyes as clean grayscale pages.

## Frequently asked questions

**Will the grayscale file always be smaller?**
Often, but not always. Color-heavy PDFs usually shrink; a mostly-text PDF that's already compact may stay about the same size. The tool tells you the before/after sizes honestly either way.

**Why can't I select text in the converted PDF?**
Pages are rendered to images and converted pixel by pixel, then rebuilt as a new PDF — so the output is image-based and text isn't selectable or searchable. Keep the original if you need live text; use our [PDF to text extractor](/tools/pdf-text-extractor/) to pull the words out first.

**What DPI should I choose?**
150 DPI is plenty for screen reading and the lightest file. Pick 200 DPI for a balance, and 300 DPI when the PDF will be printed and small text must stay crisp.
