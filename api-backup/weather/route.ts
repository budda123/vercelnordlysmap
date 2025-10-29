import { NextRequest, NextResponse } from 'next/server'
import { WeatherData } from '@/types/weather'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    )
  }

  try {
    // Use Open-Meteo API (free, no API key required)
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,cloud_cover,wind_speed_10m,wind_direction_10m,relative_humidity_2m&timezone=auto&forecast_days=1`
    )

    if (!response.ok) {
      throw new Error('Weather API request failed')
    }

    const data = await response.json()
    const current = data.current

    const weatherData: WeatherData = {
      temperature: Math.round(current.temperature_2m),
      cloudCover: current.cloud_cover,
      windSpeed: Math.round(current.wind_speed_10m),
      windDirection: current.wind_direction_10m,
      visibility: 10, // Default good visibility
      humidity: current.relative_humidity_2m,
      timestamp: current.time
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Weather API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}
