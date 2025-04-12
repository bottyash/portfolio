"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">Dev</span>Portfolio
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              A passionate BTech IT student creating innovative solutions through technology.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <Link href="https://github.com/bottyash" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <Link href="https://www.linkedin.com/in/yash-parmar-5a3222221/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <Link href="https://x.com/whooyash" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              >
                <Link href="https://instagram.com/whooyash" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 hover:bg-gray-700"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All the details are best of knowledege and keeps getting updates timely :)</p>
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Cookies Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
