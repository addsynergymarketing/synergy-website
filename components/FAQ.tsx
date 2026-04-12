"use client";
import { useState } from "react";
import { content, type Locale } from "@/content/site";

export default function FAQ({ locale }: { locale: Locale }) {
  const t = content[locale].faq;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-tight">
        <div className="max-w-3xl mb-14">
          <div className="eyebrow mb-4"><span className="h-px w-8 bg-white/30" />{t.eyebrow}</div>
          <h2 className="text-display-lg font-semibold text-white">{t.headline}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-white/25 bg-white/[0.04]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                >
                  <span className="font-display font-semibold text-white text-base md:text-lg">{item.q}</span>
                  <span
                    className={`h-7 w-7 flex-shrink-0 rounded-full border border-white/20 flex items-center justify-center text-white/70 transition-transform ${
                      isOpen ? "rotate-45 bg-accent-blue border-accent-blue text-white" : ""
                    }`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 md:px-6 pb-5 md:pb-6 text-white/65 leading-relaxed text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
