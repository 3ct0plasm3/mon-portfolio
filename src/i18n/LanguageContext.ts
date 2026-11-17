import { createContext, useContext } from 'react'

export type Lang = 'fr' | 'en'

export const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
]

// Le français est à la racine (/projets), l'anglais sous /en (/en/projets) :
// chaque langue a sa propre adresse, que les moteurs de recherche peuvent indexer.
const EN_PREFIX = '/en'

export function langFromPath(pathname: string): Lang {
  return pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`) ? 'en' : 'fr'
}

// Adresse sans préfixe de langue : /en/projets → /projets, /en → /
export function stripLang(pathname: string) {
  if (langFromPath(pathname) === 'fr') return pathname
  return pathname.slice(EN_PREFIX.length) || '/'
}

// Adresse d'une page dans une langue : /projets → /en/projets
export function localizePath(path: string, lang: Lang) {
  if (lang === 'fr') return path
  return path === '/' ? EN_PREFIX : `${EN_PREFIX}${path}`
}

export const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({ lang: 'fr', setLang: () => {} })

export function useLanguage() {
  return useContext(LanguageContext)
}

// Donne l'adresse d'une page dans la langue en cours.
export function useLocalePath() {
  const { lang } = useLanguage()
  return (path: string) => localizePath(path, lang)
}
