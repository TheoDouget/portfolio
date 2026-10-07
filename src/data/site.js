// ─────────────────────────────────────────────────────────────────────────────
// TOUT LE CONTENU DU PORTFOLIO EST ICI. Modifie ce fichier, le reste suit.
// Les textes « À REMPLACER » sont des emplacements : ne les laisse pas en ligne.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  // Tant que c'est `false` : balise noindex + robots.txt « Disallow » + pas de
  // sitemap. Passe à `true` le jour où le contenu est prêt à être référencé.
  indexable: false,

  lang: 'fr',
  name: 'Théo Douget',
  title: 'Théo Douget — Portfolio',
  role: 'À REMPLACER — ton titre (ex. « Fondateur & développeur »)',
  tagline: 'À REMPLACER — une phrase qui dit ce que tu fais et pour qui.',
  description: 'Portfolio de Théo Douget — projets, parcours et contact.',

  about: [
    'À REMPLACER — premier paragraphe : qui tu es, ce qui t’anime.',
    'À REMPLACER — second paragraphe : ton parcours, ce que tu cherches.',
  ],

  skills: [
    { group: 'À REMPLACER', items: ['Compétence 1', 'Compétence 2', 'Compétence 3'] },
    { group: 'À REMPLACER', items: ['Outil 1', 'Outil 2', 'Outil 3'] },
  ],

  projects: [
    {
      title: 'Projet 1',
      summary: 'À REMPLACER — ce que c’est, ton rôle, le résultat en une ou deux phrases.',
      tags: ['Tag', 'Tag'],
      url: '', // laisse vide pour ne pas afficher de lien
    },
    {
      title: 'Projet 2',
      summary: 'À REMPLACER — ce que c’est, ton rôle, le résultat en une ou deux phrases.',
      tags: ['Tag', 'Tag'],
      url: '',
    },
    {
      title: 'Projet 3',
      summary: 'À REMPLACER — ce que c’est, ton rôle, le résultat en une ou deux phrases.',
      tags: ['Tag', 'Tag'],
      url: '',
    },
  ],

  contact: {
    email: '', // ex. 'prenom@exemple.fr' — vide = le bloc e-mail n'est pas affiché
    links: [
      // { label: 'GitHub', url: 'https://github.com/…' },
      // { label: 'LinkedIn', url: 'https://www.linkedin.com/in/…' },
    ],
  },
};
