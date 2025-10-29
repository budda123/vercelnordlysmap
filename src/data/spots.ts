import { AuroraSpot } from '@/types/spots'

export const auroraSpots: AuroraSpot[] = [
  {
    id: '1',
    name: 'Tromsø Bridge',
    slug: 'tromso-bridge',
    coordinates: { lat: 69.6496, lng: 18.9560 },
    driveTimeFromTromso: '5 minutes',
    difficulty: 'Easy',
    description: 'The iconic Tromsø Bridge offers stunning views of the city and surrounding fjords. This easily accessible spot is perfect for beginners and provides excellent photo opportunities with the city lights reflecting on the water.',
    highlights: [
      'City skyline backdrop',
      'Easy parking available',
      'Great for photography',
      'Accessible by public transport'
    ],
    parking: 'Free parking available near the bridge approach',
    bestConditions: ['Clear skies', 'Low light pollution on north side', 'Calm weather'],
    safetyNotes: 'Stay on designated walkways and be aware of traffic',
    seoTitle: 'Tromsø Bridge - Best Northern Lights Spot in City Center',
    seoDescription: 'Experience the northern lights from iconic Tromsø Bridge. Easy access, free parking, and stunning city backdrop make this the perfect beginner spot for aurora viewing.'
  },
  {
    id: '2',
    name: 'Sommarøy',
    slug: 'sommaroy',
    coordinates: { lat: 69.6389, lng: 17.9667 },
    driveTimeFromTromso: '45 minutes',
    difficulty: 'Easy',
    description: 'A picturesque fishing village with white sandy beaches and crystal-clear waters. Sommarøy offers minimal light pollution and panoramic views of the northern sky, making it one of the most popular aurora destinations near Tromsø.',
    highlights: [
      'White sandy beaches',
      'Minimal light pollution',
      'Panoramic northern views',
      'Charming fishing village'
    ],
    parking: 'Village parking areas, arrive early during peak season',
    bestConditions: ['Clear northern horizon', 'Low wind for beach comfort', 'Dark skies'],
    seoTitle: 'Sommarøy Northern Lights - Arctic Beach Aurora Experience',
    seoDescription: 'Watch the northern lights dance over white sandy beaches at Sommarøy. This charming fishing village offers dark skies and stunning aurora reflections on Arctic waters.'
  },
  {
    id: '3',
    name: 'Senja Island - Hamn i Senja',
    slug: 'hamn-i-senja',
    coordinates: { lat: 69.5892, lng: 17.9661 },
    driveTimeFromTromso: '2 hours 30 minutes',
    difficulty: 'Moderate',
    description: 'Dramatic mountain peaks rising directly from the sea create one of Norway\'s most spectacular aurora viewing locations. The iconic Segla mountain provides an unforgettable backdrop for northern lights photography.',
    highlights: [
      'Dramatic mountain backdrop',
      'Iconic Segla peak views',
      'World-class photography spot',
      'Minimal light pollution'
    ],
    parking: 'Limited parking at Hamn, book accommodation in advance',
    bestConditions: ['Clear mountain views', 'Stable weather', 'New moon phase'],
    safetyNotes: 'Mountain weather can change rapidly, check conditions before traveling',
    seoTitle: 'Hamn i Senja Northern Lights - Dramatic Mountain Aurora Views',
    seoDescription: 'Experience the northern lights with dramatic Senja mountain peaks as backdrop. Hamn i Senja offers world-class aurora photography opportunities in stunning Arctic landscape.'
  },
  {
    id: '4',
    name: 'Lyngen Alps',
    slug: 'lyngen-alps',
    coordinates: { lat: 69.5833, lng: 20.2167 },
    driveTimeFromTromso: '1 hour 45 minutes',
    difficulty: 'Advanced',
    description: 'Towering alpine peaks and pristine wilderness create an otherworldly setting for aurora viewing. The Lyngen Alps offer some of the most dramatic and remote northern lights experiences in the region.',
    highlights: [
      'Alpine mountain setting',
      'Pristine wilderness',
      'Advanced photography opportunities',
      'Multiple viewing locations'
    ],
    parking: 'Various trailhead parking areas, 4WD recommended in winter',
    bestConditions: ['Stable mountain weather', 'Clear skies', 'Good road conditions'],
    safetyNotes: 'Mountain conditions require proper equipment and experience. Check avalanche warnings.',
    seoTitle: 'Lyngen Alps Northern Lights - Alpine Aurora Adventure',
    seoDescription: 'Witness the northern lights in the dramatic Lyngen Alps. This advanced location offers pristine wilderness and towering peaks for unforgettable aurora experiences.'
  },
  {
    id: '5',
    name: 'Kvaløya - Ersfjordbotn',
    slug: 'ersfjordbotn',
    coordinates: { lat: 69.6167, lng: 18.6833 },
    driveTimeFromTromso: '30 minutes',
    difficulty: 'Easy',
    description: 'A sheltered fjord location with the distinctive Ersfjordbotn beach and surrounding mountains. This spot offers protection from wind and excellent reflections of the aurora on calm water.',
    highlights: [
      'Sheltered fjord location',
      'Mountain reflections',
      'Wind protection',
      'Easy accessibility'
    ],
    parking: 'Roadside parking available, limited spaces',
    bestConditions: ['Calm water for reflections', 'Clear northern sky', 'Low wind'],
    seoTitle: 'Ersfjordbotn Northern Lights - Sheltered Fjord Aurora Views',
    seoDescription: 'Enjoy northern lights viewing at peaceful Ersfjordbotn fjord. Protected location with mountain reflections and easy access from Tromsø.'
  },
  {
    id: '6',
    name: 'Malangen',
    slug: 'malangen',
    coordinates: { lat: 69.4833, lng: 18.7167 },
    driveTimeFromTromso: '1 hour',
    difficulty: 'Moderate',
    description: 'A long fjord stretching inland with several excellent viewing points and accommodation options. Malangen offers a good balance of accessibility and dark skies, with the famous Malangen Resort as a base.',
    highlights: [
      'Multiple viewing points',
      'Resort accommodation available',
      'Dark sky location',
      'Fjord landscape'
    ],
    parking: 'Resort parking and roadside areas available',
    bestConditions: ['Clear fjord views', 'Stable weather', 'Dark skies'],
    seoTitle: 'Malangen Northern Lights - Fjord Aurora with Resort Comfort',
    seoDescription: 'Experience northern lights at Malangen fjord with resort amenities nearby. Multiple viewing points and dark skies make this ideal for extended aurora watching.'
  },
  {
    id: '7',
    name: 'Alta',
    slug: 'alta',
    coordinates: { lat: 69.9689, lng: 23.2717 },
    driveTimeFromTromso: '4 hours',
    difficulty: 'Moderate',
    description: 'Known as the "City of Northern Lights," Alta offers some of the best aurora statistics in the world. The Northern Lights Cathedral and surrounding areas provide excellent viewing with good infrastructure.',
    highlights: [
      'Highest aurora frequency',
      'Northern Lights Cathedral',
      'Good infrastructure',
      'Multiple viewing areas'
    ],
    parking: 'City parking available, various locations around Alta',
    bestConditions: ['Clear skies', 'High aurora activity', 'Cold temperatures'],
    seoTitle: 'Alta Northern Lights - City of Aurora Borealis',
    seoDescription: 'Visit Alta, the "City of Northern Lights" with world-class aurora viewing statistics. Experience the northern lights with excellent infrastructure and viewing facilities.'
  },
  {
    id: '8',
    name: 'Skulsfjord',
    slug: 'skulsfjord',
    coordinates: { lat: 69.3167, lng: 18.0833 },
    driveTimeFromTromso: '2 hours',
    difficulty: 'Moderate',
    description: 'A hidden gem offering pristine wilderness and excellent aurora viewing conditions. This remote location provides minimal light pollution and stunning mountain backdrops for serious aurora photographers.',
    highlights: [
      'Pristine wilderness',
      'Minimal light pollution',
      'Mountain backdrops',
      'Hidden gem location'
    ],
    parking: 'Limited roadside parking, arrive early',
    bestConditions: ['Clear mountain views', 'Stable weather', 'New moon'],
    safetyNotes: 'Remote location - inform others of travel plans and carry emergency supplies',
    seoTitle: 'Skulsfjord Northern Lights - Hidden Aurora Photography Gem',
    seoDescription: 'Discover Skulsfjord, a hidden northern lights location with pristine wilderness and minimal light pollution. Perfect for serious aurora photographers seeking untouched landscapes.'
  }
]
