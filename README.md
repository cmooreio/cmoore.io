# cmoore.io

Public-facing VitePress site for the homelab. Content lives here; operational runbooks and chart docs live in the repo root, not in this directory.

## Layout

- `.vitepress/config.ts` — site config (nav, sidebar, theme)
- `.vitepress/theme/` — custom theme overrides
- `architecture/`, `components/`, `hardware/` — content pages
- `components/*.vue` — Vue components (e.g. `NetworkTopology`, `FeatureCards`)
- `public/` — static assets served at site root
- `scripts/deploy.sh` — build + push to `dist` branch

## Develop

```bash
pnpm install --frozen-lockfile
pnpm dev        # local server with HMR
pnpm build      # production build to .vitepress/dist
pnpm preview    # preview the production build
```

## Deploy

`pnpm deploy` builds the site and pushes the output to the `dist` branch via git worktree. The in-cluster `cmoore-io` chart runs nginx with a git-sync sidecar that pulls `dist` every 60s, so the live site updates within a minute of the push. Traefik fronts it with a Let's Encrypt cert from cert-manager.

Never commit to `dist` by hand — the deploy script is the only writer.
