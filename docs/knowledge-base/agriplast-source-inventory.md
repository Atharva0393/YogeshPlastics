# Agriplast Tech India — Public Web Research & Source Inventory

**Document Type:** Empirical Source Research Inventory  
**Target Domain:** `https://www.agriplast.co.in/`  
**Research Date:** October 2026  
**Auditor:** Senior Full-Stack Engineer & Agricultural Materials Researcher  
**Research Tooling:** HTTP content ingestion (`read_url_content`), DOM parsing, Schema.org JSON-LD extraction, robots/sitemap inspection  

---

## 1. Research Methodology & Crawl Governance

All research was performed exclusively on publicly accessible web pages of `https://www.agriplast.co.in/`. 
- **Robots Policy Compliance:** Inspected `https://www.agriplast.co.in/robots.txt`. The site openly permits crawlers, declaring `Allow: /` for AI and web indexing agents (GPTBot, ClaudeBot, Bingbot, etc.).
- **Rate Limiting & Safety:** Minimal sequential HTTP requests were issued with standard header attribution, avoiding aggressive crawling, automated looping, or bypassing of any access controls.
- **Data Integrity:** All extracted metrics, specifications, and URLs represent measured, publicly documented content. No coverage numbers or product data have been fabricated.

---

## 2. Quantitative Discovery Metrics

| Metric | Measured Value | Notes |
| :--- | :--- | :--- |
| **Total URLs Discovered** | **118 unique URLs** | Aggregated across homepage, XML sitemap, and `/all-products` |
| **URLs in XML Sitemap (`/sitemap.xml`)** | **14 URLs** | Limited sitemap; includes 5 greenhouse films, `/about-us`, `/blogs`, etc. |
| **Internal Links on Homepage (`/`)** | **101 links** | 96 clean HTML content routes, 5 asset endpoints |
| **Products Indexed on `/all-products`** | **68 distinct products** | Across all protected cultivation categories |
| **Categories Discovered** | **4 top-level categories** | Greenhouse Solutions, Open Field, Nursery, Exclusive |
| **Subcategories Discovered** | **10 subcategories** | Shade Nets, Anti-Hail, Insect Net, Weed Mat, Mulch, etc. |
| **Detailed Page Inspections (Full DOM/JSON-LD)** | **12 core pages** | Deep extraction of specs, tables, FAQs, and structural schema |
| **Partially Inspected Pages** | **68 product listings** | Metadata, names, and categorization catalogued from `/all-products` |
| **Inaccessible / Blocked URLs** | **0** | No HTTP 403, 401, or CAPTCHA barriers encountered on public paths |

---

## 3. Discovered Site Architecture & Category Structure

### 3.1 Top-Level Categories (`/categories/...`)
1. `https://www.agriplast.co.in/categories/greenhouse-solutions` — Enclosed cultivation structures, films, and accessories.
2. `https://www.agriplast.co.in/categories/open-field-solutions` — Field shade nets, hail nets, mulch, and ground covers.
3. `https://www.agriplast.co.in/categories/nursery-equipments` — Seedling trays, pots, and microclimate covers.
4. `https://www.agriplast.co.in/categories/exclusive-products` — Ginegar imported films, Aluminet screens, and specialized tech.

### 3.2 Product Subcategories (`/subcategories/...`)
1. `https://www.agriplast.co.in/subcategories/shade-net-solutions` — Primary reference for HDPE and metallized netting.
2. `https://www.agriplast.co.in/subcategories/anti-hail-net` — Hail and canopy mechanical protection.
3. `https://www.agriplast.co.in/subcategories/insect-net` — High-mesh exclusion screens (40 & 50 mesh).
4. `https://www.agriplast.co.in/subcategories/weed-mat` — Woven ground covers (90, 100, 130 GSM).
5. `https://www.agriplast.co.in/subcategories/ginegar-greenhouse-films` — Polyethylene multi-layer polyhouse films.
6. `https://www.agriplast.co.in/subcategories/mulching` — Embossed and punched agricultural mulch films.
7. `https://www.agriplast.co.in/subcategories/agriplast-crop-shield-cover` — Non-woven crop covers and banana shields.
8. `https://www.agriplast.co.in/subcategories/greenhouse-accessories` — Profiles, zig-zag wires, clamps, trellis hooks.
9. `https://www.agriplast.co.in/subcategories/hydroponic-growing-troughs` — Mapal troughs and strawberry containers.
10. `https://www.agriplast.co.in/subcategories/soil-solarization-film` — Transparent low-tunnel thermal films.

---

## 4. Key Inspect URLs & Extracted Product Dossiers

### Dossier 1: Agriplast Shade Net (Mono x Mono)
- **URL:** `https://www.agriplast.co.in/products/agriplast-shade-net-mono-x-mono`
- **Page Type:** Product Detail (`Product`, `BreadcrumbList`, `FAQPage` schema)
- **Material:** Virgin High-Density Polyethylene (HDPE) Monofilament
- **Knitting Construction:** Mono x Mono (single-filament warp and weft)
- **Documented Shade Factors:** 35%, 50%
- **Documented Weights (GSM):** 100 GSM (for 35%), 125 GSM (for 50%)
- **Stated UV Longevity:** 3 Years (pro-rata warranty basis)
- **Available Widths:** 4.2 m, 6.2 m, 6.5 m
- **Available Lengths:** 50 m, 100 m continuous rolls
- **Standard Colors:** Green, White
- **Primary Applications:** Net houses, permanent greenhouse roofs, high-wind horticulture
- **Key Technical Distinctions:** High tensile tear resistance, rounded monofilament strands resist high wind friction without tearing.

### Dossier 2: Agriplast Shade Net (Tape x Tape)
- **URL:** `https://www.agriplast.co.in/products/agriplast-shade-net-tape-x-tape`
- **Page Type:** Product Detail
- **Material:** High-Density Polyethylene (HDPE) flat tape
- **Knitting Construction:** Tape x Tape (flat slit-film ribbon weave)
- **Documented Shade Factors:** 35%, 50%, 75%
- **Stated UV Longevity:** 3 Years (pro-rata)
- **Available Widths:** 3.0 m, 4.2 m, 6.2 m
- **Available Lengths:** 50 m, 100 m
- **Standard Colors:** Green, Black, White
- **Primary Applications:** Nurseries, open field crop shading, orchid cultivation, temporary polyhouse covers
- **Key Technical Distinctions:** Flat ribbon structure provides uniform surface coverage and cost-effective solar blockage.

### Dossier 3: Ginegar Polysack Nets Aluminet
- **URL:** `https://www.agriplast.co.in/products/ginegar-polysack-nets-aluminet`
- **Page Type:** Product Detail
- **Manufacturer / Origin:** Ginegar Polysack (Israel)
- **Material:** Metallized HDPE knitted screen with anti-oxidation UV-protective lacquer
- **Documented Shade Factors:** 50%, 80%
- **Stated UV Longevity:** 4 Years (pro-rata)
- **Available Widths:** 4.2 m, 4.5 m, 5.5 m
- **Available Lengths:** 50 m, 100 m, 200 m
- **Primary Applications:** 50% for commercial floriculture/horticulture; 80% for car parking, livestock sheds, domestic shade
- **Key Technical Distinctions:** Acts as an optical thermal mirror. Reflects infrared radiation during daytime; traps thermal radiation at night to prevent night chill. Yields 25–40% water savings through reduced crop evapotranspiration.

### Dossier 4: Agriplast Anti-Hail Net (Raschel / Leno)
- **URL:** `https://www.agriplast.co.in/products/agriplast-anti-hail-net-raschel`
- **Page Type:** Product Detail
- **Material:** Virgin Polyethylene
- **Knit Structure:** Raschel lock-knit (also offers Leno weave via Ginegar)
- **Documented Weight:** 70 GSM
- **Shade Factor:** 18% – 23% (permits 77% – 82% photosynthetically active radiation)
- **Stated UV Longevity:** 5 Years UV warranty
- **Available Widths:** 8 m, 9 m, 10 m; Length: 30 m
- **Primary Applications:** Apple orchards, fruit tree canopies, hail and bird protection

### Dossier 5: Agriplast Insect Net
- **URL:** `https://www.agriplast.co.in/products/insect-net`
- **Page Type:** Product Detail
- **Material:** HDPE Monofilament Yarn
- **Mesh Sizes:** 40 Mesh and 50 Mesh
- **Documented Weights (GSM):** 105 GSM (3-yr BIS approved), 120 GSM (5-yr warranty), 135 GSM (5-yr warranty)
- **Available Widths:** 2.5 m, 3.2 m, 3.6 m, 4.2 m, 4.5 m, 5.2 m; Length: 50 m, 100 m
- **Primary Applications:** Polyhouse side curtains, net houses, biological pest exclusion (aphids, thrips, whiteflies)

### Dossier 6: Weed Mat Ground Cover (90, 100, 130 GSM)
- **URL:** `https://www.agriplast.co.in/products/weed-mat-130-gsm-ground-cover`
- **Page Type:** Product Detail
- **Material:** Woven Polypropylene (PP)
- **Documented Weights:** 90 GSM, 100 GSM, 130 GSM
- **Stated UV Longevity:** 3 Years
- **Key Properties:** Water-permeable woven structure; blocks light from weed seeds while allowing irrigation/rain percolation into the soil.

---

## 5. Educational & FAQ Source Discoveries (`/faq`)

The FAQ page (`https://www.agriplast.co.in/faq`) provides comprehensive answers to customer concerns across 68 product items. The most relevant customer inquiries for shade netting include:
1. *How does shade net percentage correlate with crop selection?* (35% for leafy vegetables in mild climates; 50% for nurseries and general horticulture; 75% for orchids and sensitive floriculture; 80–90% for extreme heat and non-agricultural canopy shading).
2. *What is the fundamental difference between Mono x Mono and Tape x Tape?* (Mono = round monofilament threads, superior mechanical tear and wind strength; Tape = flat slit film, optimal uniform shading at lower weight/cost).
3. *What does GSM mean for a farmer or buyer?* (Grams per square metre, indicating fabric thickness, polymer mass, and structural density).
4. *How does UV stabilization protect the netting?* (Addition of HALS - Hindered Amine Light Stabilizers - prevents photo-oxidative degradation under intense ultraviolet exposure).
5. *How should shade nets be secured?* (Proper tensioning using cables, eyelets, or batten profiles prevents flapping against support frames, which is the primary cause of mechanical abrasion).

---

## 6. Crawl Limitations & Source Boundaries

1. **Incomplete XML Sitemap:** Agriplast's `/sitemap.xml` only contained 14 URLs. Complete product discovery was achieved by crawling `/all-products` and following direct internal links.
2. **Pricing Transparency:** Pricing is omitted across the public website ("Contact Agriplast at +91 81414 46666 for current rates"), reflecting the standard customized, volume-dependent B2B pricing model of agricultural materials in India.
3. **Third-Party Imports vs. In-House Manufacturing:** Agriplast distributes both in-house branded products ("Agriplast Shade Net") and imported premium lines (Ginegar Polysack from Israel). This distinction reinforces that Yogesh Plastics must only claim manufacturing of its own verified product line.
