# Portfolio instructions for Codex

This repository powers Amirhossein Souri's personal site at https://souuri.ir. It is a public, English-language portfolio for research, graduate applications, and software work. Make the changes requested in the current prompt; use this file for context and constraints, not as a standing request to overhaul the site.

## Sources of truth

1. The owner's current request and corrections take precedence.
2. Before changing biographical or academic content, find and read the newest CV/resume the owner placed in the local project. Check its date and content; do not assume `public/resume.pdf` is the newest copy. If there are conflicting candidate CVs, ask which is current. The current CV overrides the dated facts below. The owner's explicit instructions override the CV.
3. Inspect the relevant source files and the existing UI before editing. Existing site copy is useful for structure and links, but may be stale or inaccurate. Confirm new claims against the CV, a source the owner supplies, or a reliable primary source.
4. If an important fact remains uncertain, omit it or ask. Never fill gaps with invented achievements, dates, metrics, citations, links, or roles.

## About Amirhossein

The following is a **September 2026 snapshot**, not an instruction to publish every item:

- Name: Amirhossein Souri. Based in Tehran, Iran. B.Sc. student in Computer Science and Engineering at Sharif University of Technology (2022–expected June 2027 in the latest CV available when this file was written). The CV lists GPA **18.99/20** and rank **14th among 145,000+** participants in Iran's national university entrance examination. Recheck these before putting numbers or dates on the site.
- Research interests include machine and deep learning, computer vision and multimodal learning, language and vision-language models, ML systems, generative models, trustworthy ML, reinforcement learning and multi-agent systems, and robotics. Current projects do not define the full extent of his interests.
- Research assistant at Sharif's RIML Lab (PI: Dr. Mohammad Hossein Rohban). Since July 2026, working on visual reasoning in vision-language models: question-conditioned visual grounding using CLIP features and downstream evaluation with Qwen2.5-VL-3B-Instruct; investigating evidence-sensitive reasoning. From December 2025 to March 2026, worked on noise-robust concept unlearning for text-to-image diffusion models.
- Co-author of *Weeding Out Bad Seeds: Noise-Robust Unlearning for Text-to-Image Diffusion Models*. The September 2026 CV says **under review at ICLR 2027**. It is not an accepted publication. Respect double blind review: do not reveal a full author list, submission identifiers, private drafts, or review material, or add a link that compromises anonymity without the owner's explicit direction. Confirm status afresh if displaying it.
- Software Engineer at Hamravesh, October 2024–September 2025: worked on a marketplace for one-click cloud applications across backend APIs, frontend interfaces, and Kubernetes integration. Has taught as a TA in AI, ML, probability and statistics, Java, and C, among other courses; use the CV for exact course and term details.
- Selected work includes visual grounding, deep learning assignments, modern information retrieval, machine unlearning exercises, and other projects. Describe individual contributions precisely. Do not recast coursework as a publication or a production deployment.
- Public links currently used by the site: `https://github.com/Amir14Souri`, `https://linkedin.com/in/amirhossein-souri`, `mailto:amir@souuri.ir`, and `mailto:amirhossein.souri01@sharif.edu`. Preserve working contact routes unless requested otherwise.

## Voice and presentation

- Keep a **technical, credible, concise** voice. Prefer concrete methods, responsibilities, and outcomes to generic enthusiasm or marketing claims. Write in clear first person for About copy and neutral, compact phrases for cards and lists.
- Position Amir as a researcher and engineer with broad ML interests. Do not imply that he is limited to diffusion unlearning or visual grounding. Do not turn the site into an admissions appeal or a recruiter pitch unless asked.
- Distinguish research in progress, a manuscript under review, completed projects, and deployed products. Avoid inflated ownership ("led," "invented," "state of the art") unless supported. Use consistent spelling, dates, capitalization, and terminology.
- Preserve the site's clean, restrained aesthetic unless redesign is requested. Favor readable hierarchy, breathing room, and scannable content over large text blocks, decorative badges, and dense skill inventories. Ensure desktop and mobile layouts, light and dark themes, keyboard access, and reduced-motion behavior remain usable.
- Do not put private application plans, unreleased experiments, unpublished numerical results, personal history, or sensitive details on the public site merely because they appear in local files or this context.

## Repository map

- Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/Radix UI. npm with committed `package-lock.json`.
- `app/portfolio.ts`: central content and data types (`SITE`, `NAV_ITEMS`, `ABOUT`, `PROJECTS`, `EDUCATION`, `EXPERIENCES`, `TA_EXPERIENCES`, `ACADEMIC_SERVICES`, `CONTACT_LINKS`, skills, and the currently empty `PUBLICATIONS`). Start here for copy, links, dates, and list edits.
- `app/page.tsx`: section composition and Person JSON-LD. The Publications section is currently disabled; do not enable it solely because a manuscript is under review. If adding or moving a section, update navigation and anchor IDs together.
- `app/sections/*`: section rendering. `app/components/*`: shared navigation, footer, and backgrounds. The hero has its own navigation and mobile menu, while `app/components/Navbar.tsx` also renders navigation; check both when changing navigation behavior or styling.
- `app/layout.tsx`: metadata, fonts, theme provider. `app/globals.css`: global styles and theme tokens. `components/ui/*`: shared UI primitives. Use existing patterns before adding dependencies or a new design system.
- `public/photo.jpg`, `public/logos/*`, and `public/resume.pdf`: static assets. The Resume button uses `SITE.resumeSrc` (`/resume.pdf`). A CV copied elsewhere in the repo is not automatically the downloadable public résumé. Replace the public PDF only when the user requests publishing that version, and verify its contents first.
- `next.config.ts` uses `output: 'export'` and unoptimized images. `npm run build` runs `next build && next-sitemap`; generated output is `out/`. Preserve static-export compatibility; do not add runtime server features or API dependencies without an explicit architecture change. `next-sitemap.config.js` has the canonical site URL.

## Working on a request

1. Read the local CV when the request affects factual content, then inspect the exact data and components involved. Avoid opportunistic rewrites outside the request. Check whether information appears in multiple places: hero, About, experience, footer, metadata, Person JSON-LD, downloadable PDF, and sitemap.
2. Edit the smallest coherent set of source files. Keep content in `app/portfolio.ts` when it fits the existing model. Reuse components and tokens; use client components only where interaction or browser APIs require them. Do not hand-edit generated `out/`, `.next/`, or generated sitemap files as the source of a change.
3. For meaningful code/content changes, run `npm ci` if dependencies are absent, then `npm run lint` and `npm run build`. Check the actual page at mobile and desktop widths in both themes when layout or interaction changes. Report any checks you could not run and pre-existing failures separately from your edits.
4. Verify visible links, section anchors, résumé download, and metadata affected by the change. Keep external links safe (`rel="noopener noreferrer"` for new-tab links), images accessible, and motion optional where appropriate.
5. Summarize what changed, how it was checked, and any fact that still needs the owner's decision. Do not deploy, publish, push, or replace the public résumé unless the current request authorizes it.
