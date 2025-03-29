import { NextResponse } from "next/server"
import { getMockWeatherData } from '@/lib/utils/mockWeather';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location") || "Farming District"

    console.log(`Fetching weather data for location: ${location}`)

    // Generate mock weather data instead of calling the external API
    const weatherData = getMockWeatherData(location);
    
    // Add a small delay to simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log("Weather data processed successfully")
    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Error in weather API:", error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Failed to fetch weather data" 
    }, { status: 500 })
  }
}

// Helper functions for the mock data implementation are now in the mockWeather.ts file

