/* AK Life & Legacy Planning — shared behaviour */
(function () {
  'use strict';

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------------------------------------------------------------- nav */
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('mobileNav');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      var open = panel.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* --------------------------------------------------------------- form */
  var form = document.getElementById('leadForm');
  if (!form) return;

  var success = document.getElementById('successMsg');
  var error = document.getElementById('errorMsg');
  var steps = Array.prototype.slice.call(form.querySelectorAll('.form-step'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('.step-dots li'));
  var current = 0;

  // Attribution: carry campaign data through with the lead.
  try {
    var qs = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach(function (k) {
      var input = form.querySelector('[name="' + k + '"]');
      if (input) input.value = qs.get(k) || '';
    });
    var ref = form.querySelector('[name="referrer"]');
    if (ref) ref.value = document.referrer || '';
  } catch (e) {
    /* URLSearchParams unavailable — attribution is optional, carry on */
  }

  function showStep(i) {
    steps.forEach(function (s, n) {
      s.hidden = n !== i;
    });
    dots.forEach(function (d, n) {
      d.classList.toggle('on', n <= i);
    });
    current = i;
    var firstField = steps[i].querySelector('input:not([type=hidden]), select');
    if (firstField) firstField.focus({ preventScroll: true });
    var card = form.closest('.form-card');
    if (card && i > 0) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Native validation, scoped to the visible step only.
  function stepIsValid(i) {
    var ok = true;
    steps[i].querySelectorAll('[required]').forEach(function (el) {
      var valid = el.checkValidity() && String(el.value).trim() !== '';
      el.classList.toggle('invalid', !valid);
      if (!valid && ok) {
        el.focus({ preventScroll: true });
        ok = false;
      }
    });
    return ok;
  }

  form.querySelectorAll('[data-next]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (stepIsValid(current)) showStep(current + 1);
    });
  });
  form.querySelectorAll('[data-back]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showStep(Math.max(0, current - 1));
    });
  });
  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('invalid')) e.target.classList.remove('invalid');
  });

  function setBusy(busy) {
    var btn = form.querySelector('button[type=submit]');
    if (!btn) return;
    btn.disabled = busy;
    if (busy) {
      btn.dataset.label = btn.textContent;
      btn.textContent = 'Sending…';
    } else if (btn.dataset.label) {
      btn.textContent = btn.dataset.label;
    }
  }

  function showSuccess() {
    form.hidden = true;
    var d = document.querySelector('.step-dots');
    if (d) d.hidden = true;
    error.style.display = 'none';
    success.style.display = 'block';
    success.setAttribute('tabindex', '-1');
    success.focus();
  }

  function showError() {
    setBusy(false);
    error.style.display = 'block';
    error.setAttribute('tabindex', '-1');
    error.focus();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!stepIsValid(current)) return;

    // Honeypot: a bot filled the hidden field. Fake success and drop it.
    var hp = form.querySelector('[name="company_website"]');
    if (hp && hp.value) {
      showSuccess();
      return;
    }

    var endpoint = form.getAttribute('action');
    if (!endpoint) {
      // No endpoint configured. Set FORM_ENDPOINT in build/config.mjs and rebuild.
      console.error(
        'AK Life: this form has no endpoint, so the lead was NOT captured. ' +
          'Set FORM_ENDPOINT in build/config.mjs and run `npm run build`.'
      );
      showSuccess();
      return;
    }

    setBusy(true);
    fetch(endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        showSuccess();
      })
      .catch(showError);
  });
})();
