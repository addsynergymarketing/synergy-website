"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { content, type Locale, CONTACT } from "@/content/site";
import { Menu, Close } from "./Icons";
import LanguageSwitch from "./LanguageSwitch";

export default function Navigation({ locale }: { locale: Locale }) {
  const t = content[locale].nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-900/80 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container-tight flex items-center justify-between py-4 md:py-5">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Synergy Marketing">
          <Image
            src="/logo-white.png"
            alt="Synergy Marketing"
            width={320}
            height={72}
            priority
            sizes="(min-width: 1024px) 280px, 200px"
            className="h-14 sm:h-16 md:h-20 lg:h-[88px] w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {t.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/75 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitch currentLocale={locale} />
          <a href="#kontakt" className="btn-primary">
            {t.cta}
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full z-[9999] bg-ink-900 flex flex-col lg:hidden" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999 }}>
          <div className="container-tight flex items-center justify-between py-4">
            <Image src="/logo-white.png" alt="Synergy Marketing" width={320} height={72} className="h-14 sm:h-16 w-auto" />
            <button className="p-2 text-white" aria-label="Close" onClick={() => setOpen(false)}>
              <Close className="h-6 w-6" />
            </button>
          </div>

          {/* Language switch prominent at top */}
          <div className="container-tight flex items-center gap-3 pb-4">
            <LanguageSwitch currentLocale={locale} onNavigate={() => setOpen(false)} variant="mobile" />
          </div>

          <div className="container-tight flex-1 flex flex-col justify-between pt-4 pb-10 overflow-y-auto">
            <div className="flex flex-col gap-6">
              {t.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-display text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4 mt-8">
              <a href="#kontakt" onClick={() => setOpen(false)} className="btn-primary w-full">
                {t.cta}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-sm text-white/60 text-center">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
