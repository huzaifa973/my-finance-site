---
title: "Free Countdown Timer — Count Down to Any Date & Time"
description: "A free online countdown timer — name your event, pick a date and time, and watch the days, hours, minutes, and seconds tick down. No app, no sign-up."
date: 2026-10-06
draft: false
---

Name your event, pick a target date and time, and hit start — the timer counts down the days, hours, minutes, and seconds live in your browser tab. Everything runs locally; nothing is uploaded or stored anywhere.

## How it works

<div class="calc">
  <div>
    <label for="cdName">Event name</label>
    <input id="cdName" type="text" value="My event" maxlength="60" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);">
  </div>
  <div style="margin-top:.8rem;">
    <label for="cdDate">Target date &amp; time</label>
    <input id="cdDate" type="datetime-local" style="width:100%;padding:.6rem;font-size:1rem;border:1px solid var(--border);border-radius:6px;font-family:var(--font);">
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;">
    <button type="button" onclick="cdPresetHours(1)">In 1 hour</button>
    <button type="button" onclick="cdPresetHours(24)">In 24 hours</button>
    <button type="button" onclick="cdPresetHours(168)">In 7 days</button>
    <button type="button" onclick="cdPresetDate(2026,11,25,0,0,'Christmas 2026')">Christmas 2026</button>
    <button type="button" onclick="cdPresetDate(2027,0,1,0,0,'New Year 2027')">New Year 2027</button>
  </div>
  <div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.8rem;">
    <button type="button" onclick="cdStart()">Start countdown</button>
    <button type="button" onclick="cdReset()" style="background:#6b7280;">Reset</button>
  </div>
  <p id="cdMsg" style="color:#b91c1c;font-size:.9rem;min-height:1.2em;margin:.5rem 0 0;"></p>
  <div id="cdNameLabel" style="text-align:center;font-size:1.15rem;font-weight:700;margin:1rem 0 .5rem;">My event</div>
  <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;" id="cdBoxes">
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:.7rem 1rem;text-align:center;min-width:82px;">
      <div id="cdD" style="font-size:2.4rem;font-weight:800;color:var(--accent-dark);font-variant-numeric:tabular-nums;line-height:1.1;">0</div>
      <div style="font-size:.78rem;color:var(--muted);">days</div>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:.7rem 1rem;text-align:center;min-width:82px;">
      <div id="cdH" style="font-size:2.4rem;font-weight:800;color:var(--accent-dark);font-variant-numeric:tabular-nums;line-height:1.1;">00</div>
      <div style="font-size:.78rem;color:var(--muted);">hours</div>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:.7rem 1rem;text-align:center;min-width:82px;">
      <div id="cdM" style="font-size:2.4rem;font-weight:800;color:var(--accent-dark);font-variant-numeric:tabular-nums;line-height:1.1;">00</div>
      <div style="font-size:.78rem;color:var(--muted);">minutes</div>
    </div>
    <div style="background:#fff;border:1px solid var(--border);border-radius:10px;padding:.7rem 1rem;text-align:center;min-width:82px;">
      <div id="cdS" style="font-size:2.4rem;font-weight:800;color:var(--accent-dark);font-variant-numeric:tabular-nums;line-height:1.1;">00</div>
      <div style="font-size:.78rem;color:var(--muted);">seconds</div>
    </div>
  </div>
  <div style="background:#eef2f7;border-radius:8px;height:10px;margin-top:1rem;overflow:hidden;">
    <div id="cdBar" style="height:100%;width:0%;background:var(--accent);transition:width 1s linear;"></div>
  </div>
  <div id="cdDone" style="display:none;text-align:center;margin-top:1rem;padding:1rem;border:2px solid var(--accent);border-radius:10px;background:#f0fdf4;">
    <div style="font-size:1.5rem;font-weight:800;color:var(--accent-dark);">Time's up!</div>
    <div id="cdDoneName" style="margin-top:.25rem;color:var(--muted);"></div>
  </div>
</div>

<script>
var cdInterval = null, cdTarget = 0, cdStartAt = 0;
var cdBaseTitle = document.title;
function cdPad(n){ return (n < 10 ? '0' : '') + n; }
function cdToLocal(d){
  var p = cdPad;
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + 'T' + p(d.getHours()) + ':' + p(d.getMinutes());
}
function cdMsg(t){ document.getElementById('cdMsg').textContent = t; }
function cdBeep(){
  try {
    var AC = window.AudioContext || window.webkitAudioContext;
    var ctx = new AC();
    [0, 0.35, 0.7].forEach(function(delay, i){
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = i === 2 ? 880 : 660;
      var t = ctx.currentTime + delay;
      g.gain.setValueAtTime(0.001, t);
      g.gain.exponentialRampToValueAtTime(0.4, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.start(t); o.stop(t + 0.32);
    });
  } catch (e) { /* audio unavailable — timer still works */ }
}
function cdTick(){
  var now = Date.now();
  var diff = cdTarget - now;
  if (diff <= 0) { cdFinish(); return; }
  var s = Math.floor(diff / 1000);
  var d = Math.floor(s / 86400); s %= 86400;
  var h = Math.floor(s / 3600); s %= 3600;
  var m = Math.floor(s / 60); var sec = s % 60;
  document.getElementById('cdD').textContent = d;
  document.getElementById('cdH').textContent = cdPad(h);
  document.getElementById('cdM').textContent = cdPad(m);
  document.getElementById('cdS').textContent = cdPad(sec);
  var total = cdTarget - cdStartAt;
  var pct = total > 0 ? Math.min(100, Math.max(0, ((now - cdStartAt) / total) * 100)) : 0;
  document.getElementById('cdBar').style.width = pct + '%';
  var name = document.getElementById('cdName').value.trim() || 'Your event';
  document.getElementById('cdNameLabel').textContent = name;
  document.title = d + 'd ' + cdPad(h) + 'h ' + cdPad(m) + 'm ' + cdPad(sec) + 's — ' + name;
}
function cdFinish(){
  clearInterval(cdInterval); cdInterval = null;
  document.getElementById('cdD').textContent = '0';
  document.getElementById('cdH').textContent = '00';
  document.getElementById('cdM').textContent = '00';
  document.getElementById('cdS').textContent = '00';
  document.getElementById('cdBar').style.width = '100%';
  var name = document.getElementById('cdName').value.trim() || 'Your event';
  document.getElementById('cdDoneName').textContent = name + ' has arrived.';
  document.getElementById('cdDone').style.display = 'block';
  document.title = "Time's up! — " + name;
  cdBeep();
}
function cdStart(){
  var v = document.getElementById('cdDate').value;
  var t = v ? new Date(v).getTime() : NaN;
  if (!v || isNaN(t)) { cdMsg('Pick a target date and time first.'); return; }
  if (t <= Date.now()) { cdMsg('That date is in the past — pick a future date and time.'); return; }
  cdMsg('');
  cdTarget = t; cdStartAt = Date.now();
  clearInterval(cdInterval);
  document.getElementById('cdDone').style.display = 'none';
  document.getElementById('cdBar').style.width = '0%';
  cdTick();
  cdInterval = setInterval(cdTick, 1000);
}
function cdReset(){
  clearInterval(cdInterval); cdInterval = null;
  document.getElementById('cdD').textContent = '0';
  document.getElementById('cdH').textContent = '00';
  document.getElementById('cdM').textContent = '00';
  document.getElementById('cdS').textContent = '00';
  document.getElementById('cdBar').style.width = '0%';
  document.getElementById('cdDone').style.display = 'none';
  document.getElementById('cdNameLabel').textContent = document.getElementById('cdName').value.trim() || 'Your event';
  document.title = cdBaseTitle;
  cdMsg('');
}
function cdPresetHours(h){
  var d = new Date(Date.now() + h * 3600000);
  document.getElementById('cdDate').value = cdToLocal(d);
  cdStart();
}
function cdPresetDate(y, mo, day, hh, mm, name){
  var d = new Date(y, mo, day, hh, mm, 0);
  if (d.getTime() <= Date.now()) { cdMsg(name + ' has already passed — pick a future date.'); return; }
  document.getElementById('cdDate').value = cdToLocal(d);
  document.getElementById('cdName').value = name;
  cdStart();
}
document.getElementById('cdDate').value = cdToLocal(new Date(2027, 0, 1, 0, 0, 0));
document.getElementById('cdName').value = 'New Year 2027';
</script>

## Everyday uses

- **Exams and deadlines:** keep the final exam, thesis submission, or project deadline visible — the tab title counts down too, so it works as a passive reminder.
- **Trips and events:** count down to a wedding, a flight, a concert, or the holidays and share the excitement.
- **Fitness goals:** a visible countdown to race day or a weigh-in keeps training honest.
- **Work launches:** product releases, campaign go-lives, and sprint deadlines get a shared sense of urgency.
- **Habit milestones:** 30 days smoke-free, 100 days of journaling — watch the days pile up toward the goal.
