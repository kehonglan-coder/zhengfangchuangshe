# BarVista Display Website

An English B2B website starter for a custom stretched bar LCD display manufacturer. It uses Next.js, TypeScript, Tailwind CSS and the App Router, and is ready to deploy to Vercel.

## Run locally

1. Install Node.js 20.9+ and pnpm (or use npm).
2. Install dependencies: `pnpm install`
3. Start development: `pnpm dev`
4. Open `http://localhost:3000`.

Useful checks:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Main content locations

- `lib/data.ts` — example product and blog data. All product records state that they are example data.
- `app/products/[slug]/page.tsx` — reusable product-detail template.
- `app/blog/[slug]/page.tsx` — reusable article template.
- `app/contact/contact-form.tsx` — validated inquiry form that prepares a mailto message; it does not simulate submission.
- `app/layout.tsx` — global metadata, canonical base URL and shared page shell.

## Replace before publishing

1. Replace `https://www.example.com` in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts` with the production domain.
2. Replace all `[Company ...]`, `[WhatsApp number]`, `[Certifications]`, and capability placeholders with approved facts.
3. Replace all image placeholders with original, approved product, factory, testing and application photographs. Add optimized WebP/AVIF images under `public/` and retain meaningful alt text.
4. Replace the six example products and their specifications in `lib/data.ts`.
5. Add real specification-sheet files and change the current email request link if downloads are available.
6. Connect the contact form to an approved backend, mailbox API or CRM if direct submission and file upload are required.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects Next.js automatically. Keep the default build command (`next build`).
4. Set the production domain, then update the canonical base URLs listed above and redeploy.

No API keys, credentials or private data are included in this project.

## Pre-launch review

- Confirm every specification, quality claim, certification and company fact.
- Review contact email, WhatsApp number and address.
- Confirm image usage rights and replace placeholders.
- Test inquiry flow on desktop and mobile.
- Add privacy policy / cookie information if required for your target markets and tools.
- Verify the production sitemap, robots file, canonical URLs and Search Console setup.
