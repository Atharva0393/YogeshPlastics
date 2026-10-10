import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface LogoProps {
  className?: string;
  variant?: "default" | "hero";
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "default",
}) => {
  const isHero = variant === "hero";

  return (
    <Link
      href="/"
      className={`${styles.logoLink} ${className}`.trim()}
      aria-label="Yogesh Plastics Home"
    >
      <div className={styles.logoMark} aria-hidden="true">
        {/* Botanical Mark: Forest Green Rounded Square with Stylized Botanical Leaf */}
        <svg
          width="34"
          height="34"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="9" fill="#204B32" />
          {/* Upper-right main botanical leaf */}
          <path
            d="M17.5 18C17 13.5 20 10.5 25 10.5C25 15.5 22 18.5 17.5 18Z"
            fill="#FFFFFF"
          />
          {/* Lower-left secondary botanical leaf */}
          <path
            d="M15 19.8C12.5 18 12.2 15.5 13.5 14.2C15.2 14.5 16.8 17.2 15 19.8Z"
            fill="#FFFFFF"
          />
          {/* Organic curved stem */}
          <path
            d="M11.5 24.5C13.5 22 16.5 18 22.5 12.5"
            stroke="#FFFFFF"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className={styles.logoTextGroup}>
        <span
          className={`${styles.brandName} ${
            isHero ? styles.brandNameHero : ""
          }`}
        >
          YOGESH PLASTICS
        </span>
      </div>
    </Link>
  );
};
