"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { Home, BookOpen, Upload, Cloud, Info, Sprout } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "/",
    gradient: "radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(46,125,50,0.06) 50%, rgba(46,125,50,0) 100%)",
    iconColor: "text-green",
  },
  {
    icon: <Info className="h-5 w-5" />,
    label: "About",
    href: "/about",
    gradient: "radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(46,125,50,0.06) 50%, rgba(46,125,50,0) 100%)",
    iconColor: "text-green",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    label: "Features",
    href: "/#features",
    gradient: "radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(46,125,50,0.06) 50%, rgba(46,125,50,0) 100%)",
    iconColor: "text-green",
  },
  {
    icon: <Upload className="h-5 w-5" />,
    label: "Identify",
    href: "/identify",
    gradient: "radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(46,125,50,0.06) 50%, rgba(46,125,50,0) 100%)",
    iconColor: "text-green",
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    label: "Weather",
    href: "/weather",
    gradient: "radial-gradient(circle, rgba(46,125,50,0.15) 0%, rgba(46,125,50,0.06) 50%, rgba(46,125,50,0) 100%)",
    iconColor: "text-green",
  },
]


const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function AnimatedMenu() {
  const { theme } = useTheme()

  return (
    <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">
      <Link href="/" className="flex items-center gap-2">
        <Sprout className="h-6 w-6 text-green-600" />
        <span className="text-xl font-semibold">Debug Crops</span>
      </Link>

      <div className="flex-1 flex justify-center">
        <motion.nav
          className="p-1 rounded-full bg-transparent backdrop-blur-lg relative overflow-hidden"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            className="absolute -inset-2 bg-gradient-radial from-transparent via-green/30 via-30% via-green/30 via-60% via-green/30 via-90% to-transparent rounded-full z-0 pointer-events-none"
            variants={navGlowVariants}
          />
          <ul className="flex items-center gap-1 relative z-10">
            {menuItems.map((item, index) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-full overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                      borderRadius: "9999px",
                    }}
                  />
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-1 relative z-10 bg-transparent text-text group-hover:text-green transition-colors rounded-full"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </motion.a>
                  <motion.a
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-1 absolute inset-0 z-10 bg-transparent text-text group-hover:text-green transition-colors rounded-full"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>

      <div className="flex items-center gap-2">
        <Link 
          href="/sign-in" 
          className="flex items-center gap-1 text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-full transition-colors"
        >
          <span>→</span> Log in
        </Link>
        <Link 
          href="/sign-up" 
          className="bg-green-600 text-white px-4 py-1.5 rounded-full hover:bg-green-700 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}

