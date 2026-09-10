/* AK Life & Legacy Planning — shared behaviour */
(function () {
  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('mobileNav');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Lead form.
  var form = document.getElementById('leadForm');
  var success = document.getElementById('successMsg');

  // TODO(owner): this does not send the lead anywhere yet. Before going live,
  // POST the form data to your real pipeline — Formspree, Netlify Forms, a
  // Zapier/Make webhook into your CRM, or your own endpoint — and only show the
  // success message once the request succeeds. Example:
  //
  //   var data = Object.fromEntries(new FormData(form));
  //   fetch('https://your-endpoint', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(data)
  //   }).then(showSuccess).catch(showError);
  //
  // The hidden `audience` field tells you which page the lead came from.
  function handleSubmit(e) {
    e.preventDefault();
    showSuccess();
  }

  function showSuccess() {
    form.style.display = 'none';
    success.style.display = 'block';
    success.setAttribute('tabindex', '-1');
    success.focus();
  }

  if (form && success) {
    form.addEventListener('submit', handleSubmit);
  }
})();
