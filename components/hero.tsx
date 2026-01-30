"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const phrases = [
    "Tech Enthusiast",
    "Full-Stack Developer",
    "Problem Solver",
    "Lifelong Learner"
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[index]
    const typingSpeed = isDeleting ? 50 : 100

    const handleTyping = () => {
      setText((prev) => {
        const updatedText = isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)

        // Check if phrase is done typing
        if (!isDeleting && updatedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500)
        }

        // Check if deletion is done
        if (isDeleting && updatedText === "") {
          setIsDeleting(false)
          setIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        }

        return updatedText
      })
    }

    const typingTimer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(typingTimer)
  }, [text, isDeleting, index, phrases])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 animate-gradient-shift" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-lg md:text-xl font-medium text-purple-600 mb-2">
                Hello, I'm
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Parmar Yash
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="h-12 mb-6">
              <h3 className="text-2xl md:text-3xl font-semibold">
                <span className="gradient-text-animated">{text}</span>
                <span className="animate-blink text-purple-600">|</span>
              </h3>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                A passionate BTech IT student crafting innovative solutions to real-world problems.
                Specializing in full-stack development, cloud technologies, and turning ideas into reality.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="group relative overflow-hidden">
                <Link href="#projects">
                  <span className="relative z-10">View Projects</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-8 justify-center md:justify-start">
              <Link href="https://github.com/bottyash" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover-scale hover:bg-purple-100 transition-colors">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/yash-parmar-5a3222221/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover-scale hover:bg-purple-100 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/whooyash" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full hover-scale hover:bg-purple-100 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-75 blur-2xl animate-pulse-glow" />

              {/* Profile image */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="/profile-photo.jpg"
                  alt="Parmar Yash Kiritkumar"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <Link href="#about">
            <motion.div
              className="flex flex-col items-center cursor-pointer group"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm text-gray-600 mb-2 group-hover:text-purple-600 transition-colors">Scroll Down</span>
              <ChevronDown className="h-6 w-6 text-purple-600 group-hover:text-pink-600 transition-colors" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
