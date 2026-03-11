# Ids Achterhof's Personal Website

This is the source code for my personal website [idsme.dev](https://idsme.dev), built with [Astro](https://astro.build) and deployed on [Vercel](https://vercel.com).

## About

I'm Ids Achterhof, an Enterprise Architect building scalable digital solutions. This website hosts my personal blog and information about my work.

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # React components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format (organized by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── Dockerfile           # Multi-stage Docker build (Node 20 + nginx)
├── nginx.conf           # Nginx config (redirects, CSP, content negotiation)
├── .dockerignore        # Files excluded from Docker build context
├── vercel.json          # Vercel deployment and CSP configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── LICENSE              # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Installs dependencies                       |
| `npm run dev`          | Starts local dev server at `localhost:4321` |
| `npm run build`        | Build the production site to `./dist/`      |
| `npm run preview`      | Preview the build locally, before deploying |

## Deployment

### Vercel

This site is set up for easy deployment on Vercel. Just connect your GitHub repository to Vercel, and it will automatically build and deploy the site when changes are pushed.

### Docker (Dokploy / self-hosted)

The project includes a multi-stage `Dockerfile` for self-hosted deployments:

1. **deps** — Installs dependencies on `node:20-alpine` with native binary support for `sharp` and `@resvg/resvg-js`
2. **build** — Runs `astro build && pagefind --site dist` to produce the static site
3. **runtime** — Serves the `dist/` output with `nginx:stable-alpine` (~25MB final image)

The accompanying `nginx.conf` ports all `vercel.json` rules (redirects, security headers, content negotiation for `Accept: text/markdown`) to nginx.

```bash
# Build and run locally
docker build -t idsme .
docker run -p 8080:80 idsme
```

For Dokploy, set the build type to **Dockerfile** and enable auto-deploy with a GitHub webhook.

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: Licensed under the [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to the ACME labs team.
