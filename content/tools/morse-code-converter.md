---
title: "Free Morse Code Translator — Text to Morse with Audio"
description: "Convert text to Morse code and back free in your browser — with audio playback at your speed and a full reference chart. Private, no sign-up, unlimited."
category: text
date: 2026-10-12
draft: false
---

## How it works

Type plain text and translate it to Morse code, or paste Morse and translate it back to readable text — both directions work instantly. Letters are separated by spaces and words by ` / `. Hit **Play** to hear the code beeped out with real Morse timing (dots, dashes, and gaps at standard ratios) at a speed you choose. The full A–Z and 0–9 reference chart is below the tool.

<div class="tool-shell" id="morsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><circle cx="4.5" cy="12" r="2.5"/><rect x="9" y="9.5" width="7" height="5" rx="2.5"/><circle cx="19.5" cy="12" r="2.5"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Morse Code Converter</h2>
<p>Translate text to Morse and back — then press play and hear it beeped out at real Morse timing.</p>
</div>
<button type="button" class="theme-toggle" id="morsTheme">🌙 Dark</button>
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
<textarea class="tool-input" id="morsIn" rows="6" placeholder="Type text like HELLO WORLD — or paste Morse like .... . .-.. .-.. ---" spellcheck="false"></textarea>
<div class="hint" id="morsCount">0 characters · 0 words</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Playback speed &amp; examples</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="morsSpeed">Playback speed</label>
<select id="morsSpeed">
<option value="120">Slow — about 10 WPM</option>
<option value="80" selected>Medium — about 15 WPM</option>
<option value="50">Fast — about 24 WPM</option>
</select>
<div class="hint">WPM = words per minute, the standard way Morse speed is measured.</div>
</div>
</div>
<div class="preset-row" id="morsExamples">
<button type="button" class="preset-chip" data-ex="sos">SOS</button>
<button type="button" class="preset-chip" data-ex="hello">HELLO WORLD</button>
<button type="button" class="preset-chip" data-ex="morse">... --- ... (decode me)</button>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Convert &amp; listen</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="morsToBtn" disabled>
<svg viewBox="0 0 24 24"><circle cx="4.5" cy="12" r="2.5"/><rect x="9" y="9.5" width="7" height="5" rx="2.5"/><circle cx="19.5" cy="12" r="2.5"/></svg>
Text → Morse
</button>
<button type="button" class="btn-pro-outline" id="morsFromBtn" disabled>Morse → Text</button>
<button type="button" class="btn-pro-outline" id="morsPlay" disabled>▶ Play</button>
<button type="button" class="btn-pro-outline" id="morsStop">■ Stop</button>
<button type="button" class="btn-pro-outline" id="morsClear" disabled>Clear</button>
</div>
<div class="results" id="morsResults">
<p class="result-head">✅ Your translation</p>
<div class="result-summary" id="morsSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="r-name" id="morsStatus"></div>
<textarea class="tool-output" id="morsOut" rows="6" readonly spellcheck="false"></textarea>
<div class="r-stats" id="morsStats"></div>
<div class="r-btns">
<button type="button" class="btn-pro" id="morsCopy">📋 Copy result</button>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — translate and listen as much as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('morsShell');
  ToolPro.themeToggle(shell, document.getElementById('morsTheme'));

  var inEl = document.getElementById('morsIn');
  var outEl = document.getElementById('morsOut');
  var resBox = document.getElementById('morsResults');
  var statusEl = document.getElementById('morsStatus');
  var statsEl = document.getElementById('morsStats');
  var summaryEl = document.getElementById('morsSummary');
  var countEl = document.getElementById('morsCount');
  var speedSel = document.getElementById('morsSpeed');
  var toBtn = document.getElementById('morsToBtn');
  var fromBtn = document.getElementById('morsFromBtn');
  var playBtn = document.getElementById('morsPlay');
  var clearBtn = document.getElementById('morsClear');

  var MORSE = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
  };
  var FROM = {};
  Object.keys(MORSE).forEach(function(k){ FROM[MORSE[k]] = k; });

  function textToMorse(text){
    var skipped = 0;
    var words = text.toUpperCase().split(/\s+/).filter(function(w){ return w.length > 0; });
    var outWords = words.map(function(word){
      var codes = [];
      for(var i = 0; i < word.length; i++){
        var code = MORSE[word[i]];
        if(code) codes.push(code);
        else skipped++;
      }
      return codes.join(' ');
    }).filter(function(w){ return w.length > 0; });
    return { code: outWords.join(' / '), skipped: skipped };
  }

  function morseToText(code){
    var unknown = 0;
    var segments = code.replace(/\|/g, '/').split('/');
    var words = segments.map(function(seg){
      var tokens = seg.trim().split(/\s+/).filter(function(t){ return t.length > 0; });
      var letters = tokens.map(function(tok){
        var ch = FROM[tok];
        if(ch) return ch;
        unknown++;
        return '�';
      });
      return letters.join('');
    }).filter(function(w){ return w.length > 0; });
    return { text: words.join(' '), unknown: unknown };
  }

  var EXAMPLES = {
    sos: 'SOS',
    hello: 'HELLO WORLD',
    morse: '... --- ...'
  };
  document.getElementById('morsExamples').addEventListener('click', function(e){
    var chip = e.target.closest('.preset-chip'); if(!chip) return;
    inEl.value = EXAMPLES[chip.dataset.ex] || '';
    updateCount(); refreshButtons();
    ToolPro.toast('Example loaded — pick a direction');
  });

  function updateCount(){
    var t = inEl.value;
    var words = t.trim() ? t.trim().split(/\s+/).length : 0;
    countEl.textContent = t.length.toLocaleString() + ' characters · ' + words.toLocaleString() + ' words';
  }
  function refreshButtons(){
    var has = inEl.value.trim().length > 0;
    toBtn.disabled = !has; fromBtn.disabled = !has; clearBtn.disabled = !has;
    playBtn.disabled = !(outEl.value.trim().length > 0 || has);
  }
  inEl.addEventListener('input', function(){ updateCount(); refreshButtons(); });

  function showResult(out, label, stats){
    outEl.value = out;
    statusEl.innerHTML = '<span class="ok-pill">✓ ' + label + '</span>';
    statsEl.textContent = stats;
    summaryEl.textContent = '🎉 Done — copy it, or press Play to hear it.';
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    refreshButtons();
  }

  toBtn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Enter some text first', 'err'); return; }
    var r = textToMorse(inEl.value);
    if(!r.code){ ToolPro.toast('No translatable characters found', 'err'); return; }
    var symbols = (r.code.match(/[.-]/g) || []).length;
    var note = r.skipped ? ' · ' + r.skipped + ' unsupported character' + (r.skipped === 1 ? '' : 's') + ' skipped' : '';
    showResult(r.code, 'Text → Morse', inEl.value.trim().length + ' characters → ' + symbols + ' dots & dashes' + note);
    ToolPro.toast('Translated to Morse', 'ok');
  });
  fromBtn.addEventListener('click', function(){
    if(!inEl.value.trim()){ ToolPro.toast('Enter some Morse code first', 'err'); return; }
    var r = morseToText(inEl.value);
    if(!r.text){ ToolPro.toast('No Morse code recognized — use dots, dashes, spaces, and / between words', 'err'); return; }
    var note = r.unknown ? ' · ' + r.unknown + ' unknown code' + (r.unknown === 1 ? '' : 's') + ' shown as �' : '';
    showResult(r.text, 'Morse → Text', 'Decoded to ' + r.text.length + ' characters' + note);
    ToolPro.toast('Translated to text', 'ok');
  });

  var audioCtx = null;
  function stopAudio(){
    if(audioCtx){
      try{ audioCtx.close(); }catch(e){}
      audioCtx = null;
    }
  }
  function playMorse(code){
    var AC = window.AudioContext || window.webkitAudioContext;
    if(!AC){ ToolPro.toast('Web Audio is not supported in this browser', 'err'); return; }
    stopAudio();
    var ctx = new AC();
    audioCtx = ctx;
    if(ctx.state === 'suspended') ctx.resume();
    var unit = parseInt(speedSel.value, 10) / 1000;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 600;
    gain.gain.value = 0.0001;
    osc.connect(gain);
    gain.connect(ctx.destination);
    var t = ctx.currentTime + 0.06;
    osc.start(t);
    code.split('/').forEach(function(word){
      word.trim().split(/\s+/).forEach(function(letter){
        if(!/[.-]/.test(letter)) return;
        for(var s = 0; s < letter.length; s++){
          if(letter[s] !== '.' && letter[s] !== '-') continue;
          var dur = letter[s] === '-' ? 3 * unit : unit;
          gain.gain.setValueAtTime(0.0001, t);
          gain.gain.exponentialRampToValueAtTime(0.22, t + 0.006);
          gain.gain.setValueAtTime(0.22, Math.max(t + 0.006, t + dur - 0.006));
          gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
          t += dur + unit;
        }
        t += 2 * unit;
      });
      t += 4 * unit;
    });
    osc.stop(t + 0.05);
    var ms = Math.max(0, (t - ctx.currentTime) * 1000 + 200);
    setTimeout(function(){ if(audioCtx === ctx) stopAudio(); }, ms);
    ToolPro.toast('Playing Morse code', 'ok');
  }
  playBtn.addEventListener('click', function(){
    var code = outEl.value.trim() || inEl.value.trim();
    if(!code || !/^[.\s/-]+$/.test(code) || !/[.-]/.test(code)){
      ToolPro.toast('Play works on Morse code — translate some text first', 'err');
      return;
    }
    playMorse(code);
  });
  document.getElementById('morsStop').addEventListener('click', function(){
    stopAudio();
    ToolPro.toast('Playback stopped');
  });
  document.getElementById('morsCopy').addEventListener('click', function(){
    if(!outEl.value){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    ToolPro.copyText(outEl.value, 'Translation copied');
  });
  clearBtn.addEventListener('click', function(){
    stopAudio();
    inEl.value = ''; outEl.value = '';
    resBox.classList.remove('show');
    updateCount(); refreshButtons();
  });

  updateCount(); refreshButtons();
})();
</script>

## Morse code reference chart

| Letter | Code | Letter | Code | Letter | Code |
| --- | --- | --- | --- | --- | --- |
| A | .- | J | .--- | S | ... |
| B | -... | K | -.- | T | - |
| C | -.-. | L | .-.. | U | ..- |
| D | -.. | M | -- | V | ...- |
| E | . | N | -. | W | .-- |
| F | ..-. | O | --- | X | -..- |
| G | --. | P | .--. | Y | -.-- |
| H | .... | Q | --.- | Z | --.. |
| I | .. | R | .-. | | |

| Digit | Code | Digit | Code |
| --- | --- | --- | --- |
| 0 | ----- | 5 | ..... |
| 1 | .---- | 6 | -.... |
| 2 | ..--- | 7 | --... |
| 3 | ...-- | 8 | ---.. |
| 4 | ....- | 9 | ----. |

Common punctuation: period `.` is `.-.-.-`, comma `,` is `--..--`, question mark `?` is `..--..`, and exclamation mark `!` is `-.-.--`.

## Everyday uses

- **Amateur radio practice:** read and hear call signs and phrases the way they are actually sent.
- **Learning and teaching:** SOS and the alphabet chart make a great first lesson in how coded communication works.
- **Puzzles and games:** encode clues for escape rooms, geocaches, scavenger hunts, and classroom challenges.
- **Emergency knowledge:** `... --- ...` is SOS — three dots, three dashes, three dots — recognized worldwide.

## Frequently asked questions

### How is Morse code timed when I press Play?

Exactly the way it is really sent. One unit is a dot; a dash lasts three units. The gap between symbols inside a letter is one unit, between letters three units, and between words seven units. The speed setting changes the unit length: about 120 ms per unit at 10 WPM, 80 ms at 15 WPM, and 50 ms at roughly 24 WPM, all at a standard 600 Hz tone.

### Which characters are supported?

All letters A–Z, digits 0–9, and common punctuation: `. , ? ' ! / ( ) & : ; = + - _ " $ @`. Characters with no Morse equivalent (like accented letters or emoji) are skipped during text-to-Morse translation, and the tool tells you how many were skipped. Unknown codes in the Morse-to-text direction appear as � so you can spot them.

### Is anything sent to a server?

No. Translation and audio playback both happen entirely in your browser — the beeps are generated live by the Web Audio API. Nothing you type leaves your device.
