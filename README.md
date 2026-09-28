# Amirhossein Souri's portfolio

Source for [souuri.ir](https://souuri.ir), a static Next.js portfolio covering research, projects, experience, and academic service.

## Local development

Requires Node.js 20 and npm.

```bash
npm ci
npm run dev
```

The site is available at `http://localhost:3000`. Run `npm run lint` to check the source and `npm run build` to create the static export in `out/`.

## Content and deployment

Most site copy, links, and lists are in `app/portfolio.ts`. Sections are rendered from `app/sections/`; metadata is in `app/layout.tsx`. The résumé button links to `public/resume.pdf`.

The site is exported statically and deployed to GitHub Pages by `.github/workflows/deploy.yml` when changes are pushed to `main`.
