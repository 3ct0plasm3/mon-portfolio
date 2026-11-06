import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowLeft,
    MapPin,
    HandCoins,
    TrendingUp,
    ShieldCheck,
    Globe2,
    Network,
} from "lucide-react";
import {
    CardCorners,
    OrnamentalDivider,
    SectionEyebrow,
    SiteHeader,
    SiteFooter,
} from "../components/shared";
import { CONTACT_EMAIL } from "../components/shared";
import { maCommuneVivanteContent } from "../content/maCommuneVivante";
import { useLanguage } from "../i18n/LanguageContext";

const cycleIcons = [
    <MapPin className="h-5 w-5" />,
    <HandCoins className="h-5 w-5" />,
    <TrendingUp className="h-5 w-5" />,
];

const challengeIcons = [
    <ShieldCheck className="h-6 w-6" />,
    <Globe2 className="h-6 w-6" />,
    <Network className="h-6 w-6" />,
];

function MaCommuneVivante() {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const { lang } = useLanguage();
    const t = maCommuneVivanteContent[lang];
    return (
        <div className="min-h-screen bg-goth-bg text-neutral-200">
            <SiteHeader />

            <motion.main
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    ease: "easeOut",
                }}
            >
                <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-goth-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goth-rose focus-visible:ring-offset-4 focus-visible:ring-offset-goth-bg"
                    >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        {t.back}
                    </button>

                    <div className="text-center">
                        <SectionEyebrow label={t.eyebrow} />
                    </div>
                    <h1 className="text-engraved mb-6 text-center font-display text-3xl tracking-wide text-neutral-50 sm:text-5xl">
                        Ma Commune{" "}
                        <span className="text-goth-rose">Vivante</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-center text-base text-neutral-400 sm:text-lg">
                        {t.intro}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <span className="inline-flex items-center rounded-full border border-goth-violet/30 bg-goth-violet/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-goth-rose/80">
                            {t.status}
                        </span>
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=${t.demoSubject}`}
                            className="inline-flex items-center gap-2 rounded-full border border-goth-violet/60 bg-goth-violet px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]"
                        >
                            {t.demo}
                        </a>
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="bg-neutral-950/60 px-6 py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <SectionEyebrow label={t.projectEyebrow} />
                        <h2 className="text-engraved mb-6 font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                            {t.projectTitle}
                        </h2>
                        <p className="text-base leading-relaxed text-neutral-400">
                            {t.projectText}
                        </p>
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="mx-auto max-w-5xl px-6 py-20">
                    <SectionEyebrow label={t.cycleEyebrow} />
                    <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        {t.cycleTitle}
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-3">
                        {t.cycle.map((step, index) => (
                            <div
                                key={step.title}
                                className="relative rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6"
                            >
                                <CardCorners />
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-display text-3xl text-goth-rose/40">
                                        {`0${index + 1}`}
                                    </span>
                                    <span className="text-goth-rose">
                                        {cycleIcons[index]}
                                    </span>
                                </div>
                                <h3 className="mb-1 font-heading text-lg tracking-wide text-neutral-50">
                                    {step.title}
                                </h3>
                                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-goth-rose/50">
                                    {step.subtitle}
                                </p>
                                <p className="text-sm text-neutral-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="mx-auto max-w-5xl px-6 py-20">
                    <SectionEyebrow label={t.stackEyebrow} />
                    <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        {t.stackTitle}
                    </h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {t.stack.map((item) => (
                            <article
                                key={item.label}
                                className="relative rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6 transition-colors duration-300 hover:border-goth-rose/50"
                            >
                                <CardCorners />
                                <h3 className="font-heading text-lg tracking-wide text-goth-rose">
                                    {item.label}
                                </h3>
                                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-neutral-300">
                                    {item.tools}
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                                    {item.detail}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="bg-neutral-950/60 px-6 py-20">
                    <SectionEyebrow label={t.challengesEyebrow} />
                    <h2 className="text-engraved mb-4 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        {t.challengesTitle}
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-neutral-500">
                        {t.challengesIntro}
                    </p>
                    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
                        {t.challenges.map((item, index) => (
                            <div
                                key={item.challenge}
                                className="relative rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6"
                            >
                                <CardCorners />
                                <span className="mb-3 inline-flex text-goth-rose">
                                    {challengeIcons[index]}
                                </span>
                                <h3 className="mb-2 font-heading text-base tracking-wide text-neutral-50">
                                    {t.challengeLabel} {item.challenge}
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    <span className="text-neutral-300">
                                        {t.solutionLabel}{" "}
                                    </span>
                                    {item.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="mx-auto max-w-3xl px-6 py-20 text-center">
                    <SectionEyebrow label={t.methodEyebrow} />
                    <h2 className="text-engraved mb-6 font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        {t.methodTitle}
                    </h2>
                    <p className="text-base leading-relaxed text-neutral-400">
                        {t.methodText}
                    </p>

                    <div className="mx-auto flex max-w-xl items-center gap-4 pt-10 text-goth-rose">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-rose/50" />
                        <p className="text-engraved font-heading text-sm leading-relaxed tracking-[0.08em] text-goth-rose sm:text-base text-center">
                            {t.visionStart}{" "}
                            <br className="hidden sm:block" /> {t.visionEnd}
                        </p>
                        <span className="h-2 w-2 shrink-0 rotate-45 border border-goth-rose/70" />
                        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-rose/50" />
                    </div>
                </section>
            </motion.main>

            <SiteFooter />
        </div>
    );
}

export default MaCommuneVivante;
