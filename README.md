# BNI Demo — Paid.ai-style scaffold

This repository contains a minimal Next.js + TypeScript + Tailwind CSS scaffold with a demo Stripe checkout route.

How to run locally

1. Install dependencies

   npm install

2. Create a .env.local file in the project root with the following values (use Stripe test keys):

   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...

3. Run the dev server

   npm run dev

What I added

- Next.js App Router scaffold (app/layout.tsx, app/page.tsx)
- Reusable components in components/
- Stripe demo route at app/api/checkout/route.ts (server-side). Uses STRIPE_SECRET_KEY from env.
- README with run steps

Notes

- No real secrets were committed. Add your Stripe keys to .env.local before testing checkout.
