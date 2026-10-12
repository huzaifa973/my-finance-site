---
title: "Free Unix Timestamp Converter — Epoch Time to Date"
description: "Convert Unix timestamps (seconds or milliseconds) to human dates, and dates back to epoch time. Live current timestamp included. Free and instant."
category: text
date: 2026-10-12
draft: false
---

Logs, APIs, and databases speak in Unix time — seconds (or milliseconds) since January 1, 1970. Humans do not. Paste any timestamp and see the exact local date, UTC date, and ISO string; or pick a date and get its epoch values for your code. The current timestamp ticks live at the top so you can grab "now" whenever a test needs it.

<div class="tool-shell" id="unixTimestampShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Unix Timestamp Converter</h2>
<p>Flip between epoch seconds, milliseconds, and real dates — with a live "now" timestamp ticking above.</p>
</div>
<button type="button" class="theme-toggle" id="unixTimestampTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Timestamp → date</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Unix timestamp</span><input type="text" class="tool-input" id="tsIn" value="" placeholder="e.g. 1760000000 or milliseconds"></div>
<div class="setting"><span class="t-label">Unit</span><select class="tool-input" id="tsUnit"><option value="auto">Auto-detect</option><option value="s">Seconds</option><option value="ms">Milliseconds</option></select></div>
</div>
<div class="hint">Current Unix time: <strong id="tsNow">—</strong> (updates every second). <button type="button" class="preset-chip" id="tsUseNow">Use now</button></div>
</div>
<div class="results show">
<p class="result-head">📅 Human date</p>
<div class="result-summary" id="tsOut">Enter a timestamp to convert it.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Date → timestamp</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting"><span class="t-label">Date &amp; time (your local zone)</span><input type="datetime-local" class="tool-input" id="tsDate" step="1"></div>
</div>
</div>
<div class="results show">
<p class="result-head">🔢 Unix timestamps</p>
<div class="result-summary" id="tsOut2">Pick a date to get its timestamps.</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Convert unlimited timestamps — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
var shell=document.getElementById('unixTimestampShell');
ToolPro.themeToggle(shell, document.getElementById('unixTimestampTheme'));
var nowEl=document.getElementById('tsNow');
function tick(){ nowEl.textContent=Math.floor(Date.now()/1000).toLocaleString('en-US'); }
tick(); setInterval(tick, 1000);
document.getElementById('tsUseNow').addEventListener('click', function(){ document.getElementById('tsIn').value=Math.floor(Date.now()/1000); convert(); });
function convert(){
  var raw=document.getElementById('tsIn').value.trim();
  var out=document.getElementById('tsOut');
  if(!raw){ out.textContent='Enter a timestamp to convert it.'; return; }
  var v=Number(raw);
  if(!isFinite(v)){ out.textContent='That is not a number — paste digits only.'; return; }
  var unit=document.getElementById('tsUnit').value, ms;
  if(unit==='s') ms=v*1000; else if(unit==='ms') ms=v; else ms = Math.abs(v)>=100000000000 ? v : v*1000;
  var d=new Date(ms);
  if(isNaN(d.getTime())){ out.textContent='That timestamp is out of range.'; return; }
  out.innerHTML='Local: <strong>'+d.toLocaleString('en-US',{dateStyle:'full', timeStyle:'medium'})+'</strong><br>UTC: <strong>'+d.toUTCString()+'</strong><br>ISO: <strong>'+d.toISOString()+'</strong>';
}
document.getElementById('tsIn').addEventListener('input', convert);
document.getElementById('tsUnit').addEventListener('change', convert);
document.getElementById('tsDate').addEventListener('change', function(){
  if(!this.value) return;
  var d=new Date(this.value);
  document.getElementById('tsOut2').innerHTML='Seconds: <strong>'+Math.floor(d.getTime()/1000)+'</strong> · Milliseconds: <strong>'+d.getTime()+'</strong>';
});
})();
</script>

## How it works

In auto-detect mode the tool treats values with 13 or more digits as milliseconds and shorter values as seconds (the two conventions used by JavaScript and by most server systems), then formats the date with your browser’s own locale and time zone. The reverse converter reads your local datetime picker value and divides back to epoch seconds and milliseconds. Everything runs locally.

## Everyday uses

- **Developers** — decode log lines, JWT expiry claims, and API responses.
- **Data analysts** — sanity-check epoch columns in CSVs before loading them.
- **QA** — generate exact timestamps for expiry and scheduling tests.
- **Support teams** — translate "created_at 1759…" into a date a customer understands.

## Frequently asked questions

**Seconds or milliseconds — which is my timestamp?**

10 digits is almost always seconds; 13 digits is milliseconds (JavaScript Date.now()). Auto-detect handles both.

**Why is the UTC time different from local?**

Epoch time is absolute; the same instant shows different wall-clock times per zone. Both are shown so you can compare.

**What dates can it handle?**

JavaScript dates cover roughly ±270,000 years around 1970, so any realistic timestamp works.
