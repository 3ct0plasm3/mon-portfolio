import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Palette, HeartHandshake, ExternalLink, ArrowRight } from 'lucide-react'
import {
  GithubIcon,
  CornerFlourish,
  OrnamentalDivider,
  SectionEyebrow,
  SiteHeader,
  SiteFooter,
} from '../components/shared'

interface Value {
  icon: ReactNode
  title: string
  description: string
}

interface Project {
  title: string
  description: string
  githubUrl?: string
  detailPath?: string
  isPlaceholder?: boolean
}

const values: Value[] = [
  {
    icon: <Palette className="h-7 w-7" />,
    title: 'Design & Identité',
    description:
      "Mon approche privilégie le sur-mesure pour garantir une interface unique. Si je peux intégrer des templates selon vos besoins, je préfère m'immerger dans votre univers pour traduire fidèlement votre identité visuelle.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: 'Code Éthique & Performant',
    description:
      "Architecture technique complète (Front & Back), code propre et sécurisé. Je construis des outils robustes, optimisés pour la performance et pensés pour durer.",
  },
  {
    icon: <HeartHandshake className="h-7 w-7" />,
    title: 'Collaboration & Valeurs',
    description:
      "Mon travail s'oriente naturellement vers les projets alignés avec mes valeurs (associations, artistes, acteurs engagés). Cette sensibilité ne me limite pas : j'aime relever les défis techniques, quel que soit votre secteur.",
  },
]

const projects: Project[] = [
  {
    title: 'Ma Commune Vivante',
    description:
      "Une infrastructure territoriale collaborative pour reconnecter citoyens, associations et communes autour de la gestion durable du vivant.",
    detailPath: '/projets/ma-commune-vivante',
  },
  {
    title: 'Studio Nail Art',
    description: 'Vitrine élégante pour une artiste nail art indépendante — projet à venir.',
    isPlaceholder: true,
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-goth-bg text-neutral-200">
      <SiteHeader />

      <main>
        <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
          <h1 className="text-engraved font-display text-3xl leading-tight tracking-wide text-neutral-50 sm:text-5xl">
            Développeuse Web Fullstack — Solutions numériques{' '}
            <span className="text-goth-rose">sur-mesure</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg">
            Je conçois des plateformes robustes, fluides et pensées pour durer. De la
            structure technique au design final, j'allie exigence et créativité pour
            donner vie à tout type de projet, avec une affinité particulière pour les
            initiatives engagées et artistiques.
          </p>
        </section>

        <OrnamentalDivider />

        <section className="bg-neutral-950/60 px-6 py-20">
          <SectionEyebrow label="§ 01 — Approche" />
          <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
            Mes Piliers
          </h2>
          <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-goth-violet/30 bg-goth-violet/15 text-goth-rose shadow-[0_0_16px_-4px_rgba(124,58,237,0.6)]">
                  {value.icon}
                </div>
                <h3 className="mb-2 font-heading text-lg tracking-wide text-neutral-50">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <OrnamentalDivider />

        <section id="projets" className="mx-auto max-w-6xl px-6 py-20">
          <SectionEyebrow label="§ 02 — Portfolio" />
          <h2 className="text-engraved mb-12 text-center font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">
            Projets
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className="group relative">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-goth-rose/60 via-goth-violet/60 to-goth-rose/40 opacity-0 blur-[3px] transition-opacity duration-500 group-hover:opacity-100" />
                <div
                  className={`relative flex h-full flex-col rounded-2xl border border-goth-violet/25 bg-neutral-950/80 p-6 ${
                    project.isPlaceholder ? 'opacity-60' : ''
                  }`}
                >
                  <h3 className="mb-2 font-heading text-lg tracking-wide text-neutral-50">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.detailPath ? (
                      <Link
                        to={project.detailPath}
                        className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
                      >
                        En savoir plus
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
                        Code source
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                    {!project.detailPath && !project.githubUrl ? (
                      <span className="inline-flex w-fit items-center rounded-full border border-goth-violet/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-500">
                        Bientôt disponible
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <OrnamentalDivider />

        <section className="bg-neutral-950/60 px-6 py-20">
          <div className="relative mx-auto max-w-3xl px-12 py-10 text-center">
            <CornerFlourish className="pointer-events-none absolute -top-8 -left-8 h-36 w-36 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 -scale-x-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 -scale-y-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 -scale-x-100 -scale-y-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />

            <SectionEyebrow label="§ 03 — Profil" />
            <h2 className="text-engraved mb-10 font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">
              À propos
            </h2>

            <div className="space-y-8 text-base leading-relaxed text-neutral-400">
              <p>
                Développeuse web fullstack, je conçois des plateformes numériques où le
                design rencontre la rigueur technique. Mon approche repose sur une
                connexion directe avec votre univers : mon rôle est de traduire votre
                identité dans une interface sécurisée, performante et pensée pour durer.
              </p>

              <p>
                Ce qui m'anime, c'est de bâtir des outils qui ont un impact positif. Si
                j'aime particulièrement collaborer avec des artistes, des associations et
                des structures engagées dans la transition écologique, ma curiosité
                technique me pousse à explorer tous les horizons.
              </p>

              <p>
                Vous cherchez une partenaire capable d'allier une esthétique forte à une
                architecture web robuste&nbsp;? Je suis là pour relever votre défi avec la
                même exigence technique, quel que soit votre domaine.
              </p>

              <p className="text-lg font-medium text-goth-violet">
                Ensemble, donnons vie à vos idées, un pixel à la fois.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default Home
