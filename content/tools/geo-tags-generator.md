---
title: "Free Geo Meta Tag Generator — Local SEO Location Tags"
description: "Generate geo meta tags free: geo.region, geo.placename, geo.position and ICBM tags for local SEO. Enter coordinates, copy the code — no sign-up."
category: seo
date: 2026-10-14
draft: false
---

Running a local business? **Geo meta tags** tell search engines exactly where you are — your coordinates, region and place name — so nearby customers find you first. Enter your location details and copy the complete tag set into your page's `<head>`.

<div class="tool-shell" id="geoShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 8.5c0 5.25 7 13 7 13s7-7.75 7-13C19 5.13 15.87 2 12 2zm0 9.5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Geo Meta Tag Generator</h2>
<p>geo.region, geo.placename, geo.position &amp; ICBM tags — built from your coordinates.</p>
</div>
<button type="button" class="theme-toggle" id="geoTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Your location</p>
<div class="settings-panel">
<div class="preset-row">
<button type="button" class="preset-chip" id="geoSample">✨ Load sample</button>
<button type="button" class="preset-chip" id="geoClear">🗑 Clear</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="geoLat">Latitude *</label>
<input type="text" id="geoLat" class="tool-input" placeholder="e.g. 37.7749" inputmode="decimal">
<div class="hint">Decimal degrees, −90 to 90. (Find it: right-click your spot in Google Maps.)</div>
</div><div class="setting">
<label for="geoLon">Longitude *</label>
<input type="text" id="geoLon" class="tool-input" placeholder="e.g. -122.4194" inputmode="decimal">
<div class="hint">Decimal degrees, −180 to 180.</div>
</div><div class="setting">
<label for="geoRegion">Region code</label>
<input type="text" id="geoRegion" class="tool-input" placeholder="e.g. US-CA">
<div class="hint">Country and region, e.g. US-CA, GB-ENG, PK-PB.</div>
</div><div class="setting">
<label for="geoPlace">Place name *</label>
<input type="text" id="geoPlace" class="tool-input" placeholder="e.g. San Francisco">
<div class="hint" id="geoStatus">City or locality name as customers know it.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Get your geo tags</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="geoGo" disabled>
<svg viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
Generate tags
</button>
<button type="button" class="btn-pro-outline" id="geoCopy" disabled>📋 Copy tags</button>
</div>
<div class="results" id="geoResults">
<p class="result-head">🏷 Paste into your page's &lt;head&gt;</p>
<pre class="tool-output" id="geoOut" style="white-space:pre-wrap;word-break:break-all;max-height:300px;overflow:auto;font-size:.82rem;"></pre>
</div>
<div class="hint">Pair geo tags with a Google Business Profile and consistent NAP (name, address, phone) for the strongest local signal.</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Generate unlimited geo tag sets — free forever, right in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
'use strict';
var shell = document.getElementById('geoShell');
ToolPro.themeToggle(shell, document.getElementById('geoTheme'));
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }
function numOk(v, lo, hi){
  if(v === '') return false;
  var n = Number(v);
  return isFinite(n) && n >= lo && n <= hi;
}
var last = '';
function refresh(){
  var lat = document.getElementById('geoLat').value.trim();
  var lon = document.getElementById('geoLon').value.trim();
  var place = document.getElementById('geoPlace').value.trim();
  var st = document.getElementById('geoStatus');
  var latOk = numOk(lat, -90, 90), lonOk = numOk(lon, -180, 180);
  if(lat && !latOk) st.textContent = '⚠️ Latitude must be a number between −90 and 90.';
  else if(lon && !lonOk) st.textContent = '⚠️ Longitude must be a number between −180 and 180.';
  else if(latOk && lonOk && place) st.textContent = '✅ Location looks good.';
  else st.textContent = 'City or locality name as customers know it.';
  document.getElementById('geoGo').disabled = !(latOk && lonOk && place);
}
['geoLat','geoLon','geoRegion','geoPlace'].forEach(function(id){
  document.getElementById(id).addEventListener('input', refresh);
});
function gen(){
  var lat = document.getElementById('geoLat').value.trim();
  var lon = document.getElementById('geoLon').value.trim();
  var region = document.getElementById('geoRegion').value.trim();
  var place = document.getElementById('geoPlace').value.trim();
  if(!(numOk(lat, -90, 90) && numOk(lon, -180, 180) && place)){
    ToolPro.toast('Enter valid coordinates and a place name', 'err'); return;
  }
  var L = [];
  if(region) L.push('<meta name="geo.region" content="' + esc(region) + '">');
  L.push('<meta name="geo.placename" content="' + esc(place) + '">');
  L.push('<meta name="geo.position" content="' + esc(lat) + ';' + esc(lon) + '">');
  L.push('<meta name="ICBM" content="' + esc(lat) + ', ' + esc(lon) + '">');
  last = L.join('\n');
  document.getElementById('geoOut').textContent = last;
  document.getElementById('geoResults').classList.add('show');
  document.getElementById('geoCopy').disabled = false;
  ToolPro.toast('Tags generated', 'ok');
}
document.getElementById('geoGo').addEventListener('click', gen);
document.getElementById('geoCopy').addEventListener('click', function(){
  if(!last) gen();
  if(last) ToolPro.copyText(last, 'Tags copied — paste into your <head>');
});
document.getElementById('geoSample').addEventListener('click', function(){
  document.getElementById('geoLat').value = '37.7749';
  document.getElementById('geoLon').value = '-122.4194';
  document.getElementById('geoRegion').value = 'US-CA';
  document.getElementById('geoPlace').value = 'San Francisco';
  refresh();
  ToolPro.toast('Sample loaded', 'ok');
});
document.getElementById('geoClear').addEventListener('click', function(){
  ['geoLat','geoLon','geoRegion','geoPlace'].forEach(function(id){ document.getElementById(id).value = ''; });
  document.getElementById('geoResults').classList.remove('show');
  document.getElementById('geoCopy').disabled = true;
  last = '';
  refresh();
  ToolPro.toast('Form cleared');
});
refresh();
})();
</script>

## How it works

1. **Enter your coordinates** — latitude and longitude in decimal degrees, validated live as you type.
2. **Add region and place name** — the region code (like US-CA) and the city name your customers search for.
3. **Generate and copy** — you get all four tags: `geo.region`, `geo.placename`, `geo.position` and `ICBM`, ready for your `<head>`.

## Everyday uses

- **Local shops & restaurants** — help "near me" searches connect to your exact location.
- **Service businesses** — plumbers, salons and clinics targeting one city or region.
- **Real-estate agents** — tag property and neighborhood pages with precise coordinates.
- **Event venues** — make one-off locations discoverable in local search.
- **Multi-branch brands** — give every branch page its own geo tag set.

## Frequently asked questions

**Do geo meta tags still matter for SEO?**
They are one signal among many — they won't rank you alone, but combined with a Google Business Profile and consistent address listings they sharpen your local relevance.

**Where do I find my latitude and longitude?**
Right-click any spot in Google Maps and the coordinates appear; click them to copy. Use decimal format, not degrees/minutes/seconds.

**What's the difference between geo.position and ICBM?**
Both carry your coordinates — `geo.position` uses a semicolon separator, the older `ICBM` tag uses a comma. Including both covers every parser.

**Should every page have geo tags or just the contact page?**
Put them on location-relevant pages: homepage, contact, and each branch or service-area page. Blog posts with no local intent don't need them.
