---
title: "Recipe Schema Generator — JSON-LD for Recipe Rich Results"
description: "Generate Recipe schema (JSON-LD) free: cook times, ingredients, steps, calories and servings for Google recipe carousels. Fill the form, copy the code."
category: seo
date: 2026-10-12
draft: false
---

**Recipe schema** gets your dishes into Google's recipe carousel with cook time, calories and ratings visible before the click. Paste your ingredients and steps — one per line — and copy the JSON-LD.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Recipe Schema Generator</h2>
<p>Recipe cards with times, ingredients and steps — food bloggers' favorite.</p>
</div>
<button type="button" class="theme-toggle" id="cvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in the details</p>
<div id="cvForm">
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="cvName">Recipe name *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. 15-Minute Garlic Butter Pasta">

</div><div class="setting">
<label for="cvDesc">Description</label>
<input type="text" id="cvDesc" class="tool-input" placeholder="One tempting sentence">

</div><div class="setting">
<label for="cvImage">Image URL</label>
<input type="text" id="cvImage" class="tool-input" placeholder="https://…">

</div><div class="setting">
<label for="cvPrep">Prep time (minutes)</label>
<input type="number" id="cvPrep" class="tool-input" placeholder="10">

</div><div class="setting">
<label for="cvCook">Cook time (minutes)</label>
<input type="number" id="cvCook" class="tool-input" placeholder="15">

</div><div class="setting">
<label for="cvYield">Servings</label>
<input type="text" id="cvYield" class="tool-input" placeholder="4">

</div><div class="setting">
<label for="cvCal">Calories (kcal)</label>
<input type="number" id="cvCal" class="tool-input" placeholder="520">

</div><div class="setting">
<label for="cvIng">Ingredients — one per line</label>
<textarea id="cvIng" class="tool-input" rows="5" placeholder="200g spaghetti
3 cloves garlic
50g butter"></textarea>

</div><div class="setting">
<label for="cvSteps">Instructions — one step per line</label>
<textarea id="cvSteps" class="tool-input" rows="5" placeholder="Boil salted water and cook pasta.
Melt butter, fry garlic 1 minute.
Toss pasta through with a splash of pasta water."></textarea>

</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="cvOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="cvCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your page's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This generator runs entirely in your browser — nothing you type is sent anywhere.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'cv', build: function(get) {
var mins = function(v) { var n = parseInt(v, 10); return isNaN(n) ? '' : 'PT' + n + 'M'; };
  return {
    '@type': 'Recipe',
    name: get('Name'),
    description: get('Desc'),
    image: get('Image'),
    prepTime: mins(get('Prep')),
    cookTime: mins(get('Cook')),
    recipeYield: get('Yield'),
    nutrition: get('Cal') ? { '@type': 'NutritionInformation', calories: get('Cal') + ' calories' } : '',
    recipeIngredient: get.lines('Ing'),
    recipeInstructions: get.lines('Steps').map(function(s) { return { '@type': 'HowToStep', text: s }; })
  };
}});
</script>


## How to use it

1. **Name the dish and add times** — prep and cook convert to ISO format automatically.
2. **Paste ingredients and steps**, one per line.
3. **Copy the schema** into the recipe post and test it.

## About this tool

Food searches are visual: recipe rich results show the dish photo, total time and calories in a carousel that dominates mobile results. The schema must mirror the recipe on the page — same ingredients, same steps — and times use the ISO 8601 duration format (PT15M), which this generator handles for you.

Add a real photo URL: recipe results with images massively out-click those without.

## Frequently asked questions

**Can I add a rating too?**
Yes — paste an AggregateRating block next to this schema (the Product generator shows the shape). Ratings must come from real reader reviews.

**Why one ingredient per line?**
Each line becomes one recipeIngredient entry — exactly how Google expects the list.

**Is my data sent anywhere?**
No — everything is generated in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
