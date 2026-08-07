---
version: alpha
name: "Kimia – Yield Layer for Perps"
description: "Kimia is a Solana-based yield trading platform with a bold, cinematic visual identity. The homepage leads with a full-bleed AI-generated hero image overlaid with scrolling monospace ticker banners, establishing a high-drama, editorial tone. The color palette is anchored in a deep warm near-black (#292521) against a white surface, with no decorative gradients or shadows. depth is achieved purely through image contrast and typographic scale. The primary CTA uses a pill-shaped dark button with white text. Typography is a two-family system: Manrope for all display and body copy (with aggressive negative letter-spacing at large sizes), and Geist Mono for ticker/label accents with wide positive tracking. The layout is spacious and structured around a centered max-width container with generous vertical rhythm."
colors:
  primary-dark: "#171717"
  soft-blue-tint: "#e6eefa"
  surface-white: "#ffffff"
  true-black: "#060606"
  warm-near-black: "#292521"
  border-subtle: "#e5e5e5"
typography:
  hero-display:
    fontFamily: "Manrope"
    fontSize: "96px"
    fontWeight: "600"
    lineHeight: "97.92px"
    letterSpacing: "-2.4px"
  section-heading-xl:
    fontFamily: "Manrope"
    fontSize: "72px"
    fontWeight: "600"
    lineHeight: "75.6px"
    letterSpacing: "-1.8px"
  section-heading-lg:
    fontFamily: "Manrope"
    fontSize: "60px"
    fontWeight: "600"
    lineHeight: "63px"
    letterSpacing: "-1.5px"
  section-heading-md:
    fontFamily: "Manrope"
    fontSize: "48px"
    fontWeight: "600"
    lineHeight: "52.8px"
    letterSpacing: "-1.2px"
  subheading:
    fontFamily: "Manrope"
    fontSize: "36px"
    fontWeight: "600"
    lineHeight: "39.6px"
    letterSpacing: "-0.9px"
  body-base:
    fontFamily: "Manrope"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-sm:
    fontFamily: "Manrope"
    fontSize: "15px"
    fontWeight: "400"
    lineHeight: "24.375px"
  label-md:
    fontFamily: "Manrope"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  ticker-label-sm:
    fontFamily: "Geist Mono"
    fontSize: "11px"
    fontWeight: "600"
    lineHeight: "16.5px"
    letterSpacing: "2.2px"
  ticker-label-md:
    fontFamily: "Geist Mono"
    fontSize: "12px"
    fontWeight: "600"
    lineHeight: "16px"
    letterSpacing: "2.4px"
  ticker-label-lg:
    fontFamily: "Geist Mono"
    fontSize: "14px"
    fontWeight: "600"
    lineHeight: "20px"
    letterSpacing: "3.5px"
rounded:
  pill: "9999px"
  card: "22px"
  input: "10px"
  badge: "18px"
  base: "0.625rem"
spacing:
  xs: "4px"
  sm: "6px"
  md-sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "48px"
  5xl: "56px"
  6xl: "64px"
  7xl: "80px"
components:
  cta-button-dark-pill:
    backgroundColor: "{colors.warm-near-black}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    fontSize: "14px"
    fontWeight: "500"
    fontFamily: "Manrope"
    boxShadow: "none"
    borderWidth: "0px"
  hero-full-bleed-image-hero:
    backgroundColor: "rgba(0,0,0,0)"
    borderTopWidth: "1px"
    borderColor: "#d4d4d4"
    boxShadow: "none"
    padding: "0px"
  nav-shell:
    backgroundColor: "rgba(0,0,0,0)"
    padding: "20px 0px"
    borderWidth: "0px"
    boxShadow: "none"
    textColor: "{colors.warm-near-black}"
    fontSize: "16px"
  partner-logo-default-strip:
    display: "flex"
    gap: "{spacing.2xl}"
    alignItems: "center"
    fontSize: "12px"
    fontFamily: "Manrope"
    textColor: "{colors.warm-near-black}"
  section-heading-white-on-dark:
    fontFamily: "Manrope"
    fontSize: "36px"
    fontWeight: "600"
    textColor: "{colors.surface-white}"
    letterSpacing: "-0.9px"
    lineHeight: "39.6px"
  ticker-monospace-marquee:
    fontFamily: "Geist Mono"
    fontSize: "12px"
    fontWeight: "600"
    letterSpacing: "2.4px"
    textColor: "{colors.surface-white}"
    backgroundColor: "rgba(0,0,0,0.5)"
---

## Overview

Kimia is a Solana-based yield trading platform with a bold, cinematic visual identity. The homepage leads with a full-bleed AI-generated hero image overlaid with scrolling monospace ticker banners, establishing a high-drama, editorial tone. The color palette is anchored in a deep warm near-black (#292521) against a white surface, with no decorative gradients or shadows. depth is achieved purely through image contrast and typographic scale. The primary CTA uses a pill-shaped dark button with white text. Typography is a two-family system: Manrope for all display and body copy (with aggressive negative letter-spacing at large sizes), and Geist Mono for ticker/label accents with wide positive tracking. The layout is spacious and structured around a centered max-width container with generous vertical rhythm.

**Signature traits:**
- Dual typeface system: Pairs Manrope and Geist Mono across the type hierarchy.
- Soft, rounded geometry: Generous corner rounding up to 9999px.

## Colors

The palette uses 6 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-background** maps to `surface-white`: Role "background" is grounded by usage context "Page background, card, popover surfaces".
- **action-text** maps to `warm-near-black`: Role "text" is grounded by usage context "Primary body text, nav links, footer text — dominant text color across all zones".
- **action-primary** maps to `primary-dark`: Role "primary" is grounded by usage context "CTA button background, primary interactive elements".
- **border-border** maps to `border-subtle`: Role "border" is grounded by usage context "Dividers, input outlines, section separators".

### Primary Brand
- **Primary Dark** (#171717): CTA button background, primary interactive elements. Role: primary.

### Text Scale
- **Warm Near-Black** (#292521): Primary body text, nav links, footer text — dominant text color across all zones. Role: text. {authored: rgb(41, 37, 33), space: rgb}

### Interactive
- **Border Subtle** (#e5e5e5): Dividers, input outlines, section separators. Role: border.

### Surface & Shadows
- **Soft Blue Tint** (#e6eefa): Subtle surface accent, footer zone highlight. Role: background. {authored: rgb(230, 238, 250), space: rgb}
- **Surface White** (#ffffff): Page background, card, popover surfaces. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **True Black** (#060606): Hero and footer section backgrounds, deep surface fills. Role: background. {authored: rgb(6, 6, 6), space: rgb}

## Typography

Typography uses Manrope, Geist Mono across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes Manrope and Geist Mono for visual contrast. Weight range spans semi-bold, regular, medium. Sizes range from 11px to 96px.

### Font Roles
- **Headline Font**: Manrope
- **Body Font**: Manrope

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Largest hero headline — aggressive negative tracking for cinematic impact | Manrope | 96px | 600 | 97.92px | -2.4px | Manrope, Manrope Fallback | Extracted token |
| Primary section headings | Manrope | 72px | 600 | 75.6px | -1.8px | Manrope, Manrope Fallback | Extracted token |
| Secondary section headings | Manrope | 60px | 600 | 63px | -1.5px | Manrope, Manrope Fallback | Extracted token |
| Tertiary section headings | Manrope | 48px | 600 | 52.8px | -1.2px | Manrope, Manrope Fallback | Extracted token |
| Card and feature subheadings | Manrope | 36px | 600 | 39.6px | -0.9px | Manrope, Manrope Fallback | Extracted token |
| Default body copy, nav items, general UI text | Manrope | 16px | 400 | 24px | normal | Manrope, Manrope Fallback | Extracted token |
| Secondary body text, captions | Manrope | 15px | 400 | 24.375px | normal | Manrope, Manrope Fallback | Extracted token |
| Button labels, UI labels | Manrope | 14px | 500 | 20px | normal | Manrope, Manrope Fallback | Extracted token |
| Scrolling ticker banners, monospace accent labels | Geist Mono | 11px | 600 | 16.5px | 2.2px | Geist Mono, Geist Mono Fallback | Extracted token |
| Ticker and date stamps in hero overlay | Geist Mono | 12px | 600 | 16px | 2.4px | Geist Mono, Geist Mono Fallback | Extracted token |
| Prominent ticker/label accents | Geist Mono | 14px | 600 | 20px | 3.5px | Geist Mono, Geist Mono Fallback | Extracted token |

## Layout

Responsive system uses 1 breakpoint tier(s): desktop.

This system uses a 8px base grid with scale values 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80.

### Responsive Strategy
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| xs | 4px | 4 | Extracted spacing token |
| sm | 6px | 6 | Extracted spacing token |
| md-sm | 8px | 8 | Extracted spacing token |
| md | 12px | 12 | Extracted spacing token |
| base | 16px | 16 | Extracted spacing token |
| lg | 20px | 20 | Extracted spacing token |
| xl | 24px | 24 | Extracted spacing token |
| 2xl | 32px | 32 | Extracted spacing token |
| 3xl | 40px | 40 | Extracted spacing token |
| 4xl | 48px | 48 | Extracted spacing token |
| 5xl | 56px | 56 | Extracted spacing token |
| 6xl | 64px | 64 | Extracted spacing token |
| 7xl | 80px | 80 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | oklab(0.707999 -0.00000712276 0.0000166297 / 0.5) |
| Light | outline-width | 3px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, -167.883, 0) ; matrix(1, 0, 0, 1, 0, 14) ; matrix(0, 0, 0, 1, 0, 0) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| input | 10px | 10 | Control corner |
| base | 0.625rem | 10 | Control corner |
| badge | 18px | 18 | Card corner |
| card | 22px | 22 | Large surface corner |
| pill | 9999px | 9999 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| pill | 9999px | px |
| card | 22px | px |
| input | 10px | px |
| badge | 18px | px |
| base | 0.625rem | rem |

## Components

Components should be recreated from token references first, then tuned with variant notes and probe-backed state guidance.
- **Primary CTA Button**: Pill-shaped dark button used as the primary call-to-action in the navigation and hero. Probe-confirmed: bg #292521, white text, pill radius, 8px/16px padding.
- **Navigation Bar**: Transparent top navigation with logo left, links center-right, and CTA pill far right. No border or shadow — floats over hero image.
- **Hero Section**: Full-bleed cinematic hero with AI-generated image, dual scrolling monospace ticker banners (top and bottom), and large display headline below.
- **Ticker Banner**: Horizontally scrolling marquee-style banner using Geist Mono with wide letter-spacing. Appears at top and bottom of hero image overlay.
- **Ecosystem Logo Strip**: Horizontal row of ecosystem/partner logos (Solana, Helius, etc.) with a small label above. Appears below the hero headline.
- **Section Heading Block**: Large display heading used to open content sections, using Manrope semibold with tight negative letter-spacing.

### CTA Button

**Dark Pill**
- backgroundColor: #292521
- textColor: #ffffff
- rounded: 9999px
- padding: 8px 16px
- fontSize: 14px
- fontWeight: 500
- fontFamily: Manrope
- boxShadow: none
- borderWidth: 0px
- State guidance: Probe-confirmed via 'a.group' selector in both nav and hero zones. borderRadius computed as 3.35544e+07px (effectively pill/9999px).

### Hero

**Full-Bleed Image Hero**
- backgroundColor: rgba(0,0,0,0)
- borderTopWidth: 1px
- borderColor: #d4d4d4
- boxShadow: none
- padding: 0px
- State guidance: Probe-confirmed via 'section.w-full'. Top border separates hero from nav. Image fills full viewport width.

### Nav Shell

**Default**
- backgroundColor: rgba(0,0,0,0)
- padding: 20px 0px
- borderWidth: 0px
- boxShadow: none
- textColor: #292521
- fontSize: 16px
- State guidance: Probe-confirmed via 'nav.relative' selector. Transparent background floats over hero.

### Partner Logos

**Default Strip**
- display: flex
- gap: 32px
- alignItems: center
- fontSize: 12px
- fontFamily: Manrope
- textColor: #292521
- State guidance: Visually confirmed. Label 'Ecosystem & Stack' in small Manrope above logo row.

### Section Heading

**White on Dark**
- fontFamily: Manrope
- fontSize: 36px
- fontWeight: 600
- textColor: #ffffff
- letterSpacing: -0.9px
- lineHeight: 39.6px
- State guidance: Probe-confirmed via 'h2.text-lg' computed as 36px, color rgb(255,255,255).

### Ticker

**Monospace Marquee**
- fontFamily: Geist Mono
- fontSize: 12px
- fontWeight: 600
- letterSpacing: 2.4px
- textColor: #ffffff
- backgroundColor: rgba(0,0,0,0.5)
- State guidance: Visually confirmed in screenshot. Content: 'FUTARDIO' and '01.08.26' repeated. Overlaid on hero image.

## Do's and Don'ts

Guardrails protect Dual typeface system, Soft, rounded geometry without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Breakpoint 1 | Unknown | (prefers-reduced-motion: reduce) |

## Agent Prompt Guide

### Example Component Prompts
- Create Ecosystem Logo Strip variant that preserves Horizontal row of ecosystem/partner logos (Solana, Helius, etc.) with a small label above. Appears below the hero headline..
- Create Hero Section variant that preserves Full-bleed cinematic hero with AI-generated image, dual scrolling monospace ticker banners (top and bottom), and large display headline below..
- Create Navigation Bar variant that preserves Transparent top navigation with logo left, links center-right, and CTA pill far right. No border or shadow — floats over hero image..

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
