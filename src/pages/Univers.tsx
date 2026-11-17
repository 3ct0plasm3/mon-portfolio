import { motion, useReducedMotion } from "framer-motion";
import { Feather, MessagesSquare, Search, Sparkles } from "lucide-react";
import {
    CardCorners,
    CONTACT_EMAIL,
    CornerFlourish,
    OrnamentalDivider,
    SectionEyebrow,
    SiteFooter,
    SiteHeader,
} from "../components/shared";
import { RichText } from "../components/RichText";
import { universContent } from "../content/univers";
import { useLanguage } from "../i18n/LanguageContext";

type Block = {
    type: "title" | "lead" | "heading" | "paragraph";
    text: string;
};

// Lit le Markdown simple de content/univers.ts (voir la légende en haut du fichier).
function parse(markdown: string): Block[] {
    return markdown
        .split(/\r?\n\s*\r?\n/)
        .map((block) => block.trim())
        .filter(Boolean)
        .map((block): Block => {
            if (block.startsWith("# ")) return { type: "title", text: block.slice(2) };
            if (block.startsWith("### ")) return { type: "heading", text: block.slice(4) };
            if (/^\*[^*][\s\S]*[^*]\*$/.test(block) && !block.slice(1, -1).includes("*")) {
                return { type: "lead", text: block.slice(1, -1) };
            }
            return { type: "paragraph", text: block };
        });
}

const stepIcons = [
    <MessagesSquare className="h-5 w-5" />,
    <Search className="h-5 w-5" />,
    <Sparkles className="h-5 w-5" />,
];

const flourish =
    "pointer-events-none absolute h-14 w-14 text-goth-rose/30 sm:h-20 sm:w-20";

function Univers() {
    const shouldReduceMotion = useReducedMotion();
    const { lang } = useLanguage();
    const t = universContent[lang];

    const blocks = parse(t.text);
    const title = blocks.find((block) => block.type === "title")?.text;
    const body = blocks.filter((block) => block.type !== "title");
    // Le premier chapeau ouvre la page, le dernier la referme.
    const firstLead = body[0]?.type === "lead" ? body[0] : undefined;
    const lastBlock = body[body.length - 1];
    const closing = lastBlock?.type === "lead" && lastBlock !== firstLead ? lastBlock : undefined;
    const content = body.filter((block) => block !== firstLead && block !== closing);
    const firstParagraph = content.find((block) => block.type === "paragraph");

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
                <section className="mx-auto max-w-3xl px-6 pb-10 pt-20 text-center sm:pt-28">
                    <div className="relative px-4 py-10 sm:px-14 sm:py-14">
                        <CornerFlourish className={`${flourish} left-0 top-0`} />
                        <CornerFlourish className={`${flourish} right-0 top-0 -scale-x-100`} />
                        <CornerFlourish className={`${flourish} bottom-0 left-0 -scale-y-100`} />
                        <CornerFlourish className={`${flourish} bottom-0 right-0 -scale-x-100 -scale-y-100`} />
                        <SectionEyebrow label={t.eyebrow} />
                        <h1 className="text-engraved font-display text-3xl leading-tight tracking-wide text-goth-rose sm:text-5xl">
                            {title}
                        </h1>
                        {firstLead ? (
                            <p className="mt-6 font-heading text-base italic tracking-wide text-neutral-300 sm:text-lg">
                                <RichText text={firstLead.text} />
                            </p>
                        ) : null}
                    </div>
                </section>

                <article className="mx-auto max-w-2xl px-6 pb-20">
                    {content.map((block, index) =>
                        block.type === "heading" ? (
                            <div key={index} className="pb-6 pt-16">
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-violet/40" />
                                    <span className="h-2 w-2 rotate-45 border border-goth-rose/50" />
                                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-violet/40" />
                                </div>
                                <h2 className="text-engraved text-center font-heading text-xl tracking-wide text-neutral-50 sm:text-2xl">
                                    <RichText text={block.text} />
                                </h2>
                            </div>
                        ) : (
                            <p
                                key={index}
                                className={`mb-6 text-base leading-loose text-neutral-300 sm:text-lg ${
                                    block === firstParagraph ? "dropcap" : ""
                                } ${block.type === "lead" ? "text-center italic" : ""}`}
                            >
                                <RichText text={block.text} />
                            </p>
                        ),
                    )}

                    {closing ? (
                        <div className="mx-auto flex max-w-xl items-center gap-4 pt-8 text-goth-rose">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-rose/50" />
                            <p className="text-engraved text-center font-heading text-sm italic leading-relaxed tracking-[0.08em] text-goth-rose sm:text-base">
                                <RichText text={closing.text} />
                            </p>
                            <span className="h-2 w-2 shrink-0 rotate-45 border border-goth-rose/70" />
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-rose/50" />
                        </div>
                    ) : null}

                    <aside className="relative mx-auto mt-20 max-w-xl rounded-2xl border border-goth-violet/30 bg-goth-violet/[0.06] px-6 py-8 text-center sm:px-10">
                        <CardCorners />
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-goth-rose/50">
                            {t.noteEyebrow}
                        </p>
                        <h2 className="mb-4 font-heading text-lg tracking-wide text-goth-rose">
                            {t.noteTitle}
                        </h2>
                        <p className="text-sm italic leading-relaxed text-neutral-400 sm:text-base">
                            {t.noteText}
                        </p>
                    </aside>

                    <div className="mt-20 text-center">
                        <SectionEyebrow label={t.writingsEyebrow} />
                        <p className="inline-flex items-center gap-2 text-sm italic text-neutral-500">
                            <Feather className="h-4 w-4 text-goth-rose/60" />
                            {t.writingsText}
                        </p>
                    </div>
                </article>

                <OrnamentalDivider />

                <section id="creer" className="scroll-mt-24 px-6 py-20">
                    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-goth-rose/40 bg-gradient-to-br from-goth-violet/20 via-neutral-950/90 to-goth-rose/10 px-6 py-14 shadow-[0_0_50px_-12px_rgba(124,58,237,0.7)] sm:px-12">
                        <CardCorners />
                        <h2 className="text-engraved text-center font-display text-2xl tracking-wide text-neutral-50 sm:text-4xl">
                            {t.createTitle}
                        </h2>
                        <p className="mt-4 text-center font-heading text-base italic tracking-wide text-neutral-300 sm:text-lg">
                            {t.createLead}
                        </p>

                        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
                            {t.steps.map((step, index) => (
                                <li
                                    key={step.title}
                                    className="relative rounded-2xl border border-goth-violet/25 bg-goth-bg/80 p-6"
                                >
                                    <div className="mb-3 flex items-center justify-between">
                                        <span className="font-display text-3xl text-goth-rose/40">
                                            {`0${index + 1}`}
                                        </span>
                                        <span className="text-goth-rose">
                                            {stepIcons[index]}
                                        </span>
                                    </div>
                                    <h3 className="mb-2 font-heading text-base tracking-wide text-neutral-50">
                                        {step.title}
                                    </h3>
                                    <span className="mb-3 inline-flex rounded-full border border-goth-rose/40 bg-goth-rose/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-goth-rose">
                                        {step.badge}
                                    </span>
                                    <p className="text-sm text-neutral-400">
                                        {step.text}
                                    </p>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-12 text-center">
                            <p className="mx-auto mb-8 max-w-xl font-heading text-base italic leading-relaxed tracking-wide text-goth-rose sm:text-lg">
                                {t.createInvite}
                            </p>
                            <a
                                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.createSubject)}`}
                                className="inline-flex rounded-full border border-goth-violet/60 bg-goth-violet px-6 py-3 text-sm font-medium text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.55)] transition-shadow hover:shadow-[0_0_30px_2px_rgba(124,58,237,0.9)]"
                            >
                                {t.createButton}
                            </a>
                            <p className="mt-4 text-sm italic text-neutral-500">
                                {t.createNote}
                            </p>
                        </div>
                    </div>
                </section>
            </motion.main>

            <SiteFooter />
        </div>
    );
}

export default Univers;
