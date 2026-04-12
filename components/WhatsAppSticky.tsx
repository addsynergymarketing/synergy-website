"use client";
import { CONTACT, content, type Locale } from "@/content/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppSticky({ locale }: { locale: Locale }) {
  const t = content[locale].whatsapp;
  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.aria}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 group"
    >
      <span className="flex items-center gap-2.5 rounded-full bg-white text-ink-900 shadow-[0_18px_60px_-15px_rgba(80,77,255,0.6)] hover:shadow-[0_24px_80px_-15px_rgba(80,77,255,0.8)] transition-all duration-300 pl-4 pr-5 py-3 md:py-3.5 border border-white/80 hover:-translate-y-0.5">
        <span className="flex h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-4 w-4 md:h-4.5 md:w-4.5" />
        </span>
        <span className="hidden sm:inline text-sm font-semibold">{t.label}</span>
      </span>
    </a>
  );
}
