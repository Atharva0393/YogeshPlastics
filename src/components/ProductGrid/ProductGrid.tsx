import React from "react";
import styles from "./ProductGrid.module.css";

export interface ProductGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
  id?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  children,
  columns = 3,
  className = "",
  id,
}) => {
  const colClass =
    columns === 2
      ? styles.cols2
      : columns === 4
      ? styles.cols4
      : styles.cols3;

  return (
    <div id={id} className={`${styles.grid} ${colClass} ${className}`.trim()}>
      {children}
    </div>
  );
};
