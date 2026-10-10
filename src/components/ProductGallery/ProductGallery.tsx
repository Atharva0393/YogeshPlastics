"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badge?: string;
}

function getImageDescription(src: string, productName: string): string {
  if (src.includes("shade-net-macro")) {
    return `Close-up of woven green shade net material — ${productName}`;
  }
  if (src.includes("shade-net-greenhouse")) {
    return `Green shade net covering a greenhouse — ${productName}`;
  }
  if (src.includes("shade-net-roll")) {
    return `Rolls of green shade netting — ${productName}`;
  }
  if (src.includes("shade-net-canopy")) {
    return `Green shade canopy structure — ${productName}`;
  }
  return `Protective shade netting — ${productName}`;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  badge,
}) => {
  const [selectedImage, setSelectedImage] = useState<string>(images[0] || "");

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={styles.galleryWrapper} aria-label={`Image gallery for ${productName}`}>
      {/* Primary Main Image */}
      <div className={styles.mainImageContainer}>
        <Image
          src={selectedImage}
          alt={getImageDescription(selectedImage, productName)}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={styles.mainImage}
        />

        {badge && (
          <div className={styles.badge}>
            <div className="yp-glass-pill" style={{ padding: "6px 14px" }}>
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

      {/* Thumbnails Row (if more than 1 image) */}
      {images.length > 1 && (
        <div className={styles.thumbnailRow} role="tablist" aria-label="Product image thumbnails">
          {images.map((img, index) => {
            const isSelected = img === selectedImage;

            return (
              <button
                key={`${img}-${index}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-label={`Show ${productName} image ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`${styles.thumbnailButton} ${
                  isSelected ? styles.thumbnailButtonActive : ""
                }`}
              >
                <Image
                  src={img}
                  alt={getImageDescription(img, productName)}
                  fill
                  sizes="84px"
                  className={styles.thumbnailImage}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
