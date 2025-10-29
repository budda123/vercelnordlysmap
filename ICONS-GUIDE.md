# 🎨 Icons & Favicon Guide for NordlysMap

## Required Icons

### Favicon (Browser Tab)
- `favicon.ico` (16x16, 32x32, 48x48)
- Place in: `src/app/favicon.ico`

### PWA Icons
- `icon-192x192.png` - Android home screen
- `icon-512x512.png` - Android splash screen
- Place in: `public/` folder

### Apple Touch Icons
- `apple-touch-icon.png` (180x180) - iOS home screen
- Place in: `public/apple-touch-icon.png`

## Design Concept

### Colors
- **Primary**: Aurora blue (#0ea5e9)
- **Background**: Arctic dark (#0f172a)
- **Accent**: Aurora green (#10b981)

### Icon Ideas
1. **Northern lights waves** - Stylized aurora curves
2. **Compass with aurora** - Navigation + northern lights
3. **Mountain silhouette with aurora** - Nordic landscape
4. **"NM" monogram** - Simple text logo

## Tools to Create Icons

### Online Tools (Free)
1. **Favicon.io** - favicon.io/favicon-generator
2. **Canva** - canva.com (has aurora templates)
3. **GIMP** - Free image editor
4. **Figma** - figma.com (free tier)

### AI Tools
1. **DALL-E** - "Northern lights logo, minimalist, blue and green"
2. **Midjourney** - "Aurora borealis icon, app logo, clean design"
3. **Stable Diffusion** - Local generation

## Quick Setup Instructions

### 1. Create Base Design (512x512)
- Dark background (#0f172a)
- Aurora waves or "NM" text
- High contrast for visibility

### 2. Generate All Sizes
```bash
# Using ImageMagick (if installed)
convert icon-512x512.png -resize 192x192 icon-192x192.png
convert icon-512x512.png -resize 180x180 apple-touch-icon.png
convert icon-512x512.png -resize 32x32 favicon.ico
```

### 3. Place Files
```
public/
├── icon-192x192.png
├── icon-512x512.png
├── apple-touch-icon.png
└── favicon.ico (or in src/app/)
```

## Temporary Solution

If you need icons quickly, I can help you create simple text-based icons:

### CSS-Generated Icon
```css
/* Simple NM logo */
.logo-icon {
  width: 512px;
  height: 512px;
  background: linear-gradient(135deg, #0ea5e9, #10b981);
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 200px;
  color: white;
  text-shadow: 0 4px 8px rgba(0,0,0,0.3);
}
```

## Testing Icons

### Browser Testing
- Check favicon in browser tab
- Test on different devices
- Verify PWA install prompt

### PWA Testing
- Chrome DevTools > Application > Manifest
- Test "Add to Home Screen"
- Check icon quality on mobile

Would you like me to help create the actual icon files or set up the PWA configuration?
