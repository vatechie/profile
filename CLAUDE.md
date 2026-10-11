# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server at localhost:3000
npm run build      # Production build
npm test           # Run tests (watch mode)
npm test -- --watchAll=false  # Run tests once
npm run deploy     # Build + deploy to GitHub Pages (gh-pages branch)
```

Install with `npm install --legacy-peer-deps` (required due to peer dependency conflicts).

## Architecture

Single-page portfolio app using scroll-spy navigation — no client-side routing.

**Data flow:**
- All content lives in `src/data/portfolioData.ts` as typed exports: `personalInfo`, `experience`, `education`, `skills`, `projects`
- `App.tsx` → `Layout` (wraps with `Navigation` + `Footer`) → `Home` page → individual section components
- `useScrollSpy` hook drives active nav highlighting and profile image visibility in the navbar

**Adding a new section:**
1. Add data types to `src/types/index.ts`
2. Add data to `src/data/portfolioData.ts`
3. Create component in `src/components/`
4. Export from `src/components/index.ts`
5. Register the section ID in `useScrollSpy.ts` `SECTIONS` array
6. Add to `Navigation.tsx` `navItems` array
7. Render in `src/pages/Home.tsx`

**Navigation behavior:** The navbar shows profile image/name only when the home section's `#profile-image` element has scrolled out of view (`isHomeImageVisible` state).

## Code Conventions

- Functional components with TypeScript, named exports (except `App.tsx` which is default)
- Tailwind CSS utility classes only — no custom CSS beyond `App.css`/`index.css`
- `const` over `let`, arrow functions, destructuring, template literals
- Commit messages: `type(scope): description` — types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Deployment

GitHub Actions (`deploy.yml`) triggers on push to `master` branch, builds and pushes to `gh-pages` branch. The live site is at `https://vatechie.github.io/profile` (set via `homepage` in `package.json`).
