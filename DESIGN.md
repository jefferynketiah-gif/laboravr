# LaboraVR — Design Reference

This file is the single source of truth for how the public website (this repo)
should look and read. Read it before making any visual or copy change —
especially if you're a different session/agent than the one that wrote this.
If you change the design, update this file in the same commit.

Scope: the Next.js marketing site only (`pages/`, `components/`, `styles/`).
It does not cover the Unity VR build.

---

## 1. Direction

**Clean & clinical, with one signature flourish.** Light background, blue
accent, restrained motion — think Linear or Stripe's marketing pages, not a
neon dark-mode dashboard. The site went through a full retheme from an
earlier dark/purple "cyberpunk lab" direction; that direction is retired.
Do not reintroduce glow blobs, grain, particle fields, or dark vignettes
site-wide — see §4.

The "one signature flourish" rule: depth and richness come from **one**
deliberate element per context (e.g. the hero's gradient mesh), not from
stacking multiple atmospheric effects. If you want to add a visual flourish
somewhere, remove or tone down something else first.

## 2. Color tokens (`tailwind.config.js`)

All colors are Tailwind theme tokens — use the token name in classes
(`bg-void`, `text-chalk`, `border-edge`), never hardcode a hex value in a
component unless it's SVG fill/stroke that Tailwind arbitrary values don't
reach cleanly (then match the token's actual hex, listed below).

| Token | Hex | Use |
|---|---|---|
| `void` | `#FFFFFF` | Page background |
| `panel` | `#F8FAFC` | Card background |
| `surface` | `#FFFFFF` | Rarely used; distinct white surface on `panel` |
| `edge` | `#E2E8F0` | Default border |
| `edge-bright` | `#CBD5E1` | Hover/emphasis border |
| `uv` | `#2563EB` | **Primary accent** — CTAs, links, active states |
| `uv-dim` | `#93C5FD` | Light tint of the accent (badges, subtle fills) |
| `uv-bright` | `#1D4ED8` | Darker accent — hover state for `bg-uv`/`text-uv` |
| `warm` | `#C2650C` | **Second accent** — real numbers, highlights only. Never a CTA color. |
| `warm-bg` | `#FFF7ED` | Light tint of `warm` |
| `glow-cyan` | `#0D9488` | Physics discipline color only |
| `glow-magenta` | `#7C3AED` | Biology discipline color only |
| `chalk` | `#0F172A` | Primary text |
| `chalk-dim` | `#475569` | Secondary text |
| `muted` | `#64748B` | Tertiary text, labels, captions |
| `paper` | `#F1F5F9` | Alternate section tint (rarely used) |

**The accent rule:** `uv` (blue) is the only call-to-action color. `warm`
(amber/terracotta) is reserved for things that are *data* — real numbers,
verified stats, a highlighted fact — never for a button or a link. This
keeps "click this" and "look at this fact" visually distinct. The two
discipline colors (`glow-cyan` teal for Physics, `glow-magenta` violet for
Biology) are used only as small icon-background swatches on lab cards —
never as section accents or buttons.

Raw hex from the **old** dark palette (`#0A0B10`, `#12141C`, `#7C5CFF`,
`#22D3EE`, `#E879F9`, `#1F2230`, `#6B6F80`, `#E8E9F0`, etc.) should not
appear anywhere in `pages/` or `components/`. The one deliberate exception
is `pages/api/contact.js`'s HTML email template, which intentionally kept
its own dark styling because it's read in an inbox, not on the site.

## 3. Type

- Font: Sora (`font-sans`, via `next/font` in `pages/_app.js`), JetBrains
  Mono (`font-mono`) for eyebrows/labels/mono data.
- `tracking-tightest` = `-0.02em`. This was `-0.05em` in the old dark theme
  and read as aggressive/techy; don't go back below `-0.03em` on body-scale
  headings.
- Scale, by context:
  - **Page title** (`PageHeader`, 404): `text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tightest`
  - **Section heading** (`<h2>` on every page section): `text-3xl md:text-4xl font-extrabold tracking-tightest`
  - **Hero headline** (`CinematicHero` only): its own larger scale, don't reuse elsewhere
  - **Eyebrow/label**: `font-mono text-[10px]–[11px] tracking-[0.18em]–[0.2em] text-uv` (uppercase via content, not a class)
- Keep section headings on ONE scale across the site. If you add a new
  page, match the section-heading scale above rather than inventing a new
  size.

## 4. Motion & effects — what's allowed

**Allowed, used deliberately:**
- `.lift-hover` — 4px rise + neutral shadow on hover, for cards and film frames.
- `.card-shadow` — a soft *resting* shadow (not just on hover) on `GlowCard`,
  film frames (`LabFilm`, `Lab360`), and gallery cards. Depth shouldn't be
  hover-only.
- `.mesh-hero` — the hero's static gradient mesh (blue + warm + teal radial
  gradients, no animation). This is the "one signature flourish." Use it
  **only** in the hero. Don't copy it to every section.
- `.grid-reticle` — a very faint technical grid texture, kept at low opacity
  (10–20%). Used sparingly (hero removed it; `PageHeader`, `404`, labs
  gallery intro section, `Navbar` mobile overlay, `ScrollSequence` still
  have it at reduced opacity). It's the one "precise/technical" texture cue
  — don't add a second competing texture.
- `.btn-glow` — a small elevation shadow on primary buttons, tinted with the
  accent color. Not a neon glow.
- `.hero-drift` — a one-time 14s slow zoom-out on the hero's video loop.
- `.pulse-ring` / the `LIVE` badge ping — a small animated status indicator.
  Fine; it signals real state, it's not decoration.
- `.scan-line` / the preloader's counter and progress bar — brief (~2s),
  plays once per session. Acceptable because it's not persistent site
  motion.

**Removed, don't bring back without a real reason:**
- `Aurora` component (colored glow blobs) — still exists as a file but is
  unused. If you want hero depth, extend `.mesh-hero`, don't re-add `Aurora`.
- `ParticleField` — still exists as a file but is unused.
- `.grain` noise texture — reduced to near-invisible (1.2% opacity); don't
  raise it back up.
- Per-section colored blur-blobs (`bg-[radial-gradient(circle,rgba(...),transparent)]`
  scattered across `about.jsx`/`contact.jsx`/`index.jsx`/`labs.jsx`) — all
  removed. Don't add new ones; use `.mesh-hero`-style treatment only where
  a flourish is actually warranted, and only one per page.
- Dark vignettes (`radial-gradient(..., #0A0B10 ...)`) — removed everywhere;
  they only made sense against a dark page.

If `prefers-reduced-motion` is set, all of the above animations are already
disabled via the media query at the bottom of `globals.css`. Any new
animation class should be added to that list too.

## 5. Layout patterns

- **Bento over uniform grids.** When a section has one "real"/active item
  and several "planned" ones (see the homepage's Chemistry/Physics/Biology
  cards), give the real one a large featured treatment (`md:col-span-2`,
  side-by-side image+text) and the planned ones smaller matching cards
  below. Don't default to three equal columns when the content isn't
  actually equal in weight.
- Section vertical rhythm: `py-20 md:py-24` to `py-24 md:py-36` depending on
  section weight. Keep this consistent with surrounding sections on the
  same page.
- Cards: `rounded-xl` or `rounded-2xl`, `border border-edge`, `bg-panel`,
  `card-shadow`. Add `lift-hover` if the card is clickable/interactive.

## 6. Imagery

- **Real screenshots and real footage over generated/stock images.** Every
  AI-generated or stock photo that was on the site originally has been
  replaced with actual screenshots from the Unity build or stills from the
  lab films (see `public/lab-screens/`). Don't add generated/stock imagery
  back in; ask for a real screenshot instead.
- The hero and the About banner use a short looping clip
  (`public/lab-screens/hero-loop.webm` + poster) cut from the real
  cation-trail film. It's pulled from the R2 test URL
  (`pub-7ec837506c4d4d0a8c05482fc32de42c.r2.dev`), which is rate-limited —
  switch to the real media domain once it's connected (see `lib/media.js`).
- Screenshots live in `public/lab-screens/` as optimized JPEGs (~120–180KB
  each, 1600px wide max). Convert new ones the same way before adding them.
- Gallery captions (Labs page) describe what's on screen, nothing more —
  no claims about outcomes, correctness, or results. See §7.

## 7. Copy rules (non-negotiable, not a style preference)

- **No claim the product can't back up.** This site already had two
  corrections forced by this rule: "Works on Meta Quest 2 and 3" /
  "a Unity build is available for Meta Quest devices" were removed because
  they couldn't be verified from the project; replaced with "Built in Unity
  6", which the screenshots do confirm.
- **Curricula named must match what's actually built.** Currently: Cambridge
  IGCSE and A Levels are named as supported; WASSCE is explicitly labeled
  "coming next", not "supported" — because the lab content is Cambridge
  IGCSE Chemistry (0620) only, so far. Don't upgrade WASSCE's wording until
  the content actually covers it.
- **Numbers used as "richness" must be real.** The "12 cation tests / 8
  anion tests / 6 gas tests / 5 flame tests" stat on the homepage came from
  the Unity build's own console log (`ReactionSystem: Spec loaded...`), not
  from marketing copy. Prefer this kind of real, specific number over an
  invented-sounding round one. Never fabricate a case study, a named pilot
  school, or an outcome ("improved test scores," "used by X schools") —
  there isn't one yet.
- **Draft content gets a draft label until the teacher signs off.** When
  another session/agent sends a new lab screenshot, check whether it says
  the chemistry is still draft. If so, it needs the project's teacher
  (Jeffery) to confirm before a caption can describe it as settled content.
- **Audience is "schools and universities," not just universities or just
  Africa.** The site covers Cambridge IGCSE, A Levels, WASSCE (coming
  next), and university — not only African universities, which was the
  original, narrower framing.

## 8. Things intentionally left as-is

- `components/Aurora.jsx`, `components/ParticleField.jsx`,
  `components/FeatureCard.jsx`-style unused files from the old design are
  sometimes kept (not deleted) when there's a reasonable chance of reverting
  a direction. Check git history before deleting something that looks
  unused — it might be a recent, deliberate rollback point.
- `pages/api/contact.js`'s email HTML keeps the old dark styling on
  purpose (read in an inbox, separate medium from the site).
- `public/360/index.html` is a standalone static page (the 360° viewer),
  not part of the Next.js app — it won't show up in a `pages`/`components`
  grep. It keeps a dark immersive-viewer background on purpose, but its
  accent button was updated to the new blue to match the site.
