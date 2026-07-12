# Changelog

All notable changes to this website are documented in this file.

## 2026-07-12 — Professional redesign

### Step 1: Data layer (easy content updates)
- Added `assets/data/` — all site content now lives in plain JS data files,
  so updating the site means editing one array entry (no HTML needed):
  - `publications.js` — publications & projects (set `selected: true` to feature on the homepage)
  - `news.js` — news items for the homepage
  - `teaching.js` — teaching roles
  - `honours.js` — scholarships & awards (moved out of `update-honours.js`)
  - `education.js` — education timeline entries (moved out of `update-edu-timeline.js`)
- Added renderer modules in `assets/scripts/` (`render-publications.js`,
  `render-news.js`, `render-honours.js`, `render-education.js`) that turn the
  data files into page content.
- `Angel Y. He` is automatically highlighted in author lists by the renderer.

### Step 2: Page redesign (academic single-column format)
- **Homepage** (`index.html`) restructured in the standard academic format:
  hero (name + tagline + bio with photo/video and social icons), **News**
  section, and **Research** section featuring selected publications — research
  is now the highlight of the front page.
- **New `research.html`** (replaces `academics.html`, which now redirects there):
  full publications & theses, other projects (collapsible), teaching, and
  scholarships & awards.
- **`education.html`** — same timelines, restyled; DPhil section open by default
  with a "Coming soon..." placeholder until entries are added.
- **`miscellaneous.html`** — same fun content, presented as hover-lift cards.
- **Design system** (`assets/main.css` rewritten): original coffee colour palette
  (#F8EDE3 latte background, cream/tan/brown accents) and Nanum Pen Script
  accent font preserved; layout is now a centred 920px column with a slim top
  nav (active page highlighted), card-style publication entries with pill
  link buttons and expandable abstracts, and a static footer (previously fixed).
- Timeline card colours tuned to match the new surface tone (`timeline.css`).
- Removed superseded files: `work.html` (teaching content lives on the research
  page), `assets/bib.css`, `assets/academics.css`, `assets/collapsible.css`
  (all folded into `main.css`), and the old `update-honours.js` /
  `update-edu-timeline.js` scripts (replaced by data + renderer modules).
- Fixed: the "Simulated Process Manager" entry now uses its own thumbnail
  (previously reused the Flow Free one).
- README rewritten with the site structure and how-to-update instructions.
- Verified all pages, abstract toggles, collapsibles, and mobile layout in the
  browser via a local server.
- Note: news item dates (e.g. TACAS/ETAPS 2026 presentation month) are best
  guesses — please double-check them in `assets/data/news.js`.
