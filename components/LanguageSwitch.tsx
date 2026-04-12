"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/content/site";

export default function LanguageSwitch({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() || "/";
  const other: Locale = currentLocale === "de" ? "en" : "de";

  // Swap the leading /de or /en segment for the other locale.
  const target = pathname.replace(/^\/(de|en)/, `/${other}`) || `/${other}`;

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1 text-xs font-semibold">
      <Link
        href={`${pathname.startsWith(`/${currentLocale}`) ? pathname : `/${currentLocale}`}`}
        aria-current={currentLocale === "de" ? "page" : undefined}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          currentLocale === "de" ? "bg-white text-ink-900" : "text-white/70 hover:text-white"
        }`}
      >
        DE
      </Link>
      <Link
        href={target}
        aria-current={currentLocale === "en" ? "page" : undefined}
        className={`px-3 py-1.5 rounded-full transition-colors ${
          currentLocale === "en" ? "bg-white text-ink-900" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
