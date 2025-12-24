import { Metadata } from 'next'
import ForecastPageClient from './ForecastPageClient'

export const metadata: Metadata = {
  title: 'Northern Lights Forecast 48h - Real-time Aurora Weather & Kp Index | NordlysMap',
  description: 'Detailed 48-hour northern lights forecast with Kp index charts, cloud cover, and aurora visibility predictions. Check when tonight is best for aurora viewing.',
  keywords: 'northern lights forecast, aurora forecast 48 hours, kp index chart, northern lights weather forecast, aurora visibility tonight',
}

export default function ForecastPage() {
  return <ForecastPageClient />
}
