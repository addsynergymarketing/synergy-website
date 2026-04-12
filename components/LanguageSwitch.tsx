"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/site";
import { getLocalePath } from "@/lib/locale-paths";

export default function LanguageSwitch({
  currentLocale,
  onNavigate,
}: {
  currentLocale: Locale;
  onNavigate?: () => void;
}) {
  const pathname = usePathname() || "/";
  const deHref = getLocalePath(pathname, "de");
  const enHref = getLocalePath(pathname, "en");

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-semibold">
      <Link
        href={deHref}
        prefetch
        onClick={onNavigate}
        aria-current={currentLocale === "de" ? "page" : undefined}
        aria-label="Deutsch"
        className={`px-3 py-1.5 rounded-full transition-colors ${
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
        className={`px-3 py-1.5 rounded-full transition-colors ${
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
