"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/site";
import { getLocalePath } from "@/lib/locale-paths";

export default function LanguageSwitch({
  currentLocale,
  onNavigate,
  variant = "default",
}: {
  currentLocale: Locale;
  onNavigate?: () => void;
  variant?: "default" | "mobile";
}) {
  const pathname = usePathname() || "/";
  const deHref = getLocalePath(pathname, "de");
  const enHref = getLocalePath(pathname, "en");

  const isMobile = variant === "mobile";

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] font-semibold ${
        isMobile ? "p-1.5 text-sm gap-1" : "p-1 text-xs"
      }`}
    >
      <Link
        href={deHref}
        prefetch
        onClick={onNavigate}
        aria-current={currentLocale === "de" ? "page" : undefined}
        aria-label="Deutsch"
        className={`rounded-full transition-colors ${
          isMobile ? "px-5 py-2.5" : "px-3 py-1.5"
        } ${
          currentLocale === "de"
            ? "bg-white text-ink-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        DE
      </Link>
      <Link
        href={enHref}
        prefetch
        onClick={onNavigate}
        aria-current={currentLocale === "en" ? "page" : undefined}
        aria-label="English"
        className={`rounded-full transition-colors ${
          isMobile ? "px-5 py-2.5" : "px-3 py-1.5"
        } ${
          currentLocale === "en"
            ? "bg-white text-ink-900"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
