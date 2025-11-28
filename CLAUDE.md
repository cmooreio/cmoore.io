# CLAUDE.md

VitePress static site. Config in `.vitepress/config.ts`.

## Commands

- `npm run dev` - Development
- `npm run deploy` - Build and push to `dist` branch

## Deployment

Push to `dist` branch triggers git-sync in K8s (60s interval). Never edit `dist` branch directly.
