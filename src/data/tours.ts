export interface Tour {
  id: string
  name: string
  provider: 'GetYourGuide' | 'Viator' | 'Local'
  type: 'Aurora Chase' | 'Photography' | 'Cultural' | 'Adventure' | 'Luxury'
  duration: string
  priceRange: '$' | '$$' | '$$$' | '$$$$'
  rating: number
  highlights: string[]
  includes: string[]
  bookingUrl: string
  imageUrl?: string
  description: string
  bestFor: string[]
}

export const tours: Tour[] = [
  {
    id: '1',
    name: 'Northern Lights Chase by Bus',
    provider: 'GetYourGuide',
    type: 'Aurora Chase',
    duration: '6-8 hours',
    priceRange: '$$',
    rating: 4.4,
    highlights: [
      'Professional aurora guides',
      'Multiple viewing locations',
      'Hot drinks and snacks',
      'Photo assistance'
    ],
    includes: [
      'Transportation',
      'Professional guide',
      'Warm clothing',
      'Hot beverages',
      'Photo tips'
    ],
    bookingUrl: 'https://www.getyourguide.com/tromso-l186/northern-lights-chase-t12345/?partner_id=YOUR_AFFILIATE_ID',
    description: 'Join our expert guides on a northern lights hunting adventure. We chase the aurora to the best locations based on weather and activity forecasts.',
    bestFor: ['First-time visitors', 'Families', 'Budget travelers']
  },
  {
    id: '2',
    name: 'Aurora Photography Workshop',
    provider: 'GetYourGuide',
    type: 'Photography',
    duration: '8-10 hours',
    priceRange: '$$$',
    rating: 4.7,
    highlights: [
      'Professional photographer guide',
      'Camera settings instruction',
      'Composition techniques',
      'Post-processing tips'
    ],
    includes: [
      'Photography instruction',
      'Tripod rental',
      'Transportation',
      'Warm clothing',
      'Digital photo review'
    ],
    bookingUrl: 'https://www.getyourguide.com/tromso-l186/aurora-photography-workshop-t23456/?partner_id=YOUR_AFFILIATE_ID',
    description: 'Learn to capture stunning northern lights photos with professional photographers. Perfect for improving your aurora photography skills.',
    bestFor: ['Photography enthusiasts', 'Intermediate photographers', 'Solo travelers']
  },
  {
    id: '3',
    name: 'Luxury Aurora Safari',
    provider: 'Viator',
    type: 'Luxury',
    duration: '6 hours',
    priceRange: '$$$$',
    rating: 4.8,
    highlights: [
      'Small group (max 8 people)',
      'Luxury vehicle',
      'Gourmet dinner',
      'Premium locations'
    ],
    includes: [
      'Luxury transportation',
      'Professional guide',
      'Gourmet meal',
      'Premium warm clothing',
      'Champagne toast'
    ],
    bookingUrl: 'https://www.viator.com/tours/Tromso/Luxury-Aurora-Safari/d5441-34567?mcid=YOUR_AFFILIATE_ID',
    description: 'Experience the northern lights in ultimate comfort with our luxury aurora safari. Small groups and premium service guaranteed.',
    bestFor: ['Couples', 'Luxury travelers', 'Special occasions']
  },
  {
    id: '4',
    name: 'Sami Culture & Aurora Experience',
    provider: 'GetYourGuide',
    type: 'Cultural',
    duration: '7 hours',
    priceRange: '$$$',
    rating: 4.5,
    highlights: [
      'Traditional Sami camp',
      'Reindeer feeding',
      'Cultural storytelling',
      'Traditional meal'
    ],
    includes: [
      'Sami camp visit',
      'Reindeer experience',
      'Traditional dinner',
      'Cultural presentation',
      'Aurora viewing'
    ],
    bookingUrl: 'https://www.getyourguide.com/tromso-l186/sami-culture-aurora-t45678/?partner_id=YOUR_AFFILIATE_ID',
    description: 'Combine northern lights viewing with authentic Sami culture. Visit a traditional camp, meet reindeer, and learn about indigenous Arctic life.',
    bestFor: ['Culture enthusiasts', 'Families', 'Educational travel']
  },
  {
    id: '5',
    name: 'Snowmobile Aurora Adventure',
    provider: 'Viator',
    type: 'Adventure',
    duration: '4-5 hours',
    priceRange: '$$$',
    rating: 4.6,
    highlights: [
      'Snowmobile driving',
      'Remote wilderness access',
      'Campfire experience',
      'Adventure and aurora combo'
    ],
    includes: [
      'Snowmobile and gear',
      'Safety instruction',
      'Warm clothing',
      'Hot drinks by campfire',
      'Aurora viewing'
    ],
    bookingUrl: 'https://www.viator.com/tours/Tromso/Snowmobile-Aurora-Adventure/d5441-56789?mcid=YOUR_AFFILIATE_ID',
    description: 'Drive through Arctic wilderness on snowmobiles to reach remote aurora viewing locations. Perfect adventure for thrill-seekers.',
    bestFor: ['Adventure seekers', 'Active travelers', 'Couples']
  },
  {
    id: '6',
    name: 'Husky Sledding & Northern Lights',
    provider: 'GetYourGuide',
    type: 'Adventure',
    duration: '6 hours',
    priceRange: '$$$',
    rating: 4.7,
    highlights: [
      'Husky sledding experience',
      'Meet the sled dogs',
      'Evening aurora hunt',
      'Unique Arctic adventure'
    ],
    includes: [
      'Husky sledding',
      'Dog kennel visit',
      'Warm clothing',
      'Transportation',
      'Aurora viewing'
    ],
    bookingUrl: 'https://www.getyourguide.com/tromso-l186/husky-sledding-aurora-t67890/?partner_id=YOUR_AFFILIATE_ID',
    description: 'Experience the magic of husky sledding followed by northern lights hunting. A perfect combination of Arctic adventure and natural wonder.',
    bestFor: ['Animal lovers', 'Adventure families', 'Unique experiences']
  }
]
