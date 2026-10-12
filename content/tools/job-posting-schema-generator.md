---
title: "Job Posting Schema Generator — JSON-LD for Google Jobs"
description: "Generate JobPosting schema (JSON-LD) free so your vacancy appears in Google for Jobs: salary, type, location, remote. Fill the form, copy the code."
category: seo
date: 2026-10-12
draft: false
---

**JobPosting schema** is how roles appear in Google for Jobs — the big job box above normal results. Fill in the role, salary and location; copy the JSON-LD to the job page.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Job Posting Schema Generator</h2>
<p>Get your vacancy into Google for Jobs with salary and location data.</p>
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
<label for="cvTitle">Job title *</label>
<input type="text" id="cvTitle" class="tool-input" placeholder="e.g. Junior Web Developer">

</div><div class="setting">
<label for="cvCompany">Company *</label>
<input type="text" id="cvCompany" class="tool-input" placeholder="e.g. DollarWise">

</div><div class="setting">
<label for="cvLocType">Location type</label>
<select id="cvLocType">
<option value="onsite" selected>On-site</option>
<option value="remote">Remote</option>
<option value="hybrid">Hybrid</option>
</select>

</div><div class="setting">
<label for="cvCity">City (for on-site/hybrid)</label>
<input type="text" id="cvCity" class="tool-input" placeholder="Multan">

</div><div class="setting">
<label for="cvCountry">Country</label>
<input type="text" id="cvCountry" class="tool-input" placeholder="PK">

</div><div class="setting">
<label for="cvEmpType">Employment type</label>
<select id="cvEmpType">
<option value="FULL_TIME" selected>Full-time</option>
<option value="PART_TIME">Part-time</option>
<option value="CONTRACTOR">Contract</option>
<option value="INTERN">Internship</option>
<option value="TEMPORARY">Temporary</option>
</select>

</div><div class="setting">
<label for="cvSalMin">Salary min</label>
<input type="number" id="cvSalMin" class="tool-input" placeholder="800">

</div><div class="setting">
<label for="cvSalMax">Salary max</label>
<input type="number" id="cvSalMax" class="tool-input" placeholder="1200">

</div><div class="setting">
<label for="cvCurr">Salary currency</label>
<select id="cvCurr">
<option value="USD" selected>USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
<option value="PKR">PKR</option>
<option value="INR">INR</option>
</select>

</div><div class="setting">
<label for="cvUnit">Salary period</label>
<select id="cvUnit">
<option value="MONTH" selected>Per month</option>
<option value="YEAR">Per year</option>
<option value="HOUR">Per hour</option>
</select>

</div><div class="setting">
<label for="cvPosted">Date posted</label>
<input type="date" id="cvPosted" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvValid">Applications close</label>
<input type="date" id="cvValid" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvDesc">Job description</label>
<textarea id="cvDesc" class="tool-input" rows="3" placeholder="Responsibilities and requirements in brief"></textarea>

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
var remote = get('LocType') === 'remote';
  return {
    '@type': 'JobPosting',
    title: get('Title'),
    description: get('Desc'),
    datePosted: get('Posted'),
    validThrough: get('Valid'),
    employmentType: get('EmpType'),
    hiringOrganization: get('Company') ? { '@type': 'Organization', name: get('Company') } : '',
    jobLocationType: remote ? 'TELECOMMUTE' : '',
    jobLocation: remote ? '' : { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: get('City'), addressCountry: get('Country') } },
    applicantLocationRequirements: remote ? { '@type': 'Country', name: get('Country') } : '',
    baseSalary: get('SalMin') ? { '@type': 'MonetaryAmount', currency: get('Curr'), value: { '@type': 'QuantitativeValue', minValue: get('SalMin'), maxValue: get('SalMax'), unitText: get('Unit') } } : ''
  };
}});
</script>


## How to use it

1. **Title, company and location** — remote roles get the TELECOMMUTE treatment automatically.
2. **Add the salary range** — postings with salaries get far more clicks in Google Jobs.
3. **Copy to the job page** and remove the schema when the role closes.

## About this tool

Google for Jobs aggregates postings from pages carrying valid JobPosting markup. Salary, employment type and a real application location (or honest remote status) are the fields that decide whether your listing shows — and expired postings must be removed or marked closed, or Google may penalize the page.

The validThrough date matters: set it to your real closing date and take the page down when the role fills.

## Frequently asked questions

**Is salary required?**
Technically optional, practically essential — Google highlights salary in the listing and click-through jumps when it is present.

**My role is fully remote — what city do I put?**
Choose 'Remote' as location type; the generator switches to jobLocationType TELECOMMUTE with your country as the applicant requirement.

**Is my data sent anywhere?**
No — generated locally in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
