/* DollarWise shared converter engine — IMAGE pairs (Canvas + heic2any for HEIC input).
   Usage: ConvImage.init({ prefix:'cv', from:'heic', to:'jpg' }) */
(function(){
  var MIME = { jpg:'image/jpeg', png:'image/png', webp:'image/webp' };
  var heicLoading = null;

  function loadHeic(){
    if(window.heic2any) return Promise.resolve();
    if(heicLoading) return heicLoading;
    heicLoading = new Promise(function(resolve, reject){
      var s = document.createElement('script');
      s.src = 'https://unpkg.com/heic2any@0.0.4/dist/heic2any.min.js';
      s.onload = function(){ resolve(); };
      s.onerror = function(){ reject(new Error('HEIC decoder failed to load')); };
      document.head.appendChild(s);
    });
    return heicLoading;
  }

  function decodeImage(file, from){
    return new Promise(function(resolve, reject){
      function viaBitmap(blob){
        var url = URL.createObjectURL(blob);
        var img = new Image();
        img.onload = function(){ resolve({ img: img, url: url }); };
        img.onerror = function(){ URL.revokeObjectURL(url); reject(new Error('decode failed')); };
        img.src = url;
      }
      if(from === 'heic'){
        loadHeic().then(function(){
          return window.heic2any({ blob: file, toType: 'image/png' });
        }).then(function(out){
          viaBitmap(Array.isArray(out) ? out[0] : out);
        }).catch(reject);
      } else {
        viaBitmap(file);
      }
    });
  }

  function encodeBMP(ctx, w, h){
    var imgData = ctx.getImageData(0, 0, w, h).data;
    var rowSize = Math.ceil((w * 3) / 4) * 4;
    var dataSize = rowSize * h;
    var buf = new ArrayBuffer(54 + dataSize);
    var v = new DataView(buf);
    v.setUint8(0, 0x42); v.setUint8(1, 0x4D);
    v.setUint32(2, 54 + dataSize, true);
    v.setUint32(10, 54, true);
    v.setUint32(14, 40, true);
    v.setInt32(18, w, true); v.setInt32(22, -h, true);
    v.setUint16(26, 1, true); v.setUint16(28, 24, true);
    v.setUint32(34, dataSize, true);
    var off = 54;
    for(var y = 0; y < h; y++){
      var rowStart = off + y * rowSize;
      for(var x = 0; x < w; x++){
        var i = (y * w + x) * 4, o = rowStart + x * 3;
        v.setUint8(o, imgData[i + 2]); v.setUint8(o + 1, imgData[i + 1]); v.setUint8(o + 2, imgData[i]);
      }
    }
    return new Blob([buf], { type: 'image/bmp' });
  }

  function encodeICO(pngBlob, w, h){
    return pngBlob.arrayBuffer().then(function(pngBuf){
      var buf = new ArrayBuffer(22 + pngBuf.byteLength);
      var v = new DataView(buf);
      v.setUint16(0, 0, true); v.setUint16(2, 1, true); v.setUint16(4, 1, true);
      v.setUint8(6, w >= 256 ? 0 : w); v.setUint8(7, h >= 256 ? 0 : h);
      v.setUint8(8, 0); v.setUint8(9, 0);
      v.setUint16(10, 1, true); v.setUint16(12, 32, true);
      v.setUint32(14, pngBuf.byteLength, true); v.setUint32(18, 22, true);
      new Uint8Array(buf).set(new Uint8Array(pngBuf), 22);
      return new Blob([buf], { type: 'image/x-icon' });
    });
  }

  function init(cfg){
    var P = cfg.prefix;
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var files = [];
    var listEl = document.getElementById(P + 'List');
    var btn = document.getElementById(P + 'Btn');
    var clearBtn = document.getElementById(P + 'Clear');
    var qRange = document.getElementById(P + 'Quality');
    var qVal = document.getElementById(P + 'QVal');
    var bgInput = document.getElementById(P + 'Bg');
    var wSel = document.getElementById(P + 'MaxW');
    var presets = document.getElementById(P + 'Presets');

    if(qRange && qVal) ToolPro.bindSlider(qRange, qVal, function(v){ return v + '%'; });
    if(presets){
      presets.addEventListener('click', function(e){
        var chip = e.target.closest('.preset-chip'); if(!chip) return;
        presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
        chip.classList.add('active');
        if(qRange && chip.dataset.q){ qRange.value = chip.dataset.q; qRange.dispatchEvent(new Event('input')); }
        if(wSel && chip.dataset.w) wSel.value = chip.dataset.w;
        ToolPro.toast('Preset applied: ' + chip.textContent.trim());
      });
    }

    function refresh(){
      var n = files.length;
      btn.disabled = !n; clearBtn.disabled = !n;
      btn.lastChild.textContent = ' Convert ' + (n ? n + (n === 1 ? ' Image' : ' Images') : 'Images');
    }

    ToolPro.dropzone(document.getElementById(P + 'Drop'), {
      multiple: true, maxFiles: 20,
      onFiles: function(arr){
        arr.forEach(function(f){
          if(files.some(function(x){ return x.file === f; })) return;
          var row = ToolPro.fileRow(listEl, f, function(dead){
            files = files.filter(function(x){ return x.file !== dead; });
            refresh();
          });
          files.push({ file: f, row: row });
        });
        document.getElementById(P + 'Results').classList.remove('show');
        refresh();
        ToolPro.toast(arr.length + (arr.length === 1 ? ' image' : ' images') + ' added', 'ok');
      }
    });

    clearBtn.addEventListener('click', function(){
      files = []; listEl.innerHTML = '';
      document.getElementById(P + 'Results').classList.remove('show');
      refresh();
    });

    function convertOne(file){
      return decodeImage(file, cfg.from).then(function(dec){
        var img = dec.img;
        var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
        if(!w){ w = 1024; h = 1024; }
        var maxW = wSel ? parseInt(wSel.value, 10) : 0;
        if(cfg.to === 'ico'){ maxW = 256; }
        if(maxW && w > maxW){ h = Math.round(h * maxW / w); w = maxW; }
        var c = document.createElement('canvas'); c.width = w; c.height = h;
        var ctx = c.getContext('2d');
        var needsBg = (cfg.to === 'jpg' || cfg.to === 'bmp' || cfg.to === 'ico');
        if(needsBg){
          ctx.fillStyle = bgInput ? bgInput.value : '#ffffff';
          ctx.fillRect(0, 0, w, h);
        }
        ctx.drawImage(img, 0, 0, w, h);
        URL.revokeObjectURL(dec.url);
        var quality = qRange ? parseInt(qRange.value, 10) / 100 : 0.92;
        if(cfg.to === 'bmp') return { blob: encodeBMP(ctx, w, h), w: w, h: h };
        if(cfg.to === 'ico'){
          return new Promise(function(res){
            c.toBlob(function(png){ encodeICO(png, w, h).then(function(b){ res({ blob: b, w: w, h: h }); }); }, 'image/png');
          });
        }
        return new Promise(function(res){
          c.toBlob(function(b){ res({ blob: b, w: w, h: h }); }, MIME[cfg.to], quality);
        });
      });
    }

    btn.addEventListener('click', async function(){
      if(!files.length) return;
      var progWrap = document.getElementById(P + 'ProgWrap');
      var progBar = document.getElementById(P + 'ProgBar');
      var progText = document.getElementById(P + 'ProgText');
      var grid = document.getElementById(P + 'Grid');
      var resBox = document.getElementById(P + 'Results');
      var summary = document.getElementById(P + 'Summary');
      btn.disabled = true;
      progWrap.classList.add('show'); resBox.classList.remove('show'); grid.innerHTML = '';
      var done = 0, okCount = 0;
      for(var i = 0; i < files.length; i++){
        var entry = files[i];
        entry.row.setStatus('Converting…', 'working');
        progText.textContent = 'Converting ' + (i + 1) + ' of ' + files.length + ': ' + entry.file.name;
        try {
          var out = await convertOne(entry.file);
          if(!out.blob) throw new Error('encode failed');
          var url = URL.createObjectURL(out.blob);
          var base = entry.file.name.replace(/\.[^.]+$/, '');
          var card = document.createElement('div');
          card.className = 'result-card';
          card.innerHTML = '<img class="r-preview" alt="Converted preview">' +
            '<div class="r-name"></div><div class="r-stats"></div>' +
            '<button type="button" class="btn-pro">⬇ Download</button>';
          card.querySelector('.r-preview').src = url;
          card.querySelector('.r-name').textContent = base + '.' + cfg.to;
          card.querySelector('.r-name').title = base + '.' + cfg.to;
          card.querySelector('.r-stats').innerHTML =
            ToolPro.fmtBytes(entry.file.size) + ' → <b>' + ToolPro.fmtBytes(out.blob.size) +
            '</b> · ' + out.w + '×' + out.h + 'px';
          (function(u, name){
            card.querySelector('button').addEventListener('click', function(){ ToolPro.download(u, name); });
          })(url, base + '.' + cfg.to);
          grid.appendChild(card);
          entry.row.setStatus('Done', 'done');
          okCount++;
        } catch(e){
          entry.row.setStatus('Failed', '');
        }
        done++;
        progBar.style.width = Math.round(done / files.length * 100) + '%';
      }
      summary.textContent = '🎉 ' + okCount + ' of ' + files.length + ' converted to ' +
        cfg.to.toUpperCase() + ' — processed privately in your browser, nothing was uploaded.';
      progWrap.classList.remove('show');
      resBox.classList.add('show');
      resBox.scrollIntoView({ behavior:'smooth', block:'nearest' });
      btn.disabled = false;
      ToolPro.toast('Conversion complete', 'ok');
    });

    refresh();
  }

  window.ConvImage = { init: init };
})();
