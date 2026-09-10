// ============================================================================
// AUDIENCE INDEX
// The order below is the order used in the nav dropdown, the footer, and the
// "Who We Serve" hub page. Each audience's copy lives in ./audiences/<slug>.mjs
// To add an audience: copy an existing file in ./audiences, edit it, import it
// here, and add it to the array. Then run `npm run build`.
// ============================================================================

import healthcare from './audiences/healthcare-professionals.mjs';
import corporate from './audiences/corporate-executives.mjs';
import tech from './audiences/tech-equity.mjs';
import professionals from './audiences/attorneys-cpas.mjs';
import nextGen from './audiences/next-gen-owners.mjs';
import legacy from './audiences/legacy-founders.mjs';
import realEstate from './audiences/real-estate-investors.mjs';
import franchise from './audiences/franchise-owners.mjs';
import farm from './audiences/farm-ranch-families.mjs';
import athletes from './audiences/athletes-entertainers.mjs';
import global from './audiences/global-families.mjs';
import preRetirees from './audiences/pre-retirees.mjs';

export const cohorts = [
  healthcare,
  corporate,
  tech,
  professionals,
  nextGen,
  legacy,
  realEstate,
  franchise,
  farm,
  athletes,
  global,
  preRetirees,
];

export const bySlug = Object.fromEntries(cohorts.map((c) => [c.slug, c]));
