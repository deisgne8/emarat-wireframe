# Emarat — Homepage Wireframe V1

## Purpose

A responsive, local HTML wireframe based on the latest meeting brief: **Emarat. Energy in Motion.**

The wireframe keeps the primary story to four chapters. It is a structure and content-placement proposal, not a finished visual design. Illustrative frames reserve photography/video areas. Proposed headlines are creative copy for review.

## Homepage structure

| Order | Chapter | What it establishes | Main action |
| --- | --- | --- | --- |
| 1 | A UAE energy company | Introduce infrastructure through a terminal-led video placement | Explore our businesses |
| 2 | Connected strength | Put three approved scale indicators early, then show connected capabilities | Explore the selected business / Investor information |
| 3 | Heritage | Connect an authentic archive to present-day progress using three concise milestones | Discover our story |
| 4 | Sustainability & responsibility | Introduce resources, environment and people/safety through a documented operational visual | Our sustainability approach / HSE |

Header and footer provide direct audience routes without adding a fifth narrative chapter. The 30-second objective is an editorial target, not a measured completion-time claim. The story remains understandable without watching a film or using the business selector.

## Navigation

- Main: About, Businesses, Sustainability, Investors, Media, Careers.
- Utility: Supplier registration, Login, Contact, Arabic, Search.
- Customer shortcut: Find a station.
- HSE: under Sustainability, with cross-links from business and supplier information.
- Mobile: logo, Find a station and menu; remaining items are inside the menu.
- Arabic production direction: mirror logo and layout alignment; Arabic translation is not implemented in this English wireframe.

## Interaction

The business selector uses a continuous rule with one selected segment. A single visual stage changes with each selection, opening on terminals. It is a graphic connection, not a literal flow diagram or asset map. All five core labels are visible; no automatic rotation or scroll trapping.

The five draft business groups are Terminals & storage, Commercial energy, Aviation, Lubricants, and Retail & services. Confirm final group naming against approved business IA.

Navigation for unbuilt inner pages opens a labelled destination outline. Search filters those proposed topics. The hero-film button opens a storyboard; no video is embedded. Keyboard tab selection, Escape, focus return, reduced-motion behavior and a mobile menu are implemented.

## Content and shoot inputs

1. Three scale metrics: proposed positions are terminal storage capacity, operational network and international market reach. Confirm definitions, units, reporting dates and figures. No numbers have been invented.
2. An approved founding date and two meaningful later milestones; authentic dated archive images.
3. Fresh terminal aerials, operational/distribution scenes, people at work, aviation, lubricant applications and customer/station footage.
4. A documented environmental or resource-conservation initiative for the responsibility chapter.
5. Approved investor-facing information, available reports/disclosures and a suitable corporate contact route.

Capture wide and mobile-safe compositions. Plan a short, muted hero sequence with a static poster, playback pause control and reduced-motion alternative in the production build.

## Scope boundaries

The existing CMS/backend are assumed to remain. Final field adjustments follow homepage approval and a content-mapping review. Detailed HR content, full timelines, awards and media archives remain on inner pages.

AI personalisation, a content-based assistant, assisted nearest-service discovery, analytics and GEO are separately scoped workstreams; they are not presented as operational features here.

## Run locally

Keep `index.html`, `styles.css`, `app.js` and `assets/` together. Open `index.html` for a quick preview, or use VS Code Live Server.

With Python available, run from this folder:

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Then open http://127.0.0.1:8765/. No dependency installation or build step is required.

## Files

- `index.html`: structure and proposed copy.
- `styles.css`: wireframe layout and responsive styling.
- `app.js`: prototype interactions and review notes.
- `assets/`: Emarat logo and local brand fonts copied from the existing concept project.

Prepared 24 November 2026 from the user-supplied meeting brief. All metrics and dates remain explicit approval placeholders.
