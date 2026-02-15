"use client";

import MarkdownPage from "@/src/components/MarkdownPage";

const content = `
**Effective Date:** ${new Date().toLocaleDateString()}

## 1. Acceptance of Terms

By accessing or using the Dr. Malot Dental Clinic website ("Site"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.

## 2. Use of the Site

You agree to use the Site for lawful purposes only and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site.

## 3. Medical Disclaimer

The content on this Site is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.

## 4. Intellectual Property

All content on this Site, including text, graphics, logos, and images, is the property of Dr. Malot Dental Clinic or its content suppliers and is protected by copyright laws.

## 5. Limitation of Liability

Dr. Malot Dental Clinic shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Site.

## 6. External Links

Our Site may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.

## 7. Changes to Terms

We reserve the right to modify these Terms of Service at any time. Your continued use of the Site after any changes indicates your acceptance of the new terms.

## 8. Contact Us

If you have any questions about these Terms of Service, please contact us at:

- **Email:** drmalotdentalclinic@gmail.com
- **Phone:** +91 98284 23669
- **Address:** 1st Floor, 24-C Sohan Bhawan, Opp. Madhuvan Head Post Office, Chetak Circle, Udaipur 313001
`;

export default function TermsOfService() {
  return (
    <MarkdownPage
      title="Terms of Service"
      content={content}
      lastUpdated={new Date().toLocaleDateString()}
    />
  );
}
