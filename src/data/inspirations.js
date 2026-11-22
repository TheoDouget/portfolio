// Vidéos de l'en-tête : ce qui fait rêver Théo.
// Le crédit s'affiche sous la légende et en pied de page. Les vidéos SpaceX,
// Unitree, Waymo, Figure et Isar Aerospace appartiennent à ces entreprises
// (extraits de leurs sites officiels ou de la médiathèque de l'ESA) ; la vidéo
// Ariane 5 est publiée par l'ESA (licence standard ESA, crédit obligatoire) ;
// l'animation Gemma Scope vient du blog de Google DeepMind (représentation
// stylisée d'un autoencodeur parcimonieux qui lit les activations du modèle).
// Fichiers dans public/media/hero/ : <slug>-1080.mp4, <slug>-720.mp4 (extraits
// de 6,6 s, sans son, H.264) et <slug>.jpg (affiche 1280 × 720).
// Notes de montage :
// - vol 13 (séparation des étages, filmée depuis le booster) : image retournée
//   horizontalement, pour que le vaisseau passe à gauche, hors du nom ;
// - Waymo : vue 3D seule (sans le bandeau caméra), interpolée de 10 à 30 i/s ;
// - Isar Aerospace : recadrée pour décaler la fusée vers la gauche.
import { typoDeep } from '../lib/typo.js';

const video = (slug) => ({ hd: `media/hero/${slug}-1080.mp4`, sd: `media/hero/${slug}-720.mp4`, poster: `media/hero/${slug}.jpg` });

export const inspirations = typoDeep([
  {
    video: video('starship-vol13'),
    k: 'Espace · 24 juillet 2026',
    t: 'Starship, vol 13 : la séparation des étages',
    credit: 'SpaceX',
    source: 'https://www.spacex.com/launches/starship-flight-13',
    accent: '#7cc4ff',
    pos: '40% 50%',
  },
  {
    video: video('unitree-h2'),
    k: 'Robotique',
    t: 'Unitree H2 : un humanoïde en arts martiaux',
    credit: 'Unitree Robotics',
    source: 'https://www.unitree.com/H2',
    accent: '#e6f26a',
    pos: '42% 50%',
  },
  {
    video: video('voiture-autonome'),
    k: 'Voiture autonome · Waymo, Phoenix, de nuit',
    t: 'Ce que « voit » une voiture autonome',
    credit: 'Waymo',
    source: 'https://waymo.com/',
    accent: '#5fe3b4',
    pos: '36% 50%',
  },
  {
    video: video('ariane5-dernier-vol'),
    k: 'Espace · 5 juillet 2023',
    t: 'Ariane 5, dernier vol : décollage de nuit à Kourou',
    credit: 'ESA, CNES, Arianespace',
    source: 'https://www.esa.int/media/ariane-5-bows-out-in-style-ariane-5-va261-lifoff',
    accent: '#ffc27a',
    pos: '32% 50%',
  },
  {
    video: video('modele-de-langage'),
    k: 'Intelligence artificielle · Google DeepMind',
    t: 'Gemma Scope : à l’intérieur d’un modèle de langage',
    credit: 'Google DeepMind',
    source: 'https://deepmind.google/blog/gemma-scope-helping-the-safety-community-shed-light-on-the-inner-workings-of-language-models/',
    accent: '#a9b4ff',
    pos: '45% 50%',
  },
  {
    video: video('figure-02'),
    k: 'Start-up · IA',
    t: 'Figure 02 : deux humanoïdes guidés par l’IA Helix',
    credit: 'Figure AI',
    source: 'https://www.figure.ai/news/helix',
    accent: '#b8d4ff',
    pos: '38% 50%',
  },
  {
    video: video('isar-spectrum'),
    k: 'Start-up spatiale européenne · 30 mars 2025',
    t: 'Isar Aerospace : premier vol de Spectrum, en Norvège',
    credit: 'Isar Aerospace, via l’ESA',
    source: 'https://www.esa.int/media/spectrum-first-flight',
    accent: '#9fd8ff',
    pos: '40% 50%',
  },
]);
