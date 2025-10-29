@echo off
echo 📦 Tworzenie ostatecznej paczki dla GitHub...

REM Usuń stare paczki
if exist final-github-package rmdir /s /q final-github-package
if exist github-package rmdir /s /q github-package

REM Utworz nowy folder
mkdir final-github-package

echo 📋 Kopiowanie naprawionych plikow glownych...
copy package.json final-github-package\
copy package-lock.json final-github-package\
copy next.config.js final-github-package\
copy netlify.toml final-github-package\
copy tsconfig.json final-github-package\
copy tailwind.config.ts final-github-package\
copy postcss.config.js final-github-package\
copy next-env.d.ts final-github-package\
copy README.md final-github-package\
copy .gitignore final-github-package\

REM Skopiuj .env.example jesli istnieje
if exist .env.example copy .env.example final-github-package\

echo 📁 Kopiowanie folderow z kodem...
xcopy src final-github-package\src\ /E /I /Q /EXCLUDE:exclude-api.txt
xcopy public final-github-package\public\ /E /I /Q

REM Usuń folder API jesli istnieje w kopii
if exist final-github-package\src\app\api rmdir /s /q final-github-package\src\app\api

echo 📝 Tworzenie listy plikow...
echo LISTA PLIKOW W PACZCE: > final-github-package\FILES-LIST.txt
echo. >> final-github-package\FILES-LIST.txt
echo PLIKI GLOWNE: >> final-github-package\FILES-LIST.txt
echo - package.json >> final-github-package\FILES-LIST.txt
echo - package-lock.json >> final-github-package\FILES-LIST.txt
echo - next.config.js (naprawiony) >> final-github-package\FILES-LIST.txt
echo - netlify.toml >> final-github-package\FILES-LIST.txt
echo - tsconfig.json >> final-github-package\FILES-LIST.txt
echo - tailwind.config.ts >> final-github-package\FILES-LIST.txt
echo - postcss.config.js >> final-github-package\FILES-LIST.txt
echo - README.md >> final-github-package\FILES-LIST.txt
echo - .gitignore >> final-github-package\FILES-LIST.txt
echo. >> final-github-package\FILES-LIST.txt
echo FOLDERY: >> final-github-package\FILES-LIST.txt
echo - src/ (caly kod aplikacji, bez API) >> final-github-package\FILES-LIST.txt
echo - public/ (statyczne pliki) >> final-github-package\FILES-LIST.txt
echo. >> final-github-package\FILES-LIST.txt
echo NAPRAWY: >> final-github-package\FILES-LIST.txt
echo - Usunieto folder src/app/api/ >> final-github-package\FILES-LIST.txt
echo - Naprawiono next.config.js >> final-github-package\FILES-LIST.txt
echo - Naprawiono src/app/spots/page.tsx >> final-github-package\FILES-LIST.txt
echo - Naprawiono src/hooks/useAuroraForecast.ts >> final-github-package\FILES-LIST.txt
echo - Naprawiono src/components/ForecastCharts.tsx >> final-github-package\FILES-LIST.txt

echo ✅ PACZKA GOTOWA!
echo 📁 Folder: final-github-package
echo 📋 Lista plikow: final-github-package\FILES-LIST.txt
echo.
echo 🚀 NASTEPNE KROKI:
echo 1. Spakuj folder 'final-github-package' do ZIP
echo 2. Lub przeslij zawartosc na GitHub
echo 3. Lub przeciagnij do Netlify (manual deploy)
echo.
pause
