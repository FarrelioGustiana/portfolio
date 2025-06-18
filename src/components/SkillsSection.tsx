import { motion } from "framer-motion"

const skills = {
  "Programming Languages": ["JavaScript", "PHP", "Java", "Python", "TypeScript"],
  "Frameworks/Libraries": ["React", "Laravel", "Express.js", "Node.js", "React Native", "Next.js"],
  "Others": ["Bug Tracking", "Deployment", "UI/UX Implementation"],
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gray-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-luxury luxury-heading">
            Skills & Technologies
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="luxury-card p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-800/30 text-gray-300 px-3 py-2 rounded-lg text-xs sm:text-sm border border-gray-700/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}