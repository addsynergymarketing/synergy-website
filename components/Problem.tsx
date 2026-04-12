import { content, type Locale } from "@/content/site";
import { ArrowRight, Minus } from "./Icons";

export default function Problem({ locale }: { locale: Locale }) {
  const t = content[locale].problem;
  return (
    <section className="section bg-gradient-to-b from-ink-900 via-ink-800 to-ink-900 relative">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-12">
          {t.points.map((p, i) => (
            <div key={i} className="card flex gap-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-accent-blue/10 border border-accent-blue/30 flex items-center justify-center text-accent-blue">
                <Minus className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-white/60 leading-relaxed text-[15px]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <p className="text-xl md:text-2xl text-white font-display font-medium mb-6 leading-snug">
            {t.close}
          </p>
          <a href="#kontakt" className="btn-primary">
            {t.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
