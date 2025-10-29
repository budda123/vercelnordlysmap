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
    if (!location) {
      console.log('Aurora forecast: No location available')
      return
    }

    console.log('Aurora forecast: Fetching for location:', location)
    setLoading(true)
    setError(null)

    try {
      // Use internal API routes for Vercel deployment
      // This provides real-time data with fallback handling
      console.log('Aurora forecast: Fetching real-time data via API routes')
      
      const response = await fetch(`/api/forecast?lat=${location.latitude}&lon=${location.longitude}`)
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch forecast')
      }

      // Transform API response to match AuroraForecast interface
      const forecastData: AuroraForecast = {
        location: {
          latitude: data.location.latitude,
          longitude: data.location.longitude,
          city: location.city || 'Tromsø',
          country: location.country || 'Norway'
        },
        weather: {
          temperature: data.current.temperature,
          cloudCover: data.current.cloudCover,
          windSpeed: data.current.windSpeed,
          windDirection: 180, // Default value
          visibility: 15, // Default value
          humidity: 78, // Default value
          timestamp: data.timestamp
        },
        aurora: {
          kpIndex: data.current.kpIndex,
          kpForecast: data.forecast.hourly.slice(0, 4).map((hour: any) => ({
            time: new Date(hour.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            kp: data.current.kpIndex
          })),
          auroraActivity: data.current.activity,
          visibility: data.current.auroraScore > 70 ? 'Excellent' : data.current.auroraScore > 50 ? 'Good' : 'Fair',
          timestamp: data.timestamp
        },
        auroraScore: data.current.auroraScore,
        recommendation: data.current.auroraScore > 70 
          ? 'Excellent conditions for aurora viewing! Clear skies and high activity expected.'
          : data.current.auroraScore > 50
          ? 'Good conditions for aurora viewing! Moderate activity expected.'
          : 'Fair conditions. Aurora may be visible with patience.'
      }
      
      console.log('Aurora forecast: Real API data loaded successfully')
      setForecast(forecastData)
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
