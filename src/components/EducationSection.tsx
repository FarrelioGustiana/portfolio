import { motion } from "framer-motion"

export default function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-luxury luxury-heading">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="luxury-card p-6 sm:p-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 lg:mb-0">Universitas Presiden</h3>
            <span className="text-yellow-400 text-sm sm:text-base">Aug 2023 - Aug 2026 (Expected)</span>
          </div>
          <p className="text-base sm:text-lg text-gray-300 mb-2">Diploma in Informatics</p>
          <p className="text-yellow-400 mb-4 text-sm sm:text-base">GPA: 3.70/4.00</p>
          <p className="text-gray-300 mb-4 text-sm sm:text-base">Cikarang, Bekasi Regency, West Java, Indonesia</p>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Data Structures & Algorithms",
                "Web & Server-Side Programming",
                "Wireless & Mobile Programming",
                "Software Engineering",
                "Database Systems",
              ].map((course) => (
                <span
                  key={course}
                  className="bg-gray-800/50 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-700"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}