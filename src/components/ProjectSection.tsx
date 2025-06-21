import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "TechTalent Academy",
    period: "Jul 2024 - Sep 2024",
    role: "Mobile Developer",
    description:
      "Developed a mobile application that delivers video-based courses on Technology and features an AI assistant that helps users discover suitable jobs based on their hobbies and interests.",
    technologies: ["React Native", "Firebase"],
    links: {
      demo: "https://www.youtube.com/watch?v=ch4XiUScLSY",
      github: "https://github.com/adhitaazizi/TechTalent-Academy.git",
    },
    highlights: [
      "Built mobile interface using React Native based on team's UI design",
      "Set up and managed Firebase services",
      "Identified, reported, and tracked bugs throughout development",
      "Delegated and resolved bug fixes within the team",
    ],
  },
  {
    title: "CnC Hub",
    period: "Nov 2024 - Dec 2024",
    role: "Full Stack Developer",
    description:
      "Developed a web-based platform as a final project for Software Engineering course. The platform showcases all available student communities and clubs within President University.",
    technologies: ["React", "Firebase"],
    links: {
      demo: "https://pu-cnc.web.app/",
      github: "https://github.com/haysnairpa/cnc-hub.git",
    },
    highlights: [
      "Built parts of the frontend interface based on team's design",
      "Managed Firebase backend services",
      "Identified bugs and reported them clearly to development team",
      "Delegated tasks for bug fixing to appropriate team members",
    ],
  },
  {
    title: "PT Homize Digital Kreatif",
    period: "Apr 2025 - Jul 2025",
    role: "Full Stack Developer",
    description:
      "A web platform that connects users with a variety of services offered by merchants. Built with Laravel, Blade, and Alpine.js, enabling users to explore, wishlist, and interact with services.",
    technologies: ["Laravel", "Blade", "Alpine.js", "PHP", "MySQL"],
    links: {
      demo: "https://homize.id/",
    },
    highlights: [
      "Developed parts of both backend and frontend of the website",
      "Documented and resolved 10+ bugs, improving platform stability",
      "Delegated bug fixes to team members",
      "Managed production deployment, ensuring minimal downtime",
    ],
  },
]

export default function ProjectSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-luxury luxury-heading">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development and
            teamwork.
          </p>
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="luxury-card p-4 sm:p-6 lg:p-8"
            >
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs sm:text-sm border border-yellow-500/30 w-fit">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-yellow-400 mb-4 text-sm sm:text-base">{project.period}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-800/50 text-gray-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 btn-luxury-primary text-sm w-full sm:w-auto"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 btn-luxury-secondary text-sm w-full sm:w-auto"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-3 mt-6 lg:mt-0">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Key Contributions:</h4>
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-xs sm:text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}