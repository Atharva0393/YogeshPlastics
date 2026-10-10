"use client";

import React, { useState, useMemo } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { Product } from "@/data/products";
import styles from "./ProductCatalogue.module.css";

interface CategoryFilterOption {
  id: string;
  label: string;
}

const CATEGORIES: CategoryFilterOption[] = [
  { id: "all", label: "All Products" },
  { id: "shade-nets", label: "Shade Nets" },
  { id: "agricultural", label: "Agricultural" },
  { id: "commercial", label: "Commercial" },
  { id: "architectural", label: "Architectural" },
];

interface ProductCatalogueProps {
  products: Product[];
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  products,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    if (activeCategory === "shade-nets") {
      // In shade netting catalogue, return products in agricultural or shade lines
      return products.filter(
        (p) =>
          p.uiCategory === "agricultural" ||
          p.uiCategory === "shade-nets" ||
          p.name.toLowerCase().includes("shade")
      );
    }
    return products.filter((p) => p.uiCategory === activeCategory);
  }, [products, activeCategory]);

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return products.length;
    if (categoryId === "shade-nets") {
      return products.filter(
        (p) =>
          p.uiCategory === "agricultural" ||
          p.uiCategory === "shade-nets" ||
          p.name.toLowerCase().includes("shade")
      ).length;
    }
    return products.filter((p) => p.uiCategory === categoryId).length;
  };

  return (
    <div className={styles.wrapper}>
      {/* Horizontal Category Filter Bar */}
      <nav aria-label="Product categories" className={styles.filterBar}>
        <div className={styles.pillGroup} role="tablist">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`${styles.filterPill} ${
                  isActive ? styles.filterPillActive : ""
                }`}
              >
                <span>{cat.label}</span>
                <span className={styles.pillCount}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.resultCount}>
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? "solution" : "solutions"}
        </div>
      </nav>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className={styles.catalogueGrid}>
          {filteredProducts.map((product) => {
            const isFeatured =
              Boolean(product.isFeatured) && activeCategory === "all";

            return (
              <ProductCard
                key={product.slug}
                slug={product.slug}
                category={product.category}
                name={product.name}
                description={product.shortDescription}
                image={product.image}
                imageAlt={product.imageAlt}
                badge={product.shadeFactor}
                featured={isFeatured}
              />
            );
          })}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h3>No products in this specific category</h3>
          <p style={{ color: "var(--color-dark-subtle)" }}>
            Please select another category or view all products.
          </p>
          <button
            type="button"
            className={`${styles.filterPill} ${styles.filterPillActive}`}
            onClick={() => setActiveCategory("all")}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
