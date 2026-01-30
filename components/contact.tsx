"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      details: "officialparmaryash@gmail.com",
      link: "mailto:officialparmaryash@gmail.com",
      color: "from-purple-600 to-pink-600",
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone",
      details: "+91 7567983234",
      link: "tel:+917567983234",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      details: "Vallabh Vidhyanagar, Anand, India",
      link: "https://www.google.com/maps/place/Vallabh+Vidyanagar,+Anand,+Gujarat",
      color: "from-green-600 to-emerald-600",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Got a project in mind? Or just want to nerd out over tech stuff or pitch a wild idea at 2 AM?
            I'm all ears (and coffee). Don't be shy—reach out and let's make something awesome (or at least
            mildly impressive) together!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
              >
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="h-full hover-lift hover:shadow-2xl transition-all duration-300 group border-t-4 border-t-transparent hover:border-t-purple-600 cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${info.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 break-words">{info.details}</p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Additional CTA */}
          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <p className="text-gray-600 mb-4">
              Prefer social media? Find me on:
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/bottyash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover-lift hover:bg-gray-800 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yash-parmar-5a3222221/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover-lift hover:bg-blue-700 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://x.com/whooyash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover-lift hover:bg-gray-900 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
