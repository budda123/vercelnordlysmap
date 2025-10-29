@echo off
echo Building static version for shared hosting...

REM Set PATH to include Node.js
set PATH=C:\Program Files\nodejs;%PATH%

REM Build the application
npm run build

echo.
echo Static files generated in 'out' folder
echo Upload contents of 'out' folder to your hosting public_html
echo.
pause
