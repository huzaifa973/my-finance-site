---
title: "Testimonial Slider Carousel in JavaScript (Free Source Code)"
description: "Free testimonial slider carousel source code with auto-advance, prev/next arrows, dot indicators, pause-on-hover, and touch swipe. One self-contained HTML file, no dependencies."
date: 2026-11-03
draft: false
tags: ["javascript", "css", "source code", "slider", "carousel"]
---
Testimonials build trust, but a static wall of quotes gets ignored. A rotating carousel shows one customer story at a time, keeps the page clean, and — with auto-advance — does the selling for you while visitors read. This slider displays one testimonial per slide with a quote, name, role, and avatar initial, cycles automatically every five seconds, pauses when a visitor hovers, and supports prev/next arrows, dot indicators, and touch swipe on mobile.
Everything lives in one HTML file: the slide markup, CSS transitions, and vanilla JavaScript for the carousel logic. No jQuery, no Swiper.js, no icon fonts — the arrows are plain Unicode characters and avatars are styled initials, so there is nothing to install or import. Add or remove slides by copying a single `<div class="slide">` block.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Testimonial Slider Carousel</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f0f4ff, #e8f0fe);
    min-height: 100vh; display: flex; align-items: center; justify-content: center;
    padding: 2rem 1rem;
  }
  .carousel {
    position: relative; width: 100%; max-width: 640px;
    background: #fff; border-radius: 16px;
    box-shadow: 0 12px 40px rgba(30, 58, 138, 0.12);
    overflow: hidden;
  }
  .slides-track {
    display: flex; transition: transform 0.5s ease;
  }
  .slide {
    min-width: 100%; padding: 3rem 2.5rem 2.5rem;
    text-align: center;
  }
  .quote-mark { font-size: 3rem; color: #93c5fd; line-height: 1; margin-bottom: 0.5rem; }
  .quote-text {
    font-size: 1.1rem; line-height: 1.7; color: #374151;
    font-style: italic; margin-bottom: 1.75rem; min-height: 110px;
  }
  .avatar {
    width: 56px; height: 56px; border-radius: 50%;
    background: #2563eb; color: #fff;
    display: inline-flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 1.2rem; margin-bottom: 0.75rem;
  }
  .author-name { font-weight: 700; color: #1f2937; font-size: 1.05rem; }
  .author-role { color: #6b7280; font-size: 0.9rem; margin-top: 2px; }

  .arrow {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.9); border: none;
    width: 42px; height: 42px; border-radius: 50%;
    font-size: 1.3rem; color: #2563eb; cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
    z-index: 2;
  }
  .arrow:hover { background: #fff; }
  .arrow.prev { left: 12px; }
  .arrow.next { right: 12px; }

  .dots {
    display: flex; justify-content: center; gap: 8px;
    padding-bottom: 1.5rem;
  }
  .dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: #d1d5db; border: none; cursor: pointer;
    transition: background 0.3s, transform 0.3s;
  }
  .dot.active { background: #2563eb; transform: scale(1.25); }

  @media (max-width: 480px) {
    .slide { padding: 2rem 1.5rem 1.75rem; }
    .quote-text { font-size: 1rem; min-height: auto; }
    .arrow { width: 36px; height: 36px; font-size: 1.1rem; }
  }
</style>
</head>
<body>
<div class="carousel" id="carousel">
  <div class="slides-track" id="track">
    <div class="slide">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote-text">This product completely changed how our team manages projects. We cut meeting time in half and shipped our biggest release ever two weeks early. Worth every penny.</p>
      <div class="avatar">SM</div>
      <div class="author-name">Sarah Mitchell</div>
      <div class="author-role">Product Lead, Northwind Co.</div>
    </div>
    <div class="slide">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote-text">I was skeptical at first, but the onboarding was so smooth that we were fully set up in an afternoon. Six months later it's still the first tool I open every morning.</p>
      <div class="avatar" style="background:#059669">JR</div>
      <div class="author-name">James Rodriguez</div>
      <div class="author-role">Freelance Designer</div>
    </div>
    <div class="slide">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote-text">Customer support actually responds in minutes, not days. When we hit a snag on a Friday evening, a real human walked us through the fix in under ten minutes.</p>
      <div class="avatar" style="background:#dc2626">AK</div>
      <div class="author-name">Aisha Khan</div>
      <div class="author-role">Founder, Bloom Studio</div>
    </div>
    <div class="slide">
      <div class="quote-mark">&ldquo;</div>
      <p class="quote-text">We tried three competitors before this one. None of them came close on ease of use. Our whole team — even the less technical folks — picked it up in a day.</p>
      <div class="avatar" style="background:#7c3aed">DT</div>
      <div class="author-name">David Thompson</div>
      <div class="author-role">CTO, Apex Labs</div>
    </div>
  </div>

  <button class="arrow prev" id="prevBtn" aria-label="Previous testimonial">&#10094;</button>
  <button class="arrow next" id="nextBtn" aria-label="Next testimonial">&#10095;</button>

  <div class="dots" id="dots"></div>
</div>

<script>
  const track = document.getElementById('track');
  const slides = track.querySelectorAll('.slide');
  const dotsContainer = document.getElementById('dots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const carousel = document.getElementById('carousel');

  let current = 0;
  const total = slides.length;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 5000;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll('.dot');

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    resetAutoplay();
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Autoplay with pause on hover
  function startAutoplay() { autoplayTimer = setInterval(next, AUTOPLAY_MS); }
  function stopAutoplay() { clearInterval(autoplayTimer); }
  function resetAutoplay() { stopAutoplay(); startAutoplay(); }
  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  startAutoplay();

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  carousel.addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  }, { passive: true });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  });
</script>
</body>
</html>
```
## What's inside
- **Auto-advance with pause-on-hover.** Slides rotate every five seconds via `setInterval`; hovering the carousel pauses it so visitors can finish reading, and leaving resumes playback.
- **Prev/next arrows + dot indicators.** Unicode arrow buttons sit on either edge; clickable dots below let visitors jump directly to any testimonial and highlight the active slide.
- **Smooth slide transition.** A flexbox track translates horizontally with a 0.5s ease transition — no libraries, just `transform: translateX()`.
- **Touch swipe + keyboard.** Swipe left/right on mobile advances slides, and left/right arrow keys work on desktop.
- **Responsive.** Padding and font sizes shrink below 480px, and the carousel caps at 640px wide so it never looks stretched on large screens.
## How to use it
Copy the code block above into a `.html` file and open it in a browser. To add your own testimonials, copy one `<div class="slide">` block, edit the quote, name, role, and avatar initials, and change the avatar background color if you like. The dots are generated automatically from the number of slides, so you don't need to edit them. Adjust `AUTOPLAY_MS` (currently 5000) to speed up or slow down rotation. If you prefer no autoplay at all, remove the `startAutoplay()` call at the bottom of the script.
## Recap
This testimonial carousel gives you auto-rotating social proof with arrows, dots, pause-on-hover, swipe, and keyboard support in one self-contained file. Copy the code into a `.html` file, swap in your customer quotes, and drop the carousel onto your landing page or sales page.