// Shared page chrome: <head>, header/nav, footer, lead form.
// Everything that appears on every page lives here so it stays consistent.

import { cohorts } from './data-cohorts.mjs';

export const BRAND = 'AK Life &amp; Legacy Planning';

// --- Placeholders the owner replaces before publishing -----------------
export const ADVISOR = {
  name: '[Advisor name]',
  states: '[list states]',
  npn: '[xxxxxxx]',
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

export function leadForm({ id = 'book', heading, note, topics, hiddenContext = '' }) {
  const opts = topics.map((t) => `            <option>${esc(t)}</option>`).join('\n');
  return `    <div class="form-card" id="${id}">
      <h3>${esc(heading)}</h3>
      <p class="note">${esc(note)}</p>
      <form id="leadForm">
${hiddenContext ? `        <input type="hidden" name="audience" value="${esc(hiddenContext)}">\n` : ''}        <div class="field">
          <label for="name">Full name</label>
          <input type="text" id="name" name="name" required placeholder="Jordan Smith" autocomplete="name">
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required placeholder="jordan@email.com" autocomplete="email">
        </div>
        <div class="field">
          <label for="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required placeholder="(555) 555-5555" autocomplete="tel">
        </div>
        <div class="field">
          <label for="state">State</label>
          <input type="text" id="state" name="state" required placeholder="Georgia" autocomplete="address-level1">
        </div>
        <div class="field">
          <label for="topic">What's mainly on your mind?</label>
          <select id="topic" name="topic">
${opts}
          </select>
        </div>
        <button type="submit" class="submit-btn">Request my free consultation</button>
      </form>
      <div class="success-msg" id="successMsg">
        Thanks &mdash; that's in. We'll reach out shortly to find a time that works.
        <div style="margin-top:14px;">
          <a href="strategies.html" style="display:inline-block;background:var(--forest);color:var(--white);padding:11px 18px;border-radius:3px;text-decoration:none;font-size:14px;font-weight:700;">Access your strategy guide &rarr;</a>
        </div>
      </div>
      <p class="form-fine">No spam, ever. Your information is only used to prepare for your consultation.</p>
    </div>`;
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
