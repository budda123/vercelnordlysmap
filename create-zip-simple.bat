@echo off
echo 🚀 Creating GitHub ZIP package for NordlysMap...

set SOURCE_DIR=c:\Users\tomek\CascadeProjects\splitwise-3
set TEMP_DIR=c:\Users\tomek\CascadeProjects\nordlysmap-github
set ZIP_FILE=c:\Users\tomek\CascadeProjects\nordlysmap-github-ready.zip

echo 📦 Preparing clean package...

REM Remove existing temp directory
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
mkdir "%TEMP_DIR%"

REM Remove existing ZIP
if exist "%ZIP_FILE%" del "%ZIP_FILE%"

echo ✅ Copying essential files...

REM Copy essential files
copy "%SOURCE_DIR%\README.md" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\LICENSE" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\package.json" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\package-lock.json" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\next.config.js" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\tailwind.config.ts" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\tsconfig.json" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\postcss.config.js" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\next-env.d.ts" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\.gitignore" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\.eslintrc.json" "%TEMP_DIR%\" >nul

echo ✅ Copying documentation...
copy "%SOURCE_DIR%\GITHUB-SETUP.md" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\CPANEL-DEPLOYMENT.md" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\SEO-CHECKLIST.md" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\ICONS-GUIDE.md" "%TEMP_DIR%\" >nul
copy "%SOURCE_DIR%\FINAL-IMPROVEMENTS.md" "%TEMP_DIR%\" >nul

echo ✅ Copying source code...
xcopy "%SOURCE_DIR%\src" "%TEMP_DIR%\src" /e /i /h /y >nul

echo ✅ Creating public directory...
mkdir "%TEMP_DIR%\public" >nul

echo 🗜️ Creating ZIP file...
powershell Compress-Archive -Path '%TEMP_DIR%\*' -DestinationPath '%ZIP_FILE%' -Force

if exist "%ZIP_FILE%" (
    echo.
    echo 🎉 SUCCESS! GitHub package ready!
    echo 📦 File: %ZIP_FILE%
    echo.
    echo 📋 What's included:
    echo ✅ README.md - Professional GitHub README
    echo ✅ LICENSE - MIT License
    echo ✅ package.json - All dependencies
    echo ✅ src/ - Complete Next.js application
    echo ✅ Documentation - Setup guides
    echo ✅ Config files - next, tailwind, typescript
    echo.
    echo 📋 Next steps:
    echo 1. Extract ZIP to new folder
    echo 2. cd into folder
    echo 3. npm install
    echo 4. git init
    echo 5. git add .
    echo 6. git commit -m "Initial commit: NordlysMap"
    echo 7. Create repo on GitHub
    echo 8. git remote add origin ^<your-repo-url^>
    echo 9. git push -u origin main
    echo 10. Deploy to Vercel/Netlify
    echo.
    echo 🚀 Ready for GitHub and deployment!
) else (
    echo ❌ ERROR: Failed to create ZIP file
)

echo 🧹 Cleaning up...
rmdir /s /q "%TEMP_DIR%"

echo.
echo ✅ ZIP package created successfully!
pause
