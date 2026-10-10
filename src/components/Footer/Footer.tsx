import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Container } from "../Container/Container";
import { Logo } from "../Navbar/Logo";
import { SITE_CONFIG, getPhoneHref, getEmailHref, getLocationHref } from "@/data/site";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const phoneHref = getPhoneHref(SITE_CONFIG.contact.phone);
  const emailHref = getEmailHref(SITE_CONFIG.contact.email);
  const locationHref = getLocationHref(SITE_CONFIG.contact.locationMapUrl);

  return (
    <footer className={styles.footerWrapper} role="contentinfo">
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.topGrid}>
            {/* BRAND COLUMN */}
            <div className={styles.brandCol}>
              <Logo />
              <p className={styles.brandDesc}>
                Precision manufacturer and supplier of shade nets, shade cloth,
                and microclimate protective netting engineered for agricultural,
                horticultural, and architectural installations.
              </p>
              <div className={styles.tagPill}>
                <span>Industrial Protective Solutions</span>
              </div>
            </div>

            {/* NAVIGATION COLUMN */}
            <div>
              <h3 className={styles.colTitle}>Navigation</h3>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <Link href="/">Home</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/about">About Yogesh Plastics</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/products">Product Catalogue</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/applications">Applications</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/contact">Contact & Enquiry</Link>
                </li>
              </ul>
            </div>

            {/* SECTORS / SOLUTIONS */}
            <div>
              <h3 className={styles.colTitle}>Applications</h3>
              <ul className={styles.linkList}>
                <li className={styles.linkItem}>
                  <Link href="/applications#agriculture">Agriculture & Farming</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/applications#horticulture">Greenhouse & Nursery</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/applications#architectural">Architectural & Tensile</Link>
                </li>
                <li className={styles.linkItem}>
                  <Link href="/applications#commercial">Construction & Debris</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT & CENTRALIZED CLIENT DATA */}
            <div>
              <h3 className={styles.colTitle}>Contact Details</h3>
              <div className={styles.contactInfoList}>
                {/* Phone */}
                <div className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                  <div>
                    {phoneHref ? (
                      <a href={phoneHref} className={styles.contactLink}>
                        {SITE_CONFIG.contact.phone}
                      </a>
                    ) : (
                      <span className={styles.placeholderNotice}>
                        {SITE_CONFIG.contact.phoneDisplay}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                  <div>
                    {emailHref ? (
                      <a href={emailHref} className={styles.contactLink}>
                        {SITE_CONFIG.contact.email}
                      </a>
                    ) : (
                      <span className={styles.placeholderNotice}>
                        {SITE_CONFIG.contact.emailDisplay}
                      </span>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className={styles.contactItem}>
                  <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                  <div>
                    {locationHref ? (
                      <a
                        href={locationHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                      >
                        {SITE_CONFIG.contact.location}
                      </a>
                    ) : (
                      <span className={styles.placeholderNotice}>
                        {SITE_CONFIG.contact.locationDisplay}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className={styles.bottomBar}>
            <div>
              © {currentYear} Yogesh Plastics. All rights reserved.
            </div>
            <div className={styles.bottomLinks}>
              <Link href="/contact">Direct Enquiry</Link>
              <Link href="/products">Catalogue</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
