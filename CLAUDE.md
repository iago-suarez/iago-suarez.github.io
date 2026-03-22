# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn install    # Install dependencies
yarn start      # Development server (localhost:3000)
yarn build      # Production build
yarn test       # Run tests
yarn deploy     # Build and deploy to GitHub Pages (gh-pages -d build)
```

## Architecture

This is a **Create React App** personal portfolio/academic website deployed to GitHub Pages.

**Stack:** React 17, React Router v6, Bootstrap 4 + react-bootstrap, CSS variables for theming.

**Routing** (`src/App.js`):
- `/` → Home (main portfolio page)
- `/elsed` → ELSED project showcase with embedded WebAssembly demo
- `*` → 404 page

**Pages** (`src/pages/`):
- `Home.js` — Main page with sidebar, hero section, and publication/project cards
- `Elsed.js` — ELSED project page with an embedded demo loaded from `public/elsed_js/index.html` (WebAssembly)

**Styling:** CSS variables are defined in `src/index.css` for the color scheme and typography. Sidebar-specific styles are in `src/Sidebar.css`. Bootstrap utilities are used throughout for layout.

**GitHub Pages SPA routing:** `public/404.html` redirects all 404s back to the SPA, and `public/index.html` contains a script to restore the URL. The `homepage` field in `package.json` is set to `https://iago-suarez.github.io`.

**Static assets** are organized under `src/images/`, `src/videos/`, and `src/documents/` (PDFs, slides, posters).
