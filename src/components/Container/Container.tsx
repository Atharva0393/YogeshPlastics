import React from "react";
import styles from "./Container.module.css";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "fluid";
  as?: React.ElementType;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  as: Component = "div",
  id,
}) => {
  return (
    <Component
      id={id}
      className={`${styles.container} ${styles[size]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
};
