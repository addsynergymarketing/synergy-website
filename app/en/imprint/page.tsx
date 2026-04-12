import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { CONTACT } from "@/content/site";

export const metadata: Metadata = { title: "Imprint" };

export default function Page() {
  return (
    <LegalLayout locale="en" title="Imprint">
      <p>Legal disclosure in accordance with Swiss information duties for service providers.</p>

      <h2>Company</h2>
      <p>
        <strong>Synergy Marketing</strong>
        <br />
        Owner: Chaled Al-Farhani
        <br />
        Switzerland
      </p>

      <h2>Contact</h2>
      <p>
        Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <br />
        Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
        <br />
        WhatsApp: <a href={CONTACT.whatsapp} target="_blank" rel="noopener">wa.me/41763936892</a>
      </p>

      <h2>Authorised representative</h2>
      <p>Chaled Al-Farhani, Managing Director</p>

      <h2>Disclaimer</h2>
      <p>
        The content of this website is prepared with the greatest possible care. However,
        we cannot guarantee the accuracy, completeness or timeliness of the information
        provided. Any use of this website is at the user's own risk. Liability claims
        against the provider for damages of a material or immaterial nature arising from
        access to, use or non-use of the content are excluded, except in cases of
        intentional or grossly negligent conduct.
      </p>

      <h2>Links</h2>
      <p>
        References and links to third-party websites lie outside our area of
        responsibility. Access to such pages is at the user's own risk. The operators of
        linked external pages are solely responsible for their content.
      </p>

      <h2>Copyright</h2>
      <p>
        All rights to content, images, photos and other files on this website belong
        exclusively to Synergy Marketing or the specifically named rights holders. Prior
        written consent of the rights holder is required for any reproduction.
      </p>

      <h2>Applicable law and jurisdiction</h2>
      <p>
        Any disputes in connection with this website are subject exclusively to Swiss law.
        Place of jurisdiction is the registered seat of the company in Switzerland.
      </p>
    </LegalLayout>
  );
}
