import { content, type Locale } from "@/content/site";

export default function SalesLogic({ locale }: { locale: Locale }) {
  const t = content[locale].salesLogic;
  return (
    <section className="section relative">
      <div className="container-tight relative">
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.body}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {t.cards.map((c, i) => (
            <div key={i} className="card group relative">
              <div className="flex items-baseline justify-between mb-5">
                <span className="text-5xl font-display text-transparent bg-clip-text bg-accent-gradient font-semibold">
                  {c.no}
                </span>
                <div className="h-px flex-1 ml-4 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-white/60 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
