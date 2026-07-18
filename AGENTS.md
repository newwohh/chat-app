<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Repository Guidelines

## Project Structure

This is a small Next.js App Router application. Route and layout files live in
`app/`: `page.tsx` is the home route, `layout.tsx` provides shared metadata and
fonts, and `globals.css` contains global Tailwind styles. Root configuration
lives in `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and
`postcss.config.mjs`. There is no test directory yet.

## Tech Stack & Libraries

- **Framework:** Next.js 16 with React 19 and the App Router.
- **Language:** TypeScript in strict mode; use the `@/*` alias for root imports
  when it improves clarity.
- **Styling:** Tailwind CSS 4 through `@tailwindcss/postcss`; keep simple UI
  styling in CSS/Tailwind rather than adding a styling dependency.
- **UI design system:** `@astryxdesign/core`, `@astryxdesign/theme-neutral`,
  and `@astryxdesign/cli` are installed. Reuse them when they fit rather than
  recreating equivalent primitives.
- **Tooling:** ESLint 9 with Next.js Core Web Vitals and TypeScript rules.
  `next/font` supplies the Geist font family.

## Development Commands

- `npm run dev` — start the local development server.
- `npm run lint` — run ESLint across the repository.
- `npm run build` — create a production build and run Next.js type checks.
- `npm run start` — serve a completed production build.

Run `npm run lint` and `npm run build` before opening a pull request.

## Coding & Testing

Use TypeScript and two-space indentation. Name React components in PascalCase;
use lowercase route-directory names and descriptive `*.tsx` filenames. Prefer
server components; add `"use client"` only for browser APIs, state, or effects.
Keep related tests beside the code as `*.test.ts` or `*.test.tsx` when tests are
introduced. No test runner or coverage requirement is currently configured.

## Commits & Pull Requests

Use short, imperative commit subjects with a scope when useful, e.g.
`assets: clean up`. Keep each commit focused. Pull requests should explain the
user-visible change, link relevant issues, and include screenshots for visual
UI changes. Note the lint/build results in the PR description.
