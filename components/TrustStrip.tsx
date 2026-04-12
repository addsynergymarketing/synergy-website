import { content, type Locale } from "@/content/site";

export default function TrustStrip({ locale }: { locale: Locale }) {
  const t = content[locale].trust;
  return (
    <section className="relative border-y border-white/10 bg-white/[0.02]">
      <div className="container-tight py-10 md:py-12">
        <p className="text-center text-sm md:text-base text-white/60 max-w-3xl mx-auto mb-8">
          {t.headline}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.pillars.map((p, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-display text-white text-base md:text-lg font-semibold">{p.k}</div>
              <div className="text-xs md:text-sm text-white/50 mt-1">{p.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
