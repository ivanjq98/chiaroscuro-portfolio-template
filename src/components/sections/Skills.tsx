'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/data'
import { SectionHeaderAnimated, StaggerGroup, StaggerItem, RevealLeft } from '@/components/ui/Motion'
import { skillBar, VIEWPORT } from '@/lib/animations'

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 section-padding">
      <SectionHeaderAnimated num="04" title="Skills" />

      <StaggerGroup
        stagger={0.15}
        delayChildren={0.05}
        className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
      >
        {SKILLS.map((group) => (
          <StaggerItem key={group.category}>
            {/* Category heading */}
            <RevealLeft>
              <h3 className="text-xs tracking-widest uppercase text-accent mb-8 pb-3 border-b border-accent-muted">
                {group.category}
              </h3>
            </RevealLeft>

            {/* Skill bars */}
            <div className="flex flex-col gap-5">
            {group.skills.map((skill: any, i: number) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-text">{skill.name}</span>
                    <span className="font-mono text-xs text-text-muted">{skill.level}%</span>
                  </div>

                  {/* Track */}
                  <div className="h-px bg-bg-tertiary relative overflow-hidden">
                    {/* Animated fill */}
                    <motion.div
                      variants={skillBar(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={VIEWPORT}
                      transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1 + i * 0.1,
                      }}
                      className="absolute top-0 left-0 h-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  )
}