"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Cloud,
  Sun,
  CloudRain,
  Droplets,
  Wind,
  Thermometer,
  CloudDrizzle,
  CloudLightning,
  CloudSnow,
  AlertTriangle,
} from "lucide-react"
import { getMockWeatherData } from "@/lib/utils/mockWeather"

export default function WeatherPage() {
  const [location, setLocation] = useState("London")
  const [searchQuery, setSearchQuery] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setLoading(true)
        setError(null)

        console.log(`Fetching weather for: ${location}`)
        
        // Instead of making an API call, use our mock data
        const data = getMockWeatherData(location)
        
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 800))
        
        setWeatherData(data)
      } catch (err) {
        console.error("Error generating weather data:", err)
        setError(err.message || "Failed to load weather data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchWeatherData()
  }, [location])

  // Helper function to get icon type
  const getIconType = (condition) => {
    const conditionLower = condition?.toLowerCase() || ""
    if (conditionLower.includes("thunder")) return "cloud-lightning"
    if (conditionLower.includes("drizzle")) return "cloud-drizzle"
    if (conditionLower.includes("rain")) return "cloud-rain"
    if (conditionLower.includes("snow")) return "cloud-snow"
    if (conditionLower.includes("cloud")) return "cloud"
    if (conditionLower.includes("clear") || conditionLower.includes("sun")) return "sun"
    return "cloud"
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setLocation(searchQuery.trim())
      setSearchQuery("")
    }
  }

  const renderWeatherIcon = (icon) => {
    switch (icon) {
      case "sun":
        return <Sun className="h-8 w-8 text-purple" />
      case "cloud":
        return <Cloud className="h-8 w-8 text-purple" />
      case "cloud-rain":
        return <CloudRain className="h-8 w-8 text-purple" />
      case "cloud-drizzle":
        return <CloudDrizzle className="h-8 w-8 text-purple" />
      case "cloud-lightning":
        return <CloudLightning className="h-8 w-8 text-purple" />
      case "cloud-snow":
        return <CloudSnow className="h-8 w-8 text-purple" />
      default:
        return <Cloud className="h-8 w-8 text-purple" />
    }
  }

  const renderInsightIcon = (icon) => {
    switch (icon) {
      case "alert-triangle":
        return <AlertTriangle className="h-6 w-6 text-purple" />
      case "droplets":
        return <Droplets className="h-6 w-6 text-purple" />
      case "sun":
        return <Sun className="h-6 w-6 text-purple" />
      case "wind":
        return <Wind className="h-6 w-6 text-purple" />
      case "cloud-rain":
        return <CloudRain className="h-6 w-6 text-purple" />
      default:
        return <Cloud className="h-6 w-6 text-purple" />
    }
  }

  // We'll keep the fallback data function for compatibility
  const getFallbackWeatherData = () => {
    return getMockWeatherData("Demo Location")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#c7fff3] pt-24 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple"></div>
      </div>
    )
  }

  // If there's an error, use fallback data with a warning banner
  const data = error ? getFallbackWeatherData() : weatherData
  const { current, hourly, daily, insights } = data

  return (
    <div className="min-h-screen bg-[#c7fff3] pt-24">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Weather Forecast</h1>
          <p className="text-gray-300 mb-8">
            Get accurate weather information to plan your farming activities effectively.
          </p>

          {error && (
            <div className="mb-8 bg-red-900/20 border border-red-700 rounded-xl p-4 text-white">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-red-400">Weather API Error</h3>
                  <p className="text-gray-300">{error}</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Showing demo data instead. You can still explore the interface.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for a location..."
                className="pl-10 bg-gray-800 border-gray-700 text-white rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-purple hover:bg-purple/80 rounded-full transition-all duration-300 hover:scale-105"
              >
                Search
              </Button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Current Weather in {current.location}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex items-center">
                    {renderWeatherIcon(getIconType(current.condition))}
                    <div>
                      <p className="text-5xl font-bold text-white">{current.temperature}°C</p>
                      <p className="text-xl text-gray-300">{current.condition}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                    <div className="flex items-center">
                      <Droplets className="h-5 w-5 text-purple mr-2" />
                      <span className="text-white">Humidity: {current.humidity}%</span>
                    </div>
                    <div className="flex items-center">
                      <Wind className="h-5 w-5 text-purple mr-2" />
                      <span className="text-white">Wind: {current.wind} km/h</span>
                    </div>
                    <div className="flex items-center">
                      <CloudRain className="h-5 w-5 text-purple mr-2" />
                      <span className="text-white">Precipitation: {current.precipitation}%</span>
                    </div>
                    <div className="flex items-center">
                      <Sun className="h-5 w-5 text-purple mr-2" />
                      <span className="text-white">UV Index: {current.uv}</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-4">Last updated: {current.lastUpdated}</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-700 rounded-2xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">Agricultural Weather Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 mb-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-purple mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Rain Expected Soon</h3>
                      <p className="text-sm text-gray-300">
                        {daily.find((day) => day.precipitation > 50)?.day || "Upcoming"} rainfall expected. Consider
                        adjusting your spraying and harvesting schedule.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-4">
                  <div className="flex items-start">
                    <Thermometer className="h-6 w-6 text-purple mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">Current Growing Conditions</h3>
                      <p className="text-sm text-gray-300">
                        {current.temperature > 25
                          ? "High temperatures may stress some crops."
                          : current.temperature < 10
                            ? "Low temperatures may slow growth for some crops."
                            : "Current temperature and humidity levels are suitable for most crops in your region."}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="hourly" className="mb-8">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800 rounded-full">
              <TabsTrigger
                value="hourly"
                className="data-[state=active]:bg-purple data-[state=active]:text-white rounded-full"
              >
                Hourly Forecast
              </TabsTrigger>
              <TabsTrigger
                value="daily"
                className="data-[state=active]:bg-purple data-[state=active]:text-white rounded-full"
              >
                7-Day Forecast
              </TabsTrigger>
            </TabsList>
            <TabsContent value="hourly" className="mt-6">
              <Card className="bg-gray-900 border-gray-700 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex overflow-x-auto pb-4 space-x-6">
                    {hourly.map((hour, index) => (
                      <div key={index} className="flex flex-col items-center min-w-[80px]">
                        <p className="text-white font-medium">{hour.time}</p>
                        {renderWeatherIcon(hour.icon)}
                        <p className="text-white font-semibold mt-1">{hour.temp}°C</p>
                        <div className="flex items-center mt-1">
                          <Droplets className="h-3 w-3 text-purple mr-1" />
                          <span className="text-xs text-gray-300">{Math.round(hour.precipitation)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="daily" className="mt-6">
              <Card className="bg-gray-900 border-gray-700 rounded-2xl">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {daily.map((day, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border-b border-gray-800 pb-3 last:border-0 last:pb-0"
                      >
                        <p className="font-medium text-white w-24">{day.day}</p>
                        <div className="flex items-center">{renderWeatherIcon(day.icon)}</div>
                        <p className="text-white hidden md:block">{day.condition}</p>
                        <div className="flex items-center">
                          <Droplets className="h-4 w-4 text-purple mr-1" />
                          <span className="text-gray-300">{Math.round(day.precipitation)}%</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-white">{day.high}°</span>
                          <span className="text-gray-300">{day.low}°</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <h2 className="text-2xl font-bold text-white mb-4">Agricultural Weather Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="rounded-full bg-gray-800 p-2 mr-4">{renderInsightIcon(insight.icon)}</div>
                    <div>
                      <h3 className="font-semibold text-white">{insight.title}</h3>
                      <p className="text-purple font-medium">{insight.level}</p>
                      <p className="text-gray-300 mt-2 text-sm">{insight.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-8 bg-gray-900 border-gray-700 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-white">Weather Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-800 border border-gray-700 rounded-xl aspect-video relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Weather radar map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white bg-gray-800/80 px-4 py-2 rounded-full">Weather Radar Map</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Debug Crops</h3>
              <p className="text-gray-300">
                Helping farmers identify and treat plant diseases to improve crop yield and quality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-purple">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/identify" className="text-gray-300 hover:text-purple">
                    Identify Disease
                  </Link>
                </li>
                <li>
                  <Link href="/encyclopedia" className="text-gray-300 hover:text-purple">
                    Encyclopedia
                  </Link>
                </li>
                <li>
                  <Link href="/weather" className="text-gray-300 hover:text-purple">
                    Weather
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-purple">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-purple">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-purple">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-purple">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-gray-300 mb-2">Stay updated with our latest news and updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white border-gray-700 rounded-l-full w-full"
                />
                <Button className="rounded-l-none rounded-r-full bg-purple hover:bg-purple/80 transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Debug Crops. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

