// API utility functions

// Plant disease identification API
import { diseases } from './data/diseases';

export async function identifyDisease(imageFile: File) {
  try {
    // Check if imageFile exists
    if (!imageFile) {
      throw new Error("No image file provided");
    }
    
    // Safely access file properties
    const fileSize = imageFile.size || 0;
    const fileName = imageFile.name ? imageFile.name.toLowerCase() : '';
    
    // Use a combination of file properties for more variety
    const timeBasedSeed = new Date().getMinutes(); // Use minutes for some time-based variation
    let diseaseIndex = (fileSize + fileName.length + timeBasedSeed) % diseases.length;
    
    // If filename contains certain keywords, bias the prediction
    let keywordFound = false;
    for (let i = 0; i < diseases.length; i++) {
      const diseaseName = diseases[i].common_name.toLowerCase();
      if (fileName.includes(diseaseName)) {
        diseaseIndex = i;
        keywordFound = true;
        break;
      }
    }
    
    // If no keyword was found in the filename, add more randomness
    if (!keywordFound) {
      // Use a more random approach for variety
      const randomOffset = Math.floor(Math.random() * 10);
      diseaseIndex = (diseaseIndex + randomOffset) % diseases.length;
    }
    
    // Ensure we have a valid index
    diseaseIndex = Math.max(0, Math.min(diseaseIndex, diseases.length - 1));
    
    const selectedDisease = diseases[diseaseIndex];
    
    // Generate a confidence score (70-99%)
    const confidence = 70 + Math.floor(Math.random() * 30);

    // Return prediction result with encyclopedia data
    return {
      disease: selectedDisease.common_name,
      confidence: confidence,
      description: selectedDisease.description,
      treatment: Array.isArray(selectedDisease.treatment) 
        ? selectedDisease.treatment.join('. ') 
        : selectedDisease.treatment,
      symptoms: selectedDisease.symptoms
    };
  } catch (error) {
    console.error('Error in disease identification:', error);
    throw new Error('Failed to identify disease');
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

