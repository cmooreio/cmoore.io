# cmoore.io

Static documentation site for the homelab cluster.

## Tech Stack

- **VitePress** - Vue-powered static site generator
- **Mermaid** - Diagram rendering
- **TypeScript** - Configuration

## Development

```bash
npm install
npm run dev      # Local dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Deployment

The site uses a git-sync deployment pattern:

1. Run `npm run deploy` to build and push to the `dist` branch
2. Kubernetes deployment pulls from `dist` branch every 60 seconds via git-sync sidecar
3. Nginx serves the static files
4. Traefik provides ingress with Let's Encrypt TLS

Site updates automatically within 60 seconds of pushing to `dist`.
