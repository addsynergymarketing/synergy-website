"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { content, type Locale } from "@/content/site";

const KEY = "sm_consent_v1";

export default function CookieBanner({ locale }: { locale: Locale }) {
  const t = content[locale].cookie;
  const nav = content[locale].nav;
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(KEY);
      if (!stored) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function decide(choice: "all" | "essential") {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ choice, ts: new Date().toISOString() })
      );
    } catch {}
    setShow(false);
    // Placeholder: future tracking init would read localStorage[KEY] on mount.
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.title}
      className="fixed bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-50 animate-[fadeUp_.4s_ease-out]"
    >
      <div className="rounded-2xl border border-white/15 bg-ink-800/95 backdrop-blur-xl shadow-soft p-5 md:p-6">
        <h3 className="font-display font-semibold text-white mb-2">{t.title}</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">{t.body}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <button onClick={() => decide("all")} className="btn-primary text-xs py-2.5 px-4 w-full sm:w-auto">
            {t.accept}
          </button>
          <button onClick={() => decide("essential")} className="btn-secondary text-xs py-2.5 px-4 w-full sm:w-auto">
            {t.decline}
          </button>
          <Link href={nav.legal.datenschutz.href} className="btn-ghost text-xs py-2.5 px-4 w-full sm:w-auto">
            {t.more}
          </Link>
        </div>
      </div>
    </div>
  );
}
