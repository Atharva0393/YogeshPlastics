# Yogesh Plastics — Technical Baseline Audit & Current State Analysis

**Document Status:** Baseline Reconnaissance Completed  
**Repository:** `/Users/atharva/YogeshPlastics`  
**Date:** October 2026  
**Auditor:** Senior Full-Stack Engineer & Technical SEO Specialist  

---

## 1. Executive Summary & Purpose

This audit establishes the empirical baseline of the existing Yogesh Plastics website codebase prior to the research-driven enhancement phase. The site is a production-ready Next.js web application built with a high-end, Apple-inspired editorial design language, focused on green shade cloth and agricultural protective netting.

The goal of this phase is not to replace or redesign the approved visual identity or technical stack, but to ground the website's factual content, technical specifications, product taxonomy, and customer education in verified agricultural and industrial principles discovered through research of industry leaders such as Agriplast Tech India (`https://www.agriplast.co.in/`).

---

## 2. Technical Stack & Architecture

- **Framework:** Next.js `16.4.0` (React `19.3.0`, App Router, Turbopack enabled)
- **Styling Architecture:** Pure Vanilla CSS Modules backed by a comprehensive design token system (`src/styles/tokens.css`, `src/styles/globals.css`). No TailwindCSS or external utility library.
- **Icons:** `lucide-react` (`^1.53.0`)
- **Type Checking:** TypeScript `^5` with strict type configurations (`tsconfig.json`)
- **Linting:** ESLint 9 (`eslint-config-next: 16.4.0`)
- **Asset Directory:** Local high-resolution photography under `public/images/`:
  - `shade-net-macro.jpg` (817 KB) — Close-up knit weave
  - `shade-net-greenhouse.jpg` (1.18 MB) — Polyhouse/greenhouse installation
  - `shade-net-roll.jpg` (701 KB) — Continuous commercial rolls
  - `shade-net-canopy.jpg` (889 KB) — Architectural tensioned canopy

### Baseline Build & Quality Verification
- `npm run lint` — **PASS** (0 errors, 0 warnings)
- `npm run build` — **PASS** (Static generation for 15 static/partial routes via Next.js Turbopack)

---

## 3. Route Inventory & Structural Purposes

| Route | Purpose | Key Components Used | Current Status |
| :--- | :--- | :--- | :--- |
| `/` | Primary corporate landing & brand overview | `PageTransition`, `Container`, `Button`, `SectionHeading` | Functional, clean editorial aesthetic |
| `/products` | Digital product catalogue with category filter pills | `ProductCatalogue`, `ProductGrid`, `ProductCard` | Functional, 4 products catalogued |
| `/products/[slug]` | Product detail view with specs, variants, gallery | `ProductGallery`, `GlassCard`, `ProductCard`, `Button` | Functional, dynamic route prerendered |
| `/applications` | Industry application showcase (4 sectors) | Alternating split sections, image-rich layout | Functional, editorial storytelling |
| `/about` | Company values, approach, and positioning | Editorial pillars, vision statements | Functional, calm restrained layout |
| `/contact` | Customer enquiry form & direct contact channels | `ContactForm`, `SITE_CONFIG` integration | Functional, query-param product prefilling |
| `/_not-found` | 404 Error page | Minimal branded recovery view | Functional |
| `/sitemap.xml` | Search engine indexing route | Next.js dynamic metadata route (`sitemap.ts`) | Functional |
| `/robots.txt` | Crawler indexing rules | Next.js dynamic metadata route (`robots.ts`) | Functional |

---

## 4. Current Product Catalogue & Data Model (`src/data/products.ts`)

The site defines 4 core products in `src/data/products.ts`:

### Product 1: Agro Green Shade Net 50% (`agro-green-shade-net-50`)
- **Category:** Agricultural Shading (`uiCategory: "agricultural"`)
- **Stated Shade Factor:** Approx. 50% Shading
- **Material Composition:** High-Density Polyethylene Mesh
- **Knit Construction:** Permeable Lock-Stitch Mesh
- **UV Formulation:** UV-Inhibited Polymer Compound
- **Applications:** Vegetable Nurseries, Horticulture, Orchard Canopies, Crop Shading
- **Dimensions:** Roll widths & lengths "Available on request"

### Product 2: Heavy Agro Shade Net 75% (`high-density-shade-net-75`)
- **Category:** Agricultural & Floriculture (`uiCategory: "agricultural"`)
- **Stated Shade Factor:** Approx. 75% Shading
- **Material Composition:** High-Density Polyethylene Mesh
- **Knit Construction:** Dense Tape & Monofilament Knit
- **UV Formulation:** UV-Inhibited Polymer Compound
- **Applications:** Greenhouse & Polyhouse Roofing, Floriculture & Orchids, Cattle Sheds

### Product 3: Commercial Shade Cloth 90% (`commercial-shade-cloth-90`)
- **Category:** Commercial & Privacy (`uiCategory: "commercial"`)
- **Stated Shade Factor:** Approx. 90% Shading
- **Material Composition:** Heavy-Duty Knitted Polymer Mesh
- **Knit Construction:** Heavy Lock-Stitch Weave
- **Applications:** Vehicle Parking Shelters, Holding Yards, Perimeter Fencing, Scaffolding

### Product 4: Architectural Tensile Netting (`architectural-tensile-shade-fabric`)
- **Category:** Architectural Installations (`uiCategory: "architectural"`)
- **Stated Shade Factor:** Approx. 85% Shading
- **Material Composition:** Tension-Grade Knitted Mesh
- **Applications:** Tensile Canopy Pavilions, School Playgrounds, Courtyards, Walkways

---

## 5. Existing Factual Claims & Verification Assessment

| Claim / Field | Current Representation on Site | Verification Assessment |
| :--- | :--- | :--- |
| **Material** | "High-Density Polyethylene (HDPE)" | Standard industry material for knitted shade net; accurate as a category definition. |
| **Knit Construction** | "Lock-Stitch Mesh", "Tape & Monofilament Knit" | Standard raschel warp-knitting terminology; needs clear taxonomy distinguishing tape vs. mono. |
| **Shade Factors** | "50%", "75%", "85%", "90%" | Common commercial shade ratings; needs client confirmation of Yogesh Plastics' exact manufacturing dies. |
| **GSM (Grams/Sq Metre)** | Omitted or stated as "Available upon enquiry" | **Good practice**: Does not invent fabricated GSM numbers. |
| **UV Protection** | "UV-Inhibited Polymer Compound", "Multi-Season" | Non-quantified and safe. Does not promise a specific multi-year warranty without client verification. |
| **Certifications** | None claimed | Safe; does not falsely claim BIS (IS 16008) or ISO without confirmation. |
| **Pricing / Stock** | No prices displayed; invites direct inquiry | Safe and appropriate for B2B industrial materials. |

---

## 6. Observed Deficiencies & Opportunities for Improvement

### 6.1 Content & Technical Depth
1. **Absence of Customer FAQs:** The site currently lacks an FAQ section explaining critical buyer questions: how shade percentages differ, what GSM represents, how to select between Tape vs. Monofilament knits, and how to measure roll requirements.
2. **Missing Product Selection Guidance:** While the applications page describes environments, there is no interactive or structured selection guide helping a farmer or contractor match their exact crop or structure to the appropriate shade net.
3. **Product Data Model Extension Needed:** The `Product` schema in `products.ts` lacks explicit fields for `constructionType` (Tape x Tape, Mono x Mono, Tape x Mono), `gsmRange`, `warrantyNote`, `isProvisional`, and `verificationStatus`.
4. **Hero Stats Qualification:** The homepage hero display `50% – 90% Shade Densities` is reasonable, but can be enriched with clear customer-facing selection context.

### 6.2 SEO & Discoverability
1. **Structured Data:** The site has Open Graph tags and basic title/description metadata, but lacks schema.org structured data (`Organization`, `Product`, `BreadcrumbList`, `FAQPage`).
2. **Keyword Coverage:** Key high-intent agricultural search terms (e.g., nursery shade cloth, polyhouse roof net, Tape x Tape, monofilament shade netting, floriculture heat reduction) can be integrated naturally into original descriptive copy.

### 6.3 Contact & Enquiry Experience
1. **Contextual Inquiries:** The contact form supports `?product=slug` prefilling, but product detail pages can provide more tailored prompts (e.g., passing pre-selected shade factor and application context).
2. **Client Contact Data:** Centrally defined in `src/data/site.ts` with safe placeholders (`[Client Phone]`, `[Client Email]`, `[Client Location]`), which prevents broken links. These remain ready for client onboarding.

---

## 7. Features & Assets to Preserve

1. **Design Tokens & Palette:** The approved Apple-inspired visual system (`#1F6B45` Primary Green, `#3F8A62` Secondary Green, `#7FA58E` Muted Sage, `#F8F9F6` Natural Warm White, `#F1F4EF` Tinted Neutral, `#111613` Dark Charcoal).
2. **Typography Scale & Rhythm:** Restrained sans-serif hierarchy with generous whitespace (120–140px section spacing on desktop).
3. **Working Routes & Navigation:** All current URLs (`/`, `/products`, `/products/[slug]`, `/applications`, `/about`, `/contact`).
4. **Component Architecture:** Existing clean React components in `src/components/`.
