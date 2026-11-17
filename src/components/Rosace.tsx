const CENTER = 320
const round = (value: number) => Number(value.toFixed(2))

function polar(radius: number, angle: number) {
  const radians = ((angle - 90) * Math.PI) / 180
  return `${round(CENTER + radius * Math.cos(radians))} ${round(CENTER + radius * Math.sin(radians))}`
}

function circle(radius: number, cx = CENTER, cy = CENTER) {
  return `M ${round(cx - radius)} ${round(cy)} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`
}

const steps = Array.from({ length: 12 }, (_, index) => index * 30)

const paths = [
  circle(310),
  circle(296),
  circle(128),
  circle(116),
  circle(44),
  // Pétales en ogive
  ...steps.map(
    (angle) =>
      `M ${polar(128, angle - 15)} Q ${polar(236, angle - 15)} ${polar(296, angle)} Q ${polar(236, angle + 15)} ${polar(128, angle + 15)}`,
  ),
  // Oculi entre les pétales
  ...steps.map((angle) => {
    const [x, y] = polar(264, angle + 15).split(' ').map(Number)
    return circle(24, x, y)
  }),
  // Rayons et remplages du cœur
  ...steps.map((angle) => `M ${polar(44, angle)} L ${polar(116, angle)}`),
  ...steps.map(
    (angle) =>
      `M ${polar(116, angle)} Q ${polar(62, angle + 15)} ${polar(116, angle + 30)}`,
  ),
]

export function Rosace({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden="true"
      className={`rosace ${className}`}
    >
      {paths.map((d) => (
        <path key={d} d={d} pathLength={1} className="rosace-line" />
      ))}
    </svg>
  )
}
