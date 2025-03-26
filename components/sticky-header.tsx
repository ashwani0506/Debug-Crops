"use client"

import Link from "next/link"
import { Bug } from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatedMenu } from "@/components/animated-menu"
import { Button } from "@/components/ui/button"

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      } bg-[#c7fff3]/90 backdrop-blur-md`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Bug className="h-6 w-6 text-green" />
            <span className="text-xl font-bold text-text">Debug Crops</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <AnimatedMenu />
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            asChild
            variant="outline"
            className="border-green text-green hover:bg-green/10 rounded-full transition-all duration-300"
          >
            <Link href="/login">Log in</Link>
          </Button>

          <Button asChild className="bg-green hover:bg-green-dark text-white rounded-full transition-all duration-300">
            <Link href="#signup">Sign up</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <button className="text-text p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

