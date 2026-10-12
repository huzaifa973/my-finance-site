---
title: "Free PDF Page Reorder — Rearrange PDF Pages Online"
description: "Rearrange PDF pages in your browser: shuffle the page order with arrows or type it in, then download the reordered PDF. Free, private, no sign-up."
category: pdf
date: 2026-10-12
draft: false
---

## How it works

Pages in the wrong order? Load your PDF, move pages up or down with the arrow buttons — or type the exact new order, like `3,1,2` — and download a rebuilt PDF with the pages in your order. Everything happens in your browser with the pdf-lib library; your document is never uploaded anywhere.

<div class="tool-shell" id="reoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Reorder PDF Pages</h2>
<p>Put your PDF pages in any order — arrows or a typed list — and download the rebuilt file.</p>
</div>
<button type="button" class="theme-toggle" id="reoTheme">🌙 Dark</button>
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
<div class="dropzone" id="reoDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="reoFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="reoList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Arrange the pages</p>
<p id="reoCount">No PDF loaded yet.</p>
<div id="reoOrder"></div>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="reoOrderText">Or type the full order</label>
<input type="text" id="reoOrderText" class="tool-input" placeholder="e.g. 3,1,2,4">
<div class="hint">List every page number exactly once, separated by commas — the first number becomes page 1.</div>
</div>
<div class="setting">
<label for="reoName">Output filename</label>
<input type="text" id="reoName" class="tool-input" value="reordered.pdf">
<div class="hint">The name your reordered PDF downloads with.</div>
</div>
</div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro-outline" id="reoApply" disabled>Apply typed order</button>
<button type="button" class="btn-pro-outline" id="reoReset" disabled>Reset to 1, 2, 3…</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Build &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="reoBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
Build reordered PDF
</button>
<button type="button" class="btn-pro-outline" id="reoClear" disabled>Clear all</button>
</div>
<div class="results" id="reoResults">
<p class="result-head">✅ Reordered — your PDF is ready</p>
<div class="result-summary" id="reoStatus"></div>
<div class="tool-actions" style="margin-top:.8rem;">
<button type="button" class="btn-pro" id="reoDownload">
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Download reordered PDF
</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — reorder as many PDFs as you like, as often as you like.</p>
</div>
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('reoShell');
  ToolPro.themeToggle(shell, document.getElementById('reoTheme'));

  var listEl = document.getElementById('reoList');
  var orderEl = document.getElementById('reoOrder');
  var countEl = document.getElementById('reoCount');
  var orderText = document.getElementById('reoOrderText');
  var applyBtn = document.getElementById('reoApply');
  var resetBtn = document.getElementById('reoReset');
  var btn = document.getElementById('reoBtn');
  var clearBtn = document.getElementById('reoClear');
  var resBox = document.getElementById('reoResults');
  var statusEl = document.getElementById('reoStatus');

  var srcBytes = null;
  var pageCount = 0;
  var order = [];
  var outUrl = null;

  function refreshButtons(){
    var loaded = pageCount > 0;
    btn.disabled = !loaded;
    clearBtn.disabled = !loaded;
    applyBtn.disabled = !loaded;
    resetBtn.disabled = !loaded;
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg> Build reordered PDF' +
      (loaded ? ' — ' + pageCount + (pageCount === 1 ? ' page' : ' pages') : '');
  }

  function renderOrder(){
    if(!pageCount){
      countEl.textContent = 'No PDF loaded yet.';
      orderEl.innerHTML = '';
      return;
    }
    countEl.textContent = pageCount + (pageCount === 1 ? ' page' : ' pages') + ' — current order: ' +
      order.map(function(p){ return p + 1; }).join(', ');
    orderEl.innerHTML = '';
    order.forEach(function(pageIdx, pos){
      var row = document.createElement('div');
      row.className = 'file-row';
      var upDis = pos === 0 ? ' disabled' : '';
      var dnDis = pos === order.length - 1 ? ' disabled' : '';
      row.innerHTML =
        '<span class="file-ic">PDF</span>' +
        '<span class="file-name">Page ' + (pageIdx + 1) + '</span>' +
        '<span class="file-status">position ' + (pos + 1) + ' of ' + pageCount + '</span>' +
        '<button type="button" class="move-up" title="Move earlier"' + upDis + '>↑</button>' +
        '<button type="button" class="move-down" title="Move later"' + dnDis + '>↓</button>';
      row.querySelector('.move-up').addEventListener('click', function(){
        if(pos > 0){ var t = order[pos - 1]; order[pos - 1] = order[pos]; order[pos] = t; resBox.classList.remove('show'); renderOrder(); }
      });
      row.querySelector('.move-down').addEventListener('click', function(){
        if(pos < order.length - 1){ var t = order[pos + 1]; order[pos + 1] = order[pos]; order[pos] = t; resBox.classList.remove('show'); renderOrder(); }
      });
      orderEl.appendChild(row);
    });
  }

  function resetAll(){
    srcBytes = null;
    pageCount = 0;
    order = [];
    listEl.innerHTML = '';
    orderText.value = '';
    resBox.classList.remove('show');
    if(outUrl){ URL.revokeObjectURL(outUrl); outUrl = null; }
    renderOrder();
    refreshButtons();
  }

  ToolPro.dropzone(document.getElementById('reoDrop'), {
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
          order = [];
          for(var i = 0; i < pageCount; i++) order.push(i);
          var row = ToolPro.fileRow(listEl, f, function(){ resetAll(); });
          row.setStatus('Loaded — ' + pageCount + (pageCount === 1 ? ' page' : ' pages'), 'done');
          renderOrder();
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

  applyBtn.addEventListener('click', function(){
    if(!pageCount) return;
    var raw = orderText.value.trim();
    if(!raw){ ToolPro.toast('Type an order first, e.g. 3,1,2', 'err'); return; }
    var parts = raw.split(/[\s,]+/).filter(function(s){ return s.length; });
    var nums = parts.map(function(s){ return parseInt(s, 10); });
    if(nums.length !== pageCount){
      ToolPro.toast('Order must list all ' + pageCount + ' pages — you listed ' + nums.length + '.', 'err');
      return;
    }
    var seen = {};
    for(var i = 0; i < nums.length; i++){
      if(isNaN(nums[i]) || nums[i] < 1 || nums[i] > pageCount){
        ToolPro.toast('"' + parts[i] + '" is not a page between 1 and ' + pageCount + '.', 'err');
        return;
      }
      if(seen[nums[i]]){
        ToolPro.toast('Page ' + nums[i] + ' appears twice — list each page once.', 'err');
        return;
      }
      seen[nums[i]] = true;
    }
    order = nums.map(function(n){ return n - 1; });
    resBox.classList.remove('show');
    renderOrder();
    ToolPro.toast('Order applied', 'ok');
  });

  resetBtn.addEventListener('click', function(){
    if(!pageCount) return;
    order = [];
    for(var i = 0; i < pageCount; i++) order.push(i);
    orderText.value = '';
    resBox.classList.remove('show');
    renderOrder();
    ToolPro.toast('Order reset to the original', 'ok');
  });

  clearBtn.addEventListener('click', resetAll);

  btn.addEventListener('click', function(){
    if(!pageCount || !srcBytes) return;
    btn.disabled = true;
    statusEl.textContent = 'Building your reordered PDF…';
    resBox.classList.add('show');
    PDFLib.PDFDocument.load(srcBytes.slice(0), { ignoreEncryption: true }).then(function(src){
      return PDFLib.PDFDocument.create().then(function(out){
        return out.copyPages(src, order).then(function(pages){
          pages.forEach(function(p){ out.addPage(p); });
          return out.save();
        });
      });
    }).then(function(bytes){
      var blob = new Blob([bytes], { type: 'application/pdf' });
      if(outUrl) URL.revokeObjectURL(outUrl);
      outUrl = URL.createObjectURL(blob);
      statusEl.textContent = 'Done! ' + pageCount + (pageCount === 1 ? ' page' : ' pages') + ' in your new order (' + ToolPro.fmtBytes(bytes.length) + '). New order: ' +
        order.map(function(p){ return p + 1; }).join(', ') + '.';
      btn.disabled = false;
      ToolPro.toast('Reordered PDF built', 'ok');
    }).catch(function(err){
      statusEl.textContent = 'Build failed: ' + err + '. Password-protected or damaged PDFs may not work.';
      btn.disabled = false;
      ToolPro.toast('Build failed', 'err');
    });
  });

  document.getElementById('reoDownload').addEventListener('click', function(){
    if(!outUrl) return;
    var name = (document.getElementById('reoName').value || 'reordered.pdf').trim();
    if(!/\.pdf$/i.test(name)) name += '.pdf';
    ToolPro.download(outUrl, name);
  });

  renderOrder();
  refreshButtons();
})();
</script>

## Everyday uses

- **Scanned documents** — scanner apps often save pages in a jumbled order; put them back in sequence.
- **Signed contracts** — move the signature page where it belongs before sending the file on.
- **Reports &amp; assignments** — pull the appendix forward, push the cover page to the front, or fix a mis-merged export.
- **Booklets &amp; chapters** — reassemble chapter PDFs exported in the wrong order into reading order.

## Frequently asked questions

**Does reordering change the page content?**
No. Pages are copied exactly as they are — same text, images, and quality. Only their order in the file changes.

**Can I delete or duplicate pages while reordering?**
This tool keeps every page exactly once, in the order you choose. To remove pages, pair it with our free tool set — and to combine several PDFs into one file first, use the [merge PDF tool](/tools/merge-pdf/).

**Is my document private?**
Yes. The reordering happens locally in your browser using the pdf-lib library — your files never leave your browser and nothing is uploaded or stored anywhere.
