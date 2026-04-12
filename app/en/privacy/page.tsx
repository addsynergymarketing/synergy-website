import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = { title: "Privacy" };

export default function Page() {
  return (
    <LegalLayout locale="en" title="Privacy Policy">
      <p>
        The binding version of our privacy policy is the German one
        (<a href="/de/datenschutz">Datenschutz</a>). This is an English convenience summary.
      </p>

      <h2>1. Data controller</h2>
      <p>
        Synergy Marketing, owner Chaled Al-Farhani, Switzerland. Contact:{" "}
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>2. Data we process</h2>
      <p>
        We process the data you share with us when you contact us or work with us:
        name, company, email, phone and any information you actively provide.
      </p>

      <h2>3. Purposes</h2>
      <ul>
        <li>Responding to enquiries and preparing intro calls</li>
        <li>Fulfilling contracts and delivering projects</li>
        <li>Client communication, project organisation, invoicing</li>
        <li>Improving our services and website</li>
        <li>Complying with legal obligations</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        We currently use only technically necessary cookies. Optional analytics or
        marketing cookies only activate with your explicit consent via our consent
        element. Your choice is stored locally in your browser.
      </p>

      <h2>5. Tracking</h2>
      <p>
        At the time of writing, no third-party tracking or analytics tools are active.
        Any future use of such services will be based on your consent and reflected
        here.
      </p>

      <h2>6. Contact form and email</h2>
      <p>
        Information you submit via contact form or email is stored to handle your
        enquiry and any follow-up. It is kept only as long as necessary.
      </p>

      <h2>7. Third parties</h2>
      <p>
        Data is only shared with third parties where necessary to deliver our
        services, where we are legally required, or where you have consented.
        Processors (hosting, CRM, email) are required to meet data-protection
        standards.
      </p>

      <h2>8. Security</h2>
      <p>
        We take appropriate technical and organisational measures to protect your
        data. The website is served over HTTPS.
      </p>

      <h2>9. Your rights</h2>
      <p>
        You have the right to access, correct, delete or restrict the processing of
        your personal data, to object to processing and to withdraw consent at any
        time with effect for the future.
      </p>

      <h2>10. Contact</h2>
      <p>
        Privacy enquiries: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
      </p>

      <h2>11. Changes</h2>
      <p>
        We may update this policy to reflect changes to our website or legal
        requirements. The current version is always available on this page.
      </p>
    </LegalLayout>
  );
}
