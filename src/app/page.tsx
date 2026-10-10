import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { PRODUCTS } from "@/data/products";
import styles from "@/styles/home.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Yogesh Plastics | Shade & Protective Netting Solutions",
  },
  description:
    "Manufacturer of high-performance shade nets, shade cloth, and protective agro netting solutions for agriculture, horticulture, and architectural shade.",
};

const FAQ_DATA = [
  {
    question: "What is the primary function of a knitted shade net in agriculture?",
    answer:
      "Knitted shade nets regulate radiant solar energy, surface temperature, and airflow across growing beds. Unlike solid plastic films, the permeable lock-stitch mesh converts harsh direct sunlight into diffuse, usable light while allowing natural convective ventilation, protecting tender crops from heat scorching and moisture stress.",
  },
  {
    question: "How do I choose the right shade percentage for my crop or project?",
    answer:
      "Selection depends on the light requirements of your plants and local climate severity. 50% shade is standard for plant nurseries, vegetable beds, and general agriculture to prevent heat stress without starving plants of photosynthetic light. 75% shade is formulated for delicate floriculture (orchids, anthuriums), summer polyhouse roof cooling, and livestock shelters. 85% to 90% shade is reserved for non-agricultural applications such as vehicle parking, construction fencing, and perimeter privacy.",
  },
  {
    question: "What is the difference between shade percentage and fabric GSM?",
    answer:
      "Shade percentage measures optical blockage (how much incident sunlight is filtered out), while GSM (Grams per Square Metre) measures the physical mass and density of the polymer. Two nets can both offer 50% shading, but a higher-GSM net will feature thicker yarn strands, greater tear resistance, and superior structural longevity in high-wind conditions.",
  },
  {
    question: "How does lock-stitch knitting perform in outdoor wind and storm conditions?",
    answer:
      "Our netting is produced using raschel warp-knitting technology with interlocking lock-stitches. If a branch, tool, or high wind puncturing tears a single filament loop, the surrounding stitches remain anchored. This prevents the fabric from unravelling or laddering down the length of the roll.",
  },
  {
    question: "How should shade netting be measured and ordered for a project?",
    answer:
      "Measure the exact length and width of your frame structure and allow an additional 5% to 10% dimensional margin for perimeter securing, seam overlaps, and thermal contraction. Yogesh Plastics supplies continuous commercial rolls and provides guidance for project-specific dimensions upon direct enquiry.",
  },
  {
    question: "How should shade netting be installed to prevent premature wear?",
    answer:
      "The primary cause of early net failure is friction against unshielded structural pipes in the wind. We recommend rounding or wrapping structural contact points, maintaining uniform tension without excessive sagging, and securing along reinforced selvedges every 0.5 to 1 metre using proper fasteners or profile channels.",
  },
];

export default function HomePage() {
  const featuredProduct = PRODUCTS[0]; // Agro Green Shade Net 50%
  const sideProducts = PRODUCTS.slice(1, 4); // 75%, 90%, Architectural

  // Structured Data for Organization and FAQPage
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yogesh Plastics",
    url: "https://yogeshplastics.com",
    logo: "https://yogeshplastics.com/icon.svg",
    description:
      "Manufacturer of premium shade netting, shade cloth, and protective agro netting solutions for agriculture, horticulture, and architectural installations.",
    slogan: "Shade More. Protect Better.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <PageTransition>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ====================================================================
          1. HERO SECTION (Full-Bleed herofinalbg.png, 100vh Cinematic Composition)
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="Hero Section">
        {/* Full-Bleed Background Photograph */}
        <div className={styles.heroBgWrapper}>
          <Image
            src="/images/herofinalbg.png"
            alt="Architectural green shade net canopy structure with warm sunlight in courtyard"
            fill
            priority
            quality={90}
            sizes="100vw"
            className={styles.heroBgImage}
          />
          {/* Subtle Contrast Gradient Overlay */}
          <div className={styles.heroGradientOverlay} aria-hidden="true" />
        </div>

        {/* Hero Foreground Composition Container */}
        <div className={styles.heroContainer}>
          {/* Main Content: Typography & Action CTAs */}
          <div className={styles.heroContent}>
            {/* Main Headline */}
            <h1 className={styles.heroTitle}>
              Shade More.
              <br />
              Protect Better.
            </h1>

            {/* Supporting Paragraph */}
            <p className={styles.heroSubtitle}>
              Precision-engineered shade netting and protective fabrics for
              agricultural environments, greenhouse protection, and
              thoughtfully designed outdoor spaces.
            </p>

            {/* CTA Buttons */}
            <div className={styles.heroActions}>
              <Link href="/products" className={styles.heroPrimaryBtn}>
                <span>Explore Products</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link href="/contact" className={styles.heroSecondaryBtn}>
                <span>Get an Enquiry</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. BRAND INTRODUCTION / STATEMENT
          ==================================================================== */}
      <section
        className={styles.brandStatementSection}
        aria-label="Brand Statement"
      >
        <Container>
          <div className={styles.brandStatementGrid}>
            <div className={styles.statementLabel}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>What We Do</span>
            </div>

            <div>
              <h2 className={styles.statementHeading}>
                Shade solutions built around material, performance and purpose.
              </h2>
              <p className={styles.statementBody}>
                At Yogesh Plastics, we produce specialized protective netting
                solutions designed to moderate extreme solar radiation, control
                ambient temperature, and provide structural protection. From
                commercial greenhouse nurseries to modern architectural
                installations, our knitted HDPE fabrics are built to endure
                demanding environmental conditions.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          3. PRODUCT SHOWCASE (Hierarchical & Asymmetric Layout)
          ==================================================================== */}
      <section
        id="products"
        className={styles.productsSection}
        aria-label="Product Showcase"
      >
        <Container>
          <div className={styles.productsHeader}>
            <div>
              <div className="yp-tag" style={{ marginBottom: "12px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>Our Products</span>
              </div>
              <h2 style={{ fontSize: "var(--text-h2)", fontWeight: 600 }}>
                Built to create better shade.
              </h2>
            </div>
            <Button
              href="/products"
              variant="secondary"
              size="sm"
              rightIcon={<ArrowRight size={15} />}
            >
              View Full Catalogue
            </Button>
          </div>

          {/* Asymmetric Product Grid */}
          <div className={styles.productAsymmetricLayout}>
            {/* Featured Product Card (Agro Green Shade Net 50%) */}
            <Link
              href={`/products/${featuredProduct.slug}`}
              className={styles.featuredCardWrapper}
              aria-label={`View details for ${featuredProduct.name}`}
            >
              <div className={styles.featuredImageContainer}>
                <Image
                  src={featuredProduct.image}
                  alt={featuredProduct.imageAlt || featuredProduct.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={styles.featuredImage}
                />
                <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                  <div className="yp-glass-pill" style={{ padding: "6px 14px" }}>
                    <span
                      style={{
                        fontSize: "var(--text-label)",
                        fontWeight: 600,
                        letterSpacing: "var(--tracking-wide)",
                        color: "var(--color-dark)",
                      }}
                    >
                      {featuredProduct.shadeFactor} · Featured
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.featuredCardContent}>
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: 600,
                    letterSpacing: "var(--tracking-wider)",
                    textTransform: "uppercase",
                    color: "var(--color-green-primary)",
                    marginBottom: "8px",
                  }}
                >
                  {featuredProduct.category}
                </span>

                <h3
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    marginBottom: "12px",
                    lineHeight: 1.25,
                  }}
                >
                  {featuredProduct.name}
                </h3>

                <p
                  style={{
                    fontSize: "var(--text-body)",
                    color: "var(--color-dark-subtle)",
                    lineHeight: "var(--leading-relaxed)",
                    marginBottom: "24px",
                    flex: 1,
                  }}
                >
                  {featuredProduct.shortDescription}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(17, 22, 19, 0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-dark-muted)",
                      fontWeight: 500,
                    }}
                  >
                    Knitted Polyethylene Mesh · UV Resistant
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--color-green-primary)",
                    }}
                  >
                    <span>Explore Product</span>
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Secondary Products Column */}
            <div className={styles.sideProductsColumn}>
              {sideProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className={styles.secondaryCardWrapper}
                  aria-label={`View details for ${product.name}`}
                >
                  <div className={styles.secondaryImageContainer}>
                    <Image
                      src={product.image}
                      alt={product.imageAlt || product.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className={styles.secondaryImage}
                    />
                  </div>

                  <div className={styles.secondaryCardContent}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "var(--text-label)",
                          fontWeight: 600,
                          letterSpacing: "var(--tracking-wide)",
                          textTransform: "uppercase",
                          color: "var(--color-green-primary)",
                        }}
                      >
                        {product.shadeFactor}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "var(--color-dark)",
                        marginBottom: "6px",
                      }}
                    >
                      {product.name}
                    </h4>

                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-dark-subtle)",
                        lineHeight: 1.45,
                        margin: 0,
                      }}
                    >
                      {product.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          4. FEATURED MATERIAL SECTION (Macro Texture & Physical Engineering)
          ==================================================================== */}
      <section className={styles.materialSection} aria-label="Material Focus">
        <Container>
          <div className={styles.materialContainer}>
            <Image
              src="/images/shade-net-macro.jpg"
              alt="Close-up macro texture of knitted HDPE shade net strands"
              fill
              sizes="100vw"
              className={styles.materialBackgroundImage}
            />

            {/* Floating Glass Editorial Card */}
            <div className={styles.materialOverlayCard}>
              <div className="yp-tag" style={{ marginBottom: "16px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>The Material</span>
              </div>

              <h2 className={styles.materialTitle}>Engineered for shade.</h2>

              <p className={styles.materialDescription}>
                Manufactured from high-density polyethylene (HDPE) polymer mesh
                strands knitted with precision lock-stitch technology. Integrated
                with specialized UV stabilizer compounds, our nets resist
                degradation, embrittlement, and color fading under intense solar
                exposure, while retaining micro-ventilation and tensile
                flexibility.
              </p>

              <div className={styles.materialHighlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightValue}>High-Grade HDPE</span>
                  <span className={styles.highlightLabel}>Polymer Matrix</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightValue}>Lock-Stitch Knit</span>
                  <span className={styles.highlightLabel}>Anti-Fraying Weave</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightValue}>UV-Stabilized</span>
                  <span className={styles.highlightLabel}>Multi-Season Life</span>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightValue}>Micro-Permeable</span>
                  <span className={styles.highlightLabel}>Controlled Airflow</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          5. APPLICATIONS SECTION
          ==================================================================== */}
      <section
        id="applications"
        className={styles.applicationsSection}
        aria-label="Applications"
      >
        <Container>
          <SectionHeading
            tag="Applications"
            title="Made to work across spaces."
            description="Our protective netting is calibrated for diverse environments requiring solar moderation, microclimate regulation, and structural shading."
          />

          <div className={styles.applicationsGrid}>
            {/* Card 1: Agriculture */}
            <Link
              href="/applications#agriculture"
              className={styles.appCard}
              aria-label="View Agriculture & Crop Protection applications"
            >
              <div className={styles.appImageContainer}>
                <Image
                  src="/images/shade-net-macro.jpg"
                  alt="Close-up of woven green shade net material for agricultural crop protection"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.appImage}
                />
              </div>
              <div className={styles.appCardContent}>
                <span className={styles.appTag}>Cultivation & Crops</span>
                <h3 className={styles.appTitle}>Agriculture & Farming</h3>
                <p className={styles.appDescription}>
                  Protects open-field vegetable crops, orchards, and nursery beds
                  from scorching solar burn and hail impact.
                </p>
                <div className={styles.appFooter}>
                  <span className={styles.appExploreLink}>
                    <span>View Application</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 2: Greenhouses & Nurseries */}
            <Link
              href="/applications#horticulture"
              className={styles.appCard}
              aria-label="View Greenhouses & Nurseries applications"
            >
              <div className={styles.appImageContainer}>
                <Image
                  src="/images/shade-net-greenhouse.jpg"
                  alt="Green shade net covering a greenhouse"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.appImage}
                />
              </div>
              <div className={styles.appCardContent}>
                <span className={styles.appTag}>Controlled Microclimates</span>
                <h3 className={styles.appTitle}>Greenhouses & Nurseries</h3>
                <p className={styles.appDescription}>
                  Diffuses harsh direct sunlight into balanced illumination across
                  polyhouse roofs, optimizing vegetative growth.
                </p>
                <div className={styles.appFooter}>
                  <span className={styles.appExploreLink}>
                    <span>View Application</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Card 3: Architectural Shade */}
            <Link
              href="/applications#architectural"
              className={styles.appCard}
              aria-label="View Architectural & Tensile Shade applications"
            >
              <div className={styles.appImageContainer}>
                <Image
                  src="/images/shade-net-canopy.jpg"
                  alt="Green shade canopy structure installed over outdoor area"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.appImage}
                />
              </div>
              <div className={styles.appCardContent}>
                <span className={styles.appTag}>Tensile & Civil Shade</span>
                <h3 className={styles.appTitle}>Architectural Canopies</h3>
                <p className={styles.appDescription}>
                  Engineered netting for tensioned geometric canopies, school
                  playgrounds, parking structures, and public pavilions.
                </p>
                <div className={styles.appFooter}>
                  <span className={styles.appExploreLink}>
                    <span>View Application</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          5B. PRODUCT SELECTION GUIDANCE (Research-Led Domain Enhancement)
          ==================================================================== */}
      <section
        className={styles.selectionGuideSection}
        aria-label="Product Selection Guidance"
      >
        <Container>
          <SectionHeading
            tag="Selection Guide"
            title="Choosing the right shade factor."
            description="Selecting appropriate netting density is essential for optimal crop physiology, thermal regulation, and structural efficiency."
          />

          <div className={styles.selectionGrid}>
            {/* Card 1: 50% Agricultural Shading */}
            <div className={styles.selectionCard}>
              <div className={styles.selectionCardBadge}>50% Density</div>
              <h3 className={styles.selectionCardTitle}>
                Nurseries & Open Cultivation
              </h3>
              <p className={styles.selectionCardBody}>
                Balances radiant solar reduction with high natural light
                transmission. Prevents leaf scorch on tender vegetable seedlings
                while preserving vital photosynthetically active radiation (PAR).
              </p>

              <div className={styles.selectionCardList}>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Vegetable nurseries & seed beds</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Horticulture plant propagation</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Open-field canopy sun protection</span>
                </div>
              </div>

              <Button
                href="/products/agro-green-shade-net-50"
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
              >
                View 50% Agro Net
              </Button>
            </div>

            {/* Card 2: 75% High Density */}
            <div className={styles.selectionCard}>
              <div className={styles.selectionCardBadge}>75% Density</div>
              <h3 className={styles.selectionCardTitle}>
                Floriculture & Heat Relief
              </h3>
              <p className={styles.selectionCardBody}>
                Dense optical filtration engineered for sensitive flowering
                species and extreme summer climate conditions. Significantly dampens
                greenhouse temperatures and shelters dairy livestock.
              </p>

              <div className={styles.selectionCardList}>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Orchids, Anthuriums & Ferns</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Polyhouse roof summer relief</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Cattle & livestock shed cooling</span>
                </div>
              </div>

              <Button
                href="/products/high-density-shade-net-75"
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
              >
                View 75% Heavy Net
              </Button>
            </div>

            {/* Card 3: 90% Commercial Grade */}
            <div className={styles.selectionCard}>
              <div className={styles.selectionCardBadge}>90% Density</div>
              <h3 className={styles.selectionCardTitle}>
                Commercial, Parking & Privacy
              </h3>
              <p className={styles.selectionCardBody}>
                Maximum opacity knitted fabric built for civil and commercial
                structures. Blocks direct glare, prevents vehicular heat buildup,
                and creates visual privacy along site perimeters.
              </p>

              <div className={styles.selectionCardList}>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Vehicle parking & carport canopies</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Perimeter privacy & boundary fences</span>
                </div>
                <div className={styles.selectionCardListItem}>
                  <CheckCircle2 size={16} color="var(--color-green-primary)" />
                  <span>Scaffolding debris containment</span>
                </div>
              </div>

              <Button
                href="/products/commercial-shade-cloth-90"
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
              >
                View 90% Shade Cloth
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          6. WHY YOGESH PLASTICS (Editorial Numbered Pillars)
          ==================================================================== */}
      <section className={styles.whySection} aria-label="Why Yogesh Plastics">
        <Container>
          <div className={styles.whyGrid}>
            {/* Left Sticky Header */}
            <div className={styles.whyStickyLeft}>
              <div className="yp-tag" style={{ marginBottom: "14px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>Why Yogesh Plastics</span>
              </div>
              <h2 className={styles.whyTitle}>
                Built with purpose. Grounded in reliability.
              </h2>
              <p className={styles.whySubtitle}>
                We concentrate exclusively on protective netting solutions
                engineered to perform under continuous real-world exposure.
              </p>
              <div style={{ marginTop: "32px" }}>
                <Button
                  href="/contact"
                  variant="green"
                  size="md"
                  rightIcon={<ArrowUpRight size={16} />}
                >
                  Connect with Our Team
                </Button>
              </div>
            </div>

            {/* Right Numbered Editorial List */}
            <div className={styles.whyPillarsList}>
              <div className={styles.whyPillarItem}>
                <span className={styles.pillarNumber}>01</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Material Integrity</h3>
                  <p className={styles.pillarDescription}>
                    Manufactured with High-Density Polyethylene polymers
                    formulated with ultraviolet stabilizers to prevent brittleness,
                    fraying, and premature degradation under intense sun.
                  </p>
                </div>
              </div>

              <div className={styles.whyPillarItem}>
                <span className={styles.pillarNumber}>02</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Application Calibration</h3>
                  <p className={styles.pillarDescription}>
                    Precisely calibrated shade densities ranging from 50% to 90%,
                    enabling growers and builders to select exact solar filtration
                    appropriate for their microclimatic demands.
                  </p>
                </div>
              </div>

              <div className={styles.whyPillarItem}>
                <span className={styles.pillarNumber}>03</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Manufacturing Consistency</h3>
                  <p className={styles.pillarDescription}>
                    Uniform lock-stitch knit density and reinforced selvedges ensure
                    dimensional stability during tensioning, eliminating hot spots
                    and ragged borders.
                  </p>
                </div>
              </div>

              <div className={styles.whyPillarItem}>
                <span className={styles.pillarNumber}>04</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Practical Flexibility</h3>
                  <p className={styles.pillarDescription}>
                    Standard commercial roll dimensions combined with responsive
                    technical consultation for agricultural growers, greenhouse
                    fabricators, and commercial distributors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          6B. FREQUENTLY ASKED QUESTIONS (Original Customer Guidance)
          ==================================================================== */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <Container>
          <div className={styles.faqContainer}>
            <SectionHeading
              tag="Customer FAQs"
              title="Questions about shade netting."
              description="Clear, practical answers covering material properties, shade factor selection, wind behavior, and ordering requirements."
            />

            <div className={styles.faqList}>
              {FAQ_DATA.map((faq, index) => (
                <details key={index} className={styles.faqItem}>
                  <summary className={styles.faqSummary}>
                    <span>{faq.question}</span>
                    <span className={styles.faqToggleIcon} aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          7. ABOUT PREVIEW SECTION
          ==================================================================== */}
      <section
        className={styles.aboutPreviewSection}
        aria-label="About Yogesh Plastics Preview"
      >
        <Container>
          <div className={styles.aboutPreviewGrid}>
            <div>
              <div className="yp-tag" style={{ marginBottom: "16px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>About Yogesh Plastics</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(2rem, 3.2vw, 2.75rem)",
                  lineHeight: "var(--leading-tight)",
                  fontWeight: 600,
                  color: "var(--color-dark)",
                  marginBottom: "20px",
                }}
              >
                Focused on better shade. Built around practical solutions.
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-dark-subtle)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "16px",
                }}
              >
                Yogesh Plastics specializes exclusively in shade cloth, agro
                netting, and microclimate protective solutions. Our objective is
                to provide agriculturalists, greenhouse growers, and contractors
                with dependable materials engineered to withstand severe weather
                and reduce heat stress.
              </p>

              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-dark-subtle)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "32px",
                }}
              >
                Every roll reflects a dedication to durability, straightforward
                communication, and honest product performance.
              </p>

              <Button
                href="/about"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight size={16} />}
              >
                About Yogesh Plastics
              </Button>
            </div>

            <div className={styles.aboutPreviewVisual}>
              <Image
                src="/images/shade-net-canopy.jpg"
                alt="Green shade canopy structure installed over an outdoor space"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.aboutPreviewImage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          8. FINAL ENQUIRY CTA SECTION
          ==================================================================== */}
      <section style={{ padding: "100px 0 120px" }} aria-label="Final Call to Action">
        <Container>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-hero)",
              background:
                "linear-gradient(135deg, #111613 0%, #1A281F 55%, #183B25 100%)",
              color: "#FFFFFF",
              padding: "80px 48px",
              textAlign: "center",
              boxShadow: "0 24px 60px -12px rgba(17, 22, 19, 0.22)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "700px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="yp-glass-pill"
                style={{
                  padding: "6px 16px",
                  marginBottom: "24px",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <span
                  style={{
                    fontSize: "var(--text-label)",
                    fontWeight: 600,
                    letterSpacing: "var(--tracking-wider)",
                    textTransform: "uppercase",
                    color: "#A3E4C1",
                  }}
                >
                  Direct Inquiries & Technical Advice
                </span>
              </div>

              <h2
                style={{
                  fontSize: "var(--text-h2)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  lineHeight: "var(--leading-tight)",
                  marginBottom: "16px",
                }}
              >
                Looking for the right shade solution?
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "rgba(255, 255, 255, 0.78)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "36px",
                }}
              >
                Tell us what you need and we will help you find the right
                product — from shade factor recommendations to roll dimensions
                and dispatch.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  href="/contact"
                  variant="green"
                  size="lg"
                  rightIcon={<ArrowRight size={18} />}
                >
                  Send an Enquiry
                </Button>
                <Button
                  href="/products"
                  variant="glass"
                  size="lg"
                  style={{
                    color: "#FFFFFF",
                    borderColor: "rgba(255,255,255,0.22)",
                  }}
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
