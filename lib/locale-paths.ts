import type { Locale } from "@/content/site";

/**
 * Maps between the DE and EN versions of localised legal routes.
 * The home pages (/de and /en) use simple prefix swapping; legal
 * pages are renamed across locales so we explicitly map them here.
 */
const LEGAL_PAIRS: Array<{ de: string; en: string }> = [
  { de: "/de/impressum", en: "/en/imprint" },
  { de: "/de/agb", en: "/en/terms" },
  { de: "/de/datenschutz", en: "/en/privacy" },
];

export function getLocalePath(pathname: string, target: Locale): string {
  // Strip hash + query + trailing slash for matching
  const clean =
    pathname.split("#")[0].split("?")[0].replace(/\/+$/, "") || "/";

  // Known legal route? Use explicit mapping.
  for (const pair of LEGAL_PAIRS) {
    if (clean === pair.de || clean === pair.en) {
      return pair[target];
    }
  }

  // Localised prefix swap (/de/* <-> /en/*)
  if (/^\/(de|en)(\/|$)/.test(clean)) {
    return clean.replace(/^\/(de|en)/, `/${target}`);
  }

  // Fallback: jump to the target locale home
  return `/${target}`;
}
