@echo off
echo 🔧 Naprawianie lokalizacji i prognozy...

echo 📝 Dodawanie zmian...
git add .

echo 💾 Commit...
git commit -m "Fix geolocation with Tromsø fallback for better UX"

echo 🚀 Push na GitHub...
git push

echo ✅ Naprawa wypchnięta!
echo 🌐 Sprawdź https://nordlysmap1.netlify.app/ za 2-3 minuty
echo 📍 Teraz powinna działać lokalizacja (fallback na Tromsø)

pause
