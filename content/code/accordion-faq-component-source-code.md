---
title: "Accordion FAQ Component in HTML/CSS/JS (Free Source Code)"
description: "Free accessible accordion FAQ component source code with smooth expand/collapse, plus/minus icon toggle, single-open mode, and ARIA attributes. One self-contained HTML file, no dependencies."
date: 2026-11-03
draft: false
tags: ["html", "css", "javascript", "source code", "accordion", "faq"]
---
An FAQ section answers the objections that stop visitors from buying, but a long static list of questions forces people to scroll past answers they don't care about. An accordion collapses each answer behind its question, opens with a smooth animation when clicked, and keeps the page compact and scannable. This component uses real `<button>` elements and ARIA attributes so screen readers and keyboard users get a fully accessible experience, and it supports a "only one open at a time" mode with a single flag in the JavaScript.
It is one self-contained HTML file: CSS for the styling and smooth height animation, and vanilla JavaScript for the toggle logic. No frameworks, no icon libraries — the plus/minus icon is built with CSS pseudo-elements. Add or remove questions by copying one accordion-item block.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Accessible Accordion FAQ</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: Arial, sans-serif;
    background: #f3f4f6; min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 2rem 1rem;
  }
  .faq-container { width: 100%; max-width: 640px; }
  .faq-container h2 {
    text-align: center; color: #1f2937; margin-bottom: 1.5rem; font-size: 1.6rem;
  }
  .accordion-item {
    background: #fff; border-radius: 10px; margin-bottom: 0.75rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;
  }
  .accordion-header {
    width: 100%; display: flex; align-items: center; justify-content: space-between;
    padding: 1.1rem 1.25rem; background: none; border: none;
    font-size: 1rem; font-weight: 600; color: #1f2937;
    text-align: left; cursor: pointer; font-family: inherit;
    transition: background 0.2s;
  }
  .accordion-header:hover { background: #f9fafb; }
  .accordion-header:focus-visible { outline: 2px solid #2563eb; outline-offset: -2px; }

  /* Plus/minus icon built with CSS */
  .icon {
    position: relative; width: 20px; height: 20px; flex-shrink: 0; margin-left: 1rem;
  }
  .icon::before, .icon::after {
    content: ""; position: absolute; background: #2563eb;
    transition: transform 0.3s ease;
  }
  .icon::before { top: 50%; left: 0; right: 0; height: 2px; transform: translateY(-50%); }
  .icon::after { left: 50%; top: 0; bottom: 0; width: 2px; transform: translateX(-50%); }
  .accordion-item.open .icon::after { transform: translateX(-50%) rotate(90deg); opacity: 0; }

  /* Smooth expand/collapse using grid rows trick */
  .accordion-content {
    display: grid; grid-template-rows: 0fr;
    transition: grid-template-rows 0.3s ease;
  }
  .accordion-item.open .accordion-content { grid-template-rows: 1fr; }
  .accordion-content-inner {
    overflow: hidden; padding: 0 1.25rem;
  }
  .accordion-item.open .accordion-content-inner { padding-bottom: 1.1rem; }
  .accordion-content-inner p {
    color: #4b5563; line-height: 1.65; font-size: 0.95rem;
  }
</style>
</head>
<body>
<div class="faq-container">
  <h2>Frequently Asked Questions</h2>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="faq1" id="faq1-btn">
      How much does it cost?
      <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content" id="faq1" role="region" aria-labelledby="faq1-btn">
      <div class="accordion-content-inner">
        <p>Plans start at $12/month for the Starter tier, which covers up to three projects and 5GB of storage. The Pro plan is $29/month and includes unlimited projects, priority support, and advanced analytics. All plans come with a 14-day free trial — no credit card required.</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="faq2" id="faq2-btn">
      Can I cancel anytime?
      <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content" id="faq2" role="region" aria-labelledby="faq2-btn">
      <div class="accordion-content-inner">
        <p>Yes. There are no contracts and no cancellation fees. Cancel from your account settings in under a minute, and you'll keep access until the end of your current billing period. We don't make you talk to a salesperson or jump through hoops to leave.</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="faq3" id="faq3-btn">
      Do you offer a refund?
      <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content" id="faq3" role="region" aria-labelledby="faq3-btn">
      <div class="accordion-content-inner">
        <p>Absolutely. If you're not satisfied within the first 30 days, email support and we'll refund you in full — no questions asked. After 30 days, we still review every refund request individually and typically approve them if you've barely used the service.</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="faq4" id="faq4-btn">
      Is my data secure?
      <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content" id="faq4" role="region" aria-labelledby="faq4-btn">
      <div class="accordion-content-inner">
        <p>Your data is encrypted in transit (TLS 1.3) and at rest (AES-256). We run daily backups, are SOC 2 Type II compliant, and never sell your data to third parties. You can export or permanently delete all of your data at any time from your account settings.</p>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-header" aria-expanded="false" aria-controls="faq5" id="faq5-btn">
      How do I get support?
      <span class="icon" aria-hidden="true"></span>
    </button>
    <div class="accordion-content" id="faq5" role="region" aria-labelledby="faq5-btn">
      <div class="accordion-content-inner">
        <p>Every plan includes email support with a 24-hour response time. Pro and Enterprise plans get priority live chat and a dedicated account manager. We also maintain a detailed help center with video tutorials and a community forum where most questions get answered within an hour.</p>
      </div>
    </div>
  </div>
</div>

<script>
  // Set SINGLE_OPEN to false if you want multiple items open at once
  const SINGLE_OPEN = true;

  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');

      if (SINGLE_OPEN) {
        // Close all others
        document.querySelectorAll('.accordion-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Toggle this one
      item.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    });
  });
</script>
</body>
</html>
```
## What's inside
- **Smooth expand/collapse.** Uses the modern CSS `grid-template-rows: 0fr → 1fr` transition, which animates height smoothly without needing to know content height in advance — no more jumpy max-height hacks.
- **Plus/minus icon toggle.** A pure-CSS icon (two crossing bars) rotates and fades the vertical bar to turn a plus into a minus when the item opens.
- **Single-open mode.** The `SINGLE_OPEN` constant at the top of the script controls whether opening one item closes the others; flip it to `false` to allow multiple open items.
- **Fully accessible.** Headers are real `<button>` elements with `aria-expanded` and `aria-controls`, content regions use `role="region"` and `aria-labelledby`, and the focus ring is visible for keyboard users.
- **Responsive.** The container caps at 640px and scales fluidly down to mobile, with tap-friendly header padding.
## How to use it
Copy the code block above into a `.html` file and open it in any browser. To add a question, copy one `.accordion-item` block, increment the `id` and `aria-controls`/`aria-labelledby` numbers (e.g., `faq6`), and replace the question and answer text. Set `SINGLE_OPEN` to `true` or `false` at the top of the script depending on whether you want only one answer visible at a time. Change the `#2563eb` blue in the CSS to match your brand, and the accordion is ready to embed on any page.
## Recap
This accordion FAQ gives you a compact, accessible, smoothly animated question-and-answer section in one dependency-free file. Copy the code into a `.html` file, add your own questions, set the single-open flag to your preference, and embed it on your pricing, product, or support page.