import type { SVGProps } from 'react'

type IP = SVGProps<SVGSVGElement>

const Svg = ({ children, ...p }: IP) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    {children}
  </svg>
)

export const ArrowRight = (p: IP) => <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
export const ArrowDown = (p: IP) => <Svg {...p}><path d="M12 4v16M6 14l6 6 6-6" /></Svg>
export const Camera = (p: IP) => <Svg {...p}><path d="M4 7h4l2-2h4l2 2h4v12H4z" /><circle cx="12" cy="13" r="4" /></Svg>
export const Gift = (p: IP) => <Svg {...p}><path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15M12 6c-4 0-5-2-4-4 2-1 4 1 4 4zm0 0c4 0 5-2 4-4-2-1-4 1-4 4z" /></Svg>
export const Heart = (p: IP) => <Svg {...p}><path d="M20 5c-2-2-5-1-8 2-3-3-6-4-8-2-3 3-1 8 8 15 9-7 11-12 8-15z" /></Svg>
export const MessageCircle = (p: IP) => <Svg {...p}><path d="M21 12a9 9 0 0 1-13 8l-5 1 1-5a9 9 0 1 1 17-4z" /></Svg>
export const Sparkles = (p: IP) => <Svg {...p}><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5zM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z" /></Svg>
export const CheckCircle2 = (p: IP) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></Svg>
export const Send = (p: IP) => <Svg {...p}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></Svg>
export const Image = (p: IP) => <Svg {...p}><rect x="3" y="4" width="18" height="16" rx="3" /><circle cx="9" cy="10" r="2" /><path d="m4 18 5-5 4 4 3-3 4 4" /></Svg>
export const X = (p: IP) => <Svg {...p}><path d="M18 6 6 18M6 6l12 12" /></Svg>

export function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
