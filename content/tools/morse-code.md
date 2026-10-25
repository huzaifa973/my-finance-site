---
title: "Free Morse Code Translator — Text to Morse & Audio"
description: "Translate text to Morse code and back, play it as real audio tones with adjustable speed and pitch, and download the result. Free forever, runs in your browser."
category: text
date: 2026-10-24
draft: false
---

From SOS to secret notes, Morse code turns any text into dots and dashes — and this tool does it both ways, instantly. Type text to get Morse (or paste Morse to decode it back), then press play to hear it as real audio tones generated live with the Web Audio API. Adjust the speed in words-per-minute and the tone pitch, flip open the built-in cheat sheet, and download your translation as a text file. Everything runs in your browser.

<div class="tool-shell" id="mcShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Morse Code Translator</h2>
<p>Text ⇄ Morse, with real audio playback — speed and pitch you control.</p>
</div>
<button type="button" class="theme-toggle" id="mcTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Enter text or Morse code</p>
<div class="preset-row" id="mcDir">
<button type="button" class="preset-chip active" data-dir="enc">🔤 Text → Morse</button>
<button type="button" class="preset-chip" data-dir="dec">··· Morse → Text</button>
</div>
<div class="setting">
<label for="mcIn" id="mcInLabel">Your text</label>
<textarea id="mcIn" class="tool-input" rows="5" placeholder="Type anything — e.g. Hello world"></textarea>
<div class="hint" id="mcHint">Letters, digits and punctuation are supported. Unknown characters are skipped.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Audio settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="mcWpm">Speed <span id="mcWpmVal">20 WPM</span></label>
<input type="range" id="mcWpm" min="5" max="40" value="20">
<div class="hint">WPM = words per minute. 20 is a comfortable learning speed.</div>
</div>
<div class="setting">
<label for="mcFreq">Tone pitch <span id="mcFreqVal">600 Hz</span></label>
<input type="range" id="mcFreq" min="300" max="1000" step="10" value="600">
<div class="hint">600 Hz is the classic Morse sidetone pitch.</div>
</div>
<div class="setting">
<div class="toggle-row"><span class="t-label">Show Morse cheat sheet</span><label class="toggle"><input type="checkbox" id="mcSheet"><span class="track"></span></label></div>
<div class="hint">A quick reference table of every letter, digit, and punctuation mark.</div>
</div>
</div>
<div id="mcSheetBox" style="display:none;margin-top:.8rem;overflow-x:auto;"></div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Translate, play &amp; save</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="mcBtn" disabled>
<svg viewBox="0 0 24 24"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>
Translate
</button>
<button type="button" class="btn-pro-outline" id="mcPlay" disabled>▶ Play audio</button>
<button type="button" class="btn-pro-outline" id="mcStop" disabled>⏹ Stop</button>
<button type="button" class="btn-pro-outline" id="mcCopy" disabled>📋 Copy</button>
<button type="button" class="btn-pro-outline" id="mcDl" disabled>⬇ Download .txt</button>
<button type="button" class="btn-pro-outline" id="mcClear" disabled>Clear</button>
</div>
<div class="results" id="mcResults">
<p class="result-head">📻 Translation</p>
<div class="result-summary" id="mcSummary"></div>
<div class="result-grid" id="mcGrid">
<div class="result-card" style="grid-column:1/-1;">
<div class="r-name" id="mcOutLabel">Morse code output</div>
<textarea id="mcOut" class="tool-output" rows="6" readonly style="width:100%;margin-top:.5rem;"></textarea>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Translate and play unlimited messages — the audio is synthesized live in your browser.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('mcShell');
  ToolPro.themeToggle(shell, document.getElementById('mcTheme'));

  var MORSE = {
    A:'.-',B:'-...',C:'-.-.',D:'-..',E:'.',F:'..-.',G:'--.',H:'....',I:'..',J:'.---',
    K:'-.-',L:'.-..',M:'--',N:'-.',O:'---',P:'.--.',Q:'--.-',R:'.-.',S:'...',T:'-',
    U:'..-',V:'...-',W:'.--',X:'-..-',Y:'-.--',Z:'--..',
    '0':'-----','1':'.----','2':'..---','3':'...--','4':'....-','5':'.....',
    '6':'-....','7':'--...','8':'---..','9':'----.',
    '.':'.-.-.-',',':'--..--','?':'..--..',"'":'.----.','!':'-.-.--','/':'-..-.',
    '(':'-.--.',')':'-.--.-','&':'.-...',':':'---...',';':'-.-.-.','=':'-...-',
    '+':'.-.-.','-':'-....-','_':'..--.-','"':'.-..-.','$':'...-..-','@':'.--.-.'
  };
  var REVERSE = {};
  Object.keys(MORSE).forEach(function(k){ REVERSE[MORSE[k]] = k; });

  var dir = 'enc';
  var dirRow = document.getElementById('mcDir');
  var input = document.getElementById('mcIn');
  var inLabel = document.getElementById('mcInLabel');
  var hint = document.getElementById('mcHint');
  var out = document.getElementById('mcOut');
  var outLabel = document.getElementById('mcOutLabel');
  var btn = document.getElementById('mcBtn');
  var playBtn = document.getElementById('mcPlay');
  var stopBtn = document.getElementById('mcStop');
  var copyBtn = document.getElementById('mcCopy');
  var dlBtn = document.getElementById('mcDl');
  var clearBtn = document.getElementById('mcClear');
  var resBox = document.getElementById('mcResults');
  var summaryEl = document.getElementById('mcSummary');
  var lastMorse = '';

  ToolPro.bindSlider(document.getElementById('mcWpm'), document.getElementById('mcWpmVal'), function(v){ return v + ' WPM'; });
  ToolPro.bindSlider(document.getElementById('mcFreq'), document.getElementById('mcFreqVal'), function(v){ return v + ' Hz'; });

  dirRow.addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    dirRow.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
    chip.classList.add('active');
    dir = chip.dataset.dir;
    stopAudio();
    if(dir === 'enc'){
      inLabel.textContent = 'Your text';
      input.placeholder = 'Type anything — e.g. Hello world';
      hint.textContent = 'Letters, digits and punctuation are supported. Unknown characters are skipped.';
      outLabel.textContent = 'Morse code output';
    } else {
      inLabel.textContent = 'Your Morse code';
      input.placeholder = 'e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -..';
      hint.textContent = 'Separate letters with spaces and words with / (slash) or 3+ spaces.';
      outLabel.textContent = 'Decoded text output';
    }
    out.value = ''; lastMorse = '';
    resBox.classList.remove('show');
    refresh();
    ToolPro.toast(dir === 'enc' ? 'Text → Morse' : 'Morse → Text');
  });

  // Cheat sheet
  var sheetBox = document.getElementById('mcSheetBox');
  (function buildSheet(){
    var groups = [
      ['Letters', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')],
      ['Digits', '0123456789'.split('')],
      ['Punctuation', ['.', ',', '?', "'", '!', '/', '(', ')', '&', ':', ';', '=', '+', '-', '_', '"', '$', '@']]
    ];
    var html = '';
    groups.forEach(function(g){
      html += '<p style="font-weight:700;margin:.6rem 0 .3rem;">' + g[0] + '</p><div style="display:flex;flex-wrap:wrap;gap:.4rem;">';
      g[1].forEach(function(ch){
        html += '<span style="border:1px solid currentColor;border-radius:.4rem;padding:.15rem .5rem;font-size:.85rem;opacity:.9;"><b>' +
          ch.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</b> ' + MORSE[ch] + '</span>';
      });
      html += '</div>';
    });
    sheetBox.innerHTML = html;
  })();
  document.getElementById('mcSheet').addEventListener('change', function(){
    sheetBox.style.display = this.checked ? 'block' : 'none';
  });

  function encode(text){
    var skipped = 0;
    var words = text.toUpperCase().split(/\s+/).filter(function(w){ return w; });
    var mw = words.map(function(w){
      return w.split('').map(function(ch){
        if(MORSE[ch]) return MORSE[ch];
        skipped++;
        return null;
      }).filter(Boolean).join(' ');
    }).filter(function(w){ return w; });
    return { code: mw.join(' / '), skipped: skipped };
  }

  function decode(morse){
    var unknown = 0;
    var words = morse.trim().split(/\s*\/\s*|\s{3,}/);
    var tw = words.map(function(w){
      return w.trim().split(/\s+/).map(function(sym){
        if(REVERSE[sym]) return REVERSE[sym];
        if(sym){ unknown++; }
        return '';
      }).join('');
    });
    return { text: tw.join(' '), unknown: unknown };
  }

  function refresh(){
    var ok = input.value.trim().length > 0;
    btn.disabled = !ok;
    clearBtn.disabled = !(input.value || out.value);
  }
  input.addEventListener('input', refresh);

  clearBtn.addEventListener('click', function(){
    stopAudio();
    input.value = ''; out.value = ''; lastMorse = '';
    summaryEl.textContent = '';
    resBox.classList.remove('show');
    [playBtn, copyBtn, dlBtn].forEach(function(b){ b.disabled = true; });
    refresh();
  });

  btn.addEventListener('click', function(){
    stopAudio();
    var src = input.value;
    if(!src.trim()){ ToolPro.toast('Enter something to translate first.', 'err'); return; }
    if(dir === 'enc'){
      var r = encode(src);
      lastMorse = r.code;
      out.value = r.code;
      var syms = (r.code.match(/[.-]/g) || []).length;
      summaryEl.textContent = '🔤 ' + src.trim().length + ' characters → ' + syms + ' dots/dashes' +
        (r.skipped ? ' · ' + r.skipped + ' unsupported character(s) skipped' : '') + '.';
    } else {
      var d = decode(src);
      lastMorse = src.trim().replace(/\s{3,}/g, ' / ');
      out.value = d.text;
      summaryEl.textContent = '··· Decoded to ' + d.text.length + ' characters' +
        (d.unknown ? ' · ' + d.unknown + ' unrecognized signal(s) skipped' : '') + '.';
    }
    if(!out.value){ ToolPro.toast('Nothing to translate — check the input.', 'err'); return; }
    playBtn.disabled = !(dir === 'enc' ? lastMorse : /[.-]/.test(lastMorse));
    copyBtn.disabled = false; dlBtn.disabled = false;
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('Translated', 'ok');
    refresh();
  });

  // ---- Audio playback via Web Audio ----
  var actx = null, playing = false, stopFlag = false;
  function sleep(ms){ return new Promise(function(r){ setTimeout(r, ms); }); }
  function beep(freq, durMs){
    return new Promise(function(res){
      var t = actx.currentTime;
      var o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.4, t + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + durMs / 1000);
      o.connect(g); g.connect(actx.destination);
      o.start(t); o.stop(t + durMs / 1000 + 0.05);
      setTimeout(res, durMs);
    });
  }
  function stopAudio(){
    stopFlag = true; playing = false;
    stopBtn.disabled = true;
    if(lastMorse) playBtn.disabled = false;
  }
  playBtn.addEventListener('click', async function(){
    var morse = lastMorse;
    if(!morse || !/[.-]/.test(morse)){ ToolPro.toast('Translate something first.', 'err'); return; }
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if(actx.state === 'suspended') await actx.resume();
    } catch(e){ ToolPro.toast('Audio is not available in this browser.', 'err'); return; }
    var wpm = parseInt(document.getElementById('mcWpm').value, 10) || 20;
    var freq = parseInt(document.getElementById('mcFreq').value, 10) || 600;
    var unit = 1200 / wpm;
    stopFlag = false; playing = true;
    playBtn.disabled = true; stopBtn.disabled = false;
    ToolPro.toast('Playing at ' + wpm + ' WPM…');
    for(var i = 0; i < morse.length; i++){
      if(stopFlag) break;
      var ch = morse[i];
      if(ch === '.'){ await beep(freq, unit); await sleep(unit); }
      else if(ch === '-'){ await beep(freq, unit * 3); await sleep(unit); }
      else if(ch === ' '){ await sleep(unit * 2); }
      else if(ch === '/'){ await sleep(unit * 6); }
    }
    playing = false; stopFlag = false;
    playBtn.disabled = false; stopBtn.disabled = true;
  });
  stopBtn.addEventListener('click', function(){
    stopAudio();
    ToolPro.toast('Stopped');
  });

  copyBtn.addEventListener('click', function(){
    if(!out.value) return;
    ToolPro.copyText(out.value, 'Translation copied');
  });

  dlBtn.addEventListener('click', function(){
    if(!out.value) return;
    var name = dir === 'enc' ? 'morse-code.txt' : 'morse-decoded.txt';
    var blob = new Blob([out.value], { type: 'text/plain' });
    ToolPro.download(URL.createObjectURL(blob), name);
    ToolPro.toast('Downloaded ' + name, 'ok');
  });

  refresh();
})();
</script>

## How it works

Choose a direction — **Text → Morse** or **Morse → Text** — type or paste your input, and hit **Translate**. Encoding turns every letter, digit, and punctuation mark into dots and dashes (words separated by `/`); decoding reverses it, accepting spaces between letters and `/` or wide gaps between words. Press **Play audio** to hear the message as real sine-wave tones synthesized live with the Web Audio API at your chosen speed (5–40 WPM) and pitch (300–1000 Hz). Copy or download the result as a `.txt` file.

**Timing standard:** dot = 1 unit, dash = 3 units, gap between parts of a letter = 1 unit, between letters = 3, between words = 7 — exactly how real Morse is timed.

## Everyday uses

- **Learning Morse** — hear real timing at slow WPM, then speed up as you improve.
- **Puzzle & escape rooms** — encode clues or decode hidden messages fast.
- **Amateur radio prep** — practice copying code by ear before your exam.
- **Secret notes** — leave dot-dash messages only fellow nerds can read.
- **Teachers** — a fun classroom demo of pre-digital communication.

The translator and the audio engine both run entirely in your browser — no uploads, no accounts.
