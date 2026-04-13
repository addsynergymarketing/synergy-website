import type { Locale } from "@/content/site";

const ctas = {
  de: {
    contact: {
      headline: "Bereit, Ihren Vertrieb auf das nächste Level zu bringen?",
      cta: "Kostenlos beraten lassen",
      href: "#kontakt",
    },
    workshop: {
      headline: "In 4 Stunden zum Wachstumsfahrplan",
      cta: "Workshop buchen · 690 CHF",
      href: "#workshop",
    },
    process: {
      headline: "Erfahren Sie, wie wir Unternehmen systematisch skalieren",
      cta: "Projekt starten",
      href: "#kontakt",
    },
  },
  en: {
    contact: {
      headline: "Ready to take your sales to the next level?",
      cta: "Get a free consultation",
      href: "#kontakt",
    },
    workshop: {
      headline: "Get your growth roadmap in 4 hours",
      cta: "Book workshop · CHF 690",
      href: "#workshop",
    },
    process: {
      headline: "Discover how we systematically scale businesses",
      cta: "Start your project",
      href: "#kontakt",
    },
  },
};

type Variant = "contact" | "workshop" | "process";

export default function CTABanner({
  locale,
  variant = "contact",
}: {
  locale: Locale;
  variant?: Variant;
}) {
  const t = ctas[locale][variant];

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/[0.03] to-transparent" />

      <div className="container-tight relative text-center">
        <p className="text-lg md:text-xl text-white/70 mb-6 max-w-xl mx-auto leading-relaxed">
          {t.headline}
        </p>
        <a
          href={t.href}
          className="btn-primary inline-flex items-center gap-2 text-base md:text-lg px-8 py-4"
        >
          {t.cta}
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
