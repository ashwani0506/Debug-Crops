"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Upload,
  Cloud,
  Sun,
  CloudRain,
  ArrowRight,
  Check,
  AlertCircle,
  AlertTriangle,
  Droplets,
  Wind,
  ChevronDown,
  Leaf,
  Shield,
  BarChart,
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"


// Add type declaration for the translate element
declare global {
  interface Window {
    googleTranslateElementInit: () => void
  }
}

export default function HomePage() {
  const [email, setEmail] = useState("")

  // Add Google Translate initialization
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    script.async = true
    document.head.appendChild(script)

    const style = document.createElement('style')
    style.textContent = `
      .goog-te-gadget { font-family: inherit !important; }
      .goog-te-gadget-simple {
        background-color: rgba(255, 255, 255, 0.8) !important;
        border: none !important;
        padding: 8px 12px !important;
        border-radius: 9999px !important;
        font-size: 14px !important;
        line-height: 1 !important;
        display: inline-flex !important;
        align-items: center !important;
        backdrop-filter: blur(8px) !important;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
      }
      .goog-te-gadget-simple:hover { background-color: white !important; }
      .goog-te-menu-value {
        color: #22c55e !important;
        display: flex !important;
        align-items: center !important;
        gap: 4px !important;
      }
      .goog-te-menu-value span { border: none !important; }
      .goog-te-menu-value img { display: none !important; }
      .goog-te-gadget-icon { display: none !important; }
      .goog-te-banner-frame { display: none !important; }
      .goog-te-combo { display: none !important; }
      #google_translate_element select { display: none !important; }
      .goog-te-menu-frame { box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important; }
      .VIpgJd-ZVi9od-l4eHX-hSRGPd { display: none !important; }
      .goog-te-menu-value span:not(:first-child) { display: none !important; }
      .goog-te-menu-value span:first-child { color: #22c55e !important; }
    `
    document.head.appendChild(style)

    window.googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'hi,mr',
        layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      }, 'google_translate_element')
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
      delete (window as any).googleTranslateElementInit
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would connect to your API
    console.log("Sign up with:", email)
    setEmail("")
    // Show success message or redirect
  }

  // Load Spline viewer script
  useEffect(() => {
    // Load the script
    const script = document.createElement("script")
    script.type = "module"
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"
    document.head.appendChild(script)

    // Create and append the spline-viewer element
    const splineContainer = document.getElementById("spline-container")
    if (splineContainer) {
      // Clear any existing content
      splineContainer.innerHTML = ""

      // Create the spline-viewer element
      const splineViewer = document.createElement("spline-viewer")
      splineViewer.setAttribute("url", "https://prod.spline.design/BtaQPPoryNhEQl9M/scene.splinecode")
      splineViewer.style.width = "100%"
      splineViewer.style.height = "100%"
      splineViewer.style.position = "absolute"
      splineViewer.style.top = "0"
      splineViewer.style.left = "0"
      splineViewer.setAttribute("loading-anim", "true")
      splineViewer.setAttribute("hint", "true")
      splineViewer.setAttribute("touch-action", "pan-y")

      // Append to the container
      splineContainer.appendChild(splineViewer)
    }

    // Cleanup function
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-green-light">
      {/* Add Google Translate Element */}
      <div 
        id="google_translate_element" 
        className="fixed top-6 right-36 z-50"
      ></div>
      {/* Hero Landing Section */}
      <section className="relative min-h-screen flex flex-col justify-end items-center pt-24 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#c7fff3] via-[#c7fff3] to-white z-10"></div>
          <Image
            src="/images/farm-field.jpg" 
            alt="Healthy crops background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>

        {/* Spline 3D element container - make it take up most of the screen */}
        <div id="spline-container" className="absolute inset-0 z-20"></div>

        {/* Move the content to the bottom portion of the screen */}
        <div className="container mx-auto px-4 relative z-30 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-text mb-6 leading-tight"
            >
              Protect Your Crops with <span className="text-green">AI-Powered</span> Disease Detection
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-text/80 mb-10 max-w-3xl mx-auto"
            >
              Upload photos of your plants and get instant disease identification, treatment recommendations, and
              preventive measures to maximize your yield and protect your investment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-green hover:bg-green-dark text-white rounded-full px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/identify">
                  <Upload className="mr-2 h-5 w-5" />
                  Identify Disease Now
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-green text-green hover:bg-green/10 rounded-full px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
              >
                <a href="#signup">Sign Up</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center z-30"
        >
          <motion.a
            href="#features"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="flex flex-col items-center text-text/70 hover:text-green transition-colors"
          >
            <span className="mb-2">Discover Features</span>
            <ChevronDown className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "45+", label: "Crop Types", icon: <Leaf className="h-8 w-8 text-green" /> },
              { value: "200+", label: "Plant Diseases", icon: <Shield className="h-8 w-8 text-warning" /> },
              { value: "82%", label: "Accuracy Rate", icon: <BarChart className="h-8 w-8 text-blue" /> },
              { value: "24/7", label: "AI Assistance", icon: <AlertCircle className="h-8 w-8 text-green" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-light/50"
              >
                <div className="mb-3 p-3 rounded-full bg-white shadow-md">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-text mb-1">{stat.value}</h3>
                <p className="text-text/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Powerful Features for Farmers</h2>
            <div className="h-1 w-20 bg-green mx-auto mb-6"></div>
            <p className="text-lg text-text/80">
              Our platform combines cutting-edge AI technology with agricultural expertise to provide you with the tools
              you need to protect your crops.
            </p>
          </motion.div>

          <div className="space-y-32">
            {/* Feature 1: AI Disease Detection */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full py-20 bg-white border-y border-gray-light"
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">AI-Powered Disease Detection</h2>
                    <div className="h-1 w-20 bg-green mb-6"></div>
                    <p className="text-xl text-text mb-6">
                      Our advanced artificial intelligence analyzes images of your plants to identify diseases with high
                      accuracy.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Upload photos directly from your device",
                        "Get instant disease identification results",
                        "Receive detailed treatment recommendations",
                        "Track disease history for your crops",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center text-text"
                        >
                          <div className="mr-3 h-6 w-6 rounded-full bg-green/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-green" />
                          </div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="bg-green hover:bg-green-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="/identify">
                        Try Disease Detection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 relative"
                  >
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-green/20 to-transparent z-10"></div>
                      <Image
                        src="/placeholder.jpg" // Changed from placeholder
                        alt="AI Disease Detection"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-1/3 z-20"></div>
                      <div className="absolute bottom-6 left-6 right-6 z-30 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-light">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-warning/20 flex items-center justify-center mr-3">
                            <AlertCircle className="h-5 w-5 text-warning" />
                          </div>
                          <div>
                            <h4 className="text-text font-semibold">Late Blight Detected</h4>
                            <p className="text-text text-sm">Confidence: 92%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Encyclopedia */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full py-20 bg-gray-light border-b border-gray-light"
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                      Comprehensive Disease Encyclopedia
                    </h2>
                    <div className="h-1 w-20 bg-green mb-6"></div>
                    <p className="text-xl text-text mb-6">
                      Access our extensive database of plant diseases with detailed information on symptoms, causes, and
                      treatments.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {[
                        { title: "Fungal Diseases", count: "45+ entries" },
                        { title: "Bacterial Diseases", count: "30+ entries" },
                        { title: "Viral Diseases", count: "25+ entries" },
                        { title: "Pest Damage", count: "35+ entries" },
                      ].map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-white p-4 rounded-xl border border-gray-light"
                        >
                          <h4 className="text-text font-semibold">{category.title}</h4>
                          <p className="text-green text-sm">{category.count}</p>
                        </motion.div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="bg-green hover:bg-green-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="/encyclopedia">
                        Explore Encyclopedia
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Late Blight", image: "/images/diseases/late-blight.jpg" }, // Changed from placeholder
                        { name: "Powdery Mildew", image: "/images/diseases/powdery-mildew.jpg" }, // Changed from placeholder
                        { name: "Leaf Spot", image: "/images/diseases/leaf-spot.jpg" }, // Changed from placeholder
                        { name: "Rust", image: "/images/diseases/rust.jpg" }, // Changed from placeholder
                      ].map((disease, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5 }}
                          className="group relative rounded-xl overflow-hidden shadow-lg"
                        >
                          <div className="aspect-square relative">
                            <Image
                              src={disease.image || "/placeholder.svg"}
                              alt={disease.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h4 className="text-white font-medium">{disease.name}</h4>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Weather */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="w-full py-20 bg-white"
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Agricultural Weather Insights</h2>
                    <div className="h-1 w-20 bg-green mb-6"></div>
                    <p className="text-xl text-text mb-6">
                      Get accurate weather forecasts and agricultural insights to help you plan your farming activities
                      effectively.
                    </p>
                    <div className="space-y-4 mb-8">
                      {[
                        {
                          title: "Disease Risk Prediction",
                          icon: <AlertTriangle className="h-5 w-5 text-warning" />,
                          description: "Forecast disease risk based on weather conditions",
                        },
                        {
                          title: "Irrigation Planning",
                          icon: <Droplets className="h-5 w-5 text-blue" />,
                          description: "Optimize watering schedules based on precipitation forecasts",
                        },
                        {
                          title: "Spraying Conditions",
                          icon: <Wind className="h-5 w-5 text-green" />,
                          description: "Identify ideal times for pesticide and fertilizer application",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start p-4 bg-gray-light rounded-xl border border-gray-light"
                        >
                          <div className="mr-4 h-10 w-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                            {feature.icon}
                          </div>
                          <div>
                            <h4 className="text-text font-semibold">{feature.title}</h4>
                            <p className="text-text">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="bg-green hover:bg-green-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <Link href="/weather">
                        Check Weather Forecast
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-light">
                      <div className="p-6 border-b border-gray-light">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-xl font-semibold text-text">Weather Forecast</h3>
                          <div className="text-green">Farming District</div>
                        </div>
                        <div className="flex items-center mb-6">
                          <Sun className="h-16 w-16 text-blue mr-4" />
                          <div>
                            <div className="text-4xl font-bold text-text">24°C</div>
                            <div className="text-text">Sunny</div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-text font-semibold mb-4">5-Day Forecast</h4>
                        <div className="space-y-3">
                          {[
                            { day: "Today", temp: "24°", icon: <Sun className="h-5 w-5 text-blue" /> },
                            { day: "Tomorrow", temp: "22°", icon: <Cloud className="h-5 w-5 text-blue" /> },
                            { day: "Wednesday", temp: "19°", icon: <CloudRain className="h-5 w-5 text-blue" /> },
                            { day: "Thursday", temp: "21°", icon: <Cloud className="h-5 w-5 text-blue" /> },
                            { day: "Friday", temp: "25°", icon: <Sun className="h-5 w-5 text-blue" /> },
                          ].map((day, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center justify-between py-2 border-b border-gray-light last:border-0"
                            >
                              <span className="text-text">{day.day}</span>
                              <div className="flex items-center">
                                {day.icon}
                                <span className="ml-2 text-text">{day.temp}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Diseases Section */}
      <section className="py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <Card className="bg-white border-gray-light rounded-2xl">
            <CardContent className="p-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-text mb-6"
              >
                Featured Plant Diseases
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
              >
                {[
                  {
                    name: "Late Blight",
                    crop: "Potato & Tomato",
                    image: "/images/diseases/late-blight-card.jpg", // Changed from placeholder
                  },
                  {
                    name: "Powdery Mildew",
                    crop: "Various Crops",
                    image: "/images/diseases/powdery-mildew-card.jpg", // Changed from placeholder
                  },
                  {
                    name: "Rust",
                    crop: "Wheat & Cereals",
                    image: "/images/diseases/rust-card.webp", // Changed from placeholder
                  },
                  {
                    name: "Leaf Spot",
                    crop: "Various Crops",
                    image: "/images/diseases/leaf-spot-card.webp", // Changed from placeholder
                  },
                ].map((disease, index) => (
                  <Link
                    key={index}
                    href={`/encyclopedia/${disease.name.toLowerCase().replace(" ", "-")}`}
                    className="block"
                  >
                    <div className="bg-gray-light rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <img
                        src={disease.image || "/placeholder.svg"}
                        alt={disease.name}
                        className="w-full h-40 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-bold text-text">{disease.name}</h3>
                        <p className="text-sm text-text/70">{disease.crop}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-green text-green hover:bg-green/20 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Link href="/encyclopedia">View All Diseases</Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Ready to Protect Your Crops?</h2>
            <div className="h-1 w-20 bg-green mx-auto mb-6"></div>
            <p className="text-lg text-text/80 mb-8">
              Join thousands of farmers who are using Debug Crops to identify and treat plant diseases. Sign up today
              for free and start protecting your investment.
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-full border border-gray-light focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="bg-green hover:bg-green-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </Button>
              </div>
              <p className="text-sm text-text/60 mt-3">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </motion.form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-white text-text py-8 border-t border-gray-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Debug Crops</h3>
              <p className="text-text/80">
                Helping farmers identify and treat plant diseases to improve crop yield and quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-text/80 hover:text-green">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/identify" className="text-text/80 hover:text-green">
                    Identify Disease
                  </Link>
                </li>
                <li>
                  <Link href="/encyclopedia" className="text-text/80 hover:text-green">
                    Encyclopedia
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-text/80 hover:text-green">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-text/80 mb-2">Stay updated with our latest news and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-light text-text border-gray-light rounded-l-full w-full"
                />
                <Button className="rounded-l-none rounded-r-full bg-green hover:bg-green-dark transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-light mt-8 pt-6 text-center text-text/80">
            <p>&copy; {new Date().getFullYear()} Debug Crops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}



