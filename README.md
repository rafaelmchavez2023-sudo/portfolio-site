# Rafael M. Chavez — Portfolio (React)

A minimal, technical portfolio site built with React + Vite, React Router, and one subtle
[React Bits](https://reactbits.dev) component (`BlurText`) for a one-time fade-in on the homepage
headline. No Tailwind, no CSS framework — plain CSS with a small set of design tokens in
`src/index.css`.

## Pages
- `/` — Home / About
- `/work` — Projects (research, internships, the chess robot)
- `/resume` — Resume highlights + downloadable PDF + embedded preview
- `/contact` — Contact links

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying

This is a client-side-routed single-page app, so the host needs to send every route back to
`index.html` (otherwise refreshing `/work` directly will 404). Both common free hosts are
already configured:

**Vercel (recommended)**
1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: Vite (auto-detected). No config needed — `vercel.json` in this project
   already handles the routing rewrite.
4. Deploy. You'll get a free `yourproject.vercel.app` URL, with an option to add a custom domain
   later.

**Netlify (alternative)**
1. Push to GitHub, then "Add new site" → "Import an existing project" on
   [netlify.com](https://netlify.com).
2. Build command: `npm run build`. Publish directory: `dist`.
3. The `public/_redirects` file in this project already handles SPA routing.

**GitHub Pages** works too but needs an extra step (a `base` path in `vite.config.js` and a
`HashRouter` instead of `BrowserRouter`, or a 404.html redirect trick) — ask if you want this
set up instead.

## Updating content

- Resume PDF lives at `public/assets/Rafael_Chavez_Resume.pdf` — replace the file (keep the same
  name) to update the download/preview without touching any code.
- Page content is plain JSX in `src/pages/*.jsx` — edit text directly.
- Design tokens (colors, fonts) are CSS variables at the top of `src/index.css`.
