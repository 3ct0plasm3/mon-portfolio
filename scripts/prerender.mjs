// Génère le HTML statique de chaque route, ainsi que robots.txt et sitemap.xml.
// Lancé par `npm run build`, après les builds client et serveur de Vite.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = resolve('dist')
const serverBuild = resolve('dist-ssr')
const { PAGES, SITE_URL, headFor, render } = await import(
  pathToFileURL(resolve(serverBuild, 'entry-server.js')).href
)

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')

function writePage(url, file, lang = 'fr') {
  const html = template
    .replace('<html lang="fr">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', () => headFor(url))
    .replace('<!--app-html-->', () => render(url))
  const target = resolve(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}

// /en/projets → en/projets.html, servi à l'adresse /en/projets.
for (const { path, lang } of PAGES) {
  writePage(path, path === '/' ? 'index.html' : `${path.slice(1)}.html`, lang)
}
// Vercel sert ce fichier, avec un statut 404, pour toute route inconnue.
writePage('/404', '404.html')

writeFileSync(
  resolve(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

// Chaque adresse liste aussi ses traductions (hreflang).
const urls = PAGES.map(({ path, basePath }) => {
  const alternates = PAGES.filter((page) => page.basePath === basePath)
    .map((page) => `    <xhtml:link rel="alternate" hreflang="${page.lang}" href="${SITE_URL}${page.path}" />`)
    .join('\n')
  return `  <url>\n    <loc>${SITE_URL}${path}</loc>\n${alternates}\n  </url>`
}).join('\n')
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
)

rmSync(serverBuild, { recursive: true, force: true })
console.log(`Prérendu : ${PAGES.length} pages + 404, robots.txt, sitemap.xml (${SITE_URL})`)
