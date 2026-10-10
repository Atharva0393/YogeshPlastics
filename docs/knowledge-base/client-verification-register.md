# Yogesh Plastics — Client Verification Register & Business Questionnaire

**Document Status:** Pending Client Ratification  
**Date:** October 2026  
**Auditor:** Senior Full-Stack Engineer & Governance Architect  

> **Policy Directive:** Only verified facts may be published on the Yogesh Plastics website as confirmed company capabilities. Where evidence is incomplete, safe non-quantified statements are used in production, and the underlying factual dependencies are tracked in this register.

---

## 1. Status Definition Legend

- **`verified`**: Confirmed by repository code or verified client brief.
- **`client-confirmation-required`**: High commercial or technical importance; requires written confirmation from the Yogesh Plastics business owner before publishing exact figures.
- **`reference-only`**: Discovered from industry benchmark sources (e.g., Agriplast); useful as general context but must NOT be claimed as Yogesh Plastics specific.
- **`unknown`**: No data currently available.

---

## 2. Factual Verification Register

| ID | Subject / Question | Why It Matters | Current Evidence | Confirmation Status | Pages Affected | Required Next Action |
| :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| **CV-01** | **Official Contact Phone Number** | Critical for customer phone calls and inquiry routing. | Stored in `src/data/site.ts` with placeholder `[Client Phone]`; href returns `null` safely. | `client-confirmation-required` | Header, Footer, Contact, Layout | Collect official business phone number from owner. |
| **CV-02** | **Official Business Email** | Required for quotation requests and automated alerts. | Stored in `src/data/site.ts` with placeholder `[Client Email]`; href returns `null`. | `client-confirmation-required` | Header, Footer, Contact | Collect primary sales/support email. |
| **CV-03** | **Official Physical Address & Plant Location** | Establishes geographical legitimacy and local B2B trust. | Stored in `src/data/site.ts` with placeholder `[Client Location]`. | `client-confirmation-required` | Footer, Contact, About | Collect registered office & factory address. |
| **CV-04** | **WhatsApp Business Number** | High-conversion B2B channel in Indian agriculture. | Stored in `src/data/site.ts` with placeholder `[Client WhatsApp]`. | `client-confirmation-required` | Contact, Footer | Collect active WhatsApp number for direct chat link. |
| **CV-05** | **Exact Product Range & SKUs** | Determines whether additional catalog items should be listed. | 4 catalog products in `products.ts` (50%, 75%, 90%, Architectural). | `verified` (for current 4 items); `client-confirmation-required` (for any new variants) | `/products`, `/products/[slug]`, `/` | Confirm whether 35% agricultural net or insect mesh are also stocked. |
| **CV-06** | **Exact GSM per Product SKU** | Key specification demanded by experienced farmers and greenhouse builders. | Stated as "Available upon enquiry" to prevent inventing fabricated GSM values. | `client-confirmation-required` | `/products/[slug]`, `/products` | Obtain certified GSM weight for each shade net density. |
| **CV-07** | **Knitting Construction (Tape vs. Mono)** | Affects wind resistance, tear strength, and agricultural positioning. | Described generically as "Knitted Polyethylene Mesh" and "Lock-Stitch Weave". | `client-confirmation-required` | `/products/[slug]`, `/` | Confirm whether 50% & 75% are Tape x Tape, Mono x Mono, or Hybrid. |
| **CV-08** | **UV Stabilization Warranty Terms** | Legal and commercial liability; must not promise unverified multi-year guarantees. | Stated safely as "UV-Stabilized for Outdoor Longevity" without promising specific year counts. | `client-confirmation-required` | `/products/[slug]`, `/`, `/about` | Confirm whether a formal 3-year or 5-year pro-rata warranty is backed by the plant. |
| **CV-09** | **Standard Roll Widths & Lengths in Stock** | Buyers need to plan bay coverage and order roll quantities. | Stated as "Standard roll sizes and custom dimensions supplied upon direct enquiry." | `client-confirmation-required` | `/products/[slug]`, `/products` | Confirm standard stocked widths (e.g., 3.0m, 4.2m, 6.2m) and lengths (50m, 100m). |
| **CV-10** | **BIS / ISO Certification (IS 16008)** | Some government agricultural subsidy schemes require BIS certification. | No certification claimed on site (safe posture). | `client-confirmation-required` | `/about`, `/products/[slug]` | Request BIS license number (IS 16008 Part 1/2) if certified; otherwise omit. |
| **CV-11** | **Manufacturing vs. Distribution Status** | Clarifies positioning in corporate copy ("Manufacturer" vs. "Supplier / Distributor"). | Currently framed as specialized manufacturer of shade netting. | `client-confirmation-required` | `/about`, `/` | Verify whether production is in-house extrusion/knitting or OEM fabrication. |
| **CV-12** | **Minimum Order Quantities (MOQ) & Dispatch** | Affects retail vs. wholesale inquiry qualification. | Framed for commercial rolls and project orders without hard MOQ barriers. | `client-confirmation-required` | `/contact`, `/products` | Confirm minimum order requirements and dispatch turnaround times. |

---

## 3. Safe Implementation Guidance for Development

1. **Continue using `src/data/site.ts`** as the single source of truth for all contact channels.
2. **Never hardcode unverified specifications:** Keep fields such as exact GSM and multi-year warranties non-numeric and customer-advisory until confirmed.
3. **Invite direct consultation:** When a user requires custom widths or exact lab tensile metrics, provide the prompt: *"Custom dimensions, exact GSM, and batch tensile data supplied upon direct enquiry."*
