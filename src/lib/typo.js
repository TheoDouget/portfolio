// Typographie française pour les textes saisis en JS (src/data/site.js) :
// apostrophe typographique, espaces insécables avant : ; ! ? et dans « ».
// Les chaînes qui ressemblent à des URL, des e-mails ou des chemins sont ignorées.
const NNBSP = ' ';
const NBSP = ' ';

export function typo(text) {
  if (typeof text !== 'string' || /^(https?:|mailto:|[\w.-]+@|[\w-]+\/)/.test(text)) return text;
  return text
    .replace(/(\p{L})'(\p{L})/gu, '$1’$2')
    .replace(/ ([;!?])/g, `${NNBSP}$1`)
    .replace(/ :(?=\s|$)/g, `${NBSP}:`)
    .replace(/« /g, `«${NNBSP}`)
    .replace(/ »/g, `${NNBSP}»`);
}

/** Applique typo() à toutes les chaînes d'un objet, récursivement. */
export function typoDeep(value) {
  if (Array.isArray(value)) return value.map(typoDeep);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, typoDeep(v)]));
  }
  return typo(value);
}
