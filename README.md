# AK Life & Legacy Planning — website

A static marketing site. No framework, no dependencies, no server needed — the
generated `.html` files can be dropped on any static host (Netlify, Cloudflare
Pages, GitHub Pages, S3, or plain shared hosting).

## Quick start

```bash
npm run build          # regenerate every .html file in the repo root
python3 -m http.server 8080   # then open http://localhost:8080
```

`npm run build` needs Node 18+. That is the only requirement.

## What's on the site

| Page | Purpose |
| --- | --- |
| `index.html` | Home — hero, lead form, audience grid, what we help with, scenarios, how it works |
| `who-we-serve.html` | Hub listing all twelve audiences, grouped into three families |
| `products.html` | The full product catalogue, by category |
| `strategies.html` | The complete strategy guide, eight categories |
| 12 audience pages | One tailored landing page per cohort (see below) |

### The twelve audience pages

**Professionals & high earners**

- `healthcare-professionals.html` — doctors, dentists, nurses, NPs, PAs, specialists
- `corporate-executives.html` — managers, directors, VPs, senior individual contributors
- `tech-equity.html` — RSUs, ISOs/NSOs, pre-IPO and post-liquidity
- `attorneys-cpas.html` — law/CPA/consulting partners and practice owners

**Business owners & operators**

- `next-gen-owners.html` — taking over the family business
- `legacy-founders.html` — passing a business down to the next generation
- `franchise-owners.html` — franchisees, multi-unit operators, area developers
- `real-estate-investors.html` — landlords, syndicators, developers

**Asset-heavy & specialised**

- `farm-ranch-families.html` — land-rich, cash-poor, multi-generational
- `athletes-entertainers.html` — compressed earning windows
- `global-families.html` — non-citizen spouses, foreign nationals with US assets
- `pre-retirees.html` — large pre-tax balances, LTC, a recent business sale

Each audience page follows the same structure: hero + lead form, "what makes
your situation different" (the pressures), the insurance plays that fit and why,
two illustrative scenarios, a call checklist, FAQs (with FAQ schema markup for
search), and cross-links to overlapping audiences.

## Editing content

All copy lives in `build/`, and every `.html` file in the repo root is generated
from it. **Edit the data files, not the HTML** — a rebuild overwrites the HTML.

```
build/
├── build.mjs                 page templates + the generator
├── layout.mjs                <head>, nav, footer, lead form (shared chrome)
├── data-cohorts.mjs          the audience index and their order in the nav
├── data-products.mjs         products.html content
├── data-strategies.mjs       strategies.html content
└── audiences/
    ├── healthcare-professionals.mjs
    ├── legacy-founders.mjs
    └── ... one file per audience
assets/
├── site.css                  the whole design system (colours at the top)
└── site.js                   mobile nav, footer year, lead form handler
```

### Adding a new audience page

1. Copy any file in `build/audiences/` and edit the copy. Keep the field names.
2. Import it in `build/data-cohorts.mjs` and add it to the `cohorts` array
   (position in that array = position in the nav, footer and hub page).
3. `npm run build`.

The nav dropdown, the footer, the hub page, the sitemap and the cross-links
between audience pages all update automatically.

### Changing colours or type

Every colour is a CSS custom property at the top of `assets/site.css`. Change
them there and the whole site follows.

## Before you publish — required changes

1. **Lead form.** `assets/site.js` currently just shows the thank-you message; it
   does not send anything anywhere. Wire `handleSubmit` to your real pipeline
   (Formspree, Netlify Forms, a Zapier/Make webhook into your CRM, or your own
   endpoint). Look for the `TODO(owner)` comment.
2. **Advisor details.** `build/layout.mjs` has an `ADVISOR` object with
   `[Advisor name]`, `[list states]` and NPN placeholders. Fill these in.
3. **Disclosure language.** The footer disclosure in `build/layout.mjs` is a
   reasonable starting draft, not compliant boilerplate. Replace it with the
   exact wording your carrier(s), IMO/FMO, broker-dealer or state department of
   insurance requires.
4. **Compliance review.** These pages describe tax and legal strategies
   (ILITs, buy-sell structures, Section 162 plans, Roth conversions, QDOTs,
   premium financing, special-use valuation). Most carriers and broker-dealers
   require advertising review before this kind of content goes live. Get it
   reviewed.
5. **Domain.** Set `ORIGIN` in `build/build.mjs` (used by `sitemap.xml` and
   `robots.txt`) to your real domain, then rebuild.
6. **Analytics.** None is installed. Add your tag to the `head()` function in
   `build/layout.mjs` so it lands on every page at once.

## Notes on the copy

- Every dollar figure in a scenario is a round illustrative number, not a quote.
  Each scenario block sits above a disclaimer saying so.
- Strategy descriptions deliberately include the downside as well as the upside
  (policy loans reduce the death benefit, premium financing carries rate and
  collateral risk, dividends are not guaranteed, etc.).
- Anything that is genuinely attorney or CPA territory says so in the copy
  rather than implying the advisor handles it.
