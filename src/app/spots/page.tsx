import { Metadata } from 'next'
import { MapPin, Clock, AlertTriangle, Car, Camera } from 'lucide-react'
import dynamic from 'next/dynamic'
import { auroraSpots } from '@/data/spots'

const AuroraMap = dynamic(() => import('@/components/AuroraMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-arctic-800 rounded-lg flex items-center justify-center">
      <div className="text-white">Loading map...</div>
    </div>
  )
})

export const metadata: Metadata = {
  title: 'Best Northern Lights Spots Near Tromsø | Aurora Viewing Locations',
  description: 'Discover the 8 best locations to see northern lights around Tromsø, Norway. Complete guide with maps, driving directions, and photography tips for each aurora viewing spot.',
  keywords: 'northern lights spots Tromsø, aurora viewing locations, best places northern lights Norway, Tromsø aurora photography',
}

export default function SpotsPage() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200'
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Best Northern Lights Spots
          </h1>
          <p className="text-xl text-arctic-200 max-w-3xl mx-auto">
            Discover the most spectacular locations to witness the aurora borealis around Tromsø. 
            From easy city spots to remote wilderness locations.
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <MapPin className="mr-2" />
            Interactive Map
          </h2>
          <AuroraMap spots={auroraSpots} />
          <p className="text-arctic-300 text-sm mt-2 text-center">
            Click on markers to see spot details. All locations are within driving distance of Tromsø.
          </p>
        </div>

        {/* Spots Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {auroraSpots.map((spot) => (
            <div
              key={spot.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Spot Header */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{spot.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(spot.difficulty)}`}>
                  {spot.difficulty}
                </span>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-arctic-200">
                  <Car className="w-4 h-4 mr-2" />
                  <span className="text-sm">{spot.driveTimeFromTromso} from Tromsø</span>
                </div>
                <div className="flex items-center text-arctic-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{spot.coordinates.lat.toFixed(4)}, {spot.coordinates.lng.toFixed(4)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-arctic-200 mb-4 leading-relaxed">
                {spot.description}
              </p>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 flex items-center">
                  <Camera className="w-4 h-4 mr-2" />
                  Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {spot.highlights.map((highlight, index) => (
                    <li key={index} className="text-arctic-300 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-aurora-400 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Info */}
              <div className="space-y-3">
                <div>
                  <h4 className="text-white font-semibold mb-1 flex items-center">
                    <Car className="w-4 h-4 mr-2" />
                    Parking
                  </h4>
                  <p className="text-arctic-300 text-sm">{spot.parking}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Best Conditions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {spot.bestConditions.map((condition, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-aurora-500/20 text-aurora-200 text-xs rounded-full"
                      >
                        {condition}
                      </span>
                    ))}
                  </div>
                </div>

                {spot.safetyNotes && (
                  <div>
                    <h4 className="text-white font-semibold mb-1 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Safety Notes
                    </h4>
                    <p className="text-yellow-200 text-sm">{spot.safetyNotes}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-aurora-600/20 rounded-lg border border-aurora-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Chase the Aurora?</h2>
          <p className="text-aurora-200 mb-6">
            Check current conditions and get real-time forecasts for the best viewing opportunities.
          </p>
          <div className="space-x-4">
            <button className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              View Current Forecast
            </button>
            <button className="border border-aurora-400 text-aurora-200 px-6 py-3 rounded-lg font-medium hover:bg-aurora-500/20 transition-colors">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
