# BNI — Static Landing

This branch contains a lightweight static HTML + CSS landing page inspired by paid.ai. It is intentionally minimal: no build step, no database, and no backend components.

Files
- index.html — main landing page
- styles/styles.css — styles
- .nojekyll — allows GitHub Pages to serve files starting with an underscore (if used)

How to preview locally
1. Clone the repo and checkout the branch:
   git fetch origin
   git checkout gh-pages

2. Open index.html in your browser (double-click or use a simple static server):
   - Python 3: python -m http.server 3000
   - Then open http://localhost:3000

Deploying & Notes
- I pushed these static files to the `gh-pages` branch. GitHub Pages will serve the site at:
  https://Krutikaweb.github.io/BNI_Demo/

- It can take a minute for the site to become available after the push. If you see a 404, wait ~60s and refresh.

Other hosting options
- Netlify or Vercel (drag & drop folder or connect repo) — zero config static deploy.

Customizing
- Replace the placeholder email in the pricing CTA with your real contact address or a simple form provider.
- Update brand text & colors in styles/styles.css (CSS variables are at the top).
