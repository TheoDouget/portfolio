// Typographie française automatique dans le contenu Markdown/MDX :
// espace fine insécable (U+202F) avant ; ! ? et à l'intérieur des « »,
// espace insécable (U+00A0) avant :. Ne touche ni au code ni aux URL.
const NNBSP = ' ';
const NBSP = ' ';
const SKIP = new Set(['code', 'pre', 'script', 'style', 'kbd', 'samp']);

function fix(text) {
  return text
    .replace(/(\p{L})'(\p{L})/gu, '$1’$2')
    .replace(/ ([;!?])/g, `${NNBSP}$1`)
    .replace(/ :(?=\s|$)/g, `${NBSP}:`)
    .replace(/« /g, `«${NNBSP}`)
    .replace(/ »/g, `${NNBSP}»`);
}

function walk(node, skip) {
  if (node.type === 'text' && !skip) {
    node.value = fix(node.value);
    return;
  }
  if (!node.children) return;
  const inSkip = skip || (node.type === 'element' && SKIP.has(node.tagName));
  for (const child of node.children) walk(child, inSkip);
}

export default function rehypeFrench() {
  return (tree) => walk(tree, false);
}
