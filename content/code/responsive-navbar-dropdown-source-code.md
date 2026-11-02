---
title: "Responsive Navbar with Dropdown Menu (HTML/CSS/JS, Free Source Code)"
description: "Free responsive navbar source code with dropdown submenus, mobile hamburger toggle, sticky positioning, and active-link highlight. One self-contained HTML file, no dependencies."
date: 2026-11-03
draft: false
tags: ["html", "css", "javascript", "source code", "navbar"]
---
A site's navbar is where every visitor lands their eyes first, and a broken or clunky menu costs you more than you think — especially on mobile, where most traffic arrives. This navbar stays stuck to the top of the page as you scroll, collapses into a clean hamburger menu on small screens, and supports dropdown submenus that open on hover on desktop and on tap on mobile. The currently active page is highlighted automatically, so visitors always know where they are.
It is one self-contained HTML file: CSS in a `<style>` tag and vanilla JavaScript for the hamburger toggle and dropdown behavior. No frameworks, no icon libraries, no external dependencies. Drop it into any project, replace the placeholder links and logo text with your own, and you're done.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Responsive Navbar with Dropdown</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: Arial, sans-serif; min-height: 200vh; background: #f9fafb; }
  a { text-decoration: none; color: inherit; }

  .navbar {
    position: sticky; top: 0; z-index: 1000;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  }
  .nav-container {
    max-width: 1200px; margin: 0 auto;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 1.25rem; height: 64px;
  }
  .logo { font-size: 1.35rem; font-weight: 700; color: #2563eb; }

  .nav-menu {
    display: flex; align-items: center; list-style: none; gap: 0.25rem;
  }
  .nav-item { position: relative; }
  .nav-link {
    display: block; padding: 0.6rem 0.9rem;
    color: #374151; font-size: 0.95rem; border-radius: 6px;
    transition: background 0.2s, color 0.2s;
  }
  .nav-link:hover { background: #eff6ff; color: #2563eb; }
  .nav-link.active { color: #2563eb; font-weight: 600; background: #eff6ff; }

  /* Dropdown */
  .dropdown-toggle::after {
    content: " ▾"; font-size: 0.7rem; margin-left: 4px;
  }
  .dropdown-menu {
    position: absolute; top: 100%; left: 0;
    min-width: 200px; background: #fff;
    list-style: none; border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    padding: 0.5rem 0;
    opacity: 0; visibility: hidden; transform: translateY(8px);
    transition: opacity 0.2s, transform 0.2s, visibility 0.2s;
  }
  .nav-item:hover .dropdown-menu {
    opacity: 1; visibility: visible; transform: translateY(0);
  }
  .dropdown-menu a {
    display: block; padding: 0.55rem 1.1rem;
    color: #374151; font-size: 0.92rem;
  }
  .dropdown-menu a:hover { background: #eff6ff; color: #2563eb; }

  /* Hamburger */
  .hamburger {
    display: none; flex-direction: column; gap: 5px;
    background: none; border: none; cursor: pointer; padding: 6px;
  }
  .hamburger span {
    width: 24px; height: 2.5px; background: #374151; border-radius: 2px;
    transition: transform 0.3s, opacity 0.3s;
  }
  .hamburger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

  @media (max-width: 768px) {
    .hamburger { display: flex; }
    .nav-menu {
      position: absolute; top: 64px; left: 0; right: 0;
      flex-direction: column; align-items: stretch; gap: 0;
      background: #fff; padding: 0.5rem 1rem 1rem;
      box-shadow: 0 8px 16px rgba(0,0,0,0.08);
      max-height: 0; overflow: hidden;
      transition: max-height 0.35s ease;
    }
    .nav-menu.open { max-height: 80vh; overflow-y: auto; }
    .nav-link { padding: 0.85rem 0.5rem; border-bottom: 1px solid #f3f4f6; }
    .dropdown-menu {
      position: static; box-shadow: none; padding-left: 1rem;
      opacity: 1; visibility: visible; transform: none;
      display: none;
    }
    .nav-item.dropdown-open .dropdown-menu { display: block; }
  }

  .demo-content { max-width: 800px; margin: 3rem auto; padding: 0 1.25rem; color: #4b5563; line-height: 1.7; }
  .demo-content h1 { color: #1f2937; margin-bottom: 1rem; }
</style>
</head>
<body>
<nav class="navbar">
  <div class="nav-container">
    <a href="#" class="logo">DollarWise</a>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-menu" id="navMenu">
      <li class="nav-item"><a href="#" class="nav-link active">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      <li class="nav-item has-dropdown">
        <a href="#" class="nav-link dropdown-toggle" id="servicesToggle">Services</a>
        <ul class="dropdown-menu">
          <li><a href="#">Web Design</a></li>
          <li><a href="#">SEO Audit</a></li>
          <li><a href="#">Content Writing</a></li>
          <li><a href="#">Consulting</a></li>
        </ul>
      </li>
      <li class="nav-item has-dropdown">
        <a href="#" class="nav-link dropdown-toggle" id="resourcesToggle">Resources</a>
        <ul class="dropdown-menu">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Guides</a></li>
          <li><a href="#">Templates</a></li>
        </ul>
      </li>
      <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
    </ul>
  </div>
</nav>

<div class="demo-content">
  <h1>Scroll down — the navbar stays put</h1>
  <p>Resize your browser below 768px to see the hamburger menu. On desktop, hover over "Services" or "Resources" to open the dropdown. On mobile, tap the dropdown parent to expand its submenu. The "Home" link is highlighted as active to demonstrate the active-link state.</p>
</div>

<script>
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Mobile: tap dropdown parent to toggle submenu (desktop uses hover)
  document.querySelectorAll('.has-dropdown > .dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggle.parentElement.classList.toggle('dropdown-open');
      }
    });
  });

  // Highlight active link based on current page URL (replace hrefs with real paths)
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
</script>
</body>
</html>
```
## What's inside
- **Sticky positioning.** `position: sticky` on the navbar keeps it pinned to the top of the viewport as you scroll, with a subtle shadow that separates it from page content.
- **Dropdown submenus.** Two dropdown items ("Services" and "Resources") open with a smooth fade-and-slide on desktop hover; on mobile they expand inline when tapped.
- **Mobile hamburger toggle.** Below 768px the horizontal menu collapses; the hamburger animates into an X and the menu slides open with a max-height transition.
- **Active link highlight.** JavaScript matches the current page URL against link `href` values and adds an `.active` class, so the current page is styled distinctly.
- **Accessible.** The hamburger uses `aria-label` and `aria-expanded`, and dropdowns are real nested lists that keyboard navigation can traverse.
## How to use it
Copy the code block above into a `.html` file and open it in any browser — it runs with no build step. Replace "DollarWise" with your logo, swap the placeholder `href="#"` links with your real page paths (the active-link highlight matches the filename in the URL), and edit the dropdown items to match your site structure. To add another dropdown, copy a `.has-dropdown` list item and change its label and submenu links. Colors are controlled by the `#2563eb` blue and neutral grays in the CSS — change those two values to match your brand.
## Recap
This navbar gives you a production-ready, mobile-first navigation with dropdowns, sticky behavior, and active-link highlighting in one dependency-free file. Copy the code into a `.html` file, swap in your links and brand colors, and drop it into your project.