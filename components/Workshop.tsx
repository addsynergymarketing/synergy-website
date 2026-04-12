import { content, type Locale } from "@/content/site";
import { ArrowRight, Check } from "./Icons";

export default function Workshop({ locale }: { locale: Locale }) {
  const t = content[locale].workshop;
  return (
    <section id="workshop" className="section-tight relative overflow-hidden">
      <div
        className="absolute right-[-12%] top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #504DFF, transparent 65%)" }}
        aria-hidden
      />
      <div className="container-tight relative">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 md:p-12 lg:p-14 backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <div className="eyebrow">
                  <span className="h-px w-8 bg-white/30" />
                  {t.eyebrow}
                </div>
                <span className="inline-flex items-center rounded-full border border-accent-blue/40 bg-accent-blue/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {t.badge}
                </span>
              </div>
              <h2 className="text-display-md font-semibold text-white mb-5">
                {t.headline}
              </h2>
              <p className="text-white/70 leading-relaxed mb-7 max-w-xl">
                {t.body}
              </p>

              <ul className="space-y-3 mb-8">
                {t.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-blue/20 text-accent-blue">
                      <Check className="h-3 w-3" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <a href="#kontakt" className="btn-primary">
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-6 md:p-8">
                <div className="text-xs uppercase tracking-wider text-white/50 mb-2">
                  {t.eyebrow}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-5xl md:text-6xl font-semibold bg-accent-gradient bg-clip-text text-transparent">
                    {t.price}
                  </span>
                </div>
                <div className="text-xs text-white/50 mb-6">{t.priceNote}</div>
                <div className="h-px w-full bg-white/10 mb-6" />
                <p className="text-sm text-white/70 leading-relaxed">
                  {t.credit}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
