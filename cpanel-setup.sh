#!/bin/bash

# Tromso Aurora - cPanel Setup Script
echo "🎛️ Setting up Tromso Aurora for cPanel hosting..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Make sure you're in the project directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Build the application
echo "🔨 Building application..."
npm run build

# Create logs directory
mkdir -p logs

# Set proper permissions
echo "🔐 Setting permissions..."
chmod 755 server.js
chmod 755 -R .next/
chmod 755 -R public/

# Check if PM2 is available
if command -v pm2 &> /dev/null; then
    echo "📊 PM2 found, starting with PM2..."
    pm2 start ecosystem.config.js
    pm2 save
else
    echo "⚠️ PM2 not available. Use cPanel Node.js Selector to start the app."
    echo "   Startup file: server.js"
fi

echo "✅ Setup completed!"
echo ""
echo "📋 Next steps in cPanel:"
echo "1. Go to Node.js Selector"
echo "2. Create Application:"
echo "   - Node.js Version: 18.x"
echo "   - Application Root: $(pwd)"
echo "   - Startup File: server.js"
echo "3. Click 'Create' and then 'Restart'"
echo ""
echo "🌐 Your app will be available at your domain after setup!"
