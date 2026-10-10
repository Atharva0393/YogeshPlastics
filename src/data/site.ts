/**
 * YOGESH PLASTICS — CENTRAL SITE & CLIENT CONFIGURATION
 *
 * PRODUCTION ONBOARDING GUIDE:
 * To update company phone numbers, email addresses, physical location,
 * WhatsApp contact, or social profiles, edit the values below.
 *
 * Changes made in this file automatically update across the entire site
 * (Header, Footer, Contact Page, Metadata, Sitemap, etc.).
 *
 * Values set to null will gracefully display the configured placeholder
 * in the UI without generating broken/fake links.
 */

export interface ContactConfig {
  phone: string | null;
  phoneDisplay: string;
  email: string | null;
  emailDisplay: string;
  whatsapp: string | null;
  whatsappDisplay: string;
  location: string | null;
  locationDisplay: string;
  locationMapUrl: string | null;
}

export interface SocialLinks {
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
}

export interface SiteConfig {
  companyName: string;
  brandTagline: string;
  shortDescription: string;
  description: string;
  siteUrl: string;
  contact: ContactConfig;
  socialLinks: SocialLinks;
}

export const SITE_CONFIG: SiteConfig = {
  companyName: "Yogesh Plastics",
  brandTagline: "Shade & Protective Netting Solutions",
  shortDescription:
    "Knitted polyethylene shade netting and protective agricultural mesh engineered for climate control and solar attenuation.",
  description:
    "Manufacturer of premium shade netting, shade cloth, and protective agro netting solutions for agriculture, horticulture, and architectural installations.",
  siteUrl: "https://yogeshplastics.com",

  contact: {
    // Populated once official client details are verified
    phone: null,
    phoneDisplay: "[Client Phone]",

    email: null,
    emailDisplay: "[Client Email]",

    whatsapp: null,
    whatsappDisplay: "[Client WhatsApp]",

    location: null,
    locationDisplay: "[Client Location]",
    locationMapUrl: null,
  },

  socialLinks: {
    linkedin: null,
    twitter: null,
    facebook: null,
    instagram: null,
  },
};

/**
 * Safe link helper utilities.
 * Returns null if the value is unconfigured, preventing fake or broken links.
 */
export function getPhoneHref(phone: string | null): string | null {
  if (!phone) return null;
  const digits = phone.replace(/[^+\d]/g, "");
  return digits ? `tel:${digits}` : null;
}

export function getEmailHref(email: string | null): string | null {
  if (!email) return null;
  return `mailto:${email.trim()}`;
}

export function getWhatsAppHref(
  whatsapp: string | null,
  initialMessage?: string
): string | null {
  if (!whatsapp) return null;
  const digits = whatsapp.replace(/\D/g, "");
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  return initialMessage
    ? `${base}?text=${encodeURIComponent(initialMessage)}`
    : base;
}

export function getLocationHref(mapUrl: string | null): string | null {
  return mapUrl || null;
}
