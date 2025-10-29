# 🎛️ Wdrożenie Tromso Aurora przez cPanel

## Wymagania
- Hosting z Node.js support (sprawdź w cPanel czy masz "Node.js Selector")
- SSH access (opcjonalnie, ale ułatwia pracę)

## Metoda 1: Przez cPanel File Manager (łatwiejsza)

### Krok 1: Przygotowanie plików
1. Spakuj cały folder `splitwise-3` do ZIP
2. Usuń folder `node_modules` przed pakowaniem (oszczędza miejsce)

### Krok 2: Upload przez cPanel
1. **Zaloguj się do cPanel**
2. **File Manager** → Otwórz
3. **Przejdź do public_html** (lub subfolder dla subdomeny)
4. **Upload** → Wybierz plik ZIP
5. **Extract** → Rozpakuj pliki
6. **Przenieś zawartość** z folderu `splitwise-3` do głównego katalogu

### Krok 3: Konfiguracja Node.js w cPanel
1. **Node.js Selector** → Otwórz
2. **Create Application**:
   - Node.js Version: 18.x (najnowsza dostępna)
   - Application Mode: Production
   - Application Root: public_html (lub twój folder)
   - Application URL: twoja-domena.com
   - Application Startup File: server.js
3. **Create** → Utwórz aplikację

### Krok 4: Instalacja zależności
1. W **Node.js Selector** kliknij **Open Terminal**
2. Wykonaj komendy:
```bash
npm install
npm run build
```

### Krok 5: Uruchomienie
1. W **Node.js Selector** kliknij **Restart**
2. Sprawdź status - powinien być "Running"

## Metoda 2: Przez SSH (szybsza)

### Krok 1: Połączenie SSH
```bash
ssh username@twoja-domena.com
cd public_html
```

### Krok 2: Upload i konfiguracja
```bash
# Upload plików (przez git lub scp)
git clone https://github.com/TWOJA-NAZWA/tromso-aurora.git .

# Lub skopiuj pliki przez scp
# scp -r splitwise-3/* username@twoja-domena.com:public_html/

# Instalacja i build
npm install
npm run build
```

### Krok 3: Konfiguracja w cPanel
- **Node.js Selector** → ustaw jak w Metodzie 1

## Rozwiązywanie problemów cPanel

### Problem: "Node.js Selector" nie ma
**Rozwiązanie:** Twój hosting nie obsługuje Node.js
- Skontaktuj się z supportem hostingu
- Lub użyj wersji statycznej (patrz niżej)

### Problem: Aplikacja nie startuje
1. **Terminal w cPanel** → sprawdź logi:
```bash
tail -f logs/stderr.log
tail -f logs/stdout.log
```

2. **Sprawdź port** - cPanel często przypisuje inny port niż 3000

### Problem: Błędy instalacji npm
```bash
# Wyczyść cache
npm cache clean --force

# Reinstaluj
rm -rf node_modules package-lock.json
npm install
```

## Wersja statyczna (jeśli brak Node.js)

Jeśli Twój hosting nie obsługuje Node.js:

### Krok 1: Zbuduj lokalnie
```bash
# W folderze projektu na komputerze
npm run build
npm run export
```

### Krok 2: Upload statycznych plików
1. **File Manager** w cPanel
2. Upload zawartości folderu `out/` do `public_html/`
3. Gotowe!

**⚠️ Uwaga:** Wersja statyczna nie będzie miała:
- API pogodowego
- Geolokalizacji  
- Dynamicznych prognoz

## Konfiguracja domeny i SSL

### Subdomena
1. **Subdomains** w cPanel
2. **Create Subdomain**: aurora.twoja-domena.com
3. Document Root: public_html/aurora
4. Upload plików do tego folderu

### SSL Certificate
1. **SSL/TLS** w cPanel
2. **Let's Encrypt** → włącz dla domeny
3. **Force HTTPS Redirect** → włącz

## Testowanie

### Sprawdź czy działa:
- https://twoja-domena.com
- https://twoja-domena.com/api/aurora
- https://twoja-domena.com/spots
- https://twoja-domena.com/forecast

### Jeśli nie działa:
1. **Error Logs** w cPanel → sprawdź błędy
2. **Node.js Selector** → sprawdź status
3. **File Manager** → sprawdź czy wszystkie pliki są na miejscu

## Aktualizacja aplikacji

### Przez cPanel:
1. **File Manager** → usuń stare pliki
2. Upload nowej wersji ZIP
3. **Node.js Selector** → Restart

### Przez SSH:
```bash
git pull
npm run build
# W cPanel: Node.js Selector → Restart
```
