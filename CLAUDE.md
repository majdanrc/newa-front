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

### Content is placeholder/sample data

This is a real cinema website (Kino Newa, Zielona Góra, Poland — a single-screen art-house cinema, currently under renovation per the `/about` copy), but the movie listings are all hardcoded sample arrays inside the page components themselves, not from a CMS or API:

- `repertoire/page.tsx` — a `schedule` object keyed by hardcoded date strings (e.g. `"2024-12-06"`), so the schedule page shows "no showings" for any date outside those two hardcoded dates. The day selector generates the next 7 days from `new Date()`, so this will need real/dynamic data to stay correct.
- `new-releases/page.tsx` and `upcoming/page.tsx` — hardcoded arrays of real film titles (Parasite, Anora, etc.) used as placeholder content; posters are just emoji/icon placeholders, no actual images.
- `contact/page.tsx` — real address/phone/email for Kino Newa, but the contact form's `handleSubmit` only shows an `alert()` — it doesn't actually send anywhere yet.
- Social links in `daisynavbar.tsx`/`contact/page.tsx` mix a real Facebook URL (`facebook.com/kkfnewa`) with placeholder Instagram/Twitter/YouTube URLs that just point at the platforms' homepages.

When asked to make this "real," the main gaps are: a real data source for showtimes/films (replacing the hardcoded arrays), an actual contact form submission handler, real social links, and real poster images.
