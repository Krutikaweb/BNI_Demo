# BNI — Static Landing

This branch contains a lightweight static HTML + CSS landing page inspired by paid.ai. It is intentionally minimal: no build step, no database, and no backend components.

Files
- index.html — main landing page
- styles/styles.css — styles
- .nojekyll — allows GitHub Pages to serve files starting with an underscore (if used)

How to preview locally
1. Clone the repo and checkout the branch:
   git fetch origin
   git checkout feat/bni-scaffold

2. Open index.html in your browser (double-click or use a simple static server):
   - Python 3: python -m http.server 3000
   - Then open http://localhost:3000

Deploying to GitHub Pages
Option A — Publish from main (recommended simple flow):
1. Merge this branch into your default branch (e.g., main).
2. Go to the repo Settings → Pages and select the branch (main) and the root folder (/).
3. Save — after a minute your site will be available at https://<your-username>.github.io/<repo-name>.

Option B — Use gh-pages branch:
1. Create a branch named `gh-pages` and copy the built files (index.html, styles/) to the root of that branch.
2. In Settings → Pages select `gh-pages` as the source.

Other hosting options
- Netlify or Vercel (drag & drop the folder or connect the repository). These services will serve static HTML with zero config.

Customizing
- Replace the placeholder email in the pricing CTA with your real contact address or a simple form provider (Formspree, Netlify Forms).
- Update brand text & colors in styles/styles.css (CSS variables are at the top).

If you want, I can:
- Replace the current branch contents entirely (remove old Next.js files) — I can do that if you confirm.
- Deploy the static site to GitHub Pages for you (if you give me permission to push to the default branch or tell me to create gh-pages branch).
