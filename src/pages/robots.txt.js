import { site as profile } from '../data/site.js';

export function GET({ site: origin }) {
  const lines = ['User-agent: *'];

  if (profile.indexable) {
    const base = import.meta.env.BASE_URL.replace(/\/$/, '');
    lines.push('Allow: /', '', `Sitemap: ${new URL(`${base}/sitemap-index.xml`, origin).href}`);
  } else {
    lines.push('Disallow: /');
  }

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
