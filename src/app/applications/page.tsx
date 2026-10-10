import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import styles from "@/styles/applications.module.css";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Explore how Yogesh Plastics shade and protective netting solutions serve agriculture, greenhouses, architectural canopies, and commercial outdoor spaces.",
};

export default function ApplicationsPage() {
  return (
    <PageTransition>
      {/* ====================================================================
          1. APPLICATION HERO
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="Applications Introduction">
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>Applications</span>
            </div>

            <h1 className={styles.heroTitle}>Made to work across spaces.</h1>

            <p className={styles.heroSubtitle}>
              Shade and protective netting serve distinct roles depending on the
              environment. From agricultural foliage moderation to tensioned
              structural canopies, our materials are selected to suit the
              exposure, airflow, and shade demands of the setting.
            </p>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          2. EDITORIAL SEQUENCE (Alternating Rhythm with Specific Guidance)
          ==================================================================== */}
      <Container>
        <div className={styles.editorialSequence}>
          {/* APPLICATION 01: AGRICULTURE & FARMING (Image Left, Text Right) */}
          <section
            className={styles.editorialSplit}
            id="agriculture"
            aria-labelledby="app-title-01"
          >
            <div className={styles.editorialVisual}>
              <Image
                src="/images/shade-net-macro.jpg"
                alt="Close-up of woven green shade net material for agricultural crop protection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialContent}>
              <div className={styles.numberedLabel}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>01 · Agriculture & Farming</span>
              </div>

              <h2 id="app-title-01" className={styles.editorialTitle}>
                Foliage protection and solar management for open cultivation.
              </h2>

              <p className={styles.editorialText}>
                In open agricultural environments, intense direct sunlight can
                cause leaf scorch, moisture depletion, and thermal stress on
                crops. Knitted shade netting creates a diffused light environment
                that moderates radiation while allowing natural airflow and
                ambient moisture exchange across field beds.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px 18px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-green-primary)" }}>
                  <CheckCircle2 size={16} />
                  <span>Recommended: Agro Green Shade Net 50%</span>
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-dark-subtle)", lineHeight: 1.4 }}>
                  Optimal for vegetable beds, fruit orchards, and open row cultivation requiring balanced solar diffusion without compromising photosynthesis.
                </span>
              </div>

              <Link href="/products/agro-green-shade-net-50" className={styles.exploreLink}>
                <span>Explore 50% Agro Green Net</span>
                <ArrowRight size={16} className={styles.exploreLinkIcon} />
              </Link>
            </div>
          </section>

          {/* APPLICATION 02: GREENHOUSES & NURSERIES (Text Left, Image Right) */}
          <section
            className={styles.editorialSplitReverse}
            id="horticulture"
            aria-labelledby="app-title-02"
          >
            <div className={styles.editorialContent}>
              <div className={styles.numberedLabel}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>02 · Greenhouses & Nurseries</span>
              </div>

              <h2 id="app-title-02" className={styles.editorialTitle}>
                Controlled microclimates for seedling beds and nursery foliage.
              </h2>

              <p className={styles.editorialText}>
                Commercial polyhouses and plant propagation nurseries require
                consistent illumination without localized hot spots. Knitted
                shading materials installed across roof structures help growers
                moderate interior solar exposure, protecting sensitive seedlings
                and floriculture during peak daylight hours.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px 18px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-green-primary)" }}>
                  <CheckCircle2 size={16} />
                  <span>Recommended: Heavy Agro Shade Net 75% or 50%</span>
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-dark-subtle)", lineHeight: 1.4 }}>
                  75% density is ideal for delicate floriculture (orchids, anthuriums) and peak summer polyhouse roof cooling; 50% is standard for seedling nurseries.
                </span>
              </div>

              <Link href="/products/high-density-shade-net-75" className={styles.exploreLink}>
                <span>Explore 75% Heavy Agro Net</span>
                <ArrowRight size={16} className={styles.exploreLinkIcon} />
              </Link>
            </div>

            <div className={styles.editorialVisual}>
              <Image
                src="/images/shade-net-greenhouse.jpg"
                alt="Green shade net covering a greenhouse structure"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.editorialImage}
              />
            </div>
          </section>

          {/* APPLICATION 03: ARCHITECTURAL CANOPIES (Cinematic Wide Visual) */}
          <section
            className={styles.cinematicSection}
            id="architectural"
            aria-labelledby="app-title-03"
          >
            <Image
              src="/images/shade-net-canopy.jpg"
              alt="Green shade canopy structure installed over an outdoor space"
              fill
              sizes="100vw"
              className={styles.cinematicBackgroundImage}
            />

            <div className={styles.cinematicOverlayCard}>
              <div className={styles.numberedLabel}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>03 · Architectural Canopies</span>
              </div>

              <h2
                id="app-title-03"
                style={{
                  fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                  lineHeight: "var(--leading-tight)",
                  color: "var(--color-dark)",
                  fontWeight: 600,
                  marginBottom: "14px",
                }}
              >
                Modern tensile shade for pavilions, courtyards, and civil spaces.
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body)",
                  color: "var(--color-dark-subtle)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "20px",
                }}
              >
                Engineered protective fabrics used in outdoor structures,
                tensioned canopy sails, and public pavilions. Designed to provide
                clean visual aesthetics, physical UV filtration, and comfortable
                ambient shade for outdoor gatherings and walkways.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-green-primary)",
                  marginBottom: "20px",
                }}
              >
                <CheckCircle2 size={16} />
                <span>Recommended: Architectural Tensile Netting 85%</span>
              </div>

              <Link href="/products/architectural-tensile-shade-fabric" className={styles.exploreLink}>
                <span>Explore Architectural Tensile Netting</span>
                <ArrowRight size={16} className={styles.exploreLinkIcon} />
              </Link>
            </div>
          </section>

          {/* APPLICATION 04: COMMERCIAL & OUTDOOR SPACES (Split Layout) */}
          <section
            className={styles.editorialSplit}
            id="commercial"
            aria-labelledby="app-title-04"
          >
            <div className={styles.editorialVisual}>
              <Image
                src="/images/shade-net-roll.jpg"
                alt="Rolls of green shade netting stored for commercial distribution"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.editorialImage}
              />
            </div>

            <div className={styles.editorialContent}>
              <div className={styles.numberedLabel}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>04 · Commercial & Outdoor Spaces</span>
              </div>

              <h2 id="app-title-04" className={styles.editorialTitle}>
                Protective screening for parking lots, staging yards, and boundaries.
              </h2>

              <p className={styles.editorialText}>
                Heavy-duty shade fabrics deployed across commercial holding
                yards, vehicle parking shelters, and perimeter screening.
                Provides practical solar shading for vehicles and machinery,
                dampens windblown debris, and offers functional sight-line
                buffering.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px 18px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-green-primary)" }}>
                  <CheckCircle2 size={16} />
                  <span>Recommended: Commercial Shade Cloth 90%</span>
                </div>
                <span style={{ fontSize: "0.8125rem", color: "var(--color-dark-subtle)", lineHeight: 1.4 }}>
                  Maximum 90% opacity provides superior solar glare reduction and high privacy screening along perimeter chain-link fences and carports.
                </span>
              </div>

              <Link href="/products/commercial-shade-cloth-90" className={styles.exploreLink}>
                <span>Explore 90% Commercial Shade Cloth</span>
                <ArrowRight size={16} className={styles.exploreLinkIcon} />
              </Link>
            </div>
          </section>
        </div>
      </Container>

      {/* ====================================================================
          3. APPLICATION CTA
          ==================================================================== */}
      <section style={{ paddingBottom: "120px" }} aria-label="Application CTA">
        <Container>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-hero)",
              background:
                "linear-gradient(135deg, #111613 0%, #1A281F 55%, #183B25 100%)",
              color: "#FFFFFF",
              padding: "72px 48px",
              textAlign: "center",
              boxShadow: "0 24px 60px -12px rgba(17, 22, 19, 0.22)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 2,
                maxWidth: "680px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="yp-glass-pill"
                style={{
                  padding: "6px 14px",
                  marginBottom: "20px",
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
                  Application Support
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
                Not sure where to start?
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "rgba(255, 255, 255, 0.78)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "36px",
                }}
              >
                Tell us about your space and requirement. Our team will help
                you determine the appropriate netting type, density, and format.
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
                  Talk to Yogesh Plastics
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
                  Browse Products
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
