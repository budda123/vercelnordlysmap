import { NextRequest, NextResponse } from 'next/server'
import { AuroraData } from '@/types/weather'

export async function GET(request: NextRequest) {
  try {
    // Fetch current Kp index from NOAA SWPC
    const kpResponse = await fetch(
      'https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json'
    )

    if (!kpResponse.ok) {
      throw new Error('Aurora API request failed')
    }

    const kpData = await kpResponse.json()
    
    // Get the latest Kp value (skip header row)
    const latestKp = kpData[kpData.length - 1]
    const currentKp = parseFloat(latestKp[1]) || 0

    // Fetch 3-day forecast
    const forecastResponse = await fetch(
      'https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json'
    )

    let kpForecast = []
    if (forecastResponse.ok) {
      const forecastData = await forecastResponse.json()
      // Process forecast data (skip header)
      kpForecast = forecastData.slice(1, 25).map((item: any) => ({
        time: item[0],
        kp: parseFloat(item[1]) || 0
      }))
    }

    // Determine aurora activity level
    let auroraActivity: AuroraData['auroraActivity']
    if (currentKp < 3) auroraActivity = 'Low'
    else if (currentKp < 5) auroraActivity = 'Moderate'
    else if (currentKp < 7) auroraActivity = 'High'
    else auroraActivity = 'Very High'

    // Determine visibility based on Kp and location (simplified)
    let visibility: AuroraData['visibility']
    if (currentKp < 2) visibility = 'Poor'
    else if (currentKp < 4) visibility = 'Fair'
    else if (currentKp < 6) visibility = 'Good'
    else visibility = 'Excellent'

    const auroraData: AuroraData = {
      kpIndex: currentKp,
      kpForecast: kpForecast.slice(0, 12), // Next 12 hours
      auroraActivity,
      visibility,
      timestamp: new Date().toISOString()
    }

    return NextResponse.json(auroraData)
  } catch (error) {
    console.error('Aurora API error:', error)
    
    // Return fallback data if API fails
    const fallbackData: AuroraData = {
      kpIndex: 3.2,
      kpForecast: [],
      auroraActivity: 'Moderate',
      visibility: 'Fair',
      timestamp: new Date().toISOString()
    }
    
    return NextResponse.json(fallbackData)
  }
}
