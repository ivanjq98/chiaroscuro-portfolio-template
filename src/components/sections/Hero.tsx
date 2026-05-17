'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { EASE_OUT_EXPO } from '@/lib/animations'

// Hero uses animate (not whileInView) since it's above the fold
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE_OUT_EXPO, delay },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 section-padding pt-32"
    >
      {/* Left — text */}
      <div>
        <motion.p
          {...fadeUp(0.1)}
          className="accent-line text-xs tracking-widest uppercase text-accent mb-8"
        >
          Available for opportunities
        </motion.p>

        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-light leading-none tracking-tight mb-4"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
        >
          Your{' '}
          <span className="text-accent font-semibold italic">Name</span>
        </motion.h1>

        <motion.p
          {...fadeUp(0.3)}
          className="font-display text-2xl md:text-3xl font-light italic text-text-muted mb-6"
        >
          Designer &amp; Developer
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-text-muted leading-relaxed max-w-md mb-10 text-sm"
        >
          I craft thoughtful digital experiences — blending sharp design with
          robust engineering. Passionate about products that make people's lives
          genuinely better.
        </motion.p>

        <motion.div {...fadeUp(0.5)} className="flex gap-4 flex-wrap">
          <Link
            href="#projects"
            className="px-8 py-3 bg-accent text-bg text-xs font-medium tracking-widest uppercase hover:bg-accent-light transition-colors duration-200"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-accent-muted text-text text-xs font-medium tracking-widest uppercase hover:border-accent transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Right — decorative card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="hidden lg:flex justify-center items-center"
      >
        <div className="relative w-80 h-[420px]">
          {/* Shadow frame */}
          <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] border border-accent-muted" />

          {/* Main card */}
          <div className="absolute inset-0 bg-bg-tertiary border border-accent-muted flex flex-col items-center justify-center gap-4">
            <span className="font-display text-7xl text-accent opacity-40">✦</span>
            <div className="w-12 h-px bg-accent opacity-30" />
            <p className="text-xs tracking-widest uppercase text-text-muted">
              Portfolio 2025
            </p>
          </div>

          {/* Stat chips */}
          <div className="absolute -bottom-6 -right-8 flex flex-col gap-2">
            {[
              { num: '3+', label: 'Years Experience' },
              { num: '12', label: 'Projects Delivered' },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="bg-bg-card border border-accent-muted px-4 py-2 flex items-center gap-3"
              >
                <span className="font-display text-2xl text-accent font-semibold">{num}</span>
                <span className="text-xs text-text-muted tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}