import { diseases, Disease } from './diseases';

export function validateDiseaseData(): { valid: boolean; issues: string[] } {
  const issues: string[] = [];
  
  // Check for required fields
  diseases.forEach((disease, index) => {
    if (!disease.common_name) issues.push(`Disease #${disease.id}: Missing common name`);
    if (!disease.scientific_name) issues.push(`Disease #${disease.id}: Missing scientific name`);
    if (!disease.description) issues.push(`Disease #${disease.id}: Missing description`);
    if (!disease.symptoms || disease.symptoms.length === 0) issues.push(`Disease #${disease.id}: Missing symptoms`);
    if (!disease.treatment || disease.treatment.length === 0) issues.push(`Disease #${disease.id}: Missing treatment`);
    
    // Check image URLs
    if (!disease.images || disease.images.length === 0) {
      issues.push(`Disease #${disease.id}: Missing images`);
    } else {
      disease.images.forEach((url, urlIndex) => {
        if (!url.startsWith('http')) {
          issues.push(`Disease #${disease.id}: Invalid image URL format at index ${urlIndex}`);
        }
      });
    }
  });
  
  return {
    valid: issues.length === 0,
    issues
  };
}

// Function to check for duplicate disease names
export function findDuplicateDiseases(): string[] {
  const duplicates: string[] = [];
  const nameMap: Record<string, number[]> = {};
  
  diseases.forEach(disease => {
    const name = disease.common_name.toLowerCase();
    if (!nameMap[name]) {
      nameMap[name] = [disease.id];
    } else {
      nameMap[name].push(disease.id);
    }
  });
  
  Object.entries(nameMap).forEach(([name, ids]) => {
    if (ids.length > 1) {
      duplicates.push(`"${name}" appears in diseases with IDs: ${ids.join(', ')}`);
    }
  });
  
  return duplicates;
}