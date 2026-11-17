import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CardCorners } from './shared'

export interface Slide {
  src: string
  alt: string
  label: string
  width?: number
  height?: number
}

interface Labels {
  region: string
  previous: string
  next: string
  goTo: (index: number) => string
  position: (index: number, total: number) => string
}

// Carrousel sans lecture automatique : on fait défiler au doigt (défilement
// natif aimanté), avec les flèches ou avec les points.
export function Carousel({ slides, labels }: { slides: Slide[]; labels: Labels }) {
  const track = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  function goTo(index: number) {
    const element = track.current
    if (!element) return
    const target = (index + slides.length) % slides.length
    element.scrollTo({ left: target * element.clientWidth, behavior: 'smooth' })
  }

  function onScroll() {
    const element = track.current
    if (!element) return
    setActive(Math.round(element.scrollLeft / element.clientWidth))
  }

  const arrow =
    'absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-goth-rose/40 bg-goth-bg/85 text-goth-rose backdrop-blur transition-colors hover:bg-goth-rose hover:text-goth-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goth-rose'

  return (
    <section aria-roledescription="carousel" aria-label={labels.region}>
      <div className="relative rounded-2xl border border-goth-violet/25 bg-neutral-950/80 p-2 sm:p-3">
        <CardCorners />
        <div
          ref={track}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory overflow-x-auto rounded-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((slide, index) => (
            <figure
              key={slide.src}
              role="group"
              aria-roledescription="slide"
              aria-label={labels.position(index + 1, slides.length)}
              className="w-full shrink-0 snap-center"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="aspect-[16/10] h-auto w-full bg-goth-bg object-contain"
              />
            </figure>
          ))}
        </div>
        {slides.length > 1 ? (
          <>
            <button type="button" onClick={() => goTo(active - 1)} aria-label={labels.previous} className={`${arrow} left-4`}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => goTo(active + 1)} aria-label={labels.next} className={`${arrow} right-4`}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        ) : null}
      </div>

      <p aria-live="polite" className="mt-4 text-center font-mono text-[11px] uppercase tracking-widest text-neutral-400">
        {slides[active]?.label}
      </p>
      {slides.length > 1 ? (
        <div className="mt-3 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => goTo(index)}
              aria-label={labels.goTo(index + 1)}
              aria-current={index === active}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goth-rose ${
                index === active ? 'w-6 bg-goth-rose' : 'w-2.5 bg-goth-rose/30 hover:bg-goth-rose/60'
              }`}
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}
