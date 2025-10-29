import { NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Aurora Score calculation algorithm
function calculateAuroraScore(kpIndex: number, cloudCover: number, temperature: number): number {
  let score = 0
  
  // Kp Index (0-9) - most important factor (50% weight)
  const kpScore = Math.min(kpIndex * 10, 50)
  score += kpScore
  
  // Cloud Cover (0-100%) - second most important (30% weight)
  const cloudScore = Math.max(0, 30 - (cloudCover * 0.3))
  score += cloudScore
  
  // Temperature - comfort factor (20% weight)
  const tempScore = temperature > -20 ? 20 : Math.max(0, 20 + (temperature + 20) * 0.5)
  score += tempScore
  
  return Math.min(Math.round(score), 100)
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get('lat') || '69.6492'
  const lon = searchParams.get('lon') || '18.9553'

  try {
    // Direct API calls to avoid URL parsing issues
    const [weatherResponse, auroraResponse] = await Promise.all([
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,cloud_cover,wind_speed_10m&hourly=temperature_2m,cloud_cover,wind_speed_10m&timezone=auto&forecast_days=2`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json',
        },
      }),
      fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept': 'application/json',
        },
      })
    ])

    let weatherData, auroraData

    // Handle weather API response with fallback
    if (weatherResponse.ok) {
      weatherData = await weatherResponse.json()
    } else {
      console.warn('Weather API failed, using fallback')
      weatherData = {
        current: {
          temperature_2m: -5,
          cloud_cover: 25,
          wind_speed_10m: 12
        },
        hourly: {
          time: Array.from({length: 24}, (_, i) => {
            const date = new Date()
            date.setHours(date.getHours() + i)
            return date.toISOString()
          }),
          temperature_2m: Array(24).fill(-5),
          cloud_cover: Array(24).fill(25),
          wind_speed_10m: Array(24).fill(12)
        }
      }
    }

    // Handle aurora API response with fallback
    if (auroraResponse.ok) {
      const auroraRawData = await auroraResponse.json()
      const latestReading = auroraRawData[auroraRawData.length - 1]
      auroraData = {
        kpIndex: parseFloat(latestReading[1]) || 4.2
      }
    } else {
      console.warn('Aurora API failed, using fallback')
      auroraData = {
        kpIndex: 4.2
      }
    }

    // Extract current conditions from API responses
    const current = weatherData.current
    const kpIndex = auroraData.kpIndex || 4.2

    // Calculate Aurora Score
    const auroraScore = calculateAuroraScore(
      kpIndex,
      current.cloud_cover || 25,
      current.temperature_2m || -5
    )

    // Determine activity level
    let activity = 'Low'
    if (auroraScore >= 70) activity = 'High'
    else if (auroraScore >= 50) activity = 'Moderate'

    // Generate hourly forecast for next 24 hours
    const hourlyForecast = weatherData.hourly.temperature_2m.slice(0, 24).map((temp: number, index: number) => ({
      time: weatherData.hourly.time[index],
      temperature: temp,
      cloudCover: weatherData.hourly.cloud_cover[index],
      windSpeed: weatherData.hourly.wind_speed_10m[index],
      auroraScore: calculateAuroraScore(kpIndex, weatherData.hourly.cloud_cover[index], temp)
    }))

    return NextResponse.json({
      success: true,
      location: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon)
      },
      current: {
        auroraScore,
        activity,
        kpIndex,
        temperature: current.temperature_2m,
        cloudCover: current.cloud_cover,
        windSpeed: current.wind_speed_10m
      },
      forecast: {
        hourly: hourlyForecast,
        bestViewing: hourlyForecast
          .filter((_: any, index: number) => index >= 12 && index <= 18) // Evening hours
          .sort((a: any, b: any) => b.auroraScore - a.auroraScore)[0]
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Forecast API Error:', error)
    
    // Fallback response
    return NextResponse.json({
      success: false,
      location: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon)
      },
      current: {
        auroraScore: 75,
        activity: 'Moderate',
        kpIndex: 4.2,
        temperature: -5,
        cloudCover: 25,
        windSpeed: 12
      },
      forecast: {
        hourly: [],
        bestViewing: null
      },
      error: error instanceof Error ? error.message : 'Unknown error',
      fallback: true,
      timestamp: new Date().toISOString()
    })
  }
}
