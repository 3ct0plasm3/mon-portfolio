import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  Palette,
  HeartHandshake,
  ArrowRight,
  MessagesSquare,
  PenTool,
  Code,
  Rocket,
} from 'lucide-react'
import {
  CardCorners,
  CornerFlourish,
  OrnamentalDivider,
  SectionEyebrow,
  SiteHeader,
  SiteFooter,
} from '../components/shared'
import { ProjectCard } from '../components/ProjectCard'
import { Sigil } from '../components/Sigil'
import { homeContent } from '../content/home'
import { useLanguage } from '../i18n/LanguageContext'

const valueIcons = [
  <Palette className="h-7 w-7" />,
  <Sparkles className="h-7 w-7" />,
  <HeartHandshake className="h-7 w-7" />,
]

const processIcons = [
  <MessagesSquare className="h-5 w-5" />,
  <PenTool className="h-5 w-5" />,
  <Code className="h-5 w-5" />,
  <Rocket className="h-5 w-5" />,
]

const heroFlourish =
  'pointer-events-none absolute h-16 w-16 text-goth-rose/25 sm:h-24 sm:w-24'

function Home() {
  const shouldReduceMotion = useReducedMotion()
  const { lang } = useLanguage()
  const t = homeContent[lang]
  return (
    <div className="min-h-screen bg-goth-bg text-neutral-200">
      <SiteHeader />

      <main>
        <section className="relative mx-auto flex max-w-4xl flex-col items-center overflow-hidden px-6 py-20 text-center sm:py-28">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2">
            <Sigil className="h-full w-full text-goth-rose opacity-[0.13]" />
          </div>
          <div className="relative w-full px-6 py-10 sm:px-14 sm:py-14">
            <CornerFlourish aria-hidden="true" className={`${heroFlourish} left-0 top-0`} />
            <CornerFlourish aria-hidden="true" className={`${heroFlourish} right-0 top-0 -scale-x-100`} />
            <CornerFlourish aria-hidden="true" className={`${heroFlourish} bottom-0 left-0 -scale-y-100`} />
            <CornerFlourish aria-hidden="true" className={`${heroFlourish} bottom-0 right-0 -scale-x-100 -scale-y-100`} />
            <SectionEyebrow label={t.heroEyebrow} />
            <h1 className="text-engraved font-display text-3xl leading-tight tracking-wide text-neutral-50 sm:text-5xl">
              {t.heroTitle}{' '}
              <span className="text-goth-rose">{t.heroTitleAccent}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-neutral-400 sm:text-lg">
              {t.heroIntro}
            </p>
          </div>
        </section>

        <OrnamentalDivider />

        <section className="bg-neutral-950/60 px-6 py-20">
          <SectionEyebrow label={t.approachEyebrow} />
          <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
            {t.approachTitle}
          </h2>
          <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-3">
            {t.values.map((value, index) => (
              <div key={value.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-goth-violet/30 bg-goth-violet/15 text-goth-rose shadow-[0_0_16px_-4px_rgba(124,58,237,0.6)]">
                  {valueIcons[index]}
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
          <SectionEyebrow label={t.portfolioEyebrow} />
          <h2 className="text-engraved mb-12 text-center font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">
            {t.portfolioTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {t.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/projets"
              className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
            >
              {t.seeAllProjects}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </section>

        <OrnamentalDivider />

        <section className="mx-auto max-w-6xl px-6 py-20">
          <SectionEyebrow label={t.processEyebrow} />
          <h2 className="text-engraved mb-4 text-center font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">
            {t.processTitle}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base">
            {t.processIntro}
          </p>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.process.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6"
              >
                <CardCorners />
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-display text-3xl text-goth-rose/40">{`0${index + 1}`}</span>
                  <span className="text-goth-rose">{processIcons[index]}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg tracking-wide text-neutral-50">{step.title}</h3>
                <p className="text-sm text-neutral-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <OrnamentalDivider />

        <section id="skills" className="bg-neutral-950/60 px-6 py-20">
          <motion.div className="mx-auto max-w-6xl" initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55 }}>
            <SectionEyebrow label={t.skillsEyebrow} />
            <h2 className="text-engraved mb-4 text-center font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">{t.skillsTitle}</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-neutral-400 sm:text-base">{t.skillsIntro}</p>
            <div className="grid gap-6 lg:grid-cols-3">
              {t.skillCategories.map((category, index) => (
                <motion.article key={category.title} className="relative flex flex-col rounded-2xl border border-goth-violet/25 bg-goth-bg/70 p-6 transition-colors duration-300 hover:border-goth-rose/60" initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : index * 0.1 }} whileHover={shouldReduceMotion ? undefined : { y: -5, scale: 1.01 }}>
                  <CardCorners />
                  <h3 className="font-heading text-xl tracking-wide text-neutral-50">{category.title}</h3>
                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex-1 rounded-xl border border-goth-violet/15 bg-neutral-950/70 px-4 py-3 text-sm leading-relaxed text-neutral-400">
                        <span className="font-semibold text-goth-rose">{skill.name} :</span>{' '}{skill.description}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <OrnamentalDivider />
        <section className="bg-neutral-950/60 px-6 py-20">
          <div className="relative mx-auto max-w-3xl px-12 py-10 text-center">
            <CornerFlourish className="pointer-events-none absolute -top-8 -left-8 h-36 w-36 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -top-8 -right-8 h-36 w-36 -scale-x-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 -scale-y-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />
            <CornerFlourish className="pointer-events-none absolute -bottom-8 -right-8 h-36 w-36 -scale-x-100 -scale-y-100 text-goth-rose drop-shadow-[0_0_6px_rgba(214,162,184,0.35)]" />

            <SectionEyebrow label={t.profileEyebrow} />
            <h2 className="text-engraved mb-10 font-display text-2xl tracking-wide text-neutral-50 sm:text-3xl">
              {t.profileTitle}
            </h2>

            <div className="space-y-8 text-base leading-relaxed text-neutral-400">
              {t.about.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? 'dropcap text-left' : undefined}>
                  {paragraph}
                </p>
              ))}

              <div className="mx-auto flex max-w-xl items-center gap-4 pt-3 text-goth-rose">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-rose/50" />
                <p className="text-engraved font-heading text-sm leading-relaxed tracking-[0.08em] text-goth-rose sm:text-base">
                  {t.taglineStart}<br className="hidden sm:block" /> {t.taglineEnd}
                </p>
                <span className="h-2 w-2 shrink-0 rotate-45 border border-goth-rose/70" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-rose/50" />
              </div>
            </div>
          </div>
        </section>

        <OrnamentalDivider />

        <section className="px-6 py-20 text-center">
          <p className="font-heading text-xl tracking-wide text-neutral-50">{t.ctaTitle}</p>
          <p className="mt-3 text-neutral-400">{t.ctaText}</p>
          <a href="mailto:marilou.ncks@gmail.com" className="mt-6 inline-flex rounded-full border border-goth-violet/60 bg-goth-violet px-6 py-3 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]">{t.ctaButton}</a>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default Home
