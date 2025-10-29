# PowerShell script to create GitHub-ready ZIP package
Write-Host "🚀 Creating GitHub ZIP package for NordlysMap..." -ForegroundColor Green

# Define source and destination
$sourceDir = "c:\Users\tomek\CascadeProjects\splitwise-3"
$zipName = "nordlysmap-github-ready.zip"
$zipPath = "c:\Users\tomek\Desktop\$zipName"

# Remove existing ZIP if exists
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
    Write-Host "✅ Removed existing ZIP file" -ForegroundColor Yellow
}

# Create temporary directory for clean package
$tempDir = "c:\Users\tomek\CascadeProjects\nordlysmap-temp"
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

Write-Host "📦 Copying essential files..." -ForegroundColor Cyan

# Essential files to include
$essentialFiles = @(
    "README.md",
    "LICENSE", 
    "package.json",
    "package-lock.json",
    "next.config.js",
    "tailwind.config.ts",
    "tsconfig.json",
    "postcss.config.js",
    "next-env.d.ts",
    ".gitignore",
    ".eslintrc.json"
)

# Documentation files
$docFiles = @(
    "GITHUB-SETUP.md",
    "CPANEL-DEPLOYMENT.md", 
    "SEO-CHECKLIST.md",
    "ICONS-GUIDE.md",
    "FINAL-IMPROVEMENTS.md"
)

# Copy essential files
foreach ($file in $essentialFiles) {
    $sourcePath = Join-Path $sourceDir $file
    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $tempDir -Force
        Write-Host "✅ Copied: $file" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Missing: $file" -ForegroundColor Red
    }
}

# Copy documentation files
foreach ($file in $docFiles) {
    $sourcePath = Join-Path $sourceDir $file
    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $tempDir -Force
        Write-Host "✅ Copied: $file" -ForegroundColor Green
    }
}

# Copy src directory (entire source code)
$srcSource = Join-Path $sourceDir "src"
$srcDest = Join-Path $tempDir "src"
if (Test-Path $srcSource) {
    Copy-Item $srcSource $srcDest -Recurse -Force
    Write-Host "✅ Copied: src/ directory" -ForegroundColor Green
} else {
    Write-Host "❌ ERROR: src/ directory not found!" -ForegroundColor Red
    exit 1
}

# Copy public directory if exists
$publicSource = Join-Path $sourceDir "public"
$publicDest = Join-Path $tempDir "public"
if (Test-Path $publicSource) {
    Copy-Item $publicSource $publicDest -Recurse -Force
    Write-Host "✅ Copied: public/ directory" -ForegroundColor Green
} else {
    # Create empty public directory
    New-Item -ItemType Directory -Path $publicDest | Out-Null
    Write-Host "✅ Created: empty public/ directory" -ForegroundColor Yellow
}

Write-Host "🗜️  Creating ZIP archive..." -ForegroundColor Cyan

# Create ZIP file
try {
    Compress-Archive -Path "$tempDir\*" -DestinationPath $zipPath -Force
    Write-Host "✅ ZIP created successfully!" -ForegroundColor Green
    Write-Host "📍 Location: $zipPath" -ForegroundColor White
    
    # Get ZIP size
    $zipSize = (Get-Item $zipPath).Length
    $zipSizeMB = [math]::Round($zipSize / 1MB, 2)
    Write-Host "📏 Size: $zipSizeMB MB" -ForegroundColor White
    
} catch {
    Write-Host "❌ ERROR creating ZIP: $_" -ForegroundColor Red
    exit 1
}

# Cleanup temp directory
Remove-Item $tempDir -Recurse -Force
Write-Host "🧹 Cleaned up temporary files" -ForegroundColor Yellow

Write-Host "`n🎉 SUCCESS! GitHub package ready!" -ForegroundColor Green
Write-Host "📦 File: $zipPath" -ForegroundColor White
Write-Host "`n📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Extract ZIP to new folder" -ForegroundColor White
Write-Host "2. cd into folder" -ForegroundColor White  
Write-Host "3. git init" -ForegroundColor White
Write-Host "4. git add ." -ForegroundColor White
Write-Host "5. git commit -m 'Initial commit'" -ForegroundColor White
Write-Host "6. Create repo on GitHub" -ForegroundColor White
Write-Host "7. git remote add origin <your-repo-url>" -ForegroundColor White
Write-Host "8. git push -u origin main" -ForegroundColor White
Write-Host "`n🚀 Ready to deploy to Vercel/Netlify!" -ForegroundColor Green
