'use client'

import { motion, type MotionProps } from 'framer-motion'
import {
  fadeUp, fadeIn, slideInLeft, slideInRight, scaleIn,
  staggerContainer, VIEWPORT,
} from '@/lib/animations'
import { cn } from '@/lib/utils'

type DivProps = React.HTMLAttributes<HTMLDivElement> & MotionProps

// ── Reveal wrappers ──────────────────────────────────────

/** Default scroll reveal — fades up when entering viewport */
export function RevealUp({ children, className, delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Fade in (no vertical movement) */
export function RevealFade({ children, className, delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Slide in from left */
export function RevealLeft({ children, className, delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      variants={slideInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Slide in from right */
export function RevealRight({ children, className, delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      variants={slideInRight}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Scale up — great for cards */
export function RevealScale({ children, className, delay = 0, ...props }: DivProps & { delay?: number }) {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ── Stagger container ────────────────────────────────────

interface StaggerProps extends DivProps {
  stagger?: number
  delayChildren?: number
}

/** Wraps children and staggers their reveal animations */
export function StaggerGroup({
  children, className,
  stagger = 0.1, delayChildren = 0.05,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Child item inside a StaggerGroup — fades up automatically */
export function StaggerItem({ children, className, ...props }: DivProps) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  )
}

// ── Section header with line draw ────────────────────────

interface SectionHeaderAnimatedProps {
  num: string
  title: string
}

export function SectionHeaderAnimated({ num, title }: SectionHeaderAnimatedProps) {
  return (
    <div className="flex items-baseline gap-6 mb-16 overflow-hidden">
      <RevealFade delay={0}>
        <span className="font-mono text-xs text-accent tracking-widest">{num}</span>
      </RevealFade>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className="font-display text-4xl md:text-5xl font-light"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="flex-1 h-px bg-accent-muted"
        style={{ transformOrigin: 'left' }}
      />
    </div>
  )
}

// ── Hover card ───────────────────────────────────────────

export function HoverCard({ children, className, ...props }: DivProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className={cn('cursor-default', className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}