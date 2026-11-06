import { createContext, useContext } from 'react'

export type Lang = 'fr' | 'en'

export const LANGUAGES: { code: Lang; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
]

export const LanguageContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
}>({ lang: 'fr', setLang: () => {} })

export function useLanguage() {
  return useContext(LanguageContext)
}
