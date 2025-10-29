import LocationForecast from '@/components/LocationForecast'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-arctic-900 via-arctic-800 to-arctic-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            NordlysMap - Northern Lights Weather Tonight
          </h1>
          <p className="text-xl text-arctic-200 max-w-3xl mx-auto">
            Real-time aurora forecast with Kp index, cloud cover, and weather conditions. 
            Check if tonight is good for northern lights viewing in Norway.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-arctic-300">
            <span className="bg-white/10 px-3 py-1 rounded-full">🌡️ Live Weather Data</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">📊 Real-time Kp Index</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">☁️ Cloud Coverage</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">👁️ Aurora Visibility</span>
          </div>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
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

        {/* SEO Content Section */}
        <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            How to Check if Tonight is Good for Northern Lights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-aurora-400 mb-3">Weather Conditions for Aurora Viewing</h3>
              <ul className="space-y-2 text-arctic-200">
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Clear skies:</strong> Less than 30% cloud cover is ideal for northern lights visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Kp Index 3+:</strong> Higher geomagnetic activity increases aurora visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Dark skies:</strong> Best viewing between 21:00-03:00 local time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Low wind:</strong> Calm conditions make outdoor viewing more comfortable</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-aurora-400 mb-3">Understanding Aurora Forecasts</h3>
              <ul className="space-y-2 text-arctic-200">
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Kp Index 0-2:</strong> Low activity, aurora visible only in far north</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Kp Index 3-4:</strong> Moderate activity, good visibility in northern Norway</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Kp Index 5+:</strong> High activity, excellent aurora visibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aurora-400 mr-2">•</span>
                  <span><strong>Cloud cover:</strong> Real-time weather data shows current sky conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">
                What weather conditions are best for seeing northern lights?
              </h3>
              <p className="text-arctic-200">
                The best weather for northern lights viewing includes clear skies (less than 30% cloud cover), 
                high Kp index (3 or higher), and dark conditions between 21:00-03:00. Our real-time forecast 
                combines all these factors to give you an accurate aurora visibility prediction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">
                How accurate is the northern lights forecast?
              </h3>
              <p className="text-arctic-200">
                Our aurora forecast uses real-time data from NOAA Space Weather Prediction Center for Kp index 
                and Open-Meteo for weather conditions. The forecast is most accurate for the next 24-48 hours, 
                with decreasing accuracy for longer periods.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-aurora-400 mb-2">
                What is the Kp index and why is it important?
              </h3>
              <p className="text-arctic-200">
                The Kp index measures geomagnetic activity on a scale of 0-9. Higher values indicate stronger 
                aurora activity. For northern Norway, Kp 3+ usually means good aurora visibility, while Kp 5+ 
                indicates excellent conditions with aurora visible even further south.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
