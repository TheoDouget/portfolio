import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { typo } from './lib/typo.js';

// Texte affiché : typographie française appliquée automatiquement
// (apostrophes, espaces fines avant : ; ! ?), comme dans le corps MDX.
const text = () => z.string().transform((s) => typo(s));

// Une étude de cas = un dossier src/content/projets/<slug>/ contenant index.mdx
// et ses images. Le slug du dossier devient l'URL : /projets/<slug>/.
const projets = defineCollection({
  loader: glob({
    base: './src/content/projets',
    pattern: '*/index.mdx',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: text(),
      // Une phrase qui donne le résultat (affichée sous le titre et sur les cartes).
      summary: z.string().max(200).transform((s) => typo(s)),
      // Ligne de métadonnées courte, ex. « 2026 · Stage R&D · USTH, Hanoï ».
      kicker: text(),
      // « phare » = grande carte sur l'accueil ; « projet » = liste secondaire.
      tier: z.enum(['phare', 'projet']),
      order: z.number(),
      year: z.string(),
      period: text(),
      context: text(),
      role: text(),
      team: text(),
      status: text(),
      tools: z.array(text()),
      domains: z.array(z.string()),
      cover: image(),
      coverAlt: text(),
      coverFit: z.enum(['cover', 'contain']).default('cover'),
      // Photo sombre d'en-tête de page (sinon : la couverture si c'est une photo).
      hero: image().optional(),
      heroPosition: z.string().default('50% 50%'),
      keyFigures: z
        .array(z.object({ value: text(), label: text() }))
        .max(4)
        .default([]),
      links: z.array(z.object({ label: text(), url: z.string().url() })).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projets };
