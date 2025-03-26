import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    // In a real implementation, you would fetch this data from a database
    // Example with a database:
    // const diseases = await prisma.disease.findMany({
    //   where: category ? { category } : undefined
    // });

    // Mock data for demonstration
    const diseases = [
      {
        id: "late-blight",
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        affectedCrops: ["Potato", "Tomato"],
        category: "fungal",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription:
          "A devastating disease that causes dark lesions on leaves and stems, leading to rapid plant death.",
      },
      {
        id: "powdery-mildew",
        name: "Powdery Mildew",
        scientificName: "Various species",
        affectedCrops: ["Cucumber", "Squash", "Pumpkin", "Melon", "Grape"],
        category: "fungal",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Appears as white powdery spots on leaves and stems, reducing plant vigor and yield.",
      },
      {
        id: "bacterial-leaf-spot",
        name: "Bacterial Leaf Spot",
        scientificName: "Xanthomonas spp.",
        affectedCrops: ["Pepper", "Tomato", "Lettuce"],
        category: "bacterial",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Causes water-soaked spots on leaves that eventually turn brown with yellow halos.",
      },
      {
        id: "tomato-mosaic-virus",
        name: "Tomato Mosaic Virus",
        scientificName: "Tomato mosaic virus (ToMV)",
        affectedCrops: ["Tomato", "Pepper", "Eggplant"],
        category: "viral",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Causes mottled light and dark green patterns on leaves and stunted growth.",
      },
      {
        id: "downy-mildew",
        name: "Downy Mildew",
        scientificName: "Peronospora spp.",
        affectedCrops: ["Grape", "Cucumber", "Lettuce", "Spinach"],
        category: "fungal",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Appears as yellow spots on upper leaf surfaces with fuzzy gray-white growth underneath.",
      },
      {
        id: "apple-scab",
        name: "Apple Scab",
        scientificName: "Venturia inaequalis",
        affectedCrops: ["Apple"],
        category: "fungal",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Causes dark, scabby lesions on leaves and fruit, reducing quality and marketability.",
      },
      {
        id: "citrus-canker",
        name: "Citrus Canker",
        scientificName: "Xanthomonas citri",
        affectedCrops: ["Orange", "Lemon", "Lime", "Grapefruit"],
        category: "bacterial",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Causes raised, corky lesions on leaves, stems, and fruit with yellow halos.",
      },
      {
        id: "tobacco-mosaic-virus",
        name: "Tobacco Mosaic Virus",
        scientificName: "Tobacco mosaic virus (TMV)",
        affectedCrops: ["Tobacco", "Tomato", "Pepper"],
        category: "viral",
        image: "/placeholder.svg?height=200&width=200",
        shortDescription: "Causes mottled light and dark green patterns on leaves and stunted growth.",
      },
    ]

    // Filter by category if provided
    const filteredDiseases = category ? diseases.filter((disease) => disease.category === category) : diseases

    return NextResponse.json(filteredDiseases)
  } catch (error) {
    console.error("Error in diseases API:", error)
    return NextResponse.json({ error: "Failed to fetch diseases" }, { status: 500 })
  }
}

