"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Code, Sparkles } from "lucide-react"

export function AboutRevamp() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const education = [
        {
            degree: "Bachelor of Technology in Information Technology",
            institution: "Government Engineering College, Gandhinagar",
            duration: "2022 - 2026",
            score: "CGPA: 7.52",
            icon: <GraduationCap className="h-6 w-6" />,
            color: "from-blue-600 to-cyan-500"
        },
        {
            degree: "Diploma in Information Technology",
            institution: "Government Polytechnic, Gandhinagar",
            duration: "2019 - 2022",
            score: "Percentage: 90.67%",
            icon: <Award className="h-6 w-6" />,
            color: "from-indigo-600 to-purple-600"
        }
    ]

    const highlights = [
        { icon: <Code className="h-8 w-8" />, label: "Full-Stack Development", value: "Expert" },
        { icon: <Sparkles className="h-8 w-8" />, label: "Problem Solving", value: "Advanced" },
        { icon: <GraduationCap className="h-8 w-8" />, label: "Quick Learner", value: "Always" }
    ]

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Story */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        variants={fadeIn}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                Hey there! I'm a <span className="font-semibold text-blue-600 dark:text-cyan-400">BTech IT student</span> who's
                                been coding since my diploma days. What started as curiosity about how websites work turned into a full-blown
                                passion for building things that matter.
                            </p>
                            <p>
                                I love working across the entire stack - from crafting beautiful, responsive frontends with{" "}
                                <span className="font-semibold">React</span> and <span className="font-semibold">Next.js</span>, to building
                                robust backends with <span className="font-semibold">Laravel</span>, <span className="font-semibold">.NET</span>,
                                and <span className="font-semibold">Django</span>. Cloud technologies like{" "}
                                <span className="font-semibold">AWS</span> and <span className="font-semibold">GCP</span> fascinate me too!
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                                brainstorming the next big idea. I believe in continuous learning and pushing boundaries.
                            </p>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={fadeIn}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Highlights</h3>
                        <div className="grid grid-cols-1 gap-4">
                            {highlights.map((item, index) => (
                                <Card key={index} className="hover-lift hover-glow">
                                    <CardContent className="p-6 flex items-center gap-4">
                                        <div className="p-3 rounded-lg bg-gradient-primary text-white">
                                            {item.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-semibold text-gray-900 dark:text-white">{item.label}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{item.value}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Education Timeline */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    variants={fadeIn}
                >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Education Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                variants={fadeIn}
                            >
                                <Card className="h-full hover-lift border-t-4 border-t-transparent hover:border-t-blue-600 dark:hover:border-t-cyan-400">
                                    <CardContent className="p-6">
                                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${edu.color} text-white mb-4`}>
                                            {edu.icon}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mb-2">{edu.institution}</p>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-gray-500 dark:text-gray-500">{edu.duration}</span>
                                            <span className="font-semibold text-blue-600 dark:text-cyan-400">{edu.score}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
