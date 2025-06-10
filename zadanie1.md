## 1. Opis funkcjonalny aplikacji

Aplikacja „Weather App” umożliwia użytkownikowi sprawdzenie pogody w wybranym mieście. Po wprowadzeniu nazwy miasta, dane pogodowe są pobierane z zewnętrznego API pogodowego (np. OpenWeatherMap) i prezentowane w przystępnej formie przez interfejs webowy.

### Główne funkcje:
- Wprowadzanie nazwy miasta
- Wyświetlanie: temperatury, ciśnienia, wilgotności, prędkości wiatru
- Obsługa błędów (np. brak wyników, błąd połączenia)
- Interfejs HTML + CSS (statyczne pliki w katalogu `public/`)

## 2. Szczegóły techniczne

- **Język programowania**: JavaScript (Node.js)
- **Framework / biblioteki**: Express
- **Port działania aplikacji**: 8080
- **Struktura projektu**:
  - `server.js` – główny plik aplikacji
  - `public/` – katalog z plikami front-end: `index.html`, `styles.css`, `script.js`
  - `package.json` – zależności projektu
  - `Dockerfile` – konfiguracja kontenera
  - `.gitignore` – plik ignorujący katalog `node_modules/` itp.

## 3. Instrukcja uruchamiania w kontenerze Docker

Aby uruchomić aplikację w Dockerze:

```bash
docker pull mekkr/weather-app
docker run -p 8080:8080 mekkr/weather-app
```

Po uruchomieniu, aplikacja będzie dostępna pod adresem:  
[http://localhost:8080](http://localhost:8080)


