"use client"

import { useState } from "react"
import { Upload, Loader2 } from "lucide-react"
import { identifyPlant } from "@/services/plant-identification"
import Image from "next/image"

export function PlantIdentificationForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!selectedImage) return

    setIsLoading(true)
    setError(null)
    try {
      const base64Image = selectedImage.split(',')[1]
      const result = await identifyPlant(base64Image)
      setResult(result)
    } catch (err) {
      setError('Failed to identify plant disease. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center"
          >
            {selectedImage ? (
              <div className="relative w-64 h-64">
                <Image
                  src={selectedImage}
                  alt="Selected plant"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ) : (
              <>
                <Upload className="h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </>
            )}
          </label>
        </div>

        <button
          type="submit"
          disabled={!selectedImage || isLoading}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin mx-auto" />
          ) : (
            'Identify Disease'
          )}
        </button>
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 space-y-4">
          {result.suggestions.map((suggestion: any, index: number) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">{suggestion.plant_name}</h3>
              {suggestion.disease.map((disease: any, diseaseIndex: number) => (
                <div key={diseaseIndex} className="mt-2">
                  <p className="text-sm font-medium">Disease: {disease.name}</p>
                  <p className="text-sm text-gray-600">
                    Probability: {(disease.probability * 100).toFixed(2)}%
                  </p>
                  <p className="text-sm mt-1">{disease.description}</p>
                  <p className="text-sm mt-1 text-green-600">
                    Treatment: {disease.treatment}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}