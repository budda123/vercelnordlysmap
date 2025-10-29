@echo off
echo 🗑️ Usuwanie API routes dla static export...

if exist src\app\api (
    echo 📁 Folder API istnieje - usuwanie...
    rmdir /s /q src\app\api
    echo ✅ API routes usuniete
) else (
    echo ℹ️ Folder API juz nie istnieje
)

echo 📝 Dodawanie zmian do Git...
git add .
git commit -m "Remove API routes for static export compatibility"

echo 🚀 Wypychanie na GitHub...
git push

echo ✅ Gotowe! Teraz sprobuj deploy na Netlify ponownie

pause
