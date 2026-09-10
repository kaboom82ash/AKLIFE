// Shared page chrome: <head>, header/nav, footer, lead form.
// Everything that appears on every page lives here so it stays consistent.

import { cohorts } from './data-cohorts.mjs';
import { formFor } from './data-forms.mjs';
import { FORM_ENDPOINT } from './config.mjs';

export const BRAND = 'AK Life &amp; Legacy Planning';

// --- Placeholders the owner replaces before publishing -----------------
export const ADVISOR = {
  name: '[Advisor name]',
  states: '[list states]',
  npn: '[xxxxxxx]',
  // Shown if a form submission fails. Fill this in before publishing.
  email: '[your@email.com]',
};

export const esc = (s) =>
  String(s).replace(/&(?![a-zA-Z#0-9]+;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const NAV_PRIMARY = [
  { href: 'index.html#help-with', label: 'What We Help With' },
  { href: 'products.html', label: 'Products' },
  { href: 'strategies.html', label: 'Strategies' },
  { href: 'index.html#how-it-works', label: 'How It Works' },
];

function dropdown(current) {
  const items = cohorts
    .map(
      (c) =>
        `        <a href="${c.slug}.html"${current === c.slug ? ' aria-current="page"' : ''}>${c.navLabel}<span class="dp-sub">${c.navSub}</span></a>`
    )
    .join('\n');
  return `      <div class="drop-panel">
${items}
        <a class="dp-all" href="who-we-serve.html">See every audience we work with &rarr;</a>
      </div>`;
}

export function head({ title, description, canonicalName, extraCss = '' }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/site.css">
${extraCss}</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<!-- page: ${esc(canonicalName || title)} -->`;
}

export function header({ current = '', ctaHref = 'index.html#book' } = {}) {
  const links = NAV_PRIMARY.map(
    (l) => `      <a href="${l.href}"${current === l.href ? ' aria-current="page"' : ''}>${l.label}</a>`
  ).join('\n');

  const mobileCohorts = cohorts
    .map((c) => `      <a href="${c.slug}.html">${c.navLabel}</a>`)
    .join('\n');

  const isCohort = cohorts.some((c) => c.slug === current);

  return `
<header class="site">
  <div class="wrap navbar">
    <a class="brand" href="index.html">AK Life &amp; Legacy <span>Planning</span></a>
    <nav class="links" aria-label="Primary">
      <div class="has-drop">
        <button type="button" aria-expanded="false"${isCohort || current === 'who-we-serve' ? ' style="opacity:1"' : ''}>Who We Serve</button>
${dropdown(current)}
      </div>
${links}
    </nav>
    <a class="nav-cta" href="${ctaHref}">Book Free Consultation</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobileNav">Menu</button>
  </div>
  <div class="mobile-panel" id="mobileNav">
    <div class="wrap">
      <a href="index.html">Home</a>
      <a href="who-we-serve.html">Who We Serve &mdash; overview</a>
      <div class="mp-head">AUDIENCES</div>
${mobileCohorts}
      <div class="mp-head">THE PLANNING</div>
      <a href="products.html">Products</a>
      <a href="strategies.html">Strategies</a>
      <a href="index.html#how-it-works">How It Works</a>
      <a href="${ctaHref}">Book a free consultation</a>
    </div>
  </div>
</header>`;
}

function renderField(f, stepIdx) {
  const id = `f_${f.name}`;
  const req = f.required ? ' required' : '';
  const cls = f.half ? 'field half' : 'field';
  const reqMark = f.required ? ' <span class="req" aria-hidden="true">*</span>' : '';

  if (f.type === 'select') {
    const opts = [`            <option value="">Select…</option>`]
      .concat(f.options.map((o) => `            <option>${esc(o)}</option>`))
      .join('\n');
    return `        <div class="${cls}">
          <label for="${id}">${esc(f.label)}${reqMark}</label>
          <select id="${id}" name="${f.name}"${req}>
${opts}
          </select>
        </div>`;
  }

  const t = f.inputType || 'text';
  const ac = f.autocomplete ? ` autocomplete="${f.autocomplete}"` : '';
  const ph = f.placeholder ? ` placeholder="${esc(f.placeholder)}"` : '';
  return `        <div class="${cls}">
          <label for="${id}">${esc(f.label)}${reqMark}</label>
          <input type="${t}" id="${id}" name="${f.name}"${req}${ph}${ac}>
        </div>`;
}

export function leadForm({ id = 'book', slug = '', audienceLabel = '' } = {}) {
  const def = formFor(slug);
  const multi = def.steps.length > 1;

  const steps = def.steps
    .map((step, i) => {
      const fields = step.fields.map((f) => renderField(f, i)).join('\n');
      const isLast = i === def.steps.length - 1;
      const nav = isLast
        ? `        <div class="form-nav">
${multi ? `          <button type="button" class="btn-back" data-back>&larr; Back</button>\n` : ''}          <button type="submit" class="submit-btn">${esc(def.cta)}</button>
        </div>`
        : `        <div class="form-nav">
          <button type="button" class="submit-btn" data-next>Continue &rarr;</button>
        </div>`;

      return `      <fieldset class="form-step" data-step="${i}"${i > 0 ? ' hidden' : ''}>
        <legend class="step-legend">${esc(step.title)}</legend>
${step.note ? `        <p class="step-note">${esc(step.note)}</p>\n` : ''}        <div class="field-grid">
${fields}
        </div>
${isLast ? consentBlock() : ''}
${nav}
      </fieldset>`;
    })
    .join('\n');

  const dots = multi
    ? `      <ol class="step-dots" aria-hidden="true">
${def.steps.map((s2, i) => `        <li${i === 0 ? ' class="on"' : ''}></li>`).join('\n')}
      </ol>`
    : '';

  return `    <div class="form-card" id="${id}">
      <h3>${esc(def.heading)}</h3>
      <p class="note">${esc(def.note)}</p>
${dots}
      <form id="leadForm" method="POST" action="${FORM_ENDPOINT || ''}" novalidate>
        <input type="hidden" name="audience" value="${esc(audienceLabel || 'General')}">
        <input type="hidden" name="page_slug" value="${esc(slug || 'index')}">
        <input type="hidden" name="utm_source" value="">
        <input type="hidden" name="utm_medium" value="">
        <input type="hidden" name="utm_campaign" value="">
        <input type="hidden" name="referrer" value="">
        <p class="hp" aria-hidden="true"><label>Leave this empty<input name="company_website" tabindex="-1" autocomplete="off"></label></p>
${steps}
      </form>
      <div class="success-msg" id="successMsg" role="status">
        <strong>Thanks &mdash; that's in.</strong>
        We'll be in touch within one business day to find a time. Nothing is scheduled and nothing is owed until you say so.
        <div style="margin-top:14px;">
          <a class="success-cta" href="strategies.html">Read the strategy guide while you wait &rarr;</a>
        </div>
      </div>
      <div class="error-msg" id="errorMsg" role="alert">
        That didn't go through. Please email <a href="mailto:${ADVISOR.email}">${ADVISOR.email}</a> or try again in a moment.
      </div>
      <p class="form-fine">No spam, ever. Your information is used only to prepare for your consultation and is never sold.</p>
    </div>`;
}

// TCPA-style express consent. THIS WORDING IS A STARTING DRAFT — have your
// compliance team or attorney finalise it before you run paid traffic.
function consentBlock() {
  return `        <div class="consent">
          <input type="checkbox" id="f_consent" name="consent" required value="yes">
          <label for="f_consent">I agree to be contacted by ${ADVISOR.name} by phone, text or email about
          insurance products, including at the number above, which may involve automated technology. Consent is not a
          condition of purchase and message rates may apply. I can opt out at any time.</label>
        </div>
`;
}

export function footer({ extraDisclosure = '', ctaHref = '#book' } = {}) {
  const audienceLinks = cohorts
    .slice(0, 6)
    .map((c) => `        <a href="${c.slug}.html">${c.navLabel}</a>`)
    .join('\n');
  const audienceLinks2 = cohorts
    .slice(6)
    .map((c) => `        <a href="${c.slug}.html">${c.navLabel}</a>`)
    .join('\n');

  return `
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">AK Life &amp; Legacy Planning</div>
        <p style="margin:0;max-width:32ch;">Independent life insurance and legacy planning guidance. One honest conversation, a plan built around your actual goals.</p>
      </div>
      <div class="footer-col">
        <h4>WHO WE SERVE</h4>
${audienceLinks}
      </div>
      <div class="footer-col">
        <h4>&nbsp;</h4>
${audienceLinks2}
        <a href="who-we-serve.html"><strong>See all &rarr;</strong></a>
      </div>
      <div class="footer-col">
        <h4>THE PLANNING</h4>
        <a href="index.html#help-with">What We Help With</a>
        <a href="products.html">Products</a>
        <a href="strategies.html">Strategies</a>
        <a href="index.html#how-it-works">How It Works</a>
        <a href="index.html#book">Book a Call</a>
      </div>
    </div>
    <p class="disclosure">
      ${ADVISOR.name} is a licensed insurance producer in ${ADVISOR.states} (NPN ${ADVISOR.npn}). This website is for general
      educational purposes only and does not constitute financial, insurance, tax, or legal advice, and no client relationship
      is created by submitting a form on this site. Life insurance products are subject to underwriting, may not be available
      in all states, and product features vary by carrier. Guarantees are backed by the claims-paying ability of the issuing
      insurer. Policy loans and withdrawals reduce cash value and the death benefit, may cause a policy to lapse, and may have
      tax consequences. Strategies described here often require coordination with your own attorney and CPA.
      ${extraDisclosure}
      <strong>Before publishing, replace this paragraph with the exact disclosure language your carrier(s), broker-dealer, or
      state department of insurance requires.</strong>
    </p>
    <p class="disclosure" style="margin-top:14px;">&copy; <span data-year></span> AK Life &amp; Legacy Planning. All rights reserved.</p>
  </div>
</footer>

<div class="mobile-cta"><a href="${ctaHref}">Book Your Free Consultation</a></div>

<script src="assets/site.js"></script>
</body>
</html>`;
}
