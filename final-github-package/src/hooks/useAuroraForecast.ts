'use client'

import { useState, useEffect } from 'react'
import { AuroraForecast, LocationData } from '@/types/weather'

interface ForecastState {
  forecast: AuroraForecast | null
  loading: boolean
  error: string | null
  refetch: () => void
}

export function useAuroraForecast(location: LocationData | null): ForecastState {
  const [forecast, setForecast] = useState<AuroraForecast | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchForecast = async () => {
    if (!location) return

    setLoading(true)
    setError(null)

    try {
      // Mock data for static export
      const mockData: AuroraForecast = {
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
          city: 'Tromsø',
          country: 'Norway'
        },
        weather: {
          temperature: -5,
          cloudCover: 25,
          windSpeed: 12,
          windDirection: 180,
          visibility: 15,
          humidity: 78,
          timestamp: new Date().toISOString()
        },
        aurora: {
          kpIndex: 4.2,
          kpForecast: [
            { time: '21:00', kp: 3.8 },
            { time: '22:00', kp: 4.2 },
            { time: '23:00', kp: 4.5 },
            { time: '00:00', kp: 4.1 }
          ],
          auroraActivity: 'Moderate',
          visibility: 'Good',
          timestamp: new Date().toISOString()
        },
        auroraScore: 75,
        recommendation: 'Great conditions for aurora viewing! Clear skies and moderate activity expected.'
      }
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setForecast(mockData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchForecast()
  }, [location])

  return {
    forecast,
    loading,
    error,
    refetch: fetchForecast
  }
}
