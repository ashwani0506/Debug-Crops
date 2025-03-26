import { NextResponse } from "next/server"
import axios from 'axios'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const image = formData.get('file')

    if (!image) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      )
    }

    // Replace this URL with your actual Render deployment URL
    const mlApiResponse = await axios.post('https://debug-crops.onrender.com/predict', 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )

    // Log the response for debugging
    console.log('ML API Response:', mlApiResponse.data)

    // Adjust the response mapping based on the actual ML model output
    const result = {
      disease: mlApiResponse.data.class || mlApiResponse.data.prediction,
      confidence: Math.round((mlApiResponse.data.confidence || mlApiResponse.data.probability) * 100),
      description: getDiseaseDescription(mlApiResponse.data.class || mlApiResponse.data.prediction),
      treatment: getDiseaseTreatment(mlApiResponse.data.class || mlApiResponse.data.prediction)
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in identify API:", error)
    return NextResponse.json(
      { error: "Failed to process image" },
      { status: 500 }
    )
  }
}

function getDiseaseDescription(disease: string): string {
  const descriptions: { [key: string]: string } = {
    'Bacterial Blight': 'A bacterial disease causing water-soaked lesions that turn brown, often with yellow halos.',
    'Rust': 'A fungal disease showing orange-brown pustules on leaves and stems.',
    'Leaf Spot': 'Dark spots on leaves with tan or gray centers and dark margins.',
    'Powdery Mildew': 'White powdery coating on leaves and stems affecting plant growth.',
    'Healthy': 'No disease detected. The plant appears to be in good health.',
    'Early Blight': 'Brown spots with concentric rings, typically starting on older leaves.',
    'Late Blight': 'Dark brown spots with white fungal growth in moist conditions.',
    'Yellow Leaf Curl': 'Yellowing and curling of leaves, stunted growth.',
    'Mosaic Virus': 'Mottled pattern of light and dark green on leaves.'
  }
  return descriptions[disease] || `Detected condition: ${disease}. Please consult a plant specialist for detailed information.`
}

function getDiseaseTreatment(disease: string): string {
  const treatments: { [key: string]: string } = {
    'Bacterial Blight': 'Remove infected plants, avoid overhead irrigation, use copper-based bactericides.',
    'Rust': 'Remove infected parts, improve air circulation, apply appropriate fungicides.',
    'Leaf Spot': 'Remove infected leaves, avoid overhead watering, apply fungicide if severe.',
    'Powdery Mildew': 'Improve air circulation, apply sulfur-based fungicides, remove severely infected plants.',
    'Healthy': 'Continue regular maintenance and monitoring.',
    'Early Blight': 'Remove infected leaves, rotate crops, apply fungicide preventatively.',
    'Late Blight': 'Remove infected plants, improve drainage, apply protective fungicides.',
    'Yellow Leaf Curl': 'Control whitefly vectors, remove infected plants, use resistant varieties.',
    'Mosaic Virus': 'Remove infected plants, control insect vectors, use virus-resistant varieties.'
  }
  return treatments[disease] || 'Consult a plant pathologist or agricultural extension service for specific treatment recommendations.'
}

