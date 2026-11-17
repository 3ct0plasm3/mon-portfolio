import { LANGUAGES, localizePath } from './i18n/LanguageContext'
import type { Lang } from './i18n/LanguageContext'

// URL de base du site. Pour passer à un nom de domaine, définir VITE_SITE_URL
// (variable d'environnement Vercel ou fichier .env) et relancer le build.
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? 'https://ecto-dev.vercel.app'
).replace(/\/$/, '')

const SITE_NAME = 'Ecto.dev'
const SHARE_IMAGE = `${SITE_URL}/og-image.png`
const SHARE_IMAGE_ALT: Record<Lang, string> = {
  fr: "Ecto.dev — Des sites à l'âme forte, construits pour durer",
  en: 'Ecto.dev — Websites with a strong soul, built to last',
}
const OG_LOCALE: Record<Lang, string> = { fr: 'fr_BE', en: 'en_GB' }

const publisher = {
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: `${SITE_URL}/`,
}

type Text = { title: string; description: string }

interface PageDefinition {
  // Adresse française ; l'adresse anglaise s'en déduit (/en…).
  path: string
  fr: Text
  en: Text
  kind: 'home' | 'collection' | 'project' | 'page'
  keywords?: string
}

export interface Page {
  path: string
  basePath: string
  lang: Lang
  title: string
  description: string
  ogType: 'website' | 'article'
  jsonLd: Record<string, unknown>
}

const DEFINITIONS: PageDefinition[] = [
  {
    path: '/',
    kind: 'home',
    fr: {
      title: 'Ecto.dev — Développeuse web fullstack, sites sur mesure',
      description:
        'Développeuse web fullstack (React / TypeScript) : solutions numériques sur mesure pour projets associatifs, artistes et structures engagées.',
    },
    en: {
      title: 'Ecto.dev — Fullstack web developer, bespoke websites',
      description:
        'Fullstack web developer (React / TypeScript): bespoke digital solutions for non-profits, artists and committed organisations.',
    },
  },
  {
    path: '/projets',
    kind: 'collection',
    fr: {
      title: 'Projets — Sites et plateformes sur mesure | Ecto.dev',
      description:
        "Tous les projets d'Ecto.dev : sites, boutiques en ligne et plateformes sur mesure pour artistes, associations et structures engagées.",
    },
    en: {
      title: 'Projects — Bespoke websites and platforms | Ecto.dev',
      description:
        'All Ecto.dev projects: websites, online shops and bespoke platforms for artists, non-profits and committed organisations.',
    },
  },
  {
    path: '/projets/ma-commune-vivante',
    kind: 'project',
    keywords: 'Next.js, TypeScript, Supabase, PostgreSQL, PostGIS',
    fr: {
      title: 'Ma Commune Vivante — Infrastructure territoriale | Ecto.dev',
      description:
        'Une infrastructure territoriale collaborative pour reconnecter citoyens, associations et communes autour de la gestion durable du vivant.',
    },
    en: {
      title: 'Ma Commune Vivante — Territorial infrastructure | Ecto.dev',
      description:
        'A collaborative territorial infrastructure reconnecting citizens, non-profits and municipalities around the sustainable management of living ecosystems.',
    },
  },
  {
    path: '/projets/violette',
    kind: 'project',
    keywords: 'Next.js, React, TypeScript, Sanity, Stripe',
    fr: {
      title: "Violette — Site et boutique d'artiste | Ecto.dev",
      description:
        'Site et boutique sur mesure pour une artiste : écrits, galerie, vente en ligne et administration autonome.',
    },
    en: {
      title: "Violette — Artist's website and shop | Ecto.dev",
      description:
        'A bespoke website and shop for an artist: writing, gallery, online sales and independent management.',
    },
  },
  {
    path: '/projets/l-empreinte-libre',
    kind: 'project',
    keywords: 'Angular, TypeScript, SCSS, Angular SSR, Cloudflare Pages, Vitest',
    fr: {
      title: "L'Empreinte Libre — Atelier de création graphique engagée | Ecto.dev",
      description:
        'Un atelier indépendant de création graphique engagée : concevoir, développer et structurer une plateforme dédiée aux créations indépendantes et aux collaborations engagées.',
    },
    en: {
      title: "L'Empreinte Libre — Committed graphic design studio | Ecto.dev",
      description:
        'An independent studio for committed graphic design: designing, developing and structuring a platform dedicated to independent creations and committed collaborations.',
    },
  },
  {
    path: '/univers',
    kind: 'page',
    fr: {
      title: 'Un univers à soi — Créer votre espace | Ecto.dev',
      description:
        "Un espace pour réunir nos petites victoires, nos projets et nos souvenirs heureux, et une invitation à créer le vôtre : portfolio, carnet ou coin d'expression.",
    },
    en: {
      title: "A world of one's own — Create your own space | Ecto.dev",
      description:
        'A space to gather our small victories, our projects and our happy memories, and an invitation to create your own: portfolio, notebook or corner for self-expression.',
    },
  },
  {
    path: '/mentions-legales',
    kind: 'page',
    fr: {
      title: 'Mentions légales et confidentialité | Ecto.dev',
      description: "Éditrice, hébergement, propriété intellectuelle et protection des données du site Ecto.dev.",
    },
    en: {
      title: 'Legal notice and privacy | Ecto.dev',
      description: 'Publisher, hosting, intellectual property and data protection for the Ecto.dev website.',
    },
  },
]

function jsonLdFor(definition: PageDefinition, lang: Lang, url: string): Record<string, unknown> {
  const { title, description } = definition[lang]
  switch (definition.kind) {
    case 'home':
      return {
        '@context': 'https://schema.org',
        ...publisher,
        description,
        image: SHARE_IMAGE,
        email: 'marilou.ncks@gmail.com',
        sameAs: [
          'https://github.com/3ct0plasm3',
          'https://www.linkedin.com/in/marilou-nyckees/',
        ],
      }
    case 'collection':
      return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: title.split(' — ')[0],
        url,
        inLanguage: lang,
        creator: publisher,
      }
    case 'project':
      return {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: title.split(' — ')[0],
        description,
        url,
        image: SHARE_IMAGE,
        dateCreated: '2026',
        inLanguage: lang,
        keywords: definition.keywords,
        creator: publisher,
      }
    case 'page':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title.split(' | ')[0],
        description,
        url,
        inLanguage: lang,
        publisher,
      }
  }
}

export const PAGES: Page[] = DEFINITIONS.flatMap((definition) =>
  LANGUAGES.map(({ code }) => {
    const path = localizePath(definition.path, code)
    return {
      path,
      basePath: definition.path,
      lang: code,
      ...definition[code],
      ogType: definition.kind === 'project' ? 'article' : 'website',
      jsonLd: jsonLdFor(definition, code, `${SITE_URL}${path}`),
    } satisfies Page
  }),
)

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

function link(rel: string, href: string, hreflang?: string) {
  const lang = hreflang ? ` hreflang="${hreflang}"` : ''
  return `<link rel="${rel}"${lang} href="${escapeAttr(href)}" />`
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
  // Les versions de la même page dans chaque langue, pour les moteurs de recherche.
  const alternates = LANGUAGES.map(({ code }) =>
    link('alternate', `${SITE_URL}${localizePath(page.basePath, code)}`, code),
  )
  const otherLocales = LANGUAGES.filter(({ code }) => code !== page.lang).map(({ code }) =>
    meta('property', 'og:locale:alternate', OG_LOCALE[code]),
  )
  // `<` échappé pour que le JSON ne puisse pas fermer la balise script.
  const jsonLd = JSON.stringify(page.jsonLd).replace(/</g, '\\u003c')
  return [
    `<title>${escapeAttr(page.title)}</title>`,
    meta('name', 'description', page.description),
    link('canonical', url),
    ...alternates,
    link('alternate', `${SITE_URL}${page.basePath}`, 'x-default'),
    meta('property', 'og:type', page.ogType),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:locale', OG_LOCALE[page.lang]),
    ...otherLocales,
    meta('property', 'og:title', page.title),
    meta('property', 'og:description', page.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', SHARE_IMAGE),
    meta('property', 'og:image:width', '1200'),
    meta('property', 'og:image:height', '630'),
    meta('property', 'og:image:alt', SHARE_IMAGE_ALT[page.lang]),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', page.title),
    meta('name', 'twitter:description', page.description),
    meta('name', 'twitter:image', SHARE_IMAGE),
    meta('name', 'twitter:image:alt', SHARE_IMAGE_ALT[page.lang]),
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
