// Mock weather data generator

interface WeatherData {
  current: {
    location: string;
    temperature: number;
    condition: string;
    humidity: number;
    wind: number;
    precipitation: number;
    uv: string;
    visibility: string;
    pressure: string;
    lastUpdated: string;
  };
  hourly: {
    time: string;
    temp: number;
    icon: string;
    precipitation: number;
  }[];
  daily: {
    day: string;
    icon: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }[];
  insights: {
    title: string;
    level: string;
    icon: string;
    color: string;
    details: string;
  }[];
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
  
  // Generate days of the week
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const weekDays = [
    "Today",
    "Tomorrow",
    ...days.slice((today + 2) % 7, 7),
    ...days.slice(0, (today + 2) % 7)
  ].slice(0, 7);
  
  return {
    current: {
      location: location,
      temperature: baseTemp,
      condition: conditions,
      humidity: humidity,
      wind: 5 + (locationHash % 15),
      precipitation: (locationHash % 30) + 5,
      uv: getUVIndex(baseTemp, locationHash),
      visibility: `${8 + (locationHash % 10)} km`,
      pressure: `${1000 + (locationHash % 30)} hPa`,
      lastUpdated: new Date().toLocaleString(),
    },
    hourly: Array(8)
      .fill(null)
      .map((_, i) => {
        const hourHash = (locationHash + i) % 100;
        const tempVariation = (hourHash % 5) - 2;
        return {
          time: i === 0 ? "Now" : `${(new Date().getHours() + i) % 24}:00`,
          temp: baseTemp + tempVariation,
          icon: getHourlyIcon(conditions, hourHash, i),
          precipitation: Math.max(5, (hourHash % 40)),
        };
      }),
    daily: weekDays.map((day, i) => {
      const dayHash = (locationHash + i) % 100;
      const tempVariation = (dayHash % 8) - 3;
      const condition = getDailyCondition(conditions, dayHash, i);
      return {
        day,
        icon: getIconFromCondition(condition),
        high: baseTemp + 2 + tempVariation,
        low: baseTemp - 5 + (dayHash % 3),
        condition,
        precipitation: Math.max(5, (dayHash % 70)),
      };
    }),
    insights: generateInsights(baseTemp, humidity, conditions, locationHash),
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
    "Heavy Rain", "Thunderstorm", "Foggy", "Windy", "Clear"
  ];
  return conditions[hash % conditions.length];
}

// Get UV index based on temperature and hash
function getUVIndex(temp: number, hash: number): string {
  if (temp > 30) return "High";
  if (temp > 25) return "Moderate to High";
  if (temp > 20) return "Moderate";
  return "Low";
}

// Get hourly icon based on overall condition and hour
function getHourlyIcon(condition: string, hash: number, hour: number): string {
  const conditionLower = condition.toLowerCase();
  
  // Night time (after 6pm or before 6am)
  const currentHour = (new Date().getHours() + hour) % 24;
  if (currentHour > 18 || currentHour < 6) {
    if (conditionLower.includes("clear") || conditionLower.includes("sunny")) {
      return "cloud"; // Night is cloudy
    }
  }
  
  if (conditionLower.includes("thunder")) return "cloud-lightning";
  if (conditionLower.includes("rain")) {
    return hash % 10 > 5 ? "cloud-rain" : "cloud-drizzle";
  }
  if (conditionLower.includes("cloud")) {
    return hash % 10 > 7 ? "cloud-rain" : "cloud";
  }
  if (conditionLower.includes("fog")) return "cloud";
  
  return "sun";
}

// Get daily condition with some variation
function getDailyCondition(baseCondition: string, hash: number, dayOffset: number): string {
  const conditions = [
    "Sunny", "Partly Cloudy", "Cloudy", "Light Rain", 
    "Heavy Rain", "Thunderstorm", "Clear"
  ];
  
  // 60% chance to keep similar to base condition
  if (hash % 10 < 6) {
    return baseCondition;
  }
  
  // Otherwise pick a random condition
  return conditions[(hash + dayOffset) % conditions.length];
}

// Get icon from condition string
function getIconFromCondition(condition: string): string {
  const conditionLower = condition.toLowerCase();
  if (conditionLower.includes("thunder")) return "cloud-lightning";
  if (conditionLower.includes("rain")) {
    return conditionLower.includes("light") ? "cloud-drizzle" : "cloud-rain";
  }
  if (conditionLower.includes("cloud")) return "cloud";
  if (conditionLower.includes("clear") || conditionLower.includes("sunny")) return "sun";
  return "cloud";
}

// Generate insights based on weather conditions
function generateInsights(temp: number, humidity: number, condition: string, hash: number): any[] {
  const insights = [];
  
  // Disease risk insight
  let diseaseRisk = "Low";
  let diseaseColor = "green";
  let diseaseDetails = "Current conditions indicate low risk for fungal diseases. Continue regular monitoring of susceptible crops.";
  
  if (humidity > 70 && condition.toLowerCase().includes("rain")) {
    diseaseRisk = "High";
    diseaseColor = "red";
    diseaseDetails = "High humidity and rainfall create favorable conditions for fungal diseases. Consider preventative fungicide application.";
  } else if (humidity > 60 || condition.toLowerCase().includes("rain")) {
    diseaseRisk = "Moderate";
    diseaseColor = "amber";
    diseaseDetails = "Moderate risk for disease development. Monitor susceptible crops closely.";
  }
  
  insights.push({
    title: "Crop Disease Risk",
    level: diseaseRisk,
    icon: "alert-triangle",
    color: diseaseColor,
    details: diseaseDetails
  });
  
  // Irrigation insight
  let irrigationLevel = "Low";
  let irrigationColor = "green";
  let irrigationDetails = "Recent rainfall should provide adequate moisture. Check soil moisture before irrigating.";
  
  if (condition.toLowerCase().includes("rain")) {
    irrigationLevel = "Low";
    irrigationColor = "green";
    irrigationDetails = "Recent rainfall should provide adequate moisture. Check soil moisture before irrigating.";
  } else if (temp > 28 && humidity < 60) {
    irrigationLevel = "High";
    irrigationColor = "amber";
    irrigationDetails = "Hot and dry conditions may require increased irrigation. Monitor soil moisture closely.";
  } else {
    irrigationLevel = "Moderate";
    irrigationColor = "blue";
    irrigationDetails = "Moderate precipitation expected in the next 3 days. Monitor soil moisture levels for specific crops.";
  }
  
  insights.push({
    title: "Irrigation Needs",
    level: irrigationLevel,
    icon: "droplets",
    color: irrigationColor,
    details: irrigationDetails
  });
  
  // Harvesting conditions
  const harvestingLevel = condition.toLowerCase().includes("rain") ? "Challenging" : "Favorable";
  const harvestingColor = harvestingLevel === "Challenging" ? "amber" : "green";
  const harvestingDetails = harvestingLevel === "Challenging" 
    ? "Wet conditions may complicate harvesting. Consider delaying until drier conditions."
    : "Good conditions for harvesting in the next 2 days. Plan accordingly.";
  
  insights.push({
    title: "Harvesting Conditions",
    level: harvestingLevel,
    icon: harvestingLevel === "Challenging" ? "cloud-rain" : "sun",
    color: harvestingColor,
    details: harvestingDetails
  });
  
  // Spraying conditions
  const windSpeed = 5 + (hash % 15);
  let sprayingLevel = "Good";
  let sprayingColor = "green";
  let sprayingDetails = "Low wind speeds and low precipitation chance make today ideal for pesticide or fertilizer application.";
  
  if (windSpeed > 15 || condition.toLowerCase().includes("rain")) {
    sprayingLevel = "Poor";
    sprayingColor = "amber";
    sprayingDetails = `${windSpeed > 15 ? "High wind speeds" : "Precipitation forecast"} may reduce effectiveness of spraying. Delay application until conditions improve.`;
  }
  
  insights.push({
    title: "Spraying Conditions",
    level: sprayingLevel,
    icon: "wind",
    color: sprayingColor,
    details: sprayingDetails
  });
  
  return insights;
}