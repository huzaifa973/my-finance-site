---
title: "Free QR Code Generator"
description: "Create a QR code instantly from any link or text. Free QR generator — no sign-up, no watermark, download not needed."
category: everyday
date: 2026-09-29
draft: false
---

## How it works

Type or paste any link or text below and hit generate. Your QR code appears instantly — download it as a PNG or screenshot it to keep.

<div class="tool-shell" id="qrShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 12h-4v-2h2v-2h-4v4h-2v-6h8v6zm-4-8h4v4h-4v-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>QR Code Generator</h2>
<p>Turn any link or text into a scannable QR code — free, no watermark.</p>
</div>
<button type="button" class="theme-toggle" id="qrTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your link or text</p>
<div class="setting">
<label for="qrText">Link or text</label>
<input type="text" id="qrText" class="tool-input" placeholder="https://example.com">
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Code settings</p>
<div class="settings-panel">
<div class="preset-row" id="qrPresets">
<button type="button" class="preset-chip" data-size="160">🔹 Small (160px)</button>
<button type="button" class="preset-chip active" data-size="220">🔸 Medium (220px)</button>
<button type="button" class="preset-chip" data-size="320">🔶 Large (320px)</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="qrSize">Code size</label>
<select id="qrSize" class="tool-input">
<option value="160">Small — 160px</option>
<option value="220" selected>Medium — 220px</option>
<option value="320">Large — 320px</option>
</select>
<div class="hint">Larger codes stay scannable on printed posters and flyers.</div>
</div>
<div class="setting">
<label for="qrLevel">Error correction</label>
<select id="qrLevel" class="tool-input">
<option value="L">L — 7% (smallest)</option>
<option value="M" selected>M — 15% (recommended)</option>
<option value="Q">Q — 25%</option>
<option value="H">H — 30% (survives damage)</option>
</select>
<div class="hint">Higher levels survive scratches and logos — at slightly lower capacity.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Generate &amp; download</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="qrBtn">
<svg viewBox="0 0 24 24"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8-12v8h8V3h-8zm6 6h-4V5h4v4zm0 12h-4v-2h2v-2h-4v4h-2v-6h8v6zm-4-8h4v4h-4v-4z"/></svg>
Generate QR code
</button>
<button type="button" class="btn-pro-outline" id="qrDownload" disabled>⬇ Download PNG</button>
</div>
<div class="results" id="qrResults">
<div class="result-card" style="text-align:center;">
<div id="qrResult" style="display:flex;justify-content:center;align-items:center;min-height:120px;"></div>
<p class="hint" style="margin-top:.5rem;">Tip: right-click / long-press the code to save it as an image.</p>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — generate as many QR codes as you like.</p>
</div>
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

<script>
(function(){
  var shell = document.getElementById('qrShell');
  ToolPro.themeToggle(shell, document.getElementById('qrTheme'));

  var sizeSel = document.getElementById('qrSize');
  var levelSel = document.getElementById('qrLevel');
  var box = document.getElementById('qrResult');
  var resBox = document.getElementById('qrResults');
  var dlBtn = document.getElementById('qrDownload');

  document.getElementById('qrPresets').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    document.querySelectorAll('#qrPresets .preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    sizeSel.value = chip.dataset.size;
    genQR();
    ToolPro.toast('Size set to ' + chip.dataset.size + 'px');
  });
  sizeSel.addEventListener('change', function(){
    document.querySelectorAll('#qrPresets .preset-chip').forEach(function(c){
      c.classList.toggle('active', c.dataset.size === sizeSel.value);
    });
  });

  function genQR() {
    var text = document.getElementById('qrText').value.trim();
    box.innerHTML = '';
    dlBtn.disabled = true;
    if (!text) { resBox.classList.remove('show'); ToolPro.toast('Enter a link or some text first.', 'err'); return; }
    var size = parseInt(sizeSel.value, 10);
    new QRCode(box, {
      text: text,
      width: size,
      height: size,
      correctLevel: QRCode.CorrectLevel[levelSel.value] || QRCode.CorrectLevel.M
    });
    dlBtn.disabled = false;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('QR code generated', 'ok');
  }

  document.getElementById('qrBtn').addEventListener('click', genQR);

  dlBtn.addEventListener('click', function(){
    var img = box.querySelector('img');
    var canvas = box.querySelector('canvas');
    var url = img ? img.src : (canvas ? canvas.toDataURL('image/png') : null);
    if(!url){ ToolPro.toast('Nothing to download yet', 'err'); return; }
    ToolPro.download(url, 'qr-code.png');
    ToolPro.toast('QR code downloaded', 'ok');
  });
})();
</script>

## Where QR codes come in handy

- **Small business:** link a QR code to your menu, booking page, or reviews profile.
- **Events:** put one on invitations linking to the venue map or RSVP form.
- **Wi-Fi sharing:** encode your Wi-Fi details so guests join without typing the password.

Want to see how it's built? Read our [QR code generator mini-project in JavaScript](/code/qr-code-generator-javascript-project/) with full source code.
