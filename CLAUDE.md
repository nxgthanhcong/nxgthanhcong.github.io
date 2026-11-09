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

- Content is **not** on `master`. It is static JSON on the `what-is-database` branch, fetched at runtime from `${REACT_APP_GITHUBDB_API_URL}/nxgthanhcong/nxgthanhcong.github.io/what-is-database/<file>.json` (see `src/stores/services/github-base-query.ts`).
- Files: `get-about-infomation.json`, `get-current-job-infomation.json`, `get-experiences.json`, `get-projects.json`, `get-blogs.json`. Editing them updates the live site without a build.
- API: `src/stores/services/github-portfolio-api.ts` (exported as `portfolioApi`, registered in `src/stores/index.ts`).
- Interfaces in `src/stores/models/` must match the JSON shape.
- `about.content` and `links[].icon` are HTML strings rendered with `html-react-parser`.
- To edit data use the worktree at `../nxgthanhcong.github.io-data` (branch `what-is-database`). Do not commit data changes to `master`.
- Tests mock `fetch` with fixtures in `src/setupTests.js`; update them when the JSON shape changes.

## Deploy

- GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes `build/` to `gh-pages` on every push to `master`.
- Manual fallback: `npm run deploy` (`gh-pages -d build`). Ask before running it.
- Never edit the `gh-pages` branch or `build/` by hand.

## Definition of done

1. `npm run typecheck`, `npm run lint`, `npm run test:ci`, `npm run build` all pass (CI sets `CI=true`, so any ESLint warning fails the build).
2. For UI changes: run `npm start` in the background, check http://localhost:4000 (and `/projects`) with Playwright MCP, look at the console, then stop the dev server.

## Gotchas

- Windows dev machine: PowerShell is the main shell; keep npm scripts cross-platform (use `node -e`, not `cp`/`copy`/`set`).
- `public/assets/js/main.js` is plain JS loaded from `public/index.html` (cursor gradient on `.cursor-overlay`), outside React.
- Image paths in the JSON are relative (`./assets/images/...`) and point to `public/assets/images/`. Don't rename/delete those files.
- `/projects` deep links on GitHub Pages rely on `build/404.html` (created by `postbuild`).
