# 📦 GitHub Setup - Krok po Kroku

## Krok 1: Inicjalizacja Git

```bash
# W folderze projektu (splitwise-3)
git init
git add .
git commit -m "Initial commit: NordlysMap - Northern Lights Weather Forecast App

✨ Features:
- Real-time aurora forecast with NOAA + Open-Meteo APIs
- Interactive map with 8 curated viewing spots
- 48-hour detailed forecasts with Chart.js
- PWA with push notifications
- SEO optimized for 'northern lights weather' keywords
- Affiliate monetization (Booking.com, GetYourGuide, Viator)
- Geolocation-based personalized forecasts
- Norwegian language support (nordlys værmelding)

🚀 Tech Stack: Next.js 14, TypeScript, Tailwind CSS, Leaflet, Chart.js
💰 Revenue Potential: $2,000-10,000/month
📈 SEO Target: 10,000+ organic visitors/month"
```

## Krok 2: Utworzenie Repo na GitHub

1. **Idź na github.com**
2. **Kliknij "New repository"**
3. **Nazwa:** `nordlysmap` (lub `northern-lights-forecast`)
4. **Opis:** `🌌 Real-time northern lights weather forecast and aurora viewing spots around Tromsø, Norway`
5. **Public** (dla lepszego SEO i portfolio)
6. **NIE zaznaczaj** "Add README" (już mamy)
7. **Kliknij "Create repository"**

## Krok 3: Połączenie z GitHub

```bash
# Dodaj remote origin (zamień YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/nordlysmap.git

# Wyślij kod na GitHub
git branch -M main
git push -u origin main
```

## Krok 4: Weryfikacja

Po wysłaniu sprawdź na GitHub czy wszystkie pliki są na miejscu:

### ✅ Struktura powinna zawierać:
```
nordlysmap/
├── README.md                    # Professional GitHub README
├── LICENSE                      # MIT License
├── package.json                 # Dependencies
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── tsconfig.json               # TypeScript config
├── .gitignore                  # Git ignore rules
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Homepage
│   │   ├── sitemap.ts          # SEO sitemap
│   │   ├── robots.ts           # SEO robots
│   │   ├── manifest.ts         # PWA manifest
│   │   ├── api/                # API routes
│   │   ├── forecast/           # Forecast page
│   │   ├── spots/              # Aurora spots
│   │   ├── stay/               # Hotels (affiliate)
│   │   └── tours/              # Tours (affiliate)
│   ├── components/             # React components
│   ├── data/                   # Static data
│   ├── hooks/                  # Custom hooks
│   ├── lib/                    # Utilities
│   └── types/                  # TypeScript types
└── docs/                       # Documentation
    ├── CPANEL-DEPLOYMENT.md    # cPanel instructions
    ├── SEO-CHECKLIST.md        # SEO strategy
    ├── ICONS-GUIDE.md          # Icons setup
    └── FINAL-IMPROVEMENTS.md   # Feature summary
```

## Krok 5: GitHub Settings

### A) Repository Settings
1. **Settings** → **General**
2. **Features** → Włącz:
   - ✅ Issues
   - ✅ Discussions  
   - ✅ Projects
   - ✅ Wiki

### B) GitHub Pages (opcjonalnie)
1. **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main / (root)
4. **Save**

Twoja strona będzie dostępna na: `https://YOUR-USERNAME.github.io/nordlysmap`

### C) Topics (SEO dla GitHub)
1. **Settings** → **General**
2. **Topics:** Dodaj:
   - `northern-lights`
   - `aurora-forecast`
   - `weather-app`
   - `nextjs`
   - `typescript`
   - `norway`
   - `tromso`
   - `pwa`

## Krok 6: README Badges

GitHub automatycznie pokaże badges z README.md:
- [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
- [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
- [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
- [![PWA](https://img.shields.io/badge/PWA-Ready-green)](https://web.dev/progressive-web-apps/)

## Krok 7: Następne Kroki

### Po wysłaniu na GitHub:

1. **Vercel Deployment:**
   - Idź na vercel.com
   - "New Project" → Import z GitHub
   - Wybierz repo `nordlysmap`
   - Deploy automatycznie!

2. **Netlify Deployment:**
   - Idź na netlify.com  
   - "New site from Git"
   - Wybierz GitHub repo
   - Deploy!

3. **Domain Setup:**
   - Kup domenę `nordlysmap.com`
   - Podłącz do Vercel/Netlify
   - SSL automatycznie

## 🎯 Gotowe Linki

Po wdrożeniu będziesz miał:
- **GitHub Repo:** `https://github.com/YOUR-USERNAME/nordlysmap`
- **Live App:** `https://nordlysmap.vercel.app` (lub własna domena)
- **GitHub Pages:** `https://YOUR-USERNAME.github.io/nordlysmap`

## 🚀 Marketing GitHub

### Zwiększ widoczność:
1. **Star własny repo** (pierwszy star zachęca innych)
2. **Share na social media** z linkiem do repo
3. **Dodaj do portfolio** na LinkedIn/CV
4. **Submit do awesome lists** (awesome-nextjs, awesome-pwa)
5. **Write blog post** o tworzeniu aplikacji

### SEO Benefits:
- GitHub repo pojawi się w Google dla "northern lights forecast github"
- Backlink z GitHub (domain authority 100) pomoże w SEO
- Open source = więcej zaufania użytkowników

---

**🎉 Gratulacje! NordlysMap jest gotowy do podboju GitHub i internetu!**
