# LaboraVR website — handoff

Read this first, then `DESIGN.md`, then wait for the owner's instruction.
Do not re-explore the whole repo; this file is the map.

**State at handoff:** everything is merged to `main` (PR #2) and live at
https://laboravr.com. Owner: Jeffery Nketiah (teacher, Accra, Ghana — he is the
authority on whether chemistry content is correct).

## Run it

- Node 24, npm 11. Clone to a folder **outside OneDrive** (see Gotchas).
- `npm install`
- Create `.env.local` (never commit it) with:
  - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `NOTIFY_EMAIL_USER`, `NOTIFY_EMAIL_PASS` (Gmail address + Gmail App Password)
  - `RESEND_API_KEY` (only needed to test the visitor email locally)
  - optional `NEXT_PUBLIC_MEDIA_BASE` (defaults to the Cloudflare R2 test URL)
- `npm run dev` → http://localhost:3000. Stop the dev server **before** `npm run build`
  (they share `.next` and corrupt each other).
- Visual check without a browser window: `node scripts/shoot.js /labs labs` (see the file).

## Map

- `pages/` — `index`, `about`, `labs`, `contact`, `404`; `pages/api/contact.js` is the only API route.
- `components/` — `CinematicHero`, `ScrollSequence`, `TitrationDemo` (self-drawing SVG), `GlowCard`,
  `LabFilm`/`Lab360` (films + 360 player), `PageHeader`, `Navbar`, `Footer`, `Wordmark`.
  `Aurora.jsx` and `ParticleField.jsx` are retired but kept as rollback points.
- `lib/` — `media.js` (R2 URLs for the films), `supabase.js`, `resend.js`, `contactEmails.js` (visitor email).
- `public/lab-screens/` — real Unity screenshots + `hero-loop.webm`. `public/360/index.html` is a
  standalone A-Frame viewer page, not part of Next (it won't show up in a pages/components search).
- `generate-og.js` — Puppeteer script that writes `public/og-v2.png`.
- Contact flow: form → `/api/contact` → insert into Supabase `contact_submissions` → Gmail notification to
  the owner (Reply-To = visitor) → Resend confirmation to the visitor from `noreply@laboravr.com`
  (no Reply-To; it says nobody monitors it). Failed emails are logged and never fail the submission.
  The curriculum choice is stored as a "Curriculum: …" first line of the `message` column.

## Where things are configured (none of this is in git)

| Thing | Where | Notes |
|---|---|---|
| Hosting | Vercel project `laboravr`, team `labora3` | Merging to `main` = production deploy. Branch pushes = preview. Deployment Protection ("Require Log In") is ON. |
| Env vars | Vercel → Settings → Environment Variables | Production has all five; Preview has them too. Vars only apply to *new* builds. |
| Database | Supabase project `crlughaxpqqhnaxcqtvd` | RLS on; one INSERT-only policy for `anon` ("public can submit contact form"). Nothing readable by the public. |
| Visitor email | Resend, domain `laboravr.com` verified | DKIM/`send` CNAME/DMARC records are in Porkbun DNS. |
| Domain + forwarding | Porkbun | `hello@laboravr.com` forwards to two Gmail addresses; MX is Porkbun forwarding only (no outgoing mail from `hello@`). |
| Films | Cloudflare R2 bucket `laboravr-media` | Uses the rate-limited `r2.dev` address. Custom domain `media.laboravr.com` not set up yet. |
| Code | GitHub `jefferynketiah-gif/laboravr` | |

## Rules (not style preferences)

1. **Never claim something the product can't back up.** This has already caused two corrections
   (Meta Quest claims removed; "COMPLETE" tag on a draft relabelled "WORKING DRAFT").
2. **WASSCE is "coming next", not supported.** Content is Cambridge IGCSE Chemistry 0620 only so far.
3. **No fabricated case study, pilot school, or outcome.** There isn't one yet.
4. **Draft chemistry needs the owner's sign-off** before a caption presents it as settled.
5. **Real screenshots only** — no generated or stock imagery of the product. Use `public/lab-screens/`.
6. **Never commit `.mp4` files** (git-ignored; films live on R2). **Never commit secrets.**
7. **Do not push or merge without the owner saying so.** Work on a branch, open a PR, he merges.
8. Design rules live in `DESIGN.md` — update it in the same commit as any design change.

## Gotchas

- **Do not work inside OneDrive.** Syncing locks `.next` files (`EBUSY`), dev server returns 500, and a
  stale `.next` needs `rm -rf .next`. This is the main reason to move the project.
- Git Bash rewrites `/paths` into `C:/Program Files/Git/...` for native programs; use `MSYS_NO_PATHCONV=1`.
- "LF will be replaced by CRLF" git warnings are harmless.
- Node ES modules vs CommonJS: `generate-og.js` and `scripts/shoot.js` are CommonJS; `lib/*.js` are ESM.

## Open items

- Test the live contact form once (the curriculum field was never retested after it was added), then delete
  the test row in Supabase. Test messages start with `[TEST]`.
- Connect `media.laboravr.com` in Cloudflare R2, add it to the CORS list, set `NEXT_PUBLIC_MEDIA_BASE`, and
  update the hardcoded URL in `public/360/index.html`. The hero loop and films currently use the r2.dev URL.
- Supabase keys: the site only uses the **anon** key, which is public by design and safe because RLS allows
  INSERT only. The `sb_secret_…` / `service_role` keys are not used anywhere in this project and must never go
  in a `NEXT_PUBLIC_` variable. Rotate them only if the full value is ever pasted somewhere it shouldn't be.
- Optional: `.git` in the old OneDrive folder is ~210 MB from one orphaned film commit; a fresh clone is small.
- Ideas not started: a second small interactive demo beside `TitrationDemo`; real case study once a pilot
  school exists; real physics/biology screenshots when those labs have any.
