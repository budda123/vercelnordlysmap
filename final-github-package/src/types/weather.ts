export interface WeatherData {
  temperature: number
  cloudCover: number
  windSpeed: number
  windDirection: number
  visibility: number
  humidity: number
  timestamp: string
}

export interface AuroraData {
  kpIndex: number
  kpForecast: Array<{
    time: string
    kp: number
  }>
  auroraActivity: 'Low' | 'Moderate' | 'High' | 'Very High'
  visibility: 'Poor' | 'Fair' | 'Good' | 'Excellent'
  timestamp: string
}

export interface LocationData {
  latitude: number
  longitude: number
  city?: string
  country?: string
}

export interface AuroraForecast {
  location: LocationData
  weather: WeatherData
  aurora: AuroraData
  auroraScore: number // 0-100 combined score
  recommendation: string
}
