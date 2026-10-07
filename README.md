# Portfolio — Théo Douget

Site statique (Astro 7, zéro JavaScript côté visiteur), hébergé **gratuitement sur GitHub Pages**
et déployé automatiquement à chaque `git push` sur `main`.

## Modifier le contenu

Tout le texte (nom, bio, projets, compétences, contact) est dans **`src/data/site.js`**.
Les emplacements marqués « À REMPLACER » ne doivent pas rester en ligne.

Le style est dans `src/styles/global.css` (variables de couleurs en tête de fichier, thème clair/sombre
automatique selon le système du visiteur).

## Lancer en local

Prérequis : Node ≥ 22.12 (cf. `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # sert dist/ pour vérifier le build
```

## Déploiement (0 €)

| Élément | Choix | Coût |
|---|---|---|
| Hébergement | GitHub Pages | 0 € |
| CI/CD | GitHub Actions (`.github/workflows/deploy.yml`) | 0 € (repo public) |
| HTTPS | Certificat géré par GitHub Pages | 0 € |
| Mises à jour des dépendances | Dependabot (mensuel) | 0 € |

Flux : `git push` sur `main` → Actions construit le site → publie sur Pages. Aucune clé, aucun secret à gérer.

URL par défaut : `https://<compte>.github.io/<nom-du-repo>/`.

> **GitHub Pages sur offre gratuite = repo public.** Ne mets donc rien de confidentiel dans ce dépôt.

### Première mise en ligne (une seule fois)

Dans le repo GitHub : **Settings → Pages → Build and deployment → Source : GitHub Actions**.
(Déjà fait si le repo a été créé par le script de mise en place.)

### Domaine personnalisé (optionnel)

1. Acheter le domaine (seul coût possible, ~8–12 €/an) chez le registrar de ton choix.
2. DNS : `CNAME www → <compte>.github.io` (et/ou enregistrements `A` de GitHub Pages pour l'apex —
   liste à jour dans la doc GitHub Pages).
3. **Settings → Pages → Custom domain** : saisir le domaine, cocher *Enforce HTTPS*.
4. **Settings → Secrets and variables → Actions → Variables** : créer
   - `SITE_URL` = `https://mondomaine.fr`
   - `BASE_PATH` = `/`
5. Relancer le workflow (onglet Actions → *Run workflow*).

### Mettre en ligne « pour de vrai »

Tant que `indexable: false` dans `src/data/site.js`, le site porte `noindex`, `robots.txt` interdit tout
et aucun sitemap n'est généré : le site ne sera pas référencé. Quand le contenu est prêt, passer à `true`.

## Alternative : Cloudflare Pages

Si tu préfères (déploiements de prévisualisation par branche, CDN plus large) : connecter le repo,
*Build command* `npm run build`, *Output directory* `dist`, variables `SITE_URL` (l'URL de production)
et `BASE_PATH=/`. Gratuit également — vérifier les limites en vigueur au moment de t'inscrire.
