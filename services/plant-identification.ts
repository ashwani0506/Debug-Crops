const PLANT_ID_API_KEY = 'e7Cof90Fmrb1IsVnxsoOaGcX8QUpun3KVzRPd3b7XHYFB295B3';
const PLANT_ID_API_URL = 'https://crop.kindwise.com/api/v1';

export interface PlantIdentificationResponse {
  id: string;
  custom_id: string | null;
  meta_data: {
    date: string;
    datetime: string;
  };
  suggestions: Array<{
    id: number;
    plant_name: string;
    plant_details: {
      common_names: string[];
      scientific_name: string;
      structured_name: {
        genus: string;
        species: string;
      };
    };
    probability: number;
    disease: {
      name: string;
      probability: number;
      description: string;
      treatment: string;
    }[];
  }>;
}

export async function identifyPlant(base64Image: string): Promise<PlantIdentificationResponse> {
  try {
    const response = await fetch(PLANT_ID_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': PLANT_ID_API_KEY,
      },
      body: JSON.stringify({
        images: [base64Image],
        modifiers: ["disease"],
        disease_details: ["description", "treatment"],
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error identifying plant:', error);
    throw error;
  }
}