"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ml", name: "Machine Learning" },
    { id: "other", name: "Other" },
  ]

  const projects = [
    {
      id: 1,
      title: "GCET Management System (GMS)",
      description:
        "A comprehensive full-stack departmental project enhancing GCET's homegrown college management infrastructure with real-time modules, RESTful APIs, and integrated online payment systems.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML", "CSS", "REST API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "The Voice",
      description:
        "A data collection initiative supporting language dataset generation for natural language processing and machine learning applications, contributing to NLP research.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ml",
      technologies: ["Python", "NLP", "Machine Learning", "Data Science", "TensorFlow"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "LEARN (Learning Evaluation and Rankings Network)",
      description:
        "An education-centric field project proposing improved metrics and methodologies for evaluating and ranking schools across India based on comprehensive data analysis.",
      image: "/placeholder.svg?height=400&width=600",
      category: "other",
      technologies: ["Python", "Data Science", "Analytics", "Pandas", "Matplotlib"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "MADS CARS",
      description:
        "A comprehensive car dealership management software developed for Software Engineering course, featuring inventory management, booking systems, and user authentication.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["C#", "ASP.NET", "Razor Pages", "MySQL", "HTML", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "Student Management System",
      description:
        "A robust web-based system for comprehensive student record management, including attendance tracking, fee management, and academic performance monitoring.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "Smart Attendance System",
      description:
        "An IoT-based project utilizing Arduino and RFID technology to automate attendance recording with real-time data synchronization and Excel report generation.",
      image: "/placeholder.svg?height=400&width=600",
      category: "other",
      technologies: ["Arduino", "C++", "VB.Net", "RFID", "Excel Integration"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Check out some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className={`${filter === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none"
                      : "hover:border-purple-600"
                    } transition-all duration-300`}
                >
                  {category.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover-lift hover:shadow-2xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-purple-600">
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-100 to-pink-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-purple-200 group-hover:scale-110 transition-transform duration-300">
                      {project.id}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Button asChild size="sm" variant="secondary" className="hover-scale">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="secondary" className="hover-scale">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" /> Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1 hover:border-purple-600 hover:text-purple-600">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Repository
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1 hover:border-purple-600 hover:text-purple-600">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
