import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get("location") || "Farming District"

    // Use the provided API key
    const apiKey = "b159390e3beb6ee17dc9766d76dd2e81"

    console.log(`Fetching weather data for location: ${location}`)

    // Make the API call to WeatherAPI.com with better error handling
    let response
    try {
      response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=7&aqi=no&alerts=no`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store", // Disable caching to ensure fresh data
        },
      )
    } catch (fetchError) {
      console.error("Fetch error:", fetchError)
      throw new Error(`Network error when calling weather API: ${fetchError.message}`)
    }

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`Weather API error (${response.status}):`, errorText)
      throw new Error(`Weather API responded with status: ${response.status}. Details: ${errorText}`)
    }

    // Parse the JSON response
    let data
    try {
      data = await response.json()
    } catch (jsonError) {
      console.error("JSON parsing error:", jsonError)
      throw new Error("Failed to parse weather API response")
    }

    // Validate the response data
    if (!data || !data.location || !data.current || !data.forecast) {
      console.error("Invalid API response structure:", data)
      throw new Error("Weather API returned an invalid response structure")
    }

    // Process the data from WeatherAPI.com format
    const weatherData = {
      current: {
        location: data.location.name,
        temperature: Math.round(data.current.temp_c),
        condition: data.current.condition.text,
        humidity: data.current.humidity,
        wind: Math.round(data.current.wind_kph),
        precipitation: data.current.precip_mm > 0 ? 100 : data.forecast.forecastday[0].day.daily_chance_of_rain,
        uv: data.current.uv > 7 ? "High" : data.current.uv > 3 ? "Moderate" : "Low",
        visibility: `${data.current.vis_km} km`,
        pressure: `${data.current.pressure_mb} hPa`,
        lastUpdated: data.current.last_updated,
      },
      hourly: data.forecast.forecastday[0].hour
        .filter((hour) => {
          const hourTime = new Date(hour.time).getHours()
          const currentHour = new Date().getHours()
          return hourTime >= currentHour
        })
        .slice(0, 8)
        .map((hour) => {
          const date = new Date(hour.time)
          return {
            time: date.getHours() === new Date().getHours() ? "Now" : `${date.getHours()}:00`,
            temp: Math.round(hour.temp_c),
            icon: getIconTypeFromCode(hour.condition.code),
            precipitation: hour.chance_of_rain,
          }
        }),
      daily: data.forecast.forecastday.map((day, index) => {
        const date = new Date(day.date)
        return {
          day: index === 0 ? "Today" : date.toLocaleDateString("en-US", { weekday: "long" }),
          high: Math.round(day.day.maxtemp_c),
          low: Math.round(day.day.mintemp_c),
          icon: getIconTypeFromCode(day.day.condition.code),
          condition: day.day.condition.text,
          precipitation: day.day.daily_chance_of_rain,
        }
      }),
      insights: generateInsights(data),
    }

    console.log("Weather data processed successfully")
    return NextResponse.json(weatherData)
  } catch (error) {
    console.error("Error in weather API:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch weather data" }, { status: 500 })
  }
}

// Helper function to map WeatherAPI condition codes to our icon types
function getIconTypeFromCode(code) {
  // Thunderstorm
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) return "cloud-lightning"

  // Drizzle
  if ([1150, 1153, 1168, 1171].includes(code)) return "cloud-drizzle"

  // Rain
  if ([1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246].includes(code)) return "cloud-rain"

  // Snow
  if ([1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282].includes(code)) return "cloud-snow"

  // Cloudy
  if ([1003, 1006, 1009, 1030, 1135, 1147].includes(code)) return "cloud"

  // Sunny/Clear
  if ([1000].includes(code)) return "sun"

  // Default
  return "cloud"
}

// Generate agricultural insights based on weather data
function generateInsights(data) {
  const current = data.current
  const forecast = data.forecast.forecastday

  const insights = []

  // Disease risk based on humidity and precipitation
  const highHumidity = current.humidity > 70
  const rainyDays = forecast.filter((day) => day.day.daily_chance_of_rain > 50).length

  if (highHumidity && rainyDays >= 2) {
    insights.push({
      title: "Crop Disease Risk",
      level: "High",
      icon: "alert-triangle",
      color: "red",
      details:
        "High humidity and forecasted precipitation significantly increase the risk of fungal diseases. Implement preventative measures immediately.",
    })
  } else if (highHumidity || rainyDays >= 2) {
    insights.push({
      title: "Crop Disease Risk",
      level: "Moderate",
      icon: "alert-triangle",
      color: "amber",
      details:
        "Current humidity levels and forecasted precipitation increase the risk of fungal diseases. Consider preventative measures for susceptible crops.",
    })
  } else {
    insights.push({
      title: "Crop Disease Risk",
      level: "Low",
      icon: "alert-triangle",
      color: "green",
      details:
        "Current conditions indicate low risk for fungal diseases. Continue regular monitoring of susceptible crops.",
    })
  }

  // Irrigation needs based on precipitation forecast
  const precipitationNext3Days = forecast.slice(0, 3).reduce((sum, day) => sum + day.day.totalprecip_mm, 0)

  if (precipitationNext3Days < 2) {
    insights.push({
      title: "Irrigation Needs",
      level: "High",
      icon: "droplets",
      color: "amber",
      details: "Low precipitation forecast for the next 3 days. Irrigation will be necessary for most crops.",
    })
  } else if (precipitationNext3Days < 10) {
    insights.push({
      title: "Irrigation Needs",
      level: "Moderate",
      icon: "droplets",
      color: "blue",
      details: "Moderate precipitation expected in the next 3 days. Monitor soil moisture levels for specific crops.",
    })
  } else {
    insights.push({
      title: "Irrigation Needs",
      level: "Low",
      icon: "droplets",
      color: "green",
      details:
        "With the forecasted precipitation, irrigation needs are low for the next 3 days. Monitor soil moisture levels for specific crops.",
    })
  }

  // Harvesting conditions
  const goodHarvestingDays = forecast
    .slice(0, 3)
    .filter((day) => day.day.daily_chance_of_rain < 30 && day.day.maxtemp_c < 30 && day.day.mintemp_c > 10).length

  if (goodHarvestingDays >= 2) {
    insights.push({
      title: "Harvesting Conditions",
      level: "Favorable",
      icon: "sun",
      color: "green",
      details: `Good conditions for harvesting in the next ${goodHarvestingDays} days. Plan accordingly.`,
    })
  } else {
    insights.push({
      title: "Harvesting Conditions",
      level: "Challenging",
      icon: "cloud-rain",
      color: "amber",
      details: "Limited favorable days for harvesting in the near future. Plan carefully and monitor the forecast.",
    })
  }

  // Spraying conditions based on wind and precipitation
  const lowWind = current.wind_kph < 15
  const noPrecipToday = forecast[0].day.daily_chance_of_rain < 20

  if (lowWind && noPrecipToday) {
    insights.push({
      title: "Spraying Conditions",
      level: "Good",
      icon: "wind",
      color: "green",
      details: "Low wind speeds and low precipitation chance make today ideal for pesticide or fertilizer application.",
    })
  } else {
    insights.push({
      title: "Spraying Conditions",
      level: "Poor",
      icon: "wind",
      color: "amber",
      details: `${!lowWind ? "High wind speeds" : "Precipitation forecast"} may reduce effectiveness of spraying. Consider postponing application.`,
    })
  }

  return insights
}

