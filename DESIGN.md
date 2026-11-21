# LaboraVR — Design Reference

This file is the single source of truth for how the public website (this repo)
should look and read. Read it before making any visual or copy change —
especially if you're a different session/agent than the one that wrote this.
If you change the design, update this file in the same commit.

Scope: the Next.js marketing site only (`pages/`, `components/`, `styles/`).
It does not cover the Unity VR build.

---

## 1. Direction

**Clean & clinical, elevated with premium polish.** Light background, blue
accent, and refined modern aesthetics (glassmorphism, subtle scroll-driven
entry/exit animations). The site went through a full retheme from an
earlier dark/purple "cyberpunk lab" direction; that direction is retired.
Do not reintroduce glow blobs, grain, particle fields, or dark vignettes
site-wide — see §4.

**Stage 2 (Nov 2026):** the home page is built around the competition film
and the line "See it. Say it. Score it." It opens on a dark **ink** hero
(a real in-headset photo under an ink overlay) and closes on an ink pilot
CTA; everything between is the light theme. Ink is a *section* colour on
the home page, not a site-wide dark mode. Other pages still open light.
The preloader and the template-style hero (`CinematicHero`,
`ScrollSequence`, `TiltCard`, `Preloader`) were deleted; they're in git
history and shouldn't come back.

The "one signature flourish" rule: depth and richness come from **one**
deliberate element per context (e.g., a glassmorphic nav bar, or the home
hero's photo), not from stacking multiple atmospheric effects. Scroll-driven
animations should feel deliberate and elegant, following modern web guidance
for performance and accessibility.

## 2. Color tokens (`tailwind.config.js`)

All colors are Tailwind theme tokens — use the token name in classes
(`bg-void`, `text-chalk`, `border-edge`), never hardcode a hex value in a
component unless it's SVG fill/stroke that Tailwind arbitrary values don't
reach cleanly (then match the token's actual hex, listed below).

The palette is the brand palette the owner approved on 14 Nov 2026
(IGCSEVRLab `marketing/01-BRAND.md`). Coral, emerald, amber and purple
tokens were removed in Stage 2; don't add colours outside this table.
`.gradient-text` is now **solid Labora blue** — the shimmering gradient
text is gone.

| Token | Hex | Use |
|---|---|---|
| `void` | `#FFFFFF` | Page background |
| `panel` | `#F8FAFC` | Card background |
| `surface` | `#FFFFFF` | Rarely used; distinct white surface on `panel` |
| `edge` | `#E2E8F0` | Default border |
| `edge-bright` | `#CBD5E1` | Hover/emphasis border |
| `uv` | `#2563EB` | **Primary accent** — CTAs, links, active states |
| `uv-dim` | `#DBEAFE` | Soft blue background (badges, subtle fills) |
| `uv-bright` | `#1D4ED8` | Darker accent — hover state for `bg-uv`/`text-uv` |
| `warm` | `#C2650C` | **Second accent** — real numbers, highlights only. Never a CTA color. |
| `warm-bg` | `#FFF7ED` | Light tint of `warm` |
| `ochre` | `#D9972B` | Large numerals and small status shapes **on ink** only; never small text on white |
| `bench` | `#1D6B63` | The lab's own teal; used in `gradient-uv` (blue → bench) |
| `physics` (= `glow-cyan`) | `#0D9488` | Physics discipline color only |
| `biology` (= `glow-magenta`) | `#7C3AED` | Biology discipline color only |
| `ink` | `#0F172A` | Dark section background (home hero, trust band, pilot CTA, film modal overlay) |
| `ink-2` | `#16213A` | A raised surface on `ink` |
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
  - **Home section heading** (`pages/index.jsx` only): one step up, `md:text-5xl`, because the home page is the showcase. Don't spread it to other pages.
  - **Hero headline** (home hero "See it. / Say it. / Score it." only): its own larger scale, don't reuse elsewhere
  - **Eyebrow/label**: `font-mono text-[10px]–[11px] tracking-[0.18em]–[0.2em] text-uv` (uppercase via content, not a class)
- Keep section headings on ONE scale across the site. If you add a new
  page, match the section-heading scale above rather than inventing a new
  size.

## 4. Motion & effects — what's allowed

**Allowed, used deliberately:**
- `.glass-panel` — premium glassmorphism using `backdrop-blur` and semi-transparent backgrounds. Use this for floating elements like the Navbar or sticky headers.
- Scroll-driven entry/exit animations — use native CSS `@supports (animation-timeline: view())` for fading and scaling elements as they enter the scrollport.
- `.lift-hover` — 4px rise + neutral shadow on hover, for cards and film frames.
- `.card-shadow` — a soft *resting* shadow (not just on hover) on `GlowCard`,
  film frames (`LabFilm`, `Lab360`), and gallery cards. Depth shouldn't be
  hover-only.
- The home hero: a real headset photo (`public/home/hero-pour.jpg`) under an
  `ink` gradient overlay, no animation. This is the home page's "one
  signature flourish." `.mesh-hero` remains in `globals.css` but is no
  longer used.
- `Navbar dark` — on a page that opens on an ink hero, pass `<Navbar dark />`:
  the bar shows white text and a white wordmark until the visitor scrolls,
  then switches to the normal glass bar.
- `FilmModal` — "Watch the film" opens the competition film in an ink
  overlay (Escape or Close shuts it, page scroll is locked while open).
  Nothing loads from YouTube until play is pressed inside it.
- `.grid-reticle` — a very faint technical grid texture, kept at low opacity
  (10–20%). Used sparingly.
- `.btn-glow` — a small elevation shadow on primary buttons, tinted with the
  accent color. Not a neon glow.
- `.hero-drift` — a one-time 14s slow zoom-out on the hero's video loop.
- `.pulse-ring` / the `LIVE` badge ping — a small animated status indicator.
  Fine; it signals real state, it's not decoration.
- The preloader was **removed** in Stage 2: the site opens straight on
  content. Don't add a loading screen back.

**Removed, don't bring back without a real reason:**
- `Aurora` component (colored glow blobs) and `ParticleField` — deleted in the
  Nov 2026 cleanup (still in git history). If you want hero depth, extend
  `.mesh-hero`; don't bring them back.
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

### Practical pages (Stage 4, Nov 2026)

- `/practicals` (hub, grouped by science) and `/practicals/<slug>` (one page per
  practical), all built from `lib/practicals.js`. Add a practical there and in
  `public/sitemap.xml`; nothing else needs to change. The labs page links a
  practical to its page through `PRACTICAL_PAGE` in `pages/labs.jsx`.
- Each page: header (subject, syllabus, picture), **What you do** + a results
  table + an **In the exam** tip (warm box, because it's a fact, not an action),
  **In LaboraVR** (only what is built), more practicals, ink pilot CTA, and the
  not-affiliated-with-Cambridge line. JSON-LD: `LearningResource` + `BreadcrumbList`.
- The science on these pages must be correct IGCSE content; the LaboraVR part
  must be true of the build. No AI model names. Navbar marks "Practicals"
  active on every `/practicals/*` page.
- Stage 5 (21 Nov 2026) brought it to 13 practicals. Four have no headset
  screenshot yet (neutralisation, gas syringe, glass block, biological drawing):
  they set `diagram` instead of `image` and show a plain apparatus drawing from
  `components/PracticalDiagram.jsx`, always tagged **DIAGRAM**. Replace with a
  real screenshot (no private room in view) when one exists.

### Free tools (Stage 5)

- `/tools` hub and three tools: `ion-identifier` (data in `lib/ions.js`),
  `mark-my-observation` (rules in `lib/observations.js`), `pendulum-graph`.
  All share `components/ToolPage.jsx` (header, related practicals, headset
  line, not-affiliated line, `WebApplication` JSON-LD) and its `Chips` control.
- They run entirely in the browser: no API, no AI, no storage, nothing sent.
  Keep it that way, and keep the privacy line under each tool true.
- The marking tool is **fixed rules**, the site's version of "Models perceive.
  Rules mark." Its scores use `warm` (a fact), ticks use `physics`; buttons stay `uv`.
- The science in `lib/ions.js` and `lib/observations.js` must match the
  practical pages' tables.

## 6. Imagery

- **Real screenshots and real footage over generated/stock images.** Every
  AI-generated or stock photo that was on the site originally has been
  replaced with actual screenshots from the Unity build or stills from the
  lab films (see `public/lab-screens/`). Don't add generated/stock imagery
  back in; ask for a real screenshot instead.
- Since Stage 3 (Nov 2026) neither the home page nor About uses
  `public/lab-screens/hero-loop.webm` any more (the file stays in the repo). The Labs
  page shows the **competition film** (`YouTubeFilm`) and the 360 view. The three older
  R2 films (`films.arrival/chemistry/physics` in `lib/media.js`) are no longer shown
  anywhere; they stay on R2 and in `lib/media.js` in case they're wanted again.
- **Labs page (Stage 3):** one panel per science, its current picture at full strength
  beside the practicals (image side alternates on desktop). Gallery is ~14 pictures:
  `public/competition/` first, then a few `lab-screens` that still show the lab
  accurately. Subject dots use the tokens (`bg-uv` chemistry, `bg-physics`,
  `bg-biology`, `bg-muted` general) — never amber/purple Tailwind defaults.
- **About page (Stage 3):** the founder is the main story, straight under the header:
  large `Founder.jpg`, the same quote as the home page, the bio. Then "How it started"
  (classroom in Accra → energy storage research → LaboraVR), why it exists, roadmap,
  principles, ink CTA. The founder is always described as an energy storage scientist
  *and* former IGCSE Chemistry and Physics teacher, never only a teacher. Don't add
  dates or achievements to his path that he hasn't confirmed.
- **Films are silent and must not show the AI model's name.** Strip audio (`-an`). The
  AI Practical Architect panels print a model name ("Meta's Muse model proposes a
  practical...") and a tiny model-id line under the brief list; neither may be legible in
  anything published. Cut from stretches where those panels are out of frame, or crop them
  out, then OCR-scan the finished file (frames every 0.5 s) before publishing. Also keep
  the Quest menu, passthrough room and any app names out of frame.
- Screenshots live in `public/lab-screens/` as optimized JPEGs (~120–180KB
  each, 1600px wide max). Convert new ones the same way before adding them.
- Photo backgrounds behind text (e.g. the homepage's final CTA) must come
  from a *calm* screenshot. A shot with a UI menu in the middle (like the
  lobby) ghosts its text through the heading, even at low opacity.
- Gallery captions (Labs page) describe what's on screen, nothing more —
  no claims about outcomes, correctness, or results. See §7.

### Image sets (which capture each file came from)

- `n_*.jpg` in `public/lab-screens/` are the **4 Nov 2026** captures with the new gloves and grabbing
  (`IGCSEVRLab/Recordings/HeadsetShots/2026-11-04*`, the 16:9 Unity shots, plus 1:1 shots cropped to 16:9).
  Prefer these. The older `v2_*` bench-start shots and the earlier-room shots (titration, pendulum, osmosis,
  graph skills, planning, drawing, ray trace) were deleted on 4 Nov. Only `v2_architect*` and `v2_lobby_*` remain.
- `s_*.jpg` are stills cut from the 4 Nov 22:26-22:46 Quest recordings (lobby, flame tests, hint, ammonia lesson and the
  physics pendulum). Physics now has real stills (pendulum, dial board, graph board). Biology still has none: its card
  shows a plain gradient. The physics card keeps the owner's status wording (PLANNED), so captions describe what is on
  screen only. Never use a chemistry picture for biology, and never reuse the deleted old-room shots.
- Do not reintroduce files from `public/images/` other than `Founder.jpg`. Stock or AI-generated product
  imagery was added back once by mistake and had to be removed again.
- Never publish headset footage that shows a private space (the 2 Nov Quest passthrough test was filmed
  in a bedroom).
- `public/competition/` (added 20 Nov 2026) holds the competition gallery from
  `IGCSEVRLab/Recordings/Film/Gallery`, resized to 1600 px JPEG (q80). `06-on-your-desk` and `02-real-hands` were
  left out on purpose: they show the owner's room in passthrough. These are now the preferred pictures for physics
  (`07`, `08`, `09`) and biology (`10`, `11`); biology no longer needs a gradient placeholder.
- Films hosted on YouTube are embedded only through `components/YouTubeFilm.jsx`: a poster and a play button, and
  nothing loads from YouTube until the click (then `youtube-nocookie.com`). The privacy page says so; keep it true.

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

- **Hardware: say only "tested on Meta Quest 3S".** That is the one headset the owner has tested. Do not
  list other headsets (Quest 2, Quest 3, Pico...) until they have been tested.
- **AI Practical Architect** (added 2026-11): the owner confirmed it works; the user says a brief and the
  bench is arranged, then they do the practical. Since the competition entry it can also design the next
  practical around what the student got wrong, with a checker testing every design against the teacher's
  specification. Describe it in those terms. The in-lab board reads "The AI
  proposes, the specification decides"; quote it as coming from the board, not as our own guarantee. Do not
  name the underlying model (the panel names one) or claim accuracy or curriculum coverage unless the owner
  says so.
- **Demo school name:** some Unity scenes show "Sankofa Ridge International School" on a whiteboard. It is a
  made-up demo name, not a partner. Caption any such screenshot as a demo and never imply a real school.

- **What is built (20 Nov 2026, from the owner's competition entry):** chemistry (cation, anion, gas and flame
  tests, the spoken examiner), and the first physics (pendulum, eye-level readings, glass block) and biology
  (food tests, potato strips, leaf drawings) practicals. Physics and biology are labelled "FIRST PRACTICALS BUILT",
  not "planned" and not "complete". Removed as unbacked: "results sync", "every action is timestamped",
  "managed install / no licence keys", titration-first wording, and the old titration-only roadmap.
- **Competitions:** say "submitted to" the Meta VR Start Developer Competition 2026 (results about 11 Dec) and
  that the AI Practical Architect was "first built during" Meta's Global AI Developer Hackathon (Cerebral Valley,
  Nov 2026). The hackathon was not won. Never "finalist" or "winner" unless it happens; no Meta logo; keep the
  not-affiliated line on `/competition`. Do not link the Devpost page before the results (it may show the
  judges-only build link), and never the Competition channel link.
- **Location:** "Based in France. Built from years of teaching in Accra, and for students in Ghana and beyond."
  Do not imply partnerships with Ghanaian schools. The founder is an energy storage scientist and former IGCSE
  Chemistry and Physics teacher, never only "a teacher".
- **Canonical address is `https://www.laboravr.com`** (the bare domain 308-redirects to it). `components/Seo.jsx`,
  `public/sitemap.xml` and `public/robots.txt` must all use www. `Seo` also prints the Organization JSON-LD on
  every page; pages add their own items through the `jsonLd` prop.

## 8. Things intentionally left as-is

- Unused files are deleted rather than kept "just in case": git history is the
  rollback. (The Nov 2026 cleanup removed the old stock photos, the retired
  Aurora/ParticleField components, the unused 3D headset model, and the
  three.js/GSAP packages that only the removed 3D viewer used.) Before deleting
  something that looks unused, search the whole repo and `git log` for it.
- `pages/api/contact.js`'s email HTML (the notification sent to the
  owner) keeps the old dark styling on purpose (read in an inbox, separate
  medium from the site). The email visitors receive
  (`lib/contactEmails.js`) is customer-facing, so it follows the light
  theme. It loads its logo from the live site's `/icon-192.png`, so it
  only shows the new blue icon once the new icons are deployed.
- `public/360/index.html` is a standalone static page (the 360° viewer),
  not part of the Next.js app — it won't show up in a `pages`/`components`
  grep. It keeps a dark immersive-viewer background on purpose, but its
  accent button was updated to the new blue to match the site.
