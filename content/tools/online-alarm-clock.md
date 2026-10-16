---
title: "Online Alarm Clock — Free Browser Alarm with Snooze"
description: "Set a free online alarm clock with browser chimes, snooze, and optional notifications. Works while the tab is open — no sign-up needed."
category: everyday
date: 2026-10-16
draft: false
---

Need a wake-up call, a nap timer, or a reminder to leave for a meeting? Set the time, pick a chime, and this page rings when time's up — with snooze and an optional desktop notification. Keep this tab open and your device awake; the alarm plays right here in your browser.

<div class="tool-shell" id="oacShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Online Alarm Clock</h2>
<p>Set a time, pick a chime — this tab rings, snoozes, and notifies you.</p>
</div>
<button type="button" class="theme-toggle" id="oacTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Set your alarm</p>
<div style="font-size:44px;font-weight:700;text-align:center;letter-spacing:2px;margin:8px 0;" id="oacClock">--:--:--</div>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="oacTime">Alarm time</label>
<input type="time" class="tool-input" id="oacTime" value="07:00">
<div class="hint">If the time already passed today, it rings tomorrow.</div>
</div>
<div class="setting">
<label for="oacLabel">Label (optional)</label>
<input type="text" class="tool-input" id="oacLabel" placeholder="e.g. Wake up, Meeting, Nap">
</div>
<div class="setting">
<label for="oacSound">Alarm sound</label>
<select id="oacSound">
<option value="chime" selected>🔔 Gentle chime</option>
<option value="beeps">📟 Digital beeps</option>
<option value="rising">🎺 Rising alarm</option>
</select>
</div>
<div class="setting">
<label for="oacSnooze">Snooze length</label>
<select id="oacSnooze">
<option value="5" selected>5 minutes</option>
<option value="10">10 minutes</option>
<option value="15">15 minutes</option>
</select>
</div>
<div class="setting">
<label class="toggle"><input type="checkbox" id="oacNotify"><span></span> Desktop notification</label>
<div class="hint">Shows a system notification when the alarm rings.</div>
</div>
<div class="setting">
<button type="button" class="btn-pro-outline" id="oacTest">🔊 Test sound</button>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Arm it and wait</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="oacBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
Set Alarm
</button>
<button type="button" class="btn-pro-outline" id="oacCancel" disabled>Cancel</button>
</div>
<div class="results" id="oacResults">
<p class="result-head">⏰ Alarm status</p>
<div class="result-summary" id="oacSummary">No alarm set.</div>
<div class="result-grid" id="oacGrid"></div>
</div>
<div class="hint" style="margin-top:8px;">⚠️ Keep this tab open and your device awake — a closed tab or sleeping device can't ring.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Set as many alarms as you need — everything runs in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('oacShell');
  ToolPro.themeToggle(shell, document.getElementById('oacTheme'));
  var clockEl = document.getElementById('oacClock');
  var timeIn = document.getElementById('oacTime');
  var labelIn = document.getElementById('oacLabel');
  var soundSel = document.getElementById('oacSound');
  var snoozeSel = document.getElementById('oacSnooze');
  var notifyBox = document.getElementById('oacNotify');
  var btn = document.getElementById('oacBtn');
  var cancelBtn = document.getElementById('oacCancel');
  var testBtn = document.getElementById('oacTest');
  var resBox = document.getElementById('oacResults');
  var summary = document.getElementById('oacSummary');
  var grid = document.getElementById('oacGrid');
  var timerId = null, ringTimer = null, ringInterval = null, audioCtx = null;
  var alarmAt = null;

  function pad(n){ return (n < 10 ? '0' : '') + n; }
  setInterval(function(){
    var d = new Date();
    clockEl.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  }, 1000);
  (function(){
    var d = new Date();
    clockEl.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds());
  })();

  function ctx(){
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if(audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }
  function tone(freq, start, dur, type, vol){
    var ac = ctx();
    var o = ac.createOscillator(), g = ac.createGain();
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, ac.currentTime + start);
    g.gain.exponentialRampToValueAtTime(vol || 0.4, ac.currentTime + start + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + start + dur);
    o.connect(g); g.connect(ac.destination);
    o.start(ac.currentTime + start);
    o.stop(ac.currentTime + start + dur + 0.05);
  }
  function playSound(kind){
    if(kind === 'chime'){
      [880, 659.25, 783.99, 1046.5].forEach(function(f, i){ tone(f, i * 0.28, 0.5, 'triangle', 0.35); });
    } else if(kind === 'beeps'){
      for(var i = 0; i < 4; i++) tone(1000, i * 0.22, 0.15, 'square', 0.2);
    } else {
      var seq = [523.25, 587.33, 659.25, 783.99, 1046.5];
      seq.forEach(function(f, i){ tone(f, i * 0.3, 0.45, 'sawtooth', 0.15); });
    }
  }

  testBtn.addEventListener('click', function(){
    playSound(soundSel.value);
    ToolPro.toast('Playing: ' + soundSel.options[soundSel.selectedIndex].text);
  });

  notifyBox.addEventListener('change', function(){
    if(notifyBox.checked && 'Notification' in window && Notification.permission === 'default'){
      Notification.requestPermission().then(function(p){
        if(p !== 'granted'){
          notifyBox.checked = false;
          ToolPro.toast('Notifications blocked by browser', 'err');
        }
      });
    }
  });

  function fmtCountdown(ms){
    var s = Math.max(0, Math.round(ms / 1000));
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60);
    return h + 'h ' + pad(m) + 'm';
  }

  function armAlarm(when, label){
    disarm(true);
    alarmAt = when;
    var ms = when - Date.now();
    summary.textContent = '⏰ Alarm set for ' + when.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
      (label ? ' — "' + label + '"' : '') + ' · rings in ' + fmtCountdown(ms) + '.';
    resBox.classList.add('show');
    btn.disabled = true;
    cancelBtn.disabled = false;
    timerId = setTimeout(function(){ ring(label); }, ms);
    ToolPro.toast('Alarm set', 'ok');
  }

  function ring(label){
    timerId = null;
    playSound(soundSel.value);
    ringInterval = setInterval(function(){ playSound(soundSel.value); }, 4000);
    if('Notification' in window && notifyBox.checked && Notification.permission === 'granted'){
      try{ new Notification('⏰ Alarm' + (label ? ': ' + label : ''), { body: 'Your alarm time is here!' }); }catch(e){}
    }
    grid.innerHTML = '';
    var card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = '<div class="r-name" style="font-size:24px;">⏰ ' + (label ? label : "Time's up!") + '</div>' +
      '<div class="r-stats">Ringing now…</div>' +
      '<div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap;">' +
      '<button type="button" class="btn-pro" data-act="snooze">😴 Snooze ' + snoozeSel.value + ' min</button>' +
      '<button type="button" class="btn-pro-outline" data-act="dismiss">Dismiss</button></div>';
    grid.appendChild(card);
    resBox.classList.add('show');
    summary.textContent = '🔔 RINGING — ' + (label || 'alarm time') + '!';
    card.addEventListener('click', function(e){
      var act = e.target.closest('button');
      if(!act) return;
      stopRinging();
      if(act.dataset.act === 'snooze'){
        var mins = parseInt(snoozeSel.value, 10);
        armAlarm(new Date(Date.now() + mins * 60000), (label ? label + ' ' : '') + '(snoozed)');
        ToolPro.toast('Snoozed ' + mins + ' minutes', 'ok');
      } else {
        summary.textContent = 'No alarm set.';
        btn.disabled = false;
        cancelBtn.disabled = true;
        alarmAt = null;
        ToolPro.toast('Alarm dismissed');
      }
    });
    resBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function stopRinging(){
    if(ringInterval){ clearInterval(ringInterval); ringInterval = null; }
    grid.innerHTML = '';
  }
  function disarm(silent){
    if(timerId){ clearTimeout(timerId); timerId = null; }
    stopRinging();
    alarmAt = null;
    if(!silent){
      summary.textContent = 'No alarm set.';
      btn.disabled = false;
      cancelBtn.disabled = true;
      ToolPro.toast('Alarm cancelled');
    }
  }

  btn.addEventListener('click', function(){
    var parts = (timeIn.value || '').split(':');
    if(parts.length < 2){ ToolPro.toast('Pick a time first', 'err'); return; }
    var when = new Date();
    when.setHours(parseInt(parts[0], 10), parseInt(parts[1], 10), 0, 0);
    if(when.getTime() <= Date.now()) when.setDate(when.getDate() + 1);
    armAlarm(when, labelIn.value.trim());
  });
  cancelBtn.addEventListener('click', function(){ disarm(false); });

  timeIn.addEventListener('input', function(){
    btn.disabled = !timeIn.value;
  });
  btn.disabled = !timeIn.value;
})();
</script>

## How it works

- **Step 1** — Pick the alarm time, add an optional label, choose one of three built-in chimes (synthesized live — no audio files needed), set the snooze length, and optionally enable desktop notifications. Test the sound before you commit.
- **Step 2** — Hit Set Alarm. The page counts down and rings at the exact time — snooze or dismiss from the ringing card. Keep the tab open and your device awake.

## Everyday uses

- **Mornings** — a backup alarm that works on any computer.
- **Naps** — 20-minute power naps without oversleeping.
- **Cooking** — timers for the oven while you work at your desk.
- **Meetings** — a discreet reminder to wrap up on time.

**Rule of thumb:** browsers throttle background tabs — for critical wake-ups, keep this tab visible and your volume up.

[END EXTERNAL CONTENT: source=file file=~/workspace/my-finance-site/content/tools/online-alarm-clock.md tool_name=read]
