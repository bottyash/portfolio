"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function ProjectsRevamp() {
    const [filter, setFilter] = useState("all")

    const categories = [
        { id: "all", name: "All Projects" },
        { id: "web", name: "Web Development" },
        { id: "ml", name: "Machine Learning" },
        { id: "iot", name: "IoT & Hardware" }
    ]

    const projects = [
        {
            id: 1,
            title: "GCET Management System (GMS)",
            description: "A comprehensive full-stack departmental project enhancing GCET's college management infrastructure with real-time modules, RESTful APIs, and integrated payment systems.",
            category: "web",
            technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST API", "Payment Gateway"],
            github: "#",
            demo: "#",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            id: 2,
            title: "The Voice",
            description: "Data collection initiative supporting language dataset generation for natural language processing and machine learning applications.",
            category: "ml",
            technologies: ["Python", "NLP", "Machine Learning", "TensorFlow", "Data Science"],
            github: "#",
            demo: "#",
            gradient: "from-indigo-600 to-purple-600"
        },
        {
            id: 3,
            title: "LEARN Network",
            description: "Education-centric project proposing improved metrics and methodologies for evaluating and ranking schools across India.",
            category: "ml",
            technologies: ["Python", "Data Science", "Analytics", "Pandas", "Matplotlib"],
            github: "#",
            demo: "#",
            gradient: "from-emerald-600 to-teal-500"
        },
        {
            id: 4,
            title: "MADS CARS",
            description: "Comprehensive car dealership management software featuring inventory management, booking systems, and user authentication.",
            category: "web",
            technologies: ["C#", "ASP.NET", "Razor Pages", "MySQL", "JavaScript"],
            github: "#",
            demo: "#",
            gradient: "from-violet-600 to-purple-600"
        },
        {
            id: 5,
            title: "Student Management System",
            description: "Robust web-based system for comprehensive student record management including attendance, fees, and performance tracking.",
            category: "web",
            technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
            github: "#",
            demo: "#",
            gradient: "from-orange-600 to-red-500"
        },
        {
            id: 6,
            title: "Smart Attendance System",
            description: "IoT-based project utilizing Arduino and RFID technology to automate attendance recording with real-time synchronization.",
            category: "iot",
            technologies: ["Arduino", "C++", "VB.Net", "RFID", "Excel Integration"],
            github: "#",
            demo: "#",
            gradient: "from-pink-600 to-rose-500"
        }
    ]

    const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter)

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={fadeIn}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 mb-8">
                        A showcase of my technical skills and problem-solving abilities through real-world projects.
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <Button
                                key={cat.id}
                                variant={filter === cat.id ? "default" : "outline"}
                                onClick={() => setFilter(cat.id)}
                                className={`${filter === cat.id
                                        ? "bg-gradient-primary text-white"
                                        : "hover:border-blue-600 dark:hover:border-cyan-400"
                                    } transition-all`}
                            >
                                {cat.name}
                            </Button>
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
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            variants={fadeIn}
                        >
                            <Card className="h-full flex flex-col hover-lift hover-glow border-t-4 border-t-transparent hover:border-t-blue-600 dark:hover:border-t-cyan-400">
                                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                                <CardContent className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                                                +{project.technologies.length - 3}
                                            </Badge>
                                        )}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 flex gap-3">
                                    <Button asChild variant="outline" size="sm" className="flex-1 hover:border-blue-600 dark:hover:border-cyan-400">
                                        <Link href={project.github} target="_blank">
                                            <Github className="h-4 w-4 mr-1" /> Code
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="flex-1 hover:border-blue-600 dark:hover:border-cyan-400">
                                        <Link href={project.demo} target="_blank">
                                            <ExternalLink className="h-4 w-4 mr-1" /> Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
