@echo off
echo 🚀 Automatyczne wdrozenie Tromso Aurora na GitHub + Netlify
echo.

REM Sprawdz czy git jest zainstalowany
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git nie jest zainstalowany!
    echo Pobierz z: https://git-scm.com
    pause
    exit /b 1
)

echo 📋 Krok 1: Inicjalizacja Git...
git init

echo 📦 Krok 2: Dodawanie plikow...
git add .

echo 💾 Krok 3: Pierwszy commit...
git commit -m "Initial commit - Tromso Aurora for nordlysmap.com"

echo 🌿 Krok 4: Ustawianie glownej galezi...
git branch -M main

echo.
echo ✅ Projekt przygotowany do GitHub!
echo.
echo 📝 NASTEPNE KROKI (wykonaj recznie):
echo 1. Wejdz na github.com i utworz nowe repozytorium
echo 2. Skopiuj URL repo (np. https://github.com/username/tromso-aurora.git)
echo 3. Uruchom: git remote add origin [URL]
echo 4. Uruchom: git push -u origin main
echo 5. Wejdz na netlify.com i polacz z GitHub
echo 6. Wybierz swoje repo i wdroz
echo 7. W Netlify dodaj domene: nordlysmap.com
echo.
pause
