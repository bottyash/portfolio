"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ui", name: "UI/UX Design" },
    { id: "other", name: "Other" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product catalog, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A mobile application for managing tasks, setting reminders, and tracking progress with intuitive UI.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 3,
      title: "Portfolio Website Design",
      description: "A modern and responsive portfolio website design for creative professionals with dark/light mode.",
      image: "/placeholder.svg?height=400&width=600",
      category: "ui",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 4,
      title: "Weather Forecast Dashboard",
      description:
        "A weather dashboard that displays current and forecasted weather data using external API integration.",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["JavaScript", "HTML/CSS", "OpenWeather API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A mobile app that tracks workouts, nutrition, and provides personalized fitness recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      category: "mobile",
      technologies: ["Flutter", "Firebase", "Google Fit API"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "A tool for visualizing complex datasets with interactive charts and filtering capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "other",
      technologies: ["D3.js", "React", "Node.js", "Express"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Check out some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button asChild size="sm" variant="secondary">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-1" /> Preview
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="secondary">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" /> Code
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Repository
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
