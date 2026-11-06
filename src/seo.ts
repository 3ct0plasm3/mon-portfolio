// URL de base du site. Pour passer à un nom de domaine, définir VITE_SITE_URL
// (variable d'environnement Vercel ou fichier .env) et relancer le build.
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://ecto-dev.vercel.app'
).replace(/\/$/, '')

const SITE_NAME = 'Ecto.dev'
const SHARE_IMAGE = `${SITE_URL}/og-image.png`
const SHARE_IMAGE_ALT = "Ecto.dev — Des sites à l'âme forte, construits pour durer"

const publisher = {
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
}

interface Page {
  path: string
  title: string
  description: string
  ogType: 'website' | 'article'
  jsonLd: Record<string, unknown>
}

function project(
  page: Omit<Page, 'ogType' | 'jsonLd'>,
  keywords: string,
): Page {
  return {
    ...page,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: page.title.split(' — ')[0],
      description: page.description,
      url: `${SITE_URL}${page.path}`,
      image: SHARE_IMAGE,
      dateCreated: '2026',
      inLanguage: 'fr',
      keywords,
      creator: publisher,
    },
  }
}

export const PAGES: Page[] = [
  {
    path: '/',
    title: 'Ecto.dev — Développeuse web fullstack, sites sur mesure',
    description:
      'Développeuse web fullstack (React / TypeScript) : solutions numériques sur mesure pour projets associatifs, artistes et structures engagées.',
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      ...publisher,
      description:
        'Développement web fullstack et solutions numériques sur mesure pour projets associatifs, artistes et structures engagées.',
      image: SHARE_IMAGE,
      email: 'marilou.ncks@gmail.com',
      sameAs: [
        'https://github.com/3ct0plasm3',
        'https://www.linkedin.com/in/marilou-nyckees/',
      ],
    },
  },
  {
    path: '/projets',
    title: 'Projets — Sites et plateformes sur mesure | Ecto.dev',
    description:
      "Tous les projets d'Ecto.dev : sites, boutiques en ligne et plateformes sur mesure pour artistes, associations et structures engagées.",
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projets',
      url: `${SITE_URL}/projets`,
      inLanguage: 'fr',
      creator: publisher,
    },
  },
  project(
    {
      path: '/projets/ma-commune-vivante',
      title: 'Ma Commune Vivante — Infrastructure territoriale | Ecto.dev',
      description:
        'Une infrastructure territoriale collaborative pour reconnecter citoyens, associations et communes autour de la gestion durable du vivant.',
    },
    'Next.js, TypeScript, Supabase, PostgreSQL, PostGIS',
  ),
  project(
    {
      path: '/projets/violette',
      title: "Violette — Site et boutique d'artiste | Ecto.dev",
      description:
        'Site et boutique sur mesure pour une artiste : écrits, galerie, vente en ligne et administration autonome.',
    },
    'Next.js, React, TypeScript, Sanity, Stripe',
  ),
]

const NOT_FOUND = {
  title: 'Page introuvable | Ecto.dev',
  description: "Cette page s'est égarée dans les archives.",
}

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function meta(attr: 'name' | 'property', key: string, value: string) {
  return `<meta ${attr}="${key}" content="${escapeAttr(value)}" />`
}

export function headFor(path: string) {
  const page = PAGES.find((candidate) => candidate.path === path)
  if (!page) {
    return [
      `<title>${escapeAttr(NOT_FOUND.title)}</title>`,
      meta('name', 'description', NOT_FOUND.description),
      meta('name', 'robots', 'noindex'),
    ].join('\n    ')
  }

  const url = `${SITE_URL}${page.path}`
  // `<` échappé pour que le JSON ne puisse pas fermer la balise script.
  const jsonLd = JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')
  return [
    `<title>${escapeAttr(page.title)}</title>`,
    meta('name', 'description', page.description),
    `<link rel="canonical" href="${escapeAttr(url)}" />`,
    meta('property', 'og:type', page.ogType),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', 'fr_FR'),
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', SHARE_IMAGE),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', SHARE_IMAGE_ALT),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', SHARE_IMAGE),
    meta('name', 'twitter:image:alt', SHARE_IMAGE_ALT),
    `<script type="application/ld+json">${jsonLd}</script>`,
  ].join('\n    ')
}

// Navigation côté client : garde le titre, la description et la canonique à jour.
export function applySeo(path: string) {
  const page = PAGES.find((candidate) => candidate.path === path)
  document.title = page?.title ?? NOT_FOUND.title

  let description = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!description) {
    description = document.createElement('meta')
    description.name = 'description'
    document.head.append(description)
  }
  description.content = page?.description ?? NOT_FOUND.description

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (page) {
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `${SITE_URL}${page.path}`
  } else {
    canonical?.remove()
  }
}
