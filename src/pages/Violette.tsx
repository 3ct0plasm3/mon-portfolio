import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowLeft,
    BadgeCheck,
    ExternalLink,
    Feather,
    PackageCheck,
    PenLine,
    Images,
    ShoppingBag,
} from "lucide-react";
import {
    CardCorners,
    OrnamentalDivider,
    SectionEyebrow,
    SiteHeader,
    SiteFooter,
} from "../components/shared";
import { CONTACT_EMAIL } from "../components/shared";
import { GothicArch } from "../components/GothicArch";
import { violetteContent } from "../content/violette";
import { useLanguage } from "../i18n/LanguageContext";

// Le site reste privé tant qu'il n'est pas validé : son adresse n'est pas dans le code.
// Définir VITE_VIOLETTE_SITE_URL sur Vercel ajoute le lien « Voir le site ».
const SITE_URL: string | undefined = import.meta.env.VITE_VIOLETTE_SITE_URL;

// Déposer une capture dans src/assets/projets/violette/ sous le nom d'une clé de
// `captures` (ex. boutique.webp) : elle apparaît dans la section Aperçu, qui reste
// masquée tant qu'aucun fichier n'est présent.
const captureFiles = import.meta.glob<string>(
    "../assets/projets/violette/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, query: "?url", import: "default" },
);

// Dimensions réelles, pour réserver la place des images avant leur chargement.
const captureSizes: Record<string, { width: number; height: number }> = {
    "accueil-desktop": { width: 1208, height: 879 },
    boutique: { width: 577, height: 768 },
    "fiche-oeuvre": { width: 577, height: 768 },
    ecrits: { width: 1227, height: 879 },
};

function findCapture(file: string) {
    return Object.entries(captureFiles).find(([path]) =>
        path.split("/").pop()?.startsWith(`${file}.`),
    )?.[1];
}

const cycleIcons = [
    <PenLine className="h-5 w-5" />,
    <Images className="h-5 w-5" />,
    <ShoppingBag className="h-5 w-5" />,
];

const challengeIcons = [
    <BadgeCheck className="h-6 w-6" />,
    <PackageCheck className="h-6 w-6" />,
    <Feather className="h-6 w-6" />,
];

function Violette() {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const { lang } = useLanguage();
    const t = violetteContent[lang];
    const captures = Object.entries(t.captures)
        .map(([file, capture]) => ({
            ...capture,
            file,
            src: findCapture(file),
        }))
        .filter((capture) => capture.src);

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
                    <h1 className="text-engraved mb-6 text-center font-display text-3xl tracking-wide text-goth-rose sm:text-5xl">
                        Violette
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
                        {SITE_URL ? (
                            <a
                                href={SITE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
                            >
                                {t.visitSite}
                                <ExternalLink className="h-3.5 w-3.5" />
                            </a>
                        ) : null}
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

                {captures.length > 0 ? (
                    <>
                        <section className="mx-auto max-w-5xl px-6 py-20">
                            <SectionEyebrow label={t.previewEyebrow} />
                            <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                                {t.previewTitle}
                            </h2>
                            <div className="gap-6 sm:columns-2">
                                {captures.map((capture) => (
                                    <figure
                                        key={capture.file}
                                        className="mb-6 break-inside-avoid"
                                    >
                                        <GothicArch>
                                            <img
                                                src={capture.src}
                                                alt={capture.alt}
                                                {...captureSizes[capture.file]}
                                                loading="lazy"
                                                decoding="async"
                                                className="h-auto w-full"
                                            />
                                        </GothicArch>
                                        <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-widest text-neutral-500">
                                            {capture.label}
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </section>

                        <OrnamentalDivider />
                    </>
                ) : null}

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
                            {t.closing}
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

export default Violette;
