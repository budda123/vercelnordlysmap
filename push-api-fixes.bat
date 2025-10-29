@echo off
echo 🔧 Wypychanie napraw API na GitHub...

echo 📝 Dodawanie zmian...
git add .

echo 💾 Commit...
git commit -m "Replace API calls with mock data for static export"

echo 🚀 Push na GitHub...
git push

echo ✅ Zmiany wypchnięte!
echo 🌐 Teraz spróbuj deploy na Netlify ponownie
echo 📊 Aplikacja będzie używać mock danych zamiast prawdziwego API

pause
