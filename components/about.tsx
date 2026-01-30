"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react"

export function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Get to know more about me, my education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              My Story
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into tech began at 12, experimenting with HTML and CSS—because what better way to rebel than building websites while others played video games? Since then, I've grown into a developer who's fluent in <span className="font-semibold text-purple-600">C/C++, Java, Python, PHP (Laravel), .NET</span>, and a bunch of other tools that make computers do cool things (or at least pretend to).
              </p>
              <p>
                I have a soft spot for backend logic, database wizardry, and finding elegant solutions to tangled problems. Whether I'm optimizing a homegrown college management system or getting a chatbot to understand what you actually mean, I love turning ideas into working systems.
              </p>
              <p>
                Outside of the code cave, I'm exploring cloud platforms like <span className="font-semibold text-purple-600">GCP</span>, tinkering with networking setups, or occasionally winning a staring contest with my terminal. I believe in clean code, continuous learning, and making sure every project ends with "well, that actually worked!"
              </p>
              <p className="font-medium text-gray-700">
                So whether you're here to explore my projects, collaborate on something cool, or just vibe with a fellow techie—welcome aboard! 🚀
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 relative inline-block">
              Education
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
            </h3>
            <div className="space-y-6 relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600" />

              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="hover-lift hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-600">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 relative z-10">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Bachelor of Technology in Information Technology
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-gray-600 text-sm">
                            <BookOpen className="h-4 w-4 mr-1.5 text-purple-600" />
                            <span>G. H. Patel College of Engineering & Technology</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="h-4 w-4 mr-1.5 text-purple-600" />
                            <span>2023 - 2026</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="h-4 w-4 mr-1.5 text-purple-600" />
                            <span>Vallabh Vidhyanagar, Anand, India</span>
                          </div>
                        </div>
                        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                          CGPA: 7.67
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card className="hover-lift hover:shadow-xl transition-all duration-300 border-l-4 border-l-pink-600">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1 relative z-10">
                        <div className="p-3 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          Diploma of Engineering in Information Technology
                        </h4>
                        <div className="flex flex-wrap gap-3 mb-3">
                          <div className="flex items-center text-gray-600 text-sm">
                            <BookOpen className="h-4 w-4 mr-1.5 text-pink-600" />
                            <span>Government Polytechnic</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <Calendar className="h-4 w-4 mr-1.5 text-pink-600" />
                            <span>2020 - 2023</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="h-4 w-4 mr-1.5 text-pink-600" />
                            <span>Gandhinagar, Gujarat, India</span>
                          </div>
                        </div>
                        <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold">
                          First Class with Distinction
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
