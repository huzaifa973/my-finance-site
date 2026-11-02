---
title: "Animated Countdown Timer in JavaScript (Free Source Code)"
description: "Free animated countdown timer source code with flip-style cards for days, hours, minutes and seconds, a settable target date, and a Live now end state."
date: 2026-11-02
draft: false
tags: ["javascript", "source code", "countdown", "timer"]
---
A countdown timer builds anticipation for a product launch, a sale, a webinar, or a livestream — and a well-animated one keeps people watching the page instead of bouncing. This timer shows days, hours, minutes, and seconds in flip-style cards that animate each time a digit changes, so the countdown feels alive rather than static.
It is one self-contained HTML file: CSS in a `<style>` tag and vanilla JavaScript for the countdown logic. No libraries, no dependencies. You set the target date and time in one variable (or use the built-in date picker), and when the countdown hits zero the cards are replaced with a "Live now" message — perfect for a launch or event page.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Countdown Timer</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 2rem 1rem; color: #e2e8f0;
  }
  h1 { font-size: 1.75rem; margin-bottom: 0.5rem; text-align: center; }
  .subtitle { color: #94a3b8; margin-bottom: 2rem; text-align: center; }

  .countdown {
    display: flex; gap: 1rem; flex-wrap: wrap;
    justify-content: center; margin-bottom: 2rem;
  }
  .unit { text-align: center; }
  .card {
    position: relative;
    width: 90px; height: 110px;
    perspective: 400px;
    margin-bottom: 0.5rem;
  }
  .card-face {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, #334155 0%, #334155 49%, #1e293b 50%, #1e293b 100%);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem; font-weight: 800; color: #f8fafc;
    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
    backface-visibility: hidden;
    overflow: hidden;
  }
  .card-face::after {
    content: ''; position: absolute; left: 0; right: 0; top: 50%;
    height: 1px; background: rgba(0,0,0,0.4);
  }
  .card-face.flip {
    animation: flipDown 0.6s ease-in-out;
    transform-origin: bottom;
  }
  @keyframes flipDown {
    0% { transform: rotateX(0deg); }
    50% { transform: rotateX(-90deg); opacity: 0.4; }
    51% { transform: rotateX(90deg); opacity: 0.4; }
    100% { transform: rotateX(0deg); }
  }
  .label {
    font-size: 0.75rem; text-transform: uppercase;
    letter-spacing: 2px; color: #94a3b8;
  }

  .live-msg {
    display: none;
    font-size: 2.5rem; font-weight: 800;
    color: #22c55e;
    animation: pulse 1.5s infinite;
    margin-bottom: 2rem;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.08); opacity: 0.85; }
  }

  .setter {
    display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;
    justify-content: center; background: rgba(255,255,255,0.05);
    padding: 1rem; border-radius: 12px;
  }
  .setter input[type="datetime-local"] {
    padding: 0.6rem; border-radius: 8px;
    border: 1px solid #475569; background: #1e293b;
    color: #e2e8f0; font-size: 0.95rem;
  }
  .setter button {
    padding: 0.6rem 1.25rem; border-radius: 8px;
    border: none; background: #6366f1; color: #fff;
    font-weight: 700; cursor: pointer; font-size: 0.95rem;
    transition: background 0.2s;
  }
  .setter button:hover { background: #4f46e5; }

  @media (max-width: 520px) {
    .card { width: 68px; height: 88px; }
    .card-face { font-size: 2.2rem; }
  }
</style>
</head>
<body>
  <h1>Launching soon</h1>
  <p class="subtitle">Our product goes live when the timer hits zero.</p>

  <div class="live-msg" id="liveMsg">● Live now</div>

  <div class="countdown" id="countdown">
    <div class="unit">
      <div class="card"><div class="card-face" id="days">00</div></div>
      <div class="label">Days</div>
    </div>
    <div class="unit">
      <div class="card"><div class="card-face" id="hours">00</div></div>
      <div class="label">Hours</div>
    </div>
    <div class="unit">
      <div class="card"><div class="card-face" id="minutes">00</div></div>
      <div class="label">Minutes</div>
    </div>
    <div class="unit">
      <div class="card"><div class="card-face" id="seconds">00</div></div>
      <div class="label">Seconds</div>
    </div>
  </div>

  <div class="setter">
    <input type="datetime-local" id="targetInput">
    <button id="setBtn">Set target</button>
  </div>

<script>
  // Default target: 7 days from now
  let targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const els = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };
  const countdown = document.getElementById('countdown');
  const liveMsg = document.getElementById('liveMsg');
  const targetInput = document.getElementById('targetInput');

  // Pre-fill input with default target
  const pad = n => String(n).padStart(2, '0');
  targetInput.value = `${targetDate.getFullYear()}-${pad(targetDate.getMonth()+1)}-${pad(targetDate.getDate())}T${pad(targetDate.getHours())}:${pad(targetDate.getMinutes())}`;

  function setValue(el, val) {
    const str = pad(val);
    if (el.textContent !== str) {
      el.textContent = str;
      el.classList.remove('flip');
      void el.offsetWidth; // restart animation
      el.classList.add('flip');
    }
  }

  function tick() {
    const now = new Date();
    let diff = targetDate - now;
    if (diff <= 0) {
      countdown.style.display = 'none';
      liveMsg.style.display = 'block';
      clearInterval(interval);
      return;
    }
    const days = Math.floor(diff / 86400000); diff -= days * 86400000;
    const hours = Math.floor(diff / 3600000); diff -= hours * 3600000;
    const minutes = Math.floor(diff / 60000); diff -= minutes * 60000;
    const seconds = Math.floor(diff / 1000);
    setValue(els.days, days);
    setValue(els.hours, hours);
    setValue(els.minutes, minutes);
    setValue(els.seconds, seconds);
  }

  document.getElementById('setBtn').addEventListener('click', () => {
    const v = targetInput.value;
    if (!v) return;
    targetDate = new Date(v);
    countdown.style.display = 'flex';
    liveMsg.style.display = 'none';
    clearInterval(interval);
    interval = setInterval(tick, 1000);
    tick();
  });

  let interval = setInterval(tick, 1000);
  tick();
</script>
</body>
</html>
```
## What's inside
- **Flip-style animated cards.** Each unit (days, hours, minutes, seconds) is a card with a split-gradient face that mimics a real flip clock. When a value changes, the card replays a `flipDown` keyframe animation by removing and re-adding the class, so only the digits that actually change animate.
- **Settable target date.** A `datetime-local` input lets visitors (or you) pick any future date and time; clicking "Set target" restarts the countdown. The default target is seven days from page load, pre-filled in the input.
- **"Live now" end state.** When the difference reaches zero, the countdown cards are hidden and a pulsing green "● Live now" message takes their place — ideal for switching a launch page to an in-progress state.
- **Responsive sizing.** On narrow screens the cards shrink so four units always fit in a row, and the whole layout wraps cleanly.
## How to use it
Copy the code block above into a `.html` file and open it in any browser. Change the default target by editing the `targetDate` variable near the top of the script, or just use the date picker on the page. Swap the heading text and colors in the `<style>` block to match your brand.
## Recap
This countdown timer gives you an animated flip-card countdown with a configurable target and a built-in "Live now" end state in one dependency-free file. Copy the code above into a `.html` file, set your launch date, and drop it onto your event or product page.
