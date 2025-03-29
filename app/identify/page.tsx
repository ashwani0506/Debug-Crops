"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Upload, AlertCircle, ArrowRight } from "lucide-react"
import { identifyDisease as identifyPlantDisease } from "@/lib/api"
import { PlantIdentificationForm } from "@/components/plant-identification-form"

export default function IdentifyPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<null | {
    disease: string
    confidence: number
    description: string
    treatment: string
  }>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    if (!selectedImage) return

    setIsAnalyzing(true)
    setResult(null)

    try {
      // Call the disease identification API
      const base64Data = selectedImage.split(',')[1];
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      
      const byteArray = new Uint8Array(byteNumbers);
      const imageFile = new File([byteArray], "uploaded-image.jpg", { type: "image/jpeg" });
      
      const result = await identifyPlantDisease(imageFile);
      setResult(result)
    } catch (error) {
      console.error("Error analyzing image:", error)
      // Handle error - you could set an error state here
    } finally {
      setIsAnalyzing(false)
    }
  }

  const resetAnalysis = () => {
    setSelectedImage(null)
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="min-h-screen bg-[#c7fff3] pt-24">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-6 text-center">Plant Disease Identification</h1>

          {!result ? (
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Upload Plant Image</CardTitle>
                <CardDescription className="text-gray-400">
                  Take a clear photo of the affected plant part and upload it for analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    isDragging ? "border-purple bg-purple/10" : "border-gray-700"
                  } ${selectedImage ? "border-purple" : ""}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {selectedImage ? (
                    <div className="space-y-4">
                      <div className="relative w-full max-w-md mx-auto h-64">
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt="Selected plant"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-purple">Image uploaded successfully!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-800">
                        <Upload className="h-8 w-8 text-purple" />
                      </div>
                      <div>
                        <p className="text-gray-300 mb-2">Drag and drop your image here, or</p>
                        <Button
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          className="border-purple text-purple hover:bg-purple/20 transition-all duration-300 transform hover:scale-105"
                        >
                          Select File
                        </Button>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleImageUpload}
                          accept="image/*"
                          className="hidden"
                        />
                      </div>
                      <p className="text-xs text-gray-500">Supported formats: JPG, PNG, GIF (Max size: 10MB)</p>
                    </div>
                  )}
                </div>

                {selectedImage && (
                  <Alert className="mt-4 bg-gray-800 border-gray-700">
                    <AlertCircle className="h-4 w-4 text-purple" />
                    <AlertTitle className="text-white">Important</AlertTitle>
                    <AlertDescription className="text-gray-300">
                      For best results, ensure the image clearly shows the affected area of the plant. Close-up images
                      of leaves, stems, or fruits with visible symptoms work best.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={resetAnalysis}
                  disabled={!selectedImage}
                  className="border-gray-700 text-gray-300 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 disabled:hover:transform-none"
                >
                  Reset
                </Button>
                <Button
                  onClick={analyzeImage}
                  disabled={!selectedImage || isAnalyzing}
                  className="bg-purple hover:bg-purple/80 transition-all duration-300 transform hover:scale-105 disabled:hover:transform-none"
                >
                  {isAnalyzing ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>Identify Disease</>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader className="bg-gray-800 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">Disease Identified: {result.disease}</CardTitle>
                    <CardDescription className="text-gray-400">Confidence: {result.confidence}%</CardDescription>
                  </div>
                  <div className="bg-purple/20 text-purple px-3 py-1 rounded-full text-sm font-medium">
                    High Confidence
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <div className="relative w-full h-48 md:h-full">
                      {selectedImage && (
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt={`Plant with ${result.disease}`}
                          fill
                          className="object-contain rounded-lg"
                        />
                      )}
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2">Description</h3>
                      <p className="text-gray-300">{result.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2">Treatment Recommendations</h3>
                      <p className="text-gray-300">{result.treatment}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-gray-700 pt-6">
                <Button
                  variant="outline"
                  onClick={resetAnalysis}
                  className="border-gray-700 text-gray-300 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  Analyze Another Image
                </Button>
                <Button
                  asChild
                  className="bg-purple hover:bg-purple/80 transition-all duration-300 transform hover:scale-105"
                >
                  <Link href={`/encyclopedia/${result.disease.toLowerCase().replace(" ", "-")}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

import { diseases } from '@/lib/data/diseases';

async function identifyDisease(imageFile: File) {
  try {
    // Instead of making an API call, use local data
    // Simulate a prediction based on file properties
    const fileSize = imageFile.size;
    const fileName = imageFile.name.toLowerCase();
    
    // Simple deterministic algorithm based on file properties
    let diseaseIndex = fileSize % diseases.length;
    
    // If filename contains certain keywords, bias the prediction
    for (let i = 0; i < diseases.length; i++) {
      if (fileName.includes(diseases[i].common_name.toLowerCase())) {
        diseaseIndex = i;
        break;
      }
    }
    
    const selectedDisease = diseases[diseaseIndex];
    
    // Generate a consistent confidence score (70-99%)
    const confidence = 70 + (fileSize % 30);

    // Return prediction result with encyclopedia data
    return {
      disease: selectedDisease.common_name,
      confidence: confidence,
      description: selectedDisease.description,
      treatment: selectedDisease.treatment.join('. '),
      symptoms: selectedDisease.symptoms
    };
  } catch (error) {
    console.error('Error in disease identification:', error);
    throw new Error('Failed to identify disease');
  }
}

