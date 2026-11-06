import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { CardCorners, GithubIcon } from './shared'
import { homeContent } from '../content/home'
import type { Project } from '../content/home'
import { useLanguage } from '../i18n/LanguageContext'

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage()
  const t = homeContent[lang]
  return (
    <div className="group relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-goth-rose/60 via-goth-violet/60 to-goth-rose/40 opacity-0 blur-[3px] transition-opacity duration-500 group-hover:opacity-100" />
      <div
        className={`relative flex h-full flex-col rounded-2xl border border-goth-violet/25 bg-neutral-950/80 p-6 ${
          project.isPlaceholder ? 'opacity-60' : ''
        }`}
      >
        <CardCorners />
        <h3 className="mb-2 font-heading text-lg tracking-wide text-neutral-50">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-neutral-400">{project.description}</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.detailPath ? (
            <Link
              to={project.detailPath}
              className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
            >
              {t.learnMore}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-goth-rose"
            >
              <GithubIcon className="h-4 w-4" />
              {t.sourceCode}
              <ExternalLink className="h-3 w-3" />
            </a>
          ) : null}
          {!project.detailPath && !project.githubUrl ? (
            <span className="inline-flex w-fit items-center rounded-full border border-goth-violet/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-500">
              {t.comingSoon}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  )
}
