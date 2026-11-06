const CENTER = 320
const round = (value: number) => Number(value.toFixed(2))

function polar(radius: number, angle: number, cx = CENTER, cy = CENTER) {
  const radians = ((angle - 90) * Math.PI) / 180
  return `${round(cx + radius * Math.cos(radians))} ${round(cy + radius * Math.sin(radians))}`
}

function circle(radius: number, cx = CENTER, cy = CENTER) {
  return `M ${round(cx - radius)} ${round(cy)} a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 ${-radius * 2} 0`
}

// Croissant dont les cornes pointent vers `facing` (en degrés).
function crescent(cx: number, cy: number, radius: number, facing: number) {
  const hornA = polar(radius, facing - 62, cx, cy)
  const hornB = polar(radius, facing + 62, cx, cy)
  return `M ${hornA} A ${radius} ${radius} 0 1 0 ${hornB} A ${round(radius * 1.05)} ${round(radius * 1.05)} 0 0 1 ${hornA}`
}

const sevenths = Array.from({ length: 7 }, (_, index) => (index * 360) / 7)

// Heptagramme : chaque pointe est reliée à la troisième suivante.
const heptagram = `M ${sevenths.map((_, index) => polar(236, sevenths[(index * 3) % 7])).join(' L ')} Z`

const ring = [
  circle(310),
  circle(298),
  circle(242),
  heptagram,
  ...Array.from({ length: 49 }, (_, index) => {
    const angle = (index * 360) / 49
    return `M ${polar(298, angle)} L ${polar(index % 7 === 0 ? 282 : 291, angle)}`
  }),
  // Sept croissants posés sur les pointes, tournés vers l'extérieur
  ...sevenths.map((angle) => {
    const [x, y] = polar(268, angle).split(' ').map(Number)
    return crescent(x, y, 15, angle)
  }),
]

// Glyphe de la Lune Noire : un croissant au-dessus d'une croix.
const lilith = [
  crescent(CENTER, 276, 62, 270),
  `M ${CENTER} 338 V 452`,
  `M 270 402 H 370`,
]

export function Sigil({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={className}
    >
      <g className="sigil-ring">
        {ring.map((d) => (
          <path key={d} d={d} pathLength={1} className="sigil-line" />
        ))}
      </g>
      <g strokeWidth="1.6" strokeLinecap="round">
        {lilith.map((d) => (
          <path key={d} d={d} pathLength={1} className="sigil-line" />
        ))}
      </g>
    </svg>
  )
}
