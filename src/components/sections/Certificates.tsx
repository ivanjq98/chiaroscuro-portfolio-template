'use client'

import { CERTIFICATES } from '@/lib/data'
import { SectionHeaderAnimated, StaggerGroup, StaggerItem } from '@/components/ui/Motion'

export default function Certificates() {
  return (
    <section id="certificates" className="relative z-10 bg-bg-secondary section-padding">
      <SectionHeaderAnimated num="03" title="Certificates" />

      <StaggerGroup
        stagger={0.08}
        delayChildren={0.05}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent-muted"
      >
        {CERTIFICATES.map((cert) => (
          <StaggerItem key={cert.id}>
            <div className="bg-bg-secondary p-8 flex items-start gap-5 group hover:bg-bg-tertiary transition-colors duration-300 h-full">
              {/* Icon */}
              <div className="w-11 h-11 border border-accent-muted flex items-center justify-center text-accent flex-shrink-0 text-lg group-hover:border-accent transition-colors duration-200">
                ✦
              </div>

              <div>
                <p className="text-sm font-medium mb-1 group-hover:text-accent transition-colors duration-200">
                  {cert.name}
                </p>
                <p className="text-xs text-text-muted mb-2">{cert.issuer}</p>
                <p className="font-mono text-xs text-accent tracking-widest">{cert.date}</p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}