import { useCallback, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { LanguageContext, langFromPath, localizePath, stripLang } from './LanguageContext'
import type { Lang } from './LanguageContext'

// La langue vient de l'adresse : le HTML prérendu et la page affichée sont donc
// toujours dans la même langue. Changer de langue, c'est changer d'adresse.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const lang = langFromPath(pathname)

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return
      navigate(`${localizePath(stripLang(pathname), next)}${hash}`, {
        state: { keepScroll: true },
      })
    },
    [lang, pathname, hash, navigate],
  )

  const value = useMemo(() => ({ lang, setLang }), [lang, setLang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
