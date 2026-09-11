# Sanlam Design System

A brand-accurate design system for **Sanlam** — one of Africa's largest financial services groups (life insurance, investments, retirement, wealth and short-term cover), founded in 1918 and headquartered in Bellville, Cape Town, South Africa. This system provides the colours, typography, iconography, reusable UI components and product UI kits needed to build well-branded Sanlam interfaces, prototypes and marketing assets.

Sanlam's brand promise centres on planning for the future and *"Live wealthily"* — warm, human, optimistic and trustworthy. Campaign lines like **#NowIsTheTimeToPlan** pair bold blue hashtag headlines with photography of real, everyday people.

## Sources provided

This system was built from a small set of official brand assets supplied by the user (no codebase or Figma file was provided):

- **Logos** — full lockup (mark + wordmark) and symbol-only mark, in blue and white, as SVG + PNG.
- **Campaign imagery** — a `#NowIsTheTimeToPlan / Now is not the time to give up on your dreams.` lifestyle banner (`assets/campaign-banner.jpeg`).
- **Brand colours** (from the supplied guideline table):
  - Lochmara `#0075C9` — primary blue
  - Congress Blue `#003D88` — deep secondary blue
  - White `#FFFFFF`

Because no interactive product source (codebase / Figma) was provided, the reusable components and the product UI kit are a **standard financial-services component set and a representative client-portal recreation**, styled entirely from the brand assets and colours above. They are faithful to the brand but are not reverse-engineered from a specific Sanlam application. Treat them as a strong, on-brand starting point and refine against real product screens when available.

---

## CONTENT FUNDAMENTALS

How Sanlam writes:

- **Voice:** warm, encouraging, human and grounded. Sanlam speaks like a trusted adviser — confident but never boastful, plain-spoken but never casual to the point of flippancy.
- **Person:** addresses the customer directly as **"you" / "your"** ("Manage your cover", "You're covered for R2m"). Refers to itself as **"we"** sparingly. First-person plural is used for service promises ("We'll be in touch within 48 hours").
- **Casing:** **sentence case** for headlines, body and buttons ("Get a quote", "Now is the time to plan"). Product names are Title Case ("Retirement Annuity", "Sanlam Online"). AVOID ALL-CAPS except tiny overlines/labels.
- **Tone by context:** aspirational and emotive in marketing ("Live wealthily", "Now is not the time to give up on your dreams"); clear, reassuring and precise in-product ("Your premium is due in 3 days", "Terms and conditions apply. Returns are not guaranteed.").
- **Numbers & money:** South African Rand, formatted `R 1,250.00` / `R 248,900` / `R 3.2m`. Percentages for growth (`+8.4% YTD`). Use tabular/monospace figures for aligned financial data.
- **Hashtag headlines:** campaign hero lines often use a compound hashtag in bold blue (`#NowIsTheTimeToPlan`) with a plain-language sub-line beneath.
- **Emoji:** **not used.** Iconography carries visual meaning instead.
- **Compliance:** financial copy carries disclaimers ("Sanlam Life Insurance Ltd is a licensed financial services provider", "Terms and conditions apply") — keep them present but quiet (small, muted).
- **Vibe:** optimistic, planning-oriented, inclusive of all life stages (young families, small-business owners, retirees, graduates — as seen in the campaign imagery).

Example phrases: *"Now is the time to plan."* · *"Cover for what matters."* · *"Grow your wealth with confidence."* · *"Talk to a Sanlam adviser."*

---

## VISUAL FOUNDATIONS

**Colour.** Two brand blues do the heavy lifting: **Lochmara `#0075C9`** (primary — buttons, links, active states, the mark) and **Congress Blue `#003D88`** (deep — gradients, dark panels, emphasis). White is the dominant surface. Everything else is a cool, slightly blue-shifted neutral grey ramp so greys never clash with the blues. Semantic colours (green success, amber warning, red error, blue info) are muted and desaturated to sit calmly next to the brand blue. Backgrounds are white or a very light grey (`--surface-page`); brand blue is used in confident full-bleed blocks, never as timid tints on everything. Max 1–2 background colours per layout.

**Typography.** Sanlam's corporate typeface is the custom **"Sanlam Sans"** (not publicly available). This system substitutes **Mulish** (Google Fonts) — a rounded humanist sans that echoes the open, friendly terminals of the Sanlam wordmark — for all display and UI text, with **Roboto Mono** for tabular financial figures. Headlines are heavy (Extrabold 800 / Black 900) and set tight; body is Regular 400 at a comfortable 1.5 line-height. Type scale is a 1.2 minor-third ramp on a 16px base. ⚠️ *Substitution — replace with real Sanlam Sans font files when available.*

**Spacing & layout.** 4px base grid (`--space-*`). Generous whitespace; content max-widths around 1000–1120px in-app. Cards and sections breathe. Fixed app chrome: left sidebar (244px) + top bar (68px).

**Backgrounds & imagery.** Warm, candid photography of real people across life stages — never stock-stiff. Images are treated with a **blue duotone / Lochmara→Congress overlay**, often a **left-to-right protection gradient** (`rgba(0,61,136,.85) → transparent`) so white headline text stays legible. Brand blocks use a `135°` Lochmara→Congress gradient. No heavy textures, no patterns, no hand-drawn illustration.

**Corner radii.** Moderate, friendly rounding — inputs/buttons/cards at `10px` (`--radius-md`), larger surfaces `16px` (`--radius-lg`), pills for tags/badges/switches. Never sharp-cornered, never fully circular except avatars and the mark.

**Shadows / elevation.** Soft, low-spread, **cool blue-grey** shadows (`rgba(16,35,58,…)`) — subtle for resting cards (`--shadow-sm`), deeper on hover/modals. No hard drop shadows, no glows.

**Borders.** Hairline `1px` cool-grey borders (`--border-subtle/-default`) define cards, inputs and dividers. A `3px` Lochmara **top accent bar** flags featured cards. Focus rings are a `3px` translucent Lochmara halo (`--shadow-focus`).

**Cards.** White surface, `1px` subtle border, `16px` radius, soft `sm` shadow. Optional top accent bar. Interactive cards lift `-2px` and deepen their shadow on hover. NOT rounded-corner-with-colored-left-border-only (avoid that trope).

**Motion.** Restrained and functional. Fades and short slides (120–320ms) on a standard ease (`cubic-bezier(0.2,0,0.2,1)`); modals pop in with a slight rise+scale. Buttons nudge `1px` down on press. No bounces, no springy overshoot.

**States.** Hover: primary buttons darken to `--sl-blue-700`; secondary/ghost fill with `--sl-blue-50`. Press: darken further + 1px down-nudge. Disabled: 50% opacity, `not-allowed`. Selected (tags/tabs): brand-blue tint + bold weight.

**Transparency & blur.** Used only for the modal scrim (`rgba(16,35,58,0.45)` + `2px` blur) and image protection gradients. UI surfaces themselves are opaque.

---

## ICONOGRAPHY

- No icon set was supplied with the brand assets. Sanlam's UI uses **clean, single-weight linear icons**; this system standardises on **[Lucide](https://lucide.dev)** (2px stroke, round caps/joins) as the closest open match. ⚠️ *Substitution flagged — swap for Sanlam's own icon set if one exists.*
- Icons are delivered through the **`Icon`** component, which fetches real Lucide SVG art from the `lucide-static` CDN and inherits colour via `currentColor`. Nothing is hand-drawn. Use kebab-case names (`shield`, `pie-chart`, `credit-card`, `umbrella`, `chevron-right`).
- Common product glyphs: `shield` (cover), `umbrella` (life), `pie-chart`/`trending-up` (investments), `car` (short-term), `heart` (funeral), `credit-card` (payments), `file-text` (claims/docs), `graduation-cap` (education).
- **Emoji are never used.** Unicode arrows (`▲`/`→`) appear only inline within number/label text, not as UI icons.
- **Logos** live in `assets/` as SVG (scalable, preferred) and PNG: full lockup and mark, each in blue / white (plus a Congress-blue full lockup). Use the `Logo` component. Never recolour, stretch, or reconstruct the mark.

---

## Index / manifest

Root files:
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `assets/` — logos (`logo-full-{blue,white,congress}.svg/png`, `logo-mark-{blue,white}.svg`, `logo-full-blue.png` etc.) and `campaign-banner.jpeg`.
- `guidelines/` — foundation specimen cards (Colours, Type, Spacing, Brand) shown on the Design System tab.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skills-compatible entry point.

### Components (`components/<group>/`)
Reusable primitives, exported under the compiled namespace. All are authored from the brand foundations (no external source defined an inventory).

- **brand/** — `Logo`, `Icon`
- **forms/** — `Button`, `IconButton`, `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- **data-display/** — `Card` (+ `CardHeader`), `Badge`, `Tag`
- **feedback/** — `Alert`, `Dialog`, `Toast`, `Tooltip`
- **navigation/** — `Tabs`

**Intentional additions** (not from a source inventory, added for a usable financial-services kit): `Logo` and `Icon` (brand/glyph wrappers — needed to use the supplied logo assets and the Lucide set on-brand), and `Alert` (inline status banner — financial products lean heavily on renewal/payment/compliance notices).

### UI kits (`ui_kits/<product>/`)
- **portal/** — *Sanlam Online*, the client self-service portal. Interactive click-through: **Login → Dashboard (policies, portfolio, quick actions) → Cover detail**. Files: `index.html`, `Shell.jsx` (sidebar + top bar), `LoginScreen.jsx`, `DashboardScreen.jsx`, `CoverDetailScreen.jsx`.

---

## Caveats / to refine
- **Fonts substituted** (Mulish → Sanlam Sans). Please supply real font files.
- **Icon set substituted** (Lucide). Swap if Sanlam has a proprietary set.
- Components & the portal kit are brand-styled standards, **not** recreated from a live Sanlam product. Share real product screens or a Figma/codebase to make the kit pixel-exact.
