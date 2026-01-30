"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FooterRevamp() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/bottyash", label: "GitHub" },
        { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/yash-parmar-5a3222221/", label: "LinkedIn" },
        { icon: <Twitter className="h-5 w-5" />, href: "https://x.com/whooyash", label: "Twitter" },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:officialparmaryash@gmail.com", label: "Email" }
    ]

    const quickLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ]

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="text-2xl font-bold mb-4 block">
                            <span className="gradient-text">Yash Parmar</span>
                        </Link>
                        <p className="text-gray-400 mb-4">
                            Full-Stack Developer passionate about building innovative solutions with modern technologies.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-gray-800 hover:bg-gradient-primary transition-all hover-scale"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="mailto:officialparmaryash@gmail.com" className="hover:text-cyan-400 transition-colors">
                                    officialparmaryash@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917567983234" className="hover:text-cyan-400 transition-colors">
                                    +91 7567983234
                                </a>
                            </li>
                            <li>Vallabh Vidhyanagar, Anand, Gujarat, India</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        © {currentYear} Yash Parmar. Made with <Heart className="h-4 w-4 text-red-500 fill-current" /> and lots of ☕
                    </p>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full border-gray-700 hover:bg-gradient-primary hover:border-transparent transition-all"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    )
}
