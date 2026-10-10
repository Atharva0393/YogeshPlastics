import React from "react";
import styles from "./PageTransition.module.css";

export interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`${styles.pageWrapper} ${className}`.trim()}>
      {children}
    </div>
  );
};
