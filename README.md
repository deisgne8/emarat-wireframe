# Emarat — Website Wireframe V2

A responsive corporate homepage wireframe with realistic sample copy and local prototype interactions. Updated 24 November 2026.

## Page structure

1. Utility navigation, primary navigation and station-finder action.
2. Brand hero with terminal illustration, business CTA and film preview.
3. Three quick routes: stations, business energy and partnerships.
4. Company introduction and illustrative scale statistics.
5. Five business tabs, with a shared visual/content stage and investor route.
6. Heritage feature with a three-part company story.
7. Sustainability, environmental care and people/safety cards.
8. Three sample news stories and a media-centre preview.
9. Contact CTA and full navigation footer.

## Content status

Copy is proposed. Statistics (1M m³, 150+ stations, 30+ markets), news stories, dates and station listings are dummy content, not verified company facts. They are labelled as illustrative in the interface. Gray illustrations represent media placements, not actual company photography. No founding dates or environmental performance figures are asserted.

## Interactions

- Business tabs support pointer selection, arrow keys, Home and End.
- Responsive mobile menu closes on navigation, outside click and Escape.
- Inner destinations open content preview dialogs; Escape closes them and focus returns to the trigger.
- Search filters businesses, services and information, including an empty state.
- Sample station finder filters fictional listings by area and service.
- Contact preview validates required fields and email, then displays a local acknowledgement. It does not send or store data.
- Portals, recruitment, maps, brand film and Arabic translation are described but are not connected.
- Reduced-motion preferences disable smooth scrolling and transitions.

## Run

No dependencies or build step are required. From this directory:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open http://127.0.0.1:8765/.

## Files and history

- `index.html` — homepage layout and sample content.
- `styles.css` — grayscale wireframe system, local fonts and responsive layouts.
- `app.js` — content previews and prototype interactions.
- `assets/` — supplied logo/fonts and a terminal illustration derived from the original wireframe.
- `preview.jpg` — original V1 reference image, retained for history; it does not show this V2 homepage.

## Design approach

Kept the original local brand fonts and terminal concept. Replaced presentation chapters and shoot/approval notes with a visitor-facing corporate layout. Used a shared type scale, consistent section spacing, restrained grayscale media frames and recurring button/link treatments. Applied the connected Details design guidance; no external inspiration or Vault component was imported.

## Published preview

https://deisgne8.github.io/emarat-wireframe/

GitHub Pages serves the repository root from the `main` branch.
