# CLAUDE.md

VitePress static site published at https://cmoore.io. Deployed by the `cmoore-io` Helm chart (`kubernetes/charts/cmoore-io/`) via a nginx + git-sync pair.

## Content vs Config

- Pages: `index.md`, `architecture/`, `components/`, `hardware/`
- Nav and sidebar: `.vitepress/config.ts` — update here when adding a new page
- Custom Vue components live in `components/*.vue` and are registered in `.vitepress/theme/index.ts`
- Static assets (images, favicon, logo) go in `public/`

## Commands

- `pnpm dev` — local dev with HMR
- `pnpm build` — output to `.vitepress/dist/`
- `pnpm deploy` — build + push to `dist` branch (runs `scripts/deploy.sh`)

Use `pnpm install --frozen-lockfile`; exact-pin any new dep in `package.json` (repo supply-chain rule).

## Deployment flow

`scripts/deploy.sh` stamps `VITE_GIT_COMMIT`, builds, and force-syncs `.vitepress/dist/` into a `/tmp/cmoore-io-dist` worktree tracking the `dist` branch, then pushes. The cluster's git-sync sidecar polls `dist` every 60s.

- **Never hand-edit the `dist` branch** — it's the deploy script's output.
- Source code and content live on `main`; `dist` only holds built artifacts.
- Chart / ingress changes belong in `kubernetes/charts/cmoore-io/`, not here.
