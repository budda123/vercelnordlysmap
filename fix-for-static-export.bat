@echo off
echo 🔧 Naprawianie aplikacji dla static export...

REM Tymczasowo przenies API routes
if exist src\app\api (
    echo 📁 Przenoszenie API routes...
    if exist api-backup rmdir /s /q api-backup
    move src\app\api api-backup
    echo ✅ API routes przeniesione do api-backup
)

echo 📦 Teraz uruchom build ponownie na Netlify
echo 🚀 Po naprawie mozesz przywrocic API: move api-backup src\app\api

pause
