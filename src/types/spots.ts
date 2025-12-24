export interface AuroraSpot {
  id: string
  name: string
  slug: string
  coordinates: {
    lat: number
    lng: number
  }
  driveTimeFromTromso: string
  difficulty: 'Easy' | 'Moderate' | 'Advanced'
  description: string
  highlights: string[]
  parking: string
  bestConditions: string[]
  safetyNotes?: string
  imageUrl?: string
  seoTitle: string
  seoDescription: string
}
