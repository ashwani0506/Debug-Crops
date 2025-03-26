// API utility functions

// Plant disease identification API
export async function identifyDisease(imageData: string) {
  try {
    // In a real implementation, you would send the image to an API
    // Example using fetch:
    const response = await fetch("/api/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: imageData }),
    })

    if (!response.ok) {
      throw new Error("Failed to identify disease")
    }

    return await response.json()
  } catch (error) {
    console.error("Error identifying disease:", error)
    throw error
  }
}

// Weather API
export async function getWeatherData(location: string) {
  try {
    // Example using a weather API
    const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`)

    if (!response.ok) {
      throw new Error("Failed to fetch weather data")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching weather data:", error)
    throw error
  }
}

// Encyclopedia API
export async function getDiseases(category?: string) {
  try {
    const url = category && category !== "all" ? `/api/diseases?category=${category}` : "/api/diseases"

    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch diseases")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching diseases:", error)
    throw error
  }
}

export async function getDiseaseById(id: string) {
  try {
    const response = await fetch(`/api/diseases/${id}`)

    if (!response.ok) {
      throw new Error("Failed to fetch disease details")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching disease details:", error)
    throw error
  }
}

