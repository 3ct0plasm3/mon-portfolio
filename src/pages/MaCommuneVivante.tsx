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
    OrnamentalDivider,
    SectionEyebrow,
    SiteHeader,
    SiteFooter,
} from "../components/shared";
import { CONTACT_EMAIL } from "../components/shared";

const cycle = [
    {
        number: "01",
        title: "Observer",
        subtitle: "Le Signalement",
        icon: <MapPin className="h-5 w-5" />,
        description:
            "Une cartographie interactive centralise les signalements environnementaux, projets citoyens et institutionnels, et déclenche une cascade d'alerte dédiée pour les urgences faune.",
    },
    {
        number: "02",
        title: "Coordonner",
        subtitle: "La Logistique",
        icon: <HandCoins className="h-5 w-5" />,
        description:
            "Un système de gestion des ressources et des compétences (bourse aux ressources) permet d'allouer les moyens nécessaires à chaque projet sans médiation complexe.",
    },
    {
        number: "03",
        title: "Transformer",
        subtitle: "L'Impact",
        icon: <TrendingUp className="h-5 w-5" />,
        description:
            "Chaque action est suivie jusqu'à son terme, alimentant automatiquement les indicateurs de résilience du territoire (Score du Vivant) pour aider à la décision publique.",
    },
];

const challenges = [
    {
        icon: <ShieldCheck className="h-6 w-6" />,
        challenge: "Souveraineté des données",
        solution:
            "Architecture multi-tenant native avec isolation stricte des données par commune (PostgreSQL + Row Level Security).",
    },
    {
        icon: <Globe2 className="h-6 w-6" />,
        challenge: "Analyse territoriale",
        solution:
            "Utilisation de PostGIS pour la gestion cartographique et l'analyse spatiale des enjeux du territoire.",
    },
    {
        icon: <Network className="h-6 w-6" />,
        challenge: "Aide à la décision",
        solution:
            "Un moteur de calcul dédié convertit signalements et actions en indicateurs de résilience territoriale (Score du Vivant), pour objectiver la décision publique.",
    },
];

const stack = [
    {
        label: "Frontend",
        tools: "Next.js, TypeScript, Tailwind CSS",
        detail: "Une interface accessible, typée et maintenable.",
    },
    {
        label: "Backend",
        tools: "Supabase, PostgreSQL, PostGIS",
        detail: "Des données territoriales structurées et géolocalisées.",
    },
    {
        label: "Architecture",
        tools: "Row Level Security, multi-tenant",
        detail: "Une isolation stricte des données par commune.",
    },
    {
        label: "Qualité",
        tools: "Git, validation et auditabilité",
        detail: "Un développement traçable, pérenne et réversible.",
    },
];

function MaCommuneVivante() {
    const navigate = useNavigate();
    const shouldReduceMotion = useReducedMotion();
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
                        Retour
                    </button>

                    <div className="text-center">
                        <SectionEyebrow label="§ Projet — Infrastructure territoriale" />
                    </div>
                    <h1 className="text-engraved mb-6 text-center font-display text-3xl tracking-wide text-neutral-50 sm:text-5xl">
                        Ma Commune{" "}
                        <span className="text-goth-rose">Vivante</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-center text-base text-neutral-400 sm:text-lg">
                        Un écosystème numérique souverain conçu pour reconnecter
                        les citoyens, les associations et les institutions
                        autour de la gestion durable du territoire.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <span className="inline-flex items-center rounded-full border border-goth-violet/30 bg-goth-violet/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-goth-rose/80">
                            Validation partenariale — 2026
                        </span>
                        <a
                            href={`mailto:${CONTACT_EMAIL}?subject=Démonstration Ma Commune Vivante`}
                            className="inline-flex items-center gap-2 rounded-full border border-goth-violet/60 bg-goth-violet px-5 py-2 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]"
                        >
                            Demander une démonstration
                        </a>
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="bg-neutral-950/60 px-6 py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <SectionEyebrow label="§ Le Projet" />
                        <h2 className="text-engraved mb-6 font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                            Une infrastructure, bien plus qu'une plateforme
                        </h2>
                        <p className="text-base leading-relaxed text-neutral-400">
                            Ma Commune Vivante dépasse la simple plateforme de
                            signalement. C'est une infrastructure de
                            coordination qui transforme l'engagement individuel
                            en action publique structurée. Qu'il s'agisse de
                            restaurer la biodiversité, de gérer les urgences
                            faune ou de planifier la végétalisation, l'outil
                            offre un espace neutre où chaque acteur — citoyen,
                            association ou commune — peut contribuer à la
                            résilience locale sur la base de données factuelles
                            et vérifiées.
                        </p>
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="mx-auto max-w-5xl px-6 py-20">
                    <SectionEyebrow label="§ Cycle opérationnel" />
                    <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        Observer · Coordonner · Transformer
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-3">
                        {cycle.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6"
                            >
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="font-display text-3xl text-goth-rose/40">
                                        {step.number}
                                    </span>
                                    <span className="text-goth-rose">
                                        {step.icon}
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
                    <SectionEyebrow label="§ Stack Technique" />
                    <h2 className="text-engraved mb-12 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        Une base conçue pour durer
                    </h2>
                    <div className="grid gap-5 sm:grid-cols-2">
                        {stack.map((item) => (
                            <article
                                key={item.label}
                                className="rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6 transition-colors duration-300 hover:border-goth-rose/50"
                            >
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
                    <SectionEyebrow label="§ Enjeux techniques résolus" />
                    <h2 className="text-engraved mb-4 text-center font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        Défis &amp; Solutions
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-center text-sm text-neutral-500">
                        Next.js (App Router), TypeScript, Supabase (PostgreSQL +
                        PostGIS) — mis au service de problèmes concrets de
                        gouvernance territoriale.
                    </p>
                    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-3">
                        {challenges.map((item) => (
                            <div
                                key={item.challenge}
                                className="rounded-2xl border border-goth-violet/20 bg-neutral-950/80 p-6"
                            >
                                <span className="mb-3 inline-flex text-goth-rose">
                                    {item.icon}
                                </span>
                                <h3 className="mb-2 font-heading text-base tracking-wide text-neutral-50">
                                    Défi : {item.challenge}
                                </h3>
                                <p className="text-sm text-neutral-400">
                                    <span className="text-neutral-300">
                                        Solution :{" "}
                                    </span>
                                    {item.solution}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <OrnamentalDivider />

                <section className="mx-auto max-w-3xl px-6 py-20 text-center">
                    <SectionEyebrow label="§ Méthodologie & Transparence" />
                    <h2 className="text-engraved mb-6 font-heading text-2xl tracking-wide text-neutral-50 sm:text-3xl">
                        Une rigueur pensée pour l'audit
                    </h2>
                    <p className="text-base leading-relaxed text-neutral-400">
                        Pour préserver la souveraineté des données territoriales
                        et la sécurité de l'architecture, le code source n'est
                        plus en accès libre durant la phase de validation
                        partenariale. Le développement suit un versioning
                        rigoureux et une architecture conçue pour être auditée.
                        Une démonstration technique peut être organisée sur
                        demande pour les acteurs institutionnels ou partenaires
                        potentiels.
                    </p>

                    <div className="mx-auto flex max-w-xl items-center gap-4 pt-10 text-goth-rose">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-rose/50" />
                        <p className="text-engraved font-heading text-sm leading-relaxed tracking-[0.08em] text-goth-rose sm:text-base text-center">
                            Vision à terme : une infrastructure évolutive,
                            pensée pour intégrer nativement les futurs outils de
                            mesure de la résilience climatique,{" "}
                            <br className="hidden sm:block" /> tout en
                            garantissant la pérennité et la réversibilité des
                            données territoriales.
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
