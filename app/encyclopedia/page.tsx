"use client"

import { useState, useEffect } from "react"
import { getAllDiseases, searchDiseases, PaginatedResponse } from "@/lib/data/diseases"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function EncyclopediaPage() {
  const [diseases, setDiseases] = useState<PaginatedResponse | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDiseases() {
      try {
        setLoading(true)
        const response = searchQuery 
          ? searchDiseases(searchQuery, currentPage)
          : getAllDiseases(currentPage);
        setDiseases(response)
      } catch (error) {
        console.error("Error loading diseases:", error)
      } finally {
        setLoading(false)
      }
    }

    loadDiseases()
  }, [currentPage, searchQuery])

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search plant diseases..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1) // Reset to first page on new search
            }}
            className="pl-10"
          />
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases?.data.map((disease) => (
              <Card key={disease.id}>
                <CardHeader>
                  <CardTitle>{disease.common_name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square relative mb-4">
                    {disease.images[0] && (
                      <img
                        src={disease.images[0]}
                        alt={disease.common_name}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{disease.scientific_name}</p>
                  {disease.description && (
                    <p className="mt-2 line-clamp-3">{disease.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {diseases && (
            <div className="mt-8 flex justify-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded bg-purple-600 text-white disabled:opacity-50"
              >
                Previous
              </button>
              <span className="px-4 py-2">
                Page {diseases.currentPage} of {diseases.totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(diseases.totalPages, prev + 1))}
                disabled={currentPage === diseases.totalPages}
                className="px-4 py-2 rounded bg-purple-600 text-white disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

