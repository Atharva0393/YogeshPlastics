"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "../Button/Button";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isHeroState = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.headerWrapper} ${
          isHeroState ? styles.headerHero : ""
        } ${isScrolled ? styles.headerScrolled : ""}`}
      >
        <div
          className={`${styles.navbarContainer} ${
            isHeroState ? styles.navbarContainerHero : ""
          }`}
        >
          <nav
            className={`${styles.navBar} ${
              isHeroState ? styles.navBarHero : styles.navBarDefault
            } ${isScrolled ? styles.navBarScrolled : ""}`}
            aria-label="Main Navigation"
          >
            {/* LEFT: BRAND IDENTITY */}
            <Logo variant={isHeroState ? "hero" : "default"} />

            {/* CENTER: DESKTOP NAVIGATION */}
            <ul className={styles.navLinks} role="menubar">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li
                    key={link.href}
                    role="none"
                    className={styles.navItemWrapper}
                  >
                    <Link
                      href={link.href}
                      role="menuitem"
                      className={`${styles.navLink} ${
                        isHeroState
                          ? styles.navLinkHero
                          : styles.navLinkDefault
                      } ${isActive ? styles.navLinkActive : ""}`}
                    >
                      <span>{link.label}</span>
                      {/* Active Underline Indicator */}
                      {isActive && (
                        <span
                          className={`${styles.activeUnderline} ${
                            isHeroState ? styles.activeUnderlineHero : ""
                          }`}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* RIGHT: CONTACT / ENQUIRE CTA */}
            <div className={styles.actions}>
              <div className={styles.desktopCTA}>
                {isHeroState ? (
                  <Link
                    href="/contact"
                    className={styles.heroEnquirePill}
                    aria-label="Enquire Now"
                  >
                    <span>Enquire Now</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                ) : (
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    rightIcon={<ArrowUpRight size={15} />}
                  >
                    Enquire Now
                  </Button>
                )}
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                type="button"
                className={`${styles.mobileToggle} ${
                  isHeroState ? styles.mobileToggleHero : ""
                }`}
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu size={20} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE FLYOUT MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </>
  );
};
