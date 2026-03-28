# cmoore.io

Static documentation site for the homelab cluster.

This directory owns the public-facing website. Operational documentation, runbooks,
architecture notes, and generated chart reference docs belong in the root repo's
`docs/` tree, not here.

## Tech Stack

- **VitePress** - Vue-powered static site generator
- **Mermaid** - Diagram rendering
- **TypeScript** - Configuration

## Development

```bash
pnpm install
pnpm dev         # Local dev server
pnpm build       # Build for production
pnpm preview     # Preview production build
```

## Deployment

The site uses a git-sync deployment pattern:

1. Run `pnpm deploy` to build and push to the `dist` branch
2. Kubernetes deployment pulls from `dist` branch every 60 seconds via git-sync sidecar
3. Nginx serves the static files
4. Traefik provides ingress with Let's Encrypt TLS

Site updates automatically within 60 seconds of pushing to `dist`.
