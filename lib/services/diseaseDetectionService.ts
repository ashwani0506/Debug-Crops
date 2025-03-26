import axios from 'axios';

interface DetectionResponse {
  prediction: string;
  confidence: number;
}

export async function detectDisease(imageFile: File): Promise<DetectionResponse> {
  try {
    const formData = new FormData();
    formData.append('file', imageFile);

    const response = await axios.post('http://your-ml-api-endpoint/predict', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      prediction: response.data.prediction,
      confidence: response.data.confidence
    };
  } catch (error) {
    console.error('Error detecting disease:', error);
    throw new Error('Failed to detect disease');
  }
}

export function mapPredictionToDisease(prediction: string) {
  const predictionMap: { [key: string]: string } = {
    'Rust': 'rust',
    'Powdery Mildew': 'powder',
    'Healthy': 'healthy'
  };

  return predictionMap[prediction] || 'unknown';
}