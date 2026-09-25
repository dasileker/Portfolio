# Amine Zerradi — Quality Signal Portfolio

A production-focused portfolio for Amine Zerradi, Senior QA Automation Engineer. The experience
positions quality as an engineering system spanning strategy, automation, APIs, data, CI/CD,
performance, observability, and feedback.

## Stack

- Next.js App Router and strict TypeScript
- Tailwind CSS plus a custom token-based design system
- Motion and Lenis with reduced-motion and touch fallbacks
- Vitest, React Testing Library, Playwright, and Axe
- Static export compatible with both Vercel and Firebase Hosting

## Local development

Node.js 20.9 or newer is required. Node.js 20 LTS is recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
npm run lighthouse
```

The production build is exported to `out/`.

## Content maintenance

Public career data is stored in `src/content/`. Keep work statuses explicit (`completed`,
`current`, `planned`, or `historical`) and do not add unverified metrics, private infrastructure,
client names, credentials, or NDA-protected details.

The resume action is intentionally omitted until a current public PDF is supplied. Company marks
use accessible wordmarks unless an approved official vector can be verified and stored under
`public/brands/`.

## Deployment

### Vercel

Import the repository into Vercel. The platform detects Next.js automatically and serves the
static export. No runtime environment variables are required.

### Firebase Hosting

The Firebase project alias remains `zerradi`. Build first, then deploy:

```bash
npm run build
firebase deploy --only hosting
```

`firebase.json` serves the generated `out/` directory. Pull requests can use the included Firebase
preview workflow when `FIREBASE_SERVICE_ACCOUNT_ZERRADI` is configured.

