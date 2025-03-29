// Mock weather data provider

interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  conditions: string;
  forecast: {
    date: string;
    temperature: {
      min: number;
      max: number;
    };
    conditions: string;
  }[];
  plantingRecommendations: string[];
}

// Generate consistent mock data based on location string
export function getMockWeatherData(location: string): WeatherData {
  // Use location string to generate deterministic but varied data
  const locationHash = hashString(location.toLowerCase());
  
  // Generate temperature between 15-35°C based on location
  const baseTemp = 15 + (locationHash % 20);
  
  // Generate humidity between 40-90% based on location
  const humidity = 40 + (locationHash % 50);
  
  // Select weather condition based on location hash
  const conditions = getWeatherCondition(locationHash);
  
  // Generate 5-day forecast
  const forecast = generateForecast(baseTemp, locationHash);
  
  // Generate planting recommendations
  const recommendations = generateRecommendations(baseTemp, humidity, conditions);
  
  return {
    location,
    temperature: baseTemp,
    humidity,
    conditions,
    forecast,
    plantingRecommendations: recommendations
  };
}

// Simple string hash function for deterministic but varied results
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Get weather condition based on hash
function getWeatherCondition(hash: number): string {
  const conditions = [
    "Sunny", "Partly Cloudy", "Cloudy", "Light Rain", 
    "Heavy Rain", "Thunderstorm", "Foggy", "Windy"
  ];
  return conditions[hash % conditions.length];
}

// Generate a 5-day forecast
function generateForecast(baseTemp: number, hash: number) {
  const forecast = [];
  const conditions = [
    "Sunny", "Partly Cloudy", "Cloudy", "Light Rain", 
    "Heavy Rain", "Thunderstorm", "Foggy", "Windy"
  ];
  
  for (let i = 0; i < 5; i++) {
    const dayHash = hash + i;
    const date = new Date();
    date.setDate(date.getDate() + i);
    
    forecast.push({
      date: date.toISOString().split('T')[0],
      temperature: {
        min: baseTemp - 5 + (dayHash % 5),
        max: baseTemp + (dayHash % 8)
      },
      conditions: conditions[(dayHash) % conditions.length]
    });
  }
  
  return forecast;
}

// Generate planting recommendations based on weather
function generateRecommendations(temp: number, humidity: number, condition: string): string[] {
  const recommendations = [];
  
  // Temperature-based recommendations
  if (temp < 20) {
    recommendations.push("Consider cold-resistant crops like kale, spinach, and carrots.");
  } else if (temp > 30) {
    recommendations.push("Focus on heat-tolerant plants like peppers, okra, and sweet potatoes.");
  } else {
    recommendations.push("Moderate temperatures are ideal for most garden vegetables.");
  }
  
  // Humidity-based recommendations
  if (humidity > 70) {
    recommendations.push("High humidity may increase disease risk. Ensure good air circulation.");
  } else if (humidity < 50) {
    recommendations.push("Low humidity may require more frequent watering.");
  }
  
  // Condition-based recommendations
  if (condition.includes("Rain")) {
    recommendations.push("Delay planting or fertilizing until drier conditions.");
  } else if (condition === "Sunny") {
    recommendations.push("Provide shade for sensitive seedlings in direct sunlight.");
  }
  
  return recommendations;
}