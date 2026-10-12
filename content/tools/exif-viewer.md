---
title: "Free EXIF Viewer — See the Hidden Data in Your Photos"
description: "View EXIF metadata hidden in JPG and TIFF photos — camera, lens, date, GPS location, shutter speed and ISO. Free and private, nothing is uploaded."
category: image
date: 2026-10-12
draft: false
---

## How it works

Almost every photo from a phone or camera carries a hidden block of data called EXIF: the camera model, the exact date and time, shutter settings, and often the GPS coordinates of where the shot was taken. Upload a photo here and this tool reads that data locally, in your browser, and lays it out in a clean report.

<div class="tool-shell" id="exfShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M9 2L7.17 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.17L15 2H9zm3 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>EXIF Viewer</h2>
<p>Reveal the camera settings, date and GPS location stored inside your photos.</p>
</div>
<button type="button" class="theme-toggle" id="exfTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add a photo</p>
<div class="dropzone" id="exfDrop">
<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>
<strong>Drag &amp; drop a photo here</strong>
<span>or click to browse — JPG or TIFF work best</span>
<input type="file" id="exfFile" accept="image/jpeg,image/tiff,.jpg,.jpeg,.tif,.tiff">
</div>
<div class="hint">Phone and camera JPGs carry rich EXIF data. Screenshots, downloads and most PNG/WebP files usually have little or none.</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Read the report</p>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="exfClear">Clear report</button>
</div>
<div class="results" id="exfResults">
<p class="result-head">🔍 Photo report</p>
<div class="result-summary" id="exfSummary"></div>
<div id="exfTable"></div>
<p id="exfNone" style="display:none;"></p>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — inspect as many photos as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('exfShell');
  ToolPro.themeToggle(shell, document.getElementById('exfTheme'));

  var resBox = document.getElementById('exfResults');
  var sumEl = document.getElementById('exfSummary');
  var tableEl = document.getElementById('exfTable');
  var noneEl = document.getElementById('exfNone');

  var ORIENT = {
    1: 'Normal (no rotation)',
    2: 'Mirrored horizontally',
    3: 'Rotated 180°',
    4: 'Mirrored vertically',
    5: 'Mirrored + rotated 270°',
    6: 'Rotated 90° clockwise',
    7: 'Mirrored + rotated 90°',
    8: 'Rotated 270° clockwise'
  };

  function esc(s){
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function getString(bytes, off, len){
    var s = '';
    for(var i = 0; i < len; i++){
      var c = bytes[off + i];
      if(c === 0) break;
      s += String.fromCharCode(c);
    }
    return s;
  }

  // Minimal, correct EXIF parser: JPEG APP1 or raw TIFF, both byte orders.
  function parseExif(buffer){
    try {
      var view = new DataView(buffer);
      var bytes = new Uint8Array(buffer);
      var tiffStart = -1;
      if(bytes.length >= 2 && bytes[0] === 0xFF && bytes[1] === 0xD8){
        var off = 2;
        while(off + 4 <= bytes.length){
          if(bytes[off] !== 0xFF) break;
          var marker = bytes[off + 1];
          if(marker === 0xDA || marker === 0xD9) break;
          var segLen = view.getUint16(off + 2, false);
          if(marker === 0xE1 && off + 10 <= bytes.length &&
             getString(bytes, off + 4, 4) === 'Exif' && bytes[off + 8] === 0 && bytes[off + 9] === 0){
            tiffStart = off + 10;
            break;
          }
          if(segLen < 2) break;
          off += 2 + segLen;
        }
      } else if(bytes.length >= 4 &&
        ((bytes[0] === 0x49 && bytes[1] === 0x49 && bytes[2] === 0x2A && bytes[3] === 0x00) ||
         (bytes[0] === 0x4D && bytes[1] === 0x4D && bytes[2] === 0x00 && bytes[3] === 0x2A))){
        tiffStart = 0;
      }
      if(tiffStart < 0 || tiffStart + 8 > bytes.length) return null;

      var le = view.getUint16(tiffStart, false) === 0x4949;
      function u16(o){ return view.getUint16(tiffStart + o, le); }
      function u32(o){ return view.getUint32(tiffStart + o, le); }
      if(u16(2) !== 42) return null;

      var TYPE_SIZES = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 6: 1, 7: 1, 8: 2, 9: 4, 10: 8, 11: 4, 12: 8 };

      function readEntryVal(eRel){
        var type = u16(eRel + 2);
        var count = u32(eRel + 4);
        var size = (TYPE_SIZES[type] || 1) * count;
        var vOff = size <= 4 ? tiffStart + eRel + 8 : tiffStart + u32(eRel + 8);
        if(vOff < 0 || vOff >= bytes.length) return null;
        var i, vals = [];
        switch(type){
          case 2:
            return getString(bytes, vOff, count).replace(/ +$/, '');
          case 1: case 7:
            for(i = 0; i < count; i++) vals.push(bytes[vOff + i]);
            return count === 1 ? vals[0] : vals;
          case 3:
            for(i = 0; i < count; i++) vals.push(view.getUint16(vOff + i * 2, le));
            return count === 1 ? vals[0] : vals;
          case 4:
            for(i = 0; i < count; i++) vals.push(view.getUint32(vOff + i * 4, le));
            return count === 1 ? vals[0] : vals;
          case 9:
            for(i = 0; i < count; i++) vals.push(view.getInt32(vOff + i * 4, le));
            return count === 1 ? vals[0] : vals;
          case 5:
            for(i = 0; i < count; i++) vals.push({ n: view.getUint32(vOff + i * 8, le), d: view.getUint32(vOff + i * 8 + 4, le) });
            return count === 1 ? vals[0] : vals;
          case 10:
            for(i = 0; i < count; i++) vals.push({ n: view.getInt32(vOff + i * 8, le), d: view.getInt32(vOff + i * 8 + 4, le) });
            return count === 1 ? vals[0] : vals;
          default:
            return null;
        }
      }

      function readIFD(rel){
        var out = {};
        if(rel < 8 || tiffStart + rel + 2 > bytes.length) return out;
        var n = u16(rel);
        for(var i = 0; i < n; i++){
          var eRel = rel + 2 + i * 12;
          if(tiffStart + eRel + 12 > bytes.length) break;
          var tag = u16(eRel);
          try { out[tag] = readEntryVal(eRel); } catch(err) { /* skip malformed entry */ }
        }
        return out;
      }

      var ifd0 = readIFD(u32(4));
      var data = { ifd0: ifd0, exif: {}, gps: {} };
      if(typeof ifd0[0x8769] === 'number') data.exif = readIFD(ifd0[0x8769]);
      if(typeof ifd0[0x8825] === 'number') data.gps = readIFD(ifd0[0x8825]);
      return data;
    } catch(err) {
      return null;
    }
  }

  function rv(r){
    if(r === null || r === undefined) return NaN;
    if(typeof r === 'number') return r;
    return r.d ? r.n / r.d : 0;
  }

  function prettyDate(v){
    return String(v).replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3');
  }

  function gpsCoord(arr){
    if(!arr || typeof arr.length !== 'number' || arr.length < 3) return NaN;
    return rv(arr[0]) + rv(arr[1]) / 60 + rv(arr[2]) / 3600;
  }

  function buildRows(data){
    var rows = [];
    function add(label, val){
      if(val === undefined || val === null || val === '') return;
      if(typeof val === 'number' && isNaN(val)) return;
      rows.push([label, val, false]);
    }
    var a = data.ifd0 || {}, e = data.exif || {}, g = data.gps || {};
    add('Camera make', a[0x010F]);
    add('Camera model', a[0x0110]);
    add('Lens model', e[0xA434]);
    add('Software', a[0x0131]);
    add('Artist', a[0x013B]);
    if(a[0x0132]) add('Date modified', prettyDate(a[0x0132]));
    if(e[0x9003]) add('Date taken', prettyDate(e[0x9003]));
    if(e[0x829A] !== undefined && e[0x829A] !== null){
      var ex = rv(e[0x829A]);
      if(!isNaN(ex) && ex > 0) add('Exposure time', ex < 1 ? '1/' + Math.round(1 / ex) + ' s' : (Math.round(ex * 100) / 100) + ' s');
    }
    if(e[0x829D] !== undefined && e[0x829D] !== null){
      var fn = rv(e[0x829D]);
      if(!isNaN(fn) && fn > 0) add('Aperture', 'f/' + (Math.round(fn * 10) / 10));
    }
    add('ISO speed', e[0x8827]);
    if(e[0x920A] !== undefined && e[0x920A] !== null){
      var fl = rv(e[0x920A]);
      if(!isNaN(fl) && fl > 0) add('Focal length', (Math.round(fl * 10) / 10) + ' mm');
    }
    if(e[0xA405]) add('Focal length (35mm eq.)', e[0xA405] + ' mm');
    if(e[0x9209] !== undefined && e[0x9209] !== null) add('Flash', (e[0x9209] & 1) ? 'Fired' : 'Did not fire');
    var w = e[0xA002] || a[0x0100], h = e[0xA003] || a[0x0101];
    if(w && h) add('EXIF dimensions', w + ' × ' + h + ' px');
    if(a[0x0112]) add('Orientation', ORIENT[a[0x0112]] || ('Code ' + a[0x0112]));
    if(g[0x0002] && g[0x0004]){
      var lat = gpsCoord(g[0x0002]);
      var lng = gpsCoord(g[0x0004]);
      if(g[0x0001] === 'S') lat = -lat;
      if(g[0x0003] === 'W') lng = -lng;
      if(!isNaN(lat) && !isNaN(lng)){
        var latS = Math.round(lat * 1000000) / 1000000;
        var lngS = Math.round(lng * 1000000) / 1000000;
        rows.push(['GPS location',
          latS + ', ' + lngS + ' — <a href="https://www.google.com/maps?q=' + latS + ',' + lngS + '" target="_blank" rel="noopener">open in Maps</a>', true]);
      }
    }
    if(g[0x0006] !== undefined && g[0x0006] !== null){
      var alt = rv(g[0x0006]);
      if(!isNaN(alt)) add('GPS altitude', (Math.round(alt * 10) / 10) + ' m above sea level');
    }
    return rows;
  }

  function showReport(file, dims, data){
    var rows = data ? buildRows(data) : [];
    var parts = [];
    parts.push('File: <strong>' + esc(file.name) + '</strong>');
    parts.push('Size: <strong>' + ToolPro.fmtBytes(file.size) + '</strong>');
    if(dims) parts.push('Dimensions: <strong>' + dims.w + ' × ' + dims.h + ' px</strong>');
    sumEl.innerHTML = parts.join(' · ');
    if(rows.length){
      var html = '<table style="width:100%;border-collapse:collapse;">';
      rows.forEach(function(r){
        html += '<tr><td style="padding:7px 8px;border-bottom:1px solid rgba(127,127,127,.25);font-weight:600;width:38%;">' +
          esc(r[0]) + '</td><td style="padding:7px 8px;border-bottom:1px solid rgba(127,127,127,.25);">' +
          (r[2] ? r[1] : esc(r[1])) + '</td></tr>';
      });
      html += '</table>';
      tableEl.innerHTML = html;
      noneEl.style.display = 'none';
      ToolPro.toast(rows.length + ' EXIF fields found', 'ok');
    } else {
      tableEl.innerHTML = '';
      noneEl.style.display = 'block';
      noneEl.textContent = 'No EXIF metadata was found in this file. That is normal for screenshots, edited images and most PNG/WebP files — the basic file details above are all this image carries.';
      ToolPro.toast('No EXIF data in this file');
    }
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  async function handleFile(file){
    sumEl.textContent = 'Reading ' + file.name + '…';
    tableEl.innerHTML = '';
    noneEl.style.display = 'none';
    resBox.classList.add('show');
    var data = null;
    try {
      var buf = await file.arrayBuffer();
      data = parseExif(buf);
    } catch(err) { data = null; }
    var dims = null;
    try {
      dims = await new Promise(function(resolve){
        var url = URL.createObjectURL(file);
        var im = new Image();
        im.onload = function(){ var d = { w: im.naturalWidth, h: im.naturalHeight }; URL.revokeObjectURL(url); resolve(d); };
        im.onerror = function(){ URL.revokeObjectURL(url); resolve(null); };
        im.src = url;
      });
    } catch(err) { dims = null; }
    showReport(file, dims, data);
  }

  ToolPro.dropzone(document.getElementById('exfDrop'), {
    multiple: false,
    accept: 'image/jpeg,image/tiff,.jpg,.jpeg,.tif,.tiff',
    maxFiles: 1,
    onFiles: function(arr){ if(arr[0]) handleFile(arr[0]); }
  });

  document.getElementById('exfClear').addEventListener('click', function(){
    resBox.classList.remove('show');
    sumEl.innerHTML = '';
    tableEl.innerHTML = '';
    noneEl.style.display = 'none';
  });
})();
</script>

## Everyday uses

- **Privacy checks:** see if a photo you are about to post reveals your home's GPS coordinates.
- **Photographers:** check which lens, focal length and settings produced a favorite shot.
- **Sorting old photos:** recover the real date a photo was taken when the file date is wrong.
- **Buying used gear:** verify the camera model and shutter settings in a seller's sample photos.
- **Family history:** find where and when old family photos were taken.

## Frequently asked questions

**Is it safe to check photos here?**
Yes. The file is read locally by your browser's JavaScript — it is never uploaded, so even sensitive photos stay on your device while you inspect them.

**Why does my photo show no EXIF data?**
Many apps strip metadata automatically. Screenshots never had any, social media downloads are usually cleaned, and most PNG/WebP files carry little or none. Original JPGs straight from a phone or camera almost always have it.

**How accurate is the GPS location?**
Very — phone photos typically store coordinates accurate to a few meters. That is wonderful for organizing travel photos, and exactly why you should strip EXIF before posting photos of your home publicly (our free EXIF Remover does that in one click).
