import type { ReactNode } from 'react'

// Cadre en ogive. L'image reste dans la partie droite du cadre, sous l'arche :
// elle n'est jamais recadrée par la pointe.
export function GothicArch({ children }: { children: ReactNode }) {
  return (
    <div className="gothic-arch">
      <svg
        viewBox="0 0 100 34"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        className="block h-auto w-full overflow-visible text-goth-rose/60"
      >
        <path
          d="M0 34 C0 18 26 8 50 0 C74 8 100 18 100 34"
          fill="currentColor"
          fillOpacity="0.06"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="50" cy="20" r="5" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="border-x border-b border-goth-rose/60 bg-neutral-950/80 p-2">
        {children}
      </div>
    </div>
  )
}
