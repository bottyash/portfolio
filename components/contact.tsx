"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: "officialparmaryash@gmail.com",
      link: "mailto:officialparmaryash@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: "+91 7567983234",
      link: "tel:+917567983234",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: "Vallabh Vidhyanagar, Anand, India",
      link: "https://www.google.com/maps/place/Vallabh+Vidyanagar,+Anand,+Gujarat",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white flex items-center justify-center min-h-screen">
  <div className="container mx-auto px-4">
    <motion.div
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeIn}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
      <p className="max-w-2xl mx-auto text-gray-600">
        Got a project in mind? Or just want to nerd out over tech stuff or pitch a wild idea at 2 AM? 
        I’m all ears (and coffee). Don’t be shy—reach out and let’s make something awesome (or at least 
        mildly impressive) together!
      </p>
    </motion.div>

    <div className="flex justify-center">
      <motion.div
        className="w-full max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={fadeIn}
      >
        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <a
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-primary transition-colors"
                >
                  <div className="mr-4 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-600 mt-1">{info.details}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

  )
}
