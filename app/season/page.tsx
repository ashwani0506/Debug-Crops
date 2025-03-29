"use client"

import { motion } from "framer-motion"
import { Sun, Cloud, Snowflake } from "lucide-react"

export default function SeasonPage() {
  return (
    <div className="min-h-screen bg-[#e6f7e9] py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 max-w-4xl"
      >
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-center text-green-700 mb-12 flex items-center justify-center gap-2">
            <span className="text-2xl">🌱</span> 
            Seasonal Crop Calendar 
            <span className="text-2xl">📅</span>
          </h1>

          <div className="space-y-6">
            {/* Summer Season */}
            <div className="bg-[#ff9933] p-6 rounded-xl text-white">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <Sun className="h-6 w-6" /> Summer (March - June)
              </h2>
              <p className="text-lg mb-2">
                <span className="font-semibold">Suggested Crops:</span> Rice, Maize, Cotton, Sugarcane
              </p>
              <img src="/summer-farming.webp" alt="Summer Farming" className="w-full h-48 object-cover rounded-lg mt-4" />
            </div>

            {/* Monsoon Season */}
            <div className="bg-[#4CAF50] p-6 rounded-xl text-white">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <Cloud className="h-6 w-6" /> Monsoon (July - October)
              </h2>
              <p className="text-lg mb-4">
                <span className="font-semibold">Suggested Crops:</span> Paddy, Jowar, Bajra, Tur
              </p>
              <div className="w-full h-48 bg-[#3d8c40] rounded-lg flex items-center justify-center">
                <Cloud className="h-16 w-16 opacity-50" />
              </div>
            </div>

            {/* Winter Season */}
            <div className="bg-[#2196F3] p-6 rounded-xl text-white">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
                <Snowflake className="h-6 w-6" /> Winter (November - February)
              </h2>
              <p className="text-lg mb-2">
                <span className="font-semibold">Suggested Crops:</span> Wheat, Mustard, Barley, Gram
              </p>
              <img src="/winter-farming.webp" alt="Winter Farming" className="w-full h-48 object-cover rounded-lg mt-4" />
            </div>

            {/* Weather Tips */}
            <div className="bg-[#fff3cd] p-6 rounded-xl border-l-4 border-[#ffc107] mt-8">
              <h2 className="text-xl font-semibold text-[#856404] mb-4">
                ⛅ Weather-based Farming Tips
              </h2>
              <ul className="space-y-2 text-[#856404]">
                <li className="flex items-center gap-2">
                  🌱 Water crops early in the morning to prevent evaporation.
                </li>
                {/* Add more tips as needed */}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}