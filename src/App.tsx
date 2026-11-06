import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Home from './pages/Home'
import MaCommuneVivante from './pages/MaCommuneVivante'
import Projects from './pages/Projects'
import Violette from './pages/Violette'
import NotFound from './pages/NotFound'
import { LanguageSwitcher } from './components/shared'
import { ScrollProgress } from './components/ScrollProgress'
import { applySeo } from './seo'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

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
        <motion.div key={location.pathname} initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }} transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/projets/ma-commune-vivante" element={<MaCommuneVivante />} />
            <Route path="/projets/violette" element={<Violette />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
