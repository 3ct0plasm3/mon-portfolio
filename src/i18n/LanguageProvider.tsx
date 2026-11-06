import { useEffect, useMemo, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import type { Lang } from './LanguageContext'

const STORAGE_KEY = 'lang'

let currentLang: Lang | null = null
const listeners = new Set<() => void>()

function readLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // Stockage indisponible : on se rabat sur la langue du navigateur.
  }
  return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

function getLang() {
  currentLang ??= readLang()
  return currentLang
}

// Le HTML prérendu est en français : la langue choisie s'applique juste après l'hydratation.
function getServerLang(): Lang {
  return 'fr'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

function setLang(next: Lang) {
  currentLang = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Le choix reste valable pour la page en cours.
  }
  listeners.forEach((listener) => listener())
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getLang, getServerLang)
  const value = useMemo(() => ({ lang, setLang }), [lang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
