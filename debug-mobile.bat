@echo off
echo 🔍 Debugging mobile/browser issues...
echo.
echo 📱 Common issues when app works only on Chrome desktop:
echo.
echo ❌ CORS Policy - External APIs block non-localhost requests
echo ❌ HTTPS Required - Mobile browsers require HTTPS for geolocation
echo ❌ Mixed Content - HTTP API calls blocked on HTTPS pages
echo ❌ Service Worker - PWA features need HTTPS
echo.
echo 🛠️ Quick fixes:
echo.
echo 1. Deploy to Vercel/Netlify (gets HTTPS automatically)
echo 2. Use API proxies through Next.js API routes
echo 3. Enable HTTPS on local development
echo.
echo 🚀 Testing deployment...
npm run build
echo.
echo ✅ If build succeeds, deploy to get HTTPS and fix mobile issues
pause
