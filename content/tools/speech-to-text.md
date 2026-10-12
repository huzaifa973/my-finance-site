---
title: "Speech to Text — Free Voice Typing Online in 8 Languages"
description: "Free speech to text: dictate in 8 languages and get live text you can copy or download as a .txt file. Voice typing in your browser — no sign-up."
category: audio
date: 2026-10-12
draft: false
---

## How it works

Press start, allow the microphone, and talk — your words appear as text in real time, ready to copy or download. One honest difference from our other tools: speech recognition is provided by your browser's built-in speech service (in Chrome, that means Google's servers process the audio), so this one tool needs an internet connection and is not fully offline.

<div class="tool-shell" id="sttShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3.02 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.76 5.91-5.78.09-.6-.39-1.14-1-1.14z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Speech to Text</h2>
<p>Dictate instead of typing — live transcription in 8 languages, copy or download in one click.</p>
</div>
<button type="button" class="theme-toggle" id="sttTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Choose your language</p>
<div class="settings-panel">
<div class="setting">
<label for="sttLang">Dictation language</label>
<select id="sttLang" style="max-width:240px;">
<option value="en-US" selected>English (US)</option>
<option value="en-GB">English (UK)</option>
<option value="ur-PK">Urdu (Pakistan)</option>
<option value="hi-IN">Hindi (India)</option>
<option value="es-ES">Spanish (Spain)</option>
<option value="fr-FR">French (France)</option>
<option value="de-DE">German (Germany)</option>
<option value="ar-SA">Arabic (Saudi Arabia)</option>
</select>
<div class="hint">Works best in Chrome or Edge on desktop or Android — they have the most reliable built-in speech recognition.</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Start dictating</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sttStart">Start dictating</button>
<button type="button" class="btn-pro-outline" id="sttStop">Stop</button>
</div>
<div style="display:flex;align-items:center;gap:8px;margin-top:10px;">
<span id="sttDot" style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#94a3b8;"></span>
<span id="sttStatus">Ready — pick a language and press Start dictating.</span>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Your transcript</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="sttCopy">Copy text</button>
<button type="button" class="btn-pro-outline" id="sttDownload">Download .txt</button>
<button type="button" class="btn-pro-outline" id="sttClear">Clear</button>
</div>
<div class="results" id="sttResults">
<p class="result-head">Transcript</p>
<div class="result-summary">
<p style="min-height:90px;line-height:1.6;"><span id="sttPlaceholder" style="opacity:.55;">Press Start dictating and speak — your words will appear here as you talk.</span><span id="sttFinal"></span><span id="sttInterim" style="opacity:.55;"></span></p>
<p id="sttCounts">0 words · 0 characters</p>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>Dictate as much as you like — no accounts, no minute caps, no watermarks on your text.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('sttShell');
  ToolPro.themeToggle(shell, document.getElementById('sttTheme'));
  var langSel = document.getElementById('sttLang');
  var startBtn = document.getElementById('sttStart');
  var stopBtn = document.getElementById('sttStop');
  var copyBtn = document.getElementById('sttCopy');
  var dlBtn = document.getElementById('sttDownload');
  var clearBtn = document.getElementById('sttClear');
  var resBox = document.getElementById('sttResults');
  var placeholder = document.getElementById('sttPlaceholder');
  var finalEl = document.getElementById('sttFinal');
  var interimEl = document.getElementById('sttInterim');
  var countsEl = document.getElementById('sttCounts');
  var statusEl = document.getElementById('sttStatus');
  var dotEl = document.getElementById('sttDot');
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  var rec = null, listening = false, finalText = '';

  function updateCounts(){
    var t = finalText.trim();
    var words = t ? t.split(/\s+/).length : 0;
    countsEl.textContent = words + ' words · ' + t.length + ' characters';
  }
  function render(interim){
    placeholder.style.display = (finalText || interim) ? 'none' : 'inline';
    finalEl.textContent = finalText;
    interimEl.textContent = interim || '';
    updateCounts();
  }
  function setStatus(txt, on){
    statusEl.textContent = txt;
    dotEl.style.background = on ? '#dc2626' : '#94a3b8';
  }

  if (!SR){
    resBox.classList.add('show');
    placeholder.style.display = 'none';
    finalEl.textContent = 'Sorry — this browser does not support speech recognition, so dictation cannot start. Please open this page in Chrome or Edge (desktop or Android) and try again.';
    setStatus('Not supported in this browser', false);
    startBtn.disabled = true;
    stopBtn.disabled = true;
  } else {
    rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = langSel.value;
    rec.onresult = function(ev){
      var interim = '';
      for (var i = ev.resultIndex; i < ev.results.length; i++){
        var r = ev.results[i];
        if (r.isFinal){
          var piece = r[0].transcript.trim();
          if (piece) finalText += (finalText && !/\s$/.test(finalText) ? ' ' : '') + piece + ' ';
        } else {
          interim += r[0].transcript;
        }
      }
      render(interim);
      resBox.classList.add('show');
    };
    rec.onend = function(){
      if (listening){
        try { rec.start(); } catch(e){}
      } else {
        setStatus('Stopped', false);
      }
    };
    rec.onerror = function(ev){
      if (ev.error === 'not-allowed' || ev.error === 'service-not-allowed'){
        listening = false;
        setStatus('Microphone blocked — allow mic access in your browser, then try again.', false);
        ToolPro.toast('Microphone access was blocked', 'err');
      } else if (ev.error === 'no-speech'){
        setStatus('Listening… no speech heard, keep talking', true);
      }
    };
    startBtn.addEventListener('click', function(){
      rec.lang = langSel.value;
      listening = true;
      try {
        rec.start();
        setStatus('Listening… speak now', true);
        resBox.classList.add('show');
        ToolPro.toast('Listening…', 'ok');
      } catch(e){}
    });
    stopBtn.addEventListener('click', function(){
      listening = false;
      try { rec.stop(); } catch(e){}
      setStatus('Stopped', false);
      render('');
    });
    langSel.addEventListener('change', function(){
      rec.lang = langSel.value;
      if (listening){
        try { rec.stop(); } catch(e){}
        ToolPro.toast('Language switched — still listening');
      }
    });
  }

  copyBtn.addEventListener('click', function(){
    var t = finalText.trim();
    if (!t){ ToolPro.toast('Nothing to copy yet', 'err'); return; }
    function done(){ ToolPro.toast('Transcript copied', 'ok'); }
    function fallback(){
      var ta = document.createElement('textarea');
      ta.value = t;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); }
      catch(e){ ToolPro.toast('Copy failed — select the text and copy it manually', 'err'); }
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(t).then(done, fallback);
    } else {
      fallback();
    }
  });
  dlBtn.addEventListener('click', function(){
    var t = finalText.trim();
    if (!t){ ToolPro.toast('Nothing to download yet', 'err'); return; }
    var blob = new Blob([t], { type: 'text/plain' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'transcript.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 2000);
    ToolPro.toast('Transcript downloaded', 'ok');
  });
  clearBtn.addEventListener('click', function(){
    finalText = '';
    render('');
    ToolPro.toast('Transcript cleared');
  });
  updateCounts();
})();
</script>

## Everyday uses

- **Voice notes and journaling:** capture thoughts at speaking speed instead of typing speed.
- **Drafting hands-free:** dictate first drafts of messages, essays and emails, then edit with the keyboard.
- **Accessibility:** an easier way to write for anyone who finds typing slow or painful.
- **Meeting and lecture notes:** let the tool keep up while you listen and think.

## Frequently asked questions

**Is my voice uploaded or recorded by DollarWise?**
DollarWise never receives or stores your audio. Recognition is performed by your browser's built-in speech service — in Chrome, that is Google's servers — so the audio does leave your device to be recognized. That is why, unlike most tools on this site, this one is not fully offline and needs an internet connection.

**Which browsers support it?**
Chrome and Edge (on desktop and Android) have reliable built-in speech recognition. Firefox and Safari support is limited or missing — if your browser cannot do it, this page tells you clearly instead of failing silently.

**How accurate is it, and how can I improve it?**
In a quiet room with a decent microphone, English dictation is usually very accurate. Speak in complete sentences, keep a steady distance from the mic, and choose the exact language you are speaking — accuracy drops fast when the wrong language is selected.
