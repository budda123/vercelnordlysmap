'use client'

import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { RefreshCw, TrendingUp, Clock, Star } from 'lucide-react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

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

interface ForecastChartsProps {
  latitude: number
  longitude: number
}

export default function ForecastCharts({ latitude, longitude }: ForecastChartsProps) {
  const [forecast, setForecast] = useState<DetailedForecast | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchDetailedForecast = async () => {
    setLoading(true)
    setError(null)

    try {
      // Use internal API route for Vercel deployment
      console.log('Fetching detailed forecast from API route')
      
      const response = await fetch(`/api/forecast?lat=${latitude}&lon=${longitude}`)
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch detailed forecast')
      }

      // Transform API response to match DetailedForecast interface
      const detailedData: DetailedForecast = {
        location: {
          latitude: data.location.latitude,
          longitude: data.location.longitude
        },
        hourlyForecast: data.forecast.hourly.map((hour: any) => ({
          time: new Date(hour.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          kpIndex: data.current.kpIndex,
          cloudCover: hour.cloudCover,
          temperature: hour.temperature,
          windSpeed: hour.windSpeed,
          auroraScore: hour.auroraScore,
          visibility: (hour.auroraScore > 70 ? 'Excellent' : hour.auroraScore > 50 ? 'Good' : 'Fair') as 'Poor' | 'Fair' | 'Good' | 'Excellent'
        })),
        summary: {
          bestHours: data.forecast.hourly
            .filter((hour: any) => hour.auroraScore > 70)
            .slice(0, 3)
            .map((hour: any) => new Date(hour.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })),
          averageScore: Math.round(data.forecast.hourly.reduce((sum: number, hour: any) => sum + hour.auroraScore, 0) / data.forecast.hourly.length),
          peakActivity: data.forecast.bestViewing ? new Date(data.forecast.bestViewing.time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '23:00'
        }
      }
      
      console.log('Detailed forecast: Real API data loaded successfully')
      setForecast(detailedData)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDetailedForecast()
  }, [latitude, longitude])

  if (loading) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
        <RefreshCw className="w-8 h-8 text-aurora-400 mx-auto mb-4 animate-spin" />
        <p className="text-white">Loading detailed forecast...</p>
      </div>
    )
  }

  if (error || !forecast) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
        <p className="text-red-300 mb-4">{error || 'Failed to load forecast'}</p>
        <button
          onClick={fetchDetailedForecast}
          className="bg-aurora-500 hover:bg-aurora-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  // Prepare chart data
  const labels = forecast.hourlyForecast.map(h => {
    const date = new Date(h.time)
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    })
  })

  const auroraScoreData = {
    labels,
    datasets: [
      {
        label: 'Aurora Score',
        data: forecast.hourlyForecast.map(h => h.auroraScore),
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#0ea5e9',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
      }
    ]
  }

  const kpCloudData = {
    labels,
    datasets: [
      {
        label: 'Kp Index',
        data: forecast.hourlyForecast.map(h => h.kpIndex),
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        yAxisID: 'y',
        tension: 0.4,
        pointBackgroundColor: '#10b981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 3,
      },
      {
        label: 'Cloud Cover (%)',
        data: forecast.hourlyForecast.map(h => h.cloudCover),
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.1)',
        yAxisID: 'y1',
        tension: 0.4,
        pointBackgroundColor: '#f59e0b',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 3,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#e2e8f0',
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#e2e8f0',
        borderColor: '#0ea5e9',
        borderWidth: 1,
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8',
          maxTicksLimit: 12
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        }
      },
      y: {
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)'
        }
      }
    }
  }

  const dualAxisOptions = {
    ...chartOptions,
    scales: {
      ...chartOptions.scales,
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        ticks: {
          color: '#94a3b8'
        },
        grid: {
          drawOnChartArea: false,
        },
      }
    }
  }

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
          <TrendingUp className="w-8 h-8 text-aurora-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Average Score</h3>
          <div className="text-3xl font-bold text-aurora-400 mb-1">
            {forecast.summary.averageScore}/100
          </div>
          <p className="text-arctic-300 text-sm">Next 48 hours</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
          <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Peak Activity</h3>
          <div className="text-lg font-bold text-yellow-400 mb-1">
            {forecast.summary.peakActivity}
          </div>
          <p className="text-arctic-300 text-sm">Best viewing time</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <Clock className="w-8 h-8 text-green-400 mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Best Hours</h3>
          <div className="space-y-1">
            {forecast.summary.bestHours.slice(0, 3).map((hour, index) => (
              <div key={index} className="text-green-400 font-medium text-sm">
                {hour}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aurora Score Chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Aurora Viewing Score (48h)</h3>
          <button
            onClick={fetchDetailedForecast}
            className="text-arctic-300 hover:text-white transition-colors"
            title="Refresh forecast"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
        <div className="h-64">
          <Line data={auroraScoreData} options={chartOptions} />
        </div>
        <p className="text-arctic-300 text-sm mt-4 text-center">
          Higher scores indicate better aurora viewing conditions. Scores above 60 are considered good.
        </p>
      </div>

      {/* Kp Index vs Cloud Cover Chart */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-6">Kp Index vs Cloud Cover</h3>
        <div className="h-64">
          <Line data={kpCloudData} options={dualAxisOptions} />
        </div>
        <p className="text-arctic-300 text-sm mt-4 text-center">
          Green line shows aurora activity (Kp index). Orange line shows cloud cover percentage.
        </p>
      </div>

      {/* Hourly Details Table */}
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <h3 className="text-xl font-bold text-white mb-6">Hourly Forecast Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left py-2 text-arctic-200">Time</th>
                <th className="text-center py-2 text-arctic-200">Score</th>
                <th className="text-center py-2 text-arctic-200">Kp</th>
                <th className="text-center py-2 text-arctic-200">Clouds</th>
                <th className="text-center py-2 text-arctic-200">Temp</th>
                <th className="text-center py-2 text-arctic-200">Visibility</th>
              </tr>
            </thead>
            <tbody>
              {forecast.hourlyForecast.slice(0, 24).map((hour, index) => {
                const time = new Date(hour.time)
                const scoreColor = hour.auroraScore >= 70 ? 'text-green-400' : 
                                 hour.auroraScore >= 50 ? 'text-yellow-400' : 
                                 hour.auroraScore >= 30 ? 'text-orange-400' : 'text-red-400'
                
                return (
                  <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-2 text-white">
                      {time.toLocaleString('en-US', { 
                        weekday: 'short', 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false 
                      })}
                    </td>
                    <td className={`text-center py-2 font-bold ${scoreColor}`}>
                      {hour.auroraScore}
                    </td>
                    <td className="text-center py-2 text-arctic-200">
                      {hour.kpIndex.toFixed(1)}
                    </td>
                    <td className="text-center py-2 text-arctic-200">
                      {hour.cloudCover}%
                    </td>
                    <td className="text-center py-2 text-arctic-200">
                      {hour.temperature}°C
                    </td>
                    <td className="text-center py-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        hour.visibility === 'Excellent' ? 'bg-green-500/20 text-green-400' :
                        hour.visibility === 'Good' ? 'bg-yellow-500/20 text-yellow-400' :
                        hour.visibility === 'Fair' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {hour.visibility}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
