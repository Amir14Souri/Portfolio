# Amirhossein Souri's portfolio

Source for [souuri.ir](https://souuri.ir), a static Next.js portfolio covering research, projects, experience, and academic service.

## Local development

Requires Node.js 20 and npm.

```bash
npm ci
npm run dev
```

The site is available at `http://localhost:3000`.

```bash
npm run lint
npm run typecheck
npm run build
npm run check:export
```

The build creates the static export in `out/`. To preview the files that
GitHub Pages will serve, run `npm start` (or `PORT=4173 npm start` while the
development server is running). The preview uses Node.js and serves only
local static files; there is no production Node.js server.

## Content and deployment

Most site copy, links, and lists are in `app/portfolio.ts`, including the
canonical URL and identity aliases. Sections are rendered from
`app/sections/`; metadata is in `app/layout.tsx`. The CV button links to
`public/cv.pdf`. The shared `Card` supports `top` and `left` edge accents.

Geist fonts are bundled locally from `app/fonts`, with their license and
source notes. Neither builds nor visitors need Google Fonts. Logos and
the portrait animation are also served locally. All project cards are
present in the exported HTML; additional projects start collapsed.

Next.js generates `robots.txt` and `sitemap.xml` during the build. The
decorative animation directory is excluded from crawling; the real
portrait remains the image in social previews and Person structured data.

The site is exported statically and deployed to GitHub Pages by
`.github/workflows/deploy.yml` when changes are pushed to `main`. Pull
requests run lint, type checks, the build, and export checks without
deploying. Configure GitHub Pages to use GitHub Actions, retain the custom
domain `souuri.ir`, and enable HTTPS in the repository's Pages settings.

After publishing, verify `https://souuri.ir` in Google Search Console and
Bing Webmaster Tools, submit `/sitemap.xml`, and inspect the homepage's
indexing status and selected canonical URL. Check the public portrait,
CV, section links, and robots file. Review name-search impressions in
Search Console over time; technical SEO does not guarantee ranking or
AI-search inclusion. Persian aliases remain in metadata and structured
data rather than visible or concealed keyword copy. Google does not use
the keywords meta tag for ranking.
