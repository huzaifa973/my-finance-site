---
title: "Free Random Picker Wheel"
description: "Spin a colorful wheel to pick a random name or choice from your list. Fair random results, drawn live — perfect for raffles, classrooms and games."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

Type your names or choices — one per line — and the wheel draws itself with a colored slice for each entry. Spin it, watch it slow down, and the pointer picks a fair random winner.

<div class="tool-shell" id="pwShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.73-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Random Picker Wheel</h2>
<p>Spin the wheel, pick a winner — fair, random &amp; fun.</p>
</div>
<button type="button" class="theme-toggle" id="pwTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your names or choices</p>
<div class="setting">
<label for="pwNames">Entries (one per line)</label>
<textarea id="pwNames" class="tool-input" rows="6" style="width:100%;">Alice
Bob
Carol
David
Emma
Frank</textarea>
<div class="hint">Add at least 2 entries. The wheel redraws itself as you type.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Spin the wheel</p>
<div style="text-align:center;">
<div><svg width="26" height="18" viewBox="0 0 26 18"><path d="M1 1h24L13 17z" fill="#e74c3c" stroke="rgba(0,0,0,.25)"/></svg></div>
<canvas id="pwCanvas" width="300" height="300" style="max-width:100%;height:auto;"></canvas>
</div>
<div class="tool-actions" style="justify-content:center;">
<button type="button" class="btn-pro" id="pwSpin">
<svg viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.73-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
Spin the wheel
</button>
<button type="button" class="btn-pro-outline" id="pwRemove">Remove winner &amp; spin again</button>
</div>
<div class="results" id="pwResults">
<p class="result-head">🏆 The wheel has spoken</p>
<div class="result-summary" id="pwResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — spin as many times as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('pwShell');
  ToolPro.themeToggle(shell, document.getElementById('pwTheme'));
  var namesEl = document.getElementById('pwNames');
  var canvas = document.getElementById('pwCanvas');
  var ctx = canvas.getContext('2d');
  var resBox = document.getElementById('pwResults');
  var out = document.getElementById('pwResult');
  var colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#e84393', '#00b894', '#6c5ce7', '#d63031', '#0984e3'];
  var rotation = 0;
  var spinning = false;
  var lastWinner = -1;

  function getNames(){
    return namesEl.value.split('\n').map(function(s){ return s.trim(); }).filter(function(s){ return s.length > 0; });
  }
  function draw(highlight){
    var names = getNames();
    var W = canvas.width, C = W / 2, R = C - 6;
    ctx.clearRect(0, 0, W, W);
    if (!names.length) {
      ctx.fillStyle = 'rgba(127,127,127,.25)';
      ctx.beginPath(); ctx.arc(C, C, R, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#888'; ctx.font = '600 14px sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Add some names', C, C);
      return;
    }
    var seg = Math.PI * 2 / names.length;
    for (var i = 0; i < names.length; i++) {
      var a0 = rotation + i * seg;
      var a1 = a0 + seg;
      ctx.beginPath();
      ctx.moveTo(C, C);
      ctx.arc(C, C, R, a0, a1);
      ctx.closePath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.lineWidth = i === highlight ? 5 : 2;
      ctx.strokeStyle = i === highlight ? '#ffd93b' : 'rgba(255,255,255,.85)';
      ctx.stroke();
      ctx.save();
      ctx.translate(C, C);
      ctx.rotate(a0 + seg / 2);
      ctx.textAlign = 'right';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.font = '600 13px sans-serif';
      var label = names[i].length > 14 ? names[i].slice(0, 13) + '…' : names[i];
      ctx.fillText(label, R - 10, 0);
      ctx.restore();
    }
    ctx.beginPath();
    ctx.arc(C, C, 16, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(0,0,0,.25)';
    ctx.stroke();
  }
  function winnerIndex(){
    var names = getNames();
    var seg = Math.PI * 2 / names.length;
    var pointer = -Math.PI / 2;
    var rel = (pointer - rotation) % (Math.PI * 2);
    if (rel < 0) rel += Math.PI * 2;
    return Math.floor(rel / seg) % names.length;
  }
  function spin(){
    var names = getNames();
    if (names.length < 2) {
      ToolPro.toast('Add at least 2 names first', 'err');
      return;
    }
    if (spinning) return;
    spinning = true;
    lastWinner = -1;
    var startRot = rotation;
    var extra = Math.PI * 10 + Math.random() * Math.PI * 2;
    var duration = 4200;
    var t0 = null;
    function frame(ts){
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      rotation = startRot + extra * eased;
      draw(-1);
      if (p < 1) {
        requestAnimationFrame(frame);
      } else {
        spinning = false;
        lastWinner = winnerIndex();
        draw(lastWinner);
        var name = getNames()[lastWinner];
        out.innerHTML = '<p style="font-size:1.7rem;">Winner: <strong>' + name.replace(/</g, '&lt;') + '</strong></p>';
        resBox.classList.add('show');
        resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        ToolPro.toast('Winner: ' + name, 'ok');
      }
    }
    requestAnimationFrame(frame);
  }

  namesEl.addEventListener('input', function(){ lastWinner = -1; draw(-1); });
  document.getElementById('pwSpin').addEventListener('click', spin);
  document.getElementById('pwRemove').addEventListener('click', function(){
    if (spinning) return;
    if (lastWinner < 0) {
      ToolPro.toast('Spin first, then remove the winner', 'err');
      return;
    }
    var names = getNames();
    names.splice(lastWinner, 1);
    namesEl.value = names.join('\n');
    lastWinner = -1;
    draw(-1);
    if (names.length < 2) {
      out.innerHTML = '<p>Only one entry left — no more spinning. Add more names to keep going.</p>';
      resBox.classList.add('show');
      ToolPro.toast('One entry left');
      return;
    }
    spin();
  });
  draw(-1);
})();
</script>

## Everyday uses

- **Giveaways and raffles:** pick a winner from entrants in front of everyone — visibly fair.
- **Classrooms:** choose which student answers next, presents first, or picks the next activity.
- **Family decisions:** movie night, dinner choice, or whose turn it is — let the wheel end the debate.
- **Games and streams:** random challenges, dares, or prize wheels for live audiences.

## Frequently asked questions

**Is the winner really random?**
Yes. The spin distance is randomized every time and each entry gets an equal-sized slice, so every name has the same chance of winning.

**How many names can I add?**
As many as you like — the wheel keeps splitting into equal slices. Very long names are shortened on the wheel so they stay readable.

**Does the wheel remember my list?**
Only while this page is open. Nothing is saved or sent anywhere, so your list stays completely private.
