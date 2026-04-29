# YWAM Château — Design System

Canonical source of truth for the YWAM Château brand: tokens (color, type, spacing), fonts, logo lockups, and visual reference docs. This repo is the **upstream**. Project repos consume snapshots of it.

If you want to read the brand voice / typography / palette philosophy, see **[BRAND-GUIDE.md](./BRAND-GUIDE.md)** in this repo.

---

## What's in here

```
design-system/
├── README.md                     ← this file (repo intro)
├── BRAND-GUIDE.md                ← brand voice, palette, type — the prose
├── colors_and_type.css           ← THE source of truth for design tokens
├── assets/
│   ├── fonts/                    ← display fonts for posters/slides (travel-poster-sans/script)
│   └── logos/                    ← 12 logo SVG variants (horizontal/vertical × black/green/white × icon/full)
├── fonts/
│   ├── NotoSansKR-VariableFont_wght.ttf   ← variable Korean sans (10 MB)
│   └── NotoSerifKR-VariableFont_wght.ttf  ← variable Korean serif (24 MB)
├── design-system.html            ← rendered design system reference (open in browser to see all tokens, colors, type, logos)
├── preview/                      ← per-component reference HTML pages (buttons, cards, type-bilingual, etc.)
├── slides/                       ← presentation slide templates (Title, Section, Content, Quote, Closing)
├── ui_kits/marketing_site/       ← extrapolated marketing-site reference (before the real ywamchateau.com existed)
├── tweaks-app.jsx
├── tweaks-panel.jsx              ← React components for the runtime tweaks panel
├── tweaks.css
└── SKILL.md                      ← Claude Skill manifest (used by Claude Design)
```

---

## How project repos consume this

Each project (e.g., `ywam-chateau-site`) keeps its **own** snapshot of the bits it needs. The canonical source is here, but projects don't pull at runtime — they snapshot at build/edit time. Reasons:

1. **Build performance.** No runtime fetch of 33 MB of fonts.
2. **Stability.** Project doesn't break if this repo is mid-edit.
3. **Auditable.** Each project shows exactly which design system version it's using.

Current snapshot relationships:

| Project | What it snapshots from this repo | When to re-sync |
|---|---|---|
| `ywamchateau/ywam-chateau-site` | `colors_and_type.css` → `src/styles/tokens.css` (with WAW-specific additions for `--lang-dim-*` and `--border-inverse-*`) | When new tokens are added or values change here |
| `ywamchateau/ywam-chateau-site` | `fonts/NotoS*.ttf` → subset to `public/fonts/NotoS*.woff2` | When source fonts change (rare) |
| `ywamchateau/ywam-chateau-site` | `assets/logos/*.svg` → inlined in `Header.astro` and `Footer.astro` | When logo files change |

---

## Quick access for any Claude Code session

If you're in a Claude Code chat working on a YWAM Château project and you need to reference or pull from the design system, ask Claude:

> *"Clone the design system to /tmp and tell me what's in it."*

Claude will run `gh repo clone ywamchateau/design-system /tmp/design-system` (you have `gh` set up from the team-onboarding flow) and have local access to all files in ~5 seconds.

Or for a one-off file:

> *"Show me the latest `colors_and_type.css` from the design-system repo."*

Claude can use `gh api` or curl raw GitHub URLs to fetch a single file without cloning.

---

## How updates flow

1. Someone iterates the design system in **Claude Design** (claude.ai/design)
2. They export the bundle (zip) and save to `~/Downloads/`
3. Open Claude Code at this repo, say *"update from `~/Downloads/<filename>.zip`"*
4. Claude follows **[UPDATE.md](./UPDATE.md)** — extracts, diffs, surfaces changes for review, applies, commits, optionally tags a version
5. Each project repo decides when to re-sync its snapshot. Usually:
   - For new colors/spacing tokens → re-sync `tokens.css`
   - For new logo variant → update the inline SVG
   - For new font weight → re-subset Korean
6. The project commits the updated snapshot with a message like `chore: sync design tokens to design-system v1.2`

The full step-by-step procedure for updating this repo is in **[UPDATE.md](./UPDATE.md)** — it's a runbook Claude follows so updates are consistent.

---

## What this repo is NOT

- ❌ A package (no `package.json`, not on npm) — keeps it tooling-free
- ❌ A live runtime dependency — projects don't fetch from here at request time
- ❌ The brand book — though `BRAND-GUIDE.md` covers brand voice, the strategy brief in Google Drive is the canonical brand strategy

---

## License / use

Internal use within YWAM Château and YWAM partners. Brand and visual identity © YWAM Château. The Korean Noto fonts are open source under the SIL Open Font License (originals from Google Fonts via fontsource).

---

## When something here changes that affects a live project

The team admin should:

1. Push the change to this repo
2. Open an issue or message the relevant project owners ("design system updated — please re-sync tokens at your next deploy")
3. The project owners ask their Claude Code session to re-sync (Claude knows the snapshot map above)
4. Each project ships the resync as a normal Lane 2 (test first) commit because token changes are visual

---

For detailed brand voice, type, palette, and component idioms — see [**BRAND-GUIDE.md**](./BRAND-GUIDE.md).
