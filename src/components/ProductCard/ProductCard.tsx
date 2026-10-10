import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import styles from "./ProductCard.module.css";

export interface ProductCardProps {
  slug: string;
  category: string;
  name: string;
  description: string;
  image: string;
  imageAlt?: string;
  badge?: string;
  className?: string;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  slug,
  category,
  name,
  description,
  image,
  imageAlt,
  badge,
  className = "",
  featured = false,
}) => {
  return (
    <Link
      href={`/products/${slug}`}
      className={`${styles.card} ${featured ? styles.featured : ""} ${className}`.trim()}
      aria-label={`View details for ${name}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={imageAlt || `Protective shade netting — ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {badge && (
          <div className={styles.badge}>
            <div className="yp-glass-pill" style={{ padding: "4px 12px" }}>
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-wide)",
                  color: "var(--color-dark)",
                }}
              >
                {badge}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <span className={styles.actionText}>
            <span>Explore</span>
            <ArrowRight size={16} className={styles.actionIcon} />
          </span>
        </div>
      </div>
    </Link>
  );
};
