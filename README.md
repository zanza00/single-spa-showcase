# Single-SPA Showcase - Root Config

Root configuration for the Single-SPA showcase project - a meta-example demonstrating Single-SPA concepts by building a presentation site WITH Single-SPA.

## Live Demo

https://zanza00.github.io/single-spa-showcase/

## Microfrontends

This project is composed of multiple microfrontend repositories:

- **[@showcase/root-config](https://github.com/zanza00/single-spa-showcase)** (this repo) - Orchestrator (port 9000)
- **[@showcase/shared-libs](https://github.com/zanza00/showcase-shared-libs)** - Animations + UI components library (port 8080)
- **[@showcase/shell](https://github.com/zanza00/showcase-shell)** - Header + progress bar (port 8081)
- **[@showcase/intro](https://github.com/zanza00/showcase-intro)** - Introduction slides (port 8082)
- **[@showcase/content](https://github.com/zanza00/showcase-content)** - Main presentation slides (port 8083)
- **[@showcase/qa-extra](https://github.com/zanza00/showcase-qa-extra)** - Hidden content for import-map-override demo (port 8084)

## Quick Start

```bash
npm install
npm start  # Runs on port 9000
```

Visit http://localhost:9000

For local development with all microfrontends, start each MFE in its own terminal and use the import-map-overrides browser extension.

## Tech Stack

- Single-SPA 5.9+
- React 19.0.1 (shared via CDN)
- TypeScript
- Webpack 5
