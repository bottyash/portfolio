"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ChevronDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroRevamp() {
    const [currentRole, setCurrentRole] = useState(0)
    const roles = [
        "Full-Stack Developer",
        "Tech Enthusiast",
        "Problem Solver",
        "Lifelong Learner"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <motion.div
                    className="max-w-5xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                >
                    {/* Greeting */}
                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-xl text-blue-600 dark:text-cyan-400 font-medium mb-4"
                    >
                        👋 Hello, I'm
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={fadeIn}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900 dark:text-white"
                    >
                        Yash <span className="gradient-text">Parmar</span>
                    </motion.h1>

                    {/* Animated Role */}
                    <motion.div
                        variants={fadeIn}
                        className="h-16 md:h-20 mb-8 flex items-center justify-center"
                    >
                        <motion.h2
                            key={currentRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl md:text-4xl lg:text-5xl font-semibold gradient-text-purple"
                        >
                            {roles[currentRole]}
                        </motion.h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        BTech IT Student passionate about building innovative solutions with modern technologies.
                        Specializing in full-stack development, cloud computing, and creating impactful digital experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeIn}
                        className="flex flex-wrap gap-4 justify-center mb-16"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full hover-lift"
                        >
                            <Link href="#projects">
                                <ExternalLink className="mr-2 h-5 w-5" />
                                View My Work
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-950 text-lg px-8 py-6 rounded-full hover-lift"
                        >
                            <Link href="#contact">
                                <Mail className="mr-2 h-5 w-5" />
                                Get In Touch
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-lg px-8 py-6 rounded-full hover-lift"
                        >
                            <a href="/Parmar_Yash_Resume.pdf" download>
                                <Download className="mr-2 h-5 w-5" />
                                Download CV
                            </a>
                        </Button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={fadeIn}
                        className="flex gap-6 justify-center mb-12"
                    >
                        <Link
                            href="https://github.com/bottyash"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow transition-all"
                        >
                            <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/yash-parmar-5a3222221/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow transition-all"
                        >
                            <Linkedin className="h-6 w-6 text-blue-600" />
                        </Link>
                        <Link
                            href="https://x.com/whooyash"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow transition-all"
                        >
                            <Twitter className="h-6 w-6 text-cyan-500" />
                        </Link>
                        <Link
                            href="mailto:officialparmaryash@gmail.com"
                            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow transition-all"
                        >
                            <Mail className="h-6 w-6 text-emerald-600" />
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeIn}
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4+</div>
                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years Coding</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">6+</div>
                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Projects Built</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10+</div>
                            <div className="text-sm md:text-base text-gray-600 dark:text-gray-400">Technologies</div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        variants={fadeIn}
                        className="flex justify-center"
                    >
                        <Link
                            href="#about"
                            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                        >
                            <span className="text-sm mb-2">Scroll to explore</span>
                            <ChevronDown className="h-6 w-6 animate-bounce-subtle" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
