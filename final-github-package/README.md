# Tromso Aurora - Northern Lights Forecast App

Real-time northern lights forecast and the best viewing spots around Tromsø, Norway. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌌 **Real-time Aurora Forecast** - Live Kp index from NOAA + weather from Open-Meteo
- 🗺️ **Interactive Map** - 8 curated aurora viewing spots around Tromsø
- 📊 **Detailed Charts** - 48-hour forecast with Aurora Score algorithm
- 🌍 **Geolocation** - Personalized forecasts based on user location
- 🏨 **Accommodation** - Aurora-friendly hotels with Booking.com affiliate links
- 🎯 **Tours** - Northern lights experiences via GetYourGuide/Viator affiliates

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Maps:** Leaflet + React Leaflet
- **Charts:** Chart.js + React Chart.js 2
- **APIs:** NOAA SWPC (aurora), Open-Meteo (weather)
- **Icons:** Lucide React

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd tromso-aurora
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically - no configuration needed!

### Other Platforms

- **Netlify:** Works out of the box
- **Railway:** Add `railway.json` config
- **DigitalOcean App Platform:** Use Node.js buildpack

## Monetization Setup

### 1. Booking.com Affiliate Program
1. Sign up at [partner.booking.com](https://partner.booking.com)
2. Get your affiliate ID
3. Replace \`YOUR_AFFILIATE_ID\` in \`src/data/accommodations.ts\`

### 2. GetYourGuide Affiliate Program  
1. Apply at [affiliate.getyourguide.com](https://affiliate.getyourguide.com)
2. Get your partner ID
3. Replace \`YOUR_AFFILIATE_ID\` in \`src/data/tours.ts\`

### 3. Viator Affiliate Program
1. Join via [viator.com/partners](https://www.viator.com/partners)
2. Get your affiliate ID  
3. Replace \`YOUR_AFFILIATE_ID\` in \`src/data/tours.ts\`

## API Endpoints

- \`/api/weather\` - Current weather data (Open-Meteo)
- \`/api/aurora\` - Aurora activity (NOAA SWPC)
- \`/api/forecast\` - Combined aurora forecast
- \`/api/forecast/detailed\` - 48-hour detailed forecast

## Project Structure

\`\`\`
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── forecast/       # Forecast page with charts
│   ├── spots/          # Aurora viewing locations
│   ├── stay/           # Accommodation (affiliate)
│   └── tours/          # Tours & experiences (affiliate)
├── components/         # React components
├── data/              # Static data (spots, hotels, tours)
├── hooks/             # Custom React hooks
└── types/             # TypeScript type definitions
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or support, please open an issue on GitHub.
