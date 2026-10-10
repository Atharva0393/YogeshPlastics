import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { ProductCatalogue } from "@/components/ProductCatalogue/ProductCatalogue";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Yogesh Plastics' complete catalogue of high-density polyethylene shade nets, greenhouse fabrics, and architectural protective netting.",
};

export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yogesh Plastics Shade Netting Catalogue",
    description: "Knitted polyethylene shade nets and protective mesh solutions.",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `https://yogeshplastics.com/products/${product.slug}`,
    })),
  };

  return (
    <PageTransition>
      {/* Schema.org ItemList Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ====================================================================
          1. PRODUCTS EDITORIAL HERO (Section 2 & 3)
          ==================================================================== */}
      <section
        style={{
          paddingTop: "var(--space-2xl)",
          paddingBottom: "var(--space-5xl)",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
        aria-label="Products Catalogue Introduction"
      >
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.95fr",
              gap: "56px",
              alignItems: "center",
            }}
            className="yp-product-split"
          >
            {/* Left: Editorial Header & Statement */}
            <div>
              <div className="yp-tag" style={{ marginBottom: "16px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>Our Products</span>
              </div>

              <h1
                style={{
                  fontSize: "var(--text-h1)",
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-tighter)",
                  color: "var(--color-dark)",
                  fontWeight: 600,
                  marginBottom: "20px",
                  maxWidth: "680px",
                }}
              >
                Materials for better shade.
              </h1>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--color-dark-subtle)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "32px",
                  maxWidth: "560px",
                }}
              >
                Yogesh Plastics manufactures knitted shade nets and protective
                fabrics designed to control radiant sunlight, reduce heat stress,
                and provide dependable outdoor microclimates across agricultural,
                horticultural, and structural installations.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--color-border-subtle)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                    }}
                  >
                    50% to 90%
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-label)",
                      color: "var(--color-dark-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wide)",
                    }}
                  >
                    Shade Factors
                  </span>
                </div>

                <div
                  style={{
                    width: "1px",
                    height: "32px",
                    backgroundColor: "var(--color-border-medium)",
                  }}
                  aria-hidden="true"
                />

                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                    }}
                  >
                    HDPE Polymer
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-label)",
                      color: "var(--color-dark-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wide)",
                    }}
                  >
                    Polymer Base
                  </span>
                </div>

                <div
                  style={{
                    width: "1px",
                    height: "32px",
                    backgroundColor: "var(--color-border-medium)",
                  }}
                  aria-hidden="true"
                />

                <div>
                  <span
                    style={{
                      display: "block",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                    }}
                  >
                    Direct Supply
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-label)",
                      color: "var(--color-dark-subtle)",
                      textTransform: "uppercase",
                      letterSpacing: "var(--tracking-wide)",
                    }}
                  >
                    Roll Dimensions
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Large Editorial Visual */}
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3.4",
                  borderRadius: "var(--radius-hero)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  border: "1px solid var(--color-border-subtle)",
                  backgroundColor: "var(--color-bg-secondary)",
                }}
              >
                <Image
                  src="/images/shade-net-roll.jpg"
                  alt="Rolls of green shade netting stored for distribution"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />

                {/* Subtle glass badge overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "20px",
                    right: "20px",
                    padding: "14px 20px",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.7)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        display: "block",
                        fontSize: "var(--text-label)",
                        fontWeight: 600,
                        letterSpacing: "var(--tracking-wider)",
                        textTransform: "uppercase",
                        color: "var(--color-green-primary)",
                      }}
                    >
                      Manufactured Rolls
                    </span>
                    <span
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--color-dark)",
                      }}
                    >
                      Commercial Netting Catalogue
                    </span>
                  </div>
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-green-primary)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          2. PRODUCT CATALOGUE SECTION (Filter Pills + Product Grid)
          ==================================================================== */}
      <section style={{ paddingTop: "var(--space-3xl)", paddingBottom: "var(--space-5xl)" }} id="catalogue">
        <Container>
          <ProductCatalogue products={PRODUCTS} />
        </Container>
      </section>

      {/* ====================================================================
          3. FULL-WIDTH PREMIUM CTA SECTION
          ==================================================================== */}
      <section style={{ paddingBottom: "var(--space-5xl)" }}>
        <Container>
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "var(--radius-hero)",
              background:
                "linear-gradient(135deg, #111613 0%, #19271E 60%, #153723 100%)",
              color: "#FFFFFF",
              padding: "72px 48px",
              textAlign: "center",
              boxShadow: "0 24px 60px -12px rgba(17, 22, 19, 0.2)",
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
                  Technical Consultation
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
                Not sure which shade solution fits your requirement?
              </h2>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "rgba(255, 255, 255, 0.78)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "36px",
                }}
              >
                Tell us what you are working with. Our technical team can advise
                on suitable shade percentages, wind resistance, and custom roll
                widths.
              </p>

              <Button
                href="/contact"
                variant="green"
                size="lg"
              >
                Talk to Yogesh Plastics
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
