'use client'

import { WORK } from '@/lib/data'
import Tag from '@/components/ui/Tag'
import { SectionHeaderAnimated, StaggerGroup, StaggerItem, HoverCard } from '@/components/ui/Motion'

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-bg-secondary section-padding">
      <SectionHeaderAnimated num="01" title="Work Experience" />

      <StaggerGroup
        stagger={0.12}
        delayChildren={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-accent-muted"
      >
        {WORK.map((job) => (
          <StaggerItem key={job.id}>
            <HoverCard className="bg-bg-secondary p-10 h-full group transition-colors duration-300 hover:bg-bg-tertiary">
              <p className="font-mono text-xs text-accent tracking-widest mb-4">
                {job.period}
              </p>

              <h3 className="font-display text-2xl font-semibold mb-1 group-hover:text-accent transition-colors duration-200">
                {job.role}
              </h3>

              <p className="text-sm text-text-muted mb-6">
                {job.company} · {job.type}
              </p>

              <p className="text-sm text-text-muted leading-relaxed mb-8">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {job.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </HoverCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}