# 7angel4.github.io

Glad to see you here. This is my personal website: [https://7angel4.github.io/](https://7angel4.github.io/)

## Structure

| Page | Purpose |
| --- | --- |
| `index.html` | Homepage: bio, news, selected research |
| `research.html` | Publications, other projects (incl. theses), teaching, awards |
| `education.html` | Education timelines |
| `miscellaneous.html` | Fun facts |

All shared styling lives in `assets/main.css` (design tokens are CSS variables at the top).
Shared components (nav, footer, collapsible sections) live in `assets/scripts/elems.js`.

## How to update content

All content lives in plain JS data files under `assets/data/` — edit the array, and the
pages re-render automatically. No HTML changes needed.

- **Add a publication/project** → add an object to `assets/data/publications.js`
  (set `selected: true` to feature it on the homepage; `category: 'publication'` or `'project'`
  controls which section it appears in on the research page).
- **Add a news item** → add an entry to `assets/data/news.js` (newest first).
- **Add an award** → add an entry to `assets/data/honours.js`.
- **Add a teaching role** → add an entry to `assets/data/teaching.js`.
- **Add an education timeline entry** → add a period to the relevant institution in
  `assets/data/education.js`.

Thumbnails go in `assets/resources/thumbnails/`.

## Preview locally

Because content is loaded via JS modules, open the site through a local server
(not `file://`), e.g.:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
