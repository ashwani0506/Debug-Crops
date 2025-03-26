const API_KEY = 'sk-cMgz67e382fceb0999151';
const API_URL = 'https://perenual.com/api';

export interface DiseaseInfo {
  id: number;
  common_name: string;
  scientific_name: string;
  other_name: string[];
  family: string | null;
  description: string | null;
  solution: string | null;
  host: string[];
  images: {
    license: number;
    license_name: string;
    license_url: string;
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
  }[];
}

export interface DiseaseResponse {
  data: DiseaseInfo[];
  to: number;
  per_page: number;
  current_page: number;
  from: number;
  last_page: number;
  total: number;
}

const exampleData: DiseaseResponse = {
  data: [
    {
      id: 2,
      common_name: "Fungi Nuisance",
      scientific_name: "Panaeolus foenisecii",
      other_name: ["Nuisance fungi"],
      family: null,
      description: "A common fungal disease that affects various lawn grasses. While not severely harmful, it can be unsightly and indicate underlying lawn health issues.",
      solution: "Improve lawn drainage and reduce overwatering. Maintain proper mowing height and ensure good air circulation.",
      host: ["all lawn grasses"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    },
    {
      id: 3,
      common_name: "Late Blight",
      scientific_name: "Phytophthora infestans",
      other_name: ["Potato blight"],
      family: "Oomycetes",
      description: "A devastating disease that affects potatoes and tomatoes, causing dark brown spots and white fungal growth.",
      solution: "Remove infected plants, apply fungicide, improve air circulation.",
      host: ["potato", "tomato"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    },
    {
      id: 4,
      common_name: "Powdery Mildew",
      scientific_name: "Erysiphales",
      other_name: ["White mold"],
      family: "Erysiphaceae",
      description: "A fungal disease causing white powdery spots on leaves and stems.",
      solution: "Increase air circulation, avoid overhead watering, apply fungicide if necessary.",
      host: ["cucumbers", "squash", "roses"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    },
    {
      id: 5,
      common_name: "Black Spot",
      scientific_name: "Diplocarpon rosae",
      other_name: ["Rose black spot"],
      family: "Ascomycota",
      description: "Common rose disease causing black spots on leaves and eventual defoliation.",
      solution: "Remove infected leaves, improve air circulation, apply fungicide preventatively.",
      host: ["roses"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    },
    {
      id: 6,
      common_name: "Fire Blight",
      scientific_name: "Erwinia amylovora",
      other_name: ["Pear blight"],
      family: "Enterobacteriaceae",
      description: "Bacterial disease causing blackened, burned appearance on branches and leaves.",
      solution: "Prune infected branches, sterilize tools, apply copper-based bactericides.",
      host: ["apple", "pear", "quince"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    },
    {
      id: 7,
      common_name: "Rust",
      scientific_name: "Pucciniales",
      other_name: ["Plant rust"],
      family: "Pucciniaceae",
      description: "Fungal disease causing orange-brown pustules on leaves and stems.",
      solution: "Remove infected plant parts, improve air circulation, apply fungicide.",
      host: ["beans", "corn", "wheat"],
      images: [
        {
          license: 45,
          license_name: "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
          license_url: "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
          original_url: "https://perenual.com/storage/species_disease/2__/og/Panaeolus_foenisecii_124316833.jpg",
          regular_url: "https://perenual.com/storage/species_disease/2__/regular/Panaeolus_foenisecii_124316833.jpg",
          medium_url: "https://perenual.com/storage/species_disease/2__/medium/Panaeolus_foenisecii_124316833.jpg",
          small_url: "https://perenual.com/storage/species_disease/2__/small/Panaeolus_foenisecii_124316833.jpg",
          thumbnail: "https://perenual.com/storage/species_disease/2__/thumbnail/Panaeolus_foenisecii_124316833.jpg"
        }
      ]
    }
  ],
  to: 30,
  per_page: 30,
  current_page: 1,
  from: 1,
  last_page: 8,
  total: 239
};

export async function fetchDiseasesByCategory(page: number = 1, query?: string): Promise<DiseaseResponse> {
  try {
    // Return example data for now while debugging API
    return exampleData;
    
    // Original API call code commented out for now
    /*
    let url = `${API_URL}/species-disease-list?key=${API_KEY}&page=${page}`;
    if (query) {
      url += `&q=${encodeURIComponent(query)}`;
    }

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    */
  } catch (error) {
    console.error('Error fetching diseases:', error);
    throw error;
  }
}

export async function fetchDiseaseDetails(id: number): Promise<DiseaseInfo> {
  try {
    const response = await fetch(
      `${API_URL}/species-disease-details/${id}?key=${API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching disease details:', error);
    throw error;
  }
}