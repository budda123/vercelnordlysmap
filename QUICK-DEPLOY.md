# 🚀 Szybkie wdrożenie na nordlysmap.com

## Automatyczne kroki (już wykonane):
✅ Konfiguracja Netlify (netlify.toml)
✅ Ustawienia Next.js (next.config.js) 
✅ Przekierowania domeny (nordlysmap.com)
✅ Skrypt wdrożeniowy (deploy-to-github.bat)

## Twoje kroki (5 minut):

### 1. Uruchom skrypt przygotowujący
```
Kliknij dwukrotnie: deploy-to-github.bat
```

### 2. Utwórz repozytorium GitHub
- Wejdź na github.com
- Kliknij "New repository"
- Nazwa: `tromso-aurora` lub `nordlysmap`
- Publiczne
- Kliknij "Create repository"

### 3. Połącz z GitHub
```bash
git remote add origin https://github.com/TWOJA-NAZWA/tromso-aurora.git
git push -u origin main
```

### 4. Wdróż na Netlify
- Wejdź na netlify.com
- "Add new site" → "Import an existing project"
- Wybierz GitHub → wybierz swoje repo
- Netlify automatycznie wykryje ustawienia
- Kliknij "Deploy site"

### 5. Dodaj domenę
- W panelu Netlify: Site settings → Domain management
- "Add custom domain" → wpisz: nordlysmap.com
- Gotowe! (SSL automatyczne)

## Rezultat:
🌐 Twoja strona będzie live na: https://nordlysmap.com

## Aktualizacje:
```bash
git add .
git commit -m "Update"
git push
```
Netlify automatycznie wdroży nową wersję!
