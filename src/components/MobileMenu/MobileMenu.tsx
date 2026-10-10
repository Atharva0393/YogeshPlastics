"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { Logo } from "../Navbar/Logo";
import { Button } from "../Button/Button";
import styles from "./MobileMenu.module.css";

interface NavLinkItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
}) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className={styles.header}>
          <Logo />
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close Navigation Menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navItem} ${
                  isActive ? styles.navItemActive : ""
                }`}
                onClick={onClose}
              >
                <span>{link.label}</span>
                <ArrowRight size={18} opacity={isActive ? 1 : 0.4} />
              </Link>
            );
          })}
        </nav>

        <div className={styles.footerActions}>
          <Button
            href="/contact"
            variant="green"
            size="lg"
            fullWidth
            onClick={onClose}
          >
            Enquire Now
          </Button>
          <div className={styles.notice}>
            Manufacturer of premium shade & protective netting solutions
          </div>
        </div>
      </div>
    </div>
  );
};
