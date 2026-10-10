import React from "react";
import styles from "./GlassCard.module.css";

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  as?: React.ElementType;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  padding = "md",
  as: Component = "div",
  id,
  onClick,
}) => {
  const paddingClass =
    padding === "none"
      ? styles.paddingNone
      : padding === "sm"
      ? styles.paddingSm
      : padding === "lg"
      ? styles.paddingLg
      : styles.paddingMd;

  return (
    <Component
      id={id}
      onClick={onClick}
      className={`${styles.card} ${paddingClass} ${className}`.trim()}
    >
      {children}
    </Component>
  );
};
