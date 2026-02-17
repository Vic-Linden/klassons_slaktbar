# Klassons Sportbar - Hemsida

En modern webbplats för Klassons Sportbar - en irländsk pub och sportbar i Slakthusområdet.

## Funktioner

- **Responsiv design** - Fungerar på alla enheter (desktop, tablet, mobil)
- **Kommande Matcher** - Sektion med matchlistor och interaktiv kalender
- **Boka Bord** - Enkel bokning av bord
- **Meny & Dryck** - Presentation av mat- och dryckesmeny
- **Coworking Space** - Information om arbetsplatser
- **Smooth animations** - Mjuka övergångar och parallaxeffekter

## Struktur

```
klassons_slaktbar/
├── index.html          # Huvudsidan
├── style.css           # All styling
├── script.js           # JavaScript-funktionalitet
├── assets/
│   ├── images/         # Bilder för hemsidan
│   └── README.md       # Instruktioner för bilder
└── pages/              # Framtida undersidor
```

## Kom igång

1. Lägg till bilderna i `assets/images/` enligt instruktionerna i `assets/images/README.md`
2. Öppna `index.html` i din webbläsare
3. Eller använd en lokal server för bästa resultat:
   ```
   # Med Python
   python -m http.server 8000
   
   # Med Node.js (http-server)
   npx http-server
   ```

## Anpassningar

### Färger
Huvudfärgerna definieras i `style.css`:
- Grön accent: `#2d4a2c`
- Guld: `#d4af37`
- Mörk bakgrund: `#1a1a1a`

### Innehåll
Uppdatera texten i `index.html` för att ändra:
- Matchlistor
- Kontaktinformation
- Öppettider

### Funktionalitet
JavaScript-funktioner finns i `script.js`:
- Kalendernavigering
- Animationer
- Interaktiva element

## Teknologier

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)

## Webbläsarstöd

- Chrome/Edge (senaste)
- Firefox (senaste)
- Safari (senaste)
- Mobila webbläsare

## Framtida förbättringar

- [ ] Lägg till faktiska bilder
- [ ] Skapa bokningsformulär
- [ ] Integrera med bokningssystem
- [ ] Lägg till menyundersida
- [ ] Implementera bildgalleri
- [ ] Kontaktformulär
- [ ] Google Maps integration
- [ ] Sociala medier-länkar
