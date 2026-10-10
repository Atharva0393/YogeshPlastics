import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button/Button";
import styles from "./CTASection.module.css";

export interface CTASectionProps {
  tag?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  tag = "DIRECT ENQUIRIES & SAMPLES",
  title = "Partner with Yogesh Plastics for Precision Netting Solutions",
  description = "Get in touch with our team for shade factor recommendations, standard roll specifications, custom netting enquiries, and prompt project assistance.",
  primaryCtaText = "Enquire Now",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Product Range",
  secondaryCtaHref = "/products",
  className = "",
}) => {
  return (
    <section className={`${styles.wrapper} ${className}`.trim()} aria-label="Call to action">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.inner}>
        {tag && (
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{tag}</span>
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button
            href={primaryCtaHref}
            variant="green"
            size="lg"
            rightIcon={<ArrowRight size={18} />}
          >
            {primaryCtaText}
          </Button>
          {secondaryCtaText && secondaryCtaHref && (
            <Button
              href={secondaryCtaHref}
              variant="glass"
              size="lg"
              style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};
