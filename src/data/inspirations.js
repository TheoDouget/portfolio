// Vidéos de l'en-tête (proposition C) : ce qui fait rêver Théo.
// Le crédit s'affiche sous la légende et en pied de page. Les vidéos SpaceX,
// Tesla, Unitree et Figure appartiennent à ces entreprises (extraits de leurs
// sites officiels) ; la vidéo NASA est dans le domaine public ; le réseau de
// neurones est sous licence Pexels.
// Fichiers dans public/media/hero/ : <slug>-1080.mp4, <slug>-720.mp4 (extraits
// de 6,6 s, sans son, H.264) et <slug>.jpg (affiche 1280 × 720).
// Note : l'extrait du vol 13 (séparation des étages, filmée depuis le booster)
// est retourné horizontalement, pour que le vaisseau passe à gauche, hors du nom.
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
    video: video('cybertruck'),
    k: 'Automobile',
    t: 'Tesla Cybertruck : tout-terrain dans la neige',
    credit: 'Tesla',
    source: 'https://www.tesla.com/cybertruck',
    accent: '#ff8a7a',
    pos: '55% 50%',
  },
  {
    video: video('starship-vol15'),
    k: 'Espace · 14 novembre 2026',
    t: 'Starship, vol 15 : le vaisseau rattrapé par la tour',
    credit: 'SpaceX',
    source: 'https://www.spacex.com/launches/starship-flight-15',
    accent: '#ffb27a',
    pos: '47% 50%',
  },
  {
    video: video('reseau-neurones'),
    k: 'Intelligence artificielle',
    t: 'Des neurones, le modèle des réseaux de l’IA (animation)',
    credit: 'Nicola Narracci, licence Pexels',
    source: 'https://www.pexels.com/video/abstract-neural-network-connections-animation-29184317/',
    accent: '#ffb061',
  },
  {
    video: video('starship-vol2'),
    k: 'Espace · novembre 2023',
    t: 'Starship, vol 2 : l’ascension sur 33 moteurs',
    credit: 'NASA, domaine public',
    source: 'https://www.nasa.gov/foia/nasa-e-libraries/headquarters-foia-library/',
    accent: '#ff9fcf',
    pos: '48% 50%',
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
]);
