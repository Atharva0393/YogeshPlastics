import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container/Container";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import {
  SITE_CONFIG,
  getPhoneHref,
  getEmailHref,
  getWhatsAppHref,
  getLocationHref,
} from "@/data/site";
import styles from "@/styles/contact.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Yogesh Plastics to discuss shade nets, custom dimensions, roll specifications, or general protective netting enquiries.",
};

export default function ContactPage() {
  const phoneHref = getPhoneHref(SITE_CONFIG.contact.phone);
  const emailHref = getEmailHref(SITE_CONFIG.contact.email);
  const whatsappHref = getWhatsAppHref(
    SITE_CONFIG.contact.whatsapp,
    "Hello Yogesh Plastics, I would like to enquire about your shade netting products."
  );
  const locationHref = getLocationHref(SITE_CONFIG.contact.locationMapUrl);

  return (
    <PageTransition>
      {/* ====================================================================
          1. CONTACT HERO (Phase 05, Section 2 & 3)
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="Contact Hero">
        <Container>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.heroEyebrow}>
                <span className="yp-tag-dot" aria-hidden="true" />
                <span>Contact Yogesh Plastics</span>
              </div>

              <h1 className={styles.heroTitle}>
                Let&apos;s find the right shade solution.
              </h1>

              <p className={styles.heroSubtitle}>
                Tell us what you&apos;re working with, and share a little about your
                requirement. Our team responds directly with product
                specifications, shade factor guidance, and supply availability.
              </p>
            </div>

            <div className={styles.heroVisualContainer}>
              <Image
                src="/images/shade-net-canopy.jpg"
                alt="Green shade canopy structure installed over an outdoor space"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={styles.heroImage}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          2. MAIN FORM & DIRECT CONTACT INFORMATION (Sections 4–11)
          ==================================================================== */}
      <section className={styles.mainSection} aria-label="Enquiry Form and Details">
        <Container>
          <div className={styles.interactionGrid}>
            {/* LEFT: Premium Enquiry Form Card */}
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>Product & Project Enquiry</h2>
                <p className={styles.formSubtitle}>
                  Please fill out the details below. We will review your application
                  and recommend the appropriate material and density.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* RIGHT: Contact Information & Central Configuration */}
            <div className={styles.sidebar}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Direct Contact Channels</h3>

                <div className={styles.infoList}>
                  {/* Phone */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon} aria-hidden="true">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Telephone</span>
                      {phoneHref ? (
                        <a href={phoneHref} className={styles.contactLinkValue}>
                          {SITE_CONFIG.contact.phone}
                        </a>
                      ) : (
                        <span className={styles.placeholderPill}>
                          {SITE_CONFIG.contact.phoneDisplay}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon} aria-hidden="true">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Email Inquiries</span>
                      {emailHref ? (
                        <a href={emailHref} className={styles.contactLinkValue}>
                          {SITE_CONFIG.contact.email}
                        </a>
                      ) : (
                        <span className={styles.placeholderPill}>
                          {SITE_CONFIG.contact.emailDisplay}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon} aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>Manufacturing & Office</span>
                      {locationHref ? (
                        <a
                          href={locationHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contactLinkValue}
                        >
                          {SITE_CONFIG.contact.location}
                        </a>
                      ) : (
                        <span className={styles.placeholderPill}>
                          {SITE_CONFIG.contact.locationDisplay}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon} aria-hidden="true">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className={styles.infoLabel}>WhatsApp Inquiries</span>
                      {whatsappHref ? (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contactLinkValue}
                        >
                          {SITE_CONFIG.contact.whatsapp}
                        </a>
                      ) : (
                        <span className={styles.placeholderPill}>
                          {SITE_CONFIG.contact.whatsappDisplay}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Support & Notice */}
              <div className={styles.whatsappCard}>
                <div className={styles.whatsappHeader}>
                  <ShieldCheck size={20} color="var(--color-green-primary)" />
                  <span>Direct Manufacturer Assistance</span>
                </div>
                <p className={styles.whatsappNotice}>
                  All enquiries are handled directly by our production and sales
                  coordinators to ensure accurate dimensioning and material
                  selection for your installation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ====================================================================
          3. WHAT TO INCLUDE GUIDANCE SECTION (Section 15)
          ==================================================================== */}
      <section className={styles.guidanceSection} aria-label="What to Include Guidance">
        <Container>
          <div className={styles.guidanceHeader}>
            <div className="yp-tag" style={{ marginBottom: "14px" }}>
              <span className="yp-tag-dot" aria-hidden="true" />
              <span>Guidance</span>
            </div>
            <h2 className={styles.guidanceTitle}>What to Include</h2>
            <p className={styles.guidanceSubtitle}>
              To help us understand your requirement and offer the right guidance,
              you can mention:
            </p>
          </div>

          <div className={styles.guidanceList}>
            <div className={styles.guidanceItem}>
              <span className={styles.guidanceNumber}>01</span>
              <h3 className={styles.guidanceItemTitle}>Usage Setting</h3>
              <p className={styles.guidanceItemDesc}>
                Where the shade or netting will be installed — open field,
                polyhouse, parking lot, or architectural frame.
              </p>
            </div>

            <div className={styles.guidanceItem}>
              <span className={styles.guidanceNumber}>02</span>
              <h3 className={styles.guidanceItemTitle}>Dimensions & Area</h3>
              <p className={styles.guidanceItemDesc}>
                Approximate physical area, required roll widths, or estimated
                number of rolls needed for coverage.
              </p>
            </div>

            <div className={styles.guidanceItem}>
              <span className={styles.guidanceNumber}>03</span>
              <h3 className={styles.guidanceItemTitle}>Preferred Shade Level</h3>
              <p className={styles.guidanceItemDesc}>
                Desired solar reduction percentage (50%, 75%, 85%, 90%) or
                general daylight dampening goals.
              </p>
            </div>

            <div className={styles.guidanceItem}>
              <span className={styles.guidanceNumber}>04</span>
              <h3 className={styles.guidanceItemTitle}>Specific Requirements</h3>
              <p className={styles.guidanceItemDesc}>
                Any custom specifications, reinforced borders, or urgent delivery
                schedules for your project.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
}
