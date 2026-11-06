import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageProvider'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
)

// En production, le HTML est prérendu : React s'y raccorde au lieu de le recréer.
if (container.firstElementChild) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
