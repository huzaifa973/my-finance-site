/* ============================================================
   DollarWise PRO TOOL KIT — shared JS helpers
   Every tool page on /tools/ uses these. 100% client-side.
   ============================================================ */
(function(){
"use strict";

var TP = window.ToolPro = window.ToolPro || {};

/* Format bytes -> "2.4 MB" */
TP.fmtBytes = function(bytes){
  if(!bytes && bytes !== 0) return "—";
  if(bytes === 0) return "0 B";
  var u = ["B","KB","MB","GB"], i = 0, n = bytes;
  while(n >= 1024 && i < u.length-1){ n /= 1024; i++; }
  return (i === 0 ? n : n.toFixed(n >= 100 ? 0 : 1)) + " " + u[i];
};

/* Trigger a download of a data-URL / blob-URL */
TP.download = function(url, filename){
  var a = document.createElement("a");
  a.href = url; a.download = filename || "dollarwise-file";
  document.body.appendChild(a); a.click();
  setTimeout(function(){ document.body.removeChild(a); }, 400);
};

/* Toast notification */
var toastEl = null, toastTimer = null;
TP.toast = function(msg, type){
  if(!toastEl){
    toastEl = document.createElement("div");
    toastEl.className = "tp-toast";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  toastEl.className = "tp-toast show" + (type ? " " + type : "");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ toastEl.className = "tp-toast"; }, 2800);
};

/* Wire a dropzone element.
   el: the .dropzone element (must contain an <input type=file>)
   opts: { multiple:bool, accept:string, onFiles:fn(FileList), maxFiles:int } */
TP.dropzone = function(el, opts){
  opts = opts || {};
  var input = el.querySelector('input[type="file"]');
  if(!input) return;
  if(opts.multiple) input.multiple = true;
  if(opts.accept) input.accept = opts.accept;
  el.addEventListener("click", function(e){
    if(e.target.closest("button,a")) return;
    input.click();
  });
  ["dragenter","dragover"].forEach(function(ev){
    el.addEventListener(ev, function(e){ e.preventDefault(); el.classList.add("dragover"); });
  });
  ["dragleave","drop"].forEach(function(ev){
    el.addEventListener(ev, function(e){ e.preventDefault(); el.classList.remove("dragover"); });
  });
  el.addEventListener("drop", function(e){
    var files = e.dataTransfer.files;
    if(files && files.length) handle(files);
  });
  input.addEventListener("change", function(){ if(input.files.length) handle(input.files); input.value=""; });
  function handle(files){
    var arr = Array.prototype.slice.call(files);
    if(opts.maxFiles && arr.length > opts.maxFiles){
      TP.toast("Maximum " + opts.maxFiles + " files at a time", "err");
      arr = arr.slice(0, opts.maxFiles);
    }
    opts.onFiles && opts.onFiles(arr);
  }
};

/* Build a file-list row. Returns {li, setStatus}. */
TP.fileRow = function(listEl, file, onRemove){
  var li = document.createElement("li");
  li.className = "file-row";
  var ext = (file.name.split(".").pop() || "?").toUpperCase().slice(0,4);
  li.innerHTML =
    '<span class="file-ic">' + ext.replace(/[^A-Z0-9]/g,"") + "</span>" +
    '<span class="file-name"></span>' +
    '<span class="file-size">' + TP.fmtBytes(file.size) + "</span>" +
    '<span class="file-status">Ready</span>' +
    '<button type="button" class="file-remove" aria-label="Remove file">&times;</button>';
  li.querySelector(".file-name").textContent = file.name;
  li.querySelector(".file-name").title = file.name;
  li.querySelector(".file-remove").addEventListener("click", function(){
    li.remove();
    onRemove && onRemove(file);
  });
  listEl.appendChild(li);
  return {
    li: li,
    setStatus: function(txt, cls){
      var s = li.querySelector(".file-status");
      s.textContent = txt;
      s.className = "file-status" + (cls ? " " + cls : "");
    }
  };
};

/* Bind a range slider to a live value label. */
TP.bindSlider = function(rangeEl, valEl, fmt){
  function upd(){
    valEl.textContent = fmt ? fmt(rangeEl.value) : rangeEl.value;
  }
  rangeEl.addEventListener("input", upd); upd();
};

/* Light/dark theme toggle for a .tool-shell. Persists per-tool in localStorage. */
TP.themeToggle = function(shell, btn){
  var key = "dw-tool-theme-" + (location.pathname || "x");
  function apply(t){
    shell.setAttribute("data-theme", t);
    btn.textContent = t === "dark" ? "☀️ Light" : "🌙 Dark";
    try{ localStorage.setItem(key, t); }catch(e){}
  }
  var saved = "light";
  try{ saved = localStorage.getItem(key) || "light"; }catch(e){}
  apply(saved);
  btn.addEventListener("click", function(e){
    e.stopPropagation();
    apply(shell.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });
};

/* Read a File as data URL (Promise). */
TP.readAsDataURL = function(file){
  return new Promise(function(res, rej){
    var r = new FileReader();
    r.onload = function(){ res(r.result); };
    r.onerror = rej;
    r.readAsDataURL(file);
  });
};

/* Copy text to clipboard with toast feedback. */
TP.copyText = function(text, okMsg){
  function done(){ TP.toast(okMsg || "Copied to clipboard", "ok"); }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done, function(){ fallback(); });
  } else fallback();
  function fallback(){
    var ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); done(); }catch(e){ TP.toast("Copy failed", "err"); }
    document.body.removeChild(ta);
  }
};

})();
