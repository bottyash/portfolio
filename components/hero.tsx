"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const phrases = ["I am a Tech Enthusiast", " I am Learning how to Teach Computers", "and a Little-Bit of Everything"]

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
          setTimeout(() => setIsDeleting(true), 1000)
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

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-medium text-primary mb-2">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">Parmar Yash </h1>
            <div className="h-8 mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-gray-700">
                <span className="text-primary">{text}</span>
                <span className="animate-blink">|</span>
              </h3>
            </div>
            <p className="text-gray-600 mb-8 max-w-lg">
              A passionate BTech IT student. Creating innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex mt-8 space-x-4">
              <Link href="https://github.com/bottyash" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/yash-parmar-5a3222221/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/whooyash" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
<div className="flex justify-center">
  <div className="relative -ml-4">
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-75 blur"></div>
    <img
      src="/profile-photo.jpg"
      alt="Parmar Yash Kiritkumar"
      className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white"
    />
  </div>
</div>



          </motion.div>
        </div>
      </div>
    </section>
  )
}
