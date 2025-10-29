'use client'

import { MapPin, RefreshCw, AlertCircle, Thermometer, Cloud, Wind, Eye } from 'lucide-react'
import { useGeolocation } from '@/hooks/useGeolocation'
import { useAuroraForecast } from '@/hooks/useAuroraForecast'

export default function LocationForecast() {
  const { location, loading: locationLoading, error: locationError, requestLocation } = useGeolocation()
  const { forecast, loading: forecastLoading, error: forecastError, refetch } = useAuroraForecast(location)

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    if (score >= 40) return 'text-orange-400'
    return 'text-red-400'
  }

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'Very High': return 'text-green-400'
      case 'High': return 'text-yellow-400'
      case 'Moderate': return 'text-orange-400'
      default: return 'text-red-400'
    }
  }

  if (!location && !locationLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
        <MapPin className="w-8 h-8 text-aurora-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-white mb-2">Get Personalized Aurora Forecast</h3>
        <p className="text-arctic-300 mb-4">
          Allow location access to see aurora conditions for your exact location
        </p>
        <button
          onClick={requestLocation}
          className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Enable Location
        </button>
      </div>
    )
  }

  if (locationLoading || forecastLoading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
        <RefreshCw className="w-8 h-8 text-aurora-400 mx-auto mb-4 animate-spin" />
        <p className="text-white">
          {locationLoading ? 'Getting your location...' : 'Loading aurora forecast...'}
        </p>
      </div>
    )
  }

  if (locationError || forecastError) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
        <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-4" />
        <p className="text-red-300 mb-4">{locationError || forecastError}</p>
        <button
          onClick={locationError ? requestLocation : refetch}
          className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  if (!forecast) return null

  return (
    <div className="space-y-6">
      {/* Location Info */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-aurora-400 mr-2" />
            <div>
              <p className="text-white font-medium">
                {location?.city ? `${location.city}, ${location.country}` : 'Your Location'}
              </p>
              <p className="text-arctic-300 text-sm">
                {forecast.location.latitude.toFixed(4)}, {forecast.location.longitude.toFixed(4)}
              </p>
            </div>
          </div>
          <button
            onClick={refetch}
            className="text-arctic-300 hover:text-white transition-colors"
            title="Refresh forecast"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Aurora Score */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
        <h3 className="text-lg font-semibold text-white mb-2">Aurora Viewing Score</h3>
        <div className={`text-4xl font-bold mb-2 ${getScoreColor(forecast.auroraScore)}`}>
          {forecast.auroraScore}/100
        </div>
        <p className="text-arctic-200 text-sm mb-4">{forecast.recommendation}</p>
        
        {/* Activity Level */}
        <div className="flex items-center justify-center">
          <span className="text-arctic-300 mr-2">Activity:</span>
          <span className={`font-semibold ${getActivityColor(forecast.aurora.auroraActivity)}`}>
            {forecast.aurora.auroraActivity}
          </span>
        </div>
      </div>

      {/* Current Conditions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="text-2xl font-bold text-aurora-400 mb-1">
            Kp {forecast.aurora.kpIndex.toFixed(1)}
          </div>
          <p className="text-arctic-300 text-sm">Aurora Index</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="flex items-center justify-center mb-2">
            <Cloud className="w-5 h-5 text-white mr-1" />
            <span className="text-2xl font-bold text-white">{forecast.weather.cloudCover}%</span>
          </div>
          <p className="text-arctic-300 text-sm">Cloud Cover</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="flex items-center justify-center mb-2">
            <Thermometer className="w-5 h-5 text-white mr-1" />
            <span className="text-2xl font-bold text-white">{forecast.weather.temperature}°C</span>
          </div>
          <p className="text-arctic-300 text-sm">Temperature</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center">
          <div className="flex items-center justify-center mb-2">
            <Wind className="w-5 h-5 text-white mr-1" />
            <span className="text-2xl font-bold text-white">{forecast.weather.windSpeed}</span>
          </div>
          <p className="text-arctic-300 text-sm">Wind km/h</p>
        </div>
      </div>
    </div>
  )
}
