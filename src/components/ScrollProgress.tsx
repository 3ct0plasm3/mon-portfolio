import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const shouldReduceMotion = useReducedMotion()
  const smoothed = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const progress = shouldReduceMotion ? scrollYProgress : smoothed
  const top = useTransform(progress, [0, 1], ['0%', '100%'])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-4 left-1 top-24 z-40 w-px bg-goth-violet/15 opacity-50 sm:left-3 sm:opacity-100"
    >
      <motion.div
        className="absolute inset-0 origin-top bg-goth-rose/50"
        style={{ scaleY: progress }}
      />
      <motion.span
        className="absolute -ml-[3px] -mt-[3px] h-[7px] w-[7px] rotate-45 border border-goth-rose bg-goth-bg"
        style={{ top }}
      />
    </div>
  )
}
