"use client"

import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { fetchDiseaseDetails } from "@/services/encyclopedia"

export default function DiseasePage() {
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)

  const fetchDiseaseData = async () => {
    try {
      setLoading(true)
      const diseaseId = params.diseaseId as string
      const data = await fetchDiseaseDetails(parseInt(diseaseId))
      setData(data)
    } catch (err) {
      setError("Failed to fetch disease data")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (params.diseaseId) {
      fetchDiseaseData()
    }
  }, [params.diseaseId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {/* Display disease data here */}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          {/* Add more disease details display */}
        </div>
      )}
    </div>
  )
}

