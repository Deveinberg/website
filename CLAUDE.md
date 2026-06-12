# CLAUDE.md — devverma.com UI/UX Improvement Plan

Personal portfolio for Dev Verma (quantum physics MSc, NTU Singapore).
Stack: Next.js (App Router, `output: 'export'` static build), Tailwind, framer-motion, lucide-react. Deployed via Netlify. Dark space theme: stars + shooting stars background, bottom macOS-style dock nav, two pages (`/` and `/blog`).

This file tracks the UI/UX improvement plan. Copy/content changes are explicitly **out of scope for now** (revisit later).

---

## Audit findings (2026-06-12)

Reviewed code + live screenshots at 1440×900 and 390×844.

### Bugs / broken experiences
- **Mobile hero overflows the viewport**: the "Get In Touch" CTA is cut off at the bottom and sits behind the dock. Caused by `pt-[20vh]` / `-mt-[8vh]` spacing hacks in the hero plus large heading wrap.
- **Dock covers content**: the fixed bottom dock overlaps the Substack email input on mobile contact, the footer on every page, and body text mid-scroll. No section reserves bottom clearance.
- **Non-clickable cards look clickable**: 3 of 5 project cards have no `link` but still get `cursor-pointer` + hover treatment — broken affordance.
- **"View All Works" → `/blog` is a dead end**: the blog page is just a Substack redirect card. The `blogPosts` array in `src/app/blog/page.tsx` is dead code (defined, never rendered).
- **Internal links open new tabs**: the about-section `/blog` link uses `target="_blank"` for an internal route.
- **Substack form uses `window.open`** — silently fails under popup blockers; no success/error feedback.

### Polish / design-level gaps
- **Orphan grid items**: 5 project cards in a 2-col grid leaves a lone card; 5 stats in `grid-cols-2` on mobile leaves an orphan too.
- **Project imagery is inconsistent**: GitHub logo on dark, FLIQ collage on white, photos — different visual weights make the grid feel unedited.
- **Background is noisy**: 3 shooting-star layers + twinkle + gradient run constantly. Heavy on battery, distracting behind body text, and there's no `prefers-reduced-motion` support.
- **Dock icons are ambiguous**: no tooltips/labels, no `aria-label`s (icon-only links are invisible to screen readers).
- **Hover/interaction depth is flat**: cards only swap background color; buttons are default blue rectangles; no focus-visible styles anywhere.
- **Hero typography on mobile**: 1-word-per-line wrap, ~80% of viewport consumed by the headline before any content.
- **No scroll/orientation cues** beyond the one bouncing chevron; section transitions are abrupt fades.
- `<img>` instead of `next/image` (acceptable under `unoptimized` static export, but no width/height → layout shift).
- `ignoreBuildErrors: true` / `ignoreDuringBuilds: true` hide regressions.

---

## Plan & checklist

### Phase 1 — Fix what's broken ✅ (done 2026-06-12, verified via screenshots + `npm run build`)
- [x] Rework hero layout: removed `pt-[20vh]`/`-mt-[8vh]` hacks; responsive type (`text-4xl sm:text-5xl md:text-7xl`) and margins — heading + sub + CTAs + scroll cue all fit at 390×844.
- [x] Reserve dock clearance: footer `pb-32` on both pages; hero `pb-32` so the scroll cue clears the dock.
- [x] Unlinked project cards no longer show `cursor-pointer` (conditional on `project.link`). *Open follow-up: give FYP/URECA cards real destinations when links exist — needs Dev's input.*
- [x] Fix `/blog` dead end: homepage button relabeled "Read My Writing →" (ArrowRight, internal); dead `blogPosts` array + unused imports deleted.
- [x] Internal links: about → `/blog` now uses `<Link>`, no `target="_blank"`.
- [x] Subscribe forms (home + blog) are native GET forms to `https://dverma.substack.com/subscribe` with `target="_blank"` — works under popup blockers.
- [x] `aria-label` + `title` tooltip on every dock icon link (both pages).
- [x] `prefers-reduced-motion`: global CSS override (kills twinkle/pulse/bounce), ShootingStars returns null + stops spawning under reduced motion (also fixed its leaked `setTimeout` chain), framer entrance animations gated via `<MotionConfig reducedMotion="user">` on both pages.

### Phase 2 — Visual hierarchy & layout polish ✅ (done 2026-06-12, verified via screenshots + `npm run build`)
- [x] Project grid: FLIQ win promoted to full-width featured card (`md:col-span-2`, side-by-side image/content on desktop), remaining 4 in 2×2 — orphan gone, hierarchy established.
- [x] Imagery normalized: dark tint + bottom gradient overlay on all project images (tames the white FLIQ artwork), explicit `width`/`height`, `loading="lazy"` for below-fold cards.
- [x] Stats row: 5th stat (FLIQ) spans both columns centered on mobile (`col-span-2 md:col-span-1`) — no orphan, no copy change.
- [x] Card hover language: linked cards lift (`-translate-y-1`) with blue border/shadow glow + ExternalLink icon fades in beside the title; unlinked cards keep only the subtle bg shift.
- [x] Background calmed: 3 shooting-star layers → 1 (longer delays), static star opacity 0.6→0.45, twinkle peak 0.9→0.65, radial glow 0.15→0.1; star spawning pauses while the tab is hidden (visibilitychange).
- [x] Typography scale: hero tightened in P1; section h2s now `text-3xl sm:text-4xl md:text-5xl` consistently; blog h1 gets matching mobile step.
- [x] Global `:focus-visible` ring in the blue accent (globals.css).

### Phase 3 — "Next level" upgrades
- [ ] Section transitions: subtle scroll-linked parallax on the star layers, gradient hue shift per section (purple → blue → cyan) so scrolling feels like traveling.
- [ ] Research timeline: replace flat card grid order with a vertical timeline (2022 URECA → 2023 URECA → 2025 FYP → FLIQ → MSc) — tells a story, perfect for an academic portfolio.
- [ ] Dock upgrades: scroll-progress indicator, magnification already exists — add labels on long-press for touch.
- [ ] Hero signature moment: one distinctive interactive element (e.g. a small animated Bloch sphere / orbiting particle around the gradient text) instead of three generic pulse dots.
- [ ] OG image: dedicated 1200×630 branded card (currently reuses the about photo).
- [ ] Micro-interactions: magnetic CTA buttons, animated underline on inline links, count-up on stats when scrolled into view.
- [ ] Lighthouse pass: target 95+ on Performance/A11y/Best Practices after the above; remove `ignoreBuildErrors`/`ignoreDuringBuilds` and fix whatever surfaces.

### Out of scope (for later, per Dev)
- Copywriting changes (hero line, about text, project descriptions).
- New content/pages (CV page, publications list) — worth discussing after UI pass.

## Working notes
- Static export (`output: 'export'`) → no server features; keep everything client-side/static.
- Screenshots from this audit: `/tmp/ui-{desktop,mobile}-{hero,work,about,contact,blog}.png`.
