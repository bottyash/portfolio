"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Smartphone, Server, Figma } from "lucide-react"

export function Skills() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: [
        { name: "HTML/CSS", proficiency: 80 },
        { name: "JavaScript", proficiency: 75 },
        { name: "React.js", proficiency: 30 },
        { name: "Next.js", proficiency: 30 },
        { name: "Tailwind CSS", proficiency: 30 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "PHP", proficiency: 75 },
        { name: "C#", proficiency: 70 },
        { name: "Python", proficiency: 65 },
        { name: "Django", proficiency: 60 },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Android (Java)", proficiency: 50 },
      ],
    },
    {
      title: "Database & Cloud",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MongoDB", proficiency: 55 },
        { name: "MySQL", proficiency: 80 },
        { name: "Firebase", proficiency: 30 },
        { name: "AWS", proficiency: 60 },
        { name: "Vercel", proficiency: 85 },
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Figma className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Figma", proficiency: 80 },
        { name: "Wireframing", proficiency: 85 },
        { name: "Prototyping", proficiency: 75 },
      ],
    },
    {
      title: "Other Skills",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git & GitHub", proficiency: 50 },
        { name: "Docker", proficiency: 60 },
        { name: "CI/CD", proficiency: 65 },
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
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
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm font-medium text-gray-500">{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                        </div>
                      </div>
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
