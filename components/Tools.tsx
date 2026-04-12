import { content, type Locale } from "@/content/site";

export default function Tools({ locale }: { locale: Locale }) {
  const t = content[locale].tools;
  return (
    <section className="section-tight bg-white/[0.015]">
      <div className="container-tight">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
            <h2 className="text-display-md font-semibold text-white mb-5">{t.headline}</h2>
            <p className="text-white/65 leading-relaxed">{t.body}</p>
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2.5">
              {t.list.map((x) => (
                <span key={x} className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 hover:border-white/25 hover:text-white transition-colors">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
