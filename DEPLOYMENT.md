# Deployment

Static Next.js export (`output: 'export'`) deployed on Netlify. Pushing to `main` on GitHub triggers a deploy automatically.

## Build settings

Configured in `netlify.toml`:

- **Build command**: `npm run build`
- **Publish directory**: `out`
- **Node version**: 18

TypeScript and ESLint run as part of the build and will fail it on errors (no suppression flags). Run `npm run build` locally before pushing if in doubt.

## Notes

- Images are unoptimized (`images.unoptimized: true`) because static export has no image server.
- The SPA redirect in `netlify.toml` (`/* -> /index.html`) keeps client-side routes working.
- Site structure, design decisions, and the improvement-plan history live in `CLAUDE.md`.
