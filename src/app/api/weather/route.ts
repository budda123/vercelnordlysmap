import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Missing lat or lon parameters' },
      { status: 400 }
    )
  }

  try {
    // Open-Meteo API call with better error handling
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,cloud_cover&hourly=temperature_2m,cloud_cover,wind_speed_10m&timezone=auto&forecast_days=2`
    
    // Add timeout using AbortController
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    
    const weatherResponse = await fetch(weatherUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'application/json',
      },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!weatherResponse.ok) {
      throw new Error(`Weather API error: ${weatherResponse.status}`)
    }

    const weatherData = await weatherResponse.json()

    return NextResponse.json({
      success: true,
      data: weatherData,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Weather API Error:', error)
    
    // Return fallback weather data for Tromsø
    return NextResponse.json({
      success: true,
      data: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
        current: {
          temperature_2m: -5,
          relative_humidity_2m: 78,
          wind_speed_10m: 12,
          cloud_cover: 25
        },
        hourly: {
          time: Array.from({length: 48}, (_, i) => {
            const date = new Date()
            date.setHours(date.getHours() + i)
            return date.toISOString()
          }),
          temperature_2m: Array(48).fill(-5),
          cloud_cover: Array(48).fill(25),
          wind_speed_10m: Array(48).fill(12)
        },
        fallback: true,
        reason: 'Weather API unavailable - using fallback data'
      },
      warning: 'Using fallback weather data due to API restrictions',
      timestamp: new Date().toISOString()
    })
  }
}
