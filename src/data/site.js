// ─────────────────────────────────────────────────────────────────────────────
// Données globales du portfolio. Les études de cas, elles, vivent dans
// src/content/projets/<slug>/index.mdx (une par dossier, avec leurs images).
// ─────────────────────────────────────────────────────────────────────────────
import { typoDeep } from '../lib/typo.js';

// Les textes sont corrigés automatiquement (apostrophes, espaces fines) :
// on peut les saisir avec des apostrophes et des espaces ordinaires.
export const site = typoDeep({
  // `true` : le site est référencé (sitemap, robots.txt « Allow »). Repasse à
  // `false` pour le masquer des moteurs (balise noindex + « Disallow », pas de sitemap).
  indexable: true,

  lang: 'fr',
  updated: '2026-11-22',
  name: 'Théo Douget',
  title: 'Théo Douget · Élève-ingénieur Machines, Robots et Systèmes',
  description:
    "Portfolio de Théo Douget, élève-ingénieur à SIGMA Clermont : drone autonome, robots, conception mécanique et Anonym-IA. Recherche un stage de fin d'études de 6 mois à partir de mars 2027.",

  // Accueil
  headline: 'Salut, je suis Théo Douget — élève-ingénieur en Machines, Robots et Systèmes, co-fondateur d\'Anonym-IA.',
  tagline: 'Je conçois des systèmes qui marchent pour de vrai.',
  intro:
    "En dernière année à SIGMA Clermont, je fais travailler ensemble la mécanique, l'électronique, le code et l'IA : un drone qui se pose seul sur une cible en mouvement, des robots, et une plateforme utilisée par plus de 300 professionnels du droit.",
  // Haut de page de l'accueil
  seeking: "À la recherche d'un stage de fin d'études de 6 mois, dès le 15 mars 2027",
  track: 'Machines, Robots et Systèmes',
  role: 'Élève-ingénieur · SIGMA Clermont · Machines, Robots et Systèmes',
  lead:
    "Je conçois des systèmes où la mécanique, l'électronique, le code et l'IA doivent fonctionner ensemble : un drone qui se pose sur une cible en mouvement, des robots, et une plateforme logicielle utilisée par plus de 300 professionnels du droit.",
  availability: {
    title: "À la recherche d'un stage de fin d'études de 6 mois, du 15 mars au 24 septembre 2027",
    detail: 'Conception mécanique, robotique, systèmes autonomes, simulation. Mobile.',
  },
  now: [
    {
      label: 'École',
      text: 'Dernière année à SIGMA Clermont. Projet en cours : un support robotisé pour sonde d’échographie, monté sur cobot UR3e.',
      href: 'projets/support-sonde/',
    },
    {
      label: 'Startup',
      text: 'Co-fondateur et CEO d’Anonym-IA, lauréat régional du Prix Pépite 2026.',
      href: 'projets/anonym-ia/',
    },
    {
      label: 'Dernier stage',
      text: 'Quatre mois de R&D à Hanoï sur l’atterrissage autonome d’un drone par vision.',
      href: 'projets/drone-atterrissage/',
    },
  ],

  contact: {
    email: 'theo.douget@gmail.com',
    linkedin: 'https://www.linkedin.com/in/theo-douget/',
    cv: 'https://cvdesignr.com/p/69e1554579fd2',
  },

  // À propos
  bio: [
    'Je suis élève-ingénieur en dernière année à SIGMA Clermont, dans le domaine Machines, Robots et Systèmes.',
    'J’ai choisi une formation d’ingénieur en filière Machines, Robots et Systèmes parce qu’elle oblige la mécanique, l’électronique, le code et l’IA à fonctionner ensemble : un drone qui doit se poser sur une cible qui roule ne pardonne d’approximation ni dans l’estimation, ni dans la commande, ni dans le banc d’essais.',
    'Mon dernier stage m’a emmené quatre mois à Hanoï, en R&D à l’USTH, à travailler en anglais au quotidien. Avant, j’ai vu l’industrie de l’intérieur : chez CARBODY, où j’ai construit un outil de suivi de la maturité des projets, puis en stage ouvrier chez Porcher Industries, sur la production de tissus techniques pour airbags.',
    'En septembre 2025, j’ai cofondé Anonym-IA, une plateforme qui permet aux professionnels du droit d’utiliser l’IA sans exposer les données de leurs clients. J’en suis le CEO, et je développe aussi la plateforme : architecture, chaîne de traitement des documents, tests, mise en production. Le projet m’a appris à livrer un produit utilisé au quotidien et à arbitrer sous contrainte.',
    'Je cherche un stage de fin d’études de 6 mois, à partir du 15 mars 2027, en conception mécanique, robotique, systèmes autonomes ou simulation.',
  ],

  parcours: [
    { when: '2027', what: 'Stage de fin d’études', detail: '6 mois à partir du 15 mars 2027 : c’est ce que je cherche.', open: true },
    { when: 'mai → sept. 2026', what: 'Stage R&D, USTH, Hanoï', detail: 'Atterrissage autonome d’un drone sur une plateforme mobile, par vision.', href: 'projets/drone-atterrissage/' },
    { when: 'depuis sept. 2025', what: 'Co-fondateur et CEO, Anonym-IA', detail: 'Statut d’étudiant-entrepreneur (PEPITE), incubateur SquareLab en 2026.', href: 'projets/anonym-ia/' },
    { when: 'juin → juil. 2025', what: 'Stage ouvrier, Porcher Industries', detail: 'Production de tissus techniques pour airbags (NCV Production, La Tour-du-Pin).' },
    { when: '2024 → 2027', what: 'SIGMA Clermont', detail: 'Diplôme d’ingénieur en mécanique avancée, domaine Machines, Robots et Systèmes.' },
    { when: 'mai → juin 2024', what: 'Stage, CARBODY', detail: 'Outil de pilotage de la maturité des projets selon le référentiel VDA (Excel, VBA).', href: 'projets/carbody/' },
    { when: '2022 → 2024', what: 'La Prépa des INP, Nancy', detail: 'Cycle préparatoire intégré, équivalent MPSI.', href: 'projets/batterie-gravitaire/' },
  ],

  // Grille « Parcours » (page À propos)
  experiences: [
    { title: 'Co-fondateur et CEO', org: 'Anonym-IA', dates: 'depuis sept. 2025', href: 'projets/anonym-ia/' },
    { title: 'Stagiaire R&D, vision et commande de drone', org: 'USTH, Hanoï (Viêt Nam)', dates: 'mai → sept. 2026', href: 'projets/drone-atterrissage/' },
    { title: 'Étudiant-entrepreneur', org: 'PEPITE · incubateur SquareLab', dates: 'depuis sept. 2025' },
    { title: 'Stagiaire ouvrier, tissage technique', org: 'Porcher Industries (NCV Production)', dates: 'juin → juil. 2025' },
    { title: 'Stagiaire, pilotage de projets VDA', org: 'CARBODY, Witry-lès-Reims', dates: 'mai → juin 2024', href: 'projets/carbody/' },
  ],
  education: [
    { title: 'Diplôme d\'ingénieur, mécanique avancée', org: 'SIGMA Clermont · Machines, Robots et Systèmes', dates: '2024 → 2027' },
    { title: 'Cycle préparatoire intégré', org: 'La Prépa des INP, Nancy', dates: '2022 → 2024' },
    { title: 'Programme d\'incubation', org: 'Open Incubateur SquareLab, Clermont School of Business', dates: 'févr. → juil. 2026' },
  ],

  skills: [
    { group: 'Conception mécanique', items: 'CATIA V5, 3DEXPERIENCE, SolidWorks, KISSsoft, mise en plan, dimensionnement', projects: ['batterie-gravitaire', 'perseus', 'reducteur', 'robot-tri'] },
    { group: 'Simulation', items: 'Ansys (éléments finis, optimisation topologique), Gazebo, PX4 SITL', projects: ['optimisation-topologique', 'drone-atterrissage'] },
    { group: 'Robotique, vision, commande', items: 'Python, OpenCV et ArUco, filtre de Kalman, MAVSDK, Arduino, servomoteurs', projects: ['drone-atterrissage', 'robot-tri', 'support-sonde'] },
    { group: 'Prototypage', items: 'Impression 3D, découpe laser, FAO et usinage CN, montage', projects: ['batterie-gravitaire', 'perseus', 'robot-tri'] },
    { group: 'Logiciel et IA', items: 'React, Node.js, Python (FastAPI), PostgreSQL, NER, OCR, LLM', projects: ['anonym-ia'] },
    { group: 'Méthodes et projet', items: 'Cahier des charges, analyse fonctionnelle, AMDEC, Gantt, suivi agile, pitch', projects: ['perseus', 'support-sonde', 'anonym-ia', 'capy-invest'] },
  ],

  languages: [
    { name: 'Français', level: 'langue maternelle' },
    { name: 'Anglais', level: 'B2 · stage de 4 mois en anglais au Viêt Nam' },
    { name: 'Espagnol', level: 'B1' },
  ],

  outside:
    'En dehors de l’école : l’aérospatial et l’énergie, que je suis de près, la voile en catamaran, le ski alpin, la randonnée, le vélo, la rénovation et la permaculture.',

  // Distinctions et presse (sources publiques uniquement)
  recognition: [
    { date: 'nov. 2026', title: 'Lauréat régional du Prix Pépite 2026, Auvergne-Rhône-Alpes', source: 'Le Connecteur', url: 'https://leconnecteur.org/actualites/veille-actus-de-la-semaine-18-11-2026/' },
    { date: 'oct. 2026', title: '« Il faut tout pseudonymiser ! », Anonym-IA dans « 4 nouveautés Tech pour les métiers du droit »', source: 'Village de la Justice', url: 'https://www.village-justice.com/articles/nouveautes-tech-pour-les-metiers-droit-fevrier' },
    { date: 'juin 2026', title: 'Portrait : un étudiant-entrepreneur français en stage de recherche sur les drones', source: 'USTH (en vietnamien)', url: 'https://usth.edu.vn/gap-go-theo-douget-sinh-vien-khoi-nghiep-tu-phap-va-hanh-trinh-thuc-tap-nghien-cuu-uav-tai-usth-32037/' },
    { date: 'mai 2026', title: 'Invité de l’émission « IA le déclic »', source: 'LOGOS FM', url: 'https://www.youtube.com/watch?v=XsdZVTiaosQ' },
    { date: 'mars 2026', title: 'Prix Entrepreneuriat Étudiant 2026, catégorie Création d’entreprise', source: 'Clermont Auvergne PEPITE' },
    { date: 'févr. 2026', title: 'Théo Douget : l’ingénierie au service de l’IA éthique', source: 'Le Connecteur', url: 'https://leconnecteur.org/actualites/theo-douget-lingenierie-au-service-de-lia-ethique/' },
  ],

  // Travaux d'école plus courts, sans étude de cas (tableau en bas de /projets/)
  archive: [
    { year: '2026', title: 'Modes propres d’une poutre : analytique contre éléments finis', kind: 'Dynamique des structures', tools: 'Python' },
    { year: '2026', title: '« Self-Driving Cars: Who Decides? », exposé et débat en anglais', kind: 'Anglais, en binôme', tools: '25 min' },
    { year: '2025', title: 'Analyse et étagement de boîtes de vitesses automobiles', kind: 'Travaux pratiques', tools: 'Excel' },
    { year: '2025', title: 'Chaîne numérique CAO, FAO et usinage à commande numérique', kind: 'Fabrication mécanique', tools: '3DEXPERIENCE' },
  ],
});
