import { MainLayout } from '@/components/layout/main-layout'
import { Hero } from '@/components/sections/hero'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  )
}
