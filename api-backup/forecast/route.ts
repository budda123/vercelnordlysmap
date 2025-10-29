import { NextRequest, NextResponse } from 'next/server'
import { AuroraForecast, LocationData, WeatherData, AuroraData } from '@/types/weather'

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
    const baseUrl = request.nextUrl.origin

    // Fetch weather and aurora data in parallel
    const [weatherResponse, auroraResponse] = await Promise.all([
      fetch(`${baseUrl}/api/weather?lat=${lat}&lon=${lon}`),
      fetch(`${baseUrl}/api/aurora`)
    ])

    if (!weatherResponse.ok || !auroraResponse.ok) {
      throw new Error('Failed to fetch forecast data')
    }

    const weather: WeatherData = await weatherResponse.json()
    const aurora: AuroraData = await auroraResponse.json()

    const location: LocationData = {
      latitude: parseFloat(lat),
      longitude: parseFloat(lon)
    }

    // Calculate aurora viewing score (0-100)
    const auroraScore = calculateAuroraScore(weather, aurora, location)
    
    // Generate recommendation
    const recommendation = generateRecommendation(weather, aurora, auroraScore)

    const forecast: AuroraForecast = {
      location,
      weather,
      aurora,
      auroraScore,
      recommendation
    }

    return NextResponse.json(forecast)
  } catch (error) {
    console.error('Forecast API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate forecast' },
      { status: 500 }
    )
  }
}

function calculateAuroraScore(weather: WeatherData, aurora: AuroraData, location: LocationData): number {
  let score = 0

  // Kp index contribution (0-40 points)
  const kpScore = Math.min(aurora.kpIndex * 8, 40)
  score += kpScore

  // Cloud cover penalty (0-30 points)
  const cloudScore = Math.max(0, 30 - (weather.cloudCover * 0.3))
  score += cloudScore

  // Latitude bonus for northern locations (0-20 points)
  if (location.latitude > 65) {
    score += 20
  } else if (location.latitude > 60) {
    score += 10
  }

  // Weather conditions (0-10 points)
  if (weather.windSpeed < 15 && weather.visibility > 8) {
    score += 10
  } else if (weather.windSpeed < 25) {
    score += 5
  }

  return Math.min(Math.round(score), 100)
}

function generateRecommendation(weather: WeatherData, aurora: AuroraData, score: number): string {
  if (score >= 80) {
    return "Excellent conditions! Perfect time for aurora hunting. Clear skies and high activity expected."
  } else if (score >= 60) {
    return "Good conditions for aurora viewing. Consider heading to a dark location tonight."
  } else if (score >= 40) {
    return "Moderate conditions. Aurora may be visible with some patience and luck."
  } else if (score >= 20) {
    return "Poor conditions due to clouds or low activity. Better opportunities expected later."
  } else {
    return "Very poor conditions. Consider waiting for better weather and aurora activity."
  }
}
