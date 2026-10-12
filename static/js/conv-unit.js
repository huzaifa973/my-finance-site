// ConvUnit — shared engine for unit-pair converter pages (length & weight).
// 100% client-side. Usage: ConvUnit.init({ prefix:'cv', dim:'length', from:'inch', to:'cm' });
window.ConvUnit = (function () {
  var FACTORS = {
    length: { mm: 0.001, cm: 0.01, m: 1, km: 1000, inch: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
    weight: { g: 0.001, kg: 1, oz: 0.028349523125, lb: 0.45359237, st: 6.35029318, ton: 907.18474 }
  };

  function fmt(n) {
    if (n === null || isNaN(n) || !isFinite(n)) return '—';
    if (n === 0) return '0';
    var a = Math.abs(n);
    if (a >= 1e15 || a < 1e-7) return n.toExponential(4).replace(/(\.\d*?)0+e/, '$1e').replace(/\.e/, 'e');
    var s = String(parseFloat(n.toPrecision(10)));
    if (s.indexOf('e') !== -1) return s;
    var parts = s.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  function init(cfg) {
    var p = cfg.prefix || 'cv';
    var table = FACTORS[cfg.dim];
    if (!table) return;
    var ratio = table[cfg.from] / table[cfg.to];
    var shell = document.getElementById(p + 'Shell');
    var input = document.getElementById(p + 'Val');
    var out = document.getElementById(p + 'Out');
    var formula = document.getElementById(p + 'Formula');
    var themeBtn = document.getElementById(p + 'Theme');
    var copyBtn = document.getElementById(p + 'Copy');
    var clearBtn = document.getElementById(p + 'Clear');
    if (!input || !out) return;

    if (themeBtn && shell) {
      themeBtn.addEventListener('click', function () {
        var dark = shell.getAttribute('data-theme') === 'dark';
        shell.setAttribute('data-theme', dark ? 'light' : 'dark');
        themeBtn.textContent = dark ? '🌙 Dark' : '☀️ Light';
      });
    }

    function convert() {
      var v = parseFloat(input.value);
      if (input.value === '' || isNaN(v)) {
        out.textContent = '—';
        if (formula) formula.textContent = '';
        return;
      }
      var r = v * ratio;
      out.textContent = fmt(r);
      if (formula) {
        formula.textContent = fmt(v) + ' × ' + fmt(ratio) + ' = ' + fmt(r);
      }
      if (copyBtn) copyBtn.disabled = false;
    }

    input.addEventListener('input', convert);

    var chips = document.querySelectorAll('#' + p + 'Presets .preset-chip');
    Array.prototype.forEach.call(chips, function (chip) {
      chip.addEventListener('click', function () {
        input.value = chip.getAttribute('data-v');
        convert();
        input.focus();
      });
    });

    if (copyBtn) {
      copyBtn.addEventListener('click', function () {
        var text = input.value + ' = ' + out.textContent;
        if (navigator.clipboard) navigator.clipboard.writeText(text);
        copyBtn.textContent = 'Copied ✓';
        setTimeout(function () { copyBtn.textContent = 'Copy result'; }, 1500);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        input.value = '';
        convert();
        input.focus();
      });
    }

    convert();
  }

  return { init: init, fmt: fmt };
})();
