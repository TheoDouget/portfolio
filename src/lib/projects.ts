import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projets'>;

/** Tous les projets publiés, dans l'ordre éditorial (champ `order`). */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projets', (p) => !p.data.draft);
  return all.sort((a, b) => a.data.order - b.data.order);
}
