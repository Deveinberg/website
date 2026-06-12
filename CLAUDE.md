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

### Phase 3 — "Next level" upgrades ✅ (done 2026-06-12, verified via screenshots + Lighthouse + `npm run build`)
- [x] Section transitions: star field gets a subtle scroll-linked parallax drift (framer `useScroll` in StarsBackground); page gradient now journeys purple → blue → cyan → black.
- [x] Research timeline: added "The Journey So Far" vertical timeline in the About section (2022 URECA → 2023 URECA → 2025 FYP → FLIQ → MSc). *Decision: kept the featured-card project grid from Phase 2 instead of replacing it — the timeline lives in About and reuses existing copy only.*
- [x] Scroll-progress indicator: gradient bar at top of viewport (`ScrollProgress` component, both pages). *Long-press dock labels skipped — `title` attrs from P1 cover hover; revisit if touch users complain.*
- [x] Hero signature moment: three generic pulse dots replaced with an animated atom — 3 tilted elliptical orbits with glowing electrons behind the headline (CSS-only, dies gracefully under reduced motion).
- [x] OG image: branded 1200×630 card generated at `public/images/og-card.png`, wired into OpenGraph + Twitter metadata (was the about photo).
- [x] Micro-interactions: CTAs get hover/active scale; inline links get a draw-in underline (`.link-underline`). *Skipped: count-up stats (only one stat is numeric) and magnetic buttons (gimmick risk).*
- [x] Build hygiene: removed `ignoreBuildErrors`/`ignoreDuringBuilds`; fixed everything that surfaced (unescaped entity, unused import, 4 `any`s, and a real `rules-of-hooks` violation in dock.tsx).
- [x] Perf: ShootingStars rewritten from setState-per-frame (60fps React re-renders) to ref-based direct SVG attribute updates.

**Lighthouse (static build, headless Chrome, 2026-06-12):** Accessibility 100, Best Practices 100, SEO 100. Performance: desktop 82 (was 68 before the ShootingStars fix; LCP 1.4s, TBT 310ms), mobile-throttled 48 (LCP 5.5s, TBT ~4s).
*Open item:* mobile lab score is bounded by React + framer-motion hydration under 4× CPU throttle — the LCP element (hero paragraph) sits at `opacity: 0` until hydration. Getting to 95+ mobile means taking framer off the critical path (CSS-only entrance animations or dynamic import). Architectural trade-off — discuss before doing.

### Phase 4 — Copy pass ✅ (done 2026-06-12, verified via screenshots + `npm run build`)
Voice principles: keep the self-deprecating humor (it's the brand), introduce Dev by name in the hero, every project description says what the thing actually is (no restating titles), no overclaiming, no invented facts. About bio left untouched — it's the strongest copy on the site.
- [x] Hero: "Hi, I'm **Dev** — a young physicist based in Singapore" (gradient moved to the name); sub now ends "…currently deep in quantum information and the fine art of taking quantum gates apart"; scroll cue is "See what the overthinking produced" (pays off the joke).
- [x] Project descriptions: GitHub ("The code behind the research…"), FLIQ grammar fixed with a zeugma ("it won the Education Track, and me a trip to CERN"), FYP/Vibration/Polydispersity each open with the actual research question instead of restating the title.
- [x] Stats row: "Status / Master's / Student" → "MSc / Degree / by Research".
- [x] Blog page: sub no longer claims "breakthroughs"; Substack card is "It all lives on Substack".
- [x] Untouched as planned: About bio paragraphs, contact section, footer, SEO metadata.

### Post-phase revisions (per Dev, 2026-06-12)
- [x] Atom orbit hero element and all shooting-star layers removed (component deleted, CSS removed). The static twinkling star field + parallax stays.
- [x] **Replaced with Feynman diagrams**: `FeynmanBackground` renders 5 faint line-art QED diagrams (t-channel, s-channel, vacuum polarization, bremsstrahlung ×2) fixed in the background on both pages; each slowly pulses up to a colored glow on a staggered 11–16s cycle. Capped at 60% brightness on mobile so they never fight the text. This is the approved decoration style: atom orbits and shooting stars are out, Feynman diagrams are in.
- [x] **Projects section removed entirely** (per Dev): the About timeline is the project showcase now, and the hero "View My Projects" CTA links straight to GitHub. Dock is 4 icons (Home/About/Blog/Contact); scroll-spy updated.
- [x] Final cleanup (2026-06-12): unused project images deleted, stale WEBSITE-STATUS.md and scripts/download-images.js removed, DEPLOYMENT.md rewritten, Twitter creator placeholder dropped, root PDFs gitignored. Google Scholar (citations?user=4Hz1kfsAAAAJ) linked in contact row + JSON-LD sameAs. Fact-check vs CV: MSc runs Jan 2026–Jan 2028 (timeline says 2026–now), FYP was 2024–25, and copy must not claim a specific current research direction while the MSc topic is still settling (program name "quantum information theory" is the safe phrasing).
- [x] **No em dashes in site copy** (standing rule). All nine instances reworded with commas, colons, or periods, including the About bio. En dashes in year ranges (2022–23) are fine.

### Out of scope (for later, per Dev)
- New content/pages (CV page, publications list). Worth discussing after UI pass.

## Working notes
- Static export (`output: 'export'`) → no server features; keep everything client-side/static.
- Screenshots from this audit: `/tmp/ui-{desktop,mobile}-{hero,work,about,contact,blog}.png`.
