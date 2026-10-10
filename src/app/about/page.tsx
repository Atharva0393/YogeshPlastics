import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import styles from "@/styles/about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Yogesh Plastics — specialized manufacturer of shade nets and protective netting solutions designed for practical outdoor and agricultural applications.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* ====================================================================
          1. ABOUT HERO SECTION (Part A, Section 2 & 3)
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="About Hero">
        <Container>
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>About Yogesh Plastics</span>
            </div>

            <h1 className={styles.heroTitle}>Built around better shade.</h1>

            <p className={styles.heroSubtitle}>
              Yogesh Plastics focuses on shade and protective netting products
              designed for practical outdoor, agricultural, and architectural
              applications. We provide durable netting solutions that moderate
              direct sunlight, manage heat exposure, and safeguard valuable
              growing and commercial spaces.
            </p>
          </div>

          {/* Large Photographic Campaign Composition */}
          <div className={styles.heroVisualContainer}>
            <Image
              src="/images/shade-net-canopy.jpg"
              alt="Green shade canopy structure installed over an outdoor space"
              fill
              priority
              sizes="100vw"
              className={styles.heroImage}
            />
          </div>
        </Container>
      </section>

      {/* ====================================================================
          2. COMPANY STATEMENT SECTION (Part A, Section 4)
          ==================================================================== */}
      <section
        className={styles.statementSection}
        aria-label="Company Statement"
      >
        <Container>
          <div className={styles.statementGrid}>
            <div className={styles.statementLabel}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>The Approach</span>
            </div>

            <div>
              <h2 className={styles.statementHeading}>
                Simple materials. Thoughtful applications. Practical shade.
              </h2>
              <p className={styles.statementBody}>
                We believe effective protective netting is defined by honesty in
                material choice and precision in weave. By focusing strictly on
                how shade cloth interacts with real-world solar radiation, wind,
                and outdoor moisture, we provide solutions that deliver
                dependable, repeatable performance without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          3. BUSINESS FOCUS (Part A, Section 5 & 6: Numbered Editorial Pillars)
          ==================================================================== */}
      <section className={styles.focusSection} aria-label="Business Focus">
        <Container>
          <div className={styles.focusGrid}>
            {/* Left Sticky Header */}
            <div className={styles.focusStickyLeft}>
              <div className="yp-tag" style={{ marginBottom: "14px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>What We Focus On</span>
              </div>
              <h2 className={styles.focusTitle}>
                Positioning principles centered on functional outdoor protection.
              </h2>
              <p className={styles.focusSubtitle}>
                Our product direction is guided by physical functionality rather
                than abstract corporate claims.
              </p>
            </div>

            {/* Right Numbered Editorial List */}
            <div className={styles.focusPillarsList}>
              <div className={styles.focusPillarItem}>
                <span className={styles.pillarNumber}>01</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Shade</h3>
                  <p className={styles.pillarDescription}>
                    Products designed around controlled sunlight and specific
                    shade requirements, ensuring dependable solar moderation for
                    crops, nurseries, and structures.
                  </p>
                </div>
              </div>

              <div className={styles.focusPillarItem}>
                <span className={styles.pillarNumber}>02</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Material</h3>
                  <p className={styles.pillarDescription}>
                    A continuous focus on practical netting and shade materials
                    engineered to withstand continuous exposure to weather,
                    tension, and ultraviolet light.
                  </p>
                </div>
              </div>

              <div className={styles.focusPillarItem}>
                <span className={styles.pillarNumber}>03</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Application</h3>
                  <p className={styles.pillarDescription}>
                    Solutions crafted for different outdoor environments — from
                    commercial greenhouse roofing and field boundaries to
                    tensioned architectural structures.
                  </p>
                </div>
              </div>

              <div className={styles.focusPillarItem}>
                <span className={styles.pillarNumber}>04</span>
                <div className={styles.pillarContent}>
                  <h3 className={styles.pillarTitle}>Requirement</h3>
                  <p className={styles.pillarDescription}>
                    Products can be selected based on the specific use case,
                    helping clients determine the appropriate density, roll
                    dimensions, and physical format.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          4. MATERIAL STORY SECTION (Part A, Section 7)
          ==================================================================== */}
      <section className={styles.materialSection} aria-label="The Material">
        <Container>
          <div className={styles.materialContainer}>
            <Image
              src="/images/shade-net-macro.jpg"
              alt="Close-up of woven green shade net material"
              fill
              sizes="100vw"
              className={styles.materialBackgroundImage}
            />

            {/* Floating Glass Editorial Card */}
            <div className={styles.materialCard}>
              <div className="yp-tag" style={{ marginBottom: "16px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>The Material</span>
              </div>

              <h2 className={styles.materialTitle}>Designed around shade.</h2>

              <p className={styles.materialDescription}>
                Our netting is manufactured to be handled, installed, and
                exposed to the elements. From the knit density of the yarn to
                the flexibility of the finished roll, every physical detail is
                oriented toward reliable solar moderation and enduring
                structural function.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(17, 22, 19, 0.08)",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-green-primary)",
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "var(--color-dark-muted)",
                  }}
                >
                  Tactile Polymer Knits · Field-Proven Durability
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          5. WORKING PHILOSOPHY (Part A, Section 8: Requirement Behind Orders)
          ==================================================================== */}
      <section
        className={styles.philosophySection}
        aria-label="Working Philosophy"
      >
        <Container>
          <div className={styles.philosophyHeader}>
            <div className="yp-tag" style={{ marginBottom: "14px" }}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>How We Work</span>
            </div>
            <h2
              style={{
                fontSize: "var(--text-h2)",
                fontWeight: 600,
                color: "var(--color-dark)",
                lineHeight: "var(--leading-tight)",
                marginBottom: "16px",
              }}
            >
              Focused on the requirement behind every order.
            </h2>
            <p
              style={{
                fontSize: "var(--text-body-lg)",
                color: "var(--color-dark-subtle)",
                lineHeight: "var(--leading-relaxed)",
                margin: 0,
              }}
            >
              We believe product selection should always begin with understanding
              the practical setting. We work with clients through four core
              evaluations:
            </p>
          </div>

          <div className={styles.philosophyGrid}>
            <div className={styles.philosophyCard}>
              <span className={styles.stepNumber}>Step 01</span>
              <h3 className={styles.stepTitle}>Where It Will Be Used</h3>
              <p className={styles.stepDescription}>
                Evaluating whether the installation is an open field, greenhouse
                roof, perimeter fence, or tensioned architectural canopy.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.stepNumber}>Step 02</span>
              <h3 className={styles.stepTitle}>Required Shade Level</h3>
              <p className={styles.stepDescription}>
                Aligning the netting density with the specific solar sensitivity
                of the plants, livestock, or shaded occupants.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.stepNumber}>Step 03</span>
              <h3 className={styles.stepTitle}>Environmental Exposure</h3>
              <p className={styles.stepDescription}>
                Considering expected wind loads, ultraviolet intensity, dust,
                and seasonal weather conditions at the site.
              </p>
            </div>

            <div className={styles.philosophyCard}>
              <span className={styles.stepNumber}>Step 04</span>
              <h3 className={styles.stepTitle}>Dimensions & Format</h3>
              <p className={styles.stepDescription}>
                Identifying the appropriate roll widths, continuous lengths, or
                reinforced selvedge edging needed for installation.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          6. ABOUT CTA (Part A, Section 9)
          ==================================================================== */}
      <section style={{ padding: "100px 0 120px" }} aria-label="About Enquiry Callout">
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
                  Direct Consultation
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
                Have a specific shade requirement?
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "rgba(255, 255, 255, 0.78)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "36px",
                }}
              >
                Tell us what you are working with and we will help you identify
                the right direction for your space and application.
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
