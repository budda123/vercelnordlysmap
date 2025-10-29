import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tromso Aurora - Northern Lights Forecast & Best Viewing Spots',
  description: 'Real-time aurora forecast, weather conditions, and the best spots to see northern lights around Tromsø, Norway. Plan your perfect aurora hunting adventure.',
  keywords: 'northern lights, aurora borealis, Tromsø, Norway, weather forecast, Kp index, aurora forecast',
  openGraph: {
    title: 'Tromso Aurora - Northern Lights Forecast',
    description: 'Real-time aurora forecast and best viewing spots around Tromsø, Norway',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
