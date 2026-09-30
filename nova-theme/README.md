# NOVA Automation — WordPress theme

Classic PHP theme reproducing the NOVA marketing site. Content lives in `inc/data.php`
(industries, services, evidence with sources, ROI examples, integrations) and the
Customizer (trust-strip figures, contact details, booking URL).

## Install

1. Zip this folder (or upload it as-is to `wp-content/themes/nova-theme`).
2. Appearance → Themes → Activate. On activation the theme creates the pages
   (Home, four industry pages, four service pages, How we work, Finding opportunities,
   About, Free consultation) and sets Home as the static front page.
3. Appearance → Customize → **NOVA site settings**: years, clients, automations,
   founder, phone, email (contact-form recipient), service area, booking URL.
4. Settings → Permalinks → Save (once) so page slugs resolve.

Templates are chosen by page slug (`law-firms`, `medical`, `home-services`,
`accounting-insurance`, `bi-consulting`, `agent-hiring`, `automation`, `on-prem`,
`how-we-work`, `find-opportunities`, `about`, `contact`). Any other page uses `page.php`.

## Editing

- Copy and data: `inc/data.php` (strings are HTML).
- Bespoke sections per service: `template-parts/service-*.php`.
- Styles: `assets/site.css` (design tokens at the top; both light and dark themes).
- Menu: assign a menu to **Primary** to replace the built-in Services/Industries menu.
- Contact form posts to `admin-post.php` and emails the configured address via
  `wp_mail`. Install an SMTP plugin (e.g. WP Mail SMTP) so mail is delivered reliably,
  or replace the form with your forms plugin's shortcode.

## Before going public

Replace the placeholder trust-strip figures, contact details and founder name in the
Customizer, and swap the styled integration wordmarks (`.lwall`) for official logos.
