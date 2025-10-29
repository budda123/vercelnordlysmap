'use client'

import { BarChart3, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { useGeolocation } from '@/hooks/useGeolocation'
import ForecastCharts from '@/components/ForecastCharts'

export default function ForecastPageClient() {
  const { location, loading: locationLoading, error: locationError, requestLocation } = useGeolocation()

  if (!location && !locationLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Aurora Forecast
            </h1>
            <p className="text-xl text-arctic-200 max-w-3xl mx-auto">
              Detailed 48-hour northern lights forecast with charts and hourly predictions
            </p>
          </div>

          {/* Location Request */}
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
            <MapPin className="w-12 h-12 text-aurora-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-white mb-4">Location Required</h3>
            <p className="text-arctic-300 mb-6">
              We need your location to provide accurate aurora forecasts and weather conditions for your area.
            </p>
            <button
              onClick={requestLocation}
              className="bg-aurora-500 hover:bg-aurora-600 text-white px-8 py-3 rounded-lg font-medium transition-colors w-full"
            >
              Enable Location Access
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (locationLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Aurora Forecast
            </h1>
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
              <div className="animate-spin w-8 h-8 border-2 border-aurora-400 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white">Getting your location...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (locationError) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Aurora Forecast
            </h1>
          </div>

          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Location Error</h3>
            <p className="text-red-300 mb-6">{locationError}</p>
            <button
              onClick={requestLocation}
              className="bg-aurora-500 hover:bg-aurora-600 text-white px-8 py-3 rounded-lg font-medium transition-colors w-full"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Aurora Forecast
          </h1>
          <p className="text-xl text-arctic-200 max-w-3xl mx-auto mb-6">
            Detailed 48-hour northern lights forecast with charts and hourly predictions
          </p>
          
          {/* Location Info */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <MapPin className="w-4 h-4 text-aurora-400 mr-2" />
            <span className="text-white text-sm">
              {location?.city ? `${location.city}, ${location.country}` : 'Your Location'}
            </span>
            <span className="text-arctic-300 text-sm ml-2">
              ({location?.latitude.toFixed(2)}, {location?.longitude.toFixed(2)})
            </span>
          </div>
        </div>

        {/* Forecast Charts */}
        <ForecastCharts 
          latitude={location!.latitude} 
          longitude={location!.longitude} 
        />

        {/* Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <BarChart3 className="w-8 h-8 text-aurora-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Aurora Score</h3>
            <p className="text-arctic-300 text-sm">
              Our proprietary score combines Kp index, cloud cover, weather conditions, and your location 
              to give you the best aurora viewing predictions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Kp Index</h3>
            <p className="text-arctic-300 text-sm">
              The planetary K-index measures geomagnetic activity. Higher values (4+) indicate 
              stronger aurora activity and better visibility at lower latitudes.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Calendar className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Best Times</h3>
            <p className="text-arctic-300 text-sm">
              Aurora is typically most visible between 21:00-03:00 local time when the sky is darkest. 
              Our forecast accounts for optimal viewing hours.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-aurora-600/20 rounded-lg border border-aurora-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Hunt Aurora?</h2>
          <p className="text-aurora-200 mb-6">
            Use our forecast to plan your northern lights adventure. Check out the best viewing spots around Tromsø.
          </p>
          <div className="space-x-4">
            <a 
              href="/spots" 
              className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Find Best Spots
            </a>
            <a 
              href="/stay" 
              className="border border-aurora-400 text-aurora-200 px-6 py-3 rounded-lg font-medium hover:bg-aurora-500/20 transition-colors inline-block"
            >
              Book Accommodation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
