'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import Tag from '@/components/ui/Tag'
import { SectionHeaderAnimated, StaggerGroup, StaggerItem, HoverCard } from '@/components/ui/Motion'
import { scaleIn, VIEWPORT } from '@/lib/animations'

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 section-padding">
      <SectionHeaderAnimated num="02" title="Featured Projects" />

      <StaggerGroup
        stagger={0.1}
        delayChildren={0.05}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((project) => (
          <StaggerItem key={project.id}>
            <HoverCard className="relative bg-bg-card border border-accent-muted p-8 h-full flex flex-col group transition-colors duration-300 hover:border-accent">
              {/* Featured badge */}
              {project.featured && (
                <motion.span
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="absolute top-4 right-4 text-xs tracking-widest uppercase text-accent border border-accent-muted px-3 py-1"
                >
                  Featured
                </motion.span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 bg-accent-muted border border-accent-muted flex items-center justify-center text-2xl mb-6 group-hover:border-accent transition-colors duration-200">
                {project.icon}
              </div>

              <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-200">
                {project.name}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string) => (
                <Tag key={tag} label={tag} />
              ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-accent flex items-center gap-2 w-fit group/link"
              >
                <span>{project.github ? 'View on GitHub' : 'View Project'}</span>
                <motion.span
                  className="inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}