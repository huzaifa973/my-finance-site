---
title: "Free Course Schema Generator — Course JSON-LD"
description: "Generate valid Course JSON-LD schema free: course name, provider, duration, price and offers for Google rich course snippets. Fill the form, copy the code."
category: seo
date: 2026-10-13
draft: false
---

Selling a course? **Course schema** tells Google what you're offering — the provider, the workload, and the price — in a format it can show as a rich result. Fill in the form below and the JSON-LD builds itself live.

<div class="tool-shell" id="csShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Course Schema Generator</h2>
<p>Valid Course JSON-LD with name, provider, duration &amp; pricing — built live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="csTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in the course details</p>
<div id="csForm">
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="csSample">✨ Load sample course</button>
<button type="button" class="preset-chip" id="csClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="csName">Course name *</label>
<input type="text" id="csName" class="tool-input" placeholder="e.g. Web Design for Beginners">
</div><div class="setting">
<label for="csProvider">Provider name</label>
<input type="text" id="csProvider" class="tool-input" placeholder="e.g. DollarWise Academy">
</div><div class="setting">
<label for="csProviderType">Provider type</label>
<select id="csProviderType">
<option value="Organization" selected>Organization / School</option>
<option value="Person">Person / Instructor</option>
</select>
</div><div class="setting">
<label for="csUrl">Course page URL</label>
<input type="text" id="csUrl" class="tool-input" placeholder="https://example.com/courses/web-design">
</div><div class="setting">
<label for="csDuration">Duration (workload)</label>
<input type="text" id="csDuration" class="tool-input" placeholder="e.g. P6W or 6 weeks">
<div class="hint">ISO 8601 works best (P6W = 6 weeks, P3M = 3 months). Plain text is accepted too.</div>
</div><div class="setting">
<label for="csMode">Course mode</label>
<select id="csMode">
<option value="" selected>— Not specified —</option>
<option value="online">online</option>
<option value="onsite">onsite</option>
<option value="blended">blended</option>
</select>
</div><div class="setting">
<label for="csPrice">Price (leave blank if free)</label>
<input type="number" id="csPrice" class="tool-input" placeholder="e.g. 49" min="0" step="any">
</div><div class="setting">
<label for="csCurrency">Currency</label>
<select id="csCurrency">
<option value="USD" selected>USD — US Dollar</option>
<option value="EUR">EUR — Euro</option>
<option value="GBP">GBP — British Pound</option>
<option value="PKR">PKR — Pakistani Rupee</option>
<option value="INR">INR — Indian Rupee</option>
<option value="AUD">AUD — Australian Dollar</option>
<option value="CAD">CAD — Canadian Dollar</option>
<option value="JPY">JPY — Japanese Yen</option>
</select>
</div><div class="setting">
<label for="csDesc">Course description</label>
<textarea id="csDesc" class="tool-input" rows="2" placeholder="One or two sentences about what students learn"></textarea>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="csOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="csCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your course page's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate Course schema for every course you sell — unlimited, right in your browser.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'cs', build: function(get) {
return {
    '@type': 'Course',
    name: get('Name'),
    description: get('Desc'),
    url: get('Url'),
    provider: get('Provider') ? { '@type': get('ProviderType'), name: get('Provider') } : '',
    hasCourseInstance: (get('Duration') || get('Mode')) ? {
      '@type': 'CourseInstance',
      courseMode: get('Mode'),
      courseWorkload: get('Duration')
    } : '',
    offers: get('Price') ? {
      '@type': 'Offer',
      price: get('Price'),
      priceCurrency: get('Currency'),
      availability: 'https://schema.org/InStock'
    } : ''
  };
}});
document.getElementById('csSample').addEventListener('click', function(){
  var v = { Name:'Web Design for Beginners', Provider:'DollarWise Academy', ProviderType:'Organization', Url:'https://example.com/courses/web-design', Duration:'P6W', Mode:'online', Price:'49', Currency:'USD', Desc:'Learn HTML, CSS and responsive design from scratch in 6 hands-on weeks.' };
  Object.keys(v).forEach(function(k){
    var el = document.getElementById('cs' + k);
    if(el){ el.value = v[k]; el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); }
  });
  ToolPro.toast('Sample course loaded', 'ok');
});
document.getElementById('csClear').addEventListener('click', function(){
  document.querySelectorAll('#csForm input, #csForm textarea').forEach(function(el){ el.value = ''; el.dispatchEvent(new Event('input', {bubbles:true})); });
  document.querySelectorAll('#csForm select').forEach(function(el){ el.selectedIndex = 0; el.dispatchEvent(new Event('change', {bubbles:true})); });
  ToolPro.toast('Form cleared');
});
</script>

## How it works

Type your course details into the form — name, provider, workload, price — and the generator assembles a valid `Course` JSON-LD block with a `CourseInstance` (for duration and mode) and an `Offer` (for pricing) in real time. Blank fields are automatically left out of the output, so the markup is always clean. Hit **Copy schema**, paste it into the course landing page, and confirm it with Google's Rich Results Test.

## Everyday uses

- **Course creators** — add rich, machine-readable details to Udemy-style landing pages, Teachable or self-hosted courses.
- **Coaching businesses** — mark up workshops and bootcamps so Google understands the format and price.
- **Agencies & freelancers** — generate client-ready schema in seconds instead of hand-writing JSON-LD.
- **Membership sites** — keep a consistent schema template across every course in your catalog.
- **Educators** — make free and paid tutorials eligible for course-style rich results in search.
