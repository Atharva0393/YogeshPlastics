import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "green" | "secondary" | "glass" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  id?: string;
  "aria-label"?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  type = "button",
  style,
  target,
  rel,
  id,
  "aria-label": ariaLabel,
}) => {
  const combinedClasses = [
    styles.btn,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon && <span className={`${styles.icon} ${styles.iconLeft}`}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={`${styles.icon} ${styles.iconRight}`}>{rightIcon}</span>}
    </>
  );

  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          onClick={onClick}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          id={id}
          style={style}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick}
        id={id}
        style={style}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      id={id}
      style={style}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
