import { NextRequest, NextResponse } from 'next/server'

interface HourlyForecast {
  time: string
  kpIndex: number
  cloudCover: number
  temperature: number
  windSpeed: number
  auroraScore: number
  visibility: 'Poor' | 'Fair' | 'Good' | 'Excellent'
}

interface DetailedForecast {
  location: {
    latitude: number
    longitude: number
  }
  hourlyForecast: HourlyForecast[]
  summary: {
    bestHours: string[]
    averageScore: number
    peakActivity: string
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')
  const hours = parseInt(searchParams.get('hours') || '48')

  if (!lat || !lon) {
    return NextResponse.json(
      { error: 'Latitude and longitude are required' },
      { status: 400 }
    )
  }

  try {
    // Fetch extended weather forecast from Open-Meteo
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,cloud_cover,wind_speed_10m&timezone=auto&forecast_days=3`
    )

    if (!weatherResponse.ok) {
      throw new Error('Weather API request failed')
    }

    const weatherData = await weatherResponse.json()

    // Fetch Kp forecast from NOAA
    const kpResponse = await fetch(
      'https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json'
    )

    let kpForecast: Array<{ time: string; kp: number }> = []
    if (kpResponse.ok) {
      const kpData = await kpResponse.json()
      // Process NOAA forecast data (skip header)
      kpForecast = kpData.slice(1, Math.min(kpData.length, hours + 1)).map((item: any) => ({
        time: item[0],
        kp: parseFloat(item[1]) || 2.0
      }))
    }

    // Generate hourly forecast
    const hourlyForecast: HourlyForecast[] = []
    const now = new Date()

    for (let i = 0; i < Math.min(hours, weatherData.hourly.time.length); i++) {
      const time = weatherData.hourly.time[i]
      const temperature = Math.round(weatherData.hourly.temperature_2m[i] || 0)
      const cloudCover = weatherData.hourly.cloud_cover[i] || 50
      const windSpeed = Math.round(weatherData.hourly.wind_speed_10m[i] || 10)
      
      // Get corresponding Kp value or interpolate
      let kpIndex = 2.0
      if (kpForecast.length > 0) {
        const kpEntry = kpForecast.find(k => k.time === time) || kpForecast[Math.min(i, kpForecast.length - 1)]
        kpIndex = kpEntry.kp
      }

      // Calculate aurora score for this hour
      const auroraScore = calculateHourlyAuroraScore({
        kpIndex,
        cloudCover,
        temperature,
        windSpeed,
        latitude: parseFloat(lat),
        hour: new Date(time).getHours()
      })

      // Determine visibility
      let visibility: HourlyForecast['visibility'] = 'Fair'
      if (cloudCover < 20 && kpIndex > 4) visibility = 'Excellent'
      else if (cloudCover < 40 && kpIndex > 3) visibility = 'Good'
      else if (cloudCover > 80 || kpIndex < 2) visibility = 'Poor'

      hourlyForecast.push({
        time,
        kpIndex,
        cloudCover,
        temperature,
        windSpeed,
        auroraScore,
        visibility
      })
    }

    // Calculate summary
    const averageScore = Math.round(
      hourlyForecast.reduce((sum, h) => sum + h.auroraScore, 0) / hourlyForecast.length
    )

    const bestHours = hourlyForecast
      .filter(h => h.auroraScore >= 60)
      .sort((a, b) => b.auroraScore - a.auroraScore)
      .slice(0, 5)
      .map(h => new Date(h.time).toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))

    const peakHour = hourlyForecast.reduce((max, h) => 
      h.auroraScore > max.auroraScore ? h : max
    )
    const peakActivity = new Date(peakHour.time).toLocaleString('en-US', {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })

    const detailedForecast: DetailedForecast = {
      location: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon)
      },
      hourlyForecast,
      summary: {
        bestHours,
        averageScore,
        peakActivity
      }
    }

    return NextResponse.json(detailedForecast)
  } catch (error) {
    console.error('Detailed forecast API error:', error)
    return NextResponse.json(
      { error: 'Failed to generate detailed forecast' },
      { status: 500 }
    )
  }
}

function calculateHourlyAuroraScore(params: {
  kpIndex: number
  cloudCover: number
  temperature: number
  windSpeed: number
  latitude: number
  hour: number
}): number {
  let score = 0

  // Kp index contribution (0-40 points)
  score += Math.min(params.kpIndex * 8, 40)

  // Cloud cover penalty (0-30 points)
  score += Math.max(0, 30 - (params.cloudCover * 0.3))

  // Latitude bonus (0-20 points)
  if (params.latitude > 65) score += 20
  else if (params.latitude > 60) score += 10

  // Time of day bonus (0-10 points) - best between 21:00-03:00
  if ((params.hour >= 21 && params.hour <= 23) || (params.hour >= 0 && params.hour <= 3)) {
    score += 10
  } else if ((params.hour >= 19 && params.hour <= 20) || (params.hour >= 4 && params.hour <= 5)) {
    score += 5
  }

  return Math.min(Math.round(score), 100)
}
