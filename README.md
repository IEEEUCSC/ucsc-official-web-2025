This is  [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Use Node.js 24 (`nvm use`). GitHub Pages CI uses npm and `package-lock.json`:

```bash
npm ci
npm run lint
npm run build
```

The build exports the site to `out/`, including `CNAME` and `.nojekyll` for
GitHub Pages. Preview the export with a static file server; `next start` does
not serve static exports. Routes use trailing slashes and directory `index.html`
files so Next.js 16's route payload directories resolve correctly on static hosts.
Transition links disable speculative prefetching; normal navigation still uses
the Next.js client router and the existing page-transition animation.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Dependency maintenance

The October 2026 update moves all direct dependencies to their latest stable
releases, including Next.js 16, React 19.3, Tailwind 4, and
ESLint 10. The exact installed versions are recorded in the lockfiles.

Tailwind's colors are defined in `styles/globals.css`; its PostCSS integration
uses `@tailwindcss/postcss`. ESLint uses Next.js's native flat configuration.
The previous Next.js 15 PostCSS overrides are no longer needed.

Next.js 16.4 supports ESLint 10 with compatibility adapters. Its bundled React,
import, and accessibility plugins still declare older peer ranges. Scoped npm
and pnpm overrides align those three plugins with the root ESLint version used
by Next.js's adapters. Keep both override lists aligned, and remove them when
the upstream peer ranges include ESLint 10. No lint rules or global peer checks
are disabled.

Social-sharing metadata uses `https://ucscieee.lk` as its base URL and the
existing `/images/6.jpg` photograph as its Open Graph image.

After changing dependencies, run `npm install`, regenerate the alternative
lockfile with `pnpm import`, then run lint, build, and `npm audit`. Avoid mixing
package managers when installing `node_modules`.

Next.js 16 and Tailwind 4 target modern browsers. Tailwind requires Safari
16.4+, Chrome 111+, or Firefox 128+. Keep the GitHub Pages export and browser
checks in the validation workflow when upgrading further.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
