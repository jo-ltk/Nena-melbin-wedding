# Nena & Melbin — Wedding Website Design System

This document defines the core typography, spacing, color, component patterns, and animation standards for the Nena & Melbin wedding website. Every section, every component, every micro-detail must feel like it came from the same hand — cinematic, devotional, and ultra-premium.

**Design Identity**: Luxury Christian wedding aesthetic. Deep burgundy, warm cream, and aged gold. Cormorant Garamond as the soul. Cinzel for ceremony. Jost for clarity. Inspired by heirloom invitation cards — tactile, sacred, timeless.

---

## 1. Typography Scale

Always load these fonts via Google Fonts in `layout.tsx`:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Cinzel:wght@400;500&family=Jost:wght@300;400;500&display=swap');
```

| Element | Font | Weight | Size (CSS clamp) | Additional Styles | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Names** | Cormorant Garamond | 300 italic | `clamp(3rem, 7vw, 6rem)` | `leading-[1.05]`, `tracking-[-0.01em]` | The centrepiece — always italic, always light |
| **Section Headline (h2)** | Cormorant Garamond | 300 | `clamp(2.5rem, 5vw, 4.5rem)` | `leading-[1.05]`, `tracking-tight` | Can use italic for an em-word |
| **Sub-headline (h3)** | Cormorant Garamond | 400 italic | `clamp(1.6rem, 3vw, 2.5rem)` | `leading-[1.15]` | Story cards, family names |
| **Eyebrow / Section Label** | Cinzel | 400 | `0.6rem` | `uppercase`, `tracking-[0.3em]`, `text-gold` | Before every headline — always Cinzel |
| **Section Counter** | Cinzel | 400 | `0.55rem` | `uppercase`, `tracking-[0.2em]`, `opacity-50` | e.g. `01 / 02` — top right of section |
| **Body Text** | Cormorant Garamond | 400 | `clamp(1rem, 1.4vw, 1.15rem)` | `leading-[1.75]`, `text-muted` | All descriptive paragraphs |
| **UI Text / Labels** | Jost | 300–400 | `0.85rem–1rem` | `leading-[1.6]` | Form labels, address lines, captions |
| **Buttons** | Cinzel | 400 | `0.65rem` | `uppercase`, `tracking-[0.25em]` | All CTAs — never Cormorant for buttons |
| **Annotation / Metadata** | Jost | 300 | `0.75rem` | `italic`, `opacity-60` | Family addresses, footnotes |
| **Countdown Numbers** | Cormorant Garamond | 300 | `clamp(3rem, 6vw, 4.5rem)` | `leading-[1]`, `text-gold-light` | Timer digits only |
| **Countdown Labels** | Cinzel | 400 | `0.55rem` | `uppercase`, `tracking-[0.25em]`, `opacity-60` | "Days", "Hours", etc. |
| **Quote / Bible Verse** | Cormorant Garamond | 300 italic | `clamp(1.1rem, 2vw, 1.4rem)` | `leading-[1.9]`, `text-center` | Invitation and verse blocks |

---

## 2. Color Palette Tokens

Define all tokens as CSS custom properties in `globals.css`. **Never introduce a color outside this set.**

```css
/* globals.css */
:root {
  /* Backgrounds */
  --cream:       #faf6f0;   /* Primary light bg — warm linen */
  --ivory:       #f5ede0;   /* Secondary light bg — invitation feel */
  --parchment:   #ede0cc;   /* Tertiary warm bg — families section */
  --burgundy:    #4a1428;   /* Primary dark bg — ceremony, RSVP, nav-dark */
  --burgundy-mid:#6b2040;   /* Gradient mid — radial backgrounds */
  --charcoal:    #1a1410;   /* Deepest dark — gallery, footer */

  /* Text */
  --text-primary: #1a1410;  /* Headings on light backgrounds */
  --text-muted:   #7a6050;  /* Body / secondary on light */
  --text-cream:   #faf6f0;  /* Headings on dark backgrounds */
  --text-cream-muted: rgba(250, 246, 240, 0.55); /* Body on dark */

  /* Accent — Gold (used for borders, lines, labels, highlights) */
  --gold:        #b8956a;   /* Primary gold accent */
  --gold-light:  #d4b896;   /* Large numerals, monograms, light gold */
  --gold-dark:   #8a6a42;   /* Labels on cream, ghost button borders */

  /* Structural */
  --border-light: rgba(184, 149, 106, 0.22);  /* Cards and sections on cream */
  --border-dark:  rgba(184, 149, 106, 0.15);  /* Cards on dark/burgundy */
  --border-cream: rgba(250, 246, 240, 0.12);  /* Hairlines on charcoal */
}
```

**Usage Rules:**
- `--burgundy` and `--charcoal` are the only dark section backgrounds. Never mix them arbitrarily — burgundy for ceremony/RSVP/emotional, charcoal for gallery/footer/editorial.
- `--gold` is the accent — used for eyebrow labels, icon highlights, borders, countdown numbers, and divider lines. **Never fill a large shape with gold.**
- `--cream`, `--ivory`, `--parchment` alternate for light sections. Use them in order to create subtle rhythm without hard contrast.
- Never use `#000000` or `#ffffff`.

---

## 3. Spacing Scale

### Section Layout
- **Standard Vertical Padding**: `py-20 md:py-28` (light sections)
- **Spacious Vertical Padding**: `py-24 md:py-36` (hero, RSVP, story)
- **Horizontal Container Padding**: `px-6 md:px-12 lg:px-20`
- **Max Container Width**: `max-w-[1450px]` centered with `mx-auto`

### Gaps & Margins
- **Eyebrow → Headline**: `mb-3 md:mb-4`
- **Headline → Body**: `mt-4 md:mt-6`
- **Body → CTA**: `mt-8 md:mt-12`
- **Header block → Section Content**: `mb-12 md:mb-20`
- **Between section cards**: `gap-px` (hairline mosaic) or `gap-4 md:gap-6`
- **Card Internal Padding**: `p-6 md:p-10`
- **Form Field Spacing**: `gap-6 md:gap-8` between fields

### Grid Philosophy
All multi-column layouts use an **asymmetric 12-column grid**. Never use a 50/50 split.

```tsx
<div className="grid grid-cols-12 gap-6">
```

| Pattern | Left | Right | Use Case |
| :--- | :--- | :--- | :--- |
| **7 / 5** | `col-span-7` | `col-span-5` | Ceremony (image left, text right) |
| **5 / 7** | `col-span-5` | `col-span-7` | Reception (text left, image right) |
| **4 / 8** | `col-span-4` | `col-span-8` | Story label + content |
| **Full bleed** | `col-span-12` | — | Hero, gallery, countdown |
| **Centered offset** | `col-start-3 col-span-8` | — | Invitation quote, verse |

---

## 4. Component Patterns

### Eyebrow Label (Section Opener)
Used before every headline. Always Cinzel, uppercase, gold.

```tsx
<motion.span
  initial={{ opacity: 0, y: 8 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="block font-[Cinzel] text-[0.6rem] uppercase tracking-[0.3em] text-[var(--gold-dark)] mb-3"
>
  The Holy Sacrament
</motion.span>
```

### Section Headline
The primary heading of each section. Cormorant Garamond light. Optional italic emphasis on one word.

```tsx
<motion.h2
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="font-[Cormorant_Garamond] font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-[var(--charcoal)]"
>
  The <em>Ceremony</em>
</motion.h2>
```

### Gold Divider Line
Used after eyebrows or headlines to create visual breath. Never decorative for its own sake.

```tsx
<div className="w-12 h-px bg-[var(--gold)] my-6 opacity-70" />
```

For centered sections:
```tsx
<div className="w-12 h-px bg-[var(--gold)] my-6 mx-auto opacity-70" />
```

### Vertical Gold Line (Eyebrow Prefix)
A tall 1px line placed above the eyebrow label in detail sections.

```tsx
<div className="w-px h-10 bg-[var(--gold)] opacity-60 mb-4" />
```

### Section Counter
Top-right annotation showing position in the page. Subtle, never intrusive.

```tsx
<span className="font-[Cinzel] text-[0.55rem] uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-50">
  01 / 02
</span>
```

### Body Paragraph
All descriptive text. Cormorant Garamond regular, generous line-height.

```tsx
<p className="font-[Cormorant_Garamond] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.75] text-[var(--text-muted)]">
  With the blessing of the Almighty God and our parents...
</p>
```

For dark section body text:
```tsx
<p className="font-[Cormorant_Garamond] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.75] text-[var(--text-cream-muted)]">
```

### Bible Verse / Quote Block
Centered, italic, with optional left border for pull-quote variant.

```tsx
{/* Centered variant (Invitation section) */}
<blockquote className="max-w-[680px] mx-auto text-center">
  <p className="font-[Cormorant_Garamond] font-light italic text-[clamp(1.1rem,2vw,1.4rem)] leading-[1.9] text-[var(--charcoal)] opacity-80">
    "May your constant love be with us, Lord, as we put our hope in you."
  </p>
  <cite className="block mt-4 font-[Cinzel] text-[0.6rem] uppercase tracking-[0.25em] text-[var(--gold-dark)] not-italic">
    — Psalm 33:22
  </cite>
</blockquote>
```

---

## 5. Buttons & CTAs

All buttons use Cinzel font, sharp corners (`border-radius: 0`), and uppercase tracking. No rounded corners — ever.

### Primary CTA (Gold Fill)
Used in hero and RSVP. High contrast, commanding.

```tsx
<button className="
  font-[Cinzel] text-[0.65rem] uppercase tracking-[0.25em]
  bg-[var(--gold)] text-[var(--burgundy)]
  px-8 py-4 w-full
  border border-[var(--gold)]
  transition-all duration-300 ease-in-out
  hover:bg-[var(--gold-light)] hover:border-[var(--gold-light)]
  active:scale-[0.99]
">
  Confirm Attendance
</button>
```

### Ghost CTA (Outlined — Light Context)
Used on cream/ivory backgrounds.

```tsx
<a href="/contact" className="
  inline-block
  font-[Cinzel] text-[0.65rem] uppercase tracking-[0.25em]
  border border-[var(--gold-dark)] text-[var(--gold-dark)]
  px-7 py-3
  transition-all duration-300 ease-in-out
  hover:bg-[var(--burgundy)] hover:text-[var(--gold-light)] hover:border-[var(--burgundy)]
">
  Get Directions
</a>
```

### Ghost CTA (Outlined — Dark Context)
Used on burgundy or charcoal backgrounds.

```tsx
<a href="#rsvp" className="
  inline-block
  font-[Cinzel] text-[0.65rem] uppercase tracking-[0.25em]
  border border-[var(--gold-light)] text-[var(--gold-light)]
  px-7 py-3
  transition-all duration-300 ease-in-out
  hover:bg-[var(--gold)] hover:text-[var(--burgundy)] hover:border-[var(--gold)]
">
  RSVP Now
</a>
```

---

## 6. Image Patterns

All images: `object-fit: cover`, no border-radius, always inside an `overflow-hidden` wrapper.

### Standard Photo Panel (with Ken Burns hover)

```tsx
<div className="overflow-hidden w-full h-full">
  <img
    src="https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=1200&q=80&fit=crop"
    alt="Couple portrait"
    className="w-full h-full object-cover object-center
               transition-transform duration-[2000ms] ease-out
               hover:scale-[1.05]"
  />
</div>
```

### Hero Background (Ken Burns — CSS animation)

```css
@keyframes heroKen {
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
}
.hero-photo {
  animation: heroKen 20s ease-in-out infinite alternate;
}
```

### Gallery Tile (with gold overlay on hover)

```tsx
<div className="relative overflow-hidden group cursor-pointer">
  <img
    src={photo.url}
    alt={photo.alt}
    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-[1.05]"
  />
  <div className="absolute inset-0 bg-[var(--gold)] opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500" />
</div>
```

**Placeholder Couple Photos (Unsplash — replace with real photos before launch):**

| Slot | URL |
| :--- | :--- |
| Hero | `https://images.unsplash.com/photo-1606216794079-73bd3b01a7da?w=1800&q=80&fit=crop` |
| Ceremony panel | `https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80&fit=crop` |
| Reception panel | `https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&fit=crop` |
| Story 1 | `https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80&fit=crop` |
| Story 2 | `https://images.unsplash.com/photo-1583939411023-14783179e581?w=800&q=80&fit=crop` |
| Story 3 | `https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fit=crop` |
| Gallery 1–4 | `https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=700&q=80&fit=crop` |
| Gallery 5–8 | `https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=700&q=80&fit=crop` |

---

## 7. Animation Standards

Install Framer Motion: `npm install framer-motion`

### Scroll Reveal (Standard — used on all section content)

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  {/* content */}
</motion.div>
```

### Stagger Children (Section headers + card grids)

```tsx
<motion.div
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Slide In — Story Timeline (left/right alternating)

```tsx
{/* Left card */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
/>

{/* Right card */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
/>
```

### Page Load Stagger (Hero content — CSS keyframes)

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-el-1 { opacity: 0; animation: fadeUp 0.9s ease 0.4s forwards; }
.hero-el-2 { opacity: 0; animation: fadeUp 0.9s ease 0.6s forwards; }
.hero-el-3 { opacity: 0; animation: fadeUp 0.9s ease 0.8s forwards; }
.hero-el-4 { opacity: 0; animation: fadeUp 0.9s ease 1.0s forwards; }
.hero-el-5 { opacity: 0; animation: fadeUp 0.9s ease 1.2s forwards; }
```

### Countdown Tick Pulse

```tsx
<motion.span
  key={value}                    // Re-triggers on each value change
  initial={{ scale: 1.08, opacity: 0.6 }}
  animate={{ scale: 1,    opacity: 1 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
>
  {value}
</motion.span>
```

### Loader Line Grow

```css
@keyframes growLine {
  from { height: 0; }
  to   { height: 60px; }
}
.loader-line {
  width: 1px;
  background: var(--gold-light);
  animation: growLine 1.5s 0.6s ease forwards;
}
```

### Mobile Drawer Slide-In (Framer Motion)

```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[150] bg-[var(--burgundy)]"
    />
  )}
</AnimatePresence>
```

**Timing Reference:**

| Interaction | Duration | Easing |
| :--- | :--- | :--- |
| Button hover color | `300ms` | `ease` |
| Image hover scale | `2000ms` | `ease-out` |
| Scroll reveal | `700–900ms` | `[0.22, 1, 0.36, 1]` |
| Page load stagger step | `200ms` increments | `ease` |
| Countdown tick | `350ms` | `ease-out` |
| Mobile drawer | `500ms` | `[0.22, 1, 0.36, 1]` |
| Loader fade out | `800ms` | `ease` |
| Nav color transition | `500ms` | `ease` |

---

## 8. Global Architecture & Booking Flow

### URL Strategy
Every CTA links to the RSVP section with context parameters where applicable.

**Format**: `href="#rsvp?event=[ceremony|reception]"`

```tsx
{/* Hero CTA */}
<a href="#rsvp">RSVP Now</a>

{/* Ceremony-specific CTA */}
<a href="#rsvp?event=ceremony">Join Us for the Ceremony</a>

{/* Reception-specific CTA */}
<a href="#rsvp?event=reception">Join Us for the Reception</a>
```

### RSVP Form Flow
1. **Pre-fill**: Read `?event=` from URL and auto-select the event radio.
2. **Validation**: Require name + email at minimum before enabling submit.
3. **Success State**: Replace form with a thank-you panel (no page navigation).
4. **WhatsApp Handoff** (optional): On success, show a "Message Us on WhatsApp" button:
   ```tsx
   const waMessage = encodeURIComponent(`Hi! I'm ${name} and I've just RSVP'd for Nena & Melbin's wedding on 31 May 2026. Looking forward to celebrating with you!`);
   const waLink = `https://wa.me/91XXXXXXXXXX?text=${waMessage}`;
   ```
   Replace `91XXXXXXXXXX` with the family's WhatsApp number.

---

## 9. Decorative Elements

### Floral Corner SVG
Place at hero top-left and bottom-right. Gold, low opacity, non-interactive.

```tsx
<svg width="180" height="180" viewBox="0 0 180 180" fill="none"
  className="absolute top-0 left-0 opacity-[0.18] pointer-events-none">
  <path d="M10 10 Q 50 10 50 50 Q 50 90 90 90" stroke="#b8956a" strokeWidth="0.8" fill="none"/>
  <path d="M10 10 Q 10 50 50 50 Q 90 50 90 90" stroke="#b8956a" strokeWidth="0.8" fill="none"/>
  <circle cx="10" cy="10" r="3" fill="#b8956a" opacity="0.6"/>
  <circle cx="90" cy="90" r="3" fill="#b8956a" opacity="0.4"/>
  {/* Add more leaf curves as needed */}
</svg>
```

### Botanical Inline Divider
Between the invitation text and the verse. Centered, small.

```tsx
<svg width="80" height="24" viewBox="0 0 80 24" fill="none" className="mx-auto my-6 opacity-40">
  <line x1="0" y1="12" x2="28" y2="12" stroke="#b8956a" strokeWidth="0.8"/>
  <path d="M32 12 Q 40 4 48 12 Q 40 20 32 12Z" stroke="#b8956a" strokeWidth="0.8" fill="none"/>
  <line x1="52" y1="12" x2="80" y2="12" stroke="#b8956a" strokeWidth="0.8"/>
</svg>
```

### Gold Diamond Divider
Used between family columns and in the footer.

```tsx
<div className="flex items-center gap-4 my-6">
  <div className="flex-1 h-px bg-[var(--gold)] opacity-20" />
  <span className="text-[var(--gold)] opacity-40 text-xs">◆</span>
  <div className="flex-1 h-px bg-[var(--gold)] opacity-20" />
</div>
```

### Floating Petals (Footer Background Animation)

```css
@keyframes floatPetal {
  0%   { transform: translateY(0)   rotate(0deg);   opacity: 0.08; }
  50%  { transform: translateY(40px) rotate(12deg);  opacity: 0.05; }
  100% { transform: translateY(80px) rotate(-6deg);  opacity: 0; }
}

.petal { position: absolute; animation: floatPetal linear infinite; }
.petal-1 { left: 10%; top: 5%;  width: 12px; height: 20px; animation-duration: 18s; animation-delay: 0s; }
.petal-2 { left: 30%; top: 10%; width: 8px;  height: 14px; animation-duration: 22s; animation-delay: 3s; }
.petal-3 { left: 55%; top: 2%;  width: 10px; height: 17px; animation-duration: 20s; animation-delay: 6s; }
.petal-4 { left: 75%; top: 8%;  width: 9px;  height: 15px; animation-duration: 25s; animation-delay: 1s; }
.petal-5 { left: 88%; top: 15%; width: 11px; height: 18px; animation-duration: 17s; animation-delay: 8s; }
```

---

## 10. Form Field Pattern

All form fields use a **bottom-border-only** style. No full border, no border-radius.

```tsx
{/* Field wrapper */}
<div className="flex flex-col gap-1.5">
  <label className="font-[Cinzel] text-[0.55rem] uppercase tracking-[0.2em] text-[var(--gold)]">
    Full Name
  </label>
  <input
    type="text"
    placeholder="Your full name"
    className="
      bg-transparent
      border-0 border-b border-[var(--border-dark)]
      text-[var(--text-cream)] placeholder:text-[rgba(250,246,240,0.3)]
      font-[Jost] font-light text-[1rem]
      py-3 px-0
      outline-none
      focus:border-b focus:border-[var(--gold-light)]
      transition-colors duration-300
    "
  />
</div>
```

**Attendance Toggle Pills:**

```tsx
{['Yes, joyfully!', 'Regretfully unable'].map((option) => (
  <button
    key={option}
    onClick={() => setAttending(option)}
    className={`
      font-[Cinzel] text-[0.6rem] uppercase tracking-[0.2em]
      px-5 py-3 border transition-all duration-300
      ${attending === option
        ? 'bg-[var(--gold)] text-[var(--burgundy)] border-[var(--gold)]'
        : 'bg-transparent text-[var(--gold-light)] border-[var(--border-dark)] hover:border-[var(--gold)]'}
    `}
  >
    {option}
  </button>
))}
```

---

## 11. Section Backgrounds — Alternating Sequence

Follow this order top to bottom to maintain visual rhythm:

| Section | Background Token | Text Register |
| :--- | :--- | :--- |
| Hero | `--burgundy` (with photo overlay) | Light |
| Countdown | `--burgundy` | Light |
| Invitation / Verse | `--ivory` | Dark |
| Ceremony | `--cream` (text col) + image | Dark |
| Reception | `--burgundy` (text col) + image | Light |
| Our Story | `--cream` | Dark |
| Families | `--parchment` | Dark |
| Gallery | `--charcoal` | Light |
| Venue | `--cream` | Dark |
| RSVP | `--burgundy` (radial gradient) | Light |
| Footer | `--charcoal` | Light |

---

## 12. Navigation Behaviour

**Two states — controlled by scroll position (threshold: 80px):**

```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);
```

| Property | Default (over hero) | Scrolled |
| :--- | :--- | :--- |
| Background | `transparent` | `rgba(250,246,240,0.92)` + `backdrop-blur-md` |
| Bottom border | none | `1px solid rgba(184,149,106,0.2)` |
| Logo color | `var(--cream)` | `var(--burgundy)` |
| Link color | `rgba(250,246,240,0.85)` | `var(--text-muted)` |
| Link hover | `var(--gold-light)` | `var(--gold-dark)` |
| Padding | `py-6 px-10` | `py-4 px-10` |
| Transition | `all 500ms ease` | — |

**Nav Links (desktop):** `Our Story` · `The Ceremony` · `Reception` · `Gallery` · `RSVP`
All scroll smoothly to section IDs: `#story`, `#ceremony`, `#reception`, `#gallery`, `#rsvp`

---

## 13. Anti-Patterns — Never Do These

| ❌ Wrong | ✅ Right |
| :--- | :--- |
| Any `border-radius` on any element | `border-radius: 0` everywhere — sharp corners only |
| `#000000` or `#ffffff` | Use `--charcoal` / `--cream` |
| `font-family: Inter` or system fonts | Cormorant Garamond + Cinzel + Jost only |
| Perfectly centered 50/50 columns | Always asymmetric — 7/5, 5/7, 4/8 |
| Gold fills on large areas | Gold is accent only — lines, borders, labels |
| Fast animations under 300ms | Minimum 300ms; images 2000ms |
| `bounce` or `spring` easing | Use `[0.22, 1, 0.36, 1]` or `ease-out` |
| Purple gradients or glassmorphism | Burgundy + cream + charcoal only |
| Rounded buttons | All buttons: sharp corners, `border-radius: 0` |
| Italic for decoration | Italic only for emphasis on one word inside headline |
| `box-shadow` drop shadows | No shadows — depth through layering and color |
| More than 3 font families | Cormorant + Cinzel + Jost — three max |

---

## 14. Wedding Details Reference

Use these exact values in all components. Do not paraphrase or abbreviate.

```ts
export const weddingDetails = {
  groom: {
    name:    "Melbin C Varghese",
    parents: "Mr. Varghese C O & Mrs. Sarakutty Varghese",
    home:    "Chathanayathu House, Ramamangalam, Muvattupuzha",
  },
  bride: {
    name:    "Dr. Nena Mathew",
    parents: "Mr. Mathew Varghese & Mrs. Elsamma Mathew",
    home:    "Valiyaveettil House, Punnavely, Mallapally",
  },
  ceremony: {
    day:      "Sunday",
    date:     "31 May 2026",
    time:     "10:30 AM",
    church:   "St. Athanasius Jacobite Syrian Cathedral",
    location: "Puthenkurish, Ernakulam, Kerala",
    mapsUrl:  "https://maps.google.com/?q=St+Athanasius+Jacobite+Syrian+Cathedral+Puthenkurish",
  },
  reception: {
    time:     "12:30 PM",
    venue:    "Njattumkalayil Hilltop Event Centre",
    location: "Kolencherry, Kerala",
    mapsUrl:  "https://maps.google.com/?q=Njattumkalayil+Hilltop+Event+Centre+Kolencherry",
  },
  verse: {
    text:      "May your constant love be with us, Lord, as we put our hope in you.",
    reference: "Psalm 33:22",
  },
  invitationText: "With the blessing of the Almighty God and our parents, we request the honour of your presence as we join hands in the Holy Sacrament of Matrimony.",
  rsvpDeadline: "20 May 2026",
  countdownTarget: "2026-05-31T10:30:00+05:30", // ISO string for IST
};
```

---

## 15. File & Component Structure

```
app/
  layout.tsx          ← Google Fonts, global CSS vars, metadata
  page.tsx            ← Assembles all sections in order
  globals.css         ← CSS variables, keyframes, base resets

components/
  ui/
    EybrowLabel.tsx         ← Cinzel uppercase label
    SectionHeadline.tsx     ← Cormorant headline with optional italic word
    BodyText.tsx            ← Standard paragraph
    GoldLine.tsx            ← 1px horizontal gold divider
    VerticalGoldLine.tsx    ← 1px vertical gold prefix line
    SectionCounter.tsx      ← "01 / 02" annotation
    BotanicalDivider.tsx    ← SVG leaf divider (inline use)
    ButtonPrimary.tsx       ← Gold fill CTA
    ButtonGhost.tsx         ← Outlined CTA (light + dark variants)
    PhotoPanel.tsx          ← overflow-hidden image with Ken Burns hover
    GalleryTile.tsx         ← Gallery photo with gold hover overlay
  sections/
    WeddingLoader.tsx       ← Full-screen burgundy loader
    WeddingNav.tsx          ← Sticky nav with scroll state
    WeddingMobileMenu.tsx   ← Framer Motion slide-in drawer
    WeddingHero.tsx         ← Full-viewport hero with layers
    WeddingCountdown.tsx    ← Live countdown to 31 May 2026
    WeddingInvitation.tsx   ← Centered verse + invitation text
    WeddingCeremony.tsx     ← 7/5 image + ceremony details
    WeddingReception.tsx    ← 5/7 reception details + image
    WeddingStory.tsx        ← Alternating timeline with photos
    WeddingFamilies.tsx     ← Two-column family details
    WeddingGallery.tsx      ← Masonry photo grid + lightbox
    WeddingVenue.tsx        ← Two venue cards with map links
    WeddingRSVP.tsx         ← Full RSVP form with success state
    WeddingFooter.tsx       ← Dark footer with petals + monogram
  floating/
    WeddingMusicToggle.tsx  ← Fixed bottom-right music button
    BackToTopButton.tsx     ← Fixed bottom-left scroll-to-top
```

**Rule**: Every section component uses only tokens from this document. No one-off hex values, no inline font-family strings outside the three approved families, no border-radius.

---

## 16. Quick Reference Card

```
Primary bg (light)     #faf6f0   --cream
Secondary bg (light)   #f5ede0   --ivory
Tertiary bg (light)    #ede0cc   --parchment
Dark bg (emotional)    #4a1428   --burgundy
Dark bg (editorial)    #1a1410   --charcoal
Gold accent            #b8956a   --gold
Gold light             #d4b896   --gold-light
Gold dark              #8a6a42   --gold-dark
Body text (on light)   #7a6050   --text-muted
Body text (on dark)    rgba(250,246,240,0.55)

Headline font          Cormorant Garamond, weight 300, often italic
Label / Button font    Cinzel, weight 400, uppercase
Body / UI font         Jost, weight 300–400

Hero font size         clamp(3rem, 7vw, 6rem)
Section headline       clamp(2.5rem, 5vw, 4.5rem)
Body text              clamp(1rem, 1.4vw, 1.15rem)
Label tracking         0.3em minimum
Image hover scale      1.05, duration 2000ms ease-out
Button height          ~52px (py-4 + text)
Max container width    1450px
Section padding Y      py-20 md:py-28 (standard) / py-24 md:py-36 (spacious)
Section padding X      px-6 md:px-12 lg:px-20
Border radius          0px — always, everywhere
Scroll reveal easing   cubic-bezier(0.22, 1, 0.36, 1)
```
