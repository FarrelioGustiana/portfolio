import { motion } from "framer-motion"
import { ChevronDown, Github } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  isVisible: boolean
  scrollToSection: (sectionId: string) => void
}
export default function HeroSection({ isVisible, scrollToSection }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-gray-400/5"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="profile-photo-container w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8">
            <div className="profile-photo w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/profile.png"
                alt="Farrelio Gustiana Dzaki"
                width={200}
                height={200}
                className="w-full h-full object-cover object-top relative z-10"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 luxury-heading px-4"
        >
          <span className="text-gradient-luxury">Farrelio Gustiana Dzaki</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4"
        >
          Final-year Informatics student skilled in web and mobile development. Building user-focused applications
          with modern frameworks.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <a href="mailto:farreliowork@gmail.com" className="btn-luxury-primary w-full sm:w-auto text-center">
            Get In Touch
          </a>
          <button onClick={() => scrollToSection("projects")} className="btn-luxury-secondary w-full sm:w-auto">
            View My Work
          </button>
          <a
            href="https://github.com/FarrelioGustiana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 btn-luxury-secondary w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
      </motion.div>
    </section>
  );
}