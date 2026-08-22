# BNI Demo — Paid.ai-style scaffold

This repository contains a minimal Next.js + TypeScript + Tailwind CSS scaffold with a demo Stripe checkout route.

Live demo

- Live demo (replace with your deployment URL once you deploy): https://example.vercel.app

Deploy to Vercel (fast)

1. Push this branch to GitHub (already done).
2. Go to https://vercel.com/new and import this repository.
3. Set these Environment Variables in the Vercel project settings (Environment: Preview & Production):

   NEXT_PUBLIC_BASE_URL=https://example.vercel.app
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...

4. Deploy. After deployment, replace the Live demo URL above with the actual Vercel URL.

How to run locally

1. Install dependencies

   npm install

2. Create a .env.local file in the project root with the following values (use Stripe test keys):

   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...

3. Run the dev server

   npm run dev

4. Open http://localhost:3000

What I added

- Next.js App Router scaffold (app/layout.tsx, app/page.tsx)
- Reusable components in components/
- Stripe demo route at app/api/checkout/route.ts (server-side). Uses STRIPE_SECRET_KEY from env.

Notes

- No real secrets were committed. Add your Stripe keys to .env.local before testing checkout or configure them in Vercel.
- Replace the demo price/priceId logic if you want to use saved Stripe Prices/Products instead of inline price_data.
- If you want, I can update the README with the final live demo URL once you deploy and share the URL, or I can open a PR with the live demo URL after you confirm deployment.
