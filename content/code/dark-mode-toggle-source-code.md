---
title: "Dark Mode Toggle with CSS & JavaScript (Free Source Code)"
description: "Free dark mode toggle source code with localStorage persistence, prefers-color-scheme support, smooth transitions, and CSS variables — one HTML file."
date: 2026-11-02
draft: false
tags: ["css", "javascript", "source code", "dark mode"]
---
Dark mode is no longer a nice-to-have — visitors expect it, and it reduces eye strain in low light while saving battery on OLED screens. This implementation gives you a toggle button that switches between light and dark themes, remembers the visitor's choice across visits, and respects the operating system's color scheme on first load.
It is one self-contained HTML file: CSS variables define every color, a small script handles the toggle and persistence, and a demo page with a navbar, cards, and text shows the theme switching in action. No frameworks, no dependencies, and the transition between themes is smooth so the switch never feels jarring.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dark Mode Toggle</title>
<style>
  :root {
    --bg: #f8fafc;
    --surface: #ffffff;
    --text: #0f172a;
    --text-muted: #64748b;
    --border: #e2e8f0;
    --accent: #6366f1;
    --accent-text: #ffffff;
    --shadow: rgba(15, 23, 42, 0.08);
  }
  [data-theme="dark"] {
    --bg: #0f172a;
    --surface: #1e293b;
    --text: #f1f5f9;
    --text-muted: #94a3b8;
    --border: #334155;
    --accent: #818cf8;
    --accent-text: #0f172a;
    --shadow: rgba(0, 0, 0, 0.4);
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: var(--bg);
    color: var(--text);
    min-height: 100vh;
    transition: background 0.4s ease, color 0.4s ease;
  }
  .navbar {
    display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 2rem;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    transition: background 0.4s ease, border-color 0.4s ease;
  }
  .logo { font-weight: 800; font-size: 1.25rem; color: var(--accent); }
  .theme-toggle {
    background: var(--accent); color: var(--accent-text);
    border: none; padding: 0.55rem 1.1rem;
    border-radius: 999px; font-weight: 700;
    cursor: pointer; font-size: 0.9rem;
    transition: background 0.4s ease, transform 0.2s;
    display: flex; align-items: center; gap: 0.4rem;
  }
  .theme-toggle:hover { transform: scale(1.05); }
  .container {
    max-width: 900px; margin: 0 auto;
    padding: 3rem 1.5rem;
  }
  h1 { font-size: 2rem; margin-bottom: 0.75rem; }
  .lead { color: var(--text-muted); margin-bottom: 2rem; font-size: 1.05rem; transition: color 0.4s ease; }
  .cards {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 14px; padding: 1.5rem;
    box-shadow: 0 4px 12px var(--shadow);
    transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease, transform 0.2s;
  }
  .card:hover { transform: translateY(-4px); }
  .card h3 { margin-bottom: 0.5rem; color: var(--accent); }
  .card p { color: var(--text-muted); font-size: 0.95rem; line-height: 1.6; transition: color 0.4s ease; }
</style>
</head>
<body>
  <nav class="navbar">
    <div class="logo">DollarWise</div>
    <button class="theme-toggle" id="themeToggle">
      <span id="themeIcon">🌙</span>
      <span id="themeLabel">Dark mode</span>
    </button>
  </nav>

  <div class="container">
    <h1>Welcome to the demo page</h1>
    <p class="lead">Click the toggle in the top-right corner to switch between light and dark mode. Your choice is saved and applied automatically on your next visit.</p>
    <div class="cards">
      <div class="card">
        <h3>Persisted</h3>
        <p>Your theme choice is stored in localStorage, so the site remembers you across visits and page reloads.</p>
      </div>
      <div class="card">
        <h3>System-aware</h3>
        <p>On your first visit, the toggle follows your operating system's prefers-color-scheme setting automatically.</p>
      </div>
      <div class="card">
        <h3>Smooth</h3>
        <p>Every color transitions over 0.4 seconds, so switching themes feels polished instead of flashing.</p>
      </div>
    </div>
  </div>

<script>
  // Apply saved theme (or system preference) before paint to avoid flash
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();

  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  function updateButton() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    icon.textContent = isDark ? '☀️' : '🌙';
    label.textContent = isDark ? 'Light mode' : 'Dark mode';
  }
  updateButton();

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateButton();
  });

  // React to OS theme changes only if the user hasn't chosen explicitly
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      updateButton();
    }
  });
</script>
</body>
</html>
```
## What's inside
- **CSS variable theming.** Every color is defined once in `:root` and overridden under `[data-theme="dark"]`, so switching themes is a one-attribute change and adding a third theme later is trivial.
- **localStorage persistence.** The chosen theme is saved under the key `theme` and re-applied on every page load — no flash of the wrong theme because the script runs in an IIFE before the page paints.
- **Respects `prefers-color-scheme`.** On a first visit (no saved choice), the theme matches the visitor's operating system setting. If the OS theme changes later and the user never picked one, the page follows along automatically.
- **Smooth 0.4s transitions.** Background, text, borders, and shadows all transition, so the toggle never flashes — and the button label and icon swap to reflect the current mode.
## How to use it
Copy the code block above into a `.html` file and open it in any browser. To add dark mode to your own site, copy the `:root` / `[data-theme="dark"]` variables, the IIFE script block, and the toggle button — then replace your hard-coded colors with the matching `var(--...)` references.
## Recap
This dark mode toggle gives you a production-ready theme switch with persistence, system-preference detection, and smooth transitions in one dependency-free file. Copy the code above into a `.html` file, then lift the variables and script into your own stylesheet.
