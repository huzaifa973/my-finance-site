---
title: "Responsive Pricing Table in HTML & CSS (3 Tiers, Free Source Code)"
description: "Free responsive pricing table source code with three tiers, a highlighted Most Popular plan, and a monthly/yearly toggle — one self-contained HTML file."
date: 2026-11-02
draft: false
tags: ["html", "css", "source code", "pricing table"]
---
Every SaaS site, course page, and membership offer eventually needs a pricing table, and the difference between a good one and a great one is how quickly a visitor can compare plans and pick one. This pricing table has three tiers — Basic, Pro, and Enterprise — with the middle plan visually highlighted as "Most Popular" so the eye is drawn to the option you want to sell most.
It is one self-contained HTML file: CSS in a `<style>` tag and a small amount of JavaScript for the monthly/yearly billing toggle. No frameworks, no dependencies, and no images. The layout is a CSS grid that collapses to a single column on phones, and each card lifts on hover with a subtle shadow so the table feels alive.
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pricing Table</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f4f6fb;
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 3rem 1rem;
    color: #1f2937;
  }
  h1 { font-size: 2rem; margin-bottom: 0.5rem; }
  .subtitle { color: #6b7280; margin-bottom: 1.5rem; }

  /* Toggle */
  .toggle-wrap {
    display: flex; align-items: center; gap: 0.75rem;
    margin-bottom: 2.5rem; font-size: 0.95rem;
  }
  .toggle-wrap .active-label { font-weight: 700; color: #4f46e5; }
  .switch {
    position: relative; width: 56px; height: 30px;
    background: #4f46e5; border-radius: 999px;
    cursor: pointer; transition: background 0.3s;
  }
  .switch::after {
    content: ''; position: absolute; top: 3px; left: 3px;
    width: 24px; height: 24px; background: #fff;
    border-radius: 50%; transition: transform 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }
  .switch.yearly::after { transform: translateX(26px); }

  /* Grid */
  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1000px; width: 100%;
    align-items: center;
  }
  .card {
    background: #fff; border-radius: 16px;
    padding: 2rem 1.75rem;
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.12);
  }
  .card.featured {
    background: linear-gradient(160deg, #4f46e5, #7c3aed);
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(79,70,229,0.35);
    padding-top: 2.75rem;
  }
  .card.featured:hover { transform: scale(1.05) translateY(-6px); }
  .badge {
    position: absolute; top: -14px; left: 50%;
    transform: translateX(-50%);
    background: #fbbf24; color: #78350f;
    font-size: 0.75rem; font-weight: 700;
    padding: 0.3rem 1rem; border-radius: 999px;
    text-transform: uppercase; letter-spacing: 0.5px;
  }
  .plan-name { font-size: 1.1rem; font-weight: 600; opacity: 0.85; }
  .price {
    font-size: 2.75rem; font-weight: 800;
    margin: 0.75rem 0 0.25rem;
    display: flex; align-items: baseline; gap: 0.25rem;
  }
  .price .currency { font-size: 1.25rem; }
  .price .period { font-size: 0.9rem; font-weight: 400; opacity: 0.7; }
  .card.featured .period { opacity: 0.85; }
  .features { list-style: none; margin: 1.5rem 0; }
  .features li {
    padding: 0.5rem 0; font-size: 0.95rem;
    display: flex; align-items: center; gap: 0.6rem;
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }
  .card.featured .features li { border-bottom-color: rgba(255,255,255,0.15); }
  .features li::before {
    content: '✓'; font-weight: 700; color: #10b981;
    width: 20px; height: 20px; border-radius: 50%;
    background: rgba(16,185,129,0.12);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; flex-shrink: 0;
  }
  .card.featured .features li::before {
    background: rgba(255,255,255,0.2); color: #fff;
  }
  .cta {
    display: block; width: 100%; text-align: center;
    padding: 0.85rem; border-radius: 10px;
    font-weight: 700; text-decoration: none;
    transition: opacity 0.2s, transform 0.2s;
    border: 2px solid #4f46e5; color: #4f46e5;
  }
  .cta:hover { opacity: 0.85; transform: translateY(-2px); }
  .card.featured .cta {
    background: #fff; color: #4f46e5; border-color: #fff;
  }

  @media (max-width: 820px) {
    .pricing-grid { grid-template-columns: 1fr; max-width: 420px; }
    .card.featured { transform: none; }
    .card.featured:hover { transform: translateY(-6px); }
  }
</style>
</head>
<body>
  <h1>Simple, transparent pricing</h1>
  <p class="subtitle">Choose the plan that fits you. Cancel anytime.</p>

  <div class="toggle-wrap">
    <span id="monthlyLabel" class="active-label">Monthly</span>
    <div class="switch" id="billingToggle"></div>
    <span id="yearlyLabel">Yearly <small>(save 20%)</small></span>
  </div>

  <div class="pricing-grid">
    <!-- Basic -->
    <div class="card">
      <div class="plan-name">Basic</div>
      <div class="price">
        <span class="currency">$</span>
        <span class="amount" data-monthly="9" data-yearly="7">9</span>
        <span class="period">/mo</span>
      </div>
      <ul class="features">
        <li>1 user account</li>
        <li>5 GB storage</li>
        <li>Email support</li>
        <li>Basic analytics</li>
      </ul>
      <a href="#" class="cta">Get Started</a>
    </div>

    <!-- Pro (featured) -->
    <div class="card featured">
      <div class="badge">Most Popular</div>
      <div class="plan-name">Pro</div>
      <div class="price">
        <span class="currency">$</span>
        <span class="amount" data-monthly="29" data-yearly="23">29</span>
        <span class="period">/mo</span>
      </div>
      <ul class="features">
        <li>Up to 10 users</li>
        <li>100 GB storage</li>
        <li>Priority email & chat support</li>
        <li>Advanced analytics & reports</li>
        <li>Custom integrations</li>
      </ul>
      <a href="#" class="cta">Start Free Trial</a>
    </div>

    <!-- Enterprise -->
    <div class="card">
      <div class="plan-name">Enterprise</div>
      <div class="price">
        <span class="currency">$</span>
        <span class="amount" data-monthly="79" data-yearly="63">79</span>
        <span class="period">/mo</span>
      </div>
      <ul class="features">
        <li>Unlimited users</li>
        <li>Unlimited storage</li>
        <li>24/7 phone support</li>
        <li>Dedicated account manager</li>
        <li>SSO & advanced security</li>
      </ul>
      <a href="#" class="cta">Contact Sales</a>
    </div>
  </div>

<script>
  const toggle = document.getElementById('billingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const yearlyLabel = document.getElementById('yearlyLabel');
  const amounts = document.querySelectorAll('.amount');
  let isYearly = false;

  toggle.addEventListener('click', () => {
    isYearly = !isYearly;
    toggle.classList.toggle('yearly', isYearly);
    monthlyLabel.classList.toggle('active-label', !isYearly);
    yearlyLabel.classList.toggle('active-label', isYearly);
    amounts.forEach(el => {
      el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
    });
  });
</script>
</body>
</html>
```
## What's inside
- **Three-tier grid with a featured plan.** CSS grid lays out Basic, Pro, and Enterprise side by side, and the middle card uses a gradient background, a larger scale, and a "Most Popular" badge so it stands out immediately.
- **Monthly/yearly toggle with real price switching.** Each price stores both values in `data-monthly` and `data-yearly` attributes; the JavaScript reads them and updates the displayed amount when the sliding toggle is clicked, and highlights the active billing label.
- **Hover lift effects.** Every card translates upward and gains a deeper shadow on hover, and the CTA buttons shift slightly too — small touches that make the table feel interactive.
- **Fully responsive.** Below 820px the grid collapses to a single column and the featured card drops its scale so nothing overflows on phones.
## How to use it
Copy the code block above into a `.html` file and open it in any browser. To customize, edit the plan names, prices in the `data-monthly`/`data-yearly` attributes, feature list items, and the indigo gradient colors in the `<style>` block. The CTA links point to `#` — point them at your checkout or signup URL.
## Recap
This pricing table gives you a polished, mobile-friendly three-tier layout with a highlighted popular plan and a working billing toggle in one dependency-free file. Copy the code above into a `.html` file, swap in your own prices and features, and drop it into your landing page.
