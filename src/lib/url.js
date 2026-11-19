// Préfixe un chemin interne avec la base du site (« /portfolio » sur GitHub
// Pages, « / » avec un domaine perso). url('projets/') → '/portfolio/projets/'.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path = '') => `${base}/${String(path).replace(/^\//, '')}`;

export const isExternal = (href = '') => /^https?:\/\//.test(href);

const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const monthsLong = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

/** '2026-11-19' → '19 novembre 2026' */
export const dateLong = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${monthsLong[m - 1]} ${y}`;
};

/** '2026-11-19' → 'nov. 2026' */
export const dateShort = (iso) => {
  const [y, m] = iso.split('-').map(Number);
  return `${months[m - 1]} ${y}`;
};
