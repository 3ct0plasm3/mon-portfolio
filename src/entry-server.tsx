/* eslint-disable react-refresh/only-export-components -- point d'entrée du prérendu, sans composant à recharger */
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { LanguageProvider } from './i18n/LanguageProvider'

export { PAGES, SITE_URL, headFor } from './seo'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <LanguageProvider>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </LanguageProvider>
    </StrictMode>,
  )
}
