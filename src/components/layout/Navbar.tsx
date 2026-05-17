'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#work',         label: 'Work' },
  { href: '#projects',     label: 'Projects' },
  { href: '#certificates', label: 'Certs' },
  { href: '#skills',       label: 'Skills' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach((section) => {
        const top = (section as HTMLElement).offsetTop - 120
        if (window.scrollY >= top) current = section.id
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 py-5 transition-all duration-300',
        scrolled
          ? 'border-b border-accent-muted bg-bg/85 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <Link
        href="#home"
        className="font-display text-2xl text-accent tracking-wide hover:text-accent-light transition-colors"
      >
        YN.
      </Link>

      <ul className="flex items-center gap-8">
        {NAV_LINKS.map(({ href, label }) => {
          const sectionId = href.replace('#', '')
          const isActive = activeSection === sectionId
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'text-xs tracking-widest uppercase transition-colors duration-200 font-body',
                  isActive ? 'text-accent' : 'text-text-muted hover:text-text'
                )}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}