import { content, type Locale } from "@/content/site";

export default function Testimonials({ locale }: { locale: Locale }) {
  const t = content[locale].testimonials;
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white">{t.headline}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.items.map((q, i) => (
            <blockquote key={i} className="card flex flex-col">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-accent-blue/60 mb-4" fill="currentColor">
                <path d="M9.17 6A6.17 6.17 0 0 0 3 12.17V18h5.83v-5.83H5.5a3.67 3.67 0 0 1 3.67-3.67V6zm11 0a6.17 6.17 0 0 0-6.17 6.17V18h5.83v-5.83H16.5a3.67 3.67 0 0 1 3.67-3.67V6z" />
              </svg>
              <p className="text-white/80 leading-relaxed text-[15px] md:text-base">&ldquo;{q.quote}&rdquo;</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
