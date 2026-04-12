import { content, type Locale, CONTACT } from "@/content/site";
import { Mail } from "./Icons";

export default function TopBar({ locale }: { locale: Locale }) {
  const t = content[locale].topBar;
  return (
    <div className="border-b border-white/5 bg-ink-900/60 text-[11px] md:text-xs">
      <div className="container-tight flex flex-col sm:flex-row items-center justify-between gap-1 py-2 text-white/55">
        <span className="hidden sm:block">{t.tagline}</span>
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="tracking-wide">{CONTACT.email}</span>
        </a>
      </div>
    </div>
  );
}
