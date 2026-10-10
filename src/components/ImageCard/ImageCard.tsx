import React from "react";
import Image from "next/image";
import styles from "./ImageCard.module.css";

export interface ImageCardProps {
  src: string;
  alt: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  aspectRatio?: "4/3" | "16/9" | "square";
  className?: string;
  priority?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  badge,
  title,
  subtitle,
  aspectRatio = "4/3",
  className = "",
  priority = false,
}) => {
  const aspectClass =
    aspectRatio === "16/9"
      ? styles.aspect169
      : aspectRatio === "square"
      ? styles.aspectSquare
      : styles.aspect43;

  return (
    <div className={`${styles.container} ${className}`.trim()}>
      <div className={`${styles.imageWrapper} ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
          priority={priority}
        />

        {badge && (
          <div className={styles.badge}>
            <div className="yp-glass-pill" style={{ padding: "6px 14px" }}>
              <span
                style={{
                  fontSize: "var(--text-label)",
                  fontWeight: 600,
                  letterSpacing: "var(--tracking-wider)",
                  color: "var(--color-dark)",
                  textTransform: "uppercase",
                }}
              >
                {badge}
              </span>
            </div>
          </div>
        )}

        {(title || subtitle) && (
          <div className={styles.overlay}>
            {title && <h3 className={styles.overlayTitle}>{title}</h3>}
            {subtitle && <p className={styles.overlaySubtitle}>{subtitle}</p>}
          </div>
        )}
      </div>
    </div>
  );
};
