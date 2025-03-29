import { NextResponse } from "next/server"

// Define the disease types for better type safety
type Disease = {
  name: string;
  scientificName: string;
  affectedCrops: string[];
  category: "fungal" | "bacterial" | "viral";
  images: string[];
  description: string;
  symptoms: string[];
  conditions: string;
  management: string[];
  chemicalControl: {
    name: string;
    type: string;
    application: string;
  }[];
}

type Diseases = {
  [key: string]: Disease;
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } } 
) {
  try {
    const id = params.id
   
    const diseases: Diseases = {
      "late_blight": {  
        name: "Late Blight",
        scientificName: "Phytophthora infestans",
        affectedCrops: ["Potato", "Tomato"],
        category: "fungal",
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
        description:
          "Late blight is a plant disease that mainly affects potatoes and tomatoes, causing significant damage to leaves, stems, and fruits. It's caused by the oomycete pathogen Phytophthora infestans. This disease was responsible for the Irish Potato Famine in the 1840s and continues to be a major threat to food security worldwide.",
        symptoms: [
          "Water-soaked spots on leaves that quickly turn brown or black",
          "White fuzzy growth on the underside of leaves in humid conditions",
          "Dark brown lesions on stems and petioles",
          "Firm, brown, irregular patches on tubers or fruits",
          "Rapid collapse of the entire plant in severe cases",
        ],
        conditions:
          "Late blight thrives in cool, wet weather with temperatures between 10-24°C (50-75°F) and high humidity. The disease can spread rapidly, with a complete infection cycle taking only 3-5 days under optimal conditions. The pathogen can be spread by wind, rain, irrigation water, and contaminated tools or equipment.",
        management: [
          "Plant resistant varieties when available",
          "Apply fungicides preventatively before disease appears",
          "Ensure good air circulation by proper plant spacing",
          "Avoid overhead irrigation and water early in the day",
          "Remove and destroy infected plant material",
          "Practice crop rotation with non-host plants",
          "Use certified disease-free seed potatoes or transplants",
        ],
        chemicalControl: [
          {
            name: "Chlorothalonil",
            type: "Protectant fungicide",
            application: "Apply every 7-10 days when conditions favor disease",
          },
          {
            name: "Mancozeb",
            type: "Protectant fungicide",
            application: "Apply every 7-10 days when conditions favor disease",
          },
          {
            name: "Copper compounds",
            type: "Protectant fungicide",
            application: "Apply every 5-7 days when conditions favor disease",
          },
          {
            name: "Metalaxyl/Mefenoxam",
            type: "Systemic fungicide",
            application: "Apply every 10-14 days when conditions favor disease",
          },
        ],
      },
      "powdery_mildew": {  // Changed from "powdery-mildew" to "powdery_mildew"
        name: "Powdery Mildew",
        scientificName: "Various species",
        affectedCrops: ["Cucumber", "Squash", "Pumpkin", "Melon", "Grape"],
        category: "fungal",
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
        description:
          "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray powdery growth on leaf surfaces, stems, and sometimes fruit. The disease can reduce plant vigor, yield, and fruit quality.",
        symptoms: [
          "White to gray powdery spots on leaves and stems",
          "Yellowing or browning of affected leaves",
          "Distorted or stunted growth of new leaves and shoots",
          "Premature leaf drop",
          "Reduced fruit size and quality",
        ],
        conditions:
          "Powdery mildew thrives in warm, dry conditions (60-80°F/15-27°C) with high humidity, but not free water on leaves. Unlike many fungal diseases, it doesn't require wet leaves to develop. The disease is often worse in shaded areas with poor air circulation.",
        management: [
          "Plant resistant varieties when available",
          "Ensure proper spacing between plants for good air circulation",
          "Avoid overhead watering and water early in the day",
          "Remove and destroy infected plant parts",
          "Apply preventative fungicides when conditions favor disease",
          "Use organic options like neem oil, potassium bicarbonate, or sulfur for early control",
        ],
        chemicalControl: [
          {
            name: "Sulfur",
            type: "Protectant fungicide",
            application: "Apply every 7-10 days when conditions favor disease",
          },
          {
            name: "Potassium bicarbonate",
            type: "Contact fungicide",
            application: "Apply every 7-14 days when conditions favor disease",
          },
          {
            name: "Neem oil",
            type: "Botanical fungicide",
            application: "Apply every 7-14 days when conditions favor disease",
          },
          {
            name: "Myclobutanil",
            type: "Systemic fungicide",
            application: "Apply every 10-14 days when conditions favor disease",
          },
        ],
      },
      "bacterial_leaf_spot": {  // Changed from "bacterial-leaf-spot" to "bacterial_leaf_spot"
        name: "Bacterial Leaf Spot",
        scientificName: "Xanthomonas spp.",
        affectedCrops: ["Pepper", "Tomato", "Lettuce"],
        category: "bacterial",
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
        description:
          "Bacterial leaf spot is a common disease that affects many vegetable crops, particularly peppers and tomatoes. It causes water-soaked spots on leaves that eventually turn brown with yellow halos. The disease can significantly reduce yield and quality of produce.",
        symptoms: [
          "Small, water-soaked spots on leaves that enlarge and turn brown or black",
          "Yellow halos surrounding the spots",
          "Spots may merge to form larger lesions",
          "Affected leaves may drop prematurely",
          "Lesions can also appear on stems and fruits",
        ],
        conditions:
          "Bacterial leaf spot thrives in warm (75-86°F/24-30°C), wet conditions with high humidity. The bacteria can survive in plant debris and seeds. It spreads through water splash, contaminated tools, and handling of wet plants.",
        management: [
          "Use disease-free seeds and transplants",
          "Practice crop rotation with non-host plants for 2-3 years",
          "Avoid overhead irrigation and working with wet plants",
          "Remove and destroy infected plant debris",
          "Maintain good air circulation by proper spacing",
          "Apply copper-based bactericides preventatively",
          "Sanitize tools and equipment regularly",
        ],
        chemicalControl: [
          {
            name: "Copper hydroxide",
            type: "Bactericide",
            application: "Apply every 7-10 days when conditions favor disease",
          },
          {
            name: "Copper oxychloride",
            type: "Bactericide",
            application: "Apply every 7-10 days when conditions favor disease",
          },
          {
            name: "Streptomycin sulfate",
            type: "Antibiotic (restricted use)",
            application: "Apply every 4-5 days during severe outbreaks (where permitted)",
          },
        ],
      },
      "tomato_mosaic_virus": {  // Changed from "tomato-mosaic-virus" to "tomato_mosaic_virus"
        name: "Tomato Mosaic Virus",
        scientificName: "Tomato mosaic virus (ToMV)",
        affectedCrops: ["Tomato", "Pepper", "Eggplant"],
        category: "viral",
        images: [
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ],
        description:
          "Tomato mosaic virus is a highly stable and contagious plant virus that primarily affects tomatoes and related plants. It causes mottled light and dark green patterns on leaves and can significantly reduce yield and fruit quality.",
        symptoms: [
          "Mottled light and dark green areas on leaves",
          "Leaves may be distorted, curled, or smaller than normal",
          "Yellow discoloration of leaves",
          "Stunted plant growth",
          "Reduced fruit set and quality, with possible internal browning",
        ],
        conditions:
          "Tomato mosaic virus can survive for years in dried plant debris and soil. It's primarily spread through mechanical transmission (handling, tools, equipment) and can also be seed-borne. The virus can enter plants through wounds or abrasions.",
        management: [
          "Use virus-free certified seeds and transplants",
          "Wash hands thoroughly before handling plants",
          "Disinfect tools and equipment with 10% bleach solution",
          "Remove and destroy infected plants immediately",
          "Control weeds that may harbor the virus",
          "Avoid using tobacco products when working with plants (tobacco can carry related viruses)",
          "Plant resistant varieties when available",
        ],
        chemicalControl: [
          {
            name: "No effective chemical controls",
            type: "Prevention only",
            application: "Focus on preventative measures and sanitation",
          },
        ],
      },
      // Add more diseases as needed
    }

    const disease = diseases[id as keyof typeof diseases]

    if (!disease) {
      return NextResponse.json({ error: "Disease not found" }, { status: 404 })
    }

    return NextResponse.json(disease)
  } catch (error) {
    console.error("Error in disease detail API:", error)
    return NextResponse.json({ error: "Failed to fetch disease details" }, { status: 500 })
  }
}

