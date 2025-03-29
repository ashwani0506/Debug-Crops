import { NextResponse } from "next/server";

// Mock encyclopedia data
const encyclopediaData = {
  diseases: [
    {
      id: "healthy",
      name: "Healthy",
      description: "No disease detected. The plant appears to be in good health.",
      treatment: "Continue regular maintenance and monitoring.",
      symptoms: ["Vibrant green leaves", "Normal growth", "No spots or discoloration"]
    },
    {
      id: "rust",
      name: "Rust",
      description: "A fungal disease showing orange-brown pustules on leaves and stems.",
      treatment: "Remove infected parts, improve air circulation, apply appropriate fungicides.",
      symptoms: ["Orange-brown pustules", "Yellowing leaves", "Premature leaf drop"]
    },
    {
      id: "powdery-mildew",
      name: "Powdery Mildew",
      description: "White powdery coating on leaves and stems affecting plant growth.",
      treatment: "Improve air circulation, apply sulfur-based fungicides, remove severely infected plants.",
      symptoms: ["White powdery coating", "Curled leaves", "Stunted growth"]
    },
    {
      id: "bacterial-blight",
      name: "Bacterial Blight",
      description: "A bacterial disease causing water-soaked lesions that turn brown, often with yellow halos.",
      treatment: "Remove infected plants, avoid overhead irrigation, use copper-based bactericides.",
      symptoms: ["Water-soaked lesions", "Brown spots with yellow halos", "Wilting"]
    },
    {
      id: "leaf-spot",
      name: "Leaf Spot",
      description: "Dark spots on leaves with tan or gray centers and dark margins.",
      treatment: "Remove infected leaves, avoid overhead watering, apply fungicide if severe.",
      symptoms: ["Dark spots with light centers", "Yellowing around spots", "Leaf drop"]
    }
  ]
};

export async function POST(request: Request) {
  const formData = await request.formData();
  const imageFile = formData.get('file') as File;

  if (!imageFile) {
    return NextResponse.json(
      { error: "No image file provided" },
      { status: 400 }
    );
  }

  console.log("Image received:", imageFile.name);
  
  // Simple deterministic algorithm based on file properties
  const fileSize = imageFile.size;
  const fileName = imageFile.name.toLowerCase();
  
  // Determine disease based on filename or size
  let diseaseIndex = fileSize % encyclopediaData.diseases.length;
  
  // If filename contains certain keywords, bias the prediction
  if (fileName.includes("healthy")) {
    diseaseIndex = 0; // Healthy
  } else if (fileName.includes("rust")) {
    diseaseIndex = 1; // Rust
  } else if (fileName.includes("mildew")) {
    diseaseIndex = 2; // Powdery Mildew
  } else if (fileName.includes("blight")) {
    diseaseIndex = 3; // Bacterial Blight
  } else if (fileName.includes("spot")) {
    diseaseIndex = 4; // Leaf Spot
  }
  
  const selectedDisease = encyclopediaData.diseases[diseaseIndex];
  
  // Generate a consistent confidence score (70-99%)
  const confidence = 70 + (fileSize % 30);

  // Return prediction result with encyclopedia data
  const result = {
    disease: selectedDisease.name,
    confidence: confidence,
    description: selectedDisease.description,
    treatment: selectedDisease.treatment,
    symptoms: selectedDisease.symptoms
  };

  return NextResponse.json(result);
}

