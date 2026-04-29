# YWAM Château — Design System

> A family home that has been around long enough to carry weight — warm but not casual, rooted but not closed.

This folder is the design system for **YWAM Château**: a YWAM (Youth With A Mission) base pioneered in France by Vince and Jinah Licari, anchored in discipleship training, the *One Korea* vision, and a wider invitation to young people standing at a threshold. The brand is bilingual (English + Korean) by design, not by accommodation.

## Sources

- **Figma file:** `YWAM CHATEAU.fig` (mounted virtual filesystem — no public URL). Focused pages: `/Design-System`, `/DELIVERABLES` (poster, stationery, presentation, social, business cards), `/Moodboard`, `/Visual-Explorations`, `/TIMELINE`.
- **Reference homepage:** a pre-existing ywamchateau.com landing comp was provided and treated as the canonical starting point for the web type + palette direction. The system below adopts its Cormorant + Inter + Noto pairing and its warm (cream / gold / sage / terracotta / stone) palette verbatim.
- **Focused frames (Design-System page):** swatches for the primary warm palette and the secondary One Korea blues; logo symbols `LOGO HORIZONTAL`, `LOGO VERTICAL`, `ICON HORIZONTAL`, `ICON VERTICAL`.

## What this design system is for

Generating well-branded visual artifacts for YWAM Château: posters, postcards and other stationery, Instagram posts/stories, bilingual presentations, folders, and the marketing website. Everything here should feel like it could sit on a table in the château kitchen next to a cup of tea — not performed, not sterile, not precious.

## Index

Root:
- `README.md` — this file.
- `SKILL.md` — Claude Skill manifest.
- `colors_and_type.css` — CSS variables for color, type, spacing, radii, shadows + base element styles. Load this on every surface.
- `assets/` — logos (horizontal/vertical), icon marks, placeholder imagery.
- `preview/` — cards that render in the Design System tab (colors, type, logos, components, voice, imagery).
- `ui_kits/marketing_site/` — marketing/landing-site recreation using the real design motifs.
- `slides/` — presentation slide templates echoing the vision-document layout.

---

## Content fundamentals

The tone is **intercessory and active at once** — stillness + movement. Voice is earnest, testimonial, never corporate. Copy leans on *we* and *us* (the community), invites *you* gently, and never shouts.

**Voice characteristics**
- **Earnest, plain, unhedged.** "Draw near Jesus. Be transformed by His love. Live His Mission." Three short clauses, a period after each. No exclamation points in mission copy.
- **Inclusive first-person plural.** "Our mission is to establish a platform at YWAM Château…" "Join us in making this vision a reality…"
- **Capitalized divine pronouns.** *He, His, Him.* Always.
- **Title case for programs and places.** *Discipleship Training School, One Korea, YWAM Château.* Sentence case everywhere else.
- **Em dashes for reflective asides**, not for drama.
- **No emoji. No hashtags in body copy. No marketing verbs** ("Discover", "Unlock", "Transform your…").
- **Bilingual parity.** When Korean appears, it appears at the **same size and color** as its English partner. The Korean serif is leaned one weight heavier (500 vs. 500) to achieve perceived equal presence — see `--ko-serif-lean`.

**Example snippets:**
- Tagline: *Draw near Jesus. Be transformed by His love. Live His Mission.*
- Invitation: *Embrace God's Heart for North & South Korea.*
- CTA: *Join us in making this vision a reality through prayer and financial support.*

---

## Visual foundations

### Palette

**Primary — warm.** The canvas, the fire, the quiet, the ink.

| Token | Hex | Korean | Role |
|---|---|---|---|
| `--cream` | `#F5F0E8` | 크림 | Main page background |
| `--blush` | `#E8D4C6` | 블러시 | Secondary panel, card background |
| `--gold` | `#C8922A` | 골드 | Primary CTA / accent / fire |
| `--gold-deep` | `#A8791E` | 짙은 골드 | CTA pressed, link hover |
| `--sage` | `#8FA68E` | 세이지 | Supporting green — quiet, second voice |
| `--terra` | `#C57B57` | 테라코타 | Italic-accent color, warmth |
| `--stone` | `#2B2620` | 스톤 | Near-black ink |
| `--stone-soft` | `#4A4037` | 연한 스톤 | Muted body copy |
| `--pale-sky` | `#D4DEE2` | 페일 스카이 | Cool accent within the warm system |

**Secondary — One Korea / OKDTS blues.** Used **only** in *One Korea* testimony contexts. Never on primary brand surfaces. `--ok-deep #1A2A3A`, `--ok-falls #3A6878`, `--ok-mist #8EB8C2`, `--ok-reach #B8D8E4`, `--ok-sky #D4DEE2`.

**Neutrals.** `--paper #FFFFFF` → `--stone-100` (linen) → `--stone-300` → `--stone-500` → `--stone-soft` → `--stone` → `--stone-900`. Linear cool-warm ramp.

### Type

A two-script, three-family stack. Every surface should link Google Fonts with this call:

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;600;700&family=Noto+Serif+KR:wght@400;500;600;700&display=swap" rel="stylesheet">
```

- **Cormorant Garamond** — the serif workhorse. Headings, display, editorial italic. Weight **500** is the headline standard (600 only when an element must punch harder than its neighbor).
- **Inter** — navigation, metadata, eyebrows, buttons, forms, dense UI. Weight **400–600**.
- **Noto Serif KR** — Korean serif partner to Cormorant. Leaned to weight **500** (`--ko-serif-lean`) against Cormorant 500 for perceived parity.
- **Noto Sans KR** — Korean partner to Inter for body / UI copy.
- **JetBrains Mono** — tiny, optional. Only for captions, file names, code, and numeric metadata — never headlines.

**Italic is the signature.** Cormorant italic in **Terracotta** (`--terra`) carries the editorial voice — one or two words per headline, never whole lines. The `em` tag and `.accent-italic` class both pick this up automatically.

**Eyebrows** are Inter 500, 12px, letter-spacing `0.22em`, uppercase, `--stone-soft`, preceded by a 6px gold dot. This is the primary section-label idiom — do not use small caps.

**Hand-drawn underline.** A `.handline` SVG underline in gold is reserved for single-word emphasis inside a display headline ("One **Korea**"). Never on body copy or more than one word at a time.

### Backgrounds, imagery, and texture

- **Backgrounds.** Cream (default), stone-ink (for dark full-bleed moments), blush (for warm surface panels). Full-bleed stone carries the biggest emotional beats.
- **Imagery.** Photographic, warm cast, low-ISO grain, shallow depth of field. Faces and hands more than objects. Candlelight, kitchen windows, overcast exteriors. **Never** stock photography, heavy retouching, teal color grade, lens flares, or HDR.
- **Texture.** Occasional paper-grain noise at 4–8 % opacity in dark hero sections. Multiply blend.
- **Protection gradient** for type over imagery: linear `rgba(15,13,11,0.6)` → transparent, bottom-up only.

### Animation & interaction

- **Animation.** Restrained. Fade-in on scroll (400–600 ms, ease-out). Gentle parallax on hero imagery only. No bouncing, no spring physics.
- **Hover.** 150 ms ease-out. Links shift stone → terra. Primary buttons darken gold → gold-deep. Ghost buttons get a 4 % stone wash.
- **Press.** `transform: translateY(1px)` or `scale(0.98)` — never both.
- **Focus.** 2 px gold outline, 2 px offset.

### Borders, shadows, radii

- **Hairlines** — 1 px `rgba(43,38,32,0.1)` on cards, `0.08` on inverted surfaces.
- **Shadow scale** — `--shadow-sm` (lift), `--shadow-md` (card, fact chip), `--shadow-lg` (modal, overlay). Never shadow on type.
- **Radii** — `0` editorial; `2 / 4 / 8 / 14 / 28` px scale; `999 px` pill only on tags, chips, and primary buttons.

### Layout

- 12-column desktop grid at **1240 px** container, **28 px** gutter, **120 px** vertical section padding.
- Narrow-container option at **920 px** for editorial copy.
- Generous white space. On print spreads the grid is broken — a full-bleed photograph runs beside a three-column headline.

### Component idioms

- **Buttons.** Pill radius. Primary = gold on paper. Secondary = stone on cream. Ghost = stone border 25 % on cream. Italic Cormorant "quiet link" with a terracotta underline for editorial calls-to-action.
- **Cards.** Paper on cream (default) or stone on cream (inverse). 14 px radius. `--shadow-sm`. Eyebrow-dot tag above heading. Color-coded dots: sage (DTS), gold (event), terra (One Korea).
- **Tags.** Inter 500, `0.14em` tracking, uppercase, 999 px pill. Fill variants gold / sage / terra / blush / stone; outline variant with 1 px hairline.
- **Fact chips.** A small paper pill (`--shadow-md`) holding a Cormorant number + Inter label — used floated off hero imagery for a single biographical or financial fact.
- **Forms.** Inter 15 px input, 2 px radius, gold focus ring, italic Cormorant helper copy.

---

## Iconography

The brand does not lean on iconography. The only distinctive mark is the **official logo** — four lockups (horizontal/vertical wordmarks + YC icon lockups) in `assets/logos/`. Use the PNG files directly.

When UI needs icons (chevrons, mail, play), **Lucide** (`https://unpkg.com/lucide@latest`) at stroke-width 1.5, stone or sage. This is a substitution flagged for the user — the brand has not adopted an icon system.

Unicode ornaments permitted: `·` (middle dot), `—` (em dash). That is all.

---

## UI kits

- **`ui_kits/marketing_site/`** — ywamchateau.com landing surface. Hero (bilingual with `handline` on "Korea"), Mission, Community grid, Programs cards, Train/Vision, Stories, FAQ, Next Steps, Stats, Apply/Footer.

Slides are in `slides/` — see each file; templates are Title, Section, Content, Quote, Closing.

---

## Substitutions flagged

- **Noto Serif KR / Noto Sans KR** as Korean serif + sans. If a premium Korean family is licensed in production (Sandoll Myeongjo, Pretendard Serif, Ridibatang), drop the files in `fonts/` and update `--font-serif-ko` / `--font-sans-ko`.
- **Lucide** as UI iconography stand-in.

## Caveats

- No production website code was available; the marketing-site kit is extrapolated from the reference landing comp + print and social deliverables.
- Placeholder imagery is used throughout `preview/`. For publishable artifacts, drop real photography into `assets/photos/`.
- **Bona Nova / Bona Title / Bona Sforza** were explored earlier and have been fully retired. Ignore any lingering references; the canonical type stack is Cormorant + Inter + Noto.
