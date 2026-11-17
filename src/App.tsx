import { useEffect } from 'react'
import type { ComponentType } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Home from './pages/Home'
import MaCommuneVivante from './pages/MaCommuneVivante'
import Projects from './pages/Projects'
import Violette from './pages/Violette'
import EmpreinteLibre from './pages/EmpreinteLibre'
import Univers from './pages/Univers'
import LegalNotice from './pages/LegalNotice'
import NotFound from './pages/NotFound'
import { LanguageSwitcher } from './components/shared'
import { ScrollProgress } from './components/ScrollProgress'
import { LANGUAGES, localizePath, stripLang } from './i18n/LanguageContext'
import { applySeo } from './seo'

// Chaque page existe en français (/projets) et en anglais (/en/projets).
const ROUTES: [string, ComponentType][] = [
  ['/', Home],
  ['/projets', Projects],
  ['/projets/ma-commune-vivante', MaCommuneVivante],
  ['/projets/violette', Violette],
  ['/projets/l-empreinte-libre', EmpreinteLibre],
  ['/univers', Univers],
  ['/mentions-legales', LegalNotice],
]

function ScrollToTop() {
  const { pathname, hash, state } = useLocation()
  // Un changement de langue garde la position de lecture.
  const keepScroll = (state as { keepScroll?: boolean } | null)?.keepScroll

  useEffect(() => {
    if (keepScroll) return
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // La nouvelle page n'apparaît qu'après l'animation de sortie : on attend l'ancre.
    let frame = 0
    let tries = 0
    const scrollToAnchor = () => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) target.scrollIntoView()
      else if (tries++ < 60) frame = requestAnimationFrame(scrollToAnchor)
    }
    scrollToAnchor()
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash, keepScroll])

  return null
}

function App() {
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    applySeo(location.pathname)
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />
      <LanguageSwitcher />
      <ScrollProgress />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={stripLang(location.pathname)} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }} transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}>
          <Routes location={location}>
            {LANGUAGES.flatMap(({ code }) =>
              ROUTES.map(([path, Page]) => (
                <Route key={`${code}${path}`} path={localizePath(path, code)} element={<Page />} />
              )),
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
