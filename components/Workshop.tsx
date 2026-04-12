import { content, type Locale } from "@/content/site";
import { ArrowRight, Check } from "./Icons";

export default function Workshop({ locale }: { locale: Locale }) {
  const t = content[locale].workshop;
  const newLabel = locale === "de" ? "Neu" : "New";
  return (
    <section id="workshop" className="section relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute right-[-18%] top-1/3 h-[620px] w-[620px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #504DFF, transparent 65%)" }}
        aria-hidden
      />
      <div
        className="absolute left-[-12%] bottom-[-10%] h-[480px] w-[480px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #854CFF, transparent 65%)" }}
        aria-hidden
      />

      <div className="container-tight relative">
        {/* Gradient border wrapper */}
        <div
          data-reveal
          className="relative rounded-[28px] p-[1.5px] bg-accent-gradient shadow-glow"
        >
          <div className="relative overflow-hidden rounded-[26px] bg-ink-900/95 p-8 md:p-12 lg:p-14 backdrop-blur-sm">
            {/* Subtle inner grid */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage:
                  "radial-gradient(ellipse 70% 60% at 80% 20%, #000 20%, transparent 80%)",
              }}
              aria-hidden
            />

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-7" data-reveal data-reveal-delay="1">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    {newLabel}
                  </span>
                  <div className="eyebrow">
                    <span className="h-px w-8 bg-white/30" />
                    {t.eyebrow}
                  </div>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/90">
                    {t.badge}
                  </span>
                </div>

                <h2 className="text-display-lg font-semibold text-white mb-5 leading-[1.05]">
                  {t.headline}
                </h2>
                <p className="text-white/75 text-lg leading-relaxed mb-7 max-w-xl">
                  {t.body}
                </p>

                <ul className="space-y-3 mb-8">
                  {t.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-[15px] text-white/85"
                    >
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

              <div className="lg:col-span-5" data-reveal data-reveal-delay="2">
                <div className="relative rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6 md:p-8 backdrop-blur-sm">
                  <div
                    className="absolute inset-x-0 -top-px h-px bg-accent-gradient opacity-70"
                    aria-hidden
                  />
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-2">
                    {t.eyebrow}
                  </div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-6xl md:text-7xl font-semibold bg-accent-gradient bg-clip-text text-transparent leading-none">
                      {t.price}
                    </span>
                  </div>
                  <div className="text-xs text-white/55 mb-6">{t.priceNote}</div>
                  <div className="h-px w-full bg-white/10 mb-6" />
                  <p className="text-sm text-white/75 leading-relaxed">
                    {t.credit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
