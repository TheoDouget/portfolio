// Parcours culturel : pays où Théo a étudié, travaillé ou voyagé.
// id = code ISO 3166-1 numérique (celui de world-atlas).
// focus = [longitude, latitude, zoom] du cadrage de la carte quand on choisit le pays.
// Un lieu avec « what » (études, stage, start-up) est détaillé dans la liste ;
// les lieux sans « what » sont des voyages, listés à la suite sur une ligne.
import { typoDeep } from '../lib/typo.js';

export const voyages = typoDeep([
  {
    id: '250',
    name: 'France',
    tag: 'Études · stages',
    focus: [2.6, 46.6, 15.5],
    places: [
      { name: 'Nancy', lon: 6.18, lat: 48.69, side: 'right', when: '2022 → 2024', what: 'La Prépa des INP', projects: ['batterie-gravitaire'] },
      { name: 'Witry-lès-Reims', lon: 4.12, lat: 49.29, side: 'left', when: 'mai → juin 2024', what: 'Stage chez CARBODY', projects: ['carbody'] },
      {
        name: 'Clermont-Ferrand',
        lon: 3.09,
        lat: 45.78,
        side: 'left',
        when: '2024 → 2027',
        what: 'SIGMA Clermont, puis Anonym-IA',
        projects: ['anonym-ia', 'perseus', 'robot-tri', 'reducteur', 'optimisation-topologique', 'support-sonde', 'capy-invest'],
      },
      { name: 'La Tour-du-Pin', lon: 5.44, lat: 45.57, side: 'bottom', when: 'juin → juil. 2025', what: 'Stage chez Porcher Industries' },
      { name: 'Lyon', lon: 4.84, lat: 45.76, side: 'top', when: 'nov. 2026', what: 'Lauréat régional du Prix Pépite avec Anonym-IA', projects: ['anonym-ia'] },
    ],
  },
  {
    id: '124',
    name: 'Canada',
    tag: 'Start-up',
    focus: [-72.4, 46.8, 11],
    places: [
      {
        name: 'Montréal',
        lon: -73.57,
        lat: 45.5,
        side: 'left',
        when: 'mai 2026',
        what: 'Learning Expedition de trois Pépite d’Auvergne-Rhône-Alpes (Clermont, Lyon, Grenoble), avec Anonym-IA. À Montréal, visite d’Ax.c, le lieu qui réunit start-up, incubateurs et accélérateurs de la tech québécoise.',
      },
      {
        name: 'Québec',
        lon: -71.21,
        lat: 46.81,
        when: '19 → 22 mai 2026',
        what: 'Atelier de pitch au CAMP, l’incubateur de Québec International, puis deux jours de Rendez-vous d’affaires de la Francophonie.',
        projects: ['anonym-ia'],
      },
    ],
  },
  {
    id: '704',
    name: 'Viêt Nam',
    tag: 'Stage de 4 mois',
    focus: [105.5, 16.5, 9.5],
    places: [
      { name: 'Hanoï', lon: 105.85, lat: 21.03, side: 'left', when: 'mai → sept. 2026', what: 'Stage R&D à l’USTH : atterrissage autonome d’un drone', projects: ['drone-atterrissage'] },
      { name: 'Hà Giang', lon: 104.98, lat: 22.82, full: 'Boucle de Hà Giang', side: 'right' },
      { name: 'Sapa', lon: 103.84, lat: 22.34, side: 'left' },
      { name: 'Baie d’Along', lon: 107.08, lat: 20.91 },
      { name: 'Ninh Binh', lon: 105.97, lat: 20.25, side: 'bottom' },
      { name: 'Hô-Chi-Minh-Ville', lon: 106.7, lat: 10.78, side: 'bottom' },
    ],
  },
  { id: '764', name: 'Thaïlande', tag: 'Voyage', focus: [101, 13.5, 11], places: [{ name: 'Koh Tao', lon: 99.84, lat: 10.1 }] },
  {
    id: '724',
    name: 'Espagne',
    tag: 'Voyage',
    focus: [-2.5, 40.8, 15],
    places: [
      { name: 'Bilbao', lon: -2.93, lat: 43.26, side: 'top' },
      { name: 'Barcelone', lon: 2.17, lat: 41.39 },
    ],
  },
  {
    id: '826',
    name: 'Angleterre',
    tag: 'Échange',
    focus: [-2.2, 53.6, 15],
    places: [
      { name: 'Londres', lon: -0.13, lat: 51.51, side: 'bottom' },
      { name: 'Cambridge', lon: 0.12, lat: 52.21 },
    ],
  },
  { id: '276', name: 'Allemagne', tag: 'Voyage', focus: [10.5, 51.2, 16], places: [{ name: 'Berlin', lon: 13.4, lat: 52.52 }] },
  { id: '756', name: 'Suisse', tag: 'Voyage', focus: [8.2, 46.8, 22], places: [{ name: 'Genève', lon: 6.14, lat: 46.2 }] },
  {
    id: '380',
    name: 'Italie',
    tag: 'Voyage',
    focus: [12.6, 42.3, 15],
    places: [
      { name: 'Lac de Côme', lon: 9.26, lat: 46.0, side: 'top' },
      { name: 'Milan', lon: 9.19, lat: 45.46, side: 'left' },
      { name: 'Lac de Garde', lon: 10.66, lat: 45.63 },
    ],
  },
  {
    id: '191',
    name: 'Croatie',
    tag: 'Voyage',
    focus: [16.2, 44.6, 20],
    places: [
      { name: 'Île de Krk', lon: 14.6, lat: 45.08 },
      { name: 'Île de Cres', lon: 14.4, lat: 44.85, side: 'left' },
    ],
  },
  { id: '703', name: 'Slovaquie', tag: 'Échange', focus: [19.6, 48.7, 22], places: [{ name: 'Košice', lon: 21.26, lat: 48.72 }] },
  { id: '578', name: 'Norvège', tag: 'Voyage', focus: [13, 64.5, 9], places: [{ name: 'Trondheim', lon: 10.4, lat: 63.43 }] },
]);

// Cadrages prédéfinis (boutons au-dessus de la carte)
export const views = [
  { key: 'monde', label: 'Monde', focus: null },
  { key: 'europe', label: 'Europe', focus: [11, 50.5, 6.5] },
];
