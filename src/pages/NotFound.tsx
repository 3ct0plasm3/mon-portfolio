import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { SectionEyebrow, SiteFooter, SiteHeader } from '../components/shared'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  fr: {
    title: "Cette page s'est égarée dans les archives",
    back: "Retour à l'accueil",
  },
  en: {
    title: 'This page has gone astray in the archives',
    back: 'Back to home',
  },
}

function NotFound() {
  const { lang } = useLanguage()
  const t = copy[lang]
  return (
    <div className="flex min-h-screen flex-col bg-goth-bg text-neutral-200">
      <SiteHeader />
      <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 py-28 text-center">
        <SectionEyebrow label="§ 404" />
        <h1 className="text-engraved mb-8 font-display text-3xl leading-tight tracking-wide text-neutral-50 sm:text-5xl">
          {t.title}
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t.back}
        </Link>
      </main>
      <SiteFooter />
    </div>
  )
}

export default NotFound
