import { Metadata } from 'next'
import { Bed, MapPin, Star, Wifi, Car, Camera, ExternalLink } from 'lucide-react'
import { accommodations } from '@/data/accommodations'

export const metadata: Metadata = {
  title: 'Best Northern Lights Hotels & Accommodation Near Tromsø | Aurora Stays',
  description: 'Book the best aurora-friendly hotels and resorts near Tromsø. From luxury lodges to cozy cabins, find perfect accommodation for your northern lights adventure.',
  keywords: 'northern lights hotels Tromsø, aurora accommodation Norway, Malangen Resort, Sommarøy hotel, Lyngen Alps lodge',
}

export default function StayPage() {
  const getPriceSymbol = (range: string) => {
    return range
  }

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : i < rating 
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-400'
        }`}
      />
    ))
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Resort': return '🏔️'
      case 'Hotel': return '🏨'
      case 'Cabin': return '🏘️'
      case 'Guesthouse': return '🏠'
      case 'Apartment': return '🏢'
      default: return '🏨'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Aurora-Friendly Accommodation
          </h1>
          <p className="text-xl text-arctic-200 max-w-3xl mx-auto">
            Stay at the best hotels and lodges for northern lights viewing. From luxury resorts with aurora wake-up services to cozy cabins under dark skies.
          </p>
        </div>

        {/* Filter/Sort Section */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <span className="text-aurora-400 font-medium">🌌 Aurora-Friendly</span>
            <span className="text-arctic-300 ml-2">All accommodations selected for optimal northern lights viewing</span>
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {accommodations.map((accommodation) => (
            <div
              key={accommodation.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{getTypeIcon(accommodation.type)}</span>
                      <h3 className="text-xl font-bold text-white">{accommodation.name}</h3>
                    </div>
                    <div className="flex items-center text-arctic-300 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{accommodation.location} • {accommodation.distanceFromTromso}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {getRatingStars(accommodation.rating)}
                      <span className="text-white ml-2 font-medium">{accommodation.rating}</span>
                    </div>
                    <div className="text-aurora-400 font-bold text-lg">
                      {getPriceSymbol(accommodation.priceRange)}
                    </div>
                  </div>
                </div>

                {/* Aurora Friendly Badge */}
                {accommodation.auroraFriendly && (
                  <div className="inline-flex items-center bg-aurora-500/20 text-aurora-200 px-3 py-1 rounded-full text-sm mb-4">
                    <Camera className="w-3 h-3 mr-1" />
                    Aurora Optimized
                  </div>
                )}

                {/* Description */}
                <p className="text-arctic-200 mb-4 leading-relaxed">
                  {accommodation.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">What makes it special:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {accommodation.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-arctic-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-aurora-400 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <a
                  href={accommodation.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-aurora-500 hover:bg-aurora-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
                >
                  <span>Check Availability & Book</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Tips */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Aurora Accommodation Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Aurora Wake-up Service</h3>
              <p className="text-arctic-300 text-sm">
                Many hotels offer wake-up calls when northern lights appear. Ask about this service when booking.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location Matters</h3>
              <p className="text-arctic-300 text-sm">
                Stay outside city centers for darker skies, or choose hotels with easy access to viewing spots.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bed className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibent text-white mb-2">Book Early</h3>
              <p className="text-arctic-300 text-sm">
                Aurora season (September-March) is peak time. Book accommodation well in advance for best rates.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-aurora-600/20 rounded-lg border border-aurora-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Plan Your Aurora Adventure?</h2>
          <p className="text-aurora-200 mb-6">
            Combine your perfect accommodation with northern lights tours and the best viewing spots.
          </p>
          <div className="space-x-4">
            <a 
              href="/tours" 
              className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Browse Aurora Tours
            </a>
            <a 
              href="/spots" 
              className="border border-aurora-400 text-aurora-200 px-6 py-3 rounded-lg font-medium hover:bg-aurora-500/20 transition-colors inline-block"
            >
              Find Best Spots
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
