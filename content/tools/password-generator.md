---
title: "Free Password Generator"
description: "Generate strong, random passwords instantly. Choose the length and character types — free, no sign-up, everything stays in your browser."
date: 2026-09-29
draft: false
---

## How it works

Pick a length, choose which characters to include, and hit generate. Your password is created locally in your browser — it never leaves your device.

<div class="calc">
  <label for="pwLength">Password length: <strong id="pwLenLabel">16</strong></label>
  <input type="range" id="pwLength" min="8" max="64" value="16" oninput="document.getElementById('pwLenLabel').textContent=this.value">
  <div style="margin:0.75rem 0;">
    <label style="display:block;font-weight:normal;"><input type="checkbox" id="pwUpper" checked> Uppercase letters (A–Z)</label>
    <label style="display:block;font-weight:normal;"><input type="checkbox" id="pwLower" checked> Lowercase letters (a–z)</label>
    <label style="display:block;font-weight:normal;"><input type="checkbox" id="pwDigits" checked> Numbers (0–9)</label>
    <label style="display:block;font-weight:normal;"><input type="checkbox" id="pwSymbols" checked> Symbols (!@#$…)</label>
  </div>
  <button onclick="genPassword()">Generate password</button>
  <button onclick="copyPassword()" style="background:#2f9e6e;">Copy</button>
  <div class="result" id="pwResult" style="word-break:break-all;font-family:monospace;"></div>
</div>

<script>
function genPassword() {
  var len = parseInt(document.getElementById('pwLength').value, 10);
  var sets = [];
  if (document.getElementById('pwUpper').checked) sets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if (document.getElementById('pwLower').checked) sets.push('abcdefghijklmnopqrstuvwxyz');
  if (document.getElementById('pwDigits').checked) sets.push('0123456789');
  if (document.getElementById('pwSymbols').checked) sets.push('!@#$%^&*()-_=+[]{};:,.<>?');
  var out = document.getElementById('pwResult');
  if (!sets.length) { out.innerHTML = '<p>Select at least one character type.</p>'; return; }
  var pool = sets.join('');
  var buf = new Uint32Array(len);
  window.crypto.getRandomValues(buf);
  var pw = '';
  for (var i = 0; i < len; i++) pw += pool[buf[i] % pool.length];
  out.innerHTML = '<p><strong>Your password:</strong></p><p style="font-size:1.15rem;">' + pw.replace(/&/g,'&amp;').replace(/</g,'&lt;') + '</p>';
  out.dataset.pw = pw;
}
function copyPassword() {
  var out = document.getElementById('pwResult');
  if (!out.dataset.pw) return;
  navigator.clipboard.writeText(out.dataset.pw).then(function(){
    out.innerHTML += '<p style="color:#0b6e4f;"><strong>Copied!</strong></p>';
  });
}
</script>

## Tips for strong passwords

- **Longer beats complex:** a 16+ character password is far harder to crack than an 8-character one.
- **Unique everywhere:** never reuse passwords across sites — use a password manager to remember them.
- **Turn on 2FA:** even the strongest password is safer with two-factor authentication enabled.
