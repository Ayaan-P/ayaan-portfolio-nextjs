# AGENTS.md — PM Agent for Ayaan's Portfolio

> **Last updated:** 2025-07-27
> **Site:** https://ayaanpupala.com
> **Repo:** https://github.com/Ayaan-P/ayaan-portfolio-nextjs
> **Deploy:** Netlify (static export)

---

## 🧑 About Ayaan (Context for the PM Agent)

- **Full name:** Ayaan Pupala
- **Current role:** Software Engineer at American Family Insurance (AmFam), Boston — started June 2025
- **Education:** MS in Artificial Intelligence from Northwestern University (Sep 2024 – Dec 2025, 4.0 GPA), BS in Computer Engineering from UIUC (Aug 2017 – Dec 2020)
- **High school:** Cathedral and John Connon School, Mumbai (ICSE/ISC Science)
- **Background:** Indian-American, grew up in Mumbai, lived in Champaign IL → DC → Mumbai → Dubai → Evanston IL → Cambridge/Boston MA
- **Email:** pupalaayaan@gmail.com
- **GitHub:** https://github.com/Ayaan-P
- **LinkedIn:** https://linkedin.com/in/ayaanpupala
- **Twitter:** https://twitter.com/ayaanpupala

### Side Projects
- **Dytto** (main project) — AI journaling/memory app. iOS app on TestFlight. https://dytto.app
- **dytto-gen / CreatorAI** — AI content marketplace where creators train models on their style. https://dytto-gen.vercel.app/
- **FundFish** — AI-powered nonprofit funding discovery. Capstone with Per Scholas + Northwestern. https://fundfish.pro
- **Back-log** — Break time earnings tracker. https://back-log.com
- **Academic projects:** Drug-Target Interaction Prediction, CT Scan Enhancement (GANs), Minecraft Texture Generator (diffusion), Chicago Energy Predictor, 2D Pokémon Game (Unity), Social Science Agent Replication (LLMs)

### Career History
1. **American Family Insurance** — Software Engineer (June 2025 – Present)
2. **Epigeneres Biotech** — ML Engineer (Oct 2023 – Aug 2024) — cancer detection with deep learning
3. **Karsun Solutions LLC** — Software Engineer (Mar 2021 – Sep 2023) — federal govt apps (FAA, GSA)
4. **Network International LLC** — SWE Intern (May 2018 – Jul 2018) — payment processing, Dubai

---

## 🏗 Architecture Overview

### Tech Stack
- **Framework:** Next.js 15.4.4 (App Router)
- **React:** 19.1.0
- **TypeScript:** ^5
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/postcss`), with heavy use of **vanilla CSS** in `globals.css`
- **UI Libraries:** `@headlessui/react` (transitions/dialogs), `@heroicons/react` (icons), `class-variance-authority` + `clsx` + `tailwind-merge`
- **Markdown:** `react-markdown` for blog posts
- **Font:** Inter (via `next/font/google`)
- **Output:** Static export (`output: 'export'` in `next.config.js`)
- **Images:** Unoptimized (required for static export)

### Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, structured data (JSON-LD)
│   ├── page.tsx            # Homepage — hero, sections grid, expanded view modal
│   ├── globals.css         # ALL styling (~900 lines of vanilla CSS)
│   ├── favicon.ico
│   └── blog/
│       ├── page.tsx        # Blog listing page
│       └── [id]/page.tsx   # Individual blog post (SSG with generateStaticParams)
├── components/
│   ├── navigation.tsx      # Hamburger menu → slide-out drawer (Profile, Blog links)
│   ├── expanded-view.tsx   # Modal overlay for section detail views
│   ├── social-links.tsx    # Chips: GitHub, LinkedIn, Email, Resume, dytto.app
│   ├── profile-section.tsx # Card component (UNUSED — legacy from old layout)
│   ├── seo-head.tsx        # SEO head component (UNUSED — uses next/head, not App Router metadata)
│   └── ui/
│       └── button.tsx      # CVA button component (only used by profile-section.tsx)
├── lib/
│   ├── data.ts             # ALL portfolio content: about, tools, education, work, projects + personalInfo
│   ├── blog-data.ts        # Blog posts array (content stored as inline strings)
│   ├── profile-sections.tsx # Section config with SVG icons (tools, education, work, projects)
│   └── utils.ts            # cn() helper + formatDate()
```

### Config Files
- `next.config.js` — Static export config (the **active** one; `next.config.ts` exists but is empty/unused)
- `netlify.toml` — Build config, caching headers for static assets
- `postcss.config.mjs` — Tailwind v4 PostCSS plugin
- `tsconfig.json` — Standard Next.js TS config
- `eslint.config.mjs` — Next.js ESLint flat config

### Public Assets
- `/public/images/` — Profile photo, company logos, project screenshots, school logos
- `/public/robots.txt` — Allows all crawlers, points to sitemap
- `/public/sitemap.xml` — Manual sitemap (homepage + blog listing only)
- `/public/favicon.png` — Favicon
- Stale files: `vercel.svg`, `next.svg`, `window.svg`, `globe.svg`, `file.svg` (default Next.js assets, unused)

### Design System
- **Color scheme:** Dark background (`#0A0A0A`), gold accent (`#C5A572` / `#D4BC8B` / `#97783B`)
- **Layout:** iOS-inspired app drawer grid — sections shown as icon tiles, clicking opens modal
- **Tools section:** Direct links (clicking opens external URL, no modal)
- **Education/Work/Projects:** Click opens `ExpandedView` modal with description, skills, achievements, links
- **Mobile responsive:** Full breakpoints at 768px and 480px
- **Animations:** fadeIn with staggered delays, hover effects, slide-in for modals

---

## 📋 Content Audit

### personalInfo (data.ts)
| Field | Current Value | Status |
|-------|--------------|--------|
| name | Ayaan Pupala | ✅ Correct |
| title | AI Engineer & Product Builder | ✅ Good |
| email | ayaan@example.com | ❌ **WRONG** — should be `pupalaayaan@gmail.com` (correct in social-links.tsx) |
| location | Chicago, IL | ❌ **OUTDATED** — Ayaan is now in Boston/Cambridge MA |
| website | https://ayaanpupala.com | ✅ Correct |
| social.linkedin | https://linkedin.com/in/ayaanpupala | ✅ Correct |
| social.github | https://github.com/Ayaan-P | ✅ Correct |
| social.twitter | https://twitter.com/ayaanpupala | ⚠️ May be X.com now |

### About Section
- Short about text just says "Currently building dytto" — very sparse for the main hero
- Expanded about mentions "Currently pursuing advanced studies at Northwestern" — **outdated** if he's graduated or is about to graduate (program ends Dec 2025)
- Still says "founded dytto" in present tense — ✅ fine

### Tools Section
1. **Tools & Resources / Backlog** — links to back-log.com ✅
2. **Dytto** — links to dytto.app ✅
3. **dytto-gen** — links to dytto-gen.vercel.app ✅ (but project may be rebranded as CreatorAI)
4. **FundFish** — links to fundfish.pro ✅

### Education Section
1. **Northwestern** — dates "Sep 2024 – Dec 2025" ✅, achievements list has trailing comma/empty string issue, just "4.0 GPA" ✅
2. **UIUC** — dates correct ✅, skills empty, achievements empty
3. **Cathedral** — "May 2017" ✅, skills/achievements empty

### Work Section
1. **AmFam** — says "Upcoming summer internship" — ❌ **OUTDATED**, this is now his current job (June 2025 – Present). Description still says "This internship will focus on..." — needs update
2. **Epigeneres** — OK but skills/achievements arrays empty
3. **Karsun** — OK but skills/achievements arrays empty
4. **Network International** — OK but skills/achievements arrays empty

### Projects Section
- 7 projects listed (ids 1-6, 8 — no id 7)
- Most have empty skills/achievements arrays — only descriptions and links populated
- Several links point to `"#"` (placeholder): Research Paper links, Live Demo, Gameplay Video, Download Game
- dytto project has working TestFlight link ✅

### Blog
- **1 post:** "Random Thoughts: PPP, Memory, and Dragons" (Aug 4, 2025)
- Author listed as "Claude - Ayaan Pupala" — ⚠️ Attribution mentions Claude
- Content is opinion/thought piece — good personal voice
- Blog posts stored as inline strings in `blog-data.ts` (not markdown files)

---

## 🔧 Technical Assessment

### Build Status: ✅ CLEAN
- `npm run build` passes with zero errors or warnings
- 7 static pages generated successfully
- Total first load JS: ~117 kB (homepage), ~104 kB (blog pages)

### Issues Found

#### Critical
1. **Duplicate next.config files** — Both `next.config.js` and `next.config.ts` exist. The `.js` file has the actual config (static export). The `.ts` file is empty. This works because Next.js prefers `.js`, but it's confusing. **Remove `next.config.ts`**.

2. **Dead code** — `profile-section.tsx` and `seo-head.tsx` are imported nowhere and completely unused. `button.tsx` is only used by the unused `profile-section.tsx`. These should be removed.

3. **personalInfo.email is fake** — Set to `ayaan@example.com`. While it's only used in structured data / meta tags (not displayed), search engines will index it. The real email (`pupalaayaan@gmail.com`) is in `social-links.tsx`.

#### Moderate
4. **personalInfo.location outdated** — Still says "Chicago, IL", should be "Boston, MA" or "Cambridge, MA".

5. **AmFam work entry says "Upcoming summer internship"** — He started June 2025. Needs updating to reflect current role.

6. **Northwestern about text uses future/present tense** — "Currently pursuing advanced studies" — program ends Dec 2025.

7. **Many empty skills/achievements arrays** — Work and project sections feel sparse. The expanded views show empty "Skills & Technologies" and "Key Achievements" sections because the arrays are empty.

8. **Placeholder links (`"#"`)** — Multiple project links go nowhere: Research Paper (DTI), Live Demo (Minecraft), Interactive Demo (Chicago Energy), Gameplay Video (Pokémon), Download Game (Pokémon), Research Paper (SSARP).

9. **Sitemap is manual and incomplete** — Only lists `/` and `/blog/`. Missing individual blog posts. Should be auto-generated or at least include blog post URLs.

10. **`out/` directory committed** — The build output is tracked in git. Should be in `.gitignore`.

#### Minor
11. **Default Next.js SVGs in public** — `vercel.svg`, `next.svg`, `window.svg`, `globe.svg`, `file.svg` are unused.
12. **ChatGPT-named images in public** — Files like `ChatGPT Image Jan 28, 2026, 03_43_17 PM.png` have messy filenames with spaces and future dates.
13. **Netlify.toml sets Node 18** — Could be updated to Node 20 for consistency.
14. **`@next/font` in dependencies** — This is the old package. Next.js 15 uses `next/font` built-in. The code already imports from `next/font/google`. The dep can be removed.
15. **README is boilerplate** — Still the default create-next-app README.

### GitHub Actions
- **Gemini Documentor workflow** — Runs on push to main, uses Gemini CLI to auto-update docs and create PRs. Requires `GEMINI_API_KEY` secret. Novel but potentially noisy if it creates PRs on every push.

### Dependencies Health
All deps are recent (Next 15.4.4, React 19.1.0, Tailwind v4). No known vulnerabilities at time of writing.

---

## 🚀 Improvement Opportunities

### High Priority
1. **Update content accuracy** — Fix location, email, AmFam description, Northwestern tense
2. **Fill in empty skills/achievements** — Work experiences and projects look hollow in expanded view
3. **Remove/fix placeholder links** — Either add real URLs or remove the `"#"` links
4. **Add more blog posts** — Only 1 post currently. Blog section feels empty
5. **Update README** — Replace boilerplate with actual project description

### Medium Priority
6. **Add analytics** — No Google Analytics, Plausible, or any tracking. Can't measure traffic.
7. **Auto-generate sitemap** — Use `next-sitemap` or similar. Include all blog posts.
8. **Add favicon properly** — Have `favicon.png` but missing apple-touch-icon, favicon-32x32, etc.
9. **Add a proper "About" page or expand hero** — The about text is just one sentence
10. **Contact form or CTA** — No way for recruiters/visitors to reach out besides finding the email chip
11. **Resume link** — Points to Google Drive. Consider hosting PDF directly or making a `/resume` page.
12. **Blog post individual page SEO** — Blog posts don't appear in sitemap. No OG images per post.

### Low Priority / Nice-to-Have
13. **Dark/light mode toggle** — Currently dark-only
14. **Search/filter for projects** — As project count grows
15. **Loading states / skeleton screens** — For better perceived performance
16. **Accessibility audit** — No skip-nav, limited aria labels, color contrast hasn't been verified
17. **Add page transitions** — Between home and blog pages
18. **RSS feed** — For blog subscribers
19. **Move blog content to MDX files** — Instead of inline strings in TypeScript
20. **Image optimization** — Many PNGs could be WebP/AVIF. Some images are large.
21. **Remove dead code** — `profile-section.tsx`, `seo-head.tsx`, `button.tsx`
22. **Clean up public/** — Remove unused SVGs, rename messy filenames

---

## 📝 Blog Strategy

### Current Posts
1. **"Random Thoughts: PPP, Memory, and Dragons"** (Aug 4, 2025) — Economics opinion, Bostrom's dragon parable + AI acceleration, memory/dytto motivation. Authored by "Claude - Ayaan Pupala".

### Suggested New Posts
Based on Ayaan's background and interests:

1. **"Building Dytto: Why I'm Building an AI Memory App"** — Origin story, technical decisions, lessons learned
2. **"From Federal Contracting to AI: My Career Pivot"** — Karsun → Epigeneres → Northwestern → AmFam journey
3. **"What I Learned Building FundFish for Per Scholas"** — Capstone project story, nonprofit tech, AI for social good
4. **"Fine-Tuning AI on Creator Styles: The dytto-gen Experiment"** — Technical deep dive on the creator marketplace
5. **"GANs for Medical Imaging: Enhancing CT Scans"** — Academic project writeup
6. **"Using LLMs to Replicate Social Science Experiments"** — SSARP project writeup
7. **"Moving to Boston: Tech Scene Thoughts"** — Personal/career reflection
8. **"My Northwestern AI Program Review"** — Program review, what he learned, who it's for
9. **"The Stack Behind This Portfolio"** — Meta post about Next.js 15, static export, Netlify
10. **"Tools I Use Daily as an AI Engineer"** — Productivity/dev tools post

### Blog Infrastructure Improvements
- Move content from inline strings to MDX files in a `content/` directory
- Add reading time estimates
- Add table of contents for longer posts
- Add OG image generation per post
- Consider removing "Claude" from author attribution (or explain it)

---

## 🚢 Deployment & Operations

### Build
```bash
npm run build          # Builds to out/ directory (static export)
npm run dev            # Local dev server at localhost:3000
npm run lint           # ESLint
```

### Deploy
- **Platform:** Netlify
- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Branch deploys:** Triggered on push to `main`
- **Node version:** 18 (set in netlify.toml)
- **Domain:** https://ayaanpupala.com

### GitHub Actions
- **Gemini Documentor** — Auto-docs PR on every push to main. Requires `GEMINI_API_KEY` secret.

### Adding a Blog Post
1. Edit `src/lib/blog-data.ts`
2. Add a new object to the `blogPosts` array with `id`, `title`, `excerpt`, `content` (markdown string), `date`, `author`, `tags`
3. The `id` becomes the URL slug: `/blog/{id}/`
4. `generateStaticParams()` in `[id]/page.tsx` auto-generates the static page
5. Push to main → Netlify auto-deploys

### Adding a New Section Item
1. Edit `src/lib/data.ts`
2. Add to the appropriate array (`tools`, `education`, `work`, `projects`)
3. Add the corresponding image to `public/images/`
4. Tools items link directly to `expandedDetails.links[0].url`
5. Other items open in the expanded view modal

---

## 📊 Key Metrics to Track (Once Analytics Added)
- Total visitors / unique visitors
- Blog post views
- Resume link clicks
- dytto.app referral clicks
- Geographic distribution (relevant for job market)
- Mobile vs desktop ratio

---

## 🗂 File Quick Reference

| File | Purpose | Edit Frequency |
|------|---------|---------------|
| `src/lib/data.ts` | ALL portfolio content | **High** — update for any content change |
| `src/lib/blog-data.ts` | Blog posts | **High** — for new posts |
| `src/app/globals.css` | All styling | Medium — for design changes |
| `src/app/page.tsx` | Homepage layout | Low |
| `src/app/layout.tsx` | SEO metadata, structured data | Low |
| `src/components/navigation.tsx` | Nav drawer | Low |
| `src/components/social-links.tsx` | Social chips | Low — update if links change |
| `src/components/expanded-view.tsx` | Detail modal | Low |
| `netlify.toml` | Deploy config | Rare |
| `next.config.js` | Next.js config | Rare |
| `public/sitemap.xml` | Manual sitemap | When pages change |
| `public/robots.txt` | Crawler rules | Rare |
