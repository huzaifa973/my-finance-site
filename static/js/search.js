/* DollarWise site search — fuzzy keyword matching across every tool & article.
   No exact titles needed: tokens + synonyms score the whole index. */
(function(){
  var SYN = {
    jpg:['jpeg'], jpeg:['jpg'], lbs:['pounds','lb'], lb:['pounds','lbs'],
    pounds:['lbs','lb'], cm:['centimeters','centimetres'], centimeters:['cm'],
    mm:['millimeters','millimetres'], millimeters:['mm'],
    kg:['kilograms'], kilograms:['kg'], oz:['ounces'], ounces:['oz'],
    ft:['feet'], feet:['ft'], inches:['inch','in'], inch:['inches'],
    mi:['miles'], miles:['mi'], km:['kilometers'], kilometers:['km'],
    txt:['text'], text:['txt'], md:['markdown'], markdown:['md'],
    htm:['html'], docx:['doc','word'], doc:['docx','word'],
    pics:['image','photo'], pic:['image','photo'], photo:['image','picture'],
    picture:['image','photo'], calc:['calculator'], calculator:['calc'],
    maker:['generator'], generator:['maker'], check:['checker'], checker:['check']
  };
  var STOP = { 'to':1, 'the':1, 'a':1, 'an':1, 'of':1, 'for':1, 'in':1, 'on':1,
               'and':1, 'or':1, 'my':1, 'how':1, 'what':1, 'is':1, 'do':1, 'i':1 };
  var index = null;

  function norm(s){
    return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function stem(w){ return w.length > 3 && w.slice(-1) === 's' ? w.slice(0, -1) : w; }
  function tokens(q){
    var raw = norm(q).split(' ').filter(function(w){ return w && !STOP[w]; });
    var out = [];
    raw.forEach(function(w){
      out.push(w);
      var st = stem(w); if(st !== w) out.push(st);
      (SYN[w] || []).forEach(function(s){ out.push(s); });
      (SYN[st] || []).forEach(function(s){ out.push(s); });
    });
    return out.filter(function(w, i){ return out.indexOf(w) === i; });
  }
  function score(item, qt, rawCount){
    var t = norm(item.t), k = norm(item.k), d = norm(item.d), c = norm(item.c);
    var s = 0, hit = 0;
    qt.forEach(function(w){
      var inT = t.split(' ').indexOf(w) >= 0, inK = k.split(' ').indexOf(w) >= 0;
      if(inT){ s += 12; hit++; }
      else if(t.indexOf(w) >= 0){ s += 6; hit++; }
      if(inK){ s += 7; if(!inT) hit += 0.5; }
      if(c === w) s += 6;
      if(d.indexOf(w) >= 0) s += 3;
    });
    if(rawCount > 1 && hit >= rawCount) s += 15; /* matches everything asked */
    return s;
  }
  function esc(s){
    return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
  }
  function run(q){
    var status = document.getElementById('dwSearchStatus');
    var box = document.getElementById('dwSearchResults');
    if(!index){ status.textContent = 'Loading the index…'; return; }
    q = (q || '').trim();
    if(!q){
      status.textContent = index.length + ' tools & articles indexed. Start typing to search.';
      box.innerHTML = '';
      return;
    }
    var rawCount = norm(q).split(' ').filter(function(w){ return w && !STOP[w]; }).length;
    var qt = tokens(q);
    var scored = [];
    index.forEach(function(item){
      var sc = score(item, qt, rawCount);
      if(sc > 0) scored.push({ item: item, sc: sc });
    });
    scored.sort(function(a, b){ return b.sc - a.sc; });
    var top = scored.slice(0, 24);
    if(!top.length){
      status.textContent = 'No matches for “' + q + '” — try different words, e.g. the format or job name.';
      box.innerHTML = '';
      return;
    }
    status.textContent = scored.length + ' result' + (scored.length === 1 ? '' : 's') +
      ' for “' + q + '”' + (scored.length > top.length ? ' — showing the best ' + top.length : '');
    box.innerHTML = top.map(function(r){
      var it = r.item;
      var tag = it.s === 'tools' ? (it.c ? it.c + ' tool' : 'Free tool')
              : it.s === 'posts' ? 'Guide / article' : 'Page';
      return '<article class="card"><div class="card-body">' +
        '<span class="card-tag">' + esc(tag) + '</span>' +
        '<h3 class="card-title"><a href="' + esc(it.u) + '">' + esc(it.t) + '</a></h3>' +
        '<p class="card-excerpt">' + esc(it.d) + '</p>' +
        '<a class="card-link" href="' + esc(it.u) + '">Open →</a>' +
        '</div></article>';
    }).join('');
  }
  function init(){
    var input = document.getElementById('dwSearchQ');
    if(!input) return;
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q') || '';
    input.value = q;
    fetch('/search-index.json').then(function(r){ return r.json(); }).then(function(data){
      index = data;
      run(q);
    }).catch(function(){
      document.getElementById('dwSearchStatus').textContent =
        'Search index failed to load — browse the tools hub instead: /tools/';
    });
    var timer = null;
    input.addEventListener('input', function(){
      clearTimeout(timer);
      timer = setTimeout(function(){
        run(input.value);
        var url = new URL(window.location.href);
        if(input.value) url.searchParams.set('q', input.value); else url.searchParams.delete('q');
        window.history.replaceState(null, '', url);
      }, 120);
    });
    input.focus();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
