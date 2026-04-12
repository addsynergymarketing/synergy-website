import { content, type Locale } from "@/content/site";
import { ArrowRight } from "./Icons";

export default function Hero({ locale }: { locale: Locale }) {
  const t = content[locale].hero;
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 h-[520px] bg-grid-fade"
        aria-hidden
      />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-40 blur-3xl animate-float-slow"
        style={{ background: "radial-gradient(circle, #504DFF 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute top-40 right-[-10%] h-[360px] w-[360px] rounded-full opacity-20 blur-3xl animate-float-slower"
        style={{ background: "radial-gradient(circle, #854CFF 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="container-tight relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="eyebrow justify-center mb-8 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-blue opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-blue" />
            </span>
            <span>{t.preHeadline}</span>
          </div>

          <h1 className="text-display-xl font-semibold text-white mb-8 animate-fade-up [animation-delay:.1s]">
            <span className="block">{t.headlineA}</span>
            <span className="block bg-accent-gradient bg-clip-text text-transparent">
              {t.headlineB}
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-white/70 mb-10 animate-fade-up [animation-delay:.2s]">
            {t.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-fade-up [animation-delay:.3s]">
            <a href="#kontakt" className="btn-primary w-full sm:w-auto">
              {t.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
            <a href={locale === "de" ? "#leistungen" : "#services"} className="btn-secondary w-full sm:w-auto">
              {t.secondaryCta}
            </a>
          </div>

          <p className="text-sm text-white/45 animate-fade-up [animation-delay:.4s]">{t.trust}</p>
        </div>
      </div>
    </section>
  );
}
