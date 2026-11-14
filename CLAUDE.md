# CLAUDE.md

Personal portfolio SPA served at https://nxgthanhcong.github.io.

## Stack

Create React App 5 (`react-scripts` 5.0.1), TypeScript 4.9 (strict), Tailwind 3, Redux Toolkit 2 + RTK Query, React Router 6 (`createBrowserRouter`), `html-react-parser`.
**Do not eject CRA and do not migrate to another framework/bundler (Vite, Next, …).** Add dependencies only when truly needed.

## Commands

| Task | Command |
| --- | --- |
| Dev server (http://localhost:4000, port/browser set in `.env`) | `npm start` |
| Production build (+ `postbuild` copies `index.html` → `404.html`) | `npm run build` |
| Type check | `npm run typecheck` |
| Lint (0 warnings allowed) | `npm run lint` |
| Tests, single run | `npm run test:ci` |

## Data architecture

- Content is static JSON in `public/data/`, fetched at runtime from `${PUBLIC_URL}/data/<file>.json` (see `src/stores/services/data-base-query.ts`).
- Files: `get-about-infomation.json`, `get-current-job-infomation.json`, `get-experiences.json`, `get-education.json`, `get-projects.json`, `get-blogs.json`, `get-resume.json`. With `npm start` running, saving one of them reloads http://localhost:4000 automatically; the live site updates after the push to `master` deploys.
- API: `src/stores/services/portfolio-api.ts` (exported as `portfolioApi`, registered in `src/stores/index.ts`).
- Interfaces in `src/stores/models/` must match the JSON shape.
- `about.content`, `about.favoriteWin` (the "Favorite win" note under Projects), current job `description`, education `description` and `links[].icon` are HTML strings rendered with `html-react-parser`.
- The old `what-is-database` branch is no longer read by the site.
- Tests mock `fetch` with fixtures in `src/setupTests.js`; update them when the JSON shape changes.
- `/resume` (`src/pages/resume.tsx`) is the web resume: header, summary and skills from `get-resume.json`, jobs from `get-experiences.json` (`highlights` are its bullets), education from `get-education.json`. "Print / Save as PDF" uses the `@media print` rules in `src/index.css` (A4, black on white).
- `get-blogs.json` is `[]` for now: the Blogs section shows a "Coming soon" note until it has entries.
- Header social icons come from `src/constants/social.ts`; an empty URL hides that icon.

## Deploy

- GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes `build/` to `gh-pages` on every push to `master`.
- Manual fallback: `npm run deploy` (`gh-pages -d build`). Ask before running it.
- Never edit the `gh-pages` branch or `build/` by hand.

## Definition of done

1. `npm run typecheck`, `npm run lint`, `npm run test:ci`, `npm run build` all pass (CI sets `CI=true`, so any ESLint warning fails the build).
2. For UI changes: run `npm start` in the background, check http://localhost:4000 (and `/projects`) with Playwright MCP, look at the console, then stop the dev server.

## Gotchas

- Windows dev machine: PowerShell is the main shell; keep npm scripts cross-platform (use `node -e`, not `cp`/`copy`/`set`).
- `public/assets/js/main.js` is plain JS referenced from `public/index.html` (cursor gradient on `.cursor-overlay`), outside React. Currently disabled: its script tag is commented out.
- Image paths in the JSON are relative (`./assets/images/...`) and point to `public/assets/images/`. Don't rename/delete those files.
- `postbuild` runs `scripts/postbuild.js`: copies `build/index.html` to `build/404.html` (SPA fallback) and writes `build/resume/index.html` and `build/projects/index.html` with their own title/description, so those URLs return 200 with page-specific link previews. Add new routes to the list in that script; pages set their tab title with `useDocumentTitle`.
