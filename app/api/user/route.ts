import { NextResponse } from "next/server"

// Mock database for users
const users = [
  {
    id: "1",
    name: "John Farmer",
    email: "john@farm.com",
    farms: [{ id: "farm1", name: "Green Valley Farm", location: "Midwest", size: "120 acres" }],
    savedDiseases: ["late-blight", "powdery-mildew"],
  },
  {
    id: "2",
    name: "Sarah Grower",
    email: "sarah@crops.com",
    farms: [{ id: "farm2", name: "Sunrise Orchard", location: "West", size: "85 acres" }],
    savedDiseases: ["apple-scab", "citrus-canker"],
  },
]

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("id")

    if (userId) {
      const user = users.find((u) => u.id === userId)

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      return NextResponse.json(user)
    }

    // Return all users if no ID specified (would be protected in a real app)
    return NextResponse.json(users)
  } catch (error) {
    console.error("Error in user API:", error)
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    // In a real app, we would create a user in the database
    const newUser = {
      id: `${users.length + 1}`,
      name: data.name,
      email: data.email,
      farms: data.farms || [],
      savedDiseases: [],
    }

    // For demo purposes, we'll just return the new user
    return NextResponse.json(newUser, { status: 201 })
  } catch (error) {
    console.error("Error creating user:", error)
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
  }
}

