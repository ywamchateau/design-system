# Updating this repo when Claude Design produces a new bundle

The design system evolves. Claude Design is where iteration happens; this repo is where the evolved version lives so projects can reference it.

When a new export arrives, here's the procedure. **For Vince:** download the new zip, then ask Claude Code to *"update the design-system repo from this zip"* and point it at the file. Claude will follow the steps below.

---

## What the user does

1. In Claude Design, export the latest design system bundle (Share → Export → download zip)
2. Save the zip to your `~/Downloads/` folder
3. Open Claude Code at `~/Documents/GitHub/design-system`
4. Tell Claude: *"update from `/Users/<your-name>/Downloads/<filename>.zip`"*

That's it from your side. The Claude session does the rest.

---

## What Claude Code does (the actual procedure)

This is a runbook. Future Claude sessions: follow these steps when asked to update the design system.

### 1. Verify the zip is valid

```bash
unzip -l "$ZIP_PATH" | head -20
```

Confirm it looks like a YWAM Château design system bundle (should have `colors_and_type.css`, `assets/logos/`, `fonts/`, `preview/`, etc.).

### 2. Extract to a temp location

```bash
mkdir -p /tmp/ds-update && cd /tmp/ds-update && unzip -q -o "$ZIP_PATH"
```

### 3. Compare against current repo

Run a diff to see what's actually changed. Critical files to inspect:

- `colors_and_type.css` — design tokens (most important diff)
- `assets/logos/*.svg` — logo files
- `fonts/*.ttf` — Korean fonts (rare changes)
- `preview/*.html` — component reference pages
- `design-system.html` — full reference

```bash
diff -q /tmp/ds-update/colors_and_type.css ~/Documents/GitHub/design-system/colors_and_type.css
diff -rq /tmp/ds-update/assets/ ~/Documents/GitHub/design-system/assets/
diff -rq /tmp/ds-update/fonts/ ~/Documents/GitHub/design-system/fonts/
```

For `colors_and_type.css`, also do a content diff (the user should see actual token changes):

```bash
diff -u ~/Documents/GitHub/design-system/colors_and_type.css /tmp/ds-update/colors_and_type.css
```

**Show the user a plain-English summary of changes:** "New token added: `--terra-deep`. Existing token changed: `--gold` from #C8922A → #C49025. New logo variant: `assets/logos/icon-horizontal-cream.svg`. Otherwise unchanged."

Wait for user confirmation before applying.

### 4. Trim non-canonical content

The Claude Design zip includes drafts, screenshots, and mega-files we don't keep. Always strip these before copying:

```bash
cd /tmp/ds-update
rm -rf scraps/ uploads/ screenshots/
rm -f "YWAM Chateau Design System.html"        # 15+ MB self-contained ref, rebuildable
rm -f design-system-standalone.html             # build artifact
rm -f design-system-print.html                  # build artifact
```

### 5. Preserve repo-specific files

The zip may overwrite our custom `README.md`. Before copying:

```bash
# Preserve our top-level repo README and any *.md files we created
cp ~/Documents/GitHub/design-system/README.md /tmp/ds-update-preserve-README.md
cp ~/Documents/GitHub/design-system/BRAND-GUIDE.md /tmp/ds-update-preserve-BRAND-GUIDE.md 2>/dev/null || true
cp ~/Documents/GitHub/design-system/UPDATE.md /tmp/ds-update-preserve-UPDATE.md
```

The zip's original `README.md` is the brand guide. After copying the zip contents, restore our preserved files:

```bash
mv /tmp/ds-update/README.md /tmp/ds-update/BRAND-GUIDE.md   # zip's README → BRAND-GUIDE
cp /tmp/ds-update-preserve-README.md /tmp/ds-update/README.md
cp /tmp/ds-update-preserve-UPDATE.md /tmp/ds-update/UPDATE.md
```

### 6. Sync to the repo

Use `rsync` so we get clean overwrites without leaving stale files:

```bash
rsync -av --delete \
  --exclude='.git' \
  --exclude='README.md' \
  --exclude='UPDATE.md' \
  /tmp/ds-update/ ~/Documents/GitHub/design-system/
```

The `--exclude` flags protect our custom files. The `--delete` removes anything in the repo that's no longer in the new zip (so deprecated assets disappear cleanly).

### 7. Review final diff

```bash
cd ~/Documents/GitHub/design-system
git status
git diff --stat
git diff colors_and_type.css   # show token changes
```

Surface any surprises to the user before committing.

### 8. Commit with a meaningful message

```bash
git add -A
git commit -m "chore: sync design system from <date> Claude Design export

Changes:
- <list actual diffs from step 3 / 7>

Source zip: <filename>"
```

### 9. Tag if it's a meaningful version bump

```bash
git tag -a v1.x -m "Design system v1.x — <one-line summary>"
git push origin main
git push origin v1.x
```

If the changes are minor/incremental, skip the tag.

### 10. Notify project repos

Tell the user which projects need to re-sync their snapshots. Consult the table in `README.md` ("How project repos consume this") and surface specifically:

- If `colors_and_type.css` changed → `ywamchateau/ywam-chateau-site/src/styles/tokens.css` needs re-sync
- If logo SVGs changed → inline SVGs in Header.astro / Footer.astro need updating
- If fonts changed → re-subset Korean for `public/fonts/`

The user can then open a Claude Code session in the project repo and say *"sync design tokens to the latest design-system version"*.

---

## Rollback

If a sync goes badly (broken token, missing file, etc.), rollback is `git revert`:

```bash
cd ~/Documents/GitHub/design-system
git log --oneline -5     # find the bad commit hash
git revert <hash>        # creates a new commit reversing the bad one
git push origin main
```

Project repos that already re-synced from the bad version need to revert their token snapshots too. This is rare — the worst-case is a token typo, fixed in 2 minutes.

---

## What NOT to put in this repo

- Source zip files themselves (they're huge, stored in /Downloads or shared Drive)
- Project-specific tokens (those live in each project's `tokens.css`)
- Photos / image library (those live in project `public/photos/` per-project)
- Strategy brief or copywriting (Google Drive)

This repo is for **brand and design system canonical assets only.**
