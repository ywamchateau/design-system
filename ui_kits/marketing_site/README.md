# YWAM Château — Marketing Site kit

A single-page marketing site recreation for ywamchateau.com. The source materials contained no production website — this kit extrapolates the visual motifs from the print deliverables (poster, postcard, stationery, presentation) into a web canvas.

## Sections

- **Nav** — sticky, thin hairline, logo wordmark (YWAM CHATEAUˆ), uppercased small-caps nav items, a bordered "Give" button.
- **Hero** — oversized Bona Title headline with a moss italic accent, Korean line at identical weight, lede paragraph, two CTAs, a moss-to-amber figure card sitting to the right (placeholder for a real photograph of the château).
- **Mission** — two-column eyebrow/headline + body text + italic signature.
- **Programs** — three cards on bone background: DTS, One Korea, Retreats & Seminars. Each card pairs English with Korean.
- **One Korea** — full-bleed ink panel with a pull-quote card. Amber eyebrow, display headline, bilingual Korean line.
- **Footer** — moss-green, four columns, with a large Bona Title YWAM CHATEAU lockup.

## To swap in
- Drop real photography into `../../assets/photos/` and replace the gradient `.hero-figure` + any other placeholder backgrounds.
- If you have premium Korean serifs, override `.ko` font-family globally.

## Components reused from the system
- `colors_and_type.css` at the project root — load this first.
- Lucide icons are not used here, but are available via CDN for future UI.
