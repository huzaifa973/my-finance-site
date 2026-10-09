---
title: "Free Text to Speech — Read Text Aloud Online"
description: "Turn any text into natural speech with free online text to speech. Pick a voice, speed and pitch — no sign-up, unlimited, everything stays in your browser."
date: 2026-10-09
draft: false
---

Turn any text into natural-sounding speech in seconds. Paste an article, essay, email, or story, pick a voice and speed, and listen — perfect for proofreading your writing, learning pronunciation, or giving your eyes a rest while you multitask. Everything runs in your browser; your text is never uploaded anywhere.

<div class="tool-shell" id="ttsShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>Text to Speech</h2>
<p>Paste any text and hear it read aloud in a natural voice — free, unlimited, right in your browser.</p>
</div>
<button type="button" class="theme-toggle" id="ttsTheme">🌙 Dark</button>
</div>
</div>
<div class="tool-badges">
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>100% Free Forever</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Sign-up</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>No Credit Card</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Private — everything stays in your browser</span>
<span class="tool-badge"><svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>Unlimited Use</span>
</div>
<div class="tool-body">
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">1</span> Paste your text</p>
<div class="setting">
<label for="ttsText">Your text</label>
<textarea id="ttsText" class="tool-input" rows="8" placeholder="Paste your article, essay, email, or story here…"></textarea>
<div class="hint">Long reads are fine — big texts are split into short sections automatically so nothing gets cut off.</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Voice settings</p>
<div class="settings-panel">
<div class="preset-row" id="ttsPresets">
<button type="button" class="preset-chip active" data-rate="0.9" data-pitch="1" data-vol="100">📖 Audiobook — slow &amp; calm</button>
<button type="button" class="preset-chip" data-rate="1.6" data-pitch="1" data-vol="100">⚡ Quick skim — fast</button>
<button type="button" class="preset-chip" data-rate="1.05" data-pitch="0.9" data-vol="100">🎤 Presentation — steady</button>
</div>
<div class="settings-grid">
<div class="setting">
<label for="ttsVoice">Voice</label>
<select id="ttsVoice" class="tool-input">
<option value="">Loading voices…</option>
</select>
<div class="hint">Voices come from your device — the list looks different on every phone and computer.</div>
</div>
<div class="setting">
<label for="ttsRate">Speed: <span class="val" id="ttsRateVal">1.00×</span></label>
<input type="range" id="ttsRate" min="0.5" max="2" step="0.05" value="1">
<div class="hint">1× is normal speed — slow down for learning, speed up for skimming.</div>
</div>
<div class="setting">
<label for="ttsPitch">Pitch: <span class="val" id="ttsPitchVal">1.00×</span></label>
<input type="range" id="ttsPitch" min="0" max="2" step="0.05" value="1">
<div class="hint">Lower values sound deeper, higher values sound lighter.</div>
</div>
<div class="setting">
<label for="ttsVol">Volume: <span class="val" id="ttsVolVal">100%</span></label>
<input type="range" id="ttsVol" min="0" max="100" step="5" value="100">
<div class="hint">Your device volume still applies on top of this.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Listen</p>
<div class="setting">
<label>Now reading — follow along</label>
<div class="tool-output" id="ttsPreview">Press “Read Aloud” and the current word lights up here as it is spoken.</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro" id="ttsRead" disabled>
<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
Read Aloud
</button>
<button type="button" class="btn-pro-outline" id="ttsPause" disabled>⏸ Pause</button>
<button type="button" class="btn-pro-outline" id="ttsStop" disabled>⏹ Stop</button>
</div>
<div class="progress-wrap" id="ttsProgWrap">
<div class="progress-bar"><i id="ttsProgBar"></i></div>
<div class="progress-text" id="ttsProgText">Reading…</div>
</div>
<div class="results show" id="ttsResults">
<p class="result-head">📊 Text stats</p>
<div class="result-grid">
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="ttsWords">0</div>
<div style="font-size:.85rem;color:var(--muted);">Words</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="ttsChars">0</div>
<div style="font-size:.85rem;color:var(--muted);">Characters</div>
</div>
<div class="result-card">
<div style="font-size:1.8rem;font-weight:800;" id="ttsTime">—</div>
<div style="font-size:.85rem;color:var(--muted);">Listening time</div>
</div>
</div>
<div class="tool-actions">
<button type="button" class="btn-pro-outline" id="ttsCopy">📋 Copy text</button>
<button type="button" class="btn-pro-outline" id="ttsAgain" disabled>🔁 Read again</button>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — listen to as much text as you like, as often as you like.</p>
</div>
</div>
</div>

<script>
(function(){
var shell = document.getElementById('ttsShell');
ToolPro.themeToggle(shell, document.getElementById('ttsTheme'));
var hl = document.createElement('style');
hl.textContent = '#ttsPreview{max-height:230px;overflow-y:auto;line-height:1.8;}' +
'.tts-word{border-radius:3px;padding:0 1px;transition:background .12s;}' +
'.tts-word.speaking{background:var(--tp-accent-soft);color:var(--tp-accent-dark);font-weight:700;}';
document.head.appendChild(hl);
var supported = ('speechSynthesis' in window) && ('SpeechSynthesisUtterance' in window);
var speaking = false, paused = false, runId = 0;
var chunks = [], chunkWords = [], totalWords = 0;
var voices = [];
var textEl = document.getElementById('ttsText');
var readBtn = document.getElementById('ttsRead');
var pauseBtn = document.getElementById('ttsPause');
var stopBtn = document.getElementById('ttsStop');
var againBtn = document.getElementById('ttsAgain');
var copyBtn = document.getElementById('ttsCopy');
var preview = document.getElementById('ttsPreview');
var voiceSel = document.getElementById('ttsVoice');
var rateRange = document.getElementById('ttsRate');
var rateVal = document.getElementById('ttsRateVal');
var pitchRange = document.getElementById('ttsPitch');
var pitchVal = document.getElementById('ttsPitchVal');
var volRange = document.getElementById('ttsVol');
var volVal = document.getElementById('ttsVolVal');
var presets = document.getElementById('ttsPresets');
var progWrap = document.getElementById('ttsProgWrap');
var progBar = document.getElementById('ttsProgBar');
var progText = document.getElementById('ttsProgText');
function escHtml(s){
return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function wordCount(s){
s = String(s).trim();
return s ? s.split(/\s+/).length : 0;
}
function currentRate(){
return parseFloat(rateRange.value) || 1;
}
function fmtListen(words, rate){
if(!words) return '—';
var secs = Math.round(words / (150 * rate) * 60);
if(secs < 60) return secs + ' sec';
var m = Math.floor(secs / 60), s = secs % 60;
return m + ' min' + (s ? ' ' + s + ' sec' : '');
}
function refreshUi(){
var t = textEl.value, w = wordCount(t), has = !!t.trim();
document.getElementById('ttsWords').textContent = w.toLocaleString('en-US');
document.getElementById('ttsChars').textContent = t.length.toLocaleString('en-US');
document.getElementById('ttsTime').textContent = fmtListen(w, currentRate());
readBtn.disabled = !has || !supported || speaking;
againBtn.disabled = readBtn.disabled;
pauseBtn.disabled = !speaking;
stopBtn.disabled = !speaking;
pauseBtn.textContent = paused ? '▶ Resume' : '⏸ Pause';
}
function loadVoices(){
if(!supported) return;
var all = [];
try{ all = speechSynthesis.getVoices() || []; }catch(e){ all = []; }
if(!all.length){
voiceSel.innerHTML = '<option value="">Loading voices…</option>';
voices = [];
return;
}
var en = [], rest = [];
all.forEach(function(v){
(((v.lang || '').toLowerCase().indexOf('en') === 0) ? en : rest).push(v);
});
var picked = en.concat(rest).slice(0, 40);
voices = picked;
var prev = voiceSel.value;
var groups = {};
picked.forEach(function(v, i){
var base = (v.lang || 'other').split('-')[0].toLowerCase() || 'other';
(groups[base] = groups[base] || []).push(i);
});
var html = '';
Object.keys(groups).sort().forEach(function(g){
html += '<optgroup label="' + escHtml(g.toUpperCase()) + '">';
groups[g].forEach(function(i){
var v = picked[i];
html += '<option value="' + i + '">' + escHtml(v.name || 'Voice') + ' (' + escHtml(v.lang || '') + ')</option>';
});
html += '</optgroup>';
});
voiceSel.innerHTML = html;
var defIdx = 0, i;
for(i = 0; i < picked.length; i++){
if((picked[i].name || '').toLowerCase().indexOf('google us english') !== -1){ defIdx = i; break; }
}
var keep = parseInt(prev, 10);
voiceSel.value = (!isNaN(keep) && keep >= 0 && keep < picked.length) ? String(keep) : String(defIdx);
}
function splitChunks(text, maxWords){
maxWords = maxWords || 200;
var clean = String(text).replace(/\s+/g, ' ').trim();
if(!clean) return [];
var sentences = clean.match(/[^.!?…]+[.!?…]+["'”’)\]]*|[^.!?…]+$/g) || [clean];
var out = [], cur = '', curW = 0;
function pushCur(){ if(cur){ out.push(cur); cur = ''; curW = 0; } }
sentences.forEach(function(s){
s = s.trim();
if(!s) return;
var words = s.split(' ');
if(words.length > maxWords){
pushCur();
for(var i = 0; i < words.length; i += maxWords){
out.push(words.slice(i, i + maxWords).join(' '));
}
return;
}
if(curW + words.length > maxWords) pushCur();
cur = cur ? cur + ' ' + s : s;
curW += words.length;
});
pushCur();
return out;
}
function buildPreview(chunkText){
var bounds = [], re = /\S+/g, m;
while((m = re.exec(chunkText))){ bounds.push({ start: m.index, end: m.index + m[0].length }); }
var html = '', last = 0;
bounds.forEach(function(b, i){
html += escHtml(chunkText.slice(last, b.start));
html += '<span class="tts-word" data-i="' + i + '">' + escHtml(chunkText.slice(b.start, b.end)) + '</span>';
last = b.end;
});
html += escHtml(chunkText.slice(last));
preview.innerHTML = html;
preview.scrollTop = 0;
return { bounds: bounds, spans: preview.querySelectorAll('.tts-word') };
}
function setProgress(pct, label){
pct = Math.max(0, Math.min(100, Math.round(pct)));
progBar.style.width = pct + '%';
progText.textContent = label || ('Reading… ' + pct + '%');
}
function clearHighlight(){
var act = preview.querySelectorAll('.tts-word.speaking'), i;
for(i = 0; i < act.length; i++) act[i].classList.remove('speaking');
}
function startReading(){
if(!supported || speaking) return;
var text = textEl.value.trim();
if(!text){ ToolPro.toast('Paste some text first', 'err'); return; }
chunks = splitChunks(text, 200);
if(!chunks.length){ ToolPro.toast('Nothing to read', 'err'); return; }
chunkWords = chunks.map(wordCount);
totalWords = chunkWords.reduce(function(a, b){ return a + b; }, 0);
runId++;
speaking = true;
paused = false;
try{ if(speechSynthesis.speaking || speechSynthesis.pending) speechSynthesis.cancel(); }catch(e){}
progWrap.classList.add('show');
setProgress(0, 'Starting…');
refreshUi();
ToolPro.toast('Reading aloud — ' + chunks.length + (chunks.length === 1 ? ' section' : ' sections'), 'ok');
speakChunk(0, runId, 0);
}
function speakChunk(i, myRun, doneWords){
if(myRun !== runId) return;
if(i >= chunks.length){ finishReading(true); return; }
var chunkText = chunks[i];
var built = buildPreview(chunkText);
var bounds = built.bounds, spans = built.spans;
var hi = -1, k;
var utt = new SpeechSynthesisUtterance(chunkText);
var v = voices[parseInt(voiceSel.value, 10)];
if(v) utt.voice = v;
utt.rate = currentRate();
var pNum = parseFloat(pitchRange.value);
utt.pitch = isNaN(pNum) ? 1 : pNum;
var vNum = parseFloat(volRange.value);
utt.volume = isNaN(vNum) ? 1 : vNum / 100;
utt.onboundary = function(e){
if(myRun !== runId) return;
var idx = (e && typeof e.charIndex === 'number') ? e.charIndex : -1;
if(idx < 0 || !bounds.length) return;
var wi = -1;
for(k = 0; k < bounds.length; k++){
if(bounds[k].start <= idx && idx < bounds[k].end){ wi = k; break; }
}
if(wi < 0){
for(k = 0; k < bounds.length; k++){
if(bounds[k].start > idx){ wi = k; break; }
}
if(wi < 0) wi = bounds.length - 1;
}
if(wi !== hi){
if(hi >= 0 && spans[hi]) spans[hi].classList.remove('speaking');
hi = wi;
if(spans[hi]){
spans[hi].classList.add('speaking');
var top = spans[hi].offsetTop - preview.clientHeight / 2;
preview.scrollTop = top > 0 ? top : 0;
}
}
var frac = (wi + 1) / bounds.length;
var pct = (doneWords + frac * chunkWords[i]) / totalWords * 100;
setProgress(pct, 'Reading… ' + Math.round(Math.min(100, pct)) + '% · part ' + (i + 1) + ' of ' + chunks.length);
};
utt.onend = function(){
if(myRun !== runId) return;
speakChunk(i + 1, myRun, doneWords + chunkWords[i]);
};
utt.onerror = function(e){
if(myRun !== runId) return;
var err = (e && e.error) || '';
if(err === 'canceled' || err === 'interrupted') return;
ToolPro.toast('Speech error' + (err ? ': ' + err : ''), 'err');
finishReading(false);
};
try{ speechSynthesis.speak(utt); }
catch(e){ ToolPro.toast('Could not start speech', 'err'); finishReading(false); }
}
function finishReading(done){
speaking = false;
paused = false;
clearHighlight();
progWrap.classList.remove('show');
refreshUi();
if(done) ToolPro.toast('Finished reading', 'ok');
}
function stopReading(silent){
runId++;
speaking = false;
paused = false;
try{ speechSynthesis.cancel(); }catch(e){}
clearHighlight();
progWrap.classList.remove('show');
refreshUi();
if(!silent) ToolPro.toast('Stopped');
}
ToolPro.bindSlider(rateRange, rateVal, function(v){ return (+v).toFixed(2) + '×'; });
ToolPro.bindSlider(pitchRange, pitchVal, function(v){ return (+v).toFixed(2) + '×'; });
ToolPro.bindSlider(volRange, volVal, function(v){ return v + '%'; });
presets.addEventListener('click', function(e){
var chip = e.target.closest('.preset-chip');
if(!chip) return;
presets.querySelectorAll('.preset-chip').forEach(function(c){ c.classList.remove('active'); });
chip.classList.add('active');
rateRange.value = chip.dataset.rate;
pitchRange.value = chip.dataset.pitch;
volRange.value = chip.dataset.vol;
[rateRange, pitchRange, volRange].forEach(function(r){ r.dispatchEvent(new Event('input')); });
refreshUi();
ToolPro.toast('Preset applied: ' + chip.textContent.trim());
});
readBtn.addEventListener('click', startReading);
againBtn.addEventListener('click', startReading);
stopBtn.addEventListener('click', function(){ stopReading(false); });
pauseBtn.addEventListener('click', function(){
if(!speaking) return;
try{
if(paused){ speechSynthesis.resume(); paused = false; }
else { speechSynthesis.pause(); paused = true; }
}catch(e){ ToolPro.toast('Pause is not supported in this browser', 'err'); }
refreshUi();
});
copyBtn.addEventListener('click', function(){
if(!textEl.value.trim()){ ToolPro.toast('Nothing to copy', 'err'); return; }
ToolPro.copyText(textEl.value, 'Text copied to clipboard');
});
textEl.addEventListener('input', function(){
if(speaking) stopReading(true);
refreshUi();
});
rateRange.addEventListener('input', refreshUi);
voiceSel.addEventListener('change', function(){
if(speaking) ToolPro.toast('Voice applies from the next read', 'ok');
});
if(supported){
loadVoices();
try{ speechSynthesis.addEventListener('voiceschanged', loadVoices); }catch(e){}
}else{
preview.textContent = '⚠️ Sorry — this browser does not support speech synthesis. Please try Chrome or Edge on desktop, or Chrome on Android.';
ToolPro.toast('Speech synthesis is not supported in this browser', 'err');
}
refreshUi();
})();
</script>

## How it works

- **Your browser does the talking.** This tool uses the built-in Web Speech API — the same speech engine behind your operating system's accessibility features. No audio is generated on a server, and nothing you type is ever uploaded.
- **Voices come from your device.** Windows, macOS, Android, and iPhone each ship their own set of voices, so the voice list here looks different on every phone and computer. Pick whichever you like best.
- **Long texts are split into ~200-word sections** and read one after another, because browsers can cut off a very long single utterance mid-sentence.
- **The current word lights up as it is spoken**, so you can follow along — handy for proofreading and language learning.
- **Honest limitation:** browsers can read text aloud but cannot save the speech as an MP3 or WAV file, so there is no download button here — this tool reads aloud only.
- **Best experience** in Chrome or Edge on desktop, or Chrome on Android. Safari supports speech too, though its voice list can take a moment to appear.

## Everyday uses

- **Proofread essays and reports by ear** — hearing your writing read aloud catches typos and awkward sentences your eyes skip over.
- **Listen to long articles while commuting, cooking, or exercising** — turn reading time into listening time.
- **Accessibility for low vision or dyslexia** — follow the highlighted words while the voice reads.
- **Learn pronunciation** — pick a voice in the language you are studying and slow the speed down to catch every syllable.
- **Bedtime stories for kids**, hands-free, in a calm audiobook-style voice.
- **Multitask through your inbox** — have emails and documents read aloud while you do other work.
- **Study smarter** — listening to your notes is a second pass of revision without extra screen time.
