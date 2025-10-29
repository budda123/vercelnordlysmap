@echo off
echo 🚀 Przygotowywanie plikow do uploadu na cPanel...

REM Usun foldery ktorych nie potrzebujemy
if exist node_modules rmdir /s /q node_modules
if exist .next rmdir /s /q .next
if exist .git rmdir /s /q .git

REM Skopiuj .env.example do .env.local
copy .env.example .env.local

echo ✅ Pliki gotowe do uploadu!
echo 📁 Mozesz teraz skopiowac caly folder przez Total Commander
echo 🌐 Pamietaj: skopiuj do public_html na serwerze
pause
