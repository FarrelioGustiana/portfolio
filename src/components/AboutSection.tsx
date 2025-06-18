import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Github } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-luxury luxury-heading">
                About Me
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  I'm a passionate final-year Informatics student at President University with a strong foundation in
                  both web and mobile development. My journey in technology has been driven by curiosity and a desire to
                  create meaningful digital experiences.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  Throughout my academic journey, I've worked on various team projects using modern frameworks like
                  React, Laravel, and React Native. I believe in continuous learning and always strive to stay updated
                  with the latest technologies and best practices.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 sm:px-4 py-2 rounded-full border border-gray-700">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">Bekasi, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 sm:px-4 py-2 rounded-full border border-gray-700">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300 truncate">farreliowork@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800/50 px-3 sm:px-4 py-2 rounded-full border border-gray-700">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">FarrelioGustiana</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
  );
}