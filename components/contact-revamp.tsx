"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactRevamp() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const contactInfo = [
        {
            icon: <Mail className="h-8 w-8" />,
            title: "Email",
            details: "officialparmaryash@gmail.com",
            link: "mailto:officialparmaryash@gmail.com",
            gradient: "from-blue-600 to-cyan-500"
        },
        {
            icon: <Phone className="h-8 w-8" />,
            title: "Phone",
            details: "+91 7567983234",
            link: "tel:+917567983234",
            gradient: "from-indigo-600 to-purple-600"
        },
        {
            icon: <MapPin className="h-8 w-8" />,
            title: "Location",
            details: "Vallabh Vidhyanagar, Anand, Gujarat, India",
            link: "https://www.google.com/maps/place/Vallabh+Vidyanagar",
            gradient: "from-emerald-600 to-teal-500"
        }
    ]

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="h-6 w-6" />,
            url: "https://github.com/bottyash",
            color: "hover:text-gray-900 dark:hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="h-6 w-6" />,
            url: "https://www.linkedin.com/in/yash-parmar-5a3222221/",
            color: "hover:text-blue-600"
        },
        {
            name: "Twitter",
            icon: <Twitter className="h-6 w-6" />,
            url: "https://x.com/whooyash",
            color: "hover:text-cyan-500"
        }
    ]

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
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
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-primary mx-auto mb-6 rounded-full" />
                    <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                        Have a project in mind or just want to chat about tech? I'm always open to new opportunities and collaborations!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                variants={fadeIn}
                            >
                                <Link href={info.link} target="_blank" rel="noopener noreferrer">
                                    <Card className="h-full hover-lift hover-glow cursor-pointer border-t-4 border-t-transparent hover:border-t-blue-600 dark:hover:border-t-cyan-400">
                                        <CardContent className="p-8 text-center">
                                            <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${info.gradient} text-white mb-4`}>
                                                {info.icon}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm break-words">
                                                {info.details}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        className="text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={fadeIn}
                    >
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Or connect with me on social media
                        </p>
                        <div className="flex justify-center gap-6">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover-scale hover-glow transition-all text-gray-600 dark:text-gray-300 ${social.color}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Availability */}
                    <motion.div
                        className="mt-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        variants={fadeIn}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse-glow" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Available for freelance projects
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
