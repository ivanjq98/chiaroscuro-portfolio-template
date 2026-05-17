'use client'

import { motion } from 'framer-motion'
import { RevealUp, RevealLeft, RevealRight, SectionHeaderAnimated } from '@/components/ui/Motion'
import { VIEWPORT } from '@/lib/animations'

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-bg-secondary section-padding">
      <SectionHeaderAnimated num="05" title="Get In Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div>
          <RevealLeft delay={0.1}>
            <p className="font-display text-3xl md:text-4xl font-light leading-snug mb-6">
              Have a project in mind?{' '}
              <span className="text-accent italic">Let's talk.</span>
            </p>
          </RevealLeft>

          <RevealUp delay={0.2}>
            <p className="text-sm text-text-muted leading-relaxed mb-10 max-w-sm">
              I'm currently open to new opportunities — whether it's a full-time
              role, a freelance project, or just a conversation about design and
              engineering.
            </p>
          </RevealUp>

          {/* Contact details */}
          <div className="flex flex-col gap-4">
            {[
              { label: 'Email', value: 'you@email.com', href: 'mailto:you@email.com' },
              { label: 'LinkedIn', value: '/in/yourname', href: '#' },
              { label: 'GitHub', value: 'github.com/yourname', href: '#' },
            ].map(({ label, value, href }, i) => (
              <RevealUp key={label} delay={0.25 + i * 0.08}>
                <a
                  href={href}
                  className="flex items-center gap-6 group"
                >
                  <span className="font-mono text-xs text-accent tracking-widest w-16 flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-sm text-text-muted group-hover:text-text transition-colors duration-200">
                    {value}
                  </span>
                  <motion.span
                    className="text-accent opacity-0 group-hover:opacity-100 ml-auto"
                    initial={{ x: -4 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </a>
              </RevealUp>
            ))}
          </div>
        </div>

        {/* Right — CTA card */}
        <RevealRight delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-bg-card border border-accent-muted p-10 flex flex-col gap-6 hover:border-accent transition-colors duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-accent">
                Available for work
              </span>
            </div>

            <p className="font-display text-2xl font-light">
              Let's build something great together
            </p>

            <p className="text-sm text-text-muted leading-relaxed">
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <motion.a
              href="mailto:you@email.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 px-8 py-4 bg-accent text-bg text-xs font-medium tracking-widest uppercase text-center hover:bg-accent-light transition-colors duration-200"
            >
              Send a Message
            </motion.a>
          </motion.div>
        </RevealRight>
      </div>
    </section>
  )
}