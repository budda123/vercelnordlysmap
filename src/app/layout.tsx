import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import StructuredData from '@/components/StructuredData'
import Analytics from '@/components/Analytics'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NordlysMap - Northern Lights Weather Forecast & Aurora Visibility Tonight',
  description: 'Real-time northern lights weather forecast with Kp index, cloud cover, and aurora visibility. Check if tonight is good for northern lights viewing in Norway.',
  keywords: 'northern lights weather, aurora forecast, northern lights tonight, kp index forecast, aurora visibility, nordlys værmelding, northern lights weather conditions, aurora borealis forecast',
  openGraph: {
    title: 'NordlysMap - Is Tonight Good for Northern Lights?',
    description: 'Real-time aurora weather forecast with Kp index and visibility conditions for northern lights viewing',
    type: 'website',
    siteName: 'NordlysMap',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NordlysMap - Northern Lights Weather Forecast',
    description: 'Check if tonight is good for northern lights viewing with real-time weather and Kp index',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'M4z660aV7IQDt5IbmktdGlpu9r9j9CZ8okf3UX1fpAo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5015391960929782" />
        <StructuredData />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5015391960929782"
     crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <Analytics />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
