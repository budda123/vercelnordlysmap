export interface Accommodation {
  id: string
  name: string
  type: 'Hotel' | 'Resort' | 'Guesthouse' | 'Cabin' | 'Apartment'
  location: string
  distanceFromTromso: string
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  rating: number
  highlights: string[]
  auroraFriendly: boolean
  bookingUrl: string
  imageUrl?: string
  description: string
}

export const accommodations: Accommodation[] = [
  {
    id: '1',
    name: 'Malangen Resort',
    type: 'Resort',
    location: 'Malangen',
    distanceFromTromso: '60 km (1 hour)',
    priceRange: '$$$',
    rating: 4.5,
    highlights: [
      'Aurora wake-up service',
      'Dark sky location',
      'Heated outdoor areas',
      'Professional photography guides'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/malangen-resort.html?aid=YOUR_AFFILIATE_ID',
    description: 'Premier aurora resort with dedicated northern lights facilities and expert guides. Perfect for serious aurora hunters.'
  },
  {
    id: '2',
    name: 'Scandic Ishavshotel',
    type: 'Hotel',
    location: 'Tromsø City Center',
    distanceFromTromso: '0 km (City center)',
    priceRange: '$$$',
    rating: 4.3,
    highlights: [
      'City center location',
      'Aurora view rooms available',
      'Easy access to spots',
      'Restaurant and bar'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/scandic-ishavshotel.html?aid=YOUR_AFFILIATE_ID',
    description: 'Modern hotel in Tromsø center with northern lights view rooms and easy access to all aurora viewing spots.'
  },
  {
    id: '3',
    name: 'Sommarøy Arctic Hotel',
    type: 'Hotel',
    location: 'Sommarøy',
    distanceFromTromso: '36 km (45 minutes)',
    priceRange: '$$$$',
    rating: 4.7,
    highlights: [
      'Beachfront location',
      'Minimal light pollution',
      'Luxury amenities',
      'Aurora photography workshops'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/sommaroy-arctic-hotel.html?aid=YOUR_AFFILIATE_ID',
    description: 'Luxury beachfront hotel on the famous white sand beaches of Sommarøy, perfect for aurora viewing.'
  },
  {
    id: '4',
    name: 'Lyngen Experience Lodge',
    type: 'Resort',
    location: 'Lyngen Alps',
    distanceFromTromso: '90 km (1.5 hours)',
    priceRange: '$$$$',
    rating: 4.8,
    highlights: [
      'Mountain wilderness setting',
      'Aurora guarantee program',
      'Heated glass igloos',
      'Adventure activities'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/lyngen-experience-lodge.html?aid=YOUR_AFFILIATE_ID',
    description: 'Exclusive mountain lodge in the Lyngen Alps offering the ultimate aurora experience with glass igloos.'
  },
  {
    id: '5',
    name: 'Clarion Hotel The Edge',
    type: 'Hotel',
    location: 'Tromsø City Center',
    distanceFromTromso: '0 km (City center)',
    priceRange: '$$',
    rating: 4.2,
    highlights: [
      'Modern design hotel',
      'Rooftop bar with views',
      'Central location',
      'Aurora tour bookings'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/clarion-hotel-the-edge.html?aid=YOUR_AFFILIATE_ID',
    description: 'Contemporary hotel with excellent city views and easy access to aurora tours and viewing spots.'
  },
  {
    id: '6',
    name: 'Senja Aurora Cabins',
    type: 'Cabin',
    location: 'Senja Island',
    distanceFromTromso: '120 km (2.5 hours)',
    priceRange: '$$',
    rating: 4.4,
    highlights: [
      'Private cabins',
      'Dramatic mountain views',
      'Self-catering facilities',
      'Remote location'
    ],
    auroraFriendly: true,
    bookingUrl: 'https://www.booking.com/hotel/no/senja-aurora-cabins.html?aid=YOUR_AFFILIATE_ID',
    description: 'Cozy cabins on spectacular Senja Island with unobstructed views of the northern sky and dramatic landscapes.'
  }
]
