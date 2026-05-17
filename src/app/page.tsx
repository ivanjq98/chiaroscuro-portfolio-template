import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import Projects from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/layout/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <Navbar />
        <Hero />
        <Work />
        <Projects />
        <Certificates />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}