import type { Locale } from "@/content/site";
import { CONTACT, content } from "@/content/site";

export default function JsonLd({ locale }: { locale: Locale }) {
  const faq = content[locale].faq.items.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  }));

  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT.company,
    url: `https://synergymarketing.ch/${locale}`,
    logo: "https://synergymarketing.ch/logo-white.png",
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
    },
    sameAs: [CONTACT.linkedin, CONTACT.instagram],
    founder: { "@type": "Person", name: CONTACT.owner },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
