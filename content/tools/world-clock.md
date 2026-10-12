---
title: "Free World Clock"
description: "Live world clock showing the current time and date in 12 major cities — New York, London, Dubai, Tokyo and more — updated every second."
category: everyday
date: 2026-10-12
draft: false
---

## How it works

This world clock shows your own local time first, then live clocks for 12 major cities around the globe. Every clock updates once per second and shows the local date and UTC offset, so you always know exactly what time it is anywhere.

<div class="tool-shell" id="wcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>World Clock</h2>
<p>Current local time in 12 major cities, ticking live every second — plus your own time up top.</p>
</div>
<button type="button" class="theme-toggle" id="wcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your local time</p>
<div id="wcLocal"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Around the world</p>
<div id="wcGrid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;"></div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Coordinated Universal Time</p>
<div class="results" id="wcResults">
<p class="result-head">🕐 UTC right now</p>
<div class="result-summary" id="wcResult"></div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Every clock is computed live in your browser from your own system time — leave the tab open and it stays accurate to the second.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('wcShell');
  ToolPro.themeToggle(shell, document.getElementById('wcTheme'));
  var cities = [
    { name: 'New York', tz: 'America/New_York' },
    { name: 'Chicago', tz: 'America/Chicago' },
    { name: 'Denver', tz: 'America/Denver' },
    { name: 'Los Angeles', tz: 'America/Los_Angeles' },
    { name: 'London', tz: 'Europe/London' },
    { name: 'Paris', tz: 'Europe/Paris' },
    { name: 'Dubai', tz: 'Asia/Dubai' },
    { name: 'Karachi', tz: 'Asia/Karachi' },
    { name: 'Mumbai', tz: 'Asia/Kolkata' },
    { name: 'Singapore', tz: 'Asia/Singapore' },
    { name: 'Tokyo', tz: 'Asia/Tokyo' },
    { name: 'Sydney', tz: 'Australia/Sydney' }
  ];
  var cardStyle = 'border:1px solid rgba(128,128,128,.35);border-radius:10px;padding:12px 14px;';
  var localStyle = 'border:2px solid #2563eb;background:rgba(37,99,235,.08);border-radius:10px;padding:14px 16px;';
  function makeCard(container, label, style){
    var card = document.createElement('div');
    card.setAttribute('style', style);
    var name = document.createElement('div');
    name.style.cssText = 'font-weight:700;font-size:.95rem;';
    name.textContent = label;
    var time = document.createElement('div');
    time.style.cssText = 'font-size:1.5rem;font-weight:800;line-height:1.2;margin:2px 0;';
    var meta = document.createElement('div');
    meta.style.cssText = 'font-size:.8rem;opacity:.75;';
    card.appendChild(name);
    card.appendChild(time);
    card.appendChild(meta);
    container.appendChild(card);
    return { time: time, meta: meta };
  }
  function parts(tz){
    var now = new Date();
    var time = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hourCycle: 'h23', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(now);
    var date = new Intl.DateTimeFormat('en-US', { timeZone: tz, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(now);
    var offParts = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' }).formatToParts(now);
    var off = '';
    for (var i = 0; i < offParts.length; i++) {
      if (offParts[i].type === 'timeZoneName') off = offParts[i].value;
    }
    return { time: time, date: date, off: off.replace('GMT', 'UTC') };
  }
  var localTz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  var localCard = makeCard(document.getElementById('wcLocal'), 'Your time — ' + localTz.replace(/_/g, ' '), localStyle);
  var grid = document.getElementById('wcGrid');
  var cards = [];
  for (var c = 0; c < cities.length; c++) {
    cards.push({ tz: cities[c].tz, el: makeCard(grid, cities[c].name, cardStyle) });
  }
  var resBox = document.getElementById('wcResults');
  var out = document.getElementById('wcResult');
  resBox.classList.add('show');
  function tick(){
    var lp = parts(localTz);
    localCard.time.textContent = lp.time;
    localCard.meta.textContent = lp.date + ' · ' + lp.off;
    for (var i = 0; i < cards.length; i++) {
      var p = parts(cards[i].tz);
      cards[i].el.time.textContent = p.time;
      cards[i].el.meta.textContent = p.date + ' · ' + p.off;
    }
    var utc = new Date();
    out.innerHTML = '<p style="font-size:1.3rem;"><strong>' + utc.toISOString().slice(11, 19) + ' UTC</strong></p>'
      + '<p>Clocks update every second. Offsets adjust automatically for daylight saving time.</p>';
  }
  tick();
  setInterval(tick, 1000);
})();
</script>

## Everyday uses

- **Remote teams:** check whether a colleague in London, Dubai, or Sydney is inside working hours before you message them.
- **Calls and meetings:** confirm the exact local time for a client or family call so nobody joins at 3 a.m.
- **Travel:** see the time at your destination before you fly and plan sleep around the time difference.
- **Live events:** convert kickoffs, launches, and streams in other time zones to your local time at a glance.

## Frequently asked questions

**How accurate are these clocks?**
They are computed from your device's clock using the official IANA time zone database built into your browser, and they refresh every second. If your device clock is correct, these are too.

**Do the clocks handle daylight saving time?**
Yes. The offsets change automatically on the correct dates — for example London switches between GMT and BST, and US cities move between standard and daylight time.

**Why is my own time shown first?**
So you can compare instantly. Your card is highlighted and uses your device's own time zone, whatever it is set to.
