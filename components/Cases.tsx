import { content, type Locale } from "@/content/site";
import { ArrowRight } from "./Icons";

export default function Cases({ locale }: { locale: Locale }) {
  const t = content[locale].cases;
  const anchor = locale === "de" ? "ergebnisse" : "results";
  return (
    <section id={anchor} className="section bg-white/[0.015]">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {t.items.map((c, i) => (
            <article key={i} className="card group">
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold text-accent-blue border border-accent-blue/30 bg-accent-blue/5 rounded-full px-2.5 py-1 mb-5">
                {c.tag}
              </span>
              <h3 className="text-lg md:text-xl font-display font-semibold text-white mb-3 leading-snug">{c.title}</h3>
              <p className="text-white/60 leading-relaxed text-[15px]">{c.body}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <p className="text-lg font-display text-white">{t.close}</p>
          <a href="#kontakt" className="btn-primary">
            {t.cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
