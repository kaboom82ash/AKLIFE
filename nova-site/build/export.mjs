// Render the static public pages + site.css from dist/index.html using headless Chromium.
// Usage: node build/export.mjs   (requires: npm i playwright; a Chromium binary via PLAYWRIGHT_CHROMIUM or `npx playwright install chromium`)
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
const root = path.resolve(new URL('..', import.meta.url).pathname);
const dist = path.join(root, 'dist');
const opts = { args: ['--no-sandbox'] };
if (process.env.PLAYWRIGHT_CHROMIUM) opts.executablePath = process.env.PLAYWRIGHT_CHROMIUM;
const b = await chromium.launch(opts);
const p = await b.newPage();
const errs = []; p.on('pageerror', e => errs.push(String(e)));
await p.goto('file://' + path.join(dist, 'index.html') + '#/'); await p.waitForTimeout(500);
fs.writeFileSync(path.join(dist, 'site.css'), await p.evaluate(() => Array.from(document.querySelectorAll('style')).map(s => s.textContent).join('\n')));
const names = await p.evaluate(() => Object.keys(PUBLIC_PAGES));
for (const n of names) fs.writeFileSync(path.join(dist, `${n}.html`), await p.evaluate(n => exportPage(n), n));
console.log(JSON.stringify({ pages: names, errors: errs }));
await b.close();
