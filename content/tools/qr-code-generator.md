---
title: "Free QR Code Generator"
description: "Create a QR code instantly from any link or text. Free QR generator — no sign-up, no watermark, download not needed."
date: 2026-09-29
draft: false
---

## How it works

Type or paste any link or text below and hit generate. Your QR code appears instantly — screenshot it or print the page to keep it.

<div class="calc">
  <label for="qrText">Link or text</label>
  <input type="text" id="qrText" placeholder="https://example.com" style="width:100%;">
  <button onclick="genQR()">Generate QR code</button>
  <div class="result" id="qrResult" style="display:flex;justify-content:center;padding:1rem;"></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
<script>
function genQR() {
  var text = document.getElementById('qrText').value.trim();
  var box = document.getElementById('qrResult');
  box.innerHTML = '';
  if (!text) { box.innerHTML = '<p>Enter a link or some text first.</p>'; return; }
  new QRCode(box, { text: text, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M });
  var note = document.createElement('p');
  note.style.cssText = 'width:100%;text-align:center;color:#6b7672;font-size:.85rem;margin-top:.5rem;';
  note.textContent = 'Tip: right-click / long-press the code to save it as an image.';
  box.appendChild(note);
}
</script>

## Where QR codes come in handy

- **Small business:** link a QR code to your menu, booking page, or reviews profile.
- **Events:** put one on invitations linking to the venue map or RSVP form.
- **Wi-Fi sharing:** encode your Wi-Fi details so guests join without typing the password.

Want to see how it's built? Read our [QR code generator mini-project in JavaScript](/code/qr-code-generator-javascript-project/) with full source code.
