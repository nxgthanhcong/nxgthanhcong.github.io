# nxgthanhcong.github.io

Personal portfolio of Ng Thanh Cong, live at **https://nxgthanhcong.github.io**.

Built with Create React App 5, TypeScript, Tailwind CSS, Redux Toolkit / RTK Query and React Router.

## Getting started

```bash
npm ci
npm start          # http://localhost:4000
```

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Dev server on port 4000 (configured in `.env`) |
| `npm run build` | Production build into `build/` (also writes `build/404.html` for SPA routing) |
| `npm run typecheck` | TypeScript check |
| `npm run lint` | ESLint, fails on any warning |
| `npm run test:ci` | Run the test suite once |
| `npm run deploy` | Manual deploy of `build/` to the `gh-pages` branch |

## Where the content lives

The page content (about, current job, experiences, projects, blogs) is JSON in [`public/data/`](public/data/), fetched at runtime.
With `npm start` running, saving a file there reloads the page immediately. The live site updates when the change is pushed to `master` and deployed.

Images referenced by the JSON live in `public/assets/images/`.

## Deployment

Every push to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which type-checks, tests, builds,
and publishes `build/` to the `gh-pages` branch served by GitHub Pages.
`npm run deploy` does the same from a local machine.

A `Dockerfile` (nginx, port 4000) is also provided; it serves an existing `build/` folder, so run `npm run build` first.
