import { NextResponse } from "next/server"

// Mock database for disease identification history
const identificationHistory = [
  {
    id: "hist1",
    userId: "1",
    date: "2025-03-15T14:30:00Z",
    imageUrl: "/placeholder.svg?height=200&width=200",
    result: {
      disease: "Late Blight",
      confidence: 92,
      description:
        "Late blight is a plant disease that mainly affects potatoes and tomatoes, causing significant damage to leaves, stems, and fruits.",
      treatment:
        "Apply fungicides containing chlorothalonil, mancozeb, or copper compounds. Remove and destroy infected plant parts.",
    },
  },
  {
    id: "hist2",
    userId: "1",
    date: "2025-03-10T09:15:00Z",
    imageUrl: "/placeholder.svg?height=200&width=200",
    result: {
      disease: "Powdery Mildew",
      confidence: 88,
      description:
        "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray powdery growth on leaf surfaces.",
      treatment:
        "Apply fungicides containing sulfur, neem oil, or potassium bicarbonate. Increase air circulation around plants.",
    },
  },
  {
    id: "hist3",
    userId: "2",
    date: "2025-03-12T11:45:00Z",
    imageUrl: "/placeholder.svg?height=200&width=200",
    result: {
      disease: "Apple Scab",
      confidence: 95,
      description: "Apple scab is a serious disease of apples and crabapples caused by the fungus Venturia inaequalis.",
      treatment: "Apply fungicides in early spring. Remove and destroy fallen leaves where the fungus overwinters.",
    },
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Filter history by user ID
    const userHistory = identificationHistory.filter((item) => item.userId === userId)

    return NextResponse.json(userHistory)
  } catch (error) {
    console.error("Error in history API:", error)
    return NextResponse.json({ error: "Failed to fetch history data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.userId || !data.imageUrl || !data.result) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real app, we would save this to a database
    const newHistoryItem = {
      id: `hist${identificationHistory.length + 1}`,
      userId: data.userId,
      date: new Date().toISOString(),
      imageUrl: data.imageUrl,
      result: data.result,
    }

    // For demo purposes, we'll just return the new history item
    return NextResponse.json(newHistoryItem, { status: 201 })
  } catch (error) {
    console.error("Error saving history:", error)
    return NextResponse.json({ error: "Failed to save history" }, { status: 500 })
  }
}

