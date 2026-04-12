import { content, type Locale } from "@/content/site";

export default function Process({ locale }: { locale: Locale }) {
  const t = content[locale].process;
  const anchor = locale === "de" ? "prozess" : "process";
  return (
    <section id={anchor} className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white mb-6">{t.headline}</h2>
          <p className="text-lg text-white/65 leading-relaxed">{t.lead}</p>
        </div>

        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" aria-hidden />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
            {t.phases.map((p) => (
              <div key={p.no} className="relative">
                <div className="flex items-center justify-center h-20 w-20 rounded-2xl bg-accent-gradient text-white font-display text-3xl font-bold mb-6 shadow-glow">
                  {p.no}
                </div>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed mb-4 text-[15px]">{p.body}</p>
                <div className="inline-flex items-center gap-2 text-xs text-white/50 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.02]">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-blue" />
                  {p.timing}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
