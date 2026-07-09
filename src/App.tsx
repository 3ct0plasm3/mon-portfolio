import type { ReactNode, SVGProps } from 'react'
import { Mail, Sparkles, Palette, HeartHandshake, ExternalLink } from 'lucide-react'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function CornerFlourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" {...props}>
      {/* vigne principale, tracé épais et net */}
      <path d="M4 116 C4 66 26 32 58 18" strokeWidth="3" strokeLinecap="round" />
      <path d="M4 92 C4 60 18 36 42 24" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M22 116 C34 98 34 76 16 66 C4 59 4 44 14 32"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* volutes aux extrémités */}
      <path
        d="M58 18 C50 25 38 25 31 15 C27 10 30 4 36 4 C41 4 42 9 38 12"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 32 C7 27 6 17 14 9 C19 5 26 6 26 12 C26 16 21 17 19 14"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* épines courtes le long de la vigne, pour la texture "gravure" */}
      <path d="M10 100 L18 96" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M8 76 L17 74" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M14 50 L22 52" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M30 28 L34 35" strokeWidth="1.25" strokeLinecap="round" />
      {/* ornement final : petit losange gravé */}
      <path
        d="M36 4 L41 9 L36 14 L31 9 Z"
        fill="currentColor"
        stroke="none"
        opacity="0.9"
      />
      <circle cx="19" cy="14" r="2.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function OrnamentalDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-violet/30" />
      <span className="h-2 w-2 rotate-45 border border-goth-rose/50" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-violet/30" />
    </div>
  )
}

function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-goth-rose/50">
      <span className="h-px w-8 bg-goth-rose/30" />
      {label}
      <span className="h-px w-8 bg-goth-rose/30" />
    </div>
  )
}

interface Value {
  icon: ReactNode
  title: string
  description: string
}

interface Project {
  title: string
  description: string
  githubUrl?: string
  isPlaceholder?: boolean
}

const CONTACT_EMAIL = 'marilou.ncks@gmail.com'

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
      "Une plateforme citoyenne pour reconnecter les habitants à la vie locale et aux initiatives écologiques de leur commune.",
    githubUrl: 'https://github.com/3ct0plasm3/MaCommuneVivante',
  },
  {
    title: 'Studio Nail Art',
    description: 'Vitrine élégante pour une artiste nail art indépendante — projet à venir.',
    isPlaceholder: true,
  },
]

function App() {
  return (
    <div className="min-h-screen bg-goth-bg text-neutral-200">
      <header className="sticky top-0 z-50 bg-goth-bg/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="text-engraved font-heading text-lg tracking-[0.15em] text-goth-rose">
            ECTO.DEV
          </span>
          <nav className="flex items-center gap-6">
            <a
              href="#projets"
              className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-300 transition-colors hover:text-goth-rose"
            >
              Projets
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border border-goth-violet/60 bg-goth-violet px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-goth-rose/50 to-transparent" />
      </header>

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
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
                    >
                      <GithubIcon className="h-4 w-4" />
                      Voir sur GitHub
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <span className="inline-flex w-fit items-center rounded-full border border-goth-violet/20 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neutral-500">
                      Bientôt disponible
                    </span>
                  )}
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

      <footer className="border-t border-goth-violet/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="text-neutral-400 transition-colors hover:text-goth-rose"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/3ct0plasm3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-400 transition-colors hover:text-goth-rose"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marilou-nyckees/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 transition-colors hover:text-goth-rose"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
          <p className="font-mono text-xs text-neutral-600">
            © {new Date().getFullYear()} Ecto.dev — Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
