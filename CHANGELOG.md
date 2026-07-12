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
