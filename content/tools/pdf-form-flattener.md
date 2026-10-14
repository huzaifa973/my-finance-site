---
title: "Free PDF Form Flattener — Make Fillable Forms Uneditable"
description: "Flatten PDF form fields into static text right in your browser. Lock fillable forms so they can't be edited. Free, private — your files never leave your device."
category: pdf
date: 2026-10-14
draft: false
---

Got a fillable PDF form you need to lock down before sending? Flattening bakes the form fields into the page itself, so the text stays but nobody can click, edit, or clear it. Perfect for signed applications, completed tax forms, or contracts you're about to email. It all happens in your browser — your documents never leave your device.

<div class="tool-shell" id="pffShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>PDF Form Flattener</h2>
<p>Lock fillable PDFs — fields become permanent page text that can't be edited or cleared.</p>
</div>
<button type="button" class="theme-toggle" id="pffTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your fillable PDF</p>
<div class="dropzone" id="pffDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a PDF here</strong>
<span>or click to browse — .pdf only</span>
<input type="file" id="pffFile" accept="application/pdf,.pdf">
</div>
<ul class="file-list" id="pffList"></ul>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Flatten settings</p>
<div class="settings-panel">
<div class="preset-row" id="pffPresets">
<button type="button" class="preset-chip active" data-streams="1">⚙️ Recommended — compressed output</button>
<button type="button" class="preset-chip" data-streams="0">📦 Larger compatibility file</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="pffName">Output filename</label>
<input type="text" id="pffName" class="tool-input" value="flattened.pdf">
<div class="hint">Tip: keep the original filename and add "-locked" so you know it's final.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Flatten &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="pffBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
Flatten PDF
</button>
<button type="button" class="btn-pro-outline" id="pffClear" disabled>Clear</button>
</div>
<div class="progress-wrap" id="pffProgWrap">
<div class="progress-bar"><i id="pffProgBar"></i></div>
<div class="progress-text" id="pffProgText">Working…</div>
</div>
<div class="results" id="pffResults">
<p class="result-head">✅ Flattened — your PDF is now uneditable</p>
<div class="result-summary" id="pffSummary"></div>
<div class="result-grid" id="pffGrid"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — flatten as many forms as you like. Your files never leave your browser.</p>
</div>
</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('pffShell');
  ToolPro.themeToggle(shell, document.getElementById('pffTheme'));

  var file = null, listEl = document.getElementById('pffList');
  var btn = document.getElementById('pffBtn');
  var clearBtn = document.getElementById('pffClear');
  var presets = document.getElementById('pffPresets');
  var useStreams = true;

  presets.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    useStreams = chip.dataset.streams === '1';
    ToolPro.toast('Preset applied: ' + chip.textContent.trim());
  });

  function refreshButtons(){
    btn.disabled = !file;
    clearBtn.disabled = !file;
  }

  ToolPro.dropzone(document.getElementById('pffDrop'), {
    multiple: false, accept: 'application/pdf,.pdf', maxFiles: 1,
    onFiles: function(arr){
      if(!arr.length) return;
      file = arr[0];
      listEl.innerHTML = '';
      ToolPro.fileRow(listEl, file, function(){ file = null; refreshButtons(); });
      document.getElementById('pffResults').classList.remove('show');
      refreshButtons();
      ToolPro.toast('PDF loaded — ready to flatten', 'ok');
    }
  });

  clearBtn.addEventListener('click', function(){
    file = null; listEl.innerHTML = '';
    document.getElementById('pffResults').classList.remove('show');
    refreshButtons();
  });

  btn.addEventListener('click', async function(){
    if(!file) return;
    var progWrap = document.getElementById('pffProgWrap');
    var progBar = document.getElementById('pffProgBar');
    var progText = document.getElementById('pffProgText');
    var grid = document.getElementById('pffGrid');
    var resBox = document.getElementById('pffResults');
    btn.disabled = true;
    progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
    function prog(p, t){ progBar.style.width = Math.round(p) + '%'; progText.textContent = t; }

    try{
      prog(15, 'Reading PDF…');
      var buf = await file.arrayBuffer();
      var doc = await PDFLib.PDFDocument.load(buf, { ignoreEncryption: true });
      var pages = doc.getPageCount();
      prog(40, 'Flattening form fields…');
      var form = doc.getForm();
      var fields = form.getFields();
      var fieldCount = fields.length;
      form.flatten();
      prog(70, 'Saving flattened PDF…');
      var out = await doc.save({ useObjectStreams: useStreams, addDefaultPage: false });
      prog(95, 'Finishing…');

      var blob = new Blob([out], { type: 'application/pdf' });
      var url = URL.createObjectURL(blob);
      var base = file.name.replace(/\.pdf$/i, '');
      var fname = base + '-flattened.pdf';
      var sizeDiff = file.size - out.length;
      var card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML =
        '<div class="r-name"></div>' +
        '<div class="r-stats"></div>' +
        '<button type="button" class="btn-pro">⬇ Download Flattened PDF</button>';
      card.querySelector('.r-name').textContent = fname;
      card.querySelector('.r-name').title = fname;
      card.querySelector('.r-stats').innerHTML =
        '📄 ' + pages + (pages === 1 ? ' page' : ' pages') + ' · 🧾 ' +
        fieldCount + (fieldCount === 1 ? ' field' : ' fields') + ' flattened<br>' +
        ToolPro.fmtBytes(file.size) + ' → <b>' + ToolPro.fmtBytes(out.length) + '</b>' +
        (sizeDiff > 0 ? ' (' + ToolPro.fmtBytes(sizeDiff) + ' smaller)' : '');
      card.querySelector('button').addEventListener('click', function(){
        var name = (document.getElementById('pffName').value || fname).trim();
        if(!/\.pdf$/i.test(name)) name += '.pdf';
        ToolPro.download(url, name);
      });
      grid.appendChild(card);
      document.getElementById('pffSummary').textContent =
        '🎉 ' + fieldCount + (fieldCount === 1 ? ' field' : ' fields') +
        ' flattened across ' + pages + (pages === 1 ? ' page' : ' pages') +
        ' — the form is now uneditable static text.';
      prog(100, 'Done');
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      ToolPro.toast('Form flattened', 'ok');
    }catch(err){
      progWrap.classList.remove('show');
      document.getElementById('pffSummary').textContent = '';
      ToolPro.toast('Flatten failed: ' + (err && err.message ? err.message : err) + ' — password-protected or damaged PDFs may not flatten.', 'err');
    }
    btn.disabled = false;
  });

  refreshButtons();
})();
</script>

## How it works

- **Step 1** — Drop in the fillable PDF. It's read straight into your browser's memory — nothing is uploaded.
- **Step 2** — Pick an output style and filename.
- **Step 3** — Hit **Flatten PDF**. The tool bakes every field's value into the page artwork and removes the interactive layer, then gives you a before/after size report.

## Everyday uses

- **Completed applications** — lock a filled-out job or visa form before emailing so nothing shifts or clears.
- **Signed contracts** — flatten after signing so the other party can't quietly edit amounts or dates.
- **Tax &amp; finance forms** — finalize W-9s, invoices, and declarations into uneditable records.
- **School &amp; university** — freeze filled registration and enrollment forms before submission.
- **Legal paperwork** — produce tamper-evident versions of affidavits and intake forms.

## Frequently asked questions

**Does flattening change how the form looks?**
No. All the filled-in values stay exactly where they are — the tool just converts them from editable fields into permanent page text.

**Can someone still edit the flattened PDF?**
Not the field values — they're no longer fields at all. Like any PDF, the page can still be annotated or the whole file converted, but accidental edits and cleared fields are gone.

**My PDF says it has no fields. What happened?**
Some PDFs look like forms but are already static (scanned or exported flat). The tool will tell you how many fields it found — zero means there was nothing to flatten.

**Is my document private?**
Yes. Everything runs locally in your browser. Your files never leave your browser, and nothing is stored anywhere.
