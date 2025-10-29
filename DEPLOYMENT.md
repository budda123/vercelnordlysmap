# 🚀 Wdrożenie Tromso Aurora na hosting z Node.js

## Wymagania hostingu
- Node.js 18+ 
- npm/yarn
- PM2 (lub podobny process manager)
- Nginx (opcjonalnie, ale polecane)
- SSL certificate (Let's Encrypt)

## Krok 1: Upload plików

### A) Przez FTP/SFTP
Skopiuj wszystkie pliki z folderu `splitwise-3` na serwer do katalogu głównego aplikacji (np. `/var/www/tromso-aurora/`)

### B) Przez Git (polecane)
```bash
# Na serwerze
cd /var/www/
git clone https://github.com/TWOJA-NAZWA/tromso-aurora.git
cd tromso-aurora
```

## Krok 2: Instalacja i uruchomienie

### Automatyczne (użyj skryptu)
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manualne
```bash
# Instalacja zależności
npm ci --production

# Build aplikacji
npm run build

# Instalacja PM2 (jeśli nie ma)
npm install -g pm2

# Uruchomienie
pm2 start ecosystem.config.js

# Zapisanie konfiguracji
pm2 save
pm2 startup
```

## Krok 3: Konfiguracja domeny

### A) Bez Nginx (port 3000)
Aplikacja działa na porcie 3000. W panelu hostingu ustaw:
- Domena: nordlysmap.com
- Port: 3000
- SSL: włącz

### B) Z Nginx (polecane)
1. Skopiuj `nginx.conf` do `/etc/nginx/sites-available/tromso-aurora`
2. Edytuj domenę w pliku
3. Aktywuj: `ln -s /etc/nginx/sites-available/tromso-aurora /etc/nginx/sites-enabled/`
4. Restart: `systemctl restart nginx`

## Krok 4: SSL Certificate
```bash
# Let's Encrypt
certbot --nginx -d nordlysmap.com
```

## Krok 5: Testowanie
- Otwórz https://nordlysmap.com
- Sprawdź czy działa geolokalizacja
- Przetestuj API: https://nordlysmap.com/api/aurora
- Sprawdź affiliate linki

## Zarządzanie aplikacją
```bash
# Status
pm2 status

# Logi
pm2 logs tromso-aurora

# Restart
pm2 restart tromso-aurora

# Stop
pm2 stop tromso-aurora

# Aktualizacja
git pull
npm run build
pm2 restart tromso-aurora
```

## Rozwiązywanie problemów

### Aplikacja nie startuje
```bash
# Sprawdź logi
pm2 logs tromso-aurora

# Sprawdź port
netstat -tulpn | grep 3000

# Restart
pm2 restart tromso-aurora
```

### API nie działa
- Sprawdź czy porty 80/443 są otwarte
- Sprawdź konfigurację Nginx
- Sprawdź czy zewnętrzne API (NOAA, Open-Meteo) są dostępne

### SSL problemy
```bash
# Odnów certyfikat
certbot renew

# Sprawdź konfigurację
nginx -t
```
