---
title: "Free Base64 Encoder & Decoder — Encode Text and Files Online"
description: "Encode text and files to Base64 or decode Base64 back to text and files — instantly, in your browser. Free, no sign-up, Unicode-safe."
date: 2026-10-06
draft: false
---

Encode any text to Base64, decode Base64 back to readable text, or convert files to and from Base64 — all instantly in your browser. The encoding is Unicode-safe (emoji and non-Latin scripts work), and your files never leave your browser: everything is processed locally on your device.

## How it works

<div class="calc">
  <div>
    <label for="b64In">Text to encode (or Base64 to decode)</label>
    <textarea id="b64In" rows="5" placeholder="Type text here… or paste Base64 to decode" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);resize:vertical;"></textarea>
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;">
    <button type="button" onclick="b64Encode()">Encode to Base64</button>
    <button type="button" onclick="b64Decode()">Decode from Base64</button>
    <button type="button" onclick="b64Clear()" style="background:#6b7280;">Clear</button>
  </div>
  <p id="b64Err" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
  <div style="margin-top:.8rem;">
    <label for="b64Out">Result</label>
    <textarea id="b64Out" rows="5" readonly placeholder="Your result appears here…" style="width:100%;padding:.6rem;font-size:.95rem;border:1px solid var(--border);border-radius:6px;font-family:monospace;resize:vertical;background:#f9fafb;"></textarea>
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.6rem;align-items:center;">
    <button type="button" id="b64CopyBtn" onclick="b64Copy()">Copy result</button>
    <span id="b64Stats" style="font-size:.85rem;color:var(--muted);"></span>
  </div>
</div>

### Encode or decode a file

<div class="calc">
  <div>
    <label for="b64File">File → Base64</label>
    <input id="b64File" type="file" onchange="b64FileToBase64()" style="width:100%;padding:.4rem 0;">
    <p style="font-size:.85rem;color:var(--muted);margin:.3rem 0 0;">Pick any file to get its Base64 string (great for embedding images as data URIs). The file is read locally — it is never uploaded.</p>
  </div>
  <div style="margin-top:1rem;">
    <label for="b64FileName">Base64 → file (output file name)</label>
    <input id="b64FileName" type="text" value="decoded-file.bin" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);">
    <button type="button" onclick="b64Base64ToFile()" style="margin-top:.6rem;">Decode the result above and download it</button>
  </div>
</div>

<script>
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
  document.getElementById('b64Err').textContent = '';
  if (!t) { document.getElementById('b64Out').value = ''; document.getElementById('b64Stats').textContent = ''; return; }
  var out = b64e(t);
  document.getElementById('b64Out').value = out;
  document.getElementById('b64Stats').textContent = t.length + ' chars → ' + out.length + ' Base64 chars';
}
function b64Decode(){
  var t = document.getElementById('b64In').value.trim();
  document.getElementById('b64Err').textContent = '';
  if (!t) { document.getElementById('b64Out').value = ''; document.getElementById('b64Stats').textContent = ''; return; }
  if (!/^[A-Za-z0-9+/=_-]+$/.test(t)) {
    document.getElementById('b64Err').textContent = "That doesn't look like Base64 — it contains characters outside the Base64 alphabet.";
    return;
  }
  try {
    var out = b64d(t);
    document.getElementById('b64Out').value = out;
    document.getElementById('b64Stats').textContent = t.replace(/\s+/g, '').length + ' Base64 chars → ' + out.length + ' chars';
  } catch (e) {
    document.getElementById('b64Err').textContent = 'Invalid Base64 — check for typos or missing padding (=) at the end.';
  }
}
function b64Clear(){
  document.getElementById('b64In').value = '';
  document.getElementById('b64Out').value = '';
  document.getElementById('b64Stats').textContent = '';
  document.getElementById('b64Err').textContent = '';
}
function b64Copy(){
  var el = document.getElementById('b64Out');
  var btn = document.getElementById('b64CopyBtn');
  function done(){ btn.textContent = 'Copied ✓'; setTimeout(function(){ btn.textContent = 'Copy result'; }, 1500); }
  if (!el.value) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(el.value).then(done, function(){ el.select(); document.execCommand('copy'); done(); });
  } else {
    el.select(); document.execCommand('copy'); done();
  }
}
function b64FileToBase64(){
  var f = document.getElementById('b64File').files[0];
  if (!f) return;
  var r = new FileReader();
  r.onload = function(){
    var b64 = String(r.result).split(',')[1] || '';
    document.getElementById('b64Out').value = b64;
    document.getElementById('b64Stats').textContent = f.name + ' (' + f.size.toLocaleString() + ' bytes) → ' + b64.length.toLocaleString() + ' Base64 chars';
    document.getElementById('b64Err').textContent = '';
  };
  r.onerror = function(){ document.getElementById('b64Err').textContent = 'Could not read that file.'; };
  r.readAsDataURL(f);
}
function b64Base64ToFile(){
  var t = (document.getElementById('b64Out').value || document.getElementById('b64In').value).trim();
  document.getElementById('b64Err').textContent = '';
  if (!t) { document.getElementById('b64Err').textContent = 'Encode or paste some Base64 first.'; return; }
  try {
    var clean = t.replace(/\s+/g, '');
    var bin = atob(clean);
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    var name = (document.getElementById('b64FileName').value || 'decoded-file.bin').trim();
    var blob = new Blob([bytes], { type: 'application/octet-stream' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  } catch (e) {
    document.getElementById('b64Err').textContent = 'Invalid Base64 — check for typos or missing padding (=) at the end.';
  }
}
</script>

## Everyday uses

- **Embed images in HTML or CSS:** convert a small icon to Base64 and paste it as a `data:` URI — one less HTTP request, no separate image file to manage.
- **Debug API payloads:** decode the Base64 chunks you find in API responses, JWT tokens, and webhook payloads to see what they actually contain.
- **Prepare email attachments:** see exactly what Base64 an attachment becomes before it goes into a MIME message.
- **Share binary data as text:** turn any small file into plain text you can paste into a config file, a chat message, or a code comment.
- **Learn how encoding works:** type your name, an emoji, or a sentence and watch how UTF-8 bytes map to the Base64 alphabet — padding `=` included.
