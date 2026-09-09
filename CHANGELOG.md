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

### Step 3: CV link
- Added a "CV" button to the homepage social row, pointing to the uploaded
  `assets/resources/academic/CV-AYH-AngelHe.pdf`.

### Step 4: Responsive refinements (phones / tablets / desktops)
- Audited every page at 320, 375, 667 (phone landscape), 768 (iPad Mini),
  820 (iPad Air), 1024, and 1440 px — no horizontal overflow anywhere,
  including with all collapsibles and abstracts expanded.
- Publication cards now keep the thumbnail-beside-text layout down to 640px
  (previously stacked below 768px), so iPads in portrait use the full width;
  they stack only on phones.
- Miscellaneous grid switched to `auto-fit, minmax(230px, 1fr)` — fluidly
  3 columns on desktop/iPad, 2 on phone landscape, 1 on phone portrait.
- Hero name and page titles use `clamp()` for smooth font scaling between
  screen sizes instead of a single breakpoint jump.
- Commit attribution: history rewritten to remove Co-Authored-By trailers;
  commits are solely under Angel's name from now on.

### Step 5: Scholar link, favicon, news trim
- Added a Google Scholar icon to the homepage social row (uses the
  Academicons icon font via CDN).
- Favicon is now the 😇 emoji (inline SVG data URI on every page) — crisper
  and more distinct at tab size than the coffee collage or a photo.
- Front-page news trimmed to three items: new "May 2026 — joined VGG for a
  rotation supervised by Prof. Andrea Vedaldi", plus TACAS 2026 and the
  DPhil start (older items removed from `assets/data/news.js`).

## 2026-09-09 — New paper & content updates

### Research: new paper, front-page selection, reorganisation
- Added **Robust PAC Learning of Concurrent Stochastic Games** (He & Parker,
  arXiv:2609.04189) to `assets/data/publications.js`, featured on the homepage.
- Generated a thumbnail for it (`robust-pac-csg-thumbnail.png`) by extracting
  the four sample-complexity scaling subplots from the paper's Figure 1 and
  arranging them 2×2 at the 4:3 ratio the publication cards use.
- Homepage Research now shows only the two newest papers: the PAC paper and
  *Robust Verification of Concurrent Stochastic Games* ("All In" unfeatured).
- Research page heading "Publications & Theses" → "Publications"; the MSc
  thesis and the 3-player betting games poster moved to "Other things I've
  worked on" (`category: 'project'`).
- Teaching: added "B20, Machine Learning Lab @ University of Oxford".
