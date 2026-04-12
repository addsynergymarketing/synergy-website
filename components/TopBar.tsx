import { content, type Locale, CONTACT } from "@/content/site";
import { Mail } from "./Icons";

export default function TopBar({ locale }: { locale: Locale }) {
  const t = content[locale].topBar;
  const promo =
    locale === "de"
      ? "Neu: Wachstums-Intensivworkshop — Ihr Wachstumsfahrplan in 4 Stunden · 690 CHF"
      : "New: Growth Intensive — your roadmap in 4 hours · CHF 690";
  return (
    <div className="border-b border-white/5 bg-ink-900/60 text-[11px] md:text-xs">
      <a
        href="#workshop"
        className="group block border-b border-white/5 bg-accent-gradient/10"
        style={{
          background:
            "linear-gradient(90deg, rgba(80,77,255,0.14), rgba(133,76,255,0.14))",
        }}
      >
        <div className="container-tight flex items-center justify-center gap-2 py-2 text-white/90">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-medium tracking-wide">{promo}</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-white/70 group-hover:text-white transition-colors">
            →
          </span>
        </div>
      </a>
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-1 py-2 text-white/55">
        <span className="hidden sm:block">{t.tagline}</span>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="tracking-wide">{CONTACT.email}</span>
        </a>
      </div>
    </div>
  );
}
