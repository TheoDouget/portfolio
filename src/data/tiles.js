// Tuiles de la mosaïque (accueil et page Projets) : image choisie pour la
// grille, qui n'est pas toujours la couverture de l'étude de cas, et ligne
// courte au-dessus du titre. `id` relie la tuile à son étude de cas.
import drone from '../content/projets/drone-atterrissage/couverture.png';
import anonym from '../content/projets/anonym-ia/stand-forum-french-tech.jpg';
import perseus from '../content/projets/perseus/support-rocker-imprime.png';
import batterie from '../content/projets/batterie-gravitaire/interieur-contre-plongee.jpg';
import robot from '../content/projets/robot-tri/couverture-prototype.jpg';
import topo from '../content/projets/optimisation-topologique/couverture-topologie-verticale.png';
import sonde from '../content/projets/support-sonde/couverture-sonde-l44la.jpg';
import reducteur from '../content/projets/reducteur/arbre-kisssoft.png';
import capy from '../content/projets/capy-invest/couverture-recherche-conseillers.jpg';
import carbody from '../content/projets/carbody/couverture-niveaux-maturite.png';
import { typo } from '../lib/typo.js';

// typo() sur les textes seulement : les objets image doivent rester intacts.
export const tiles = [
  { id: 'drone-atterrissage', img: drone, k: '2026 · Robotique, vision', t: 'Poser un drone sur une cible en mouvement' },
  { id: 'anonym-ia', img: anonym, k: '2025 → 2026 · Start-up IA, Prix Pépite', t: 'Anonym-IA' },
  { id: 'perseus', img: perseus, k: '2026 · CNES, conception', t: 'Robot tout-terrain PERSEUS' },
  { id: 'batterie-gravitaire', img: batterie, k: '2024 · Prépa, énergie', t: 'Batterie gravitaire' },
  { id: 'robot-tri', img: robot, k: '2025 · Mécatronique', t: 'Robot de tri' },
  { id: 'optimisation-topologique', img: topo, k: '2025 · Simulation', t: 'Optimisation topologique', dark: true },
  { id: 'support-sonde', img: sonde, k: '2026 · Robotique médicale', t: 'Support de sonde sur cobot' },
  { id: 'carbody', img: carbody, k: '2024 · Stage, industrie automobile', t: 'Suivi de projet au référentiel VDA', contain: true },
  { id: 'reducteur', img: reducteur, k: '2025 · Conception', t: 'Réducteur de 180 kW', contain: true },
  { id: 'capy-invest', img: capy, k: '2024 → 2025 · Projet entrepreneurial', t: 'CAPY Invest', contain: true },
].map((tile) => ({ ...tile, k: typo(tile.k), t: typo(tile.t) }));

/** Tuile d'une étude de cas, par identifiant. */
export const tileOf = Object.fromEntries(tiles.filter((t) => t.id).map((t) => [t.id, t]));
