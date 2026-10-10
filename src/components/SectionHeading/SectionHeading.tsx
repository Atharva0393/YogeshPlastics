import React from "react";
import styles from "./SectionHeading.module.css";

export interface SectionHeadingProps {
  tag?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  tagVariant?: "green" | "neutral";
  className?: string;
  id?: string;
  level?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = "left",
  tagVariant = "green",
  className = "",
  id,
  level = "h2",
}) => {
  const HeadingTag = level;

  return (
    <header className={`${styles.wrapper} ${styles[align]} ${className}`.trim()} id={id}>
      {tag && (
        <div
          className={`${styles.tag} ${
            tagVariant === "neutral" ? "yp-tag yp-tag-neutral" : "yp-tag"
          }`}
        >
          <span className="yp-tag-dot" aria-hidden="true" />
          <span>{tag}</span>
        </div>
      )}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
};
