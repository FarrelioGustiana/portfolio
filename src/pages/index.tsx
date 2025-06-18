import { useState, useEffect } from "react"
import Head from "next/head"
import Navigation from "@components/Navigation"
import HeroSection from "@components/HeroSection"
import AboutSection from "@components/AboutSection"
import ProjectSection from "@components/ProjectSection"
import SkillsSection from "@components/SkillsSection"
import EducationSection from "@components/EducationSection"
import ContactSection from "@components/ContactSection"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }


  return (
    <>
      <Head>
        <title>Farrelio Gustiana Dzaki - Portfolio</title>
        <meta
          name="description"
          content="Final-year Informatics student skilled in web and mobile development. Building user-focused applications with modern frameworks."
        />
        <meta
          name="keywords"
          content="Farrelio Gustiana Dzaki, Portfolio, Web Developer, Mobile Developer, React, Laravel, Next.js"
        />
        <meta name="author" content="Farrelio Gustiana Dzaki" />
        <meta property="og:title" content="Farrelio Gustiana Dzaki - Portfolio" />
        <meta
          property="og:description"
          content="Final-year Informatics student skilled in web and mobile development"
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/f.png" />
      </Head>

      <div className="min-h-screen luxury-bg">
        <Navigation scrollToSection={scrollToSection} />
        <HeroSection isVisible={isVisible} scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectSection />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
        
        <footer className="py-6 sm:py-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2025 Farrelio Gustiana Dzaki.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
