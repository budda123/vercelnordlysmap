import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NordlysMap - Northern Lights Weather Forecast',
    short_name: 'NordlysMap',
    description: 'Real-time northern lights weather forecast with Kp index and aurora visibility predictions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['weather', 'travel', 'utilities'],
    lang: 'en',
    orientation: 'portrait-primary',
  }
}
