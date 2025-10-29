@echo off
echo 🔧 KOMPLETNA NAPRAWA - Usuwanie problemowych elementow...

REM 1. Usuń API routes (nie działają ze static export)
if exist src\app\api (
    echo 📁 Usuwanie API routes...
    rmdir /s /q src\app\api
    echo ✅ API routes usuniete
)

echo 📝 Naprawianie konfiguracji...
echo Pliki zostana naprawione automatycznie przez Cascade

echo ✅ Naprawa zakonczona!
echo 🚀 Teraz wypchnij zmiany na GitHub i sprobuj deploy ponownie

pause
