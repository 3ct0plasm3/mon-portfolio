import { SectionEyebrow, SiteFooter, SiteHeader } from '../components/shared'
import { ProjectCard } from '../components/ProjectCard'
import { homeContent } from '../content/home'
import { useLanguage } from '../i18n/LanguageContext'

function Projects() {
  const { lang } = useLanguage()
  const t = homeContent[lang]
  return (
    <div className="flex min-h-screen flex-col bg-goth-bg text-neutral-200">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-20 sm:py-28">
        <SectionEyebrow label={t.allProjectsEyebrow} />
        <h1 className="text-engraved mb-12 text-center font-display text-3xl tracking-wide text-neutral-50 sm:text-5xl">
          {t.allProjectsTitle}
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.allProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default Projects
