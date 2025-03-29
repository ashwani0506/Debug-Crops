"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, BookOpen, Cloud, Book } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect } from "react"

export default function GuidePage() {
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

  return (
    <div className="min-h-screen bg-[#c8fcf4] py-20">
      {/* Add Google Translate Element */}
      <div 
        id="google_translate_element" 
        className="fixed top-6 right-32 z-50"
      ></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-[#1b4332] mb-12 flex items-center justify-center gap-2">
            <span className="text-2xl">🌿</span> 
            Farmer's Smart Guide 
            <span className="text-2xl">🌱</span>
          </h1>
          
          <div className="space-y-8">
            <div className="bg-[#e8f3eb] p-6 rounded-xl border-l-[6px] border-[#1b4332]">
              <h2 className="text-xl font-semibold text-[#1b4332]">Step 1:</h2>
              <p className="text-[#2d5a40] mt-2">
                To identify the crop disease, click the green button below where it is written 
                <span className="italic">"Identify Disease Now and Get the Cure and Prevention."</span>
              </p>
              <div className="mt-4 flex justify-center">
                <Button asChild className="bg-[#1b4332] hover:bg-[#2d5a40] text-white px-8 py-6 text-lg rounded-xl">
                  <Link href="/identify">
                    <span className="mr-2">🔍</span>
                    Identify Disease Now
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#e8f3eb] p-6 rounded-xl border-l-[6px] border-[#1b4332]">
              <h2 className="text-xl font-semibold text-[#1b4332]">Step 2:</h2>
              <p className="text-[#2d5a40] mt-2">
                If you want to see the <span className="font-semibold">features</span>, click{" "}
                <Link href="/#features" className="text-[#1b4332] font-semibold hover:underline">Features</Link>.
              </p>
            </div>

            <div className="bg-[#e8f3eb] p-6 rounded-xl border-l-[6px] border-[#1b4332]">
              <h2 className="text-xl font-semibold text-[#1b4332]">Step 3:</h2>
              <p className="text-[#2d5a40] mt-2">
                To see the <span className="font-semibold">Encyclopedia</span>, click the button below.
              </p>
              <div className="mt-4 flex justify-center">
                <Button asChild className="bg-[#1b4332] hover:bg-[#2d5a40] text-white px-8 py-6 text-lg rounded-xl">
                  <Link href="/encyclopedia">
                    <span className="mr-2">📚</span>
                    Encyclopedia
                  </Link>
                </Button>
              </div>
            </div>

            <div className="bg-[#e8f3eb] p-6 rounded-xl border-l-[6px] border-[#1b4332]">
              <h2 className="text-xl font-semibold text-[#1b4332]">Step 4:</h2>
              <p className="text-[#2d5a40] mt-2">
                To check the <span className="font-semibold">weather</span>, click{" "}
                <Link href="/weather" className="text-[#1b4332] font-semibold hover:underline">Weather</Link>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}