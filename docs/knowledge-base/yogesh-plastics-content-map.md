# Yogesh Plastics — Website Content Map & Enhancement Architecture

**Document Status:** Actionable Implementation Architecture  
**Date:** October 2026  
**Auditor:** Full-Stack Content Architect & SEO Specialist  

---

## 1. Content Matrix Across Website Routes

---

### Page 1: Homepage (`/`)

- **Current Purpose:**
  Primary brand introduction, product showcase, material focus, and inquiry gateway.
- **Existing Content:**
  - Hero Section (`Shade, Designed for What Matters.`, 50%–90% specs strip, macro net photo).
  - Brand Statement (`What We Do`).
  - Product Showcase (Asymmetric layout featuring 50%, side cards for 75%, 90%, Architectural).
  - Material Section (Close-up macro texture, HDPE features, lock-stitch description).
  - Applications Grid (Agriculture, Greenhouses & Nurseries, Architectural Canopies).
  - Why Yogesh Plastics (4 numbered editorial pillars).
  - About Preview.
  - Final CTA block.
- **Source-Derived Insights (from Agriplast research):**
  - Buyers need clear explanation of shade factors (35%, 50%, 75%, 90%) right on the homepage to understand which product matches their crop or installation.
  - An interactive/structured **Selection Guide** or matrix bridges the gap between technical specs and customer needs.
  - Incorporating a high-value **Frequently Asked Questions (FAQ)** section addresses primary buyer objections (GSM vs shade %, durability, measuring, wind resistance) and qualifies for Schema.org `FAQPage` rich results.
- **Proposed Enhancements:**
  1. Add a dedicated **Product Selection Guide** section to the homepage explaining the 50%, 75%, and 90% tiers.
  2. Add an original, evidence-based **FAQ Section** (with clean accessible accordion interaction and `FAQPage` structured data).
  3. Ensure hero copy and spec strips remain clean, conservative, and grounded without unverified performance guarantees.
- **Required Company-Specific Data:**
  - Client confirmation of exact roll dimensions in active stock.
- **Internal Links:**
  - `/products`, `/products/[slug]`, `/applications`, `/about`, `/contact`.
- **Implementation Status:** Planned for implementation in Phase 4 / Phase 8.

---

### Page 2: Products Catalogue (`/products`)

- **Current Purpose:**
  Comprehensive catalog view of all shade netting and protective mesh offerings.
- **Existing Content:**
  - Category filter pills (`All Products`, `Shade Nets`, `Agricultural`, `Commercial`, `Architectural`).
  - Grid of 4 product cards with shade factor tags, short descriptions, and links to detail pages.
  - Bottom CTA block.
- **Source-Derived Insights:**
  - Agricultural buyers look for specific technical markers: Knit Construction (Tape vs. Mono), UV Stabilization, and Recommended Applications.
  - Adding clear specification pills directly on the product cards (e.g., "HDPE Matrix", "Lock-Stitch Knit", "50% Shading") accelerates scanning.
  - Adding an informational guide strip explaining how to choose between rolls helps self-qualification.
- **Proposed Enhancements:**
  1. Enhance product card tags with clear construction and shade metrics.
  2. Add a helpful catalog sidebar or footer guidance strip on measuring and ordering.
  3. Add `ItemList` and `Product` structured data.
- **Implementation Status:** Planned for Phase 5.

---

### Page 3: Product Detail Pages (`/products/[slug]`)

- **Current Purpose:**
  Deep technical overview, specifications table, applications list, variant matrix, and direct enquiry trigger for an individual product.
- **Existing Content:**
  - Breadcrumbs.
  - Title, shade factor pill, short and full description.
  - Image gallery with interactive thumbnail selection.
  - Specifications table (Material, Shade Factor, Knit, UV Formulation, Widths, Lengths, Colors).
  - Applications list with checkmark icons.
  - Variant comparison strip.
  - Contextual inquiry CTA ("Enquire About This Product" linking to `/contact?product=slug`).
  - Related products grid.
- **Source-Derived Insights:**
  - Technical buyers frequently ask specific questions about the individual product (e.g., "Can this 50% net be used on a greenhouse roof?", "How does this compare to 75%?").
  - Adding a **Product-Specific Technical Guidance & FAQs** block on detail pages deepens content and SEO relevance.
  - Emphasizing that custom dimensions are supported prevents buyers from bouncing if standard sizes aren't an exact fit.
- **Proposed Enhancements:**
  1. Extend `Product` data model in `src/data/products.ts` with explicit technical properties, target applications, and product-specific FAQs.
  2. Render product-specific FAQ accordions on each product page.
  3. Add Schema.org `Product` JSON-LD with verified properties (name, description, brand, category, image).
- **Implementation Status:** Planned for Phase 5.

---

### Page 4: Applications Page (`/applications`)

- **Current Purpose:**
  Editorial presentation of how Yogesh Plastics netting performs across agricultural, horticultural, and architectural sectors.
- **Existing Content:**
  - Hero introduction.
  - Alternating split-layout sections:
    1. Agriculture & Farming
    2. Greenhouses & Nurseries
    3. Floriculture & Specialty Crops
    4. Architectural & Civil Canopies
  - Bottom CTA.
- **Source-Derived Insights:**
  - Agriplast groups applications by environmental conditions (temperature spikes, hail, wind, humidity) and lists specific recommended products per use case.
  - Buyers want actionable advice: which shade density to choose, what mounting considerations to remember, and how to prevent wind tear.
- **Proposed Enhancements:**
  1. Enrich each application section with a **Recommended Product & Density** badge (linking directly to the corresponding product page).
  2. Add a **Practical Installation & Selection Guidance** section covering framing, wind buffering, and orientation.
- **Implementation Status:** Planned for Phase 6.

---

### Page 5: About Page (`/about`)

- **Current Purpose:**
  Company values, manufacturing philosophy, and operational approach.
- **Existing Content:**
  - Hero and campaign image.
  - Approach statement.
  - 4 Numbered pillars (Material Integrity, Practical Manufacturing, Direct Technical Dialogue, Enduring Consistency).
  - Final CTA.
- **Source-Derived Insights:**
  - Industrial buyers value clarity on whether the company is a manufacturer, distributor, or converter, and seek reassurance on quality control.
- **Proposed Enhancements:**
  1. Maintain clean, restrained positioning focusing on material integrity and customer-oriented service.
  2. Flag missing business facts (exact plant location, year of establishment, machinery capacity) in the Client Verification Register. Do NOT invent claims.
- **Implementation Status:** Planned for Phase 7.

---

### Page 6: Contact Page (`/contact`)

- **Current Purpose:**
  Lead intake, inquiry routing, and direct communication channel directory.
- **Existing Content:**
  - Hero.
  - Interactive Contact Form with product prefilling (`?product=slug`), validation, and state handling.
  - Direct contact cards (Phone, Email, WhatsApp, Location) tied to `src/data/site.ts`.
- **Source-Derived Insights:**
  - Agricultural buyers often know their rough length/width or land area rather than roll counts. Adding optional dimension fields or helpful placeholder guidance makes quoting faster.
- **Proposed Enhancements:**
  1. Ensure form validation handles both phone and email seamlessly.
  2. Maintain safe placeholders from `SITE_CONFIG` to prevent broken links until official client numbers are provided.
- **Implementation Status:** Planned for Phase 9.
