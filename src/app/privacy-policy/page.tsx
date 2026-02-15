"use client";

import MarkdownPage from "@/src/components/MarkdownPage";

const content = `
**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Introduction

Welcome to Dr. Malot Dental Clinic ("we," "our," or "us"). We are committed to protecting your privacy and ensuring your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.

## 2. Information We Collect

We only collect personal information that you voluntarily provide to us when you contact us or book an appointment through our Site. This may include:

- **Contact Details:** Name, email address, phone number, and any message or details you choose to provide in our contact or appointment forms.

## 3. How We Use Your Information

We use the information you provide solely for the following purposes:

- To respond to your inquiries and manage appointments.
- To communicate with you regarding your dental care.
- To comply with any legal obligations.

## 4. Sharing Your Information

We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.

## 5. Security

We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.

## 6. Your Rights

You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.

## 7. Changes to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.

## 8. Contact Us

If you have any questions about this Privacy Policy, please contact us at:

- **Email:** drmalotdentalclinic@gmail.com
- **Phone:** +91 98284 23669
- **Address:** 1st Floor, 24-C Sohan Bhawan, Opp. Madhuvan Head Post Office, Chetak Circle, Udaipur 313001
`;

export default function PrivacyPolicy() {
  return (
    <MarkdownPage
      title="Privacy Policy"
      content={content}
      lastUpdated={new Date().toLocaleDateString()}
    />
  );
}
