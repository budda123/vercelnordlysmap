@echo off
echo 📦 Pakowanie plikow dla GitHub...

REM Utworz folder tymczasowy
if exist github-package rmdir /s /q github-package
mkdir github-package

echo 📋 Kopiowanie plikow glownych...
copy package.json github-package\
copy package-lock.json github-package\
copy next.config.js github-package\
copy netlify.toml github-package\
copy tsconfig.json github-package\
copy tailwind.config.ts github-package\
copy postcss.config.js github-package\
copy next-env.d.ts github-package\
copy README.md github-package\
copy .gitignore github-package\
copy .env.example github-package\

echo 📁 Kopiowanie folderow...
xcopy src github-package\src\ /E /I /Q
xcopy public github-package\public\ /E /I /Q

echo ✅ Pliki skopiowane do folderu 'github-package'
echo 📦 Spakuj folder 'github-package' do ZIP
echo 🚀 Lub przeslij zawartosc folderu 'github-package' na GitHub

pause
