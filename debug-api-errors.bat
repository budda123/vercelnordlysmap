@echo off
echo 🔍 Debugging API Forbidden errors...
echo.

echo Testing APIs directly...
echo.

echo 1. Testing NOAA Aurora API...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json' -Headers @{'User-Agent'='NordlysMap/1.0'}; Write-Host 'NOAA API: SUCCESS' -ForegroundColor Green; $response[-1] } catch { Write-Host 'NOAA API: FAILED -' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 2. Testing Open-Meteo Weather API...
powershell -Command "try { $response = Invoke-RestMethod -Uri 'https://api.open-meteo.com/v1/forecast?latitude=69.6&longitude=18.9&current=temperature_2m,cloud_cover' -Headers @{'User-Agent'='NordlysMap/1.0'}; Write-Host 'Open-Meteo API: SUCCESS' -ForegroundColor Green; $response.current } catch { Write-Host 'Open-Meteo API: FAILED -' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 3. Testing local API routes...
echo Starting dev server to test...
start /B npm run dev
timeout /t 5 /nobreak >nul

powershell -Command "try { $response = Invoke-RestMethod -Uri 'http://localhost:3000/api/aurora'; Write-Host 'Local Aurora API: SUCCESS' -ForegroundColor Green; $response } catch { Write-Host 'Local Aurora API: FAILED -' $_.Exception.Message -ForegroundColor Red }"

echo.
echo 📋 Results will show which API is causing Forbidden errors
pause
