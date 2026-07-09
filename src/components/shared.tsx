import type { SVGProps } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

export const CONTACT_EMAIL = 'marilou.ncks@gmail.com'

export function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.53-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function CornerFlourish(props: SVGProps<SVGSVGElement>) {
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

export function OrnamentalDivider() {
  return (
    <div className="mx-auto flex max-w-6xl items-center gap-4 px-6">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-goth-violet/30" />
      <span className="h-2 w-2 rotate-45 border border-goth-rose/50" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-goth-violet/30" />
    </div>
  )
}

export function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="mb-3 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.35em] text-goth-rose/50">
      <span className="h-px w-8 bg-goth-rose/30" />
      {label}
      <span className="h-px w-8 bg-goth-rose/30" />
    </div>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-goth-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-engraved font-heading text-lg tracking-[0.15em] text-goth-rose"
        >
          ECTO.DEV
        </Link>
        <nav className="flex items-center gap-6">
          <a
            href="/#projets"
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
  )
}

export function SiteFooter() {
  return (
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
  )
}
