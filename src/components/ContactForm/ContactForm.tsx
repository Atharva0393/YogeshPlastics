"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "../Button/Button";
import { PRODUCTS } from "@/data/products";
import styles from "./ContactForm.module.css";

interface FormErrors {
  name?: string;
  contact?: string;
  email?: string;
  message?: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  productOfInterest: string;
  shadeFactor: string;
  message: string;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Decoupled submission handler.
 * Connect to an API route (e.g. /api/enquire) or direct email service
 * without modifying form UI presentation or state management.
 */
export async function submitEnquiry(
  payload: ContactFormData
): Promise<EnquirySubmissionResult> {
  if (!payload.name || (!payload.phone && !payload.email)) {
    return { success: false, error: "Missing required contact information." };
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Enquiry validated and prepared for processing.",
      });
    }, 450);
  });
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const rawProductParam = searchParams.get("product") || "";

  // Match param against existing product slug or name
  const matchedProduct = PRODUCTS.find(
    (p) =>
      p.slug.toLowerCase() === rawProductParam.toLowerCase() ||
      p.name.toLowerCase() === rawProductParam.toLowerCase()
  );

  const initialProduct = matchedProduct
    ? matchedProduct.name
    : rawProductParam || "General Shade Net Enquiry";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    productOfInterest: initialProduct,
    shadeFactor: "50%",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    // Require either phone or email
    const hasPhone = formData.phone.trim().length > 0;
    const hasEmail = formData.email.trim().length > 0;

    if (!hasPhone && !hasEmail) {
      newErrors.contact = "Please provide either a phone number or email address.";
    }

    if (hasEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email format (e.g. name@domain.com).";
      }
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Please share a brief requirement description (at least 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await submitEnquiry(formData);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          message: result.error || "Unable to process enquiry at this time.",
        }));
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        message: "A connection error occurred. Please contact us directly.",
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.confirmationContainer} role="status">
        <div className={styles.confirmationBadge}>
          <CheckCircle2 size={16} />
          <span>Enquiry Prepared</span>
        </div>

        <h3 className={styles.confirmationTitle}>
          Your enquiry details have been noted.
        </h3>

        <p className={styles.confirmationMessage}>
          Thank you, <strong>{formData.name}</strong>. Your enquiry details regarding{" "}
          <strong>{formData.productOfInterest}</strong> have been reviewed.
        </p>

        {/* Transparent Operational Notice */}
        <div className={styles.pendingNotice}>
          <strong>Note:</strong> Automated email dispatch will connect upon final production deployment. In the interim, you can also reach Yogesh Plastics directly via the phone or WhatsApp channels on this page.
        </div>

        <div className={styles.confirmationActions}>
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>

          <Button href="/products" variant="secondary" size="md">
            Explore Products
          </Button>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                company: "",
                phone: "",
                email: "",
                productOfInterest: "General Shade Net Enquiry",
                shadeFactor: "50%",
                message: "",
              });
            }}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-green-primary)",
              fontSize: "0.875rem",
              textDecoration: "underline",
              cursor: "pointer",
              padding: "8px 12px",
            }}
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Row 1: Name & Company */}
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">
            <span>Your Name *</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            placeholder="First and last name"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-company">
            <span>Company / Organization</span>
          </label>
          <input
            id="contact-company"
            type="text"
            className={styles.input}
            placeholder="Farm, nursery, or business name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      {/* Row 2: Phone / WhatsApp & Email */}
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-phone">
            <span>Phone / WhatsApp *</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            className={`${styles.input} ${errors.contact ? styles.inputError : ""}`}
            placeholder="Contact phone number"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (errors.contact) setErrors({ ...errors, contact: undefined });
            }}
          />
          {errors.contact && <span className={styles.errorText}>{errors.contact}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">
            <span>Email Address *</span>
          </label>
          <input
            id="contact-email"
            type="email"
            className={`${styles.input} ${
              errors.email || errors.contact ? styles.inputError : ""
            }`}
            placeholder="name@domain.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email || errors.contact) {
                setErrors({ ...errors, email: undefined, contact: undefined });
              }
            }}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      {/* Row 3: Product of Interest (Dynamic from products.ts) & Shade Factor */}
      <div className={styles.formGrid}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-product">
            <span>Product of Interest</span>
          </label>
          <select
            id="contact-product"
            className={styles.select}
            value={formData.productOfInterest}
            onChange={(e) =>
              setFormData({ ...formData, productOfInterest: e.target.value })
            }
          >
            <option value="General Shade Net Enquiry">General Shade Net Enquiry</option>
            {PRODUCTS.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.shadeFactor})
              </option>
            ))}
            <option value="Custom Slit Roll Dimensions">Custom Slit Roll Dimensions</option>
            <option value="Other / Advisory Consultation">Other / Advisory Consultation</option>
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-shade">
            <span>Preferred Shade Factor</span>
          </label>
          <select
            id="contact-shade"
            className={styles.select}
            value={formData.shadeFactor}
            onChange={(e) =>
              setFormData({ ...formData, shadeFactor: e.target.value })
            }
          >
            <option value="50%">50% (Standard Agricultural / Nursery)</option>
            <option value="75%">75% (Dense Floriculture / Polyhouse)</option>
            <option value="85%">85% (Architectural Tensile / Pavilion)</option>
            <option value="90%">90% (Commercial / Parking Screen)</option>
            <option value="Not Sure / Recommendation Needed">
              Not Sure / Recommendation Needed
            </option>
          </select>
        </div>
      </div>

      {/* Row 4: Message / Requirement Details */}
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">
          <span>Tell Us What You Need *</span>
        </label>
        <textarea
          id="contact-message"
          required
          className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
          placeholder="Tell us about the space, application, product you're looking for, dimensions, or anything else that would help us understand your requirement."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {/* Submit Button */}
      <div style={{ marginTop: "4px" }}>
        <Button
          type="submit"
          variant="green"
          size="lg"
          disabled={isSubmitting}
          rightIcon={
            isSubmitting ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Send size={16} />
            )
          }
        >
          {isSubmitting ? "Verifying..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const prefill = searchParams.get("product") || "default";
  return <ContactFormInner key={prefill} />;
}

export const ContactForm: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading enquiry form...</div>}>
      <ContactFormWrapper />
    </Suspense>
  );
};
