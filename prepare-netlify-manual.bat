@echo off
echo 🚀 Przygotowywanie plikow do manual deploy na Netlify...

REM Sprawdz czy jest Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js nie jest zainstalowany!
    echo Pobierz z: https://nodejs.org
    pause
    exit /b 1
)

REM Zainstaluj zaleznosci
echo 📦 Instalowanie zaleznosci...
npm install

REM Zbuduj aplikacje
echo 🔨 Budowanie aplikacji...
npm run build

REM Sprawdz czy folder out istnieje
if exist out (
    echo ✅ Folder 'out' zostal utworzony!
    echo 📁 Przeciagnij zawartosc folderu 'out' do Netlify
    echo 🌐 Lub spakuj folder 'out' i przeslij jako ZIP
) else (
    echo ❌ Blad podczas budowania!
    echo Sprawdz logi powyzej
)

pause
