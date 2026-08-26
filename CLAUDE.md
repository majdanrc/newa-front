# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint (extends next/core-web-vitals)
npm run format   # prettier --write .
```

There is no test runner configured in this repo.

Package management is mixed: both `package-lock.json` and `yarn.lock` are committed. Confirm with the user which one is authoritative before adding dependencies, and update both lockfiles if needed to avoid drift.

## Architecture

Next.js 14 App Router site (`src/app`), TypeScript, Tailwind CSS + DaisyUI, with MUI/Emotion and styled-components also installed as dependencies (not currently used in any page — Tailwind/DaisyUI is the active styling approach).

- Route pages live directly under `src/app/<route>/page.tsx`: `/`, `/about`, `/contact`, `/new-releases`, `/upcoming`, `/repertoire`. All are `"use client"` components; there is no server-side data fetching yet.
- `src/app/layout.tsx` sets global metadata and wraps every page with `DaisyNavbar` (fixed/sticky) plus top padding to clear it.
- `src/app/ui/fonts.ts` defines the two fonts used throughout: `inter` (body) and `monoton` (display headings via `${monoton.className}`).
- Brand color is `newa-green` (`#3c4f3a`), defined in `tailwind.config.ts` and used pervasively for accents, borders, and CTAs. DaisyUI is configured with a single `dark` theme.

### Component directory has dead code from navbar iteration

`src/app/components/` accumulated several superseded navbar/header experiments (see git log: "nav experiments", "navbar experiment", "diff nav bar", "daisy nav"). Only two files are actually imported anywhere:

- `daisynavbar.tsx` — the live navbar, imported by `layout.tsx`. Built with DaisyUI classes, has mobile dropdown menu, social icons, and a `menu` array of nav links (some pointing to `/about#bilety` anchors that don't exist yet as actual sections).
- `daisydropdown.tsx` — dropdown submenu used by `daisynavbar.tsx`.

The rest — `navbar.tsx`, `navbarold.tsx`, `dropdown.tsx`, `header.tsx`, `topheader.tsx`, `logo.tsx`, `social.tsx` — are not imported from any page or from `daisynavbar.tsx`, and are safe to delete once confirmed unwanted (check with the user first since this may be reference material for future nav tweaks).

### Content: real cinema, hand-maintained data files

This is a real cinema website (Kino Newa, Zielona Góra, Poland — a single-screen art-house cinema, currently under renovation per the `/about` copy). There is no CMS or backend database yet — film/schedule content lives in two hand-edited TypeScript data files under `src/app/data/`, both explicitly marked to eventually read from real storage instead:

- `src/app/data/movies.ts` — the film catalog (`Movie` type + `currentMovies` array). Single source of truth for `page.tsx` (homepage "Teraz w kinach") and `new-releases/page.tsx` ("Premiery") — both just import and render `currentMovies`, so adding/removing a film only needs to happen here.
- `src/app/data/upcoming.ts` — `upcomingMovies: Movie[]`, same `Movie` type, for `upcoming/page.tsx` ("Zapowiedzi" — films not yet released). Kept as a separate array from `movies.ts` on purpose: premieres and announced-but-unreleased films are different concepts and were previously (wrongly) conflated into one list.
- `src/app/data/repertoire.ts` — the schedule (`ScreeningBlock` type + `repertoire` array). Each block has a `date`/`time`/`hall` and a `movieIds: string[]` that references entries in `movies.ts` by `id` — the schedule does not duplicate film data inline. This exists to support screenings that show several films together in one slot with no per-film time (e.g. a touring festival's nightly block), not just one-film-one-showtime.
- `repertoire/page.tsx` derives its day-selector tabs from the actual dates present in `repertoire.ts` (not from `new Date()` + next-7-days like the old version), and resolves each block's `movieIds` against `movies.ts` via a `Map` built at module scope.
- Posters live as static files in `public/posters/*.jpg`, referenced by path from `Movie.poster` and rendered via `next/image`. This is a deliberate stopgap (flagged in code comments) until real image storage exists — do not switch these to base64-embedded data URIs, that was considered and rejected because it bloats the client JS bundle.

`contact/page.tsx` sends real email via `src/app/api/contact/route.ts` using the Resend API (`RESEND_API_KEY` env var, required in Netlify env vars for production too). The `to` address is currently a personal address as a `TODO`-flagged stopgap — Resend's sandbox mode refuses to deliver to `kontakt@kinonewa.pl` until the `kinonewa.pl` domain is verified at resend.com/domains, at which point `to` (and ideally `from`) should move to that domain.

There are no "Kup bilet" (buy ticket) buttons anywhere in the app — Kino Newa has no online ticketing, tickets are box-office/phone only, so these were deliberately removed rather than left as dead UI.

Social links are just Facebook (`facebook.com/kkfnewa`) — Instagram/Twitter/YouTube were removed since Kino Newa doesn't have real accounts on those platforms (the old links pointed at bare platform homepages, not real profiles).
