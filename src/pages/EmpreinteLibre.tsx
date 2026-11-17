import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    HeartHandshake,
    Megaphone,
    Users,
} from "lucide-react";
import {
    CardCorners,
    CONTACT_EMAIL,
    OrnamentalDivider,
    SectionEyebrow,
    SiteFooter,
    SiteHeader,
} from "../components/shared";
import { Carousel } from "../components/Carousel";
import { RichText } from "../components/RichText";
import { empreinteLibreContent } from "../content/empreinteLibre";
import { useLanguage } from "../i18n/LanguageContext";

const SITE_URL = "https://lempreintelibre.pages.dev/";

// Déposer une capture dans src/assets/projets/empreinte-libre/ sous le nom d'une clé
// de `captures` (ex. mobile.webp) : elle s'ajoute au carrousel, dans l'ordre des clés.
const captureFiles = import.meta.glob<string>(
    "../assets/projets/empreinte-libre/*.{png,jpg,jpeg,webp,avif}",
    { eager: true, query: "?url", import: "default" },
);

// Dimensions réelles, pour réserver la place des images avant leur chargement.
const captureSizes: Record<string, { width: number; height: number }> = {
    accueil: { width: 1440, height: 900 },
    "le-mur": { width: 1440, height: 900 },
    "causes-initiatives": { width: 1440, height: 900 },
    collaborer: { width: 1440, height: 900 },
};

function findCapture(file: string) {
    return Object.entries(captureFiles).find(([path]) =>
        path.split("/").pop()?.startsWith(`${file}.`),
    )?.[1];
}

const spaceIcons = [
    <Megaphone className="h-5 w-5" />,
    <Users className="h-5 w-5" />,
    <HeartHandshake className="h-5 w-5" />,
];

const sectionTitle =
    "text-engraved mb-10 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl";
const card =
    "relative rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6";

function Paragraphs({ items, className = "" }: { items: string[]; className?: string }) {
    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((text) => (
                <p key={text}>
                    <RichText text={text} />
                </p>
            ))}
        </div>
    );
}

function Section({
    eyebrow,
    title,
    children,
    tinted = false,
    width = "max-w-5xl",
}: {
    eyebrow: string;
    title: string;
    children: ReactNode;
    tinted?: boolean;
    width?: string;
}) {
    return (
        <>
            <OrnamentalDivider />
            <section className={`px-6 py-20 ${tinted ? "bg-neutral-950/60" : ""}`}>
                <div className={`mx-auto ${width}`}>
                    <SectionEyebrow label={eyebrow} />
                    <h2 className={sectionTitle}>{title}</h2>
                    {children}
                </div>
            </section>
        </>
    );
}

function EmpreinteLibre() {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
    const { lang } = useLanguage();
    const t = empreinteLibreContent[lang];
    const slides = Object.entries(t.captures)
        .map(([file, capture]) => ({
            ...capture,
            ...captureSizes[file],
            src: findCapture(file),
        }))
        .filter((slide): slide is typeof slide & { src: string } => Boolean(slide.src));

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
                        <h1 className="text-engraved mb-4 font-display text-3xl tracking-wide text-goth-rose sm:text-5xl">
                            L&apos;Empreinte Libre
                        </h1>
                        <p className="font-heading text-base italic tracking-wide text-neutral-300 sm:text-lg">
                            {t.lead}
                        </p>
                        <p className="mx-auto mt-8 max-w-2xl text-lg font-semibold leading-relaxed text-goth-rose">
                            {t.tagline}
                        </p>
                        <Paragraphs
                            items={t.intro}
                            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400"
                        />
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        <span className="inline-flex items-center rounded-full border border-goth-violet/30 bg-goth-violet/10 px-4 py-1.5 text-center font-mono text-[11px] uppercase tracking-widest text-goth-rose/80">
                            {t.status}
                        </span>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.contactSubject)}`}
                            className="inline-flex items-center gap-2 rounded-full border border-goth-violet/60 bg-goth-violet px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]"
                        >
                            {t.contact}
                        </a>
                        <a
                            href={SITE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-goth-rose transition-colors hover:text-goth-violet"
                        >
                            {t.visitSite}
                            <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </section>

                {slides.length > 0 ? (
                    <section className="mx-auto max-w-5xl px-6 pb-20">
                        <SectionEyebrow label={t.preview.eyebrow} />
                        <h2 className={sectionTitle}>{t.preview.title}</h2>
                        <Carousel slides={slides} labels={t.preview} />
                    </section>
                ) : null}

                <Section eyebrow={t.project.eyebrow} title={t.project.title} tinted width="max-w-3xl">
                    <div className="text-base leading-relaxed text-neutral-400">
                        <Paragraphs items={t.project.intro} />
                        <ul className="my-6 space-y-3">
                            {t.project.dimensions.map((item) => (
                                <li key={item.label} className="flex gap-3">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 border border-goth-rose/70" />
                                    <span>
                                        <strong className="font-semibold text-goth-rose">{item.label}</strong>{" "}
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Paragraphs items={t.project.outro} />
                    </div>
                </Section>

                <Section eyebrow={t.spaces.eyebrow} title={t.spaces.title}>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {t.spaces.items.map((item, index) => (
                            <article key={item.title} className={card}>
                                <CardCorners />
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-display text-3xl text-goth-rose/40">{`0${index + 1}`}</span>
                                    <span className="text-goth-rose">{spaceIcons[index]}</span>
                                </div>
                                <h3 className="mb-1 font-heading text-lg tracking-wide text-neutral-50">{item.title}</h3>
                                <p className="mb-3 text-sm italic text-goth-rose/70">{item.subtitle}</p>
                                <p className="text-sm leading-relaxed text-neutral-400">{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-neutral-500">
                        {t.spaces.outro}
                    </p>
                </Section>

                <Section eyebrow={t.role.eyebrow} title={t.role.title} tinted width="max-w-3xl">
                    <div className="text-base leading-relaxed text-neutral-400">
                        <p>{t.role.intro}</p>
                        <ul className="my-6 grid gap-3 sm:grid-cols-2">
                            {t.role.items.map((item) => (
                                <li key={item} className="flex gap-3 rounded-xl border border-goth-violet/15 bg-neutral-950/70 px-4 py-3 text-sm">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 border border-goth-rose/70" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p>{t.role.outro}</p>
                    </div>
                </Section>

                <Section eyebrow={t.stack.eyebrow} title={t.stack.title}>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {t.stack.items.map((item) => (
                            <article key={item.label} className={`${card} transition-colors duration-300 hover:border-goth-rose/50`}>
                                <CardCorners />
                                <h3 className="font-heading text-lg tracking-wide text-goth-rose">{item.label}</h3>
                                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-neutral-300">{item.tools}</p>
                                <Paragraphs items={item.paragraphs} className="mt-4 text-sm leading-relaxed text-neutral-400" />
                            </article>
                        ))}
                    </div>
                </Section>

                <Section eyebrow={t.challenges.eyebrow} title={t.challenges.title} tinted>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {t.challenges.items.map((item, index) => (
                            <article key={item.title} className={card}>
                                <CardCorners />
                                <span className="font-display text-3xl text-goth-rose/40">{`0${index + 1}`}</span>
                                <h3 className="mb-4 mt-2 font-heading text-base tracking-wide text-neutral-50">{item.title}</h3>
                                <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-goth-rose/60">
                                    {t.challenges.problemLabel}
                                </p>
                                <Paragraphs items={item.problem} className="mb-4 text-sm leading-relaxed text-neutral-400" />
                                <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-goth-rose/60">
                                    {t.challenges.solutionLabel}
                                </p>
                                <Paragraphs items={item.solution} className="text-sm leading-relaxed text-neutral-300" />
                            </article>
                        ))}
                    </div>
                </Section>

                <Section eyebrow={t.art.eyebrow} title={t.art.title} width="max-w-3xl">
                    <div className="text-base leading-relaxed text-neutral-400">
                        <Paragraphs items={t.art.intro} />
                        <ul className="my-6 space-y-3">
                            {t.art.fonts.map((font) => (
                                <li key={font.name} className="flex gap-3">
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 border border-goth-rose/70" />
                                    <span>
                                        <strong className="font-semibold text-goth-rose">{font.name}</strong> {font.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Paragraphs items={t.art.outro} />
                    </div>
                </Section>

                <Section eyebrow={t.result.eyebrow} title={t.result.title} tinted width="max-w-3xl">
                    <Paragraphs items={t.result.paragraphs} className="text-base leading-relaxed text-neutral-400" />
                    <div className="mx-auto flex max-w-2xl items-center gap-4 pt-12 text-goth-rose">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-rose/50" />
                        <p className="text-engraved text-center font-heading text-sm font-semibold leading-relaxed tracking-[0.08em] text-goth-rose sm:text-base">
                            {t.result.closing}
                        </p>
                        <span className="h-2 w-2 shrink-0 rotate-45 border border-goth-rose/70" />
                        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-rose/50" />
                    </div>
                </Section>
            </motion.main>

            <SiteFooter />
        </div>
    );
}

export default EmpreinteLibre;
