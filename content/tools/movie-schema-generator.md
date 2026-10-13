---
title: "Free Movie Schema Generator — Movie JSON-LD"
description: "Generate valid Movie JSON-LD schema free: title, director, release date, duration and genre. Fill the form, copy the code — no sign-up, private."
category: seo
date: 2026-10-13
draft: false
---

Running a film site or reviewing movies? **Movie schema** tells Google the title, director, release date, runtime and genre in a structure it can show as a rich result. Fill in the form and the JSON-LD builds itself live.

<div class="tool-shell" id="mvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Movie Schema Generator</h2>
<p>Valid Movie JSON-LD with director, release date, runtime &amp; genre — built live as you type.</p>
</div>
<button type="button" class="theme-toggle" id="mvTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Fill in the movie details</p>
<div id="mvForm">
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="mvSample">✨ Load sample movie</button>
<button type="button" class="preset-chip" id="mvClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="mvName">Movie title *</label>
<input type="text" id="mvName" class="tool-input" placeholder="e.g. The Night Courier">
</div><div class="setting">
<label for="mvDirector">Director</label>
<input type="text" id="mvDirector" class="tool-input" placeholder="e.g. Jordan Lee">
</div><div class="setting">
<label for="mvDate">Release date</label>
<input type="date" id="mvDate" class="tool-input">
</div><div class="setting">
<label for="mvDuration">Duration (ISO 8601)</label>
<input type="text" id="mvDuration" class="tool-input" placeholder="e.g. PT1H45M">
<div class="hint">PT1H45M = 1 hour 45 minutes. PT30M = 30 minutes.</div>
</div><div class="setting">
<label for="mvGenre">Genre (comma separated)</label>
<input type="text" id="mvGenre" class="tool-input" placeholder="e.g. Drama, Thriller">
</div><div class="setting">
<label for="mvUrl">Movie page URL</label>
<input type="text" id="mvUrl" class="tool-input" placeholder="https://example.com/movies/the-night-courier">
</div><div class="setting">
<label for="mvDesc">Synopsis</label>
<textarea id="mvDesc" class="tool-input" rows="2" placeholder="One or two sentences about the plot"></textarea>
</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Your JSON-LD schema</p>
<div class="results show">
<p class="result-head">Generated schema — updates as you type</p>
<pre id="mvOut" style="white-space:pre-wrap;word-break:break-word;text-align:left;font-size:.82rem;max-height:420px;overflow:auto;"></pre>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mvCopy">Copy schema</button>
<a class="btn-pro-outline" href="https://search.google.com/test/rich-results" target="_blank" rel="noopener">Test in Google Rich Results</a>
</div>
<p class="hint">Paste the schema into your movie page's &lt;head&gt; or just before &lt;/body&gt;. Only filled fields are included — leave optional ones blank freely.</p>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate Movie schema for every title you cover — unlimited, right in your browser.</p>
</div>
</div>
</div>

<script src="/js/seo-schema.js"></script>
<script>
SchemaGen.init({ prefix: 'mv', build: function(get) {
return {
    '@type': 'Movie',
    name: get('Name'),
    director: get('Director') ? { '@type': 'Person', name: get('Director') } : '',
    datePublished: get('Date'),
    duration: get('Duration'),
    genre: get('Genre') ? get('Genre').split(',').map(function(s){ return s.trim(); }).filter(Boolean) : '',
    url: get('Url'),
    description: get('Desc')
  };
}});
document.getElementById('mvSample').addEventListener('click', function(){
  var v = { Name:'The Night Courier', Director:'Jordan Lee', Duration:'PT1H45M', Genre:'Drama, Thriller', Url:'https://example.com/movies/the-night-courier', Desc:'A courier discovers a package that was never meant to be delivered.' };
  Object.keys(v).forEach(function(k){
    var el = document.getElementById('mv' + k);
    if(el){ el.value = v[k]; el.dispatchEvent(new Event('input', {bubbles:true})); el.dispatchEvent(new Event('change', {bubbles:true})); }
  });
  ToolPro.toast('Sample movie loaded', 'ok');
});
document.getElementById('mvClear').addEventListener('click', function(){
  document.querySelectorAll('#mvForm input, #mvForm textarea').forEach(function(el){ el.value = ''; el.dispatchEvent(new Event('input', {bubbles:true})); });
  document.querySelectorAll('#mvForm select').forEach(function(el){ el.selectedIndex = 0; el.dispatchEvent(new Event('change', {bubbles:true})); });
  ToolPro.toast('Form cleared');
});
</script>

## How it works

Type your movie details into the form — title, director, release date, runtime in ISO 8601 format, and comma-separated genres — and the generator assembles a valid `Movie` JSON-LD block in real time. Genres become a proper array, blank fields are dropped automatically, and the preview updates with every keystroke. Hit **Copy schema** and paste it into the movie's page, then validate with Google's Rich Results Test.

## Everyday uses

- **Film bloggers & reviewers** — mark up the movie you're reviewing so Google connects your page to the right title.
- **Streaming guides** — give every title page machine-readable details (runtime, genre, release date).
- **Festival sites** — generate clean schema for each film in your program.
- **Indie filmmakers** — add rich, structured data to your film's landing page.
- **Entertainment affiliates** — build consistent markup across hundreds of title pages in minutes.
