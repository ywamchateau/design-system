/* Tweaks for the YWAM Château design system.
   Three controls that reshape the FEEL of the document, not pixel knobs.

   ── mood ─────────── chateau / cellar / cloister
       Swaps the page foundation: surface, ink, primary accent, and the section
       header gradient. Everything that uses --cream / --stone / --moss-deep
       cascades automatically because those are the variables every component
       already reads from.

   ── voice ────────── editorial / poster / script
       The italic-accent word is the brand's signature. This control swaps
       the typeface and style of every <em> across the doc — Cormorant italic
       (default), Travel Poster Sans upright (modernist), Travel Poster Script
       (handwritten, intimate).

   ── density ──────── spacious / editorial / plaque
       Reshapes the rhythm of the whole document — page padding, section
       spacing, headline scale. "Plaque" feels like a museum label.
*/

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "mood": "chateau",
  "voice": "editorial",
  "density": "spacious"
}/*EDITMODE-END*/;

function TweaksApp() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks as attributes on <html> so CSS in <head> picks them up.
  React.useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-mood", tweaks.mood);
    root.setAttribute("data-voice", tweaks.voice);
    root.setAttribute("data-density", tweaks.density);

    // Cellar mood: swap green/black brand-mark SVGs to their white siblings.
    // CSS can't change <img src>, so do it imperatively. Stash the original
    // src on first run so other moods can restore it.
    const logos = document.querySelectorAll('img[src*="assets/logos/"]');
    logos.forEach((img) => {
      if (!img.dataset.origSrc) img.dataset.origSrc = img.getAttribute("src");
      const orig = img.dataset.origSrc;
      if (tweaks.mood === "cellar") {
        const swapped = orig
          .replace(/-green\.svg$/, "-white.svg")
          .replace(/-black\.svg$/, "-white.svg");
        if (img.getAttribute("src") !== swapped) img.setAttribute("src", swapped);
      } else {
        if (img.getAttribute("src") !== orig) img.setAttribute("src", orig);
      }
    });
  }, [tweaks.mood, tweaks.voice, tweaks.density]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Mood — surface · ink · accent">
        <TweakRadio
          label="Palette"
          value={tweaks.mood}
          onChange={(v) => setTweak("mood", v)}
          options={[
            { value: "chateau",  label: "Chateau" },
            { value: "cellar",   label: "Cellar" },
            { value: "cloister", label: "Cloister" }
          ]}
        />
      </TweakSection>

      <TweakSection label="Voice — the accent word">
        <TweakRadio
          label="Style"
          value={tweaks.voice}
          onChange={(v) => setTweak("voice", v)}
          options={[
            { value: "editorial", label: "Editorial" },
            { value: "poster",    label: "Poster" },
            { value: "script",    label: "Script" }
          ]}
        />
      </TweakSection>

      <TweakSection label="Density — page rhythm">
        <TweakRadio
          label="Spacing"
          value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "spacious",  label: "Spacious" },
            { value: "editorial", label: "Editorial" },
            { value: "plaque",    label: "Plaque" }
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

const __tweaksRoot = document.getElementById("tweaks-root");
if (__tweaksRoot) {
  ReactDOM.createRoot(__tweaksRoot).render(<TweaksApp />);
}
