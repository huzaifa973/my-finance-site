---
title: "Free GPA Calculator — Weighted & Unweighted (US 4.0 Scale)"
description: "Calculate your GPA free in your browser — weighted and unweighted, 4.0, 4.3, and 5.0 scales, honors/AP/IB weights, plus cumulative GPA with prior credits. No sign-up."
category: everyday
date: 2026-10-10
draft: false
---

Whether you're a high school student tracking college applications or a college student planning your semester, your GPA math shouldn't be guesswork. Add your courses, pick your grading scale, and get instant weighted and unweighted GPAs — plus a cumulative GPA that folds in your prior credits. Runs entirely in your browser.

<div class="tool-shell" id="gpaShell" data-theme="light">
<div class="tool-hero">
<div class="tool-icon">
<svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
</div>
<div class="tool-hero-top">
<div>
<h2>GPA Calculator</h2>
<p>Weighted &amp; unweighted GPA on the US 4.0, 4.3, or 5.0 scale — with honors, AP, and IB weights.</p>
</div>
<button type="button" class="theme-toggle" id="gpaTheme">🌙 Dark</button>
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
<p class="tool-step-title"><span class="tool-step-num">1</span> Add your courses</p>
<div class="course-head">
<span>Course</span><span>Grade</span><span>Credits</span><span>Level</span><span></span>
</div>
<div id="gpaRows"></div>
<button type="button" class="btn-pro-outline" id="gpaAdd">＋ Add course</button>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">2</span> Scale &amp; cumulative settings</p>
<div class="settings-panel">
<div class="settings-grid">
<div class="setting">
<label for="gpaScale">Grading scale</label>
<select id="gpaScale">
<option value="4.0" selected>4.0 — standard US scale</option>
<option value="4.3">4.3 — A+ counts extra</option>
<option value="5.0">5.0 — weighted high-school scale</option>
</select>
<div class="hint">Most US colleges report on the 4.0 scale.</div>
</div>
<div class="setting">
<label class="toggle">
<input type="checkbox" id="gpaWeighted" checked>
<span class="toggle-ui"></span>
Weighted GPA (honors/AP/IB boost)
</label>
<div class="hint">Turn off for a plain unweighted GPA.</div>
</div>
<div class="setting">
<label for="gpaPrior">Prior cumulative GPA <span class="val">(optional)</span></label>
<input type="number" id="gpaPrior" min="0" max="6" step="0.01" placeholder="e.g. 3.45">
<div class="hint">Your GPA before these courses.</div>
</div>
<div class="setting">
<label for="gpaPriorCr">Prior credits <span class="val">(optional)</span></label>
<input type="number" id="gpaPriorCr" min="0" step="0.5" placeholder="e.g. 45">
<div class="hint">Credits earned before these courses.</div>
</div>
</div>
</div>
</div>
<div class="tool-step">
<p class="tool-step-title"><span class="tool-step-num">3</span> Calculate your GPA</p>
<div class="tool-actions">
<button type="button" class="btn-pro" id="gpaBtn">
<svg viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
Calculate GPA
</button>
<button type="button" class="btn-pro-outline" id="gpaReset">Reset</button>
</div>
<div class="progress-wrap" id="gpaProgWrap">
<div class="progress-bar"><i id="gpaProgBar"></i></div>
<div class="progress-text" id="gpaProgText">Working…</div>
</div>
<div class="results" id="gpaResults">
<p class="result-head">✅ Done — your GPA</p>
<div class="result-summary" id="gpaSummary"></div>
<div class="result-grid">
<div class="result-card wide">
<div class="gpa-big"><span id="gpaMain">–</span><small id="gpaMainLbl">Semester GPA</small></div>
<div class="r-stats" id="gpaStats"></div>
<div class="grade-table-wrap">
<p class="picker-label">Letter-grade values — <span id="gpaScaleLbl">4.0</span> scale</p>
<table class="grade-table" id="gpaTable"></table>
</div>
</div>
</div>
</div>
</div>
<div class="free-banner">
<strong>🎉 Free forever. No sign-up. No credit card. No limits.</strong>
<p>This tool runs entirely in your browser — calculate as many GPAs as you like.</p>
</div>
</div>
</div>

<script>
(function(){
  var shell = document.getElementById('gpaShell');
  ToolPro.themeToggle(shell, document.getElementById('gpaTheme'));

  var SCALES = {
    '4.0': {'A+':4.0,'A':4.0,'A-':3.7,'B+':3.3,'B':3.0,'B-':2.7,'C+':2.3,'C':2.0,'C-':1.7,'D+':1.3,'D':1.0,'D-':0.7,'F':0.0},
    '4.3': {'A+':4.3,'A':4.0,'A-':3.7,'B+':3.3,'B':3.0,'B-':2.7,'C+':2.3,'C':2.0,'C-':1.7,'D+':1.3,'D':1.0,'D-':0.7,'F':0.0},
    '5.0': {'A+':5.0,'A':4.7,'A-':4.3,'B+':4.0,'B':3.7,'B-':3.3,'C+':3.0,'C':2.7,'C-':2.3,'D+':2.0,'D':1.7,'D-':1.3,'F':0.0}
  };
  var GRADES = ['A+','A','A-','B+','B','B-','C+','C','C-','D+','D','D-','F'];
  var WEIGHTS = { 'Regular': 0, 'Honors (+0.5)': 0.5, 'AP / IB (+1.0)': 1.0 };

  var rowsEl = document.getElementById('gpaRows');
  var scaleSel = document.getElementById('gpaScale');
  var weightedChk = document.getElementById('gpaWeighted');
  var resBox = document.getElementById('gpaResults');

  function gradeOptions(sel){
    GRADES.forEach(function(g){
      var o = document.createElement('option');
      o.value = g; o.textContent = g;
      sel.appendChild(o);
    });
    sel.value = 'A';
  }
  function weightOptions(sel){
    Object.keys(WEIGHTS).forEach(function(w){
      var o = document.createElement('option');
      o.value = w; o.textContent = w;
      sel.appendChild(o);
    });
  }

  function addRow(name, grade, credits, weight){
    var row = document.createElement('div');
    row.className = 'course-row';
    row.innerHTML =
      '<input type="text" class="c-name" placeholder="Course name (optional)">' +
      '<select class="c-grade"></select>' +
      '<input type="number" class="c-credits" min="0" max="12" step="0.5" value="3">' +
      '<select class="c-weight"></select>' +
      '<button type="button" class="c-remove" title="Remove course">✕</button>';
    gradeOptions(row.querySelector('.c-grade'));
    weightOptions(row.querySelector('.c-weight'));
    if(name) row.querySelector('.c-name').value = name;
    if(grade) row.querySelector('.c-grade').value = grade;
    if(credits !== undefined) row.querySelector('.c-credits').value = credits;
    if(weight) row.querySelector('.c-weight').value = weight;
    row.querySelector('.c-remove').addEventListener('click', function(){
      if(rowsEl.children.length > 1) row.remove();
      else ToolPro.toast('Keep at least one course', 'err');
    });
    rowsEl.appendChild(row);
  }

  for(var i = 0; i < 4; i++) addRow();
  document.getElementById('gpaAdd').addEventListener('click', function(){ addRow(); });

  function renderTable(){
    var scale = scaleSel.value;
    document.getElementById('gpaScaleLbl').textContent = scale;
    var t = document.getElementById('gpaTable');
    var html = '<tr>';
    GRADES.forEach(function(g){
      html += '<th>' + g + '</th>';
    });
    html += '</tr><tr>';
    GRADES.forEach(function(g){
      html += '<td>' + SCALES[scale][g].toFixed(1) + '</td>';
    });
    html += '</tr>';
    t.innerHTML = html;
  }
  scaleSel.addEventListener('change', renderTable);
  renderTable();

  document.getElementById('gpaBtn').addEventListener('click', function(){
    var scale = scaleSel.value;
    var weighted = weightedChk.checked;
    var rows = rowsEl.querySelectorAll('.course-row');
    var totPts = 0, totCr = 0, skipped = 0;
    var detail = [];
    for(var i = 0; i < rows.length; i++){
      var r = rows[i];
      var cr = parseFloat(r.querySelector('.c-credits').value);
      if(!(cr > 0)){ skipped++; continue; }
      var g = r.querySelector('.c-grade').value;
      var pts = SCALES[scale][g];
      if(weighted) pts += WEIGHTS[r.querySelector('.c-weight').value] || 0;
      totPts += pts * cr; totCr += cr;
      var nm = r.querySelector('.c-name').value.trim() || ('Course ' + (i + 1));
      detail.push(nm + ': ' + g + ' × ' + cr + ' cr → ' + (pts * cr).toFixed(2) + ' pts');
    }
    if(totCr === 0){
      ToolPro.toast('Add at least one course with credits above 0', 'err');
      return;
    }
    var sem = totPts / totCr;
    var priorG = parseFloat(document.getElementById('gpaPrior').value);
    var priorC = parseFloat(document.getElementById('gpaPriorCr').value);
    var cumTxt = '';
    if(priorG >= 0 && priorC > 0){
      var cum = (sem * totCr + priorG * priorC) / (totCr + priorC);
      cumTxt = ' · Cumulative GPA: <b>' + cum.toFixed(2) + '</b> (' + (totCr + priorC) + ' total credits)';
      document.getElementById('gpaMain').textContent = cum.toFixed(2);
      document.getElementById('gpaMainLbl').textContent = 'Cumulative GPA';
    }else{
      document.getElementById('gpaMain').textContent = sem.toFixed(2);
      document.getElementById('gpaMainLbl').textContent = 'Semester GPA';
    }
    document.getElementById('gpaStats').innerHTML =
      (weighted ? 'Weighted' : 'Unweighted') + ' · ' + scale + ' scale · ' +
      totCr + ' credits' + cumTxt +
      (skipped ? ' · ' + skipped + ' row' + (skipped === 1 ? '' : 's') + ' skipped (0 credits)' : '');
    document.getElementById('gpaSummary').textContent =
      '🎉 ' + detail.length + ' courses counted — see the breakdown below.';
    var table = document.getElementById('gpaTable');
    resBox.classList.add('show');
    resBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    ToolPro.toast('GPA calculated', 'ok');
  });

  document.getElementById('gpaReset').addEventListener('click', function(){
    rowsEl.innerHTML = '';
    for(var i = 0; i < 4; i++) addRow();
    document.getElementById('gpaPrior').value = '';
    document.getElementById('gpaPriorCr').value = '';
    resBox.classList.remove('show');
    ToolPro.toast('Calculator reset');
  });
})();
</script>

## How it works

1. Add your courses — grade, credits, and level (regular, honors, AP/IB).
2. Pick your scale (4.0, 4.3, or 5.0), toggle weighted vs. unweighted, and optionally add prior GPA + credits.
3. Hit **Calculate GPA** — get your semester and cumulative GPA instantly.

## Everyday uses

- **High school students** — track the GPA colleges will see on your applications.
- **College students** — see what grades you need this semester to hit a target GPA.
- **Scholarship hunters** — many scholarships need a 3.0+ or 3.5+; know where you stand.
- **Transfer students** — estimate your cumulative GPA before applying to a new school.
- **Parents** — help your teen plan course loads with realistic GPA math.

**Weighted vs. unweighted:** unweighted treats every class equally on the base scale; weighted adds +0.5 for honors and +1.0 for AP/IB classes, rewarding tougher course loads — which is how most US high schools report class rank.
