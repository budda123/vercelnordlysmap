import { Metadata } from 'next'
import { Camera, Clock, Users, Star, ExternalLink, Award, MapPin } from 'lucide-react'
import { tours } from '@/data/tours'

export const metadata: Metadata = {
  title: 'Best Northern Lights Tours from Tromsø | Aurora Experiences & Photography',
  description: 'Book the best northern lights tours and experiences in Tromsø. From aurora chasing to photography workshops, husky sledding, and Sami culture tours.',
  keywords: 'northern lights tours Tromsø, aurora photography workshop, husky sledding aurora, Sami culture tour, GetYourGuide Tromsø, Viator northern lights',
}

export default function ToursPage() {
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
      case 'Aurora Chase': return '🌌'
      case 'Photography': return '📸'
      case 'Cultural': return '🦌'
      case 'Adventure': return '🏔️'
      case 'Luxury': return '✨'
      default: return '🌌'
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Aurora Chase': return 'bg-aurora-500/20 text-aurora-200'
      case 'Photography': return 'bg-purple-500/20 text-purple-200'
      case 'Cultural': return 'bg-orange-500/20 text-orange-200'
      case 'Adventure': return 'bg-green-500/20 text-green-200'
      case 'Luxury': return 'bg-yellow-500/20 text-yellow-200'
      default: return 'bg-aurora-500/20 text-aurora-200'
    }
  }

  const tourTypes = ['All', 'Aurora Chase', 'Photography', 'Cultural', 'Adventure', 'Luxury']

  return (
    <div className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Northern Lights Tours & Experiences
          </h1>
          <p className="text-xl text-arctic-200 max-w-3xl mx-auto">
            Join expert guides on unforgettable aurora adventures. From classic northern lights chasing to photography workshops and cultural experiences.
          </p>
        </div>

        {/* Tour Type Filter */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {tourTypes.map((type) => (
            <button
              key={type}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-arctic-200 hover:bg-white/20 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Tours Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{getTypeIcon(tour.type)}</span>
                      <h3 className="text-xl font-bold text-white">{tour.name}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-arctic-300 mb-2">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {tour.provider}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {getRatingStars(tour.rating)}
                      <span className="text-white ml-2 font-medium">{tour.rating}</span>
                    </div>
                    <div className="text-aurora-400 font-bold text-lg">
                      {getPriceSymbol(tour.priceRange)}
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm mb-4 ${getTypeColor(tour.type)}`}>
                  {tour.type}
                </div>

                {/* Description */}
                <p className="text-arctic-200 mb-4 leading-relaxed">
                  {tour.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Tour Highlights:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center text-arctic-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-aurora-400 rounded-full mr-2"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.includes.map((item, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-500/20 text-green-200 text-xs rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tour.bestFor.map((category, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-aurora-500/20 text-aurora-200 text-xs rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Booking Button */}
                <a
                  href={tour.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-aurora-500 hover:bg-aurora-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center group"
                >
                  <span>Book This Experience</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Tour Tips */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Aurora Tour Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bring Your Camera</h3>
              <p className="text-arctic-300 text-sm">
                Most tours provide photography tips, but bring your own camera and tripod for the best shots.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Be Patient</h3>
              <p className="text-arctic-300 text-sm">
                Aurora tours can last 6-8 hours. The northern lights are natural phenomena and require patience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-aurora-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-aurora-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Small Groups</h3>
              <p className="text-arctic-300 text-sm">
                Smaller groups offer more personalized experiences and better access to remote locations.
              </p>
            </div>
          </div>
        </div>

        {/* Seasonal Information */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Aurora Season Guide</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">September - October</h3>
              <p className="text-arctic-300 text-sm">
                Season starts with milder weather. Good for beginners and photography.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">November - December</h3>
              <p className="text-arctic-300 text-sm">
                Peak darkness with long nights. Excellent aurora visibility.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">January - February</h3>
              <p className="text-arctic-300 text-sm">
                Coldest months but clearest skies. Best for serious aurora hunters.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">March</h3>
              <p className="text-arctic-300 text-sm">
                Season ends with warmer weather and equinox aurora activity.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-aurora-600/20 rounded-lg border border-aurora-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Complete Your Aurora Experience</h2>
          <p className="text-aurora-200 mb-6">
            Combine tours with perfect accommodation and check current aurora forecasts for the best experience.
          </p>
          <div className="space-x-4">
            <a 
              href="/stay" 
              className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Find Accommodation
            </a>
            <a 
              href="/forecast" 
              className="border border-aurora-400 text-aurora-200 px-6 py-3 rounded-lg font-medium hover:bg-aurora-500/20 transition-colors inline-block"
            >
              Check Aurora Forecast
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
