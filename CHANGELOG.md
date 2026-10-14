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

### Education: DPhil banner links to the AIMS CDT
- The "University of Oxford – DPhil in AIMS (EPSRC CDT)" banner is now a link
  to <https://aims.robots.ox.ac.uk/> instead of an expandable (empty) section,
  so the "Coming soon..." placeholder is gone.
- Added a `.section-link` style in `main.css`: same banner look as a
  collapsible header, but with an outward arrow (↗) instead of the chevron.
- Removed the now-unused DPhil timeline entry from `assets/data/education.js`
  (a comment there says how to turn it back into a timeline).

### Miscellaneous: reworded cards
- Coffee: "I like coffee because it gives me the illusion that I might be awake".
- Brunch: "Fav. meal of the day".

## 2026-09-25 — NeurIPS 2026 acceptance

- *Robust PAC Learning of Concurrent Stochastic Games* is now listed as
  accepted at the **40th Annual Conference on Neural Information Processing
  Systems (NeurIPS), 2026**, replacing the "arXiv preprint" venue.
- Convention (documented on the `note` field in `publications.js`): the note
  line is only for a distinction above the default — "Spotlight" or "Oral
  presentation". Plain poster acceptances are not noted.
- One edit in `assets/data/publications.js` updates both the homepage Research
  section and the Research page, since both render from that file.
- The "Paper" button still points at the arXiv version; when the proceedings
  appear, set `links.paper` to the published version and move the arXiv URL to
  `links.extended` (as the TACAS entry does).

## 2026-10-14 — Project page for the NeurIPS 2026 paper

- New page `robust-pac-csg/index.html`, served at
  <https://7angel4.github.io/robust-pac-csg/>. Sections: TL;DR, the algorithm
  loop, abstract, the two challenges, how the method works (setting, L¹
  confidence sets, exploration RMDP, Nash margin), Theorem 7, the RQ1–RQ3
  results, the poster, BibTeX and acknowledgements.
- The page is self-contained: its own `style.css`, `page.js` and `assets/`,
  on top of the site's `main.css` and `elems.js` (nav and footer).
  - Figures are inline SVG drawn for the page. Their maths is pre-rendered
    as vector paths, so it needs no maths fonts.
  - Maths in the text is rendered by KaTeX 0.16.22, loaded from jsDelivr.
  - The RQ2 chart shows each bar's value on hover or keyboard focus and has
    a "Show the data" table. RQ3 reuses the paper's Fig. 1 panels as vector SVGs.
  - `assets/og-image.png` (1200×630) is the preview image that appears when
    the link is shared.
- Phones get narrow versions of the two wide figures (a portrait algorithm
  loop and a stacked RQ2 chart) and of the two wide equations.
  - Checked at 320, 360, 390, 430, 768, 1024 and 1280 px.
  - Nothing overflows the page. The BibTeX block and the data table scroll
    inside their boxes.
- An independent pass checked every claim on the page against the
  camera-ready paper; its corrections are included.
- `assets/scripts/elems.js`: `<custom-nav>` takes two optional attributes
  for pages in subfolders.
  - `base="../"` is the prefix for the nav links.
  - `active="research.html"` is the entry to highlight.
  - Existing pages are unchanged.
- `assets/data/publications.js`: the NeurIPS entry gains Code, Website (the
  project page) and Poster buttons, on the homepage and the Research page.
- Note: `robust-pac-csg/assets/poster.pdf` and `poster-thumb.jpg` were
  rendered from poster draft v7 with LibreOffice. Replace them with the
  final PowerPoint export, keeping the same file names.

## 2026-10-14 — Project page moved to the prism-games repository

- The project page now lives on the `gh-pages` branch of
  [7angel4/prism-games](https://github.com/7angel4/prism-games/tree/gh-pages) and is served at
  <https://7angel4.github.io/prism-games/>. It no longer uses this site's menu bar or shared files.
- Removed `robust-pac-csg/` from this site, so its old address now shows a 404 page.
- The NeurIPS entry's Website and Poster buttons in `assets/data/publications.js` point to the new page.
- Reverted the `base` and `active` attributes of `<custom-nav>` in `assets/scripts/elems.js`, which only
  the project page used.
