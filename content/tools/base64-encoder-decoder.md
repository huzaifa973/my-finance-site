---
title: "Free Base64 Encoder & Decoder — Encode Text and Files Online"
description: "Encode text and files to Base64 or decode Base64 back to text and files — instantly, in your browser. Free, no sign-up, Unicode-safe."
date: 2026-10-06
draft: false
---

Encode any text to Base64, decode Base64 back to readable text, or convert files to and from Base64 — all instantly in your browser. The encoding is Unicode-safe (emoji and non-Latin scripts work), and your files never leave your browser: everything is processed locally on your device.

## How it works

<div class="tool-shell" id="b64Shell" data-theme="light">

  <div class="tool-hero">
    <div class="tool-icon">
      <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
    </div>
    <div class="tool-hero-top">
      <div>
        <h2>Base64 Encoder &amp; Decoder</h2>
        <p>Encode text &amp; files to Base64 or decode them back — Unicode-safe, 100% in your browser.</p>
      </div>
      <button type="button" class="theme-toggle" id="b64Theme">🌙 Dark</button>
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
      <p class="tool-step-title"><span class="tool-step-num">1</span> Enter your text</p>
      <div class="setting">
        <label for="b64In">Text to encode (or Base64 to decode)</label>
        <textarea id="b64In" class="tool-input" rows="5" placeholder="Type text here… or paste Base64 to decode" style="resize:vertical;"></textarea>
        <div class="hint">Unicode-safe — emoji and non-Latin scripts work.</div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">2</span> Choose a mode or use a file</p>
      <div class="settings-panel">
        <div class="preset-row" id="b64Modes">
          <button type="button" class="preset-chip active" data-mode="encode">📝 Encode text → Base64</button>
          <button type="button" class="preset-chip" data-mode="decode">🔓 Decode Base64 → text</button>
        </div>
        <div class="settings-grid">
          <div class="setting">
            <label for="b64File">File → Base64</label>
            <input id="b64File" type="file" class="tool-input">
            <div class="hint">Pick any file to get its Base64 string (great for embedding images as data URIs). Read locally — never uploaded.</div>
          </div>
          <div class="setting">
            <label for="b64FileName">Base64 → file (output file name)</label>
            <input id="b64FileName" type="text" class="tool-input" value="decoded-file.bin">
            <div class="hint">Decodes the result above and downloads it under this name.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="tool-step">
      <p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; copy your result</p>
      <div class="tool-actions">
        <button type="button" class="btn-pro" id="b64GoBtn">
          <svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
          Convert
        </button>
        <button type="button" class="btn-pro-outline" id="b64CopyBtn">Copy result</button>
        <button type="button" class="btn-pro-outline" id="b64ClearBtn">Clear</button>
      </div>
      <p id="b64Err" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
      <div class="results show" id="b64Results">
        <p class="result-head">📋 Result</p>
        <textarea id="b64Out" class="tool-output" rows="5" readonly placeholder="Your result appears here…" style="resize:vertical;font-family:monospace;"></textarea>
        <div class="result-summary" style="display:flex;gap:.75rem;flex-wrap:wrap;align-items:center;margin-top:.6rem;">
          <span id="b64Stats" style="font-size:.85rem;"></span>
        </div>
        <div class="tool-actions" style="margin-top:.6rem;">
          <button type="button" class="btn-pro-outline" id="b64FileBtn">Decode the result above and download it</button>
        </div>
      </div>
    </div>

    <div class="free-banner">
      <strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
      <p>This tool runs entirely in your browser — encode and decode as much as you like, as often as you like.</p>
    </div>

  </div>
</div>

<script>
(function(){
  var shell = document.getElementById('b64Shell');
  ToolPro.themeToggle(shell, document.getElementById('b64Theme'));
  var mode = 'encode';
  var modeBox = document.getElementById('b64Modes');
  var errEl = document.getElementById('b64Err');

  modeBox.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    modeBox.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    mode = chip.dataset.mode;
    document.getElementById('b64GoBtn').innerHTML =
      '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg> ' +
      (mode === 'encode' ? 'Encode to Base64' : 'Decode from Base64');
  });

  function b64e(str){
    var bytes = new TextEncoder().encode(str);
    var bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  function b64d(b64){
    var clean = b64.replace(/\s+/g, '');
    var bin = atob(clean);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function b64Encode(){
    var t = document.getElementById('b64In').value;
    errEl.textContent = '';
    if (!t) { document.getElementById('b64Out').value = ''; document.getElementById('b64Stats').textContent = ''; return; }
    var out = b64e(t);
    document.getElementById('b64Out').value = out;
    document.getElementById('b64Stats').textContent = t.length + ' chars → ' + out.length + ' Base64 chars';
    ToolPro.toast('Encoded to Base64', 'ok');
  }
  function b64Decode(){
    var t = document.getElementById('b64In').value.trim();
    errEl.textContent = '';
    if (!t) { document.getElementById('b64Out').value = ''; document.getElementById('b64Stats').textContent = ''; return; }
    if (!/^[A-Za-z0-9+/=_-]+$/.test(t)) {
      errEl.textContent = "That doesn't look like Base64 — it contains characters outside the Base64 alphabet.";
      return;
    }
    try {
      var out = b64d(t);
      document.getElementById('b64Out').value = out;
      document.getElementById('b64Stats').textContent = t.replace(/\s+/g, '').length + ' Base64 chars → ' + out.length + ' chars';
      ToolPro.toast('Decoded from Base64', 'ok');
    } catch (e) {
      errEl.textContent = 'Invalid Base64 — check for typos or missing padding (=) at the end.';
    }
  }
  function b64Clear(){
    document.getElementById('b64In').value = '';
    document.getElementById('b64Out').value = '';
    document.getElementById('b64Stats').textContent = '';
    errEl.textContent = '';
  }
  function b64Copy(){
    var el = document.getElementById('b64Out');
    if (!el.value) return;
    ToolPro.copyText(el.value, 'Result copied to clipboard');
  }
  function b64FileToBase64(){
    var f = document.getElementById('b64File').files[0];
    if (!f) return;
    var r = new FileReader();
    r.onload = function(){
      var b64 = String(r.result).split(',')[1] || '';
      document.getElementById('b64Out').value = b64;
      document.getElementById('b64Stats').textContent = f.name + ' (' + f.size.toLocaleString() + ' bytes) → ' + b64.length.toLocaleString() + ' Base64 chars';
      errEl.textContent = '';
      ToolPro.toast('File converted to Base64', 'ok');
    };
    r.onerror = function(){ errEl.textContent = 'Could not read that file.'; };
    r.readAsDataURL(f);
  }
  function b64Base64ToFile(){
    var t = (document.getElementById('b64Out').value || document.getElementById('b64In').value).trim();
    errEl.textContent = '';
    if (!t) { errEl.textContent = 'Encode or paste some Base64 first.'; return; }
    try {
      var clean = t.replace(/\s+/g, '');
      var bin = atob(clean);
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      var name = (document.getElementById('b64FileName').value || 'decoded-file.bin').trim();
      var blob = new Blob([bytes], { type: 'application/octet-stream' });
      ToolPro.download(URL.createObjectURL(blob), name);
      ToolPro.toast('File downloaded', 'ok');
    } catch (e) {
      errEl.textContent = 'Invalid Base64 — check for typos or missing padding (=) at the end.';
    }
  }

  document.getElementById('b64GoBtn').addEventListener('click', function(){
    if (mode === 'encode') b64Encode(); else b64Decode();
  });
  document.getElementById('b64CopyBtn').addEventListener('click', b64Copy);
  document.getElementById('b64ClearBtn').addEventListener('click', b64Clear);
  document.getElementById('b64File').addEventListener('change', b64FileToBase64);
  document.getElementById('b64FileBtn').addEventListener('click', b64Base64ToFile);
})();
</script>

## Everyday uses

- **Embed images in HTML or CSS:** convert a small icon to Base64 and paste it as a `data:` URI — one less HTTP request, no separate image file to manage.
- **Debug API payloads:** decode the Base64 chunks you find in API responses, JWT tokens, and webhook payloads to see what they actually contain.
- **Prepare email attachments:** see exactly what Base64 an attachment becomes before it goes into a MIME message.
- **Share binary data as text:** turn any small file into plain text you can paste into a config file, a chat message, or a code comment.
- **Learn how encoding works:** type your name, an emoji, or a sentence and watch how UTF-8 bytes map to the Base64 alphabet — padding `=` included.
