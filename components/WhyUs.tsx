import { content, type Locale } from "@/content/site";
import { Check, Minus } from "./Icons";

export default function WhyUs({ locale }: { locale: Locale }) {
  const t = content[locale].whyUs;
  const anchor = locale === "de" ? "warum-wir" : "why-us";
  return (
    <section id={anchor} className="section bg-white/[0.015]">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="card border-accent-blue/30 bg-accent-blue/[0.04]">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-accent-gradient flex items-center justify-center text-white">
                <Check className="h-4 w-4" />
              </div>
              <span className="font-display font-semibold text-white">{t.usLabel}</span>
            </div>
            <ul className="space-y-4">
              {t.rows.map((r, i) => (
                <li key={i} className="flex gap-3 text-white/85 leading-relaxed">
                  <Check className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span>{r.us}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                <Minus className="h-4 w-4" />
              </div>
              <span className="font-display font-semibold text-white/60">{t.themLabel}</span>
            </div>
            <ul className="space-y-4">
              {t.rows.map((r, i) => (
                <li key={i} className="flex gap-3 text-white/50 leading-relaxed">
                  <Minus className="h-5 w-5 text-white/30 flex-shrink-0 mt-0.5" />
                  <span>{r.them}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
