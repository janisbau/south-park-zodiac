# CLAUDE.md — South Park Zodiac Oracle

This file gives Claude (and any future collaborators) full context about this project: what it is, how it works, how to run it, and what decisions have been made.

---

## Project Overview

**South Park Zodiac Oracle** is a fun, static single-page web app where users enter their birth date and an optional birth place, and are assigned a South Park character based on their zodiac sign.

The app calculates the user's zodiac sign from their birth date, then maps it to a South Park character whose personality traits match that sign's astrological personality. The result card shows a custom SVG illustration of the character, their traits, a prophecy, compatibility info, a numerology number, and a Leaflet.js mini-map of the user's birthplace.

The visual style deliberately mimics South Park's aesthetic: flat colors, thick black outlines, crude comic fonts, and a night-sky background with twinkling stars.

**Live repo:** https://github.com/janisbau/south-park-zodiac

---

## Tech Stack & Dependencies

| Dependency | Version | Source | Purpose |
|---|---|---|---|
| Leaflet.js | 1.9.4 | unpkg CDN | Interactive mini-map on result card |
| Nominatim (OSM) | — | Free API, no key | Geocoding the birthplace text input |
| CartoDB Voyager tiles | — | Free tile CDN | Map tile layer |
| Google Fonts | — | CDN | `Bangers` (headings) + `Comic Neue Bold` (body) |

**No build tools, no npm, no framework.** The project is three plain files opened directly in a browser.

---

## Project Structure

```
ClaudeTest1/
├── index.html       — Page structure; three sections toggled by JS
├── style.css        — All visual styling; South Park aesthetic
├── script.js        — All logic: character data, zodiac calc, map, DOM
├── CLAUDE.md        — This file
└── .claude/
    ├── launch.json  — Dev server config (python http.server on port 3000)
    └── plans/       — Archived planning documents from Claude sessions
```

### index.html — Three-section layout

The page has three states, toggled via the `.hidden` CSS class:

1. **`#hero`** — Title and tagline
2. **`#form-section`** — Birth date input + optional birthplace + animated zodiac wheel
3. **`#result-section`** — Full character result card (hidden until form submit)

A fixed `#star-field` div sits behind everything, populated with animated `<span class="star">` elements by JS.

### style.css — South Park visual rules

- All colors defined as CSS variables in `:root` (prefix `--sp-`)
- **Thick black outlines**: `border: 4–5px solid #111` + `box-shadow: 5–8px 5–8px 0 #111` on cards and buttons
- **Flat colors only**: no gradients (except the night-sky background radial)
- **Slight tilt**: `transform: rotate(-0.5deg)` on the result card for hand-cut feel
- **Chunky fonts**: `Bangers` at large sizes with `letter-spacing` and `text-transform: uppercase`
- **Button press**: `translate(3px,3px)` + reduced shadow on `:active`
- The zodiac wheel has two layered animations: `wheel-spin` (slow uneven rotation) and `wheel-pulse` (glow). Scale breathing (`wheel-breathe`) is applied to the `.wheel-wrapper` parent to avoid `transform` conflicts.

### script.js — Key sections

| Section | What it does |
|---|---|
| `CHARACTERS` array | 12 objects, one per zodiac sign — holds all character data including inline SVG |
| `NUMEROLOGY_MESSAGES` | 9-item array mapped from `(month + day) % 9` |
| `getZodiacSign(dateString)` | Parses `YYYY-MM-DD`, handles Capricorn year-wrap edge case |
| `generateStars(n)` | Injects randomised `<span class="star">` into `#star-field` |
| `buildZodiacWheel()` | Positions 12 zodiac symbols around the wheel using `sin/cos` |
| `geocodeBirthplace(place)` | Async fetch to Nominatim; returns `{lat, lng, label, found}` or `null` |
| `FALLBACK_LOCATIONS` | 8 interesting places used when geocoding fails or no place is entered |
| `initMap(lat, lng, label)` | Creates/recreates the Leaflet map instance in `#birth-map` |
| `geocodeAndShowMap(place)` | Orchestrates geocoding → fallback → map init |
| `showConsultingOverlay()` | 2.2s dramatic interstitial before showing result |
| `renderResult(char, m, d, place)` | Populates all result card DOM elements |
| `handleFormSubmit` / `handleTryAgain` | Form event handlers |

---

## How to Run

This is a zero-dependency static site. No installation required.

### Option 1 — Claude Code preview server (recommended during development)
The `.claude/launch.json` is already configured. Claude will start it automatically, or run:
```
python -m http.server 3000
```
from the project root, then open `http://localhost:3000`.

### Option 2 — Open directly
Just double-click `index.html` in a file explorer. Everything works without a server except the Nominatim geocoding (which requires HTTP, not `file://`). The map will fall back to a random location in that case — this is handled gracefully.

### Option 3 — GitHub Pages
Push to the `master` branch of `janisbau/south-park-zodiac`. Enable GitHub Pages under **Settings → Pages → Branch: master / root**. The site will be live at `https://janisbau.github.io/south-park-zodiac`.

**There is no build step.** No `npm install`, no compilation.

---

## Coding Conventions & Style Preferences

- **Plain JS, no framework** — vanilla ES6+, `'use strict'`, no modules
- **No jQuery** — native DOM APIs only (`getElementById`, `querySelector`, etc.)
- **Async pattern** — `async/await` for the geocoding fetch; `setTimeout` for overlays
- **CSS variables** — all theme colors live in `:root`, referenced as `var(--sp-*)` throughout
- **`!important` is acceptable** for overriding browser-cached styles during active development, but should be cleaned up once stable
- **SVGs are inline strings** in the `CHARACTERS` array — no external image files, no copyright issues
- **Cache busting** — the `style.css` link uses `?v=N` (currently `?v=3`). Increment `N` when making CSS changes that might be cached by the browser
- **Map instance** — stored in `let mapInstance = null` at module scope; always call `mapInstance.remove()` before reinitialising to avoid Leaflet errors
- **Leaflet map settings** — `dragging: false`, `scrollWheelZoom: false`, `zoomControl: false` — the map is decorative only, not interactive
- **Nominatim usage** — add `accept-language: en` header; limit to 1 result; do not hammer (this is a personal demo site with low traffic)
- **Character data structure** — each entry in `CHARACTERS` has: `sign`, `symbol`, `dateRange`, `startMMDD`, `endMMDD`, `character`, `emoji`, `cardColor`, `svg`, `tagline`, `traits[]`, `prophecy`, `compatibility{best,worst}`, `funFact`, `numerologyBonus`, `easterEgg`

---

## Important Context & Decisions

### Why no build tools?
The project was designed to be the simplest possible thing — open `index.html` in a browser and it works. No Node, no npm, no Webpack. This keeps it portable and easy to host on GitHub Pages.

### Why Nominatim (OSM) instead of Google Maps?
Nominatim is completely free with no API key required. The birthplace field is optional and the map is decorative, so occasional geocoding inaccuracies are acceptable. If geocoding fails or returns no result, a random fallback location is shown instead.

### Why inline SVGs instead of image files?
Avoids all copyright issues with South Park imagery. The SVGs are original hand-coded illustrations in the South Park flat-color style. Keeping them inline in the JS data avoids extra network requests.

### Character-to-zodiac mapping rationale
The mapping is creative/thematic, not random:
- **Aries → Cartman**: bold, aggressive, self-centred, driven
- **Taurus → Randy**: stubborn, comfort-seeking, passionate hobbies
- **Gemini → Tweek**: dual nature, anxious, erratic energy
- **Cancer → Kyle**: emotional, loyal, moral compass
- **Leo → Craig**: effortlessly dominant, cool, unbothered
- **Virgo → Stan**: analytical, practical, quietly disgusted by the world
- **Libra → Butters**: sweet, balanced, people-pleasing
- **Scorpio → Kenny**: mysterious, resilient, cycles of death/rebirth
- **Sagittarius → Chef**: adventurous, philosophical, free spirit
- **Capricorn → Mr. Garrison**: ambitious, controlling, strict
- **Aquarius → Jimmy**: unique, humanitarian, sharp wit
- **Pisces → Timmy**: free-flowing, spiritually connected, pure presence

### Easter egg
April 20 birthdays (Taurus) get an extra line in Randy Marsh's prophecy referencing his, ah, geological interests.

### Zodiac edge case
Capricorn spans Dec 22 – Jan 19, crossing a year boundary. `getZodiacSign()` handles this with a dedicated branch in its loop (`startMonth > endMonth`).

### CSS transform conflict fix
The zodiac wheel originally had `wheel-spin` and `wheel-breathe` both setting `transform`, which caused the last animation to override the first. This was fixed by moving `wheel-breathe` (scale pulse) to the `.wheel-wrapper` parent element, keeping `wheel-spin` on `#zodiac-wheel` itself.

---

## Session History

### Session 1 — Initial build
Built the entire project from scratch. Created `index.html`, `style.css`, and `script.js`. Implemented zodiac calculation, all 12 character entries with traits/prophecy/compatibility data, star field, animated zodiac wheel, consulting oracle overlay, result card with numerology and birth flavor text, and "Try Again" button. Initialized git repo and pushed to `https://github.com/janisbau/south-park-zodiac`.

### Session 2 — Polish & features
- Made the character tagline (quote) more visible: switched to black background, yellow border, white `Bangers` font
- Made the zodiac wheel spin with an eerie uneven rhythm (`wheel-spin` keyframes with non-linear stops); added size-breathing animation (`wheel-breathe` on wrapper); enlarged wheel from 260px to 320px
- Added Leaflet.js mini-map to the result card: geocodes birthplace via Nominatim API; falls back to a random interesting location if not found; CartoDB Voyager tiles with `filter: saturate(3) contrast(1.35)` for cartoon look; custom red SP-style map pin
- Made the character name (`#result-character`) large, red (`#CC0000`), with a black `text-shadow` outline — the most visually dominant element on the card
- Replaced all 12 character emojis with custom hand-coded SVG illustrations, each in a funny iconic pose (Cartman hands-on-hips smug, Tweek wild-hair panic, Kenny orange parka eyes-only, Craig middle finger, Timmy arms-raised wheelchair, etc.)
- Fixed a persistent browser caching issue by adding `?v=3` cache-buster to the CSS link in `index.html`
