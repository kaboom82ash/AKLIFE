// ============================================================================
// Static site generator for AK Life & Legacy Planning.
//   node build/build.mjs   (or: npm run build)
// Writes plain .html files to the repo root. No server or framework needed —
// the output can be dropped on any static host.
// ============================================================================

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { cohorts, bySlug } from './data-cohorts.mjs';
import { productIntro, productCategories } from './data-products.mjs';
import { strategyIntro, strategyCategories } from './data-strategies.mjs';
import { head, header, footer, leadForm, esc } from './layout.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const write = (name, html) => {
  mkdirSync(dirname(join(ROOT, name)), { recursive: true });
  writeFileSync(join(ROOT, name), html.trimStart() + '\n');
  return name;
};

// Card blurb: take whole sentences until we have a reasonable amount of text,
// so short opening sentences don't leave a card looking half-empty.
const blurb = (s, min = 95) => {
  const parts = s.match(/[^.?!]+[.?!](?=\s|$)/g) || [s];
  let out = '';
  for (const p of parts) {
    out += p;
    if (out.trim().length >= min) break;
  }
  return out.trim();
};
const pad2 = (n) => String(n + 1).padStart(2, '0');

const DEFAULT_TOPICS = [
  "Protecting my family's income",
  'Retirement & cash-value strategies',
  'Business or estate planning',
  "Not sure yet — I'd like guidance",
];

const SCENARIO_DISCLAIMER =
  'These are hypothetical examples for illustration only, not guarantees, projections, or recommendations for any specific policy or person. Dollar figures are round numbers chosen to make a point, not quotes. Actual outcomes depend on the policy you choose, your health and underwriting, how the policy is funded and structured, and current tax law, which can change. Tax and legal strategies described here require coordination with your own attorney and CPA. We will walk through real numbers for your situation on your consultation call.';

/* ==========================================================================
   Reusable section renderers
   ========================================================================== */

function scenarioCards(list, disclaimer = true) {
  const cards = list
    .map(
      (s) => `      <div class="scenario-card">
        <div class="who">${esc(s.who)}</div>
        <h3>${esc(s.h)}</h3>
${s.rows.map((r) => `        <div class="scenario-row"><div class="k">${esc(r.k)}</div><div class="v">${esc(r.v)}</div></div>`).join('\n')}
        <div class="scenario-outcome">${esc(s.outcome)}</div>
      </div>`
    )
    .join('\n');
  return `    <div class="scenario-grid${list.length === 1 ? ' one' : ''}">
${cards}
    </div>${disclaimer ? `\n    <p class="scenario-disclaimer">${SCENARIO_DISCLAIMER}</p>` : ''}`;
}

function cohortCards(list, variant = '') {
  return `    <div class="cohort-grid${variant ? ' ' + variant : ''}">
${list
  .map(
    (c) => `      <a class="cohort-card" href="${c.slug}.html">
        <div class="cc-tag">${esc(c.navSub)}</div>
        <h3>${esc(c.navLabel)}</h3>
        <p>${esc(blurb(c.sub))}</p>
        <div class="cc-go">See the plan for this group &rarr;</div>
      </a>`
  )
  .join('\n')}
    </div>`;
}

/* ==========================================================================
   index.html
   ========================================================================== */

function buildHome() {
  const html = `${head({
    title: 'AK Life & Legacy Planning — A Straightforward Life Insurance Consultation',
    description:
      'Independent life insurance and legacy planning guidance. A free 20-minute consultation, straightforward comparisons across term, whole life and IUL, and plans built for your specific situation.',
    canonicalName: 'home',
  })}
${header({ current: 'index.html' })}

<main id="main">

<section class="cohort-hero">
  <div class="wrap cohort-hero-grid">
    <div>
      <div class="kicker">Independent life insurance &amp; planning guidance</div>
      <h1>A life insurance plan that actually fits your life.</h1>
      <p class="sub">Most people put this off because it feels complicated or salesy. We keep it simple: one honest conversation, a plan built around your actual goals, and no pressure to buy anything on the spot.</p>
      <ul class="hero-points">
        <li>Free 20-minute consultation — no cost, no obligation</li>
        <li>Straightforward comparisons across term, whole life, and IUL</li>
        <li>Serving clients nationwide, matched to a licensed advisor in your state</li>
      </ul>
      <div class="btn-row">
        <a class="btn-ghost" href="who-we-serve.html">Find the plan for your situation &rarr;</a>
      </div>
    </div>

${leadForm({
  heading: 'Get your free plan check',
  note: "Tell us a little about your situation. We'll follow up to schedule your 20-minute call — usually within one business day.",
  topics: DEFAULT_TOPICS,
})}
  </div>
</section>

<div class="band-soft">
  <div class="wrap toc-grid" style="padding-block:30px;gap:24px;">
    <div class="trust-item" style="display:flex;gap:10px;align-items:flex-start;font-size:14px;"><span style="font-family:'Fraunces',serif;font-size:20px;color:var(--gold-dark);">20</span> Minute calls — we respect your time</div>
    <div class="trust-item" style="display:flex;gap:10px;align-items:flex-start;font-size:14px;"><span style="font-family:'Fraunces',serif;font-size:20px;color:var(--gold-dark);">0</span> Pressure to buy on the first call</div>
    <div class="trust-item" style="display:flex;gap:10px;align-items:flex-start;font-size:14px;"><span style="font-family:'Fraunces',serif;font-size:20px;color:var(--gold-dark);">50</span> States — matched to a licensed advisor near you</div>
    <div class="trust-item" style="display:flex;gap:10px;align-items:flex-start;font-size:14px;"><span style="font-family:'Fraunces',serif;font-size:20px;color:var(--gold-dark);">1:1</span> Plans built around your goals, not a quota</div>
  </div>
</div>

<section id="who-we-serve">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Who we serve</div>
      <h2>Start with the page written for your situation</h2>
      <p>The right answer for a surgeon with student debt is nothing like the right answer for a founder handing a business to their daughter. Pick the closest match and see the specific strategies, risks and questions that apply.</p>
    </div>
${cohortCards(cohorts)}
    <div class="btn-row">
      <a class="btn-ghost" href="who-we-serve.html">Compare all audiences &rarr;</a>
    </div>
  </div>
</section>

<section id="help-with" class="band-soft">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">What we help you plan for</div>
      <h2>Life insurance isn't just a payout when you die</h2>
      <p>Used well, it's a financial tool you can lean on while you're alive — for income protection, tax-advantaged growth, liquidity, and passing wealth on efficiently. Here's what that looks like.</p>
    </div>
    <div class="strat-list">
      <div class="strat-row">
        <h3>Family income protection</h3>
        <p>If something happened to you tomorrow, could your family keep the house, cover school, and stay on track? We help you size coverage to the actual gap — not a generic multiple of your salary.</p>
      </div>
      <div class="strat-row">
        <h3>Retirement &amp; cash-value strategies</h3>
        <p>Permanent policies can build tax-deferred cash value you can access later in life. We'll walk through whether that fits alongside what you're already doing in your 401(k) or IRA — and whether it doesn't.</p>
      </div>
      <div class="strat-row">
        <h3>Business &amp; estate planning</h3>
        <p>Buy-sell agreements, key-person coverage, and wealth transfer to the next generation all lean on the right insurance structure. We'll show you what that structure looks like for your situation.</p>
      </div>
      <div class="strat-row">
        <h3>Income protection if you can't work</h3>
        <p>Before 65, a long-term disability is more likely than a death for most people — and it's the risk employer coverage handles worst. We'll look at what your group plan actually replaces after the cap and after tax.</p>
      </div>
    </div>

    <div class="dyk-band">
      <div class="dyk-label">Did you know you can...</div>
      <ul class="dyk-list">
        <li><strong>Borrow against your policy's cash value</strong> — generally without a credit check or bank underwriting?</li>
        <li><strong>Use a policy as collateral</strong> to help finance a business purchase or a real estate deal?</li>
        <li><strong>Access part of your death benefit while you're alive</strong> if you're diagnosed with a qualifying chronic or terminal illness?</li>
        <li><strong>Pass wealth to your heirs largely income-tax-free</strong>, and outside of probate, with the right policy structure?</li>
        <li><strong>Supplement retirement income</strong> later in life through structured, tax-advantaged policy withdrawals and loans?</li>
        <li><strong>Fund a business buyout in advance</strong>, so a co-owner's death doesn't force a fire sale or leave their family shut out?</li>
      </ul>
    </div>
  </div>
</section>

<section id="scenarios">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">See it in action</div>
      <h2>How people actually put this to work</h2>
      <p>Illustrative examples of how the strategies above play out for different situations.</p>
    </div>
${scenarioCards([
  {
    who: 'The Growing Family',
    h: 'Protect income now, build an asset for later',
    rows: [
      { k: 'Situation', v: 'Two working parents, age 35, a mortgage, and a toddler.' },
      { k: 'Strategy', v: 'A large term policy for pure income replacement, plus a smaller whole life policy for lifelong coverage and cash value.' },
    ],
    outcome:
      'By age 55, the whole life policy has accumulated meaningful cash value they can borrow against — for a home renovation or a child’s tuition — without touching retirement accounts.',
  },
  {
    who: 'The Business Owner',
    h: 'Fund a buyout and unlock liquidity for growth',
    rows: [
      { k: 'Situation', v: 'Age 42, co-owns a business with a partner, wants a funded buy-sell agreement.' },
      { k: 'Strategy', v: 'A permanent policy owned by the business on each partner, building cash value the company can also tap.' },
    ],
    outcome:
      'If a partner dies, the policy funds the buyout so the business and the surviving family aren’t left negotiating under pressure. Along the way, accumulated cash value is available as a source of working capital.',
  },
  {
    who: 'The High Earner',
    h: 'Extra tax-advantaged savings beyond the 401(k) limit',
    rows: [
      { k: 'Situation', v: 'Age 45, already maxing out a 401(k) and IRA, wants another tax-advantaged bucket.' },
      { k: 'Strategy', v: 'An indexed universal life policy designed for cash value growth, funded above the minimum premium.' },
    ],
    outcome:
      'Starting at 65, policy loans can supplement retirement income — generally without triggering income tax — alongside withdrawals from other accounts.',
  },
  {
    who: 'The Multi-Generational Family',
    h: 'Transfer wealth without a forced sale',
    rows: [
      { k: 'Situation', v: 'Age 60, owns a family property and other assets they want to pass on intact.' },
      { k: 'Strategy', v: 'A whole life policy held in an irrevocable trust, sized to cover expected estate costs.' },
    ],
    outcome:
      'At death, heirs receive the payout outside the taxable estate and largely income-tax-free — giving them cash to cover costs instead of having to sell the property.',
  },
])}
  </div>
</section>

<section id="strategies" class="band-soft">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Planning strategies, explained</div>
      <h2>A few things worth understanding before you buy anything</h2>
      <p>Short breakdowns of the strategies people ask about most. The full guide covers all eight categories.</p>
    </div>
    <div class="prod-grid">
      <div class="prod-card">
        <div class="best-for">Coverage basics</div>
        <h3>Term vs. whole life — which fits your stage of life</h3>
        <p>Term is cheap and simple; whole life costs more but never expires and builds cash value. Most people actually need a mix, not an either/or — we'll show you why.</p>
        <a class="cc-go" href="strategies.html#foundational" style="text-decoration:none;">Read the breakdown &rarr;</a>
      </div>
      <div class="prod-card">
        <div class="best-for">Cash value</div>
        <h3>Using cash value as a flexible asset</h3>
        <p>Permanent policies let you borrow against accumulated cash value for opportunities or emergencies — without the underwriting hoops of a bank loan. Here's how that actually works, and where it doesn't.</p>
        <a class="cc-go" href="strategies.html#liquidity" style="text-decoration:none;">Read the breakdown &rarr;</a>
      </div>
      <div class="prod-card">
        <div class="best-for">Estate planning</div>
        <h3>Life insurance as a wealth-transfer tool</h3>
        <p>Structured well, a policy can pass money to the next generation outside probate and largely income-tax-free — and give heirs liquidity without forcing a fire sale of other assets.</p>
        <a class="cc-go" href="strategies.html#estate" style="text-decoration:none;">Read the breakdown &rarr;</a>
      </div>
      <div class="prod-card">
        <div class="best-for">Business owners</div>
        <h3>Buy-sell agreements &amp; key-person coverage</h3>
        <p>If you or a co-owner died tomorrow, could the business keep running — and could the family of the deceased get bought out fairly? This is how that gets funded in advance.</p>
        <a class="cc-go" href="strategies.html#business" style="text-decoration:none;">Read the breakdown &rarr;</a>
      </div>
    </div>
  </div>
</section>

<section id="how-it-works">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">How it works</div>
      <h2>Three steps, start to finish</h2>
    </div>
    <div class="play-list">
      <div class="play">
        <div class="play-tag" style="font-family:'Fraunces',serif;font-size:40px;color:var(--gold);font-weight:500;">1</div>
        <div>
          <h3>Tell us a bit about your situation</h3>
          <p>A short form — your goals, your family or business situation, and what's prompting you to look into this now.</p>
        </div>
      </div>
      <div class="play">
        <div class="play-tag" style="font-family:'Fraunces',serif;font-size:40px;color:var(--gold);font-weight:500;">2</div>
        <div>
          <h3>Have a 20-minute call, no pressure</h3>
          <p>We ask questions, listen, and walk through your options in plain language. If it's not a fit, we'll tell you that too.</p>
        </div>
      </div>
      <div class="play">
        <div class="play-tag" style="font-family:'Fraunces',serif;font-size:40px;color:var(--gold);font-weight:500;">3</div>
        <div>
          <h3>Get a written recommendation</h3>
          <p>You'll leave with a clear, written plan you can review on your own time — and decide whenever you're ready, not before.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="credband">
  <div class="wrap">
    <h2>Why people choose to work with an independent advisor</h2>
    <div class="cred-grid">
      <div>
        <p class="lead">We're not tied to a single insurance company's product line, so the recommendation is built around what fits you — not a quota.</p>
      </div>
      <ul class="cred-list">
        <li>Background in commercial strategy and business operations, not just insurance sales</li>
        <li>Access to term, whole life, and indexed universal life across multiple carriers</li>
        <li>Every recommendation comes with the trade-offs explained, not just the upside</li>
        <li>We work alongside your attorney and CPA rather than around them</li>
        <li>Follow-up support as your life changes — a new child, a new business, a new home</li>
      </ul>
    </div>
  </div>
</section>

<section class="final-cta light">
  <div class="wrap">
    <h2>Ready for a straight answer on your coverage?</h2>
    <p>Twenty minutes. No pressure. No cost. Just a clear picture of where you stand.</p>
    <a href="#book" class="btn-lg">Book your free consultation</a>
  </div>
</section>

</main>
${footer()}`;
  return write('index.html', html);
}

/* ==========================================================================
   who-we-serve.html
   ========================================================================== */

function buildHub() {
  const html = `${head({
    title: 'Who We Serve — Planning by Profession and Situation',
    description:
      'Life insurance and legacy planning tailored to twelve specific situations — physicians, executives, business owners passing down a company, real estate investors, farm families and more.',
    canonicalName: 'who-we-serve',
  })}
${header({ current: 'who-we-serve' })}

<main id="main">

<section class="page-hero">
  <div class="wrap">
    <p class="crumb"><a href="index.html">Home</a> &rsaquo; Who we serve</p>
    <div class="kicker">Planning by profession and situation</div>
    <h1>The right plan depends entirely on who you are</h1>
    <p class="sub">A surgeon with 240,000 in private student loans, a founder handing a company to one of three children, and a landlord with 2.8 million in personally guaranteed debt all need life insurance. They need almost nothing else in common. These pages lay out what actually applies to each situation — the specific risks, the strategies that fit, and the questions worth asking before you buy anything.</p>
    <span class="hero-note">Do not see yourself here? The consultation is free either way — we will tell you honestly if we are not the right fit.</span>
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Professionals &amp; high earners</div>
      <h2>High income, high tax, thin employer coverage</h2>
      <p>The common thread: compensation that outgrows the benefits package built on top of it, and very little tax-advantaged room left once the standard accounts are full.</p>
    </div>
${cohortCards(['healthcare-professionals', 'corporate-executives', 'tech-equity', 'attorneys-cpas'].map((s) => bySlug[s]), 'four')}
  </div>
</section>

<section class="band-soft">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Business owners &amp; operators</div>
      <h2>Wealth locked inside something you cannot sell quickly</h2>
      <p>Whether you are taking the business over, handing it down, or building it out, the problems rhyme: illiquid value, personal guarantees, key people, and heirs who want different things.</p>
    </div>
${cohortCards(['next-gen-owners', 'legacy-founders', 'franchise-owners', 'real-estate-investors'].map((s) => bySlug[s]), 'four')}
  </div>
</section>

<section>
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Asset-heavy &amp; specialised situations</div>
      <h2>Where the standard playbook does not apply at all</h2>
      <p>Land that cannot be divided, careers that end at 32, estates that cross borders, and the decade before retirement where every decision affects the next thirty years.</p>
    </div>
${cohortCards(['farm-ranch-families', 'athletes-entertainers', 'global-families', 'pre-retirees'].map((s) => bySlug[s]), 'four')}
  </div>
</section>

<section class="credband">
  <div class="wrap">
    <h2>What every one of these pages has in common</h2>
    <div class="cred-grid">
      <div>
        <p class="lead">The strategies differ enormously. The approach does not: understand the situation first, explain the trade-offs honestly, and only then talk about products.</p>
      </div>
      <ul class="cred-list">
        <li>We are independent, so the recommendation is not constrained to one carrier's shelf</li>
        <li>Every strategy comes with its downside explained, not just its illustration</li>
        <li>Tax and legal structure belongs to your attorney and CPA — we fund the plan they design</li>
        <li>If a simple term policy is the right answer, that is what we will tell you</li>
      </ul>
    </div>
  </div>
</section>

<section class="final-cta">
  <div class="wrap">
    <h2>Not sure which of these describes you?</h2>
    <p>Most people fit two or three. That is normal, and it is exactly what the first twenty minutes are for.</p>
    <a href="index.html#book" class="btn-lg btn-gold">Book your free consultation</a>
  </div>
</section>

</main>
${footer({ ctaHref: 'index.html#book' })}`;
  return write('who-we-serve.html', html);
}

/* ==========================================================================
   products.html
   ========================================================================== */

function buildProducts() {
  const toc = productCategories
    .map((c) => `      <a href="#${c.id}">${esc(c.name)}</a>`)
    .join('\n');

  const sections = productCategories
    .map(
      (c, i) => `<section class="category" id="${c.id}">
  <div class="wrap">
    <div class="cat-head"><span class="cat-num">${pad2(i)}</span><h2>${esc(c.name)}</h2></div>
    <p class="cat-sub">${esc(c.sub)}</p>
    <div class="prod-grid">
${c.items
  .map(
    (it) => `      <div class="prod-card">
        <h3>${esc(it.h)}</h3>
        <p>${esc(it.p)}</p>${it.best ? `\n        <div class="best-for">Best for: ${esc(it.best)}</div>` : ''}
      </div>`
  )
  .join('\n')}
    </div>
  </div>
</section>`
    )
    .join('\n\n');

  const html = `${head({
    title: productIntro.title,
    description:
      'The full menu of life insurance, disability, long-term care, annuity, investment and planning products we can bring into your plan — with independent access across carriers.',
    canonicalName: 'products',
  })}
${header({ current: 'products.html' })}

<main id="main">

<section class="page-hero">
  <div class="wrap">
    <p class="crumb"><a href="index.html">Home</a> &rsaquo; Products</p>
    <div class="kicker">Products we help you plan with</div>
    <h1>${esc(productIntro.h1)}</h1>
    <p class="sub">${esc(productIntro.sub)}</p>
    <span class="hero-note">${esc(productIntro.note)}</span>
  </div>
</section>

<nav class="toc" aria-label="Product categories">
  <div class="wrap">
    <h2>Jump to a category</h2>
    <div class="toc-grid">
${toc}
    </div>
  </div>
</nav>

${sections}

<section class="band-soft">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Which of these apply to you</div>
      <h2>See the products that matter for your situation</h2>
      <p>Rather than working through the whole menu, start with the page written for people in your position — it names the two or three products that usually matter and skips the rest.</p>
    </div>
${cohortCards(cohorts.slice(0, 6))}
    <div class="btn-row"><a class="btn-ghost" href="who-we-serve.html">See all audiences &rarr;</a></div>
  </div>
</section>

<section class="final-cta">
  <div class="wrap">
    <h2>Not sure which of these belong in your plan?</h2>
    <p>That's what the consultation is for — we'll match products to your actual goals, not the other way around.</p>
    <a href="index.html#book" class="btn-lg btn-gold">Book your free consultation</a>
  </div>
</section>

</main>
${footer({
  ctaHref: 'index.html#book',
  extraDisclosure:
    'Not every product is suitable for every individual, and availability varies by carrier, state, and underwriting.',
})}`;
  return write('products.html', html);
}

/* ==========================================================================
   strategies.html
   ========================================================================== */

function buildStrategies() {
  const toc = strategyCategories
    .map((c, i) => `      <a href="#${c.id}">${i + 1}. ${esc(c.name)}</a>`)
    .join('\n');

  const sections = strategyCategories
    .map(
      (c, i) => `<section class="category" id="${c.id}">
  <div class="wrap">
    <div class="cat-head"><span class="cat-num">${pad2(i)}</span><h2>${esc(c.name)}</h2></div>
    <p class="cat-sub">${esc(c.sub)}</p>
    <div class="related-products"><span class="rp-label">Related products:</span>${c.related
      .map((r) => `<a href="${r.href}">${esc(r.label)}</a>`)
      .join('')}</div>
    <div class="strat-list">
${c.items
  .map((it) => `      <div class="strat-row"><h3>${esc(it.h)}</h3><p>${esc(it.p)}</p></div>`)
  .join('\n')}
    </div>
  </div>
</section>`
    )
    .join('\n\n');

  const html = `${head({
    title: strategyIntro.title,
    description:
      'Every life insurance strategy we reference in a consultation, organised from foundational protection through business, estate and advanced high-net-worth planning.',
    canonicalName: 'strategies',
  })}
${header({ current: 'strategies.html' })}

<main id="main">

<section class="page-hero">
  <div class="wrap">
    <p class="crumb"><a href="index.html">Home</a> &rsaquo; Strategy guide</p>
    <div class="kicker">Your consultation bonus</div>
    <h1>${esc(strategyIntro.h1)}</h1>
    <p class="sub">${esc(strategyIntro.sub)}</p>
    <span class="hero-badge">${esc(strategyIntro.badge)}</span>
  </div>
</section>

<nav class="toc" aria-label="Strategy categories">
  <div class="wrap">
    <h2>Jump to a category</h2>
    <div class="toc-grid three">
${toc}
    </div>
  </div>
</nav>

${sections}

<section class="band-soft">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Narrow it down</div>
      <h2>Which of these actually apply to you</h2>
      <p>Each audience page picks the six or eight strategies that matter for that situation and explains why — a much shorter list than the one above.</p>
    </div>
${cohortCards(cohorts.slice(4, 10))}
    <div class="btn-row"><a class="btn-ghost" href="who-we-serve.html">See all audiences &rarr;</a></div>
  </div>
</section>

<section class="final-cta">
  <div class="wrap">
    <h2>Not sure which of these apply to you?</h2>
    <p>That's exactly what the consultation is for — we'll go through this list together and focus on what actually fits your situation.</p>
    <a href="index.html#book" class="btn-lg btn-gold">Back to booking</a>
  </div>
</section>

</main>
${footer({
  ctaHref: 'index.html#book',
  extraDisclosure:
    'Not every strategy is suitable for every individual, and some require coordination with an attorney or CPA.',
})}`;
  return write('strategies.html', html);
}

/* ==========================================================================
   Cohort pages
   ========================================================================== */

function buildCohort(c) {
  const also = (c.also || []).map((s) => bySlug[s]).filter(Boolean);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const html = `${head({
    title: c.title,
    description: c.description,
    canonicalName: c.slug,
  })}
${header({ current: c.slug, ctaHref: '#book' })}

<main id="main">

<section class="cohort-hero">
  <div class="wrap cohort-hero-grid">
    <div>
      <p class="crumb"><a href="index.html">Home</a> &rsaquo; <a href="who-we-serve.html">Who we serve</a> &rsaquo; ${esc(c.navLabel)}</p>
      <div class="kicker">${esc(c.kicker)}</div>
      <h1>${esc(c.h1)}</h1>
      <p class="sub">${esc(c.sub)}</p>
      <ul class="hero-points">
${c.heroBullets.map((b) => `        <li>${esc(b)}</li>`).join('\n')}
      </ul>
      <div class="btn-row">
        <a class="btn-lg" href="#book">Book a free 20-minute call</a>
        <a class="btn-ghost" href="#plays">See the strategies &darr;</a>
      </div>
    </div>

    <div style="display:flex;flex-direction:column;gap:20px;">
      <div class="audience-note">
        <strong>${esc(c.audienceNote.title)}</strong>
        ${esc(c.audienceNote.body)}
      </div>
${leadForm({
  heading: 'Get your free plan check',
  note: "Tell us a little about your situation. We'll follow up to schedule your 20-minute call — usually within one business day.",
  topics: DEFAULT_TOPICS,
  hiddenContext: c.navLabel,
})}
    </div>
  </div>
</section>

<section class="band-soft" id="pressures">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">${esc(c.pressuresHead.kicker)}</div>
      <h2>${esc(c.pressuresHead.h2)}</h2>
      <p>${esc(c.pressuresHead.p)}</p>
    </div>
    <div class="pressure-grid">
${c.pressures
  .map(
    (p) => `      <div class="pressure">
        <h3>${esc(p.h)}</h3>
        <p>${esc(p.p)}</p>
      </div>`
  )
  .join('\n')}
    </div>
  </div>
</section>

<section id="plays">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">${esc(c.playsHead.kicker)}</div>
      <h2>${esc(c.playsHead.h2)}</h2>
      <p>${esc(c.playsHead.p)}</p>
    </div>
    <div class="play-list">
${c.plays
  .map(
    (p) => `      <div class="play">
        <div class="play-tag">${esc(p.tag)}</div>
        <div>
          <h3>${esc(p.h)}</h3>
          <p>${esc(p.p)}</p>
          <div class="fit"><b>Why it fits:</b> ${esc(p.fit)}</div>
        </div>
      </div>`
  )
  .join('\n')}
    </div>
    <div class="related-products" style="margin-top:28px;"><span class="rp-label">Go deeper:</span>${c.related
      .map((r) => `<a href="${r.href}">${esc(r.label)}</a>`)
      .join('')}</div>
  </div>
</section>

<section class="band-soft" id="scenarios">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Illustrative examples</div>
      <h2>What this looks like in practice</h2>
      <p>Hypothetical situations built to show how the pieces fit together. Yours will be different — that is the point of the call.</p>
    </div>
${scenarioCards(c.scenarios)}
  </div>
</section>

<section class="credband" id="checklist">
  <div class="wrap">
    <h2>What we'll cover on your 20-minute call</h2>
    <p class="lead" style="margin-bottom:36px;">No slides, no illustration you did not ask for. We work through this list, tell you which items are actually a problem for you, and put the rest aside.</p>
    <ul class="checklist">
${c.checklist.map((i) => `      <li>${esc(i)}</li>`).join('\n')}
    </ul>
    <div class="btn-row">
      <a class="btn-lg btn-gold" href="#book">Book the call</a>
    </div>
  </div>
</section>

<section id="faq">
  <div class="wrap">
    <div class="section-head">
      <div class="kicker">Straight answers</div>
      <h2>Questions we get from ${esc(c.navLabel.toLowerCase())}</h2>
    </div>
    <div class="faq-list">
${c.faqs
  .map(
    (f) => `      <details class="faq">
        <summary>${esc(f.q)}</summary>
        <p>${esc(f.a)}</p>
      </details>`
  )
  .join('\n')}
    </div>
  </div>
</section>

${
  also.length
    ? `<section class="band-soft">
  <div class="wrap">
    <div class="section-head" style="margin-bottom:24px;">
      <div class="kicker">Also worth reading</div>
      <h2>Situations that overlap with yours</h2>
    </div>
    <div class="also-grid">
${also
  .map(
    (a) => `      <a class="also-card" href="${a.slug}.html">
        <div class="ac-t">${esc(a.navLabel)}</div>
        <div class="ac-p">${esc(a.navSub)}</div>
      </a>`
  )
  .join('\n')}
    </div>
    <div class="btn-row"><a class="btn-ghost" href="who-we-serve.html">See every audience &rarr;</a></div>
  </div>
</section>`
    : ''
}

<section class="final-cta">
  <div class="wrap">
    <h2>Twenty minutes, and you'll know where you stand</h2>
    <p>No cost, no obligation, and no pressure to buy anything on the first call. If a simple term policy is the right answer for you, that is what we will say.</p>
    <a href="#book" class="btn-lg btn-gold">Book your free consultation</a>
  </div>
</section>

</main>
<script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
</script>
${footer({ ctaHref: '#book' })}`;
  return write(`${c.slug}.html`, html);
}

/* ==========================================================================
   Extras: sitemap + robots
   ========================================================================== */

function buildSitemap(pages) {
  // Replace with your real domain before publishing.
  const ORIGIN = 'https://www.example.com';
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .map(
      (p) =>
        `  <url><loc>${ORIGIN}/${p === 'index.html' ? '' : p}</loc><lastmod>${today}</lastmod></url>`
    )
    .join('\n');
  write(
    'sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
  );
  write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml`);
}

/* ========================================================================== */

const written = [buildHome(), buildHub(), buildProducts(), buildStrategies(), ...cohorts.map(buildCohort)];
buildSitemap(written);

console.log(`Built ${written.length} pages + sitemap.xml + robots.txt`);
written.forEach((p) => console.log('  ' + p));
