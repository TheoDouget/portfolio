import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import { site as profile } from './src/data/site.js';
import rehypeFrench from './src/lib/rehype-french.mjs';

// En local : http://localhost:4321/. En CI, le workflow injecte SITE_URL et
// BASE_PATH (cf. .github/workflows/deploy.yml) — rien à modifier ici quand tu
// changes de domaine, il suffit de poser deux variables dans le repo GitHub.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  // Pas de sitemap tant que le site n'est pas déclaré indexable (src/data/site.js).
  integrations: [mdx(), ...(profile.indexable ? [sitemap()] : [])],
  // Processeur unified (remark/rehype) pour la typographie française automatique.
  markdown: {
    processor: unified({ rehypePlugins: [rehypeFrench] }),
  },
  // La police (Archivo, OFL) est auto-hébergée via @fontsource-variable/archivo,
  // importée dans src/layouts/Base.astro : aucun appel à un CDN tiers.
});
