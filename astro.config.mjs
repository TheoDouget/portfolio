import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site as profile } from './src/data/site.js';

// En local : http://localhost:4321/. En CI, le workflow injecte SITE_URL et
// BASE_PATH (cf. .github/workflows/deploy.yml) — rien à modifier ici quand tu
// changes de domaine, il suffit de poser deux variables dans le repo GitHub.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  // Pas de sitemap tant que le site n'est pas déclaré indexable (src/data/site.js).
  integrations: profile.indexable ? [sitemap()] : [],
});
