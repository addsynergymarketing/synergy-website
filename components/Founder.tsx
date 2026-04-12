import Image from "next/image";
import { content, type Locale } from "@/content/site";

export default function Founder({ locale }: { locale: Locale }) {
  const t = content[locale].founder;
  return (
    <section className="section relative overflow-hidden">
      <div
        className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #504DFF, transparent 70%)" }}
        aria-hidden
      />
      <div className="container-tight relative">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0">
              <div className="absolute -inset-3 rounded-2xl bg-accent-gradient opacity-30 blur-2xl" aria-hidden />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/founder.jpg"
                  alt={t.imageAlt}
                  fill
                  sizes="(max-width: 768px) 80vw, 40vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
            <h2 className="text-display-md font-semibold text-white mb-6">{t.headline}</h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
              &ldquo;{t.body}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-[2px] bg-accent-gradient rounded-full" />
              <div>
                <div className="font-display font-semibold text-white">{t.signature}</div>
                <div className="text-sm text-white/55">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
