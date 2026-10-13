---
title: "Free Book Schema Generator — Book JSON-LD"
description: "Generate valid Book JSON-LD schema free: title, author, ISBN, publisher, date and format. Fill the form, copy the code — no sign-up, private."
category: seo
date: 2026-10-13
draft: false
---

Publishing a book? **Book schema** tells Google the title, author, ISBN, publisher and format in a structure it understands — which can earn you a rich result with book details. Fill in the form and the JSON-LD builds itself live.

<div class="tool-shell" id="bkShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Book Schema Generator</h2>
<p>Valid Book JSON-LD with title, author, ISBN, publisher &amp; format — built live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="bkTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in the book details</p>
<div id="bkForm">
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="bkSample">✨ Load sample book</button>
<button type="button" class="preset-chip" id="bkClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="bkTitle">Book title *</label>
<input type="text" id="bkTitle" class="tool-input" placeholder="e.g. The Smart Saver's Playbook">
</div><div class="setting">
<label for="bkAuthor">Author</label>
<input type="text" id="bkAuthor" class="tool-input" placeholder="e.g. Alex Morgan">
</div><div class="setting">
<label for="bkISBN">ISBN</label>
<input type="text" id="bkISBN" class="tool-input" placeholder="e.g. 978-1-234567-89-0">
<div class="hint">ISBN-13 preferred. Google uses it to identify the edition.</div>
</div><div class="setting">
<label for="bkDate">Date published</label>
<input type="date" id="bkDate" class="tool-input">
</div><div class="setting">
<label for="bkPublisher">Publisher</label>
<input type="text" id="bkPublisher" class="tool-input" placeholder="e.g. DollarWise Press">
</div><div class="setting">
<label for="bkFormat">Book format</label>
<select id="bkFormat">
<option value="" selected>— Not specified —</option>
<option value="EBook">EBook — digital edition</option>
<option value="Paperback">Paperback</option>
<option value="Hardcover">Hardcover</option>
<option value="AudiobookFormat">Audiobook</option>
</select>
</div><div class="setting">
<label for="bkUrl">Book page URL</label>
<input type="text" id="bkUrl" class="tool-input" placeholder="https://example.com/books/my-book">
</div><div class="setting">
<label for="bkDesc">Description</label>
<textarea id="bkDesc" class="tool-input" rows="2" placeholder="One or two sentences about the book"></textarea>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="bkOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="bkCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your book page's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate Book schema for every title in your catalog — unlimited, right in your browser.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'bk', build: function(get) {
return {
    '@type': 'Book',
    name: get('Title'),
    author: get('Author') ? { '@type': 'Person', name: get('Author') } : '',
    isbn: get('ISBN'),
    datePublished: get('Date'),
    publisher: get('Publisher') ? { '@type': 'Organization', name: get('Publisher') } : '',
    bookFormat: get('Format'),
    url: get('Url'),
    description: get('Desc')
  };
}});
document.getElementById('bkSample').addEventListener('click', function(){
  var v = { Title:'The Smart Saver\'s Playbook', Author:'Alex Morgan', ISBN:'978-1-234567-89-0', Publisher:'DollarWise Press', Format:'EBook', Url:'https://example.com/books/smart-savers-playbook', Desc:'A practical guide to budgeting, saving and investing for beginners.' };
  Object.keys(v).forEach(function(k){
    var el = document.getElementById('bk' + k);
    if(el){ el.value = v[k]; el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); }
  });
  ToolPro.toast('Sample book loaded', 'ok');
});
document.getElementById('bkClear').addEventListener('click', function(){
  document.querySelectorAll('#bkForm input, #bkForm textarea').forEach(function(el){ el.value = ''; el.dispatchEvent(new Event('input', {bubbles:true})); });
  document.querySelectorAll('#bkForm select').forEach(function(el){ el.selectedIndex = 0; el.dispatchEvent(new Event('change', {bubbles:true})); });
  ToolPro.toast('Form cleared');
});
</script>

## How it works

Type your book details into the form — title, author, ISBN, publisher, date and format — and the generator assembles a valid `Book` JSON-LD block in real time. Blank fields are automatically left out, so the markup stays clean. Hit **Copy schema**, paste it into the book's sales or landing page, and confirm it with Google's Rich Results Test.

## Everyday uses

- **Self-published authors** — add rich, structured book data to your book's landing page instead of relying on the retailer.
- **Publishers** — keep a consistent schema template across your whole catalog.
- **Book bloggers & reviewers** — mark up the book you're reviewing so Google connects it to the right edition.
- **Ebook sellers** — generate clean markup for every digital title in minutes.
- **Libraries & bookstores** — give each title page machine-readable edition details.
