/* DollarWise forms — sends via FormSubmit (free form backend, no account needed).
   Target inbox: hicomapny@gmail.com
   Any <form class="js-formsubmit"> on the site is intercepted and POSTed as JSON.
   Status messages go into the form's .form-status element. */
(function () {
  "use strict";
  var ENDPOINT = "https://formsubmit.co/ajax/hicomapny@gmail.com";

  function setStatus(form, msg, ok) {
    var el = form.querySelector(".form-status");
    if (!el) return;
    el.textContent = msg;
    el.setAttribute("data-ok", ok ? "1" : "0");
    el.hidden = false;
  }

  document.addEventListener("submit", function (e) {
    var form = e.target;
    if (!form.classList || !form.classList.contains("js-formsubmit")) return;
    e.preventDefault();

    // Honeypot: real users never fill this; bots do.
    if (form.querySelector('[name="_honey"]') && form.querySelector('[name="_honey"]').value) return;

    var btn = form.querySelector('button[type="submit"]');
    var originalText = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
    setStatus(form, "Sending…", true);

    var data = { _captcha: "false" };
    new FormData(form).forEach(function (value, key) { data[key] = value; });

    fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (res && res.success === "true") {
          form.reset();
          setStatus(form, form.getAttribute("data-success") || "Sent! Please check your inbox.", true);
        } else {
          throw new Error("rejected");
        }
      })
      .catch(function () {
        setStatus(form, "Something went wrong. Please try again or email us directly.", false);
        if (btn) { btn.disabled = false; btn.textContent = originalText; }
      })
      .then(function () {
        if (btn && btn.disabled) { btn.disabled = false; btn.textContent = originalText; }
      });
  });
})();
