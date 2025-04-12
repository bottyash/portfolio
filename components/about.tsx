"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Calendar, GraduationCap, MapPin } from "lucide-react"

export function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Get to know more about me, my education, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <p className="text-gray-600 mb-4">
            My journey into tech began at 12, experimenting with HTML and CSS—because what better way to rebel than building websites while others played video games? Since then, I’ve grown into a developer who’s fluent in C/C++, Java, Python, PHP (Laravel), .NET, and a bunch of other tools that make computers do cool things (or at least pretend to).
                  
            </p>
            <p className="text-gray-600 mb-4">
            I have a soft spot for backend logic, database wizardry, and finding elegant solutions to tangled problems. Whether I’m optimizing a homegrown college management system or getting a chatbot to understand what you actually mean, I love turning ideas into working systems.
Outside of the code cave, I’m exploring cloud platforms like GCP, tinkering with networking setups, or occasionally winning a staring contest with my terminal. I believe in clean code, continuous learning, and making sure every project ends with “well, that actually worked!”
</p>
            <p className="text-gray-600">
            So whether you're here to explore my projects, collaborate on something cool, or just vibe with a fellow techie—welcome aboard!

            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        Bachelor of Technology in Information Technology
                      </h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>G. H. Patel College of Engineering & Technology</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>2023 - 2026</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Vallabh Vidhyanagar, Anand, India</span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600">
                        7.67
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Diploma of Engineering in Information Technology</h4>
                      <div className="flex flex-wrap gap-4 mt-2 text-gray-600 text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-1" />
                          <span>Government Polytechnic</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>2020 - 2023</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>Gandhinagar, Gujarat, India</span>
                        </div>
                      </div>
                      <p className="mt-3 text-gray-600">
                        First Class with Distinction
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
