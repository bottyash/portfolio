"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Smartphone, Server, Cloud } from "lucide-react"

export function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
      skills: [
        { name: "HTML/CSS", proficiency: 85 },
        { name: "JavaScript", proficiency: 80 },
        { name: "React.js", proficiency: 70 },
        { name: "Next.js", proficiency: 65 },
        { name: "Tailwind CSS", proficiency: 75 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600",
      skills: [
        { name: "PHP (Laravel)", proficiency: 80 },
        { name: "C#/.NET", proficiency: 75 },
        { name: "Python", proficiency: 70 },
        { name: "Django", proficiency: 65 },
        { name: "Java", proficiency: 70 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6" />,
      color: "from-green-600 to-emerald-600",
      skills: [
        { name: "MySQL", proficiency: 85 },
        { name: "MongoDB", proficiency: 65 },
        { name: "Firebase", proficiency: 60 },
        { name: "AWS", proficiency: 60 },
        { name: "GCP", proficiency: 55 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-orange-600 to-red-600",
      skills: [
        { name: "Android (Java)", proficiency: 65 },
        { name: "React Native", proficiency: 50 },
      ],
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      color: "from-violet-600 to-purple-600",
      skills: [
        { name: "C/C++", proficiency: 80 },
        { name: "Python", proficiency: 75 },
        { name: "JavaScript", proficiency: 80 },
        { name: "PHP", proficiency: 80 },
        { name: "C#", proficiency: 75 },
      ],
    },
    {
      title: "Tools & Other",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-pink-600 to-rose-600",
      skills: [
        { name: "Git & GitHub", proficiency: 75 },
        { name: "Docker", proficiency: 50 },
        { name: "Figma", proficiency: 80 },
        { name: "Problem Solving", proficiency: 90 },
        { name: "Agile Methodology", proficiency: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
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
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Here are the technologies I've wrangled, debugged, and occasionally yelled at — along with how well we get along:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="h-full hover-lift hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-purple-600 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-semibold text-purple-600">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
