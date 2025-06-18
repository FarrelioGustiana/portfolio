import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-luxury luxury-heading">
                Let&apos;s Work Together
              </h2>
              <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out if
                you&apos;d like to connect!
              </p>

              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 max-w-4xl mx-auto">
                <a
                  href="https://mail.google.com/mail/?view=cm&to=farreliowork@gmail.com&su=Potential%20Opportunity%20from%20Your%20Portfolio%20Website&body=Hi%20Farrelio%2C%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you%20regarding...%0D%0A%0D%0ABest%20regards%2C%0D%0A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 btn-luxury-primary"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Email</span>
                  <span className="sm:hidden">farreliowork@gmail.com</span>
                </a>
                
                <a
                  href="https://wa.me/+6285159002682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 btn-luxury-secondary"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>
  );
}