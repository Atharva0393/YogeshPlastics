import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Info,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";
import { GlassCard } from "@/components/GlassCard/GlassCard";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { ProductGallery } from "@/components/ProductGallery/ProductGallery";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";

export const instant = false;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `Yogesh Plastics | ${product.name}`,
      description: product.shortDescription,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);

  // Schema.org structured data for verified product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `https://yogeshplastics.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Yogesh Plastics",
    },
    category: product.category,
    material: "High-Density Polyethylene Mesh",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "INR",
      description: "Quotation supplied upon direct inquiry based on roll dimensions and volume.",
    },
  };

  return (
    <PageTransition>
      {/* Schema.org Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div style={{ paddingTop: "var(--space-2xl)", paddingBottom: "var(--space-5xl)" }}>
        <Container>
          {/* Breadcrumb Navigation & Back to Products Link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "36px",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <nav
              aria-label="Breadcrumb"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.875rem",
                color: "var(--color-dark-subtle)",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/"
                style={{
                  color: "var(--color-dark-subtle)",
                  transition: "color var(--duration-fast)",
                }}
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/products"
                style={{
                  color: "var(--color-dark-subtle)",
                  transition: "color var(--duration-fast)",
                }}
              >
                Products
              </Link>
              <span aria-hidden="true">/</span>
              <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>
                {product.name}
              </span>
            </nav>

            <Link
              href="/products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.875rem",
                color: "var(--color-dark-subtle)",
                fontWeight: 500,
                transition: "color var(--duration-fast)",
              }}
            >
              <ArrowLeft size={15} />
              <span>Back to Products</span>
            </Link>
          </div>

          {/* ================================================================
              PRODUCT DETAIL HERO (Desktop Split Layout)
              ================================================================ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr",
              gap: "64px",
              alignItems: "start",
              marginBottom: "88px",
            }}
            className="yp-product-split"
          >
            {/* LEFT: Refined Interactive Gallery */}
            <div>
              <ProductGallery
                images={product.gallery}
                productName={product.name}
                badge={product.shadeFactor}
              />
            </div>

            {/* RIGHT: Product Headline, Description & CTAs */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="yp-tag" style={{ marginBottom: "16px" }}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>{product.category}</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
                  lineHeight: "var(--leading-tight)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-tight)",
                  color: "var(--color-dark)",
                  marginBottom: "16px",
                  maxWidth: "640px",
                }}
              >
                {product.name}
              </h1>

              <p
                style={{
                  fontSize: "var(--text-body-lg)",
                  color: "var(--color-dark-subtle)",
                  lineHeight: "var(--leading-relaxed)",
                  marginBottom: "28px",
                }}
              >
                {product.shortDescription}
              </p>

              {/* Primary & Secondary Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "36px",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  variant="green"
                  size="lg"
                  rightIcon={<ArrowUpRight size={18} />}
                >
                  Enquire About This Product
                </Button>

                <Button
                  href="/products"
                  variant="secondary"
                  size="lg"
                  leftIcon={<ArrowLeft size={16} />}
                >
                  Back to Products
                </Button>
              </div>

              {/* Availability Notice */}
              <div
                style={{
                  padding: "18px 22px",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "var(--text-label)",
                    fontWeight: 600,
                    letterSpacing: "var(--tracking-wide)",
                    textTransform: "uppercase",
                    color: "var(--color-green-primary)",
                    marginBottom: "4px",
                  }}
                >
                  Supply & Availability
                </span>
                <p
                  style={{
                    fontSize: "var(--text-body-sm)",
                    color: "var(--color-dark-muted)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {product.availability}
                </p>
              </div>
            </div>
          </div>

          {/* ================================================================
              STRUCTURED PRODUCT INFORMATION (Overview, Specs, Applications, FAQs)
              ================================================================ */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "48px",
              alignItems: "start",
              marginBottom: "88px",
            }}
            className="yp-product-split"
          >
            {/* Left Column: Overview, Applications, Key Benefits & Product FAQs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
              {/* Overview Section */}
              <GlassCard padding="lg">
                <h2
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginBottom: "16px",
                    color: "var(--color-dark)",
                  }}
                >
                  Product Overview
                </h2>
                <p
                  style={{
                    fontSize: "var(--text-body)",
                    color: "var(--color-dark-subtle)",
                    lineHeight: "var(--leading-relaxed)",
                    margin: 0,
                  }}
                >
                  {product.description}
                </p>

                {/* Selection Tip Banner */}
                {product.selectionTip && (
                  <div
                    style={{
                      marginTop: "24px",
                      padding: "16px 20px",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-bg-secondary)",
                      border: "1px solid var(--color-border-subtle)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <Info
                      size={18}
                      color="var(--color-green-primary)"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <div>
                      <span
                        style={{
                          display: "block",
                          fontSize: "var(--text-label)",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "var(--tracking-wide)",
                          color: "var(--color-green-primary)",
                          marginBottom: "4px",
                        }}
                      >
                        Selection Guidance
                      </span>
                      <p
                        style={{
                          fontSize: "var(--text-body-sm)",
                          color: "var(--color-dark-muted)",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {product.selectionTip}
                      </p>
                    </div>
                  </div>
                )}
              </GlassCard>

              {/* Key Benefits (if available) */}
              {product.keyBenefits && product.keyBenefits.length > 0 && (
                <GlassCard padding="lg">
                  <h2
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 600,
                      marginBottom: "16px",
                      color: "var(--color-dark)",
                    }}
                  >
                    Engineering & Performance Highlights
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {product.keyBenefits.map((benefit, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                          fontSize: "0.9375rem",
                          color: "var(--color-dark-muted)",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={18}
                          color="var(--color-green-primary)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              )}

              {/* Applications Section */}
              <GlassCard padding="lg">
                <h2
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    marginBottom: "16px",
                    color: "var(--color-dark)",
                  }}
                >
                  Recommended Applications
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {product.applications.map((app, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "0.9375rem",
                        color: "var(--color-dark-muted)",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color="var(--color-green-primary)"
                        style={{ flexShrink: 0 }}
                      />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Product Technical FAQs (if defined) */}
              {product.faqs && product.faqs.length > 0 && (
                <GlassCard padding="lg">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "16px",
                    }}
                  >
                    <HelpCircle size={18} color="var(--color-green-primary)" />
                    <h2
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 600,
                        color: "var(--color-dark)",
                        margin: 0,
                      }}
                    >
                      Frequently Asked Questions
                    </h2>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    {product.faqs.map((faq, index) => (
                      <details
                        key={index}
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid var(--color-border-subtle)",
                          borderRadius: "var(--radius-md)",
                          padding: "16px 20px",
                          cursor: "pointer",
                        }}
                      >
                        <summary
                          style={{
                            fontSize: "0.9375rem",
                            fontWeight: 600,
                            color: "var(--color-dark)",
                            outline: "none",
                            userSelect: "none",
                            listStyle: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{faq.question}</span>
                          <span
                            style={{
                              color: "var(--color-green-primary)",
                              fontSize: "1.2rem",
                              lineHeight: 1,
                              marginLeft: "12px",
                            }}
                          >
                            +
                          </span>
                        </summary>
                        <p
                          style={{
                            marginTop: "12px",
                            marginBottom: 0,
                            fontSize: "0.875rem",
                            color: "var(--color-dark-subtle)",
                            lineHeight: 1.6,
                            paddingTop: "12px",
                            borderTop: "1px solid rgba(17, 22, 19, 0.06)",
                          }}
                        >
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </GlassCard>
              )}
            </div>

            {/* Right Column: Refined Specification Grid */}
            <div style={{ position: "sticky", top: "110px" }}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "var(--radius-card)",
                  border: "1px solid var(--color-border-subtle)",
                  boxShadow: "var(--shadow-card)",
                  padding: "32px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    paddingBottom: "14px",
                    borderBottom: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 600,
                      color: "var(--color-dark)",
                      margin: 0,
                    }}
                  >
                    Technical Specifications
                  </h2>
                  <span
                    style={{
                      fontSize: "var(--text-label)",
                      fontWeight: 600,
                      color: "var(--color-green-primary)",
                      letterSpacing: "var(--tracking-wide)",
                      textTransform: "uppercase",
                    }}
                  >
                    Overview
                  </span>
                </div>

                {/* Clean Editorial Specs Grid */}
                <dl
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    margin: 0,
                  }}
                >
                  {product.specifications.map((spec, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        paddingBottom: "12px",
                        borderBottom: "1px solid rgba(17, 22, 19, 0.05)",
                        gap: "16px",
                      }}
                    >
                      <dt
                        style={{
                          fontSize: "var(--text-body-sm)",
                          color: "var(--color-dark-subtle)",
                          fontWeight: 500,
                        }}
                      >
                        {spec.label}
                      </dt>
                      <dd
                        style={{
                          fontSize: "var(--text-body-sm)",
                          fontWeight: 600,
                          color: "var(--color-dark)",
                          textAlign: "right",
                          margin: 0,
                        }}
                      >
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Product Specification Guidance */}
                <div
                  style={{
                    marginTop: "24px",
                    padding: "12px 14px",
                    borderRadius: "var(--radius-xs)",
                    backgroundColor: "rgba(17, 22, 19, 0.03)",
                    border: "1px dashed var(--color-border-medium)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <ShieldAlert
                    size={16}
                    color="var(--color-dark-subtle)"
                    style={{ flexShrink: 0, marginTop: "2px" }}
                  />
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--color-dark-subtle)",
                      margin: 0,
                      lineHeight: 1.45,
                    }}
                  >
                    {product.specificationNote ||
                      "Standard category specifications shown. Exact roll dimensions, fabric weights, and specific project parameters are confirmed upon direct enquiry."}
                  </p>
                </div>

                {/* Direct Inline Enquiry CTA */}
                <div style={{ marginTop: "28px" }}>
                  <Button
                    href={`/contact?product=${encodeURIComponent(product.slug)}`}
                    variant="primary"
                    size="md"
                    fullWidth
                    rightIcon={<ArrowRight size={16} />}
                  >
                    Request Quote for This Product
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================================
              RELATED PRODUCTS SECTION (Section 18)
              ================================================================ */}
          <div style={{ marginBottom: "var(--space-5xl)" }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "36px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div>
                <div className="yp-tag" style={{ marginBottom: "10px" }}>
                  <span className="yp-tag-dot" aria-hidden="true" />
                  <span>Related Solutions</span>
                </div>
                <h2 style={{ fontSize: "var(--text-h2)", fontWeight: 600 }}>
                  Related Products
                </h2>
              </div>

              <Button
                href="/products"
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight size={14} />}
              >
                View Full Catalogue
              </Button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "28px",
              }}
              className="yp-grid-3"
            >
              {relatedProducts.map((relProduct) => (
                <ProductCard
                  key={relProduct.slug}
                  slug={relProduct.slug}
                  category={relProduct.category}
                  name={relProduct.name}
                  description={relProduct.shortDescription}
                  image={relProduct.image}
                  imageAlt={relProduct.imageAlt}
                  badge={relProduct.shadeFactor}
                />
              ))}
            </div>
          </div>

          {/* ================================================================
              FULL-WIDTH PREMIUM CTA (Section 19)
              ================================================================ */}
          <section>
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
                    Custom Requirements
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
                  rightIcon={<ArrowRight size={18} />}
                >
                  Talk to Yogesh Plastics
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </PageTransition>
  );
}
