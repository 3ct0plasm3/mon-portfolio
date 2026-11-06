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

function writePage(url, file) {
  const html = template
    .replace('<!--app-head-->', () => headFor(url))
    .replace('<!--app-html-->', () => render(url))
  const target = resolve(dist, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, html)
}

for (const { path } of PAGES) {
  writePage(path, path === '/' ? 'index.html' : `${path.slice(1)}.html`)
}
// Vercel sert ce fichier, avec un statut 404, pour toute route inconnue.
writePage('/404', '404.html')

writeFileSync(
  resolve(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
)

const urls = PAGES.map(({ path }) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')
writeFileSync(
  resolve(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

rmSync(serverBuild, { recursive: true, force: true })
console.log(`Prérendu : ${PAGES.length} pages + 404, robots.txt, sitemap.xml (${SITE_URL})`)
