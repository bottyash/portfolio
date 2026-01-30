"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Layout, Server, Cloud, Smartphone } from "lucide-react"

export function SkillsRevamp() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Layout className="h-6 w-6" />,
            color: "from-blue-600 to-cyan-500",
            skills: [
                { name: "HTML/CSS", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "React.js", level: 80 },
                { name: "Next.js", level: 75 },
                { name: "Tailwind CSS", level: 85 }
            ]
        },
        {
            title: "Backend Development",
            icon: <Server className="h-6 w-6" />,
            color: "from-indigo-600 to-purple-600",
            skills: [
                { name: "PHP (Laravel)", level: 85 },
                { name: "C# (.NET)", level: 80 },
                { name: "Python (Django)", level: 75 },
                { name: "Java", level: 75 },
                { name: "Node.js", level: 70 }
            ]
        },
        {
            title: "Database & Cloud",
            icon: <Database className="h-6 w-6" />,
            color: "from-emerald-600 to-teal-500",
            skills: [
                { name: "MySQL", level: 90 },
                { name: "MongoDB", level: 70 },
                { name: "Firebase", level: 75 },
                { name: "AWS", level: 65 },
                { name: "GCP", level: 60 }
            ]
        },
        {
            title: "Programming Languages",
            icon: <Code className="h-6 w-6" />,
            color: "from-violet-600 to-purple-600",
            skills: [
                { name: "C/C++", level: 85 },
                { name: "Python", level: 80 },
                { name: "JavaScript", level: 85 },
                { name: "PHP", level: 85 },
                { name: "C#", level: 80 }
            ]
        },
        {
            title: "Mobile Development",
            icon: <Smartphone className="h-6 w-6" />,
            color: "from-orange-600 to-red-500",
            skills: [
                { name: "Android (Java)", level: 70 },
                { name: "React Native", level: 60 }
            ]
        },
        {
            title: "Tools & Other",
            icon: <Cloud className="h-6 w-6" />,
            color: "from-pink-600 to-rose-500",
            skills: [
                { name: "Git & GitHub", level: 85 },
                { name: "Docker", level: 60 },
                { name: "Figma", level: 80 },
                { name: "Agile/Scrum", level: 75 },
                { name: "RESTful APIs", level: 85 }
            ]
        }
    ]

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        A comprehensive toolkit of technologies I've mastered through hands-on projects and continuous learning.
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
                            <Card className="h-full hover-lift hover-glow border-t-4 border-t-transparent hover:border-t-blue-600 dark:hover:border-t-cyan-400">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-6">
                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                                            {category.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {category.skills.map((skill) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between mb-2">
                                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                    <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                                                    <motion.div
                                                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: 0.2 }}
                                                    />
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
