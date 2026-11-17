import { SectionEyebrow, SiteFooter, SiteHeader } from '../components/shared'
import { legalContent } from '../content/legal'
import { useLanguage } from '../i18n/LanguageContext'

function LegalNotice() {
  const { lang } = useLanguage()
  const t = legalContent[lang]
  return (
    <div className="flex min-h-screen flex-col bg-goth-bg text-neutral-200">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-20 sm:py-28">
        <SectionEyebrow label={t.eyebrow} />
        <h1 className="text-engraved mb-4 text-center font-display text-3xl tracking-wide text-neutral-50 sm:text-4xl">
          {t.title}
        </h1>
        <p className="mb-14 text-center font-mono text-xs text-neutral-500">{t.updated}</p>
        <div className="space-y-12">
          {t.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 font-heading text-lg tracking-wide text-goth-rose">
                {section.title}
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default LegalNotice
