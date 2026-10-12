---
title: "Video Schema Generator — JSON-LD VideoObject for Video SEO"
description: "Generate VideoObject schema (JSON-LD) free: title, thumbnail, upload date and duration so your videos surface in Google video search. No sign-up."
category: seo
date: 2026-10-12
draft: false
---

**VideoObject schema** is how Google understands the video on your page — its title, thumbnail, length and upload date — qualifying it for video search, thumbnails in results and key moments.

<div class="tool-shell" id="cvShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.42l9 9a2 2 0 0 0 2.82 0l7-7a2 2 0 0 0 0-2.84zM6.5 8A1.5 1.5 0 0 1 5 6.5 1.5 1.5 0 0 1 6.5 5 1.5 1.5 0 0 1 8 6.5 1.5 1.5 0 0 1 6.5 8z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Video Schema Generator</h2>
<p>Make your videos findable in Google video search and rich results.</p>
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
<label for="cvName">Video title *</label>
<input type="text" id="cvName" class="tool-input" placeholder="e.g. How to Merge PDFs — 60 Second Tutorial">

</div><div class="setting">
<label for="cvDesc">Description</label>
<input type="text" id="cvDesc" class="tool-input" placeholder="What the video covers">

</div><div class="setting">
<label for="cvThumb">Thumbnail URL *</label>
<input type="text" id="cvThumb" class="tool-input" placeholder="https://…/thumb.jpg">

</div><div class="setting">
<label for="cvDate">Upload date</label>
<input type="date" id="cvDate" class="tool-input" placeholder="">

</div><div class="setting">
<label for="cvMin">Duration — minutes</label>
<input type="number" id="cvMin" class="tool-input" placeholder="2">

</div><div class="setting">
<label for="cvSec">Duration — seconds</label>
<input type="number" id="cvSec" class="tool-input" placeholder="30">

</div><div class="setting">
<label for="cvContent">Video file URL (contentUrl)</label>
<input type="text" id="cvContent" class="tool-input" placeholder="https://…/video.mp4">

</div><div class="setting">
<label for="cvEmbed">Embed URL (YouTube/Vimeo player)</label>
<input type="text" id="cvEmbed" class="tool-input" placeholder="https://www.youtube.com/embed/…">

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
var hasDur = get('Min') || get('Sec');
  return {
    '@type': 'VideoObject',
    name: get('Name'),
    description: get('Desc'),
    thumbnailUrl: get('Thumb'),
    uploadDate: get('Date'),
    duration: hasDur ? 'PT' + (parseInt(get('Min'), 10) || 0) + 'M' + (parseInt(get('Sec'), 10) || 0) + 'S' : '',
    contentUrl: get('Content'),
    embedUrl: get('Embed')
  };
}});
</script>


## How to use it

1. **Title, thumbnail and upload date** — the three essentials.
2. **Add duration** in minutes + seconds (converted to ISO format for you).
3. **Copy to the page hosting the video** — the schema must sit on a page where the video is playable.

## About this tool

Video results dominate many how-to searches. VideoObject markup gives Google the metadata it needs to index your video properly: a good thumbnail URL (high-resolution, unique per video), an accurate duration and at least one of contentUrl (the file) or embedUrl (the player).

The page itself must feature the video prominently — schema about a video that is buried or absent can be ignored.

## Frequently asked questions

**YouTube already has my video — do I still need this?**
On YouTube itself, no. On YOUR page embedding that video, yes — the embedUrl form of this schema is how your page earns the video rich result.

**What makes a valid thumbnail?**
A stable, publicly accessible image URL, ideally 1280×720 or larger, that actually represents the video.

**Is my data sent anywhere?**
No — generated locally in your browser.

## More tools

- [Meta Tag Generator](/tools/meta-tag-generator/) — titles, descriptions and Open Graph
- [FAQ Schema Generator](/tools/faq-schema-generator/) — FAQPage rich results
- [Sitemap Generator](/tools/xml-sitemap-generator/) — build an XML sitemap
- [All SEO tools](/tools/seo/)
