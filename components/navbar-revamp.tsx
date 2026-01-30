"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function NavbarRevamp() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)

            // Update active section based on scroll position
            const sections = ["home", "about", "skills", "projects", "contact"]
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
                    : "bg-transparent"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold">
                        <span className="gradient-text">Yash</span>
                        <span className="text-gray-900 dark:text-white">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium transition-colors relative ${activeSection === item.href.slice(1)
                                        ? "text-blue-600 dark:text-cyan-400"
                                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                                    }`}
                            >
                                {item.name}
                                {activeSection === item.href.slice(1) && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                                        layoutId="activeSection"
                                    />
                                )}
                            </Link>
                        ))}
                        <Button
                            asChild
                            size="sm"
                            className="bg-gradient-primary text-white hover:opacity-90"
                        >
                            <a href="/Parmar_Yash_Resume.pdf" download>
                                <Download className="mr-2 h-4 w-4" />
                                Resume
                            </a>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.nav
                        className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`font-medium transition-colors ${activeSection === item.href.slice(1)
                                            ? "text-blue-600 dark:text-cyan-400"
                                            : "text-gray-700 dark:text-gray-300"
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button
                                asChild
                                size="sm"
                                className="bg-gradient-primary text-white w-full"
                            >
                                <a href="/Parmar_Yash_Resume.pdf" download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </a>
                            </Button>
                        </div>
                    </motion.nav>
                )}
            </div>
        </motion.header>
    )
}
