import { content, type Locale } from "@/content/site";

export default function Services({ locale }: { locale: Locale }) {
  const t = content[locale].services;
  const anchor = locale === "de" ? "leistungen" : "services";
  return (
    <section id={anchor} className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-14 md:mb-16">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item) => (
            <article key={item.no} className="card relative overflow-hidden">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-sm font-semibold text-accent-blue tracking-wide">{item.no}</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 leading-relaxed text-[15px]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
