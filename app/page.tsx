import { NavbarRevamp } from "@/components/navbar-revamp"
import { HeroRevamp } from "@/components/hero-revamp"
import { AboutRevamp } from "@/components/about-revamp"
import { SkillsRevamp } from "@/components/skills-revamp"
import { ProjectsRevamp } from "@/components/projects-revamp"
import { ContactRevamp } from "@/components/contact-revamp"
import { FooterRevamp } from "@/components/footer-revamp"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavbarRevamp />
      <main id="home">
        <HeroRevamp />
        <AboutRevamp />
        <SkillsRevamp />
        <ProjectsRevamp />
        <ContactRevamp />
      </main>
      <FooterRevamp />
    </div>
  )
}
