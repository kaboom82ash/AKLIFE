# NOVA — website + admin playbook

Public marketing site for NOVA (AI automation for small business) with the operator's
playbook as a login-gated admin panel on the main page.

## Layout

```
src/admin.html     Admin panel: 83 automation tasks (pre/post-sales kits, cost models),
                   marketing plan, foundations, platform directory, exports.
src/site-src.js    Public site templates (home, 4 industry pages, 4 service pages,
                   how-we-work, finding-opportunities, about, contact), evidence
                   registry with sources, admin login gate, router.
src/public.css     Public site styles (appended to the admin stylesheet at build).
build/assemble.py  Builds dist/index.html from the three sources.
build/export.mjs   Renders the static pages + site.css from dist/index.html (Playwright).
dist/              Deployable output. Upload the folder to any static host.
```

`dist/index.html` serves the public home at `#/` and the admin panel behind a login at
any other hash (`#home`, `#playbook`, …). Every other public page is a separate file.

## Build

```
pip install nothing            # assemble.py is stdlib-only
npm install                    # playwright, for the static export
NOVA_ADMIN_PASSCODE=change-me npm run build
```

If a Chromium binary is already installed, point at it: `PLAYWRIGHT_CHROMIUM=/path/to/chrome`.

## Before going public

Edit `SITE` at the top of `src/site-src.js`:

- `years`, `clients`, `tasksRun` — trust-strip figures (placeholders today)
- `founder`, `phone`, `email`, `city`, `bookingUrl`
- Admin passcode: set `NOVA_ADMIN_PASSCODE` when building. It is a convenience gate;
  the admin content ships in the page source. Real access control on claude.ai is the
  artifact's sharing setting (editors are recognized automatically).
- The integrations wall uses styled wordmarks; swap in official vendor logos (`.lwall`).
- No pricing appears on the public site by design. Statistics are cited to their sources
  in `EVIDENCE`; keep them current.

## Published artifact

https://claude.ai/artifact/Uz6s1ux45KHEg4jpvHoG8o
