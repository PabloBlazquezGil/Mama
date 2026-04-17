# Design System Specification: Ortega Open Music

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Proscenium"**

This design system moves beyond the static, templated nature of traditional school websites to embrace the dynamism of the stage. The "Digital Proscenium" philosophy treats the browser window as a theatrical stage—defined by deep layering, spotlight-driven focus, and a sophisticated editorial rhythm. 

We reject the "boxed-in" layout. Instead, we use intentional asymmetry, overlapping "backstage" and "front-of-house" elements, and high-contrast typography to evoke the energy of a live performance. This system balances the prestige of a professional conservatory with the warmth of a community-driven musical theater association.

---

## 2. Colors & Tonal Depth
The palette is a modern interpretation of theatrical lighting: the dramatic red of the velvet curtain, the golden glow of house lights, and the deep, infinite blues of a stage wash.

### Core Palette (Material Design Tokens)
- **Primary (`#750003`):** The "Curtain Red." Used for high-impact actions and brand presence.
- **Secondary (`#2c5fa0`):** The "Stage Wash." A deep, professional blue for supporting elements and digital-first interactions.
- **Tertiary (`#735c00`):** The "Limelight Gold." Reserved for accents, highlighting excellence, and "Golden Moment" notifications.
- **Surface (`#fcf9f8`):** An off-white, "fine paper" base that prevents the clinical feel of pure hex white.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning. 
Boundaries must be defined solely through background color shifts. To separate a section, transition from `surface` to `surface-container-low`. For a highlighted sidebar, use `surface-container-high`. This creates a seamless, high-end editorial feel rather than a "table-based" look.

### Signature Textures
- **The Gradient Soul:** For Hero backgrounds and Primary CTAs, use a subtle linear gradient from `primary` (`#750003`) to `primary-container` (`#9e090b`). This adds a "velvet" dimension that flat color cannot replicate.
- **Glassmorphism:** Navigation bars and floating playbills (modals) should utilize `surface_variant` at 70% opacity with a `20px` backdrop-blur. This suggests the transparency and layering of stage sets.

---

## 3. Typography
The typographic pairing is a dialogue between tradition and modernity.

- **The Headliner (Noto Serif):** Used for `display-`, `headline-`, and `title-` scales. This serif mimics playbill typography—authoritative, elegant, and timeless. Use `display-lg` (3.5rem) with tight letter-spacing for a dramatic, editorial "Stage Presence."
- **The Ensemble (Plus Jakarta Sans):** Used for `body-` and `label-` scales. This geometric sans-serif provides the "Modern" counterweight. It is exceptionally legible for rehearsal schedules and program notes.

**Hierarchy Strategy:**
Always lead with a `display-md` headline in Noto Serif, followed by a `title-md` in Plus Jakarta Sans to create a clear "Star vs. Supporting Cast" visual hierarchy.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop"; we use color and light to create "place."

### The Layering Principle
Depth is achieved by stacking surface-container tiers. 
- **Floor (Background):** `surface` (`#fcf9f8`)
- **Stage (Section):** `surface-container-low` (`#f6f3f2`)
- **Prop (Card/Element):** `surface-container-lowest` (`#ffffff`)

This "reverse lift" (making the card the lightest element) creates a soft, natural glow reminiscent of a spotlight hitting a performer.

### Ambient Shadows
Where floating is necessary (e.g., a "Buy Tickets" FAB), use an extra-diffused shadow:
- **Blur:** 32px
- **Opacity:** 6%
- **Color:** Tinted with `on_surface` (`#1c1b1b`) to avoid a "muddy" grey look.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a "Ghost Border": `outline-variant` (`#e3beb9`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons: The Call to Action
- **Primary:** `primary` background, `on_primary` text. Use `rounded-md` (0.75rem) to maintain a modern edge. Apply a subtle `primary-container` glow on hover.
- **Secondary:** Glassmorphic style. Semi-transparent `secondary_container` with a backdrop-blur. No border.

### Cards: The Playbills
- **Style:** Forbid divider lines. Use `vertical white space` (24px - 32px) to separate content.
- **Structure:** `surface-container-lowest` background on a `surface-container-low` section. Use `notoSerif` for the title and `plusJakartaSans` for the metadata (dates/times).

### Inputs: The Script Fields
- **Background:** `surface_container_high`.
- **Active State:** Instead of a heavy border, use a 2px `tertiary` (Gold) bottom-border only, suggesting a line in a script.

### Chips: The Credits
- Use `secondary_fixed_dim` for "Role" chips (e.g., "Actor," "Tech") to create a soft, professional tag that doesn't compete with the main action.

### The "Performance" Progress Bar
- For donation goals or ticket sales, use a gradient from `tertiary` to `primary`. This links the joy of the performance to the practical needs of the association.

---

## 6. Do’s and Don’ts

### Do:
- **Use Intentional Asymmetry:** Align a headline to the left but place the supporting body text in a narrower column to the right.
- **Embrace White Space:** Treat white space as "The Silence in the Theater"—it gives the performance room to breathe.
- **Layer Elements:** Allow images of performers to slightly overlap the edge of a `surface-container`, breaking the "grid" and adding movement.

### Don’t:
- **Never use 100% Black:** Use `on_surface` (`#1c1b1b`) for text. It’s softer and more sophisticated.
- **Avoid Boxy Buttons:** Use the `rounded-md` or `full` scale. Sharp 90-degree corners feel too corporate and "legal," not "creative."
- **No Divider Lines:** If you feel the urge to add a horizontal rule, try adding 16px of extra padding instead.

---

**Signature Note:** This design system is not a set of constraints, but a stage. Every element should feel like it was placed with the same intentionality as a lighting cue or a costume choice. Maintain the drama; keep the warmth.