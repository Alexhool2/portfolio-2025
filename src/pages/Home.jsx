import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background2 text-foreground2 overflow-x-hidden">
      {/* theme toogle */}
      <ThemeToggle />

      {/*background effects */}
      <StarBackground />
      {/*navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/*Footer*/}
      <Footer />
    </div>
  )
}
