import type { Variants } from 'framer-motion'

// ── Easing ──────────────────────────────────────────────
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_IN_OUT   = [0.4, 0, 0.2, 1] as const

// ── Reusable variants ────────────────────────────────────

/** Fade up — default reveal for most elements */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
}

/** Fade in — for elements that shouldn't move */
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE_IN_OUT } },
}

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
}

/** Slide in from right */
export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
}

/** Scale up — for cards and decorative elements */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1,  transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
}

/** Skill bar fill — width animates from 0 to target */
export const skillBar = (level: number): Variants => ({
  hidden:  { width: '0%' },
  visible: { width: `${level}%`, transition: { duration: 1.2, ease: EASE_OUT_EXPO } },
})

// ── Stagger containers ───────────────────────────────────

/** Stagger children with a small delay between each */
export const staggerContainer = (stagger = 0.1, delayChildren = 0.1): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

/** Faster stagger for dense grids */
export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

/** Slower stagger for section-level reveals */
export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

// ── Shared viewport config ───────────────────────────────
// Used on every whileInView — fires once, triggers 15% into view
export const VIEWPORT = { once: true, margin: '0px 0px -80px 0px' } as const