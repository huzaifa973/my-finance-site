/* DollarWise shared engine — SEO schema (JSON-LD) generators.
   Usage: SchemaGen.init({ prefix:'cv', build: function(get){ return {object}; } })
   get('Name') returns the trimmed value of #cvName (input/select/textarea) or ''.
   Output renders live into #<p>Out as a full <script type="application/ld+json"> block;
   #<p>Copy copies it. Empty fields are stripped recursively before rendering. */
(function () {
  function clean(o) {
    if (Array.isArray(o)) {
      var a = o.map(clean).filter(function (v) { return v !== undefined; });
      return a.length ? a : undefined;
    }
    if (o && typeof o === 'object') {
      var r = {}, any = false;
      Object.keys(o).forEach(function (k) {
        var v = clean(o[k]);
        if (v !== undefined) { r[k] = v; any = true; }
      });
      return any ? r : undefined;
    }
    if (o === '' || o === null || o === undefined) return undefined;
    return o;
  }

  function lines(v) {
    return (v || '').split('\n').map(function (s) { return s.trim(); }).filter(Boolean);
  }

  function init(cfg) {
    var P = cfg.prefix || 'cv';
    var shell = document.getElementById(P + 'Shell');
    ToolPro.themeToggle(shell, document.getElementById(P + 'Theme'));
    var out = document.getElementById(P + 'Out');
    var copyBtn = document.getElementById(P + 'Copy');
    var form = document.getElementById(P + 'Form');
    if (!out) return;

    function get(id) {
      var el = document.getElementById(P + id);
      return el ? String(el.value).trim() : '';
    }
    get.lines = function (id) { return lines(get(id)); };
    get.num = function (id) { var v = parseFloat(get(id)); return isNaN(v) ? '' : v; };

    function render() {
      var obj = cfg.build(get);
      obj = clean(obj);
      if (!obj) { out.textContent = 'Fill in the form to generate your schema.'; return; }
      obj['@context'] = 'https://schema.org';
      // @context first for readability
      var ordered = { '@context': 'https://schema.org' };
      Object.keys(obj).forEach(function (k) { if (k !== '@context') ordered[k] = obj[k]; });
      out.textContent = '<script type="application/ld+json">\n' + JSON.stringify(ordered, null, 2) + '\n</' + 'script>';
    }

    if (form) form.addEventListener('input', render);
    if (form) form.addEventListener('change', render);
    if (copyBtn) copyBtn.addEventListener('click', function () {
      var text = out.textContent;
      if (navigator.clipboard) navigator.clipboard.writeText(text);
      ToolPro.toast('Schema copied — paste it into your page <head> or before </body>', 'ok');
    });
    render();
  }

  window.SchemaGen = { init: init, clean: clean, lines: lines };
})();
