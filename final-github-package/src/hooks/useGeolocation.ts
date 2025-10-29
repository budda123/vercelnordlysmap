'use client'

import { useState, useEffect } from 'react'
import { LocationData } from '@/types/weather'

interface GeolocationState {
  location: LocationData | null
  loading: boolean
  error: string | null
  requestLocation: () => void
}

export function useGeolocation(): GeolocationState {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser')
      return
    }

    setLoading(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        
        try {
          // Try to get city name from reverse geocoding (optional)
          const locationData: LocationData = {
            latitude,
            longitude
          }

          // If we're in Norway region, try to get city name
          if (latitude > 58 && latitude < 72 && longitude > 4 && longitude < 32) {
            try {
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
              )
              const data = await response.json()
              if (data.city || data.locality) {
                locationData.city = data.city || data.locality
                locationData.country = data.countryName
              }
            } catch (geocodeError) {
              // Geocoding failed, but we still have coordinates
              console.warn('Geocoding failed:', geocodeError)
            }
          }

          setLocation(locationData)
        } catch (err) {
          setError('Failed to process location data')
        } finally {
          setLoading(false)
        }
      },
      (err) => {
        setLoading(false)
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError('Location access denied by user')
            break
          case err.POSITION_UNAVAILABLE:
            setError('Location information unavailable')
            break
          case err.TIMEOUT:
            setError('Location request timed out')
            break
          default:
            setError('An unknown error occurred')
            break
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    )
  }

  // Auto-request location on mount if in Norway region (based on timezone)
  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timezone.includes('Europe/Oslo') || timezone.includes('Arctic')) {
      // Auto-request for likely Norwegian users
      requestLocation()
    }
  }, [])

  return { location, loading, error, requestLocation }
}
