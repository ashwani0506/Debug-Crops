import { NextResponse } from "next/server"

// Mock database for farms
const farms = [
  {
    id: "farm1",
    userId: "1",
    name: "Green Valley Farm",
    location: "Midwest",
    size: "120 acres",
    crops: ["Corn", "Soybeans", "Wheat"],
    soilType: "Loam",
    weatherStation: "MW-Station-42",
    diseaseHistory: [
      {
        disease: "Late Blight",
        date: "2025-02-10T00:00:00Z",
        severity: "Moderate",
        treatment: "Applied copper fungicide",
        resolved: true,
      },
      {
        disease: "Corn Rust",
        date: "2025-01-15T00:00:00Z",
        severity: "Mild",
        treatment: "Applied propiconazole",
        resolved: true,
      },
    ],
  },
  {
    id: "farm2",
    userId: "2",
    name: "Sunrise Orchard",
    location: "West",
    size: "85 acres",
    crops: ["Apples", "Pears", "Cherries"],
    soilType: "Sandy loam",
    weatherStation: "W-Station-17",
    diseaseHistory: [
      {
        disease: "Apple Scab",
        date: "2025-03-01T00:00:00Z",
        severity: "Severe",
        treatment: "Applied myclobutanil",
        resolved: false,
      },
    ],
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const farmId = searchParams.get("id")

    if (farmId) {
      const farm = farms.find((f) => f.id === farmId)

      if (!farm) {
        return NextResponse.json({ error: "Farm not found" }, { status: 404 })
      }

      return NextResponse.json(farm)
    }

    if (userId) {
      // Filter farms by user ID
      const userFarms = farms.filter((farm) => farm.userId === userId)
      return NextResponse.json(userFarms)
    }

    // Return all farms if no filters specified (would be protected in a real app)
    return NextResponse.json(farms)
  } catch (error) {
    console.error("Error in farms API:", error)
    return NextResponse.json({ error: "Failed to fetch farm data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.userId || !data.name || !data.location) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, we would save this to a database
    const newFarm = {
      id: `farm${farms.length + 1}`,
      userId: data.userId,
      name: data.name,
      location: data.location,
      size: data.size || "Unknown",
      crops: data.crops || [],
      soilType: data.soilType || "Unknown",
      weatherStation: data.weatherStation,
      diseaseHistory: [],
    }

    // For demo purposes, we'll just return the new farm
    return NextResponse.json(newFarm, { status: 201 })
  } catch (error) {
    console.error("Error creating farm:", error)
    return NextResponse.json({ error: "Failed to create farm" }, { status: 500 })
  }
}

