---
name: ywam-chateau-design
description: Use this skill to generate well-branded interfaces and assets for YWAM Château, either for production or throwaway prototypes/mocks/decks/social posts/stationery. Contains essential design guidelines, colors, type, fonts, logos, and UI kit components for prototyping. Bilingual (English + Korean) by design.
user-invocable: true
---

Read the `README.md` file within this skill first — it contains the brand context, content fundamentals, visual foundations, and iconography guidance. Then explore the other available files:

- `colors_and_type.css` — CSS custom properties for the full color palette (Foundation, Refuge Forest, Moss, Garden, Hearth, Touch, Linen, Interior + neutrals), type scale, spacing, radii, and shadows. **Link this on every surface you build.**
- `fonts/` — the three font families (Bona Nova, Bona Sforza, Bona Title) as .otf files. `@font-face` declarations are already in `colors_and_type.css`.
- `assets/logos/` — the four official lockups: horizontal wordmark, vertical wordmark, YC icon horizontal, YC icon vertical. Use these directly; do **not** redraw them.
- `preview/` — small card specimens for every token and component. Good reference for what "correct" looks like.
- `slides/` — five slide templates (Title, Section, Content, Quote, Closing) at 1280×720. Copy-paste a template and swap the copy when building a deck.
- `ui_kits/marketing_site/` — a landing-page UI kit showing the brand applied to a full web surface (hero, mission, programs, One Korea module, footer). Use it as a canonical source of component composition.

## How to work with this skill

If creating **visual artifacts** (slides, mocks, throwaway prototypes, social posts, posters, postcards):
1. Link `colors_and_type.css` so the fonts, palette, and type scale are available.
2. Copy needed assets (logos, the circumflex glyph) into the working directory — don't hotlink out.
3. Favor the existing tokens (`--moss`, `--hearth`, `--foundation`, `--interior`) over new hex codes.
4. Follow the bilingual pattern: whenever English headline copy appears, consider whether a Korean line belongs beside or beneath it at equal weight.
5. Output static HTML files for the user to view.

If working on **production code** (a real website or app), copy the assets, the CSS variables, and the type rules into the project, and read the README's visual foundations section before making components. Use Lucide icons at stroke-width 1.5 in moss or ink for any UI iconography — the brand has no native icon system.

## If invoked without guidance

Ask the user what they want to build. Good first questions:
- Is this a **print artifact** (poster, postcard, booklet), a **slide deck**, a **social post**, or a **web surface**?
- Is the content **English only**, **Korean only**, or **bilingual**?
- Is it for **One Korea** content (more reflective, indigo/sky accents allowed), **DTS / training** content (warm, testimonial), or **general ministry** (the default cream-and-moss system)?
- Any specific photography, or use placeholder panels?

Then act as an expert designer for this brand. Produce HTML artifacts or production code depending on the need. Resist adding filler sections, dummy stats, or marketing verbs — restraint is load-bearing for this identity.

## Hard rules (do not break)

- **Divine pronouns** (He, His, Him) are always capitalized in brand copy.
- **No emoji** in brand-voice copy. Ever.
- **Korean and English share space at equal weight** — never shrink the Korean.
- **No stock gradients, no frosted glass, no bouncy animations.** Animation is restrained (fade, 400–600ms, ease-out).
- **Don't redraw the logo or circumflex.** Use the files in `assets/logos/`.
- **Pill radius (999px) is for tags only** — never primary CTAs.
