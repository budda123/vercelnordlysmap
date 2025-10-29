import LocationForecast from '@/components/LocationForecast'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Tromso Aurora
          </h1>
          <p className="text-xl text-arctic-200 max-w-2xl mx-auto">
            Real-time northern lights forecast and the best viewing spots around Tromsø, Norway
          </p>
        </header>

        {/* Location-based Forecast */}
        <div className="mb-12">
          <LocationForecast />
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <div className="bg-aurora-600 text-white px-8 py-4 rounded-lg inline-block mb-4">
            <p className="text-lg font-semibold">🌌 Great aurora conditions tonight!</p>
            <p className="text-sm opacity-90">Best viewing: 21:00 - 02:00</p>
          </div>
          <div className="space-x-4">
            <a href="/spots" className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-block">
              View Best Spots
            </a>
            <a href="/forecast" className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-block">
              7-Day Forecast
            </a>
          </div>
        </div>

        {/* Quick Spots Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Tromsø Bridge', distance: '5 min', difficulty: 'Easy' },
            { name: 'Sommarøy', distance: '45 min', difficulty: 'Easy' },
            { name: 'Senja Island', distance: '2h 30min', difficulty: 'Moderate' },
            { name: 'Lyngen Alps', distance: '1h 45min', difficulty: 'Advanced' },
          ].map((spot) => (
            <div key={spot.name} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
              <h4 className="font-semibold text-white mb-2">{spot.name}</h4>
              <p className="text-arctic-300 text-sm mb-1">🚗 {spot.distance} from Tromsø</p>
              <p className="text-arctic-300 text-sm">📍 {spot.difficulty}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
