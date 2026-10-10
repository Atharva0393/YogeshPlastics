import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/Container/Container";
import { Button } from "@/components/Button/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "calc(100vh - 88px - 320px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        backgroundColor: "var(--color-bg-primary)",
      }}
      aria-label="404 Page Not Found"
    >
      <Container>
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Subtle Tag Indicator */}
          <div
            className="yp-tag"
            style={{ marginBottom: "20px" }}
          >
            <Compass size={14} className="yp-tag-dot" style={{ background: "none" }} />
            <span>404 Error</span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--color-dark)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: "var(--leading-tight)",
              marginBottom: "16px",
            }}
          >
            That page doesn&apos;t exist.
          </h1>

          {/* Supporting Copy */}
          <p
            style={{
              fontSize: "var(--text-body-lg)",
              color: "var(--color-dark-subtle)",
              lineHeight: "var(--leading-relaxed)",
              marginBottom: "36px",
              maxWidth: "480px",
            }}
          >
            The link you followed may be broken or the product specifications
            may have been relocated. You can return to our homepage or explore
            our shade netting catalogue.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Button href="/" variant="primary" size="md">
              Back Home
            </Button>
            <Button
              href="/products"
              variant="secondary"
              size="md"
              rightIcon={<ArrowRight size={15} />}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
